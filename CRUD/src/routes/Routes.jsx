import { Routes ,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Form from '../Pages/Form';
import Product from '../Pages/Product';
function Rou()
{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/form' element={<Form></Form>}></Route>
                <Route path='/product' element={<Product></Product>}>
                </Route>
            </Routes>
        </div>
    )
}
export default Rou