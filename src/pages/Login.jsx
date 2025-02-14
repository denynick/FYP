// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError('Username or password is incorrect.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-4">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
            {/* Link to the Register page */}
            <div className="mt-4">
                <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
