
import React, { useState } from 'react';
import './App.css'
import { Menu, X, Coffee, Wifi, Music, ShoppingBag, Home, Info, UtensilsCrossed, Briefcase, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [orderForm, setOrderForm] = useState({ name: '', item: '', quantity: 1 });

  // Menu Items Data
  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'Coffee',
      description: 'Rich, bold shot of pure coffee perfection',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'Coffee',
      description: 'Espresso with steamed milk and foam',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
    },
    {
      id: 3,
      name: 'Caramel Latte',
      category: 'Coffee',
      description: 'Sweet caramel meets smooth espresso',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400'
    },
    {
      id: 4,
      name: 'Cold Brew',
      category: 'Coffee',
      description: 'Smooth, refreshing cold-steeped coffee',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
    },
    {
      id: 5,
      name: 'Croissant',
      category: 'Pastries',
      description: 'Buttery, flaky French pastry',
      price: '$3.00',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
    },
    {
      id: 6,
      name: 'Blueberry Muffin',
      category: 'Pastries',
      description: 'Fresh-baked with juicy blueberries',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400'
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      category: 'Pastries',
      description: 'Decadent dark chocolate delight',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
    },
    {
      id: 8,
      name: 'Cinnamon Roll',
      category: 'Pastries',
      description: 'Warm, gooey, and irresistible',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=400'
    }
  ];

  // Gallery Images
  const galleryImages = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800'
  ];

  // Services Data
  const services = [
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: 'Dine-In', description: 'Enjoy our cozy ambiance' },
    { icon: <ShoppingBag className="w-8 h-8" />, title: 'Takeaway', description: 'Grab and go convenience' },
    { icon: <Wifi className="w-8 h-8" />, title: 'Free Wi-Fi', description: 'Stay connected always' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Work Space', description: 'Perfect for productivity' },
    { icon: <Music className="w-8 h-8" />, title: 'Live Music', description: 'Weekends at 7 PM' }
  ];

  // Navigation scroll function
  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // WhatsApp order handler
  const handleOrderSubmit = () => {
    if (!orderForm.name || !orderForm.item || !orderForm.quantity) {
      alert('Please fill in all fields');
      return;
    }
    const message = `Hi! I would like to order:%0A%0AName: ${orderForm.name}%0AItem: ${orderForm.item}%0AQuantity: ${orderForm.quantity}`;
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation Bar */}
      <nav className="bg-amber-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8" />
              <span className="text-xl font-bold">Bean Haven</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'services', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-amber-300 transition ${
                    activeSection === section ? 'text-amber-300 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-800 pb-4">
            {['home', 'about', 'menu', 'services', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-amber-700"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Home Section - Hero Banner */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Bean Haven</h1>
          <p className="text-2xl md:text-3xl mb-8">Brewed Fresh Daily</p>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">About Us</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to Bean Haven, where passion meets perfection in every cup. Established in 2020,
              we've been serving our community with the finest coffee and pastries, creating a warm
              and inviting atmosphere for coffee lovers and casual visitors alike.
            </p>
            <p>
              Our beans are sourced from sustainable farms around the world, carefully roasted to bring
              out their unique flavors. Whether you're here for a quick morning boost, a leisurely
              afternoon with friends, or a productive work session, Bean Haven is your home away from home.
            </p>
            <p>
              What makes us special? It's our commitment to quality, our friendly baristas who know your
              order by heart, and the cozy ambiance that makes every visit memorable. Join us and
              experience the difference that true coffee craftsmanship makes.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Menu</h2>
          
          {/* Coffee Items */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Coffee</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.filter(item => item.category === 'Coffee').map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                      <button
                        onClick={() => setOrderForm({ ...orderForm, item: item.name })}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm transition"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries */}
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Pastries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.filter(item => item.category === 'Pastries').map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                      <button
                        onClick={() => setOrderForm({ ...orderForm, item: item.name })}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm transition"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-amber-50 rounded-lg hover:shadow-lg transition">
                <div className="flex justify-center text-amber-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Gallery</h2>
          
          {/* Image Slider */}
          <div className="relative mb-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="cursor-pointer overflow-hidden rounded-lg hover:opacity-75 transition"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-32 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Contact & Order</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Visit Us</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+94 742234567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 kandy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">hello@beanhaven.com</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed (Kandy, Sri Lanka) */}
              <div className="rounded-lg overflow-hidden shadow-lg flex justify-center">
                <iframe
                  src="https://www.google.com/maps?q=Kandy,+Sri+Lanka&z=14&output=embed"
                  width="90%"
                  height="300"
                  style={{ border: 0, maxWidth: '900px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kandy Location Map"
                ></iframe>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Order via WhatsApp</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Order Item</label>
                  <select
                    required
                    value={orderForm.item}
                    onChange={(e) => setOrderForm({ ...orderForm, item: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select an item</option>
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} - {item.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button
                  onClick={handleOrderSubmit}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="w-6 h-6" />
            <span className="text-xl font-bold">Bean Haven</span>
          </div>
          <p className="text-amber-200 mb-4">Brewed Fresh Daily</p>
          <p className="text-sm text-amber-300">© 2024 Bean Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
