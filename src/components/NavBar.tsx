const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div>Mariana Usuga</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skillset">Skillset</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
