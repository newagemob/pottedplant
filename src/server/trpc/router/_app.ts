import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { mediaRouter } from "./media";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  media: mediaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
