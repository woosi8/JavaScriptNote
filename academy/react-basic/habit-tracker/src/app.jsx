import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
        {id: 1, name:'Reading', count:0},
        {id: 2, name:'Running', count:0},
        {id: 3, name:'Coding', count:0},
    ]
  };
  handleIncrement =(habit) =>{
    // habit.count++;
    // 리액트에서는 State 오브젝트를 직접 수정하는 것은 좋지않다
    // this.setState(this.state) //더한값을 업데이트 하기 (state 오브젝트 안에 있는 값을 변경을 하면 리액트는 모르기때문에 꼭 업데이트 해줘야한다)
    const habitse = [...this.state.habits]
    const index = habitse.indexOf(habit);
    habitse[index].count++;
    // this.setState({ habits: habits}) // 아래처럼 생략가능 key:value 가 같은경우
    this.setState({habitse})
  }
  handleDecrement =(habit) =>{
    const habitMinus = [...this.state.habits]
    const index = habitMinus.indexOf(habit);
    const counts = habitMinus[index].count - 1;
    habitMinus[index].count = counts < 0 ? 0 : counts;
    this.setState({habitMinus})
  }
  handleDelete =(habit) =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits})
  }

  handleAdd =(name) =>{
    const habits = [...this.state.habits, {id: Date.now(), name : name, count:0}];
    this.setState({habits})
  }

  handleReset = () =>{
    const habits = this.state.habits.map(habit =>{
      habit.count = 0;
      return habit;
    });
    this.setState({habits})
  }
    render() {
      return (
      <>
        <Navbar totalCount = {this.state.habits.filter(item => item.count >0).length} />
        <Habits  
                habits = {this.state.habits}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onDelete = {this.handleDelete}
                onAdd = {this.handleAdd}
                onReset ={this.handleReset}
        />
      </>
      );
  }
}
export default App;
