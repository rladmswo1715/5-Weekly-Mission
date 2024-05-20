export interface ButtonProps {
  children: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  type: string;
  handleButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
