interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="px-36 p-2 w-full h-full">
      <textarea
        className="w-full h-full resize-none outline-none text-(--text)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
