"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  Database,
  Shield,
  Calendar,
  Clock,
} from "lucide-react";

export default function ExportSection() {
  const [exportProgress, setExportProgress] = useState<{
    [key: string]: number;
  }>({});
  const [exportStatus, setExportStatus] = useState<{
    [key: string]: "idle" | "processing" | "completed";
  }>({});

  const generateCSV = (data: any[], filename: string) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((row) => Object.values(row).join(",")).join("\n");
    const csv = `${headers}\n${rows}`;

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generateJSON = (data: any, filename: string) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generatePDF = (content: string, filename: string) => {
    // Simple text-based PDF content
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length ${content.length + 50}
>>
stream
BT
/F1 12 Tf
50 750 Td
(${content}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000173 00000 n 
0000000301 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
${400 + content.length}
%%EOF`;

    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExport = async (type: string) => {
    setExportStatus((prev) => ({ ...prev, [type]: "processing" }));
    setExportProgress((prev) => ({ ...prev, [type]: 0 }));

    // Simulate export progress
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        const currentProgress = prev[type] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setExportStatus((prevStatus) => ({
            ...prevStatus,
            [type]: "completed",
          }));

          // Generate actual file based on type
          setTimeout(() => {
            switch (type) {
              case "transactions":
                const transactionData = [
                  {
                    date: "2024-12-28",
                    type: "Send",
                    amount: "-0.5 ETH",
                    to: "0x123...abc",
                    status: "Completed",
                  },
                  {
                    date: "2024-12-27",
                    type: "Receive",
                    amount: "+1.2 ETH",
                    from: "0x456...def",
                    status: "Completed",
                  },
                  {
                    date: "2024-12-26",
                    type: "Swap",
                    amount: "100 USDC → 0.03 ETH",
                    platform: "Uniswap",
                    status: "Completed",
                  },
                ];
                generateCSV(transactionData, "transaction-history.csv");
                break;

              case "credit-score":
                const creditReport = `CREDIT SCORE REPORT
Generated: ${new Date().toLocaleDateString()}

Current Score: 750
Credit Utilization: 25%
Payment History: Excellent
Account Age: 2 years
Recent Activity: 3 transactions this month

Detailed History:
- Nov 2024: Score 745
- Oct 2024: Score 740
- Sep 2024: Score 735`;
                generatePDF(creditReport, "credit-score-report.pdf");
                break;

              case "profile-data":
                const profileData = {
                  profile: {
                    displayName: "John Doe",
                    email: "john.doe@example.com",
                    phone: "+1 (555) 123-4567",
                    location: "San Francisco, CA",
                    timezone: "Pacific Standard Time (PST)",
                    walletAddress: "0xabc123...def789",
                    starknetId: "johndoe.stark",
                    memberSince: "November 2024",
                    kycStatus: "Verified",
                  },
                  preferences: {
                    language: "English",
                    theme: "Dark",
                    currency: "USD",
                    notifications: true,
                  },
                  exportDate: new Date().toISOString(),
                };
                generateJSON(profileData, "profile-data.json");
                break;

              case "backup":
                const backupData = {
                  profile: {
                    displayName: "John Doe",
                    email: "john.doe@example.com",
                  },
                  transactions: [{ date: "2024-12-28", amount: "-0.5 ETH" }],
                  settings: { theme: "dark", language: "en" },
                  exportDate: new Date().toISOString(),
                  version: "1.0",
                };
                generateJSON(backupData, "complete-backup.json");
                break;
            }
          }, 500);

          return prev;
        }
        return { ...prev, [type]: currentProgress + 10 };
      });
    }, 200);
  };

  const exportItems = [
    {
      id: "transactions",
      title: "Transaction History Export",
      description:
        "Download complete transaction history with timestamps and amounts",
      icon: FileText,
      format: "CSV",
    },
    {
      id: "credit-score",
      title: "Credit Score Export",
      description:
        "Download comprehensive report of your credit history and score",
      icon: Shield,
      format: "PDF",
    },
    {
      id: "profile-data",
      title: "Profile Data Export",
      description: "Export all profile information, settings, and preferences",
      icon: Database,
      format: "JSON",
    },
    {
      id: "backup",
      title: "Complete Backup Creation",
      description: "Create a full backup of all account data and settings",
      icon: Download,
      format: "JSON",
    },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      <Card className="bg-gray-50 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Download className="h-5 w-5 mr-2" />
            Data Export & Backup
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Download your account data and transaction history
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 lg:space-y-6">
          {exportItems.map((item) => {
            const Icon = item.icon;
            const progress = exportProgress[item.id] || 0;
            const status = exportStatus[item.id] || "idle";

            return (
              <div
                key={item.id}
                className="p-3 lg:p-4 bg-gray-100 dark:bg-black rounded-lg space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="h-8 w-8 lg:h-10 lg:w-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mt-1 break-words">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {item.format}
                        </Badge>
                        {status === "completed" && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs"
                          >
                            Ready for Download
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant={status === "completed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleExport(item.id)}
                    disabled={status === "processing"}
                    className=" cursor-pointer w-full sm:w-auto border-gray-300 dark:border-gray-700"
                  >
                    {status === "processing" ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        <span className="hidden sm:inline">Processing...</span>
                        <span className="sm:hidden">Processing</span>
                      </>
                    ) : status === "completed" ? (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </>
                    )}
                  </Button>
                </div>

                {status === "processing" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Preparing export...
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {progress}%
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Export History */}
      <Card className="bg-gray-50 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Calendar className="h-5 w-5 mr-2" />
            Export History
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Previous exports and downloads
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-100 dark:bg-black rounded-lg space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <FileText className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                    Transaction History
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                    Exported on Dec 25, 2024
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer w-full sm:w-auto bg-transparent border-gray-300 dark:border-gray-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Re-download
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-100 dark:bg-black rounded-lg space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                    Credit Score Report
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                    Exported on Dec 20, 2024
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer w-full sm:w-auto bg-transparent border-gray-300 dark:border-gray-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Re-download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
