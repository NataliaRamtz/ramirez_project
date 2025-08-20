import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import PurchaseModal from '../components/PurchaseModal';

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 500 ? 0 : 25;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setOrderDetails({
        total: calculateTotal(),
        items: cart.length,
        orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase()
      });
      setShowPurchaseModal(true);
      setIsCheckingOut(false);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowPurchaseModal(false);
    setOrderDetails(null);
    // Reiniciar el carrito cuando se cierra el modal
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-600 mb-8">
            Parece que aún no has añadido ningún producto a tu carrito. 
            Explora nuestras colecciones y encuentra la pieza perfecta.
          </p>
          <Link
            to="/collections"
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Ver Colecciones
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Carrito de Compras
          </h1>
          <p className="text-gray-600">
            Revisa tus productos y procede al checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Productos ({cart.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="text-gray-700 font-serif text-lg">O</span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {item.selectedColor && (
                            <span>Color: {item.selectedColor}</span>
                          )}
                          {item.selectedSize && (
                            <span>Talla: {item.selectedSize}</span>
                          )}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          ${item.price.toLocaleString()} cada uno
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Resumen del Pedido
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${calculateSubtotal().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">
                    {calculateShipping() === 0 ? 'Gratis' : `$${calculateShipping()}`}
                  </span>
                </div>

                {calculateShipping() > 0 && (
                  <div className="text-xs text-gray-500 bg-green-50 p-3 rounded-md">
                    <div className="flex items-center">
                      <Truck size={14} className="mr-2" />
                      Añade ${(500 - calculateSubtotal()).toLocaleString()} más para envío gratuito
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isCheckingOut ? (
                  'Procesando...'
                ) : (
                  <>
                    <CreditCard size={20} className="mr-2" />
                    Proceder al Pago
                  </>
                )}
              </button>

              {/* Continue Shopping */}
              <Link
                to="/collections"
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center mt-4"
              >
                <ArrowLeft size={20} className="mr-2" />
                Seguir Comprando
              </Link>

              {/* Shipping Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Información de Envío</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <Truck size={14} className="mr-2" />
                    Envío gratuito en pedidos superiores a $500 pesos mexicanos
                  </div>
                  <div>Entrega en 7-10 días hábiles</div>
                  <div>Devoluciones gratuitas en 30 días</div>
                </div>
              </div>

              {/* Security */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Pago seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal 
        isOpen={showPurchaseModal}
        onClose={handleCloseModal}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default Cart; 