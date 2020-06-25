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

## **Authentication Routes**

### 1. User Registration
#### **POST** */api/auth/register*

Registers a new user account on database.

Request: `req.body`

```
{
  firstName: "test1",        // String Required, must be 3 characters minimum.
  lastName: "test2"!         // String Required, must be 3 characters minimum.
  email: "hello@gmail.com"   // String Required, must be a valid email address.
  password: "welcome"        // String Required, must be 6 characters minimum.
}
```

Response: `res.body`
```
{
  "success": true,      // user registered successfully
  "createdUser": {
    "id": 1,
    "firstName": "test1",
    "lastName": "test2",
    "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 ..."
}
  // password not returned, but is stored encrypted on database
```
--------------------------------

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
  "message": ""Welcome to best med-cabinet in the world!"",
  "logged_user": {
    "id": 1,
    "firstName": "test1",
    "lastName": "test2",
    "email": "hello@gmail.com"
    "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 ..."
}
```
--------------------------------

### 3. Add a Product to the User's Cart
#### **POST** */api/users/auth/cart*

Returns object of the added **Product**.

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
        "avg_thc": 37,
        "avg_cbd": 36,
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

### 4. User writes a review about a product
#### **POST** */api/users/auth/review*

Returns object of the created **Review**.

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

### 5. Access a single User with all Details (cart & reviews)
#### **GET** */api/users/auth/:id*

Returns a single user via the **user's** `:id` URL param.

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
            "created_at": "2020-06-02 03:57:40",      // this is the date&time when the product was created
            "dispensary_id": 2         // this the dispensary provider id#
        },
        // .. etc
    ]
    "reviews": [    // a nested array that represents all the reviews written by this user
        {
            "product_id": 13,
            "rate": 3,
            "description": "Radiation Therapy, Respiratory System, Beam Radiation",
            "created_at": "2020-05-11 00:32:20",    // this is the date&time when the product was written
            "updated_at": "2019-08-22 11:37:00"     // this is the date&time when the product was updated
        },
        // ..etc
    ]
}
```
--------------------------------

### 7. Update User Info
#### **PUT** */api/users/:id*

Returns the specified user with the new updates via the **user's** `:id` URL param.

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
  "success": true,      // user registered successfully
  "updatedUser": {
    "id": 1,
    "firstName": "updated first name",
    "lastName": "test2",
    "email": "hello@gmail.com",
    "created_at": "2020-06-23 11:41:40"     // this is the date&time when the user was created
  },
}
```
--------------------------------

### 8. Update User's Review
#### **PUT** */api/users/auth/:id/review*

Returns the specified review with the new updates via the **user's** `:id` URL param.

Request: `req.body`
```
{
    "user_id": 5,
    "product_id": 42,
    "rate": 4,
    "description": "I figured it out!!"  // updated dispcription
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

### 9. Remove an item from the User's cart
#### **DELETE** */api/users/auth/cart*

Returns an object of the removed item.

Request: `req.body`
```
{
    "user_id": 1,
    "product_id": 23
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
    "message": "success",
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

### 10. Remove a User's Review
#### **DELETE** */api/users/auth/cart*

Returns an object of the removed product.

Request: `req.body`
```
{
    "user_id": 1,
    "product_id": 23
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
    "message": "success",
    "removedReview": {
        "user_id": 5,
        "product_id": 42,
        "rate": 5,
        "description": "Revision of External Fixation Device in Right Metatarsal, Percutaneous Endoscopic Approach",
        "created_at": "2020-02-16 20:17:36",
        "updated_at": "2019-08-22 11:37:00"
    }
}
```

--------------------------------
## **DS Recommendations Endpoint**

### 1. Get products recommendations
#### **POST** */api/products/recommendations*

Returns an array of objects of **ALL** products recommended based on user input

Request: `req.body`
```
{
    "UserID": "dbkeyuser123",   // Required
    "Strain": "User_strain",    // placeholder Required
    "Type": "Sativa",           // Required
    "Effects": "Happy, energetic, and creative",    // Required
    "Flavor": "Sour, fruity, pineapple, citrus",    // Required
    "Description": "I'm bummed most the time.  I'm just looking to feel good,   // Required
    and keep my creative juices flowing. I'm an artist and I find some herb helps my art."
}
```

Response: `res.body`
```
{
    "UserID": "dbkeyuser123",
    "Strain": "Golden-Pineapple",
    "Type": "hybrid",
    "Effects": "Happy,Euphoric,Uplifted,Relaxed,Creative",
    "Flavor": "Pineapple,Tropical,Citrus",
    "Description": "Golden Pineapple is a hybrid cross between Golden Goat and Pineapple Kush that delivers creative, 
    uplifting effects with a fruity, tropical flavor. Its aroma is remarkably similar to sour pineapple, 
    providing a flavorful escape from stress, anxiety, and depression. Golden Pineapple’s engaged, 
    active effects will give you the energy you need to keep going throughout your day, although in larger doses, 
    it can be difficult to direct that focus effectively."
}
```
--------------------------------

## **Admin Routes**

### 1. Create a Product
#### **POST** */api/products/auth/create*

Returns object of the created **Review**.

Request: `req.body`

```
{         
  "strain_name": "Alien Rock Candy",
  "strain_category": "Pre-rolls",
  "strain_type": "Indica",
  "flavors": ["mango", "banana"],   // Array of strings Required
  "effects": ["focus", "dancing"],  // Array of strings Required
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
  Authorization: **auth token** ("yJhbGciOiJIUzI1N...")
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

### 2. Create a Dispensary
#### **POST** */api/dispensaries*

Returns an object of the created **Dispensary**

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
    
    "dispensary_hours": [       // Array of 7 objects Required
        {
          "day_of_week": 0,           // (Monday)
          "open_time": "09:00 AM",    // Same format required || "closed"
          "close_time": "09:00 PM"    // Same format required || "closed"
        },
        {
          "day_of_week": 1,           // (Tuesday)
          "open_time": "09:00 AM",
          "close_time": "08:00 PM"
        },
        // ... --> "day_of_week": 6,  (Sunday)
    ]
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
        
        // dispensary hours not returned but is stored on Database
    }
}
```
--------------------------------

## **General Routes**

### 1. GET all products
#### **GET** */api/products*

Returns an array of objects of **ALL** products

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
        "flavors": "Earthy,Sweet,Citrus",           
        "effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
        "avg_thc": 23.21,      // percentage
        "avg_cbd": 31.31,     // percentage
        "price": 7.91,        // $
        "price_unit": "gram",   // gram/piece
        "description": "rapidly becoming a Colorado cannabis staple ...",
        "img_url": "https:// ..",       // this is the product image
        "is_available": 0,              // 0 === false, 1 === true
        "created_at": "2020-04-03 02:01:24",    // this is the date&time when the product was created
        "dispensary_id": 3      // the dispensary provider id#
    },
    // ... etc.
]
```

