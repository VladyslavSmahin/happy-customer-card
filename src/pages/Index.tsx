import ProductCard from "@/components/ProductCard";
import MessageForm from "@/components/MessageForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Product Store
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            Управляйте продуктами и отправляйте персонализированные сообщения вашим клиентам
          </p>
        </section>

        {/* Main Content */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 lg:mb-16">
          {/* Product Card Section */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground px-4 lg:px-0">Наши продукты</h2>
            <ProductCard />
          </div>

          {/* Message Form Section */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground px-4 lg:px-0">Управление рассылками</h2>
            <MessageForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="mb-12 lg:mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 lg:p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-primary">Подключите Supabase</h3>
            <p className="text-muted-foreground text-sm lg:text-base">
              Для полной функциональности (база данных, аутентификация, отправка email) 
              подключите Supabase через зеленую кнопку в правом верхнем углу
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
