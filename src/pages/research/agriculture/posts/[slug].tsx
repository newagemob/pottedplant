import React from 'react'
import fs from 'fs'
import path from 'path'
import matter, { } from 'gray-matter'
// import { marked } from 'marked'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

const BlogPost = (props: {
    frontMatter: { [key: string]: string },
    slug: string,
    content: string,
}) => (
    <div className='flex justify-center items-center bg-gray-100' id='blog-post'>

        <div className='flex flex-col justify-center max-w-2xl mx-auto' id='blog-post-content'>
            <img src={props.frontMatter.bannerImage} alt={props.frontMatter.title} />

            {/* back to /research/blog button */}
            <button id='blog-back-button'>
                <a href='/research/mycology'>back</a>
            </button>

            <h1 className='text-4xl font-bold'>{props.frontMatter.title}</h1>
            <p className='text-sm italic'>{props.frontMatter.date}</p>
            <div className='prose'>
                <ReactMarkdown children={props.content} />
            </div>
        </div>
    </div>
)

export default BlogPost

export async function getStaticPaths() {
    const dirPath = path.join(process.cwd(), 'src/pages/research/agriculture/posts')
    const files = fs.readdirSync(dirPath)

    const paths = files.filter(filename => filename.includes('.md')).map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }: never) {
    const markdownWithMeta = fs.readFileSync(
        path.join(process.cwd(), 'src/pages/research/agriculture/posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontMatter,
            slug,
            content,
        },
    }
}
