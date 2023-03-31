import React from 'react';

const Blog = (props) => {
    const { id, name, title, date, time, cover_image, profile_image, tagLine } = props.blog;
    // console.log(props)
    
    const handleBookmark=props.handleBookmark;
    const handleReadingTime=props.handleReadingTime;
    return (
       
            <div className=''>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className="container w-full">
                        <img className='w-full md:h-96 rounded-xl mb-4' src={cover_image} alt="" />
                        <div className='flex flex-row justify-between mb-4 items-center'>
                            <div className='flex flex-col md:flex-row gap-4 '>
                                <div>
                                    <img className='w-14 h-14 rounded-full' src={profile_image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>{name}</h2>
                                    <h5>{date}</h5>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <p>{time} min read</p>
                                <button onClick={()=>handleBookmark(props.blog)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <h1 className='text-4xl font-bold w-full lg:w-4/5 mb-4'>{title}</h1>
                        <div className='flex flex-row gap-4 mb-4'>
                            {
                                tagLine.map((tag) => (
                                    <p className='font-bold text-zinc-600'>{tag}</p>
                                ))
                            }
                        </div>
                        <p onClick={()=>handleReadingTime(props.blog)} className='text-blue-800 mb-8 cursor-pointer'>Mark as read</p>
                        <hr className='border-1 border-info mb-12' />

                    </div>
                </div>
            </div>
      
    );
};

export default Blog;