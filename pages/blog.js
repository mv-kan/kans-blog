import Layout from '../components/layout'
import Feedpost from '../components/feedpost'
import utilStyles from '../styles/utils.module.css'
import { getAllPostsData } from '../lib/post'


export async function getStaticProps() {
    const allPosts = await getAllPostsData()
    for (var i = 0; i < allPosts.length; i++) {
        // get i element 
        // and delete key contentHtml
        delete (allPosts[i].contentHtml);
    }
    console.log(allPosts)

    return {
        props: {
            allPosts: allPosts
        }
    }
}

export default function Blog({ allPosts }) {
    return (
        <Layout>
            <div className={utilStyles.layoutContent}>
                {
                    allPosts.map((post)=> {
                        return <Feedpost
                            key={post.postid}
                            postid={post.postid}
                            title={post.title}
                            description={post.description}
                            tags={post.tags}
                            publishedOn={post.publishedOn}
                            updatedOn={post.updatedOn}
                        />
                    })
                }
            </div>
        </Layout>
    )
}
