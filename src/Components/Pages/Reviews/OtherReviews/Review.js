import React, { useEffect, useState } from 'react';
import ReviewShow from './ReviewShow';

const Review = () => {
    const [otherReview, setOtherReview] = useState([]);

    useEffect(() => {
        fetch('https://online-gym-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setOtherReview(data))
    }, []);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th style={{ color: 'rgb(204, 171, 82)' }}>Training Title</th>
                            <th style={{ color: 'rgb(204, 171, 82)' }}>Name</th>
                            <th style={{ color: 'rgb(204, 171, 82)' }}>Picture</th>
                            <th style={{ color: 'rgb(204, 171, 82)' }}>Message</th>
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