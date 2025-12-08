"use client";

import * as React from "react";
import { SubscriptionDetailsButton } from "@clerk/clerk-react/experimental";

type SubscriptionDetailsButtonClientProps =
  React.ComponentProps<typeof SubscriptionDetailsButton>;

export function SubscriptionDetailsButtonClient(
  props: SubscriptionDetailsButtonClientProps
) {
  return (
    <div
      className="p-2 rounded cursor-pointer border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
    >
      <SubscriptionDetailsButton
      subscriptionDetailsProps={{ appearance: { 
        elements: {
          modal: "z-50"
        },
       } }}
      {...props} />
    </div>
  )
}
