import CvMobileNav from '../cv-mobile-nav'
import CvDesktopNav from '../cv-desktop-nav';
import { useState } from 'react';
import styles from './nav.module.css';
export default function CvNav() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled)
    }

    return (
        <div className={styles.cvnav}>
            <CvMobileNav handleNavToggle={handleNavToggle} navToggled={navToggled}></CvMobileNav>
            <CvDesktopNav />
        </div>
    )
} 