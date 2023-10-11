import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setcomments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(3);

  const handleLoadMore = () => {
    setVisibleComments(prevVisibleComments => prevVisibleComments +3 );
  };

  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setcomments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchcomments();
  }, []);

  return (
   <div className='py-12' >
     <div className='flex justify-center items-center flex-wrap gap-4' >
    
 
    {comments.slice(0, visibleComments).map(comment => (
      <Comment  item={comment} ></Comment>
    ))}

</div>
<div className='flex justify-center items-center'>
<button
  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10'
  onClick={handleLoadMore}
>
  Load More
</button>
</div>
   </div>
  );
};

export default CommentList;