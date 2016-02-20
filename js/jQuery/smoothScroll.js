/**
 * ページトップへスムーズスクロール移動
 *
 * @filename smoothScroll.js
 * @category JQuery
 * @package  JQuerySmoothScroll
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


$(function() {
    // ページ読み込み完了を待って処理

    if (!$("#scroll-pagetop")[0]) {
        // ページ内に id=scroll-pagetop が無い場合
        $("body").append('<a href="#" id="scroll-pagetop">▲</a>'); // リンク要素追加
    }

    var pageTop = $('#scroll-pagetop');

    // リンク要素に対して、マウスオーバー時の透明度変化を設定
    pageTop.hover(
        function(){ $(this).css("opacity", "0.8"); },
        function(){ $(this).css("opacity", "0.3"); }
    );

    // リンク要素を装飾
    pageTop.css({"position":"fixed",
                    "bottom":"60px",
                    "right":"40px",
                    "background":"#7e7a7a",
                    "borderRadius":"50%",
                    "fontSize":"24px",
                    "opacity":"0.3",
                    "textDecoration":"none",
                    "lineHeight":"1.0",
                    "color":"White",
                    "padding":"10px"});

    // 非表示
    pageTop.hide();

    $(window).scroll(function () {
        // スクロールバー位置深さによるリンク要素の表示／非表示制御
        if ($(this).scrollTop() > 600) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });

    // リンク要素clickイベント検知
    pageTop.click(function () {
        // スクロール処理
        $('body, html').animate({scrollTop:0}, 700, 'swing');
        return false;
    });
});
