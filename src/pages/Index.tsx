import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 5490;
  const discount = quantity >= 2 ? 0.1 : 0;
  const totalPrice = Math.round(basePrice * quantity * (1 - discount));
  
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsHeaderFixed(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderFixed ? 'bg-secondary/95 backdrop-blur-lg shadow-lg' : 'bg-secondary/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Понторезка.<span className="text-primary">РФ</span></h1>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('product')} className="text-white/90 hover:text-primary transition-colors">
                О продукте
              </button>
              <button onClick={() => scrollToSection('how-to')} className="text-white/90 hover:text-primary transition-colors">
                Как установить
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-white/90 hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('order')} className="text-white/90 hover:text-primary transition-colors">
                Купить
              </button>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:+79991234567" className="hidden md:flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a href="https://t.me/pontorezka" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover-scale transition-all">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 z-10" />
          <img 
            src="https://cdn.poehali.dev/projects/a61d07b2-9da0-40a3-8a3a-2be3a06c3a34/files/57b833fa-0a85-4b67-86e6-030401cce62e.jpg"
            alt="Защита лобового стекла"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-20 container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="inline-block mb-6 px-6 py-2 bg-primary/20 border border-primary rounded-full text-primary font-semibold">
                🔥 Уже купили 150+ автолюбителей
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Защитите лобовое стекло от сколов и царапин за 20 минут
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Полный набор для самостоятельной бронировки из премиум TPU-пленки<br />
                <span className="text-primary font-semibold">Цена: {basePrice} руб.</span> • Купи два — скидка 10%
              </p>
              
              <div className="flex flex-col items-center gap-6 mb-12">
                <div className="flex items-center gap-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm opacity-70">часов</div>
                  </div>
                  <div className="text-3xl">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm opacity-70">минут</div>
                  </div>
                  <div className="text-3xl">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm opacity-70">секунд</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm">До конца акции осталось</p>
              </div>

              <Button 
                size="lg" 
                onClick={() => scrollToSection('order')}
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-white shadow-2xl hover-scale"
              >
                Купить сейчас
              </Button>
            </div>
          </div>
        </section>

        <section id="product" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/a61d07b2-9da0-40a3-8a3a-2be3a06c3a34/files/b4021e42-243f-4902-8487-185d80e005a2.jpg"
                  alt="Набор для защиты"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">О продукте</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Российские дороги — испытание для любого автомобиля. Гравий, камни, реагенты оставляют сколы и царапины на лобовом стекле за первый же сезон.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Наш набор решает эту проблему! Премиальная TPU-пленка защищает стекло от повреждений, обладает гидрофобным эффектом и служит до 3 лет. 
                  А главное — установка занимает всего 20 минут без поездки в сервис.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "Clock", text: "Установка 20 минут" },
                    { icon: "Shield", text: "Защита 3 года" },
                    { icon: "Droplets", text: "Гидрофобность" },
                    { icon: "ThumbsUp", text: "Легко самому" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-4">Почему выбрать нас?</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Преимущества нашего набора</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Wrench",
                  title: "Простота установки",
                  description: "Подробная видеоинструкция и все инструменты в комплекте. Справится даже новичок.",
                },
                {
                  icon: "Droplet",
                  title: "Гидрофобный эффект",
                  description: "Вода и грязь скатываются с поверхности — лучший обзор в дождь.",
                },
                {
                  icon: "Award",
                  title: "Премиум TPU-пленка",
                  description: "Толщина 150 микрон, прозрачность 98%, не желтеет со временем.",
                },
                {
                  icon: "Package",
                  title: "Полный набор",
                  description: "Пленка, активатор, ракель, салфетки — всё для установки в одной коробке.",
                },
                {
                  icon: "Calendar",
                  title: "Долговечность",
                  description: "Защита сохраняется до 3 лет даже в жестких условиях эксплуатации.",
                },
                {
                  icon: "Snowflake",
                  title: "Всесезонность",
                  description: "Работает при температуре от -40°C до +80°C без потери свойств.",
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

        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-4">Состав набора</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Всё необходимое для установки</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: 1, name: "TPU-пленка премиум", desc: "150 микрон, размер под лобовое стекло" },
                { num: 2, name: "Активатор для подготовки", desc: "Обезжиривает и улучшает адгезию" },
                { num: 3, name: "Профессиональный ракель", desc: "Для выгонки воздуха и разглаживания" },
                { num: 4, name: "Микрофибра 2 шт", desc: "Для очистки и финишной полировки" },
                { num: 5, name: "Распылитель с раствором", desc: "Для легкого позиционирования пленки" },
                { num: 6, name: "Видеоинструкция QR", desc: "Пошаговое руководство на русском" },
              ].map((item) => (
                <Card key={item.num} className="border-2 border-border hover:border-primary transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to" className="py-20 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-4">Как установить</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Простая инструкция за 20 минут</p>
            
            <div className="aspect-video bg-muted rounded-2xl shadow-xl mb-12 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/a61d07b2-9da0-40a3-8a3a-2be3a06c3a34/files/57b833fa-0a85-4b67-86e6-030401cce62e.jpg"
                alt="Видео установки"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative text-center z-10">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 hover-scale cursor-pointer transition-all shadow-2xl">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
                <p className="text-foreground font-semibold">Видео: Девушка клеит пленку за 15 минут</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Пошаговая инструкция:</h3>
              {[
                { step: 1, title: "Подготовка поверхности", desc: "Тщательно вымойте лобовое стекло, высушите и обезжирьте активатором из набора." },
                { step: 2, title: "Нанесение раствора", desc: "Равномерно распылите раствор на стекло — он позволит двигать пленку до идеального положения." },
                { step: 3, title: "Позиционирование пленки", desc: "Снимите защитный слой и аккуратно приложите пленку к стеклу. Выровняйте положение." },
                { step: 4, title: "Выгонка воздуха", desc: "Ракелем от центра к краям выгоните весь воздух и лишний раствор из-под пленки." },
                { step: 5, title: "Финишная обработка", desc: "Протрите края микрофиброй, дайте высохнуть 2-3 часа. Готово!" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-4">Что говорят клиенты</h2>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9/5</span>
              <span className="text-muted-foreground">на основе 50 отзывов</span>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  name: "Дмитрий К.",
                  rating: 5,
                  text: "Впервые клеил сам, боялся, что не получится. Но инструкция настолько подробная, что справился за 18 минут! Стекло как новое, вода реально скатывается. Рекомендую.",
                  date: "28 декабря 2024",
                  car: "Toyota Camry",
                },
                {
                  name: "Ирина М.",
                  rating: 5,
                  text: "Заказала для мужа в подарок. Он был в восторге от качества пленки и удобства набора. Поклеили вместе за полчаса с учетом перекура 😄 Теперь советую всем подругам!",
                  date: "22 декабря 2024",
                  car: "Kia Sportage",
                },
                {
                  name: "Алексей П.",
                  rating: 5,
                  text: "Ездил на сервис смотреть цены — просили 12000₽ за установку! Здесь набор за 5490₽ и сам поклеил. Качество отличное, через 2 месяца эксплуатации никаких нареканий.",
                  date: "15 декабря 2024",
                  car: "Volkswagen Tiguan",
                },
                {
                  name: "Сергей Н.",
                  rating: 5,
                  text: "Живу в Сибири, у нас зимой -35°C. Пленка держится отлично, сколы от гравия перестали появляться. Гидрофобный эффект реально работает — дворники почти не включаю.",
                  date: "9 декабря 2024",
                  car: "Lada Vesta",
                },
              ].map((review, idx) => (
                <Card key={idx} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.car}</p>
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

        <section className="py-20 px-6 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-4">Гарантии и FAQ</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на частые вопросы</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <Icon name="ShieldCheck" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Гарантия качества</h3>
                  <p className="text-muted-foreground">1 год на материалы и работоспособность покрытия</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <Icon name="RotateCcw" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">Возврат 14 дней</h3>
                  <p className="text-muted-foreground">Вернём деньги, если набор вам не подойдёт</p>
                </CardContent>
              </Card>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Подойдет ли на мою машину?",
                  a: "Пленка универсальная и подходит для любого лобового стекла легкового автомобиля. Размер 150×80 см — вы подрезаете под свои габариты.",
                },
                {
                  q: "Что если пленка порвется при установке?",
                  a: "Мы заменим пленку бесплатно! Просто сообщите нам в течение 7 дней и пришлите фото. Такие случаи крайне редки благодаря прочности материала.",
                },
                {
                  q: "Можно ли клеить зимой?",
                  a: "Да, но рекомендуем установку в теплом помещении (гараж, бокс). Температура должна быть не ниже +15°C для лучшей адгезии.",
                },
                {
                  q: "Сколько служит покрытие?",
                  a: "При правильной установке пленка служит 2-3 года. Гидрофобные свойства сохраняются до 1,5 лет, после можно обновить специальным составом (продается отдельно).",
                },
                {
                  q: "Как доставляете? Сколько стоит?",
                  a: "Отправляем СДЭК или Почтой России. Доставка по России от 300₽, при заказе 2 наборов — бесплатно. Срок 2-7 дней в зависимости от региона.",
                },
                {
                  q: "Можно оплатить при получении?",
                  a: "Да, доступна оплата наложенным платежом. Также принимаем оплату картой онлайн через Яндекс.Кассу.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="order" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-4">Оформить заказ</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Заполните форму — мы свяжемся для подтверждения
            </p>
            
            <Card className="border-2 border-primary shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8 p-6 bg-primary/10 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon name="AlertCircle" size={24} className="text-primary" />
                    <span className="font-semibold text-lg">Осталось 10 наборов по акции</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-4">
                    <span className="text-4xl font-bold text-primary">{totalPrice} ₽</span>
                    {discount > 0 && (
                      <>
                        <span className="text-2xl text-muted-foreground line-through">{basePrice * quantity} ₽</span>
                        <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold">
                          -10%
                        </span>
                      </>
                    )}
                  </div>
                  {quantity >= 2 && (
                    <p className="text-sm text-primary font-semibold mt-2">+ Бесплатная доставка</p>
                  )}
                </div>

                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" placeholder="Иван" className="mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">Город *</Label>
                    <Input id="city" placeholder="Москва" className="mt-2" required />
                  </div>

                  <div>
                    <Label htmlFor="quantity">Количество</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border-2 border-border rounded-lg">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                        >
                          <Icon name="Minus" size={20} />
                        </button>
                        <span className="px-8 py-3 font-semibold text-lg">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                        >
                          <Icon name="Plus" size={20} />
                        </button>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">
                          {quantity >= 2 ? "🎉 Скидка 10% + бесплатная доставка" : "При покупке 2 шт — скидка 10%"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Оформить заказ на {totalPrice} ₽
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Не упустите акцию!</h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите набор сейчас и защитите свой автомобиль от сколов и царапин
            </p>
            <div className="flex items-center justify-center gap-6 text-white mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm opacity-70">часов</div>
              </div>
              <div className="text-4xl">:</div>
              <div className="text-center">
                <div className="text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm opacity-70">минут</div>
              </div>
              <div className="text-4xl">:</div>
              <div className="text-center">
                <div className="text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm opacity-70">секунд</div>
              </div>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('order')}
              className="text-lg px-12 py-6 hover-scale"
            >
              Заказать со скидкой
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Понторезка.РФ</h3>
              <p className="text-white/70 mb-4">
                Премиальная защита лобового стекла для самостоятельной установки
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <a href="mailto:info@pontorezka.ru">info@pontorezka.ru</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <a href="https://t.me/pontorezka" target="_blank" rel="noopener">@pontorezka</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-white/80">
                <li>Доставка СДЭК / Почта РФ</li>
                <li>Политика конфиденциальности</li>
                <li>Гарантия и возврат</li>
                <li>ИП Иванов И.И. ИНН 123456789</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-white/60 text-sm pt-8 border-t border-white/20">
            © 2024 Понторезка.РФ • Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
