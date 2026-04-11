// ============================================================
// EA Labo Trial Mode Override  v1.0.0
// 体験版の制限を適用するスクリプト
// ============================================================
(function () {
  'use strict';

  // ---- CSS 注入 -----------------------------------------------
  const STYLE = `
    /* === 体験版ロックバッジ === */
    .trial-lock-badge {
      display: flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, rgba(255,80,80,0.10), rgba(255,140,60,0.08));
      border: 1px solid rgba(255,100,60,0.35);
      border-radius: 10px;
      padding: 12px 18px;
      margin-bottom: 18px;
      position: sticky;
      top: 8px;
      z-index: 100;
      backdrop-filter: blur(8px);
    }
    .trial-lock-badge-icon { font-size: 1.4rem; }
    .trial-lock-badge-body { flex: 1; }
    .trial-lock-badge-body strong {
      display: block;
      color: #ff9d6f;
      font-size: 0.9rem;
      margin-bottom: 2px;
    }
    .trial-lock-badge-body span {
      color: rgba(255,255,255,0.55);
      font-size: 0.8rem;
    }
    .trial-lock-badge-pill {
      background: rgba(255,100,60,0.18);
      color: #ff9d6f;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      border: 1px solid rgba(255,100,60,0.3);
    }

    /* === ステップ全体ロック === */
    .trial-step-blocked {
      position: relative;
    }
    .trial-step-blocked .trial-step-curtain {
      position: absolute;
      inset: 0;
      z-index: 50;
      cursor: not-allowed;
      background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 14px,
        rgba(0, 0, 0, 0.04) 14px,
        rgba(0, 0, 0, 0.04) 16px
      );
      border-radius: 12px;
      pointer-events: all;
    }
    /* ナビボタンは curtain の外にするためステップ内の nav-buttons は z-index を上げる */
    .trial-step-blocked .nav-buttons {
      position: relative;
      z-index: 60;
    }
    /* インプット類をグレーアウト（curtain 越しでも視覚的に分かるように） */
    .trial-step-blocked input,
    .trial-step-blocked select,
    .trial-step-blocked textarea,
    .trial-step-blocked .toggle-card,
    .trial-step-blocked .form-card {
      opacity: 0.45;
      pointer-events: none;
    }
    .trial-step-blocked .nav-buttons button {
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    /* === テンプレートカード ロック === */
    .trial-tpl-locked {
      position: relative;
      opacity: 0.38;
      pointer-events: none !important;
      filter: grayscale(0.55);
      cursor: not-allowed !important;
    }
    .trial-tpl-locked::after {
      content: '🔒';
      position: absolute;
      top: 10px;
      right: 12px;
      font-size: 1.1rem;
      z-index: 10;
    }
    .trial-tpl-locked .btn {
      background: rgba(80,80,100,0.35) !important;
      border-color: rgba(80,80,100,0.3) !important;
      color: rgba(255,255,255,0.25) !important;
    }

    /* === Step3 個別カード ロック === */
    .trial-card-locked {
      position: relative;
      opacity: 0.32;
      pointer-events: none !important;
      filter: grayscale(0.6);
      cursor: not-allowed !important;
    }
    .trial-card-locked::after {
      content: '🔒 体験版限定';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(15, 15, 30, 0.82);
      color: rgba(255,255,255,0.75);
      padding: 5px 14px;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      white-space: nowrap;
      border: 1px solid rgba(255,255,255,0.08);
      pointer-events: none;
      z-index: 30;
    }

    /* === 体験版ヘッダーバナー === */
    .trial-header-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: linear-gradient(90deg, rgba(255,80,60,0.15), rgba(255,140,60,0.12));
      border: 1px solid rgba(255,100,60,0.3);
      border-radius: 8px;
      padding: 7px 16px;
      font-size: 0.82rem;
      color: #ff9d6f;
      font-weight: 600;
      margin-top: 8px;
      letter-spacing: 0.03em;
    }
    .trial-header-banner span { color: rgba(255,255,255,0.5); font-weight: 400; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = STYLE;
  document.head.appendChild(styleEl);

  // ---- ユーティリティ -----------------------------------------

  /** ステップに錠前バッジを追加 */
  function addLockBadge(step, title, desc) {
    if (step.querySelector('.trial-lock-badge')) return;
    const badge = document.createElement('div');
    badge.className = 'trial-lock-badge';
    badge.innerHTML = `
      <div class="trial-lock-badge-icon">🔒</div>
      <div class="trial-lock-badge-body">
        <strong>${title}</strong>
        <span>${desc}</span>
      </div>
      <div class="trial-lock-badge-pill">TRIAL</div>
    `;
    step.insertBefore(badge, step.firstChild);
  }

  /** ステップ全体を「見るだけ」にする（ナビボタンは維持） */
  function lockStepViewOnly(stepId, title, desc) {
    const step = document.getElementById(stepId);
    if (!step) return;

    addLockBadge(step, title, desc);
    step.classList.add('trial-step-blocked');

    // カーテン div（クリック吸収）
    if (!step.querySelector('.trial-step-curtain')) {
      const curtain = document.createElement('div');
      curtain.className = 'trial-step-curtain';
      curtain.title = '体験版では変更できません';
      step.insertBefore(curtain, step.firstChild);
    }
  }

  // ---- 認証バイパス ------------------------------------------
  function bypassAuth() {
    sessionStorage.setItem('jim_ea_labo_auth', 'true');
    const overlay = document.getElementById('auth-overlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.add('hidden');
    }
  }

  // ---- Step 0: テンプレート制限 ------------------------------
  function restrictTemplates() {
    document.querySelectorAll('.template-card').forEach(card => {
      const tmpl = card.getAttribute('data-template');
      if (tmpl !== '1') {
        card.classList.add('trial-tpl-locked');
      }
    });
  }

  // ---- Step 3: トレーリングストップ以外をロック ---------------
  function restrictStep3() {
    const step = document.getElementById('ea-step-3');
    if (!step) return;

    addLockBadge(step,
      'Step 3: トレーリングストップのみ利用可能',
      '体験版では他の決済方法・インジケーター決済は利用できません'
    );

    // トレーリング以外のトグルカードをロック
    ['card-autoclose', 'card-manual-close', 'card-magic-stop'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('trial-card-locked');
    });

    // Exit conditions / Priority セクション（form-card）をロック
    step.querySelectorAll('.form-card').forEach(fc => {
      fc.classList.add('trial-card-locked');
    });
  }

  // ---- メイン適用 --------------------------------------------
  function applyAll() {
    bypassAuth();
    restrictTemplates();

    // Step 2: エントリー条件 — 閲覧のみ
    lockStepViewOnly('ea-step-2',
      'Step 2: エントリー条件（体験版）',
      '体験版ではエントリー条件の変更はできません。閲覧のみ可能です。'
    );

    // Step 3: トレーリングのみ
    restrictStep3();

    // Step 4: フィルター — 閲覧のみ
    lockStepViewOnly('ea-step-4',
      'Step 4: フィルター（体験版）',
      '体験版ではフィルター設定の変更はできません。閲覧のみ可能です。'
    );

    // Step 5: 出力設定 — 閲覧のみ
    lockStepViewOnly('ea-step-5',
      'Step 5: 出力・通知設定（体験版）',
      '体験版では出力設定の変更はできません。閲覧のみ可能です。'
    );

    // Step 7: バックテスト — 閲覧のみ
    lockStepViewOnly('ea-step-7',
      'Step 7: バックテスト（体験版）',
      '体験版ではバックテストは実行できません。画面の閲覧のみ可能です。'
    );
  }

  // ---- ヘッダーバナー追加 -------------------------------------
  function addTrialBanner() {
    const header = document.querySelector('.header');
    if (!header || header.querySelector('.trial-header-banner')) return;
    const banner = document.createElement('div');
    banner.className = 'trial-header-banner';
    banner.innerHTML = `
      🎯 体験版モード &nbsp;|&nbsp;
      <span>テンプレート1種・一部ステップは閲覧のみ</span>
      &nbsp;|&nbsp;
      <a href="index.html" style="color:#ff9d6f; text-decoration:underline; font-size:0.8rem;">製品版はこちら →</a>
    `;
    header.appendChild(banner);
  }

  // ---- 実行タイミング ----------------------------------------
  function init() {
    bypassAuth();          // 認証は即座にスキップ
    addTrialBanner();
    // DOM / app.js が初期化した後に制限を適用
    setTimeout(applyAll, 300);
    // テンプレート選択後も再適用（ページ遷移なしの SPA なので念のため）
    setTimeout(restrictTemplates, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // app.js の showEAStep をラップしてステップ表示のたびに制限を再適用
  window.addEventListener('load', () => {
    const _orig = window.showEAStep;
    if (typeof _orig === 'function') {
      window.showEAStep = function (n) {
        _orig.call(this, n);
        // ステップ表示後に制限を再チェック（動的追加要素対応）
        setTimeout(applyAll, 80);
      };
    }
  });

})();
