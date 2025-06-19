import { Scissors } from 'lucide-react'

import { tabs, panels } from './data/index';
import { useState } from 'react';

const Nav = () => {
    const [activeTab, setActiveTab] = useState('FoR');
    return (
        <div className="bg-white  w-3/4 mx-auto mt-6 rounded-3xl grid grid-cols-3">
            <div className="flex items-center justify-space pl-6">
                <Scissors className="h-7 w-11 mt-1 items-center justify-center text-neutral-900 px-1" />
                <span className="text-neutral-950 md:text-3xl flex font-semibold justify-self-center mukta ">Flexora
                    {/* <span className='text-blue-800 mukta justify-self-center text-3xl'>X</span> */}
                </span>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex space-x-2 border-2 border-neutral-900/50  rounded-full py-1 px-4  ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            id={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-3 py-1 text-md transition-all duration-200 ${
                                activeTab === tab.id
                                    ? '  font-semibold text-black  '
                                    : ' text-slate-800/50 font-semibold cursor-pointer '
                            }`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button className='rounded-full px-4 py-2 -mt-1  bg-red-600/80 text-white
                 border border-white shadow-red-200/60 shadow-xl font-semibold mr-8 cursor-pointer'>Try Now</button>
            </div>
        </div>
    )
}

export default Nav;
