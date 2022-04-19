 import { gsap } from "gsap";

 const mainTL= gsap.timeline();

 mainTL
 .from("#header", {duration:3, scaleX:0, transformOrigin:"0 0", alpha:0}, "part1")
 .from("#header aside", {duration:6, x:"-=300", rotation:360, transformOrigin:"0 0", ease: "back.inOut", alpha:0}, "part1")
 .from("header nav", {duration:6, x:"+=200", ease: "back.inOut", alpha:0 }, "part1+=1")
 .from("#hero", {duration:3, yPercent:-50, alpha:0}, "part1")
 .from("#hero h2", {duration:3, y:"+=200", alpha:0},"part1+=6")
 .from("#hero h1", {duration:3, y:"+=200", alpha:0}, "part1+=5")
 .from("#content h1", {duration:2,y:"+=200", alpha:0}, "part1+=8")
 .from("#content p", {duration:2,y:"+=200", alpha:0}, "part1+=9")
 



//.from("#header", {duration:3, scaleX:0, transformOrigin:"0 0", alpha:0}, "part1+=4")
//.from("#header aside", {duration:6, x:"-=300", rotation:360, transformOrigin:"0 0", ease: "back.inOut", alpha:0}, "part1+=3")
//.from("header nav", {duration:6, x:"+=200", ease: "back.inOut", alpha:0 }, "part1+=3")
//.from("#hero", {duration:4, yPercent:-50, alpha:0}, "part1")
//.from("#hero h2", {duration:2, y:200, alpha:0},"part1+=2")
//.from("#hero h1", {duration:2, y:"+=200", alpha:0}, "part1+=3")
//.from("#content h1", {duration:2,y:"+=200", alpha:0}, "part1+=7")
//.from("#content p", {duration:2,y:"+=200", alpha:0}, "part1+=8")
;