import React, { useState } from 'react'
import { Loading } from '../'
import { useCopy } from '../../hooks'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)
  // const [isCopied, setIsCopied] = useState(false)
  // const [copyMessage, setCopyMessage] = useState('')

  const { copyMessage, handleCopy } = useCopy()

  const resume_details = {
    name: 'Isaiah M. Wright',
    email: ['isaiah@divemelon.com', 'isaiah@liquid.cards'],
    phone: '(832) 492 - 9984',
    location: 'Houston, TX'
  }

  const resume_cover = 'Experienced electronics technician, specializing in maintaining, troubleshooting, and replacing VHF, UHF, and HF radios, X-Band radar systems, as well as marine navigation programs and hardware, including, but not limited to, ECDIS, NavNet 3D systems, and Forward Looking InfraRed marine camera systems. I also performed as the Information Security Manager for three Seawatch servers, and the CCTV system on board the Coast Guard Cutter Alert. Held the position of head ERP contact for electronics department’s storage and distribution. Proficient in Javascript and Python, familiar with TypeScript and C++. Six years of experience in Adobe Illustrator and Photoshop, seven years experience in Adobe Premiere Pro and Final Cut Pro, three years experience in Blender and Unity. Secret Security Clearance is valid until 2030.'

  const resume_skills = [
    {
      Programming: {
        "JavaScript / TypeScript": "React, Node, Express, Next, tRPC",
        "Python": "Pandas, TensorFlow, NumPy",
        "SQL": "PostgreSQL, SQLite, MySQL",
        "C++": "Arduino, Unity",
        "Database APIs": "Firebase, MongoDB, GraphQL",
      },
      Computer_Systems: {
        "Operating Systems": "MacOS, Linux (Debian, Red Hat), Windows",
        "BASH scripts": "Shell scripting, cron jobs, SSH",
        "Version Control": "Git, GitHub",
        "System Debugging": "Syslog, journalctl, dmesg",
        "Server Administration": "Nginx, Apache, Docker, Windows Enterprise, Red Hat Enterprise Linux",
      },
      Module_Testing_and_Repair: {
        "VHF, UHF, HF Radios": "Icom, Raymarine, Furuno, Simrad, Garmin",
        "X-Band Radar": "78/79 SPS",
        "ECDIS": "Furuno",
        "NavNet 3D": "Furuno, Raymarine",
        "FLIR Systems": "FLIR M-Series",
        "UPS Systems": "APC",
        "AC/DC Motors": "Marine, Industrial",
      },
      Specializations: {
        "Testing Equipment": "Oscilloscope, Wattmeters, IFR",
        "Soldering": "2M Microminiature Soldering",
      },
      Design: {
        "Adobe Creative Suite": "Photoshop, Illustrator, Premiere Pro, After Effects",
        "Blender": "3D modeling, animation, rendering",
        "Unity": "rigidbody, shader, and terrain scripting",
        "Final Cut Pro": "video editing",
      },
    }
  ]

  const resume_experience = [
    {
      "title": "Lead Developer",
      "organization": "Liquid",
      "location": "Houston, TX",
      "start": "September 2022",
      "end": "Present",
      "description": ["Designed and maintaining client-side React, TypeScript, and UI codebase for www.liquid.cards", "Designed and maintaining server-side NextJ and tRPC codebase"],
    },
    {
      "title": "Lead Developer",
      "organization": "Melon",
      "location": "Houston, TX",
      "start": "October 2021",
      "end": "Present",
      "description": ["Development of safety technology for safer practices in offshore oil and gas operations and commercial diving", "Built complex neural networks for industry-specific NLP models", "Designed iOS application with Swift and Firebase using the VisionKit API", "Designed and maintaining www.divemelon.com", "Designed all user interfaces for the entire Melon Suite"]
    },
    {
      "title": "Building Automation Engineer",
      "organization": "Lonestar College",
      "location": "Houston, TX",
      "start": "August 2019",
      "end": "December 2021",
      "description": ["Researched and maintained energy distribution schedule and, power management profiles", "Maintained all Automated Logic Control networks for six campuses", "Designed communication network for six campuses, integrating existing ARCNET with off-the-shelf SDR"]
    },
    {
      "title": "Electronics Technician",
      "organization": "Coast Guard Cutter Alert",
      "location": "Astoria, OR",
      "start": "July 2018",
      "end": "April 2019",
      "description": ["Analyzed tracking, depth, and National Marine Electronics Association data for updates made to the Seawatch servers to send current information to ECDIS and Agile Client (primary navigation software)", "Contributed and verified more than 120,000 square miles of electronic navigation charts for the Joint Interagency Task Force South, allowing drug interdiction operations to be more accurate in the South Pacific", "Programmed fifty Icom handheld VHF radios, four XTL-5000 VHF radios, and two DSC VHF radios for Alert’s crew", "Troubleshot over 240 hours, identifying failures in fifteen of the twenty-two systems and pieces of equipment that I maintain, preventing equipment casualties during patrols."]
    },
    {
      "title": "Electronics Technician",
      "organization": "Electronics Support Detachment, U.S. Coast Guard",
      "location": "Warrenton, OR",
      "start": "December 2017",
      "end": "July 2018",
      "description": ["Performed preventative and corrective maintenance on twenty-five Search and Rescue, and Aids to Navigation assets", "Traveled over 2,500 miles completing 800 maintenance procedure cards, servicing thirty-nine assets at eight units in the area of responsibility of Coast Guard Base Seattle", "Maintained three Radio Frequency communication towers specifically for local Search and Rescue transmissions.", "Collateral duty as safety officer, performing three full inspections of the fleet’s electrical integrity, and supervised over thirty tower climbs."]
    },
    {
      "title": "Electrical Apprentice",
      "organization": "Prime Electric",
      "location": "Houston, TX",
      "start": "October 2015",
      "end": "June 2016",
      "description": ["Demolition at industrial sites for bidding", "Fished more than 20,000 feet of electrical wire and armored cable", "Completed over 500 light installs and housing replacements"]
    },
  ]

  const resume_education = [
    {
      "title": "Electronics Technician Technical School",
      "organization": "U.S. Coast Guard",
      "location": "Warrenton, OR",
      "start": "April 2017",
      "end": "December 2017",
      "description": "Nine month course covering in depth safety, AC / DC electronic theory, documentation processing, cables and connectors, antenna theory, Ship’s Inertial Navigation System troubleshooting, radio component level troubleshooting, VHF and UHF frequency management, radio programming, and practical application while tower climbing. Certified by the Department of Defense and the Department of Homeland Security.",
    },
    {
      "title": "AN/SPS-78 / AN/SPS-79 Radar Maintenance Course",
      "organization": "U.S. Coast Guard",
      "location": "Warrenton, OR",
      "start": "March 2018",
      "end": "April 2018",
      "description": "Five week course with the Department of Homeland Security designed specifically for the AN/SPS-78 Version One (X-Band / S-Band) and Version Two (X-Band / X-Band) radar configurations used in the United States Coast Guard, and to become competent in preventive and corrective maintenance procedures for keeping the radar systems operational.",
    },
    {
      "title": "Server Management Course",
      "organization": "U.S. Coast Guard",
      "location": "Warrenton, OR",
      "start": "May 2018",
      "end": "June 2018",
      "description": "Four week course with the Department of Homeland Security introducing server security management, Red Hat Enterprise Linux commands and data transfer, and a thorough outline of Windows 10 Enterprise and the applications that run on the servers (ECDIS, OpenEye, Agile Client, C-ARPA).",
    },
    {
      "title": "Ultimate Diver Training",
      "organization": "The Ocean Corporation",
      "location": "Houston, TX",
      "start": "January 2021",
      "end": "July 2021",
      "description": "Seven month course covering in depth dive safety and knowledge, completing the Ultimate Diver Training program under class UDT-512. Excelling in chamber operation, rigging, and electronic equipment repair.",
    },
  ]

  const [resume, setResume] = useState({
    "details": resume_details,
    "cover": resume_cover,
    "skills": resume_skills,
    "experience": resume_experience,
    "education": resume_education,
  })

  return (
    <>
      <div className="dev-card">
        {copyMessage ? <div id='copy-message'>📋 Copied &nbsp; <p id='copy-message-highlight'>{copyMessage}</p> &nbsp; to clipboard!</div> : null}

        <div className="resume-header">
          <button id='details-email' onClick={() => handleCopy(resume.details.email[0])}>📋 {resume.details.email[0]}</button>
          <h1 id='details-name'>{resume.details.name}</h1>
          <h2 id='details-location'>{resume.details.location}</h2>
        </div>

        <div className="resume-body">
          {/* <div className="resume-body-section">
            <h3 id='section-title'>Skills</h3>
            <ul>
              {resume.skills.map((skill, index) => (
                <li key={index} id='skill'>{skill}</li>
              ))}
            </ul>
          </div> */}

          <div className="resume-body-section">
            <h3 id='section-title'>Experience</h3>
            <ul id='experience'>
              {resume.experience.map((experience, index) => (
                <li key={index}>
                  <h4 id='experience-title'>{experience.title}</h4>
                  <h5 id='experience-organization'>{experience.organization}</h5>
                  <h5 id='experience-location'>{experience.location}</h5>
                  <h5 id='experience-dates'>{experience.start} - {experience.end}</h5>
                  <ul id='experience-description'>
                    {experience.description.map((description, index) => (
                      <li key={index}>⦿ {description}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="resume-body-section">
            <h3 id='section-title'>Education</h3>
            <ul id='education'>
              {resume.education.map((education, index) => (
                <li key={index}>
                  <h4 id='education-title'>{education.title}</h4>
                  <h5 id='education-organization'>{education.organization}</h5>
                  <h5 id='education-location'>{education.location}</h5>
                  <h5 id='education-dates'>{education.start} - {education.end}</h5>
                  <p id='education-description'>{education.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
