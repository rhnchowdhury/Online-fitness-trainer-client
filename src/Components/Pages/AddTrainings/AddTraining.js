import React, { useContext } from 'react';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const AddTraining = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Services');

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const name = form.name.value
        const img = form.img.value;
        const message = form.message.value;

        const added = {
            name, img, message, email
        };
        fetch('https://online-gym-server.vercel.app/add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(added)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Training added successfully');
                    form.reset();
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <div className='m-12'>
            <h1 className='text-3xl font-bold text-center my-8' style={{ color: 'rgb(204, 171, 82)' }}>Add a Training</h1>
            <form onSubmit={handleAdd}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-3  place-items-center' >
                    <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name='name' placeholder="Course Title" className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" name='img' placeholder="Image URL" className="input input-bordered input-success w-full max-w-xs" />
                    <textarea name='message' className="textarea textarea-bordered textarea-success lg:h-3/12 lg:w-3/12" placeholder="Course Details"></textarea>
                    <button className="btn" style={{ color: 'rgb(204, 171, 82)' }}>Added</button>
                </div>
            </form>
        </div>
    );
};

export default AddTraining;