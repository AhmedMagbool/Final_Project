let titlearray = [
    "الاطعمة",
    "المشروبات",
    "منتجات عامة",
];

let descriptionarray = [
    "",
    "",
    "",
];
let page = [
    "./cat1.html",
    "./cat2.html",
    "./cat3.html",
];

let d = document.querySelector(".container");

for (let i = 0; i < titlearray.length; i++){
    let f = document.querySelector(".container").innerHTML;
    d.innerHTML = ` <div id = "cards${i}" class="boxes">
    <div class="box_content">
        <h2>
        ${titlearray[i]}
        </h2>
        <p>
        ${descriptionarray[i]}
        </p>
        
        </a>
        <a href="
        ${page[i]}">
        .للمزيد
        </a>


    </div>
</div>` + f;
let b = document.getElementById(`cards${i}`);
b.style.backgroundImage = `url('../img/${titlearray[i]}.jpg')`
};

