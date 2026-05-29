import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  className?: string;
};

export function FloatingLabelInput({
  label,
  className = "",
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        placeholder=" "
        className="peer w-full rounded-md border border-border bg-background px-4 pb-2 pt-6 text-base text-foreground outline-none transition-colors focus:border-crimson focus:ring-1 focus:ring-crimson/30"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:scale-[0.85] peer-focus:text-crimson peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[0.85]"
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingLabelTextarea({
  label,
  className = "",
  rows = 4,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();

  return (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        rows={rows}
        placeholder=" "
        className="peer w-full resize-y rounded-md border border-border bg-background px-4 pb-2 pt-6 text-base text-foreground outline-none transition-colors focus:border-crimson focus:ring-1 focus:ring-crimson/30"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:scale-[0.85] peer-focus:text-crimson peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[0.85]"
      >
        {label}
      </label>
    </div>
  );
}
