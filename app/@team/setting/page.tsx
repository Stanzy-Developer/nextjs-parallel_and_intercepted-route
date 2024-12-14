import { pause } from "@/lib/utils";
import React from "react";

export default async function Setting() {
  await pause();

  throw new Error("Error");
  return (
    <div className="card bg-orange-500">
      <h1 className="text-2xl font-bold text-white">Team Settings</h1>
    </div>
  );
}
