// Events.js

import React, { useState } from 'react';
import 'C:/Users/gauri/OneDrive/Documents/Sem 5/Course_Project/frontend/src/App.css';
import Navbar from '../navbar/navbar3';
import { Link } from 'react-router-dom';

// Import your event images
import event1Image from './event.jpeg';
import event10Image from './event1.0.jpeg';
import event2Image from './event2.png';
import event20Image from './event2.0.png';
import event3Image from './event3.jpeg';
import event30Image from './event3.0.jpeg';
import event31Image from './event3.1.jpeg';
import event4Image from './event4.jpg';
import event40Image from './event4.0.jpg';
import event41Image from './event4.1.jpg';
import event5Image from './event5.jpg';
import event50Image from './event5.0.jpg';
import event6Image from './event6.jpeg';
import event60Image from './event6.0.jpeg';
import event61Image from './event6.1.jpeg';
import event62Image from './event6.2.jpeg';
import event7Image from './event7.jpeg';
import event70Image from './event7.0.jpeg';
import event71Image from './event7.1.jpeg';
import event72Image from './event7.2.jpeg';
import event73Image from './event7.3.jpeg';
import event8Image from './event8.jpg';
import event80Image from './event8.0.jpg';
import event9Image from './event9.jpg';
import event90Image from './event9.0.jpg';
import event91Image from './event9.1.jpg';
import event92Image from './event9.2.jpg';
import event93Image from './event9.3.jpg';

