"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid grey' ,  
    boxShadow: 24,
    p: 0,
    borderRadius: "10px",
    outLine:"none",
  };

export default function CommonModal({ open, setOpen, content = <></>,padding="p-5",title="" }) {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  sx={style}>
                    <div className={`relative ${padding} bg-slate-800 text-white border-2 border-white`}>
                        <Image
                            onClick={handleClose}
                            style={{ maxWidth: "20px", minWidth: "20px", naxHeight: "20px", minHeight: "20px", cursor: "pointer"}}
                            className='absolute top-3 right-3 cursor-pointer'
                            src={"/images/icons/redCancel.svg"}
                            alt=''
                            width={10}
                            height={10}
                        />
                        {title && <div className='text-3xl font-bold text-center text-white'>{title}</div>}
                        {content}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}