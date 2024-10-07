import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import { useState } from "react";

export const DatePicker = ()=>{
  const [selected, setSelected] = useState<Date>();
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        today: `border border-lime-500 rounded-lg`, 
        selected: `bg-lime-500 rounded border-amber-500 text-white`, 
        root: `${defaultClassNames.root} shadow text-xs `, 
        chevron: ` fill-lime-500` 
      }}
    />
  );
}