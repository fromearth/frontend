/**
 * 画像の属性情報を取得
 *
 * @filename getImageInfo.js
 * @category Js
 * @package  JsGetImageInfo
 * @author   fromearth
 * @link     https://github.com/fromearth
 */


/**
 * 画像URLから画像幅を取得
 *
 * @param string url 画像URL
 * @return int 画像幅
 */
function getImageWidth(url) {
    var img = new Image();
    img.src = url;

    return img.width;
}
