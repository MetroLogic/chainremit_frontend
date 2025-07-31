import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: { text: string, title: string }[];
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  icon,
  content,
}) => (
    <Card id={id} className="scroll-mt-20">
    <CardHeader>
      <CardTitle className="flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
          {icon}
        </div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {content.map((item, idx) => (
        <div key={idx}>
            <p className="mb-4 font-bold text-black dark:text-white">{item.title}</p>
           <p          
             className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
            {item.text}
            </p> 
        </div>
        
      ))}
    </CardContent>
  </Card>
);

export default ContentSection;
