/**
 * ロールオーバー効果
 *
 * @filename rollover.js
 * @category JQuery
 * @package  JQueryRollover
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


$(function() {
    // ページ読み込みを待って処理

    // href属性値に / が入っているリンク配下のimg要素の hoverイベント検知
    $("a[href*='/'] img").hover(
        function() {
            // マウスオーバー時
            $(this).fadeTo("slow",0.4);  // 透明度0.4になるまでゆっくり変化
        },
        function() {
            // マウスオーバーからはずれた時
            $(this).fadeTo("slow",1.0);  // 透明度が無くなるまでゆっくり変化
        }
    );
});
