import React, { useCallback,useEffect,useRef, useState } from 'react';


const SimpleHabit = (props) =>{
    // React 훅
    const [count, setCount] = useState(0);
    const spanRef = useRef(); //리액트훅 버젼 (함수는 계속 전체 반복초기화되지만 이건 기억하고 있으라고 하는것)
    // const spanRef = React.createRef()
    const handleIncrement = useCallback(() => { //useCallback은 갱신떄마다 계속 업데이트를 방지하기위한 자동캐시, 동일한 콜백함수를 전달
        setCount(count + 1);
    });

    // [count]가 변경될때마다 호출된다 , []안쓰면 기존의 state,prop이 변경될때마다 호출된다
    useEffect(() =>{
        console.log(`mounted & updated!: ${count}`);
    },[count])

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick = {handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
    
};

export default SimpleHabit;



// import React from 'react';
// class SimpleHabit extends Component {
//     state = {
//         count:0,
//     }
//     handleIncrement = () => {
//         this.setState({count: this.state.count+1});
//     };
//     render() {

//     }
// }

// export default SimpleHabit;