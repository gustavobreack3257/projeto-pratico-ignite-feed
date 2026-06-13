"use client";

import { div } from "framer-motion/client";
import { Tabs } from "radix-ui";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected: boolean;
}
export function TabItem({ value, title, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.Trigger>
  );
}
