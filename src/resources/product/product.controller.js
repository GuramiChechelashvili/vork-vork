import {Product} from './product.model';
export const index = async (req, res) => {
    try {
        // userDetails => { email : "janoboka@gmail.com", password: "12343434"}
        let products = await Product.find({}).lean().exec();
        return res.status(201).json(products);
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
        let product = await Product.create(req.body.productDetails)
        console.log(product);
        // return res.json(req.body.userDetails)
        return res.status(201).json(product);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}