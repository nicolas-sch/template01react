import React from "react";

export class Gallery extends React.Component {
  constructor(){
    super()
    this.state={
        galerias: []
    }
  }

  componentDidMount(){
  fetch('https://templateglobal01.herokuapp.com/galerias').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((galerias) => {
      this.setState({galerias: galerias});
  })
  }
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
                {
                  this.state.galerias.map(({id, galeriatitle, galeriacontent, galeriaimages, image1, image2, image4,
                  image5, image6, image7, image8, image9, image3}) => (
                      <div>
                          <div className="section-title">
                            <h2>{galeriatitle}</h2>
                            <p>
                              {galeriacontent}
                            </p>
                          </div>
                          <div className="row">
                            <div className="portfolio-items">
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com:1337${image1.formats.medium.url}`}
                                      title="Project Title"
                                      
                                    >
                                      <div className="hover-text">
                                        <h4>Lorem Ipsum</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image1.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image2.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Adipiscing Elit</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image2.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    {/* <a
                                      href={`http://localhost:1337${image3.formats.thumbnail.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Lorem Ipsum</h4>
                                      </div>
                                      <img
                                        src={`http://localhost:1337${image3.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "} */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image4.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Lorem Ipsum</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image4.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image5.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Adipiscing Elit</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image5.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image6.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Dolor Sit</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image6.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image7.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Dolor Sit</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image7.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image8.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Lorem Ipsum</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image8.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                  <div className="hover-bg">
                                    {" "}
                                    <a
                                      href={`https://templateglobal01.herokuapp.com${image9.formats.medium.url}`}
                                      title="Project Title"
                                      data-lightbox-gallery="gallery1"
                                    >
                                      <div className="hover-text">
                                        <h4>Adipiscing Elit</h4>
                                      </div>
                                      <img
                                        src={`https://templateglobal01.herokuapp.com${image9.formats.small.url}`}
                                        className="img-responsive"
                                        alt="Project Title"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    ))
                }
        </div>
      </div>
    );
  }
}

export default Gallery;
