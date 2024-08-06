import Product from "./ProductList"
import Slide from "./Slide"

const Body = ()=> {
    return(
        <>
      {/*	Body	*/}
  <div id="body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <nav>
            <div id="menu" className="collapse navbar-collapse">
              <ul>
                <li className="menu-item"><a href="#">iPhone</a></li>
                <li className="menu-item"><a href="#">Samsung</a></li>
                <li className="menu-item"><a href="#">HTC</a></li>
                <li className="menu-item"><a href="#">Nokia</a></li>
                <li className="menu-item"><a href="#">Sony</a></li>
                <li className="menu-item"><a href="#">Blackberry</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div id="main" className="col-lg-8 col-md-12 col-sm-12">
        <Slide/>
          <Product/>
        </div>
        <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
          <div id="banner">
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-1.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-2.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-3.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-4.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-5.png" /></a>
            </div>
            <div className="banner-item">
              <a href="#"><img className="img-fluid" src="images/banner-6.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*	End Body	*/}
        </>
    )
        

}
export default Body;