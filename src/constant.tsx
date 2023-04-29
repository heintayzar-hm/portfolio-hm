import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const myData = [
    { name: "name", value: "Hein Tay Zar" },
    { name: "description", value: "As a Full-Stack Developer with 2+ years of experience, I thrive on challenges and bring a wealth of technical knowledge to the table. My expertise includes JavaScript, React, and Node.js, and I excel at quickly adapting to new technologies. I'm not just a solo coder - I'm a collaborative team player with strong soft skills, including 50+ pair programming sessions and 100+ code reviews. With a proven track record of building 10+ successful projects, I'm confident that I can add value to any team or organization."},
    { name: "age", value: "19" },
    { name: "location", value: "Myanmar" },
    { name: "email", value: "heintayzarhm@gmail.com" },
    { name: "phone", value: "+959697199782" },
    { name: "resume", value: "https://docs.google.com/document/d/14ni24ygUIS2fm-AcHuf-fE_1cYOiH_G6Qraz0ndPut4/edit?usp=sharing"}
]

const mySocialMedia = [
    { name: "twitter", value: "https://twitter.com/heintayzarhm" , icon: <BsTwitter />},
    { name: "github", value: "https://github.com/heintayzar-hm/", icon: <BsGithub /> },
    { name: "medium", value: "https://medium.com/@heintayzarhm", icon: <BsMedium /> },
    { name: "linkedIn", value: "https://www.linkedin.com/in/hein-tay-zar/", icon: <BsLinkedin /> },
    { name: "angelist", value: "https://angel.co/u/hein-tay-zar", icon: <FaAngellist /> },
]

const myProjects = [
    {
        name: "BudgetWise",
        description: " a web app for easy expense tracking. Register, securely store info, and view the dashboard of categories and transaction totals. Add new transactions and categories with user-friendly forms. Built on Rails with Devise and Cancancan for security.",
        image: "https://media.giphy.com/media/CsbMULi8lCqXIx2W3G/giphy.gif",
        live_link: "example.com",
        github_link: "https://github.com/heintayzar-hm/catalog-of-things",
        tags: ["Sql, Ruby"],
        id: 1
    },
    {
        name: "Catalog Of Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        image: "https://media.giphy.com/media/8g0tNLBXOnEl9rLhXR/giphy.gif",
        live_link: "example.com",
        github_link: "https://github.com/heintayzar-hm/catalog-of-things",
        tags: ["Sql, Ruby"],
        id: 2
    },
    {
        name: "Catalog Of Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        image: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
        live_link: "example.com",
        github_link: "https://github.com/heintayzar-hm/catalog-of-things",
        tags: ["Sql, Ruby"],
        id: 3
    },
    {
        name: "Catalog Of Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        image: "https://media.giphy.com/media/8g0tNLBXOnEl9rLhXR/giphy.gif",
        live_link: "example.com",
        github_link: "https://github.com/heintayzar-hm/BudgetWise",
        tags: ["Ruby, Tailwindcss, Psql"],
        id: 4
    },
    {
        name: "Catalog Of Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        image: "https://media.giphy.com/media/8g0tNLBXOnEl9rLhXR/giphy.gif",
        live_link: "example.com",
        github_link: "https://github.com/heintayzar-hm/catalog-of-things",
        tags: ["Sql, Ruby"],
        id: 5
    },
]
const totalProjects = myProjects.length;
export interface skillsInterFace {
    name: string;
    value: Number;
}

export interface MainSkillInterface {
    name: string;
    skills: skillsInterFace[];
}

