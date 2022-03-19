import { getAllPostsIds, getPostData} from "../../../lib/post";

const postsIds = getAllPostsIds()

export default function Posts(req, res) {
    res.status(200).json({...postsIds})
}