import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ThemeToggle } from "./components/theme-toggle";
import { Shield, Globe, Zap, Users, CheckCircle, Star, Lock, ArrowRight, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-[#141414] dark:to-[#0f0f0f]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#2a2a2a] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-slate-600 dark:from-gray-200 dark:to-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-gray-800 font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Nato
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 dark:text-slate-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-slate-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="px-4">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-700/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600/50">
              Premium Proxy Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-slate-700 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                High-Quality
              </span>
              <br />
              <span className="text-slate-900 dark:text-slate-100">Residential Proxies</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access our premium network of residential proxy IPs at competitive prices.
              Fast, reliable, and secure connections for all your data collection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gray-800 to-slate-700 hover:from-gray-900 hover:to-slate-800 dark:from-gray-200 dark:to-gray-300 dark:hover:from-gray-100 dark:hover:to-gray-200 dark:text-gray-800">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">10M+</div>
                <div className="text-slate-600 dark:text-slate-400">IP Addresses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">99.9%</div>
                <div className="text-slate-600 dark:text-slate-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">190+</div>
                <div className="text-slate-600 dark:text-slate-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">24/7</div>
                <div className="text-slate-600 dark:text-slate-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose Nato Proxies?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Built for developers, researchers, and businesses who need reliable proxy solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="dark:text-slate-100">Premium Security</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Military-grade encryption and secure tunneling protocols
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="dark:text-slate-100">Global Coverage</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Access IPs from 190+ countries with city-level targeting
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="dark:text-slate-100">Lightning Fast</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Ultra-low latency with 99.9% uptime guarantee
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="dark:text-slate-100">Easy Integration</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Simple API with support for all major programming languages
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="dark:text-slate-100">High Success Rate</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  98%+ success rate with automatic IP rotation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-shadow bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="dark:text-slate-100">Ethical Sourcing</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  All IPs are ethically sourced with full compliance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 dark:bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Simple Usage-Based Pricing
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Pay only for what you use. No monthly fees, no commitments. Start with a free trial.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <Card className="border-2 border-gray-400 dark:border-gray-500 shadow-xl bg-white dark:bg-[#1f1f1f] text-center">
                <CardHeader className="pb-8">
                  <div className="mb-8">
                    <div className="inline-flex items-baseline">
                      <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">$0.8</span>
                      <span className="text-xl text-slate-600 dark:text-slate-400 ml-2 font-medium">/GB</span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                      Pay only for what you use
                    </div>
                  </div>
                  <CardTitle className="text-3xl dark:text-slate-100 mb-2">Simple Pricing</CardTitle>
                  <CardDescription className="dark:text-slate-400 text-lg">
                    No monthly fees, no commitments, no hidden costs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">190+ countries worldwide</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">HTTP/HTTPS & SOCKS5 support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">99.9% uptime guarantee</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">Automatic IP rotation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">24/7 premium support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="dark:text-slate-300">No monthly commitments</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-100 dark:text-gray-800">
                      Start Free Trial
                    </Button>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      1GB free trial • No credit card required
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing Examples */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">
              Simple Pricing Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-[#202020] rounded-lg border border-slate-200 dark:border-[#2a2a2a]">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">$8</div>
                <div className="text-slate-600 dark:text-slate-400 mb-1">10 GB</div>
                <div className="text-sm text-slate-500 dark:text-slate-500">Small projects</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-[#202020] rounded-lg border border-slate-200 dark:border-[#2a2a2a]">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">$40</div>
                <div className="text-slate-600 dark:text-slate-400 mb-1">50 GB</div>
                <div className="text-sm text-slate-500 dark:text-slate-500">Medium usage</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-[#202020] rounded-lg border border-slate-200 dark:border-[#2a2a2a]">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">$80</div>
                <div className="text-slate-600 dark:text-slate-400 mb-1">100 GB</div>
                <div className="text-sm text-slate-500 dark:text-slate-500">Heavy usage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              See what our customers say about Nato proxies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg dark:shadow-black/20 bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "Nato's proxy service has been a game-changer for our data collection operations.
                  The speed and reliability are unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">John Doe</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">CEO, DataCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:shadow-black/20 bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "Outstanding customer support and the most competitive pricing we've found.
                  Highly recommend Nato for any proxy needs."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 dark:text-green-400 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Sarah Miller</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">CTO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:shadow-black/20 bg-white dark:bg-[#202020] dark:border-[#2a2a2a]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "The global coverage and high success rate make Nato the perfect choice
                  for our international web scraping projects."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">MW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Mike Wilson</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Lead Developer, WebCrawl</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Ready to get started or have questions? We're here to help you succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Email</div>
                    <div className="text-slate-600 dark:text-slate-400">support@nato-proxy.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Phone</div>
                    <div className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Office</div>
                    <div className="text-slate-600 dark:text-slate-400">123 Proxy Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl dark:shadow-black/20 bg-white dark:bg-[#1f1f1f] dark:border-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="dark:text-slate-100">Send us a message</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your proxy needs..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gray-800 to-slate-700 hover:from-gray-900 hover:to-slate-800 dark:from-gray-200 dark:to-gray-300 dark:hover:from-gray-100 dark:hover:to-gray-200 dark:text-gray-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-[#0f0f0f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-slate-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold">Nato</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-4">
                Premium residential proxy service provider offering high-quality IPs at competitive prices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Product</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Residential Proxies</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Integration Guide</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Status Page</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Company</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Support</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-800 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>&copy; 2024 Nato Proxy Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
