import styles from "../Navigation/Navgation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navgation} container`}>
      <div className="log  ">
        {" "}
        <img src="/images/logo.png" alt="logo"></img>
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>AboutUs</li>
      </ul>
    </nav>
  );
};

export default Navigation;
