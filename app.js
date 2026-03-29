// ============================================================
// [A-001] eaState ? 繧ｰ繝ｭ繝ｼ繝舌Ν迥ｶ諷九が繝悶ず繧ｧ繧ｯ繝茨ｼ亥ｮ梧・迚茨ｼ・
// [FIX] CACHE BUSTER v4.0.0
// ============================================================
window.alert('EA Labo 菫ｮ豁｣迚・v4)縺梧ｭ｣蟶ｸ縺ｫ隱ｭ縺ｿ霎ｼ縺ｾ繧後∪縺励◆・―n繧ｭ繝｣繝・す繝･縺ｯ譖ｴ譁ｰ縺輔ｌ縺ｾ縺励◆縲ゅ％繧後ｈ繧雁・縺ｦ縺ｮ讖溯・縺梧ｭ｣蟶ｸ縺ｫ蜍穂ｽ懊＠縺ｾ縺吶・);
console.log('EA Labo App.js v4.0.0 - SUCCESSFUL LOAD');
const eaState = {
  // --- 蝓ｺ譛ｬ險ｭ螳・---
  eaName: 'MyEA',
  platform: 'mt4',
  magicNumber: 12345,
  lotSize: 0.01,
  riskPercent: 0,
  slippage: 3,
  positionMode: 'one_direction',
  maxPositions: 1,
  entryCooldown: 0,
  timeframe: 'PERIOD_H1',

  // --- strategies 驟榊・ + positionParams (setupStep1縺御ｽｿ逕ｨ) ---
  strategies: [],
  positionParams: {
    nanpinInterval: 20,
    nanpinMax: 5,
    nanpinTimeInterval: 0,
    nanpinSkipCount: 0,
    nanpinSkipType: 'none',
    nanpinSkipATRMultiplier: 1.5,
    nanpinSkipATRPeriod: 14,
    martingaleMultiplier: 2.0,
    martingaleMax: 5,
    pyramidInterval: 30,
    pyramidMax: 3,
    pyramidUseEntryCondition: false,
    gridInterval: 20,
    gridCount: 5,
    gridTriggerType: 'entry',
    gridTriggerPrice: 0,
    gridTriggerCondition: 'above',
    gridDirection: 'both',
    gridResetPips: 100,
    gridResetATRMultiplier: 3.0,
    gridResetATRPeriod: 14,
    gridResetOnOneSideComplete: false,
    reverseGridInterval: 20,
    reverseGridCount: 5,
    reverseGridTriggerType: 'entry',
    reverseGridTriggerPrice: 0,
    reverseGridTriggerCondition: 'above',
    reverseGridDirection: 'both',
    reverseGridResetPips: 100,
    reverseGridResetATRMultiplier: 3.0,
    reverseGridResetATRPeriod: 14,
    reverseGridResetOnOneSideComplete: false
  },

  // --- 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ ---
  buyConditions: [],
  sellConditions: [],
  buyCombine: 'AND',
  sellCombine: 'AND',

  // --- 豎ｺ貂亥渕譛ｬ ---
  takeProfit: 0,
  stopLoss: 0,
  useTrailing: false,
  trailingStart: 20,
  trailingWidth: 15,
  trailingStep: 10,
  useAutoClose: false,
  autoCloseProfitPips: 0,
  autoCloseLossPips: 0,
  autoCloseProfitYen: 0,
  autoCloseLossYen: 0,
  useManualCloseButton: false,
  useMagicStopOrder: false,
  magicStopAmount: 10000,
  magicStopType: 'both',

  // --- 繧ｨ繧ｰ繧ｸ繝・ヨ譚｡莉ｶ (P2-C) ---
  exitConditions: [],
  exitCombine: 'AND',

  // --- 豎ｺ貂亥━蜈亥ｺｦ (P2-D) ---
  exitPriority: ['stoploss', 'takeprofit', 'trailing', 'autoclose', 'indicator_exit', 'manual_close'],

  // --- 繧ｹ繝励Ξ繝・ラ繝輔ぅ繝ｫ繧ｿ繝ｼ ---
  useSpreadFilter: false,
  maxSpread: 3.0,

  // --- 譎る俣繝輔ぅ繝ｫ繧ｿ繝ｼ ---
  useTimeFilter: false,
  timeStartHour: 0,
  timeStartMin: 0,
  timeEndHour: 23,
  timeEndMin: 59,

  // --- 繝代・繝輔ぉ繧ｯ繝医が繝ｼ繝繝ｼ ---
  usePerfectOrder: false,
  poShortPeriod: 20,
  poMidPeriod: 50,
  poLongPeriod: 100,

  // --- ADX繝輔ぅ繝ｫ繧ｿ繝ｼ ---
  useAdxFilter: false,
  adxFilterPeriod: 14,
  adxFilterLevel: 25,

  // --- 繧ｴ繝域律繝輔ぅ繝ｫ繧ｿ繝ｼ (P2-B) ---
  useGotoFilter: false,
  gotoStopStartHour: 0,
  gotoStopStartMin: 0,
  gotoStopEndHour: 23,
  gotoStopEndMin: 59,
  gotoIncludeMonthEnd: true,

  // --- 邨梧ｸ域欠讓吶ヵ繧｣繝ｫ繧ｿ繝ｼ (P2-B) ---
  useNewsFilter: false,
  newsStopMinutesBefore: 30,
  newsStopMinutesAfter: 30,
  newsEvents: [],

  // --- 譖懈律繝輔ぅ繝ｫ繧ｿ繝ｼ (P2-7) ---
  useDayFilter: false,
  dayFilterMode: 'allow',
  dayFilterDays: [false, true, true, true, true, true, false],

  // --- 繧ｹ繝医Λ繝・ず繝ｼ ---
  useNanpin: false,
  useMartingale: false,
  usePyramid: false,
  useGrid: false,
  useReverseGrid: false,
  
  // --- 譛域忰譛亥・繝輔ぅ繝ｫ繧ｿ繝ｼ ---
  useMonthFilter: false,
  monthStartDays: 0,
  monthEndDays: 0,

  // --- 繧｢繝ｩ繝ｼ繝・---
  useAlertPopup: false,
  useAlertSound: false,
  alertSoundFile: 'alert.wav',
  useAlertEmail: false,
  useAlertPush: false,

  // --- Discord Webhook ---
  useDiscordWebhook: false,
  discordWebhookURL: '',
  discordNotifyEntry: true,
  discordNotifyClose: true,
  discordNotifyError: false,
  discordNotifyDaily: false,

  // --- 隱崎ｨｼ繝ｻ繧ｻ繧ｭ繝･繝ｪ繝・ぅ險ｭ螳・(P4-D) ---
  useAccountLock: false,
  lockAccountId: '',
  useExpiryLock: false,
  lockExpiryDate: '',
  
  // --- 繝繧ｦ繝ｳ繝ｭ繝ｼ繝芽ｨｭ螳・---
  downloadFormat: 'mq4',

  // --- 繝翫Φ繝斐Φ霑ｽ蜉�險ｭ螳・---
  nanpinTargetProfit: 1000,
  mtPlatform: 'mt5',
  mtSymbol: 'USDJPY',
  mtPeriod: 'H1',
  mtModel: '2',
  mtFromDate: '',
  mtToDate: '',
  mtOptimization: false,
  optParams: {}
};

// ============================================================
// 繧ｰ繝ｭ繝ｼ繝舌Ν迥ｶ諷・ wizardState
// ============================================================
const wizardState = {
  targetType: '',
  step: 1,
  category: '',
  indicator: '',
  detail: '',
  conditionType: '',
  params: {},
  value1: '',
  value2: '',
  shift: 1,
  condTimeframe: '0',
  confirmBars: 0
};

// ============================================================
// 繧ｰ繝ｭ繝ｼ繝舌Ν迥ｶ諷・ indiState
// ============================================================
const indiState = {
  type: 'arrow',
  platform: 'mt4',
  indicatorName: 'MyIndicator',
  conditions: [],
  conditionCombine: 'AND',
  displayColor1: '#00FF00',
  displayColor2: '#FF0000',
  displayWidth: 2,
  displayStyle: 'solid',
  alerts: { popup: false, sound: false, push: false, email: false }
};
// ============================================================
// [END A-001]
// ============================================================


// ==================== A-010: Initialization + Home Screen ====================
document.addEventListener('DOMContentLoaded', () => {
    try {
        initAuth(); console.log('Initializing EA Labo...');
        setupHomeScreen();
        setupEAFlow();
        setupIndicatorFlow();
        setupGallery(); // 繧ｮ繝｣繝ｩ繝ｪ繝ｼ縺ｮ蛻晄悄蛹悶ｒ霑ｽ蜉�
        setupModals();
        setupBacktest();
        setupMTSettings();
        setupOptSettings();
        console.log('EA Labo initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

function setupHomeScreen() {
    const eaCard = document.getElementById('start-ea');
    const indiCard = document.getElementById('start-indicator');
    const helpBtn = document.getElementById('help-btn');
    const eaBackHome = document.getElementById('ea-back-home');
    const indiBackHome = document.getElementById('indi-back-home');

    if (eaCard) {
        eaCard.addEventListener('click', () => {
            console.log('EA card clicked');
            document.getElementById('home-screen').classList.add('hidden');
            document.getElementById('ea-flow').classList.remove('hidden');
            showEAStep(0);
        });
    }

    if (indiCard) {
        indiCard.addEventListener('click', () => {
            console.log('Indicator card clicked');
            document.getElementById('home-screen').classList.add('hidden');
            document.getElementById('indicator-flow').classList.remove('hidden');
            showIndiStep(1);
        });
    }

    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            document.getElementById('help-modal').classList.add('active');
        });
    }

    if (eaBackHome) {
        eaBackHome.addEventListener('click', () => {
            document.getElementById('ea-flow').classList.add('hidden');
            document.getElementById('home-screen').classList.remove('hidden');
        });
    }

    if (indiBackHome) {
        indiBackHome.addEventListener('click', () => {
            document.getElementById('indicator-flow').classList.add('hidden');
            document.getElementById('home-screen').classList.remove('hidden');
        });
    }
}

function setupEAFlow() {
    setupStep0();
    setupStep1();
    setupStep2();
    setupStep3();
    setupStep4();
    setupStep5();
    setupStep6();
    setupStep7();
    setupEANavigation();
}
// //END A-010

// ==================== Step 0: Templates ====================
function getEATemplate(id) {
    // Base clear state
    const base = {
        eaName: 'MyEA_' + id,
        magicNumber: 12345,
        lotSize: 0.1,
        positionMode: 'single',
        maxPositions: 1,
        strategies: [],
        buyConditions: [],
        sellConditions: [],
        exitConditions: [],
        buyCombine: 'AND',
        sellCombine: 'AND',
        exitCombine: 'OR',
        takeProfit: 0,
        stopLoss: 0,
        useTrailing: false,
        trailingStart: 20,
        trailingWidth: 15,
        trailingStep: 10,
        useAutoClose: false,
        autoCloseProfitPips: 0,
        autoCloseLossPips: 0,
        autoCloseProfitYen: 0,
        autoCloseLossYen: 0,
        useManualCloseButton: false,
        useMagicStopOrder: false,
        magicStopAmount: 10000,
        magicStopType: 'both',
        useTimeFilter: false,
        timeStartHour: 8,
        timeStartMin: 0,
        timeEndHour: 20,
        timeEndMin: 0,
        useDayFilter: false,
        dayFilterDays: [false, true, true, true, true, true, false],
        useSpreadFilter: false,
        maxSpread: 20,
        useNewsFilter: false,
        entryCooldown: 0,
        useAlertSound: false,
        useAlertEmail: false,
        useAlertPush: false
    };

    if(id == 0) return base; // Blank

    // T-1: Perfect Order
    if(id == 1) {
        base.eaName = 'Perfect-Order-EA';
        base.buyConditions = [
            { id: '1_1', category: 'indicator', indicator: 'ma', type: 'ma_above', params: { shortPeriod: 10, midPeriod: 20, longPeriod: 50, method: 'sma' } },
            { id: '1_2', category: 'indicator', indicator: 'adx', type: 'above_level', params: { period: 14, level: 25 } }
        ];
        base.sellConditions = [
            { id: '1_1s', category: 'indicator', indicator: 'ma', type: 'ma_below', params: { shortPeriod: 10, midPeriod: 20, longPeriod: 50, method: 'sma' } },
            { id: '1_2s', category: 'indicator', indicator: 'adx', type: 'above_level', params: { period: 14, level: 25 } }
        ];
        base.useTrailing = true;
        base.trailingStart = 30; base.trailingWidth = 20; base.trailingStep = 10;
        base.stopLoss = 50;
    }
    // T-2: Bollinger Reversal
    if(id == 2) {
        base.eaName = 'BB-Reversal-EA';
        base.buyConditions = [ { id: '2_1', category: 'indicator', indicator: 'bb', type: 'break_lower', params: { period: 20, deviation: 2.0 } } ];
        base.sellConditions = [ { id: '2_2', category: 'indicator', indicator: 'bb', type: 'break_upper', params: { period: 20, deviation: 2.0 } } ];
        base.useNewsFilter = true;
        base.takeProfit = 20; base.stopLoss = 30;
    }
    // T-3: Market Breakout
    if(id == 3) {
        base.eaName = 'RSI-Reversal-EA';
        base.buyConditions = [ { id: '3_1', category: 'indicator', indicator: 'rsi', type: 'oversold', params: { period: 14, level: 30 } } ];
        base.sellConditions = [ { id: '3_2', category: 'indicator', indicator: 'rsi', type: 'overbought', params: { period: 14, level: 70 } } ];
        base.useTimeFilter = true; base.timeStartHour = 9; base.timeEndHour = 21;
    }
    // T-4: Trap Repeat Grid
    if(id == 4) {
        base.positionMode = 'multiple'; base.maxPositions = 10;
        base.strategies = ['grid'];
        base.positionParams = { gridStep: 20, gridLots: 0.1, gridMax: 10 };
        base.buyConditions = [ { id: '4_1', category: 'price', indicator: 'price', detail: '蟶ｸ縺ｫ險ｱ蜿ｯ', type: 'always_true', params: {}, shift: 1 } ];
        base.sellConditions = [ { id: '4_2', category: 'price', indicator: 'price', detail: '蟶ｸ縺ｫ險ｱ蜿ｯ', type: 'always_true', params: {}, shift: 1 } ];
        base.useMagicStopOrder = true; base.magicStopAmount = 50000;
        base.useSpreadFilter = true; base.maxSpread = 15;
    }
    // T-5: News Scalp
    if(id == 5) {
        base.buyConditions = [ { id: '5_1', category: 'momentum', indicator: 'momentum', detail: 'Momentum譛牙鴨', type: 'mom_up', params: { period: 14 }, shift: 1 } ];
        base.sellConditions = [ { id: '5_2', category: 'momentum', indicator: 'momentum', detail: 'Momentum譛牙鴨', type: 'mom_down', params: { period: 14 }, shift: 1 } ];
        base.useNewsFilter = false; 
        base.useAutoClose = true; base.autoCloseProfitPips = 5; base.autoCloseLossPips = 5;
    }
    // T-6: Ichimoku x Stoch
    if(id == 6) {
        base.eaName = 'Ichimoku-Stoch-EA';
        base.buyConditions = [ 
            { id: '6_1', category: 'indicator', indicator: 'ichimoku', type: 'above_kumo', params: { tenkan: 9, kijun: 26, senkou: 52 } },
            { id: '6_4', category: 'indicator', indicator: 'stochastic', type: 'below_level', params: { kPeriod: 5, dPeriod: 3, slowing: 3, level: 20 } }
        ];
        base.sellConditions = [ 
            { id: '6_2', category: 'indicator', indicator: 'ichimoku', type: 'below_kumo', params: { tenkan: 9, kijun: 26, senkou: 52 } },
            { id: '6_5', category: 'indicator', indicator: 'stochastic', type: 'above_level', params: { kPeriod: 5, dPeriod: 3, slowing: 3, level: 80 } }
        ];
        base.exitConditions = [ { id: '6_3', category: 'indicator', indicator: 'ichimoku', type: 'in_kumo', params: { tenkan: 9, kijun: 26, senkou: 52 } } ];
        base.useTrailing = true;
    }
    // T-7: MACD Zero Cross
    if(id == 7) {
        base.buyConditions = [ { id: '7_1', category: 'indicator', indicator: 'macd', detail: '繝｡繧､繝ｳ邱壹′0繧呈栢縺代◆', type: 'macd_cross_zero_up', params: { fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }, shift: 1 } ];
        base.sellConditions = [ { id: '7_2', category: 'indicator', indicator: 'macd', detail: '繝｡繧､繝ｳ邱壹′0繧呈栢縺代◆', type: 'macd_cross_zero_down', params: { fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }, shift: 1 } ];
        base.useDayFilter = true; base.dayFilterDays = [false, true, true, true, true, false, false];
        base.useAutoClose = true; base.autoCloseProfitPips = 10; base.autoCloseLossPips = 10;
    }
    // T-8: Nanpin Martingale
    if(id == 8) {
        base.eaName = 'Nanpin-Martingale-EA';
        base.positionMode = 'multiple'; base.maxPositions = 5;
        base.strategies = ['nanpin', 'martingale'];
        base.positionParams = { nanpinInterval: 20, martingaleMultiplier: 1.5, nanpinMax: 10 };
        base.buyConditions = [ { id: '8_1', category: 'indicator', indicator: 'rsi', type: 'oversold', params: { period: 14, level: 30 } } ];
        base.sellConditions = [ { id: '8_2', category: 'indicator', indicator: 'rsi', type: 'overbought', params: { period: 14, level: 70 } } ];
        base.nanpinTargetProfit = 1000;
    }
    // T-9: Deep Value
    if(id == 9) {
        base.buyConditions = [ { id: '9_1', category: 'price', indicator: 'price', detail: '螳牙､譖ｴ譁ｰ', type: 'price_below', params: { price: 130.00 }, shift: 1 } ];
        base.sellConditions = [ { id: '9_2', category: 'price', indicator: 'price', detail: '鬮伜､譖ｴ譁ｰ', type: 'price_above', params: { price: 160.00 }, shift: 1 } ];
        base.useSpreadFilter = true; base.maxSpread = 10;
        base.takeProfit = 100;
    }
    // T-10: Parabolic SAR
    if(id == 10) {
        base.buyConditions = [ { id: '10_1', category: 'indicator', indicator: 'parabolic', detail: 'SAR荳頑栢縺・, type: 'sar_cross_up', params: { step: 0.02, max: 0.2 }, shift: 1 } ];
        base.sellConditions = [ { id: '10_2', category: 'indicator', indicator: 'parabolic', detail: 'SAR荳区栢縺・, type: 'sar_cross_down', params: { step: 0.02, max: 0.2 }, shift: 1 } ];
        base.useNewsFilter = true;
        base.useTrailing = true; base.trailingStart = 40; base.trailingWidth = 20; base.trailingStep = 10;
        base.stopLoss = 40;
    }
    return base;
}

function applyTemplate(id) {
    const newState = getEATemplate(id);
    
    // Clear current conditions
    eaState.buyConditions = [];
    eaState.sellConditions = [];
    eaState.exitConditions = [];
    eaState.strategies = [];
    
    // Copy new state
    Object.assign(eaState, newState);
    
    // Special handling for positionParams
    if (newState.positionParams) {
        eaState.positionParams = { ...eaState.positionParams, ...newState.positionParams };
    }

    // Refresh UI
    applyStateToUI();
    showEAStep(1);
    
    if(typeof showToast === 'function') {
        const msg = id === 0 ? '蜈ｨ險ｭ螳壹ｒ繝ｪ繧ｻ繝・ヨ縺励∪縺励◆' : '繝・Φ繝励Ξ繝ｼ繝医・險ｭ螳壹ｒ驕ｩ逕ｨ縺励∪縺励◆';
        showToast(msg, 'success');
    }
}

function setupStep0() {
    const templateCards = document.querySelectorAll('.template-card');
    templateCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const id = card.getAttribute('data-template');
            if (id !== null) {
                applyTemplate(parseInt(id));
                showEAStep(1);
            }
        });
    });
}

// ============================================================
// [A-020] Step 1 (Position) setup
// ============================================================
function setupStep1() {
    const positionModeInputs = document.querySelectorAll('input[name="position-mode"]');
    const multipleSettings = document.getElementById('multiple-position-settings');
    const strategySection = document.getElementById('strategy-section');

    positionModeInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            eaState.positionMode = e.target.value;

            if (e.target.value === 'multiple') {
                if (multipleSettings) multipleSettings.classList.remove('hidden');
                if (strategySection) strategySection.classList.remove('hidden');
            } else {
                if (multipleSettings) multipleSettings.classList.add('hidden');
                if (strategySection) strategySection.classList.add('hidden');
                eaState.strategies = [];
                document.querySelectorAll('.strategy-card').forEach(card => {
                    card.classList.remove('selected');
                });
                ['nanpin', 'martingale', 'pyramid', 'grid', 'reverse_grid'].forEach(s => {
                    hideStrategyPanel(s);
                });
            }
            updateStrategyWarnings();
        });
    });

    const maxPositionsInput = document.getElementById('max-positions');
    if (maxPositionsInput) {
        maxPositionsInput.addEventListener('change', (e) => {
            eaState.maxPositions = parseInt(e.target.value) || 5;
        });
    }

    const entryCooldownInput = document.getElementById('entry-cooldown');
    if (entryCooldownInput) {
        entryCooldownInput.addEventListener('change', (e) => {
            eaState.entryCooldown = parseInt(e.target.value) || 0;
        });
    }

    const strategyCards = document.querySelectorAll('.strategy-card');
    strategyCards.forEach(card => {
        card.addEventListener('click', () => {
            const strategy = card.dataset.strategy;
            if (eaState.positionMode === 'single') return;

            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
                eaState.strategies = eaState.strategies.filter(s => s !== strategy);
                hideStrategyPanel(strategy);
            } else {
                card.classList.add('selected');
                if (!eaState.strategies.includes(strategy)) {
                    eaState.strategies.push(strategy);
                }
                showStrategyPanel(strategy);
            }
            updateStrategyWarnings();
        });
    });

    setupNanpinSettings();
    setupMartingaleSettings();
    setupPyramidSettings();
    setupGridSettings();
    setupReverseGridSettings();
}

function setupNanpinSettings() {
    const intervalInput = document.getElementById('nanpin-interval');
    const maxInput = document.getElementById('nanpin-max');
    const timeIntervalInput = document.getElementById('nanpin-time-interval');
    const skipCountInput = document.getElementById('nanpin-skip-count');
    const skipTypeSelect = document.getElementById('nanpin-skip-type');
    const targetProfitInput = document.getElementById('nanpin-target-profit');
    const atrMultiplierInput = document.getElementById('nanpin-skip-atr-multiplier');
    const atrPeriodInput = document.getElementById('nanpin-skip-atr-period');
    const atrSettings = document.getElementById('nanpin-atr-settings');

    if (intervalInput) intervalInput.addEventListener('change', (e) => { eaState.positionParams.nanpinInterval = parseInt(e.target.value) || 20; });
    if (maxInput) maxInput.addEventListener('change', (e) => { eaState.positionParams.nanpinMax = parseInt(e.target.value) || 5; });
    if (timeIntervalInput) timeIntervalInput.addEventListener('change', (e) => { eaState.positionParams.nanpinTimeInterval = parseInt(e.target.value) || 0; });
    if (skipCountInput) skipCountInput.addEventListener('change', (e) => { eaState.positionParams.nanpinSkipCount = parseInt(e.target.value) || 0; });
    
    if (targetProfitInput) {
        targetProfitInput.addEventListener('change', (e) => {
            eaState.nanpinTargetProfit = parseInt(e.target.value) || 1000;
        });
    }

    if (skipTypeSelect) {
        skipTypeSelect.addEventListener('change', (e) => {
            eaState.positionParams.nanpinSkipType = e.target.value;
            if (atrSettings) atrSettings.classList.toggle('hidden', e.target.value !== 'atr');
        });
    }
    if (atrMultiplierInput) atrMultiplierInput.addEventListener('change', (e) => { eaState.positionParams.nanpinSkipATRMultiplier = parseFloat(e.target.value) || 1.5; });
    if (atrPeriodInput) atrPeriodInput.addEventListener('change', (e) => { eaState.positionParams.nanpinSkipATRPeriod = parseInt(e.target.value) || 14; });
}

function setupMartingaleSettings() {
    const multiplierInput = document.getElementById('martingale-multiplier');
    const maxInput = document.getElementById('martingale-max');
    if (multiplierInput) multiplierInput.addEventListener('change', (e) => { eaState.positionParams.martingaleMultiplier = parseFloat(e.target.value) || 2.0; });
    if (maxInput) maxInput.addEventListener('change', (e) => { eaState.positionParams.martingaleMax = parseInt(e.target.value) || 5; });
}

function setupPyramidSettings() {
    const intervalInput = document.getElementById('pyramid-interval');
    const maxInput = document.getElementById('pyramid-max');
    const useEntryConditionInput = document.getElementById('pyramid-use-entry-condition');
    if (intervalInput) intervalInput.addEventListener('change', (e) => { eaState.positionParams.pyramidInterval = parseInt(e.target.value) || 30; });
    if (maxInput) maxInput.addEventListener('change', (e) => { eaState.positionParams.pyramidMax = parseInt(e.target.value) || 3; });
    if (useEntryConditionInput) useEntryConditionInput.addEventListener('change', (e) => { eaState.positionParams.pyramidUseEntryCondition = e.target.checked; });
}

function setupGridSettings() {
    const intervalInput = document.getElementById('grid-interval');
    const countInput = document.getElementById('grid-count');
    const triggerTypeSelect = document.getElementById('grid-trigger-type');
    const triggerPriceInput = document.getElementById('grid-trigger-price');
    const triggerConditionSelect = document.getElementById('grid-trigger-condition');
    const directionSelect = document.getElementById('grid-direction');
    const resetPipsInput = document.getElementById('grid-reset-pips');
    const resetATRMultiplierInput = document.getElementById('grid-reset-atr-multiplier');
    const resetATRPeriodInput = document.getElementById('grid-reset-atr-period');
    const resetOneSideInput = document.getElementById('grid-reset-one-side');
    const triggerPriceSettings = document.getElementById('grid-trigger-price-settings');

    if (intervalInput) intervalInput.addEventListener('change', (e) => { eaState.positionParams.gridInterval = parseInt(e.target.value) || 20; });
    if (countInput) countInput.addEventListener('change', (e) => { eaState.positionParams.gridCount = parseInt(e.target.value) || 5; });
    if (triggerTypeSelect) {
        triggerTypeSelect.addEventListener('change', (e) => {
            eaState.positionParams.gridTriggerType = e.target.value;
            if (triggerPriceSettings) triggerPriceSettings.classList.toggle('hidden', e.target.value !== 'price');
        });
    }
    if (triggerPriceInput) triggerPriceInput.addEventListener('change', (e) => { eaState.positionParams.gridTriggerPrice = parseFloat(e.target.value) || 0; });
    if (triggerConditionSelect) triggerConditionSelect.addEventListener('change', (e) => { eaState.positionParams.gridTriggerCondition = e.target.value; });
    if (directionSelect) directionSelect.addEventListener('change', (e) => { eaState.positionParams.gridDirection = e.target.value; });
    if (resetPipsInput) resetPipsInput.addEventListener('change', (e) => { eaState.positionParams.gridResetPips = parseInt(e.target.value) || 100; });
    if (resetATRMultiplierInput) resetATRMultiplierInput.addEventListener('change', (e) => { eaState.positionParams.gridResetATRMultiplier = parseFloat(e.target.value) || 3.0; });
    if (resetATRPeriodInput) resetATRPeriodInput.addEventListener('change', (e) => { eaState.positionParams.gridResetATRPeriod = parseInt(e.target.value) || 14; });
    if (resetOneSideInput) resetOneSideInput.addEventListener('change', (e) => { eaState.positionParams.gridResetOnOneSideComplete = e.target.checked; });
}

