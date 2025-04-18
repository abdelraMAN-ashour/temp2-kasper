const smallScreenIcon=document.querySelector(".small-screen-icon");
const smallScreenMenu=document.querySelector(".small-screen-menu");
const untouchLayer=document.querySelector(".untouch-layer");
const headerRightArrow=document.querySelector(".right-arrow");
const headerLeftArrow=document.querySelector(".left-arrow");
const header=document.querySelector("header");
const headerPageActive=document.querySelectorAll(".position-page div");
const portfolioFilter=document.querySelectorAll(".portfolio .filter div");
const portfolioPort=document.querySelectorAll(".portfolio .lower>div");
const picOfPeople=document.querySelectorAll(".about .people .pic");
const people=document.querySelectorAll(".about .person");
const peoplePosition=document.querySelector(".about .testimonials .position");
const scale=document.querySelectorAll(".about .third-section .skills .scale .what-was-after");
const scaleReadingsHtml=document.querySelectorAll(".about .third-section .skills .perc");
let imgCouncter=1;
const scaleReadings=[90,84,100,20];
for(let i=0;i<scaleReadings.length;i++){
    scaleReadingsHtml[i].textContent=`${scaleReadings[i]}%`;
    scale[i].style.width=`${scaleReadings[i]}%`
    scaleReadingsHtml[i].style.left=`${scaleReadings[i]}%`;
}
const showMenu=function(){
    smallScreenMenu.classList.toggle("disp-none")
    untouchLayer.classList.toggle("disp-none");
};
const resetActivePage=function(){
    for(let i=0;i<3;i++){
        headerPageActive[i].classList.remove("position-page-active");
    }
};
smallScreenIcon.addEventListener("click",showMenu);
untouchLayer.addEventListener("click",showMenu)
headerRightArrow.addEventListener("click",function(){
    resetActivePage();
    if(imgCouncter==3)
        imgCouncter=1;
    else
    imgCouncter++;
headerPageActive[imgCouncter-1].classList.toggle("position-page-active");
header.style.background=`url(imgs/headerphoto${imgCouncter}.jpg) no-repeat center`
header.style.backgroundSize="cover";
})
headerLeftArrow.addEventListener("click",function(){
    resetActivePage();
    if(imgCouncter==1)
        imgCouncter=3;
    else
    imgCouncter--;
headerPageActive[imgCouncter-1].classList.toggle("position-page-active");
header.style.background=`url(imgs/headerphoto${imgCouncter}.jpg) no-repeat center`
header.style.backgroundSize="cover";
})
const resetFilter=function(){
    for(let i=0;i<portfolioFilter.length;i++){
        portfolioFilter[i].classList.remove("position-page-active");
    }
}
for(let i=0;i<portfolioFilter.length;i++){
    portfolioFilter[i].addEventListener("click",function(){
        resetFilter();
        this.classList.add("position-page-active");
        console.log(this.textContent);
        for(let i=0;i<portfolioPort.length;i++){
            if(this.textContent.toLowerCase()!=="all")
                !portfolioPort[i].textContent.includes(this.textContent)?portfolioPort[i].classList.add("disp-none"):portfolioPort[i].classList.remove("disp-none");
            else{
                portfolioPort[i].classList.remove("disp-none");
            }
        }
    })
}
for(let i=0;i<portfolioPort.length;i++){
    portfolioPort[i].style.background=`url( imgs/imgportfolio/i${i+1}.jpg) no-repeat center`
}
for(let i=0;i<picOfPeople.length;i++){
    let x=(Math.trunc(Math.random()*16777215)).toString(16).padStart(6,"f");
    picOfPeople[i].style.backgroundColor=`#${x}`;
}
peoplePosition.innerHTML=`<div></div>`.repeat(Math.ceil(people.length/2))
const peoplePositionDiv=document.querySelectorAll(".about .testimonials .position div");
peoplePositionDiv[0].classList.add("position-page-active")
const resetPeopleActivePage=function(){
    for(let i=0;i<peoplePositionDiv.length;i++){
        peoplePositionDiv[i].classList.remove("position-page-active");
    }
};
for(let i=0;i<peoplePositionDiv.length;i++){
    peoplePositionDiv[i].addEventListener("click",function(){
        resetPeopleActivePage();
        peoplePositionDiv[i].classList.add("position-page-active");
        for(let j=0;j<people.length;j++){
            if(j==i*2||j==i*2+1){
                people[j].classList.remove("disp-none");
            }
            else{
                people[j].classList.add("disp-none");

            }
        }
    })
}