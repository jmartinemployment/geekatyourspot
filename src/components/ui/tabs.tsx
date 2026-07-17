"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-4xl p-[3px] text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-[#025E73]",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

const tabsTriggerVariants = cva(
  "relative inline-flex items-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "h-[calc(100%-1px)] flex-1 justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm",
          "text-foreground/60 hover:text-foreground",
          "group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:px-2.5 group-data-vertical/tabs:py-1.5",
          "data-active:bg-background data-active:text-foreground",
          "dark:text-muted-foreground dark:hover:text-foreground",
          "dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        ].join(" "),
        industryBuilt: [
          "h-[72px] w-full justify-between px-5 py-4",
          "bg-[#024059]",
          "text-white text-lg",
          "shadow-box",
          "data-active:border-none",
          "data-active:text-white",
          "data-active:bg-[#024059]",
          "hover:border-white hover:text-white hover:bg-[#8C4E2A]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
const tabsContentVariants = cva("", {
  variants: {
    variant: {
      default: [].join(" "),
      industryBuilt: [
        "relative flex w-full flex-col overflow-hidden rounded-sm border border-white/10 bg-[#C88347] p-8 shadow-2xl md:p-12 lg:p-14",
      ].join(" "),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
function TabsTrigger({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.Tab.Props & VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.Panel.Props & VariantProps<typeof tabsContentVariants>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
};
