import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Importa o redutor do carrinho

// Cria a loja Redux usando configureStore do Redux Toolkit
const store = configureStore({
    // Define o objeto redutor raiz
    reducer: {
        // 'cart' é o nome da fatia de estado (slice) e é gerenciado por cartReducer
        cart: cartReducer,
    },
});

export default store; // Exporta a loja para ser usada na aplicação