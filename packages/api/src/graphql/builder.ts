import type { Session, User } from "better-auth";

import SchemaBuilder from "@pothos/core";

export interface PothosContext {
  session: { user: User; session: Session } | null;
}

const builder = new SchemaBuilder<{
  Context: PothosContext;
}>({});

export { builder };
