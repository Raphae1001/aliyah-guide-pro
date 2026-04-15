import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ModeSelection from "./pages/ModeSelection.tsx";
import ResidentForm from "./pages/ResidentForm.tsx";
import AliyahForm from "./pages/AliyahForm.tsx";
import ResidentResults from "./pages/ResidentResults.tsx";
import AliyahResults from "./pages/AliyahResults.tsx";
import PreparationDashboard from "./pages/PreparationDashboard.tsx";
import DossiersPage from "./pages/DossiersPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/commencer" element={<ModeSelection />} />
          <Route path="/resident/formulaire" element={<ResidentForm />} />
          <Route path="/aliyah/formulaire" element={<AliyahForm />} />
          <Route path="/resident/resultats" element={<ResidentResults />} />
          <Route path="/aliyah/resultats" element={<AliyahResults />} />
          <Route path="/preparation" element={<PreparationDashboard />} />
          <Route path="/dossiers" element={<DossiersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
