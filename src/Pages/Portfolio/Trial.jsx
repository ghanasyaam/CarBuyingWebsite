import React from 'react';
import './TrialStyle.css';
import atmaImage from './Atma.jpg';
import dattuImage from './dattu.jpg';
import goImage from './go.jpg';
import syamImage from './syam.jpg';

const Trial = () => {
  const developers = [
    {
      name: 'Atmakrishna',
      role: 'Full Stack Developer',
      bio: 'Atmakrishna is a skilled frontend developer with a passion for building responsive and user-friendly web applications.',
      image: atmaImage
    },
    {
      name: 'Dattanand',
      role: 'Full Stack Developer',
      bio: 'Dattanand is an experienced Full Stack Developer who specializes in server-side logic and database management.',
      image: dattuImage
    },
    {
      name: 'Ashwin',
      role: 'Full Stack Developer',
      bio: 'Ashwin is a versatile Full Stack Developer who can handle both frontend and backend tasks efficiently.',
      image: goImage
    },
    {
      name: 'Ghanasyam',
      role: 'Full Stack Developer',
      bio: 'Ghanasyam is a creative Full Stack Developer who excels at creating intuitive and visually appealing user interfaces.',
      image: syamImage
    }
  ];

  return (
    <div className="Trial-App">
      <header className="Trial-App-header">
        <h1>Web Developer Portfolio</h1>
      </header>
      <div className="Trial-portfolio">
        {developers.map(dev => (
          <div className="Trial-developer-card" key={dev.name}>
            <img className="Trial-developer-img" src={dev.image} alt={`${dev.name}'s picture`} />
            <h2 className="Trial-developer-name">{dev.name}</h2>
            <h3 className="Trial-developer-role">{dev.role}</h3>
            <p className="Trial-developer-bio">{dev.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trial;
