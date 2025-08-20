import { useState } from 'react';
import { Mail, Phone, Clock, Award, Users, Palette } from 'lucide-react';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    budget: '',
    timeline: '',
    description: '',
    measurements: false,
    consultation: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Consulta Enviada!
            </h2>
            <p className="text-gray-600 mb-6">
              Gracias por tu interés en nuestros servicios de alta costura. 
              Nos pondremos en contacto contigo en las próximas 24 horas.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  eventType: '',
                  budget: '',
                  timeline: '',
                  description: '',
                  measurements: false,
                  consultation: false
                });
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Enviar Nueva Consulta
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Pedidos Personalizados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crea la prenda de tus sueños con nuestro servicio exclusivo de alta costura personalizada. 
            Cada pieza es una obra de arte única, diseñada especialmente para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Information Section */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Nuestro Proceso
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño Personalizado</h3>
                  <p className="text-gray-600">
                    Trabajamos contigo para crear un diseño único que refleje tu estilo y personalidad. 
                    Cada detalle es cuidadosamente considerado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Medidas Precisas</h3>
                  <p className="text-gray-600">
                    Realizamos un ajuste perfecto con múltiples sesiones de prueba para garantizar 
                    que la prenda se adapte como una segunda piel.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseños Excepcionales</h3>
                  <p className="text-gray-600">
                    Utilizamos técnicas y materiales 
                    de la más alta calidad para crear piezas que durarán toda la vida.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tiempo de Entrega</h3>
                  <p className="text-gray-600">
                    El tiempo de confección varía según la complejidad del diseño, 
                    típicamente entre 4-8 semanas para piezas de alta costura.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gray-500" />
                  <span className="text-gray-600">+55 618 123 44 55</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-500" />
                  <span className="text-gray-600">custom@ostara.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-gray-600">Lun-Vie: 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Solicitar Consulta
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Evento
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                >
                  <option value="">Seleccionar tipo de evento</option>
                  <option value="boda">Boda</option>
                  <option value="gala">Gala</option>
                  <option value="evento-corporativo">Evento Corporativo</option>
                  <option value="fiesta">Fiesta</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto Aproximado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha Necesaria
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Seleccionar timeline</option>
                    <option value="1-2-months">1-2 meses</option>
                    <option value="2-4-months">2-4 meses</option>
                    <option value="4-6-months">4-6 meses</option>
                    <option value="6+months">6+ meses</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción del Proyecto
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe tu visión, estilo preferido, colores, y cualquier detalle especial que tengas en mente..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="measurements"
                    checked={formData.measurements}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    Necesito servicio de toma de medidas
                  </span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="consultation"
                    checked={formData.consultation}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    Me gustaría programar una consulta en persona
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders; 