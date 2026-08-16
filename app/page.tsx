import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import TopicCard from '@/components/TopicCard'
import { getFeaturedArticles, getFeaturedTopics, getStages } from '@/lib/data'

export default function Home() {
  const featuredArticles = getFeaturedArticles()
  const featuredTopics = getFeaturedTopics()
  const stages = getStages()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple to-magenta opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan to-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            <span>THE</span>
            <br />
            <span className="bg-gradient-to-r from-purple via-magenta to-cyan bg-clip-text text-transparent">
              SCIENCE FAIR
            </span>
            <br />
            <span className="text-cyan">GUIDEBOOK</span>
          </h1>
          <p className="text-2xl mb-12 opacity-90 max-w-2xl">
            From idea to ISEF — Your complete guide to conducting research, creating an outstanding project, and sharing your ideas with confidence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/articles"
              className="bg-cyan text-navy px-8 py-4 rounded font-bold hover:shadow-lg hover:shadow-cyan/50 transition-all text-lg"
            >
              Read Articles
            </Link>
            <Link
              href="/topics"
              className="border-2 border-cyan text-cyan px-8 py-4 rounded font-bold hover:bg-cyan hover:text-navy transition-all text-lg"
            >
              Browse Topics
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <Link href="/articles" className="text-cyan font-bold hover:opacity-80">
            View all articles →
          </Link>
        </div>
      </section>

      {/* Project Stages Overview */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Stages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stages.map((stage) => (
              <div key={stage.id} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-navy mb-2">{stage.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{stage.timeline}</p>
                <p className="text-gray-700">{stage.description}</p>
              </div>
            ))}
          </div>
          <Link href="/stages" className="text-cyan font-bold hover:opacity-80">
            View detailed guides →
          </Link>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featuredTopics.slice(0, 3).map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <Link href="/topics" className="text-cyan font-bold hover:opacity-80">
            Browse all topics →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              Ready to start your project?
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download our templates and get everything you need to succeed
          </p>
          <Link
            href="/templates"
            className="bg-cyan text-navy px-8 py-4 rounded font-bold hover:shadow-lg hover:shadow-cyan/50 transition-all inline-block text-lg"
          >
            Get Templates
          </Link>
        </div>
      </section>
    </div>
  )
}
