import React from "react";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EDF2F4]">
      {/* Navigation */}
      <div className="mt-5 sm:mt-6 lg:mt-10 px-4 sm:px-6 lg:px-8">
        <NavBar />
      </div>
     
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-end ">
        <div className="w-full">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;