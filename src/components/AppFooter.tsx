import { Link } from "react-router-dom";

const AppFooter = () => (
  <footer className="border-t border-border/60 bg-card mt-auto">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">O</span>
            </div>
            <span className="font-semibold text-foreground text-lg">Olim Rights</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Votre plateforme de référence pour comprendre vos droits, identifier vos avantages et préparer votre Aliyah avec clarté et sérénité.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-4">Plateforme</h4>
          <div className="flex flex-col gap-2">
            <Link to="/commencer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Commencer</Link>
            <Link to="/preparation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Préparation Aliyah</Link>
            <Link to="/dossiers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mes dossiers</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-4">Ressources</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Centre d'aide</span>
            <span className="text-sm text-muted-foreground">Conditions d'utilisation</span>
            <span className="text-sm text-muted-foreground">Politique de confidentialité</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 mt-8 pt-8 text-center">
        <p className="text-sm text-muted-foreground">© 2026 Olim Rights. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default AppFooter;
