import React from "react";

export default function Work() {
  return (
    <div className="w-full min-h-[91.7vh] h-auto flex flex-col text-center pt-[10px]">
      <h1 className="text-[#1f1f1f]">Work Experience</h1>
      <div className="w-full min-h-[400px] flex flex-row items-center justify-center max-[1600px]:flex-col max-[1600px]:h-auto">
        <div className="min-h-[330px] h-[80%] min-w-[30%] w-auto m-10 text-center rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-col max-[1600px]:w-[70%] max-[1600px]:min-h-[200px] max-[1600px]:h-auto max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-full h-[30%] flex flex-row text-center max-[500px]:flex-col max-[500px]:items-center">
            <img
              src="/images/iss-logo.jpg"
              alt="ISS Logo"
              className="h-[100px] w-[100px] rounded-[25px] ml-[10px] max-[1600px]:ml-[25px] max-[500px]:m-0"
            />
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[#292929] mb-0 max-[1800px]:text-2xl">Integrity Security Services</h1>
              <p className="leading-[18px]">Software Engineering Co-op</p>
              <p className="leading-[18px]">Boston, MA</p>
              <p className="leading-[18px]">December 2019 - August 2020</p>
            </div>
          </div>
          <div className="w-full h-[70%] text-left">
            <ul className="text-lg font-sans text-[#1b1b1b] m-5 ml-[30px] max-[1800px]:text-base max-[1600px]:text-lg">
              <li>Restructured credential management across all Node.js services to adhere to AWS security best practices.</li>
              <li>Simplified existing Node.js microservices by implementing serverless functions (AWS Lambda) to handle periodic tasks.</li>
              <li>Implemented AWS Simple Queue Service and AWS Lambda, and deployed Lambda code to handle messages from multiple FIFO queues.</li>
              <li>Developed a new REST API service to assist customers in provisioning V2X certificates per the IEEE 1609.2 standard.</li>
            </ul>
          </div>
        </div>
        <div className="min-h-[330px] h-[80%] min-w-[30%] w-auto m-10 text-center rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-col max-[1600px]:w-[70%] max-[1600px]:min-h-[200px] max-[1600px]:h-auto max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-full h-[30%] flex flex-row text-center max-[500px]:flex-col max-[500px]:items-center">
            <img
              src="/images/qinetiq-logo.png"
              alt="Qinetiq Logo"
              className="h-[100px] w-[100px] rounded-[25px] ml-[10px] max-[1600px]:ml-[25px] max-[500px]:m-0"
            />
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[#292929] mb-0 max-[1800px]:text-2xl">QinetiQ - NA</h1>
              <p className="leading-[18px]">Robotics Software Development Co-op</p>
              <p className="leading-[18px]">Waltham, MA</p>
              <p className="leading-[18px]">January - June 2019</p>
            </div>
          </div>
          <div className="w-full h-[70%] text-left">
            <ul className="text-lg font-sans text-[#1b1b1b] m-5 ml-[30px] max-[1800px]:text-base max-[1600px]:text-lg">
              <li>Translated gravity force measurements from three sensors on an autonomous robot into radial coordinates to be displayed in a 3D model, using C++.</li>
              <li>Integrated TeamCity builds with Coverity and automated a report generation process.</li>
              <li>Created Python scripts to add different header statements to thousands of files within a project depending on the file type.</li>
            </ul>
          </div>
        </div>
        <div className="min-h-[330px] h-[80%] min-w-[30%] w-auto m-10 text-center rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-col max-[1600px]:w-[70%] max-[1600px]:min-h-[200px] max-[1600px]:h-auto max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-full h-[30%] flex flex-row text-center max-[500px]:flex-col max-[500px]:items-center">
            <img
              src="/images/bose-logo.png"
              alt="Bose Logo"
              className="h-[100px] w-[100px] rounded-[25px] ml-[10px] max-[1600px]:ml-[25px] max-[500px]:m-0"
            />
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[#292929] mb-0 max-[1800px]:text-2xl">Bose Corporation</h1>
              <p className="leading-[18px]">Software Development Co-op</p>
              <p className="leading-[18px]">Framingham, MA</p>
              <p className="leading-[18px]">January - August 2018</p>
            </div>
          </div>
          <div className="w-full h-[70%] text-left">
            <ul className="text-lg font-sans text-[#1b1b1b] m-5 ml-[30px] max-[1800px]:text-base max-[1600px]:text-lg">
              <li>Developed and continuously updated an iOS application using Swift to test the different features and firmware versions of a product.</li>
              <li>Integrated iOS Snapshot Test Case into our project, created unit tests to ensure that accidental UI changes were automatically detected.</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-[#1f1f1f]">Projects</h1>
      <div className="w-full min-h-[500px] h-auto flex flex-col items-center justify-center">
        <div className="w-4/5 min-h-[100px] h-auto rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-row m-5 max-[1300px]:flex-col max-[1300px]:items-center max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-[70%] h-full text-left m-[30px] max-[1300px]:text-center max-[1050px]:w-[90%] max-[800px]:w-[95%]">
            <h1 className="text-[#1f1f1f]">Plant Pod</h1>
            <p className="text-[22px] font-sans leading-[35px] mt-[70px] max-[800px]:text-lg max-[800px]:mt-[50px] max-[500px]:text-base">
              This was my Senior project, which I worked on with a group of four other students.
              We decided to build a self-sufficient plant growth pod that could be monitored from
              a mobile application. My responsibilities for this project were creating our back end using NodeJS
              and multiple AWS services, as well as working on our mobile application in React Native with
              one of my group members. The AWS Services I used for this project were DynamoDB, Lambda, API Gateway,
              Cloudwatch, S3, and IAM.
            </p>
          </div>
          <div className="h-[380px] w-[380px] m-[30px] my-auto p-[15px] max-[500px]:h-auto max-[500px]:w-auto">
            <img src="/images/plant-pod.gif" alt="Plant Pod" className="h-full w-full" />
          </div>
        </div>
        <div className="w-4/5 min-h-[100px] h-auto rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-row m-5 max-[1300px]:flex-col max-[1300px]:items-center max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-[70%] h-full text-left m-[30px] max-[1300px]:text-center max-[1050px]:w-[90%] max-[800px]:w-[95%]">
            <h1 className="text-[#1f1f1f]">Twitter Bot</h1>
            <p className="text-[22px] font-sans leading-[35px] mt-[70px] max-[800px]:text-lg max-[800px]:mt-[50px] max-[500px]:text-base">
              Inspired by the account{" "}
              <a href="https://twitter.com/artdecider" className="no-underline text-[#1b1b1b]">
                @ArtDecider on Twitter
              </a>
              , I decided that I wanted to learn how to create my own bot that could reply to tweets on command.
              I did this by creating a developer account which gave me access to Twitter's API,
              and then creating a NodeJS project that constantly checks if the account has been mentioned in a tweet,
              which will cause the account to like that tweet and reply with a random message.
              I then deployed my project to Heroku so that it can run constantly.
              You can view{" "}
              <a href="https://twitter.com/boldandbrashbot" className="no-underline text-[#1b1b1b]">
                @BoldAndBrashBot on Twitter
              </a>
              , or see the source code on{" "}
              <a href="https://github.com/pechie/TwitterBot" className="no-underline text-[#1b1b1b]">
                my Github
              </a>
              .
            </p>
          </div>
          <div className="h-[380px] w-[380px] m-[30px] my-auto p-[15px] max-[500px]:h-auto max-[500px]:w-auto">
            <img src="/images/bold-and-brash-bot.png" alt="Twitter Bot" className="h-full w-full" />
          </div>
        </div>
        <div className="w-4/5 min-h-[100px] h-auto rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] flex flex-row m-5 max-[1300px]:flex-col max-[1300px]:items-center max-[800px]:w-4/5 max-[500px]:w-[85%]">
          <div className="w-[70%] h-full text-left m-[30px] max-[1300px]:text-center max-[1050px]:w-[90%] max-[800px]:w-[95%]">
            <h1 className="text-[#1f1f1f]">Sir Vive</h1>
            <p className="text-[22px] font-sans leading-[35px] mt-[70px] max-[800px]:text-lg max-[800px]:mt-[50px] max-[500px]:text-base">
              In the Winter of 2018, I wanted my own introduction to game development in Unity,
              so I created a one level game titled Sir Vive, which resembles a simple Mario game.
              All of the assets from the game were either created or imported in Unity, and the scripts
              for the objects were written in C#.
            </p>
          </div>
          <div className="h-[380px] w-[380px] m-[30px] my-auto p-[15px] max-[500px]:h-auto max-[500px]:w-auto">
            <video src="/videos/sir-vive-gameplay.mp4" autoPlay loop muted playsInline className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
