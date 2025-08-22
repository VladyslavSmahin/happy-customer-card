import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import productImage from "@/assets/product-hero.jpg";

export default function ProductCard() {
  return (
    <Card className="overflow-hidden bg-gradient-secondary border border-border shadow-card hover:shadow-glow transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={productImage} 
            alt="Premium Smartphone - Latest Model"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Новинка
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm hover:bg-background/40"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 fill-yellow-500 text-yellow-500" 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(124 отзыва)</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">Premium Smartphone Pro Max</h3>
        <p className="text-muted-foreground mb-4">
          Инновационный смартфон с передовыми технологиями, premium дизайном и исключительной производительностью. Камера 108MP, дисплей 6.7", 256GB памяти.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              89,999 ₽
            </span>
            <span className="text-sm text-muted-foreground line-through">
              109,999 ₽
            </span>
          </div>
          <Badge variant="secondary">-18%</Badge>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Экран:</span>
            <span>6.7" OLED 120Hz</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Память:</span>
            <span>256GB / 8GB RAM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Камера:</span>
            <span>108MP тройная</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button className="flex-1 bg-gradient-primary hover:opacity-90 shadow-glow">
          <ShoppingCart className="h-4 w-4 mr-2" />
          В корзину
        </Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}