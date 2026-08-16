import { Topic } from '@/types'

interface TopicCardProps {
  topic: Topic
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-navy flex-1">{topic.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 whitespace-nowrap ${
            difficultyColors[topic.difficulty]
          }`}
        >
          {topic.difficulty}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-3 font-semibold">{topic.category}</p>
      <p className="text-gray-600 mb-4">{topic.description}</p>
      <div className="flex flex-wrap gap-2">
        {topic.keywords.slice(0, 3).map((keyword) => (
          <span key={keyword} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}
