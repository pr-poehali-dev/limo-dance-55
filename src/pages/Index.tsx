import { useState } from "react";
import AuthPage from "@/components/AuthPage";
import MainInvitation from "@/components/MainInvitation";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guestName, setGuestName] = useState("");

  const handleAuth = (name: string) => {
    setGuestName(name);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthPage onAuth={handleAuth} />;
  }

  return <MainInvitation guestName={guestName} />;
};

export default Index;
