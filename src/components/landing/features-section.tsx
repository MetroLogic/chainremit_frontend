import { HiPaperAirplane, HiCreditCard, HiUserGroup, HiChartBar, HiLightningBolt, HiShieldCheck } from "react-icons/hi"

const features = [
  {
    icon: HiPaperAirplane,
    title: "Send Money Instantly",
    description: "Transfer funds globally with minimal fees and instant settlement on StarkNet",
    iconColor: "bg-blue-600",
  },
  {
    icon: HiCreditCard,
    title: "Access Microloans",
    description: "Get small loans based on your on-chain credit score and community trust",
    iconColor: "bg-green-600",
  },
  {
    icon: HiUserGroup,
    title: "Form Savings Groups",
    description: "Join or create savings circles with automated payouts and transparent tracking",
    iconColor: "bg-purple-600",
  },
  {
    icon: HiChartBar,
    title: "Get a Crypto Credit Score",
    description: "Build your financial reputation with on-chain activity and payment history",
    iconColor: "bg-orange-600",
  },
  {
    icon: HiLightningBolt,
    title: "Powered by StarkNet",
    description: "Lightning-fast transactions with low fees on Ethereum's most advanced L2",
    iconColor: "bg-blue-600",
  },
  {
    icon: HiShieldCheck,
    title: "Secure & Transparent",
    description: "All transactions are verifiable on-chain with enterprise-grade security",
    iconColor: "bg-red-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-5xl">Everything You Need for Global Finance</h2>
          <p className="text-lg text-gray-400 lg:text-xl">Comprehensive DeFi tools built for everyone, everywhere</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl bg-slate-800 p-6 transition-transform hover:scale-105">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconColor} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
