import { useDispatch, useSelector } from "react-redux"

export default function CounterStruct() {
    const count = useSelector((state) => state.counter)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch({ type: 'increament' })}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch({ type: 'decreament' })}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
