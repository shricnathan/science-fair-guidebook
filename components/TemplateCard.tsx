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
    <div className="bg-gradient-to-br from-sage to-sage/90 border border-cyan/30 rounded-lg p-8 hover:border-cyan/60 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-cyan/20 hover:scale-102">
      <div className="flex items-start justify-between mb-5">
        <div className="flex-1">
          <p className="text-xs font-bold text-purple uppercase tracking-widest mb-2">{template.stage}</p>
          <h3 className="text-lg font-bold text-near-black group-hover:text-purple transition-colors">{template.title}</h3>
        </div>
        <span className="text-4xl ml-4">{fileTypeIcons[template.file_type]}</span>
      </div>
      <p className="text-cool-gray mb-6 text-sm leading-relaxed">{template.description}</p>
      <a
        href={template.download_url}
        className="inline-block bg-gradient-to-r from-cyan to-pink text-indigo px-6 py-2.5 rounded font-bold hover:shadow-lg hover:shadow-cyan/40 transition-all duration-300 hover:scale-105 uppercase text-sm tracking-wide"
      >
        ⬇ Download {template.file_type.toUpperCase()}
      </a>
    </div>
  )
}
