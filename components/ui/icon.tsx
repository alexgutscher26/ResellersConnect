import { cn } from "@/lib/utils"
import { Chrome, Download, Loader2, RefreshCw, Lock, Trash, type LucideIcon } from "lucide-react"

const iconMap = {
  chrome: Chrome,
  download: Download,
  spinner: Loader2,
  refreshCw: RefreshCw,
  lock: Lock,
  trash: Trash,
} as const

export type IconName = keyof typeof iconMap

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName
  className?: string
}

export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return null
  }

  return (
    <div {...props} className={cn("", className)}>
      <IconComponent className="h-full w-full" />
    </div>
  )
}
