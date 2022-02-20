import Link from "next/link"

const NavLink = ({ linkText, href, className }) => {
    return (
        // div wrapper prevents 'a' tag from stretching in flexbox 
        <div>
            <Link href={href}>
                <a className={className}>
                    {linkText}
                </a>
            </Link>
        </div>
    )
}

export function NavList({navClassName, linkClassName}) {
    return (
        <nav className={navClassName}>
            <NavLink className={linkClassName} linkText={"Blog"} href={'/blog'} />
            <NavLink className={linkClassName} linkText={"Resources"} href={'/resources'} />
            <NavLink className={linkClassName} linkText={"Snippets"} href={'/blog'} />
            <NavLink className={linkClassName} linkText={"CV"} href={'/cv'} />
        </nav>
    )
}