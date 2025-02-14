import React from 'react';

const Dog = ({
    name = "Default Name",
    breed = "Unknown Breed",
    age = "Unknown Age",
    description = "This is a default dog description.",
    image = "/src/assets/images/1.jpg"
}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-200 cursor-pointer">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600 text-sm">Breed: {breed}</p>
                <p className="text-gray-600 text-sm">Age: {age}</p>
                <p className="text-gray-700 text-base mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Dog;
