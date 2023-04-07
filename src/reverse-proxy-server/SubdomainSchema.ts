import ty from "@xieyuheng/ty"
import { DataSchema } from "fidb/lib/data"

export const SubdomainSchema = ty.intersection(
  DataSchema,
  ty.object({
    usernames: ty.array(ty.string()),
  }),
)
