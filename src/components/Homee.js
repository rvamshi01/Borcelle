import React from "react";

export default function Homee() {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active los_angeles">
            <img
              src="https://www.bmw-bavariamotors.in/sites/default/files/2022-05/1680x756-i4_02.jpg"
              alt="Los Angeles"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item chicago">
            <img
              src="https://www.bmw-kunexclusive-hyderabad.in/sites/default/files/sliders/1680x756_5_0.jpg"
              alt="Chicago"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item new_york">
            <img
              src="https://www.bmw-bavariamotors.in/sites/default/files/2022-09/M8_1680x756%20%281%29_0.jpg"
              alt="New York"
              className="d-block w-100"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="imgbg p-5">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://stat.overdrive.in/wp-content/odgallery/2019/03/50927_BMW_X7_2019_001_468x263.jpg"
                className="card-img-top"
                alt="Card 1"
                width="150px"
                height="250px"
              />
              
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://www.bmwusa.com/content/dam/bmwusa/common/vehicles/2023/my24/x-models/x6/overview/mobile/BMW-MY24-X6-Overview-Performance-01-Mobile.jpg"
                className="card-img-top"
                alt="Card 2"
                width="100px"
                height="250px"
              />
              
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg"
                className="card-img-top"
                alt="Card 3"
                width="150px"
                height="250px"
              />
              
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/i5/10181/1685002671982/front-left-side-47.jpg"
                className="card-img-top"
                alt="Card 4"
                width="150px"
                height="250px"
              />
             
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M3/8048/1601034227530/front-left-side-47.jpg?tr=w-456"
                className="card-img-top"
                alt="Card 5"
                width="150px"
                height="250px"
              />
              
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-4 col-sm-6">
            <div className="card">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/Z4/10183/1685003672330/front-left-side-47.jpg?tr=w-456"
                className="card-img-top"
                alt="Card 6"
                height="250px"
              />
              
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}