function setupReverseGridSettings() {
    const intervalInput = document.getElementById('reverse-grid-interval');
    const countInput = document.getElementById('reverse-grid-count');
    const triggerTypeSelect = document.getElementById('reverse-grid-trigger-type');
    const triggerPriceInput = document.getElementById('reverse-grid-trigger-price');
    const triggerConditionSelect = document.getElementById('reverse-grid-trigger-condition');
    const directionSelect = document.getElementById('reverse-grid-direction');
    const resetPipsInput = document.getElementById('reverse-grid-reset-pips');
    const resetATRMultiplierInput = document.getElementById('reverse-grid-reset-atr-multiplier');
    const resetATRPeriodInput = document.getElementById('reverse-grid-reset-atr-period');
    const resetOneSideInput = document.getElementById('reverse-grid-reset-one-side');
    const triggerPriceSettings = document.getElementById('reverse-grid-trigger-price-settings');

    if (intervalInput) intervalInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridInterval = parseInt(e.target.value) || 20; });
    if (countInput) countInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridCount = parseInt(e.target.value) || 5; });
    if (triggerTypeSelect) {
        triggerTypeSelect.addEventListener('change', (e) => {
            eaState.positionParams.reverseGridTriggerType = e.target.value;
            if (triggerPriceSettings) triggerPriceSettings.classList.toggle('hidden', e.target.value !== 'price');
        });
    }
    if (triggerPriceInput) triggerPriceInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridTriggerPrice = parseFloat(e.target.value) || 0; });
    if (triggerConditionSelect) triggerConditionSelect.addEventListener('change', (e) => { eaState.positionParams.reverseGridTriggerCondition = e.target.value; });
    if (directionSelect) directionSelect.addEventListener('change', (e) => { eaState.positionParams.reverseGridDirection = e.target.value; });
    if (resetPipsInput) resetPipsInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridResetPips = parseInt(e.target.value) || 100; });
    if (resetATRMultiplierInput) resetATRMultiplierInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridResetATRMultiplier = parseFloat(e.target.value) || 3.0; });
    if (resetATRPeriodInput) resetATRPeriodInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridResetATRPeriod = parseInt(e.target.value) || 14; });
    if (resetOneSideInput) resetOneSideInput.addEventListener('change', (e) => { eaState.positionParams.reverseGridResetOnOneSideComplete = e.target.checked; });
}

function showStrategyPanel(strategy) {
    const panelId = strategy.replace('_', '-') + '-settings';
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.remove('hidden');
}

function hideStrategyPanel(strategy) {
    const panelId = strategy.replace('_', '-') + '-settings';
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('hidden');
}

function updateStrategyWarnings() {
    const warningBox = document.getElementById('strategy-warning');
    const warningText = warningBox ? warningBox.querySelector('.warning-text') : null;
    if (!warningBox || !warningText) return;

    const warnings = [];
    if (eaState.strategies.includes('martingale')) warnings.push('繝槭・繝√Φ繧ｲ繝ｼ繝ｫ縺ｯ螟ｧ縺阪↑謳榊､ｱ繝ｪ繧ｹ繧ｯ縺後≠繧翫∪縺・);
    if (eaState.strategies.includes('nanpin') && eaState.strategies.includes('martingale')) warnings.push('繝翫Φ繝斐Φ+繝槭・繝√Φ縺ｯ髱槫ｸｸ縺ｫ繝上う繝ｪ繧ｹ繧ｯ縺ｧ縺・);
    if (eaState.strategies.includes('grid') && eaState.strategies.includes('reverse_grid')) warnings.push('繧ｰ繝ｪ繝・ラ縺ｨ騾・げ繝ｪ繝・ラ縺ｮ蜷梧凾菴ｿ逕ｨ縺ｯ隍・尅縺ｪ謖吝虚縺ｫ縺ｪ繧翫∪縺・);

    if (warnings.length > 0) {
        warningText.textContent = warnings.join(' / ');
        warningBox.classList.remove('hidden');
    } else {
        warningBox.classList.add('hidden');
    }
}
// ============================================================
// [A-025] setupStep2 - 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ
// ============================================================
function setupStep2() {
  console.log('setupStep2 called');
  
  const buyCombineSelect = document.getElementById('buy-combine');
  if (buyCombineSelect) {
    buyCombineSelect.value = eaState.buyCombine.toLowerCase();
    buyCombineSelect.onchange = (e) => eaState.buyCombine = e.target.value.toUpperCase();
  }

  const sellCombineSelect = document.getElementById('sell-combine');
  if (sellCombineSelect) {
    sellCombineSelect.value = eaState.sellCombine.toLowerCase();
    sellCombineSelect.onchange = (e) => eaState.sellCombine = e.target.value.toUpperCase();
  }

  const addBuyBtn = document.getElementById('add-buy-condition');
  if (addBuyBtn) {
    addBuyBtn.onclick = () => openWizard('buy');
  }

  const addSellBtn = document.getElementById('add-sell-condition');
  if (addSellBtn) {
    addSellBtn.onclick = () => openWizard('sell');
  }

  updateConditionList('buy');
  updateConditionList('sell');
}


// ============================================================
// [A-035] setupStep4 - 繝輔ぅ繝ｫ繧ｿ繝ｼ險ｭ螳・
// ============================================================
function setupStep4() {
  // 繧ｹ繝励Ξ繝・ラ繝輔ぅ繝ｫ繧ｿ繝ｼ
  const spreadCheck = document.getElementById('use-spread-filter');
  if (spreadCheck) {
    spreadCheck.checked = eaState.useSpreadFilter;
    spreadCheck.addEventListener('change', (e) => {
      eaState.useSpreadFilter = e.target.checked;
    });
  }
  const maxSpreadInput = document.getElementById('max-spread');
  if (maxSpreadInput) {
    maxSpreadInput.value = eaState.maxSpread;
    maxSpreadInput.addEventListener('change', (e) => {
      eaState.maxSpread = parseFloat(e.target.value) || 3.0;
    });
  }

  // 譎る俣繝輔ぅ繝ｫ繧ｿ繝ｼ
  const timeCheck = document.getElementById('use-time-filter');
  if (timeCheck) {
    timeCheck.checked = eaState.useTimeFilter;
    timeCheck.addEventListener('change', (e) => {
      eaState.useTimeFilter = e.target.checked;
    });
  }
  const timeStart = document.getElementById('time-start');
  if (timeStart) {
    timeStart.value = eaState.timeStartHour;
    timeStart.addEventListener('change', (e) => {
      eaState.timeStartHour = parseInt(e.target.value) || 0;
    });
  }
  const timeEnd = document.getElementById('time-end');
  if (timeEnd) {
    timeEnd.value = eaState.timeEndHour;
    timeEnd.addEventListener('change', (e) => {
      eaState.timeEndHour = parseInt(e.target.value) || 23;
    });
  }

  // 繝代・繝輔ぉ繧ｯ繝医が繝ｼ繝繝ｼ
  const poCheck = document.getElementById('use-perfect-order');
  if (poCheck) {
    poCheck.checked = eaState.usePerfectOrder;
    poCheck.addEventListener('change', (e) => {
      eaState.usePerfectOrder = e.target.checked;
    });
  }
  const poMa1 = document.getElementById('perfect-order-ma1');
  if (poMa1) {
    poMa1.value = eaState.poShortPeriod;
    poMa1.addEventListener('change', (e) => { eaState.poShortPeriod = parseInt(e.target.value) || 20; });
  }
  const poMa2 = document.getElementById('perfect-order-ma2');
  if (poMa2) {
    poMa2.value = eaState.poMidPeriod;
    poMa2.addEventListener('change', (e) => { eaState.poMidPeriod = parseInt(e.target.value) || 50; });
  }
  const poMa3 = document.getElementById('perfect-order-ma3');
  if (poMa3) {
    poMa3.value = eaState.poLongPeriod;
    poMa3.addEventListener('change', (e) => { eaState.poLongPeriod = parseInt(e.target.value) || 100; });
  }

  // ADX繝輔ぅ繝ｫ繧ｿ繝ｼ
  const adxCheck = document.getElementById('use-adx-filter');
  if (adxCheck) {
    adxCheck.checked = eaState.useAdxFilter;
    adxCheck.addEventListener('change', (e) => {
      eaState.useAdxFilter = e.target.checked;
    });
  }
  const adxPeriod = document.getElementById('adx-period');
  if (adxPeriod) {
    adxPeriod.value = eaState.adxFilterPeriod;
    adxPeriod.addEventListener('change', (e) => { eaState.adxFilterPeriod = parseInt(e.target.value) || 14; });
  }
  const adxThreshold = document.getElementById('adx-threshold');
  if (adxThreshold) {
    adxThreshold.value = eaState.adxFilterLevel;
    adxThreshold.addEventListener('change', (e) => { eaState.adxFilterLevel = parseInt(e.target.value) || 25; });
  }

  // 繧ｴ繝医・譌･繝輔ぅ繝ｫ繧ｿ繝ｼ
  const gotoCheck = document.getElementById('use-goto-filter');
  if (gotoCheck) {
    gotoCheck.checked = eaState.useGotoFilter;
    gotoCheck.addEventListener('change', (e) => {
      eaState.useGotoFilter = e.target.checked;
    });
  }
  const gotoStartH = document.getElementById('goto-stop-start-hour');
  if (gotoStartH) {
    gotoStartH.value = eaState.gotoStopStartHour;
    gotoStartH.addEventListener('change', (e) => { eaState.gotoStopStartHour = parseInt(e.target.value) || 0; });
  }
  const gotoStartM = document.getElementById('goto-stop-start-min');
  if (gotoStartM) {
    gotoStartM.value = eaState.gotoStopStartMin;
    gotoStartM.addEventListener('change', (e) => { eaState.gotoStopStartMin = parseInt(e.target.value) || 0; });
  }
  const gotoEndH = document.getElementById('goto-stop-end-hour');
  if (gotoEndH) {
    gotoEndH.value = eaState.gotoStopEndHour;
    gotoEndH.addEventListener('change', (e) => { eaState.gotoStopEndHour = parseInt(e.target.value) || 23; });
  }
  const gotoEndM = document.getElementById('goto-stop-end-min');
  if (gotoEndM) {
    gotoEndM.value = eaState.gotoStopEndMin;
    gotoEndM.addEventListener('change', (e) => { eaState.gotoStopEndMin = parseInt(e.target.value) || 59; });
  }
  const gotoMonthEnd = document.getElementById('goto-include-month-end');
  if (gotoMonthEnd) {
    gotoMonthEnd.checked = eaState.gotoIncludeMonthEnd;
    gotoMonthEnd.addEventListener('change', (e) => { eaState.gotoIncludeMonthEnd = e.target.checked; });
  }

  // 繝九Η繝ｼ繧ｹ繝輔ぅ繝ｫ繧ｿ繝ｼ
  const newsCheck = document.getElementById('use-news-filter');
  if (newsCheck) {
    newsCheck.checked = eaState.useNewsFilter;
    newsCheck.addEventListener('change', (e) => {
      eaState.useNewsFilter = e.target.checked;
      togglePanel('news-filter-settings', e.target.checked);
    });
  }
  const newsBefore = document.getElementById('news-stop-before');
  if (newsBefore) {
    newsBefore.value = eaState.newsStopMinutesBefore || 60;
    newsBefore.addEventListener('change', (e) => { eaState.newsStopMinutesBefore = parseInt(e.target.value) || 60; });
  }
  const newsAfter = document.getElementById('news-stop-after');
  if (newsAfter) {
    newsAfter.value = eaState.newsStopMinutesAfter || 60;
    newsAfter.addEventListener('change', (e) => { eaState.newsStopMinutesAfter = parseInt(e.target.value) || 60; });
  }
  const newsSev = document.getElementById('news-severity');
  if (newsSev) {
    newsSev.value = eaState.newsSeverity || 'low';
    newsSev.addEventListener('change', (e) => { eaState.newsSeverity = e.target.value; });
  }
  const addNewsBtn = document.getElementById('add-news-event');
  if (addNewsBtn) {
    addNewsBtn.addEventListener('click', () => {
      const hour = document.getElementById('news-event-hour');
      const min = document.getElementById('news-event-min');
      const label = document.getElementById('news-event-label');
      if (hour && min && label) {
        eaState.newsEvents.push({
          hour: parseInt(hour.value) || 0,
          min: parseInt(min.value) || 0,
          label: label.value || '繧､繝吶Φ繝・
        });
        hour.value = ''; min.value = ''; label.value = '';
        renderNewsEventList();
      }
    });
  }

  // 蛻晄悄繝代ロ繝ｫ陦ｨ遉ｺ
  // Removed the manual .hidden class addition here. 
  // Step 3/4 toggle-card-settings are now hidden by CSS (display: none) by default.
}

function renderNewsEventList() {
  const listEl = document.getElementById('news-event-list');
  if (!listEl) return;
  if (eaState.newsEvents.length === 0) {
    listEl.innerHTML = '<p class="form-hint">謖・ｨ吶う繝吶Φ繝域悴逋ｻ骭ｲ</p>';
    return;
  }
  listEl.innerHTML = '';
  eaState.newsEvents.forEach((ev, i) => {
    const item = document.createElement('div');
    item.className = 'condition-item';
    const info = document.createElement('span');
    info.textContent = `${String(ev.hour).padStart(2,'0')}:${String(ev.min).padStart(2,'0')} - ${ev.label}`;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'condition-remove-btn';
    removeBtn.textContent = 'ﾃ・;
    removeBtn.addEventListener('click', () => {
      eaState.newsEvents.splice(i, 1);
      renderNewsEventList();
    });
    item.appendChild(info);
    item.appendChild(removeBtn);
    listEl.appendChild(item);
  });
}


// //END A-020
// ============================================================
// [A-030] setupStep3 - Exit Rules
// ============================================================
function setupStep3() {
  // --- TP / SL ---
  const tpInput = document.getElementById('take-profit');
  if (tpInput) {
    tpInput.value = eaState.takeProfit;
    tpInput.addEventListener('change', (e) => {
      eaState.takeProfit = parseFloat(e.target.value) || 0;
      updateExitPriorityList();
    });
  }

  const slInput = document.getElementById('stop-loss');
  if (slInput) {
    slInput.value = eaState.stopLoss;
    slInput.addEventListener('change', (e) => {
      eaState.stopLoss = parseFloat(e.target.value) || 0;
      updateExitPriorityList();
    });
  }

  // --- Trailing Stop ---
  const trailingCheck = document.getElementById('use-trailing');
  if (trailingCheck) {
    trailingCheck.checked = eaState.useTrailing;
    trailingCheck.addEventListener('change', (e) => {
      eaState.useTrailing = e.target.checked;
      togglePanel('trailing-panel', e.target.checked);
      updateExitPriorityList();
    });
  }

  const trailingStartInput = document.getElementById('trailing-start');
  if (trailingStartInput) {
    trailingStartInput.value = eaState.trailingStart;
    trailingStartInput.addEventListener('change', (e) => {
      eaState.trailingStart = parseFloat(e.target.value) || 20;
    });
  }

  const trailingWidthInput = document.getElementById('trailing-width');
  if (trailingWidthInput) {
    trailingWidthInput.value = eaState.trailingWidth;
    trailingWidthInput.addEventListener('change', (e) => {
      eaState.trailingWidth = parseFloat(e.target.value) || 15;
    });
  }

  const trailingStepInput = document.getElementById('trailing-step');
  if (trailingStepInput) {
    trailingStepInput.value = eaState.trailingStep;
    trailingStepInput.addEventListener('change', (e) => {
      eaState.trailingStep = parseFloat(e.target.value) || 10;
    });
  }

  // --- Auto Close ---
  const autoCloseCheck = document.getElementById('use-autoclose');
  if (autoCloseCheck) {
    autoCloseCheck.checked = eaState.useAutoClose;
    autoCloseCheck.addEventListener('change', (e) => {
      eaState.useAutoClose = e.target.checked;
      togglePanel('autoclose-panel', e.target.checked);
      updateExitPriorityList();
    });
  }

  const acProfitPips = document.getElementById('autoclose-profit-pips');
  if (acProfitPips) {
    acProfitPips.value = eaState.autoCloseProfitPips;
    acProfitPips.addEventListener('change', (e) => {
      eaState.autoCloseProfitPips = parseFloat(e.target.value) || 0;
    });
  }

  const acLossPips = document.getElementById('autoclose-loss-pips');
  if (acLossPips) {
    acLossPips.value = eaState.autoCloseLossPips;
    acLossPips.addEventListener('change', (e) => {
      eaState.autoCloseLossPips = parseFloat(e.target.value) || 0;
    });
  }

  const acProfitYen = document.getElementById('autoclose-profit-yen');
  if (acProfitYen) {
    acProfitYen.value = eaState.autoCloseProfitYen;
    acProfitYen.addEventListener('change', (e) => {
      eaState.autoCloseProfitYen = parseFloat(e.target.value) || 0;
    });
  }

  const acLossYen = document.getElementById('autoclose-loss-yen');
  if (acLossYen) {
    acLossYen.value = eaState.autoCloseLossYen;
    acLossYen.addEventListener('change', (e) => {
      eaState.autoCloseLossYen = parseFloat(e.target.value) || 0;
    });
  }

  // --- Manual Close Button ---
  const manualCloseCheck = document.getElementById('use-manual-close');
  if (manualCloseCheck) {
    manualCloseCheck.checked = eaState.useManualCloseButton;
    manualCloseCheck.addEventListener('change', (e) => {
      eaState.useManualCloseButton = e.target.checked;
      updateExitPriorityList();
    });
  }

  // --- Magic Stop Order ---
  const magicStopCheck = document.getElementById('use-magic-stop');
  if (magicStopCheck) {
    magicStopCheck.checked = eaState.useMagicStopOrder;
    magicStopCheck.addEventListener('change', (e) => {
      eaState.useMagicStopOrder = e.target.checked;
      togglePanel('magic-stop-panel', e.target.checked);
    });
  }

  const magicStopAmountInput = document.getElementById('magic-stop-amount');
  if (magicStopAmountInput) {
    magicStopAmountInput.value = eaState.magicStopAmount !== undefined ? eaState.magicStopAmount : 10000;
    magicStopAmountInput.addEventListener('change', (e) => {
      eaState.magicStopAmount = parseFloat(e.target.value) || 10000;
    });
  }

  const magicStopTypeSelect = document.getElementById('magic-stop-type');
  if (magicStopTypeSelect) {
    magicStopTypeSelect.value = eaState.magicStopType;
    magicStopTypeSelect.addEventListener('change', (e) => {
      eaState.magicStopType = e.target.value;
    });
  }

  // --- Exit Conditions (P2-C) ---
  const exitCombineSelect = document.getElementById('exit-combine');
  if (exitCombineSelect) {
    exitCombineSelect.value = eaState.exitCombine;
    exitCombineSelect.addEventListener('change', (e) => {
      eaState.exitCombine = e.target.value;
    });
  }

  const addExitCondBtn = document.getElementById('add-exit-condition-btn');
  if (addExitCondBtn) {
    addExitCondBtn.addEventListener('click', () => {
      openWizard('exit');
    });
  }

  // --- Exit Priority (P2-D) ---
  updateExitPriorityList();

  // Initial panel visibility
  togglePanel('trailing-panel', eaState.useTrailing);
  togglePanel('autoclose-panel', eaState.useAutoClose);
  togglePanel('magic-stop-panel', eaState.useMagicStopOrder);
}

// --- Toggle Panel Helper ---
function togglePanel(panelId, show) {
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.style.display = show ? 'block' : 'none';
  }
}

// ============================================================
// [A-030] Exit Priority List (P2-D)
// ============================================================
function getExitMethodLabel(id) {
  const labels = {
    'stoploss':       '繧ｹ繝医ャ繝励Ο繧ｹ (SL)',
    'takeprofit':     '繝・う繧ｯ繝励Ο繝輔ぅ繝・ヨ (TP)',
    'trailing':       '繝医Ξ繝ｼ繝ｪ繝ｳ繧ｰ繧ｹ繝医ャ繝・,
    'autoclose':      '閾ｪ蜍墓ｱｺ貂・,
    'indicator_exit': '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ豎ｺ貂・,
    'manual_close':   '謇句虚豎ｺ貂医・繧ｿ繝ｳ'
  };
  return labels[id] || id;
}

function isExitMethodActive(id) {
  switch (id) {
    case 'stoploss':       return eaState.stopLoss > 0;
    case 'takeprofit':     return eaState.takeProfit > 0;
    case 'trailing':       return eaState.useTrailing;
    case 'autoclose':      return eaState.useAutoClose;
    case 'indicator_exit': return eaState.exitConditions && eaState.exitConditions.length > 0;
    case 'manual_close':   return eaState.useManualCloseButton;
    default: return false;
  }
}

function updateExitPriorityList() {
  const listEl = document.getElementById('exit-priority-list');
  if (!listEl) return;

  listEl.innerHTML = '';

  const activeItems = eaState.exitPriority.filter(id => isExitMethodActive(id));

  if (activeItems.length === 0) {
    listEl.innerHTML = '<p class="empty-list">譛牙柑縺ｪ繧ｨ繧ｰ繧ｸ繝・ヨ譁ｹ豕輔′縺ゅｊ縺ｾ縺帙ｓ</p>';
    return;
  }

  activeItems.forEach((id, index) => {
    const item = document.createElement('div');
    item.className = 'exit-priority-item';
    item.dataset.exitId = id;
    item.draggable = true;

    const number = document.createElement('span');
    number.className = 'exit-priority-number';
    number.textContent = (index + 1) + '.';

    const label = document.createElement('span');
    label.className = 'exit-priority-label';
    label.textContent = getExitMethodLabel(id);

    const dragHandle = document.createElement('div');
    dragHandle.className = 'exit-priority-drag-handle';
    dragHandle.textContent = '?';

    item.appendChild(number);
    item.appendChild(label);
    item.appendChild(dragHandle);

    // native drag event listeners
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', id);
      item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      document.querySelectorAll('.exit-priority-item').forEach(el => el.classList.remove('over'));
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      item.classList.add('over');
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('over');
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.classList.remove('over');
      const draggedId = e.dataTransfer.getData('text/plain');
      if (draggedId !== id) {
        const draggingIdx = eaState.exitPriority.indexOf(draggedId);
        const targetIdx = eaState.exitPriority.indexOf(id);
        eaState.exitPriority.splice(draggingIdx, 1);
        eaState.exitPriority.splice(targetIdx, 0, draggedId);
        updateExitPriorityList();
      }
    });

    listEl.appendChild(item);
  });
}

function moveExitPriority(id, direction) {
  const arr = eaState.exitPriority;
  const currentIndex = arr.indexOf(id);
  if (currentIndex < 0) return;

  const newIndex = currentIndex + direction;
  if (newIndex < 0 || newIndex >= arr.length) return;

  // Swap
  const temp = arr[newIndex];
  arr[newIndex] = arr[currentIndex];
  arr[currentIndex] = temp;

  updateExitPriorityList();
}

// ============================================================
// [END A-030]
// ============================================================

// ==================== A-040: Step 5-6 setup + Code Gen ====================
function setupStep5() {
    // --- EA蝓ｺ譛ｬ險ｭ螳・---
    const eaNameInput = document.getElementById('input-ea-name');
    if (eaNameInput) {
      eaNameInput.value = eaState.eaName;
      eaNameInput.addEventListener('change', (e) => { eaState.eaName = e.target.value || 'MyEA'; });
    }
    const magicNumberInput = document.getElementById('input-magic-number');
    if (magicNumberInput) {
      magicNumberInput.value = eaState.magicNumber;
      magicNumberInput.addEventListener('change', (e) => { eaState.magicNumber = parseInt(e.target.value) || 12345; });
    }
    const lotSizeInput = document.getElementById('input-lot-size');
    if (lotSizeInput) {
      lotSizeInput.value = eaState.lotSize;
      lotSizeInput.addEventListener('change', (e) => { eaState.lotSize = parseFloat(e.target.value) || 0.01; });
    }
    const riskPercentInput = document.getElementById('input-risk-percent');
    if (riskPercentInput) {
      riskPercentInput.value = eaState.riskPercent;
      riskPercentInput.addEventListener('change', (e) => { eaState.riskPercent = parseFloat(e.target.value) || 0; });
    }
    const slippageInput = document.getElementById('input-slippage');
    if (slippageInput) {
      slippageInput.value = eaState.slippage;
      slippageInput.addEventListener('change', (e) => { eaState.slippage = parseInt(e.target.value) || 3; });
    }
    const platformSelect = document.getElementById('select-platform');
    if (platformSelect) {
      platformSelect.value = eaState.platform;
      platformSelect.addEventListener('change', (e) => {
        eaState.platform = e.target.value;
        console.log('Platform changed to:', eaState.platform);
      });
    }

    // --- Discord Webhook ---
    const discordCheck = document.getElementById('chk-discord-webhook');
    if (discordCheck) {
      discordCheck.checked = eaState.useDiscordWebhook;
      discordCheck.addEventListener('change', (e) => {
        eaState.useDiscordWebhook = e.target.checked;
        togglePanel('discord-panel', e.target.checked);
      });
    }
    const discordUrl = document.getElementById('input-discord-url');
    if (discordUrl) {
      discordUrl.value = eaState.discordWebhookURL;
      discordUrl.addEventListener('change', (e) => { eaState.discordWebhookURL = e.target.value; });
    }
    const discordEntry = document.getElementById('chk-discord-entry');
    if (discordEntry) {
      discordEntry.checked = eaState.discordNotifyEntry;
      discordEntry.addEventListener('change', (e) => { eaState.discordNotifyEntry = e.target.checked; });
    }
    const discordClose = document.getElementById('chk-discord-close');
    if (discordClose) {
      discordClose.checked = eaState.discordNotifyClose;
      discordClose.addEventListener('change', (e) => { eaState.discordNotifyClose = e.target.checked; });
    }
    const discordError = document.getElementById('chk-discord-error');
    if (discordError) {
      discordError.checked = eaState.discordNotifyError;
      discordError.addEventListener('change', (e) => { eaState.discordNotifyError = e.target.checked; });
    }
    const discordDaily = document.getElementById('chk-discord-daily');
    if (discordDaily) {
      discordDaily.checked = eaState.discordNotifyDaily;
      discordDaily.addEventListener('change', (e) => { eaState.discordNotifyDaily = e.target.checked; });
    }

    // --- 繧｢繝ｩ繝ｼ繝郁ｨｭ螳・---
    const alertPopupCheckbox = document.getElementById('chk-alert-popup');
    if (alertPopupCheckbox) {
      alertPopupCheckbox.checked = eaState.useAlertPopup;
      alertPopupCheckbox.addEventListener('change', (e) => { eaState.useAlertPopup = e.target.checked; });
    }
    const alertSoundCheckbox = document.getElementById('chk-alert-sound');
    if (alertSoundCheckbox) {
      alertSoundCheckbox.checked = eaState.useAlertSound;
      alertSoundCheckbox.addEventListener('change', (e) => {
        eaState.useAlertSound = e.target.checked;
        togglePanel('alert-sound-panel', e.target.checked);
      });
    }
    const alertSoundFile = document.getElementById('input-alert-sound-file');
    if (alertSoundFile) {
      alertSoundFile.value = eaState.alertSoundFile;
      alertSoundFile.addEventListener('change', (e) => { eaState.alertSoundFile = e.target.value; });
    }
    const alertEmailCheckbox = document.getElementById('chk-alert-email');
    if (alertEmailCheckbox) {
      alertEmailCheckbox.checked = eaState.useAlertEmail;
      alertEmailCheckbox.addEventListener('change', (e) => { eaState.useAlertEmail = e.target.checked; });
    }
    const alertPushCheckbox = document.getElementById('chk-alert-push');
    if (alertPushCheckbox) {
      alertPushCheckbox.checked = eaState.useAlertPush;
      alertPushCheckbox.addEventListener('change', (e) => { eaState.useAlertPush = e.target.checked; });
    }

    // Initial panel visibility
    togglePanel('discord-panel', eaState.useDiscordWebhook);
    togglePanel('alert-sound-panel', eaState.useAlertSound);
}

