
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import MapboxMap from "@/components/MapboxMap";

const Contacts = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "255753392262";
    const message = "Hello, I would like to inquire about your mining explosive solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85"></div>
        <div className="absolute inset-0 bg-[url('/images/contactsengineer.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact <span className="text-yellow-400">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with our experts for all your mining explosive solutions needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Mobile</h3>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-yellow-400 font-semibold mb-1 hover:text-yellow-300 transition-colors cursor-pointer underline"
                    >
                      +255753392262
                    </button>
                    <p className="text-gray-300 text-sm">Click to chat on WhatsApp - Available for all your mining explosive needs</p>
                  </div>
                </motion.div>

                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "imanimwaisunga@hda.co.tz",
                    description: "We'll respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Physical Address",
                    info: "HDA Company Limited\nP.O. Box 1113, Mbeya\nStreet: Maendeleo\nWard: Iyunga\nJasma Cash & Carry building",
                    description: "Visit our headquarters"
                  },
                  {
                    icon: MapPin,
                    title: "Postal Address",
                    info: "P.O. Box 1113, Mbeya",
                    description: "For correspondence"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-yellow-500 p-3 rounded-lg flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{contact.title}</h3>
                      <div className="text-yellow-400 font-semibold mb-1 whitespace-pre-line">{contact.info}</div>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Registration Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-slate-700 rounded-lg border border-yellow-400/30"
              >
                <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-yellow-400 font-semibold">Certificate Incorporation Number:</span> 143611604</p>
                  <p><span className="text-yellow-400 font-semibold">Headquarters:</span> Mbeya, Tanzania</p>
                  <p><span className="text-yellow-400 font-semibold">Ownership:</span> Owned by Tanzanians in the United Republic of Tanzania</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-700 border-yellow-400/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name</label>
                        <Input 
                          className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <Input 
                        type="email"
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="+255 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Subject</label>
                      <Input 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50"
                        placeholder="Mining explosive inquiry"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <Textarea 
                        className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-yellow-400 transition-all duration-300 hover:border-yellow-400/50 min-h-[120px]"
                        placeholder="Tell us about your mining project requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-300">
              Find us in Mbeya, Tanzania
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-4 rounded-lg overflow-hidden"
          >
            <MapboxMap className="border border-slate-600" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
