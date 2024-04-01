import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { createUserSession, getUserId, signUp } from "~/utils/session.server";
import { validateSignUp } from "~/utils/validation.server";
import { cn } from "~/lib/utils";
import siteConfig from "~/site.config";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction,
} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: `Sign Up | ${siteConfig.name}` },
    { name: "description", content: `Sign Up for ${siteConfig.name}` },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }

  return null;
};

type ActionData = {
  error?: string;
  fieldErrors?: Record<string, string>;
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }

  const formData = await request.formData();
  const body = Object.fromEntries(formData.entries());
  const parseRes = validateSignUp(body);

  if (parseRes.success) {
    const { email, username, password } = parseRes.data;
    const res = await signUp(email, username, password);
    if (res.success) {
      const { user } = res.data;
      return createUserSession(user.id, "/");
    } else {
      return json({ error: res.error }, { status: 400 });
    }
  }

  return json({ fieldErrors: parseRes.errors }, { status: 400 });
};

export default function SignUp() {
  const actionData = useActionData<ActionData>();

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  return (
    <Form
      method="POST"
      className="flex flex-col gap-5 grow justify-center w-80 mx-auto"
    >
      <h1 className="text-3xl font-bold">Create an Account!</h1>
      <div className="flex flex-col gap-2">
        <Label>Username</Label>
        <Input placeholder="Username" name="username" />
        <p
          className={cn(
            "text-sm text-destructive hidden",
            actionData?.fieldErrors?.username && "block",
          )}
        >
          {actionData?.fieldErrors?.username}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Email</Label>
        <Input placeholder="Email" name="email" />
        <p
          className={cn(
            "text-sm text-destructive hidden",
            actionData?.fieldErrors?.email && "block",
          )}
        >
          {actionData?.fieldErrors?.email}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Password</Label>
        <Input placeholder="Password" type="password" name="password" />
        <p
          className={cn(
            "text-sm text-destructive hidden",
            actionData?.fieldErrors?.password && "block",
          )}
        >
          {actionData?.fieldErrors?.password}
        </p>
      </div>
      <Button type="submit" className="text-base font-semibold">
        Sign Up
      </Button>
      <Link
        to="/sign-in"
        className="text-primary text-sm underline text-center"
      >
        Already have an account? Sign in instead!
      </Link>
    </Form>
  );
}
