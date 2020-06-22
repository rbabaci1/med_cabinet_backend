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

### 1. Generat Routes

#### **GET** */api/users*

Returns an array of objects of **ALL** users created.

Request: `req.body`

```
// N/A
```
Response: `res.data`

Returns an array of JSON objects.

```
[
    {
        "id": 1,    // user id#
        "first_name": "Aguste",
        "last_name": "Bumpass",
        "email": "abumpass0@businessinsider.com",
        "username": "abumpass086",
        "created_at": "2019-11-04 02:01:24"  // this is the date when the user was created
    },
    
    // ... etc
]
```

--------------------------------

#### **GET** */api/products*

Return an array of objects of **ALL** products created by **ALL** dispensaries.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 1,                // this is the product id#
        "strain_name": "African",
        "strain_category": "Cartridges",
        "strain_type": "hybrid",
        "avg_thc": 5.61,      // percentage
        "avg_cbd": 31.31,     // percentage
        "price": 7.91,        // $
        "price_unit": "gram",
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",       // this is the product image
        "is_available": 0,              // 0 === false, 1 === true
        "created_at": "2020-04-03 02:01:24",
        "dispensary_id": 3      // the dispensary provider id
    },
    
    // ... etc.
]
```

### 2. Access single item

#### **GET** */api/users/:id*

Returns a single user via the **user's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
{
        "id": 1,    // user id#
        "first_name": "Aguste",
        "last_name": "Bumpass",
        "email": "abumpass0@businessinsider.com",
        "username": "abumpass086",
        "created_at": "2019-11-04 02:01:24"  // this is the date when the user was created
},
```

#### **GET** */api/products/:id*

Returns a single product via the **product's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
{
     "id": 2,                // this is the product id# (NOT USER)
     "strain_name": "African",
     "strain_category": "Cartridges",
     "strain_type": "hybrid",
     "avg_thc": 5.61,         // percentage
     "avg_cbd": 31.31,        // percentage
     "price": 7.91,           // $
     "price_unit": "gram",
     "description": "rapidly becoming a Colorado cannabis staple ...",
     "img_url": "https:// ..",     // this is the product image
     "is_available": 0,            // 0 === false, 1 === true
     "created_at": "2020-04-03 02:01:24",     // this is the date when the product was created
     "dispensary_id": 5, 
      
     "provider": {       // a nested object that represents the product dispensary provider
        "id": 5,        // this is the dispensary id# (NOT PRODUCT)
        "name": "Demizz-95",
        "address": "8017 Pleasure Trail",
        "city": "New York City",
        "state": "New York",
        "postal_code": "10039",
        "phone_number": "(212) 9963639",
        "email": "wbains4@bloglovin.com",
        "logo_url": "http://dummyimage.com/244x139.jpg/dddddd/000000",  // the dispensary logo image
        "has_delivery": 1,      // 0 === false, 1 === true
        "created_at": "2019-08-10 02:01:24"     // this is the date when the dispensary was created
    },
    
     "flavors": [       // a nested array that represents the product flavors
        {
            "id": 8,    // flavor id#
            "flavor": "Flowery"
        }
        // ... etc
     ],
    "effects": [        // a nested array that represents the product effects
        {
            "id": 8,    // effect id#
            "effect": "Talkative",
            "effect_type": "positive"
        }
        // ... etc
    ],
    "ratings": false       // this is the product ratings 0-5 (if product has not ratings, value is ```false```)
},
```

### 2. Access all products of single user
#### **GET** */api/:id/products*

Returns all products for a single user, via the **user's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 27,              // this is the id# of the product (NOT USER)
        "strain_name": "Alien Rock Candy",
        "strain_category": "Pre-rolls",
        "strain_type": "Indica",
        "avg_thc": 33.23,          // percentage
        "avg_cbd": 16.41,          // percentage
        "price": 17.24,            // $
        "price_unit": "gram",
        "description": "From Sonoma County comes Alaska Thunder Grape ...",
        "img_url": "https:// ...",      // this is the product image
        "is_available": 0,              // 0 === false, 1 === true
        "created_at": "2020-06-02 03:57:40",      // this is the date when the product was created
        "dispensary_id": 5         // this the dispensary provider id#
    },
    
    // ... etc.
]
```

--------------------------------
