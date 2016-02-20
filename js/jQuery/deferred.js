/**
 * Deferredオブジェクトの状態変化を監視
 *
 * 状態変化に応じた処理が実装可能
 * 複数の非同期処理に対して、処理順番を強制するのに利用できる
 *
 * @filename deferred.js
 * @category JQuery
 * @package  JQueryDeferred
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


/**
 * Deferred対応の関数作成例（わかりやすくする為、固定で解決通知完了）
 *
 * @return object Promiseオブジェクト
 */
function alwaysResolve() {
    var d = $.Deferred();  // オブジェクト作成(newは書いても書かなくても作成される)

    // 非同期処理
    setTimeout(function() {
        d.resolve();         // 状態を解決にする
    }, 1000);

    return d.promise();    // 処理完了を監視するためのPromiseオブジェクトを即座に返却
}

/**
 * Deferred対応の関数作成例（わかりやすくする為、固定で棄却通知完了）
 *
 * @return object Promiseオブジェクト
 */
function alwaysReject() {
    var d = $.Deferred();  // オブジェクト作成

    // 非同期処理
    setTimeout(function() {
        d.reject('error!');  // 状態を棄却にする
    }, 1000);

    return d.promise();    // 処理完了を監視するためのPromiseオブジェクトを即座に返却
}


// 実行例（アラート"resolved"が表示される）
alwaysResolve()
    .done(function(data) {  // dataは省略可。直近でresolveに渡したオブジェクトがセットされてくる
        // 解決時に実行させる処理
        alert('resolved');      // こちらに処理がくる
    })
    .fail(function(e) {     // eは省略可。直近でrejectにセットされたエラー内容
        // 棄却時に実行させる処理
        alert('rejected');
    });


// 実行例（アラート"resolved"が表示される）
alwaysResolve()
    .then(
        function() { alert('resolved'); },  // こちらに処理がくる
        function() { alert('rejected'); }
    );


// 実行例（アラート"rejected"が表示される）
alwaysRejected()
    .done(function() {
        // 解決時に実行させる処理
        alert('resolved');
    })
    .fail(function() {
        // 棄却時に実行させる処理
        alert('rejected');      // こちらに処理がくる
    });


// 実行例（then内でPromiseオブジェクトを返さないと直前の状態を引き継ぐ）
alwaysResolve()
    .then(
        alert('resolved'),  // alwaysResolve()によりこちらが処理される
        alert('rejected'))
    .then(
        alert('resolved'),  // 直近thenからPromise返却無い為、１つ前の状態を引き継ぎこちらが処理される
        alert('rejected'));


// 実行例（then内でPromiseオブジェクトを返さないと直前の状態を引き継ぐ）
alwaysReject()
    .then(
        alert('resolved'),
        alert('rejected'))  // alwaysReject()によりこちらが処理される
    .then(
        alert('resolved'),
        alert('rejected')); // 直近thenからPromise返却無い為、１つ前の状態を引き継ぎこちらが処理される


// 実行例（then内に解決時処理しか書いていない場合）
alwaysReject()
    .then(
        alert('resolved'))  // alwaysReject()によりここでは何も処理されない
    .then(
        alert('resolved')); // 直近thenからPromise返却無い為、１つ前の状態を引き継ぎここでも何も処理されない


// 実行例（then内棄却時から復帰させる書き方）
alwaysReject()
    .then(
        alert('resolved'),
        return new $.Deferred().resolve().promise())  // 棄却でこちら処理。新しいオブジェクトを解決状態にして返す
    .then(
        alert('resolved'),  // こちらが処理される
        alert('rejected'));


// 実行例（その他の連結例）
var funcSuccess = function(data) {
    return alwaysResolve();
};
var funcError = function(e) {
    return alwaysReject();
};
alwaysResolve()
    .then(funcSuccess, funcError)
    .then(funcSuccess, funcError)
    .done(function(data) {
        // 解決で到達した場合に行いたい処理をここに書く
    })
    .fail(function(e) {
        // 棄却で到達した場合に行いたい処理をここに書く
    })
    .always(function() {
        // 最後に必ず行う処理をここに書く
    });


// 実行例（複数のPromiseオブジェクト監視）
$.when(func1, func2, func3)
    .done(function(data) {
        // func1 func2 func3 すべてが解決状態になったらここに書いた処理を実行
    })
    .fail(function(e) {
        // func1 func2 func3 １つでも棄却状態になったらここに書いた処理を実行
    });
