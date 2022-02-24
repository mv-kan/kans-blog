import styles from '../styles/cv.module.css'
import utilStyles from '../styles/utils.module.css'

import Contacts from '../components/contacts'

import Head from 'next/head'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'
import 'material-icons/iconfont/material-icons.css';
import profilePicture from '../public/images/profile.jpg';



export default function CV() {
    const animationStyles = useSpring(
        {
            loop: { reverse: true },
            to: { y: 10 },
            from: { y: 0 },
            delay: 200
        }
    )


    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <section className={styles.heroSection}>
                <span className={styles.heroHeader}>
                    Michael Kan
                    <br />
                    Resume
                </span>
                <animated.div style={animationStyles} className={styles.arrow}>
                    <span className={`material-icons-round ${styles.arrowIcon}`}>keyboard_arrow_down</span>
                </animated.div>
            </section>
            <section className={`${styles.section} ${styles.profileSection}`}>
                <div className={styles.profilePictureWrapper}>
                    <Image
                        src={profilePicture}
                    />
                </div>
                <h4>Michael Kan</h4>
                <span className={utilStyles.bodyText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas iste quaerat porro eos earum repudiandae fuga, ipsum ea a aperiam quo eligendi ducimus quis, suscipit tempora, blanditiis maxime omnis.</span>
            </section>
            <div className={styles.signboard}>
                <h3 className={`${utilStyles.noneHeaderMargin} ${utilStyles.invTextColor}`}>
                    Experience
                </h3>
            </div>
            <section className={`${styles.section} ${styles.infoSection}`}>
                <div>
                    <h5>Lorem ipsum, dolor sit</h5>
                    <span className={utilStyles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste tempore error numquam sit, vitae distinctio nostrum voluptatem ab explicabo sed architecto natus dicta, blanditiis delectus molestias reiciendis earum quas.</span>
                    <br />
                    <h5>lorem</h5>
                    <ul className={`${utilStyles.bodyText}`}>
                        <li>some</li>
                        <li>thing</li>
                        <li>is</li>
                        <li>good</li>
                    </ul>
                </div>
            </section>
            <Contacts></Contacts>
        </div>
    )
} 