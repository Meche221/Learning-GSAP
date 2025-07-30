// const box1 = document.querySelector("#box1")
// gsap.to("#box1",{
//   x: 600,
//   duration: 2,
//   delay: 1,
// })

// gsap.from("#box2",{
//   rotate: 360,
//   x: 600,
//   duration: 2,
//   delay: 3,
//   yoyo: true
// })
// gsap.to("#box3",{
//   rotate: 360,
//   x: 600,
//   duration: 2,
//   delay: 5,
//   // repeat: -1,
//   yoyo: true
// })

// gsap.from("h1",{
//   opacity: 0,
//   x: 500,
//   color: "black",
//   duration: 2,
//   delay: 1,
//   stagger: 1, 
// })

// const tl= gsap.timeline()

// tl.to("#box1",{
//   x: 500,
//   duration: 2,
//   delay: 1,
//   // backgroundColor:"black",
// })
// tl.to("#box2",{
//   x: 500,
//   duration: 2,
//   // backgroundColor:"black",
// })
// tl.to("#box3",{
//   x: 500,
//   duration: 2,
//   // backgroundColor:"black",
// })

const tl2 = gsap.timeline();

tl2.from("h2",{
  y: -20,
  delay:0.5,
  duration: 1,
  opacity: 0
})
tl2.from("h4",{
  y: -20,
  delay:0.5,
  duration: 1,
  opacity: 0,
  stagger:0.3
})
tl2.from("h1",{
  y: -20,
  delay:0.5,
  duration: 1,
  opacity: 0,
  scale:0.7
})
