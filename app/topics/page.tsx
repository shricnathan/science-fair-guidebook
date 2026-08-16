'use client'

import { useState } from 'react'
import TopicCard from '@/components/TopicCard'
import { getTopics, getTopicsByDifficulty, getTopicsByCategory_, searchTopics } from '@/lib/data'
import { DIFFICULTY_LEVELS, SCIENCE_CATEGORIES } from '@/lib/constants'

export default function TopicsPage() {
  const [filter, setFilter] = useState<'all' | 'difficulty' | 'category'>('all')
  const [filterValue, setFilterValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  let topics = getTopics()

  if (searchQuery) {
    topics = searchTopics(searchQuery)
  } else if (filter === 'difficulty' && filterValue) {
    topics = getTopicsByDifficulty(filterValue as any)
  } else if (filter === 'category' && filterValue) {
    topics = getTopicsByCategory_(filterValue)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple via-magenta to-cyan bg-clip-text text-transparent">
              Project Ideas
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover interesting science fair topics for every skill level
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Search project ideas..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setFilter('all')
                setFilterValue('')
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Difficulty Level:</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilter('difficulty')
                  setFilterValue(e.target.value)
                  setSearchQuery('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan"
              >
                <option value="">All Levels</option>
                {DIFFICULTY_LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category:</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilter('category')
                  setFilterValue(e.target.value)
                  setSearchQuery('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan"
              >
                <option value="">All Categories</option>
                {SCIENCE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {topics.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No topics found. Try a different search.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">{topics.length} topics found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
