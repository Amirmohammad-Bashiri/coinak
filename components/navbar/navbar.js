import Link from "next/link";

import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <header className="bg-gray-8 text-gray-1 p-2">
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Coinak</a>
          </Link>
        </div>

        <div>
          <ul className={styles.navbar__links}>
            <li className="text-hover-emerald-2">
              <Link href="/#trending">
                <a>Trending</a>
              </Link>
            </li>
            <li className="text-hover-emerald-2">
              <Link href="/#currencies">
                <a>Currencies</a>
              </Link>
            </li>
            <li className="text-hover-emerald-2">
              <Link href="#news">
                <a>News</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
