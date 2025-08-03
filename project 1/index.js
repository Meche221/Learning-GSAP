const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const image = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration:0.2,
    ease: "power3.out",
  })
})

image.addEventListener("mouseenter", function(){
  cursor.innerHTML = "View More"
  gsap.to(cursor,{
    scale: "3",
  })
})
image.addEventListener("mouseleave", function(){
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale: "1",
  })
})