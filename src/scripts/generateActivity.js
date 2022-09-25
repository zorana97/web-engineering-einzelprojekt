import axios from "axios";

function generateActivity() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://www.boredapi.com/api/activity", config).then((res) => {
    document.getElementById("activity").innerHTML = res.data.activity;
  });
}

export default generateActivity;
