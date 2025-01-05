import { Award, Briefcase, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sf-secondary">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Professional consultant working"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-sf-primary">
              10+ Years of Salesforce Excellence
            </h3>
            <p className="text-gray-600 mb-8">
              As a certified Salesforce consultant with over a decade of
              experience, I've helped businesses across various industries
              optimize their CRM processes and achieve their digital
              transformation goals.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-sf-primary" />
                <div>
                  <p className="font-semibold">Certified</p>
                  <p className="text-sm text-gray-500">Platform Developer II</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-sf-primary" />
                <div>
                  <p className="font-semibold">Projects</p>
                  <p className="text-sm text-gray-500">100+ Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-sf-primary" />
                <div>
                  <p className="font-semibold">Clients</p>
                  <p className="text-sm text-gray-500">50+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};