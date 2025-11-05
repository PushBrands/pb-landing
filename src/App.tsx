import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Ads from "./pages/Ads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <Navbar />
          <Routes>
            {/* Redirect root to English home */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English routes */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/creators" element={<Creators />} />
            <Route path="/en/ads" element={<Ads />} />
            
            {/* Arabic routes */}
            <Route path="/ar" element={<Home />} />
            <Route path="/ar/creators" element={<Creators />} />
            <Route path="/ar/ads" element={<Ads />} />
            
            {/* Legacy routes without language prefix - redirect to English */}
            <Route path="/creators" element={<Navigate to="/en/creators" replace />} />
            <Route path="/ads" element={<Navigate to="/en/ads" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
