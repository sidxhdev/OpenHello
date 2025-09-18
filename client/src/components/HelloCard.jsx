import React from "react";

const HelloCard = ({ name, photoUrl, githubUrl }) => {
  return (
    <div className="relative w-80 h-100 bg-[#EF233C] rounded-xl border-2 p-6 flex flex-col items-center justify-center shadow-lg hover:scale-101 transform transition duration-300 mx-auto">
      {/* User photo */}
      <div className="w-65 h-70 bg-gray-200 rounded-xl border-2 overflow-hidden mb-4 flex items-center justify-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={`${name} avatar`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span 
          className="text-gray-500 text-sm font-mono"
          style={{ display: photoUrl ? 'none' : 'flex' }}
        >
          photo
        </span>
      </div>

      {/* GitHub circle first, then name */}
      <div className="w-full flex items-center justify-between px-2">
        {/* GitHub circle */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-200 mr-2 flex-shrink-0"
            aria-label={`Visit ${name}'s GitHub profile`}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 "
            />
          </a>
        )}
        
        {/* Name */}
        <p className="text-white font-mono  font-bold text-2xl break-words flex-1 text-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default HelloCard;
