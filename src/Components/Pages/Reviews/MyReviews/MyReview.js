import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../../Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewShow from './MyReviewShow';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('MyReview');

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('gym-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('You want to cancel this order?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    };

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
                                handleDelete={handleDelete}
                            ></MyReviewShow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyReview;