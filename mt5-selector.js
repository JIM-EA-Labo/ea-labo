// mt5-selector.js
// ブラウザ側MT5検出・選択UI
// server.js が起動中の場合 → APIでMT5一覧を取得してドロップダウン表示
// server.js が未起動の場合 → 従来の手動パス入力欄を表示

(function () {
    'use strict';

    const API_BASE    = 'http://localhost:3747';
    const DETECT_URL  = `${API_BASE}/api/mt5/detect`;
    const BACKTEST_URL= `${API_BASE}/api/mt5/run-backtest`;

    let serverAvailable = false;
    let detectedMT5s    = [];
    let selectedMT5     = null;

    // =====================================================================
    // サーバー接続確認 + UI初期化
    // =====================================================================
    async function init() {
        const container = document.getElementById('mt5-selector-container');
        const manualDiv = document.getElementById('mt5-manual-paths');
        if (!container) return;

        try {
            const resp = await fetch(DETECT_URL, { signal: AbortSignal.timeout(2000) });
            if (!resp.ok) throw new Error('API error');
            detectedMT5s    = await resp.json();
            serverAvailable = true;

            renderSelector(container);
            if (manualDiv) manualDiv.style.display = 'none';

            // ONE-CLICKボタンを上書き
            overrideOneClickButton();

        } catch (_) {
            // サーバー未起動 → 従来UI（手動入力）をそのまま表示
            serverAvailable = false;
            if (manualDiv) manualDiv.style.display = '';
            container.innerHTML = `
                <div style="padding:10px; border:1px dashed #555; border-radius:8px; color:#aaa; font-size:0.85em; text-align:center;">
                    <span>💡 <strong>node server.js</strong> を起動するとMT5を自動検出して選択できます</span>
                </div>`;
        }
    }

    // =====================================================================
    // MT5セレクターUI描画
    // =====================================================================
    function renderSelector(container) {
        const items = detectedMT5s.map((mt5, i) => {
            const badge  = mt5.isRunning
                ? `<span style="color:#00b894; font-weight:bold;">🟢 起動中</span>`
                : `<span style="color:#aaa;">⚪ 未起動</span>`;
            const active = mt5.isRunning
                ? 'border-color:#00b894; background:rgba(0,184,148,0.07);'
                : 'border-color:#2a3050;';

            return `
            <label class="mt5-option" style="
                display:flex; align-items:center; gap:12px;
                padding:10px 14px; margin-bottom:8px; cursor:pointer;
                border:1px solid; border-radius:8px; ${active}
                transition:all 0.15s;
            ">
                <input type="radio" name="mt5-select" value="${i}" style="accent-color:#00b894;"
                    ${i === 0 ? 'checked' : ''}>
                <div style="flex:1;">
                    <div style="font-weight:600; color:#e0e0e0;">${mt5.label}</div>
                    <div style="font-size:0.78em; color:#aaa; word-break:break-all;">${mt5.installPath}</div>
                    <div style="font-size:0.78em; color:#888; margin-top:2px;">
                        最終活動: ${mt5.lastActive}　${badge}
                    </div>
                </div>
            </label>`;
        }).join('');

        container.innerHTML = `
            <div style="margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                <label class="form-label" style="color:#00b894; font-weight:bold; margin:0;">
                    🖥️ 使用するMT5を選択
                </label>
                <button id="mt5-refresh-btn" class="btn btn-outline-secondary"
                    style="padding:4px 10px; font-size:0.8em;">
                    🔄 再検出
                </button>
            </div>
            <div id="mt5-options">${items || '<p style="color:#aaa;">MT5のインストールが見つかりませんでした</p>'}</div>
        `;

        // 選択状態を更新
        selectedMT5 = detectedMT5s[0] || null;
        container.querySelectorAll('input[name="mt5-select"]').forEach(radio => {
            radio.addEventListener('change', () => {
                selectedMT5 = detectedMT5s[parseInt(radio.value)];
                highlightSelected(container);
            });
        });

        document.getElementById('mt5-refresh-btn')?.addEventListener('click', async () => {
            const btn = document.getElementById('mt5-refresh-btn');
            if (btn) { btn.disabled = true; btn.textContent = '検出中...'; }
            try {
                const resp = await fetch(DETECT_URL, { signal: AbortSignal.timeout(4000) });
                detectedMT5s = await resp.json();
                selectedMT5  = detectedMT5s[0] || null;
                renderSelector(container);
            } catch (_) {
                if (btn) btn.textContent = '❌ 失敗';
            } finally {
                if (btn) { btn.disabled = false; }
            }
        });

        highlightSelected(container);
    }

    function highlightSelected(container) {
        container.querySelectorAll('label.mt5-option').forEach((label, i) => {
            const radio = label.querySelector('input[type=radio]');
            if (radio?.checked) {
                label.style.borderColor = '#00b894';
                label.style.background  = 'rgba(0,184,148,0.1)';
            } else {
                const isRunning = detectedMT5s[i]?.isRunning;
                label.style.borderColor = isRunning ? '#00b894' : '#2a3050';
                label.style.background  = 'transparent';
            }
        });
    }

    // =====================================================================
    // ONE-CLICKボタンをAPI実行モードに上書き
    // =====================================================================
    function overrideOneClickButton() {
        // DOMが確実に存在するまで少し待つ
        const tryBind = () => {
            const btn = document.getElementById('run-one-click-mt5');
            if (!btn) { setTimeout(tryBind, 500); return; }

            btn.addEventListener('click', handleOneClickAPI, { capture: true });

            // ボタン下にサーバーモード表示
            const note = document.createElement('p');
            note.style.cssText = 'font-size:0.8em; color:#00b894; margin-top:6px; text-align:center;';
            note.textContent = '⚡ サーバーモード有効 — MT5に直接実行します';
            btn.parentNode?.insertBefore(note, btn.nextSibling);
        };
        setTimeout(tryBind, 800);
    }

    async function handleOneClickAPI(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        if (!selectedMT5) {
            alert('MT5が検出されていません。node server.js を起動してから再読み込みしてください。');
            return;
        }

        // eaState はグローバル変数（app_server.js で定義）
        if (typeof eaState === 'undefined') {
            alert('eaStateが見つかりません。アプリの読み込みを待ってから再度お試しください。');
            return;
        }

        // MQ5コードを生成
        let mqCode = '';
        try {
            mqCode = EAGenerator.generate(eaState);
        } catch (err) {
            alert('EAコード生成エラー: ' + err.message);
            return;
        }

        const btn = document.getElementById('run-one-click-mt5');
        const statusEl = document.getElementById('mt-config-status');
        const origText = btn?.textContent;

        if (btn) { btn.disabled = true; btn.textContent = '⏳ 実行中...'; }
        if (statusEl) { statusEl.innerHTML = '⏳ バックテストを準備中...'; statusEl.className = ''; }

        try {
            const payload = {
                installPath: selectedMT5.installPath,
                dataPath:    selectedMT5.dataPath,
                eaState: {
                    ...eaState,
                    mqCode,
                },
            };

            const resp = await fetch(BACKTEST_URL, {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(payload),
            });

            const result = await resp.json();

            if (result.success) {
                if (statusEl) {
                    statusEl.innerHTML = `✅ ${result.message}`;
                    statusEl.className = 'form-success';
                }
                if (typeof showToast === 'function') {
                    showToast(result.message, 'success');
                }
            } else {
                throw new Error(result.error || '不明なエラー');
            }
        } catch (err) {
            if (statusEl) {
                statusEl.innerHTML = `❌ エラー: ${err.message}`;
                statusEl.className = 'form-error';
            }
            if (typeof showToast === 'function') showToast('エラー: ' + err.message, 'error');
        } finally {
            if (btn) { btn.disabled = false; btn.textContent = origText; }
        }
    }

    // =====================================================================
    // エントリーポイント
    // =====================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 200);
    }

})();
