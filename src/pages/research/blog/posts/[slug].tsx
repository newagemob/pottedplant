import React from 'react'
import fs from 'fs'
import path from 'path'
import matter, { } from 'gray-matter'
// import { marked } from 'marked'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'

const BlogPost = (props: {
    frontMatter: { [key: string]: string },
    slug: string,
    content: string,
}) => (
    <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md break-all'>

            <div className='flex flex-col justify-center max-w-2xl mx-auto'>
                <Image
                    src={props.frontMatter.bannerImage as string}
                    alt={props.frontMatter.title as string}
                    width={200}
                    height={200}
                />

                <div className='text-left text-sm text-indigo-800 my-4'>
                    <Link href='/research/blog' className='text-decoration-none border-2 rounded-sm px-2 py-1 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>
                        back
                    </Link>
                </div>

                <h1 className='text-4xl font-bold'>{props.frontMatter.title}</h1>
                <p className='text-sm italic'>{props.frontMatter.date}</p>

                <div className='text-left my-4 break-all'>
                    <ReactMarkdown
                        children={props.content}
                        className='prose prose-sm sm:prose lg:prose-lg xl:prose-2xl break-keep'
                    />
                </div>
            </div>
        </div>
    </div>
)

export default BlogPost

export async function getStaticPaths() {
    const dirPath = path.join(process.cwd(), 'src/pages/research/blog/posts')
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
        path.join(process.cwd(), 'src/pages/research/blog/posts', slug + '.md'),
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
