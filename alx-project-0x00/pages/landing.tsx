// pages/landing.tsx
import React from "react";
import Button from "@/components/Button"; // ✅ Correct import

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* Small buttons */}
        <Button title="Small SM" size="small" shape="rounded-sm" />
        <Button title="Small MD" size="small" shape="rounded-md" />
        <Button title="Small FULL" size="small" shape="rounded-full" />

        {/* Medium buttons */}
        <Button title="Medium SM" size="medium" shape="rounded-sm" />
        <Button title="Medium MD" size="medium" shape="rounded-md" />
        <Button title="Medium FULL" size="medium" shape="rounded-full" />

        {/* Large buttons */}
        <Button title="Large SM" size="large" shape="rounded-sm" />
        <Button title="Large MD" size="large" shape="rounded-md" />
        <Button title="Large FULL" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
