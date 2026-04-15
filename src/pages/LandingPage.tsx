import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, CheckCircle2, Clock, Heart, Compass, FileCheck } from "lucide-react";

const LandingPage = () => {
  return (
    <AppLayout>
      {/* Hero */}
      <section className="section-container pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 chip-primary mb-6 px-4 py-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Plateforme de droits et d'accompagnement Aliyah</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Comprenez vos droits,{" "}
            <span className="gradient-text">préparez votre avenir</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Identifiez vos droits et avantages en Israël, et préparez chaque étape de votre Aliyah avec clarté, structure et sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/commencer">
              <Button variant="hero" size="xl">
                Commencer maintenant
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/commencer">
              <Button variant="hero-outline" size="xl">
                Découvrir la plateforme
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mode Cards */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/resident/formulaire" className="premium-card-elevated p-8 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-info-light flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Je vis déjà en Israël</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Identifiez les droits, aides sociales et avantages auxquels vous pouvez prétendre en tant que résident.
            </p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              Découvrir mes droits <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link to="/aliyah/formulaire" className="premium-card-elevated p-8 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <Compass className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Projet Aliyah</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Comprenez vos droits, avantages et démarches liés à l'Aliyah et organisez votre préparation.
            </p>
            <span className="inline-flex items-center gap-2 text-accent-foreground text-sm font-medium group-hover:gap-3 transition-all">
              Préparer mon Aliyah <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card border-y border-border/60 py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comment ça fonctionne</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Trois étapes simples pour accéder à une vision claire de vos droits et de votre parcours.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Renseignez votre profil", desc: "Répondez à quelques questions sur votre situation personnelle et professionnelle." },
              { step: "2", title: "Obtenez vos droits", desc: "Recevez une analyse personnalisée de vos droits, aides et prochaines actions." },
              { step: "3", title: "Préparez votre dossier", desc: "Organisez vos démarches avec un plan d'action structuré et un suivi clair." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ce que vous y gagnez</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Un accompagnement pensé pour vous simplifier la vie à chaque étape.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: "Gain de temps", desc: "Fini les recherches dispersées. Tout est centralisé et structuré." },
            { icon: CheckCircle2, title: "Meilleure compréhension", desc: "Vos droits expliqués clairement, sans jargon administratif." },
            { icon: FileCheck, title: "Accompagnement structuré", desc: "Un plan d'action étape par étape, adapté à votre profil." },
            { icon: Heart, title: "Préparation sereine", desc: "Abordez votre transition avec confiance et tranquillité d'esprit." },
          ].map((item) => (
            <div key={item.title} className="premium-card p-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-card border-y border-border/60 py-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Une plateforme de confiance</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nous savons que préparer son Aliyah ou comprendre ses droits en Israël peut être complexe et stressant. 
            C'est pourquoi nous avons conçu une plateforme claire, sérieuse et bienveillante, pour vous guider à chaque étape avec rigueur et humanité.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Clarté", "Fiabilité", "Accompagnement", "Sérénité", "Rigueur"].map((item) => (
              <span key={item} className="chip-primary text-sm px-4 py-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Prêt à commencer ?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Découvrez vos droits et préparez votre avenir en quelques minutes.
          </p>
          <Link to="/commencer">
            <Button variant="hero" size="xl">
              Démarrer gratuitement
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
};

export default LandingPage;
