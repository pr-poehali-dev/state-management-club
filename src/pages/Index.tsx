import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Антон Щукарев</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Об авторе</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button>Присоединиться</Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Проверенные способы управления своим состоянием 
          <span className="text-primary block mt-2">за 3000 рублей в месяц</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Ежемесячная подписка на закрытый клуб, где каждый получает инструменты для поддержания 
          финансового, психологического, морального и физического состояния. Практики, книги, 
          выжимки из опыта и рекомендации от специалистов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 hover-scale">
            <Icon name="Users" size={20} className="mr-2" />
            Присоединиться сейчас
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
            <Icon name="Play" size={20} className="mr-2" />
            Узнать подробнее
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center mb-8">
          <img 
            src="/img/08712e69-720c-46fd-8a07-5b59ef735a63.jpg" 
            alt="Состояние гармонии и внутреннего спокойствия" 
            className="max-w-2xl w-full h-auto rounded-3xl shadow-lg hover-scale"
          />
        </div>
      </section>

      {/* About Author */}
      <section id="about" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/img/6dd37f2b-de08-4445-ad3c-2710c3717215.jpg" 
                alt="Антон Щукарев"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover-scale"
              />
            </div>
            <div>
              <Badge className="mb-6" variant="outline">Об авторе</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Антон Щукарев</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  За последние 10 лет <strong className="text-foreground">дважды терял бизнес</strong>, 
                  оставаясь должен десятки миллионов рублей.
                </p>
                <p>
                  <strong className="text-foreground">Не сдался.</strong> Закрыл свои обязательства. 
                  Много раз терял всё в жизни и начинал заново.
                </p>
                <p>
                  Сегодня делится опытом управления состоянием в кризисные моменты — 
                  финансовым, психологическим, моральным и физическим.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Женат, строит крепкую семью</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <span>Превратил кризисы в ступени роста</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <span>Знает цену каждого решения</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how-it-works" className="bg-secondary/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Как работает клуб "Состояние"
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Краткое описание того, что пользователи получат с подпиской:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Еженедельный контент</h3>
                <p className="text-muted-foreground">
                  Статьи, видео, подкасты, которые помогают сохранять баланс
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Практики и медитации</h3>
                <p className="text-muted-foreground">
                  Для улучшения эмоционального и физического состояния
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Поддержка специалистов</h3>
                <p className="text-muted-foreground">
                  Контакты эндокринологов, психотерапевтов и других экспертов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Философия жизни и привычки</h3>
                <p className="text-muted-foreground">
                  Как кризисы могут стать ступенями к личностному росту
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section id="testimonials" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это помогло другим</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="hover-scale">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-lg mb-4">
                      "В этом клубе я нашёл ответы на вопросы, которые беспокоили меня годами."
                    </p>
                    <div className="text-sm text-muted-foreground">— Алексей М., участник клуба</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-lg mb-4">
                      "Благодаря практикам и рекомендациям я чувствую себя более уверенно и спокойно."
                    </p>
                    <div className="text-sm text-muted-foreground">— Мария К., участник клуба</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Кейсы */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Истории изменений</h3>
            <div className="space-y-6">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Показывающие реальные изменения, которые произошли с пользователями после участия в клубе.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Кейсы */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Истории изменений</h3>
            <div className="space-y-6">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Показывающие реальные изменения, которые произошли с пользователями после участия в клубе.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Доказательства эффективности */}
          <div className="bg-primary text-background rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Что говорят цифры</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">80%+</div>
                <div className="text-background/80 text-lg">
                  участников отмечают улучшение психоэмоционального состояния
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2 мес</div>
                <div className="text-background/80 text-lg">
                  в среднем через 2 месяца пользователи сообщают о значительном улучшении общего самочувствия
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-background/90 text-lg">
                Используйте иконки, такие как процентные знаки, диаграммы и звезды, чтобы визуально подкрепить факты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы изменить своё состояние?
          </h2>
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="text-lg px-8 py-6 hover-scale bg-primary text-background">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Получить доступ сейчас за 3000 рублей в месяц
            </Button>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Прямой призыв оставить заявку. Убедитесь, что кнопка выделяется и визуально привлекательна.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ответы на ваши вопросы</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Что входит в ежемесячную подписку?
                </AccordionTrigger>
                <AccordionContent>
                  Еженедельный контент (статьи, видео, подкасты), практики и медитации, 
                  доступ к специалистам, материалы по философии личностного роста и 
                  преодоления кризисов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Как я могу отменить подписку?
                </AccordionTrigger>
                <AccordionContent>
                  Вы можете отменить подписку в любой момент через личный кабинет или 
                  связавшись с нашей поддержкой. Никаких скрытых комиссий или штрафов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Будет ли контент адаптирован под мой уровень?
                </AccordionTrigger>
                <AccordionContent>
                  Да, контент разделён по уровням сложности и направлениям. Вы сможете 
                  выбрать подходящие материалы в зависимости от ваших потребностей и опыта.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Есть ли пробный период?
                </AccordionTrigger>
                <AccordionContent>
                  Первая неделя предоставляется бесплатно, чтобы вы могли оценить качество 
                  контента и формат клуба.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Есть вопросы?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Мы всегда рады помочь! Свяжитесь с нами через форму или по телефону.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Email" type="email" />
          </div>
          <Textarea placeholder="Ваш вопрос" className="mb-6" />
          <Button size="lg" className="hover-scale">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить сообщение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Клуб "Состояние"</div>
              <p className="text-background/70">
                Инвестируйте в своё развитие и благополучие вместе с нами.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Клуб</h4>
              <div className="space-y-2 text-background/70">
                <div>О проекте</div>
                <div>Как работает</div>
                <div>Преподаватели</div>
                <div>Отзывы</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-background/70">
                <div>Часто задаваемые вопросы</div>
                <div>Политика конфиденциальности</div>
                <div>Условия использования</div>
                <div>support@sostoyanie.club</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 Клуб "Состояние". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;