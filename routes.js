const func = require('./controller');
		
module.exports = (app) => {
    // Root - important for Heroku
    app.get('/', func.index);

    // view details in frontend
    app.get('/:idx', func.show);

    // CRUD main listing
    app.get('/admin', func.admin);

    // add - need to show a form
    app.get('/admin/add', func.add);

    // edit - need to show a form
    app.get('/admin/edit', func.edit);

    // create - actually create a new item
    app.post('/admin', func.create);

    // view - view an item
    app.get('/admin/:idx', func.view);

    // update - actually update the item
    app.put('/admin/:idx', func.update);

    // update - actually update the item
    app.delete('/admin/:idx', func.delete);
};
