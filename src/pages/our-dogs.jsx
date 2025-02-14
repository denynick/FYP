import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dog from '../components/Dog';

const OurDogs = () => {

    const [dogs, setDogs] = useState([]);

    React.useEffect(() => {
        axios
        .get("https://raw.githubusercontent.com/denynick/web-level6/refs/heads/main/dogs.json")
        .then(res => setDogs(res.data))
        .catch(err=>console.log(err))
        }, []);
        
  return (
    <>
      <div className="flex flex-col items-center">        

        {/* Product Grid (Always visible) */}
        <main>
          <h1></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {dogs.map((dog, index) => (
              <Dog
                key={index}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                image={"/src/assets/images/" + dog.image}                
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default OurDogs;
