import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface QuizPageProps {
  guestName: string;
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  category: "historical" | "modern";
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "В каком году был основан Санкт-Петербург?",
    options: ["1703", "1712", "1725", "1689"],
    correct: 0,
    category: "historical",
  },
  {
    id: 2,
    question: "Кто был архитектором Зимнего дворца?",
    options: [
      "Доменико Трезини",
      "Бартоломео Растрелли",
      "Карло Росси",
      "Андрей Воронихин",
    ],
    correct: 1,
    category: "historical",
  },
  {
    id: 3,
    question: "Как называлась первая столица Российской империи после Москвы?",
    options: ["Новгород", "Санкт-Петербург", "Петроград", "Царское Село"],
    correct: 1,
    category: "historical",
  },
  {
    id: 4,
    question: "В каком дворце произошло убийство Распутина?",
    options: [
      "Зимний дворец",
      "Михайловский дворец",
      "Юсуповский дворец",
      "Мариинский дворец",
    ],
    correct: 2,
    category: "historical",
  },
  {
    id: 5,
    question: "Сколько дней длилась блокада Ленинграда?",
    options: ["872 дня", "900 дней", "1000 дней", "800 дней"],
    correct: 0,
    category: "historical",
  },
  {
    id: 6,
    question: "Как называется главная река Санкт-Петербурга?",
    options: ["Мойка", "Фонтанка", "Нева", "Канал Грибоедова"],
    correct: 2,
    category: "modern",
  },
  {
    id: 7,
    question: "Сколько островов в Санкт-Петербурге?",
    options: ["42", "101", "33", "150"],
    correct: 0,
    category: "modern",
  },
  {
    id: 8,
    question: "Какой театр считается главным оперным театром Санкт-Петербурга?",
    options: [
      "Большой театр",
      "Мариинский театр",
      "Александринский театр",
      "Михайловский театр",
    ],
    correct: 1,
    category: "modern",
  },
  {
    id: 9,
    question: "Какая станция метро была первой в Санкт-Петербурге?",
    options: [
      "Площадь Восстания",
      "Невский проспект",
      "Автово",
      "Кировский завод",
    ],
    correct: 3,
    category: "modern",
  },
  {
    id: 10,
    question: "Какой мост в Петербурге самый длинный?",
    options: [
      "Дворцовый мост",
      "Большеохтинский мост",
      "Мост Александра Невского",
      "Троицкий мост",
    ],
    correct: 2,
    category: "modern",
  },
];

const getStyleByScore = (score: number) => {
  if (score >= 8) return "modern-luxury"; // 8-10 правильных
  if (score >= 6) return "contemporary"; // 6-7 правильных
  if (score >= 4) return "transitional"; // 4-5 правильных
  if (score >= 2) return "neo-classical"; // 2-3 правильных
  return "imperial"; // 0-1 правильных
};

