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

export async function getAllPostsData() {
    // get all ids 
    const ids = getAllPostsIds()
    var result = [];
    // iterate through ids array 
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const postData = await getPostData(id);
        result.push(postData)
    }
    return result;
}

export async function getPostData(postid) {
    try {
        const pathToFile = path.join(postsDirectory, `${postid}.md`)
        const mdSource = fs.readFileSync(pathToFile, 'utf8');

        // parse all meta data
        const matterResult = matter(mdSource)
        // split up tags into array
        console.log(matterResult.data.tags)
        console.log(typeof matterResult.data.tags)
        // toString if array, DO NOT DELETE NEXT LINE it fixes some deep bug  
        matterResult.data.tags = matterResult.data.tags.toString() 
        matterResult.data.tags = matterResult.data.tags.split(',')
        for (let i = 0; i < matterResult.data.tags.length; i++) {
            const tag = matterResult.data.tags[i];
            matterResult.data.tags[i] = tag.trim()
        }
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
    catch (err) {
        throw err
    }
} 

