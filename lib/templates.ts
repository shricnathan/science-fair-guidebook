import { Template } from '@/types'

export const templates: Template[] = [
  {
    id: '1',
    title: 'Research Question Worksheet',
    description: 'A structured worksheet to help you develop a clear, testable research question for your project.',
    stage: 'Planning',
    file_name: 'research-question-worksheet.pdf',
    file_type: 'pdf',
    download_url: '/templates/research-question-worksheet.pdf',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Hypothesis & Prediction Template',
    description: 'Template for writing clear hypothesis statements and predictions based on your research question.',
    stage: 'Research',
    file_name: 'hypothesis-prediction-template.docx',
    file_type: 'docx',
    download_url: '/templates/hypothesis-prediction-template.docx',
    created_at: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Experiment Design Planner',
    description: 'Comprehensive planning tool for designing your experiment with controls, variables, and procedures.',
    stage: 'Design',
    file_name: 'experiment-design-planner.pdf',
    file_type: 'pdf',
    download_url: '/templates/experiment-design-planner.pdf',
    created_at: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    title: 'Lab Notebook Template',
    description: 'Professional lab notebook template for recording observations, data, and procedures during experiments.',
    stage: 'Execution',
    file_name: 'lab-notebook-template.docx',
    file_type: 'docx',
    download_url: '/templates/lab-notebook-template.docx',
    created_at: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    title: 'Poster Outline Checklist',
    description: 'Checklist and outline guide for organizing your science fair poster presentation effectively.',
    stage: 'Presentation',
    file_name: 'poster-outline-checklist.pdf',
    file_type: 'pdf',
    download_url: '/templates/poster-outline-checklist.pdf',
    created_at: '2024-01-05T00:00:00Z',
  },
]

export function getTemplates(): Template[] {
  return templates
}

export function getTemplatesByStage(stage: string): Template[] {
  return templates.filter(template => template.stage === stage)
}

export function searchTemplates(query: string): Template[] {
  const lowerQuery = query.toLowerCase()
  return templates.filter(
    template =>
      template.title.toLowerCase().includes(lowerQuery) ||
      template.description.toLowerCase().includes(lowerQuery)
  )
}
