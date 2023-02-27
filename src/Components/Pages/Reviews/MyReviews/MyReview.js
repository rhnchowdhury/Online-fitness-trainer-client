import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewShow from './ReviewShow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

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
                            reviews.map(review => <ReviewShow key={review._id}
                                review={review}

                            ></ReviewShow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyReview;