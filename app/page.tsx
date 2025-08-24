import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h2>
      <p className="mb-4">
        {`I am looking for some direction and this website felt like one way to 
        try to find it. I have a tendency to ruminate so why not just let it 
        all out here you know.`}
      </p>
      
      
      <div className="my-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Writings
        </h2>
        <BlogPosts />
      </div>

      <div className="my-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          Other Notes
        </h2>
        <p className="mb-4">
          {`Other things go here`}
        </p>
      </div>
    </section>
  )
}