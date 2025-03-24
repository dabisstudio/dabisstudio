import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  count?: number;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, count, className }) => {
  return (
    <div className={`flex items-center justify-between mb-12 ${className || ''}`}>
      <h2 className="large-header">{title}</h2>
      {count !== undefined && (
        <div className="border border-zinc-700 rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-sm">
            {count.toString().padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
