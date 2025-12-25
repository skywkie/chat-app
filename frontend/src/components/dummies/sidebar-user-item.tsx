import type { UserData } from "@utils/types";

interface SidebarUserItemProps {
  user: Partial<UserData>; // TODO: DELETE PARTIAL<> LATER
  key: React.Key;
}

export const SidebarUserItem = ({ user, key }: SidebarUserItemProps) => {
  return (
    <li
      key={key}
      className={`w-full h-16 rounded-2xl border-2 border-gray-700 cursor-pointer
		hover:bg-violet-950 transition-[2] px-3 py-1 first:mt-1`}
    >
      {user.username}
    </li>
  );
};
