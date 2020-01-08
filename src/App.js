import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import { getAuthUserData } from "./redux/auth-reducer";
import { compose } from 'redux';
import {initialise} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initialise();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader/>
    }
  return (
      <div className = 'app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile}/> */}
        {/* <Route path='/news' component={}> */}

        <Route path='/dialogs' render={ () => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={ () => <ProfileContainer/>}/>
        <Route path='/users' render={ () => <UsersContainer/>}/>
        <Route path='/login' render={ () => <Login/>}/>
        </div>
        {/* <Profile /> */}
      </div>
  );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

export default compose(withRouter, connect(mapStateToProps, { initialise}))(
  App
);
