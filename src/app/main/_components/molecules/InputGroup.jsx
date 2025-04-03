import { Input } from '@/main/_components/atoms/Input';
import { Button } from '@/main/_components/atoms/Button';
import { Label } from '@/main/_components/atoms/Label';

export const InputGroup = ({ name, placeholder, icon, value, type, id, required, label }) => {
  return (
    <div className="input-group">
      <Label htmlFor={id}>{label}</Label>
      <div>
        <Input
          name={name}
          placeholder={placeholder}
          icon={icon}
          value={value}
          type={type}
          id={id}
          required={required}
        />
        <Button>{icon}</Button>
      </div>
    </div>
  );
};
