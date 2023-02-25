# Lint Backend API

Deployed link: https://wide-eyed-pinafore-duck.cyclic.app

## Routes:

- /products
- /users
- /cart

```
NOTE:
* All user routes require token in the response header.
* All admin routes require token in the response header generated after loging in with an user account with the role of admin.
* All restricted routes require a secret password in the response headers.
```

## /products

### Routes:

- **Open routes**:

1. `GET /` : get all products
2. `GET /:id` : get a product by its ID

- **Admin Routes:**

1. `POST /` : create a new product
2. `PATCH /:id` : update a product by its ID
3. `DELETE /:id` : delete a product

- **Restricted routes**:

1. `GET /add` : to add whatever is in the db.json in the products collection
2. `GET /removeAll` : to remove all documents from products collection

### Features:

#### `GET /`

- Use with `limit` query, else it'll take over a minute to get all the data. `page` and `limit` queries can be used for pagination.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?page=1&limit=100
```

- Any key in the product schema can be used as a filter.

- Query `category` can be used to filter 0th index of category tree array. Similarly `subCategory`, `sub2Category` & `sub3Category` can be used to filter 1st, 2nd & 3rd index of the category tree array simultaneously.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?category=Computers&sub2Category=Bags&page=1&limit=100
```

- For sorting by a field, pass the field in the query `sort`. The query `order` takes asc or desc to sort in ascending (default) or descending order respectively.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?page=1&limit=100&sort=discounted_price&order=asc
```

- Use a query with the suffix `_like` to find results with similar values for that key. This is case sensitive.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?limit=20&subCategory_like=Kids
```

- For comparative operators in queries, use the suffix `_gt` and `_lt` after any query for **greater than or equal to** or **less than or equal to** respectively.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?limit=20&discounted_price_gt=900&discounted_price_lt=1000
```

- For full-text search, use `q` query to pass in the keyword.

```
https://wide-eyed-pinafore-duck.cyclic.app/products/?q=blush&limit=20
```

### Product Schema

```
{
  _id: ObjectId,
  crawl_timestamp: { type: Date, default: Date.now() },
  product_name: { type: String, required: true },
  product_category_tree: [{ type: String, required: true }],
  pid: { type: String, required: true },
  retail_price: { type: Number, default: 100 },
  discounted_price: { type: Number, default: this.retail_price },
  image: [{ type: String, required: true }],
  description: { type: String, required: true },
  brand: { type: String, required: true },
  product_specifications: { type: Object },
  rating: { type: mg.Schema.Types.Mixed, default: "No rating available" },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
}
```

## /users

### Routes:

- **Open Routes:**

1. `POST /register` : to register a new user
2. `POST /login` : user login

- **User Routes:**

1. `GET /` : to get the logged in user's data
2. `PATCH /` : to update the logged in user's profile
3. `DELETE /:id` : to delete a user by their ID

- **Admin Routes:**

1. `GET /all` : to get all users

### Features:

#### `GET /all`

- **_Pagination_** : `page`, `limit`
- **_Filtration_** : `[key]`=value where Key is any field in User Schema

```
https://wide-eyed-pinafore-duck.cyclic.app/users/all?role=customer
```

- **_Sorting_** : `sort` takes the field name and `order` takes **asc** or **desc**

* **_Search Similar_** : `_like` suffix added to any field in the schema (case sensitive)

```
https://wide-eyed-pinafore-duck.cyclic.app/users/all?name_like=ad
```

- **_Comparitive Search_** : `_gt` and `_lt` suffix for **greater than or equal to** or **less than or equal to**

#### `POST /register`

- Attempting to register with the same email returns `{ message: "Email already has an account" }`

- Successfull registration returns `{ message: "User successfully registered" }`

#### `POST /login`

- Sending an unregistered email returns `{ message: "Email is not registered" }`

- Sending the wrong password returns `{ message: "Password does not match the given email" }`

* Successfull login returns `{ message: "User successfully logged in", token }` where token is a randomly genererated string that can be used for authentication.

### User Schema:

```
{
  _id: ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  mobile: { type: String },
  country: { type: String, required: true },
  city: { type: String },
  role: {
    type: String,
    enum: ["customer", "admin"],
    required: true,
    lowercase: true,
    default: "customer",
  }, // customer, admin
}
```

## /cart

### Routes

- **User routes:**

1. `GET /` : get all cart items of the logged in user
2. `POST /` : add item to cart (autogenerates userID and count). Increments the count if product already exists in cart
3. `PATCH /` : update a cart item
4. `DELETE /:id` : delete a cart item by id

### Features

#### `GET /`

- **_Pagination_**: `page`, `limit`

- `productID` gets populated by product data including fields like `_id`, `product_name`, `image`, `retail_price`, `discounted_price`, `discount`, `pid`

#### `POST /`

- On adding a product, if the product already exists, the count of that product increments in the cart (upto a quantity limit), otherwise it gets added. The response looks like `{ data, message: "Item successfully added to cart" }`, where data is the cart item after updation.

### Cart Schema

```
{
  _id: ObjectId,
  productID: { type: ObjectId, required: true, ref: "product" },
  userID: { type: ObjectId, required: true, ref: "user" },
  count: { type: Number, default: 1 },
}
```

## Middlewares

1. **authenticate**: Verifies the token in header to check whether logged in
2. **authorise**: Checks whether the logged in user is an admin
3. **authoriseStrict**: Checks whether a secret access code (password) is present in the header
4. **processQueries**: Deals with custom queries by converting them to appropriate database filters
