import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface TableOfContentsProps {
  sections: Section[];
}
// #09090b

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => (
  <Card className="mb-12">
    <CardHeader>
      <CardTitle className="flex items-center">
        <FileText className="mr-2 w-5 h-5" />
        Table of Contents
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              {section.icon}
            </div>
            <span className="font-medium text-black dark:text-white">
              {section.title}
            </span>
          </Link>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default TableOfContents;
