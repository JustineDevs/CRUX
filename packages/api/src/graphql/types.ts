import { builder } from "./builder";

const UserType = builder.objectRef<{ id: string; email: string; name: string | null }>("User");

UserType.implement({
  fields: (t) => ({
    id: t.exposeString("id"),
    email: t.exposeString("email"),
    name: t.string({ nullable: true, resolve: (parent) => parent.name }),
  }),
});

builder.queryType({
  fields: (t) => ({
    health: t.string({
      resolve: () => "OK",
    }),
    me: t.field({
      type: UserType,
      nullable: true,
      resolve: (_root, _args, ctx) => {
        if (!ctx.session) return null;
        return {
          id: ctx.session.user.id,
          email: ctx.session.user.email,
          name: ctx.session.user.name,
        };
      },
    }),
  }),
});

builder.mutationType({
  fields: (t) => ({
    _empty: t.string({
      nullable: true,
      resolve: () => null,
    }),
  }),
});
