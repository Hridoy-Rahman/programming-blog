import React from 'react';
const Header = () => {
    return (
        <div>
            <div className='container mx-auto p-4'>
                <div className="flex flex-col md:flex-row justify-between items-center ">
                   <div className="p-8">
                       <h1 className=' font-bold text-3xl'>Programming Hub</h1>
                    </div>
                    <div className="flex flex-col gap-4 font-bold text-xl p-8 md:flex-row items-center">
                        <a href="/Home">Home</a>
                        <a href="/login">Login</a>
                        <a href="/Blog">Blog</a>
                        <img className='w-14 h-14 rounded-full' src="https://img.freepik.com/free-photo/middle-aged-man-wearing-jacket-laughing-happy_150588-72.jpg?size=626&ext=jpg" alt="" />
                    </div>                   
                </div>
                <hr className='border-1 border-info' />
            </div>
        </div>
    );
};

export default Header;