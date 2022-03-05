export default function CvNavList({ navClassName, linkClassName }) {
    return (
        <nav className={navClassName}>
            <a href="#profile" className={linkClassName}>Profile</a>
            <a href="#experience" className={linkClassName}>Experience</a>
            <a href="#contacts" className={linkClassName}>Contacts</a>
        </nav>
    )
}