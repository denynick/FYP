import React from 'react';

const Card = ({
    title = "Default Title",   
    description = "",
    imageUrl = "/src/assets/images/bird-toy.avif",
    tag = "Default",   
}) => {
    
    return (
        <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-200 cursor-pointer">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" loading="lazy"  />
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="font-bold text-xl text-gray-800">{title}</h2>
                        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
                            {tag}
                        </span>
                    </div>                   
                    <p className="text-gray-700 text-base">{description}</p>
                </div>               
            </div>
        </>
    );
};
export default Card;
