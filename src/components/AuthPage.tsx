import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AuthPageProps {
  onAuth: (name: string) => void;
}

const GUEST_LIST = [
  "Буркина Людмила Викторовна",
  "Буркин Юрий Михайлович",
  "Буркин Дмитрий Юрьевич",
  "Буркина Татьяна Юрьевна",
  "Дорошин Вячеслав Викторович",
  "Дорошина Маргарита Александровна",
  "Дорошин Степан Вячеславович",
  "Чекан Виктория Вячеславовна",
  "Стародубцева Наталья Николаевна",
  "Егоров Олег Иванович",
  "Егорова Наталья Александровна",
];

export default function AuthPage({ onAuth }: AuthPageProps) {
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("Пожалуйста, введите ваше ФИО");
      return;
    }

    const isGuest = GUEST_LIST.some(
      (guest) => guest.toLowerCase() === fullName.toLowerCase().trim(),
    );

    if (isGuest) {
      const firstName =
        fullName.trim().split(" ")[1] || fullName.trim().split(" ")[0];
      onAuth(firstName);
    } else {
      setError("К сожалению, вас нет в списке приглашенных гостей");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-provence-cream via-provence-lavender to-provence-sage flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzlDQUY4OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2Zsb3dlcikiLz4KPC9zdmc+')] opacity-20"></div>

      <Card className="w-full max-w-md backdrop-blur-sm bg-white/80 border-provence-sage/30 shadow-2xl">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-provence-lavender to-provence-sage rounded-full flex items-center justify-center shadow-lg">
              <Icon name="PartyPopper" size={36} className="text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-montserrat font-light text-gray-700 mb-2">
              Добро пожаловать
            </h1>
            <p className="text-provence-sage font-opensans text-sm leading-relaxed">
              Введите ваше полное имя для входа на страницу приглашения
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Фамилия Имя Отчество"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setError("");
                }}
                className="font-opensans text-center border-provence-sage/50 focus:border-provence-sage bg-white/70 placeholder:text-provence-sage/60"
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center font-opensans">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-provence-sage to-provence-lavender hover:from-provence-lavender hover:to-provence-sage text-white font-montserrat font-medium py-6 text-lg shadow-lg transition-all duration-300"
            >
              Войти
            </Button>
          </form>

          <div className="text-center">
            <p className="text-provence-sage/70 font-opensans text-xs">
              Роскошь ждет своих гостей
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
