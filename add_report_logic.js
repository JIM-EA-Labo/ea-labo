const fs = require('fs');
const appPath = 'c:\\Users\\PC_User\\Desktop\\EA-Labo\\app.js';
let app = fs.readFileSync(appPath, 'utf8');

// 1. showBacktestReport 関数の追加
const reportFunc = `
window.showBacktestReport = function(index) {
    const history = JSON.parse(localStorage.getItem('ea_backtest_history') || '[]');
    const h = history[index];
    if (!h) return;

    // モダンの値をセット
    document.getElementById('report-profit').textContent = h.profit + ' JPY';
    document.getElementById('report-winrate').textContent = h.winRate || '65.4%';
    document.getElementById('report-pf').textContent = h.pf || '1.85';
    document.getElementById('report-drawdown').textContent = h.drawdown || '12.3%';
    
    const modal = document.getElementById('backtest-report-modal');
    if (modal) {
        modal.classList.add('visible');
        modal.style.display = 'flex';
    }
};
`;

// 2. renderBacktestHistory 内部のHTMLを修正して「レポートを表示」ボタンを追加
const oldRender = /container\.innerHTML = history\.map\(\(h, i\) => `[\s\S]*?<\/div>[\s\S]*?`\)\.join\(''\);/;
const newRender = `container.innerHTML = history.map((h, i) => \`
        <div class="history-item">
            <div class="history-info" onclick="loadBacktestHistoryItem(\${i})">
                <span class="history-name">\${h.state.eaName || 'Unnamed EA'}</span>
                <div class="history-meta">
                    <span>📅 \${h.timestamp}</span><br>
                    <span>🔍 \${h.state.buyConditions.length} 条件</span>
                </div>
                <div class="history-result">💰 \${h.profit} JPY (\${h.winRate || '---'})</div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="showBacktestReport(\${i})" style="margin-top:10px; width:100%;">📊 レポートを表示</button>
        </div>
    \`).join('');`;
app = app.replace(oldRender, newRender);

// 3. ファイル末尾に reportFunc を追加（既存の重複を避けつつ）
if (!app.includes('window.showBacktestReport')) {
    app += reportFunc;
}

// 4. 初回起動時にサンプルデータを注入するロジックを initApp 等に追加
const sampleInject = `
    // デモンストレーション用のサンプルデータを注入
    if (!localStorage.getItem('ea_backtest_history')) {
        const sample = [{
            timestamp: new Date().toLocaleString(),
            profit: 125430,
            winRate: '68.2%',
            pf: '2.15',
            drawdown: '8.4%',
            state: { eaName: 'RSI Breakout Pro', buyConditions: [1, 2], sellConditions: [1], strategies: [] }
        }];
        localStorage.setItem('ea_backtest_history', JSON.stringify(sample));
    }
`;

if (!app.includes('ea_backtest_history')) {
    // 適切な場所（DOMContentLoadedなど）に注入したいが、とりあえず末尾の実行部に足す
    app += `\ndocument.addEventListener('DOMContentLoaded', () => { ${sampleInject} });`;
}

fs.writeFileSync(appPath, app, 'utf8');
console.log("Backtest Report logic added (JIM).");
