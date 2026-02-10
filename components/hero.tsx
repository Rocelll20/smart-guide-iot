import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
        Welcome to <span className="text-primary">Smart Guide</span>
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal">
        Your intelligent learning companion. We provide personalized guidance.
      </p>
    </div>
  );
}