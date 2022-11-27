import React, { createContext, useContext, useState, useEffect } from "react";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { getMessages, getReviews, getTrades } from './firestoreMethods.js';
import { getListings } from './getListings.js';
import { auth, googleProvider, db } from "./index.js";
import { signInWithEmailAndPassword } from 'firebase/auth';

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [listings, setListings] = useState(null);
  const [usersMessages, setUsersMessages] = useState(null);
  const [usersReviews, setUsersReviews] = useState(null);
  const [usersTrades, setUsersTrades] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    signInWithEmailAndPassword(auth, 'bobby@gmail.com', 'password123');
  }, [])

  useEffect(() => {
    const loadData = async () => {
      const allListings = await getListings();
      const messages = await getMessages({ localId: "w95feptK9GflCePAxXIrtDsubRV2" });
      const reviews = await getReviews({ localId: "w95feptK9GflCePAxXIrtDsubRV2" });
      const trades = await getTrades({ localId: "w95feptK9GflCePAxXIrtDsubRV2" });
      setListings(allListings);
      setUsersMessages(messages);
      setUsersReviews(reviews);
      setUsersTrades(trades);
      setLoading(false);
      return;
    };

    loadData();
  }, []);

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
