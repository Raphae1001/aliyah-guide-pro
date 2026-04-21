import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.start"), path: "/commencer" },
    { label: t("nav.preparation"), path: "/preparation" },
    { label: t("nav.dossiers"), path: "/dossiers" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/60">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">O</span>
          </div>
          <span className="font-semibold text-foreground text-lg">Olim Rights</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground truncate max-w-[140px]">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4" />
                {t("nav.signout")}
              </Button>
            </div>
          ) : (
            <Link to="/connexion">
              <Button variant="default" size="sm">
                <LogIn className="w-4 h-4" />
                {t("nav.signin")}
              </Button>
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-card pb-4">
          <nav className="section-container flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-border/60 mt-2 pt-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-3 text-sm text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    {user.user_metadata?.full_name || user.email}
                  </div>
                  <button
                    onClick={() => { handleSignOut(); setMobileOpen(false); }}
                    className="w-full text-start px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <LogOut className="w-4 h-4 inline me-2" />
                    {t("nav.signout")}
                  </button>
                </>
              ) : (
                <Link
                  to="/connexion"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-muted transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  {t("nav.signin")}
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
