import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { addCart, setInput } from './Trainning/DAY6/redux/actions';
// import TodoList from './Trainning/DAY5/TodoList';


const App = () => {
    const dispatchRedux = useDispatch()
    const info = useSelector((prev:any) => {      
        return prev ? prev : {}
    });

    const { listCar, input } = info
    console.log(listCar)


    const handleAddCar = () => {
        dispatchRedux(addCart(input))
    }
    return (
        <div>
            <input type="text" placeholder='Nhập chiếc xe bạn yêu thích' className='border border-[red]' onChange={(e) => dispatchRedux(setInput(e.target.value))} />
            <button onClick={handleAddCar}>click me</button>
            <div>
                {listCar.length > 0 && listCar.map((text:any, index: number) => (
                    <div key={index}><p>{text}</p></div>
                ))}
            </div>
        </div>
    );
};


export default App;
