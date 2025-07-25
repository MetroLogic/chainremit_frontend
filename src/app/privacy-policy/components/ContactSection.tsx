import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactSection = () => (
    <Card className="mt-12 bg-gradient-to-r from-white to-white dark:from-[#2961ea] dark:via-[#4e51ea] dark:to-[#8e35e9]">
    <CardContent className="p-8 text-center">
      <Mail className="w-12 h-12 text-blue-600 dark:text-white mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
        className="bg-white text-blue-600 border dark:text-blue-400"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
            <Link href="mailto:legal@starkremit.com">Email Privacy Team</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ContactSection;
