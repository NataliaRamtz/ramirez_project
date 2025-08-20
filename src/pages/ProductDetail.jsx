import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Star, Package, Truck } from 'lucide-react';
import { products, categories, seasons } from '../data/products';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedColor(foundProduct.colors[0] || '');
      setSelectedSize(foundProduct.sizes[0] || '');
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor selecciona una talla y color');
      return;
    }

    setIsAddingToCart(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      const productWithOptions = {
        ...product,
        selectedSize,
        selectedColor,
        quantity
      };
      addToCart(productWithOptions);
      setIsAddingToCart(false);
    }, 1000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
          <Link to="/collections" className="text-gray-600 hover:text-gray-900">
            Volver a las colecciones
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/collections" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a Colecciones
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Imagen de {product.name}</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Vista {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500">
                  {categories.find(c => c.id === product.category)?.name}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">
                  {seasons.find(s => s.id === product.season)?.name}
                </span>
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(12 reseñas)</span>
                </div>
                {product.featured && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Destacado
                  </span>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Talla</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-md flex items-center justify-center transition-colors ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cantidad</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedSize || !selectedColor}
                className="w-full bg-gray-900 text-white py-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isAddingToCart ? (
                  'Añadiendo...'
                ) : (
                  <>
                    <ShoppingCart size={20} className="mr-2" />
                    Añadir al Carrito
                  </>
                )}
              </button>
              
              <button className="w-full border border-gray-300 text-gray-700 py-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Heart size={20} className="mr-2" />
                Añadir a Favoritos
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Materiales</h3>
                <ul className="text-gray-600 space-y-1">
                  {product.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cuidado</h3>
                <p className="text-gray-600">{product.care}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilidad</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'En Stock' : 'Agotado'}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-gray-900">Información de Envío</h3>
              <div className="flex items-center space-x-3">
                <Truck size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">Envío gratuito en pedidos superiores a $500</span>
              </div>
              <div className="flex items-center space-x-3">
                <Package size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">Entrega en 3-5 días hábiles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 