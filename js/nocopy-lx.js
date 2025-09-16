// nocopy-lx.js - 渐变模糊 & 完整禁用
(function() {
    var content = document.querySelector('.container') || document.body;

    // 设置渐变过渡效果
    content.style.transition = 'filter 0.5s ease';

    // 禁止右键
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 禁止文本选择
    content.style.userSelect = 'none';
    content.style.webkitUserSelect = 'none';
    content.style.msUserSelect = 'none';

    // 禁止拖拽
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    // 复制事件，替换为网页标题 + 换行 + 当前网址
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        var copyText = document.title + '\n' + window.location.href;
        e.clipboardData.setData('text/plain', copyText);
    });

    // 鼠标离开窗口或页面模糊
    function blurContent() {
        content.style.filter = 'blur(5px)';
    }

    // 鼠标回到页面恢复清晰
    function unblurContent() {
        content.style.filter = 'none';
    }

    // 离开窗口
    window.addEventListener('blur', blurContent);
    // 回到窗口
    window.addEventListener('focus', unblurContent);

    // 离开页面区域（点击外部）也触发模糊
    document.addEventListener('mouseleave', blurContent);
    document.addEventListener('mouseenter', unblurContent);

    // 禁止打印
    window.onbeforeprint = function() {
        return false;
    };

    // 阻止 F12 / Ctrl+Shift+I
    document.addEventListener('keydown', function(e) {
        if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i')) {
            e.preventDefault();
        }
    });
})();
