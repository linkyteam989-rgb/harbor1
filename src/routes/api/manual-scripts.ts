import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/manual-scripts")({
  server: { handlers: { POST: async ({ request }) => {
    const { handleManualTranslation } = await import("@/lib/ai/manual-translator.server");
    return handleManualTranslation(request, { key: process.env["GROQ_API_KEY"], model: process.env["GROQ_MODEL"] });
  } } },
});