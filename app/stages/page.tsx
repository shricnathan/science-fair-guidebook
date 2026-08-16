'use client'

import { useState } from 'react'
import { getStages } from '@/lib/data'

export default function StagesPage() {
  const stages = getStages()
  const [expandedId, setExpandedId] = useState<string | null>(stages[0]?.id || null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo via-indigo to-indigo text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Project Stages
          </h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            A detailed guide through each stage of your science fair project
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 bg-indigo">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-5">
            {stages.map((stage) => (
              <div key={stage.id} className="border-2 border-cyan/30 rounded-lg overflow-hidden hover:border-cyan/60 transition-all duration-300">
                <button
                  onClick={() => setExpandedId(expandedId === stage.id ? null : stage.id)}
                  className="w-full bg-indigo/50 backdrop-blur-sm p-8 text-left hover:bg-indigo/70 transition-colors flex justify-between items-center group"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-cyan group-hover:text-pink transition-colors">{stage.name}</h2>
                    <p className="text-cool-gray text-sm mt-2 font-medium">⏱️ Timeline: {stage.timeline}</p>
                  </div>
                  <span className="text-3xl text-pink">
                    {expandedId === stage.id ? '−' : '+'}
                  </span>
                </button>

                {expandedId === stage.id && (
                  <div className="bg-sage p-8 border-t-2 border-cyan/30">
                    <p className="text-near-black mb-8 leading-relaxed">{stage.description}</p>

                    <div className="mb-8">
                      <h3 className="font-bold text-near-black mb-4 text-lg uppercase tracking-wide">✓ Checklist</h3>
                      <ul className="space-y-3">
                        {stage.checklist_items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <input
                              type="checkbox"
                              className="mr-3 mt-1.5 cursor-pointer accent-cyan"
                              id={`checklist-${stage.id}-${idx}`}
                            />
                            <label htmlFor={`checklist-${stage.id}-${idx}`} className="cursor-pointer text-near-black">
                              {item}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-bold text-near-black mb-4 text-lg uppercase tracking-wide">💡 Tips</h3>
                      <ul className="space-y-3">
                        {stage.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start p-3 bg-indigo/20 rounded border-l-4 border-purple">
                            <span className="mr-3 text-lg flex-shrink-0">💡</span>
                            <span className="text-near-black">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-near-black mb-4 text-lg uppercase tracking-wide">⚠️ Common Mistakes</h3>
                      <ul className="space-y-3">
                        {stage.common_mistakes.map((mistake, idx) => (
                          <li key={idx} className="flex items-start p-3 bg-pink/10 rounded border-l-4 border-pink">
                            <span className="mr-3 text-lg flex-shrink-0">⚠️</span>
                            <span className="text-near-black">{mistake}</span>
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
      <section className="bg-gradient-to-r from-indigo via-indigo to-indigo text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to get started?</h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Download our templates and browse project ideas to find the perfect topic for you. You've got this! 🚀
          </p>
        </div>
      </section>
    </div>
  )
}
