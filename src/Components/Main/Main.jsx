import './main.css';

export const Main = () => {
  return (
    <div className="main-container">
      <video autoPlay loop muted className="background-video">
        <source src="/src/assets/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="hero_container">
        <h2 className="hero_text">Travel</h2>
      </div>
      <div className="blue-overlay"></div>
    </div>
  );
};

export default Main;
