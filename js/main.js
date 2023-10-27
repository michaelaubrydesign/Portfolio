document.getElementById('menu-icon').addEventListener('click', function() {
    const sidePanel = document.querySelector('.mobile-nav__side-panel');
    const isOpen = sidePanel.style.right === '0px';

    sidePanel.style.right = isOpen ? '-300px' : '0px';
});

document.getElementById('close-icon-mobile').addEventListener('click', function() {
    const sidePanel = document.querySelector('.mobile-nav__side-panel');
    sidePanel.style.right = '-300px';
});
