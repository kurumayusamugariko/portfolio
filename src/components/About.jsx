import React, { useState, useEffect} from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timerId, setTimerId] = useState(null);

	useEffect(() => {
    // アプリケーションのルート要素を指定
    Modal.setAppElement('#root');
  }, []);

  const handlePress = () => {
    const id = setTimeout(() => {
      setModalIsOpen(true);
    }, 1000); // 1000ms（1秒）後にモーダルを表示
    setTimerId(id);
  };

  const handleRelease = () => {
    clearTimeout(timerId);
  };

	const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f0f0f0', // モーダルの背景色を変更
      color: '#333' // モーダルのテキスト色を変更
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)' // オーバーレイの背景色を変更
    }
  };

  return (
		<div className="about_back">
    <div className="about">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
					style={customStyles}
        >
          <div>
            <img src="QR_mogumo.png" alt="QR" />
          </div>
        </Modal>

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
        <h3>もぐも / 久保田百香</h3>
				<p>所属：サイバー大学　IT総合学部</p>
        <h4>Hobby</h4>
        <p>
          <span className="hobby">Game</span> /{" "}
          <span className="hobby">Drawing</span>
        </p>
        <h4>Like</h4>
        <p>
          <span>
            <a className="like giga" href="https://www.youtube.com/@GigaVideos">
              Giga
            </a>
          </span>{" "}
          /{" "}
          <span>
            <a className="like reol" href="https://reol.jp/">
              Reol
            </a>
          </span>{" "}
          /{" "}
          <span>
            <a
              className="like dustcell"
              href="https://kamitsubaki.jp/artist/dustcell/"
            >
              DUSTCELL
            </a>
          </span>
        </p>
      </div>

      <div className="contact">
        <div className="sns-link">
					<h4 className="follow">follow me</h4>
          <a
            href="https://twitter.com/mogumo_zzz"
            onMouseDown={handlePress}
            onMouseUp={handleRelease}
            onTouchStart={handlePress}
            onTouchEnd={handleRelease}
          >
            <i className="fa-brands fa-x-twitter fa-xl"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-pixiv fa-xl"></i>
          </a>
          <a href="https://twitter.com/mogumo_zzz">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
      </div>
      <Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
			<img className="dotcat" src="dotcat.gif"></img>
    </div>
		</div>
  );
}

export default About;
