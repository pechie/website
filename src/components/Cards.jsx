import React from "react";

export default function Cards() {
  return (
    <div className="flex flex-col items-center w-[95%] h-[80%] mx-auto overflow-y-auto rounded-[20px] max-[1200px]:h-[360px] scrollbar-thin scrollbar-thumb-[#082d3b] scrollbar-track-[rgba(122,149,159,0.5)]">
      <CardItem
        src="/images/nodejs-logo.png"
        title="NodeJS"
        text="Developed a project using NodeJS for 9 months at Integrity Security Services,
              spent another 6 months with NodeJS for my senior project."
      />
      <CardItem
        src="/images/aws-logo.png"
        title="AWS"
        text="Utilized multiple AWS technologies during my most recent internship,
              as well as for my senior project. Specifically, Lambda, DynamoDB,
              SQS, API Gateway, CloudWatch, S3, IAM, and EC2."
      />
      <CardItem
        src="/images/git-logo.png"
        title="Git"
        text="Familiar with git through using both Github and Bitbucket,
              very comfortable using git to contribute to large projects."
      />
      <CardItem
        src="/images/react-logo.png"
        title="React"
        text="Taught myself React during December of 2020 in order to create this website."
      />
      <CardItem
        src="/images/jira-logo.png"
        title="Jira"
        text="Used Jira for Agile development on two of my three internships,
              as well as for multiple project based classes."
      />
      <CardItem
        src="/images/jenkins-logo.png"
        title="Jenkins"
        text="Learned the basics of Jenkins while working at Bose,
              had a more hands-on experience configuring Jenkins tests at ISS."
      />
      <CardItem
        src="/images/teamcity-logo.png"
        title="TeamCity"
        text="Continuously created automated tests in TeamCity while working at Qinetiq,
              and had sole responsibility of their maintenence."
      />
    </div>
  );
}

function CardItem({ src, title, text }) {
  return (
    <div className="w-[97%] h-auto flex flex-row mx-[10px] mb-5 bg-white rounded-[20px] max-[500px]:flex-col max-[500px]:items-center max-[500px]:mx-auto">
      <div className="h-[100px] w-[100px] ml-[10px] flex items-center justify-center shrink-0">
        <img src={src} alt="Skill logo" className="block h-[95%] w-[95%] m-auto" />
      </div>
      <div className="w-[85%] h-auto text-left pr-[50px] max-[500px]:text-center max-[500px]:w-full max-[500px]:pr-0">
        <h1 className="text-black text-sm pl-[30px] max-[500px]:pl-0">
          {title}
        </h1>
        <p className="text-black text-xs pl-[30px] mb-[5px] max-[500px]:pl-0 max-[500px]:mx-[10px]">
          {text}
        </p>
      </div>
    </div>
  );
}
