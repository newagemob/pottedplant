import Link from 'next/link'
import matter from 'gray-matter'
import fs from "fs"
import path from "path"

const Blog = (props: {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}) => {
  return (
    // center this div with tailwind
    <div className='flex flex-col justify-center items-center h-screen' id='blog-landing'>
      {props.posts.map(({ slug, frontMatter: { title, description } }) => (
        <Link key={slug} href={`/research/blog/posts/${slug}`} passHref id='blog-link'>
          <h5>{title}</h5>
          <p>{description}</p>
          <hr />
        </Link>
      ))}
    </div>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const dirPath = path.join(process.cwd(), 'src/pages/research/blog/posts')
  const files = fs.readdirSync(dirPath)

  const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(dirPath, filename),
      'utf-8'
    )

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  }).sort((a, b) => (
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ))

  return {
    props: {
      posts,
    },
  }
}

export default Blog