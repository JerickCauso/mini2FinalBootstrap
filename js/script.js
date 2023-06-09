const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
  },
};
const apiKey1 = "9167dae881545d7d1ebf42ac1186d6ae";
const apiKey2 = "e701311bc9b2249184c539cd496d8466";
const apiKey3 = "bd6c2317d02803fb4cf4fa5deaff149c";
const apiKey4 = "26fd80a7289d79b300b99af28392c8c7";
const apiKey5 = "d7dfd99147ac538715d80f39a0277163";
const apiKey6 = "2d27b969040914f83bf30e7959ad9349";

// Trending News
function displayTrendNews() {
  url =
    "https://gnews.io/api/v4/top-headlines?country=ph&lang=en&max=5&apikey=" +
    apiKey6;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      trendarticles = data.articles;
      const div = document.createElement("div");
      div.classList.add("row");
      div.innerHTML = `
        <div class="col-md-6 tn-left">
            <div class="tn-img">
              <img src="${trendarticles[0].image}" height="485"/>
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${trendarticles[0].url}"
                    ><i class="far fa-clock"></i>${trendarticles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" target="_blank" href="${trendarticles[0].url}"
                    >${trendarticles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[1].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${trendarticles[1].url}"
                        ><i class="far fa-clock"></i>${trendarticles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${trendarticles[1].url}"
                        >${trendarticles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[2].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${trendarticles[2].url}"
                        ><i class="far fa-clock"></i>${trendarticles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${trendarticles[2].url}"
                        >${trendarticles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[3].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${trendarticles[3].url}"
                        ><i class="far fa-clock"></i>${trendarticles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${trendarticles[3].url}"
                        >${trendarticles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[4].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${trendarticles[4].url}"
                        ><i class="far fa-clock"></i>${trendarticles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${trendarticles[4].url}"
                        >${trendarticles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             `;
      document.querySelector("#lefttrend").appendChild(div);
    });
}

