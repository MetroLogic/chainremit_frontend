import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import { Shield } from "lucide-react";
import { title } from 'process';


const content = [
    {
        key:1,
        title: "What we collect",
        text: "Personal information, usage data and blockchain transaction data necessary for providing to services.",
    },
    {
        key: 2,
        title: "How we use it",
        text: "To provide financial services, ensure security, comply with regulations and improve our platform.",
    },
    {
        key: 3,
        title: "Your Control",
        text: "You can access, correct or delete your data and control how we communicate with you."
    },
];


const PrivacyGlance = () => (
    <Card className="scroll-mt-20 mb-20 bg-gradient-to-r from-white to-white dark:from-[#19203d] dark:via-[#1c1f3e] dark:to-[#251f41]">
    <CardHeader className="mr-4">
            <CardTitle className="flex text-black dark:text-white  items-center">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                <Shield className=" w-5 h-5" />
            </div>
            Privacy at a Glance
        </CardTitle>
    </CardHeader>
    <CardContent className="space-x-4  ml-10 flex flex-col md:flex-row gap-4">
      {content.map((item) => (
        <div
          key={item.key}
          className="text-black dark:text-gray-300 leading-relaxed"
        >
              <p className="font-bold text-black dark:text-white mb-3">{item.title}</p>
          <p className="text-black dark:text-white">{item.text}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default PrivacyGlance;
