import { email, minLength, object, parse, string, ValiError } from "valibot";
import type { BaseSchema, Input } from "valibot";

const SignUpSchema = object({
  username: string("Username is required", [
    minLength(3, "Username must be at least 3 characters"),
  ]),
  email: string("Email is required", [
    email("Please enter a valid email address"),
  ]),
  password: string("Password is required", [
    minLength(8, "Password must be at least 8 characters"),
  ]),
});

const SignInSchema = object({
  username: string("Username is required", [
    minLength(3, "Username is required"),
  ]),
  password: string("Password is required", [
    minLength(3, "Password is required"),
  ]),
});

type ValidatedForm<Schema extends BaseSchema> =
  | {
      success: true;
      data: Input<Schema>;
    }
  | {
      success: false;
      errors: Record<string, string>;
    };

const validateForm =
  <T>(schema: T) =>
  (data: Record<string, any>): ValidatedForm<T> => {
    try {
      const parsed = parse(schema, data);
      return { success: true, data: parsed };
    } catch (error) {
      if (error instanceof ValiError) {
        let errors = {};
        error.issues.forEach((issue) => {
          if (issue.path) {
            errors[issue.path[0].key] = issue.message;
          }
        });
        return { success: false, errors };
      }
    }
  };

export const validateSignUp = validateForm(SignUpSchema);
export const validateSignIn = validateForm(SignInSchema);
