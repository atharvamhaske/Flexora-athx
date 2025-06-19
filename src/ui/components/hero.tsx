import { ArrowUpRight } from "lucide-react";

import screenshotImg from '../../assets/256shots_so.png';
const Hero = () => {
  return ( <>
    <div className='max-h-[calc(100vh-24px)]  justify-center text-center  flex flex-col scrollbar-hide  '>
        <div className="text-7xl  tracking-tighter font-semibold text-gray-600/80 mt-50 text-center ">
            Not as Regular,   <span className="text-7xl  font-bold tracking-wide text-slate-800  "> Screenshots!</span> <br />
            <div className="py-2 -mt-1 tracking-tighter text-7xl ">
                It's a
            <span className=" ml-4  text-7xl font-bold
                text-purple-950  tracking-tight p-1 text-red-600/80 italic - ">Flexora </span>
            </div>
            <p className="text-zinc-900/70 -mt-2 text-lg tracking-tight font-medium py-4  "> Create beautiful sharable cards for your milestones <br/>
             from rants to personal wins, we make your flexes impossible to ignore.</p>
        </div>

    </div>
    <div className="justify-center mt-4 mx-auto flex flex-row gap-x-4 items-center">
      
         <button className="rounded-full cursor-pointer flex bg-black text-white   py-2 px-4 text-bold
          ">Create Flex  <ArrowUpRight className="text-white w-4 text-bold h-5"/> </button>
          <button className="bg-white flex rounded-full border-1  border-zinc-800/80  py-2 px-4 cursor-pointer text-bold text-black">See Examples</button>

    </div>
    <div className="mx-auto  flex flex-col space-y-4 justify-center item-center w-3/4 h-3/2 -mt-42 ">
    <img src={screenshotImg} className="mx-auto" alt="Screenshot example" />
    </div>
    </>
  )
}

export default Hero;