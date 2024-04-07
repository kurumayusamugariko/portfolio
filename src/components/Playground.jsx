import { Link } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Playground() {
	const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });
	return (
		<div>
			<h3>Playground</h3>
			<p>Comming soon...</p>
			<div className="unity">
        <Unity
          unityProvider={unityProvider}
          style={{ width: 600, height: 400 }}
        />
      </div>
			<Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
		</div>
	);
}

export default Playground;