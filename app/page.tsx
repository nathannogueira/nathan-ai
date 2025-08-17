import AIChat from "@/components/ai-chat";
import { ModeToggle } from "@/components/ui/toggle-switch";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <div className="flex-1 flex flex-col">
        <AIChat />
      </div>
    </div>
  );
}