async function category1(url1, url2) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=business&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKey2;
    const url2 =
      "https://gnews.io/api/v4/top-headlines?category=technology&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKey3;

    const busresponse = await fetch(url1);
    const busdata = await busresponse.json();
    const techresponse = await fetch(url2);
    const techdata = await techresponse.json();
    // console.log(busdata.articles[0].image);
    // console.log(techdata);

    const div = document.createElement("div");
    div.classList = "cat-news";
    div.innerHTML = `

    <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h2><i class="fas fa-soccer-ball"></i>Business</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[0].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${busdata.articles[0].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[0].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${busdata.articles[0].image}"
                        >${busdata.articles[0].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[1].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${busdata.articles[1].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${busdata.articles[1].url}"
                        >${busdata.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[2].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${busdata.articles[2].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${busdata.articles[2].url}">${busdata.articles[2].title}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div id="busscate3" class="cn-img">
                  <img src="${busdata.articles[3].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${busdata.articles[3].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${busdata.articles[3].url}">${busdata.articles[3].title}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h2>Technology</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[0].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${techdata.articles[0].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[0].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${techdata.articles[0].url}"
                        >${techdata.articles[0].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[1].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${techdata.articles[1].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${techdata.articles[1].url}"
                        >${techdata.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[2].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${techdata.articles[2].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${techdata.articles[2].url}">${techdata.articles[2].title}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[3].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" target="_blank" href="${techdata.articles[3].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="cn-title" target="_blank" href="${techdata.articles[3].url}">${techdata.articles[3].title}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
    document.querySelector("#category1").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

async function category2(url1, url2) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=entertainment&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKey4;
    const url2 =
      "https://gnews.io/api/v4/top-headlines?category=sports&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKe5;

    const entresponse = await fetch(url1);
    const entdata = await entresponse.json();
    const sportsresponse = await fetch(url2);
    const sportsdata = await sportsresponse.json();
    console.log(entdata);
    console.log(sportsdata);

    const div = document.createElement("div");
    div.classList = "cat-news";
    div.innerHTML = `
    <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <h2><i class="fas fa-suitcase"></i>Entertainment</h2>
                <div class="row">
                  <div class="col-md-6">
                    <div class="cn-img">
                      <img src="${entdata.articles[0].image}" />
                      <div class="cn-content">
                        <div class="cn-content-inner">
                          <a class="cn-date" target="_blank" href="${entdata.articles[0].url}"
                            ><i class="far fa-clock"></i>${entdata.articles[0].publishedAt.slice(0, 10)}</a
                          >
                          <a class="cn-title" target="_blank" href="${entdata.articles[0].url}"
                            >${entdata.articles[0].title}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="cn-img">
                      <img src="${entdata.articles[1].image}" />
                      <div class="cn-content">
                        <div class="cn-content-inner">
                          <a class="cn-date" target="_blank" href="${entdata.articles[1].url}"
                            ><i class="far fa-clock"></i>${entdata.articles[1].publishedAt.slice(0, 10)}</a
                          >
                          <a class="cn-title" target="_blank" href="${entdata.articles[1].url}"
                            >${entdata.articles[1].title}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Sports</h2>
                <div class="row">
                  <div class="col-md-6">
                    <div class="cn-img">
                      <img src="${sportsdata.articles[0].image}" />
                      <div class="cn-content">
                        <div class="cn-content-inner">
                          <a class="cn-date" target="_blank" href="${sportsdata.articles[0].url}"
                            ><i class="far fa-clock"></i>${sportsdata.articles[0].publishedAt.slice(0, 10)}</a
                          >
                          <a class="cn-title" target="_blank" href="${sportsdata.articles[0].url}"
                            >${sportsdata.articles[0].title}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="cn-img">
                      <img src="${sportsdata.articles[1].image}" />
                      <div class="cn-content">
                        <div class="cn-content-inner">
                          <a class="cn-date" target="_blank" href="${sportsdata.articles[1].url}"
                            ><i class="far fa-clock"></i>${sportsdata.articles[1].publishedAt.slice(0, 10)}</a
                          >
                          <a class="cn-title" target="_blank" href="${sportsdata.articles[1].url}"
                            >${sportsdata.articles[1].title}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    document.querySelector("#category2").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

