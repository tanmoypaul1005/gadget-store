import Image from "next/image";
import { auth } from "@/auth";
import { getAddress } from "../action/address";
import Address from "../components/Address/Address";

const ProfileInfo = async () => {

  const session = await auth();

  const address = await getAddress(session?.user?.email);

  return (
    <div className="flex flex-col items-center text-center common-class common-topGap">
      <div className="relative max-h-[180px] max-w-[180px] rounded-full  h-[100px] w-[100px] bg-orange-600 grid place-items-center text-white">
        {
          session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              width={90}
              height={90}
              className="rounded-full" />
          ) : (
            session?.user?.name.charAt(0)?.toUpperCase()
          )
        }
      </div>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{session?.user?.name}</h3>
        <p className="leading-[231%] lg:text-lg">{session?.user?.email}</p>
      </div>

      <div className="w-full  border-b border-[#a4a4a4]"></div>

      <Address email={session?.user?.email} address={address?.data} />

    </div>
  );
};

export default ProfileInfo;
