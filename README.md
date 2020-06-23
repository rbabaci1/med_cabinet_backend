# back-end

## **Local Server Installation**
For developing and testing purposes, please follow the instructions below to install a version to your local machine.

Installing
1. donwload/clone backend repo 
2. navigate to cloned repo & cd src/
3. install dependencies on your console: `npm i`
4. isntall knex globally: `npm i -g knex`
5. construct a copy of the data base in console: `knex migrate:latest`
6. populate database with dummy/seeded data: `knex seed:run`
7. run the server: `npm run server`. Server port default is 8000.


## Base URL

https://best-med-cabinet.herokuapp.com

### 1. General Routes

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
        "firstName": "Aguste",
        "lastName": "Bumpass",
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
        "price_unit": "gram",   // gram/piece
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",       // this is the product image
        "is_available": 0,              // 0 === false, 1 === true
        "created_at": "2020-04-03 02:01:24",
        "dispensary_id": 3      // the dispensary provider id#
    },
    // ... etc.
]
```
--------------------------------
#### **GET** */api/flavors*

Return an array of objects of **ALL** flavors.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 1,                // this is the flavor id#
        "flavor": "Earth"       
    }
    // ... etc.
]
```
--------------------------------
#### **GET** */api/effects*

Return an array of objects of **ALL** effects.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
[
    {   
        "id": 1,     // this is the effect id#
        "effect": "Relaxed",
        "effect_type": "positive"
    },
    
    // ... etc.
]
```
--------------------------------

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
    "created_at": "2019-11-04 02:01:24",  // this is the date when the user was created
        
    "products": [       // a nested array that represents the user products
        {   
            "id": 1,                // this is the product id#
            "strain_name": "African",
            "strain_category": "Cartridges",
            "strain_type": "hybrid",
            "avg_thc": 5.61,      // percentage
            "avg_cbd": 31.31,     // percentage
            "price": 7.91,        // $
            "price_unit": "gram",   // gram/piece
            "description": "rapidly becoming a Colorado cannabis staple ...",
            "img_url": "https:// ..",       // this is the product image
            "is_available": 0,              // 0 === false, 1 === true
            "created_at": "2020-04-03 02:01:24",
            "dispensary_id": 3      // the dispensary provider id#
        },
        // ... etc.
    ],
    "reviews": [         // a nested array that represents the review written by the user
        {
            "product_id": 1    // the product id# (NOT REVIEW)
            "rate": 5,      //  [0 - 5]
            "description": "Removal of Infusion Device from Cervical Vertebral Disc, Percutaneous Endoscopic Approach",
            "created_at": "2020-01-01 12:01:18",        // this is the date when the rating was written 
            "updated_at": "2019-08-22 11:37:00"         // this is the date when the rating was updated
        },
        // ... etc 
    ]
},
```
--------------------------------
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
    "price_unit": "gram",    // gram/piece
    "description": "rapidly becoming a Colorado cannabis staple ...",
    "img_url": "https:// ..",     // this is the product image
    "is_available": 0,            // 0 === false, 1 === true
    "created_at": "2020-04-03 02:01:24",     // this is the date when the product was created
    "dispensary_id": 5, 
      
    "provider": {       // a nested object that represents the product dispensary provider info
        "id": 5,        // this is the dispensary id# (NOT PRODUCT)
        "name": "Demizz-95",
        "address": "8017 Pleasure Trail",
        "city": "New York City",
        "state": "New York",
        "postal_code": "10039",
        "phone_number": "(212) 996-3639",
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
    "reviews":[      // a nested array that represents the product reviews written by users
         {
            "user_id": 1    // the user id# (NOT REVIEW)
            "rate": 5,      //  [0 - 5]
            "description": "Removal of Infusion Device from Cervical Vertebral Disc, Percutaneous Endoscopic Approach",
            "created_at": "2020-01-01 12:01:18",        // this is the date when the rating was written 
            "updated_at": "2019-08-22 11:37:00"         // this is the date when the rating was updated
         },
        // ... etc
    ]      
},
```
--------------------------------
#### **GET** */api/dispensaries/:id*

Returns a single dispensary via the **dispensaries's** `:id` URL param.

Request: `req.body`

```
// N/A
```
Response: `res.body`
```
{
    "id": 2,        // this the dispensary id#
    "name": "Devify-45",
    "address": "112 Division Trail",
    "city": "Pasadena",
    "state": "California",
    "postal_code": "91117",
    "phone_number": "(626) 325-0079",
    "email": "bcongreve1@wp.com",
    "logo_url": "http://dummyimage.com/228x150.jpg/5fa2dd/ffffff",      // dispensary logo image
    "has_delivery": 1,      // 0 === false, 1 === true
    "created_at": "2020-06-16 02:01:24",        // this is the date when the dispensary was created
    
    "business_hours": [     // a nested array that represents the dispensary operating hours
        {
            "day_of_week": 0,       // [0 === Monday] --> [6 === Sunday]
            "open_time": "08:30 AM",
            "close_time": "7:45 PM"
        },
        // ... etc
    ],
    "products": [       // a nested array that represents all the dispensary products
        {
            "id": 6,              // this is the id# of the product (NOT DISPENSARY)
            "strain_name": "Alien Rock Candy",
            "strain_category": "Pre-rolls",
            "strain_type": "Indica",
            "avg_thc": 33.23,          // percentage
            "avg_cbd": 16.41,          // percentage
            "price": 17.24,            // $
            "price_unit": "gram",      // gram/piece
            "description": "From Sonoma County comes Alaska Thunder Grape ...",
            "img_url": "https:// ...",      // this is the product image
            "is_available": 0,              // 0 === false, 1 === true
            "created_at": "2020-06-02 03:57:40",      // this is the date when the product was created
            "dispensary_id": 2         // this the dispensary provider id#
        },
        // .. etc
    ]
}
```
--------------------------------
