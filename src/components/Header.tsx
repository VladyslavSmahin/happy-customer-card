import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Product Store
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Продукты
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск продуктов..."
                className="pl-10 w-64 bg-background/50"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-primary">
              Войти
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Input 
                placeholder="Поиск продуктов..."
                className="mb-4 bg-background/50"
              />
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Главная
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Продукты
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                О нас
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Контакты
              </a>
              <div className="flex space-x-2 pt-4">
                <Button variant="ghost" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Профиль
                </Button>
                <Button className="flex-1 bg-gradient-primary">
                  Войти
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}