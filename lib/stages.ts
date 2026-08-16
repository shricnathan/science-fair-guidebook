import { Stage } from '@/types'

export const stages: Stage[] = [
  {
    id: '1',
    name: 'Planning & Preparation',
    description: 'Lay the foundation for your project by defining your question and planning your approach.',
    timeline: '1-2 weeks',
    checklist_items: [
      'Choose a topic that interests you',
      'Develop a clear research question',
      'Research existing knowledge on your topic',
      'Identify variables to test',
      'Create a project timeline',
      'Gather necessary materials and resources',
      'Get approval from teacher/guardian if needed',
    ],
    tips: [
      'Pick a topic you\'re genuinely curious about - you\'ll spend a lot of time on it',
      'Make sure your question is specific and testable',
      'Start with a smaller scope and expand if you have time',
      'Keep a project notebook from day one',
    ],
    common_mistakes: [
      'Choosing a topic that\'s too broad or too narrow',
      'Not researching what\'s already known about the topic',
      'Underestimating the time needed for the project',
      'Forgetting to consider safety requirements',
    ],
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Research & Design',
    description: 'Conduct background research and design your experiment with proper controls and variables.',
    timeline: '2-3 weeks',
    checklist_items: [
      'Read at least 5 scientific sources on your topic',
      'Write a literature review summarizing key findings',
      'Define your independent, dependent, and control variables',
      'Create a detailed experimental procedure',
      'Design data collection sheets',
      'Conduct a preliminary/trial run if possible',
      'Get experimental design reviewed by a mentor',
    ],
    tips: [
      'Use peer-reviewed sources for credibility',
      'Document all sources with proper citations',
      'Make your procedure detailed enough that someone else could replicate it',
      'Identify potential sources of error in advance',
    ],
    common_mistakes: [
      'Relying only on internet sources without scholarly validation',
      'Having too many variables to test',
      'Not accounting for control variables',
      'Writing a procedure that\'s too vague to follow',
    ],
    created_at: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    name: 'Execution & Data Collection',
    description: 'Conduct your experiment carefully and systematically collect accurate data.',
    timeline: '2-4 weeks',
    checklist_items: [
      'Review safety procedures and equipment',
      'Set up your experimental apparatus',
      'Conduct trials according to your procedure',
      'Record all observations and measurements',
      'Maintain consistency in data collection',
      'Take photos/videos of key moments',
      'Keep detailed notes on any unexpected events',
      'Collect sufficient data for analysis',
    ],
    tips: [
      'Take detailed notes during each trial',
      'Record data in real-time, not from memory',
      'Use consistent units and formatting for all measurements',
      'Replicate your experiment multiple times for reliability',
      'Maintain the same conditions across all trials',
    ],
    common_mistakes: [
      'Changing procedures mid-experiment',
      'Not recording enough data points',
      'Forgetting to note environmental factors that might affect results',
      'Performing too few trials',
    ],
    created_at: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    name: 'Analysis & Interpretation',
    description: 'Analyze your data and draw conclusions about your hypothesis.',
    timeline: '1-2 weeks',
    checklist_items: [
      'Organize all collected data',
      'Calculate relevant statistics (mean, median, standard deviation)',
      'Create graphs and charts to visualize data',
      'Analyze patterns and trends in your data',
      'Compare your results to your hypothesis',
      'Identify sources of error and limitations',
      'Draw evidence-based conclusions',
      'Suggest future research directions',
    ],
    tips: [
      'Use multiple ways to visualize your data',
      'Don\'t just state what the data shows - explain what it means',
      'Acknowledge limitations honestly',
      'Think about alternative explanations for your results',
    ],
    common_mistakes: [
      'Ignoring data that doesn\'t support your hypothesis',
      'Drawing conclusions not supported by your data',
      'Forgetting to discuss sources of error',
      'Making claims beyond what your data can support',
    ],
    created_at: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    name: 'Poster & Report Preparation',
    description: 'Present your findings effectively through a poster and written report.',
    timeline: '1-2 weeks',
    checklist_items: [
      'Write a clear project summary',
      'Design your science fair poster layout',
      'Create visually appealing graphs and charts',
      'Write your conclusion section',
      'Prepare a written research report',
      'Have someone proofread your work',
      'Create backups of all files',
      'Practice presenting your poster',
    ],
    tips: [
      'Use large, readable fonts on your poster',
      'Include pictures and visuals - text only is boring',
      'Tell a clear story from question to conclusion',
      'Keep text concise - people won\'t read a wall of words',
      'Make sure your poster is organized and easy to follow',
    ],
    common_mistakes: [
      'Overcrowding the poster with too much information',
      'Using charts that are difficult to understand',
      'Forgetting to include your research question or conclusion',
      'Poor spelling or grammar on the poster',
    ],
    created_at: '2024-01-05T00:00:00Z',
  },
  {
    id: '6',
    name: 'Judging & Presentation',
    description: 'Present your project to judges and effectively communicate your findings.',
    timeline: '1 day',
    checklist_items: [
      'Practice your presentation and timing',
      'Prepare answers to potential judge questions',
      'Set up your display area neatly',
      'Bring all necessary materials and backups',
      'Dress appropriately for the event',
      'Arrive early to set up',
      'Be ready to explain your work clearly',
      'Collect any certificates or awards',
    ],
    tips: [
      'Practice your explanation until it feels natural',
      'Know your project inside and out',
      'Be enthusiastic about your work',
      'Listen carefully to judge questions',
      'Answer honestly - don\'t make things up',
      'Stay calm and confident',
    ],
    common_mistakes: [
      'Memorizing a speech that sounds robotic',
      'Not knowing details about your own experiment',
      'Getting defensive if questioned',
      'Talking too fast or mumbling',
      'Giving answers that are too technical for judges to understand',
    ],
    created_at: '2024-01-06T00:00:00Z',
  },
]

export function getStages(): Stage[] {
  return stages
}

export function getStageByName(name: string): Stage | undefined {
  return stages.find(stage => stage.name === name)
}

export function getAllStageNames(): string[] {
  return stages.map(stage => stage.name)
}
