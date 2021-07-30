import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-and-sign-up/ sign-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import React from 'react';

const HatsPage = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>  {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        })
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route  exact path='/shop' component={ShopPage} />
            <Route  path='/shop/hats' component={HatsPage} />
            <Route  path='/signin' component={SignInAndSignUp} />
  
          </Switch>
      </div>
    );
    
  }
}

export default App;
