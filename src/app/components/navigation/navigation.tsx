"usen client";
import styles from "./navigation.module.css";

export default function NavigationBar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbarModule}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Tanapattara
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ml-auto`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav mr-auto ${styles.navbarMenu}`}>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Classroom
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Object Oriented Programming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Frontend Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Native Mobile Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
