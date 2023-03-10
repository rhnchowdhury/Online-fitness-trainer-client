import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ReviewShow = ({ review, handleDelete }) => {
    const { _id, trainingName, trainer, url, message } = review;

    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><HiOutlineTrash className=' w-6 h-6'></HiOutlineTrash></button>
                </label>
            </th>
            <td>
                <div className="font-bold">{trainingName}</div>
            </td>
            <td>
                <div className="font-semibold">{trainer}</div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={url} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{message}</td>
            <td>
                <Link to='/update'><button className="btn btn-ghost btn-xs">Edit Review</button></Link>
            </td>
        </tr>

    );
};

export default ReviewShow;