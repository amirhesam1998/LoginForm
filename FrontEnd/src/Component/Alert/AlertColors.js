import React from "react";
import { Alert } from "@material-tailwind/react";
 
export default function AlertColors({ color, text }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert color={color}>{text}</Alert>
    </div>
  );
}