export const eventsData = [
  {
    id: 1,
    image: event3Image,
    description: 'Dr. Uday Kulkarni: Pioneering Academic Excellence with the Completion of PhD at SOCSE',
    content:
    (
      <>  
        Congratulations are extended to Dr. Uday Kulkarni for the remarkable achievement of completing his PhD! A significant milestone has been set, making him the first faculty member of SOCSE to accomplish this feat. The dedication and hard work demonstrated by Dr. Uday Kulkarni have truly been an inspiration. Continued success is wished for him in his journey of knowledge and education.
      </>
    ),
    photos: [event30Image,event31Image],
    date: new Date(2024, 1, 4),
  }
  ,
  {
    id: 2,
    image: event20Image,
    description: 'SIH[Smart India Hackathon]',
    content: 
    (
      <>
        Smart India Hackathon 2023 (SIH2023) is a nationwide initiative to provide students with a platform to solve some of the innovative problems we face in our daily lives and thus inculcate a culture of product innovation and a mindset of problem-solving.
        Student teams have the opportunity to select Software or Hardware Problem statements submitted by Central & State Ministries, Departments, PSUs, Industries and NGOs. A total of 239 problem statements are proposed (181 software problem statements + 58 Hardware problem statements).
        <br/><br/>
        KLE Technological University conducted an INTERNAL HACKATHON in the campus to select teams to participate in the GRAND FINALE of SIH 2023.Students were informed to form a team as per the team formation guideline and select a problem statement and finalize on or before 15-09-2023. Internal Hackathon was scheduled on 25/09/2023(Monday). 
        <br/><br/>
        Big congratulations to the talented minds from KLE Technological University - Hubballi (India), Team Grand Line, for their phenomenal victory at the Smart India Hackathon! Under the problem statement of 3D reconstruction and presentation of Heritage sites, this remarkable team showcased their innovation and expertise, securing the special prize sponsored by Amazon Web Services (AWS), with an impressive prize money of 50k!
        <br/>
        Competing among 26 teams across four diverse problem statements, Grand Line stood out as the epitome of excellence, claiming the special prize that recognizes outstanding performance beyond expectations. Meet the brilliant team members:
        <ul>
          <li>Shreyas</li>
          <li>Gururaj</li>
          <li>Ateeth</li>
          <li>Suraj</li>
          <li>Prajwal</li>
          <li>Sukhi</li>
        </ul>
        Their dedication, teamwork, and innovative spirit have set a new benchmark, showcasing the pinnacle of skill and creativity.
        Kudos to Team Grand Line for their exceptional achievement, representing KLE Technological University with brilliance and ingenuity!
      </>
    ),
    photos: [event2Image],
    date: new Date(2024, 1, 1),
  },
  {
    id: 3,
    image: event10Image,
    description: 'One day workshop on Software Testing Automation for all 5th sem students and faculty',
    content:
    (
      <>
        On December 26th at 9:30 am, an enriching one-day workshop on Software Testing Automation was conducted for all 5th-semester students and faculty members. The event aimed to enhance participants understanding of automated testing methodologies, tools, and best practices in the ever-evolving landscape of software development. The workshop provided a comprehensive learning experience, covering various aspects of automation testing, including scripting, test case design, and execution. The event was held in Lab 2 for offline participants, allowing hands-on practical sessions to reinforce theoretical knowledge. Additionally, an online option was made available through a WebEx link, ensuring that participants could join remotely and actively engage in the learning process. The workshop fostered a collaborative environment for knowledge sharing and skill development, equipping attendees with valuable insights into the latest trends in software testing automation. Overall, it was a successful initiative that contributed to the continuous learning and professional development of both students and faculty members
      </>
    ),
    photos: [event10Image,event1Image],
    date: new Date(2023, 12, 26),
  },
  {
    id: 4,
    image: event4Image,
    description: 'Triumph on the Field: Computer Science Team Shines in Inter-Departmental Football Tournament',
    content:
    (
      <>
        Our Computer Science Team's journey in the Inter-Departmental Football Tournament was nothing short of a spectacular ride! The heart and soul of our achievement lie with our dedicated captain Sushir, who recruited and assembled this dynamic squad and invested hours coaching and training each player to reach their full potential. With unwavering passion and teamwork, our team left the audience in awe with the stellar performance, solidifying our department's presence in the world of sports. Kudos to the entire team who contributed to this remarkable feat.
      </>
    ),
    photos: [event40Image, event41Image],
    date: new Date(2023, 11, 3),
  },
  {
    id: 5,
    image: event5Image,
    description: 'Innovation Unleashed: A Resounding Success in the World of Software Product Development',
    content:
    (
      <>
        The eagerly anticipated seminar, "Exploring the Boundless Horizons of Software Product Development," took place on October 19th at 4 pm in the Architecture Seminar Hall. The event featured an esteemed speaker, our distinguished alumnus Shri Shankar Krish, Vice President of Product Development at Guru.com. The seminar was an exhilarating journey into the dynamic world of software product development, igniting the passion and creativity of the attendees. Shri Shankar Krish shared invaluable insights, drawing from his rich experience, and inspired the audience to unleash their coding prowess. The event was a resounding success, leaving participants enlightened and motivated to pursue their software dreams. It was indeed a date with innovation, and all who attended were treated to an immersive experience that will undoubtedly leave a lasting impact on their approach to software development
      </>
    ),
    photos: [event50Image],
    date: new Date(2023, 9, 18),
  },
  {
    id: 6,
    image: event6Image,
    description: 'Tech Fusion',
    content:
    (
      <>
        The Association of Computer Science and Engineering is delighted to announce the triumphant culmination of its annual technical exhibition, "Tech Fusion 22-23." Under the theme, "Bridging the Gap Between Ideas and Execution," the event showcased a diverse array of mini, minor, and course projects that demonstrated the creativity, innovation, and technical prowess of our talented students. The exhibition, held on May 17, 2023, provided a platform for budding technologists to present their projects, fostering an environment of learning and collaboration. The success of Tech Fusion was evident not only in the impressive range of projects but also in the enthusiastic participation and engagement from both students and visitors. This event served as a testament to the Association's commitment to nurturing and showcasing the skills and ingenuity of the next generation of computer scientists and engineers. Tech Fusion 22-23 was truly a resounding success, leaving a lasting impact on the entire community
      </>
    ),
    photos: [event60Image, event61Image, event62Image],
    date: new Date(2023, 6, 17),
  },
  {
    id: 7,
    image: event7Image,
    description: 'Freshers:Neophytes 4.0',
    content:
    (
      <>
        The Association of Computer Science and Engineering Students (ACSES) proudly announces the triumphant completion of "Neophytes 4.0," an event that marked the induction of fresh talent into our vibrant academic community. The main event, held on April 21st, was the highlight of an exciting week-long celebration leading up to it. The theme week commenced with Day 1's "Formals Day," setting a professional tone, followed by a riveting "Shark Tank Lite" game. Day 2 embraced the casual vibes with "Hoodie Day" and an exhilarating "Aqua Relay" game. Day 3 encouraged students to "Ideate Their Own" projects and engage in the fun "Chug and Flip" game. Day 4 brought glamour with the "Famous Who" theme, culminating in the highly anticipated "Celebrity Square" game. "Neophytes 4.0" not only showcased the diverse talents within the School of Computer Science and Engineering but also fostered a sense of camaraderie and enthusiasm among the freshers. The event was a resounding success, creating unforgettable memories for all involved and setting the stage for a promising academic journey ahead.
      </>
    ),
    photos: [event70Image, event71Image, event72Image, event73Image],
    date: new Date(2023, 4, 21),
  },
  {
    id: 8,
    image: event8Image,
    description: 'Placement Prep',
    content:
    (
      <>
          After the successful hosting of our placement talk, initiated to address the concerns and queries surrounding placements and preparation, a wealth of information was shared with attendees. Worries about where and how to commence preparation, doubts about readiness, and concerns about motivation were effectively addressed. The event featured a talk by our accomplished senior, Abhishek P M, who had secured placement at AKAMAI. Participants were guided on dos and don'ts, effective preparation strategies, cultivating a positive mindset, and seizing various opportunities for career growth. Insights were provided on placements, off-campus opportunities, and valuable guidance. The session was open to questions, fostering an interactive and informative environment. The event, held on September 24th, 2022, at 12:30 pm in CSC313 on the Clite second floor, proved to be an invaluable opportunity for gaining comprehensive insights into the world of placements and career development.    
      </>
    ),
    photos: [event80Image],
    date: new Date(2022, 9, 24),
  },
  {
    id: 9,
    image: event9Image,
    description: 'Teachers Day celebration',
    content:
    (
      <>
        The Association of Computer Science and Engineering Students (ACSES) successfully orchestrated a heartfelt and joyous celebration in honor of Teachers' Day. The event, held to express gratitude and admiration for the dedicated faculty members, was a resounding success. ACSES meticulously planned and executed a series of activities and festivities that not only showcased appreciation but also fostered a warm and engaging atmosphere. From heartwarming messages and tokens of appreciation to fun-filled games and cultural performances, every aspect of the celebration reflected the genuine affection and respect the student body holds for their educators. The successful Teachers' Day celebration by ACSES served not only as a moment of recognition but also as a testament to the strong bond between students and teachers within the School of Computer Science and Engineering.         
      </>
    ),
    photos: [event90Image, event91Image, event92Image, event93Image],
    date: new Date(2022, 9, 5),
  }
  // Add more events as needed
];

