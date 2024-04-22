import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

import { supabaseAdmin as supabase } from "@/libs/supabaseAdmin";

interface UseUserResponse {
  user: User | null;
  isUserLoading: boolean;
}

export const useUser = (): UseUserResponse => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = (await supabase.auth.getSession()).data.session?.user;
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsUserLoading(false);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { user, isUserLoading };
};
