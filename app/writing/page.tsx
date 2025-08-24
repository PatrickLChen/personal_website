import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'my writing',
  description: 'my thoughts (original or not)',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <p className="mb-8">
        My thoughts (original or not).
      </p>
      <BlogPosts />
    </section>
  )
}
