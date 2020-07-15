import axios from "axios";

const futureEats = axios.create({
  baseUrl: "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB",
});

export default futureEats;
