import ProductCard from "@/components/ProductCard";
import MessageForm from "@/components/MessageForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Product Store
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Управляйте продуктами и отправляйте персонализированные сообщения вашим клиентам
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Product Card Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Наши продукты</h2>
            <ProductCard />
          </div>

          {/* Message Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Управление рассылками</h2>
            <MessageForm />
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-primary">Подключите Supabase</h3>
            <p className="text-muted-foreground">
              Для полной функциональности (база данных, аутентификация, отправка email) 
              подключите Supabase через зеленую кнопку в правом верхнем углу
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
