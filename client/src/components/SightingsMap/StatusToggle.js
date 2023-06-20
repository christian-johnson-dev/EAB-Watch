import React from "react";

const StatusToggle = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <div className="mx-auto flex">
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
    </div>
  );
};

export default StatusToggle;
