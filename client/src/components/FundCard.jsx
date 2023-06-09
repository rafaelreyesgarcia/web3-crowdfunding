import React from 'react'

import { tagType, thirdweb } from '../assets'
import  {calculateBarPercentage, daysLeft} from '../utils'

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick
}) => {
  const remainingDays = daysLeft(deadline);
  return (
    // campaign
    <div
      className='
        sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer
      '
      onClick={handleClick}
    >
      <img src={image} alt="fund" className='w-full h-[158px] object-cover rounded-[15px]'/>
      {/* content */}
      <div className='flex flex-col p-4'>
        {/* campaign category */}
        <div className='flex flex-row items-center mb-[18px]'>
          <img src={tagType} alt="tag" className='w-[17px] h-[17px] object-contain' />
          <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]'>Gaming</p>
        </div>
        {/* title and description*/}
         <div className='block'>
          <h3 className='font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate'>
            {title}
          </h3>
          <p className='mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate'>
            {description}
          </p>
         </div>
         {/* details */}
         <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
            <div className='flex flex-col'>
              <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                {amountCollected}
              </h4>
              <p
                className='
                  mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191]
                  sm:max-w-[120px] truncate
                '
              >
                raised of {target}
              </p>
            </div>
            <div className='flex flex-col'>
              <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                {remainingDays}
              </h4>
              <p
                className='
                  mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191]
                  sm:max-w-[120px] truncate
                '
              >
                Days Left 
              </p>
            </div>
          </div>
          {/* progress bar */}
          <div className="relative pt-2">
            <div className="overflow-hidden h-2 mb-4 flex rounded bg-[#4b5264]">
              <div style={{ width: `${calculateBarPercentage(target, amountCollected)}%` }} className="bg-[#4acd8d] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
            </div>
          </div>
          {/* owner */}
          <div className='flex items-center mt-[20px] gap-[12px]'>
            <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
              <img src={thirdweb} alt="user" className='w-1/2 h-1/2 object-contain' />
            </div>
            <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>
              by <span className='text-[#b2b3bd]'>{owner}</span>
            </p>
          </div>
      </div>
    </div>
  )
}

export default FundCard