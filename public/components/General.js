const General = {
    root: document.getElementById('root'),
    
    removeElement: function(element) {
        element.querySelectorAll('*').forEach(el => {
            el.inneHTML = '';
            el.parentNode.removeChild(el);
        });
    },
    validateInputs: function(form,className) {
        let inputs = form.querySelectorAll('input');
        let emptyInputs = 0;
        inputs.forEach(input => {
            (input.value.trim() == '') ? (emptyInputs++, input.classList.add(className)) : input.classList.remove(className);
        });
        if (emptyInputs) {
            return false;
        }else {
            return true;
        }
    },
    clearInputs: function(form) {
        let inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        });
    },
    validateEmail: function(str) {
        let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'igm') 
        return regex.test(str);
    }
}