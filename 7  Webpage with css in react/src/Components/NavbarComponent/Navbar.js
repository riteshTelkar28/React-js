import styles from './navbar.module.css';
import cartLogo from '../../images/cartlogo3.webp';
function Navbar(){
    return(<>
        <div className={styles.nav}>
            <ul>
                <li><a href="#" style={{color:"black"}}>Home</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="">Product &#9662</a>
                    <ul>
                        <li><a href="">Product Item 1</a></li>
                        <li><a href="">Product Item 2</a></li>
                        <li><a href="">Product Item 3</a></li>
                        <li><a href="">Product Item 4</a></li>
                        <li><a href="">Product Item 5</a></li>
                    </ul>
                </li>
                <li><a href="Gallery.html">Gallery</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="sign-in.html">sign-in</a></li>
                <li><a href="">
                    <img src={cartLogo} className={styles.cartlogo} alt=""/>
                </a></li>
            </ul>
        </div>

    </>)
}

export default Navbar;