import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.log("Cannot find DATABASE_URL");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/supabase/schema.ts",
  out: "./migrations",
  // driver: "pglite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  schemaFilter: ["public"],
});
