import { TextArea } from '@/main/_components/atoms/TextArea';
import { Label } from '@/main/_components/atoms/Label';

export const TextAreaGroup = ({ name, placeholder, value, type, id, required, label }) => {
  return (
    <div className="textarea-group">
      <Label htmlFor={id}>{label}</Label>
      <TextArea name={name} placeholder={placeholder} value={value} id={id} required={required} />
    </div>
  );
};
