import { pause } from "@/lib/utils";
import React from "react";

const Analytics = async () => {
  await pause();
  return (
    <div className="card bg-violet-500">
      <h1 className="text-2xl font-bold text-white">Analytics</h1>
    </div>
  );
};

export default Analytics;
