const btn = document.querySelector(".btn");
let ul = document.querySelector('ul');
//1. Create the XML Http request

let xml = new XMLHttpRequest();

//2. Setup Request
let url = "https://world.openfoodfacts.org/api/v3/product/737628064502.json";
xml.open("GET", url);

//3. Success hone par request..
xml.onload = (res) => {
  // console.log(res);
  let data = JSON.parse(res.target.response); //to change JSON to javascript object we use JSON.parse()
  data = data.product._keywords;
  data.forEach((d)=>{
    let li = document.createElement('li');
    li.innerText = d;
    ul.appendChild(li);
  })
};

//4. Failure hone par request..
xml.onerror = (err) => {
  console.log(err);
};

btn.addEventListener("click", () => {
  xml.send(); //To send request we have to do this
});
