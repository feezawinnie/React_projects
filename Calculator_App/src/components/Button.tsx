type ButtonProps = {
  label: string;
  className?: string;
};

function Button({ label, className = "" }: ButtonProps) {
  return (
    <button
      type="button"
      className={`h-16 border border-[#777] text-2xl ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;