'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Advanced IT Security Solutions',
  subtitle: 'Protect Your Business with Enterprise-Grade Cybersecurity',
  description:
    'Comprehensive threat detection, real-time monitoring, and automated response systems designed for modern enterprises. Secure your digital infrastructure with our cutting-edge platform.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  heroImageAlt: 'Cybersecurity dashboard interface',
  trustBadge: 'SOC 2 Type II Certified',
  features: ['24/7 Threat Monitoring', 'Zero-Day Protection', 'Compliance Ready'],
  stats: [
    { label: 'Threats Blocked', value: '10M+' },
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'Uptime SLA', value: '99.9%' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % config.features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.features.length]);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    currentFeature === idx ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span data-editable={`features[${idx}]`} className="font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground"
              >
                <Eye className="mr-2 h-4 w-4" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <Card className="bg-card border-border shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay with security icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 flex gap-4">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-3">
                        <Lock className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3">
                        <Eye className="h-6 w-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
