import React from 'react'

import Moment from 'react-moment';
const Comments = ({comment}) => {
  
      

      console.log(comment)

    return (
      <>
      {comment.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comment.length}
            {' '}
            Comments
          </h3>
            {comment.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {<Moment format='MMM DD, YYYY'>{comment.createdAt}</Moment>}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{comment.comment}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
  


export default Comments