//styles
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="222222" class="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        </button>

        <div id="mobile-menu" className={styles.mobileMenu}>
          <ul className={styles.ulMobileMenu}>
            <li>
              <a className={styles.link} href="#">
                Bienvenida
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Catálogo
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.desktopMenu}>
          <ul className={styles.ulDesktopMenu}>
            <li>
              <a className={styles.link} href="#">
                BIENVENIDA
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                CATÁLOGO
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
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
