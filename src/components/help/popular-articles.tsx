"use client"

import { ArrowRight } from "lucide-react"


export default function PopularArticles({ articlesData }: { articlesData: { title: string; category: string; views: string; href: string }[] }) {
  const handleArticleClick = (href: string) => {
    console.log(`Navigating to: ${href}`)
  }

  return (
    <div className="w-full mx-auto px-4 py-4">
      <h1 className="text-2xl font-semibold text-white mb-8">Popular Articles</h1>

      <div className="space-y-4">
        {articlesData.map((article, index) => (
          <div
            key={index}
            onClick={() => handleArticleClick(article.href)}
            className="group border border-white rounded-lg bg-black p-4 cursor-pointer hover:bg-black/70 hover:border-slate-500 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-white font-medium text-lg mb-3 group-hover:text-slate-100">{article.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-white">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">{article.views}</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
