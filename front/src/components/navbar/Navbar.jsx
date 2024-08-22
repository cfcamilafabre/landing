//styles
import MobileMenu from "../icons/MobileMenu";
import styles from "../navbar/Navbar.module.css";

//imagenes

const Navbar = () => {
  const handleOpenMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu?.classList.toggle(styles.hidden);
  };

  return (
    <>
      <header className={styles.navBar}>
        <div className={styles.containerLogo}>
          <img src="/Logo.png" width={120} alt="Logo" />
        </div>

        <button
          type="button"
          onClick={handleOpenMenu}
          className={styles.toggleMenu}
        >
          <MobileMenu />
        </button>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${styles.hidden}`}
        >
          <ul className={styles.ulMobileMenu}>
            <li>
              <a className={styles.link} href="#1">
                Bienvenida
              </a>
            </li>
            <li>
              <a className={styles.link} href="#2">
                Catálogo
              </a>
            </li>
            <li>
              <a className={styles.link} href="#3">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.desktopMenu}>
          <ul className={styles.ulDesktopMenu}>
            <li>
              <a className={styles.link} href="#1">
                BIENVENIDA
              </a>
            </li>
            <li>
              <a className={styles.link} href="#2">
                CATÁLOGO
              </a>
            </li>
            <li>
              <a className={styles.link} href="#3">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
