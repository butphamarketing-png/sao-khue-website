import { Input } from "@/components/ui/input";
import { ICON_OPTIONS, resolveLucideIcon } from "@/lib/lucide-icons";
import { Field } from "./admin-ui";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  listId: string;
  placeholder?: string;
};

export function IconPickerField({
  label,
  value,
  onChange,
  listId,
  placeholder = "shield, users, award...",
}: Props) {
  const Icon = resolveLucideIcon(value);

  return (
    <Field label={label}>
      <div className="flex items-center gap-2">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
          title={value || "Chọn icon"}
        >
          <Icon size={20} />
        </div>
        <Input
          list={listId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
        />
        <datalist id={listId}>
          {ICON_OPTIONS.map((icon) => (
            <option key={icon} value={icon} />
          ))}
        </datalist>
      </div>
    </Field>
  );
}
