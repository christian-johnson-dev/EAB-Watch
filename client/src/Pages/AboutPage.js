import React from "react";

const AboutPage = () => {
  // Component Logic
  return (
    <div className="bg-light flex flex-col flex-grow ">
      <div className="container mx-auto">
        <section>
          <h3 className="text-section-heading">About</h3>
          <p>
            EAB Watch EAB Watch is a community-driven initiative dedicated to
            the monitoring and potential prevention of Emerald Ash Borer (EAB)
            in Oregon. We believe in the power of citizen science and the
            important role that everyone can play in safeguarding our local
            ecosystems.
          </p>
        </section>
        <section>
          <h3 className="text-section-heading">Our Mission</h3>
          <p>
            Our mission is to provide an easy-to-use platform for the public to
            report sightings of Emerald Ash Borer (EAB) in Oregon. We aim to
            raise awareness about the potential ecological impacts that could
            result from an EAB infestation and promote early detection efforts
            to mitigate potential damage.{" "}
          </p>
        </section>
        <section>
          <h3 className="text-section-heading">Emerald Ash Borer</h3>
          <p>
            The Emerald Ash Borer (EAB) is a destructive, invasive insect native
            to northeastern Asia that poses a significant threat to ash tree
            populations in North America. The small, metallic-green beetle has
            decimated millions of ash trees in the U.S. since its accidental
            introduction in the early 2000s.
          </p>
          <p>
            EAB larvae feed on the inner bark of ash trees, disrupting the
            tree's ability to transport water and nutrients. Without early
            detection and proper management, infested trees often die within a
            few years.
          </p>
        </section>
        <section>
          <h3 className="text-section-heading">Why EAB Watch?</h3>
          <p>
            The first sighting of the Emerald Ash Borer in Oregon was in the
            summer of 2021. The rapid spread across the U.S. and imminent
            arrival in Oregon is of major concern. This is due to the
            potentially severe ecological, economic, and aesthetic impacts that
            EAB infestations could have on local ecosystems and industries.
          </p>
          <p>
            EAB Watch empowers citizens to actively contribute to early
            detection efforts, facilitating rapid response in the event of an
            EAB sighting in Oregon. By reporting potential sightings, members of
            the public can play a crucial role in helping safeguard Oregon's ash
            tree populations and the ecosystems that depend on them.
          </p>
        </section>
        <section>
          <h3 className="text-section-heading">How to Participate</h3>
          <p>
            You can participate in EAB Watch by staying vigilant and reporting
            any signs of EAB presence. Whether you are a homeowner, a hiker, a
            forestry worker, or just a concerned citizen, your reports are
            valuable to us. Visit our 'Report a Sighting' page to submit your
            findings. You'll be contributing to a vital network of eyes on the
            ground, protecting Oregon's beautiful and vital ash trees.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
