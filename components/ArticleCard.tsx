import Link from 'next/link'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="bg-gradient-to-br from-sage to-sage/90 border border-cyan/30 rounded-lg p-8 hover:border-cyan/60 transition-all duration-300 cursor-pointer h-full group overflow-hidden hover:shadow-lg hover:shadow-cyan/20 hover:scale-102">
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-gradient-to-r from-cyan to-pink text-indigo px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {article.stage}
          </span>
          <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-near-black mb-3 group-hover:text-purple transition-colors">{article.title}</h3>
        <p className="text-cool-gray mb-6 line-clamp-2 leading-relaxed">{article.content}</p>
        <div className="flex justify-between text-xs text-cool-gray uppercase tracking-wide">
          <span>📖 {article.read_time} min read</span>
          <span>📝 {article.word_count} words</span>
        </div>
      </div>
    </Link>
  )
}
