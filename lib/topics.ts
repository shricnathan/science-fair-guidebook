import { Topic } from '@/types'

export const topics: Topic[] = [
  {
    id: '1',
    title: 'How Does Temperature Affect Plant Growth?',
    description: 'Investigate how different temperatures impact the growth rate of seedlings over a 4-week period.',
    category: 'Biology',
    difficulty: 'beginner',
    keywords: ['plants', 'temperature', 'growth', 'seeds'],
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Does Water pH Affect Seed Germination?',
    description: 'Test how different pH levels of water influence the germination rate and growth of bean seeds.',
    category: 'Chemistry',
    difficulty: 'beginner',
    keywords: ['seeds', 'pH', 'germination', 'water'],
    featured: true,
    created_at: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Which Color Light Promotes Plant Growth Best?',
    description: 'Compare how different colored lights (red, blue, green, white) affect the growth of seedlings.',
    category: 'Physics',
    difficulty: 'intermediate',
    keywords: ['light', 'color', 'plants', 'photosynthesis'],
    featured: false,
    created_at: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    title: 'How Do Different Soils Affect Water Retention?',
    description: 'Analyze how different soil types (clay, sand, loam) retain water and how this affects plant health.',
    category: 'Earth Science',
    difficulty: 'intermediate',
    keywords: ['soil', 'water', 'absorption', 'permeability'],
    featured: false,
    created_at: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    title: 'Does Sugar Concentration Affect Yeast Fermentation?',
    description: 'Investigate how different sugar concentrations influence the rate of yeast fermentation.',
    category: 'Biology',
    difficulty: 'intermediate',
    keywords: ['yeast', 'fermentation', 'sugar', 'microorganisms'],
    featured: true,
    created_at: '2024-01-05T00:00:00Z',
  },
  {
    id: '6',
    title: 'How Does Exercise Impact Heart Rate Recovery?',
    description: 'Measure and compare heart rate recovery times after different types and intensities of exercise.',
    category: 'Biology',
    difficulty: 'beginner',
    keywords: ['heart rate', 'exercise', 'fitness', 'cardiovascular'],
    featured: false,
    created_at: '2024-01-06T00:00:00Z',
  },
  {
    id: '7',
    title: 'Which Material Insulates Heat Best?',
    description: 'Test different materials to determine which one best prevents heat loss from a container.',
    category: 'Physics',
    difficulty: 'beginner',
    keywords: ['heat', 'insulation', 'materials', 'thermal'],
    featured: true,
    created_at: '2024-01-07T00:00:00Z',
  },
  {
    id: '8',
    title: 'How Does Salt Concentration Affect Water Density?',
    description: 'Explore the relationship between salt concentration and water density using measurements and calculations.',
    category: 'Chemistry',
    difficulty: 'intermediate',
    keywords: ['salt', 'density', 'water', 'solutions'],
    featured: false,
    created_at: '2024-01-08T00:00:00Z',
  },
  {
    id: '9',
    title: 'Can Bacteria Growth Be Controlled with Natural Substances?',
    description: 'Test the antibacterial properties of common household substances like vinegar, lemon, and garlic.',
    category: 'Biology',
    difficulty: 'advanced',
    keywords: ['bacteria', 'antibacterial', 'microorganisms', 'natural'],
    featured: false,
    created_at: '2024-01-09T00:00:00Z',
  },
  {
    id: '10',
    title: 'How Does pH Affect the Rate of Enzyme Activity?',
    description: 'Investigate how different pH levels impact enzyme-catalyzed reactions using real or simulated enzyme systems.',
    category: 'Chemistry',
    difficulty: 'advanced',
    keywords: ['enzymes', 'pH', 'reactions', 'biochemistry'],
    featured: false,
    created_at: '2024-01-10T00:00:00Z',
  },
  {
    id: '11',
    title: 'How Does Water Hardness Affect Soap Efficiency?',
    description: 'Test how different levels of water hardness impact the effectiveness of soap in cleaning.',
    category: 'Chemistry',
    difficulty: 'intermediate',
    keywords: ['water hardness', 'soap', 'cleaning', 'minerals'],
    featured: false,
    created_at: '2024-01-11T00:00:00Z',
  },
  {
    id: '12',
    title: 'Which Plant-Based Dye Works Best on Fabric?',
    description: 'Extract and test dyes from different plants to see which produces the most vibrant and lasting color.',
    category: 'Chemistry',
    difficulty: 'intermediate',
    keywords: ['dyes', 'plants', 'fabric', 'natural colors'],
    featured: true,
    created_at: '2024-01-12T00:00:00Z',
  },
  {
    id: '13',
    title: 'Does Surface Area Affect Evaporation Rate?',
    description: 'Compare evaporation rates of water from containers with different surface areas.',
    category: 'Physics',
    difficulty: 'beginner',
    keywords: ['evaporation', 'surface area', 'water', 'physics'],
    featured: false,
    created_at: '2024-01-13T00:00:00Z',
  },
  {
    id: '14',
    title: 'How Does Light Wavelength Affect Photosynthesis?',
    description: 'Measure photosynthetic rates of plants under different light wavelengths using oxygen production.',
    category: 'Biology',
    difficulty: 'advanced',
    keywords: ['photosynthesis', 'light', 'wavelength', 'oxygen'],
    featured: false,
    created_at: '2024-01-14T00:00:00Z',
  },
  {
    id: '15',
    title: 'Can Bioplastics Be Composted Successfully?',
    description: 'Test the decomposition rate of different bioplastic materials in controlled composting conditions.',
    category: 'Environmental Science',
    difficulty: 'advanced',
    keywords: ['bioplastics', 'composting', 'decomposition', 'environment'],
    featured: true,
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
