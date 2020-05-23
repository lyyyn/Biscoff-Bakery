# Biscoff-Bakery
Create a full CRUD for Biscoff Bakery.
It consists of a simple frontend and backend.
The front end is where customer can see the product offering.
The back end is for the owner to manage the product (CRUD).

### Demo
* Front end: https://biscoff-bakery.herokuapp.com/
* Back end: https://biscoff-bakery.herokuapp.com/admin 

### Goal
Full CRUD App

### Technology Used
- Javascript
- Node / Express
  - express
  - nodemon
  - ejs
  - method-override
- CSS Template
  - https://bulma.io/

### Function
- Home page (GET - render index.ejs) for bakery homepage ('/')
- Product Detail page (GET - render detail.ejs) to act as product detail page ('/:idx')
- Backend (GET - render admin.ejs) to simulate the backend for owner to manage the product ('/admin')
- Add/Edit page (GET - render edit.ejs) to add/edit new product ('/admin/add') ('/admin/edit/:idx')
- Create function (POST - using <form>) to add new product ('/admin/:idx')
- Update function (PUT - using <form> with method-override) to update existing product ('/admin/:idx')
- Delete function (DELETE - using <form> with method-override) to delete existing product ('/admin/:idx')

### Note
- I tried to use 1 single ejs file for both add and edit, because they're generally similar. Different variables are passed during render to achieve this.

### Screenshots
- Homepage
<img src="https://github.com/lyyyn/Biscoff-Bakery/blob/master/screenshots/index.png" width="500px"/>

- Product Details
<img src="https://github.com/lyyyn/Biscoff-Bakery/blob/master/screenshots/product-detail.png" width="500px"/>

- Admin
<img src="https://github.com/lyyyn/Biscoff-Bakery/blob/master/screenshots/admin.png" width="500px"/>

- Add New Product
<img src="https://github.com/lyyyn/Biscoff-Bakery/blob/master/screenshots/add.png" width="500px"/>

- Edit Product
<img src="https://github.com/lyyyn/Biscoff-Bakery/blob/master/screenshots/edit.png" width="500px"/>