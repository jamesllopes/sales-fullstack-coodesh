import AuthProvider from "@/context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import ReactQueryWrapper from "./ReactQueryWrapper";
import { SnackbarProvider } from "@/components/Snackbar/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales",
  icons: {
    icon: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </head>
      <body className={inter.className}>
        <ReactQueryWrapper>
          <AuthProvider>{children}</AuthProvider>
          <SnackbarProvider />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
