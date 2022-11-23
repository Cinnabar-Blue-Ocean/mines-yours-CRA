import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAt,
  endAt
} from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

//get listing by a specific filter
export const getListings = async (filters) => {
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
export const getUsers = async (filters) => {
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

//get a specific listing
export const getListingById = async (listing_id) => {
  let docSnap = await getDoc(doc(db, 'listings', listing_id))
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('Could not find listing with id: ', listing_id)
    return null;
  }
  try {
    let docSnap = await getDoc(doc(db, 'trades', listing_id))
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log('Could not find trade with id: ', listing_id)
      return null;
    }
  } catch (err) {
    console.log('Error getting trade: ', err.message)
  }
}

//get a trade
export const getTradeById = async (trade_id) => {
  try {
    let docSnap = await getDoc(doc(db, 'trades', trade_id))
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log('Could not find trade with id: ', trade_id)
      return null;
    }
  } catch (err) {
    console.log('Error getting trade: ', err.message)
  }
}

//post a review
export const postReview = async (trade_id, poster_id, rating, description) => {
  try {
    const trade = await getTradeById(trade_id)
    console.log('trade',trade)
    if (!trade) {
      throw new Error('Could not find trade with id, ', trade_id)
    } else if (poster_id !== trade.owner_id && poster_id !== trade.receiver_id) {
      throw new Error('Reviews must be from a party of the trade')
    } else {
      const data = {
        trade_id,
        poster_id,
        rating,
        description
      }
      let docRef = await addDoc(collection(db, 'reviews'), data)
      return docRef.id
    }

  } catch (err) {
    console.log('Error creating review: ', err.message)
  }
}

// Post a trade
export const postTrade = async (listing_id, receiver_id, expiration_date, start_date = new Date()) => {
  try {
    const listing = await getListingById(listing_id)
    if (!listing) {
      throw new Error('Could not find listing with id: ', listing_id)
    } else {
      const data = {
        listing_id,
        owner_id: listing.user_id,
        expiration_date,
        start_date,
        status: 'pending'
      }
      let docRef = await addDoc(collection(db, 'trades'), data)
      return docRef.id
    }

  } catch (err) {
    console.log('Error creating trade: ', err.message)
  }
}

// accept a trade
export const approveTrade = async (trade_id) => {
  try {
    const trade = await getTradeById(trade_id);
    if (!trade) {
      throw new Error('Could not find trade with id: ', trade_id)
    } else {
      await updateTrade(trade_id, {status: "active"})
      return 'Trade approved'
    }
  } catch (err) {
    console.log('Error approving trade: ', err.message)
  }
}

// cancel trade
export const cancelTrade = async (trade_id) => {
  try {
    const trade = await getTradeById(trade_id);
    if (!trade) {
      throw new Error('Could not find trade with id: ', trade_id)
    } else {
      await updateTrade(trade_id, {status: "canceled"})
      return 'Trade canceled'
    }
  } catch (err) {
    console.log('Error canceling trade: ', err.message)
  }
}

//report a listing
export const reportListing = async (listing_id) => {
  try {
    const listing = await getListingById(listing_id);
    if (!listing) {
      throw new Error('Could not find listing with id: ', listing_id)
    } else {
      await updateListing(listing_id, {status: "reported"})
      return 'listing has been reported'
    }
  } catch (err) {
    console.log('Error reporting: ', err.message)
  }
}

// activate listing
export const activateListing = async (listing_id) => {
  try {
    const listing = await getListingById(listing_id);
    if (!listing) {
      throw new Error('Could not find listing with id: ', listing_id)
    } else {
      await updateListing(listing_id, {status: "active"})
      return 'listing has been activated'
    }
  } catch (err) {
    console.log('Error activating: ', err.message)
  }
}

// get a user by id
export const getUserById = async (user_id) => {
  try {
    let docSnap = await getDoc(doc(db, 'users', user_id))
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log('Could not find user with id: ', user_id)
      return null;
    }
  } catch (err) {
    console.log('Error getting user: ', err.message)
  }
}

// report a user
export const reportUser = async (user_id) => {
  try {
    const user = await getUserById(user_id);
    if (!user) {
      throw new Error('Could not find user with id: ', user_id)
    } else {
      await updateUser(user_id, {status: "reported"})
      return 'User has been reported'
    }
  } catch (err) {
    console.log('Error reporting user: ', err.message)
  }
}

