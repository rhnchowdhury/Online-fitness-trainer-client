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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black'>
            {
                adds.map(ad => <div key={ad._id}>

                    <div className="card lg:w-80 bg-base-100 shadow-xl m-20 bg-black">
                        <figure >
                            <img src={ad.img} alt="" className="w-full h-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title" style={{ color: 'rgb(204, 165, 82)' }}>{ad.name}</h2>
                            <p className='text-white'>{ad.message}</p>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AddTrainingShow;