import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Patrick Chen
      </h1>
      <p className="mb-4">
        {`I am looking for some direction and this website felt like one way to 
        try to find it. I have a tendency to ruminate so why not just let it 
        all out here you know.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
