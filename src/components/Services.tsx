import {
  Cloud,
  Code2,
  GraduationCap,
  LineChart,
  Settings,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Implementation",
    description:
      "Full-scale Salesforce implementation tailored to your business needs",
  },
  {
    icon: Code2,
    title: "Customization",
    description:
      "Custom development of apps, automations, and integrations",
  },
  {
    icon: Settings,
    title: "Integration",
    description:
      "Seamless integration with your existing systems and third-party apps",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Comprehensive training programs for your team",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description:
      "Advanced reporting and analytics solutions",
  },
  {
    icon: Zap,
    title: "Optimization",
    description:
      "Performance optimization and system health checks",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sf-secondary">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-sf-primary transition-colors group"
            >
              <service.icon className="w-12 h-12 text-sf-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};