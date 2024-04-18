import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo1 from "../../assets/logos/InStock-Logo_1x.png";

const Header = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "primary-nav__item primary-nav__item--active"
      : "primary-nav__item";
  };
  return (
    <div>
      <div className="site-header">
        <div className="site-header__wrapper">
          <NavLink to="/">
            <img src={Logo1} alt="instock-logo" className="logo" />
          </NavLink>
          <nav className="primary-nav">
            <ul className="primary-nav__list">
              <li className="primary-nav__li">
                <NavLink to="/warehouses" className={getNavLinkClass}>
                  Warehouses
                </NavLink>
              </li>
              <li className="primary-nav__li">
                <NavLink to="/inventories" className={getNavLinkClass}>
                  Inventory
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="site-header-bottom"></div>
    </div>
  );
};

export default Header;
