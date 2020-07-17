import css from 'styled-jsx/css';

export default <style>{`
    body {
        margin: 10px;
        padding: 5px;
        background-color: lightcyan;
    }
    header {
        font-size: 64pt;
        font-weight: bold;
        text-align: right;
        letter-spacing: -8px;
        color: #DDDDFF;
        margin: -32px 5px;
    }
    footer {
        font-size: 12pt;
        text-align: center;
        border-bottom: 1px solid #99C;
        color: #99C;
        margin: 50px 0px 10px 0px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        left: 10px;
    }
    h1 {
        font-size: 22pt;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0px;
        color: #77A;
        margin: -50px 0px 50px 0px;
    }
    p {
        margin: 0px;
        color: #669;
        font-size: 16pt;
    }
    #main {
        height: 100hv;
    }
    /* タブ切り替えスタイル */
    .tabs {
        margin-top: 50px;
        padding-bottom: 50px;
        background-color: #FFF;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin: 0 auto;
    }
    .tab_item {
        width: calc(100%/2);
        height: 50px;
        border-top: 3px solid #5AB4BD;
        background-color: lightcyan;
        line-height: 50px;
        font-size: 16pt;
        text-align: center;
        color: #565656;
        display: block;
        float: left;
        font-weight: bold;
        transition: all 0.2s ease;
    }
    .tab_item:hover {
        opacity: 0.75;
    }
    input[name="tab_item"] {
        display: none;
    }
    .tab_content {
        display: none;
        padding: 20px 20px;
        height: 60vh;
        clear: both;
        overflow: hidden;
    }
    /* 選択されているタブのコンテンツのみ表示 */
    #home:checked ~ #home_content,
    #talk:checked ~ #talk_content {
        display: block;
    }
    /* 選択されているタブのスタイルを変える */
    #home:checked ~ .tab_home,
    #talk:checked ~ .tab_talk {
        background-color: #5AB4BD;
        color: #FFF;
    }
`}</style>