import { motion } from "framer-motion";
import { Bot, Zap, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">NexAI</span>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-sm font-medium"
            >
              Contact Us
            </motion.button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Powered by Advanced AI
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Automate Your Business with{" "}
              <span className="text-gradient">AI Intelligence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Transform repetitive tasks into intelligent workflows. 
              Save time, reduce errors, and scale your operations effortlessly.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="group px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow hover:scale-105 transition-transform flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Deploy automation workflows in minutes, not months. Our AI adapts to your processes instantly."
              },
              {
                icon: Bot,
                title: "Smart Integration",
                description: "Connect seamlessly with 200+ tools and platforms. From CRM to accounting, we've got you covered."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade encryption and compliance. Your data stays protected with SOC 2 certified infrastructure."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:animate-float">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial-fade opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of businesses already saving 10+ hours per week with our AI automation solutions.
              </p>
              <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold glow hover:scale-105 transition-transform">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">NexAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 NexAI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
