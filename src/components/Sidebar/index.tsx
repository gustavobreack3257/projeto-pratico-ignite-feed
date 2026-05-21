import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { LogoSVG } from "./Logo";
import { NavItem } from "./Navigation/NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

import * as Input from "@/components/Input";

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <LogoSVG />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </Input.Root>

      <nav className="space-y-2">
        <NavItem icon={Home} title="Home" />
        <NavItem icon={BarChart} title="Dashboard" />
        <NavItem icon={SquareStack} title="Projects" />
        <NavItem icon={CheckSquare} title="Tasks" />
        <NavItem icon={Flag} title="Reporting" />
        <NavItem icon={Users} title="Users" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-1">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  );
}
