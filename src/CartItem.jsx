import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Importa as ações necessárias do CartSlice
import { removeItem, updateQuantity } from './CartSlice'; 
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  // Obtém a lista de itens do carrinho do estado do Redux
  const cart = useSelector(state => state.cart.items);
  // Inicializa o hook useDispatch para despachar ações
  const dispatch = useDispatch();

  // Função para calcular o custo total de todos os itens no carrinho
  const calculateTotalAmount = () => {
    let total = 0;
    
    // Itera sobre o array cart
    cart.forEach(item => {
      // Converte a string de custo (ex: "$10") para um número, removendo o '$'
      const cost = parseFloat(item.cost.substring(1));
      // Adiciona o custo total do item à soma cumulativa
      total += cost * item.quantity; 
    });

    // Retorna o total formatado com 2 casas decimais
    return total.toFixed(2);
  };

  // Implementa a funcionalidade "Continuar Comprando"
  const handleContinueShopping = (e) => {
    e.preventDefault();
    // Chama a função onContinueShopping passada como prop do componente pai
    onContinueShopping();
  };
  
  // Implementa a funcionalidade "Finalizar Compra" (Checkout)
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  // Incrementa o número de um tipo de planta no carrinho
  const handleIncrement = (item) => {
    // Despacha a ação updateQuantity para aumentar a quantidade em 1
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrementa o número de um tipo de planta no carrinho
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // Se a quantidade for maior que 1, diminui a quantidade em 1
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Se a quantidade cair para 1 e for decrementada (chegando a 0), 
      // despacha removeItem para remover o item completamente
      dispatch(removeItem(item.name));
    }
  };

  // Remove um tipo de planta do carrinho completamente
  const handleRemove = (item) => {
    // Despacha a ação removeItem com o nome do item como payload
    dispatch(removeItem(item.name));
  };

  // Calcula o custo total (subtotal) para um item individual
  const calculateTotalCost = (item) => {
    // Extrai o valor numérico da string de custo
    const cost = parseFloat(item.cost.substring(1));
    // Multiplica pela quantidade e formata
    return (cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      {/* Exibe o custo total de todos os itens*/}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {/* Mapeia sobre os itens do carrinho */}
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                {/* Botão de decremento chama handleDecrement */}
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                {/* Botão de incremento chama handleIncrement */}
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              {/* Exibe o subtotal do item */}
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              {/* Botão de remoção chama handleRemove */}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        {/* Botão "Continue Shopping" chama handleContinueShopping */}
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        {/* Botão "Checkout" chama a nova função handleCheckoutShopping */}
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;