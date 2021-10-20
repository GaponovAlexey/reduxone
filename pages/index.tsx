import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { fetchCustomers } from '../src/asyncAction/customers';
import { addCustomoerAction, removeCusomerAction } from '../src/store/castomerReducer';
var randomColor = require('randomcolor');
var color = randomColor()
const Home: NextPage = () => {
  const count = useSelector(state => state.cashReducer.count)
  const customer = useSelector(state => state.cast.customers)
  const dispatch = useDispatch()

  const Plus = () => {
    dispatch({ type: "ADD_ACTION", payload:  })
  }
  const minus = () => {
    dispatch({ type: "M_ACTION", payload: 1 })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomoerAction(customer))
  }
=======

const Home: NextPage = () => {
  
>>>>>>> 95589b8c784500ae84c0b8759f7c19cac8690df6

  const remove = (id) => {
    dispatch(removeCusomerAction(id))
  }


  return (
    <div>
<<<<<<< HEAD

      <div style={{
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
        {count}
        <div style={{ flex: 'flex' }} >
          <button style={{ color: color }} onClick={() => Plus()} >plus</button>
          <button onClick={minus} >minus</button>
          <button onClick={() => addCustomer(prompt())} >add Client</button>
          <button onClick={() => dispatch(fetchCustomers())} >ADD_CUSTOMERS</button>
        </div>
      </div>
      <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
      >
        <div style={{ display: 'flex', backgroundColor: color, }} >
          {customer.length > 0 ?
            <div  >
              {customer.map(cus => <div key={cus.id}
                onClick={() => remove(cus.id)}>{cus.name}</div>)}
            </div>
            :
            <div>
              Nol
            </div>
          }
        </div>
      </div>
=======
      da
>>>>>>> 95589b8c784500ae84c0b8759f7c19cac8690df6
    </div>
  )
}

export default Home
