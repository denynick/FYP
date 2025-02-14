import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Purrrfect Day</Link>
                <div className="space-x-4">

                    <div className="space-x-4">
                        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                        <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;

