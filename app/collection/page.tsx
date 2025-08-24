export const metadata = {
  title: 'Collection',
  description: 'saved collection of things i like',
}

export default function Page() {
  const links = [
    {
      title: "Normalization of Deviance",
      url: "https://foone.wordpress.com/2019/02/14/normalization-of-deviance/",
      description: "Give yourself the benefit of the doubt on these things. Too often I see people being mean to themselves in a way they’d never treat anyone else. Be nice to you. You gotta live with you."
    },
    {
      title: "The Human Factor", 
      url: "https://www.vanityfair.com/news/business/2014/10/air-france-flight-447-crash",
      description: "AF447. Interesting take on the progress of man vs. machine"
    }
  ]

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Collection</h1>
      <p className="mb-4">
        A collection of links and things I like keeping around.
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
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 italic">
              {link.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}