import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import {AuthContextProvider } from './contexts/AuthContext';
import Room from './pages/Room';
import { AdminRoom } from './pages/AdminRoom/AdminRoom';
import './styles/global.scss';


function App() {

  return (
    <div className="App">
      <Toaster  position="top-right" reverseOrder={false}/>
      <AuthContextProvider >
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new"  component={NewRoom} />
        <Route path="/rooms/:id"  component={Room} />

        <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
