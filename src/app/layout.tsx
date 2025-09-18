import type { Metadata } from "next";
import "./style/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "NeuroLife",
  description: "A Next.js application for managing mental health and wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex min-h-screen w-full flex-col">
          <Header />

          <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
            {/* <SidebarTrigger /> */}
              {children}
              <Toaster position="bottom-right" toastOptions={{
                duration: 4000,
                style:{
                  fontSize: "14px",
                  padding: "16px",
                  borderRadius: "8px",
                }
              }} />
          </main>
          </div>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
