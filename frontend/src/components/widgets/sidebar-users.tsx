import { clsx } from "clsx";

import { SidebarUserItem } from "../dummies/sidebar-user-item";

interface SidebarUsersProps {
  className: string;
}

const users = [
  {
    username: "werrweawer",
  },
  {
    username: "4yw35tgr4w63",
  },
  {
    username: "aertg",
  },
  {
    username: "e4eqw5g54hwh45",
  },
  {
    username: "36546345w",
  },
  {
    username: "y5w43y4w5",
  },
  {
    username: "t343t4q",
  },
  {
    username: "e4eqw5g54hwh45",
  },
  {
    username: "4yw35tgr4w63",
  },
  {
    username: "aertg",
  },
  {
    username: "e4eqw5g54hwh45",
  },
  {
    username: "36546345w",
  },
  {
    username: "y5w43y4w5",
  },
  {
    username: "t343t4q",
  },
  {
    username: "e4eqw5g54hwh45",
  },
];

export const SidebarUsers = ({ className }: SidebarUsersProps) => {
  return (
    <aside className={clsx("z-5 px-2 custom-scroll bg-[#14132a]", className)}>
      <ul className="flex flex-col gap-2">
        {/* <ul className="h-300 overflow-y-scroll flex flex-col gap-1.5"> */}
        {users.map((user) => (
          <SidebarUserItem key={user.username} user={user} />
        ))}
      </ul>
    </aside>
  );
};
