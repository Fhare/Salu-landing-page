import "./_placeholder.scss";

interface PlaceholderProps {
  title: string;
  description: string;
}

export function SectionPlaceholder({ title, description }: PlaceholderProps) {
  return (
    <div className="placeholder-container">
      <h2 className="service-heading">{title}</h2>
      <span>{description}</span>
    </div>
  )
}