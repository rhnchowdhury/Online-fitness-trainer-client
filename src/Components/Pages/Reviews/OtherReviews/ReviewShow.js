import React from 'react';

const ReviewShow = ({ others }) => {
    const { trainingName, trainer, url, message } = others;
    return (
        <tr>
            <td style={{ backgroundColor: 'rgb(204, 171, 82)' }}>
                <div className="font-bold">{trainingName}</div>
            </td>
            <td style={{ backgroundColor: 'rgb(204, 171, 82)' }}>
                <div className="font-semibold">{trainer}</div>
            </td>
            <td style={{ backgroundColor: 'rgb(204, 171, 82)' }}>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={url} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td style={{ backgroundColor: 'rgb(204, 171, 82)' }}>{message}</td>
        </tr>
    );
};

export default ReviewShow;