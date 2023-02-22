import Link from 'next/link'
import matter from 'gray-matter'
import fs from "fs"
import path from "path"
import Image from 'next/image'

const MycologyBlog = (props: {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}) => {
  return (
    // center this div with tailwind
    <div id='blog-landing'>
      {props.posts.map(({ slug, frontMatter: { title, bannerImage } }) => (
        <Link key={slug} href={`/research/mycology/posts/${slug}`} passHref id='blog-link'>
          <Image
            src={bannerImage as string}
            alt={title as string}
            width={200}
            height={200}
          />
          <h5 id='blog-thumbnail-title'>{title}</h5>
          <hr />
        </Link>
      ))}
    </div>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const dirPath = path.join(process.cwd(), 'src/pages/research/mycology/posts')
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

export default MycologyBlog
