import './style.scss'

export const Button = ({ id }) => {
    return (
        <button onClick={() => { alert(`В корзине т${id}`) }} className="button-add-cart">
            <div className='button-add-cart__icon'>

            </div>
            В корзину
        </button>
    )
}