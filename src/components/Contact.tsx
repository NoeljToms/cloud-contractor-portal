import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sf-secondary">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8">
            <a
              href="mailto:contact@acmesalesforce.com"
              className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="w-8 h-8 text-sf-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">tomschira@yahoo.com</p>
              </div>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="w-8 h-8 text-sf-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (416) 540-0183</p>
              </div>
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="w-8 h-8 text-sf-primary" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-600">Connect with me on LinkedIn</p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );



};