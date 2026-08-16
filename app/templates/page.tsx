import TemplateCard from '@/components/TemplateCard'
import { getTemplates } from '@/lib/data'

export default function TemplatesPage() {
  const templates = getTemplates()

  const stages = Array.from(new Set(templates.map((t) => t.stage)))

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-purple text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Downloadable Templates</h1>
          <p className="text-lg opacity-90">
            Free resources to help you organize and present your project
          </p>
        </div>
      </section>

      {/* Templates */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {stages.map((stage) => (
            <div key={stage} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-navy">{stage}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {templates
                  .filter((t) => t.stage === stage)
                  .map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lightGray py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">All templates are free to download</h2>
          <p className="text-gray-600">
            Use these templates to organize your project at every stage. They work with Google Docs,
            Microsoft Word, and most other office software.
          </p>
        </div>
      </section>
    </div>
  )
}
