import React from "react";

const HeroCard = ({ title, content, description, icon, aosDelay }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-8 px-3 w-full backdrop:blur-sm lg:w-[300px] mx-auto bg-sky-900/60 rounded-xl text-center text-white  z-10"  data-aos-delay={aosDelay}>
      {icon}
      <h1 className="text-2xl">{title}</h1>
      <h2 className="text-xl">{content}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HeroCard;