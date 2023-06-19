import React from "react";
import { Listbox } from "@headlessui/react";

const StatusToggle = ({
  selectedStatus,
  setSelectedStatus,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div>
      <div className="marker-toggle-tab">
        <label className="bg-light text-dark marker-toggle">
          <input
            type="radio"
            value="all"
            checked={selectedStatus === "all"}
            onChange={() => setSelectedStatus("all")}
          />
          All
        </label>
        <label className="bg-verified text-light marker-toggle">
          <input
            type="radio"
            value="verified"
            checked={selectedStatus === "verified"}
            onChange={() => setSelectedStatus("verified")}
          />
          Verified
        </label>
        <label className="bg-pending text-light marker-toggle">
          <input
            type="radio"
            value="pending"
            checked={selectedStatus === "pending"}
            onChange={() => setSelectedStatus("pending")}
          />
          Pending
        </label>
        <label className="bg-reclassified text-light marker-toggle">
          <input
            type="radio"
            value="reclassified"
            checked={selectedStatus === "reclassified"}
            onChange={() => setSelectedStatus("reclassified")}
          />
          Reclassified
        </label>
      </div>
      <div className="filter-select md:hidden">
        <Listbox
          value={selectedOption}
          onChange={setSelectedOption}
        >
          <Listbox.Button className={selectedOption.className}>
            {selectedOption.name}
          </Listbox.Button>
          <Listbox.Options>
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option}
                as={React.Fragment}
                className={option.className}
              >
                {({ active, selected }) => (
                  <li className={`${active ? " font-semibold" : ""}`}>
                    {selected ? option.name : option.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
};

export default StatusToggle;
