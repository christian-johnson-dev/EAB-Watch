import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const getAllSightings = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/sightings`);
    return res.data;
  } catch (error) {
    console.log("Error fetching sightings: ", error);
    throw error;
  }
};

export const deleteSighting = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/sighting/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error deleting sighting: ", error);
    throw error;
  }
};

export const updateSighting = async (id, adminResponse) => {
  try {
    const res = await axios.put(`${BASE_URL}/sighting/${id}`, {
      adminResponse,
    });
    return res.data;
  } catch (error) {
    console.log("Error updating sighting: ", error);
    throw error;
  }
};
