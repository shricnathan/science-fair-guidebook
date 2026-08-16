import Link from 'next/link'
import { getArticles, getArticleBySlug } from '@/lib/data'
import ArticleCard from '@/components/ArticleCard'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const articles = getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = article.related_articles
    .map((slug) => getArticleBySlug(slug))
    .filter((a) => a !== undefined)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-purple text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/articles" className="text-cyan hover:opacity-80 mb-4 inline-block">
            ← Back to Articles
          </Link>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.read_time} min read</span>
            <span>•</span>
            <span>{article.word_count} words</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex gap-2 mb-6">
            <span className="bg-cyan text-navy px-3 py-1 rounded-full text-sm font-semibold">
              {article.stage}
            </span>
            <span className="bg-purple text-white px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">{article.content}</p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-500">
              Last updated:{' '}
              {new Date(article.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-lightGray py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(
                (relatedArticle) =>
                  relatedArticle && <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
