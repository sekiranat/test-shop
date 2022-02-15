import { Button } from 'common/btns/addCart'
import './style.scss'

export const Card = ({ availability, color, id, name, price, short_desc }) => {

    const stockClass = availability ? 'card-product__stock card-product__stock_aviable' : 'card-product__stock card-product__stock_not-available'

    return (
        <a href='#' className="card-product">
            <div className="card-product__img">
                <img src="https://testtask.alto.codes/img/test-product.jpeg" alt="" />
            </div>
            <div className="card-product__info">
                <div className={stockClass}>
                    {availability ? 'В наличии' : 'Под заказ'}
                </div>
                <div className="card-product__title">
                    {name}
                </div>
                <div className="card-product__price">
                    {price} ₽
                </div>
                <div className="card-product__bottom">
                    <div className="card-product__color">
                        Цвет - {color}
                    </div>
                    <div className="card-product__description">
                        {short_desc}
                    </div>
                    <Button id={id}
                    />
                </div>
            </div>
        </a>
    )
}