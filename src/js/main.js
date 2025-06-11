import { Home } from "./Home.module.js";

const home = new Home();

let headerHight = $("#header").outerHeight();
let navHight = $("nav").outerHeight();

$(window).scroll(() => {
  if ($(window).scrollTop() > headerHight - navHight) {
    $("nav").addClass("fixed top-0 right-0 left-0");
  } else {
    $("nav").removeClass("fixed top-0 right-0 left-0");
  }
});







