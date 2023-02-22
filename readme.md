This branch contains the backend

Deployed link: https://wide-eyed-pinafore-duck.cyclic.app

routes: /products, /users

- Use with **page** and **limit** query when getting all products, else it'll take over a minute to get all the data.

* Query **category** can be used to filter 0th index of category tree array. Similarly **subCategory**, **sub2Category** & **sub3Category** can be used to filter 1st, 2nd & 3rd index of the category tree array simultaneously.

```
https://wide-eyed-pinafore-duck.cyclic.app/products?category=Computers&sub2Category=Bags&page=1&limit=100
```
