import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";

export interface FormValues {
  email: string;
  password: string;
  signUpPassword: string;
  signUpPasswordCheck: string;
}

export interface SignInputProps {
  pageType: string;
  type: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  watch?: UseFormWatch<FormValues>;
  loginFailState?: boolean;
}
