import { z } from "zod"
import { router, publicProcedure, protectedProcedure } from "../trpc"

export const mediaRouter = router({
  getAllStickers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.media.findMany({
      where: {
        mediaType: "STICKER",
      },
    })
  }),

  createSticker: protectedProcedure
    .input(z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      price: z.number(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.media.create({
        data: {
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price * 100,
          mediaType: "STICKER",
          ownerId: ctx.session.user.id
        },
      })
    }),

  getAllGifs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.media.findMany({
      where: {
        mediaType: "GIF",
      },
    })
  }),

  createGif: protectedProcedure
    .input(z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      price: z.number(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.media.create({
        data: {
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price * 100,
          mediaType: "GIF",
          ownerId: ctx.session.user.id
        },
      })
    }),

    getMediaItem: publicProcedure
      .input(z.object({
        id: z.string()
      }))
      .query(({ ctx, input }) => {
        return ctx.prisma.media.findUnique({
          where: {
            id: input.id
          }
        })
      }
    )
})
