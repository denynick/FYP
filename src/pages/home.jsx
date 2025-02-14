import React from 'react';
import disastersData from '../disasters.json';
import { useAuth } from '../AuthContext';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const [disasters, setDisasters] = React.useState(disastersData);

  return (
    <>
      <div className="flex flex-col items-center">

         {/* NASA API Authentication Notice */}
         {!user && (
          <div className="p-2 rounded-md ">
            <p>
              🔒 For visualization of NASA API data, authentication is required.
              <Link to="/login" className="text-blue-600 font-semibold ml-2">
                Login here
              </Link>
            </p>
          </div>
        )}
        {/* Disaster Grid */}
        <main>
          <h1>Recent Natural Disasters</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {disasters.map((disaster, index) => (
              <Card
                key={index}
                title={disaster.name}
                description={disaster.description}
                imageUrl={"/src/assets/images/" + disaster.image}
                tag={disaster.tag}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
