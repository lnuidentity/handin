
window.addEventListener('load', function () {
    const button = document.querySelector('.toggle-menu-button');
    const menu = document.querySelector('.header-site-menu');

    if (!button || !menu) return;

    // メニューの開閉
    function toggleMenu() {
        const isOpen = menu.classList.toggle('is-show');

        button.classList.toggle('is-open', isOpen);
        button.setAttribute('aria-expanded', isOpen);
        button.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');

        document.body.classList.toggle('menu-open', isOpen);
    }

    // ボタンをクリック
    button.addEventListener('click', toggleMenu);

    // メニュー内のリンクをクリックしたら閉じる
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (menu.classList.contains('is-show')) {
                menu.classList.remove('is-show');
                button.classList.remove('is-open');
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'メニューを開く');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Escapeキーでも閉じる
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('is-show')) {
            menu.classList.remove('is-show');
            button.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'メニューを開く');
            document.body.classList.remove('menu-open');
        }
    });

    // 初期状態
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'メニューを開く');
});
