import Tabs from "./Tabs";
import styles from "./LogIn.module.css";
import image from '../assets/logInBackground.svg';

const LogIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={image}/>
      </div>
      <div className={styles["form-wrapper"]}>
        <Tabs />
      </div>
    </div>
  );
};

export default LogIn;
