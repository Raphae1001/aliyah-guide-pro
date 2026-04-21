import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, CheckCircle2, Clock, Heart, Compass, FileCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LandingPage = () => {
  const { t } = useLanguage();
  return (
    <AppLayout>
      {/* Hero */}
      <section className="section-container pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 chip-primary mb-6 px-4 py-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{t("landing.badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            {t("landing.hero.title.1")}{" "}
            <span className="gradient-text">{t("landing.hero.title.2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("landing.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/commencer">
              <Button variant="hero" size="xl">
                {t("landing.cta.start")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/commencer">
              <Button variant="hero-outline" size="xl">
                {t("landing.cta.discover")}
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
            <h3 className="text-xl font-semibold text-foreground mb-3">{t("landing.mode.resident.title")}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("landing.mode.resident.desc")}
            </p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              {t("landing.mode.resident.cta")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </span>
          </Link>
          <Link to="/aliyah/formulaire" className="premium-card-elevated p-8 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <Compass className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{t("landing.mode.aliyah.title")}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("landing.mode.aliyah.desc")}
            </p>
            <span className="inline-flex items-center gap-2 text-accent-foreground text-sm font-medium group-hover:gap-3 transition-all">
              {t("landing.mode.aliyah.cta")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </span>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card border-y border-border/60 py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("landing.how.title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("landing.how.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: t("landing.how.step1.title"), desc: t("landing.how.step1.desc") },
              { step: "2", title: t("landing.how.step2.title"), desc: t("landing.how.step2.desc") },
              { step: "3", title: t("landing.how.step3.title"), desc: t("landing.how.step3.desc") },
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
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("landing.benefits.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("landing.benefits.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: t("landing.benefits.time.title"), desc: t("landing.benefits.time.desc") },
            { icon: CheckCircle2, title: t("landing.benefits.understand.title"), desc: t("landing.benefits.understand.desc") },
            { icon: FileCheck, title: t("landing.benefits.support.title"), desc: t("landing.benefits.support.desc") },
            { icon: Heart, title: t("landing.benefits.serenity.title"), desc: t("landing.benefits.serenity.desc") },
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
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("landing.trust.title")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t("landing.trust.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              t("landing.trust.tag.clarity"),
              t("landing.trust.tag.reliability"),
              t("landing.trust.tag.support"),
              t("landing.trust.tag.serenity"),
              t("landing.trust.tag.rigor"),
            ].map((item) => (
              <span key={item} className="chip-primary text-sm px-4 py-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("landing.final.title")}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {t("landing.final.subtitle")}
          </p>
          <Link to="/commencer">
            <Button variant="hero" size="xl">
              {t("landing.final.cta")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
};

export default LandingPage;
