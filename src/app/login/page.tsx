import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  <main>
    <h1>Admin Dashboard</h1>
    <Button asChild>
      <LoginLink>Sign In</LoginLink>
    </Button>
  </main>;
}