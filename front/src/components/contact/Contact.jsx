import styles from "../contact/Contact.module.css";
import HomeIcon from "../icons/HomeIcon";
import IgIcon from "../icons/IgIcon";
import PhoneIcon from "../icons/PhoneIcon";
import Maps from "./Maps";

const Contact = () => {
  return (
    <div className={styles.container} id="3">
      <div className={styles.infoContainer}>
        <div className={styles.dataContainer}>
          <HomeIcon />
          <span className={styles.data}>Calle cualquiera 123.</span>
        </div>
        <div className={styles.dataContainer}>
          <PhoneIcon />
          <span className={styles.data}>+54 123 456</span>
        </div>
        <div className={styles.dataContainer}>
          <IgIcon />
          <span className={styles.data}>@korokkesushi</span>
        </div>
      </div>
      <div className={styles.mapsContainer}>
        <Maps />
      </div>
    </div>
  );
};

export default Contact;
