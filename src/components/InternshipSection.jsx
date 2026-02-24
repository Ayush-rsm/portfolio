import React from "react";
import { StarBackground } from "./StarBackground";

export const InternshipSection = () => {
  return (
    <section
      id="internship"
      className="py-24 px-4 relative bg-linear-to-b from-[#061826] via-[#0A1828] to-[#102B3F] text-[#C6A86B] select-none"
    >
      <StarBackground />
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-[#178582]"> Internship </span>
        </h2>

        <p className="text-center text-[#C6A86B]/70 mb-16 max-w-2xl mx-auto">
          Professional experience where I built production-level Shopify
          applications and worked across full-stack systems.
        </p>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#178582]/30 h-full"></div>

          {/* Timeline Item */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between">

            {/* Left Side - Duration */}
            <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-6 md:mb-0">
              <p className="text-sm text-[#C6A86B]/60">
                July 2025 – Sept 2025
              </p>
            </div>

            {/* Circle Indicator */}
            <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 w-5 h-5 bg-[#178582] rounded-full border-4 border-[#061826] shadow-md"></div>

            {/* Right Side - Card */}
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-[#0F2436] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">

                <h3 className="text-xl font-semibold mb-1 text-[#C6A86B]">
                  Full Stack SDE Intern
                </h3>

                <p className="text-[#178582] text-sm mb-4">
                  HopDesk Technologies
                </p>

                <ul className="text-[#C6A86B]/70 text-sm space-y-2 list-disc pl-5">
                  <li>
                    Developed a Shopify embedded application to auto-generate
                    AI-powered alt text for 500+ product images using Gemini APIs.
                  </li>
                  <li>
                    Built 10+ full-stack React components using Shopify Polaris UI
                    and App Bridge within the Shopify Admin interface.
                  </li>
                  <li>
                    Implemented REST and GraphQL APIs to manage store data,
                    authentication flows, settings updates, and secure API key handling.
                  </li>
                  <li>
                    Contributed across frontend UI, backend logic, and Shopify
                    Admin API communication.
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;