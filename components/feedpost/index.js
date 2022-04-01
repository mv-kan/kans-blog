import styles from "./feedpost.module.css"
import Link from "next/link"

export default function Feedpost({title, description, tags, publishedOn, updatedOn, postid}) {
    const tagList = tags.map((tag, i) => {
        return <span key={i} className={styles.tag}>{tag}</span>
    })
    
    if (description.length > 100) {
        description = description.slice(80) + "..."
    }

    return (
        <Link href={`blog/${postid}`} passHref>
            <div className={styles.feedpost}>
                <div className={styles.heading}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.publishedOn}>{publishedOn}</span>
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <span className={styles.tagList}>
                    {
                        tagList
                    }
                </span>
            </div>
        </Link>
    );
}