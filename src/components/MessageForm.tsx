import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Users, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function MessageForm() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    target: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет интеграция с Supabase для отправки сообщений
    toast({
      title: "Сообщение готово к отправке",
      description: "Подключите Supabase для реализации функции отправки",
    });
  };

  return (
    <Card className="bg-gradient-secondary border border-border shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Отправка сообщений клиентам
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email отправителя</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50 border-border focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="target">Целевая аудитория</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, target: value })}>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Выберите аудиторию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все клиенты</SelectItem>
                  <SelectItem value="premium">Premium клиенты</SelectItem>
                  <SelectItem value="recent">Недавние покупатели</SelectItem>
                  <SelectItem value="inactive">Неактивные клиенты</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Тема сообщения</Label>
            <Input
              id="subject"
              placeholder="Специальное предложение для вас!"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-background/50 border-border focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              placeholder="Напишите ваше сообщение клиентам..."
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 border-border focus:ring-primary resize-none"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Будет отправлено: ~1,250 клиентам</span>
            </div>
            
            <Button 
              type="submit" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow"
              disabled={!formData.subject || !formData.message}
            >
              <Send className="h-4 w-4 mr-2" />
              Отправить сообщения
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}