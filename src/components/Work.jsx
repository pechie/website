import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function JobCard({ logo, alt, company, role, location, dates, bullets, reveal }) {
  return (
    <div
      ref={reveal.ref}
      className={[
        "bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-6 transition-all duration-500",
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
    >
      <div className="flex flex-row items-start gap-4 mb-4 max-[500px]:flex-col max-[500px]:items-center max-[500px]:text-center">
        <img
          src={logo}
          alt={alt}
          className="w-16 h-16 rounded-xl object-contain shrink-0 bg-white p-1"
        />
        <div>
          <h3 className="text-[#f5f5f7] text-xl font-semibold mb-1">{company}</h3>
          <p className="text-[#6e6e73] text-sm">{role}</p>
          <p className="text-[#6e6e73] text-sm">{location}</p>
          <p className="text-[#6e6e73] text-sm">{dates}</p>
        </div>
      </div>
      <ul className="text-[#f5f5f7] text-base leading-relaxed ml-4 space-y-2">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, media, reveal }) {
  return (
    <div
      ref={reveal.ref}
      className={[
        "bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-6 flex flex-row gap-6 transition-all duration-500 max-[1300px]:flex-col max-[1300px]:items-center",
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
    >
      <div className="flex-1 max-[1300px]:text-center">
        <h3 className="text-[#f5f5f7] text-xl font-semibold mb-4">{title}</h3>
        <div className="text-[#f5f5f7] text-base leading-relaxed">{description}</div>
      </div>
      <div className="w-[320px] h-[320px] shrink-0 rounded-xl overflow-hidden max-[500px]:w-full max-[500px]:h-auto">
        {media}
      </div>
    </div>
  );
}

export default function Work() {
  const headingReveal = useScrollReveal();
  const issReveal = useScrollReveal();
  const qinetiqReveal = useScrollReveal();
  const boseReveal = useScrollReveal();
  const projectsHeadingReveal = useScrollReveal();
  const plantPodReveal = useScrollReveal();
  const twitterReveal = useScrollReveal();
  const sirViveReveal = useScrollReveal();

  return (
    <div className="min-h-screen px-6 py-16 bg-[#0a0a0a]">
      <div className="max-w-[980px] mx-auto">

        {/* Work Experience heading */}
        <div
          ref={headingReveal.ref}
          className={[
            "mb-12 transition-all duration-500",
            headingReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">Experience</p>
          <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em]">Work Experience</h1>
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-4 mb-20">
          <JobCard
            reveal={issReveal}
            logo="/images/iss-logo.jpg"
            alt="ISS Logo"
            company="Integrity Security Services"
            role="Software Engineering Co-op"
            location="Boston, MA"
            dates="December 2019 - August 2020"
            bullets={[
              "Restructured credential management across all Node.js services to adhere to AWS security best practices.",
              "Simplified existing Node.js microservices by implementing serverless functions (AWS Lambda) to handle periodic tasks.",
              "Implemented AWS Simple Queue Service and AWS Lambda, and deployed Lambda code to handle messages from multiple FIFO queues.",
              "Developed a new REST API service to assist customers in provisioning V2X certificates per the IEEE 1609.2 standard.",
            ]}
          />
          <JobCard
            reveal={qinetiqReveal}
            logo="/images/qinetiq-logo.png"
            alt="Qinetiq Logo"
            company="QinetiQ - NA"
            role="Robotics Software Development Co-op"
            location="Waltham, MA"
            dates="January - June 2019"
            bullets={[
              "Translated gravity force measurements from three sensors on an autonomous robot into radial coordinates to be displayed in a 3D model, using C++.",
              "Integrated TeamCity builds with Coverity and automated a report generation process.",
              "Created Python scripts to add different header statements to thousands of files within a project depending on the file type.",
            ]}
          />
          <JobCard
            reveal={boseReveal}
            logo="/images/bose-logo.png"
            alt="Bose Logo"
            company="Bose Corporation"
            role="Software Development Co-op"
            location="Framingham, MA"
            dates="January - August 2018"
            bullets={[
              "Developed and continuously updated an iOS application using Swift to test the different features and firmware versions of a product.",
              "Integrated iOS Snapshot Test Case into our project, created unit tests to ensure that accidental UI changes were automatically detected.",
            ]}
          />
        </div>

        {/* Projects heading */}
        <div
          ref={projectsHeadingReveal.ref}
          className={[
            "mb-12 transition-all duration-500",
            projectsHeadingReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">Work</p>
          <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em]">Projects</h1>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          <ProjectCard
            reveal={plantPodReveal}
            title="Plant Pod"
            description={
              <p>
                This was my Senior project, which I worked on with a group of four other students.
                We decided to build a self-sufficient plant growth pod that could be monitored from
                a mobile application. My responsibilities for this project were creating our back end using NodeJS
                and multiple AWS services, as well as working on our mobile application in React Native with
                one of my group members. The AWS Services I used for this project were DynamoDB, Lambda, API Gateway,
                Cloudwatch, S3, and IAM.
              </p>
            }
            media={<img src="/images/plant-pod.gif" alt="Plant Pod" className="w-full h-full object-cover" />}
          />
          <ProjectCard
            reveal={twitterReveal}
            title="Twitter Bot"
            description={
              <p>
                Inspired by the account{" "}
                <a href="https://twitter.com/artdecider" className="text-[#0071e3] hover:underline">
                  @ArtDecider on Twitter
                </a>
                , I decided that I wanted to learn how to create my own bot that could reply to tweets on command.
                I did this by creating a developer account which gave me access to Twitter's API,
                and then creating a NodeJS project that constantly checks if the account has been mentioned in a tweet,
                which will cause the account to like that tweet and reply with a random message.
                I then deployed my project to Heroku so that it can run constantly.
                You can view{" "}
                <a href="https://twitter.com/boldandbrashbot" className="text-[#0071e3] hover:underline">
                  @BoldAndBrashBot on Twitter
                </a>
                , or see the source code on{" "}
                <a href="https://github.com/pechie/TwitterBot" className="text-[#0071e3] hover:underline">
                  my Github
                </a>
                .
              </p>
            }
            media={<img src="/images/bold-and-brash-bot.png" alt="Twitter Bot" className="w-full h-full object-cover" />}
          />
          <ProjectCard
            reveal={sirViveReveal}
            title="Sir Vive"
            description={
              <p>
                In the Winter of 2018, I wanted my own introduction to game development in Unity,
                so I created a one level game titled Sir Vive, which resembles a simple Mario game.
                All of the assets from the game were either created or imported in Unity, and the scripts
                for the objects were written in C#.
              </p>
            }
            media={
              <video
                src="/videos/sir-vive-gameplay.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
