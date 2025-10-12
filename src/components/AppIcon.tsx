import { type LucideIcon } from "lucide-react";

interface IconProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

const AppIcon = ({ Icon, className = "" }: IconProps) => {
  return (
    <Icon
      className={`text-neutral-300 h-full w-full transition-colors
         hover:text-amber-400 dark:hover:text-indigo-400" 
         ${className}`}
    />
  );
};
export default AppIcon;
