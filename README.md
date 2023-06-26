<div style="text-align: right; font-size: .75rem"> Christian Johnson </div>
<div style="text-align: right; font-size: .75rem"> June, 2023 </div>

# EAB Watch

This is Christian Johnson's solo-project submission for the Coding Dojo Accelerated Part-time program.

### The pitch:

**_EAB Watch_** is a MERN-stack prototype that alows users to report sightings of the invasive species Emerald Ash Borer. EABs arrived in the Eastern US almost 10 years ago and have slowly been moving across the continent. The first sighting on the west coast was the summer of 2022. Oregon has rushed to preserve one of it's ecological assets. EAB Watch educates users as it walks them through a 10-step reporting form. It also allows the user to view other sightings on an interactive map with clickable markers.

### CRUD functionality:

---

- **CREATE:** A user completes a 10-step form with client and server validations

- **READ:** Users can view and filter all records on the _View Sightings_ map. A single record can be viewed by clicking a drop pin.
- **UPDATE** Since Admin users are yet to be implemented, clicking on the update button allows a psuedo-admin to respond to a sighting.
- **DELETE** The pseudo admin can also delete a record at the same point as _Update_

### Technical additions:

---

- Image uploading using the Multer library to handle multi-part form submision

- Google Maps to display sightings and to enter a sighting location within the multi-state form.

## Visual Walkthrough

### Reading sightings:

![Read All Sightings](/misc/Read_Sightings.png)

### Report Sighting (input forms):

![Add contact info](/misc/Create_Sighting_1.png)

### Report Sighting (input map with dragable marker):

![Map input](/misc/Create_Sighting_2.png)

### Report Sighting (image upload with editable list of seelected images):

![Add images](/misc/Create_Sighting_3.png)

### Report Sighting (summary):

Validations. Each summary section is clickable and takes the user back to the corresponding step
![Summary](/misc/Create_Sighting_4.png)
Which has an updated nav button to take them back to the end summary instead of back through each step.
![Edit submission](/misc/Create_Sighting_5.png)

### Record is displayed on map

![Displayed records](/misc/Read_Sightings2.png)

### Clicking on pin displays info of record

![Read One Sighting](/misc/Read_One_Sighting.png)

### Pseudo-admin can respond to sighting

![Read One Sighting](/misc/Update_Delete_Sighting.png)
