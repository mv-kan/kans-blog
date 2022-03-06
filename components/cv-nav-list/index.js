export default function CvNavList({ navClassName, linkClassName, clickHandler }) {
    return (
        <nav className={navClassName}>
            <div>
                <a href="#profile" className={linkClassName} onClick={clickHandler}>Profile</a>
            </div>
            <div>
                <a href="#experience" className={linkClassName} onClick={clickHandler}>Experience</a>
            </div>
            <div>
                <a href="#contacts" className={linkClassName} onClick={clickHandler}>Contacts</a>
            </div>
        </nav>
    )
}