import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MainInvitationProps {
  guestName: string;
}

export default function MainInvitation({ guestName }: MainInvitationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-black via-gray-900 to-luxury-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-barbie-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        {/* Main title in Barbie style */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-6xl md:text-8xl bg-gradient-to-r from-barbie-pink via-barbie-lightPink to-barbie-pink bg-clip-text text-transparent mb-4 leading-tight drop-shadow-2xl">
            LIMO-DANCE
          </h1>
          <h2 className="font-montserrat font-bold text-6xl md:text-8xl bg-gradient-to-r from-barbie-pink via-barbie-lightPink to-barbie-pink bg-clip-text text-transparent mb-6 leading-tight drop-shadow-2xl">
            REVOLUTION 55
          </h2>
        </div>

        {/* Luxury slogan */}
        <div className="mb-12">
          <p className="font-montserrat text-2xl md:text-4xl bg-gradient-to-r from-luxury-gold via-luxury-darkGold to-luxury-gold bg-clip-text text-transparent font-semibold tracking-wider drop-shadow-lg">
            ПЯТЬ ЗВЁЗД НА АСФАЛЬТЕ
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mt-4"></div>
        </div>

        {/* Personal greeting */}
        <div className="mb-12 bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-luxury-gold/20">
          <p className="font-opensans text-xl md:text-2xl text-white/90 mb-4">
            Дорогой{" "}
            <span className="text-luxury-gold font-semibold">{guestName}</span>,
          </p>
          <p className="font-opensans text-lg text-white/80 leading-relaxed max-w-2xl">
            Приглашаю тебя оторваться вместе со мной в этот знаменательный день!
            Впереди нас ждет незабываемое путешествие через роскошь, веселье и
            настоящие эмоции.
          </p>
        </div>

        {/* Action button */}
        <Button className="bg-gradient-to-r from-luxury-gold via-luxury-darkGold to-luxury-gold hover:from-luxury-darkGold hover:via-luxury-gold hover:to-luxury-darkGold text-luxury-black font-montserrat font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-luxury-gold/50">
          <Icon name="MapPin" size={24} className="mr-3" />
          Нас ждёт...
        </Button>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-30">
          <Icon name="Crown" size={48} className="text-luxury-gold" />
        </div>
        <div className="absolute top-10 right-10 opacity-30">
          <Icon name="Crown" size={48} className="text-luxury-gold" />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-40">
          <Icon name="Sparkles" size={32} className="text-barbie-pink" />
        </div>

        {/* Floating stars */}
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
          <Icon name="Star" size={20} className="text-luxury-gold/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-700">
          <Icon name="Star" size={16} className="text-barbie-pink/60" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-1000">
          <Icon name="Star" size={18} className="text-luxury-gold/50" />
        </div>
      </div>
    </div>
  );
}
