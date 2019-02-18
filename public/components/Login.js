const Login = {
    renderLogin: function() {
        let form = `
            <div id='loginForm' class='login-form form'>
                <h2 class='register-heading'>Login</h2>
                <input type='text' name='email' placeholder='Email' id='loginEmail'>
                <input type='password' name='password' placeholder='Password' id='loginPassword'>
                <input type='submit' value='Login' id='loginBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;

        let loginBtn = document.getElementById('loginBtn');
        loginBtn.addEventListener('click',function(){
            let form = document.getElementById('loginForm');
            let email = document.getElementById('loginEmail');
            if(General.validateInputs(form,'warning')) {
                if(General.validateEmail(email.value) == false) {
                    email.classList.add('warning');
                }else {
                    Events.loginUser();
                }
            }
        });
    },
    render: function() {
        Login.renderLogin();
    }
}










// app.post('/user', function (req, res) {
//     db.User.findOne({
//          where: {
//              email: req.body.email
//                 }
//     }).then(function (user) {
//         if (!user) {
//            res.redirect('/');
//         } else {
//     bcrypt.compare(req.body.password, user.password, function (err, result) {
//         if (result == true) {
//             res.redirect('/home');
//         } else {
//             res.send('Incorrect password');
//             res.redirect('/');
//         }
//         });
//         }
//     });
// });