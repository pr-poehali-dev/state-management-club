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
        <Badge className="mb-6" variant="secondary">Личный клуб Антона Щукарева</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Проверенные способы<br />управления состоянием<br />от человека, который<br />дважды терял всё
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
          и каждый раз поднимался с нуля
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Опыт преодоления кризисов, закрытия долгов в десятки миллионов и построения устойчивого состояния 
          во всех сферах жизни. За 3000 рублей в месяц.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 hover-scale">
            <Icon name="ArrowRight" size={20} className="ml-2" />
            Присоединиться к клубу
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
            <Icon name="User" size={20} className="mr-2" />
            Узнать об авторе
          </Button>
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

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Что вы получаете в клубе</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Проверенные на личном опыте инструменты управления состоянием от человека, 
            который прошёл через серьёзные кризисы
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Личный опыт</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Реальные истории преодоления кризисов и конкретные инструменты, которые работают
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Антикризисные практики</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Методы поддержания психологического равновесия в сложные периоды
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Проверенные специалисты</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Контакты врачей и экспертов, которые помогали в трудные времена
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl">Кризис как возможность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Философия превращения падений в точки роста и новые возможности
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
                        "Когда мой бизнес развалился, опыт Антона помог не сломаться. 
                        Здесь говорят о кризисах как о возможностях, а не как о конце света."
                      </p>
                      <div className="text-sm text-muted-foreground">— Алексей М., предприниматель</div>
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
                        "После развода была на дне. Опыт Антона с преодолением личных кризисов 
                        показал, что можно начать заново. И сделать это красиво."
                      </p>
                      <div className="text-sm text-muted-foreground">— Мария К., мама двоих детей</div>
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
                    <div className="text-4xl font-bold text-primary mb-2">92%</div>
                    <div className="text-sm text-muted-foreground">членов клуба сообщают о повышении устойчивости к стрессу</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">10 лет</div>
                    <div className="text-sm text-muted-foreground">личного опыта преодоления кризисов и восстановления</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">десятки</div>
                    <div className="text-sm text-muted-foreground">миллионов долгов закрыто честно</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">2 раза</div>
                    <div className="text-sm text-muted-foreground">терял бизнес и поднимался снова</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать заново?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Присоединяйтесь к людям, которые знают: кризис — это не конец, а новое начало
        </p>
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 max-w-2xl mx-auto hover-scale">
          <div className="text-white">
            <div className="text-6xl font-bold mb-4">3000 ₽</div>
            <div className="text-xl mb-8">в месяц</div>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale">
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться к клубу
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
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <div className="font-semibold text-lg mb-2">Email</div>
              <div className="text-muted-foreground">hello@состояние.рф</div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageSquare" size={32} className="text-primary" />
              </div>
              <div className="font-semibold text-lg mb-2">Telegram</div>
              <div className="text-muted-foreground">@состояние_клуб</div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <div className="font-semibold text-lg mb-2">Время работы</div>
              <div className="text-muted-foreground">Пн-Пт: 10:00-19:00 МСК</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Антон Щукарев</div>
              <p className="text-background/70">
                Личный клуб для тех, кто готов превратить кризис в возможность.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О клубе</h4>
              <div className="space-y-2 text-background/70">
                <div>Об авторе</div>
                <div>Моя история</div>
                <div>Принципы работы</div>
                <div>Отзывы участников</div>
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