const targetDiv = document.querySelector(".heroSection");
const targetDiv2 = document.querySelector(".bodyContainer1");
const targetDiv3 = document.querySelector(".bodyContainer2");
const targetDiv4 = document.querySelector(".bodyContainer3");
const targetDiv5 = document.querySelector(".bodyContainer4");
const targetDiv6 = document.querySelector(".bodyContainer5");
const targetDiv7 = document.querySelector(".bodyContainer6");

const options = {
    threshold:0,
    rootMargin: "0px 0px 0px 0px",
    root:null
}

const observer = new IntersectionObserver(function(entities){
    entities.forEach(entry =>{
        console.log(entry.target);
        const intersecting = entry.isIntersecting;
        if(intersecting){
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
        }else{
            entry.target.classList.remove("on");
        }
    })


},options);

observer.observe(targetDiv);
observer.observe(targetDiv2);
observer.observe(targetDiv3);
observer.observe(targetDiv4);
observer.observe(targetDiv5);
observer.observe(targetDiv6);
observer.observe(targetDiv7); 