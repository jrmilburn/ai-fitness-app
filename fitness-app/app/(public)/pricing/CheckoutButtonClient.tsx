"use client";

import * as React from "react";
import { CheckoutButton } from "@clerk/clerk-react/experimental";

type CheckoutButtonClientProps = React.ComponentProps<typeof CheckoutButton>;

export function CheckoutButtonClient(props: CheckoutButtonClientProps) {
  return <CheckoutButton {...props} />;
}
