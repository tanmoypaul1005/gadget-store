import { formatDate } from '@/util/utilityFunction';
import React from 'react'
import { SlCalender } from "react-icons/sl";

const DateComponent = () => {
    const currentDate = new Date();
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    return (
        <div className='flex items-center justify-center gap-x-2'>
            <SlCalender />
            <div className='text-xs font-medium text-center'>{`${formatDate(currentDate)} - ${formatDate(nextMonthDate)}`}</div>
        </div>
    )
}

export default DateComponent