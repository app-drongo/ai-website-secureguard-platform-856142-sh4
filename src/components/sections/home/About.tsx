'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Award, ArrowRight, Target, Zap, Lock } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  title: 'About SecureGuard',
  subtitle: 'Leading the Future of IT Security',
  description:
    'We are a cutting-edge IT security platform dedicated to protecting modern businesses from evolving cyber threats. Our mission is to provide comprehensive, intelligent security solutions that adapt to your business needs.',
  foundedYear: '2020',
  teamSize: '50+',
  clientsProtected: '1000+',
  imageUrl: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SVQlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D',
  imageAlt: 'Modern cybersecurity team working together',
  values: [
    {
      icon: 'Shield',
      title: 'Security First',
      description:
        "Every decision we make prioritizes the security and protection of our clients' digital assets.",
    },
    {
      icon: 'Users',
      title: 'Client-Centric',
      description:
        "We build lasting partnerships by understanding and addressing each client's unique security challenges.",
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      description:
        'We continuously evolve our platform using the latest technologies and threat intelligence.',
    },
  ],
  achievements: ['ISO 27001 Certified', 'SOC 2 Type II Compliant', '99.9% Uptime SLA'],
  ctaText: 'Learn More About Our Mission',
  ctaHref: '/mission',
  secondaryCtaText: 'Meet Our Team',
  secondaryCtaHref: '/team',
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Shield: Shield,
      Users: Users,
      Zap: Zap,
      Lock: Lock,
      Target: Target,
      Award: Award,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Shield;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCtaClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="about" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <Image
              src={config.imageUrl}
              alt={config.imageAlt}
              data-editable-src="imageUrl"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Stats and Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-card text-card-foreground text-center p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-2">
                    <span data-editable="foundedYear">{config.foundedYear}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground text-center p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-2">
                    <span data-editable="teamSize">{config.teamSize}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground text-center p-6">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-2">
                    <span data-editable="clientsProtected">{config.clientsProtected}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Clients Protected</div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications & Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {config.achievements.map((achievement, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    <span data-editable={`achievements[${idx}]`}>{achievement}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {config.values.map((value, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground p-6 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">{getIcon(value.icon)}</div>
                  <h4 className="text-xl font-semibold mb-3">
                    <span data-editable={`values[${idx}].title`}>{value.title}</span>
                  </h4>
                  <p className="text-muted-foreground">
                    <span data-editable={`values[${idx}].description`}>{value.description}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted text-muted-foreground rounded-lg p-8">
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              onClick={handleSecondaryCtaClick}
              className="border-border hover:bg-accent hover:text-accent-foreground"
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
