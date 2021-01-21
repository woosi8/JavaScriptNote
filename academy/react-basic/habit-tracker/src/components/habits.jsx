import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name:'Reading', count:0},
            {id: 2, name:'Running', count:0},
            {id: 3, name:'Coding', count:0},
        ]
    };
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                     <Habit key ={habit.id} habit = {habit}/> //props 하기위해 habit(보라)을 전달받는거 habit으로 설정
                    //  각각의 컴포넌트가 아이디를 가지고 있어야, 추가,변동시 성능개선을 위해 리액트가 다시 렌더링을 하지않느다
                ))}          
            </ul>    
        );
    }
}

export default Habits;