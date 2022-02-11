import { useState } from 'react';
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';
import Logo from "../logo/logo";
import styles from './header.module.css'

export default function Header() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled)
    }

    return (
        <header className={styles.header}>
            <Logo></Logo>
            <button className={styles.menuToggler} onClick={handleNavToggle}>
                <span className={`${styles.menuIcon} ${navToggled ? 'hidden' : ''} material-icons-round`}>menu</span>
                <span className={`${styles.menuIcon} ${navToggled ? '' : 'hidden'} material-icons-round`}>close</span>
            </button>
        </header>
    )
}