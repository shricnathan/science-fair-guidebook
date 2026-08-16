import { Topic } from '@/types'

interface TopicCardProps {
  topic: Topic
}

const difficultyColors = {
  beginner: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  intermediate: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  advanced: 'bg-red-500/20 text-red-300 border border-red-500/30',
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <div className="bg-gradient-to-br from-sage to-sage/90 border border-cyan/30 rounded-lg p-8 hover:border-cyan/60 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-cyan/20 hover:scale-102">
      <div className="flex justify-between items-start mb-4 gap-3">
        <h3 className="text-lg font-bold text-near-black flex-1 group-hover:text-purple transition-colors">{topic.title}</h3>
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ml-2 whitespace-nowrap ${difficultyColors[topic.difficulty]}`}>
          {topic.difficulty}
        </span>
      </div>
      <p className="text-xs text-purple font-bold uppercase tracking-widest mb-3">{topic.category}</p>
      <p className="text-cool-gray mb-5 leading-relaxed">{topic.description}</p>
      <div className="flex flex-wrap gap-2">
        {topic.keywords.slice(0, 3).map((keyword) => (
          <span key={keyword} className="bg-indigo/40 text-cyan px-2.5 py-1 rounded text-xs font-medium border border-cyan/20">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}
