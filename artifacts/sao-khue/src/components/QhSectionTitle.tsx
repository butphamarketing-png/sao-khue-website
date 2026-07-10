type Props = {
  title: string;
  className?: string;
};

export function QhSectionTitle({ title, className = "" }: Props) {
  return (
    <div className={`qh-section-title ${className}`}>
      <h2>{title}</h2>
    </div>
  );
}
