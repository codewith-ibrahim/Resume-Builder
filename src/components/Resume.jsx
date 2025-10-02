import React from 'react';

const ResumeTemplate = ({ 
  id, 
  name, 
  category, 
  image, 
  description, 
  isPremium = false, 
  isPopular = false 
}) => {
  return (
    <div className="resume-template-card group relative bg-[#ededed] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      
      {isPremium && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            PREMIUM
          </span>
        </div>
      )}

      
      {isPopular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            POPULAR
          </span>
        </div>
      )}
      <div className="template-image-container relative max-h-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />        
        <div className="absolute inset-0 bg-transparent hover:bg-[#0000009e] transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100 shadow-lg">
            Use Template
          </button>
        </div>
      </div>

      
      <div className="template-info p-4">
        <div className="flex justify-start items-center mb-2">
          <h6 className=" text-sm font-[700] text-black">{name}</h6>
        </div>
        
        <p className=" text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* <div className="flex justify-between items-center">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {category}
          </span>
          
          <div className="flex items-center space-x-2">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Preview
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              Use Template
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResumeTemplate;