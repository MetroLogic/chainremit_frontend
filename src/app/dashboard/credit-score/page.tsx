import {
  Download,
  TrendingDown,
  TrendingUp,
  Clock,
  CircleCheckBig,
  Users,
  CreditCard,
} from "lucide-react";

const CreditScoreDashboard = () => {
  const scoreData = [
    {
      label: "Payment History",
      weight: 35,
      score: 85,
      rating: "excellent",
    },
    {
      label: "Loan Utilization",
      weight: 30,
      score: 72,
      rating: "good",
    },
    {
      label: "Group Activity",
      weight: 20,
      score: 90,
      rating: "excellent",
    },
    {
      label: "On-chain Tenure",
      weight: 15,
      score: 65,
      rating: "fair",
    },
  ];

  const creditActivity = [
    {
      icon: <TrendingUp size={20} />,
      title: "Loan repayment",
      date: "Dec 10, 2024",
      points: "+15 points",
      bgcolor: "bg-green-500",
      textcolor: "text-green-500",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Group contribution",
      date: "Dec 8, 2024",
      points: "+8 points",
      bgcolor: "bg-green-500",
      textcolor: "text-green-500",
    },
    {
      icon: <TrendingDown size={20} />,
      title: "Missed payment",
      date: "Nov 25, 2024",
      points: "-12 points",
      bgcolor: "bg-red-400",
      textcolor: "text-red-400",
    },
    {
      icon: <Clock size={20} />,
      title: "New loan taken",
      date: "Nov 20, 2024",
      points: "-5 points",
      bgcolor: "bg-slate-700",
      textcolor: "text-slate-700",
    },
  ];

  const improveScore = [
    {
      icon: <CircleCheckBig size={20} />,
      title: "Make timely payments",
      description: "Pay your loans on time to build a strong payment history",
      bgcolor: "bg-blue-900",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Keep utilization low",
      description: "Don't max out your available credit limits",
      bgcolor: "bg-purple-900",
    },
    {
      icon: <Users size={20} />,
      title: "Join saving groups",
      description:
        "Active participation in saving circles shows financial discipline",
      bgcolor: "bg-green-900",
    },
    {
      icon: <Clock size={20} />,
      title: "Build credit history",
      description: "Longer on-chain activity history improves your score",
      bgcolor: "bg-orange-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Credit Score
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Track your on-chain financial reputation and creditworthiness
          </p>
        </div>

        {/* Credit Score and Breakdown - Responsive Layout */}
        <div className="pb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Your Credit Score */}
            <div className="w-full lg:w-1/3 border border-gray-200 dark:border-gray-700 p-6 text-center rounded-lg bg-white dark:bg-gray-800">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Your Credit Score
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Based on on-chain activity
              </p>
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-8 border-blue-600 mx-auto flex items-center justify-center mb-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    742
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    out of 850
                  </p>
                </div>
              </div>
              <div className="inline-block bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full font-semibold mb-2">
                <span className="text-gray-900 dark:text-white">
                  Trust Level: A+
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Excellent Credit
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="w-full lg:w-2/3 border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Score Breakdown
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Factors affecting your credit score
              </p>
              <div className="space-y-4">
                {scoreData.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </span>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                          {item.weight}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.score}%
                        </span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            item.rating === "excellent"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : item.rating === "good"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div
                        className="h-full bg-gray-900 dark:bg-white transition-all duration-300"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Credit Activity */}
        <div className="pb-6">
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <div className="pb-4">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Recent Credit Activity
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Actions that affect your credit score
              </p>
            </div>
            <div className="space-y-3">
              {creditActivity.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 py-3 px-4 rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className="flex items-center gap-4">
                      <div
                        className={`${item.bgcolor} rounded-full p-2 text-white flex-shrink-0`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${item.textcolor} font-medium flex-shrink-0`}
                    >
                      {item.points}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ways to Improve Your Score */}
        <div className="pb-6">
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <div className="pb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Ways to Improve Your Score
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Actionable steps to boost your credit rating
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {improveScore.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 border border-gray-200 dark:border-gray-700 ${item.bgcolor} rounded-lg`}
                >
                  <div className="flex items-start gap-3 text-white">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Your Credit Score */}
        <div className="pb-6">
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
            <div className="pb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Export Your Credit Score
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Download a verified report of your on-chain credit history
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Verified Credit Report
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cryptographically signed report for external verification
                </p>
              </div>
              <button className="flex items-center justify-center rounded-lg gap-3 py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer">
                <Download size={18} />
                <span className="font-medium">Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreDashboard;
