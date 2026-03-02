// ─────────────────────────────────────────
// ProfileInfo.jsx (Server Component)
// ─────────────────────────────────────────
import Image from "next/image";
import { auth } from "@/auth";
import { getAddress } from "../action/address";
import Address from "../components/Address/Address";

const ProfileInfo = async () => {
  const session = await auth();
  const address = await getAddress(session?.user?.email);

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-10">
      <div className="space-y-6 common-class">

        {/* Profile Card */}
        <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
          {/* Banner */}
          <div className="relative h-24 border-b bg-gradient-to-r from-indigo-600/30 via-violet-600/20 to-purple-600/30 border-white/5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02em0tMTIgMGMwIDYuNjMtNS4zNyAxMi0xMiAxMnY2YzkuOTQgMCAxOC04LjA2IDE4LTE4aC02eiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-40" />
          </div>

          <div className="px-6 pb-6">
            {/* Avatar */}
            <div className="flex items-end justify-between mb-4 -mt-12">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl ring-4 ring-[#111118] overflow-hidden bg-indigo-600
                                flex items-center justify-center shrink-0">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-white">
                      {session?.user?.name?.charAt(0)?.toUpperCase()}
                    </span>
                  )}
                </div>
                {/* Online dot */}
                <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500
                                 rounded-full ring-2 ring-[#111118]" />
              </div>

              {/* Edit Profile button */}
              {/* <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 border rounded-xl bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Profile
              </button> */}
            </div>

            {/* Name & Email */}
            <h2 className="text-xl font-bold text-white">{session?.user?.name}</h2>
            <p className="text-sm text-gray-400 mt-0.5">{session?.user?.email}</p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { label: "Orders", value: "—" },
                { label: "Addresses", value: address?.data?.length || 0 },
                { label: "Member", value: "Active" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center py-3 transition-colors border rounded-xl bg-white/5 border-white/5 hover:border-white/10">
                  <span className="text-base font-bold text-white">{value}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
          <div className="bg-[#16161f] px-6 py-4 border-b border-white/5 flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-indigo-600/20 border-indigo-500/20">
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Saved Addresses</h3>
              <p className="text-xs text-gray-500">Manage your delivery locations</p>
            </div>
          </div>
          <div className="p-6">
            <Address email={session?.user?.email} address={address?.data} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileInfo;
