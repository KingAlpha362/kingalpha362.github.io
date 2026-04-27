import React from 'react';
import LogoLoop from './LogoLoop';

import cppIcon from '../assets/c-.png';
import cssIcon from '../assets/css-file.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/java-script.png';
import reactIcon from '../assets/react.png';
import mysqlIcon from '../assets/mysql.png';
import pythonIcon from '../assets/python.png';
import sshIcon from '../assets/ssh.png';
import vbIcon from '../assets/visual-basic.png';
import codingIcon from '../assets/coding.png';
import devIcon from '../assets/developer.png';

const TechStack = () => {
  const imageLogos = [
    { src: cppIcon, alt: 'C++', title: 'C++' },
    { src: pythonIcon, alt: 'Python', title: 'Python' },
    { src: jsIcon, alt: 'JavaScript', title: 'JavaScript' },
    { src: reactIcon, alt: 'React', title: 'React' },
    { src: htmlIcon, alt: 'HTML', title: 'HTML' },
    { src: cssIcon, alt: 'CSS', title: 'CSS' },
    { src: mysqlIcon, alt: 'MySQL', title: 'MySQL' },
    { src: sshIcon, alt: 'SSH', title: 'SSH' },
    { src: vbIcon, alt: 'Visual Basic', title: 'Visual Basic' },
    { src: codingIcon, alt: 'Coding', title: 'Coding' },
    { src: devIcon, alt: 'Developer', title: 'Developer' },
  ];

  return (
    <div className="tech-marquee-container" style={{ padding: '2.5rem 0', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={imageLogos}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={60}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={false}
        ariaLabel="Technology Stack"
      />
    </div>
  );
};

export default TechStack;
