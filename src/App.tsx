import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import RequireAuth from "@/components/RequireAuth";
import Index from "./pages/Index.tsx";
import ModeSelection from "./pages/ModeSelection.tsx";
import ResidentForm from "./pages/ResidentForm.tsx";
import AliyahForm from "./pages/AliyahForm.tsx";
import ResidentResults from "./pages/ResidentResults.tsx";
import AliyahResults from "./pages/AliyahResults.tsx";
import PreparationDashboard from "./pages/PreparationDashboard.tsx";
import DossiersPage from "./pages/DossiersPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/commencer" element={<ModeSelection />} />
            <Route path="/connexion" element={<AuthPage />} />
            <Route path="/resident/formulaire" element={<ResidentForm />} />
            <Route path="/aliyah/formulaire" element={<AliyahForm />} />
            <Route path="/resident/resultats" element={<RequireAuth><ResidentResults /></RequireAuth>} />
            <Route path="/aliyah/resultats" element={<RequireAuth><AliyahResults /></RequireAuth>} />
            <Route path="/preparation" element={<RequireAuth><PreparationDashboard /></RequireAuth>} />
            <Route path="/dossiers" element={<RequireAuth><DossiersPage /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
