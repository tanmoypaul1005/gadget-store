
import { getUser } from '@/app/action/user';
import Avatar from '@/app/components/avatar/Avatar';
import { formatDate } from '@/util/utilityFunction';

const CommentCard = async ({ comment, onCommentDelete }) => {

    const user = await getUser(comment?.user);

    return (
        <div>
            <div className="flex items-start my-8 space-x-4">

                <Avatar avatar={user?.data?.image ?? ""} name={user?.data?.name ?? ""} />

                <div className="w-full">

                    <div className='relative flex-col justify-between gap-y-2 md:flex-row'>
                        <h5 className="font-bold text-white"> {user?.data?.name}</h5>
                        <h5 className="font-normal text-white">{formatDate(comment?.createdAt)}</h5>

                        {/* {auth?.id === comment?.author?.id && <div className="relative top-0 right-0">
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
                        </div>}  */}

                    </div>

                    <p className="mt-2 text-slate-300 md:mt-0">
                        {comment?.comment ?? comment?.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;