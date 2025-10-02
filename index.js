console.log('Happy developing ✨')
// 获取元素
const moreMenu = document.getElementById('moremenu');
const moreContent = document.getElementById('morecontent');

// 点击事件处理
moreMenu.addEventListener('click', () => {
    // 切换显示/隐藏状态
    moreContent.classList.toggle('show');
});

