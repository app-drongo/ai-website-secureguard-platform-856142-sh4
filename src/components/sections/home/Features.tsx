'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Zap, Users, CheckCircle } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Advanced Security Features',
  subtitle: 'Comprehensive protection for your digital infrastructure',
  description:
    'Our cutting-edge IT security platform provides enterprise-grade protection with intelligent threat detection and real-time monitoring.',
  ctaText: 'Explore All Features',
  ctaHref: '/features',
  features: [
    {
      icon: 'Shield',
      title: 'Real-time Threat Detection',
      description:
        'AI-powered monitoring that identifies and neutralizes threats before they impact your business operations.',
      benefits: [
        '24/7 automated scanning',
        'Machine learning algorithms',
        'Instant threat response',
      ],
    },
    {
      icon: 'Lock',
      title: 'Zero-Trust Architecture',
      description:
        'Implement comprehensive access controls with our zero-trust security model for maximum protection.',
      benefits: ['Identity verification', 'Encrypted communications', 'Granular permissions'],
    },
    {
      icon: 'Eye',
      title: 'Advanced Analytics Dashboard',
      description:
        'Get complete visibility into your security posture with detailed insights and actionable intelligence.',
      benefits: ['Real-time monitoring', 'Custom reporting', 'Predictive analytics'],
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const iconMap = {
      Shield: Shield,
      Lock: Lock,
      Eye: Eye,
      Zap: Zap,
      Users: Users,
      CheckCircle: CheckCircle,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Shield;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {getIcon(feature.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
