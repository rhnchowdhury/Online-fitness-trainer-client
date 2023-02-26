import React, { useState } from 'react';
import ReviewShow from './ReviewShow';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
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
                            <th>Picture</th>
                            <th>Name</th>
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