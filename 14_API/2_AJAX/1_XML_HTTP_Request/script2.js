const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
function getData(url) {
  return new Promise((resolve, reject) => {
    //1. Create the http request object
    let xml = new XMLHttpRequest();

    //2. Setup karna request ko
    xml.open("GET", url);

    //on success

    xml.onload = (res) => {
      let data = JSON.parse(res.target.response);
      resolve(data);
    };

    //on failure
    xml.onerror = (err) => {
      reject(err);
    };

    //send request
    xml.send();
  });
}

btn.addEventListener("click", () => {
  let url = "https://world.openfoodfacts.org/api/v3/product/737628064502.json";
  getData(url)
    .then((data) => {
      data = data.product._keywords;
      data.forEach((d) => {
        let li = document.createElement("li");
        li.innerText = d;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
