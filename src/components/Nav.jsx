import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <>
            <nav className="flex gap-8 justify-center">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center items-center h-16 space-x-8">

                        <Link to="/" className="text-purple-950 text-2xl hover:text-red-600">Home</Link>
                        <Link to="/our-dogs" className="text-purple-950 text-2xl hover:text-red-600">Our Dogs</Link>
                        <Link to="/nasa-api" className="text-purple-950 text-2xl hover:text-red-600">Nasa API</Link>
                        <Link to="/about-us" className="text-purple-950 text-2xl hover:text-red-600">About Us</Link>
                        
                    </div>
                </div>
            </nav>

        </>
    )
};
export default Nav;
