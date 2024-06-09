"use client"
import Avatar from '@/components/avatar/Avatar';
import React, { useState } from 'react';
// import { i3dots, iDelete } from '../../../app/utility/imageImports';
// import { useAuth } from '../../../hooks/useAuth';
// import Avatar from '../../../components/Avatar';

const CommentCard = ({ comment, onCommentDelete }) => {

    const [isMenuBarOpen, setMenuBarOpen] = useState(false);

    return (
        <div>
            <div className="flex items-start my-8 space-x-4">
                <div className="text-white bg-indigo-600 avater-img">
                     {/* <Avatar authId={comment?.author?.id} avatar={comment?.author?.avatar} name={comment?.author?.firstName}/>  */}
                </div>
                <div className="w-full">
                    <div className='relative flex justify-between'>
                        {/* <h5 className="font-bold text-slate -500">{comment?.author?.firstName} {comment?.author?.lastName}</h5>

                        {auth?.id === comment?.author?.id && <div className="relative top-0 right-0">
                            <button onClick={(e) => {
                                setMenuBarOpen(!isMenuBarOpen)
                                console.log("isMenuBarOpen", isMenuBarOpen)
                            }} className="cursor-pointer">
                                <img
                                    src={i3dots}
                                    alt="3dots of Action"
                                />
                            </button>
                            {
                                isMenuBarOpen && <div className="action-modal-container">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onCommentDelete();
                                        }}
                                        className="action-menu-item hover:text-red-500"
                                    >
                                        <img
                                            src={iDelete}
                                            alt="Delete"
                                        />
                                        Delete
                                    </button>
                                </div>
                            }
                        </div>} */}

                    </div>

                    <p className="text-slate-300">
                        {comment?.comment ?? comment?.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;