This branch contains the backend

Deployed link: https://wide-eyed-pinafore-duck.cyclic.app

routes: /products, /users

- Use with **page** and **limit** query when getting all products, else it'll take over a minute to get all the data.

* Any key in the product or user data can be used as a filter.

* Query **category** can be used to filter 0th index of category tree array. Similarly **subCategory**, **sub2Category** & **sub3Category** can be used to filter 1st, 2nd & 3rd index of the category tree array simultaneously.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?category=Computers&sub2Category=Bags&page=1&limit=100
```

- For sorting by a field, pass the field in the query **sort**. The query **order** takes asc or desc to sort in ascending (default) or descending order respectively.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?page=1&limit=100&sort=discounted_price&order=asc
```
