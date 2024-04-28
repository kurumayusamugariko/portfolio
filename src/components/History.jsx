import { Link } from "react-router-dom";
import "../css/History.css";
import ParticleComponent from "./ParticleComponents";

function History() {
  return (
    <div className="historyContents">
      <h3>- History -</h3>
      <div className="history">
        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>\New/ 2024/04/28 🏆</p>
          <p>Track job ハッカソン　チーム：深夜部</p>
          <h3>ヘルスメモ</h3>
          <a
            href="https://www.canva.com/design/DAGDD-8FXow/NonNbHR5sY0wPzF7U_upYw/view?utm_content=DAGDD-8FXow&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            id="deploy"
          >
            <img src="okusuri.png"></img>
          </a>
        </div>
        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2024/02~03</p>
          <p>Dots to Code　チーム：おもしれー女...</p>
          <h3>Survey Collector</h3>
          <a href="https://omosire.web.app" id="deploy">
            <img src="survey.png"></img>
          </a>
        </div>

        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/01~2024/03</p>
          <p>waffle college 卒アル部</p>
          <h3>Waffle College 2期生 卒業アルバム</h3>
          <a href="https://kurumayusamugariko.github.io/album_waffle/public/" id="deploy">
            <img src="sotuaru.png"></img>
          </a>
        </div>

        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/08~2024/03</p>
          <p>waffle college 2期生　テックキャリアコース</p>
          <h3>超★純愛ノート</h3>
          <a href="https://www.canva.com/design/DAF75xYOO5c/5j525OnnSVbstkuMnjb7xA/view?utm_content=DAF75xYOO5c&utm_campaign=designshare&utm_medium=link&utm_source=editor" id="deploy">
            <img src="junaidayo.png"></img>
          </a>
        </div>

        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/11~2024/01</p>
          <p>カラビナインターン　チーム:ワンルームDJ</p>
          <h3>Recentri</h3>
          <a id="deploy">
            <img src="recentri.gif"></img>
          </a>
        </div>

        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/10 技育ハッカソン vol.10</p>
          <p>チーム：ぽじもんトレーナー</p>
          <h3>ぽじもん</h3>
          <a id="deploy"><img src="posimon.jpg"></img></a>
        </div>
        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/10~11</p>
          <p>TECK-BASE IoTコース　Aチーム:もつ鍋</p>
          <h3>猫用トイレセンサー</h3>
          <a id="deploy"><img src="nekoyou.jpg"></img></a>
        </div>
        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/08</p>
          <p>北九州ハッカソン Cチーム コッペパン</p>
          <h3>Sky walk</h3>
          <a id="deploy"><img src="skywalk.jpg"></img></a>
        </div>
        <div className="project">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>2023/05</p>
          <p>waffle college 2期生　エントリーコース</p>
					<h3>ほめたす</h3>
					<a href="https://x.thunkable.com/copy/d29c4d8b3df65833e760b20df381fcc6" id="deploy">
            <img src="hometas.jpg"></img>
          </a>
        </div>
      </div>
      <h4>その他の活動</h4>
      <div className="nomatem">
        <p>Nomatem</p>
        <a href="https://kurumayusamugariko.github.io/otamesi/game2">
          <img src="metamon.gif" width="50px" />
        </a>
      </div>

      <p></p>
      <Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
			<ParticleComponent />
    </div>
  );
}

export default History;
