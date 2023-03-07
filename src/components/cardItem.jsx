import plus from "../image/plus.svg"
import minus from "../image/minus.svg"
import deleteicon from "../image/delete-icn.svg"
import { MyCartContext } from "../management/context"


function cardItem({...data}) {
    const {removeItem,toggleQuantity,formatNumber } = MyCartContext()
  return (
    <div className="item">
        <div className="product-image">
        <img src={data.image_url}  alt={data.name}/>
        </div>
        <div className="description">
            <span>{data.name}</span>
            <span className="description-price"> ราคา {formatNumber(data.price)} บาท</span>
        </div>
        <div className="quantity">
            <button className="plus-btn" onClick={()=>toggleQuantity(data.id,"decrement")}><img src={minus} alt=""  /></button>
            <input type="text" value={data.quantity} disabled />
            <button className="minus" onClick={()=>toggleQuantity(data.id,"increment")}><img src={plus} alt=""  /></button>
        </div>
        <div className="total-price">{formatNumber(data.quantity*data.price)}</div>
        <div className="remove" onClick={() => removeItem(data.id)}>
            <img src={deleteicon} alt="" />
        </div>
    </div>
  )
}

export default cardItem