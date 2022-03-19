import fs from 'fs';
import path from 'path';

import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'; 

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsIds = fileNames.map((fileName) => {
        const postid = fileName.replace(/.md$/, '')

        return postid
    }) 
    return allPostsIds
}

export async function getPostData(postid) {
    const pathToFile = path.join(postsDirectory, `${postid}.md`) 
    const mdSource = fs.readFileSync(pathToFile, 'utf8');

    // parse all meta data
    const matterResult = matter(mdSource)
    // split up tags into array 
    matterResult.data.tags = matterResult.data.tags.split(', ')
    // convert to html str
    const processedSource = await remark().use(html).process(matterResult.content) 
    const contentHtml = processedSource.toString()
    // combine and return 
    return {
        postid,
        contentHtml,
        ...matterResult.data,
    }
} 