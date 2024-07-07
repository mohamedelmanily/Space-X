import React from 'react';
import HeroCard from './HeroCard';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';
import wave from '../assets/wave-YJEetPTK.gif'
const ServiceData = [
  {
    id: 1,
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl mx-auto" />,
    aosDelay: "300",
  },
  {
    id: 2,
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.",
    icon: <FaShuttleSpace className="text-7xl mx-auto" />,
    aosDelay: "500",
  },
  {
    id: 3,
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl mx-auto" />,
    aosDelay: "700",
  },
];

const Hero = () => {
  return (
    <div className='relative bg-black h-full grid md:grid-cols-3 grid-cols-1 gap-5 container'>
      {ServiceData.map((card) => (
        <HeroCard
          key={card.id}
          title={card.title}
          content={card.content}
          description={card.description}
          icon={card.icon}
          aosDelay={card.aosDelay}
        />
      ))}
      <img src={wave} alt="" className='h-[200px] w-full absolute -bottom-[75%]  object-cover mix-blend-screen -translate-y-24  z-[0]' />

    </div>
  );
};

export default Hero;
