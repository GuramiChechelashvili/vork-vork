const Header = {
    wrapper: '',
    headerEl: '',
    renderHeader: function() {
        General.root.appendChild(Header.wrapper);
    },
    renderWrapper: function() {
        let wrapper = document.createElement('div');
        wrapper.classList.add('header-wrapper','wrapper');
        let container = document.createElement('div');
        container.classList.add('container');
        Header.headerEl = container;
        wrapper.appendChild(container);
        Header.wrapper = wrapper;
    },
    renderLogo: function() {
        let logo = document.createElement('h1');
        logo.classList.add('header__logo');
        logo.appendChild(document.createTextNode('Kill me'));
        Header.headerEl.appendChild(logo);
    },
    renderNav: function() {
        let list = document.createElement('ul');
        list.classList.add('header__list');
        let login = document.createElement('li');
        login.appendChild(document.createTextNode('Login'));
        let register = document.createElement('li');
        register.appendChild(document.createTextNode('Register'));
        list.appendChild(login);
        list.appendChild(register);
        Header.headerEl.appendChild(list);

        login.addEventListener('click',function(){
            General.removeElement(document.getElementById('products'));
            Login.render();
            // console.log('login')
        });

        register.addEventListener('click',function(){
            General.removeElement(document.getElementById('products'));
            Register.renderSwitch();
        });
    },
    render: function() {        
        Header.renderWrapper();
        // Header.renderLogo();
        Header.renderNav();
        Header.renderHeader();
    }
}