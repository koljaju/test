import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  profileData = {
    name: 'John Developer',
    title: 'Full Stack Software Engineer',
    bio: 'Passionate software engineer with 5+ years of experience in web development. I love creating innovative solutions and working with cutting-edge technologies.',
    location: 'San Francisco, CA',
    email: 'john.developer@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/johndeveloper',
    github: 'github.com/johndeveloper',
    website: 'johndeveloper.com',
    skills: [
      'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS',
      'Node.js', 'Python', 'Java', 'SQL',
      'Git', 'Docker', 'AWS', 'MongoDB'
    ],
    experience: [
      {
        company: 'Tech Solutions Inc.',
        position: 'Senior Frontend Developer',
        duration: '2022 - Present',
        description: 'Lead frontend development for enterprise applications using Angular and TypeScript.'
      },
      {
        company: 'StartupXYZ',
        position: 'Full Stack Developer',
        duration: '2020 - 2022',
        description: 'Developed full-stack web applications using Angular, Node.js, and MongoDB.'
      },
      {
        company: 'WebDev Co.',
        position: 'Junior Developer',
        duration: '2019 - 2020',
        description: 'Assisted in frontend development and learned modern web technologies.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        year: '2019'
      }
    ]
  };
}