// activate user
export const activateUser = async (user_id) => {
  try {
    const user = await getUserById(user_id);
    if (!user) {
      throw new Error('Could not find user with id: ', user_id)
    } else {
      await updateUser(user_id, {status: "active"})
      return 'User has been activated'
    }
  } catch (err) {
    console.log('Error activating user: ', err.message)
  }
}

//post a listing
export const postListing = async (name, description, photos = [], type, start_date = new Date(), end_date, zip_code) => {
  return await addDoc(collection(db, 'listings'), {
    name,
    description,
    photos,
    status: 'active',
    type,
    start_date,
    end_date,
    owner_id: auth.currentUser.uid,
    zip_code
  })
}

//update user info
export const updateUser = async (user_id, data) => {
  const docRef = await doc(db, 'users', user_id)
  return await updateDoc(docRef, data)
}
//update a review
export const updateReview = async (review_id, data) => {
  const docRef = await doc(db, 'reviews', review_id)
  return await updateDoc(docRef, data)
}

// update a trade
export const updateTrade = async (trade_id, data) => {
  const docRef = await doc(db, 'trades', trade_id)
  return await updateDoc(docRef, data)
}

//update a listing
export const updateListing = async (listing_id, data) => {
  const docRef = await doc(db, 'listings', listing_id)
  return await updateDoc(docRef, data)
}



//delete a listing
export const deleteListing = async (listing_id) => {
  return await deleteDoc(doc(db, 'listings', listing_id))
};

//delete a review
export const deleteReview = async (review_id) => {
  return await deleteDoc(doc(db, 'reviews', review_id));
};

//paginate results
// export const getAllListingsBy = async () => {
//   const listingsCollection = collection(db, 'listings');
//   const data = query(listingsCollection, orderBy(''));
// };

export const generateListing = () => {
  let emails = ['rat@aries.com', 'ox@taurus.com', 'tiger@gemini.com', 'rabbit@cancer.com', 'dragon@leo.com', 'snake@virgo.com', 'horse@libra.com', 'sheep@scorpio.com', 'monkey@sagittarius.com', 'rooster@capricorn.com', 'dog@aquarius.com', 'pig@pisces.com'];
  let firstNames = ['Yuki', 'Haru', 'Kisa', 'Momiji', 'Hatori', 'Ayame', 'Rin', 'Hiro', 'Ritsu', 'Kureno', 'Shigure', 'Kagura'];
  let lastNames = ['Sohma', 'Honda', 'Hanajima', 'Uotani'];
  let usernames = ['Mu', 'Aldebaran', 'Kanon', 'Deathmask', 'Aioria', 'Shaka', 'Doku', 'Milo', 'Aiolos', 'Shura', 'Camus', 'Aphrodite'];
  let zipCodes = [35004, 99501, 85001, 71601, 90001, 16001, 19701, 32003, 30002, 96701, 83201, 60001, 46001, 50001, 66002, 40003, 70001, 13901, 20588, 11001, 48001, 55001, 38601, 63001, 59001, 68001, 88901, 13031, 17001, 87001, 10501, 27006, 58001, 43001, 73001, 97001, 15001, 12801, 29001, 57001, 37010, 73301, 84001, 15001, 20101, 98001, 24701, 53001, 82001];
  let bios = ['I am so awesome!', 'I am so depressed - sigh', 'I am suspicious... of everyone', '¿confused I so am?', '我没有意思', '¡Soy muy atractivo!'];
  let images = ['a', 'b', 'c', 'd', 'e'];
  let statuses = ['active', 'reported', 'exiled'];
  let ratings = [1, 2, 3, 4, 5];

  let randomValues = {};
  randomValues.email = emails[Math.floor(Math.random() * emails.length)];
  randomValues.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  randomValues.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  randomValues.username = usernames[Math.floor(Math.random() * usernames.length)];
  randomValues.zipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];
  randomValues.bio = bios[Math.floor(Math.random() * bios.length)];
  randomValues.image = images[Math.floor(Math.random() * images.length)];
  randomValues.status = statuses[Math.floor(Math.random() * statuses.length)];
  randomValues.rating = ratings[Math.floor(Math.random() * ratings.length)];

  return randomValues;
};