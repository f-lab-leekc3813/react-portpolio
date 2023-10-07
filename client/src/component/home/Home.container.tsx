import { useNavigate } from "react-router-dom";

import HomePageUI from "./Home.presenter";

export default function HomePage():JSX.Element {
    const navigate = useNavigate();

    const onClickRegister = ()=> {
        navigate('/register/login')
    }

    return (
        <div>
            <HomePageUI
                onClickRegister={onClickRegister}
             />
        </div>
    )
}