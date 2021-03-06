import React, { Component } from 'react';
import './pages/homepages/homepage.styles.scss';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';




class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null

    }
  }
  unsubcribeFromAuth = null
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }
}

export default App;





