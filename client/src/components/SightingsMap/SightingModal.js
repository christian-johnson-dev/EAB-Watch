import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SightingModal = ({
  selectedSighting,
  setSelectedSighting,
  adminResponse,
  setAdminResponse,
  updateSighting,
  deleteSighting,
}) => {
  const modalCustomStyles = {
    overlay: {
      backdropFilter: "blur(16px) saturate(180%)",
      backgroundColor: "rgba(0, 0, 0, 0.75)", // This will give you a dark overlay
    },
    content: {
      position: "absolute", // this should be absolute
      top: "10%", // This can be set to any value. For example, '10%' will position the modal 10% from the top of the viewport.
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translateX(-50%)", // We only need to adjust the X position
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "20px",
      maxHeight: "95vh",
      minHeight: "80vh",
    },
  };
  const [isUpdateSectionActive, setUpdateSectionActive] = React.useState(false);
  return (
    <Modal
      isOpen={selectedSighting !== null}
      onRequestClose={() => setSelectedSighting(null)}
      style={modalCustomStyles}
      className={`max-w-lg w-[90vw]`}
    >
      {selectedSighting && (
        <div>
          <button
            className="absolute top-2 right-2 z-50 bg-gray-400 h-10 w-10 rounded-full border-light border-4 hover:text-light hover:bg-gray-500"
            onClick={() => setSelectedSighting(null)}
          >
            X
          </button>
          <h2 className="uppercase text-3xl">
            {selectedSighting.sighting.classification}
          </h2>
          {selectedSighting.sighting.images.length > 0 && (
            <Carousel
              className={".carousel"}
              showThumbs={false}
            >
              {selectedSighting.sighting.images.map((image, index) => (
                <div
                  className="relative h-64 w-full"
                  key={index}
                >
                  <img
                    className="h-full w-full object-contain"
                    src={`http://localhost:8000/uploads/${image}`}
                    alt={`sighting-${index}`}
                  />
                </div>
              ))}
            </Carousel>
          )}
          <p>Status: {selectedSighting.sighting.status}</p>
          <p>
            is Ash Tree:{" "}
            {selectedSighting.sighting.isAshTree === true
              ? "Yes"
              : selectedSighting.sighting.isAshTree === false
              ? "No"
              : "Unknown"}
          </p>
          {/* toggle between read and update */}
          <div className="read-update-toggle">
            <button
              className="read-toggle bg-dark text-light px-4 py-2 rounded-full"
              onClick={() => setUpdateSectionActive(!isUpdateSectionActive)}
            >
              {isUpdateSectionActive ? "Read" : "Update"}
            </button>
          </div>
          {/* Read Section */}
          {isUpdateSectionActive ? (
            <div className="update-section">
              <textarea
                placeholder="Enter admin response"
                value={adminResponse}
                onChange={(e) => setAdminResponse(e.target.value)}
                className="w-full h-32 border-2 border-gray-300 rounded-md resize-none p-2"
              />
              <button
                onClick={() =>
                  updateSighting(selectedSighting._id, adminResponse)
                }
              >
                Update admin response
              </button>
              <button
                className="w-5/6 bg-pending text-light rounded-full  py-4 uppercase absolute bottom-8  mx-auto left-0 right-0"
                onClick={() => deleteSighting(selectedSighting._id)}
              >
                Delete this sighting
              </button>
            </div>
          ) : (
            <div className="read-section">
              {/* Secondary Indicators */}
              <div className="tag-section  ">
                <h4 className="tag-section-label "> Secondary Indicators</h4>
                <div className="indicators">
                  <span
                    className={
                      selectedSighting.sighting.epicormicShoots
                        ? "positive"
                        : "negative"
                    }
                  >
                    Epicormic Shoots:{" "}
                    {selectedSighting.sighting.epicormicShoots === true
                      ? "Yes"
                      : "No"}
                  </span>
                  <span
                    className={
                      selectedSighting.sighting.canopyDieback
                        ? "positive"
                        : "negative"
                    }
                  >
                    Canopy Dieback:{" "}
                    {selectedSighting.sighting.canopyDieback === true
                      ? "Yes"
                      : "No"}
                  </span>
                  <span
                    className={
                      selectedSighting.sighting.woodpecker
                        ? "positive"
                        : "negative"
                    }
                  >
                    Increased Woodpeckers:{" "}
                    {selectedSighting.sighting.woodpecker === true
                      ? "Yes"
                      : "No"}
                  </span>
                </div>
              </div>

              {/* Primary Indicators */}
              <div className="tag-section">
                <h4 className="tag-section-label">Primary Indicators</h4>
                <div className="indicators">
                  <span
                    className={
                      selectedSighting.sighting.emeraldAshBorer
                        ? "positive"
                        : "negative"
                    }
                  >
                    EAB present:{" "}
                    {selectedSighting.sighting.emeraldAshBorer === true
                      ? "Yes"
                      : "No"}
                  </span>
                  <span
                    className={
                      selectedSighting.sighting.exitHoles
                        ? "positive"
                        : "negative"
                    }
                  >
                    D-shaped Exit Holes:{" "}
                    {selectedSighting.sighting.exitHoles === true
                      ? "Yes"
                      : "No"}
                  </span>
                  <span
                    className={
                      selectedSighting.sighting.feedingGallery
                        ? "positive"
                        : "negative"
                    }
                  >
                    Feeding Galleries:{" "}
                    {selectedSighting.sighting.feedingGallery === true
                      ? "Yes"
                      : "No"}
                  </span>
                  <span
                    className={
                      selectedSighting.sighting.barkSplitting
                        ? "positive"
                        : "negative"
                    }
                  >
                    Bark Splitting:{" "}
                    {selectedSighting.sighting.barkSplitting === true
                      ? "Yes"
                      : "No"}
                  </span>
                </div>
              </div>
              <div className="tag-section">
                <h4 className="tag-section-label">Comments</h4>
                <p>{selectedSighting.sighting.comments || "--"}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default SightingModal;
