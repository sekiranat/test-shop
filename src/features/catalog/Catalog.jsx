import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './catalogSlice'
import { Card } from 'common/card'
import { Pagination } from './pagination'
import './style.scss'

export const Catalog = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.catalog.products)
    const totalProducts = useSelector((state) => state.catalog.totalProducts)
    const currentPage = useSelector((state) => state.catalog.currentPage)

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="wrap">
            <div className="product-list">
                {products.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            availability={item.availability}
                            color={item.color}
                            id={item.id}
                            imageUrl={item.image_url}
                            name={item.name}
                            price={item.price}
                            shortDesc={item.short_desc}
                        />
                    )
                })}
            </div>
            {
                <Pagination
                    onChangePage={(e) => dispatch(fetchProducts(e))}
                    total={totalProducts}
                    currentPage={currentPage}
                />
            }
        </div>
    )
}