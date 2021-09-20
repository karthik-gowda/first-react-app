import './App.css';
import HomePage from './pages/home-page/home-page-component';
import SignUp from './pages/signuppage/signup-page-component';
import {Route} from 'react-router-dom';
import SignIn from './pages/signinpage/signin-component';
import Header from './components/header-component/header-component';
import Cart from './pages/cartpage/cart-component';
import rotateFunction from '../src/redux/test-redux-withUI';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/cart" component={Cart}></Route>
      <Route exact path="/redux" component={rotateFunction}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
    </div>
  );
}

export default App;
