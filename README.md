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

### 3. Access a single user with all details
#### **GET** */api/auth/users/:id*

Returns a single user via the **user's** `:id` URL param.

Request: `req.body`

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
    "reviews": [
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

## **DS Recommendations Route**

### 1. GET products recommendations
#### **POST** */api/products/recommendations*

Returns an array of objects of **ALL** products recommended based on user input

Request: `req.body`

```
{
    "UserID": "dbkeyuser123",
    "Strain": "User_strain", 
    "Type": "Sativa",
    "Effects": "Happy, energetic, and creative", 
    "Flavor": "Sour, fruity, pineapple, citrus", 
    "Description": "I'm bummed most the time.  I'm just looking to feel good, and keep my creative juices flowing. 
    I'm an artist and I find some herb helps my art."
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
--------------------------------

### 6. POST a Product to the User's Cart
#### **POST** */api/users/cart*

Returns object of the added **Product**.

Request: `req.body`

```
{
    "user_id": 3,
    "product_id: 50
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

### 6. Post a User review about a product
#### **POST** */api/products/review*

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

### 7. Post a Dispensary

#### **POST** */api/dispensaries*

Returns object of the created **Dispensary**

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
--------------------------------

