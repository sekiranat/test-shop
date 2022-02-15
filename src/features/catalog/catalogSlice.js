import axios from 'axios'
import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    products: [

    ],
    currentPage: 1,
    totalProducts: 22
}

export const fetchProducts = createAsyncThunk(
    'products',
    async (paginNmb = 1) => {

        // number of goods produced
        const skipNmb = paginNmb === 1 ? 0 : (paginNmb - 1) * 4

        const {
            data
        } = await axios(`http://testtask.alto.codes/front-products.php?skip=${skipNmb}`)

        return {
            dataFetch: data,
            currentPage: paginNmb
        }
    }
)


export const counterSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.dataFetch.products
            state.currentPage = action.payload.currentPage
        })
    },
})


export default counterSlice.reducer