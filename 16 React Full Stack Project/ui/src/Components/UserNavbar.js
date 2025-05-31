import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector } from "react-redux";

const UserNavbar = () => {
  const [menuItem, setMenuItem] = useState();
  const navShow = useSelector((state) => state.user.navShow);
  useEffect(() => {
    if (navShow === "Home") {
      setMenuItem(
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div class="container">
              <Link class="navbar-brand" to="#">
                FoodiesHub
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#menu">
                      Menu
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/user/login">
                      login/register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }, [navShow])
  return(
    <>
    {menuItem}
    </>
  )
};

export default UserNavbar;
