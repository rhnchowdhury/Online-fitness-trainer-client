import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // jwt token
                fetch('https://online-gym-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('gym-token', data.token);
                        navigate(from, { replace: true })
                    });
            })
            .catch(err => console.error(err));
    };
    return (
        <div className="hero" style={{ backgroundColor: 'rgb(204, 165, 82)' }}>
            <div className="hero-content flex-col lg:flex-row my-8">
                <div className="card flex-shrink-0 w-full shadow-2xl max-w-sm  p-10">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' className="input" required style={{ backgroundColor: 'rgb(204, 171, 82)', border: '1px solid white' }} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' className="input " required style={{ backgroundColor: 'rgb(204, 171, 82)', border: '1px solid white' }} />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-black" type="submit" value="Login" />
                        </div>
                        <p>Have an account? <Link className='text-black font-bold' to='/signup'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;