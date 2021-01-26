import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    //lifecycle method
    // componentDidMount(){ // 컴포넌트가 ui에 등록될때 호출
    //     console.log(`habit: ${this.props.habit.name} mounted`);
    // }
    // componentWillUnmount(){ // 지우기 전에 호출된다 (로딩 화면)
    //     console.log(`habit: ${this.props.habit.name} zz`);
    // }

    handleIncrement =() =>{
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement =() =>{
        this.props.onDecrement(this.props.habit);

    }
    handleDelete =() =>{
        this.props.onDelete(this.props.habit);

    }
    render() {
        const {name, count} = this.props.habit; 
        return (
            <>
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
            </>
        );
    }
}

export default Habit;