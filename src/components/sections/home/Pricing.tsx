'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Shield, Zap, Star } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your Security Plan',
  subtitle: 'Comprehensive IT security solutions tailored to your business needs',
  billingToggle: {
    monthly: 'Monthly',
    yearly: 'Yearly',
  },
  yearlyDiscount: 'Save 20%',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Essential security for small teams',
      monthlyPrice: 29,
      yearlyPrice: 23,
      currency: '$',
      period: 'per user/month',
      features: [
        'Basic threat detection',
        'Email security scanning',
        '24/7 monitoring',
        'Basic reporting',
        'Standard support',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
      icon: 'shield',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced protection for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 63,
      currency: '$',
      period: 'per user/month',
      features: [
        'Advanced threat intelligence',
        'Real-time vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Priority support',
        'Custom security policies',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
      popular: true,
      icon: 'zap',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete security suite for large organizations',
      monthlyPrice: 149,
      yearlyPrice: 119,
      currency: '$',
      period: 'per user/month',
      features: [
        'AI-powered threat detection',
        'Zero-trust architecture',
        'Advanced analytics & insights',
        'Dedicated security consultant',
        'Custom integrations',
        'SLA guarantee',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
      icon: 'star',
    },
  ],
  guaranteeText: '30-day money-back guarantee',
  supportText: 'All plans include free migration and setup assistance',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="h-6 w-6" />;
      case 'zap':
        return <Zap className="h-6 w-6" />;
      case 'star':
        return <Star className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.monthly">{config.billingToggle.monthly}</span>
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.yearly">{config.billingToggle.yearly}</span>
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                <span data-editable="yearlyDiscount">{config.yearlyDiscount}</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={plan.id}
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {getIcon(plan.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    <span data-editable={`plans[${idx}].currency`}>{plan.currency}</span>
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /<span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-muted-foreground">
            <span data-editable="guaranteeText">{config.guaranteeText}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            <span data-editable="supportText">{config.supportText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
