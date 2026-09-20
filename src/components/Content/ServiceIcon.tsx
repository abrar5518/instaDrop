import {
  Activity, Building2, CalendarClock, CheckCircle2, Clock, FileText, MapPin,
  Package, RefreshCw, ShieldCheck, Truck, Zap,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  activity: Activity,
  building: Building2,
  calendar: CalendarClock,
  check: CheckCircle2,
  clock: Clock,
  "file-text": FileText,
  "map-pin": MapPin,
  package: Package,
  refresh: RefreshCw,
  shield: ShieldCheck,
  truck: Truck,
  zap: Zap,
};

export default function ServiceIcon({ name, ...props }: LucideProps & { name?: string | null }) {
  const Icon = icons[name || ""] || Truck;
  return <Icon {...props} />;
}
