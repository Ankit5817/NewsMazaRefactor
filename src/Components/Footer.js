import React from "react";

export default function Footer() {
  return (
    <div style={{width: '100vw' ,position: 'fixed', bottom: '0px'}}>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid justify-content-center">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <span className="my-2">Copyright &#169; 2023</span>
        </div>
      </nav>
    </div>
  );
}
