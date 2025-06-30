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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-emerald-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Imperial palace background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iaW1wZXJpYWwiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHBhdGggZD0iTTUwIDEwIEw2MCAzMCBMOTAgMzAgTDcwIDUwIEw4MCA3MCBMNTC3MEAMCA3MCBMNDAGNTAAMIDEAMCA5MCA5MCAzMCBMNjAgMzAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZEODAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaW1wZXJpYWwpIi8+Cjwvc3ZnPg==')] opacity-30"></div>

      {/* Floating golden ornaments */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      <Card className="w-full max-w-lg backdrop-blur-lg bg-gradient-to-br from-white/95 to-blue-50/90 border-2 border-yellow-400/30 shadow-2xl relative">
        {/* Imperial decorative header */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <Icon name="Crown" size={24} className="text-white" />
        </div>

        <CardHeader className="text-center space-y-6 pt-12 pb-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-amber-600"></div>
            <div>
              <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-2">
                ИМПЕРАТОРСКИЕ ПАЛАТЫ
              </h1>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-amber-600"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-lg border border-yellow-400/20">
            <p className="text-blue-800 font-serif text-lg font-medium mb-2">
              Эрмитаж · Петергоф
            </p>
            <p className="text-blue-700/80 font-sans text-sm leading-relaxed">
              Представьтесь для входа в императорские залы
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-3 top-3 text-yellow-600">
                <Icon name="Scroll" size={20} />
              </div>
              <Input
                type="text"
                placeholder="Фамилия Имя Отчество"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setError("");
                }}
                className="pl-12 font-serif text-center text-lg border-2 border-yellow-400/40 focus:border-yellow-500 bg-gradient-to-r from-white to-blue-50 placeholder:text-blue-700/60 h-14 rounded-lg"
              />
              {error && (
                <p className="text-red-600 text-sm mt-3 text-center font-serif bg-red-50 p-2 rounded border border-red-200">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500 text-blue-900 font-serif font-bold py-4 text-xl shadow-lg transition-all duration-300 border-2 border-yellow-600/30 hover:shadow-xl transform hover:scale-[1.02]"
            >
              <Icon name="DoorOpen" size={24} className="mr-3" />
              ВОЙТИ В ПАЛАТЫ
            </Button>
          </form>

          <div className="text-center border-t border-yellow-400/20 pt-4">
            <div className="flex items-center justify-center space-x-2 text-blue-800/70">
              <Icon name="Sparkles" size={16} />
              <p className="font-serif text-sm italic">
                Величие российской короны ждет своих гостей
              </p>
              <Icon name="Sparkles" size={16} />
            </div>
          </div>

          {/* Decorative corner ornaments */}
          <div className="absolute top-4 left-4 opacity-20">
            <Icon name="Gem" size={20} className="text-yellow-500" />
          </div>
          <div className="absolute top-4 right-4 opacity-20">
            <Icon name="Gem" size={20} className="text-yellow-500" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Icon name="Crown" size={16} className="text-blue-600" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <Icon name="Crown" size={16} className="text-blue-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