export default function QuizPage({ guestName, onComplete }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("imperial");

  const question = QUESTIONS[currentQuestion];

  useEffect(() => {
    setCurrentStyle(getStyleByScore(score));
  }, [score]);

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === question.correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion === QUESTIONS.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      }
    }, 1500);
  };

  const getStyleClasses = () => {
    switch (currentStyle) {
      case "imperial":
        return {
          bg: "bg-gradient-to-b from-blue-900 via-blue-800 to-emerald-900",
          card: "bg-gradient-to-br from-white/95 to-blue-50/90 border-2 border-yellow-400/30",
          title: "text-blue-900 font-serif",
          accent: "text-yellow-600",
          button:
            "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-blue-900",
        };
      case "neo-classical":
        return {
          bg: "bg-gradient-to-b from-slate-800 via-slate-700 to-emerald-800",
          card: "bg-gradient-to-br from-white/95 to-slate-50/90 border-2 border-amber-400/40",
          title: "text-slate-800 font-serif",
          accent: "text-amber-600",
          button:
            "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-800",
        };
      case "transitional":
        return {
          bg: "bg-gradient-to-b from-gray-800 via-gray-700 to-teal-800",
          card: "bg-gradient-to-br from-white/95 to-gray-50/90 border-2 border-teal-400/40",
          title: "text-gray-800 font-sans",
          accent: "text-teal-600",
          button:
            "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-gray-800",
        };
      case "contemporary":
        return {
          bg: "bg-gradient-to-b from-slate-900 via-slate-800 to-purple-900",
          card: "bg-gradient-to-br from-white/95 to-slate-50/90 border-2 border-purple-400/40",
          title: "text-slate-800 font-sans",
          accent: "text-purple-600",
          button:
            "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white",
        };
      case "modern-luxury":
        return {
          bg: "bg-gradient-to-b from-black via-gray-900 to-black",
          card: "bg-gradient-to-br from-white/95 to-gray-50/90 border-2 border-pink-400/40",
          title: "text-gray-900 font-sans",
          accent: "text-pink-600",
          button:
            "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white",
        };
      default:
        return {
          bg: "bg-gradient-to-b from-blue-900 via-blue-800 to-emerald-900",
          card: "bg-gradient-to-br from-white/95 to-blue-50/90 border-2 border-yellow-400/30",
          title: "text-blue-900 font-serif",
          accent: "text-yellow-600",
          button:
            "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-blue-900",
        };
    }
  };

  const styles = getStyleClasses();

  if (showResult) {
    return (
      <div
        className={`min-h-screen ${styles.bg} flex items-center justify-center p-4 transition-all duration-1000`}
      >
        <Card className={`w-full max-w-2xl ${styles.card} shadow-2xl`}>
          <CardHeader className="text-center space-y-6 pt-12">
            <div className={`${styles.title} text-3xl font-bold mb-4`}>
              Викторина завершена!
            </div>
            <div className={`${styles.accent} text-xl`}>
              {guestName}, ваш результат: {score} из {QUESTIONS.length}
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6 pb-12">
            <div className="space-y-4">
              {score >= 8 && (
                <p className="text-lg text-green-600 font-semibold">
                  Превосходно! Вы настоящий знаток Петербурга!
                </p>
              )}
              {score >= 6 && score < 8 && (
                <p className="text-lg text-blue-600 font-semibold">
                  Отлично! Вы хорошо знаете город!
                </p>
              )}
              {score >= 4 && score < 6 && (
                <p className="text-lg text-yellow-600 font-semibold">
                  Хорошо! Есть что изучить!
                </p>
              )}
              {score >= 2 && score < 4 && (
                <p className="text-lg text-orange-600 font-semibold">
                  Неплохо для начала!
                </p>
              )}
              {score < 2 && (
                <p className="text-lg text-red-600 font-semibold">
                  Стоит больше узнать о Петербурге!
                </p>
              )}
            </div>

            <Button
              onClick={onComplete}
              className={`${styles.button} font-bold px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300`}
            >
              <Icon name="ArrowRight" size={24} className="mr-3" />
              Продолжить
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${styles.bg} flex items-center justify-center p-4 transition-all duration-1000`}
    >
      <Card className={`w-full max-w-3xl ${styles.card} shadow-2xl`}>
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-between items-center">
            <div className={`${styles.accent} font-semibold`}>
              Вопрос {currentQuestion + 1} из {QUESTIONS.length}
            </div>
            <div className={`${styles.accent} font-semibold`}>
              Счет: {score}
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${
                styles.accent.includes("yellow")
                  ? "from-yellow-400 to-amber-500"
                  : styles.accent.includes("amber")
                    ? "from-amber-400 to-yellow-500"
                    : styles.accent.includes("teal")
                      ? "from-teal-400 to-cyan-500"
                      : styles.accent.includes("purple")
                        ? "from-purple-400 to-indigo-500"
                        : "from-pink-400 to-rose-500"
              } h-2 rounded-full transition-all duration-300`}
              style={{
                width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className={`${styles.title} text-2xl font-bold mb-6`}>
            {question.question}
          </div>

          <div
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              question.category === "historical"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {question.category === "historical"
              ? "📚 История"
              : "🏛️ Современность"}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pb-8">
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`text-left p-6 h-auto text-lg justify-start transition-all duration-300 ${
                  answered
                    ? index === question.correct
                      ? "bg-green-500 hover:bg-green-500 text-white border-green-600"
                      : index === selectedAnswer && index !== question.correct
                        ? "bg-red-500 hover:bg-red-500 text-white border-red-600"
                        : "bg-gray-100 hover:bg-gray-100 text-gray-500 border-gray-300"
                    : `bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300 ${
                        styles.button.includes("text-blue-900")
                          ? "hover:border-yellow-400"
                          : styles.button.includes("text-slate-800")
                            ? "hover:border-amber-400"
                            : styles.button.includes("text-gray-800")
                              ? "hover:border-teal-400"
                              : styles.button.includes("text-white") &&
                                  styles.button.includes("purple")
                                ? "hover:border-purple-400"
                                : "hover:border-pink-400"
                      }`
                }`}
              >
                <span className="mr-4 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
                {answered && index === question.correct && (
                  <Icon name="Check" size={20} className="ml-auto text-white" />
                )}
                {answered &&
                  index === selectedAnswer &&
                  index !== question.correct && (
                    <Icon name="X" size={20} className="ml-auto text-white" />
                  )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
