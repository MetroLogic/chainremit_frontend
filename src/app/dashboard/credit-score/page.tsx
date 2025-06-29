import {
  Download,
  TrendingDown,
  TrendingUp,
  Clock,
  CircleCheckBig,
  Users,
  CreditCard,
} from "lucide-react";
const page = () => {
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
      bgcolor: "bg-[#0B153A]",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Keep utilization low",
      description: "Don't max out your available credit limits",
      bgcolor: "bg-[#2B1145]",
    },
    {
      icon: <Users size={20} />,
      title: "Join saving groups",
      description:
        "Active participation in saving circles shows financial discipline",
      bgcolor: "bg-[#102D23]",
    },
    {
      icon: <Clock size={20} />,
      title: "Build credit history",
      description: "Longer on-chain activity history improves your score",
      bgcolor: "bg-[#301A0E]",
    },
  ];

  return (
    <div>
      <div className="pb-6">
        <h1 className="text-[30px] font-semibold">Credit Score</h1>
        <p className="text-gray-300">
          Track your on-chain financial reputation and creditworthiness
        </p>
      </div>
      <div className="pb-6">
        <div className="flex gap-6">
          <div className="flex-1 border p-4 text-center rounded-lg">
            <h1 className="text-[26px] font-medium">Your Credit Score</h1>
            <p className="text-gray-400 mb-4">Based on on-chain activity</p>
            <div className="w-28 h-28 rounded-full border-10 border-blue-600 mx-auto flex items-center justify-center mb-4">
              <div>
                <p className="text-[24px] font-bold text-blue-400">742</p>
                <p className="text-[12px] text-gray-400">out of 850</p>
              </div>
            </div>
            <div className="inline-block bg-black/10 dark:bg-white/10 px-4 py-1 rounded-full font-semibold mb-1">
              Trust Level: A+
            </div>
            <p className="text-[14px] text-gray-300">Excellent Credit</p>
          </div>
          <div className="flex-3 border p-4 rounded-lg">
            <h1 className="text-[26px] font-medium">Score Breakdown</h1>
            <p className="text-gray-400 mb-4">
              Factors affecting your credit score
            </p>
            {scoreData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[12px] bg-white/10 px-3 py-0.5 rounded-full">
                      {item.weight}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{item.score}%</span>
                    <span
                      className={`text-xs px-3 py-0.75 rounded-full font-medium ${
                        item.rating === "excellent"
                          ? "bg-green-200 text-green-400"
                          : item.rating === "good"
                          ? "bg-blue-200 text-blue-400"
                          : "bg-yellow-200 text-yellow-500"
                      }`}
                    >
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="w-full h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-black dark:bg-white"
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="border p-4 rounded-lg">
          <div className="pb-4">
            <h1 className="text-[26px] font-medium">Recent Credit Activity</h1>
            <p className="text-gray-400">
              Actions that affect your credit score
            </p>
          </div>
          <div>
            {creditActivity.map((item) => (
              <div className="py-2" key={item.title}>
                <div className="flex justify-between items-center border py-3 px-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`${item.bgcolor} rounded-full p-2`}>
                      {item.icon}
                    </div>
                    <div>
                      <h1 className="font-medium">{item.title}</h1>
                      <p className="text-[14px] text-gray-300">{item.date}</p>
                    </div>
                  </div>
                  <div className={`${item.textcolor}`}>{item.points}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="border p-4 rounded-lg">
          <div className="pb-6">
            <h1 className="text-[26px] font-medium">
              Ways to Improve Your Score
            </h1>
            <p className="text-gray-400">
              Actionable steps to boost your credit rating
            </p>
          </div>
          <div>
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              {improveScore.map((item) => (
                <div
                  key={item.title}
                  className={`p-4 border ${item.bgcolor} rounded-lg`}
                >
                  <div className="flex items-start gap-3 text-white">
                    <div className="flex-shrink-0 mt-0.75">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-[14px]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="border p-4 rounded-lg">
          <div className="pb-6">
            <h1 className="text-[26px] font-medium">
              Export Your Credit Score
            </h1>
            <p className="text-gray-400">
              Download a verified report of your on-chain credit history
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[18px]">Verified Credit Report</h1>
              <p className="text-[14px] text-gray-400">
                Cryptographically signed report for external verification
              </p>
            </div>
            <div>
              <button className="flex items-center rounded-lg gap-3 py-2 px-4 bg-black dark:bg-white text-white dark:text-black cursor-pointer">
                <Download size={18} />
                <h1 className="font-medium">Export Report</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
