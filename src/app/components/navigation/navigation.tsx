"usen client";
import Link from "next/link";
import styles from "./navigation.module.css";

export default function NavigationBar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light `}>
        <div className="container">
          <a className="navbar-brand" href="#">
            Tanapattara_
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
                <Link
                  href="http://cis.kku.ac.th"
                  target="blank"
                  className="nav-link"
                >
                  CIS
                </Link>
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
                    <Link href="/oop" className="dropdown-item">
                      Object Oriented Programming
                    </Link>
                  </li>
                  <li>
                    <Link href="/web" className="dropdown-item">
                      Frontend Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/mobile" className="dropdown-item">
                      Native Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/itsec" className="dropdown-item">
                      Information Technology Security and IT Laws
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link disabled">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
