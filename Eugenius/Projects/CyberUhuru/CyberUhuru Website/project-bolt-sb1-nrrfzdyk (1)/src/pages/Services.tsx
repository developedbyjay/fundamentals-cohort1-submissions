import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Services = (): JSX.Element => {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "AI Training & Consulting, AI-Powered Automation, and Machine Learning.",
      icon: "🤖",
      features: ["Machine Learning Models", "AI Consulting", "Automation Solutions", "Data Analytics"]
    },
    {
      title: "Software Solutions",
      description: "App & Web Development, CMS/CRM Development, and API Development.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "CRM Systems", "API Integration"]
    },
    {
      title: "Design Solutions",
      description: "Product Design, UI/UX Design, and Logos, Posters & Banners.",
      icon: "🎨",
      features: ["UI/UX Design", "Brand Identity", "Product Design", "Marketing Materials"]
    },
    {
      title: "CyberSecurity",
      description: "Threat Intelligence, Incident Response, and Cyber Awareness.",
      icon: "🔒",
      features: ["Security Audits", "Threat Detection", "Incident Response", "Security Training"]
    },
    {
      title: "Networking Solutions",
      description: "Network Design, Network Management, and Firewall Administration.",
      icon: "🌐",
      features: ["Network Architecture", "Infrastructure Setup", "Security Implementation", "Monitoring"]
    },
    {
      title: "Cloud Solutions",
      description: "Cloud Infrastructure, Cloud Migration, and Cloud DevOps.",
      icon: "☁️",
      features: ["Cloud Migration", "Infrastructure Management", "DevOps Solutions", "Scalability"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[150px] pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-normal">
                  We empower Businesses & Individuals with Smart, Secure, and Scalable AI skills & Solutions.
                </h1>
              </div>
              
              <Button
                variant="cyber"
                className="w-[220px] h-[60px] [font-family:'Kanit',Helvetica]"
              >
                Get Training
              </Button>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto max-h-[400px] rounded-[20px] object-cover"
                alt="CyberUhuru Services"
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal leading-[30px] max-w-4xl mx-auto">
            CyberUhuru empowers businesses and individuals by delivering smart, secure, and scalable technology 
            solutions tailored to modern needs. From AI and cloud to cybersecurity, networking, and design, we help 
            individuals and organizations innovate with confidence and thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-[#295aa4] hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    
                    <h3 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-xl">
                      {service.title}
                    </h3>
                    
                    <p className="opacity-70 [font-family:'Kanit',Helvetica] font-normal text-black text-base leading-[24px]">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-[#295aa4] rounded-full"></div>
                          <span className="text-sm text-black opacity-70 [font-family:'Kanit',Helvetica]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full h-[45px] bg-transparent border border-[#295aa4] text-[#295aa4] hover:bg-[#295aa4] hover:text-white transition-colors"
                    >
                      <span className="[font-family:'Kanit',Helvetica] font-bold text-base">
                        Learn More
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="cyber"
              className="w-[220px] h-[60px] [font-family:'Kanit',Helvetica]"
            >
              Get Training
            </Button>
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