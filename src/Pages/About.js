import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MinhPicture from '../components/AboutPageComponents/MinhPicture';
import SeanPicture from '../components/AboutPageComponents/SeanPicture'

function About() {
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'Newsreader, sans-serif' }}>About Us</h1>
                <p style={{ width: '80%', margin: '0 auto' }}>
                    We are a team of computer science university students, studying at Swinburne University. This webpage has been created, in response to a university assignment. The assignment required us to integrate a machine learning model, with a webpage designed in React. To achieve this, we developed backend code using the FastAPI framework to interact with our machine learning model and frontend code. If you would like to know more about us, read the section below.
                </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '40px', width: '80%', margin: '0 auto' }}>
                <MinhPicture style={{ marginRight: '20px'}} /> 
                <div style={{ textAlign: 'left', marginLeft: '20px', flex: 1 }}>
                    <h2 style={{marginLeft: '150px'}}>Minh Cao</h2>
                    <p>
                        Minh Cao is a dedicated computer science student with a passion for technology and innovation. Currently studying at Swinburne University, he is deeply interested in exploring various aspects of computing, including software development, data analysis, and emerging technologies. Minh is known for his curiosity and willingness to tackle challenging problems, which has driven him to engage in various projects that enhance his understanding of the field. Beyond academics, he enjoys collaborating with peers on group projects, where he values teamwork and the exchange of ideas. In his spare time, Minh enjoys reading about the latest trends in technology, participating in online courses, and attending workshops to further expand his knowledge. With a strong foundation in computer science and a commitment to continuous learning, Minh is excited about the future and eager to make a positive impact in the tech industry.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '40px', width: '80%', margin: '0 auto' }}>
                
                <div style={{ textAlign: 'left', marginLeft: '20px', flex: 1 }}>
                    <h2 style={{marginLeft: '150px'}}>Sean Smith</h2>
                    <p>
                        I am currently pursuing a Bachelor of Computer Science, majoring in Cybersecurity, at Swinburne University. Over the course of my studies, I have developed expertise in web development, Android app development, networking, and AWS cloud services. My coursework has provided a solid foundation in computing and cybersecurity, with practical experience in coding, systems management, and cloud-based solutions. During my third year, I worked in an IT helpdesk role, gaining valuable hands-on experience with real-world IT infrastructure and support processes. This role enhanced my understanding of the technologies businesses use to manage and secure their systems, from network security to troubleshooting enterprise applications. I am passionate about applying my skills to solve complex challenges in cybersecurity and look forward to contributing to the field as I advance my career.
                    </p>
                </div>

                <SeanPicture /> 
            </div>
        </>
    );
}

export default About;
