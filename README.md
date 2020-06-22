# back-end

## **Local Server Installation**
For developing and testing purposes, please follow the instructions below to install a version to your local machine.

Installing
1. donwload/clone backend repo
2. navigate to cloned repo
3. install dependencies on your console: `npm i`
4. isntall knex globally: `npm i -g knex`
5. construct a copy of the data base in console: `knex migrate:latest`
6. populate database with dummy/seeded data: `knex seed:run`
7. run the server: `npm run server`. Server port default is 8000.

### 1. Default route
#### **GET** */api/products*

Return an array of objects of **ALL** products created by **ALL** dispensaries.

Request: `req.body`

```
// N/A
```
Response: `res.data`
```
[
     {
        "id": 1,              // this is the id of the product
        "strain_name": "Afpak",
        "strain_category": "Pre-rolls",
        "strain_type": "Indica",
        "avg_thc": 1.61,
        "avg_cbd": 21.48,
        "price": 38.98,
        "price_unit": "piece",
        "description": "From Sonoma County comes Alaska Thunder Grape ...",
        "img_url": "https:// ...",
        "is_available": 1,
        "created_at": "2019-09-09 02:01:24",
        "dispensary_id": 3       // the dispensary provider id
    },
    {
        "id": 2,                // this is the id of the product 
        "strain_name": "African",
        "strain_category": "Cartridges",
        "strain_type": "hybrid",
        "avg_thc": 5.61,
        "avg_cbd": 31.31,
        "price": 7.91,
        "price_unit": "gram",
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",
        "is_available": 0,
        "created_at": "2020-04-03 02:01:24",
        "dispensary_id": 3      // the dispensary provider id
    },
    
    // ... etc.
]
```

### 2. Access single product
#### **GET** */api/products/:id*

Returns a single product via the **product's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.data`
```
{
        "id": 2,                // this is the id# of the product (NOT USER)
        "strain_name": "African",
        "strain_category": "Cartridges",
        "strain_type": "hybrid",
        "avg_thc": 5.61,
        "avg_cbd": 31.31,
        "price": 7.91,
        "price_unit": "gram",
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",
        "is_available": 0,
        "created_at": "2020-04-03 02:01:24"
    },
```

--------------------------------

## General Routes

### 1. Get Users
#### **GET** */api/users*

Fetches all usernames and id# from database. No authentication required.

Request: `req.body`


```
// N/A
```
Response: `res.data`

Returns an array of JSON objects.

```
[
    {
        "id": 1,
        "first_name": "Aguste",
        "last_name": "Bumpass",
        "email": "abumpass0@businessinsider.com",
        "username": "abumpass086",f
        "created_at": "2019-11-04 02:01:24"
    },
    {
        "id": 2,
        "first_name": "Ely",
        "last_name": "Bullerwell",
        "email": "ebullerwell1@reuters.com",
        "username": "ebullerwell199",
        "created_at": "2020-01-18 02:01:24"
    }
]
```

--------------------------------
