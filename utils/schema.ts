import { pgTable, text, varchar, serial } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
    id: serial('id').primaryKey(),
    formData: varchar("formData", { length: 255 }).notNull(),
    aiResponse: text("aiResponse"),
    templateSlug: varchar("templateSlug", { length: 255 }).notNull(),
    createdBy: varchar("email", { length: 255 }).notNull(),
    createdAt: varchar("createdAt", { length: 255 }),
    slugIcon: text("templateIcon"),
})