import React, { Component } from 'react';
import header from '../Header/Header.module.scss';
import logo from '../../Image/rose.PNG';
import { FaShoppingCart ,FaTh} from "react-icons/fa";
import {GoSearch} from 'react-icons/go';
class Header extends Component {
  render() {
    return (
      <div>
        <div className={header.header}>
          <div>
            <img className={header.logo} src={logo} alt=""></img>
          </div>
          <div className={header.categories}>
            <div className={header.dropdown}>
              <div className={header.ropbtn}><FaTh/></div>
              <div className={header['dropdown-content']}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className={header.font}>
              <p>Categories</p>
            </div>
          </div>
          <div className={header.form}>
            <form>
                <input className={header.input} type="text" placeholder="Search for anything"></input>
                <button className={header.iconSearch}><GoSearch/></button>
            </form>
          </div>
          <div className={header.iconShop}>
            <FaShoppingCart />
          </div>
          <div className={header.login}>
            <button className={header.loginButton}>Log In</button>
          </div>
          <div className={header.signUp}>
            <button className={header.signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;