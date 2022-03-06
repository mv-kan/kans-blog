import styles from './contacts.module.css';
import utilStyles from '../../styles/utils.module.css'

const ContactLink = ({ text, icon, href }) => {
    return (
        <a href={href} className={styles.contactLink}>
            <div>
                {icon}
                {/* <span className='material-icons-round'>{iconName}</span> */}
                <span>{text}</span>
            </div>
        </a>
    )
}

export default function Contacts() {
    return (
        <section className={`${styles.contacts} ${utilStyles.layoutMargin}`} id="contacts">
            <h3 className={`${utilStyles.invTextColor}`}>Contacts</h3>
            <ul className={styles.listOfContacts}>
                <li>
                    <ContactLink
                        text={'michael.kan.mail@gmail.com'}
                        icon={<span className='material-icons-round'>mail</span>}
                        href={'mailto:michael.kan.mail@gmail.com'} />
                </li>
                <li>
                    <ContactLink
                        text={'michael.kan.mail@gmail.com'}
                        icon={<span className='material-icons-round'>mail</span>}
                        href={'mailto:michael.kan.mail@gmail.com'} />
                </li>
                <li>
                    <ContactLink
                        text={'michael.kan.mail@gmail.com'}
                        icon={<span className='material-icons-round'>mail</span>}
                        href={'mailto:michael.kan.mail@gmail.com'} />
                </li>
            </ul>
        </section>)
}