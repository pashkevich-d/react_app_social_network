import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from "react-router-dom";

const App = (props) => {

 
// debugger;
  return (
      <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile}/> */}
        {/* <Route path='/news' component={}> */}

        <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />
        <Route path='/profile' render={ () => <Profile store={props.store}  />}/>
        </div>
        {/* <Profile /> */}
      </div>
  );
}


// 




export default App;
