const container = document.querySelector(".container");
const coffees = [
  {
    name: "Camera View",
    image: "images/coffee3.jpg"
  }
];
const showPicture = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <input type="file" accept="image/*" capture="camera" />
				
				<img class="card--avatar" src=${image} />
				
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Save</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showPicture);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
