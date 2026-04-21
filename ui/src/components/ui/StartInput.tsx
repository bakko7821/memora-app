interface StartInputProps {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const StartInput = ({
  placeholder,
  value,
  onChange,
}: StartInputProps) => {
  return (
    <input
      className="outline-none border-2 border-(--border) rounded-xl min-w-37.5 px-3 py-1.5 text-(--muted-text) bg-(--header) hover:bg-(--hover-card) transition-colors"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
