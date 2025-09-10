import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Training = (): JSX.Element => {
  const trainingSteps = [
    {
      number: "01",
      title: "Start Your AI Journey with CyberUhuru",
      description: "Begin learning artificial intelligence with easy-to-follow courses designed for all experience levels.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      label: "Beginner Friendly"
    },
    {
      number: "02",
      title: "Master Practical Artificial Intelligence Skills",
      description: "Gain real-world AI skills through hands-on projects and interactive lessons.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400",
      label: "Practical Learning"
    },
    {
      number: "03",
      title: "Empower Your Career With AI Training",
      description: "Boost your career prospects with industry-relevant AI training and recognized certifications.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      label: "Simplified Workflows"
    },
    {
      number: "04",
      title: "Join Africa's Leading AI Learning Community",
      description: "Connect with passionate learners and mentors in a supportive, innovative community.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      label: "Engaging Community"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[150px] pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-normal">
              Build Your Digital Skills:
              <br />
              Learn AI with CyberUhuru
            </h1>
            
            <p className="text-lg text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal leading-[30px] max-w-4xl mx-auto">
              We empower individuals through AI training, transforming beginners and professionals alike into digital innovators. Our 
              highly practical courses, expert guidance, and vibrant learning community ensure our learners can build confidence and 
              expertise in using AI technology in careers.
            </p>
          </div>
        </div>
      </section>

      {/* Training Steps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {trainingSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-bold text-[#295aa4] [font-family:'Kanit',Helvetica] opacity-20">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h2 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-2xl lg:text-3xl tracking-[0] leading-normal">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-black opacity-70 [font-family:'Kanit',Helvetica] font-normal leading-[30px]">
                    {step.description}
                  </p>
                  
                  <Button
                    variant="cyber"
                    className="w-[200px] h-[50px] [font-family:'Kanit',Helvetica]"
                  >
                    Get Training
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="border border-[#295aa4] overflow-hidden">
                    <CardContent className="p-0 relative">
                      <img
                        className="w-full h-64 lg:h-80 object-cover"
                        alt={step.title}
                        src={step.image}
                      />
                      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                        <span className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-sm">
                          {step.label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-4xl lg:text-5xl tracking-[0] leading-normal">
              Our Training Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Fundamentals",
                duration: "4 Weeks",
                level: "Beginner",
                description: "Learn the basics of artificial intelligence and machine learning.",
                features: ["Introduction to AI", "Machine Learning Basics", "Hands-on Projects", "Certificate"]
              },
              {
                title: "Advanced AI Development",
                duration: "8 Weeks",
                level: "Intermediate",
                description: "Deep dive into AI development with practical applications.",
                features: ["Neural Networks", "Deep Learning", "Real Projects", "Mentorship"]
              },
              {
                title: "AI for Business",
                duration: "6 Weeks",
                level: "Professional",
                description: "Apply AI solutions to solve real business problems.",
                features: ["Business Applications", "Strategy Development", "Case Studies", "Certification"]
              }
            ].map((program, index) => (
              <Card key={index} className="border border-[#295aa4] hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="[font-family:'Kanit',Helvetica] font-bold text-[#295aa4] text-xl mb-2">
                        {program.title}
                      </h3>
                      <div className="flex justify-center gap-4 text-sm text-black opacity-70">
                        <span>{program.duration}</span>
                        <span>•</span>
                        <span>{program.level}</span>
                      </div>
                    </div>
                    
                    <p className="opacity-70 [font-family:'Kanit',Helvetica] font-normal text-black text-base leading-[24px] text-center">
                      {program.description}
                    </p>

                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#295aa4] rounded-full"></div>
                          <span className="text-sm text-black opacity-70 [font-family:'Kanit',Helvetica]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="cyber"
                      className="w-full h-[45px] [font-family:'Kanit',Helvetica]"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};