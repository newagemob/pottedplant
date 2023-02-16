import Link from 'next/link'
import matter from 'gray-matter'
import fs from "fs"
import path from "path"

const Courses = (props: {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}) => {
  return (
    <>
      <div />
      <div className='flex flex-col justify-center items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
          {/* TODO: order blog posts by date (descending) */}
          {props.posts.map(({ slug, frontMatter: { title, bannerImage, date } }) => (
            <div
              className='flex flex-col justify-around items-center my-4 mx-4 p-4 rounded-md bg-zinc-200'
              key={slug}
            >
              <Link href={`/research/courses/posts/${slug}`} passHref id='blog-link'>
                <img
                  src={bannerImage}
                  alt={title}
                  id='blog-thumbnail-image'
                  className='rounded-md h-64 w-64 object-cover'
                />
                <h5
                  id='blog-thumbnail-title'
                  className='text-left text-2xl font-bold'
                >
                  {title}
                </h5>

                <span className='text-left text-sm text-indigo-800'>
                  {new Date(date as string).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>

                <hr />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const dirPath = path.join(process.cwd(), 'src/pages/research/courses/posts')
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

export default Courses