async function category3(url1, url2) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=general&country=us&lang=en&max=10&apikey=" +
      apiKey1;
    const url2 =
      "https://gnews.io/api/v4/top-headlines?category=general&country=any&lang=en&max=10&apikey=" +
      apiKey2;
    const url3 =
      "http://api.openweathermap.org/data/2.5/weather?q=manila&appid=1b0d4e056d91c25a4fe8658fd55f3f06&units=metric";

    const usresponse = await fetch(url1);
    const usdata = await usresponse.json();
    const worldresponse = await fetch(url2);
    const worlddata = await worldresponse.json();
    const weatherresponse = await fetch(url3);
    const weatherdata = await weatherresponse.json();
    console.log(usdata);
    console.log(worlddata);
    console.log(weatherdata);

    const div = document.createElement("div");
    div.classList = "row";
    div.innerHTML = `
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <h2><i class="fas fa-newspaper"></i>US News</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mn-img">
                      <img src="${usdata.articles[0].image}" />
                    </div>
                    <div class="mn-content">
                      <a class="mn-title" target="_blank" href="${usdata.articles[0].url}"
                        >${usdata.articles[0].title}</a
                      >
                      <p>
                        ${usdata.articles[0].description}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${usdata.articles[1].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${usdata.articles[1].url}"
                          >${usdata.articles[1].title}</a
                        >
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${usdata.articles[2].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${usdata.articles[2].url}"
                          >${usdata.articles[2].title}</a
                        >
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${usdata.articles[3].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${usdata.articles[3].url}"
                          >${usdata.articles[3].title}</a
                        >
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${usdata.articles[4].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${usdata.articles[4].url}"
                          >${usdata.articles[4].title}</a
                        >      
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${usdata.articles[5].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${usdata.articles[5].url}"
                          >${usdata.articles[5].title}</a
                        >      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <h2>World News</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mn-img">
                      <img src="${worlddata.articles[0].image}" />
                    </div>
                    <div class="mn-content">
                      <a class="mn-title" target="_blank" href="${worlddata.articles[0].url}"
                        >${worlddata.articles[0].title}</a
                      >
                      <p>
                        ${worlddata.articles[0].description}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${worlddata.articles[1].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${worlddata.articles[1].url}">${worlddata.articles[1].title}</a>
                        
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${worlddata.articles[2].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${worlddata.articles[2].url}"
                          >${worlddata.articles[2].title}</a
                        >
                       
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${worlddata.articles[3].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${worlddata.articles[3].url}"
                          >${worlddata.articles[3].title}</a
                        >
                        
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${worlddata.articles[4].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${worlddata.articles[4].url}"
                          >${worlddata.articles[4].title}</a
                        >
                        
                      </div>
                    </div>
                    <div class="mn-list">
                      <div class="mn-img">
                        <img src="${worlddata.articles[5].image}" />
                      </div>
                      <div class="mn-content">
                        <a class="mn-title" target="_blank" href="${worlddata.articles[5].url}"
                          >${worlddata.articles[5].title}</a
                        >
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="sidebar">
              <div class="sidebar-widget">
                <h2><i class="fas fa-cloud-sun"></i>Weather</h2>
                <div class="container">
                  <div class="card">
                    <img class="" src="./img/weather.jpg" alt="Card image cap" />
                    <div class="card-img-overlay" style="height: 110px">
                      <h3 class="card-title text-dark m-b-0 dl">${weatherdata.name}</h3>
                      <small class="card-text text-white font-light"
                        ></small
                      >
                    </div>
                    <div class="card-body weather-small">
                      <div class="row">
                        <div class="col-8 b-r align-self-center">
                          <div class="d-flex">
                            <div class="display-6 text-info">
                              <i class="mdi mdi-weather-pouring"></i>
                            </div>
                            <div class="m-l-20">
                              <h1 class="font-light text-info m-b-0">
                                ${weatherdata.main.temp_max}<sup>0</sup>Celcius
                              </h1>
                            </div>
                          </div>
                        </div>
                        <!--<div class="col-4 text-center">
                          <h1 class="font-light m-b-0">${weatherdata.main.temp_min}<sup>0</sup></h1>
                          <small>Tonight</small>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar-widget">
                <h2><i class="fas fa-align-justify"></i>Tags</h2>
                <div class="tags">
                  <a target="_blank" href="">National</a>
                  <a target="_blank" href="">International</a>
                  <a target="_blank" href="">Economics</a>
                  <a target="_blank" href="">Politics</a>
                  <a target="_blank" href="">Lifestyle</a>
                  <a target="_blank" href="">Technology</a>
                  <a target="_blank" href="">Trades</a>
                  <a target="_blank" href="">National</a>
                  <a target="_blank" href="">International</a>
                  <a target="_blank" href="">Economics</a>
                  <a target="_blank" href="">Politics</a>
                  <a target="_blank" href="">Lifestyle</a>
                  <a target="_blank" href="">Technology</a>
                  <a target="_blank" href="">Trades</a>
                </div>
              </div>

              <div class="sidebar-widget">
                <h2><i class="fas fa-align-justify"></i>Ads 1 column</h2>
                <div class="image">
                  <a target="_blank" href=""><img src="img/adds-1.jpg" alt="Image" /></a>
                </div>
              </div>

              <div class="sidebar-widget">
                <h2><i class="fas fa-align-justify"></i>Ads 2 column</h2>
                <div class="image">
                  <div class="row">
                    <div class="col-sm-6">
                      <a target="_blank" href=""><img src="img/adds-2.jpg" alt="Image" /></a>
                    </div>
                    <div class="col-sm-6">
                      <a target="_blank" href=""><img src="img/adds-2.jpg" alt="Image" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    document.querySelector("#category3").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

async function businesspage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=business&country=any&lang=en&max=10&apikey=" +
      apiKey4;

    const busresponse = await fetch(url1);
    const data = await busresponse.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#businesspage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
async function technologypage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=technology&country=any&lang=en&max=10&apikey=" +
      apiKey5;

    const techresponse = await fetch(url1);
    const data = await techresponse.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="233" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="234" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="235" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="236" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="237" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="238" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#technologypage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
  async function sportspage(url1) {
    try {
      const url1 =
        "https://gnews.io/api/v4/top-headlines?category=sports&country=any&lang=en&max=10&apikey=" +
        apiKey3;

      const response = await fetch(url1);
      const data = await response.json();
      console.log(data);

      const div = document.createElement("div");
      div.classList = "top-news";
      div.innerHTML = `
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-4 tn-left">
              <div class="tn-img mb-5">
                <img src="${data.articles[0].image}" height="490" />
                <div class="tn-content">
                  <div class="tn-content-inner">
                    <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                      ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                    >
                    <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                      >${data.articles[0].title}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 tn-right">
              <div class="row">
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[1].image}" height="230" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                          ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                          >${data.articles[1].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[2].image}" height="230" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                          ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                          >${data.articles[2].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[3].image}" height="233" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                          ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                          >${data.articles[3].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[4].image}" height="234" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                          ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                          >${data.articles[4].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[5].image}" height="235" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                          ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                          >${data.articles[5].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[6].image}" height="236" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                          ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                          >${data.articles[6].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[7].image}" height="237" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                          ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                          >${data.articles[7].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tn-img">
                    <img src="${data.articles[8].image}" height="238" />
                    <div class="tn-content">
                      <div class="tn-content-inner">
                        <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                          ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                        >
                        <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                          >${data.articles[8].title}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
      document.querySelector("#sportspage").appendChild(div);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
}
async function entertainmentpage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=entertainment&country=any&lang=en&max=10&apikey=" +
      apiKey5;

    const entresponse = await fetch(url1);
    const data = await entresponse.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#entertainmentpage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