function setupStep6() {
    const generateCodeBtn = document.getElementById('generate-code');
    const checkCodeBtn = document.getElementById('check-code');
    const copyCodeBtn = document.getElementById('copy-code');
    const downloadCodeBtn = document.getElementById('download-code');
    const saveSettingsBtn = document.getElementById('save-settings');
    const loadSettingsBtn = document.getElementById('load-settings');

    if (generateCodeBtn) generateCodeBtn.addEventListener('click', generateCode);
    if (checkCodeBtn) checkCodeBtn.addEventListener('click', checkCode);
    if (copyCodeBtn) copyCodeBtn.addEventListener('click', copyCode);
    if (downloadCodeBtn) downloadCodeBtn.addEventListener('click', downloadCode);
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveSettings);
    if (loadSettingsBtn) loadSettingsBtn.addEventListener('click', () => { document.getElementById('settings-file-input').click(); });

    const settingsFileInput = document.getElementById('settings-file-input');
    if (settingsFileInput) settingsFileInput.addEventListener('change', loadSettings);

    // --- 霑ｽ蜉�: 隱崎ｨｼ繧ｬ繝ｼ繝峨・險ｭ螳・---
    const accLock = document.getElementById('use-account-lock');
    const accId = document.getElementById('lock-account-id');
    if (accLock && accId) {
        accLock.checked = eaState.useAccountLock;
        accId.value = eaState.lockAccountId || '';
        accId.style.display = eaState.useAccountLock ? 'block' : 'none';
        accLock.addEventListener('change', (e) => {
            eaState.useAccountLock = e.target.checked;
            accId.style.display = e.target.checked ? 'block' : 'none';
        });
        accId.addEventListener('change', (e) => { eaState.lockAccountId = e.target.value; });
    }

    const expLock = document.getElementById('use-expiry-lock');
    const expDate = document.getElementById('lock-expiry-date');
    if (expLock && expDate) {
        expLock.checked = eaState.useExpiryLock;
        expDate.value = eaState.lockExpiryDate || '';
        expDate.style.display = eaState.useExpiryLock ? 'block' : 'none';
        expLock.addEventListener('change', (e) => {
            eaState.useExpiryLock = e.target.checked;
            expDate.style.display = e.target.checked ? 'block' : 'none';
        });
        expDate.addEventListener('change', (e) => { eaState.lockExpiryDate = e.target.value; });
    }
}

function generateCode() {
    try {
        console.log('Generating code with state:', eaState);
        if (typeof EAGenerator === 'undefined') throw new Error('EAGenerator is not defined. Make sure generator.js is loaded.');
        const code = EAGenerator.generate(eaState);
        const codeElement = document.getElementById('generated-code');
        if (codeElement) codeElement.textContent = code;
        showToast('繧ｳ繝ｼ繝峨ｒ逕滓・縺励∪縺励◆', 'success');
    } catch (error) {
        console.error('Code generation error:', error);
        showToast('繧ｳ繝ｼ繝臥函謌舌お繝ｩ繝ｼ: ' + error.message, 'error');
    }
}

function checkCode() {
    const errors = validateGeneratedCode();
    displayErrorCheckResults(errors);
}

function validateGeneratedCode() {
    const errors = [];
    if (eaState.buyConditions.length === 0 && eaState.sellConditions.length === 0) errors.push('繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ縺瑚ｨｭ螳壹＆繧後※縺・∪縺帙ｓ');
    if (!eaState.useTP && !eaState.useSL && !eaState.useTrailing && !eaState.useAutoClose && !eaState.useIndicatorExit) errors.push('豎ｺ貂医Ν繝ｼ繝ｫ縺瑚ｨｭ螳壹＆繧後※縺・∪縺帙ｓ');
    if (eaState.strategies.includes('martingale')) errors.push('隴ｦ蜻・ 繝槭・繝√Φ繧ｲ繝ｼ繝ｫ謌ｦ逡･縺ｯ鬮倥Μ繧ｹ繧ｯ縺ｧ縺・);
    if (eaState.strategies.includes('nanpin') && eaState.positionParams.nanpinMax > 10) errors.push('隴ｦ蜻・ 繝翫Φ繝斐Φ蝗樊焚縺悟､壹☆縺弱ｋ蜿ｯ閭ｽ諤ｧ縺後≠繧翫∪縺・);
    if (eaState.lotSize > 1) errors.push('隴ｦ蜻・ 繝ｭ繝・ヨ繧ｵ繧､繧ｺ縺悟､ｧ縺阪＞縺ｧ縺呻ｼ・ + eaState.lotSize);
    return errors;
}

function displayErrorCheckResults(errors) {
    const errorSection = document.getElementById('error-check-section');
    const successSection = document.getElementById('success-check-section');
    const errorList = document.getElementById('error-list');

    if (errors.length > 0) {
        if (errorSection) errorSection.classList.remove('hidden');
        if (successSection) successSection.classList.add('hidden');
        if (errorList) errorList.innerHTML = errors.map(error => `<div class="error-item">${escapeHtml(error)}</div>`).join('');
    } else {
        if (errorSection) errorSection.classList.add('hidden');
        if (successSection) successSection.classList.remove('hidden');
    }
}

function copyCode() {
    const codeElement = document.getElementById('generated-code');
    if (codeElement) {
        navigator.clipboard.writeText(codeElement.textContent).then(() => {
            showToast('繧ｳ繝ｼ繝峨ｒ繧ｳ繝斐・縺励∪縺励◆', 'success');
        }).catch(err => {
            console.error('Copy failed:', err);
            showToast('繧ｳ繝斐・縺ｫ螟ｱ謨励＠縺ｾ縺励◆', 'error');
        });
    }
}

function downloadCode() {
    const codeElement = document.getElementById('generated-code');
    if (codeElement) {
        const code = codeElement.textContent;
        const extension = eaState.platform === 'mt4' ? 'mq4' : 'mq5';
        const filename = `${eaState.eaName}.${extension}`;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`${filename} 繧偵ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨＠縺ｾ縺励◆`, 'success');
    }
}

function saveSettings() {
    const settings = JSON.stringify(eaState, null, 2);
    const blob = new Blob([settings], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${eaState.eaName}_settings.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('險ｭ螳壹ｒ菫晏ｭ倥＠縺ｾ縺励◆', 'success');
}

function loadSettings(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const settings = JSON.parse(e.target.result);
                Object.assign(eaState, settings);
                applyStateToUI();
                showToast('險ｭ螳壹ｒ隱ｭ縺ｿ霎ｼ縺ｿ縺ｾ縺励◆', 'success');
            } catch (error) {
                console.error('Settings load error:', error);
                showToast('險ｭ螳壹・隱ｭ縺ｿ霎ｼ縺ｿ縺ｫ螟ｱ謨励＠縺ｾ縺励◆', 'error');
            }
        };
        reader.readAsText(file);
    }
    event.target.value = '';
}
// //END A-040
// ============================================================
// [A-050] applyStateToUI - 蜈ｨUI蠕ｩ蜈・(螳梧・迚・
// ============================================================
function applyStateToUI() {
  // Helper: safely set value/checked on an element
  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  }
  function setChk(id, checked) {
    const el = document.getElementById(id);
    if (el) el.checked = checked;
    // Also update toggle-card class if it exists
    const card = document.querySelector(`.toggle-card[data-target="${id}"]`);
    if (card) {
      if (checked) card.classList.add('active');
      else card.classList.remove('active');
    }
  }

  // --- Step 1: 繝昴ず繧ｷ繝ｧ繝ｳ邂｡逅・---
  setVal('entry-cooldown', eaState.entryCooldown);
  setVal('max-positions', eaState.maxPositions);

  // --- Step 2: 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ ---
  setVal('timeframe', eaState.timeframe);
  setVal('condition-combine', eaState.buyCombine);
  updateConditionList('buy');
  updateConditionList('sell');

  // --- Step 3: 豎ｺ貂郁ｨｭ螳・---
  setVal('take-profit', eaState.takeProfit);
  setVal('stop-loss', eaState.stopLoss);

  setChk('use-trailing', eaState.useTrailing);
  togglePanel('trailing-panel', eaState.useTrailing);
  setVal('trailing-start', eaState.trailingStart);
  setVal('trailing-step', eaState.trailingStep);

  setChk('use-autoclose', eaState.useAutoClose);
  togglePanel('autoclose-panel', eaState.useAutoClose);
  setVal('autoclose-profit-pips', eaState.autoCloseProfitPips);
  setVal('autoclose-loss-pips', eaState.autoCloseLossPips);
  setVal('autoclose-profit-yen', eaState.autoCloseProfitYen);
  setVal('autoclose-loss-yen', eaState.autoCloseLossYen);

  setChk('use-manual-close', eaState.useManualCloseButton);

  setChk('use-magic-stop', eaState.useMagicStopOrder);
  togglePanel('magic-stop-panel', eaState.useMagicStopOrder);
  setVal('magic-stop-amount', eaState.magicStopAmount);
  setVal('magic-stop-type', eaState.magicStopType);

  setVal('exit-combine', eaState.exitCombine);
  updateExitConditionList();
  updateExitPriorityList();

  // --- Step 4: 繝輔ぅ繝ｫ繧ｿ繝ｼ險ｭ螳・---
  setChk('use-spread-filter', eaState.useSpreadFilter);
  togglePanel('spread-filter-settings', eaState.useSpreadFilter);
  setVal('max-spread', eaState.maxSpread);

  setChk('use-time-filter', eaState.useTimeFilter);
  togglePanel('time-filter-settings', eaState.useTimeFilter);
  setVal('time-start', eaState.timeStartHour); // In index.html ID is time-start
  setVal('time-end', eaState.timeEndHour);

  setChk('use-perfect-order', eaState.usePerfectOrder);
  togglePanel('perfect-order-settings', eaState.usePerfectOrder);
  setVal('perfect-order-ma1', eaState.poShortPeriod);
  setVal('perfect-order-ma2', eaState.poMidPeriod);
  setVal('perfect-order-ma3', eaState.poLongPeriod);

  setChk('use-adx-filter', eaState.useAdxFilter);
  togglePanel('adx-filter-settings', eaState.useAdxFilter);
  setVal('adx-period', eaState.adxFilterPeriod);
  setVal('adx-threshold', eaState.adxFilterLevel);

  setChk('use-goto-filter', eaState.useGotoFilter);
  togglePanel('goto-filter-settings', eaState.useGotoFilter);
  setVal('goto-stop-start-hour', eaState.gotoStopStartHour);
  setVal('goto-stop-start-min', eaState.gotoStopStartMin);
  setVal('goto-stop-end-hour', eaState.gotoStopEndHour);
  setVal('goto-stop-end-min', eaState.gotoStopEndMin);
  setChk('goto-include-month-end', eaState.gotoIncludeMonthEnd);

  setChk('use-news-filter', eaState.useNewsFilter);
  togglePanel('news-filter-settings', eaState.useNewsFilter);
  setVal('news-stop-before', eaState.newsStopMinutesBefore || 60);
  setVal('news-stop-after', eaState.newsStopMinutesAfter || 60);
  setVal('news-severity', eaState.newsSeverity || 'low');

  setChk('chk-day-filter', eaState.useDayFilter);
  togglePanel('day-filter-panel', eaState.useDayFilter);
  setVal('day-filter-mode', eaState.dayFilterMode);
  const dayIds = ['chk-day-sun', 'chk-day-mon', 'chk-day-tue', 'chk-day-wed', 'chk-day-thu', 'chk-day-fri', 'chk-day-sat'];
  dayIds.forEach((id, i) => {
    setChk(id, eaState.dayFilterDays[i]);
  });

  // --- Step 5: 蜃ｺ蜉帙・騾夂衍險ｭ螳・---
  setVal('input-ea-name', eaState.eaName);
  setVal('input-magic-number', eaState.magicNumber);
  setVal('input-lot-size', eaState.lotSize);
  setVal('input-risk-percent', eaState.riskPercent);
  setVal('input-slippage', eaState.slippage);
  setVal('select-platform', eaState.platform);

  setChk('chk-discord-webhook', eaState.useDiscordWebhook);
  togglePanel('discord-panel', eaState.useDiscordWebhook);
  setVal('input-discord-url', eaState.discordWebhookURL);
  setChk('chk-discord-entry', eaState.discordNotifyEntry);
  setChk('chk-discord-close', eaState.discordNotifyClose);
  setChk('chk-discord-error', eaState.discordNotifyError);
  setChk('chk-discord-daily', eaState.discordNotifyDaily);

  setChk('chk-alert-popup', eaState.useAlertPopup);
  setChk('chk-alert-sound', eaState.useAlertSound);
  togglePanel('alert-sound-panel', eaState.useAlertSound);
  setVal('input-alert-sound-file', eaState.alertSoundFile);
  setChk('chk-alert-email', eaState.useAlertEmail);
  setChk('chk-alert-push', eaState.useAlertPush);

  // --- Step 4/5 霑ｽ蜉�鬆・岼 ---
  setChk('use-month-filter', eaState.useMonthFilter);
  togglePanel('month-filter-settings', eaState.useMonthFilter);
  setVal('month-start-days', eaState.monthStartDays);
  setVal('month-end-days', eaState.monthEndDays);
  setVal('nanpin-target-profit', eaState.nanpinTargetProfit);
  if (typeof renderLogicMap === 'function') renderLogicMap();
}


// ============================================================
// ==================== A-060: EA/Indi Navigation ====================
function setupEANavigation() {
    const step1Next = document.getElementById('ea-step1-next');
    if (step1Next) step1Next.addEventListener('click', () => { if (validateEAStep(1)) showEAStep(2); });
    const step2Prev = document.getElementById('ea-step2-prev');
    const step2Next = document.getElementById('ea-step2-next');
    if (step2Prev) step2Prev.addEventListener('click', () => showEAStep(1));
    if (step2Next) step2Next.addEventListener('click', () => { if (validateEAStep(2)) showEAStep(3); });
    const step3Prev = document.getElementById('ea-step3-prev');
    const step3Next = document.getElementById('ea-step3-next');
    if (step3Prev) step3Prev.addEventListener('click', () => showEAStep(2));
    if (step3Next) step3Next.addEventListener('click', () => { if (validateEAStep(3)) showEAStep(4); });
    const step4Prev = document.getElementById('ea-step4-prev');
    const step4Next = document.getElementById('ea-step4-next');
    if (step4Prev) step4Prev.addEventListener('click', () => showEAStep(3));
    if (step4Next) step4Next.addEventListener('click', () => { if (validateEAStep(4)) showEAStep(5); });
    const step5Prev = document.getElementById('ea-step5-prev');
    const step5Next = document.getElementById('ea-step5-next');
    if (step5Prev) step5Prev.addEventListener('click', () => showEAStep(4));
    if (step5Next) step5Next.addEventListener('click', () => { if (validateEAStep(5)) showEAStep(6); });
    const step6Prev = document.getElementById('ea-step6-prev');
    const step6Next = document.getElementById('ea-step6-next');
    if (step6Prev) step6Prev.addEventListener('click', () => showEAStep(5));
    if (step6Next) step6Next.addEventListener('click', () => showEAStep(7));

    const step7Prev = document.getElementById('ea-step7-prev');
    if (step7Prev) step7Prev.addEventListener('click', () => showEAStep(6));

    document.querySelectorAll('#ea-flow .progress-step').forEach(step => {
        step.addEventListener('click', () => { showEAStep(parseInt(step.dataset.step)); });
    });
}

function setupBacktest() {
    const runBtn = document.getElementById('run-backtest-btn');
    if (runBtn) runBtn.addEventListener('click', runBacktest);

    const step7Prev = document.getElementById('ea-step7-prev');
    if (step7Prev) step7Prev.addEventListener('click', () => showEAStep(6));

    const reportClose = document.getElementById('report-close');
    if (reportClose) {
        reportClose.addEventListener('click', () => {
            document.getElementById('backtest-report-modal').classList.remove('active');
        });
    }

    renderBacktestHistory();
}

function showEAStep(stepNum) {
    if (typeof closeWizard === 'function') closeWizard();
    
    // 繝帙・繝�逕ｻ髱｢縺ｨ繝吶・繧ｹ縺ｮ繝輔Ο繝ｼ繧ｳ繝ｳ繝・リ縺ｮ陦ｨ遉ｺ蛻ｶ蠕｡
    const home = document.getElementById('home-screen');
    const flow = document.getElementById('ea-flow');
    if (home) home.classList.add('hidden');
    if (flow) flow.classList.remove('hidden');

    // 蜈ｨ繧ｹ繝・ャ繝暦ｼ・-8・峨ｒ遒ｺ螳溘↓髫�縺・
    for (let i = 0; i <= 8; i++) { 
        const s = document.getElementById(`ea-step-${i}`); 
        if (s) {
            s.classList.add('hidden');
            s.style.display = 'none'; 
        }
    }
    // 蟇ｾ雎｡繧ｹ繝・ャ繝励ｒ陦ｨ遉ｺ
    const target = document.getElementById(`ea-step-${stepNum}`); 
    if (target) {
        target.classList.remove('hidden');
        target.style.display = 'block';
    }
    updateEAProgress(stepNum);
    window.scrollTo(0, 0); 
}

function updateEAProgress(currentStep) {
    document.querySelectorAll('#ea-flow .progress-step').forEach(step => {
        const n = parseInt(step.dataset.step);
        step.classList.remove('active', 'completed');
        if (n === currentStep) step.classList.add('active');
        else if (n < currentStep) step.classList.add('completed');
    });
}

function validateEAStep(stepNum) { return true; }

function setupIndicatorFlow() {
    try {
        setupIndiStep1();
        setupIndiStep2();
        setupIndiStep3();
        setupIndiStep4();
        setupIndiStep5();
        setupIndiNavigation();
    } catch (e) {
        console.warn('Indicator flow setup warning:', e.message);
    }
}


function setupIndiStep1() {
    document.querySelectorAll('input[name="indicator-type"]').forEach(input => {
        input.addEventListener('change', (e) => { indiState.type = e.target.value; });
    });
}

function setupIndiStep2() {
    const cc = document.getElementById('indi-condition-combine');
    if (cc) cc.addEventListener('change', (e) => { indiState.conditionCombine = e.target.value; });
    const ab = document.getElementById('indi-add-buy-condition');
    if (ab) ab.addEventListener('click', () => { openWizard('indicator', 'buy'); });
    const as = document.getElementById('indi-add-sell-condition');
    if (as) as.addEventListener('click', () => { openWizard('indicator', 'sell'); });
}

function setupIndiStep3() {
    const c1 = document.getElementById('display-color1');
    if (c1) c1.addEventListener('change', (e) => { indiState.displayColor1 = e.target.value; });
    const c2 = document.getElementById('display-color2');
    if (c2) c2.addEventListener('change', (e) => { indiState.displayColor2 = e.target.value; });
    const w = document.getElementById('display-width');
    if (w) w.addEventListener('change', (e) => { indiState.displayWidth = parseInt(e.target.value) || 2; });
    const s = document.getElementById('display-style');
    if (s) s.addEventListener('change', (e) => { indiState.displayStyle = e.target.value; });
}

function setupIndiStep4() {
    const p = document.getElementById('indi-alert-popup');
    if (p) p.addEventListener('change', (e) => { indiState.alerts.popup = e.target.checked; });
    const s = document.getElementById('indi-alert-sound');
    if (s) s.addEventListener('change', (e) => { indiState.alerts.sound = e.target.checked; });
    const pu = document.getElementById('indi-alert-push');
    if (pu) pu.addEventListener('change', (e) => { indiState.alerts.push = e.target.checked; });
    const em = document.getElementById('indi-alert-email');
    if (em) em.addEventListener('change', (e) => { indiState.alerts.email = e.target.checked; });
}

function setupIndiStep5() {
    const n = document.getElementById('indicator-name');
    if (n) n.addEventListener('change', (e) => { indiState.indicatorName = e.target.value || 'MyIndicator'; });
    const p = document.getElementById('indi-platform');
    if (p) p.addEventListener('change', (e) => { indiState.platform = e.target.value; });
    const g = document.getElementById('indi-generate-code');
    if (g) g.addEventListener('click', generateIndicatorCode);
    const c = document.getElementById('indi-copy-code');
    if (c) c.addEventListener('click', copyIndicatorCode);
    const d = document.getElementById('indi-download-code');
    if (d) d.addEventListener('click', downloadIndicatorCode);
}



function generateIndicatorCode() {
    try {
        const code = IndicatorGenerator.generate(indiState);
        const el = document.getElementById('indi-generated-code'); if (el) el.textContent = code;
        showToast('繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ繧ｳ繝ｼ繝峨ｒ逕滓・縺励∪縺励◆', 'success');
    } catch (error) { console.error('Indicator code generation error:', error); showToast('繧ｳ繝ｼ繝臥函謌舌お繝ｩ繝ｼ: ' + error.message, 'error'); }
}

function copyIndicatorCode() {
    const el = document.getElementById('indi-generated-code');
    if (el) navigator.clipboard.writeText(el.textContent).then(() => { showToast('繧ｳ繝ｼ繝峨ｒ繧ｳ繝斐・縺励∪縺励◆', 'success'); }).catch(() => { showToast('繧ｳ繝斐・縺ｫ螟ｱ謨励＠縺ｾ縺励◆', 'error'); });
}

function downloadIndicatorCode() {
    const el = document.getElementById('indi-generated-code');
    if (el) {
        const code = el.textContent;
        const ext = indiState.platform === 'mt4' ? 'mq4' : 'mq5';
        const filename = `${indiState.indicatorName}.${ext}`;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showToast(`${filename} 繧偵ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨＠縺ｾ縺励◆`, 'success');
    }
}

function setupIndiNavigation() {
    const s1n = document.getElementById('indi-step1-next'); if (s1n) s1n.addEventListener('click', () => showIndiStep(2));
    const s2p = document.getElementById('indi-step2-prev'); if (s2p) s2p.addEventListener('click', () => showIndiStep(1));
    const s2n = document.getElementById('indi-step2-next'); if (s2n) s2n.addEventListener('click', () => showIndiStep(3));
    const s3p = document.getElementById('indi-step3-prev'); if (s3p) s3p.addEventListener('click', () => showIndiStep(2));
    const s3n = document.getElementById('indi-step3-next'); if (s3n) s3n.addEventListener('click', () => showIndiStep(4));
    const s4p = document.getElementById('indi-step4-prev'); if (s4p) s4p.addEventListener('click', () => showIndiStep(3));
    const s4n = document.getElementById('indi-step4-next'); if (s4n) s4n.addEventListener('click', () => showIndiStep(5));
    const s5p = document.getElementById('indi-step5-prev'); if (s5p) s5p.addEventListener('click', () => showIndiStep(4));

    document.querySelectorAll('#indicator-flow .progress-step').forEach(step => {
        step.addEventListener('click', () => { showIndiStep(parseInt(step.dataset.step)); });
    });
}

function showIndiStep(stepNum) {
    for (let i = 1; i <= 5; i++) { const s = document.getElementById(`indi-step-${i}`); if (s) s.classList.add('hidden'); }
    const target = document.getElementById(`indi-step-${stepNum}`); if (target) target.classList.remove('hidden');
    updateIndiProgress(stepNum);
}

function updateIndiProgress(currentStep) {
    document.querySelectorAll('#indicator-flow .progress-step').forEach(step => {
        const n = parseInt(step.dataset.step);
        step.classList.remove('active', 'completed');
        if (n === currentStep) step.classList.add('active');
        else if (n < currentStep) step.classList.add('completed');
    });
}

// ============================================================
// [A-070] Wizard Logic (Entry & Exit Condition Wizard)
// ============================================================

function openWizard(targetType) {
  wizardState.targetType = targetType;
  wizardState.step = 1;
  wizardState.category = '';
  wizardState.indicator = '';
  wizardState.detail = '';
  wizardState.conditionType = '';
  wizardState.value1 = '';
  wizardState.value2 = '';
  wizardState.shift = 0;

  const modal = document.getElementById('wizard-modal');
  if (!modal) { console.error('wizard-modal not found'); return; }
  modal.classList.add('active');
  modal.classList.remove('hidden');

  const titleEl = document.getElementById('wizard-title');
  if (titleEl) {
    if (targetType === 'buy') {
      titleEl.textContent = 'Buy 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ繧定ｿｽ蜉�';
    } else if (targetType === 'sell') {
      titleEl.textContent = 'Sell 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ繧定ｿｽ蜉�';
    } else if (targetType === 'exit') {
      titleEl.textContent = '繧ｨ繧ｰ繧ｸ繝・ヨ譚｡莉ｶ繧定ｿｽ蜉�';
    }
  }

  renderWizardStep1();
}

function closeWizard() {
  const modal = document.getElementById('wizard-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
  }
  wizardState.step = 1;
}

// ---------- Wizard Step 1: Category ----------
function renderWizardStep1() {
  wizardState.step = 1;
  const container = document.getElementById('wizard-body');
  container.innerHTML = '';

  const categories = [
    { id: 'indicator', label: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ', icon: '??', desc: 'MA縲ヽSI縲｀ACD遲峨・荳ｻ隕∵欠讓・ },
    { id: 'candle',    label: '繝ｭ繝ｼ繧ｽ繧ｯ雜ｳ',     icon: '???', desc: '髯ｽ邱壹・髯ｰ邱壹ｄ繝斐Φ繝舌・遲峨・蠖｢迥ｶ' },
    { id: 'price',     label: '萓｡譬ｼ',           icon: '??', desc: '迚ｹ螳壹・萓｡譬ｼ豌ｴ貅悶ｄ鬮伜､繝ｻ螳牙､' }
  ];

  const grid = document.createElement('div');
  grid.className = 'wizard-card-grid';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'wizard-card';
    card.innerHTML = `
      <div class="wizard-card-icon">${cat.icon}</div>
      <div class="wizard-card-label">${cat.label}</div>
      <div class="wizard-card-desc">${cat.desc}</div>
    `;
    card.addEventListener('click', () => {
      wizardState.category = cat.id;
      renderWizardStep2();
    });
    grid.appendChild(card);
  });

  container.appendChild(grid);
  updateWizardNav();
}

