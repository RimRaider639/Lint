This branch contains the backend

Deployed link: https://wide-eyed-pinafore-duck.cyclic.app

## Routes:

- /products
- /users

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

- Any key in the product can be used as a filter.

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

### Product Schema

```
{
  _id: ObjectId,
  crawl_timestamp: { type: Date, default: Date.now() },
  product_name: { type: String, required: true },
  product_category_tree: [{ type: String, required: true }],
  pid: { type: String, required: true },
  retail_price: { type: Number, required: true },
  discounted_price: { type: Number, default: this.retail_price },
  image: [{ type: String, required: true }],
  description: { type: String, required: true },
  product_rating: { type: String, default: "No rating available" },
  overall_rating: { type: String, default: "No rating available" },
  brand: { type: String, required: true },
  product_specifications: Object,
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
}
```

## /users

### Routes:

- **Open Routes:**

1. `POST /register` : to register a new user
2. `POST /login` : user login

- **Admin Routes:**

1. `GET /` : to get all users

### User Schema:

```
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  mobile: { type: String },
  country: { type: String },
  city: { type: String },
}
```
