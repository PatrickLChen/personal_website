import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/writing/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writing/${post.slug}`}
          >
            <div className="flex justify-between items-baseline">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums whitespace-nowrap ml-4">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}