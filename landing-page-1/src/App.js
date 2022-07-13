import "./App.scss";
import logo from "./assets/Group 1018.png";
import logo2 from "./assets/Group 249.png";
import img1 from "./assets/figma-front-color.png";
import img2 from "./assets//blender-dynamic-color .png";
function App() {
  return (
    <div className="container">
      <iframe
        src="https://my.spline.design/untitled-b0c512eb14a84d6cab141a934da1114b/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <img className="logo" src={logo} alt="" />
      <div className="logo-top-right">
        <img src={logo2} alt="" />
      </div>
      <div className="logo-item">
        <div className="background-img">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="logo-item-1">
        <img src={img2} alt="" />
      </div>
      <div className="middle-content">
        <div className="free-icon">
          <div className="number">22</div>
          <div className="text">Free icons</div>
        </div>
        <div className="text-info">High Resolution and Ready for project</div>
      </div>
      <h1 className="title">E-Commerce Illustration</h1>
      <button className="btn">FREE 3D Illustration</button>
    </div>
  );
}

export default App;