function Events() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  // Filter events based on the selected time range
  // Filter events based on the selected time range
const filteredEvents = () => {
  const currentDate = new Date();
  let timeRangeStart;

  switch (selectedOption) {
    case '6months':
      // Calculate the date 6 months ago from the current date
      timeRangeStart = new Date(currentDate);
      timeRangeStart.setMonth(currentDate.getMonth() - 6);
      break;
    case 'year':
      // Calculate the date more than 1 year ago from the current date
      timeRangeStart = new Date(currentDate);
      timeRangeStart.setFullYear(currentDate.getFullYear() - 2); // Display events 2 years ago
      break;
    default:
      // Default to the date 2 months ago from the current date
      timeRangeStart = new Date(currentDate);
      timeRangeStart.setMonth(currentDate.getMonth() - 2);
      break;
  }

  // Filter events based on the calculated time range start date
  return eventsData.filter((event) => event.date.getTime() >= timeRangeStart.getTime());
};

  return (
    <div className='content'>
      <Navbar />
      <div className="dropdown-container">
        <h2>Events from the past</h2>
        <label htmlFor="eventDropdown">Time Range:</label>
        <select id="eventDropdown" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Last 2 Months</option>
          <option value="6months">Last 6 Months</option>
          <option value="year">Previous Year</option>
        </select>
      </div>
      <div className="event-container">
        {filteredEvents().map((event) => (
          <div key={event.id} className="event-block">
            <img src={event.image} alt={`Event ${event.id}`} className='event-image'/>
            <div className="event-description">
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="link">
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;