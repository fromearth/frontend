/**
 * Ajax非同期通信
 *
 * @filename ajax.js
 * @category JQuery
 * @package  JQueryAjax
 * @author   fromearth
 * @link     https://github.com/fromearth
 */

// Ajax通信中フラグ
var requestAjax = 0;

$(function() {
    // ページ読み込み完了後に処理

    // Ajax処理
    $.ajax({
        url: "/path/to/webapi.php",
        type: "POST",
        data: {foo:"foo data", bar:"bar data"},
        dataType: "json",
        cache: false,
        success: function(data, status, xhr) {
            if (!data.hasOwnProperty('success')) {
                // 通信成功だが期待するパラメータが送られてきていない
                alert('通信に失敗しました。');
            } else if (data.success) {
                // 処理成功
            } else {
                // 処理失敗
                alert(data.error_reason);
            }
        },
        error: function(xhr, status, error) {
            alert('通信に失敗しました。');
        }
    });

    // Ajax処理（二重通信ブロック版）
    $("hoge-selector").click(function() {
        // イベント検知
        if (requestAjax > 0) {
            // グローバル変数requestAjaxが0より大きい値の場合
            return false;  // Ajax通信中止
        }

        requestAjax = 1;   // Ajax通信中フラグを立てる

        $.ajax({
            url: "/path/to/webapi.php",
            type: "POST",
            data: {foo:"foo data", bar:"bar data"},
            dataType: "json",
            cache: false,
            success: function(data, status, xhr) {
                // 通信成功
                if (!data.hasOwnProperty('success')) {
                    // 通信成功だが期待するパラメータが送られてきていない
                    alert('通信に失敗しました。');
                } else if (data.success) {
                    // 処理成功
                } else {
                    // 処理失敗
                    alert(data.error_reason);
                }
            },
            error: function(xhr, status, error) {
                // 通信失敗
                alert('通信に失敗しました。');
            },
            complete: function(xhr, status) {
                // 通信完了時
                requestAjax = 0;    // Ajax通信中フラグを下ろす
            }
        });
    });

    // ver1.8から success error complete は非推奨となっているので代わりに以下のように書く
    $.ajax({
        url: "/path/to/webapi.php",
        type: "POST",
        data: {foo:"foo data", bar:"bar data"}
        dataType: "json",
        cache: false
    }).done(function(data, status, xhr) {
        // successの代わり
    }).fail(function(xhr, status, error) {
        // errorの代わり
    }).alwarys(function() {  // 成功時：(data,status,xhr), 失敗時：(xhr,status,error)
        // completeの代わり
    });
});
