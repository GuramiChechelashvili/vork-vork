const Events = {
    registerNewUser(formEl) {        
        fetch(`${location.href}api/user`, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userDetails:{ 
                firstName:  document.getElementById('registerFirstName').value, 
                lastName:   document.getElementById('registerLastName').value,
                phone:      document.getElementById('registerPhone').value,
                email:      document.getElementById('registerEmail').value,
                compName:   document.getElementById('registerCompanyName').value,
                compID:     document.getElementById('registerCompanyID').value,
                password:   document.getElementById('registerPassword').value,
                password2:  document.getElementById('registerPassword2').value
            }})
        })
        .then(res => {
            if(res.status == 201) {
                General.clearInputs(formEl);
                document.getElementById('registerBtn').innerHTML = 'Done';
                setTimeout(() => {
                    document.getElementById('registerBtn').innerHTML = 'Register';
                }, 2000);
            }
            return res.json();
        })
        .then(userApiResult => {
            console.log(userApiResult);
        })
        .catch(err => {
            console.error(err);
        })
    },
    // loadProducts() {
    //     fetch(`${location.href}api/product`)
    //     .then(res => res.json())
    //     .then(products => {
    //         products.forEach(product => {
    //            let prod = Product.render(product.name,product.currentPrice,product.lastPrice,product.unit,product.img);
    //            document.getElementById('products').appendChild(prod);             
    //         });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // },
    loginUser: function() {
        fetch(`${location.href}api/user/login`, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({ userDetails:{ 
            //     email:  document.getElementById('loginEmail').value, 
            //     password:   document.getElementById('loginPassword').value
            // }})
            body: JSON.stringify({ 
                email:  document.getElementById('loginEmail').value, 
                password:   document.getElementById('loginPassword').value
            })
        })
        .then(res => res.json())
        .then(userApiResult => {
            console.log(userApiResult);
        })
        .catch(err => {
            console.error(err);
        })
    },
    render: function() {
        // Events.loadProducts();
    }
}
Events.render();