import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Contact from './components/Home/Contact/Contact';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';
import AddTravel from './components/AddTravel/AddTravel';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PackageDetail from './components/PackageDetail/PackageDetail';
import BookNow from './components/BookNow/BookNow';
import MyBookings from './components/MyBookings/MyBookings';
import AllBookings from './components/AllBooking/AllBookings';
import Packages from './components/Home/Packages/Packages';

export const ContextUser = createContext()

function App() {
  const [user, setUser] = useState({})
  return (
    <ContextUser.Provider value={[user, setUser]}>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/packageDetail/:id">
            <PackageDetail></PackageDetail>
          </PrivateRoute>
          <PrivateRoute path="/bookNow/:id">
            <BookNow></BookNow>
          </PrivateRoute>
          <Route path="/myBookings">
            <MyBookings></MyBookings>
          </Route>
          <Route path="/allBookings">
            <AllBookings></AllBookings>
          </Route>
          <Route path="/travels">
            <Packages></Packages>
          </Route>
          <Route path="/addTravel">
            <AddTravel></AddTravel>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ContextUser.Provider>
  );
}

export default App;
