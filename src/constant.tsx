import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const myData = [
    { name: "Name", value: "Hein Tay Zar" },
    { name: "Description", value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."},
    { name: "Age", value: "19" },
    { name: "Location", value: "Myanmar" },
    { name: "Email", value: "heintayzarhm@gmail.com" },
    { name: "Phone", value: "959697199782" }
]

const mySocialMedia = [
    { name: "Twitter", value: "https://twitter.com/heintayzarhm" , icon: <BsTwitter />},
    { name: "Github", value: "https://github.com/heintayzar-hm/", icon: <BsGithub /> },
    { name: "Medium", value: "https://medium.com/@heintayzarhm", icon: <BsMedium /> },
    { name: "LinkedIn", value: "https://www.linkedin.com/in/hein-tay-zar/", icon: <BsLinkedin /> },
    { name: "Angelist", value: "https://angel.co/u/hein-tay-zar", icon: <FaAngellist /> },
]

const myProjects = [
    {
        name: "Catalog Of Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        image: "https://media.giphy.com/media/8g0tNLBXOnEl9rLhXR/giphy.gif",
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
        github_link: "https://github.com/heintayzar-hm/catalog-of-things",
        tags: ["Sql, Ruby"],
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
const mySkills = [
    {
        name: "Frontend",
        skills: [
            { name: "React", value: 2 },
            { name: "Next.js", value: 2 },
            { name: "Tailwind", value: 2 },
            { name: "Bootstrap", value: 2 },
        ]
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", value: 2 },
            { name: "Express.js", value: 2 },
            { name: "Django", value: 2 },
            { name: "Flask", value: 2 },
            { name: "MongoDB", value: 2 },
            { name: "MySQL", value: 2 },
            { name: "PostgreSQL", value: 2 },
            { name: "Firebase", value: 2 },
            { name: "Heroku", value: 2 },
            { name: "Ruby on Rails" , value: 2},
        ]
    }
]


const testimony = [
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },
    { name: "Name", letter: "loremmmm", link: "example.com" },

]
export { myData, mySocialMedia, myProjects, mySkills, totalProjects, testimony }
