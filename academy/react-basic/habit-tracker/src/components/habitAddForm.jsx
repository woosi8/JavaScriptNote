
// 펀션은 rsi
import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-inout"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
    
    
// import React, { PureComponent } from 'react';
// // rcc
// class HabitAddForm extends PureComponent {
//     //Dom 접근하기
//     inputRef = React.createRef();
//     formRef = React.createRef();
//     onSubmit = (event)=> {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         // this.inputRef.current.value ='';
//         this.formRef.current.reset();
//     }
//     render() {
//         return (
//             <form ref={this.formRef}className="add-form" onSubmit = {this.onSubmit}>
//                 <input ref ={this.inputRef} type="text" className ="add-inout" placeholder = "Habit"/>
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default HabitAddForm;