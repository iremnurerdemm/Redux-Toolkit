import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, setCount } from "../redux/slices/counterSlice"
setCount()

const Counter = () => {
    const dispatch = useDispatch()
    //abone mantığı değişmiypr

    const store = useSelector((store) => store.counterReducer)
    console.log(increase())
    console.log(decrease())

    return (
        <div className="vh-100 w-full d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center gap-4">
                <button onClick={() => dispatch(decrease())} className="btn btn-danger">-</button>
                <span className="lead fw-bold">{store.count}</span>
                <button onClick={() => dispatch(increase())} className="btn btn-success">+</button>

                <input type="number" className="w-25" onChange={(e) => dispatch(setCount(Number(e.target.value)))} />

            </div>
        </div>


    )
}

export default Counter
