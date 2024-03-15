import BackArrow from "@/components/backArrow";
import { SubmitButton } from "../login/submit-button";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import Link from "next/link";
import { addUser } from "@/services/users.service";
import { type UUID } from "crypto";

export default function Register({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get('name') as string;
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/register?message=Could not authenticate user");
    }

    try {
      if (data.user && data.user.id) await addUser(data.user.id as UUID, name);
    } catch (err) {
      return redirect("/register?message=Could not authenticate user");
    }

    return redirect("/register?message=Check your email to continue sign up process");
  };

  return (
    <div className="w-5/6 flex flex-col items-center">
      <div className="w-full sm:relative md:w-[640px]">
        <BackArrow />
      </div>
      <div className="flex flex-col w-full sm:max-w-md gap-2">
        <h1 className="text-center flex justify-center items-center mt-12 mb-8 select-none">
          <span className="font-poly italic text-6xl"> E </span>
          <span className="flex align-middle text-4xl"> -volution</span>
        </h1>

        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground relative select-none">
          <label className="text-md" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-6"
            name="name"
            placeholder="Name"
            required
          />
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen "
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />

          <div className="justify-center flex pt-[60px]">
            <SubmitButton
              formAction={signUp}
              pendingText="Signing Up..."
              className="select-none">
              Sign Up
            </SubmitButton>
          </div>
          {searchParams.message &&
            <div className="h-10 text-center font-bold bg-slate-200 rounded-xl flex items-center justify-center w-[85%] self-center px-5">
              {searchParams.message}
            </div>
          }
          <div className="w-fit self-center select-none">
            <Link href='/login' className="underline justify-center flex">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}