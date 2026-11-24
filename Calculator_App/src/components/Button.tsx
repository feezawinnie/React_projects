type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

function Button({ label, className = "", onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-16 border border-[#777] text-2xl ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;