/**
 * ランダム値を取得
 *
 * @filename random.js
 * @category Js
 * @package  JsRandom
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


/**
 * 1からmaxまでの範囲のランダム値（正数）を取得
 *
 * @param int max 上限値
 * @return int ランダム値
 */
function random(max) {
    return Math.floor(Math.random() * max) + 1;
}
