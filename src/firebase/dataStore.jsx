import React, { createContext, useContext, useState, useEffect } from "react";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { getMessages, getReviews, getTrades, orderListings } from './firestoreMethods.js';
import { getListings } from './getListings.js';
import { auth, googleProvider, db } from "./index.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './authMethods'

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}


export function DataProvider({ children }) {
  const [listings, setListings] = useState([]);
  const [usersMessages, setUsersMessages] = useState([]);
  const [usersReviews, setUsersReviews] = useState([]);
  const [usersTrades, setUsersTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // useEffect(() => {
  //   signInWithEmailAndPassword(auth, 'bobby@gmail.com', 'password123');
  // }, [])

  useEffect(() => {
    const loadData = async () => {
      if(user&&user.uid){
        console.log('user',user.uid)
        const allListings = await orderListings('status');
        const messages = await getMessages({ localId: user.uid });
        const reviews = await getReviews({ localId: user.uid });
        const trades = await getTrades({ localId: user.uid });
        setListings(allListings);
        setUsersMessages(messages);
        setUsersReviews(reviews);
        setUsersTrades(trades);
        setLoading(false);
        return;
      }
      return
    };

    loadData();
  }, [user,user?.uid]);

  function loadListings() {
    return listings;
  }

  function loadMessages() {
    return usersMessages;
  }

  function loadTrades() {
    return usersTrades;
  }

  function loadReviews() {
    return usersReviews;
  }

  const value = { loadListings, loadMessages, loadTrades, loadReviews };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export default { DataContext, DataProvider };