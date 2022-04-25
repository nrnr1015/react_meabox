import React, { Component } from "react";
import { Link } from "react-router-dom";


class HeaderNav extends Component {
  render() {
    const { classes, onSidebarOpen, ...rest } = this.props;
    return (
      <div className="header-area">
         <header className="header-main"> 
            <div className="h-ico menu-ctg">
                <Link to="/Category" ><span className="hidden">카테고리</span></Link>
            </div>
            <h1 className="logo">
                <Link to="/" ><span className="hidden">MEATBOX</span></Link>
            </h1>
            <div className="h-ico basket">
                <Link to="/basket" >
                    <span className="hidden">장바구니</span>
                    <span className="count">10</span>
                </Link>
            </div>
        </header>
        <div className="search" onClick={onSidebarOpen}>
            <div className="is-expand">
                <div className="search_input"></div>
                <button  type="button">검색</button>
            </div>
        </div>
      
      </div>
      
    );
  }
}


export default HeaderNav;
