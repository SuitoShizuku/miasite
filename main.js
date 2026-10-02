/* EDIT: Main Script for Mia Site - Clean & Natural Interactions */
document.addEventListener('DOMContentLoaded', () => {
    // EDIT: Scroll header background state
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // EDIT: Real Command Switcher for Discord Preview
    const cmdButtons = document.querySelectorAll('.command-tab-btn');
    const embedTitle = document.querySelector('.interactive-embed-title');
    const embedDesc = document.querySelector('.interactive-embed-desc');
    const embedField1Val = document.querySelector('.interactive-val-1');
    const embedField2Val = document.querySelector('.interactive-val-2');
    const inputPreview = document.querySelector('.interactive-input-preview');

    if (cmdButtons.length > 0 && embedTitle) {
        const commandData = {
            'dice': {
                input: '/dice use roll roll:1d100 dicebot:Cthulhu7th',
                title: 'ダイスロール (BCDice連携)',
                desc: 'クトゥルフ神話TRPG第7版のダイスロールを実行しました。',
                val1: 'Cthulhu7th : (1D100<=50) -> 28 -> レギュラー成功',
                val2: 'シークレットロール対応 / 出目統計集計機能あり'
            },
            'color': {
                input: '/color convert from_code colorcode:#38bdf8',
                title: 'カラー変換・可視化',
                desc: '指定されたカラーコード(#38bdf8)の各色空間の情報を出力しました。',
                val1: 'HEX: #38bdf8 / RGB: rgb(56, 189, 248)',
                val2: 'チャット内の「#カラーコード」自動検知にも対応'
            },
            'play': {
                input: '/play ten-puzzle generate answer-gen:false',
                title: 'テンパズル (Make 10)',
                desc: '4つの数字を四則演算(+ - × ÷)のみで10にするミニゲームです。',
                val1: '出題: [ 1, 3, 4, 6 ]',
                val2: '解答確認: /play ten-puzzle answer q:1 3 4 6'
            },
            'remind': {
                input: '/remind create time:1h title:通話の予定',
                title: 'リマインダー作成',
                desc: '指定された時間(1時間後)にリマインド通知を設定しました。',
                val1: '通知先: 現在のチャンネル',
                val2: '管理: /remind delete でいつでも一覧から削除可能'
            }
        };

        cmdButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                cmdButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const cmd = btn.getAttribute('data-cmd');
                if (commandData[cmd]) {
                    if (inputPreview) inputPreview.textContent = commandData[cmd].input;
                    embedTitle.textContent = commandData[cmd].title;
                    embedDesc.textContent = commandData[cmd].desc;
                    if (embedField1Val) embedField1Val.textContent = commandData[cmd].val1;
                    if (embedField2Val) embedField2Val.textContent = commandData[cmd].val2;
                }
            });
        });
    }
});
