import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Rounded" className="Small" />
      <Button title="Small Rounded" className="Medium" />
      <Button title="Small Rounded" className="Large" />
    </div>
  );
};

export default Landing;
