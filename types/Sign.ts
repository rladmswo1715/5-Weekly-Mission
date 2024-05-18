import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

export interface FormValues {
  email: string;
  password: string;
}

export interface SignInputProps {
  type: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
}
