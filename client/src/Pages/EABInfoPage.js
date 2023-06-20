import React from "react";

const EABInfoPage = () => {
  // Component Logic
  return (
    <div className="bg-light flex flex-col flex-grow ">
      <div className="container mx-auto">
        <h2 className="w-full text-center text-3xl font-bold mt-8 mb-4">
          Why this matters to Oregon
        </h2>
        <p>
          The Emerald Ash Borer (EAB), an invasive insect species native to
          northeastern Asia, has had significant impacts on ash tree populations
          in areas where it has been established. If the EAB were to establish
          itself in Oregon, we could expect several potential consequences:
        </p>
        <ol className="px-12 py-8">
          <li>
            <span className="font-bold text-lg">Biodiversity Loss:</span> Ash
            trees are a significant part of many ecosystems. The loss of ash
            trees could disrupt these systems, impacting not only the tree
            species themselves but also the organisms that rely on them for
            habitat or food.{" "}
          </li>
          <li>
            <span className="font-bold text-lg">Economic Impacts:</span> The
            forestry sector is important for Oregon's economy, and the loss of
            ash trees could have financial implications. This is especially true
            for industries that rely on ash, such as the lumber, furniture, and
            sports equipment industries. Ash trees are also important in urban
            areas for their aesthetic and property value-enhancing qualities, so
            losses could incur costs for homeowners and municipalities for tree
            removal and replacement.
          </li>
          <li>
            <span className="font-bold text-lg">
              Increased Costs for Land Management:
            </span>{" "}
            Infestations of Emerald Ash Borer can lead to increased costs for
            local governments, homeowners, and land managers. This includes the
            costs of insecticide treatments, tree removal, and replacement with
            different species.
          </li>
          <li>
            <span className="font-bold text-lg">Ecological Impacts:</span> The
            death of ash trees can affect soil quality and increase
            susceptibility to erosion. The change in canopy cover can also
            influence undergrowth and impact other plant and animal species.
          </li>
          <li>
            <span className="font-bold text-lg">Potential Fire Hazard:</span>{" "}
            Dead and dying trees can increase the risk of fires, especially in
            areas prone to drought conditions.
          </li>
        </ol>
        <p>
          Public agencies, homeowners, and businesses can work together to
          prevent the spread of EAB. This includes activities like not moving
          firewood (which can carry the insects to new areas), monitoring ash
          trees for signs of infestation, and using approved insecticides where
          necessary.
        </p>
      </div>
    </div>
  );
};

export default EABInfoPage;
