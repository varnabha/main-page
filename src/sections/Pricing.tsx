import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for small clubs getting started',
    features: [
      'Up to 5 events per month',
      'Basic event pages',
      'Email notifications',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For clubs that want to grow their presence',
    features: [
      'Unlimited events',
      'Custom branding',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'API access',
      'Automated reminders',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream rounded-t-4xl -mt-8 relative z-10 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-dark-bg">
              Simple, transparent
              <span className="italic"> pricing</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Start free and scale as your club grows. No hidden fees.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.15}>
              <motion.div
                className={`relative rounded-3xl p-8 lg:p-10 h-full ${
                  plan.highlighted
                    ? 'bg-dark-bg text-white'
                    : 'bg-white border border-gray-200'
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-lavender text-dark-bg rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-medium mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-dark-bg'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-serif font-medium ${
                      plan.highlighted ? 'text-white' : 'text-dark-bg'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'bg-lavender/20' : 'bg-green-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlighted ? 'text-lavender' : 'text-green-600'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full py-6 text-base font-medium ${
                    plan.highlighted
                      ? 'bg-lavender text-dark-bg hover:bg-lavender/90'
                      : 'bg-dark-bg text-white hover:bg-dark-bg/90'
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
