import React from "react";

const DarkButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-black text-sm text-white font-medium">
    {children}
  </button>
);

const LightButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-white text-sm text-black border border-black font-medium">
    {children}
  </button>
);

export { DarkButton, LightButton };
