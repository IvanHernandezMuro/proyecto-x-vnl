const iconoMenu = document.querySelector('#navbar-toggler'),
    menu = document.querySelector('#navbar-nav');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    // Alternamos estilos para el menu y body
})