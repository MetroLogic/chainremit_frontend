import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const ImportantNotice = () => (
  <Card className="mb-12 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
    <CardContent className="p-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1" />
        <div>
          <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
            Important Notice
          </h3>
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            These terms contain important information about your rights and
            obligations. Please read them carefully. By using StarkRemit, you
            agree to be bound by these terms. If you don't agree, please don't
            use our services.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ImportantNotice;
