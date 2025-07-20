import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      <Card />
      <Card />

      <div className="mt-6 flex flex-col gap-4">
        <Button title="Small Rounded-sm" style="rounded-sm px-2 py-1 bg-blue-500 text-sm" />
        <Button title="Medium Rounded-md" style="rounded-md px-4 py-2 bg-green-500 text-base" />
        <Button title="Large Rounded-full" style="rounded-full px-6 py-3 bg-purple-500 text-lg" />
      </div>
    </div>
  );
};

export default Landing;
