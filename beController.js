// 'Database'
const products = require('./models/bakedGoods.js');

module.exports = {
    admin: (req, res) => {
        res.render('admin.ejs',
            {
                products
            });
    },
    add: (req, res) => {
        res.render('edit.ejs',
            {
                title:'Add New Product',
                idx:'',
                override:'',
                product:{name:'',price:'',image:''}
            });
    },
    edit: (req, res) => {
        res.render('edit.ejs',
            {
                title:'Edit Product',
                idx:'/' + req.params.idx,
                override:'?_method=PUT',
                product:products[req.params.idx]
            });
    },
    create: (req, res) => {
        // add our form data to our Array Data - don't forget the input tag in ejs must have name="xxx"
        products.push(req.body);
        res.redirect('/admin');
    },
    update: (req, res) => {
        // add our form data to our Array Data
        products[req.params.idx] = (req.body);
        res.redirect('/admin');
    },
    delete: (req, res) => {
        // add our form data to our Array Data
        products.splice(req.params.idx, 1);
        res.redirect('/admin');
    },

};
