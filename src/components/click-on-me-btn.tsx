interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Allow optional className
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 text-2xl bg-orange-800 bg-opacity-50 text-white rounded-xl shadow-xl hover:bg-opacity-70 transition-all transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;


