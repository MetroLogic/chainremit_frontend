import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactSection = () => (
  <Card className="mt-12">
    <CardContent className="p-8 text-center">
      <Scale className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        If you have any questions about these Terms of Service, please contact
        our legal team.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="mailto:legal@starkremit.com">Email Legal Team</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ContactSection;
