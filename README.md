# back-end

## **Local Server Installation**
For developing and testing purposes, please follow the instructions below to install a version to your local machine.

### Installation:
1. donwload/clone backend repo 
2. navigate to cloned repo & cd src/
3. install dependencies on your console: `npm i`
4. install knex globally: `npm i -g knex`
5. construct a copy of the data base in console: `knex migrate:latest`
6. populate database with seeded data: `knex seed:run`
7. run the server: `npm run server`. Server port default is 5000.

## Usage

### Base URL:
https://best-med-cabinet.herokuapp.com

- [User login](#login)
- [Add a product to the user's cart](#add-to-cart)
- [Create a review about a product](#add-review)
- [Access a single user with all details](#get-single-user)
- [Update user's info](#update-user)
- [Update user's review](#update-review)
- [Remove an item from the user's cart](#remove-cart-item)
- [Remove a user's review](#remove-user-review)
- [Get product recommendations](#ds)
- [Create a product](#create-product)
- [Create a dispensary](#create-dispensary)
- [Access all products](#get-products)
- [Access a limited num of products](#get-products-limit)
- [Access a single product](#get-product)
- [Access a single dispensary](#get-dispensary)

## **Authentication Routes**

### 1. User Registration
#### **POST** */api/auth/register*

Registers a new user account on database.

Request: `req.body`
```
{
    firstName: "test1",        // String Required, must be 3 characters minimum.
    lastName: "test2",         // String Required, must be 3 characters minimum.
    email: "hello@gmail.com"   // String Required, must be a valid email address.
    password: "welcome"        // String Required, must be 6 characters minimum.
}
```

Response: `res.body`
```
{
    "success": true,      // user registered successfully.
    "createdUser": {
        "id": 1,
        "firstName": "test1",
        "lastName": "test2",
        "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created.
        // password not returned, but is stored encrypted on database.
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 ..."  // valid for one hour.
}
```
--------------------------------
### Login
### 2. User Login
#### **POST** */api/auth/login*

Authenticates user's credentials. Returns JSON object with personalized welcome message, token and user info.

Request: `req.body`
```
{
    email: "hello@gmail.com"   // String Required, must be a valid email address.
    password: "welcome"        // String Required, must be 6 characters minimum.
}
```
Response: `res.body`
```
{
    "success": true,
    "message": ""Welcome to best med-cabinet in the world!"",
    "logged_user": {
        "id": 1,
        "firstName": "test1",
        "lastName": "test2",
        "email": "hello@gmail.com"
        "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created..
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 ..."   // valid for one hour.
}
```
--------------------------------
### Add to cart
### 3. Add a Product to the User's Cart
#### **POST** */api/users/cart*

Returns a JSON object of the added **Product**.

Request: `req.body`
```
{
    "user_id": 3,
    "product_id: 50
}
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,
    "addedProduct": {
        "id": 50
        "strain_name": "Afgoo",
        "strain_category": "Concentrates",
        "strain_type": "indica",
        "flavors": "Sweet,Pine,Woody",
        "effects": "Relaxed,Sleepy,Happy,Euphoric,Hungry",
        "avg_thc": 37.50,
        "avg_cbd": 36.30,
        "price": 33,
        "price_unit": "gram",
        "description": "Afgoo, also known as Afgooey ...",
        "img_url": "https:// ...",
        "is_available": 1,
        "created_at": "2019-10-17 08:11:20",
        "dispensary_id": 20
    }
}
```
--------------------------------
### Add review
### 4. User writes a review about a product
#### **POST** */api/users/review*

Returns a JSON object of the created **Review**.

Request: `req.body`
```
{
    "user_id": 5,
    "product_id": 2000,
    "rate": 4,    //  [0 - 5]
    "description": "Radiation Therapy, Respiratory System, Beam Radiation"   
}
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,
    "createdReview": {
        "user_id": 5,
        "product_id": 2000,
        "rate": 4,
        "description": "Radiation Therapy, Respiratory System, Beam Radiation",
        "created_at": "2020-06-24 15:08:01",
        "updated_at": "2020-06-24 15:08:01"
    }
}
```
--------------------------------
### Get single user
### 5. Access a single User with all Details (cart & reviews)
#### **GET** */api/users/:id*

Returns a JSON object with all details of the specified user via the **user's** `:id` URL param.

Request: `req.body`
```
// N/A
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "id": 1,    // user id#
    "first_name": "Aguste",
    "last_name": "Bumpass",
    "email": "hkimm2@vistaprint.com",
    "created_at": "2019-11-04 02:01:24",  // this is the date when the user was created
    
    "cart": [      // a nested array that represents all the products this user has in cart
        {
            "id": 6,              // this is the id# of the product (NOT DISPENSARY).
            "strain_name": "Alien Rock Candy",
            "strain_category": "Pre-rolls",
            "strain_type": "Indica",
            "avg_thc": 33.23,          // percentage.
            "avg_cbd": 16.41,          // percentage.
            "price": 17.24,            // $.
            "price_unit": "gram",      // gram/piece.
            "description": "From Sonoma County comes Alaska Thunder Grape ...",
            "img_url": "https:// ...",      // this is the product image.
            "is_available": 0,              // 0 === false, 1 === true.
            "created_at": "2020-06-02 03:57:40",      // this is the date&time when the product was created.
            "dispensary_id": 2         // this the dispensary provider id#.
        },
        // .. etc
    ]
    "reviews": [    // a nested array that represents all the reviews written by this user.
        {
            "product_id": 13,
            "rate": 3,
            "description": "Radiation Therapy, Respiratory System, Beam Radiation",
            "created_at": "2020-05-11 00:32:20",    // this is the date&time when the product was written.
            "updated_at": "2019-08-22 11:37:00"     // this is the date&time when the product was updated.
        },
        // ...etc
    ]
}
```
--------------------------------
### Update user
### 6. Update a User's Info
#### **PUT** */api/users/:id*

Returns a JSON object with the new changes fo the specified user via the **user's** `:id` URL param.

Request: `req.body`
```
{
    firstName: "updated first name",        
    lastName: "test2"!         
    email: "hello@gmail.com"   
}
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,      // user registered successfully.
    "updatedUser": {
        "id": 1,
        "firstName": "updated first name",
        "lastName": "test2",
        "email": "hello@gmail.com",
        "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created.
    },
}
```
--------------------------------
### Update review
### 7. Update a User's Review
#### **PUT** */api/users/:user_id/review/:product_id*

Returns a JSON object with the new changes of the specified user via the **user's** `:id` and **product's**  `:id` URL params.

Request: `req.body`
```
{
    "rate": 4,
    "description": "I figured it out!!"  // updated dispcription.
}
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,
    "updatedReview": {
        "user_id": 5,
        "product_id": 42,
        "rate": 4,
        "description": "I figured it out!!",
        "created_at": "2020-02-16 20:17:36",
        "updated_at": "2020-06-24 21:14:15"
    }
}
```
--------------------------------
### Remove cart item
### 8. Remove an item from the User's cart
#### **DELETE** */api/users/:user_id/cart/:product_id*

Returns a JSON object with the removed product info via the **user's** `:id` and **product's** `:id` URL params.

Request: `req.body`
```
// N/A
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,
    "removedProduct": {
        "id": 22,
        "strain_name": "A-Train",
        "strain_category": "Cartridges",
        "strain_type": "hybrid",
        "flavors": "Earthy,Woody,Citrus",
        "effects": "Creative,Euphoric,Relaxed,Happy,Hungry",
        "avg_thc": 40,
        "avg_cbd": 37,
        "price": 23,
        "price_unit": "gram",
        "description": "A-Train is a hybrid between Mazar ...",
        "img_url": "https:// ...",
        "is_available": 1,
        "created_at": "2019-10-17 08:11:20",
        "dispensary_id": 1
    }
}
```
--------------------------------
### Remove user review
### 9. Remove a User's Review
#### **DELETE** */api/users/:user_id/review/:product_id*

Returns a JSON object with the removed review info via the **user's** `:id` and **product's** `:id` URL params.

Request: `req.body`
```
// N/A
```
Request: `req.headers`
```
headers: {
    Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
}
```

Response: `res.body`
```
{
    "success": true,
    "removedReview": {
        "user_id": 5,
        "product_id": 42,
        "rate": 5,
        "description": "Revision of External Fixation Device in Right Metatarsal.",
        "created_at": "2020-02-16 20:17:36",
        "updated_at": "2019-08-22 11:37:00"
    }
}
```
--------------------------------
--------------------------------
### DS
## **DS Recommendations Endpoint**

### 1. Get product recommendations
#### **POST** */api/products/recommendations*

Returns a JSON objects of the recommended product based on the user's input.

Request: `req.body`
```
{
    "UserID": "dbkeyuser123",   // Required.
    "Strain": "User_strain",    // placeholder string Required.
    "Type": "Sativa",           // Required.
    "Effects": "Happy, energetic, and creative",    // Required.
    "Flavor": "Sour, fruity, pineapple, citrus",    // Required.
    "Description": "I'm bummed most the time.  I'm just looking to feel good,   // Required.
    and keep my creative juices flowing. I'm an artist and I find some herb helps my art."
}
```

Response: `res.body`
```
{
    "UserID": 5,
    "id": 2015,
    "strain_name": "Strawberry-Mango-Haze",
    "strain_category": "Pre-rolls",
    "strain_type": "sativa",
    "flavors": "Strawberry,Sweet,Mango",
    "effects": "Happy,Euphoric,Uplifted,Focused,Energetic",
    "avg_thc": 27,
    "avg_cbd": 17,
    "price": 6,
    "price_unit": "gram",
    "description": "Strawberry Mango Haze is a beautiful synergy ...",
    "img_url": "https:// ...",
    "is_available": 1,
    "created_at": "2019-10-17 08:11:20",
    "dispensary_id": 3
}
```
--------------------------------
--------------------------------
## **Admin Routes**

### Create product
### 1. Create a Product
#### **POST** */api/products/create*

Returns a JSON object of the created **Product**.

Request: `req.body`
```
{         
    "strain_name": "Alien Rock Candy",
    "strain_category": "Pre-rolls",
    "strain_type": "Indica",
    "flavors": ["mango", "banana"],   // Array of strings Required.
    "effects": ["focus", "dancing"],  // Array of strings Required.
    "avg_thc": 33.23,          
    "avg_cbd": 16.41,          
    "price": 17.24,            
    "price_unit": "gram",    
    "description": "From Sonoma County comes Alaska Thunder Grape ...",
    "img_url": "https:// ...",     
    "is_available": true,                 
    "dispensary_id": 19    
}
```
Request: `req.headers`
```
headers: {
    admin: ** admin password **   // admin password Required
}
```

Response: `res.body`
```
{
    "success": true,
    "createdProduct": {
        "id": 2352,
        "strain_name": "Alien Rock Candy",
        "strain_category": "Pre-rolls",
        "strain_type": "Indica",
        "flavors": "mango,banana",
        "effects": "focus,dancing",
        "avg_thc": 33.23,
        "avg_cbd": 16.41,
        "price": 17.24,
        "price_unit": "gram",
        "description": "From Sonoma County comes Alaska Thunder Grape ...",
        "img_url": "https:// ...",
        "is_available": 1,
        "created_at": "2020-06-24 15:31:43",
        "dispensary_id": 19
    }
}
```
--------------------------------
### Create dispensary
### 2. Create a Dispensary
#### **POST** */api/dispensaries*

Returns a JSON object of the created **Dispensary**

Request: `req.body`
```
{
    "name": "Smokland",
    "address": "1514 Alice st",
    "city": "Oakland",
    "state": "California",
    "postal_code": "94612",
    "phone_number": "(510) 325-0079",
    "email": "oakland101@wp.com",
    "logo_url": "http://dummyimage.com/228x150.jpg/5fa2dd/ffffff",
    "has_delivery": true,
    
    "dispensary_hours": [       // Array of 7 objects Required.
        {
            "day_of_week": 0,           // (Monday).
            "open_time": "09:00 AM",    // Same format required or "closed".
            "close_time": "09:00 PM"    // Same format required or "closed".
        },
        {
            "day_of_week": 1,           // (Tuesday).
            "open_time": "09:00 AM",
            "close_time": "08:00 PM"
        },
        // ... --> "day_of_week": 6,  (Sunday).
    ]
}
```
Request: `req.headers`
```
headers: {
    admin: ** admin password **   // admin password Required.
}
```

Response: `res.body`
```
{
    "success": true,
    "createdDispensary": {
        "id": 31,
        "name": "Smokland",
        "address": "1514 Alice st",
        "city": "Oakland",
        "state": "California",
        "postal_code": "94612",
        "phone_number": "(510) 325-0079",
        "email": "oakland101@wp.com",
        "logo_url": "http://dummyimage.com/228x150.jpg/5fa2dd/ffffff",
        "has_delivery": 1,
        "created_at": "2020-06-24 15:13:17",
        // dispensary hours are not returned, but are stored on Database.
    }
}
```
--------------------------------
--------------------------------
## **General Routes**

### Get products
### 1. GET all products
#### **GET** */api/products*

Returns an array of JSON objects of **ALL** products

Request: `req.body`
```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 1,                // this is the product id#.
        "strain_name": "African",
        "strain_category": "Cartridges",
        "strain_type": "hybrid",
        "flavors": "Earthy,Sweet,Citrus",           
        "effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
        "avg_thc": 23.21,      // %.
        "avg_cbd": 31.31,     // %.
        "price": 7.91,        // $
        "price_unit": "gram",   // gram/piece.
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",       // this is the product image.
        "is_available": 0,              // 0 === false, 1 === true.
        "created_at": "2020-04-03 02:01:24",    // this is the date&time when the product was created.
        "dispensary_id": 3      // the dispensary provider id#.
    },
    // ... etc.
]
```
--------------------------------
### Get products limit
### 2. GET a limited number of products
#### **GET** */api/products/?limit=2*

Returns an array of JSON objects of products with the specified **query** param **limit** as the max number.

Request: `req.body`
```
// N/A
```
Response: `res.body`
```
[
    {
        "id": 1,                // this is the product id#.
        "strain_name": "African",
        // ... etc
    },
    {
        "id": 2,                // this is the product id#.
        "strain_name": "Samara",
        // ... etc
    },
]
```
--------------------------------
### Get product
### 3. GET a single product
#### **GET** */api/products/:id*

Returns a JSON object of the specified product via the **product's** `:id` URL param.

Request: `req.body`
```
// N/A
```
Response: `res.body`
```
{
    "id": 2,                // this is the product id# (NOT USER).
    "strain_name": "African",
    "strain_category": "Cartridges",
    "strain_type": "hybrid",
    "flavors": "Earthy,Sweet,Citrus",           
    "effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
    "avg_thc": 5.61,         // %.
    "avg_cbd": 31.31,        // %.
    "price": 7.91,           // $.
    "price_unit": "gram",    // gram/piece.
    "description": "rapidly becoming a Colorado cannabis staple ...",
    "img_url": "https:// ..",     // this is the product image.
    "is_available": 0,            // 0 === false, 1 === true.
    "created_at": "2020-04-03 02:01:24",     // this is the date&time when the product was created
      
    "provider": {       // a nested object that represents the product dispensary provider info.
        "id": 5,        // this is the dispensary id# (NOT PRODUCT).
        "name": "Demizz-95",
        "address": "8017 Pleasure Trail",
        "city": "New York City",
        "state": "New York",
        "postal_code": "10039",
        "phone_number": "212-996-3639",
        "email": "wbains4@bloglovin.com",
        "logo_url": "http://dummyimage.com/244x139.jpg/dddddd/000000",  // the dispensary logo image.
        "has_delivery": 1,      // 0 === false, 1 === true.
        "created_at": "2019-08-10 02:01:24"     // this is the date&time when the dispensary was created.
    },
    
    "reviews":[      // a nested array that represents the product reviews written by users.
         {
            "user_id": 1    // the user id# (NOT REVIEW).
            "rate": 5,      //  [0 - 5].
            "description": "Removal of Infusion Device from Cervical Vertebral Disc, Percutaneous Endoscopic Approach",
            "created_at": "2020-01-01 12:01:18",        // this is the date&time when the review was recieved. 
            "updated_at": "2019-08-22 11:37:00"         // this is the date&time when the product was updated.
         },
        // ... etc
    ]      
},
```
--------------------------------
### Get dispensary
### 4. GET a single dispensary
#### **GET** */api/dispensaries/:id*

Returns a JSON object of the specified dispensary via the **dispensaries's** `:id` URL param.

Request: `req.body`
```
// N/A
```
Response: `res.body`
```
{
    "id": 2,        // this the dispensary id#.
    "name": "Devify-45",
    "address": "112 Division Trail",
    "city": "Pasadena",
    "state": "California",
    "postal_code": "91117",
    "phone_number": "(626) 325-0079",
    "email": "bcongreve1@wp.com",
    "logo_url": "http://dummyimage.com/228x150.jpg/5fa2dd/ffffff",      // dispensary logo image.
    "has_delivery": 1,      // 0 === false, 1 === true.
    "created_at": "2020-06-16 02:01:24",        // this is the date&time when the dispensary was created.
    
    "business_hours": [     // a nested array that represents the dispensary operating hours.
        {
            "day_of_week": 0,         // [0 === Monday] --> [6 === Sunday].
            "open_time": "08:30 AM",  // or "closed".
            "close_time": "7:45 PM"   // or "closed".
        },
        // ... etc.
    ],
    
    "products": [       // a nested array that represents all the dispensary products.
        {
            "id": 6,              // this is the id# of the product (NOT DISPENSARY).
            "strain_name": "Alien Rock Candy",
            "strain_category": "Pre-rolls",
            "strain_type": "Indica",
            "avg_thc": 33.23,          // %.
            "avg_cbd": 16.41,          // %.
            "price": 17.24,            // $.
            "price_unit": "gram",      // gram/piece.
            "description": "From Sonoma County comes Alaska Thunder Grape ...",
            "img_url": "https:// ...",      // this is the product image.
            "is_available": 0,              // 0 === false, 1 === true.
            "created_at": "2020-06-02 03:57:40",      // this is the date&time when the product was created.
            "dispensary_id": 2         // this the dispensary provider id#
        },
        // .. etc.
    ]
}
```
--------------------------------
