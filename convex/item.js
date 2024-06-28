import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const store = mutation({
    args: {
        text: v.string()
    },
    handler: async (ctx,args) => {
        const newItem = await ctx.db.insert("items",{
            text: args.text
        })

        return newItem
    }
})

export const items = query({
    handler: async (ctx) => {
        const allItems = await ctx.db.query("items").collect()
        return allItems
    }
})