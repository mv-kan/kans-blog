import styles from './logo.module.css'
import utilStyles from '../../styles/utils.module.css'
export default function Logo() {
    return (
        <div className={`${utilStyles.logoSize} ${styles.logo}`}>
            michaelkan.<span>me</span> 
        </div>
    )
}