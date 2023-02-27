import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewShow from './MyReviewShow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('You want to cancel this order?')
        if (proceed) {
            fetch(``, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Training Title</th>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Message</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewShow key={review._id}
                                review={review}

                            ></MyReviewShow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyReview;