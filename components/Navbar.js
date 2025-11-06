import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import owd from "../public/assets/logo/owd.png";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <Row className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <Image
                  alt="Alameda web design triangular logo"
                  src={owd}
                  width={45}
                  className={styles.logo}
                />
                <span className={styles.title}>Alameda Web Design</span>
              </Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/services">Services</Link>
            </li>
            {/* <li className={styles.ul_links}>
              <Link href="/blog">Blog</Link>
            </li> */}
            <li className={styles.ul_links}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Row>
    </div>
  );
}
