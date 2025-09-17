import React, { useState } from "react";
import TextType from "./TextType";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="min-h-screen flex flex-col justify-end px-4 sm:px-6 lg:px-8">
      {/* Typing intro */}
      <div className="text-center pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-12">
        <TextType
          text={[
            "Welcome to OpenHello",
            "Learn how to contribute to Open Source!",
          ]}
          typingSpeed={75}
          deletingSpeed={40}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          textColors={["#2B2D42"]}
          loop={true}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
          Your first step into OpenSource
        </h2>
      </div>

      {/* About / Steps Card */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#ef233c] border-2 shadow-lg p-4 sm:p-6 lg:p-10 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[8vh] min-h-[60vh] flex flex-col">
        {/* Switch buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab("about")}
            className={`w-full sm:w-auto px-4 py-2 text-base sm:text-lg md:text-xl font-semibold rounded-2xl border-2 transition-colors ${
              activeTab === "about"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-black"
                : "text-gray-700 dark:text-gray-300 border-black hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("steps")}
            className={`w-full sm:w-auto px-4 py-2 text-base sm:text-lg md:text-xl font-semibold rounded-2xl border-2 transition-colors ${
              activeTab === "steps"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-black"
                : "text-gray-700 dark:text-gray-300 border-black hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Steps
          </button>
        </div>

        {/* Content wrapper */}
        <div className="flex flex-col justify-start">
          {activeTab === "about" ? (
            <>
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white leading-relaxed">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B2D42] font-bold block sm:inline mb-2 sm:mb-0">
                  OpenHello
                </span>{" "}
                is a beginner-friendly platform that helps you make your first
                open source contribution. For many beginners, contributing to
                open source feels intimidating. OpenHello simplifies this
                process by giving you a tangible first success in the form of a
                personalized Hello Card. Your Hello Card shows your name, photo,
                greeting, and GitHub profile link.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white leading-relaxed mt-4 sm:mt-6">
                Contribute in a few simple steps: fork the repo, update your card
                data, and submit a pull request. Once your PR is merged, your
                card appears on the contributors page, showcasing your first open
                source achievement.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white leading-relaxed mt-4 sm:mt-6">
                OpenHello was created by{" "}
                <span className="font-semibold">Siddesh Navthale</span> to help
                beginners gain confidence and practical experience in open
                source.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white leading-relaxed mt-4 sm:mt-6">
                It's interactive, visual, and beginner-friendly, making your
                first contribution simple, fun, and rewarding.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white dark:text-[#2B2D42] mb-4 sm:mb-6">
                Steps to Contribute
              </h1>
              <h2 className="text-base sm:text-lg lg:text-xl text-white  mb-6 sm:mb-8">
                Contribute directly from GitHub — no setup needed! Just follow
                these quick steps.
              </h2>

              <ol className="space-y-4 sm:space-y-6 list-decimal list-inside text-base sm:text-lg lg:text-xl text-white  leading-relaxed">
                <li className="pl-2">
                  <strong className="text-white ">Fork the Repository:</strong> Click the{" "}
                  <em className="text-white ">Fork</em> button on the OpenHello GitHub repo.
                </li>
                <li className="pl-2">
                  <strong className="text-white ">Update Your Card Data:</strong> Edit the contributors'
                  file and add your name, photo URL, and GitHub profile link.
                </li>
                <li className="pl-2">
                  <strong className="text-white ">Submit a Pull Request:</strong> Propose your changes by
                  creating a PR from your fork to the main repo.
                </li>
                <li className="pl-2">
                  <strong className="text-white ">Get Featured:</strong> Once your PR is merged, your
                  personalized Hello Card will appear on the Contributors page!
                </li>
              </ol>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;