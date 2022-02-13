import styles from './logoInv.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function LogoInv() {
    return (
        <Link href={'/'}>
            <a className={`${utilStyles.logoSize} ${styles.logoInv}`}>
                michaelkan.me
            </a>
        </Link>
        
    )
} 