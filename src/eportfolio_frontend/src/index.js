import { eportfolio_backend } from "../../declarations/eportfolio_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await eportfolio_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;
  const frontendCid = window.location.origin.split('//')[1].split('.')[0];
  const canisterId = process.env.FRONTEND_CANISTER_ID;
  new webpack.EnvironmentPlugin({
    FRONTEND_CANISTER_ID: canisters["frontend"]
  })
  return false;
});
