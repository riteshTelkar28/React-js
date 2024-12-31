import styles from './header.module.css';
import logo from '../../images/logo.png';

function Header(){
    return(<>
    <div className={styles.header}>
            <img src={logo} height="100px" width="100px" alt=""/>
            <span className={styles.headerHeading}>Supermarket | <span style={{fontSize:"25px"}}>Shopping made easy</span></span>
        </div>
    </>)
}

export default Header;