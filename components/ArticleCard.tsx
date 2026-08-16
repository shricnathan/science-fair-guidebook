import Link from 'next/link'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="flex gap-2 mb-3">
          <span className="bg-cyan text-navy px-3 py-1 rounded-full text-sm font-semibold">
            {article.stage}
          </span>
          <span className="bg-purple text-white px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.content}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{article.read_time} min read</span>
          <span>{article.word_count} words</span>
        </div>
      </div>
    </Link>
  )
}
