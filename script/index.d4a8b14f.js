const containers = document.querySelectorAll(".container");
const ratingNumbers = document.querySelectorAll(".rating__list li");
const submitBtn = document.querySelector(".submit__btn");
const rating = document.querySelector("#rated");
const thanksTitle = document.querySelector(".thank__you--title");
const thanksTxt = document.querySelector(".thanks--text");
//fix 100vh on mobile by setting height to the window's innerHeight
document.body.style.height = `${window.innerHeight}px`;
const checkHeight = ()=>{
    document.body.style.height = `${window.innerHeight}px`;
};
window.addEventListener("resize", checkHeight);
const removeFromSiblings = ()=>ratingNumbers.forEach((el)=>el.classList.remove("active-rating"));
const updaterating = (element)=>{
    rating.textContent = element.textContent;
    console.log(+rating.textContent);
    if (+rating.textContent === 5) thanksTitle.textContent = "Thank you so much!";
    if (+rating.textContent <= 2) {
        thanksTitle.textContent = "We're sorry...";
        thanksTxt.textContent = `Please let us know how we could improve our service. All feedback is appreciated
      to help us improve our offering`;
    }
};
const checkRating = ()=>{
    const checkSelection = Array.from(ratingNumbers).some((el)=>el.classList.contains("active-rating"));
    //Only show "thank you" 'dialog' if the user slected a rating
    if (checkSelection) {
        containers[0].classList.add("d-none");
        containers[1].classList.remove("d-none");
    }
};
ratingNumbers.forEach((el)=>{
    //Desktop event handler
    el.addEventListener("click", function() {
        removeFromSiblings();
        updaterating(el);
        this.classList.add("active-rating");
    });
    //Mobile event handler
    el.addEventListener("touchend", function() {
        removeFromSiblings();
        updaterating(el);
        this.classList.add("active-rating");
    });
});
//Desktop event handler
submitBtn.addEventListener("click", checkRating);
//Mobile event handler
submitBtn.addEventListener("touchend", checkRating);

//# sourceMappingURL=index.d4a8b14f.js.map
