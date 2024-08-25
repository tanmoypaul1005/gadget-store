import { formatDate } from '@/util/utilityFunction';
import React from 'react'

const DateComponent = () => {
    const currentDate = new Date();
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    return (
        <div className='text-xs font-medium text-center'>{`${formatDate(currentDate)} - ${formatDate(nextMonthDate)}`}</div>
    )
}

export default DateComponent