
import { Book, Calendar, GraduationCap, MapPin } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  
}

const EducationItem = ({ degree,
  institution,
  duration, 
  location, 
  description, 
  achievements 
}: EducationItemProps) => {
  return (
    <div className="relative pb-12">
      {/* Timeline styling */}
      <div className="absolute top-0 left-6 -ml-[6.5px] h-full w-0.5 bg-gradient-to-b from-dev via-dev/20 to-transparent"></div>
      <div className="absolute top-0 left-6 -ml-2.5 h-5 w-5 rounded-full border-2 border-dev bg-dev-dark"></div>
      
      <div className="ml-12 dev-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{degree}</h3>
          <div className="inline-flex items-center gap-2 py-1 px-3 border border-dev/30 rounded-full bg-dev/5 w-fit font-code text-sm text-dev">
            <Calendar className="w-4 h-4" />
            {duration}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <GraduationCap className="w-4 h-4 text-dev" />
           
              <span>{institution}
              </span>
           
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-dev" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="font-code text-dev mb-2">Key Achievements:</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-dev mt-1">〉</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Symbiosis Skills & Professional University",
      duration: "2022 - 2026",
      location: "Pune, India",
      description: "Specialized in Computer Science with specialisation in Cybersecurity.",
      achievements: [
        "Maintained a CGPA of 8.5/10 throughout the program",
        "Finalist at Hack IITK 2025, IIT Kanpur, for presenting a cybersecurity-focused web app.",
        "Gained knowlege of cybersecurity integrated with computer science",
        "Developed an OWASP Risk calculator as a minor project"
      ]
    },
    {
      degree: "High School Diploma (Science)",
      institution: "H.B. Girme Junior college ",
      duration: "2020 - 2022",
      location: "Pune, India",
      description: "Focused on Information Technology, Mathematics and Physics with special emphasis on programming fundamentals.",
      achievements: [
        "Graduated with 65% aggregate marks",
       
      ]
    }
  ];

  return (
    <section id="education" className="section-container bg-dev-dark/50">
      <h2 className="section-title">
        <Book className="w-6 h-6 text-dev" />
        Education 
      </h2> 
      
      <div className="max-w-3xl mx-auto">
        {educationHistory.map((education, index) => (
          <EducationItem key={index} {...education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
