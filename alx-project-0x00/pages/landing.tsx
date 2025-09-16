import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Smalle Rounded" size="sm" shape="sm" />
      <Button title="Smalle Rounded" size="md" shape="md" />
      <Button title="Smalle Rounded" size="lg" shape="full" />
    </div>
  );
};

export default Landing;
