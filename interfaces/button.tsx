import { ReactNode } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export interface ButtonArrowProps {
  children: ReactNode;
  href: string;
}

export interface ButtonTextProps {
  children: ReactNode;
  href: string;
  className?: string;
}
