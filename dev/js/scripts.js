 import { gsap } from "gsap";

 const mainTL= gsap.timeline();

 mainTL
 .from("#header aside", {duration:4, x:-200, alpha:0}, "part1")
 .from("#hero ", {duration:4, yPercent:50, alpha:0}, "part1")
 .from("#hero h2", {duration:1, y:200, alpha:0},"herotext")
 .from("#hero h1", {duration:1, y:"+=200", alpha:0}, "herotext-=1")

;
