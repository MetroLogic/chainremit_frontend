import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  Heart,
  Award,
  ArrowRight,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Victor Peter",
      role: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 10+ years in fintech and blockchain",
      avatar: "VP",
    },
    {
      name: "Mercy Hassan",
      role: "CTO",
      bio: "Ex-Ethereum Foundation developer, expert in Layer 2 solutions",
      avatar: "MH",
    },
    {
      name: "Henry Sliq",
      role: "Head of Product",
      bio: "Former Stripe PM, passionate about financial inclusion",
      avatar: "HS",
    },
    {
      name: "Eleazer Musa",
      role: "Lead Engineer",
      bio: "StarkNet core contributor, smart contract security specialist",
      avatar: "EM",
    },
  ];

  const milestones = [
    {
      year: "2024",
      event: "Company founded",
      description: "ChainRemit was born from a vision of financial inclusion",
    },
    {
      year: "2024",
      event: "Ideation",
      description:
        "Identified the need for accessible cross-border payments using blockchain technology to serve underbanked communities",
    },
    {
      year: "2025",
      event: "Building and beta launch",
      description: "Launched beta version with 1,000+ users",
    },
    {
      year: "2025",
      event: "StarkNet integration",
      description: "Full integration with StarkNet mainnet",
    },
    {
      year: "2026",
      event: "Global expansion",
      description: "Plans to expand up to 10+ countries",
    },
  ];

  const values = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Accessibility",
      description:
        "Making financial services accessible to everyone, everywhere",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Your funds and data are protected by cutting-edge security",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Driven",
      description: "Building solutions that empower communities to thrive",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible in DeFi",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              {/* Light theme image */}
              <Image
                src="/Logo and text-4.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill block dark:hidden"
              />
              {/* Dark theme image */}
              <Image
                src="/Logo and text-3.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            About ChainRemit
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Empowering Financial Freedom Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Decentralization
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're building the future of finance where everyone has access to
            fast, affordable, and secure financial services, regardless of their
            location or background.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 border-0 shadow-xl">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To democratize access to financial services by leveraging
                  blockchain technology, creating a world where anyone can send
                  money, save with their community, and access credit based on
                  their on-chain reputation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                      <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Financial Inclusion</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Bringing financial services to the unbanked and
                        underbanked
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pioneering new solutions for age-old financial
                        challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1">
                      <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Trust & Security</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Building transparent, secure systems that users can
                        trust
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 rounded-xl flex items-center justify-center overflow-hidden shadow-slate-800 shadow-2x1">
                  <Image
                    src="/connect.jpg"
                    alt=""
                    fill
                    className="w-full h-full object-fill rounded-xl"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate experts building the future of finance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage
                      src={`/team/${member.avatar.toLowerCase()}.jpg`}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-lg">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <FaLinkedin />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <FaXTwitter />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <FaGithub />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{milestone.event}</h3>
                        <Badge variant="outline">{milestone.year}</Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="mb-16 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="opacity-90">
                Making a difference in the global financial landscape
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="opacity-90">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$10M+</div>
                <div className="opacity-90">Transferred</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="opacity-90">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="opacity-90">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Be part of the financial revolution. Start using ChainRemit
                today and experience the future of money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Link href="/auth/signup">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/demo">Try Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
