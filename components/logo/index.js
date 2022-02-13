import styles from './logo.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href={'/'}>
            <a className={`${utilStyles.logoSize} ${styles.logo}`}>
                michaelkan.<span>me</span>
            </a>
        </Link>
    )
}