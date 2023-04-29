import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const myData = [
    { name: "name", value: "Hein Tay Zar" },
    { name: "description", value: "Highly communicative and active individual with a passion for web technology, particularly in React and Rails. Skilled in building relationships and conveying ideas effectively, with a talent for adapting communication style to various audiences. Enjoys staying up-to-date with the latest trends and advancements in web development and experimenting with new tools and techniques."},
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
        name: "Frontend",
        skills: [
            { name: "React", value: 2 },
            { name: "Tailwind", value: 2 },
            { name: "Redux", value: 2 },]
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", value: 1 },
            { name: "Express.js", value: 1 },
            { name: "MongoDB", value: 1 },
            { name: "MySQL", value: 2 },
            { name: "PostgreSQL", value: 2 },
            { name: "Firebase", value: 2 },
            { name: "Heroku", value: 2 },
            { name: "Ruby on Rails", value: 2 },
        ]
    }
] as MainSkillInterface[];


const testimony = [
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },

]

export const mySkillsDescription = "Loremdfsfdffffffffffffffffffffffffffffffffffffffffffffffffff"
export { myData, mySocialMedia, myProjects, mySkills, totalProjects, testimony }

export const quote = [
    '"Learning is a skill. It requires practice and humility. It asks that we accept we don\'t know everything, and that we are willing to put in the effort to get better." - Shane Parrish',
    '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." - Abigail Adams.'
]
