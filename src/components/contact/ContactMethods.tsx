"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

const ContactMethods = () => {
  // TODO: Move to config file if this grows
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@chainremit.com",
      action: "Send Email",
      href: "mailto:support@chainremit.com",
      bgColor: "bg-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat",
      href: "#", 
      bgColor: "bg-green-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm dark:bg-black border-1 border-white dark:border-white">
      <CardHeader>
        <CardTitle>Contact Methods</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Choose your preferred way to reach us
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactMethods.map((method, idx) => (
          <div
            key={idx}
            className="border border-gray-200 dark:border-white rounded-lg p-4"
          >
            <div className="flex items-start space-x-3">
              <div
                className={`w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {method.contact}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-2 w-full"
                >
                  <a href={method.href}>{method.action}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContactMethods;
