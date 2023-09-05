"use client";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const { logout } = useAuth();

  return (
    <div className="w-full  bg-gray-50 dark:bg-gray-700 h-[50px] flex items-center justify-end px-6">
      <button onClick={() => logout()} className="text-[red] font-semibold">
        {" "}
        Log out{" "}
      </button>
    </div>
  );
};
