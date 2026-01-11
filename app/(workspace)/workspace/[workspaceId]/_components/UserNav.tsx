import { useAuth } from "@/app/provider/useAuth";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function UserNav() {
  const router = useRouter();
  const { user } = useAuth();
  const logOutFunction = async () => {
    router.push("/");
    await supabase.auth.signOut();
  };
  return (
    <Image
      src={
        user?.user_metadata.avatar_url ??
        "https://avatars.githubusercontent.com/u/194279381?s=400&u=c7a0127b09c17e0de8f96d62dd9788b27185cbc6&v=4"
      }
      alt="avatar"
      className="hover:cursor-pointer rounded-full"
      onClick={logOutFunction}
      width={40}
      height={40}
    />
  );
}
