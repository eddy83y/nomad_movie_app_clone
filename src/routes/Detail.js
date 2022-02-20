import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router";

// useLocation(), useNavigate() 은 class 형 component에서 사용할 수 없다.
// functional component에서 사용할 수 있는데, functional component 에서는 componentDidMount등 과 같은 method 사용할 수 없다.
// functional component에서는 useEffect()를 사용해야 한다. (react 16.8버전 이상)

function Detail() {
    const location = useLocation();
    const history = useNavigate();
    
    useEffect(() => {
        console.log('componentDidMount effect')
        console.log(location);
        console.log(history);

        if(location.state == undefined) {
            // 직접 접속하여 영화정보가 없는 경우 홈으로 리다이렉션
            history('/');
        }
    });
    return <span>{location.state.title}</span>
}

export default Detail;