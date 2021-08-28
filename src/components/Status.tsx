import React from "react";
import { Tag, TagLabel } from "@chakra-ui/react";

export interface StatusProps {
  status: "normal" | "degraded" | "partial" | "down";
}

/**
 * Add Custom Components
 */
export const Status = (props: StatusProps) => {
  const status = props.status ?? "normal";

  const labels = {
    normal: "All Systems Normal",
    degraded: "Degraded Performance",
    partial: "Partial Outage",
    down: "Complete Outage",
  };

  const colors = {
    normal: "green",
    degraded: "yellow",
    partial: "orange",
    down: "red",
  };

  return (
    <Tag colorScheme={colors[status]} {...props}>
      <TagLabel>⬤ {labels[status]}</TagLabel>
    </Tag>
  );
};
