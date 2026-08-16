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
      <section className="bg-gradient-to-br from-indigo via-indigo to-indigo text-white py-40 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-purple to-pink opacity-15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-gradient-to-tr from-cyan to-purple opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-pink to-cyan opacity-5 rounded-full blur-3xl"></div>

        {/* Decorative dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan rounded-full opacity-40"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-purple rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="block text-cyan mb-2">THE</span>
            <span className="gradient-text block text-6xl md:text-7xl mb-4">SCIENCE FAIR</span>
            <span className="block text-pink">GUIDEBOOK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From idea to ISEF — Your complete guide to conducting research, creating an outstanding project, and sharing your ideas with confidence.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/articles"
              className="bg-gradient-to-r from-cyan to-pink text-indigo px-8 py-4 rounded font-bold hover:shadow-xl hover:shadow-cyan/50 transition-all duration-300 hover:scale-110 text-lg uppercase tracking-wide"
            >
              📖 Read Articles
            </Link>
            <Link
              href="/topics"
              className="border-2 border-cyan text-cyan px-8 py-4 rounded font-bold hover:bg-cyan hover:text-indigo transition-all duration-300 hover:scale-110 text-lg uppercase tracking-wide"
            >
              💡 Browse Topics
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Articles</h2>
          <p className="text-cool-gray mb-12 max-w-2xl">Learn everything you need to succeed in your science fair journey</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <Link href="/articles" className="text-cyan font-bold hover:text-pink transition-colors inline-flex items-center gap-2">
            View all articles <span>→</span>
          </Link>
        </div>
      </section>

      {/* Project Stages Overview */}
      <section className="bg-sage py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-near-black">Project Stages</h2>
          <p className="text-cool-gray mb-12 max-w-2xl">Follow these steps to success</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stages.slice(0, 6).map((stage) => (
              <div key={stage.id} className="bg-indigo/10 rounded-lg p-8 border border-purple/30 hover:border-cyan/50 transition-all duration-300 hover:bg-indigo/20">
                <h3 className="text-xl font-bold text-near-black mb-3">{stage.name}</h3>
                <p className="text-purple font-semibold mb-3 text-sm uppercase tracking-wide">{stage.timeline}</p>
                <p className="text-cool-gray leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
          <Link href="/stages" className="text-purple font-bold hover:text-cyan transition-colors inline-flex items-center gap-2">
            View detailed guides <span>→</span>
          </Link>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Popular Project Ideas</h2>
          <p className="text-cool-gray mb-12 max-w-2xl">Find inspiration from our curated list of science projects</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredTopics.slice(0, 3).map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <Link href="/topics" className="text-cyan font-bold hover:text-pink transition-colors inline-flex items-center gap-2">
            Browse all topics <span>→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo via-indigo to-indigo text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple to-pink opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan to-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Download our free templates and get everything you need to succeed in your science fair journey
          </p>
          <Link
            href="/templates"
            className="bg-gradient-to-r from-cyan to-pink text-indigo px-10 py-4 rounded font-bold hover:shadow-2xl hover:shadow-cyan/50 transition-all duration-300 hover:scale-110 inline-block text-lg uppercase tracking-wide"
          >
            📥 Get Templates
          </Link>
        </div>
      </section>
    </div>
  )
}
