import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

function BtnRender({ product }) {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    return (
        <div className="row_btn">
            {
                isAdmin ?
                    <>
                        <Link id="btn_buy" to="#!">Delete</Link>
                        <Link onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }} id="btn_view" to={`/edit_product/${product._id}`} >Edit
                        </Link>
                    </>
                    : <>
                        <Link id="btn_buy" to="#!" onClick={() => addCart(product)} >Buy</Link>
                        <Link onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }} id="btn_view" to={`/detail/${product._id}`} >View
                        </Link>
                    </>
            }
        </div>
    )
}

export default BtnRender
