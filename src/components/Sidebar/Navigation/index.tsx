import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function Navigation() {
  return (
    <nav className="space-y-2">
      <NavItem icon={Home} title="Home" />
      <NavItem icon={BarChart} title="Dashboard" />
      <NavItem icon={SquareStack} title="Projects" />
      <NavItem icon={CheckSquare} title="Tasks" />
      <NavItem icon={Flag} title="Reporting" />
      <NavItem icon={Users} title="Users" />
    </nav>
  );
}
