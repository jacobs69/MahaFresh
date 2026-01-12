import { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Clock, Truck, Phone, Instagram, Facebook, Mail, Menu, X, ChevronRight, Star, CheckCircle, Leaf, Sun, Droplets } from 'lucide-react';

// --- Assets & Data ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=2000",
  farm: "https://images.unsplash.com/photo-1603208945638-31649d282e4a?auto=format&fit=crop&q=80&w=1000",
  strawberries: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&q=80&w=1000",
  packing: "https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&q=80&w=1000",
  box: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800"
};

const PRODUCTS = [
  { id: '250g', name: 'Standard Pack', weight: '250g', price: 150, desc: 'Perfect for a quick snack.' },
  { id: '500g', name: 'Family Pack', weight: '500g', price: 280, desc: 'Great for smoothies and desserts.' },
  { id: '1kg', name: 'Mega Box', weight: '1kg', price: 500, desc: 'Best value for strawberry lovers.' },
  { id: 'gift', name: 'Premium Gift Box', weight: '1kg', price: 650, desc: 'Handpicked jumbo berries in gift packaging.' },
];

const TIMELINE_STEPS = [
  { time: "6:00 AM", title: "Harvested", desc: "Plucked fresh at our Mahabaleshwar Farm.", icon: <Sun className="w-6 h-6 text-yellow-500" /> },
  { time: "10:00 AM", title: "Quality Check & Pack", desc: "Sorted by hand, packed with care.", icon: <CheckCircle className="w-6 h-6 text-green-600" /> },
  { time: "4:00 PM", title: "Transport", desc: "Dispatched to Mumbai & Pune hubs.", icon: <Truck className="w-6 h-6 text-blue-600" /> },
  { time: "Next Morning", title: "Delivered", desc: "At your doorstep within 24 hours.", icon: <MapPin className="w-6 h-6 text-red-600" /> }
];

