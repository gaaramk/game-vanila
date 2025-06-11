export class Ui {
  constructor() {}

  displayGames(data) {
    let gameBox = "";
    for (let i = 0; i < data.length; i++) {
      gameBox += `
            <div class="card w-full md:w-1/4 p-2 cursor-pointer" data-id='${data[i].id}' data-aos="fade-right" data-aos-duration="1500">
            <div class="inner">
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img class="rounded-t-lg" src="${data[i].thumbnail}" alt="" />
                </a>

                <div class="p-5">
                  <div class="flex justify-between">
                    <h5
                      class="mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-[.875rem] capitalize font-[500] tracking-tight dark:text-white"
                    >
                    ${data[i].title}
                    </h5>

                    <span class="btn">free</span>
                  </div>

                  <div class="text-center py-3">
                    <p
                      class="py-3 font-normal whitespace-nowrap overflow-hidden text-ellipsis text-[.6563rem] text-gray-700 dark:text-gray-400"
                    >
                     ${data[i].short_description}
                    </p>
                  </div>

                  <div class="flex justify-between items-center">
                    <h5
                      class="mb-2 text-[.6563rem] capitalize font-bold tracking-tight text-white bg-slate-700 py-1 px-3 rounded-full  dark:text-white"
                    >
                       ${data[i].genre}
                    </h5>

                    <h5
                      class="mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-[.6563rem] capitalize font-bold tracking-tight text-white bg-slate-700 py-1 px-3 rounded-full  dark:text-white"
                    >
                      ${data[i].platform}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("gameData").innerHTML = gameBox;
  }



  displayDetails(data){
    const detailsBox = `
          <figure class="py-2 pr-5 w-1/3">
            <img src="${data.thumbnail}" alt="" class="w-full" />
          </figure>

          <div class="w-2/3">
            <h1 class="font-medium text-[27px] capitalize">title: bla bla</h1>
            <p class="font-normal text-base py-3">
              category:
              <span class="bg-blue-400 text-black px-3 py-1 rounded-xl"
                >${data.genre}</span
              >
            </p>
            <p class="font-normal text-base py-3">
              platform:
              <span class="bg-blue-400 text-black px-3 py-1 rounded-xl"
                >${data.platform}</span
              >
            </p>
            <p class="font-normal text-base py-3">
              stuts:
              <span class="bg-blue-400 text-black px-3 py-1 rounded-xl"
                >${data.status}</span
              >
            </p>

            <p class="text-sm font-normal py-8">${data.description}</p>
            <a
              href="${data.game_url}"
              target="_blank"
              class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >show game</a
            >
          </div>

          
    `
    document.getElementById('detailsInfo').innerHTML = detailsBox;
  }
}
