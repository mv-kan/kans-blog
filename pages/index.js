import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Contacts from '../components/contacts'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/home.module.css'
import profilePicture from '../public/images/profile.jpg';

const ContactLink = ({ text, iconName, href }) => {
  return (
    <a href={href} className={styles.contactLink}>
      <div>
        <span className='material-icons-round'>{iconName}</span>
        <span>{text}</span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <Layout>
      <div className={utilStyles.layoutContent}>
        <section className={styles.section}>
          <h2>
            Greetings!
          </h2>
          <span className={utilStyles.bodyText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas iste quaerat porro eos earum repudiandae fuga, ipsum ea a aperiam quo eligendi ducimus quis, suscipit tempora, blanditiis maxime omnis.
          </span>
        </section>
        <section className={styles.section}>
          <div className={styles.profilePictureWrapper}>
            <Image
              src={profilePicture}
              alt=""
            />
          </div>
          <h4>Michael Kan</h4>
          <span className={utilStyles.bodyText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas iste quaerat porro eos earum repudiandae fuga, ipsum ea a aperiam quo eligendi ducimus quis, suscipit tempora, blanditiis maxime omnis.</span>
        </section>
      </div>
      {/* <section className={`${styles.contacts}`}>
        <h3 className={`${utilStyles.invTextColor}`}>Contacts</h3>
        <ul className={styles.listOfContacts}>
          <li>
            <ContactLink
              text={'michael.kan.mail@gmail.com'}
              iconName={'mail'}
              href={'mailto:michael.kan.mail@gmail.com'} />
          </li>
          <li>
            <ContactLink
              text={'michael.kan.mail@gmail.com'}
              iconName={'mail'}
              href={'mailto:michael.kan.mail@gmail.com'} />
          </li>
          <li>
            <ContactLink
              text={'michael.kan.mail@gmail.com'}
              iconName={'mail'}
              href={'mailto:michael.kan.mail@gmail.com'} />
          </li>
        </ul>
      </section> */}
      <Contacts></Contacts>
    </Layout>
  )
}
