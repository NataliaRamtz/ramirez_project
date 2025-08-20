import { CheckCircle, Package, Truck, CreditCard } from 'lucide-react';

const PurchaseModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            ¡Compra Realizada!
          </h2>
          <p className="text-gray-600">
            Gracias por tu pedido. Te hemos enviado un email con los detalles de compra.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Detalles del Pedido</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Número de Pedido:</span>
              <span className="font-medium">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium">${orderDetails?.total?.toLocaleString() || '0'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fecha:</span>
              <span className="font-medium">{new Date().toLocaleDateString('es-ES')}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Package size={16} className="text-red-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Preparación</p>
              <p className="text-sm text-gray-600">Tu pedido se está preparando</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Truck size={16} className="text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-400">Envío</p>
              <p className="text-sm text-gray-400">En 5-7 días hábiles</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <CreditCard size={16} className="text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-400">Entrega</p>
              <p className="text-sm text-gray-400">En 7-10 días hábiles</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Continuar Comprando
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal; 