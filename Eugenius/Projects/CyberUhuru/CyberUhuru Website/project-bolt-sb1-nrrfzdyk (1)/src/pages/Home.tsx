import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { AnimatedCounter } from '../components/ui/animated-counter';
import { useNavigate } from 'react-router-dom';

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  
  const statistics = [
    { number: 38, label: "Clients empowered" },
    { number: 12, label: "Solutions delivered" },
    { number: 100, label: "Individuals Trained" },
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
                  Welcome to CyberUhuru
                </h1>
                <p className="opacity-70 [font-family:'Kanit',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-[30px]">
                  Powering Innovation with AI, Software, Design & Security.
                </p>
              </div>
              
              <Button
                variant="cyber"
                className="w-[220px] h-[60px] [font-family:'Kanit',Helvetica]"
                onClick={() => document.getElementById('digital-innovation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Us
              </Button>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto max-h-[500px] rounded-[20px] border border-solid border-[#295aa4] object-cover"
                alt="CyberUhuru Innovation Technology"
                src="/images/home/image-1.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Innovation Section */}
      <section id="digital-innovation" className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#295aa4] [font-family:'Kanit',Helvetica] leading-normal mb-6">
              We are Architects of Digital Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                className="w-full max-w-[400px] h-auto object-cover mx-auto"
                alt="Digital Innovation"
                src="/images/home/image-2.png"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal leading-[30px]">
                We unlock business and individual potential with advanced AI,
                innovative software, cutting-edge design, robust cybersecurity,
                and intelligent cloud solutions for a smarter digital future.
              </p>

              <Card className="border border-[#295aa4]">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                      <div key={index} className="text-center">
                        <AnimatedCounter
                          end={stat.number}
                          duration={2000}
                          className="text-[32px] font-semibold text-[#295aa4] [font-family:'Kanit',Helvetica] leading-normal"
                          suffix="+"
                        />
                        <div className="text-lg text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal leading-[30px] mt-2">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="cyber"
                  className="w-[220px] h-[60px] [font-family:'Kanit',Helvetica]"
                  onClick={() => navigate('/training')}
                >
                  Get Trained
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Mission Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#295aa4] [font-family:'Kanit',Helvetica] leading-normal">
              Our Mission is to Make Life Easier with AI
            </h2>
          </div>

          {/* Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Card - Redefining Business */}
            <div className="relative">
              <div className="bg-[#295aa4] p-[2px]" style={{clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 30px 100%, 0% calc(100% - 30px))'}}>
                <div className="bg-white p-8" style={{clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 30px 100%, 0% calc(100% - 30px))'}}>
                  <div className="text-center space-y-6">
                    <h3 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-2xl leading-tight">
                      Redefining Business
                    </h3>
                    <h3 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-2xl leading-tight">
                      With AI
                    </h3>
                    <p className="text-gray-600 [font-family:'Kanit',Helvetica] font-normal text-base leading-relaxed">
                      Driving transformation with cutting-edge AI and secure digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Card - 12+ Solutions */}
            <div className="relative">
              <div className="bg-[#295aa4] p-[2px]" style={{clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 30px 100%, 0% calc(100% - 30px))'}}>
                <div className="bg-white p-8" style={{clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 30px 100%, 0% calc(100% - 30px))'}}>
                  <div className="text-center space-y-6">
                    <AnimatedCounter
                      end={12}
                      duration={2000}
                      className="text-6xl [font-family:'Kanit',Helvetica] font-bold text-[#295aa4]"
                      suffix="+"
                    />
                    <p className="text-gray-600 [font-family:'Kanit',Helvetica] font-normal text-base leading-relaxed">
                      Solutions that drive secure digital transformation.
                    </p>
                    <Button
                      variant="cyber"
                      className="w-[180px] h-[50px] [font-family:'Kanit',Helvetica]"
                      onClick={() => navigate('/services')}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - AI Innovation Image */}
            <div className="rounded-lg overflow-hidden min-h-[300px]">
              <img
                className="w-full h-full object-cover"
                alt="AI Innovation"
                src="images/home/image-3.png"
              />
            </div>
          </div>

          {/* Get Trained Button */}
          <div className="flex justify-center">
            <Button
              variant="cyber"
              className="w-[220px] h-[60px] [font-family:'Kanit',Helvetica]"
              onClick={() => navigate('/training')}
            >
              Get Trained
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};