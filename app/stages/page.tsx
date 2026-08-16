'use client'

import { useState } from 'react'
import { getStages } from '@/lib/data'

export default function StagesPage() {
  const stages = getStages()
  const [expandedId, setExpandedId] = useState<string | null>(stages[0]?.id || null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple via-magenta to-cyan bg-clip-text text-transparent">
              Project Stages
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A detailed guide through each stage of your science fair project
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-4">
            {stages.map((stage) => (
              <div key={stage.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedId(expandedId === stage.id ? null : stage.id)}
                  className="w-full bg-white p-6 text-left hover:bg-lightGray transition-colors flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-navy">{stage.name}</h2>
                    <p className="text-gray-600 text-sm mt-1">Timeline: {stage.timeline}</p>
                  </div>
                  <span className="text-2xl text-cyan">
                    {expandedId === stage.id ? '−' : '+'}
                  </span>
                </button>

                {expandedId === stage.id && (
                  <div className="bg-lightGray p-6 border-t border-gray-200">
                    <p className="text-gray-700 mb-6">{stage.description}</p>

                    <div className="mb-6">
                      <h3 className="font-bold text-navy mb-3 text-lg">Checklist</h3>
                      <ul className="space-y-2">
                        {stage.checklist_items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <input
                              type="checkbox"
                              className="mr-3 mt-1 cursor-pointer"
                              id={`checklist-${stage.id}-${idx}`}
                            />
                            <label htmlFor={`checklist-${stage.id}-${idx}`} className="cursor-pointer">
                              {item}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-navy mb-3 text-lg">Tips</h3>
                      <ul className="space-y-2">
                        {stage.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-3">💡</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-navy mb-3 text-lg">Common Mistakes to Avoid</h3>
                      <ul className="space-y-2">
                        {stage.common_mistakes.map((mistake, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-pink mr-3">⚠️</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="opacity-90 mb-6">
            Download our templates and browse project ideas to find the perfect topic for you.
          </p>
        </div>
      </section>
    </div>
  )
}
