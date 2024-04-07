import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div className="about">
			
      <div className="title">
        <h3>
          -
          {Array.from("About me").map((char, i) => (
            <span
              key={i}
              style={{
                animationDelay: `${i * 1}s`,
                animationDuration: `${"About me".length * 0.1}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          -
        </h3>
      </div>

      <div className="aboutContents">
        <img src="mogumo.png" className="mogumo" alt="icon" />
        <h3>もぐも</h3>
        <h4>Hobby</h4>
        <p>
          <span className="hobby">Game</span> /{" "}
          <span className="hobby">Drawing</span>
        </p>
        <h4>Like</h4>
        <p>
          <span >
            <a className="like giga" href="https://www.youtube.com/@GigaVideos">Giga</a>
          </span>{" "}
          /{" "}
          <span>
            <a className="like reol" href="https://reol.jp/">Reol</a>
          </span>{" "}
          /{" "}
          <span>
            <a className="like dustcell" href="https://kamitsubaki.jp/artist/dustcell/">DUSTCELL</a>
          </span>
        </p>
      </div>

      <div className="contact">
        <h4>SNS</h4>
				<div className="sns-link">
					<a href="https://twitter.com/mogumo_zzz"><i class="fa-brands fa-x-twitter fa-xl"></i></a>
					<a href=""><i class="fa-brands fa-pixiv fa-xl"></i></a>
					<a href="https://twitter.com/mogumo_zzz"><i class="fa-brands fa-github fa-xl"></i></a>
				</div>
      </div>
      <Link to="/">
        <img src="portfolio.png" width="10%" className="toHome" />
      </Link>
			
    </div>
  );
}

export default About;
