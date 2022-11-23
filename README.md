# Mine Yours

A barter marketplace. Connecting the community in order to make a better world

> ### Group members<br>


## Table of Contents

1. [Description](#description)
2. [Technical Overview](#technical-overview)
3. [Usage](#usage)
4. [Requirements](#requirements)
5. [Firestore Methods](#firestoreMethods)
6. [Production](#production)


## Description



## Technical Overview


## Usage
In order to run the project locally please read [Requirements](#requirements) section for instructions setting up a local .env and for installing dependencies. Find further instructions for setting up the project for development or production in the [Development](#development) and [Production](#production) sections.

## Requirements

Node.js - version 16.0+


### Installing Dependencies
From within the root directory:
> 1. Run ```npm install``` to install all required dependencies

## Firestore Methods

### User Functions
User Object
}
username: String
email: String
first_name: String
last_name: String
profile_image: String
bio: String
rating: Number
status: String
zip_code: Number
}

Get users by a specific filter
>```getUser(object)```
> Returns the document reference that matches the properties in the object

Get user by id
>```getUserById(user_id)
> Returns user document

Update User Information
> ```updateUser(user_id, data)```
> data: data object with properties to change on the user
> Returns document reference

Report User
> ```reportUser(user_id)```
> Returns result of action

Activate User
> ```activateUser(user_id)```
> Returns result of action

### Listing Functions
Listing Object
{
name: String
description: String
owner_id: String
photos: Array of Strings
start_date: Date
end_date: Date
status: String
type: String
zip_code: Number
}

Has status "active", "reported", or "canceled"

Create New Listing
> ```postListing(name, description, photos, type, start_date, end_date, zip_code)```
> Note: Start date defaults to current time
> Returns document reference

Get Listing by ID
> ```getListingById(listing_id)```
> Returns listing data

Get listings by a specific filter
>```getListings(object)```
>
> Returns the document reference that matches the properties in the object

Update Listing
> ```updateListing(listing_id, data)```
> data: data object with properties to change on the listing
> Returns document reference

Report Listing
>```reportListing(listing_id)```
> Marks listing status to reported

activate Listing
>```reportListing(listing_id)```
> Marks listing status to active, used when reactivating reported listing

Delete Listing
> ```deleteListing(listing_id)```


### Trade Functions
Trade Object
{
listing_id: String UID
owner_id: String UID
receiver_id: String UID
start_date: Date
expiration_date: Date
status: String
}
Has status "pending", "active", "reported", or "canceled"

Get trades using a specific filter
>```getTrades(object)```
>
> Returns the document reference that matches the properties in the object

Post a trade
> ```postTrade(listing_id, receiver_id, expiration_date [, start_date])```
> Start date is optional, if not provided current time will be used. This creates the trade with a status of pending which will then be approved my owner
> Returns trade_id

Approve a trade setting status to approved
> ```approveTrade(trade_id)```
> Returns trade document

Cancel trade
> ```cancelTrade(trade_id)```
> Returns trade document

Get trade by id
> ```getTradeById(trade_id)```
> Returns trade document


### Message Functions

Get messages using a specific filter
>```getMessages(object)```
>
> Returns the document reference that matches the properties in the object


### Review Functions

Get reviews using a specific filter
>```getReviews(object)```
>
> Returns the document reference that matches the properties in the object

Get reviews using a specific filter
>```postReview(trade_id, poster_id, rating, description)```
>
> Returns the document reference to created review.
> Note: poster_id must match the owner_id or receiver_id of the trade being reviewed
