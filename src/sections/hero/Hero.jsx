import "./hero.css";

const award1 = `${import.meta.env.BASE_URL}award1.png`;
const award2 = `${import.meta.env.BASE_URL}award2.png`;
const award3 = `${import.meta.env.BASE_URL}award3.png`;

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* Title */}
        <h1 className="hTitle">
          Welcome! <br /> <span>I'm Joe</span>
        </h1>
        {/* Awards */}
        <div className="awards">
          <h2>Full Stack Developer</h2>
          <p>Bringing modern tech solutions to your business.</p>
          <div className="awardList">
            <img src={award1} alt="" />
            <img src={award2} alt="" />
            <img src={award3} alt="" />
          </div>
        </div>
        {/* Scroll SVG */}
        <a href="#services">
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
            d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        
      </div>
    </div>
  );
};

export default Hero;
