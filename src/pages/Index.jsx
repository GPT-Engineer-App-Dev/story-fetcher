import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hacker News Top 100</h1>
      <p className="text-xl mb-8">Stay updated with the latest and most popular stories from Hacker News.</p>
      <NavLink to="/hacker-news">
        <Button size="lg">View Top Stories</Button>
      </NavLink>
    </div>
  );
};

export default Index;