import { useCallback, useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComp = (props) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);
  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  // const transferDate = useCallback(() => {
  //   props.onTransfer(range[0]);
  // }, [range, props]);

  useEffect(() => {
    // transferDate();
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, "E dd MMM")} - ${format(
          range[0].endDate,
          "E dd MMM"
        )}`}
        readOnly
        className="bg-transparent w-[220px] focus:outline-none p-2 font-semibold"
        onClick={() => setOpen((open) => !open)}
        name="date"
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
