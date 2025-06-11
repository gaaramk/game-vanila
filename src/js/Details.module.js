import { Ui } from "./Ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("closebtn").addEventListener("click", () => {
      document.getElementById("details").classList.add("hidden");
      document.getElementById("home").classList.remove("hidden");

    });

    this.lodding = document.getElementById("lodding");

    this.getDetails(id);
  }

  async getDetails(id){
    this.lodding.classList.remove("hidden");
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'bff813ec90msh4cdd17e46568fc4p1f5584jsna5c0b5a207b1',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };


    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const resposne = await api.json();
    this.lodding.classList.add("hidden");
    console.log(resposne);
    new Ui().displayDetails(resposne)
  }
}

