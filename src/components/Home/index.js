import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./index.css";

const HomePage = (props) => {
    const onClickLogout = () => {
        Cookies.remove("sagar_token");
        const { history } = props;
        history.replace("/");
    };

    const jwtToken = Cookies.get("sagar_token");
    console.log(jwtToken);
    if (jwtToken === undefined) {
        return <Redirect to="/register-and-login" />;
    }

    return (
        <div className="home-container">
            <div className="text-container">
                <h1 className="scrolling-text">Hey, Hi!... Welcome to my page</h1>
            </div>
            <div className="emoji-container">
                <span className="emoji">😃</span>
                <span className="emoji">🎉</span>
                <span className="emoji">🌈</span>
            </div>
            <button className="logout-button" onClick={onClickLogout}>
                Logout
            </button>
        </div>
    );
};

export default HomePage;
