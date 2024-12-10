const testimonials = [
  {
    name: "Cherise G",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    image: "images/photo-1570295999919-56ceb5ecca61.jpg",
  },
  {
    name: "Constantine V",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    image: "images/photo-1628157588553-5eeea00af15c.jpg",
  },
  {
    name: "Rosetta Q",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    image: "images/photo-1633332755192-727a05c4013d.jpg",
  },
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, image, text } = testimonials[idx];
  imgEl.src = image;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
}