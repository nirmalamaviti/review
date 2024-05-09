const review = [
    {
    name:"nirmala maviti",
    job:"SE",
    image:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, dolorum. Illo natus praesentium, dol"
    },
    {
    name:"sasi maviti",
    job:"btech",
    image:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, dolorum. Illo natus praesentium, dol"
    },
    {
    name:"pragna",
    job:"student",
    image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
    about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, dolorum. Illo natus praesentium, dol"
    },
    {
    name:"mithesh raj",
    job:"baby",
    image:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, dolorum. Illo natus praesentium, dol"
    }
];

const image=document.querySelector(".image img")
const name=document.querySelector(".name")
const job=document.querySelector(".job")
const about=document.querySelector(".about")
const prebtn=document.querySelector(".prebtn")
const postbtn=document.querySelector(".postbtn")

let presentreview=0;

function showReview(reviewindex){
    const rew=review[reviewindex];
    image.src=rew.image;
    name.textContent=rew.name;
    job.textContent=rew.job;
    about.textContent=rew.about;
}

showReview(presentreview);

prebtn.addEventListener("click",before);
postbtn.addEventListener("click",after);

function before(){
    presentreview--;
    if (presentreview<0){
        presentreview=review.length-1;
    }
    showReview(presentreview);
}

function after(){
    presentreview++;
    if (presentreview>=review.length){
        presentreview=0;
    }
    showReview(presentreview);
}