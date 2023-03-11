import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import{ store, persistor}  from './redux/store';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { current } from 'redux/auth/auth-operations';


ReactDOM.createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
