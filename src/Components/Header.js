import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNewsByCategory } from "../Redux/reducer";

export default function Header() {
  const dispatch = useDispatch();
  const [categories, setcategories] = useState(['business','entertainment','general','heath','science','sports','technology'])

  const callByCategory = (index) => {
    dispatch(getNewsByCategory(categories[index]));
  }

  return (
    <div style={{position: 'fixed', top: '0px', width: '100vw', zIndex: '2'}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            NewzMaza
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(0)}}>
                      Business
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(1)}}>
                      Entertainment
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(2)}}>
                      General
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(3)}}>
                      Health
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(4)}}>
                      Science
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(5)}}>
                      Sports
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" style={{cursor: 'pointer'}} onClick={()=>{callByCategory(6)}}>
                      Technology
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex me-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
