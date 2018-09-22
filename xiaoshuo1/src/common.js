/**
 * Created by h5 on 2018/7/10.
 */
(function(win) {
    var docEl = win.document.documentElement;
    var time=null;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 414) {
            width = 414;
        }
        var rem =width/7.5;
        if (rem > 100) {
            rem = 100;
        }
        docEl.style.fontSize = rem + 'px';
    }
    win.addEventListener('resize', function() {
        clearTimeout(time);
        time = setTimeout(refreshRem, 1);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(time);
            time = setTimeout(refreshRem, 1);
        }
    }, false);
    refreshRem();

})(window);