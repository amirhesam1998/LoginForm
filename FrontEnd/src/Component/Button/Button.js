import React from "react";
import { Button } from "@material-tailwind/react";
 
export default function Buttona(color,text) {
  return (
    <div className="flex w-max gap-4">
      <Button color={color}>{text}</Button>
    </div>
  );
}