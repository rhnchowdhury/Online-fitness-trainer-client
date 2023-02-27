import React, { useEffect, useState } from 'react';
import ReviewShow from './ReviewShow';

const Review = () => {
    const [otherReview, setOtherReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setOtherReview(data))
    }, []);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Training Title</th>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            otherReview.map(others => <ReviewShow key={others._id}
                                others={others}

                            ></ReviewShow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;