import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";

function Spinner({
  className,
  strokeWidth: _,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={2}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}

export { Spinner };
