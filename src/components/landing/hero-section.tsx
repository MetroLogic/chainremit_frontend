import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Powered by StarkNet
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Empowering Global Communities with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Decentralized Finance
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Send, save, and borrow across borders on StarkNet. Join the
                future of financial inclusion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/auth/signup">
                  Launch App
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 rounded-3xl flex items-center justify-center">
              <Image
                src="/globe.png"
                alt="Hero Illustration"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
