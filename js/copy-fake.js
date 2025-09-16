// 复制时替换剪贴板内容为网页标题 + 换行 + 当前网址
document.addEventListener('copy', function(e) {
    e.preventDefault(); // 阻止默认复制
    // 网页标题
    const title = document.title;
    // 当前页面网址
    const url = window.location.href;
    // 拼接内容：标题 + 换行 + 网址
    const copyText = title + '\n' + url;
    // 设置剪贴板内容
    e.clipboardData.setData('text/plain', copyText);
});
