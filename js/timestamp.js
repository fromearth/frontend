/**
 * UNIXタイムスタンプを扱う
 *
 * @filename timestamp.js
 * @category Js
 * @package  JsTimestamp
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


/**
 * UNIXタイムスタンプを取得
 *
 * @return int UNIXタイムスタンプ（1970-01-01 00:00:00から現在までの積算秒）
 */
function getTimestamp() {
    return Math.floor(new Date().getTime() / 1000);
}
