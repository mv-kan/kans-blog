import Layout from '../components/layout'
import Feedpost from '../components/feedpost'
import utilStyles from '../styles/utils.module.css' 

export default function Blog() {
    return (
        <Layout>
            <div className={utilStyles.layoutContent}>
                <Feedpost
                    id={"cake-is-a-lie"}
                    title={"Test title"}
                    description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sequi aliquam quam fugit laboriosam aspernatur quas veritatis blanditiis alias provident, sit in numquam eius illo facere rerum nostrum suscipit dolorum."}
                    tags={["first tag", "second tag", "third tag"]}
                    publishedOn={"01/02/2020"}
                    updatedOn={"04/02/2020"}
                />
            </div>
        </Layout>
    )
}