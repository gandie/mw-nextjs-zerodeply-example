"use client";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Brand Logo - Replace /public/logo.svg with your logo */}
        <div className="h-5 w-[100px] bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500 font-medium">
          Your Logo
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to your application
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is your white-label starting point. Customize this page by editing{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              app/page.tsx
            </code>
            , adding your branding, and implementing your custom features.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            onClick={() => {
              // Add your primary action here
              console.log("Primary action clicked");
            }}
          >
            Primary Action
          </button>
          <button
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            onClick={() => {
              // Add your secondary action here
              console.log("Secondary action clicked");
            }}
          >
            Secondary Action
          </button>
        </div>
      </main>
    </div>
  );
}
