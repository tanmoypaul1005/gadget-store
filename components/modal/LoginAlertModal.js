import CommonModal from '@/app/components/modal/CommonModal';
import React from 'react';

const LoginAlertModal = ({ open, setOpen }) => {
    return (
        <div>
            <CommonModal
                open={open}
                setOpen={setOpen}
                content={
                    <div className='flex flex-col justify-center items-center py-5'>
                        <h2 className='text-2xl font-bold mb-5'>Warning</h2>
                        <p>You are not currently logged in. Please log in to continue.</p>
                    </div>
                }
            />
        </div>
    );
};

export default LoginAlertModal;