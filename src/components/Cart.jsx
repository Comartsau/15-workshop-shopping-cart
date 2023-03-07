import CardItem from "./cardItem"
import { MyCartContext } from "../management/context"

function Cart() {
    // const [cardData,setCardData] = useState(CartData)
    const {cart,total,formatNumber} = MyCartContext()

    if(cart.length === 0) {
      return (
        <div className='shopping-cart'>
          <h1>ไม่มีสินค้าในตะกร้า!!!</h1>
        </div>
      )

    } else {
      return (
        <div className='shopping-cart'>
            <div className='title'>สินค้าในตะกร้า</div>
            {cart.map((data,index) => {
                
                return (
                    <CardItem key={index} {...data} />
                )
            })}
            <div className='footer'> ยอดชำระรวม {formatNumber(total)} บาท</div>
        </div>
      )
    }
}

export default Cart