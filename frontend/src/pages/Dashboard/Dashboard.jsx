import { useState } from "react";
import Button from "../../components/Button";
import { TiPlus } from "react-icons/ti";
import QuantityCard from "../../components/QuantityCard";

const Dashboard = () => {
  const [isActiveCard, setIsActiveCard] = useState(0);

  const handleCardClick = (index) => {
    console.log(`Card ${index} clicked`);
    setIsActiveCard(index);
  };

  return (
    <div className="bg-gray-50 rounded-lg pb-4 shadow h-[100vh]">
      <div className="flex items-center justify-between p-5">
        <div>
          <h2 className="text-3xl text-black">Dashboard</h2>
          <p className="mt-1 text-slate-500">Lorem ipsum dolor sit.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="primary">
            <TiPlus /> Add Project
          </Button>
          <Button> Import Project </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 min-h-screen gap-3 p-2">
        <QuantityCard
          key={1}
          title="Total Projects"
          quantity="24"
          icon={<TiPlus />}
          onClick={() => handleCardClick(1)}
          isActive={isActiveCard === 1}
        />
        <QuantityCard
          key={2}
          title="Ended Projects"
          quantity="24"
          icon={<TiPlus />}
          onClick={() => handleCardClick(2)}
          isActive={isActiveCard === 2}
        />
        <QuantityCard
          key={3}
          title="Running Projects"
          quantity="24"
          icon={<TiPlus />}
          onClick={() => handleCardClick(3)}
          isActive={isActiveCard === 3}
        />
        <QuantityCard
          key={4}
          title="Pending Projects"
          quantity="24"
          icon={<TiPlus />}
          onClick={() => handleCardClick(4)}
          isActive={isActiveCard === 4}
        />
      </div>
    </div>
  );
};

export default Dashboard;
