import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    model,
    webSearch,
  }: { messages: UIMessage[]; model: string; webSearch: boolean } =
    await req.json();

  const result = streamText({
    model: webSearch ? "perplexity/sonar" : model,
    messages: convertToModelMessages(messages),
    system:
      "Você é um assistente útil que pode responder a perguntas e ajudar com tarefas",
  });

  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
