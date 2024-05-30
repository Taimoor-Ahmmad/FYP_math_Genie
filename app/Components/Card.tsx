import React from "react";
import Image from "next/image";

interface Person {
  name: string;
  techStack: string;
  linkedIn: string;
  email: string;
  picture: string;
}

interface PersonCardProps {
  person: Person;
}

const Card: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-white m-4">
      <div className="flex justify-center mt-4">
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={person.picture}
          alt={`${person.name}'s picture`}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-center">{person.name}</div>
        <p className="text-gray-700 text-base text-center">
          {person.techStack}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-center space-x-4">
        <a
          href={person.linkedIn}
          className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${person.email}`}
          className="bg-gray-500 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-600 transition duration-300"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Card;
