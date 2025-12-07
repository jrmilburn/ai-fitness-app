"use client";

import * as React from "react";
import { SubscriptionDetailsButton } from "@clerk/clerk-react/experimental";

type SubscriptionDetailsButtonClientProps =
  React.ComponentProps<typeof SubscriptionDetailsButton>;

export function SubscriptionDetailsButtonClient(
  props: SubscriptionDetailsButtonClientProps
) {
  return <SubscriptionDetailsButton {...props} />;
}
