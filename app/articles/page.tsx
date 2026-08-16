'use client'

import { useState } from 'react'
import ArticleCard from '@/components/ArticleCard'
import { getArticles, getArticlesByStage, getArticlesByCategory, searchArticles } from '@/lib/data'
import { ARTICLE_CATEGORIES, PROJECT_STAGES } from '@/lib/constants'

export default function ArticlesPage() {
  const [filter, setFilter] = useState<'all' | 'stage' | 'category'>('all')
  const [filterValue, setFilterValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  let articles = getArticles()

  if (searchQuery) {
    articles = searchArticles(searchQuery)
  } else if (filter === 'stage' && filterValue) {
    articles = getArticlesByStage(filterValue as any)
  } else if (filter === 'category' && filterValue) {
    articles = getArticlesByCategory(filterValue)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple via-magenta to-cyan bg-clip-text text-transparent">
              Science Fair Articles
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Learn everything you need to know about science fairs — from research to presentation
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Search articles..."
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
              <label className="block text-sm font-semibold mb-2">Filter by Stage:</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilter('stage')
                  setFilterValue(e.target.value)
                  setSearchQuery('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan"
              >
                <option value="">All Stages</option>
                {PROJECT_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage.charAt(0).toUpperCase() + stage.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Filter by Category:</label>
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
                {ARTICLE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No articles found. Try a different search.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">{articles.length} articles found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
