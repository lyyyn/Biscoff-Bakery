// 'Database'
const products = require('./models/bakedGoods.js');

module.exports = {
    index: (req, res) => {
        res.render('index.ejs',
            {
                products
            });
    },
    show: (req, res) => {
        res.render('detail.ejs',
            {
                product: products[req.params.idx]
            });
    },
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
                action:'create',
                product:{name:'',price:'',image:''}
            });
    },
    edit: (req, res) => {
        res.send('edit.ejs');
    },
    create: (req, res) => {
        // add our form data to our Array Data - don't forget the input tag in ejs must have name="xxx"
        products.push(req.body);
        res.redirect('/admin');
    },
    view: (req, res) => {
        res.send('view.ejs');
    },
    update: (req, res) => {
        // add our form data to our Array Data
        products[req.params.idx] = (req.body);
        res.redirect('/admin');
    },
    delete: (req, res) => {
        // add our form data to our Array Data
        products.slice(req.params.idx, 1);
        res.redirect('/admin');
    },

};
