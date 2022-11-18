import React, { forwardRef, InputHTMLAttributes } from "react";
import { useId } from "react-id-generator";
import { Label } from "./Label";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassname?: string;
  helper?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className = "", label, labelClassname = "", helper, ...props }, ref) => {
    const [id] = useId(1, "inputfield");

    return (
      <div className="label-col">
        {label && (
          <Label htmlFor={id} text={label} className={labelClassname} />
        )}
        <input
          ref={ref}
          id={id}
          className={`textfield ${helper ? "border-error" : ""} ${className}`}
          {...props}
        />
        {helper && <p className="text-sm text-error">{helper}</p>}
      </div>
    );
  }
);
