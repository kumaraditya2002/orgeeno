let url="https://raw.githubusercontent.com/kumaraditya2002/orgeeno/main/public/db.json";
let container = document.getElementById("maincontent")
let hstr="";
fetch(url).then(res => res.json())
.then(data=>{
    console.log(data);
    data["Techniques"].forEach(element => {
        hstr += `<div class="col-sm-3 m-5">
        <div class="card" style="width: 35rem;">
            <img src="${element["t_img"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element["t_name"]}</h5>
            <p class="card-text">${element["t_disc"]}</p>
            </div>
        </div>
        </div>`
    });
    container.innerHTML = hstr;
});