import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-and-sign-up/sign-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
const HatsPage = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>  {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
          //console.log(this.state);
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route  exact path='/shop' component={ShopPage} />
            <Route  path='/shop/hats' component={HatsPage} />
            <Route  exact path='/signin' render={() => 
              this.props.currentUser
              ?
              (<Redirect to='/'/>) 
              : 
              (<SignInAndSignUp/>)
            } 
            />
  
          </Switch>
      </div>
    );
    
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
