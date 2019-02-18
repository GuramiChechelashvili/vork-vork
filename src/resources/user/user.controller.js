import {User} from './user.model';
import bcrypt from "bcrypt";

export const index = async (req, res) => {
    try {
        // userDetails => { email : "janoboka@gmail.com", password: "12343434"}
        let users = await User.find({}).lean().exec();
        return res.status(201).json(users);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}

export const store = async (req, res) => {
    try {
        // userDetails => { email : "janoboka@gmail.com", password: "12343434"}
        // console.log(req.body.userDetails);
        let user = await User.create(req.body.userDetails)
        console.log(user);
        // return res.json(req.body.userDetails)
        return res.status(201).json(user);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}


// export const login = async (req, res) => {
//     try {
//         let users = await User.find({}).lean().exec();
//         console.log(users);
//         return res.status(201).json(users);
//     }
//     catch(error) {
//         console.error(error)
//         return res.status(400).json({message: "Invalid Information"});
//     }
// }

// export const login = async (req, res) => {
//     try {
//         // let users = await User.find({}).lean().exec();
//         // console.log(users);
//         // return res.status(201).json(users);
//         let user = User.findOne({ email: req.body.userDetails.email }).lean().exec();
//         console.log(user)
//     }
//     catch(error) {
//         console.error(error)
//         return res.status(400).json({message: "Invalid Information"});
//     }
// }
export const login = async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).send({message: "fail"});
    }else {
        // password = req.body.password;
    }

    try {
        const user = await User.findOne({ email: req.body.email}).select('email password').exec();

        if(!user) {
            return res.status(400).send({message: "Wrong Email"});
        }else {           
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    return res.status(200).send({message:"Valid user"});
                    // res.redirect('localhost:3000/profile');
                } else {
                    return res.status(400).send({message:"Wrong Password"});
                }
            });
        }


        // const user = await User.findOne({ email: req.body.email}).select('email password').exec();
        // if(!user) {
        //     return res.status(400).send({message: "Wrong Email"});
        // }else {
        //     bcrypt.compare(req.body.password, user.password, function (err, result) {
        //         if (result == true) {
        //             // res.redirect('/home');
        //             return res.status(200).send({message:"OK"})
        //         } else {
        //             // res.send('Incorrect password');
        //             return res.status(200).send({message:"Incorrect password"})
        //             // res.redirect('/');
        //         }
        //     });
        // }

        // const match = await user.checkPassword(req.body.password);

        // if(match) {
        //     return res.status(400).send({message: "fail"});
        // }else {
        //     return res.status(200).send({message: "OK"});
        // }
        // return res.status(200).send({user});
        
        // const match = await user.checkPassword(req.body.password);
        // const match = await bcrypt.compare(password, user.passwordHash);

        // pass = bcrypt.compareAsync(user.password, req.body.password);
        // return res.send({pass})

        // if(!match) {
        //     return res.status(400).send({message: "Wrong Password"});
        // }


        // return res.status(200).send({user});

        // else {
        //     return res.status(200).send({user});
        // }
        // const match = await user.checkPassword(req.body.password);

        // if(!match) {
        //     return res.status(400).send({message: "fail"});
        // }
        

        // const newToken = newToken(user);

        // return res.status(200).send({token: newToken});
    }
    catch(err) {
        return res.status(400).send(err);
    }
}

// User.findOne({req.body.email}) == true