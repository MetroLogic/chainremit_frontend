import { HiCreditCard, HiUserCircle, HiPaperAirplane, HiUserGroup } from "react-icons/hi"

const steps = [
  {
    number: "1",
    icon: HiCreditCard,
    title: "Connect Wallet",
    description: "Connect your StarkNet wallet or create a new one",
  },
  {
    number: "2",
    icon: HiUserCircle,
    title: "Verify Identity",
    description: "Optional KYC for higher limits and premium features",
  },
  {
    number: "3",
    icon: HiPaperAirplane,
    title: "Send/Receive Funds",
    description: "Start sending money globally with minimal fees",
  },
  {
    number: "4",
    icon: HiUserGroup,
    title: "Access Loans or Join Groups",
    description: "Unlock advanced features as you build your credit score",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-white lg:text-5xl">How It Works</h2>
          <p className="text-lg text-gray-400 lg:text-xl">Get started in minutes with our simple 4-step process</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
