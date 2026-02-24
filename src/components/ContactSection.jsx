import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { StarBackground } from "./StarBackground";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_vk9vao8",
        "template_c4rw41d",
        e.target,
        "090clGLkmamRengCf"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
      <section
      id="contact"
      className="py-24 px-4 relative bg-linear-to-b from-[#102B3F] via-[#0A1828] to-[#061826] text-[#C6A86B] select-none"
    >
      <StarBackground />
    
      {/* Warm Glow */}
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#FF9933]/10 blur-[120px] rounded-full"></div>

      {/* Cool Glow */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#178582]/10 blur-[100px] rounded-full"></div>

      <div className="relative container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-[#178582]">Touch</span>
        </h2>

        <p className="text-center text-[#C6A86B]/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#178582]/20">
                  <Mail className="h-6 w-6 text-[#178582]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ayush_c@mt.iitr.ac.in"
                    className="text-[#C6A86B]/70 hover:text-[#178582] transition-colors"
                  >
                    ayush_c@mt.iitr.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#178582]/20">
                  <Phone className="h-6 w-6 text-[#178582]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:7800388590"
                    className="text-[#C6A86B]/70 hover:text-[#178582] transition-colors"
                  >
                    7800388590
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#178582]/20">
                  <MapPin className="h-6 w-6 text-[#178582]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-[#C6A86B]/70">
                    Roorkee, Uttarakhand
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">

                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group p-3 rounded-full bg-[#178582]/20 transition-all duration-300 hover:bg-[#178582] hover:scale-110 hover:shadow-lg hover:shadow-[#178582]/40"
                  >
                    <Icon className="h-5 w-5 text-[#178582] group-hover:text-[#001F33]" />
                  </a>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#07293F]/80 backdrop-blur-md border border-white/5 p-8 rounded-lg shadow-xl">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md border border-[#178582]/30 bg-[#001F33]/60 focus:outline-none focus:ring-2 focus:ring-[#178582]"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-md border border-[#178582]/30 bg-[#001F33]/60 focus:outline-none focus:ring-2 focus:ring-[#178582]"
              />

              <textarea
                name="message"
                required
                rows="4"
                placeholder="Hello, I'd like to talk about..."
                className="w-full px-4 py-3 rounded-md border border-[#178582]/30 bg-[#001F33]/60 focus:outline-none focus:ring-2 focus:ring-[#178582] resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#178582] text-[#001F33] font-medium shadow-md transition-all duration-300",
                  "hover:shadow-xl hover:scale-[1.02]",
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};