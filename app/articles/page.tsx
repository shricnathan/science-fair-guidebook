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
      <section className="bg-gradient-to-r from-indigo via-indigo to-indigo text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Science Fair Articles
          </h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Learn everything you need to know about science fairs — from research to presentation
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-sage">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="🔍 Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setFilter('all')
                setFilterValue('')
              }}
              className="w-full px-6 py-3 border-2 border-cyan/30 rounded-lg bg-white text-near-black placeholder-cool-gray focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-purple uppercase tracking-wide">Filter by Stage:</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilter('stage')
                  setFilterValue(e.target.value)
                  setSearchQuery('')
                }}
                className="px-4 py-2.5 border-2 border-purple/30 rounded-lg bg-white text-near-black focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple font-medium"
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
              <label className="block text-sm font-bold mb-2 text-purple uppercase tracking-wide">Filter by Category:</label>
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilter('category')
                  setFilterValue(e.target.value)
                  setSearchQuery('')
                }}
                className="px-4 py-2.5 border-2 border-purple/30 rounded-lg bg-white text-near-black focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple font-medium"
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
      <section className="py-16 bg-indigo">
        <div className="container mx-auto px-4">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-cool-gray">No articles found. Try a different search.</p>
            </div>
          ) : (
            <>
              <p className="text-cool-gray mb-8 text-lg font-medium">📚 {articles.length} articles found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
