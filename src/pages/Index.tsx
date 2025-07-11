import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">
                Beans & Dreams
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#menu" className="hover:text-primary transition-colors">
                Меню
              </a>
              <a
                href="#atmosphere"
                className="hover:text-primary transition-colors"
              >
                Атмосфера
              </a>
              <a
                href="#booking"
                className="hover:text-primary transition-colors"
              >
                Бронь
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Спешелти кофе
            <br />
            <span className="text-primary">собственной обжарки</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Открывайте для себя уникальные вкусы кофе ручной работы в уютной
            атмосфере нашей кофейни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Icon name="Coffee" size={20} className="mr-2" />
              Попробовать кофе
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать столик
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наше меню</h2>
            <p className="text-xl text-gray-600">
              Лучшие кофейные зерна со всего мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Menu */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Coffee" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Кофе</CardTitle>
                <CardDescription>
                  Спешелти кофе собственной обжарки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Эспрессо</span>
                    <span className="text-primary font-bold">150₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Американо</span>
                    <span className="text-primary font-bold">180₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Капучино</span>
                    <span className="text-primary font-bold">220₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Латте</span>
                    <span className="text-primary font-bold">250₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desserts Menu */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Cake" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Десерты</CardTitle>
                <CardDescription>Свежая выпечка и сладости</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Тирамису</span>
                    <span className="text-primary font-bold">320₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Круассан</span>
                    <span className="text-primary font-bold">180₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Чизкейк</span>
                    <span className="text-primary font-bold">290₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Маффин</span>
                    <span className="text-primary font-bold">150₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <Icon name="Star" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Спецпредложения</CardTitle>
                <CardDescription>Лучшие комбо для вас</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Кофе + Десерт</span>
                    <span className="text-primary font-bold">400₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Завтрак до 12:00</span>
                    <span className="text-primary font-bold">350₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Кофе-карта (10 чашек)</span>
                    <span className="text-primary font-bold">1500₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section
        id="atmosphere"
        className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Атмосфера</h2>
            <p className="text-xl text-gray-600">
              Уютное место для работы и отдыха
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="Wifi" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Быстрый Wi-Fi</h3>
                  <p className="text-gray-600">Идеально для работы и учебы</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Music" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Живая музыка</h3>
                  <p className="text-gray-600">Джазовые вечера по пятницам</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Users" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Дружелюбная команда
                  </h3>
                  <p className="text-gray-600">Профессиональные бариста</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Sun" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Солнечный зал</h3>
                  <p className="text-gray-600">Большие окна и много света</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/img/4ebf8f04-9b32-4f16-9ccb-e8095b121724.jpg"
                alt="Интерьер кофейни"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover"
              />
              <img
                src="/img/8bad3b7f-bf91-45d5-b6d7-a3eb0771c069.jpg"
                alt="Кофе с латте-артом"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow h-48 w-full object-cover"
              />
              <div className="col-span-2 bg-white rounded-lg p-6 shadow-lg">
                <blockquote className="text-lg italic text-gray-700 text-center">
                  "Лучший кофе в городе! Уютная атмосфера и профессиональные
                  бариста"
                </blockquote>
                <p className="text-center mt-4 text-gray-600">
                  — Анна К., постоянный гость
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Забронировать столик
            </h2>
            <p className="text-xl text-gray-600">
              Гарантируем вам лучшие места
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Бронирование
                </CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>1 гость</option>
                      <option>2 гостя</option>
                      <option>3 гостя</option>
                      <option>4 гостя</option>
                      <option>5+ гостей</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Пожелания</Label>
                    <Textarea
                      id="message"
                      placeholder="Особые пожелания или комментарии"
                    />
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать столик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Coffee" size={32} className="text-primary" />
                <span className="text-2xl font-bold">Beans & Dreams</span>
              </div>
              <p className="text-gray-400">
                Спешелти кофе собственной обжарки в уютной атмосфере
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Кофейная, 42, Москва</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Вс: 8:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beans & Dreams. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
