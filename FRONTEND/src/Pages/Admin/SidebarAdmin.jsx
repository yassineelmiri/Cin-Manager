const Sidebar = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header__content">
          <a href="/" className="header__logo">
            <img src="/img/logo.svg" alt="logo" />
          </a>
          <button className="header__btn" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className="sidebar">
        <a href="/" className="sidebar__logo">
          <img src="/img/logo.svg" alt="logo" />
        </a>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img src="/img/user.svg" alt="admin" />
          </div>
          <div className="sidebar__user-title">
            <span>Admin</span>
            <p>Yassine</p>
          </div>
        </div>

        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <a
              href="/dashboard"
              className="sidebar__nav-link sidebar__nav-link--active"
            >
              Dashboard
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="/catalog" className="sidebar__nav-link">
              Catalog
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
