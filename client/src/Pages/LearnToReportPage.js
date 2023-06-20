import React from "react";

const LearnToReportPage = () => {
  // Component Logic
  return (
    <div className="bg-light flex flex-col flex-grow ">
      <div className="container mx-auto">
        <h2>Learn to report</h2>
        <hr />
        <h3>Primary indicators of Emerald ash borer infestation include:</h3>
        <ul>
          <li>
            {" "}
            <a href="https://eab.russell.wisc.edu/signs-and-symptoms/">
              S-shaped galleries:
            </a>{" "}
            These are winding paths beneath the bark of the tree, created by the
            feeding larvae. The galleries are filled with sawdust and frass
            (larvae excrement) and can cause the bark to split vertically. The
            S-shaped galleries and larvae can often be seen beneath split bark.
          </li>
          <li>
            {" "}
            <a href="#">D-shaped exit holes:</a> These are small, half-moon
            shaped holes that are created when the adult beetles emerge from the
            tree. The holes are about 1/8 inch in diameter and are often found
            on the trunk of the tree.
          </li>
        </ul>
        <h3>Secondary indicators of Emerald ash borer infestation include:</h3>
        <ul>
          <li>
            Crown dieback: This is the yellowing and wilting of leaves and the
            thinning of branches at the top of the tree's canopy. This can be a
            sign of an infestation but can also occur for other reasons such as
            disease or drought stress​.
          </li>
          <li>
            Epicormic sprouting: When a tree is stressed, new growths often
            sprout on the trunk or from the roots of the tree, below where the
            larvae are feeding. These shoots sometimes have oddly large leaves.
            As with crown dieback, this can be a symptom of various types of
            stress and does not specifically indicate an EAB infestation.
          </li>
          <li>
            Woodpecker damage: Where there are emerald ash borers, there are
            often woodpeckers feeding on their larvae. This woodpecker activity
            often leaves behind holes and missing strips of bark, a condition
            sometimes referred to as "flecking" or "bronzing". However,
            woodpeckers will attack just about any tree full of insect larvae,
            so this alone does not confirm an EAB infestation​.
          </li>
        </ul>
      </div>

      {/* Component Content */}
    </div>
  );
};

export default LearnToReportPage;
