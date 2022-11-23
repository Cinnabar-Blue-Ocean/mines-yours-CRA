import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries
//Test query to retrieve all users
export const getUsers = async (filters) => {
  let parameters = Object.entries(filters);

  // let queryString = '';

  // for (let i = 0; i < entries.length; i++) {
  //   let currentEntry = entries[i];
  //   if (i === 0) {
  //     queryString += currentEntry[0] + ', == ' + currentEntry[1] + '$$';
  //   } else {
  //     queryString += ' AND ' + currentEntry[0] + ' = $$' + currentEntry[1] + '$$';
  //   }
  // }

  try {
    let allUsers = [];
    const usersCollection = collection(db, 'users');
    const data = await getDocs(usersCollection);
    data.forEach(doc => {
      allUsers.push(doc.data());
    })
    return allUsers;
  } catch(err) {
    console.error(err.stack);
  }
};

//get listing by a specific filter
export const getListing = async (filters) => {
  let parameters = Object.entries(filters);
  let key = parameters[0][0];
  let value = parameters[0][1];

  try {
    let listings = [];
    const listingsCollection = collection(db, 'listings');
    const data = query(listingsCollection, where(key, "==", value));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      listings.push(doc.data());
    })
    return listings;
  } catch(err) {
    console.error(err.stack);
  }
};

//get a user by a specific filter
export const getUser = async (filters) => {
  let parameters = Object.entries(filters);
  let key = parameters[0][0];
  let value = parameters[0][1];

  try {
    let user = [];
    const usersCollection = collection(db, 'users');
    const data = query(usersCollection, where(key, "==", value));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      user.push(doc.data());
    })
    return user;
  } catch(err) {
    console.error(err.stack);
  }
};

//get messages by a specific filter
export const getMessages = async (filters) => {
  let parameters = Object.entries(filters);
  let key = parameters[0][0];
  let value = parameters[0][1];

  try {
    let messages = [];
    const messagesCollection = collection(db, 'messages');
    const data = query(messagesCollection, where(key, "==", value));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      messages.push(doc.data());
    })
    return messages;
  } catch(err) {
    console.error(err.stack);
  }
};

//get reviews by a specific filter
export const getReviews = async (filters) => {
  let parameters = Object.entries(filters);
  let key = parameters[0][0];
  let value = parameters[0][1];

  try {
    let reviews = [];
    const reviewsCollection = collection(db, 'reviews');
    const data = query(reviewsCollection, where(key, "==", value));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      reviews.push(doc.data());
    })
    return reviews;
  } catch(err) {
    console.error(err.stack);
  }
};

//get trades by a specific filter
export const getTrades = async (filters) => {
  let parameters = Object.entries(filters);
  let key = parameters[0][0];
  let value = parameters[0][1];

  try {
    let trades = [];
    const tradesCollection = collection(db, 'trades');
    const data = query(tradesCollection, where(key, "==", value));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      trades.push(doc.data());
    })
    return trades;
  } catch(err) {
    console.error(err.stack);
  }
};