const mySkills = [
    {
        // JavaScript, React, Redux, jQuery, HTML5, CSS3, TypeScript, SCSS, GSAP, Tailwind
        name: "Frontend",
        skills: [
            { name: "React", value: 2 },
            { name: "Tailwind", value: 2 },
            { name: "Redux", value: 2 },
            { name: "jQuery", value: 2 },
            { name: "HTML5", value: 2 },
            { name: "CSS3", value: 2 },
            { name: "TypeScript", value: 2 },
            { name: "SCSS", value: 2 },
            { name: "GSAP", value: 2 },
        ]
    },
    {
        // Ruby, Ruby on Rails, MySQL, Nodejs, Psql, PHP, Laravel
        name: "Backend",
        skills: [
            { name: "Ruby on Rails", value: 2 },
            { name: "MySQL", value: 2 },
            { name: "Nodejs", value: 2 },
            { name: "Psql", value: 2 },
            { name: "PHP", value: 2 },
            { name: "Laravel", value: 2 },
        ]
    }
] as MainSkillInterface[];


const testimony = [
    { name: "Mujeeb ur Rahman", letter: "During my time working with Hein Tay Zar at Microverse, I had the pleasure of witnessing his outstanding abilities as a software engineer. His commitment to his work and his capacity to tackle complex problems with ease never ceased to impress me. Hein Tay Zar possesses an innate talent for designing and writing clean, accessible code and takes great pride in ensuring every aspect of a project is flawless. He is a true team player, always willing to lend a helping hand to his colleagues and surpass expectations to contribute to the team's success. I wholeheartedly endorse Hein Tay Zar for any software engineer position and firmly believe that he would make an invaluable addition to any team.", link: "https://www.linkedin.com/in/rahman-mujeeb/" },
    { name: "Ebrahim Al-Yousefi", letter: "I strongly recommend Hein Tay as a collaborator and teammate. Hein is an incredibly reliable and dependable individual who consistently delivers high-quality work, making them an excellent addition to any team.", link: "https://www.linkedin.com/in/ebrahim-alyousefi/" },
    { name: "ENNING FESTUS", letter: "I had the pleasure of working with Hein Tay Zar as a team member at Microverse, and he consistently delivered high-quality work and impressed me with his strong work ethic and dedication to his craft. His problem-solving skill and attention to detail are unparalleled. Beyond his technical skills, Hein Tay Zar is a team player and a real asset to any team. He is always willing to go above and beyond to help his colleagues and contribute to the team's success. I do not doubt that Hein Tay Zar will continue to excel in his career and impact positively wherever he goes. I highly recommend him to any company or individual looking for a talented and reliable professional.", link: "https://www.linkedin.com/in/enningfestus/" },
    { name: "Peter Chendi", letter: "Hein is one of the brightest software developers I've ever met. I worked with Hein while solving some programming problems, and during that time he proved his commitment and determination over and over again. Hein is always challenging himself.", link: "https://www.linkedin.com/in/peter-chendi/" },
    { name: "Gina Beki", letter: "Hein has been an invaluable addition to the team. A thorough team player and a very solid techy. Challenging timelines and unproven technologies are two things he was always subjected to. Very happy and proud to say that he always came out with flying colors. Very happy to have worked with him. All the very best Hein.", link: "https://www.linkedin.com/in/ginabeki/" },
    { name: "Valentine (BLAZE) Ezekwonna", letter: "Hein is one of the best among all people I have ever met and is a loyal colleague, understands complex matters. Hein is a ", link: "https://www.linkedin.com/in/valentine-blaze/" },

]

export const mySkillsDescription = ["As a web developer for over 2+ years, I am passionate about creating innovative solutions using the latest web technologies.", "My expertise includes Ruby on Rails, React, Laravel, and several other tools. I have worked on a variety of web development projects. Through my work, I have gained extensive experience in building responsive and user-friendly interfaces, developing server-side APIs, and integrating third-party services.", " I am always eager to learn new technologies and explore new opportunities to expand my skills and knowledge in the field of web development.", " Currently, I am seeking new opportunities to apply my expertise and contribute to exciting new projects."];
export { myData, mySocialMedia, myProjects, mySkills, totalProjects, testimony }

export const quote = [
    '"Ruby is simple in appearance, but is very complex inside, just like our human body." - Matsumoto Yukihiro',
    '"Skills can be taught, character you either have or you don\'t have." - Anthony Bourdain'
]
