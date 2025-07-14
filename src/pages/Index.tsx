import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Работа с социальными сетями",
      description: "Instagram, TikTok, VK - создание контента и таргетинг",
      icon: "Instagram",
      color: "bg-gradient-to-br from-pink-100 to-purple-100"
    },
    {
      title: "Рекламные кампании и таргетинг",
      description: "Настройка эффективной рекламы и анализ целевой аудитории",
      icon: "Target",
      color: "bg-gradient-to-br from-purple-100 to-blue-100"
    },
    {
      title: "Брендинг и айдентика",
      description: "Создание уникального стиля бренда и визуальной концепции",
      icon: "Palette",
      color: "bg-gradient-to-br from-pink-100 to-red-100"
    },
    {
      title: "Email-маркетинг и воронки",
      description: "Автоматизация продаж через email-рассылки и воронки",
      icon: "Mail",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      title: "Аналитика и SEO-продвижение",
      description: "Анализ метрик, оптимизация и продвижение в поисковиках",
      icon: "TrendingUp",
      color: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      title: "Контент-маркетинг",
      description: "Создание вовлекающего контента и копирайтинг",
      icon: "PenTool",
      color: "bg-gradient-to-br from-yellow-100 to-orange-100"
    }
  ];

  const caseStudies = [
    {
      title: "Увеличение продаж на 250%",
      description: "Настройка таргетированной рекламы для интернет-магазина одежды",
      metric: "+250%",
      category: "Таргетинг"
    },
    {
      title: "Рост аудитории в Instagram",
      description: "Создание контент-стратегии для бьюти-бренда",
      metric: "15K подписчиков",
      category: "SMM"
    },
    {
      title: "Комплексный ребрендинг",
      description: "Полное обновление айдентики ресторана",
      metric: "100% узнаваемость",
      category: "Брендинг"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200 transition-colors">
                Начинающий специалист
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Меня зовут Дарья
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Специалист по маркетингу и рекламе продуктов. Помогаю брендам расти и привлекать клиентов через digital-каналы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
                <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  <Icon name="Download" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 to-purple-500 p-1">
                <img 
                  src="/img/8268d45e-3854-4b16-b515-0fd25d8f16ee.jpg"
                  alt="Дарья - специалист по маркетингу"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
              Услуги
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что я предлагаю
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр маркетинговых услуг для роста вашего бизнеса в digital-пространстве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardHeader className={`${service.color} rounded-t-lg`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/80 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              Портфолио
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Успешные кейсы
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Примеры работ и достигнутых результатов для клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer animate-fade-in bg-gradient-to-br from-white to-gray-50"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.category}
                    </Badge>
                    <div className="text-2xl font-bold text-green-600">
                      {caseStudy.metric}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {caseStudy.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {caseStudy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готова обсудить ваш проект!
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашей маркетинговой стратегии и целей
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-white">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={20} />
                <span className="font-semibold">daria.marketing@email.com</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Дарья - Маркетинг и реклама продуктов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;