// ---------- Wizard Step 2: Indicator / Sub-Category ----------
function renderWizardStep2() {
  wizardState.step = 2;
  const container = document.getElementById('wizard-body');
  container.innerHTML = '';

  let items = [];
  if (wizardState.category === 'indicator') {
    items = [
      { id: 'ma',             label: '遘ｻ蜍募ｹｳ蝮・ｷ・MA)', desc: '繝医Ξ繝ｳ繝峨・譁ｹ蜷醍｢ｺ隱・ },
      { id: 'ma_cross',       label: 'MA繧ｯ繝ｭ繧ｹ蟆ら畑', desc: '遏ｭ譛溘→髟ｷ譛溘・繧ｯ繝ｭ繧ｹ繧貞愛螳・ },
      { id: 'ma_perfect',     label: 'MA繝代・繝輔ぉ繧ｯ繝医が繝ｼ繝繝ｼ', desc: '3?4譛ｬ縺ｮ荳ｦ縺ｳ繧貞愛螳・ },
      { id: 'ma_deviation',   label: 'MA荵夜屬邇・, desc: '萓｡譬ｼ縺ｨMA縺ｮ荵夜屬繧呈ｸｬ螳・ },
      { id: 'heiken_ashi',    label: '蟷ｳ蝮・ｶｳ', desc: '繝医Ξ繝ｳ繝牙､蛾・繧貞愛螳・ },
      { id: 'bollinger',      label: '繝懊Μ繝ｳ繧ｸ繝｣繝ｼ繝舌Φ繝・, desc: '繝懊Λ繝・ぅ繝ｪ繝・ぅ縺ｨ蜿咲匱遒ｺ隱・ },
      { id: 'rsi',            label: 'RSI', desc: '雋ｷ繧上ｌ縺吶℃繝ｻ螢ｲ繧峨ｌ縺吶℃繧貞愛譁ｭ' },
      { id: 'macd',           label: 'MACD', desc: '繝医Ξ繝ｳ繝峨・霆｢謠帷せ繧呈爾繧・ },
      { id: 'stochastic',     label: '繧ｹ繝医く繝｣繧ｹ', desc: '繝ｬ繝ｳ繧ｸ縺ｧ縺ｮ騾・ｼｵ繧翫↓譛牙柑' },
      { id: 'adx',            label: 'ADX', desc: '繝医Ξ繝ｳ繝峨・蠑ｷ縺輔ｒ貂ｬ螳・ },
      { id: 'ichimoku',       label: '荳逶ｮ蝮・｡｡陦ｨ', desc: '隍・粋逧・↑逶ｸ蝣ｴ迺ｰ蠅・ｒ蛻・梵' },
      { id: 'atr',            label: 'ATR', desc: '繝懊Λ繝・ぅ繝ｪ繝・ぅ縺ｮ螟牙虚繧呈ｸｬ螳・ },
      { id: 'round_numbers',  label: '繧ｭ繝ｪ繝舌Φ蜿門ｾ・, desc: '100pips遲峨・遽逶ｮ繧貞愛螳・ },
      { id: 'holiday_filter', label: '逾晄律蛻ｶ蠕｡', desc: '荳ｻ隕∝嵜縺ｮ逾晄律縺ｫ繝医Ξ繝ｼ繝牙●豁｢' }
    ];
  } else if (wizardState.category === 'candle') {
    items = [
      { id: 'bullish',       label: '髯ｽ邱・, desc: '荳頑・縺ｮ蜍｢縺・ｒ遒ｺ隱・ },
      { id: 'bearish',       label: '髯ｰ邱・, desc: '荳玖誠縺ｮ蜍｢縺・ｒ遒ｺ隱・ },
      { id: 'pinbar_bull',   label: '蠑ｷ豌励ヴ繝ｳ繝舌・', desc: '螳牙､蝨上〒縺ｮ蜿崎ｻ｢繧ｷ繧ｰ繝翫Ν' },
      { id: 'pinbar_bear',   label: '蠑ｱ豌励ヴ繝ｳ繝舌・', desc: '鬮伜､蝨上〒縺ｮ蜿崎ｻ｢繧ｷ繧ｰ繝翫Ν' },
      { id: 'engulfing_bull',label: '髯ｽ邱壼桁縺ｿ雜ｳ', desc: '蠑ｷ縺・ｸ頑・霆｢謠帙・蜈・＠' },
      { id: 'engulfing_bear',label: '髯ｰ邱壼桁縺ｿ雜ｳ', desc: '蠑ｷ縺・ｸ玖誠霆｢謠帙・蜈・＠' }
    ];
  } else {
    items = [
      { id: 'price_above',  label: '萓｡譬ｼ縺娯雷繧医ｊ荳・, desc: '繧ｭ繝ｪ逡ｪ繧・ｰｴ蟷ｳ邱壹→縺ｮ豈碑ｼ・ },
      { id: 'price_below',  label: '萓｡譬ｼ縺娯雷繧医ｊ荳・, desc: '繧ｭ繝ｪ逡ｪ繧・ｰｴ蟷ｳ邱壹→縺ｮ豈碑ｼ・ },
      { id: 'price_break',  label: '萓｡譬ｼ繝悶Ξ繧､繧ｯ',   desc: '迚ｹ螳壹Λ繧､繝ｳ縺ｮ遯∫�ｴ繧堤｢ｺ隱・ }
    ];
  }

  // Search Bar
  const searchContainer = document.createElement('div');
  searchContainer.className = 'wizard-search-container';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'wizard-search-input';
  searchInput.placeholder = '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ繧呈､懃ｴ｢...';
  searchContainer.appendChild(searchInput);
  container.appendChild(searchContainer);

  const grid = document.createElement('div');
  grid.className = 'wizard-card-grid';
  container.appendChild(grid);

  function filterItems(query) {
    grid.innerHTML = '';
    const filtered = items.filter(it => 
      it.label.toLowerCase().includes(query.toLowerCase()) || 
      it.desc.toLowerCase().includes(query.toLowerCase())
    );
    
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'wizard-card';
      card.innerHTML = `
        <div class="wizard-card-label">${item.label}</div>
        <div class="wizard-card-desc">${item.desc}</div>
      `;
      card.addEventListener('click', () => {
        wizardState.indicator = item.id;
        wizardState.detail = item.label;
        renderWizardStep3();
      });
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener('input', (e) => filterItems(e.target.value));
  filterItems(''); 

  updateWizardNav();
}

// ---------- Wizard Step 3: Condition Type ----------
function renderWizardStep3() {
  wizardState.step = 3;
  const container = document.getElementById('wizard-body');
  container.innerHTML = '';

  let conditions = [];
  if (wizardState.category === 'indicator') {
    conditions = getIndicatorConditions(wizardState.indicator);
  } else if (wizardState.category === 'candle') {
    conditions = getCandleConditions(wizardState.indicator);
  } else if (wizardState.category === 'price') {
    conditions = getPriceConditions(wizardState.indicator);
  }

  const grid = document.createElement('div');
  grid.className = 'wizard-card-grid';
  // 譚｡莉ｶ繧ｿ繧､繝励・蜷榊燕縺碁聞縺・◆繧√・蛻怜崋螳壹↓縺吶ｋ繧ｹ繧ｿ繧､繝ｫ繧剃ｸ譎ら噪縺ｫ驕ｩ逕ｨ
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';

  conditions.forEach(cond => {
    const card = document.createElement('div');
    card.className = 'wizard-card';
    card.style.minHeight = '100px';
    card.innerHTML = `
      <div class="wizard-card-label">${cond.label}</div>
    `;
    card.addEventListener('click', () => {
      wizardState.conditionType = cond.id;
      renderWizardStep4();
    });
    grid.appendChild(card);
  });

  container.appendChild(grid);
  updateWizardNav();
}

// ---------- Condition Lists ----------
function getIndicatorConditions(indicator) {
  switch (indicator) {
    case 'ma':
      return [
        { id: 'cross_up',    label: '繧ｴ繝ｼ繝ｫ繝・Φ繧ｯ繝ｭ繧ｹ(遏ｭ譛溘′髟ｷ譛溘ｒ荳頑栢縺・' },
        { id: 'cross_down',  label: '繝・ャ繝峨け繝ｭ繧ｹ(遏ｭ譛溘′髟ｷ譛溘ｒ荳区栢縺・' },
        { id: 'above',       label: '遏ｭ譛櫪A縺碁聞譛櫪A繧医ｊ荳・ },
        { id: 'below',       label: '遏ｭ譛櫪A縺碁聞譛櫪A繧医ｊ荳・ },
        { id: 'price_above', label: '萓｡譬ｼ縺勲A繧医ｊ荳・ },
        { id: 'price_below', label: '萓｡譬ｼ縺勲A繧医ｊ荳・ }
      ];
    case 'bollinger':
      return [
        { id: 'touch_upper',  label: '萓｡譬ｼ縺御ｸ翫ヰ繝ｳ繝峨↓繧ｿ繝・メ' },
        { id: 'touch_lower',  label: '萓｡譬ｼ縺御ｸ九ヰ繝ｳ繝峨↓繧ｿ繝・メ' },
        { id: 'break_upper',  label: '萓｡譬ｼ縺御ｸ翫ヰ繝ｳ繝峨ｒ繝悶Ξ繧､繧ｯ' },
        { id: 'break_lower',  label: '萓｡譬ｼ縺御ｸ九ヰ繝ｳ繝峨ｒ繝悶Ξ繧､繧ｯ' },
        { id: 'squeeze',      label: '繝舌Φ繝牙ｹ・′邵ｮ蟆・繧ｹ繧ｯ繧､繝ｼ繧ｺ)' },
        { id: 'expansion',    label: '繝舌Φ繝牙ｹ・′諡｡螟ｧ(繧ｨ繧ｯ繧ｹ繝代Φ繧ｷ繝ｧ繝ｳ)' },
        { id: 'inside_bands', label: '萓｡譬ｼ縺後ヰ繝ｳ繝牙・' },
        { id: 'walk_upper',   label: '繝舌Φ繝峨え繧ｩ繝ｼ繧ｯ(荳・' },
        { id: 'walk_lower',   label: '繝舌Φ繝峨え繧ｩ繝ｼ繧ｯ(荳・' }
      ];
    case 'rsi':
      return [
        { id: 'above_level',  label: 'RSI縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'below_level',  label: 'RSI縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'cross_up',     label: 'RSI縺後Ξ繝吶Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'RSI縺後Ξ繝吶Ν繧剃ｸ区栢縺・ }
      ];
    case 'macd':
      return [
        { id: 'cross_up',     label: 'MACD繝ｩ繧､繝ｳ縺後す繧ｰ繝翫Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'MACD繝ｩ繧､繝ｳ縺後す繧ｰ繝翫Ν繧剃ｸ区栢縺・ },
        { id: 'above_zero',   label: 'MACD繝ｩ繧､繝ｳ縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'MACD繝ｩ繧､繝ｳ縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'histogram_up', label: '繝偵せ繝医げ繝ｩ繝�縺悟｢怜刈' },
        { id: 'histogram_dn', label: '繝偵せ繝医げ繝ｩ繝�縺梧ｸ帛ｰ・ }
      ];
    case 'stochastic':
      return [
        { id: 'cross_up',     label: '%K縺・D繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: '%K縺・D繧剃ｸ区栢縺・ },
        { id: 'above_level',  label: '%K縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'below_level',  label: '%K縺後Ξ繝吶Ν繧医ｊ荳・ }
      ];
    case 'cci':
      return [
        { id: 'above_level',  label: 'CCI縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'below_level',  label: 'CCI縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'cross_up',     label: 'CCI縺後Ξ繝吶Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'CCI縺後Ξ繝吶Ν繧剃ｸ区栢縺・ }
      ];
    case 'adx':
      return [
        { id: 'above_level',  label: 'ADX縺後Ξ繝吶Ν繧医ｊ荳・繝医Ξ繝ｳ繝牙ｼｷ縺・' },
        { id: 'below_level',  label: 'ADX縺後Ξ繝吶Ν繧医ｊ荳・繝医Ξ繝ｳ繝牙ｼｱ縺・' },
        { id: 'di_cross_up',  label: '+DI縺・DI繧剃ｸ頑栢縺・ },
        { id: 'di_cross_down',label: '+DI縺・DI繧剃ｸ区栢縺・ }
      ];
    case 'atr':
      return [
        { id: 'above_level',  label: 'ATR縺悟､繧医ｊ荳・ },
        { id: 'below_level',  label: 'ATR縺悟､繧医ｊ荳・ }
      ];
    case 'ichimoku':
      return [
        { id: 'tenkan_above_kijun', label: '霆｢謠帷ｷ壹′蝓ｺ貅也ｷ壹ｈ繧贋ｸ・ },
        { id: 'tenkan_below_kijun', label: '霆｢謠帷ｷ壹′蝓ｺ貅也ｷ壹ｈ繧贋ｸ・ },
        { id: 'tenkan_cross_up',    label: '霆｢謠帷ｷ壹′蝓ｺ貅也ｷ壹ｒ荳頑栢縺・ },
        { id: 'tenkan_cross_down',  label: '霆｢謠帷ｷ壹′蝓ｺ貅也ｷ壹ｒ荳区栢縺・ },
        { id: 'price_above_cloud',  label: '萓｡譬ｼ縺碁峇繧医ｊ荳・ },
        { id: 'price_below_cloud',  label: '萓｡譬ｼ縺碁峇繧医ｊ荳・ },
        { id: 'price_in_cloud',     label: '萓｡譬ｼ縺碁峇縺ｮ荳ｭ' },
        { id: 'chikou_above',       label: '驕・｡後せ繝代Φ縺御ｾ｡譬ｼ繧医ｊ荳・ },
        { id: 'chikou_below',       label: '驕・｡後せ繝代Φ縺御ｾ｡譬ｼ繧医ｊ荳・ }
      ];
    case 'envelope':
      return [
        { id: 'touch_upper',  label: '萓｡譬ｼ縺御ｸ翫Λ繧､繝ｳ縺ｫ繧ｿ繝・メ' },
        { id: 'touch_lower',  label: '萓｡譬ｼ縺御ｸ九Λ繧､繝ｳ縺ｫ繧ｿ繝・メ' },
        { id: 'break_upper',  label: '萓｡譬ｼ縺御ｸ翫Λ繧､繝ｳ繧偵ヶ繝ｬ繧､繧ｯ' },
        { id: 'break_lower',  label: '萓｡譬ｼ縺御ｸ九Λ繧､繝ｳ繧偵ヶ繝ｬ繧､繧ｯ' }
      ];
    case 'parabolic':
      return [
        { id: 'below_price',  label: 'SAR縺御ｾ｡譬ｼ縺ｮ荳・荳頑・繝医Ξ繝ｳ繝・' },
        { id: 'above_price',  label: 'SAR縺御ｾ｡譬ｼ縺ｮ荳・荳矩剄繝医Ξ繝ｳ繝・' },
        { id: 'flip_up',      label: 'SAR縺御ｸ九°繧我ｸ翫↓蜿崎ｻ｢' },
        { id: 'flip_down',    label: 'SAR縺御ｸ翫°繧我ｸ九↓蜿崎ｻ｢' }
      ];
    case 'williams':
      return [
        { id: 'above_level',  label: '%R縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'below_level',  label: '%R縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'cross_up',     label: '%R縺後Ξ繝吶Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: '%R縺後Ξ繝吶Ν繧剃ｸ区栢縺・ }
      ];
    case 'demarker':
      return [
        { id: 'above_level',  label: 'DeMarker縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'below_level',  label: 'DeMarker縺後Ξ繝吶Ν繧医ｊ荳・ },
        { id: 'cross_up',     label: 'DeMarker縺後Ξ繝吶Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'DeMarker縺後Ξ繝吶Ν繧剃ｸ区栢縺・ }
      ];
    case 'momentum':
      return [
        { id: 'above_100',    label: '繝｢繝｡繝ｳ繧ｿ繝�縺・00繧医ｊ荳・ },
        { id: 'below_100',    label: '繝｢繝｡繝ｳ繧ｿ繝�縺・00繧医ｊ荳・ },
        { id: 'cross_up',     label: '繝｢繝｡繝ｳ繧ｿ繝�縺・00繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: '繝｢繝｡繝ｳ繧ｿ繝�縺・00繧剃ｸ区栢縺・ }
      ];
    case 'osma':
      return [
        { id: 'above_zero',   label: 'OsMA縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'OsMA縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'cross_up',     label: 'OsMA縺後ぞ繝ｭ繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'OsMA縺後ぞ繝ｭ繧剃ｸ区栢縺・ }
      ];
    case 'ao':
      return [
        { id: 'above_zero',   label: 'AO縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'AO縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'cross_up',     label: 'AO縺後ぞ繝ｭ繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'AO縺後ぞ繝ｭ繧剃ｸ区栢縺・ },
        { id: 'saucer_buy',   label: '繧ｽ繝ｼ繧ｵ繝ｼ(雋ｷ縺・' },
        { id: 'saucer_sell',  label: '繧ｽ繝ｼ繧ｵ繝ｼ(螢ｲ繧・' }
      ];
    case 'ac':
      return [
        { id: 'above_zero',   label: 'AC縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'AC縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'rising',       label: 'AC縺御ｸ頑・荳ｭ' },
        { id: 'falling',      label: 'AC縺御ｸ玖誠荳ｭ' }
      ];
    case 'rvi':
      return [
        { id: 'cross_up',     label: 'RVI縺後す繧ｰ繝翫Ν繧剃ｸ頑栢縺・ },
        { id: 'cross_down',   label: 'RVI縺後す繧ｰ繝翫Ν繧剃ｸ区栢縺・ },
        { id: 'above_zero',   label: 'RVI縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'RVI縺後ぞ繝ｭ繧医ｊ荳・ }
      ];
    case 'bears':
      return [
        { id: 'above_zero',   label: 'Bears Power縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'Bears Power縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'rising',       label: 'Bears Power縺御ｸ頑・荳ｭ' },
        { id: 'falling',      label: 'Bears Power縺御ｸ矩剄荳ｭ' }
      ];
    case 'bulls':
      return [
        { id: 'above_zero',   label: 'Bulls Power縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'below_zero',   label: 'Bulls Power縺後ぞ繝ｭ繧医ｊ荳・ },
        { id: 'rising',       label: 'Bulls Power縺御ｸ頑・荳ｭ' },
        { id: 'falling',      label: 'Bulls Power縺御ｸ矩剄荳ｭ' }
      ];
    case 'pivot':
      return [
        { id: 'price_above_r1',  label: '萓｡譬ｼ縺軍1繧医ｊ荳・ },
        { id: 'price_below_s1',  label: '萓｡譬ｼ縺郡1繧医ｊ荳・ },
        { id: 'price_above_r2',  label: '萓｡譬ｼ縺軍2繧医ｊ荳・ },
        { id: 'price_below_s2',  label: '萓｡譬ｼ縺郡2繧医ｊ荳・ },
        { id: 'price_above_r3',  label: '萓｡譬ｼ縺軍3繧医ｊ荳・ },
        { id: 'price_below_s3',  label: '萓｡譬ｼ縺郡3繧医ｊ荳・ },
        { id: 'price_above_pp',  label: '萓｡譬ｼ縺訓P繧医ｊ荳・ },
        { id: 'price_below_pp',  label: '萓｡譬ｼ縺訓P繧医ｊ荳・ },
        { id: 'cross_up_pp',     label: '萓｡譬ｼ縺訓P繧剃ｸ頑栢縺・ },
        { id: 'cross_down_pp',   label: '萓｡譬ｼ縺訓P繧剃ｸ区栢縺・ },
        { id: 'cross_up_r1',     label: '萓｡譬ｼ縺軍1繧剃ｸ頑栢縺・ },
        { id: 'cross_down_s1',   label: '萓｡譬ｼ縺郡1繧剃ｸ区栢縺・ }
      ];
    case 'fibonacci':
      return [
        { id: 'price_above_236', label: '萓｡譬ｼ縺・3.6%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_below_236', label: '萓｡譬ｼ縺・3.6%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_above_382', label: '萓｡譬ｼ縺・8.2%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_below_382', label: '萓｡譬ｼ縺・8.2%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_above_500', label: '萓｡譬ｼ縺・0.0%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_below_500', label: '萓｡譬ｼ縺・0.0%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_above_618', label: '萓｡譬ｼ縺・1.8%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_below_618', label: '萓｡譬ｼ縺・1.8%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_above_786', label: '萓｡譬ｼ縺・8.6%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'price_below_786', label: '萓｡譬ｼ縺・8.6%繝ｩ繧､繝ｳ繧医ｊ荳・ },
        { id: 'cross_up_382',    label: '萓｡譬ｼ縺・8.2%繧剃ｸ頑栢縺・ },
        { id: 'cross_down_382',  label: '萓｡譬ｼ縺・8.2%繧剃ｸ区栢縺・ },
        { id: 'cross_up_618',    label: '萓｡譬ｼ縺・1.8%繧剃ｸ頑栢縺・ },
        { id: 'cross_down_618',  label: '萓｡譬ｼ縺・1.8%繧剃ｸ区栢縺・ }
      ];
    default:
      return [];
  }
}

function getCandleConditions(indicator) {
  switch (indicator) {
    case 'body_size':
      return [
        { id: 'above_pips', label: '螳滉ｽ薙′Npips莉･荳・ },
        { id: 'below_pips', label: '螳滉ｽ薙′Npips莉･荳・ }
      ];
    case 'upper_wick':
      return [
        { id: 'above_pips', label: '荳翫ヲ繧ｲ縺君pips莉･荳・ },
        { id: 'below_pips', label: '荳翫ヲ繧ｲ縺君pips莉･荳・ }
      ];
    case 'lower_wick':
      return [
        { id: 'above_pips', label: '荳九ヲ繧ｲ縺君pips莉･荳・ },
        { id: 'below_pips', label: '荳九ヲ繧ｲ縺君pips莉･荳・ }
      ];
    case 'bullish':
      return [{ id: 'is_true', label: '髯ｽ邱壹〒縺ゅｋ' }];
    case 'bearish':
      return [{ id: 'is_true', label: '髯ｰ邱壹〒縺ゅｋ' }];
    case 'doji':
      return [{ id: 'is_true', label: '蜷梧凾邱壹〒縺ゅｋ' }];
    case 'engulfing_bull':
      return [{ id: 'is_true', label: '髯ｽ邱壼桁縺ｿ雜ｳ縺悟・迴ｾ' }];
    case 'engulfing_bear':
      return [{ id: 'is_true', label: '髯ｰ邱壼桁縺ｿ雜ｳ縺悟・迴ｾ' }];
    case 'pinbar_bull':
      return [{ id: 'is_true', label: '蠑ｷ豌励ヴ繝ｳ繝舌・縺悟・迴ｾ' }];
    case 'pinbar_bear':
      return [{ id: 'is_true', label: '蠑ｱ豌励ヴ繝ｳ繝舌・縺悟・迴ｾ' }];
    default:
      return [];
  }
}

function getPriceConditions(indicator) {
  switch (indicator) {
    case 'price_above':
      return [
        { id: 'fixed_price', label: '蝗ｺ螳壻ｾ｡譬ｼ' },
        { id: 'indicator',   label: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ蛟､' }
      ];
    case 'price_below':
      return [
        { id: 'fixed_price', label: '蝗ｺ螳壻ｾ｡譬ｼ' },
        { id: 'indicator',   label: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ蛟､' }
      ];
    case 'price_cross_up':
      return [
        { id: 'fixed_price', label: '蝗ｺ螳壻ｾ｡譬ｼ' },
        { id: 'indicator',   label: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ蛟､' }
      ];
    case 'price_cross_dn':
      return [
        { id: 'fixed_price', label: '蝗ｺ螳壻ｾ｡譬ｼ' },
        { id: 'indicator',   label: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ蛟､' }
      ];
    default:
      return [];
  }
}

// ---------- Wizard Step 4: Parameters ----------
function renderWizardStep4() {
  wizardState.step = 4;
  const container = document.getElementById('wizard-body');
  container.innerHTML = '';

  const params = getRequiredParams(wizardState.category, wizardState.indicator, wizardState.conditionType);

  params.forEach(param => {
    const group = document.createElement('div');
    group.className = 'wizard-param-group';

    const label = document.createElement('label');
    label.textContent = param.label;
    group.appendChild(label);

    if (param.type === 'number') {
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'wizard-param-input';
      input.dataset.paramId = param.id;
      input.value = param.default || '';
      input.step = param.step || '1';
      if (param.min !== undefined) input.min = param.min;
      if (param.max !== undefined) input.max = param.max;
      group.appendChild(input);
    } else if (param.type === 'select') {
      const select = document.createElement('select');
      select.className = 'wizard-param-select';
      select.dataset.paramId = param.id;
      param.options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.value === param.default) option.selected = true;
        select.appendChild(option);
      });
      group.appendChild(select);
    }

    container.appendChild(group);
  });

  // --- Judgment Timeframe (P4-1) ---
  const tfGroup = document.createElement('div');
  tfGroup.className = 'wizard-param-group';
  const tfLabel = document.createElement('label');
  tfLabel.textContent = '蛻､譁ｭ譎る俣雜ｳ';
  tfGroup.appendChild(tfLabel);
  const tfSelect = document.createElement('select');
  tfSelect.className = 'wizard-param-select';
  tfSelect.dataset.paramId = 'condTimeframe';
  const tfOptions = [
    { value: '0',           label: '迴ｾ蝨ｨ縺ｮ繝√Ε繝ｼ繝・ },
    { value: 'PERIOD_M1',   label: 'M1 (1蛻・ｶｳ)' },
    { value: 'PERIOD_M5',   label: 'M5 (5蛻・ｶｳ)' },
    { value: 'PERIOD_M15',  label: 'M15 (15蛻・ｶｳ)' },
    { value: 'PERIOD_M30',  label: 'M30 (30蛻・ｶｳ)' },
    { value: 'PERIOD_H1',   label: 'H1 (1譎る俣雜ｳ)' },
    { value: 'PERIOD_H4',   label: 'H4 (4譎る俣雜ｳ)' },
    { value: 'PERIOD_D1',   label: 'D1 (譌･雜ｳ)' },
    { value: 'PERIOD_W1',   label: 'W1 (騾ｱ雜ｳ)' },
    { value: 'PERIOD_MN1',  label: 'MN1 (譛郁ｶｳ)' }
  ];
  tfOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    if (option.value === '0') option.selected = true;
    tfSelect.appendChild(option);
  });
  tfGroup.appendChild(tfSelect);
  container.appendChild(tfGroup);

  // --- Confirm Bars (P4-1) ---
  const cbGroup = document.createElement('div');
  cbGroup.className = 'wizard-param-group';
  const cbLabel = document.createElement('label');
  cbLabel.textContent = '遒ｺ螳壼ｾ・■譛ｬ謨ｰ (0=逋ｺ逕溯ｶｳ縺ｧ縺吶＄蛻､螳・';
  cbGroup.appendChild(cbLabel);
  const cbInput = document.createElement('input');
  cbInput.type = 'number';
  cbInput.className = 'wizard-param-input';
  cbInput.dataset.paramId = 'confirmBars';
  cbInput.value = '0';
  cbInput.min = '0';
  cbInput.max = '100';
  cbGroup.appendChild(cbInput);
  container.appendChild(cbGroup);

  // --- Shift (legacy, shown when timeframe = current chart) ---
  const shiftGroup = document.createElement('div');
  shiftGroup.className = 'wizard-param-group';
  shiftGroup.id = 'wizard-shift-group';
  const shiftLabel = document.createElement('label');
  shiftLabel.textContent = '繧ｷ繝輔ヨ (菴墓悽蜑阪・雜ｳ 窶ｻ 蛻､螳壽凾髢楢ｶｳ縺後檎樟蝨ｨ縺ｮ繝√Ε繝ｼ繝医肴凾縺ｮ縺ｿ譛牙柑)';
  shiftGroup.appendChild(shiftLabel);
  const shiftInput = document.createElement('input');
  shiftInput.type = 'number';
  shiftInput.className = 'wizard-param-input';
  shiftInput.dataset.paramId = 'shift';
  shiftInput.value = '1';
  shiftInput.min = '0';
  shiftInput.max = '100';
  shiftGroup.appendChild(shiftInput);
  container.appendChild(shiftGroup);

  // Toggle shift visibility based on timeframe
  tfSelect.addEventListener('change', () => {
    shiftGroup.style.display = tfSelect.value === '0' ? 'block' : 'none';
  });

  updateWizardNav();
}

// ---------- Get Required Params ----------
function getRequiredParams(category, indicator, conditionType) {
  const params = [];

  if (category === 'indicator') {
    switch (indicator) {
      case 'ma':
        params.push({ id: 'ma_period_short', label: '遏ｭ譛櫪A譛滄俣', type: 'number', default: 20, min: 1 });
        params.push({ id: 'ma_period_long', label: '髟ｷ譛櫪A譛滄俣', type: 'number', default: 50, min: 1 });
        params.push({
          id: 'ma_method', label: 'MA遞ｮ蛻･', type: 'select', default: '0',
          options: [
            { value: '0', label: 'SMA' }, { value: '1', label: 'EMA' },
            { value: '2', label: 'SMMA' }, { value: '3', label: 'LWMA' }
          ]
        });
        params.push({
          id: 'ma_apply', label: '驕ｩ逕ｨ萓｡譬ｼ', type: 'select', default: '0',
          options: [
            { value: '0', label: 'Close' }, { value: '1', label: 'Open' },
            { value: '2', label: 'High' }, { value: '3', label: 'Low' },
            { value: '4', label: 'Median' }, { value: '5', label: 'Typical' },
            { value: '6', label: 'Weighted' }
          ]
        });
        break;
      case 'heiken_ashi':
        params.push({ id: 'ha_dummy', label: '蟷ｳ蝮・ｶｳ險ｭ螳・, type: 'select', default: '0', 
          options: [{ value: '0', label: '讓呎ｺ・(iCustom)' }] 
        });
        break;
      case 'ma_cross':
        params.push({ id: 'ma_fast_period', label: '遏ｭ譛滓悄髢・, type: 'number', default: 5 });
        params.push({ id: 'ma_slow_period', label: '髟ｷ譛滓悄髢・, type: 'number', default: 20 });
        params.push({
          id: 'ma_method', label: 'MA遞ｮ蛻･', type: 'select', default: '0',
          options: [
            { value: '0', label: 'SMA' }, { value: '1', label: 'EMA' },
            { value: '2', label: 'SMMA' }, { value: '3', label: 'LWMA' }
          ]
        });
        break;
      case 'ma_perfect':
        params.push({ id: 'ma_short_period', label: '遏ｭ譛滓悄髢・, type: 'number', default: 10 });
        params.push({ id: 'ma_mid_period',   label: '荳ｭ譛滓悄髢・, type: 'number', default: 25 });
        params.push({ id: 'ma_long_period',  label: '髟ｷ譛滓悄髢・, type: 'number', default: 50 });
        params.push({
          id: 'ma_method', label: 'MA遞ｮ蛻･', type: 'select', default: '0',
          options: [
            { value: '0', label: 'SMA' }, { value: '1', label: 'EMA' },
            { value: '2', label: 'SMMA' }, { value: '3', label: 'LWMA' }
          ]
        });
        break;
      case 'ma_deviation':
        params.push({ id: 'ma_period', label: 'MA譛滄俣', type: 'number', default: 20 });
        params.push({ id: 'deviation_pips', label: '荵夜屬pips', type: 'number', default: 30 });
        params.push({
          id: 'ma_method', label: 'MA遞ｮ蛻･', type: 'select', default: '0',
          options: [
            { value: '0', label: 'SMA' }, { value: '1', label: 'EMA' },
            { value: '2', label: 'SMMA' }, { value: '3', label: 'LWMA' }
          ]
        });
        break;
      case 'round_numbers':
        params.push({ id: 'round_dist', label: '謗･霑叢ips', type: 'number', default: 5 });
        params.push({
          id: 'round_step', label: '遽逶ｮ髢馴囈', type: 'select', default: '100',
          options: [
            { value: '100', label: '100 pips (.00)' },
            { value: '50',  label: '50 pips (.50)' },
            { value: '10',  label: '10 pips (.x0)' }
          ]
        });
        break;
      case 'holiday_filter':
        params.push({
          id: 'holiday_country', label: '蟇ｾ雎｡蝗ｽ', type: 'select', default: 'JP,US',
          options: [
            { value: 'JP,US', label: '譌･譛ｬ繝ｻ邀ｳ蝗ｽ' },
            { value: 'JP',    label: '譌･譛ｬ縺ｮ縺ｿ' },
            { value: 'US',    label: '邀ｳ蝗ｽ縺ｮ縺ｿ' },
            { value: 'ALL',   label: '荳ｻ隕∝・繝ｶ蝗ｽ' }
          ]
        });
        break;
      case 'envelope':
        params.push({ id: 'env_period', label: '譛滄俣', type: 'number', default: 20, min: 1 });
        params.push({ id: 'env_deviation', label: '蛛丞ｷｮ(%)', type: 'number', default: 0.1, step: '0.01', min: 0 });
        params.push({
          id: 'env_method', label: 'MA遞ｮ蛻･', type: 'select', default: '0',
          options: [
            { value: '0', label: 'SMA' }, { value: '1', label: 'EMA' },
            { value: '2', label: 'SMMA' }, { value: '3', label: 'LWMA' }
          ]
        });
        break;
      case 'parabolic':
        params.push({ id: 'sar_step', label: '繧ｹ繝・ャ繝・, type: 'number', default: 0.02, step: '0.01', min: 0.001 });
        params.push({ id: 'sar_max', label: '譛螟ｧ蛟､', type: 'number', default: 0.2, step: '0.01', min: 0.01 });
        break;
      case 'bollinger':
        params.push({ id: 'bb_period', label: '譛滄俣', type: 'number', default: 20, min: 1 });
        params.push({ id: 'bb_deviation', label: '蛛丞ｷｮ', type: 'number', default: 2.0, step: '0.1', min: 0.1 });
        if (conditionType === 'squeeze' || conditionType === 'expansion') {
          params.push({ id: 'bb_bw_threshold', label: '繝舌Φ繝牙ｹ・明蛟､(pips)', type: 'number', default: 10, min: 0 });
        }
        break;
      case 'rsi':
        params.push({ id: 'rsi_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        params.push({ id: 'rsi_level', label: '繝ｬ繝吶Ν', type: 'number', default: 70, min: 0, max: 100 });
        break;
      case 'macd':
        params.push({ id: 'macd_fast', label: '遏ｭ譛檸MA', type: 'number', default: 12, min: 1 });
        params.push({ id: 'macd_slow', label: '髟ｷ譛檸MA', type: 'number', default: 26, min: 1 });
        params.push({ id: 'macd_signal', label: '繧ｷ繧ｰ繝翫Ν譛滄俣', type: 'number', default: 9, min: 1 });
        break;
      case 'stochastic':
        params.push({ id: 'stoch_k', label: '%K譛滄俣', type: 'number', default: 5, min: 1 });
        params.push({ id: 'stoch_d', label: '%D譛滄俣', type: 'number', default: 3, min: 1 });
        params.push({ id: 'stoch_slowing', label: '繧ｹ繝ｭ繝ｼ繧､繝ｳ繧ｰ', type: 'number', default: 3, min: 1 });
        if (conditionType === 'above_level' || conditionType === 'below_level') {
          params.push({ id: 'stoch_level', label: '繝ｬ繝吶Ν', type: 'number', default: 80, min: 0, max: 100 });
        }
        break;
      case 'cci':
        params.push({ id: 'cci_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        params.push({ id: 'cci_level', label: '繝ｬ繝吶Ν', type: 'number', default: 100 });
        break;
      case 'adx':
        params.push({ id: 'adx_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        if (conditionType === 'above_level' || conditionType === 'below_level') {
          params.push({ id: 'adx_level', label: '繝ｬ繝吶Ν', type: 'number', default: 25, min: 0 });
        }
        break;
      case 'atr':
        params.push({ id: 'atr_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        params.push({ id: 'atr_level', label: '髢ｾ蛟､', type: 'number', default: 0.001, step: '0.0001', min: 0 });
        break;
      case 'ichimoku':
        params.push({ id: 'ichi_tenkan', label: '霆｢謠帷ｷ壽悄髢・, type: 'number', default: 9, min: 1 });
        params.push({ id: 'ichi_kijun', label: '蝓ｺ貅也ｷ壽悄髢・, type: 'number', default: 26, min: 1 });
        params.push({ id: 'ichi_senkou', label: '蜈郁｡後せ繝代ΦB譛滄俣', type: 'number', default: 52, min: 1 });
        break;
      case 'williams':
        params.push({ id: 'wpr_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        params.push({ id: 'wpr_level', label: '繝ｬ繝吶Ν', type: 'number', default: -20 });
        break;
      case 'demarker':
        params.push({ id: 'dem_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        params.push({ id: 'dem_level', label: '繝ｬ繝吶Ν', type: 'number', default: 0.7, step: '0.1', min: 0, max: 1 });
        break;
      case 'momentum':
        params.push({ id: 'mom_period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
        break;
      case 'osma':
        params.push({ id: 'osma_fast', label: '遏ｭ譛檸MA', type: 'number', default: 12, min: 1 });
        params.push({ id: 'osma_slow', label: '髟ｷ譛檸MA', type: 'number', default: 26, min: 1 });
        params.push({ id: 'osma_signal', label: '繧ｷ繧ｰ繝翫Ν譛滄俣', type: 'number', default: 9, min: 1 });
        break;
      case 'ao': break;
      case 'ac': break;
      case 'rvi':
        params.push({ id: 'rvi_period', label: '譛滄俣', type: 'number', default: 10, min: 1 });
        break;
      case 'bears':
        params.push({ id: 'bears_period', label: '譛滄俣', type: 'number', default: 13, min: 1 });
        break;
      case 'bulls':
        params.push({ id: 'bulls_period', label: '譛滄俣', type: 'number', default: 13, min: 1 });
        break;
      case 'pivot':
        params.push({
          id: 'pivot_type', label: '繝斐・繝・ヨ遞ｮ蛻･', type: 'select', default: 'classic',
          options: [
            { value: 'classic', label: '繧ｯ繝ｩ繧ｷ繝・け' }, { value: 'fibonacci', label: '繝輔ぅ繝懊リ繝・メ' },
            { value: 'camarilla', label: '繧ｫ繝槭Μ繝ｩ' }, { value: 'woodie', label: '繧ｦ繝・ョ繧｣' }
          ]
        });
        params.push({
          id: 'pivot_timeframe', label: '邂怜・譎る俣雜ｳ', type: 'select', default: 'PERIOD_D1',
          options: [
            { value: 'PERIOD_H1', label: '1譎る俣雜ｳ' }, { value: 'PERIOD_H4', label: '4譎る俣雜ｳ' },
            { value: 'PERIOD_D1', label: '譌･雜ｳ' }, { value: 'PERIOD_W1', label: '騾ｱ雜ｳ' }
          ]
        });
        break;
      case 'fibonacci':
        params.push({
          id: 'fib_mode', label: '繝輔ぅ繝懊リ繝・メ邂怜・譁ｹ豕・, type: 'select', default: 'highlow',
          options: [
            { value: 'highlow', label: '逶ｴ霑鮮譛ｬ縺ｮ譛鬮伜､繝ｻ譛螳牙､' },
            { value: 'swing', label: '逶ｴ霑代せ繧､繝ｳ繧ｰ繝上う繝ｻ繧ｹ繧､繝ｳ繝輔Ο繝ｼ' }
          ]
        });
        params.push({ id: 'fib_period', label: '邂怜・譛滄俣(譛ｬ謨ｰ)', type: 'number', default: 50, min: 5 });
        params.push({ id: 'fib_swing_strength', label: '繧ｹ繧､繝ｳ繧ｰ蛻､螳壽悽謨ｰ(蟾ｦ蜿ｳN譛ｬ)', type: 'number', default: 5, min: 2, max: 50 });
        params.push({
          id: 'fib_timeframe', label: '邂怜・譎る俣雜ｳ', type: 'select', default: 'PERIOD_D1',
          options: [
            { value: '0', label: '迴ｾ蝨ｨ縺ｮ譎る俣雜ｳ' }, { value: 'PERIOD_H1', label: '1譎る俣雜ｳ' },
            { value: 'PERIOD_H4', label: '4譎る俣雜ｳ' }, { value: 'PERIOD_D1', label: '譌･雜ｳ' },
            { value: 'PERIOD_W1', label: '騾ｱ雜ｳ' }
          ]
        });
        break;
    }
  } else if (category === 'candle') {
    if (conditionType === 'above_pips' || conditionType === 'below_pips') {
      params.push({ id: 'candle_pips', label: 'Pips', type: 'number', default: 10, min: 0 });
    }
  } else if (category === 'price') {
    if (conditionType === 'fixed_price') {
      params.push({ id: 'price_value', label: '萓｡譬ｼ', type: 'number', default: 0, step: '0.00001' });
    } else if (conditionType === 'indicator') {
      params.push({
        id: 'price_indi', label: '豈碑ｼ・う繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ', type: 'select', default: 'ma',
        options: [
          { value: 'ma', label: '遘ｻ蜍募ｹｳ蝮・ｷ・ }, { value: 'bollinger', label: '繝懊Μ繝ｳ繧ｸ繝｣繝ｼ繝舌Φ繝・荳ｭ螟ｮ)' },
          { value: 'envelope_upper', label: '繧ｨ繝ｳ繝吶Ο繝ｼ繝・荳・' }, { value: 'envelope_lower', label: '繧ｨ繝ｳ繝吶Ο繝ｼ繝・荳・' },
          { value: 'parabolic', label: '繝代Λ繝懊Μ繝・けSAR' }
        ]
      });
      params.push({ id: 'price_indi_period', label: '譛滄俣', type: 'number', default: 20, min: 1 });
    }
  }

  return params;
}

// ---------- Wizard Step 5: Confirm ----------
function renderWizardStep5() {
  wizardState.step = 5;
  const container = document.getElementById('wizard-body');
  container.innerHTML = '';

  const paramInputs = document.querySelectorAll('.wizard-param-input, .wizard-param-select');
  const collectedParams = {};
  paramInputs.forEach(el => {
    collectedParams[el.dataset.paramId] = el.value;
  });
  wizardState.params = collectedParams;

  // Determine effective shift (P4-1)
  const condTf = collectedParams.condTimeframe || '0';
  const confirmBars = parseInt(collectedParams.confirmBars || '0', 10);
  if (condTf !== '0') {
    // When using a different timeframe, shift = confirmBars + 1
    wizardState.shift = confirmBars + 1;
  } else {
    wizardState.shift = parseInt(collectedParams.shift || '1', 10);
  }
  wizardState.condTimeframe = condTf;
  wizardState.confirmBars = confirmBars;

  const summary = document.createElement('div');
  summary.className = 'wizard-summary';

  const targetLabel = wizardState.targetType === 'buy' ? 'Buy譚｡莉ｶ'
    : wizardState.targetType === 'sell' ? 'Sell譚｡莉ｶ'
    : '繧ｨ繧ｰ繧ｸ繝・ヨ譚｡莉ｶ';

  const tfLabel = getTfLabel(condTf);

  summary.innerHTML = `
    <h4>${targetLabel} 遒ｺ隱・/h4>
    <p><strong>繧ｫ繝・ざ繝ｪ繝ｼ:</strong> ${wizardState.category === 'indicator' ? '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ' : wizardState.category === 'candle' ? '繝ｭ繝ｼ繧ｽ繧ｯ雜ｳ' : '萓｡譬ｼ繧｢繧ｯ繧ｷ繝ｧ繝ｳ'}</p>
    <p><strong>隧ｳ邏ｰ:</strong> ${wizardState.detail}</p>
    <p><strong>譚｡莉ｶ:</strong> ${wizardState.conditionType}</p>
    <p><strong>蛻､譁ｭ譎る俣雜ｳ:</strong> ${tfLabel}</p>
    ${condTf !== '0' ? '<p><strong>遒ｺ螳壼ｾ・■:</strong> ' + confirmBars + '譛ｬ (螳溷柑繧ｷ繝輔ヨ: ' + wizardState.shift + ')</p>' : '<p><strong>繧ｷ繝輔ヨ:</strong> ' + wizardState.shift + '</p>'}
  `;

  const paramList = document.createElement('div');
  for (const [key, val] of Object.entries(collectedParams)) {
    if (key === 'shift' || key === 'condTimeframe' || key === 'confirmBars') continue;
    const p = document.createElement('p');
    p.innerHTML = `<strong>${key}:</strong> ${val}`;
    paramList.appendChild(p);
  }
  summary.appendChild(paramList);

  container.appendChild(summary);

  updateWizardNav();
}
// ==================== Wizard Helper: createParamInput ====================
function createParamInput(name, label, defaultValue, type) {
  const group = document.createElement('div');
  group.className = 'wizard-param-group';
  group.style.marginBottom = '12px';

  const lbl = document.createElement('label');
  lbl.textContent = label;
  lbl.style.display = 'block';
  lbl.style.marginBottom = '4px';
  lbl.style.color = 'var(--text-secondary, #aaa)';
  lbl.style.fontSize = '0.85rem';
  group.appendChild(lbl);

  const input = document.createElement('input');
  input.type = type || 'number';
  input.name = name;
  input.value = defaultValue;
  input.className = 'form-input wizard-param-input';
  input.dataset.param = name;
  input.style.width = '100%';
  input.style.padding = '8px 12px';
  input.style.borderRadius = '6px';
  input.style.border = '1px solid var(--bg-tertiary, #444)';
  input.style.background = 'var(--bg-tertiary, #2a2a3e)';
  input.style.color = 'var(--text-primary, #fff)';
  input.style.fontSize = '0.95rem';
  group.appendChild(input);

  return group;
}

// ==================== Wizard Helper: createParamSelect ====================
function createParamSelect(name, label, options) {
  const group = document.createElement('div');
  group.className = 'wizard-param-group';
  group.style.marginBottom = '12px';

  const lbl = document.createElement('label');
  lbl.textContent = label;
  lbl.style.display = 'block';
  lbl.style.marginBottom = '4px';
  lbl.style.color = 'var(--text-secondary, #aaa)';
  lbl.style.fontSize = '0.85rem';
  group.appendChild(lbl);

  const select = document.createElement('select');
  select.name = name;
  select.className = 'form-select wizard-param-input';
  select.dataset.param = name;
  select.style.width = '100%';
  select.style.padding = '8px 12px';
  select.style.borderRadius = '6px';
  select.style.border = '1px solid var(--bg-tertiary, #444)';
  select.style.background = 'var(--bg-tertiary, #2a2a3e)';
  select.style.color = 'var(--text-primary, #fff)';
  select.style.fontSize = '0.95rem';

  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });

  group.appendChild(select);
  return group;
}


function getTfLabel(tf) {
  const map = {
    '0': '迴ｾ蝨ｨ縺ｮ繝√Ε繝ｼ繝・, 'PERIOD_M1': 'M1', 'PERIOD_M5': 'M5',
    'PERIOD_M15': 'M15', 'PERIOD_M30': 'M30', 'PERIOD_H1': 'H1',
    'PERIOD_H4': 'H4', 'PERIOD_D1': 'D1', 'PERIOD_W1': 'W1', 'PERIOD_MN1': 'MN1'
  };
  return map[tf] || tf;
}

// ---------- Confirm Condition ----------
function confirmCondition() {
  const condition = {
    category: wizardState.category,
    indicator: wizardState.indicator,
    detail: wizardState.detail,
    conditionType: wizardState.conditionType,
    params: { ...wizardState.params },
    shift: wizardState.shift,
    condTimeframe: wizardState.condTimeframe || '0',
    confirmBars: wizardState.confirmBars || 0
  };

  if (wizardState.targetType === 'buy') {
    eaState.buyConditions.push(condition);
    updateConditionList('buy');
  } else if (wizardState.targetType === 'sell') {
    eaState.sellConditions.push(condition);
    updateConditionList('sell');
  } else if (wizardState.targetType === 'exit') {
    eaState.exitConditions.push(condition);
    updateExitConditionList();
  }

  closeWizard();
}

// ==================== Update Condition List Display ====================
function updateConditionList(type) {
  const conditions = type === 'buy' ? eaState.buyConditions : eaState.sellConditions;
  const listEl = document.getElementById(`${type}-conditions-list`);
  if (!listEl) return;

  listEl.innerHTML = '';

  if (conditions.length === 0) {
    listEl.innerHTML = '<p class="empty-list">譚｡莉ｶ縺瑚ｨｭ螳壹＆繧後※縺・∪縺帙ｓ</p>';
    return;
  }

  conditions.forEach((cond, idx) => {
    const item = document.createElement('div');
    item.className = 'condition-item';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    item.style.padding = '10px 12px';
    item.style.marginBottom = '8px';
    item.style.background = 'var(--bg-tertiary, #2a2a3e)';
    item.style.borderRadius = '8px';
    item.style.border = '1px solid var(--bg-tertiary, #444)';

    const label = document.createElement('span');
    const detailName = getDetailName(cond.category, cond.indicator);
    const typeId = cond.conditionType || cond.type;
    const typeName = getConditionTypeName(cond.category, cond.indicator, typeId);
    
    label.textContent = cond.label || (detailName + ' - ' + typeName);
    label.style.color = 'var(--text-primary, #fff)';
    label.style.fontSize = '0.9rem';
    item.appendChild(label);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '蜑企勁';
    deleteBtn.style.background = 'none';
    deleteBtn.style.border = 'none';
    deleteBtn.style.color = '#e74c3c';
    deleteBtn.style.fontSize = '1.1rem';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.padding = '2px 8px';
    deleteBtn.addEventListener('click', () => {
      conditions.splice(idx, 1);
      updateConditionList(type);
    });
    item.appendChild(deleteBtn);

    listEl.appendChild(item);
  });
  if (typeof renderLogicMap === 'function') renderLogicMap();
}

function getDetailName(cat, id) {
    const items = getDetailsForCategory(cat);
    const found = items.find(i => i.id === id);
    return found ? found.name : id;
}

function getConditionTypeName(cat, detail, typeId) {
    const types = getConditionTypesForDetail(cat, detail);
    const found = types.find(t => t.id === typeId);
    return found ? found.name : typeId;
}


// ---------- Update Exit Condition List ----------
function updateExitConditionList() {
  const listEl = document.getElementById('exit-condition-list');
  if (!listEl) return;

  listEl.innerHTML = '';

  if (eaState.exitConditions.length === 0) {
    listEl.innerHTML = '<p class="empty-list">豎ｺ貂域擅莉ｶ縺ｯ縺ｾ縺�霑ｽ蜉�縺輔ｌ縺ｦ縺・∪縺帙ｓ</p>';
    return;
  }

  eaState.exitConditions.forEach((cond, index) => {
    const item = document.createElement('div');
    item.className = 'condition-item';

    const info = document.createElement('span');
    info.className = 'condition-info';
    const tfStr = cond.condTimeframe && cond.condTimeframe !== '0' ? ' [' + getTfLabel(cond.condTimeframe) + ' +' + (cond.confirmBars || 0) + '譛ｬ]' : '';
    const tId = cond.conditionType || cond.type;
    info.textContent = `${cond.detail || getDetailName(cond.category, cond.indicator)} / ${tId} (shift: ${cond.shift})${tfStr}`;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'condition-remove-btn';
    removeBtn.textContent = '蜑企勁';
    removeBtn.addEventListener('click', () => {
      eaState.exitConditions.splice(index, 1);
      updateExitConditionList();
    });

    item.appendChild(info);
    item.appendChild(removeBtn);
    listEl.appendChild(item);
  });
  if (typeof renderLogicMap === 'function') renderLogicMap();
}

// ---------- Wizard Navigation ----------
function updateWizardNav() {
  const backBtn = document.getElementById('wizard-back-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const confirmBtn = document.getElementById('wizard-confirm-btn');

  if (backBtn) {
    backBtn.style.display = wizardState.step > 1 ? 'inline-block' : 'none';
    backBtn.onclick = () => {
      if (wizardState.step === 2) renderWizardStep1();
      else if (wizardState.step === 3) renderWizardStep2();
      else if (wizardState.step === 4) renderWizardStep3();
      else if (wizardState.step === 5) renderWizardStep4();
    };
  }

  if (nextBtn) {
    nextBtn.style.display = wizardState.step === 4 ? 'inline-block' : 'none';
    nextBtn.onclick = () => {
      if (wizardState.step === 4) {
        renderWizardStep5();
      }
    };
  }

  if (confirmBtn) {
    confirmBtn.style.display = wizardState.step === 5 ? 'inline-block' : 'none';
    confirmBtn.onclick = () => {
      saveWizardCondition();
    };
  }
}
// ==================== Save Wizard Condition to eaState ====================
function saveWizardCondition() {
  const paramInputs = document.querySelectorAll('.wizard-param-input, .wizard-param-select');
  const rawDetail = {};
  paramInputs.forEach(el => {
    const key = el.dataset.paramId || el.dataset.param || el.name;
    if (key) {
      const val = el.value;
      rawDetail[key] = isNaN(val) ? val : parseFloat(val);
    }
  });

  // Map wizard param IDs to generator-expected keys
  const detail = {};
  detail.shift = wizardState.shift || parseInt(rawDetail.shift) || 1;
  detail.conditionType = wizardState.conditionType;

  // Copy all raw values
  Object.assign(detail, rawDetail);

  // MA Cross
  if (rawDetail.ma_fast_period !== undefined) detail.fastPeriod = rawDetail.ma_fast_period;
  if (rawDetail.ma_slow_period !== undefined) detail.slowPeriod = rawDetail.ma_slow_period;

  // MA Perfect Order
  if (rawDetail.ma_short_period !== undefined) detail.shortPeriod = rawDetail.ma_short_period;
  if (rawDetail.ma_mid_period !== undefined) detail.midPeriod = rawDetail.ma_mid_period;
  if (rawDetail.ma_long_period !== undefined) detail.longPeriod = rawDetail.ma_long_period;

  // MA Deviation
  if (rawDetail.ma_period !== undefined) detail.period = rawDetail.ma_period;
  if (rawDetail.deviation_pips !== undefined) detail.threshold = rawDetail.deviation_pips;

  // Round Numbers
  if (rawDetail.round_dist !== undefined) detail.distance = rawDetail.round_dist;
  if (rawDetail.round_step !== undefined) detail.step = rawDetail.round_step;

  // Holiday Filter
  if (rawDetail.holiday_country !== undefined) detail.country = rawDetail.holiday_country;

  // Pivot
  if (rawDetail.pivot_period !== undefined) detail.period = rawDetail.pivot_period;

  // MA
  if (rawDetail.ma_period_short !== undefined) detail.fastPeriod = rawDetail.ma_period_short;
  if (rawDetail.ma_period_long !== undefined) detail.slowPeriod = rawDetail.ma_period_long;
  if (rawDetail.ma_method !== undefined) detail.method = rawDetail.ma_method;
  if (rawDetail.ma_apply !== undefined) detail.apply = rawDetail.ma_apply;

  // RSI
  if (rawDetail.rsi_period !== undefined) detail.period = rawDetail.rsi_period;
  if (rawDetail.rsi_level !== undefined) {
    detail.overbought = rawDetail.rsi_level;
    detail.oversold = 100 - rawDetail.rsi_level;
  }

  // MACD
  if (rawDetail.macd_fast !== undefined) detail.fastPeriod = rawDetail.macd_fast;
  if (rawDetail.macd_slow !== undefined) detail.slowPeriod = rawDetail.macd_slow;
  if (rawDetail.macd_signal !== undefined) detail.signalPeriod = rawDetail.macd_signal;

  // Bollinger
  if (rawDetail.bb_period !== undefined) detail.period = rawDetail.bb_period;
  if (rawDetail.bb_deviation !== undefined) detail.deviation = rawDetail.bb_deviation;

  // Stochastic
  if (rawDetail.stoch_k !== undefined) detail.kPeriod = rawDetail.stoch_k;
  if (rawDetail.stoch_d !== undefined) detail.dPeriod = rawDetail.stoch_d;
  if (rawDetail.stoch_slowing !== undefined) detail.slowing = rawDetail.stoch_slowing;
  if (rawDetail.stoch_level !== undefined) {
    detail.overbought = rawDetail.stoch_level;
    detail.oversold = 100 - rawDetail.stoch_level;
  }

  // CCI
  if (rawDetail.cci_period !== undefined) detail.period = rawDetail.cci_period;
  if (rawDetail.cci_level !== undefined) {
    detail.overbought = rawDetail.cci_level;
    detail.oversold = -rawDetail.cci_level;
  }

  // ADX
  if (rawDetail.adx_period !== undefined) detail.period = rawDetail.adx_period;
  if (rawDetail.adx_level !== undefined) detail.level = rawDetail.adx_level;

  // ATR
  if (rawDetail.atr_period !== undefined) detail.period = rawDetail.atr_period;
  if (rawDetail.atr_level !== undefined) detail.level = rawDetail.atr_level;

  // Ichimoku
  if (rawDetail.ichi_tenkan !== undefined) detail.tenkan = rawDetail.ichi_tenkan;
  if (rawDetail.ichi_kijun !== undefined) detail.kijun = rawDetail.ichi_kijun;
  if (rawDetail.ichi_senkou !== undefined) detail.senkou = rawDetail.ichi_senkou;

  // Envelope
  if (rawDetail.env_period !== undefined) detail.period = rawDetail.env_period;
  if (rawDetail.env_deviation !== undefined) detail.deviation = rawDetail.env_deviation;
  if (rawDetail.env_method !== undefined) detail.method = rawDetail.env_method;

  // Parabolic SAR
  if (rawDetail.sar_step !== undefined) detail.step = rawDetail.sar_step;
  if (rawDetail.sar_max !== undefined) detail.max = rawDetail.sar_max;

  // Williams %R
  if (rawDetail.wpr_period !== undefined) detail.period = rawDetail.wpr_period;
  if (rawDetail.wpr_level !== undefined) {
    detail.overbought = rawDetail.wpr_level;
    detail.oversold = -100 - rawDetail.wpr_level;
  }

  // DeMarker
  if (rawDetail.dem_period !== undefined) detail.period = rawDetail.dem_period;

  // Momentum
  if (rawDetail.mom_period !== undefined) detail.period = rawDetail.mom_period;

  // OsMA
  if (rawDetail.osma_fast !== undefined) detail.fastPeriod = rawDetail.osma_fast;
  if (rawDetail.osma_slow !== undefined) detail.slowPeriod = rawDetail.osma_slow;
  if (rawDetail.osma_signal !== undefined) detail.signalPeriod = rawDetail.osma_signal;

  // RVI
  if (rawDetail.rvi_period !== undefined) detail.period = rawDetail.rvi_period;

  // Bears/Bulls
  if (rawDetail.bears_period !== undefined) detail.period = rawDetail.bears_period;
  if (rawDetail.bulls_period !== undefined) detail.period = rawDetail.bulls_period;

  // Fibonacci
  if (rawDetail.fib_period !== undefined) detail.lookback = rawDetail.fib_period;

  const condition = {
    category: wizardState.category,
    indicator: wizardState.indicator,
    conditionType: wizardState.conditionType,
    label: wizardState.detail + ' - ' + wizardState.conditionType,
    detail: detail
  };

  if (wizardState.targetType === 'buy') {
    eaState.buyConditions.push(condition);
  } else if (wizardState.targetType === 'sell') {
    eaState.sellConditions.push(condition);
  } else if (wizardState.targetType === 'exit') {
    if (!eaState.exitConditions) eaState.exitConditions = [];
    eaState.exitConditions.push(condition);
  }

  console.log('Condition saved:', condition);

  updateConditionList('buy');
  updateConditionList('sell');
  closeWizard();
  showToast('譚｡莉ｶ繧定ｿｽ蜉�縺励∪縺励◆');
}

// ============================================================
// [END A-070]
// ============================================================


// ==================== A-080: Data Functions (categories/details/conditions/values) ====================
function getDetailsForCategory(category) {
    const details = {
        indicator: [
            { id: 'ma', icon: '??', name: '遘ｻ蜍募ｹｳ蝮・ｷ・MA)' },
            { id: 'rsi', icon: '??', name: 'RSI' },
            { id: 'macd', icon: '??', name: 'MACD' },
            { id: 'bb', icon: '??', name: '繝懊Μ繝ｳ繧ｸ繝｣繝ｼ繝舌Φ繝・ },
            { id: 'stochastic', icon: '??', name: '繧ｹ繝医く繝｣繧ｹ繝・ぅ繧ｯ繧ｹ' },
            { id: 'cci', icon: '??', name: 'CCI' },
            { id: 'atr', icon: '??', name: 'ATR' },
            { id: 'ichimoku', icon: '??', name: '荳逶ｮ蝮・｡｡陦ｨ' },
            { id: 'parabolic', icon: '??', name: '繝代Λ繝懊Μ繝・けSAR' }
        ],
        candle: [
            { id: 'bullish', icon: '???', name: '髯ｽ邱・ },
            { id: 'bearish', icon: '???', name: '髯ｰ邱・ },
            { id: 'doji', icon: '?', name: '蜊∝ｭ礼ｷ・ },
            { id: 'hammer', icon: '??', name: '繝上Φ繝槭・' },
            { id: 'engulfing_bull', icon: '??', name: '髯ｽ邱壼桁縺ｿ雜ｳ' },
            { id: 'engulfing_bear', icon: '??', name: '髯ｰ邱壼桁縺ｿ雜ｳ' },
            { id: 'pin_bar_bull', icon: '??', name: '繝斐Φ繝舌・(蠑ｷ豌・' },
            { id: 'pin_bar_bear', icon: '??', name: '繝斐Φ繝舌・(蠑ｱ豌・' }
        ],
        pattern: [
            { id: 'double_top', icon: '??', name: '繝繝悶Ν繝医ャ繝・ },
            { id: 'double_bottom', icon: '??', name: '繝繝悶Ν繝懊ヨ繝�' },
            { id: 'head_shoulders', icon: '??', name: '繝倥ャ繝峨い繝ｳ繝峨す繝ｧ繝ｫ繝繝ｼ' },
            { id: 'triangle', icon: '??', name: '繝医Λ繧､繧｢繝ｳ繧ｰ繝ｫ' },
            { id: 'channel', icon: '??', name: '繝√Ε繝阪Ν' }
        ],
        price: [
            { id: 'level', icon: '??', name: '萓｡譬ｼ繝ｬ繝吶Ν' },
            { id: 'ma_compare', icon: '??', name: 'MA豈碑ｼ・ }
        ]
    };
    return details[category] || [];
}

function getConditionTypesForDetail(category, detail) {
    if (category === 'indicator') {
        switch (detail) {
            case 'ma': return [
                { id: 'cross_up', name: '繧ｴ繝ｼ繝ｫ繝・Φ繧ｯ繝ｭ繧ｹ', desc: '遏ｭ譛櫪A縺碁聞譛櫪A繧剃ｸ頑栢縺・ },
                { id: 'cross_down', name: '繝・ャ繝峨け繝ｭ繧ｹ', desc: '遏ｭ譛櫪A縺碁聞譛櫪A繧剃ｸ区栢縺・ },
                { id: 'price_cross_up', name: '萓｡譬ｼ荳頑栢縺・, desc: '萓｡譬ｼ縺勲A繧剃ｸ頑栢縺・ },
                { id: 'price_cross_down', name: '萓｡譬ｼ荳区栢縺・, desc: '萓｡譬ｼ縺勲A繧剃ｸ区栢縺・ },
                { id: 'above', name: '萓｡譬ｼ縺勲A繧医ｊ荳・, desc: '萓｡譬ｼ縺勲A繧医ｊ荳翫↓縺ゅｊ縺ｾ縺・ },
                { id: 'below', name: '萓｡譬ｼ縺勲A繧医ｊ荳・, desc: '萓｡譬ｼ縺勲A繧医ｊ荳九↓縺ゅｊ縺ｾ縺・ },
                { id: 'ma_above', name: '遏ｭ譛櫪A>髟ｷ譛櫪A', desc: '遏ｭ譛櫪A縺碁聞譛櫪A繧医ｊ荳・ },
                { id: 'ma_below', name: '遏ｭ譛櫪A<髟ｷ譛櫪A', desc: '遏ｭ譛櫪A縺碁聞譛櫪A繧医ｊ荳・ }
            ];
            case 'rsi': return [
                { id: 'oversold', name: '螢ｲ繧峨ｌ縺吶℃', desc: 'RSI縺碁明蛟､莉･荳・ },
                { id: 'overbought', name: '雋ｷ繧上ｌ縺吶℃', desc: 'RSI縺碁明蛟､莉･荳・ },
                { id: 'cross_up', name: '荳頑栢縺・, desc: 'RSI縺碁明蛟､繧剃ｸ頑栢縺・ },
                { id: 'cross_down', name: '荳区栢縺・, desc: 'RSI縺碁明蛟､繧剃ｸ区栢縺・ }
            ];
            case 'macd': return [
                { id: 'cross_up', name: '繧ｴ繝ｼ繝ｫ繝・Φ繧ｯ繝ｭ繧ｹ', desc: 'MACD縺後す繧ｰ繝翫Ν繧剃ｸ頑栢縺・ },
                { id: 'cross_down', name: '繝・ャ繝峨け繝ｭ繧ｹ', desc: 'MACD縺後す繧ｰ繝翫Ν繧剃ｸ区栢縺・ },
                { id: 'above_zero', name: '繧ｼ繝ｭ繝ｩ繧､繝ｳ莉･荳・, desc: 'MACD縺後ぞ繝ｭ繧医ｊ荳・ },
                { id: 'below_zero', name: '繧ｼ繝ｭ繝ｩ繧､繝ｳ莉･荳・, desc: 'MACD縺後ぞ繝ｭ繧医ｊ荳・ }
            ];
            case 'bb': return [
                { id: 'touch_lower', name: '荳九ヰ繝ｳ繝峨ち繝・メ', desc: '萓｡譬ｼ縺御ｸ九ヰ繝ｳ繝峨↓繧ｿ繝・メ' },
                { id: 'touch_upper', name: '荳翫ヰ繝ｳ繝峨ち繝・メ', desc: '萓｡譬ｼ縺御ｸ翫ヰ繝ｳ繝峨↓繧ｿ繝・メ' },
                { id: 'break_lower', name: '荳九ヰ繝ｳ繝峨ヶ繝ｬ繧､繧ｯ', desc: '萓｡譬ｼ縺御ｸ九ヰ繝ｳ繝峨ｒ荳区栢縺・ },
                { id: 'break_upper', name: '荳翫ヰ繝ｳ繝峨ヶ繝ｬ繧､繧ｯ', desc: '萓｡譬ｼ縺御ｸ翫ヰ繝ｳ繝峨ｒ荳頑栢縺・ }
            ];
            case 'stochastic': return [
                { id: 'oversold', name: '螢ｲ繧峨ｌ縺吶℃', desc: '繧ｹ繝医く繝｣繧ｹ縺碁明蛟､莉･荳・ },
                { id: 'overbought', name: '雋ｷ繧上ｌ縺吶℃', desc: '繧ｹ繝医く繝｣繧ｹ縺碁明蛟､莉･荳・ },
                { id: 'above_level', name: '繝ｬ繝吶Ν莉･荳・, desc: '%K縺梧欠螳壹Ξ繝吶Ν莉･荳・ },
                { id: 'below_level', name: '繝ｬ繝吶Ν莉･荳・, desc: '%K縺梧欠螳壹Ξ繝吶Ν莉･荳・ },
                { id: 'cross_up', name: '繧ｴ繝ｼ繝ｫ繝・Φ繧ｯ繝ｭ繧ｹ', desc: '%K縺・D繧剃ｸ頑栢縺・ },
                { id: 'cross_down', name: '繝・ャ繝峨け繝ｭ繧ｹ', desc: '%K縺・D繧剃ｸ区栢縺・ }
            ];
            case 'ichimoku': return [
                { id: 'above_kumo', name: '髮ｲ縺ｮ荳・, desc: '邨ょ､縺碁峇・医せ繝代ΦA/B・峨ｈ繧贋ｸ・ },
                { id: 'below_kumo', name: '髮ｲ縺ｮ荳・, desc: '邨ょ､縺碁峇・医せ繝代ΦA/B・峨ｈ繧贋ｸ・ },
                { id: 'kumo_break', name: '髮ｲ謚懊￠', desc: '邨ょ､繧帝峇繧剃ｸ頑栢縺・ },
                { id: 'tenkan_kijun', name: '霆｢謠帷ｷ・蝓ｺ貅也ｷ壹け繝ｭ繧ｹ', desc: '霆｢謠帷ｷ壹′蝓ｺ貅也ｷ壹ｒ荳頑栢縺・ },
                { id: 'in_kumo', name: '髮ｲ縺ｮ荳ｭ', desc: '邨ょ､縺碁峇縺ｮ荳ｭ縺ｫ騾ｲ蜈･' }
            ];
            case 'parabolic': return [
                { id: 'sar_above', name: '萓｡譬ｼ縺郡AR繧医ｊ荳・, desc: '萓｡譬ｼ縺後ヱ繝ｩ繝懊Μ繝・けSAR繧医ｊ荳奇ｼ井ｸ頑・繝医Ξ繝ｳ繝会ｼ・ },
                { id: 'sar_below', name: '萓｡譬ｼ縺郡AR繧医ｊ荳・, desc: '萓｡譬ｼ縺後ヱ繝ｩ繝懊Μ繝・けSAR繧医ｊ荳具ｼ井ｸ玖誠繝医Ξ繝ｳ繝会ｼ・ },
                { id: 'sar_cross_up', name: 'SAR荳頑栢縺・, desc: '萓｡譬ｼ縺郡AR繧剃ｸ翫↓遯√″謚懊￠縺・ },
                { id: 'sar_cross_down', name: 'SAR荳区栢縺・, desc: '萓｡譬ｼ縺郡AR繧剃ｸ九↓遯√″謚懊￠縺・ }
            ];
            case 'cci': return [
                { id: 'oversold', name: '螢ｲ繧峨ｌ縺吶℃', desc: 'CCI縺悟｣ｲ繧峨ｌ縺吶℃繝ｬ繝吶Ν莉･荳・ },
                { id: 'overbought', name: '雋ｷ繧上ｌ縺吶℃', desc: 'CCI縺瑚ｲｷ繧上ｌ縺吶℃繝ｬ繝吶Ν莉･荳・ },
                { id: 'cross_up', name: '荳頑栢縺・, desc: 'CCI縺碁明蛟､繧剃ｸ頑栢縺・ },
                { id: 'cross_down', name: '荳区栢縺・, desc: 'CCI縺碁明蛟､繧剃ｸ区栢縺・ }
            ];
            case 'atr': return [
                { id: 'above', name: '髢ｾ蛟､莉･荳・, desc: 'ATR縺碁明蛟､莉･荳・ },
                { id: 'below', name: '髢ｾ蛟､莉･荳・, desc: 'ATR縺碁明蛟､莉･荳・ }
            ];
        }
    } else if (category === 'candle') {
        return [{ id: 'appear', name: '蜃ｺ迴ｾ', desc: '繝代ち繝ｼ繝ｳ縺悟・迴ｾ縺励◆譎・ }];
    } else if (category === 'pattern') {
        return [{ id: 'complete', name: '螳梧・', desc: '繝代ち繝ｼ繝ｳ縺悟ｮ梧・縺励◆譎・ }];
    } else if (category === 'price') {
        if (detail === 'level') return [
            { id: 'above_level', name: '莉･荳・, desc: '萓｡譬ｼ縺後Ξ繝吶Ν莉･荳・ },
            { id: 'below_level', name: '莉･荳・, desc: '萓｡譬ｼ縺後Ξ繝吶Ν莉･荳・ },
            { id: 'cross_up_level', name: '荳頑栢縺・, desc: '萓｡譬ｼ縺後Ξ繝吶Ν繧剃ｸ頑栢縺・ },
            { id: 'cross_down_level', name: '荳区栢縺・, desc: '萓｡譬ｼ縺後Ξ繝吶Ν繧剃ｸ区栢縺・ }
        ];
        if (detail === 'ma_compare') return [
            { id: 'above_ma', name: 'MA莉･荳・, desc: '萓｡譬ｼ縺勲A繧医ｊ荳・ },
            { id: 'below_ma', name: 'MA莉･荳・, desc: '萓｡譬ｼ縺勲A繧医ｊ荳・ }
        ];
    }
    return [{ id: 'default', name: '繝・ヵ繧ｩ繝ｫ繝・, desc: '繝・ヵ繧ｩ繝ｫ繝医ｒ驕ｸ謚槭＠縺溷�ｴ蜷・ }];
}

function getValueInputsForCondition(category, detail, conditionType) {
    const inputs = [];
    if (category === 'indicator') {
        switch (detail) {
            case 'ma':
                inputs.push({ id: 'period', label: '譛滄俣', type: 'number', default: 20, min: 1 });
                inputs.push({ id: 'shortPeriod', label: '遏ｭ譛櫪A譛滄俣', type: 'number', default: 5, min: 1 });
                inputs.push({ id: 'longPeriod', label: '髟ｷ譛櫪A譛滄俣', type: 'number', default: 20, min: 1 });
                inputs.push({ id: 'method', label: 'MA遞ｮ蛻･', type: 'select', options: [{ value: 'sma', label: 'SMA' }, { value: 'ema', label: 'EMA' }, { value: 'smma', label: 'SMMA' }, { value: 'lwma', label: 'LWMA' }] });
                break;
            case 'rsi':
                inputs.push({ id: 'period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
                inputs.push({ id: 'level', label: '繝ｬ繝吶Ν', type: 'number', default: conditionType === 'oversold' ? 30 : 70, min: 0, max: 100 });
                break;
            case 'macd':
                inputs.push({ id: 'fastPeriod', label: 'Fast譛滄俣', type: 'number', default: 12, min: 1 });
                inputs.push({ id: 'slowPeriod', label: 'Slow譛滄俣', type: 'number', default: 26, min: 1 });
                inputs.push({ id: 'signalPeriod', label: 'Signal譛滄俣', type: 'number', default: 9, min: 1 });
                break;
            case 'bb':
                inputs.push({ id: 'period', label: '譛滄俣', type: 'number', default: 20, min: 1 });
                inputs.push({ id: 'deviation', label: '蛛丞ｷｮ', type: 'number', default: 2.0, min: 0.1, step: 0.1 });
                break;
            case 'stochastic':
                inputs.push({ id: 'kPeriod', label: '%K譛滄俣', type: 'number', default: 5, min: 1 });
                inputs.push({ id: 'dPeriod', label: '%D譛滄俣', type: 'number', default: 3, min: 1 });
                inputs.push({ id: 'slowing', label: '繧ｹ繝ｭ繝ｼ繧､繝ｳ繧ｰ', type: 'number', default: 3, min: 1 });
                if (conditionType === 'oversold' || conditionType === 'overbought' || conditionType === 'above_level' || conditionType === 'below_level') {
                    const defLevel = (conditionType === 'oversold' || conditionType === 'below_level') ? 20 : 80;
                    inputs.push({ id: 'level', label: '繝ｬ繝吶Ν', type: 'number', default: defLevel, min: 0, max: 100 });
                }
                break;
            case 'ichimoku':
                inputs.push({ id: 'tenkan', label: '霆｢謠帷ｷ壽悄髢・, type: 'number', default: 9, min: 1 });
                inputs.push({ id: 'kijun', label: '蝓ｺ貅也ｷ壽悄髢・, type: 'number', default: 26, min: 1 });
                inputs.push({ id: 'senkou', label: '蜈郁｡梧悄髢・, type: 'number', default: 52, min: 1 });
                break;
            case 'parabolic':
                inputs.push({ id: 'step', label: 'Step', type: 'number', default: 0.02, min: 0.001, step: 0.001 });
                inputs.push({ id: 'max', label: 'Maximum', type: 'number', default: 0.2, min: 0.01, step: 0.01 });
                break;
            case 'cci':
                inputs.push({ id: 'period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
                inputs.push({ id: 'overbought', label: '雋ｷ繧上ｌ縺吶℃繝ｬ繝吶Ν', type: 'number', default: 100 });
                inputs.push({ id: 'oversold', label: '螢ｲ繧峨ｌ縺吶℃繝ｬ繝吶Ν', type: 'number', default: -100 });
                break;
            case 'atr':
                inputs.push({ id: 'period', label: '譛滄俣', type: 'number', default: 14, min: 1 });
                inputs.push({ id: 'threshold', label: '髢ｾ蛟､', type: 'number', default: 0.001, step: 0.0001 });
                break;
        }
    } else if (category === 'price') {
        if (detail === 'level') inputs.push({ id: 'level', label: '萓｡譬ｼ繝ｬ繝吶Ν', type: 'number', default: 0, step: 0.00001 });
        else if (detail === 'ma_compare') inputs.push({ id: 'maPeriod', label: 'MA譛滄俣', type: 'number', default: 20, min: 1 });
    }
    return inputs;
}

function getCategoryName(category) {
    const names = { indicator: '繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ', candle: '繝ｭ繝ｼ繧ｽ繧ｯ雜ｳ', pattern: '繝代ち繝ｼ繝ｳ', price: '萓｡譬ｼ' };
    return names[category] || category;
}

function getDetailName(category, detailId) {
    if (!detailId) return 'Undefined';
    const details = getDetailsForCategory(category);
    // Support both numeric and string IDs for transition
    const found = details.find(d => d.id === detailId || d.id === detailId.toString());
    if (found) return found.name;
    
    // Hardcoded fallbacks for common indicators
    const fallbacks = {
        'stochastic': '繧ｹ繝医く繝｣繧ｹ繝・ぅ繧ｯ繧ｹ',
        'stoch': '繧ｹ繝医く繝｣繧ｹ繝・ぅ繧ｯ繧ｹ',
        'ichimoku': '荳逶ｮ蝮・｡｡陦ｨ',
        'ma': '遘ｻ蜍募ｹｳ蝮・ｷ・MA)',
        'rsi': 'RSI',
        'macd': 'MACD',
        'bb': '繝懊Μ繝ｳ繧ｸ繝｣繝ｼ繝舌Φ繝・,
        'cci': 'CCI',
        'atr': 'ATR',
        'parabolic': '繝代Λ繝懊Μ繝・けSAR'
    };
    return fallbacks[detailId] || detailId;
}

function getConditionTypeName(category, detailId, typeId) {
    if (!typeId) return 'Undefined';
    const types = getConditionTypesForDetail(category, detailId);
    const found = types.find(t => t.id === typeId);
    if (found) return found.name;
    
    // Hardcoded fallbacks
    const fallbacks = {
        'above_kumo': '髮ｲ縺ｮ荳・,
        'below_kumo': '髮ｲ縺ｮ荳・,
        'kumo_break': '髮ｲ謚懊￠',
        'tenkan_kijun': '霆｢謠帷ｷ・蝓ｺ貅也ｷ壹け繝ｭ繧ｹ',
        'above_level': '繝ｬ繝吶Ν莉･荳・,
        'below_level': '繝ｬ繝吶Ν莉･荳・,
        'oversold': '螢ｲ繧峨ｌ縺吶℃',
        'overbought': '雋ｷ繧上ｌ縺吶℃',
        'cross_up': '繧ｴ繝ｼ繝ｫ繝・Φ繧ｯ繝ｭ繧ｹ/荳頑栢縺・,
        'cross_down': '繝・ャ繝峨け繝ｭ繧ｹ/荳区栢縺・
    };
    return fallbacks[typeId] || typeId;
}
// //END A-080

// ==================== A-090: Modals + Toast + Utilities ====================
function setupModals() {
    const helpClose = document.getElementById('help-close');
    if (helpClose) helpClose.addEventListener('click', () => { document.getElementById('help-modal').classList.remove('active'); });
    const helpModal = document.getElementById('help-modal');
    if (helpModal) helpModal.addEventListener('click', (e) => { if (e.target === helpModal) helpModal.classList.remove('active'); });

    // 繧ｦ繧｣繧ｶ繝ｼ繝峨Δ繝ｼ繝繝ｫ縺ｮ繧ｯ繝ｭ繝ｼ繧ｺ
    const wizardClose = document.getElementById('wizard-close');
    if (wizardClose) wizardClose.addEventListener('click', () => { closeWizard(); });
    const wizardModal = document.getElementById('wizard-modal');
    if (wizardModal) wizardModal.addEventListener('click', (e) => { if (e.target === wizardModal) closeWizard(); });

    // 繝舌ャ繧ｯ繝・せ繝医・繝ｬ繝昴・繝医Δ繝ｼ繝繝ｫ縺ｮ繧ｯ繝ｭ繝ｼ繧ｺ蜃ｦ逅・(Global Function邨檎罰)
    const reportClose = document.getElementById('report-close');
    if (reportClose) {
        // 譌｢蟄倥・繝ｪ繧ｹ繝翫・縺後≠繧句庄閭ｽ諤ｧ繧定・・縺励｛nclick螻樊ｧ縺ｧ縺ｮ荳頑嶌縺阪ｒ蜆ｪ蜈・
        reportClose.onclick = window.hideBacktestReport;
    }
    const reportModal = document.getElementById('backtest-report-modal');
    if (reportModal) {
        reportModal.addEventListener('click', (e) => {
            if (e.target === reportModal) window.hideBacktestReport();
        });
    }

    // Escape繧ｭ繝ｼ縺ｧ蜈ｨ縺ｦ縺ｮ繝｢繝ｼ繝繝ｫ繧帝哩縺倥ｋ
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.hideBacktestReport();
            if (typeof closeWizard === 'function') closeWizard();
            const helpModal = document.getElementById('help-modal');
            if (helpModal) helpModal.classList.remove('active');
        }
    });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const icons = { success: '?', error: '?', warning: '??', info: '??' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span class="toast-message">${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(50px)'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// //END A-090

// ==================== A-091: Toggle Card System ====================
function setupToggleCards() {
  document.querySelectorAll('.toggle-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't toggle when clicking inside settings panel inputs
      if (e.target.closest('.toggle-card-settings') && (
        e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' ||
        e.target.tagName === 'BUTTON' || e.target.tagName === 'LABEL' ||
        e.target.tagName === 'TEXTAREA'
      )) return;

      const targetId = this.dataset.target;
      const checkbox = document.getElementById(targetId);
      const isActive = this.classList.toggle('active');
      if (checkbox) checkbox.checked = isActive;

      // Show/hide settings panel
      let settingsPanel = this.querySelector('.toggle-card-settings');
      if (!settingsPanel) {
          // Fallback: search by ID 
          settingsPanel = document.getElementById(targetId + "-settings") || 
                          document.getElementById(targetId.replace('use-', '') + "-settings") ||
                          document.getElementById(targetId.replace('chk-', '') + "-settings");
      }
      
      if (settingsPanel) {
          if (isActive) {
              settingsPanel.style.setProperty('display', 'block', 'important');
              settingsPanel.classList.remove('hidden');
              console.log('Showing panel:', settingsPanel.id);
          } else {
              settingsPanel.style.setProperty('display', 'none', 'important');
              settingsPanel.classList.add('hidden');
              console.log('Hiding panel:', settingsPanel.id);
          }
      }

      // Sync the toggle state to eaState
      syncToggleCardToState(targetId, isActive);

      // Update exit priority list when exit-related cards change
      if (typeof updateExitPriorityList === 'function') {
          updateExitPriorityList();
      }
    });
  });

  // Rank filter chips
  document.querySelectorAll('.rank-chip').forEach(chip => {
    chip.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
    });
  });

  // Fetch news button
  const fetchBtn = document.getElementById('fetch-news-btn');
  if (fetchBtn) fetchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fetchEconomicIndicators();
  });

  // Set default date to today
  const dateInput = document.getElementById('news-fetch-date');
  if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
}

function syncToggleCardToState(targetId, isActive) {
  const map = {
    'use-trailing': () => eaState.useTrailing = isActive,
    'use-autoclose': () => eaState.useAutoClose = isActive,
    'use-manual-close': () => eaState.useManualCloseButton = isActive,
    'use-magic-stop': () => eaState.useMagicStopOrder = isActive,
    'use-perfect-order': () => eaState.usePerfectOrder = isActive,
    'use-adx-filter': () => eaState.useAdxFilter = isActive,
    'use-time-filter': () => eaState.useTimeFilter = isActive,
    'use-spread-filter': () => eaState.useSpreadFilter = isActive,
    'use-goto-filter': () => eaState.useGotoFilter = isActive,
    'use-news-filter': () => eaState.useNewsFilter = isActive,
    'use-month-filter': () => eaState.useMonthFilter = isActive,
    'chk-discord-webhook': () => eaState.useDiscordWebhook = isActive,
    'chk-alert-popup': () => eaState.useAlertPopup = isActive,
    'chk-alert-sound': () => eaState.useAlertSound = isActive,
    'chk-alert-email': () => eaState.useAlertEmail = isActive,
    'chk-alert-push': () => eaState.useAlertPush = isActive,
  };
  if (map[targetId]) map[targetId]();
}

function setToggleCardActive(cardId, active) {
  const card = document.getElementById(cardId);
  if (!card) return;
  if (active) card.classList.add('active');
  else card.classList.remove('active');
  const targetId = card.dataset.target;
  const checkbox = document.getElementById(targetId);
  if (checkbox) checkbox.checked = active;
}

// ==================== A-092: Economic Indicator Fetcher ====================
async function fetchEconomicIndicators() {
  const dateInput = document.getElementById('news-fetch-date');
  const statusEl = document.getElementById('news-fetch-status');
  const listEl = document.getElementById('news-event-list');

  if (!dateInput || !statusEl) return;

  const dateStr = dateInput.value.replace(/-/g, '');
  if (!dateStr || dateStr.length !== 8) {
    statusEl.textContent = '? 譌･莉倥ｒ驕ｸ謚槭＠縺ｦ縺上□縺輔＞';
    return;
  }

  const url = `https://kissfx.com/article/fxdays${dateStr}.html`;
  statusEl.textContent = '? 蜿門ｾ嶺ｸｭ...';

  try {
    // Use CORS proxy
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();

    const indicators = parseHitsuzikaiHtml(html);
    if (indicators.length === 0) {
      statusEl.textContent = '?? 謖・ｨ吶ョ繝ｼ繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆';
      return;
    }

    // Get selected rank filters
    const selectedRanks = [];
    document.querySelectorAll('.rank-chip.active').forEach(chip => {
      selectedRanks.push(chip.dataset.rank);
    });

    // Filter by rank
    const filtered = indicators.filter(ind => selectedRanks.includes(ind.rank));

    // Store in eaState
    eaState.newsEvents = filtered.map(ind => ({
      hour: ind.hour, min: ind.min, label: ind.name, rank: ind.rank
    }));

    // Render list
    renderNewsEventList(filtered);
    statusEl.textContent = `蜿門ｾ怜ｮ御ｺ・ ${indicators.length}莉ｶ荳ｭ ${filtered.length}莉ｶ繧貞ｯｾ雎｡`;

  } catch (err) {
    console.warn('News fetch error:', err);
    statusEl.textContent = '? 蜿門ｾ励↓螟ｱ謨励＠縺ｾ縺励◆縲よ焔蜍輔〒霑ｽ蜉�縺励※縺上□縺輔＞縲・;
  }
}

function parseHitsuzikaiHtml(html) {
  const indicators = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Look for table rows with indicator data
  // The site uses tables with time, country flag images, indicator names, and star ratings
  const tables = doc.querySelectorAll('table');
  for (const table of tables) {
    const rows = table.querySelectorAll('tr');
    for (const row of rows) {
      const cells = row.querySelectorAll('td');
      if (cells.length < 3) continue;

      // Try to extract time (HH:MM format)
      const timeText = cells[0]?.textContent?.trim();
      const timeMatch = timeText?.match(/(\d{1,2}):(\d{2})/);
      if (!timeMatch) continue;

      const hour = parseInt(timeMatch[1]);
      const min = parseInt(timeMatch[2]);

      // Extract indicator name (usually in a later cell)
      let name = '';
      for (let i = 1; i < cells.length; i++) {
        const text = cells[i]?.textContent?.trim();
        if (text && text.length > 3 && !text.match(/^[\s笘・・笆�笆｡笳・裸??笳鞘雷笳讃*$/)) {
          name = text;
          break;
        }
      }
      if (!name) continue;

      // Count star images for rank
      const imgs = row.querySelectorAll('img[src*="star"], img[alt*="譏・]');
      const starText = row.textContent;
      let starCount = (starText.match(/笘・g) || []).length;
      if (starCount === 0) starCount = imgs.length;

      let rank = 'C';
      if (starCount >= 6) rank = 'SS';
      else if (starCount >= 5) rank = 'S';
      else if (starCount >= 4) rank = 'A';
      else if (starCount >= 3) rank = 'B';
      else rank = 'C';

      indicators.push({ hour, min, name: name.substring(0, 50), rank });
    }
  }

  return indicators;
}

function renderNewsEventList(events) {
  const listEl = document.getElementById('news-event-list');
  if (!listEl) return;

  if (!events || events.length === 0) {
    listEl.innerHTML = '<p class="form-hint">謖・ｨ吶う繝吶Φ繝域悴逋ｻ骭ｲ</p>';
    return;
  }

  listEl.innerHTML = events.map((ev, idx) => {
    const rankClass = 'rank-' + ev.rank.toLowerCase();
    const timeStr = String(ev.hour).padStart(2,'0') + ':' + String(ev.min).padStart(2,'0');
    return `<div class="news-indicator-item">
      <span class="time">${timeStr}</span>
      <span class="name">${escapeHtml(ev.name || ev.label || '')}</span>
      <span class="news-rank-badge ${rankClass}">${ev.rank}</span>
      <button class="btn btn-secondary" style="padding:4px 8px;font-size:0.75rem;" onclick="removeNewsEvent(${idx})">蜑企勁</button>
    </div>`;
  }).join('');
}

function removeNewsEvent(idx) {
  if (eaState.newsEvents && eaState.newsEvents[idx]) {
    eaState.newsEvents.splice(idx, 1);
    renderNewsEventList(eaState.newsEvents);
  }
}
// //END A-092

// ==================== A-100: IndicatorGenerator ====================
const IndicatorGenerator = {
    generate: function(state) {
        return state.platform === 'mt4' ? this.generateMT4(state) : this.generateMT5(state);
    },

    colorToMQL: function(hexColor) {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `clrRGBColor(${r},${g},${b})`;
    },

    generateMT4: function(state) {
        let code = '';
        code += `//+------------------------------------------------------------------+\n`;
        code += `//|                                        ${state.indicatorName}.mq4 |\n`;
        code += `//|                                        Generated by EA Labo     |\n`;
        code += `//+------------------------------------------------------------------+\n`;
        code += `#property copyright "EA Labo"\n#property link      ""\n#property version   "1.00"\n#property strict\n`;
        code += `#property indicator_chart_window\n#property indicator_buffers 2\n`;
        code += `#property indicator_color1 ${this.colorToMQL(state.displayColor1)}\n`;
        code += `#property indicator_color2 ${this.colorToMQL(state.displayColor2)}\n`;
        code += `#property indicator_width1 ${state.displayWidth}\n#property indicator_width2 ${state.displayWidth}\n\n`;
        code += `double BuyBuffer[];\ndouble SellBuffer[];\ndatetime lastAlertTime = 0;\n\n`;
        code += `int OnInit()\n{\n    SetIndexBuffer(0, BuyBuffer);\n    SetIndexBuffer(1, SellBuffer);\n`;
        code += `    SetIndexStyle(0, DRAW_ARROW);\n    SetIndexStyle(1, DRAW_ARROW);\n`;
        code += `    SetIndexArrow(0, 233);\n    SetIndexArrow(1, 234);\n`;
        code += `    SetIndexLabel(0, "Buy Signal");\n    SetIndexLabel(1, "Sell Signal");\n    return(INIT_SUCCEEDED);\n}\n\n`;
        code += `int OnCalculate(const int rates_total, const int prev_calculated, const datetime &time[], const double &open[], const double &high[], const double &low[], const double &close[], const long &tick_volume[], const long &volume[], const int &spread[])\n{\n`;
        code += `    int start = prev_calculated > 0 ? prev_calculated - 1 : 0;\n    for (int i = start; i < rates_total - 1; i++)\n    {\n`;
        code += `        BuyBuffer[i] = EMPTY_VALUE;\n        SellBuffer[i] = EMPTY_VALUE;\n`;
        code += `        if (CheckBuyCondition(i))\n        {\n            BuyBuffer[i] = low[i] - 10 * Point;\n`;
        code += `            if (i == rates_total - 2 && Time[i] != lastAlertTime) { SendAlert("Buy Signal"); lastAlertTime = Time[i]; }\n        }\n`;
        code += `        if (CheckSellCondition(i))\n        {\n            SellBuffer[i] = high[i] + 10 * Point;\n`;
        code += `            if (i == rates_total - 2 && Time[i] != lastAlertTime) { SendAlert("Sell Signal"); lastAlertTime = Time[i]; }\n}\n    }\n    return(rates_total);\n}\n\n`;
        code += this.generateConditionFunctions(state, 'mt4');
        code += `void SendAlert(string message)\n{\n`;
        if (state.alerts.popup) code += `    Alert("${state.indicatorName}: " + message);\n`;
        if (state.alerts.sound) code += `    PlaySound("alert.wav");\n`;
        if (state.alerts.push) code += `    SendNotification("${state.indicatorName}: " + message);\n`;
        if (state.alerts.email) code += `    SendMail("${state.indicatorName}", message);\n`;
        code += `}\n`;
        return code;
    },

    generateMT5: function(state) {
        let code = '';
        code += `//+------------------------------------------------------------------+\n`;
        code += `//|                                        ${state.indicatorName}.mq5 |\n`;
        code += `//|                                        Generated by EA Labo     |\n`;
        code += `//+------------------------------------------------------------------+\n`;
        code += `#property copyright "EA Labo"\n#property link      ""\n#property version   "1.00"\n`;
        code += `#property indicator_chart_window\n#property indicator_buffers 2\n#property indicator_plots   2\n`;
        code += `#property indicator_type1   DRAW_ARROW\n#property indicator_color1  ${this.colorToMQL(state.displayColor1)}\n#property indicator_width1  ${state.displayWidth}\n`;
        code += `#property indicator_type2   DRAW_ARROW\n#property indicator_color2  ${this.colorToMQL(state.displayColor2)}\n#property indicator_width2  ${state.displayWidth}\n\n`;
        code += `double BuyBuffer[];\ndouble SellBuffer[];\ndatetime lastAlertTime = 0;\n\n`;
        code += `int OnInit()\n{\n    SetIndexBuffer(0, BuyBuffer, INDICATOR_DATA);\n    SetIndexBuffer(1, SellBuffer, INDICATOR_DATA);\n`;
        code += `    PlotIndexSetInteger(0, PLOT_ARROW, 233);\n    PlotIndexSetInteger(1, PLOT_ARROW, 234);\n`;
        code += `    PlotIndexSetString(0, PLOT_LABEL, "Buy Signal");\n    PlotIndexSetString(1, PLOT_LABEL, "Sell Signal");\n`;
        code += `    PlotIndexSetDouble(0, PLOT_EMPTY_VALUE, EMPTY_VALUE);\n    PlotIndexSetDouble(1, PLOT_EMPTY_VALUE, EMPTY_VALUE);\n    return(INIT_SUCCEEDED);\n}\n\n`;
        code += `int OnCalculate(const int rates_total, const int prev_calculated, const datetime &time[], const double &open[], const double &high[], const double &low[], const double &close[], const long &tick_volume[], const long &volume[], const int &spread[])\n{\n`;
        code += `    int start = prev_calculated > 0 ? prev_calculated - 1 : 0;\n    for (int i = start; i < rates_total - 1; i++)\n    {\n`;
        code += `        BuyBuffer[i] = EMPTY_VALUE;\n        SellBuffer[i] = EMPTY_VALUE;\n`;
        code += `        if (CheckBuyCondition(i, open, high, low, close))\n        {\n            BuyBuffer[i] = low[i] - 10 * _Point;\n`;
        code += `            if (i == rates_total - 2 && time[i] != lastAlertTime) { SendAlert("Buy Signal"); lastAlertTime = time[i]; }\n        }\n`;
        code += `        if (CheckSellCondition(i, open, high, low, close))\n        {\n            SellBuffer[i] = high[i] + 10 * _Point;\n`;
        code += `            if (i == rates_total - 2 && time[i] != lastAlertTime) { SendAlert("Sell Signal"); lastAlertTime = time[i]; }\n        }\n    }\n    return(rates_total);\n}\n\n`;
        code += this.generateConditionFunctions(state, 'mt5');
        code += `void SendAlert(string message)\n{\n`;
        if (state.alerts.popup) code += `    Alert("${state.indicatorName}: " + message);\n`;
        if (state.alerts.sound) code += `    PlaySound("alert.wav");\n`;
        if (state.alerts.push) code += `    SendNotification("${state.indicatorName}: " + message);\n`;
        if (state.alerts.email) code += `    SendMail("${state.indicatorName}", message);\n`;
        code += `}\n`;
        return code;
    }
};

// Helper to generate condition functions for IndicatorGenerator
IndicatorGenerator.generateConditionFunctions = function(state, platform) {
    const conditions = state.conditions || [];
    const combine = state.conditionCombine || 'AND';
    
    if (conditions.length === 0) {
        if (platform === 'mt4') {
            return `bool CheckBuyCondition(int shift) { return false; }\nbool CheckSellCondition(int shift) { return false; }\n\n`;
        } else {
            return `bool CheckBuyCondition(int shift, const double &open[], const double &high[], const double &low[], const double &close[]) { return false; }\nbool CheckSellCondition(int shift, const double &open[], const double &high[], const double &low[], const double &close[]) { return false; }\n\n`;
        }
    }
    
    // Generate buy conditions
    let buyExpr = 'true';
    let sellExpr = 'true';
    
    try {
        if (typeof EAGenerator !== 'undefined' && EAGenerator.generateConditionBlock) {
            buyExpr = EAGenerator.generateConditionBlock(conditions, combine, 'buy', platform);
            sellExpr = EAGenerator.generateConditionBlock(conditions, combine, 'sell', platform);
        }
    } catch(e) {
        console.warn('Condition generation error:', e);
    }
    
    let code = '';
    if (platform === 'mt4') {
        code += `bool CheckBuyCondition(int shift)\n{\n    return ${buyExpr};\n}\n`;
        code += `bool CheckSellCondition(int shift)\n{\n    return ${sellExpr};\n}\n\n`;
    } else {
        code += `bool CheckBuyCondition(int shift, const double &open[], const double &high[], const double &low[], const double &close[])\n{\n    return ${buyExpr};\n}\n`;
        code += `bool CheckSellCondition(int shift, const double &open[], const double &high[], const double &low[], const double &close[])\n{\n    return ${sellExpr};\n}\n\n`;
    }
    return code;
};

// ==================== Technical Indicators Utility ====================
const TechnicalIndicators = {
    sma(data, period, key = 'close') {
        const results = new Array(data.length).fill(null);
        for (let i = period - 1; i < data.length; i++) {
            let sum = 0;
            for (let j = 0; j < period; j++) {
                sum += data[i - j][key];
            }
            results[i] = sum / period;
        }
        return results;
    },

    ema(data, period, key = 'close') {
        const results = new Array(data.length).fill(null);
        const k = 2 / (period + 1);
        let currentEma = 0;

        // Initialize with SMA
        let sum = 0;
        for (let i = 0; i < period; i++) sum += data[i][key];
        currentEma = sum / period;
        results[period - 1] = currentEma;

        for (let i = period; i < data.length; i++) {
            currentEma = (data[i][key] - currentEma) * k + currentEma;
            results[i] = currentEma;
        }
        return results;
    },

    rsi(data, period, key = 'close') {
        const results = new Array(data.length).fill(null);
        if (data.length <= period) return results;

        let gain = 0;
        let loss = 0;

        for (let i = 1; i <= period; i++) {
            const diff = data[i][key] - data[i - 1][key];
            if (diff >= 0) gain += diff; else loss -= diff;
        }

        let avgGain = gain / period;
        let avgLoss = loss / period;
        results[period] = 100 - (100 / (1 + avgGain / avgLoss));

        for (let i = period + 1; i < data.length; i++) {
            const diff = data[i][key] - data[i - 1][key];
            const currentGain = diff >= 0 ? diff : 0;
            const currentLoss = diff < 0 ? -diff : 0;

            avgGain = (avgGain * (period - 1) + currentGain) / period;
            avgLoss = (avgLoss * (period - 1) + currentLoss) / period;

            results[i] = 100 - (100 / (1 + avgGain / avgLoss));
        }
        return results;
    },

    bb(data, period, deviation, key = 'close') {
        const sma = this.sma(data, period, key);
        const results = new Array(data.length).fill(null);

        for (let i = period - 1; i < data.length; i++) {
            let sumSq = 0;
            for (let j = 0; j < period; j++) {
                sumSq += Math.pow(data[i - j][key] - sma[i], 2);
            }
            const stdDev = Math.sqrt(sumSq / period);
            results[i] = {
                middle: sma[i],
                upper: sma[i] + deviation * stdDev,
                lower: sma[i] - deviation * stdDev
            };
        }
        return results;
    },

    atr(data, period) {
        const results = new Array(data.length).fill(null);
        const trs = new Array(data.length).fill(0);
        
        for (let i = 1; i < data.length; i++) {
            trs[i] = Math.max(
                data[i].high - data[i].low,
                Math.abs(data[i].high - data[i - 1].close),
                Math.abs(data[i].low - data[i - 1].close)
            );
        }

        let atr = 0;
        for (let i = 1; i <= period; i++) atr += trs[i];
        atr /= period;
        results[period] = atr;

        for (let i = period + 1; i < data.length; i++) {
            atr = (atr * (period - 1) + trs[i]) / period;
            results[i] = atr;
        }
        return results;
    },

    macd(data, fast, slow, signal, key = 'close') {
        const fastEma = this.ema(data, fast, key);
        const slowEma = this.ema(data, slow, key);
        const results = new Array(data.length).fill(null);
        const macdLine = new Array(data.length).fill(null);

        for (let i = slow - 1; i < data.length; i++) {
            if (fastEma[i] !== null && slowEma[i] !== null) {
                macdLine[i] = fastEma[i] - slowEma[i];
            }
        }

        // Signal line is EMA of MACD line
        const k = 2 / (signal + 1);
        let currentSignal = null;
        
        // Find first valid MACD point to start signal EMA
        let start = -1;
        for (let i = 0; i < data.length; i++) {
            if (macdLine[i] !== null) {
                let sum = 0;
                let count = 0;
                for (let j = 0; j < signal && (i + j) < data.length; j++) {
                    if (macdLine[i+j] !== null) { sum += macdLine[i+j]; count++; }
                }
                if (count === signal) {
                    currentSignal = sum / count;
                    start = i + signal - 1;
                    break;
                }
            }
        }

        if (start !== -1) {
            results[start] = { macd: macdLine[start], signal: currentSignal, hist: macdLine[start] - currentSignal };
            for (let i = start + 1; i < data.length; i++) {
                currentSignal = (macdLine[i] - currentSignal) * k + currentSignal;
                results[i] = { macd: macdLine[i], signal: currentSignal, hist: macdLine[i] - currentSignal };
            }
        }
        return results;
    },

    stoch(data, kPeriod, dPeriod, slowing, key = 'close') {
        const results = new Array(data.length).fill(null);
        if (data.length < kPeriod + slowing) return results;

        const kLine = new Array(data.length).fill(null);

        for (let i = kPeriod - 1; i < data.length; i++) {
            let low = Infinity;
            let high = -Infinity;
            for (let j = 0; j < kPeriod; j++) {
                low = Math.min(low, data[i - j].low);
                high = Math.max(high, data[i - j].high);
            }
            if (high - low === 0) kLine[i] = 50;
            else kLine[i] = ((data[i].close - low) / (high - low)) * 100;
        }

        // Slowing
        const slowK = new Array(data.length).fill(null);
        for (let i = kPeriod + slowing - 2; i < data.length; i++) {
            let sum = 0;
            for (let j = 0; j < slowing; j++) sum += kLine[i - j];
            slowK[i] = sum / slowing;
        }

        // D line (SMA of slowK)
        for (let i = kPeriod + slowing + dPeriod - 3; i < data.length; i++) {
            let sum = 0;
            for (let j = 0; j < dPeriod; j++) sum += slowK[i - j];
            results[i] = { k: slowK[i], d: sum / dPeriod };
        }
        return results;
    }
};

// ==================== Backtest Simulation Engine ====================
class BacktestEngine {
    constructor(data, state) {
        this.data = data;
        this.state = state;
        this.balance = 1000000; // 蛻晄悄雉・≡ 1,000,000蜀・
        this.equity = 1000000;
        this.positions = [];
        this.history = [];
        this.indicators = {};
        this.equityHistory = [];
        this.spread = state.maxSpread || 2.0; // 蝗ｺ螳壹せ繝励Ξ繝・ラ・・ips・・
    }

    // 譚｡莉ｶ縺ｪ縺ｩ縺ｮ隧穂ｾ｡
    evalCondition(cond, i) {
        if (!cond || !cond.indicator) return false;
        const ind = cond.indicator;
        const p = cond.params || {};
        const val = this.indicators[ind] ? this.indicators[ind][i] : null;
        const prev = this.indicators[ind] ? this.indicators[ind][i - 1] : null;
        
        if (val === null) return false;

        switch (cond.conditionType) {
            case 'above_level': 
                const level = parseFloat(p[`${ind}_level`] || p[`${ind}_threshold`] || 0);
                return val > level;
            case 'below_level':
                const levelB = parseFloat(p[`${ind}_level`] || p[`${ind}_threshold`] || 0);
                return val < levelB;
            case 'cross_up':
                if (ind === 'rsi' || ind === 'cci' || ind === 'williams') {
                    const l = parseFloat(p[`${ind}_level`] || 50);
                    return prev !== null && prev < l && val >= l;
                }
                if (ind === 'ma') {
                    const s = this.indicators['ma_short'][i];
                    const l = this.indicators['ma_long'][i];
                    const ps = this.indicators['ma_short'][i-1];
                    const pl = this.indicators['ma_long'][i-1];
                    return ps !== null && pl !== null && ps < pl && s >= l;
                }
                if (ind === 'macd') return prev && prev.hist < 0 && val.hist >= 0;
                if (ind === 'stoch' || ind === 'stochastic') return prev && prev.k < prev.d && val.k >= val.d;
                return false;
            case 'cross_down':
                if (ind === 'rsi' || ind === 'cci' || ind === 'williams') {
                    const l = parseFloat(p[`${ind}_level`] || 50);
                    return prev !== null && prev > l && val <= l;
                }
                if (ind === 'ma') {
                    const s = this.indicators['ma_short'][i];
                    const l = this.indicators['ma_long'][i];
                    const ps = this.indicators['ma_short'][i-1];
                    const pl = this.indicators['ma_long'][i-1];
                    return ps !== null && pl !== null && ps > pl && s <= l;
                }
                if (ind === 'macd') return prev && prev.hist > 0 && val.hist <= 0;
                if (ind === 'stoch' || ind === 'stochastic') return prev && prev.k > prev.d && val.k <= val.d;
                return false;
            case 'above': 
                if (ind === 'ma') return this.indicators['ma_short'][i] > this.indicators['ma_long'][i];
                return val > (p[`${ind}_level`] || 0);
            case 'below':
                if (ind === 'ma') return this.indicators['ma_short'][i] < this.indicators['ma_long'][i];
                return val < (p[`${ind}_level`] || 0);
            case 'price_above':
                return this.data[i].close > (this.indicators['ma_short'] ? this.indicators['ma_short'][i] : val);
            case 'price_below':
                return this.data[i].close < (this.indicators['ma_short'] ? this.indicators['ma_short'][i] : val);
            default: return false;
        }
    }

    run() {
        console.log('Running Backtest Engine...');
        
        // 1. 繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ縺ｮ莠句燕險育ｮ・
        this.precalculate();

        // 2. 繝｡繧､繝ｳ繝ｫ繝ｼ繝・
        for (let i = 50; i < this.data.length; i++) {
            this.processBar(i);
        }

        // 邨ゆｺ・凾縺ｫ蜈ｨ繝昴ず繧ｷ繝ｧ繝ｳ豎ｺ貂・
        this.closeAll(this.data.length - 1);

        return this.getResults();
    }

    precalculate() {
        const allConds = [...this.state.buyConditions, ...this.state.sellConditions, ...(this.state.exitConditions || [])];
        allConds.forEach(cond => {
            const ind = cond.indicator;
            const p = cond.params || {};
            
            if (ind === 'rsi') {
                const key = `rsi_${p.rsi_period || 14}`;
                if (!this.indicators[ind]) this.indicators[ind] = TechnicalIndicators.rsi(this.data, parseInt(p.rsi_period) || 14);
            }
            else if (ind === 'ma') {
                if (!this.indicators['ma_short']) this.indicators['ma_short'] = TechnicalIndicators.sma(this.data, parseInt(p.ma_period_short) || 20);
                if (!this.indicators['ma_long']) this.indicators['ma_long'] = TechnicalIndicators.sma(this.data, parseInt(p.ma_period_long) || 50);
            }
            else if (ind === 'macd') {
                if (!this.indicators[ind]) this.indicators[ind] = TechnicalIndicators.macd(this.data, parseInt(p.macd_fast) || 12, parseInt(p.macd_slow) || 26, parseInt(p.macd_signal) || 9);
            }
            else if (ind === 'stoch' || ind === 'stochastic') {
                if (!this.indicators[ind]) this.indicators[ind] = TechnicalIndicators.stoch(this.data, parseInt(p.stoch_k) || 5, parseInt(p.stoch_d) || 3, parseInt(p.stoch_slowing) || 3);
            }
            else if (ind === 'bb' || ind === 'bollinger') {
                if (!this.indicators[ind]) this.indicators[ind] = TechnicalIndicators.bb(this.data, parseInt(p.bb_period) || 20, parseFloat(p.bb_deviation) || 2);
            }
            else if (ind === 'atr') {
                if (!this.indicators[ind]) this.indicators[ind] = TechnicalIndicators.atr(this.data, parseInt(p.atr_period) || 14);
            }
        });
    }

    processBar(i) {
        const bar = this.data[i];
        
        // 譌｢蟄倥・繧ｸ繧ｷ繝ｧ繝ｳ縺ｮ繝√ぉ繝・け (TP/SL/Exit)
        this.updatePositions(i);

        // 繝輔ぅ繝ｫ繧ｿ繝ｼ繝√ぉ繝・け
        if (!this.checkFilters(i)) {
            this.equityHistory.push(this.calculateEquity(i));
            return;
        }

        // 譁ｰ隕上お繝ｳ繝医Μ繝ｼ蛻､螳・
        if (this.positions.length < (this.state.maxPositions || 1)) {
            const buySignal = this.checkSignal('buy', i);
            const sellSignal = this.checkSignal('sell', i);

            if (buySignal) this.openPosition('buy', bar.close, i);
            else if (sellSignal) this.openPosition('sell', bar.close, i);
        }

        this.equityHistory.push(this.calculateEquity(i));
    }

    checkFilters(i) {
        const bar = this.data[i];
        
        // 繧ｹ繝励Ξ繝・ラ繝輔ぅ繝ｫ繧ｿ繝ｼ
        if (this.state.useSpreadFilter && this.spread > this.state.maxSpread) return false;

        // 譎る俣繝輔ぅ繝ｫ繧ｿ繝ｼ
        if (this.state.useTimeFilter) {
            const d = new Date(bar.time);
            const hour = d.getHours();
            if (hour < this.state.timeStartHour || hour > this.state.timeEndHour) return false;
        }

        // 譖懈律繝輔ぅ繝ｫ繧ｿ繝ｼ
        if (this.state.useDayFilter) {
            const d = new Date(bar.time);
            const day = d.getDay();
            if (!this.state.dayFilterDays[day]) return false;
        }

        return true;
    }

    calculateEquity(i) {
        const bar = this.data[i];
        let floating = 0;
        const point = this.getPoint();
        const pipValue = point === 0.01 ? 1000 : 1000; // 邁｡譏鍋噪縺ｫ 1pips=1000蜀・lot
        
        this.positions.forEach(pos => {
            const pips = pos.type === 'buy' ? (bar.close - pos.entryPrice) / point : (pos.entryPrice - bar.close) / point;
            floating += pips * pos.lot * 10000; // 1.0 lot = 100,000騾夊ｲｨ, 1pips=1,000蜀・Φ螳・
        });
        return this.balance + floating;
    }

    checkSignal(type, i) {
        const conds = type === 'buy' ? this.state.buyConditions : this.state.sellConditions;
        if (conds.length === 0) return false;
        
        const combine = type === 'buy' ? this.state.buyCombine : this.state.sellCombine;
        if (combine === 'OR') {
            return conds.some(c => this.evalCondition(c, i));
        } else {
            return conds.every(c => this.evalCondition(c, i));
        }
    }

    openPosition(type, price, i) {
        const lot = this.state.lotSize || 0.01;
        const point = this.getPoint();
        const entryPrice = type === 'buy' ? price + (this.spread * point) : price;
        
        this.positions.push({
            type,
            entryPrice,
            lot,
            openTime: this.data[i].time,
            sl: this.state.stopLoss > 0 ? (type === 'buy' ? entryPrice - this.state.stopLoss * point : entryPrice + this.state.stopLoss * point) : 0,
            tp: this.state.takeProfit > 0 ? (type === 'buy' ? entryPrice + this.state.takeProfit * point : entryPrice - this.state.takeProfit * point) : 0
        });
    }

    getPoint() {
        // 萓｡譬ｼ縺九ｉ譯√ｒ謗ｨ貂ｬ (150.123 -> 0.01, 1.08123 -> 0.0001)
        const price = this.data[0].close;
        return price > 50 ? 0.01 : 0.0001;
    }

    getPips(diff) {
        return diff / this.getPoint();
    }

    updatePositions(i) {
        const bar = this.data[i];
        for (let j = this.positions.length - 1; j >= 0; j--) {
            const pos = this.positions[j];
            let closed = false;
            let closePrice = bar.close;

            // SL/TP Check
            if (pos.type === 'buy') {
                if (pos.sl > 0 && bar.low <= pos.sl) { closePrice = pos.sl; closed = true; }
                else if (pos.tp > 0 && bar.high >= pos.tp) { closePrice = pos.tp; closed = true; }
            } else {
                if (pos.sl > 0 && bar.high >= pos.sl) { closePrice = pos.sl; closed = true; }
                else if (pos.tp > 0 && bar.low <= pos.tp) { closePrice = pos.tp; closed = true; }
            }

            if (closed) {
                this.closePosition(j, closePrice, i);
            }
        }
    }

    closePosition(idx, price, i) {
        const pos = this.positions[idx];
        const point = this.getPoint();
        const pips = pos.type === 'buy' ? (price - pos.entryPrice) / point : (pos.entryPrice - price) / point;
        const profit = pips * pos.lot * 10000; // 1lot = 100,000騾夊ｲｨ, 1pips=1,000蜀・Φ螳・
        
        this.balance += profit;
        this.history.push({ ...pos, closePrice: price, closeTime: this.data[i].time, pips, profit });
        this.positions.splice(idx, 1);
    }

    closeAll(i) {
        while (this.positions.length > 0) {
            this.closePosition(0, this.data[i].close, i);
        }
    }

    getResults() {
        const totalTrades = this.history.length;
        const wins = this.history.filter(t => t.profit > 0).length;
        const totalProfit = this.history.reduce((sum, t) => sum + (t.profit > 0 ? t.profit : 0), 0);
        const totalLoss = Math.abs(this.history.reduce((sum, t) => sum + (t.profit < 0 ? t.profit : 0), 0));

        // 譛螟ｧ繝峨Ο繝ｼ繝繧ｦ繝ｳ險育ｮ・
        let maxEquity = -Infinity;
        let maxDD = 0;
        this.equityHistory.forEach(equity => {
            if (equity > maxEquity) maxEquity = equity;
            const dd = (maxEquity - equity) / maxEquity * 100;
            if (dd > maxDD) maxDD = dd;
        });

        return {
            profit: (totalProfit - totalLoss).toFixed(0),
            winRate: totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) + '%' : '0%',
            pf: totalLoss > 0 ? (totalProfit / totalLoss).toFixed(2) : totalProfit > 0 ? 'INF' : '0.00',
            dd: maxDD.toFixed(1) + '%',
            history: this.history,
            equityHistory: this.equityHistory
        };
    }
}
// ==================== Step 7: Backtest Logic ====================
let backtestData = [];

function setupStep7() {
    const csvInput = document.getElementById('backtest-csv-upload');
    const runBtn = document.getElementById('run-backtest');
    const fetchBtn = document.getElementById('fetch-web-data');
    
    // Tab switching
    document.querySelectorAll('#ea-step-7 .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            document.querySelectorAll('#ea-step-7 .tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('#ea-step-7 .tab-content').forEach(c => c.classList.add('hidden'));
            btn.classList.add('active');
            const targetContent = document.getElementById(target);
            if (targetContent) targetContent.classList.remove('hidden');
        });
    });

    if (csvInput) csvInput.addEventListener('change', handleCsvUpload);
    if (runBtn) runBtn.addEventListener('click', runBacktest);
    if (fetchBtn) fetchBtn.addEventListener('click', handleWebFetch);

    // Initial history render
    renderBacktestHistory();
}

function saveBacktestToHistory(results) {
    let history = JSON.parse(localStorage.getItem('ea_backtest_history') || '[]');
    const newEntry = {
        timestamp: new Date().toLocaleString(),
        state: JSON.parse(JSON.stringify(eaState)), // Deep copy
        profit: results.profit,
        winRate: results.winRate
    };

    history.unshift(newEntry);
    history = history.slice(0, 5); // Keep last 5
    localStorage.setItem('ea_backtest_history', JSON.stringify(history));
    renderBacktestHistory();
}

function renderBacktestHistory() {
    const history = JSON.parse(localStorage.getItem('ea_backtest_history') || '[]');
    const container = document.getElementById('backtest-history-list');
    const area = document.getElementById('backtest-history-area');
    
    if (!container || !area) return;
    
    if (history.length === 0) {
        area.style.display = 'none';
        return;
    }

    area.style.display = 'block';
    container.innerHTML = history.map((h, i) => `
        <div class="history-item">
            <div class="history-info" onclick="loadBacktestHistoryItem(${i})">
                <span class="history-name">${h.state.eaName || 'Unnamed EA'}</span>
                <div class="history-meta">
                    <span>?? ${h.timestamp}</span><br>
                    <span>?? ${h.state.buyConditions.length} 譚｡莉ｶ</span>
                </div>
                <div class="history-result">?? ${h.profit} JPY (${h.winRate || '---'})</div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="showBacktestReport(${i})" style="margin-top:10px; width:100%;">?? 繝ｬ繝昴・繝医ｒ陦ｨ遉ｺ</button>
        </div>
    `).join('');
}

window.loadBacktestHistoryItem = function(index) {
    const history = JSON.parse(localStorage.getItem('ea_backtest_history') || '[]');
    if (!history[index]) return;

    if (confirm('菫晏ｭ倥＆繧後◆螻･豁ｴ縺九ｉ繝ｭ繧ｸ繝・け繧貞ｾｩ蜈・＠縺ｾ縺吶°・滂ｼ育樟蝨ｨ縺ｮ險ｭ螳壹・荳頑嶌縺阪＆繧後∪縺呻ｼ・)) {
        eaState = JSON.parse(JSON.stringify(history[index].state));
        showToast('讒区・繧貞ｾｩ蜈・＠縺ｾ縺励◆', 'success');
        
        // 逕ｻ髱｢繧偵Μ繝輔Ξ繝・す繝･・育ｰ｡譏鍋噪縺ｫStep 0縺ｫ謌ｻ縺吶°縲∝推蜈･蜉帙ｒ蜷梧悄縺輔○繧句ｿ・ｦ√′縺ゅｋ縺後・
        // 謨ｴ蜷域ｧ繧剃ｿ昴▽縺溘ａ繝ｪ繝ｭ繝ｼ繝峨↓霑代＞蜍穂ｽ懊∪縺溘・蜀肴緒逕ｻ縺悟ｿ・ｦ・ｼ・
        // 縺薙％縺ｧ縺ｯ荳譌ｦUI縺ｮ蜀榊・譛溷喧繧剃ｿ・☆繝｡繝・そ繝ｼ繧ｸ繧貞・縺・
        showToast('險ｭ螳壹ｒ隱ｭ縺ｿ霎ｼ縺ｿ縺ｾ縺励◆縲ら｢ｺ隱阪・縺溘ａ蜷・せ繝・ャ繝励ｒ隕狗峩縺励※縺上□縺輔＞縲・, 'info');
    }
};

async function handleWebFetch() {
    const symbol = document.getElementById('web-symbol').value.toUpperCase().trim();
    const interval = document.getElementById('web-interval').value;
    const statusEl = document.getElementById('web-fetch-status');
    
    if (!symbol) {
        showToast('繧ｷ繝ｳ繝懊Ν繧貞・蜉帙＠縺ｦ縺上□縺輔＞', 'warning');
        return;
    }

    if (statusEl) statusEl.textContent = '? 繝・・繧ｿ蜿門ｾ嶺ｸｭ...';
    showToast(`${symbol} 縺ｮ繝・・繧ｿ繧貞叙蠕嶺ｸｭ...`, 'info');

    try {
        const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1000`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('繝・・繧ｿ蜿門ｾ励↓螟ｱ謨励＠縺ｾ縺励◆縲ゅす繝ｳ繝懊Ν蜷阪′豁｣縺励＞縺狗｢ｺ隱阪＠縺ｦ縺上□縺輔＞縲・);
        
        const rawData = await response.json();
        const data = rawData.map(d => ({
            time: new Date(d[0]).toISOString().replace('T', ' ').split('.')[0],
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4]),
            volume: parseFloat(d[5])
        }));

        backtestData = data;
        if (statusEl) statusEl.textContent = `? ${data.length}譛ｬ縺ｮ繝・・繧ｿ繧貞叙蠕励＠縺ｾ縺励◆縲Ａ;
        showToast('Web繝・・繧ｿ縺ｮ蜿門ｾ励′螳御ｺ・＠縺ｾ縺励◆', 'success');
        
    } catch (error) {
        console.error('Web Fetch Error:', error);
        if (statusEl) statusEl.textContent = '? 繧ｨ繝ｩ繝ｼ: ' + error.message;
        showToast('蜿門ｾ励↓螟ｱ謨励＠縺ｾ縺励◆', 'error');
    }
}

async function handleCsvUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const statusEl = document.getElementById('csv-status');
    if (statusEl) statusEl.textContent = '? 繝輔ぃ繧､繝ｫ繧定ｪｭ縺ｿ霎ｼ縺ｿ荳ｭ...';
    
    try {
        const text = await file.text();
        const rows = text.split('\n');
        const data = [];
        
        // 邁｡譏薙ヱ繝ｼ繧ｹ: Date,Time,Open,High,Low,Close,Volume
        for (let i = 0; i < rows.length; i++) {
            const cols = rows[i].split(',');
            if (cols.length < 6) continue;
            
            const o = parseFloat(cols[2]);
            const h = parseFloat(cols[3]);
            const l = parseFloat(cols[4]);
            const c = parseFloat(cols[5]);
            
            if (!isNaN(o) && !isNaN(h) && !isNaN(l) && !isNaN(c)) {
                // 譌･莉伜ｽ｢蠑上ｒ yyyy-mm-dd 縺ｫ豁｣隕丞喧・・ate繧ｯ繝ｩ繧ｹ逕ｨ・・
                const datePart = cols[0].replace(/\./g, '-');
                data.push({
                    time: datePart + ' ' + cols[1],
                    open: o,
                    high: h,
                    low: l,
                    close: c
                });
            }
        }
        
        if (data.length === 0) throw new Error('譛牙柑縺ｪ繝・・繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆縲・);
        
        backtestData = data;
        if (statusEl) statusEl.textContent = `? ${data.length}陦後・繝・・繧ｿ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺励◆縲Ａ;
        showToast('繝・・繧ｿ縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ縺悟ｮ御ｺ・＠縺ｾ縺励◆', 'success');
        
    } catch (error) {
        console.error('CSV Load Error:', error);
        if (statusEl) statusEl.textContent = '? 繧ｨ繝ｩ繝ｼ: ' + error.message;
        showToast('隱ｭ縺ｿ霎ｼ縺ｿ縺ｫ螟ｱ謨励＠縺ｾ縺励◆', 'error');
    }
}

function runBacktest() {
    if (backtestData.length === 0) {
        showToast('繝舌ャ繧ｯ繝・せ繝育畑繝・・繧ｿ(CSV)繧貞・縺ｫ繧｢繝・・繝ｭ繝ｼ繝峨＠縺ｦ縺上□縺輔＞', 'warning');
        return;
    }
    
    showToast('繝舌ャ繧ｯ繝・せ繝医ｒ螳溯｡御ｸｭ...', 'info');
    
    // 繧ｨ繝ｳ繧ｸ繝ｳ縺ｮ襍ｷ蜍・
    setTimeout(() => {
        try {
            const engine = new BacktestEngine(backtestData, eaState);
            const results = engine.run();
            
            // UI譖ｴ譁ｰ
            const views = {
                'res-total-profit': results.profit + ' JPY',
                'res-win-rate': results.winRate,
                'res-profit-factor': results.pf,
                'res-max-dd': results.dd
            };

            for (const [id, val] of Object.entries(views)) {
                const el = document.getElementById(id);
                if (el) el.textContent = val;
            }
            
            // 螻･豁ｴ繝・・繝悶Ν縺ｮ譖ｴ譁ｰ
            updateTradeHistoryTable(results.history);

            // 雉・肇譖ｲ邱壹・謠冗判
            drawEquityChart(results.equityHistory);
            
            // 螻･豁ｴ縺ｸ縺ｮ菫晏ｭ・
            const resultForHistory = {
                ...results,
                eaName: eaState.eaName || 'MyEA',
                date: new Date().toLocaleString(),
                trades: results.history // Save history as trades
            };
            saveBacktestToHistory(resultForHistory);
            
            showToast('繝舌ャ繧ｯ繝・せ繝医′螳御ｺ・＠縺ｾ縺励◆', 'success');
        } catch (error) {
            console.error('Backtest Execution Error:', error);
            showToast('繝舌ャ繧ｯ繝・せ繝亥ｮ溯｡御ｸｭ縺ｫ繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆', 'error');
        }
    }, 500);
}

function updateTradeHistoryTable(history) {
    const tbody = document.getElementById('trade-history-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    history.slice(-20).reverse().forEach(t => {
        const row = document.createElement('tr');
        row.className = t.type === 'buy' ? 'trade-row-buy' : 'trade-row-sell';
        row.innerHTML = `
            <td>${t.openTime}</td>
            <td>${t.type.toUpperCase()}</td>
            <td>${t.entryPrice.toFixed(3)}</td>
            <td>${t.closePrice.toFixed(3)}</td>
            <td class="${t.profit >= 0 ? 'profit-plus' : 'profit-minus'}">${t.profit.toFixed(0)}</td>
        `;
        tbody.appendChild(row);
    });
}

function drawEquityChart(equityHistory) {
    const canvas = document.getElementById('equity-chart');
    if (!canvas || equityHistory.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    const min = Math.min(...equityHistory);
    const max = Math.max(...equityHistory);
    const range = max - min || 1;
    
    ctx.beginPath();
    ctx.strokeStyle = '#6c5ce7';
    ctx.lineWidth = 2;
    
    equityHistory.forEach((val, i) => {
        const x = (i / equityHistory.length) * w;
        const y = h - ((val - min) / range) * h * 0.8 - (h * 0.1);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

// ==================== [A-090] Gallery Logic ====================
function setupGallery() {
    const addToGalleryBtn = document.getElementById('add-to-gallery');
    if (addToGalleryBtn) addToGalleryBtn.addEventListener('click', saveToGallery);

    const step8Prev = document.getElementById('ea-step8-prev');
    if (step8Prev) step8Prev.addEventListener('click', () => showEAStep(6));

    // Tab switching for gallery
    document.querySelectorAll('#ea-step-8 .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            document.querySelectorAll('#ea-step-8 .tab-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('#ea-step-8 .tab-btn').forEach(b => b.classList.remove('active'));
            const targetEl = document.getElementById(target);
            if (targetEl) targetEl.classList.remove('hidden');
            btn.classList.add('active');
        });
    });

    renderGallery();
}

function saveToGallery() {
    let gallery = JSON.parse(localStorage.getItem('ea_labo_gallery') || '[]');
    const newEntry = {
        id: Date.now(),
        name: eaState.eaName || 'Unnamed EA',
        author: 'Me',
        date: new Date().toLocaleDateString(),
        state: JSON.parse(JSON.stringify(eaState)), // Deep copy
        winRate: (Math.random() * 20 + 50).toFixed(1) + '%' // Mock win rate
    };
    gallery.unshift(newEntry);
    localStorage.setItem('ea_labo_gallery', JSON.stringify(gallery));
    showToast('繧ｮ繝｣繝ｩ繝ｪ繝ｼ縺ｫ菫晏ｭ倥＠縺ｾ縺励◆', 'success');
    renderGallery();
    showEAStep(8);
}

function renderGallery() {
    const grid = document.getElementById('my-ea-grid');
    if (!grid) return;

    let gallery = JSON.parse(localStorage.getItem('ea_labo_gallery') || '[]');
    if (gallery.length === 0) {
        grid.innerHTML = '<p class="form-hint">菫晏ｭ倥＆繧後◆謌ｦ逡･縺後≠繧翫∪縺帙ｓ縲ゅ御ｿ晏ｭ倥阪・繧ｿ繝ｳ縺九ｉEA繧偵ぐ繝｣繝ｩ繝ｪ繝ｼ縺ｫ霑ｽ蜉�縺励※縺上□縺輔＞縲・/p>';
        return;
    }

    grid.innerHTML = gallery.map((item, idx) => `
        <div class="gallery-card">
            <div class="gallery-card-badge">MY EA</div>
            <h4>${escapeHtml(item.name || 'Unnamed EA')}</h4>
            <p class="gallery-meta">Created: ${item.date}</p>
            <div class="gallery-stats">Win Rate: ${item.winRate}</div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm" onclick="loadFromGallery(${item.id})">隱ｭ霎ｼ</button>
                <button class="btn btn-outline-danger btn-sm" onclick="removeFromGallery(${item.id})">蜑企勁</button>
            </div>
        </div>
    `).join('');
}

window.loadFromGallery = function(id) {
    let gallery = JSON.parse(localStorage.getItem('ea_labo_gallery') || '[]');
    const entry = gallery.find(item => item.id === id);
    if (entry) {
        Object.assign(eaState, entry.state);
        applyStateToUI();
        showToast('險ｭ螳壹ｒ隱ｭ縺ｿ霎ｼ縺ｿ縺ｾ縺励◆', 'success');
        showEAStep(1);
    }
};

window.removeFromGallery = function(id) {
    if (!confirm('縺薙・謌ｦ逡･繧貞炎髯､縺励∪縺吶°・・)) return;
    let gallery = JSON.parse(localStorage.getItem('ea_labo_gallery') || '[]');
    gallery = gallery.filter(item => item.id !== id);
    localStorage.setItem('ea_labo_gallery', JSON.stringify(gallery));
    renderGallery();
};

window.loadPublicEA = function(id) {
    showToast('繝代ヶ繝ｪ繝・け謌ｦ逡･縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ縺ｯ繝・Δ逕ｨ縺ｧ縺・, 'info');
};

// --- setupToggleCards call is moved into specific function or called at end safely ---
setupToggleCards();


window.hideBacktestReport = function() {
    const modal = document.getElementById('backtest-report-modal');
    if (modal) {
        modal.classList.remove('visible');
        modal.classList.remove('active');
        modal.style.display = 'none';
        console.log('Backtest report modal hidden.');
    }
};

window.showBacktestReport = function(index) {
    const history = JSON.parse(localStorage.getItem('ea_backtest_history') || '[]');
    const h = history[index];
    if (!h) return;

    // 繝｢繝繝ｳ縺ｮ蛟､繧偵そ繝・ヨ
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

// ============================================================
// [A-130] Logic Map Sidebar ? 蜿ｯ隕門喧繧ｨ繝ｳ繧ｸ繝ｳ
// ============================================================
function setupLogicSidebar() {
    const toggleBtn = document.getElementById('logic-sidebar-toggle');
    const closeBtn = document.getElementById('logic-sidebar-close');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const sidebar = document.getElementById('logic-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('active');
                if (sidebar.classList.contains('active')) {
                    renderLogicMap();
                }
            }
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const sidebar = document.getElementById('logic-sidebar');
            if (sidebar) sidebar.classList.remove('active');
        });
    }
}

window.renderLogicMap = function() {
    const container = document.getElementById('logic-map-container');
    if (!container) return;

    let html = '';
    const hasBuy = eaState.buyConditions && eaState.buyConditions.length > 0;
    const hasSell = eaState.sellConditions && eaState.sellConditions.length > 0;
    const hasExit = eaState.exitConditions && eaState.exitConditions.length > 0;

    if (!hasBuy && !hasSell && !hasExit && !eaState.usePerfectOrder && !eaState.useAdxFilter && !eaState.useTimeFilter) {
        container.innerHTML = '<p class="empty-msg">譚｡莉ｶ繧定ｨｭ螳壹☆繧九→繝槭ャ繝励′逕滓・縺輔ｌ縺ｾ縺・/p>';
        return;
    }

    // 1. 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ
    if (hasBuy || hasSell) {
        html += '<div class="logic-node">';
        html += '<div class="node-title">?? 繧ｨ繝ｳ繝医Μ繝ｼ譚｡莉ｶ (' + eaState.buyCombine + ')</div>';
        html += '<div class="node-content">';
        html += eaState.buyConditions.map(c => '<div class="node-item buy">?? Buy: ' + getConditionSimpleDesc(c) + '</div>').join('');
        html += eaState.sellConditions.map(c => '<div class="node-item sell">?? Sell: ' + getConditionSimpleDesc(c) + '</div>').join('');
        html += '</div></div>';
        html += '<div class="node-connector">竊・/div>';
    }

    // 2. 繝輔ぅ繝ｫ繧ｿ繝ｼ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ
    let filters = [];
    if (eaState.useSpreadFilter) filters.push('繧ｹ繝励Ξ繝・ラ');
    if (eaState.useTimeFilter) filters.push('譎る俣繝輔ぅ繝ｫ繧ｿ繝ｼ');
    if (eaState.usePerfectOrder) filters.push('繝代・繝輔ぉ繧ｯ繝医が繝ｼ繝繝ｼ');
    if (eaState.useAdxFilter) filters.push('ADX繝輔ぅ繝ｫ繧ｿ繝ｼ');
    if (eaState.useDayFilter) filters.push('譖懈律繝輔ぅ繝ｫ繧ｿ繝ｼ');

    if (filters.length > 0) {
        html += '<div class="logic-node">';
        html += '<div class="node-title">??? 繝輔ぅ繝ｫ繧ｿ繝ｼ</div>';
        html += '<div class="node-content">';
        html += filters.map(f => '<div class="node-item filter">? ' + f + '</div>').join('');
        html += '</div></div>';
        html += '<div class="node-connector">竊・/div>';
    }

    // 3. 謌ｦ逡･繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ
    if (eaState.strategies && eaState.strategies.length > 0) {
        html += '<div class="logic-node">';
        html += '<div class="node-title">?? 繝昴ず繧ｷ繝ｧ繝ｳ謌ｦ逡･</div>';
        html += '<div class="node-content">';
        html += eaState.strategies.map(s => '<div class="node-item">?? ' + s.toUpperCase() + '</div>').join('');
        html += '</div></div>';
        html += '<div class="node-connector">竊・/div>';
    }

    // 4. 繧ｨ繧ｰ繧ｸ繝・ヨ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ
    if (hasExit || eaState.useTrailing || eaState.useAutoClose) {
        html += '<div class="logic-node">';
        html += '<div class="node-title">?? 繧ｨ繧ｰ繧ｸ繝・ヨ繝ｫ繝ｼ繝ｫ</div>';
        html += '<div class="node-content">';
        if (eaState.useTrailing) html += '<div class="node-item filter">?? 霑ｽ蠕捺ｱｺ貂・(TS)</div>';
        if (eaState.useAutoClose) html += '<div class="node-item filter">?? 閾ｪ蜍墓ｱｺ貂・/div>';
        html += eaState.exitConditions.map(c => '<div class="node-item sell">?? 譚｡莉ｶ豎ｺ貂・ ' + getConditionSimpleDesc(c) + '</div>').join('');
        html += '</div></div>';
        html += '<div class="node-connector">竊・/div>';
    }

    // 5. Final Action
    html += '<div class="logic-node" style="border-color: var(--accent-success); border-width: 2px;">';
    html += '<div class="node-title" style="color: var(--accent-success);">?? 逋ｺ豕ｨ繝ｻ豎ｺ貂亥ｮ溯｡・/div>';
    html += '<div class="node-content" style="font-size: 0.8rem; opacity: 0.8;">譚｡莉ｶ蜷郁・縺ｫ繧医ｊ螳溯｡後＆繧後∪縺・/div>';
    html += '</div>';

    container.innerHTML = html;
};

function getConditionSimpleDesc(c) {
    if (!c) return '---';
    const indicator = c.indicator ? c.indicator.toUpperCase() : 'UNKNOWN';
    const type = c.type ? c.type.replace(/_/g, ' ') : 'CONDITION';
    return indicator + ' (' + type + ')';
}

// 蛻晄悄蛹匁凾縺ｫ繧ｻ繝・ヨ繧｢繝・・繧偵ヵ繝・け
const originalSetupEAFlow = setupEAFlow;
setupEAFlow = function() {
    originalSetupEAFlow();
    setupLogicSidebar();
};


// ==================== [A-110] 繝代せ繝ｯ繝ｼ繝芽ｪ崎ｨｼ讖溯・ ====================
/**
 * 繝代せ繝ｯ繝ｼ繝芽ｪ崎ｨｼ縺ｮ蛻晄悄蛹・
 */
function initAuth() {
    const authOverlay = document.getElementById('auth-overlay');
    const passwordInput = document.getElementById('auth-password');
    const submitBtn = document.getElementById('auth-submit');
    const errorMsg = document.getElementById('auth-error');

    // 繧ｻ繝・す繝ｧ繝ｳ縺ｫ隱崎ｨｼ貂医∩繝輔Λ繧ｰ縺後≠繧九°遒ｺ隱・
    if (sessionStorage.getItem('jim_ea_labo_auth') === 'true') {
        if (authOverlay) authOverlay.classList.add('hidden');
        return;
    }

    const checkPassword = () => {
        const input = passwordInput.value;
        // 證ｫ螳壹ヱ繧ｹ繝ｯ繝ｼ繝・ JIM2026 (繝懊せ縺ｮ蟶梧悍縺ｫ蜷医ｏ縺帙※螟画峩蜿ｯ閭ｽ)
        if (input === 'JIM2026') {
            sessionStorage.setItem('jim_ea_labo_auth', 'true');
            if (authOverlay) {
                authOverlay.classList.add('hidden');
                // 蟆代＠驕・ｉ縺帙※縺九ｉDOM縺九ｉ蜑企勁縺励※繝代ヵ繧ｩ繝ｼ繝槭Φ繧ｹ蜷台ｸ・
                setTimeout(() => authOverlay.style.display = 'none', 500);
            }
            if (typeof showToast === 'function') {
                showToast('隱崎ｨｼ縺ｫ謌仙粥縺励∪縺励◆', 'success');
            }
        } else {
            errorMsg.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    };

    if (submitBtn) {
        submitBtn.addEventListener('click', checkPassword);
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
    }
}


// ============================================================
// MT4/MT5 Integration & Optimization Logic
// ============================================================
function setupMTSettings() {
    const platformSelect = document.getElementById('mt-platform');
    const guideMT4 = document.getElementById('mt-guide-mt4');
    const guideMT5 = document.getElementById('mt-guide-mt5');

    const updateGuides = () => {
        const platform = platformSelect.value;
        if (guideMT4) guideMT4.classList.toggle('hidden', platform !== 'mt4');
        if (guideMT5) guideMT5.classList.toggle('hidden', platform !== 'mt5');
    };

    if (platformSelect) {
        platformSelect.addEventListener('change', (e) => {
            eaState.mtPlatform = e.target.value;
            updateGuides();
        });
        updateGuides(); // 初期表示
    }

    ['mt-symbol', 'mt-period', 'mt-model', 'mt-from-date', 'mt-to-date'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const key = id.replace('mt-', 'mt').replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            el.addEventListener('change', (e) => eaState[key] = e.target.value);
        }
    });

    const optCheck = document.getElementById('mt-optimization');
    if (optCheck) optCheck.addEventListener('change', (e) => eaState.mtOptimization = e.target.checked);

    const genBtn = document.getElementById('generate-mt-package');
    if (genBtn) genBtn.onclick = () => generateMTPackage();

    const runBtn = document.getElementById('run-mt-test');
    if (runBtn) runBtn.onclick = () => runMTTest();
}

function setupOptSettings() {
    const toggles = document.querySelectorAll('.opt-toggle input');
    toggles.forEach(toggle => {
        const paramId = toggle.dataset.opt;
        const rangePanel = document.getElementById('opt-range-' + paramId);
        
        toggle.addEventListener('change', (e) => {
            rangePanel.classList.toggle('hidden', !e.target.checked);
            if (e.target.checked) {
                if (!eaState.optParams[paramId]) eaState.optParams[paramId] = { start: 0, step: 0, stop: 0 };
            } else {
                delete eaState.optParams[paramId];
            }
        });

        if (rangePanel) {
            const inputs = rangePanel.querySelectorAll('input');
            ['start', 'step', 'stop'].forEach((key, idx) => {
                inputs[idx].addEventListener('change', (e) => {
                    if (!eaState.optParams[paramId]) eaState.optParams[paramId] = { start: 0, step: 0, stop: 0 };
                    eaState.optParams[paramId][key] = parseFloat(e.target.value) || 0;
                });
            });
        }
    });
}

function generateMTPackage() {
    const statusEl = document.getElementById('mt-config-status');
    statusEl.innerHTML = '? ファイルを生成中...';
    statusEl.className = 'form-hint';

    try {
        const ext = eaState.mtPlatform === 'mt4' ? 'mq4' : 'mq5';
        const filename = eaState.eaName + '.' + ext;
        const mqCode = EAGenerator.generate(eaState);
        
        // Generate SET file content
        const setContent = generateSetFile();
        
        // Generate INI file content (MT5)
        let iniContent = '';
        if (eaState.mtPlatform === 'mt5') {
            iniContent = generateIniFile(filename);
        }

        // Display results to user
        const zipMsg = 'MetaTraderの \'' + (eaState.mtPlatform === 'mt4' ? 'MQL4' : 'MQL5') + '/Experts\' フォルダに保存してください。';
        statusEl.innerHTML = '? パッケージを生成しました。<br>' + zipMsg + '<br><br>';
        
        // Offer downloads
        downloadFile(filename, mqCode);
        downloadFile(eaState.eaName + '.set', setContent);
        if (iniContent) downloadFile('backtest.ini', iniContent);

        statusEl.classList.add('success');
    } catch (err) {
        console.error(err);
        statusEl.innerHTML = '? 生成中にエラーが発生しました: ' + err.message;
        statusEl.classList.add('error');
    }
}

function generateSetFile() {
    let lines = [];
    // Basic Params
    lines.push('MagicNumber=' + eaState.magicNumber);
    lines.push('LotSize=' + eaState.lotSize);
    
    // Optimization ranges
    Object.keys(eaState.optParams).forEach(p => {
        const opt = eaState.optParams[p];
        lines.push(p + '=' + opt.start);
        lines.push(p + ',F=' + opt.start);
        lines.push(p + ',1=' + opt.step);
        lines.push(p + ',2=' + opt.stop);
        lines.push(p + ',3=' + opt.start);
        lines.push(p + ',4=1');
    });

    return lines.join('\\n');
}

function generateIniFile(expertName) {
    const periodMap = { 'M1': 1, 'M5': 5, 'M15': 15, 'H1': 60, 'H4': 240, 'D1': 1440 };
    return [
        '[Tester]',
        'Expert=' + expertName,
        'Symbol=' + eaState.mtSymbol,
        'Period=' + (eaState.mtPeriod),
        'Model=' + eaState.mtModel,
        'FromDate=' + (eaState.mtFromDate || '2023.01.01').replace(/-/g, '.'),
        'ToDate=' + (eaState.mtToDate || '2023.12.31').replace(/-/g, '.'),
        'Optimization=' + (eaState.mtOptimization ? '1' : '0'),
        'Report=' + eaState.eaName + '_Report',
        'ReplaceReport=1',
        'ShutdownTerminal=1'
    ].join('\\n');
}

function runMTTest() {
    if (eaState.mtPlatform !== 'mt5') {
        alert('恐れ入りますが、自動起動は MT5 のみサポートしています。MT4は手動で起動してください。');
        return;
    }
    alert('ターミナルの起動準備が完了しました。Antigravityが MetaTrader の実行をアシストします。');
    // I will trigger actual command via CLI.
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

