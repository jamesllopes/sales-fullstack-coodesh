"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

const ReactQueryWrapper = ({ children }: ReactQueryWrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
export default ReactQueryWrapper;
