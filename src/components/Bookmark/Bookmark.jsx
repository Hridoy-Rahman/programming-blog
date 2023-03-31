import React from 'react';

const Bookmark = (props) => {

    const { bookmark,readingTime} = props;
  
    
    let totalTime = 0;
    for (const blog of readingTime) {
        totalTime = totalTime + parseFloat(blog.time)
    }
    return (
        <div>
            <div className='bg-gray-200 p-4 rounded-lg mb-4'>
                <h1 className='text-2xl font-bold text-purple-800 text-center'>Spent time on read : {totalTime} min</h1>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg'>
                <h1 className='text-2xl font-bold mb-4 items-center'>Bookmarked Blogs :{bookmark.length} </h1>
                
                    {
                        bookmark.map((bookmarks)=>{
                            
                             return(
                                <div className='bg-white p-4 rounded-lg mb-3'>
                                <h1 className='text-2xl font-bold mb-4 items-center'>{bookmarks.title}</h1>
                             </div>
                             )
                        })
                    }
                    
            </div>
        </div>
    );
};

export default Bookmark;