import {
  HiCreditCard,
  HiUserCircle,
  HiPaperAirplane,
  HiUserGroup,
} from "react-icons/hi";
import { Send, Users, Wallet, UserCheck } from "lucide-react";

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
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get started in minutes with our simple 4-step process
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Connect Wallet</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect your StarkNet wallet or create a new one
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Verify Identity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optional KYC for higher limits and premium features
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              3. Send/Receive Funds
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Start sending money globally with minimal fees
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              4. Access Loans or Join Groups
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Unlock advanced features as you build your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
