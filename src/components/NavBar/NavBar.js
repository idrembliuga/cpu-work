function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="\">
          CpuWork.
        </a>

        <button
          className="navbar-toggler"
          style={{marginRight:'5px !important'}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse top_nav"
          id="navbarSupportedContent"
        >
          <ul className="navbar navbar-nav navbar-right " style={{display:'flex', marginLeft: 'auto'}}>
            <li className="nav-item ms-1">
              <a href="/" className="nav-link">
                Home
              </a>
              {window.location.pathname === '/'  && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>
            <li className="nav-item ms-1">
              <a href="/support" className="nav-link">
                Support
              </a>
              {window.location.pathname === '/support' && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>
            <li className="nav-item ms-1">
              <a href="/design" className="nav-link">
                Design
              </a>
              {window.location.pathname === '/design' && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>

            <li className="nav-item ms-1">
              <a href="/marketing" className="nav-link">
                Marketing
              </a>
              {window.location.pathname === '/marketing' && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>
            <li className="nav-item ms-1">
              <a href="/application-development" className="nav-link">
                Development
              </a>
              {window.location.pathname === '/application-development' && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>
            <li className="nav-item ms-1">
              <a href="/contact-us" className="nav-link">
                Contact Us
              </a>
              {window.location.pathname === '/contact-us' && <hr className="hr_nav" style={{margin:'4px 0'}}/>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
