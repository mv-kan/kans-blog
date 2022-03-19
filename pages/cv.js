import React, { useRef, useEffect, useState } from "react";

import styles from '../styles/cv.module.css'
import utilStyles from '../styles/utils.module.css'

import Contacts from '../components/contacts'
import CvNav from '../components/cv-nav'

import Head from 'next/head'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'
import 'material-icons/iconfont/material-icons.css';
import profilePicture from '../public/images/profile.jpg';

// highlights current section in menu
// move to other place later
const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

const scrollTo = ele => {
    ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};


export default function CV() {
    const animationStyles = useSpring(
        {
            loop: { reverse: true },
            to: { y: 10 },
            from: { y: 0 },
            delay: 300
        }
    )

    const [visibleSection, setVisibleSection] = useState();

    const headerRef = useRef(null);
    const profileRef = useRef(null);
    const experienceRef = useRef(null);
    const contactsRef = useRef(null);
    const sectionRefs = [
        { section: "Profile", ref: profileRef },
        { section: "Experience", ref: experienceRef },
        { section: "Contacts", ref: contactsRef },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // const { height: headerHeight } = getDimensions(headerRef.current);
            const { height: headerHeight } = {height: 0};
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);

    return (
        <div className={styles.cvLayout}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>

            <section
                className={`${styles.heroSection} ${utilStyles.layoutMargin}`}
            >
                <span className={styles.heroHeader}>
                    Michael Kan
                    <br />
                    Resume
                </span>
                <animated.div style={animationStyles} className={styles.arrow}>
                    <span className={`material-icons ${styles.arrowIcon}`}>keyboard_arrow_down</span>
                </animated.div>
            </section>
            <CvNav currentSection={visibleSection}></CvNav>
            <section
                className={`${styles.section} ${styles.profileSection} ${utilStyles.layoutContent}`}
                id="profile"
                ref={profileRef}>
                <div className={styles.profilePictureWrapper}>
                    <Image
                        src={profilePicture}
                    />
                </div>
                <h4>Michael Kan</h4>
                <span className={utilStyles.bodyText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas iste quaerat porro eos earum repudiandae fuga, ipsum ea a aperiam quo eligendi ducimus quis, suscipit tempora, blanditiis maxime omnis.</span>
            </section>
            
            <section
                className={`${styles.section} ${styles.infoSection} ${utilStyles.layoutContent}`}
                ref={experienceRef}>
                <div className={`${styles.signboard}`} id='experience'>
                    <h3 className={`${utilStyles.noneHeaderMargin} ${utilStyles.invTextColor}`}>
                        Experience
                    </h3>
                </div>
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
            <section ref={contactsRef}>
                <Contacts></Contacts>
            </section>
        </div>
    )
} 