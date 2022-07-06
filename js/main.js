import Glass from "./glass.js";
import dataGlasses from "./dataGlass.js";

// 1: render glass to showcase
// 2: wear glass to model
// 3: show in4 glass
// 4: before and after

// init
function init() {
  const glasslist = glassList(dataGlasses);
  renderGlass(glasslist);
  wearGlass(glasslist);
}
init();

// arr to object arr
function glassList(arr) {
  const glassList = arr.map((glass) => {
    const { id, src, virtualImg, brand, name, color, price, description } =
      glass;
    return new Glass(
      id,
      src,
      virtualImg,
      brand,
      name,
      color,
      price,
      description
    );
  });
  return glassList;
}

// render
function renderGlass(arr) {
  const show = arr.reduce((last, glass) => {
    return (
      last +
      `
      <div class="col-6 col-md-4 col-lg-4">
      <img id="${glass.Id}" src="${glass.Src}" class="img-fluid" alt = "" />
  </div>
      `
    );
  }, "");
  document.getElementById("vglassesList").innerHTML = show;
}

function wearGlass(arr) {
  for (let glass of arr) {
    // wear
    document.getElementById(`${glass.Id}`).addEventListener("click", () => {
      document.getElementById(
        "avatar"
      ).innerHTML = `<img src="${glass.VirtualImg}"/>`;

      // show in4

      document.getElementById("glassesInfo").style.display = "block";

      document.getElementById("glassesInfo").innerHTML = `
        <p class="mb-1">${glass.Name} - ${glass.Brand} - (${glass.Color})</p>

        <div class="mb-2">
            <button class="btn btn-warning">${glass.Price}</button>
            <span class="text-success">Stocking</span>
        </div>
        <p >${glass.Description}</p>
      `;
    });
  }
}

// before, after

window.beforeAfter = (clicker) => {
  if (document.getElementById("avatar").innerHTML === "") {
    return;
  }
  if (clicker === true) {
    document.getElementById("avatar").querySelector("img").style.display =
      "block";
  } else {
    document.getElementById("avatar").querySelector("img").style.display =
      "none";
  }
};

// function beforeAfter(condition) {
//   if (document.getElementById("avatar").innerHTML === "") {
//     return;
//   }
//   if (condition === true) {
//     document.getElementById("avatar").querySelector("img").style.display =
//       "block";
//   } else {
//     document.getElementById("avatar").querySelector("img").style.display =
//       "none";
//   }
// }
