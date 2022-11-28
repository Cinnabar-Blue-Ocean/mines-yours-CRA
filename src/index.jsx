import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from "./firebase/authMethods.js";
import { DataProvider } from './firebase/dataStore.jsx';
import {ChatContextProvider} from "./components/messages/ChatContext.js"
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <ChatContextProvider>
            <App />
          </ChatContextProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);