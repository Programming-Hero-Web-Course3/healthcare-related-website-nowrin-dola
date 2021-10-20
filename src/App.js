import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutDetails from './Pages/AboutDetails/AboutDetails';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Departments from './Pages/Departments/Departments';
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
    <div className="Appnpm">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home>

              </Home>
            </Route>
            <Route exact path='/home'>
              <Home>

              </Home>

            </Route>
            <PrivateRoute exact path='/details/:serviceid'>
              <Details></Details>

            </PrivateRoute>
            <Route exact path='/about'>
              <AboutDetails></AboutDetails>

            </Route>
            <PrivateRoute exact path='/apoinment/:id'>
              <BookAppoinment></BookAppoinment>

            </PrivateRoute>
            <PrivateRoute exact path='/blogs'>
              <Blogs></Blogs>

            </PrivateRoute>
            <PrivateRoute exact path='/dept'>
              <Departments></Departments>

            </PrivateRoute>

            <Route exact path='/login'>
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
