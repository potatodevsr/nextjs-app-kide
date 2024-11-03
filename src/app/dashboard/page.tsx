import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Page() {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="LogOut"
        title="LogOut"
        className="rounded-full"
        asChild
      >
        <LogoutLink>
          <LogOut />
        </LogoutLink>
      </Button>
      <h1>Dashboard</h1>
    </>
  );
}
