import React from "react";

import { Navbar } from "../components/Navbar";
import { TopSection } from "../components/TopSection";
import { Highlights } from "../components/Highlights";
import { Partners } from "../components/Partners";
import { Processes } from "../components/Processes";
import { Testimonial } from "../components/Testimonial";
import { Eligibility } from "../components/Eligibility";
import { EmiCalculator } from "../components/EmiCalculator";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Referrals } from "../components/Referrals";

export const Homepage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <TopSection />
        <Highlights />
        <Partners />
        <Processes />
        <Testimonial />
        <Eligibility />
        <EmiCalculator />
        <Referrals />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
