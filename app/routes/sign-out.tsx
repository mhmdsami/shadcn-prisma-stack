import { signOut } from "~/utils/session.server";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

export let action: ActionFunction = ({ request }) => signOut(request);

export let loader: LoaderFunction = () => redirect("/");
