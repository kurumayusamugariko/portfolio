import { Link } from "react-router-dom";
import "../css/History.css";

function History() {
  return (
    <div className="about">
			<h3>History</h3>
			<p>2023/05 waffle college 2期生　エントリーコース</p>
			<p>2023/08~2024/03 waffle college 2期生　テックキャリアコース</p>
			<p>2023/08 北九州ハッカソン Cチーム コッペパン</p>
			<p>プロジェクト名: Sky walk</p>
			<p>2023/10 技育ハッカソン vol.10 チーム：ぽじもんトレーナー</p>
			<p>プロジェクト名: ぽじもん</p>
			<p>2023/10~11 TECK-BASE IoTコース　Aチーム:もつ鍋　リーダー</p>
			<p>制作物　猫用トイレセンサー</p>
			<p>2023/11~2024/01 カラビナインターン　チーム:ワンルームDJ</p>
			<p>プロジェクト名: Recentri</p>
			<p>2024/02~03 Dots to Code　チーム：おもしれー女...</p>
			<p>プロジェクト名: Survey Collector</p>
			<h4>その他活動</h4>
			<p>Waffle Camp 講師/メンター</p>

      <Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
    </div>
  );
}

export default History;
