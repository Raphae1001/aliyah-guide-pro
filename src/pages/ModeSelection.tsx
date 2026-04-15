import AppLayout from "@/components/AppLayout";
import { Link } from "react-router-dom";
import { BookOpen, Compass, ArrowRight } from "lucide-react";

const ModeSelection = () => (
  <AppLayout>
    <div className="section-container py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quelle est votre situation ?</h1>
        <p className="text-muted-foreground text-lg">Choisissez le parcours qui correspond le mieux à votre besoin actuel.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
        <Link
          to="/resident/formulaire"
          className="premium-card-elevated p-10 group cursor-pointer flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-info-light flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Je vis déjà en Israël</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Vous êtes résident en Israël et souhaitez identifier les droits, aides sociales et avantages auxquels vous pouvez prétendre.
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
            Découvrir mes droits <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
        <Link
          to="/aliyah/formulaire"
          className="premium-card-elevated p-10 group cursor-pointer flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
            <Compass className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Projet Aliyah</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Vous préparez votre Aliyah et souhaitez comprendre vos droits, avantages et les démarches administratives à anticiper.
          </p>
          <span className="inline-flex items-center gap-2 text-accent-foreground font-semibold group-hover:gap-3 transition-all mt-auto">
            Préparer mon Aliyah <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  </AppLayout>
);

export default ModeSelection;
