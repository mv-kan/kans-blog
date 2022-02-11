import LogoInv from "../logo-inv/logoInv"
import Link from "next/link"
import styles from '../../styles/utils.module.css'


export default function Nav() {
    return (
        <header className={styles.header}>
            <LogoInv/> 
        </header>
    )
}