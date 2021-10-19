import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
var randomColor = require('randomcolor');
var color = randomColor()
const Home: NextPage = () => {
  const count = useSelector(state => state.cashReducer.count)
  const customer = useSelector(state => state.cast.customers)
  const dispatch = useDispatch()

  const Plus = () => {
    dispatch({ type: "ADD_ACTION", payload: 1 })
  }
  const minus = () => {
    dispatch({ type: "M_ACTION", payload: 1 })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer })
  }

  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '100vh'
    }}>
      {count}
      <div style={{ flex: 'flex' }} >
        <button style={{ color: color }} onClick={() => Plus()} >plus</button>
        <button onClick={minus} >minus</button>
        <button onClick={() => addCustomer(prompt())} >add Client</button>
        <button onClick={minus} >minus</button>
      </div>
      <div style={{ flexDirection: 'column', display: 'flex', }} >
        {customer.length > 0 ?
          <div  >
            {customer.map(cus => <div>{cus.name}</div>)}
          </div>
          :
          <div>
            da
          </div>
        }
      </div>
    </div >
  )
}

export default Home
