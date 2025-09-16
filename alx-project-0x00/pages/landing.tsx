import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Rounded" className="Small" styles="rounded-sm" />
      <Button title="Small Rounded" className="Medium" styles="rounded-lg" />
      <Button title="Small Rounded" className="Large" styles="rounded-full" />
    </div>
  );
};

export default Landing;