async function sportspage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=sports&country=any&lang=en&max=10&apikey=" +
      apiKey4;

    const techresponse = await fetch(url1);
    const data = await techresponse.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="233" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="234" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="235" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="236" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="237" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="238" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#sportspage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
async function sciencepage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=science&country=any&lang=en&max=10&apikey=" +
      apiKey5;

    const scienceresponse = await fetch(url1);
    const data = await scienceresponse.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="233" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="234" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="235" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="236" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="237" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="238" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#sciencepage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
async function healthpage(url1) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=health&country=any&lang=en&max=10&apikey=" +
      apiKey4;

    const response = await fetch(url1);
    const data = await response.json();
    console.log(data);

    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${data.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${data.articles[0].url}"
                    ><i class="far fa-clock"></i>${data.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${data.articles[0].url}"
                    >${data.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[1].url}"
                        ><i class="far fa-clock"></i>${data.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[1].url}"
                        >${data.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[2].url}"
                        ><i class="far fa-clock"></i>${data.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[2].url}"
                        >${data.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[3].image}" height="233" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[3].url}"
                        ><i class="far fa-clock"></i>${data.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[3].url}"
                        >${data.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[4].image}" height="234" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[4].url}"
                        ><i class="far fa-clock"></i>${data.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[4].url}"
                        >${data.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[5].image}" height="235" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[5].url}"
                        ><i class="far fa-clock"></i>${data.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[5].url}"
                        >${data.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[6].image}" height="236" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[6].url}"
                        ><i class="far fa-clock"></i>${data.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[6].url}"
                        >${data.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[7].image}" height="237" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[7].url}"
                        ><i class="far fa-clock"></i>${data.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[7].url}"
                        >${data.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${data.articles[8].image}" height="238" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${data.articles[8].url}"
                        ><i class="far fa-clock"></i>${data.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${data.articles[8].url}"
                        >${data.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#healthpage").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

async function searchpage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // global.search.type = urlParams.get("type");
  global.search.term = urlParams.get("search-term");

  if (global.search.term !== "" && global.search.term !== null) {
    // const { results, total_pages, page } = await searchAPIData();
    const results = await searchAPIData();
    console.log(results);
    // if (results.length === 0) {
    //   showAlert("No results found");
    //   return;
    // }
    // displaySearchResults(results);
    const div = document.createElement("div");
    div.classList = "top-news";
    div.innerHTML = `
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4 tn-left">
            <div class="tn-img mb-5">
              <img src="${results.articles[0].image}" height="490" />
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" target="_blank" href="${results.articles[0].url}"
                    ><i class="far fa-clock"></i>${results.articles[0].publishedAt.slice(0, 10)}</a
                  >
                  <a class="tn-title" target="_blank" href="${results.articles[0].url}"
                    >${results.articles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[1].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[1].url}"
                        ><i class="far fa-clock"></i>${results.articles[1].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[1].url}"
                        >${results.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[2].image}" height="230" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[2].url}"
                        ><i class="far fa-clock"></i>${results.articles[2].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[2].url}"
                        >${results.articles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[3].image}" height="233" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[3].url}"
                        ><i class="far fa-clock"></i>${results.articles[3].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[3].url}"
                        >${results.articles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[4].image}" height="234" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[4].url}"
                        ><i class="far fa-clock"></i>${results.articles[4].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[4].url}"
                        >${results.articles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[5].image}" height="235" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[5].url}"
                        ><i class="far fa-clock"></i>${results.articles[5].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[5].url}"
                        >${results.articles[5].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[6].image}" height="236" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[6].url}"
                        ><i class="far fa-clock"></i>${results.articles[6].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[6].url}"
                        >${results.articles[6].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[7].image}" height="237" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[7].url}"
                        ><i class="far fa-clock"></i>${results.articles[7].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[7].url}"
                        >${results.articles[7].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${results.articles[8].image}" height="238" />
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" target="_blank" href="${results.articles[8].url}"
                        ><i class="far fa-clock"></i>${results.articles[8].publishedAt.slice(0, 10)}</a
                      >
                      <a class="tn-title" target="_blank" href="${results.articles[8].url}"
                        >${results.articles[8].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.querySelector("#searchresults").appendChild(div);

    document.querySelector("#search-term").value = "";
  } else {
    showAlert("Please enter search term");
  }
}

async function searchAPIData() {
  const apiKey6 = "1321923f82f3680d72f02d2147d154b6";

  // showSpinner();

  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${global.search.term}&apikey=${apiKey6}`
  );

  const data = await response.json();

  // hideSpinner();

  return data;
}
// ========== { to display dynamic date } ========== \\
function getDateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // display date today
  let dateToday =
    days[now.getDay()] +
    "," +
    " " +
    now.getDate() +
    " " +
    months[now.getMonth()];

  document.getElementById("date-today").innerHTML = dateToday;

  // display time now
  let ampm = hours >= 12 ? "pm" : "am";
  let timeNow = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("time-now").innerHTML = timeNow;
}
setInterval(getDateTime, 0);
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayTrendNews();
      category1();
      category2();
      category3();
      break;
    case "/business.html":
      businesspage();
      break;
    case "/technology.html":
      technologypage();
      break;
    case "/science.html":
      sciencepage();
      break;
    case "/entertainment.html":
      entertainmentpage();
      break;
    case "/sports.html":
      sportspage();
      break;
    case "/health.html":
      healthpage();
      break;
    case "/search.html":
      searchpage();
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
