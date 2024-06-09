import Link from "next/link";

function Avatar({ avatar, name }) {

  if (avatar) {
    return (
      <Link href={"/"}>
        <img
          // onClick={(e)=>{
          //   e.stopPropagation();
          // }}
          className="cursor-pointer rounded-full max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px]"
          src={avatar}
          alt="Profile"
        />
      </Link>
    );
  } else {
    return (
      <div
        className="text-white bg-indigo-600 max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px] h-12 rounded-full flex items-center justify-center"
      >
        {name?.charAt(0)}
      </div>
    );
  }
}

export default Avatar