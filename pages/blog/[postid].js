import { getAllPostsIds, getPostData } from "../../lib/post";

export async function getStaticProps({params}) {
    const postData = await getPostData(params.postid);
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const ids = getAllPostsIds();
    const paths = ids.map((postid) => {
        return {
            params: {
                postid
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export default function Post({ postData }) {
    return (
        <>
            <h1>{postData.title}</h1>
            <h2>{postData.publishedOn}</h2>
            {postData.updatedOn !== "" && <h2>{postData.updatedOn}</h2>}
            <div>
                {postData.discription}
            </div>
            <div>{
                postData.tags.map((tag, i)=> {
                    return (<span key={i}>
                        {tag}
                    </span>)
                })
                }</div>

            <article dangerouslySetInnerHTML={{__html: postData.contentHtml}}>
            </article>
        </>
    )
}

