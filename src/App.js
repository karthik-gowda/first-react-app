import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page/home-page-component';
import SignIn from './pages/signinpage/signin-page-component';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={HomePage}></Route>
      
      <Route exact path="/signin" component={SignIn}></Route>
    </div>
  );
}

export default App;
