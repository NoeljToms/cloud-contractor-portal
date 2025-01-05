import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-sf-primary to-sf-secondary text-white px-4">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Acme Salesforce Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Empowering Businesses with Tailored Salesforce Solutions
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
          Expert Salesforce consulting to help your business leverage the full power
          of the world's #1 CRM platform.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-sf-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};