// --- Components ---
const Navbar = ({ setPage }: { setPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = "cursor-pointer hover:text-red-600 transition-colors font-medium";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5 text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setPage('home')}
          className={`text-2xl font-serif font-bold tracking-tighter cursor-pointer flex items-center gap-2 ${scrolled ? 'text-red-700' : 'text-white'}`}>
          <span className="text-3xl">🍓</span> MahaFresh
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex gap-8 ${scrolled ? 'text-stone-700' : 'text-white'}`}>
          <a onClick={() => setPage('home')} className={navLinkClass}>Home</a>
          <a href="#about" className={navLinkClass}>Our Farm</a>
          <a href="#products" className={navLinkClass}>Shop</a>
          <button onClick={() => setPage('order')} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-red-500/30">Order Now</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-stone-800' : 'text-white'}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t">
          <div className="flex flex-col p-6 gap-4 text-stone-700">
            <a onClick={() => {setPage('home'); setIsOpen(false)}} className="font-bold text-lg">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Our Farm</a>
            <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
            <button onClick={() => {setPage('order'); setIsOpen(false)}}
              className="bg-red-600 text-white py-3 rounded-lg font-bold">Order Fresh</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setPage }: { setPage: (page: string) => void }) => (
  <header className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.hero} alt="Strawberry Farm" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
    </div>
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
      <span className="inline-block bg-red-600/90 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase animate-fade-in-up">Harvested Today, Delivered Tomorrow</span>
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">Taste the Soul of <br/><span className="text-red-400">Mahabaleshwar</span></h1>
      <p className="text-lg md:text-2xl mb-10 text-stone-100 font-light max-w-2xl mx-auto">Straight from our family farm to your home in Mumbai & Pune. No cold storage, just pure nature.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button onClick={() => setPage('order')}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-red-500/40 flex items-center justify-center gap-2"><ShoppingBag className="w-5 h-5" /> Order Now</button>
        <a href="#about"
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">View Farm</a>
      </div>
    </div>
  </header>
);

const Timeline = () => (
  <section className="py-20 bg-stone-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Farm to Fork in 24 Hours</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-300 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {TIMELINE_STEPS.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-stone-100 p-4 rounded-full mb-4">{step.icon}</div>
              <h3 className="text-red-600 font-bold text-sm mb-1 uppercase tracking-wide">{step.time}</h3>
              <h4 className="text-xl font-bold text-stone-800 mb-2">{step.title}</h4>
              <p className="text-stone-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img src={IMAGES.strawberries} alt="Fresh Strawberries" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" />
          <img src={IMAGES.farm} alt="Farm Landscape" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">Born in the Red Soil of Mahabaleshwar</h2>
          <p className="text-stone-600 text-lg mb-6 leading-relaxed">Our family has been cultivating strawberries in the misty hills of Mahabaleshwar for over three generations. The unique combination of red soil, cool climate, and ethical farming practices gives our berries their distinct sweetness and vibrant color.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <Leaf className="text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800">100% Natural</h4>
                <p className="text-sm text-stone-500">No harmful chemical ripening.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplets className="text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800">Sweet & Juicy</h4>
                <p className="text-sm text-stone-500">Picked at peak ripeness.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sun className="text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800">Sun Kissed</h4>
                <p className="text-sm text-stone-500">Grown in open fields.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-stone-800">Zero Cold Storage</h4>
                <p className="text-sm text-stone-500">We don't freeze our fruit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  desc: string;
}

const ProductCard = ({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 group">
    <div className="h-48 overflow-hidden relative">
      <img src={product.id === 'gift' ? IMAGES.box : IMAGES.strawberries} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      {product.id === 'gift' && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">BESTSELLER</span>
      )}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-stone-800">{product.name}</h3>
        <span className="bg-red-50 text-red-700 font-bold px-2 py-1 rounded text-sm">{product.weight}</span>
      </div>
      <p className="text-stone-500 text-sm mb-4">{product.desc}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-stone-900">₹{product.price}</span>
        <button onClick={() => onSelect(product)}
          className="bg-stone-900 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">Book Now</button>
      </div>
    </div>
  </div>
);

const Products = ({ setPage, setPreSelectedProduct }: { setPage: (page: string) => void; setPreSelectedProduct: (id: string) => void }) => {
  const handleBook = (product: Product) => {
    setPreSelectedProduct(product.id);
    setPage('order');
  };

  return (
    <section id="products" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Fresh Harvest</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2">Choose Your Box</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onSelect={handleBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  product: string;
  quantity: number;
  date: string;
  slot: string;
  payment: string;
  notes: string;
}

const OrderPage = ({ preSelectedProduct, setPage }: { preSelectedProduct: string | null; setPage: (page: string) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    product: preSelectedProduct || '1kg',
    quantity: 1,
    date: '',
    slot: 'Morning (8AM - 11AM)',
    payment: 'UPI',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Calculate total
    const selectedProduct = PRODUCTS.find(p => p.id === formData.product);
    const totalAmount = selectedProduct ? selectedProduct.price * formData.quantity : 0;

    // Prepare order data
    const orderData = {
      ...formData,
      totalAmount,
    };

    // Get API URL from environment or use default
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Send to backend
    fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Order submitted successfully:", data.order);
          setTimeout(() => setSubmitted(true), 800);
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit order. Please try again.');
      });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 pt-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Order Confirmed!</h2>
          <p className="text-stone-600 mb-8">Thank you, {formData.name}. We have received your order for {formData.quantity} x {PRODUCTS.find(p=>p.id === formData.product)?.name}.<br/><br/>We will contact you on <strong>{formData.phone}</strong> shortly for confirmation and delivery tracking.</p>
          <button onClick={() => setPage('home')}
            className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-bold w-full">Back to Home</button>
        </div>
      </div>
    );
  }

  const selectedProduct = PRODUCTS.find(p => p.id === formData.product);
  const total = selectedProduct ? selectedProduct.price * formData.quantity : 0;

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="space-y-8">
          <div>
            <button onClick={() => setPage('home')} className="text-stone-500 hover:text-stone-800 flex items-center gap-2 mb-6 font-medium"><ChevronRight className="rotate-180 w-4 h-4" /> Back to Home</button>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">Secure Your Batch</h1>
            <p className="text-lg text-stone-600">We harvest based on orders to ensure zero wastage and maximum freshness. Fill out the details to get your box delivered to Mumbai or Pune.</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-4">
            <Star className="text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-800">Quality Guarantee</h4>
              <p className="text-sm text-red-700 mt-1">If you receive damaged fruit, we offer a 100% instant refund or replacement. No questions asked.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-stone-400" /> Delivery Hubs</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
              <div><strong className="block text-stone-900">Mumbai</strong>Dadar, Bandra, Andheri, Borivali, Powai, Thane, Navi Mumbai.</div>
              <div><strong className="block text-stone-900">Pune</strong>Kothrud, Viman Nagar, Baner, Wakad, Hinjewadi, Kharadi.</div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-red-50 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-stone-900 p-6 text-white flex justify-between items-center">
            <span className="font-bold text-lg">Order Details</span>
            <span className="text-stone-400 text-sm">Step 1 of 1</span>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Full Name</label>
                <input required name="name" onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. Rahul Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">WhatsApp Number</label>
                <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. 9876543210" />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700">Delivery Address</label>
              <textarea required name="address" onChange={handleChange} rows={3} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Flat No, Building, Street Area..." />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Pincode</label>
                <input required name="pincode" onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="400001" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Date</label>
                <input type="date" required name="date" onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* Product Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Box Size</label>
                <div className="relative">
                  <select name="product" value={formData.product} onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer">
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.weight}) - ₹{p.price}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Quantity</label>
                <input type="number" min="1" max="50" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            {/* Slot & Payment */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700">Preferred Slot</label>
              <div className="flex gap-4 flex-wrap">
                {['Morning (8-11 AM)', 'Evening (5-9 PM)'].map(slot => (
                  <label key={slot} className={`flex-1 border rounded-lg p-3 cursor-pointer transition-all ${formData.slot === slot ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-stone-200'}`}>
                    <input type="radio" name="slot" value={slot} checked={formData.slot === slot} onChange={handleChange} className="hidden" />
                    <span className="flex items-center justify-center gap-2 font-medium"><Clock className="w-4 h-4" /> {slot}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700">Payment Method</label>
              <div className="flex gap-4">
                {['UPI', 'Cash on Delivery'].map(method => (
                  <label key={method} className={`flex-1 border rounded-lg p-3 cursor-pointer transition-all ${formData.payment === method ? 'bg-stone-900 text-white border-stone-900' : 'bg-white border-stone-200'}`}>
                    <input type="radio" name="payment" value={method} checked={formData.payment === method} onChange={handleChange} className="hidden" />
                    <span className="block text-center font-bold">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Total & Submit */}
            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="block text-sm text-stone-500">Total Amount</span>
                <span className="text-3xl font-bold text-stone-900">₹{total}</span>
              </div>
              <button type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-200 transition-all hover:scale-105">Confirm Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🍓</span> MahaFresh
          </div>
          <p className="mb-6 leading-relaxed">Delivering the authentic taste of Mahabaleshwar strawberries to urban homes. Pure, chemical-free, and always fresh.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"><Mail size={18} /></a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="text-red-500 mt-1" size={18} />
              <div>
                <span className="block text-white font-medium">+91 92229 25699</span>
                <span className="text-xs">Mon - Sat (9AM - 7PM)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" size={18} />
              <div>
                <span className="block text-white font-medium">Farm Location</span>
                <span className="text-sm">WMMR+P5C, Panchgani - Mahabaleshwar Rd, Mahabaleshwar, Avakali, Maharashtra 412806</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Truck className="text-red-500 mt-1" size={18} />
              <div>
                <span className="block text-white font-medium">Hubs</span>
                <span className="text-sm">Mumbai & Pune City Limits</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500 transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Bulk/Corporate Orders</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Become a Distributor</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            <li><button onClick={() => window.location.hash = '#admin'} className="hover:text-red-500 transition-colors text-left">Admin</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MahaFresh Strawberries. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const AdminPage = ({ orders }: { orders: any[] }) => (
  <div className="min-h-screen bg-stone-50 pt-24 pb-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-stone-800 mb-8">Orders Dashboard</h1>
      
      {orders.length === 0 ? (
        <div className="bg-white p-8 rounded-lg text-center">
          <p className="text-stone-600">No orders yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Qty</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-b hover:bg-stone-50">
                  <td className="px-6 py-3">{order.name}</td>
                  <td className="px-6 py-3">{order.phone}</td>
                  <td className="px-6 py-3">{order.product}</td>
                  <td className="px-6 py-3">{order.quantity}</td>
                  <td className="px-6 py-3">₹{order.totalAmount}</td>
                  <td className="px-6 py-3">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);

// --- Main App Component ---
const App = () => {
  const [page, setPage] = useState<string>('home');
  const [preSelectedProduct, setPreSelectedProduct] = useState<string | null>(null);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Fetch orders when admin page is opened
  useEffect(() => {
    if (page === 'admin') {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${API_URL}/api/orders`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setOrders(data.orders);
          }
        })
        .catch(err => console.error('Error fetching orders:', err));
    }
  }, [page]);

  return (
    <div className="font-sans text-stone-900 bg-white selection:bg-red-200 selection:text-red-900">
      <Navbar setPage={setPage} />
      {page === 'home' && (
        <main>
          <Hero setPage={setPage} />
          <Timeline />
          <About />
          <Products setPage={setPage} setPreSelectedProduct={setPreSelectedProduct} />
          {/* Trust Section */}
          <section className="bg-red-600 text-white py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-serif font-bold mb-8">Why Trust MahaFresh?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-4 border border-white/20 rounded-xl bg-red-700/30">
                  <h3 className="font-bold text-xl mb-2">100% Direct</h3>
                  <p className="text-red-100 text-sm">No middlemen. You buy directly from our family farm.</p>
                </div>
                <div className="p-4 border border-white/20 rounded-xl bg-red-700/30">
                  <h3 className="font-bold text-xl mb-2">Same Day Harvest</h3>
                  <p className="text-red-100 text-sm">We only harvest what is ordered for that day.</p>
                </div>
                <div className="p-4 border border-white/20 rounded-xl bg-red-700/30">
                  <h3 className="font-bold text-xl mb-2">Money Back</h3>
                  <p className="text-red-100 text-sm">Not happy with quality? We refund instantly.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      {page === 'order' && (
        <OrderPage preSelectedProduct={preSelectedProduct} setPage={setPage} />
      )}
      {page === 'admin' && (
        <AdminPage orders={orders} />
      )}
      <Footer />
    </div>
  );
};

export default App;
