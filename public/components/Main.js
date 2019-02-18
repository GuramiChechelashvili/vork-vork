const Main = {
    renderMain: function() {
        let main = document.createElement('div');
        let container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id','products');
        main.appendChild(container);
        main.classList.add('main');
        General.root.appendChild(main);
    },
    render: function() {
        Main.renderMain();
    }
}