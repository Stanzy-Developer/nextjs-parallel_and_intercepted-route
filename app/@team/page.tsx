import { pause } from "@/lib/utils";
import React from "react";

const Team = async () => {
  await pause();
  return (
    <div className="card bg-blue-500">
      <h1 className="text-2xl font-bold text-white">Team</h1>
    </div>
  );
};

export default Team;
