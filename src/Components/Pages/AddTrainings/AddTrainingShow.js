import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AddTrainingShow = () => {
    const { user } = useContext(AuthContext);
    const [adds, setAdds] = useState([]);

    useEffect(() => {
        fetch(`https://online-gym-server.vercel.app/add?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAdds(data))
    }, [user?.email]);
    return (
        <div className='my-4 lg:m-20'>
            {
                adds.map(ad => <div key={ad._id}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="card lg:w-80 bg-base-100 shadow-xl">
                            <figure >
                                <img src={ad.img} alt="" className="w-full h-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{ad.name}</h2>
                                <p>{ad.message}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AddTrainingShow;