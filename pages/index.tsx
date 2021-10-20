import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../src/asyncAction/customers';
import { asyncDicrementAction, asyncIncrementAction, dicrementAction, incrementAction } from '../src/store/cashReducer';
import { addCustomoerAction, removeCusomerAction } from '../src/store/castomerReducer';
var randomColor = require('randomcolor');
var color = randomColor()


const Home: NextPage = () => {
  const count = useSelector(state => state.cash.count)
  const customer = useSelector(state => state.cast.customers)
  const dispatch = useDispatch()

  const Plus = () => {
    dispatch(incrementAction())
  }
  const minus = () => {
    dispatch(dicrementAction())
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomoerAction(customer))
  }

  const remove = (id) => {
    dispatch(removeCusomerAction(id))
  }


  return (
    <div>

      <div style={{
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
        {count}
        <div style={{ flex: 'flex' }} >
          <button style={{ color: color }} onClick={() => dispatch(asyncIncrementAction())} >plus</button>
          <button onClick={() => dispatch(asyncDicrementAction())} >minus</button>
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
    </div>
  )
}

export default Home
