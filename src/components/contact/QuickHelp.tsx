"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, FileText, Settings, CreditCard } from "lucide-react";

const QuickHelp = () => {
  const helpCategories = [
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Account, payments, and general questions",
      link: "/help/general",
      bgColor: "bg-blue-500",
    },
    {
      icon: Settings,
      title: "Technical Issues",
      description: "App bugs, connectivity, and technical problems",
      link: "/help/technical",
      bgColor: "bg-purple-500",
    },
    {
      icon: CreditCard,
      title: "Feature Request",
      description: "Suggestions for new features and improvements",
      link: "/help/features",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Quick Help
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Looking for immediate answers? Check out our help categories
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {helpCategories.map((category, idx) => (
          <Card
            key={idx}
            className="hover:shadow-lg transition-shado border-1 border-white dark:border-slate-600"
          >
            <CardContent className="p-6 text-center">
              <div
                className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              <Button variant="outline" asChild className="w-full">
                <a href={category.link}>Browse Articles</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickHelp;
