const container = document.querySelector(".container");
const inputtype = [
  {
    name: "Picture",
    accepttype: "image/*",
	capturetype: "environment"
  },
  {
    name: "Video",
    accepttype: "video/*",
	capturetype: "environment"
  }
  }
];
const showPicture = () => {
  let output = "";
  inputtype.forEach(
    ({ name, accepttype, capturetype }) =>
      (output += `
              <div class="card">
			  
				<input type="file" accept="video/*" capture="environment"/>
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






