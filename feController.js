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
    }
};
