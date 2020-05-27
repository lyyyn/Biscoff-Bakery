const fe = require('./feController');
const be = require('./beController');
		
module.exports = (app) => {
    // Root - important for Heroku
    app.get('/', fe.index);
    
    // add - need to show a form
    app.get('/admin/add', be.add);

    // edit - need to show a form
    app.get('/admin/edit/:idx', be.edit);

    // CRUD main listing
    app.get('/admin', be.admin);

    // create - actually create a new item
    app.post('/admin', be.create);

    // update - actually update the item
    app.put('/admin/:idx', be.update);

    // update - actually update the item
    app.delete('/admin/:idx', be.delete);

    // view details in frontend
    app.get('/:idx', fe.show);
};
