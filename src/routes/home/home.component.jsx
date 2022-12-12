import React, { Component } from 'react';
import Button from 'antd/lib/button';

import { User, Lock, ChevronRight, ArrowRight } from 'react-feather';

class Home extends Component {
    render() {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className=" h-[700px] w-[360px] shadow-2xl shadow-[#5C5696] rounded-lg transform duration-200 hover:scale-110">

                    <div className="justify-end flex">
                        <p className="flex ml-10 text-slate-500 p-1 shadow-md text-bold">
                        <h1 className="mr-2"> New user? Sign Up</h1>
                        <a href="/" className="hover:text-slate-800 transform duration-200 hover:scale-110 underline">
                        here
                        </a>
                        </p>
                    </div>

                    <div className="z-[1] relative h-full ">
                        <div className="w-[320px] p-[30px] pt-[156px]">
                            <div className="p-5 relative flex  transform duration-200 hover:scale-110">
                                <User className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                                <input type="text" placeholder="User name / Email" className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-red-100 shadow-[#5C5696]" />
                            </div>

                            <div className="p-5 relative flex  transform duration-200 hover:scale-110 mt-10">
                                <Lock className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                                <input type="text" placeholder="Password" className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-red-100 shadow-[#5C5696]" />
                            </div>

                            <div className="transform duration-200 hover:scale-110 relative">
                                <Button type="primary" className='flex bg-red-200 hover:bg-red-100 text-pink-400 rounded-[26px] shadow-lg w-[60%] h-10 ml-auto text-[16px] mt-[30px] p-[16px 20px] items-center shadow-[#5C5696]  font-bold border-[#6A679E] '>
                                Log in Here
                                <ChevronRight className="text-pink-400 ml-auto"
                                size={28}/>
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home;