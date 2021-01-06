// let url="https://raw.githubusercontent.com/kumaraditya2002/orgeeno/main/public/blog.json";
let url = "public/blog.json";
let container = document.getElementById("maincontent")
let hstr="";
let i=1;
fetch(url).then(res => res.json())
.then(data=>{
    console.log(data);
    data["Poster"].forEach(element => {
        hstr +=`<div class="col-md-4 col-6 mar" data-aos="fade-up" data-aos-delay="100" >
        <div class="card">
        <img src="${element["b_img"]}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element["b_name"]}</h5>
        <p class="card-text">${element["b_disc"]}</p>
        <div class="icons">
          <i><i class="fa fa-thumbs-up far btn" id="thumb${i}" onclick="ToggleThum(${i})"></i><span class="badge badge-light" id="likes${i}">${3*i}</span></i>
          <a><i id="comment" class="fa fa-comment far btn"></i></a>
        </div>
        </div>
        </div>
      </div>`
      i=i+1;
    });
    container.innerHTML = hstr;
});
// console.log(i);
let comment = document.getElementById("comment");
let cl = localStorage.getItem("");
var j;
var k;
var likes = new Uint8Array(20);
localStorage.setItem("likes", JSON.stringify(likes));
function ToggleThum(j){
    
    let thumb = document.getElementById(`thumb${j}`);
    let like = document.getElementById(`likes${j}`);
    k=j-1; 
    likes=JSON.parse(localStorage.getItem("likes"));
    likes[k]=0; 
    if(thumb.classList.contains("far")){
        thumb.classList.remove("far");
        thumb.classList.add("fas");
        likes[k] = likes[k] + 1 ;
        like.innerHTML = likes[k];
        localStorage.setItem("likes",JSON.stringify(likes));
    }
    else if(thumb.classList.contains("fas"))
    {
        thumb.classList.remove("fas");
        thumb.classList.add("far");
        likes[k] = likes[k] - 1;
        like.innerHTML = likes[k];
        localStorage.setItem("likes",JSON.stringify(likes));
    }
}
