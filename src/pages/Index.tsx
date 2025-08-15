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
        <div className="text-2xl font-bold text-primary">Состояние</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О клубе</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button>Войти</Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center animate-fade-in">
        <Badge className="mb-6" variant="secondary">Закрытый клуб</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Проверенные способы<br />управления своим<br />состоянием
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
          за 3000 рублей в месяц
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ежемесячная подписка на закрытый клуб, где каждый получает инструменты для поддержания 
          финансового, психологического, морального и физического состояния.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 hover-scale">
            <Icon name="ArrowRight" size={20} className="ml-2" />
            Присоединиться сейчас
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
            <Icon name="Play" size={20} className="mr-2" />
            Узнать больше
          </Button>
        </div>
        <div className="mx-auto max-w-4xl">
          <img 
            src="/img/cc72026b-bd64-45a4-989c-15860a82de99.jpg" 
            alt="Wellness and balance lifestyle"
            className="w-full h-96 object-cover rounded-3xl shadow-2xl hover-scale"
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Как работает клуб "Состояние"</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Получайте еженедельный контент и инструменты для поддержания баланса во всех сферах жизни
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Еженедельный контент</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Статьи, видео, подкасты, которые помогают сохранять баланс и развиваться
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Практики и медитации</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Техники для улучшения эмоционального и физического состояния
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Поддержка специалистов</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Контакты эндокринологов, психотерапевтов и других экспертов
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Философия роста</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Как кризисы могут стать ступенями к личностному росту
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section id="testimonials" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это помогло другим</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Card className="hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg mb-4">
                        "В этом клубе я нашёл ответы на вопросы, которые беспокоили меня годами. 
                        Контент действительно работающий и применимый в жизни."
                      </p>
                      <div className="text-sm text-muted-foreground">— Алексей М., участник 8 месяцев</div>
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
                        "Благодаря практикам и рекомендациям я чувствую себя более уверенно и спокойно. 
                        Изменения заметны уже через месяц."
                      </p>
                      <div className="text-sm text-muted-foreground">— Мария К., участник 4 месяца</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-8">Что говорят цифры</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">80%</div>
                    <div className="text-sm text-muted-foreground">участников отмечают улучшение психоэмоционального состояния</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">2 мес</div>
                    <div className="text-sm text-muted-foreground">средний срок для значительного улучшения самочувствия</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">активных участников клуба</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">продлевают подписку после первого месяца</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы изменить своё состояние?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Присоединяйтесь к сообществу людей, которые инвестируют в своё развитие и благополучие
        </p>
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 max-w-2xl mx-auto hover-scale">
          <div className="text-white">
            <div className="text-6xl font-bold mb-4">3000 ₽</div>
            <div className="text-xl mb-8">в месяц</div>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Получить доступ сейчас
            </Button>
            <p className="text-sm mt-4 opacity-90">Первый месяц можно отменить без объяснений</p>
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
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg">
                  Что входит в ежемесячную подписку?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Еженедельные статьи и видео, практики медитации, доступ к базе знаний, 
                  контакты специалистов, участие в закрытых онлайн-встречах и персональные рекомендации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg">
                  Как я могу отменить подписку?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Подписку можно отменить в любой момент через личный кабинет или написав нам. 
                  Никаких скрытых условий или штрафов за отмену нет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg">
                  Будет ли контент адаптирован под мой уровень?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Да, при регистрации вы проходите короткую анкету, и мы подбираем контент 
                  исходя из ваших целей и текущего состояния. Есть материалы для новичков и продвинутых участников.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg">
                  Сколько времени нужно уделять в неделю?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Минимально — 30-60 минут в неделю для изучения основного контента. 
                  Дополнительные практики и встречи — по желанию. Всё построено так, 
                  чтобы вписываться в насыщенный график.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Есть вопросы?</h2>
          <p className="text-xl text-muted-foreground">
            Мы всегда рады помочь! Свяжитесь с нами любым удобным способом.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Напишите нам
              </CardTitle>
              <CardDescription>Ответим в течение нескольких часов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Сообщение" className="h-32" />
              <Button className="w-full hover-scale">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">hello@состояние.рф</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@состояние_клуб</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Время работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 10:00-19:00 МСК</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Состояние</div>
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
                <div>FAQ</div>
                <div>Контакты</div>
                <div>Техподдержка</div>
                <div>Политика конфиденциальности</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="space-y-2 text-background/70">
                <div>hello@состояние.рф</div>
                <div>@состояние_клуб</div>
                <div className="flex gap-4 mt-4">
                  <Icon name="Instagram" size={20} className="text-background/70" />
                  <Icon name="MessageCircle" size={20} className="text-background/70" />
                  <Icon name="Youtube" size={20} className="text-background/70" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            © 2024 Состояние. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;