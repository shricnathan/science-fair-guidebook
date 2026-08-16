import { Topic } from '@/types'

export const topics: Topic[] = [
  // PDF Examples from Chapters 2-3
  {
    id: '1',
    title: 'Algal Bloom Prevention Using Native Aquatic Plant Extracts',
    description: 'Can extracts from native aquatic plants inhibit algal growth and help prevent blooms in freshwater ponds?',
    category: 'Biology',
    difficulty: 'intermediate',
    keywords: ['water quality', 'algae', 'native plants', 'biocontrol', 'environmental'],
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Microplastic Effects on Arabidopsis Germination and Growth',
    description: 'How does increasing polyethylene microplastic concentration in soil affect the growth rate and chlorophyll content of Arabidopsis thaliana over a four-week period?',
    category: 'Environmental Science',
    difficulty: 'intermediate',
    keywords: ['microplastics', 'plant growth', 'soil contamination', 'environmental impact'],
    featured: true,
    created_at: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'AI-Based Cough Detection for Bronchitis Prediction',
    description: 'Can machine learning trained on audio files of coughs accurately predict whether a patient has bronchitis?',
    category: 'Computer Science',
    difficulty: 'advanced',
    keywords: ['machine learning', 'audio analysis', 'medical diagnosis', 'neural networks'],
    featured: true,
    created_at: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    title: 'Graphene Oxide Water Filters for Lead Removal',
    description: 'How does graphene oxide coating thickness affect the efficiency of lead removal from contaminated water in lab-constructed filters?',
    category: 'Chemistry',
    difficulty: 'advanced',
    keywords: ['water treatment', 'graphene oxide', 'filtration', 'heavy metals', 'nanotechnology'],
    featured: false,
    created_at: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    title: 'CRISPR-Cas9 Efficiency Across Different Guide RNA Designs',
    description: 'How does CRISPR-Cas9 efficiency vary across different guide RNA designs?',
    category: 'Biology',
    difficulty: 'advanced',
    keywords: ['genetic engineering', 'CRISPR', 'molecular biology', 'gene editing'],
    featured: false,
    created_at: '2024-01-05T00:00:00Z',
  },
  {
    id: '6',
    title: 'Resistance Training Protocols and Grip Strength Development',
    description: 'Which resistance training protocol produces the greatest increase in grip strength among high school athletes?',
    category: 'Sports Science',
    difficulty: 'beginner',
    keywords: ['exercise', 'strength training', 'fitness', 'athletic performance'],
    featured: false,
    created_at: '2024-01-06T00:00:00Z',
  },
  {
    id: '7',
    title: 'Coastal Town Flooding Simulation and Sea-Wall Modeling',
    description: 'How will different sea-wall heights and storm-surge levels impact neighborhood flooding in coastal communities?',
    category: 'Earth Science',
    difficulty: 'advanced',
    keywords: ['climate change', 'flooding', 'infrastructure', 'simulation', 'coastal science'],
    featured: false,
    created_at: '2024-01-07T00:00:00Z',
  },
  {
    id: '8',
    title: 'Urban Light Pollution Effects on Nocturnal Bat Activity',
    description: 'How does urban light pollution influence the activity patterns of nocturnal bats using passive acoustic sensors?',
    category: 'Ecology',
    difficulty: 'intermediate',
    keywords: ['light pollution', 'wildlife behavior', 'environmental science', 'monitoring'],
    featured: false,
    created_at: '2024-01-08T00:00:00Z',
  },
  {
    id: '9',
    title: 'Physical vs. Digital Reading and Information Retention',
    description: 'Do high school students retain information better when reading from a physical textbook versus a digital screen?',
    category: 'Psychology',
    difficulty: 'beginner',
    keywords: ['learning', 'reading comprehension', 'educational technology', 'cognition'],
    featured: false,
    created_at: '2024-01-09T00:00:00Z',
  },
  {
    id: '10',
    title: 'Bioplastic Decomposition Rates in Controlled Composting',
    description: 'Can bioplastics be successfully composted, and what are their decomposition rates in controlled conditions?',
    category: 'Environmental Science',
    difficulty: 'intermediate',
    keywords: ['sustainability', 'biodegradable materials', 'composting', 'environmental impact'],
    featured: true,
    created_at: '2024-01-10T00:00:00Z',
  },
  {
    id: '11',
    title: 'Biochar Concentration Effects on Nitrate Removal',
    description: 'How does biochar concentration affect nitrate removal from agricultural runoff?',
    category: 'Environmental Science',
    difficulty: 'intermediate',
    keywords: ['water quality', 'agriculture', 'biochar', 'pollution reduction'],
    featured: false,
    created_at: '2024-01-11T00:00:00Z',
  },
  {
    id: '12',
    title: 'Soil Composition Impact on Plant Water Retention',
    description: 'How do different soil types (clay, sand, loam) affect water retention and plant health?',
    category: 'Earth Science',
    difficulty: 'beginner',
    keywords: ['soil science', 'water management', 'agriculture', 'plant growth'],
    featured: false,
    created_at: '2024-01-12T00:00:00Z',
  },
  {
    id: '13',
    title: 'Yeast Fermentation Rate and Sugar Concentration',
    description: 'Does sugar concentration affect the rate of yeast fermentation?',
    category: 'Biology',
    difficulty: 'beginner',
    keywords: ['fermentation', 'microbiology', 'enzyme activity', 'metabolic processes'],
    featured: false,
    created_at: '2024-01-13T00:00:00Z',
  },
  {
    id: '14',
    title: 'Light Wavelength Effects on Photosynthetic Rates',
    description: 'How does light wavelength affect photosynthesis rates in plants?',
    category: 'Biology',
    difficulty: 'advanced',
    keywords: ['photosynthesis', 'light spectrum', 'plant physiology', 'energy conversion'],
    featured: false,
    created_at: '2024-01-14T00:00:00Z',
  },
  {
    id: '15',
    title: 'Natural Antibacterial Substances Against Bacteria Growth',
    description: 'Can natural substances like vinegar, lemon, and garlic effectively inhibit bacterial growth?',
    category: 'Biology',
    difficulty: 'intermediate',
    keywords: ['microbiology', 'natural remedies', 'antibacterial properties', 'organic compounds'],
    featured: false,
    created_at: '2024-01-15T00:00:00Z',
  },
]

export function getTopics(): Topic[] {
  return topics
}

export function getTopicsByDifficulty(difficulty: Topic['difficulty']): Topic[] {
  return topics.filter(topic => topic.difficulty === difficulty)
}

export function getTopicsByCategory(category: string): Topic[] {
  return topics.filter(topic => topic.category === category)
}

export function getFeaturedTopics(): Topic[] {
  return topics.filter(topic => topic.featured)
}

export function searchTopics(query: string): Topic[] {
  const lowerQuery = query.toLowerCase()
  return topics.filter(
    topic =>
      topic.title.toLowerCase().includes(lowerQuery) ||
      topic.description.toLowerCase().includes(lowerQuery) ||
      topic.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  )
}
