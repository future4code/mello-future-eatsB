import axios from "axios";

const futureEats = axios.create({
  baseURL: "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB",
});

export default futureEats;
