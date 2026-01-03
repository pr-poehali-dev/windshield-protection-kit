import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 2990;

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">GlassProtect</h1>
          <Button size="lg" className="gap-2">
            <Icon name="ShoppingCart" size={20} />
            Заказать
          </Button>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Защита лобового стекла своими руками
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Профессиональный набор для самостоятельного нанесения защитного покрытия. Результат как в сервисе за 15 минут.
                </p>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-5xl font-bold">{price * quantity} ₽</span>
                  <span className="text-2xl text-muted-foreground line-through">4990 ₽</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-secondary transition-colors"
                    >
                      <Icon name="Minus" size={20} />
                    </button>
                    <span className="px-6 py-3 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-secondary transition-colors"
                    >
                      <Icon name="Plus" size={20} />
                    </button>
                  </div>
                  <Button size="lg" className="flex-1 text-lg py-6">
                    Купить сейчас
                  </Button>
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={18} />
                    <span>Доставка 1-2 дня</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={18} />
                    <span>Гарантия 3 года</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/a61d07b2-9da0-40a3-8a3a-2be3a06c3a34/files/7a2c714e-c182-464b-a2a7-b10eca913a86.jpg"
                  alt="Набор для защиты стекла"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">Характеристики</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Droplets",
                  title: "Гидрофобный эффект",
                  description: "Вода скатывается с поверхности стекла, улучшая обзор в дождь",
                },
                {
                  icon: "Shield",
                  title: "Защита от сколов",
                  description: "Укрепляет стекло и предотвращает образование трещин",
                },
                {
                  icon: "Sparkles",
                  title: "Легкая очистка",
                  description: "Грязь и насекомые удаляются без усилий",
                },
                {
                  icon: "Timer",
                  title: "Быстрое нанесение",
                  description: "Процесс занимает всего 15 минут",
                },
                {
                  icon: "Calendar",
                  title: "Долговечность",
                  description: "Защита сохраняется до 3 лет",
                },
                {
                  icon: "Thermometer",
                  title: "Всесезонность",
                  description: "Работает от -40°C до +80°C",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg hover-scale transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">Отзывы клиентов</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Алексей М.",
                  rating: 5,
                  text: "Наносил сам, результат превзошёл ожидания! Вода действительно скатывается мгновенно. Дворники на скорости почти не нужны.",
                  date: "15 декабря 2024",
                },
                {
                  name: "Ирина К.",
                  rating: 5,
                  text: "Заказала для мужа, он в восторге. Говорит, что стекло стало как новое. Насекомые смываются за секунды.",
                  date: "8 декабря 2024",
                },
                {
                  name: "Дмитрий С.",
                  rating: 5,
                  text: "Сначала сомневался, что получится нанести самому. Но инструкция понятная, справился за 20 минут. Очень доволен!",
                  date: "2 декабря 2024",
                },
              ].map((review, idx) => (
                <Card key={idx} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">Видеоинструкция</h2>
            <div className="aspect-video bg-muted rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 hover-scale cursor-pointer transition-all">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
                <p className="text-muted-foreground">Пошаговая инструкция по нанесению</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">Доставка и оплата</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Package",
                  title: "Быстрая доставка",
                  description: "По Москве — 1 день\nПо России — 2-5 дней\nКурьером или в пункт выдачи",
                },
                {
                  icon: "CreditCard",
                  title: "Удобная оплата",
                  description: "Картой онлайн\nПри получении\nБезопасная транзакция",
                },
                {
                  icon: "RotateCcw",
                  title: "Гарантия возврата",
                  description: "Вернём деньги в течение 14 дней, если не подойдёт",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы защитить своё стекло?</h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите набор сейчас и получите профессиональную защиту по цене материалов
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6">
              Заказать за {price} ₽
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@glassprotect.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантия и возврат</li>
                <li>Инструкция по применению</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover-scale transition-all">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover-scale transition-all">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover-scale transition-all">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t border-border">
            © 2024 GlassProtect. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
