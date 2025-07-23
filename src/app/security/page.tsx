import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Send,
  Shield,
  Lock,
  Eye,
  Server,
  Key,
  AlertTriangle,
  CheckCircle,
  FileText,
  Users,
  Zap,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted using AES-256 encryption both in transit and at rest",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Multi-Signature Security",
      description: "Critical operations require multiple signatures for enhanced security",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Secure Infrastructure",
      description: "Built on enterprise-grade cloud infrastructure with 99.9% uptime",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring and automated threat detection systems",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Audits",
      description: "Regular security audits by leading blockchain security firms",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Access Controls",
      description: "Role-based access controls and principle of least privilege",
    },
  ]

  const certifications = [
    {
      title: "SOC 2 Type II",
      description: "Compliance with security, availability, and confidentiality standards",
      status: "Certified",
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management",
      status: "In Progress",
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      status: "Certified",
    },
    {
      title: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
    },
  ]

  const bestPractices = [
    {
      title: "Use Strong Passwords",
      description: "Create unique, complex passwords and enable two-factor authentication",
      icon: <Key className="w-5 h-5" />,
    },
    {
      title: "Secure Your Wallet",
      description: "Keep your seed phrase safe and never share your private keys",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: "Verify Transactions",
      description: "Always double-check recipient addresses before sending funds",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Stay Updated",
      description: "Keep your wallet software and browser updated to the latest versions",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Monitor Your Account",
      description: "Regularly check your transaction history and report suspicious activity",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      title: "Use Secure Networks",
      description: "Avoid public Wi-Fi for financial transactions and use VPN when necessary",
      icon: <Globe className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">StarkRemit</span>
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
          <Badge variant="secondary" className="mb-4">
            Security & Trust
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Security is Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Top Priority
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We implement industry-leading security measures to protect your funds and personal information. Learn about
            our comprehensive security framework and best practices.
          </p>
        </div>

        {/* Security Overview */}
        <Card className="mb-16 border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Bank-Grade Security</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  StarkRemit employs multiple layers of security to ensure your funds and data are protected at all
                  times. Our security measures exceed industry standards and are continuously updated to address
                  emerging threats.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Monitoring</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">256-bit</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Encryption</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Zero</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Breaches</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center">
                  <Shield className="w-32 h-32 text-green-600 animate-pulse" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Security Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive protection at every level</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance & Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Meeting the highest industry standards</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{cert.description}</p>
                  <Badge
                    variant={cert.status === "Certified" || cert.status === "Compliant" ? "default" : "secondary"}
                    className={
                      cert.status === "Certified" || cert.status === "Compliant"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : ""
                    }
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Security Best Practices</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">How you can help keep your account secure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {practice.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{practice.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{practice.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Incident Response */}
        <Card className="mb-16 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                  Security Incident Response
                </h2>
                <p className="text-orange-800 dark:text-orange-200 mb-4">
                  If you notice any suspicious activity on your account or believe your security has been compromised,
                  please contact us immediately.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Immediate Actions</h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• Change your password</li>
                      <li>• Enable 2FA if not already active</li>
                      <li>• Check recent transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Contact Us</h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• Email: security@starkremit.com</li>
                      <li>• Emergency: +1 (555) 911-HELP</li>
                      <li>• Live chat: Available 24/7</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Response Time</h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• Critical: Within 1 hour</li>
                      <li>• High: Within 4 hours</li>
                      <li>• Medium: Within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Contact */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Security Questions or Concerns?</h2>
            <p className="mb-6 opacity-90">
              Our security team is here to help. Report vulnerabilities, ask questions, or get security guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="mailto:security@starkremit.com">Contact Security Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/help">Security Help Center</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}