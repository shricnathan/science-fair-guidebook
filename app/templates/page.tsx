import TemplateCard from '@/components/TemplateCard'
import { getTemplates } from '@/lib/data'

export default function TemplatesPage() {
  const templates = getTemplates()

  const stages = Array.from(new Set(templates.map((t) => t.stage)))

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo via-indigo to-indigo text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Downloadable Templates
          </h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Free resources to help you organize and present your project
          </p>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 bg-indigo">
        <div className="container mx-auto px-4">
          {stages.map((stage) => (
            <div key={stage} className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-cyan">{stage}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
      <section className="bg-sage py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-near-black">All templates are free to download</h2>
          <p className="text-cool-gray text-lg leading-relaxed max-w-2xl mx-auto">
            Use these templates to organize your project at every stage. They work with Google Docs,
            Microsoft Word, and most other office software. Download them now and get started!
          </p>
        </div>
      </section>
    </div>
  )
}
