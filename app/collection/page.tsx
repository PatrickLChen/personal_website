export const metadata = {
  title: 'Collection',
  description: 'saved collection of things i like',
}

export default function Page() {
  const links = [
    {
      title: "Example Link 1",
      url: "https://example.com",
      description: "This is a sample link with some commentary about why I find it interesting."
    },
    {
      title: "Example Link 2", 
      url: "https://example.org",
      description: "Another example with my thoughts on what makes this worth saving."
    }
  ]

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Collection</h1>
      <p className="mb-4">
        A curated collection of links and things I find worth remembering.
      </p>
      
      <div className="space-y-6">
        {links.map((link, index) => (
          <div key={index} className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {link.title}
            </a>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {link.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}