// const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '29a4f267damshe08e07908cfb7e6p1cc18ajsn72c0181dc337',
// 		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// 	}
// };


async function getdata() {
    let x = await fetch('./for-rent.json');
    let data = await x.json();
    let cardsdata = "";
    for (let i = 0; i < 10; i = i + 2) {
        cardsdata += `
        <div class="row mb-2" data-bs-theme="dark">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">${data[i].purpose}</strong>
              <h3 class="mb-0" style="color: antiquewhite;">$ ${data[i].price}</h3>
              <div class="mb-1 text-body-secondary">${data[i].rentFrequency}</div>
              <p class="card-text mb-auto" style="color: antiquewhite;"> ${data[i].location[3].slug} ${data[i].location[3].externalID} </p>
              <a href="cards.html" class="icon-link gap-1 icon-link-hover stretched-link" onclick="sessionStorage.id=${[i]}; let index = ${[i]}">
                See the property
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img src="${data[i].coverPhoto.url}" alt=" thumbnail" class="bd-placeholder-img" width="200" height="250" xmlns="card1.webp" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success-emphasis">${data[i+1].purpose}</strong>
              <h3 class="mb-0" style="color: antiquewhite;">$ ${data[i+1].price}</h3>
              <div class="mb-1 text-body-secondary">${data[i+1].rentFrequency}</div>
              <p class="mb-auto " style="color: antiquewhite;"> ${data[i+1].location[3].slug} ${data[i+1].location[3].externalID} </p>
              <a href="cards.html" class="icon-link gap-1 icon-link-hover stretched-link" onclick="sessionStorage.id=${i+1}; let index = ${i+1}">
                See the property
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img src="${data[i+1].coverPhoto.url}" alt=" thumbnail" class="bd-placeholder-img" width="200" height="250" xmlns="card1.webp" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            </div>
          </div>
        </div>
      </div>`
    }
    // sessionStorage.setItem("id", data[])
    

    document.getElementById("cards-container").innerHTML = cardsdata;

}

getdata();