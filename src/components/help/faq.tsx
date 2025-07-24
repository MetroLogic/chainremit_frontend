"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Faq({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full mx-auto px-4 py-4">
      <h1 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 cursor-pointer text-left flex items-center justify-between hover:bg-slate-700/70 transition-colors duration-200"
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-2 border-t border-slate-600">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
