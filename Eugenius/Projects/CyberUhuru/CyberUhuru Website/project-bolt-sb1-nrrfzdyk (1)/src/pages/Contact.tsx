import React, { useState } from 'react';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Call",
      details: "+254 745 285 486",
      color: "text-[#295aa4]"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "support@cyberuhuru.com",
      color: "text-[#295aa4]"
    },
    {
      icon: "📍",
      title: "Location",
      details: "AppleWood Adams, Ngong Road",
      color: "text-[#295aa4]"
    }
  ];

  const socialLinks = [
    { platform: "LinkedIn", handle: "@CyberUhuruInc", icon: "💼" },
    { platform: "Instagram", handle: "@CyberUhuruInc", icon: "📸" },
    { platform: "YouTube", handle: "@CyberUhuruInc", icon: "📺" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[150px] pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-normal mb-8">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className={`[font-family:'Kanit',Helvetica] font-bold ${info.color} text-xl mb-2`}>
                        {info.title}
                      </h3>
                      <p className="text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal text-base">
                        {info.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-xl">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <span className="text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal text-base">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border border-[#295aa4] shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-2xl">
                      Send Us a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#295aa4] [font-family:'Kanit',Helvetica] text-base"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#295aa4] [font-family:'Kanit',Helvetica] text-base"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#295aa4] [font-family:'Kanit',Helvetica] text-base resize-vertical"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cyber"
                      className="w-full h-[50px] [font-family:'Kanit',Helvetica]"
                    >
                      SEND NOW
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-4xl lg:text-5xl tracking-[0] leading-normal">
              Unleashing the Tools of Tomorrow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-[#295aa4] transition-colors">
              <CardContent className="p-8">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    alt="AI Technology"
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="absolute top-4 right-4 bg-[#295aa4] text-white px-3 py-1 rounded-full">
                    <span className="[font-family:'Kanit',Helvetica] font-bold text-lg">AI</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#295aa4] transition-colors">
              <CardContent className="p-8">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    alt="Software Development"
                    src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="absolute top-4 right-4 bg-[#295aa4] text-white px-3 py-1 rounded-full">
                    <span className="[font-family:'Kanit',Helvetica] font-bold text-lg">Software</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#295aa4] transition-colors">
              <CardContent className="p-8">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    alt="Cloud Solutions"
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="absolute top-4 right-4 bg-[#295aa4] text-white px-3 py-1 rounded-full">
                    <span className="[font-family:'Kanit',Helvetica] font-bold text-lg">Cloud</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};