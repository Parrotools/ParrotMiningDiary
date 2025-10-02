console.log('Happy developing ✨')

document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const trigger = document.getElementById('moremenu');
    const content = document.getElementById('morecontent');



    // 添加点击事件监听
    trigger.addEventListener('click', () => {

        content.classList.toggle('visible');

        trigger.classList.toggle('expanded');
    });
});
