This branch contains the backend

Deployed link: https://wide-eyed-pinafore-duck.cyclic.app

## Routes:

- /products
- /users

## /products

### Routes:

- **Open routes**:

1. `GET` / : get all products

- **Restricted routes**:

1. `GET` /add : to add whatever is in the db.json in the products collection
2. `GET` /removeall : to remove all documents from products collection

### Features:

- Use with **page** and **limit** query when getting all products, else it'll take over a minute to get all the data.

* Any key in the product can be used as a filter.

* Query **category** can be used to filter 0th index of category tree array. Similarly **subCategory**, **sub2Category** & **sub3Category** can be used to filter 1st, 2nd & 3rd index of the category tree array simultaneously.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?category=Computers&sub2Category=Bags&page=1&limit=100
```

- For sorting by a field, pass the field in the query **sort**. The query **order** takes asc or desc to sort in ascending (default) or descending order respectively.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?page=1&limit=100&sort=discounted_price&order=asc
```

### Product Schema

```
{
  crawl_timestamp: String,
  product_name: String,
  product_category_tree: Array,
  pid: String,
  retail_price: Number,
  discounted_price: Number,
  image: Array,
  description: String,
  product_rating: String,
  overall_rating: String,
  brand: String,
  product_specifications: Object,
  id: String,
  rating: Number,
  stock: Number,
  discount: Number,
}
```

## /users

### Routes:

- `POST` /register : to register a new user
- `POST` /login : user login

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
