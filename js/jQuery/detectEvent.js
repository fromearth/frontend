/**
 * イベント検知
 *
 * @filename detectEvent.js
 * @category JQuery
 * @package  JQueryDetectEvent
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


$(function() {

    // Click
    $("selector").click(function() {
        // click()呼出し時にselectorが存在していないとイベント検知できない
    });

    $(document).on("click", "selector", function() {
        // on()呼出し時にselectorが存在していなくてもイベント検知できる  ver1.7以前はon()ではなくlive()
    });

    $("selector1").on("click", "selector2", function() {
        // はじめから存在するselector1配下のselector2クリックイベント検知
    });
});
