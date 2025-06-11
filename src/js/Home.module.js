import { Ui } from "./Ui.module.js";
import { Details } from './Details.module.js';

export class Home {
  constructor() {
    document.querySelectorAll(".navLink").forEach((link) => {
      link.addEventListener("click", () => {
        this.changActiveLink(link);
        const category = link.dataset.category;
        this.getGAmes(category);
      });
    });

    this.lodding = document.getElementById("lodding");
    this.details = document.getElementById("details");
    this.homePage = document.getElementById("home");

    this.ui = new Ui();
    this.getGAmes("mmorpg");
  }

  async changActiveLink(link) {
    document.querySelector("nav .linkList a.active").classList.remove("active");
    link.classList.add("active");
  }

  async getGAmes(category) {
    this.lodding.classList.remove("hidden");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bff813ec90msh4cdd17e46568fc4p1f5584jsna5c0b5a207b1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const res = await api.json();
    this.lodding.classList.add("hidden");
    $("body").css("overflow", "visible");
    this.ui.displayGames(res);

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("hidden");
        this.homePage.classList.add("hidden");
        this.detailsPage = new Details(card.dataset.id);
      });
    });
  }
}
