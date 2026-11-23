type ButtonProps = {
  label: string;
  className?: string;
};

function Button({ label, className = "" }: ButtonProps) {
  return (
    <button
      type="button"
      className={`h-16 rounded-2xl text-2xl ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;