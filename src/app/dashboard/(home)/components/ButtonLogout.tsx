import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { handleLogout } from "../action";

const ButtonLogout = () => {
  return (
    <form action={handleLogout}>
      <Button variant={"destructive"} className="w-full justify-start">
        <LogOut className="mr-2 size-4" />
        Logout
      </Button>
    </form>
  );
};

export default ButtonLogout;
