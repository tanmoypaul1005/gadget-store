
import React from 'react';
import CommonModal from './CommonModal';

const LoginAlertModal = ({ open, setOpen }) => {
    return (
        <div>
            <CommonModal
                open={open}
                setOpen={setOpen}
                content={
                    <div className='flex flex-col items-center justify-center py-5'>
                        <h2 className='mb-5 text-2xl font-bold'>Warning</h2>
                        <p>You are not currently logged in. Please log in to continue.</p>
                    </div>
                }
            />
        </div>
    );
};

export default LoginAlertModal;