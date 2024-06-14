import Image from "next/image";

function Avatar({ avatar, name }) {

  if (avatar) {
    return (
      <Image
        className="cursor-pointer rounded-full max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px]"
        src={avatar}
        width={50}
        height={50}
        alt="Profile"
      />
    );
  } else {
    return (
      <div
        className="text-white text-[24px] font-medium mb-3 bg-indigo-600 max-w-[50px] min-w-[50px] min-h-[50px] max-h-[50px]  rounded-full flex items-center justify-center"
      >
        {name?.charAt(0)}
      </div>
    );
  }
}

export default Avatar