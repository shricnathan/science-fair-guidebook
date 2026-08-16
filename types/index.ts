export interface Article {
  id: string
  slug: string
  title: string
  content: string
  stage: 'planning' | 'research' | 'design' | 'execution' | 'analysis' | 'presentation'
  category: string
  author: string
  read_time: number
  word_count: number
  featured: boolean
  created_at: string
  updated_at: string
  related_articles: string[]
}

export interface Topic {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  keywords: string[]
  featured: boolean
  created_at: string
}

export interface Template {
  id: string
  title: string
  description: string
  stage: string
  file_name: string
  file_type: 'pdf' | 'docx' | 'xlsx'
  download_url: string
  created_at: string
}

export interface Stage {
  id: string
  name: string
  description: string
  timeline: string
  checklist_items: string[]
  tips: string[]
  common_mistakes: string[]
  created_at: string
}
