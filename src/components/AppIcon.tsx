import { type LucideIcon } from "lucide-react";

interface IconProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

const AppIcon = ({ Icon, className = "" }: IconProps) => {
  return <Icon className={`text-current h-full w-full${className}`} />;
};
export default AppIcon;
