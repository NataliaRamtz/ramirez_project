import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Users, Clock } from 'lucide-react';
import { products, collections } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  // Imágenes para los productos
  const productImages = [
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-bg text-white">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            OSTARA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Alta Costura & Colecciones Exclusivas
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Descubre la elegancia atemporal de nuestras piezas únicas, 
            creadas con los mejores materiales y técnicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/collections"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Ver Colecciones
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/custom-orders"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Pedidos Personalizados
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Calidad</h3>
              <p className="text-gray-600">
                Materiales premium y acabados excepcionales en cada pieza.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creaciones</h3>
              <p className="text-gray-600">
                Cada prenda es creada a mano.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusividad</h3>
              <p className="text-gray-600">
                Diseños únicos y ediciones limitadas para clientes exigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Productos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras piezas más exclusivas, seleccionadas especialmente para ti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-image"
                  style={{ backgroundImage: `url(${productImages[index % productImages.length]})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <Link 
                      to={`/product/${product.id}`}
                      className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Nuestras Colecciones</h2>
            <p className="text-gray-600">
              Explora nuestras colecciones por temporada, cada una con su propia identidad y elegancia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Link 
                  to="/collections"
                  className="text-gray-900 font-medium hover:underline flex items-center"
                >
                  Ver Colección
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 atelier-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Sobre Ostara</h2>
              <p className="text-gray-300 mb-6">
                Ostara es sinónimo de elegancia y sofisticación en el mundo de la alta costura. 
                Nuestro atelier en Durango es el corazón de nuestra creatividad, donde cada prenda nace de la 
                pasión por la perfección.
              </p>
              <p className="text-gray-300 mb-8">
                Cada colección es una narrativa visual que combina la herencia de la moda europea con 
                la innovación contemporánea, creando piezas que trascienden las tendencias temporales.
              </p>
              <Link 
                to="/custom-orders"
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Solicitar Consulta
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="bg-gray-800 bg-opacity-50 h-64 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-serif text-2xl">O</span>
                </div>
                <span className="text-gray-300 font-medium">Atelier Ostara</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 