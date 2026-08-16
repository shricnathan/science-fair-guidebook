import { Template } from '@/types'

interface TemplateCardProps {
  template: Template
}

const fileTypeIcons = {
  pdf: '📄',
  docx: '📝',
  xlsx: '📊',
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-gold font-semibold mb-2">{template.stage}</p>
          <h3 className="text-lg font-bold text-navy">{template.title}</h3>
        </div>
        <span className="text-3xl">{fileTypeIcons[template.file_type]}</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
      <a
        href={template.download_url}
        className="inline-block bg-cyan text-navy px-4 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
      >
        Download {template.file_type.toUpperCase()}
      </a>
    </div>
  )
}
