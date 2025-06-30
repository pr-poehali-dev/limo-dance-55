import { useState } from "react";
import AuthPage from "@/components/AuthPage";
import QuizPage from "@/components/QuizPage";
import MainInvitation from "@/components/MainInvitation";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [guestName, setGuestName] = useState("");

  const handleAuth = (name: string) => {
    setGuestName(name);
    setIsAuthenticated(true);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  if (!isAuthenticated) {
    return <AuthPage onAuth={handleAuth} />;
  }

  if (!quizCompleted) {
    return <QuizPage guestName={guestName} onComplete={handleQuizComplete} />;
  }

  return <MainInvitation guestName={guestName} />;
};

export default Index;
