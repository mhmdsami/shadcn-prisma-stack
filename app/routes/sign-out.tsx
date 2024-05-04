import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { signOut } from "~/utils/session.server";

export let action: ActionFunction = ({ request }) => signOut(request);

export let loader: LoaderFunction = () => redirect("/");
