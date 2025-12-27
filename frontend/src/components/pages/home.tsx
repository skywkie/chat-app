import { SidebarUsers } from "@widgets/sidebar-users";
import { Chat } from "@widgets/chat";

export const Home = () => {
  return (
    <div className="flex">
      <SidebarUsers className="w-full h-dvh md:w-1/5" />
      <Chat className="hidden md:block" />
    </div>
  );
};
