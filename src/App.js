import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutDetails from './Pages/AboutDetails/AboutDetails';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import BookAppoinment from './Pages/Doctors/BookApoinment/BookAppoinment';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home>

              </Home>
            </Route>
            <Route path='/home'>
              <Home>

              </Home>

            </Route>
            <PrivateRoute path='/details/:serviceid'>
              <Details></Details>

            </PrivateRoute>
            <Route path='/about'>
              <AboutDetails></AboutDetails>

            </Route>
            <PrivateRoute path='/apoinment/:id'>
              <BookAppoinment></BookAppoinment>

            </PrivateRoute>
            <PrivateRoute path='/blogs'>
              <Blogs></Blogs>

            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='*'>
              <NotFound>

              </NotFound>

            </Route>


          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
