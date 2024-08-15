"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { handleLogout } from "../action";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ButtonLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {push} = useRouter();

  const onClickLogout = async () => {
    setIsLoading(true);
    try {
      const response = await handleLogout();

      if (response && response.success) {
        push("/dashboard/signin");
      } else {
        console.error("Response tidak valid:", response);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <form>
      <Button variant={"destructive"} className="w-full justify-start" type="submit" disabled={isLoading} onClick={onClickLogout}>
        {isLoading ? (
          <>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="ml-2 text-xs">Loading....</span>
          </>
        ) : (
          <span className="w-full flex">
            <LogOut className="mr-2 size-4" />
            Logout
          </span>
        )}
      </Button>
    </form>
  );
};

export default ButtonLogout;
