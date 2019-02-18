const Register = {
    renderRegisterUser: function(user) {
        let form = `
            <div id='registerForm' class='register-form form'>
                <h2 class='register-heading'>Person Registration</h2>
                <input type='text' name='firstName' placeholder='First Name' id='registerFirstName'>
                <input type='text' name='lastName' placeholder='Last Name' id='registerLastName'>
                <input type='text' name='phone' placeholder='Phone' id='registerPhone'>
                <input type='text' name='email' placeholder='Email' id='registerEmail'>
                <input type='text' name='text' placeholder='Company Name' id='registerCompanyName'>
                <input type='text' name='text' placeholder='Company ID' id='registerCompanyID'>
                <input type='password' name='password' placeholder='Password' id='registerPassword'>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' id='registerPassword2'>
                <button id='registerBtn'>Register</button>
                </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
        let registerBtn = document.querySelector('#registerBtn');
        
        // if () {
            registerBtn.addEventListener('click',function(){
                let form = document.getElementById('registerForm');
                let email = document.getElementById('registerEmail');
                console.log(registerPassword2)
                if(General.validateInputs(form,'warning')) {
                    (!General.validateEmail(email.value)) ? email.classList.add('warning') : email.classList.remove('warning');
                    if(registerPassword.value !== registerPassword2.value) {
                        registerPassword.classList.add('warning');  
                        registerPassword2.classList.add('warning');   
                    }else {
                        Events.registerNewUser(form);
                    }                 
                    // console.log(true)
                }
                // Events.registerNewUser()
            });
        // }
    },
    renderRegisterCompany: function(user) {
        let form = `
            <div id='registerForm' class='register-form form'>
                <h2 class='register-heading'>Company Registration</h2>
                <input type='text' name='firstName' placeholder='First Name'>
                <input type='text' name='lastName' placeholder='Last Name'>
                <input type='text' name='phone' placeholder='Phone'>
                <input type='text' name='email' placeholder='Email'>
                <input type='text' name='companyName' placeholder='Company Name'>
                <input type='text' name='identification' placeholder='ID'>
                <input type='password' name='password' placeholder='Password'>
                <input type='password' name='confirmPassword' placeholder='Confirm Password'>
                <input type='submit' value='Register' id='registerBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
    },
    renderSwitch: function() {
        let switchForm = `
            <div class='switchForm'>
                <button id='showUserRegisterForm'>Person</button>
                <button id='showCompanyRegisterForm'>Company</button>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = switchForm;
        let showRegisterUserFormBtn = document.querySelector('#showUserRegisterForm');
        let showRegisterCompanyFormBtn = document.querySelector('#showCompanyRegisterForm');
        showRegisterUserFormBtn.addEventListener('click',function(){
            Register.renderRegisterUser();
        });
        showRegisterCompanyFormBtn.addEventListener('click',function(){
            Register.renderRegisterCompany();
        });
    },
    render: function() {
        // Register.renderRegister();
    }
}