### 2. GET a limited number of products
#### **GET** */api/products/?limit=2*

Returns an array of objects of products with the limit **query** specified as the max number.

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
        // ... etc
    },
    {
        "id": 2,                // this is the product id#
        "strain_name": "Samara",
        // ... etc
    },
]
```
--------------------------------

### 3. GET a single product
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
    "flavors": "Earthy,Sweet,Citrus",           
    "effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
    "avg_thc": 5.61,         // percentage
    "avg_cbd": 31.31,        // percentage
    "price": 7.91,           // $
    "price_unit": "gram",    // gram/piece
    "description": "rapidly becoming a Colorado cannabis staple ...",
    "img_url": "https:// ..",     // this is the product image
    "is_available": 0,            // 0 === false, 1 === true
    "created_at": "2020-04-03 02:01:24",     // this is the date&time when the product was created
      
    "provider": {       // a nested object that represents the product dispensary provider info
        "id": 5,        // this is the dispensary id# (NOT PRODUCT)
        "name": "Demizz-95",
        "address": "8017 Pleasure Trail",
        "city": "New York City",
        "state": "New York",
        "postal_code": "10039",
        "phone_number": "212-996-3639",
        "email": "wbains4@bloglovin.com",
        "logo_url": "http://dummyimage.com/244x139.jpg/dddddd/000000",  // the dispensary logo image
        "has_delivery": 1,      // 0 === false, 1 === true
        "created_at": "2019-08-10 02:01:24"     // this is the date&time when the dispensary was created
    },
    
    "reviews":[      // a nested array that represents the product reviews written by users
         {
            "user_id": 1    // the user id# (NOT REVIEW)
            "rate": 5,      //  [0 - 5]
            "description": "Removal of Infusion Device from Cervical Vertebral Disc, Percutaneous Endoscopic Approach",
            "created_at": "2020-01-01 12:01:18",        // this is the date&time when the review was recieved 
            "updated_at": "2019-08-22 11:37:00"         // this is the date&time when the product was updated
         },
        // ... etc
    ]      
},
```
--------------------------------

### 4. GET a single dispensary
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
    "created_at": "2020-06-16 02:01:24",        // this is the date&time when the dispensary was created
    
    "business_hours": [     // a nested array that represents the dispensary operating hours
        {
            "day_of_week": 0,         // [0 === Monday] --> [6 === Sunday]
            "open_time": "08:30 AM",  // or "closed"
            "close_time": "7:45 PM"   // or "closed"
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
            "created_at": "2020-06-02 03:57:40",      // this is the date&time when the product was created
            "dispensary_id": 2         // this the dispensary provider id#
        },
        // .. etc
    ]
}
```
