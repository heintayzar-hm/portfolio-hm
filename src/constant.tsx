import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import App from "./assets/images/app.gif";
import Crypto from "./assets/images/crypto.png";
import Human from "./assets/images/humanessential.png";
import BudgetWise from "./assets/images/budgetWise.gif";
import Recipe from "./assets/images/recipe.png";
import AwesomeBooks from "./assets/images/awesomebooks.png";
import CMS from "./assets/images/cms.png";
import Film from "./assets/images/film.png";
import Plane from "./assets/images/plane.png";
import Htwettoe from "./assets/images/htwettoe.png";
import Dashboard from "./assets/images/dashboard.png";
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
    { name: "github", value: "https://github.com/heintayzar-hm", icon: <BsGithub /> },
    { name: "medium", value: "https://medium.com/@heintayzarhm", icon: <BsMedium /> },
    { name: "linkedIn", value: "https://www.linkedin.com/in/hein-tay-zar/", icon: <BsLinkedin /> },
    { name: "angelist", value: "https://angel.co/u/hein-tay-zar", icon: <FaAngellist /> },
]

const myProjects = [
    {
        name: "Htwet Toe",
        description: [
            " A web application that is mainly used in Myanmar. It's aim is to help farmers to answer their questions and to provide them with the latest news and information.",
            "I successfully build and led a team of 3 developers to create a web application that is now used by 10,000+ users.",
            "I practiced and build the frontend using Nextjs and backend using nodejs, which was already built for mobile apps."
        ],
        live_link: "https://htwet-toe.com/",
        github_link: "Javascript: void(0)",
        tags: ["Nextjs, Nodejs, Seo, PWA, Internationalization"],
        id: 1,
        image: Htwettoe
    },
    {
        name: "Dashboard for me",
        description: [
            "It is a web application that I used to track my daily activities and to see my progress as well as some necessary information in my life.",
            "For example, record my daily expenses, see my daily progress, record some video that I used in my project, and learn languages.",
            "I used Nextjs as a Full-Stack application and used TailwindCSS for styling. As for the database, I used Psql."
        ],
        live_link: "https://htwet-toe.com/",
        github_link: "Javascript: void(0)",
        image: Dashboard,
        tags: ["Nextjs, Psql, TailwindCSS", "Full-Stack", "Learning Languages", "Record", "Prisma", "Nginx"],
        id: 1,
    },
    {
        name: "GVASH Planes",
        description: [
            "A web application where we can book new planes and see reservations.",
            "Trained 5 junior developers and learned how to work as a team",
            "Worked as a code reviewer and proposed new features that dramatically improved the application.",
        ],
        image: Plane,
        live_link: "https://gvash-planes.vercel.app/",
        github_link: "https://github.com/V-Blaze/gvash-planes",
        tags: ["React, Redux, TailwindCSS, Rails"],
        id: 2
    },
    {
        name: "Human Essentials",
        description: ["An open-source project that aims to end poverty in all its forms everywhere.",
        "Suggested changes to the codebase and proposed new changes to the design.",
            "Learned how the workflows are in real-world projects.",
        "Fixed bugs and improved community."
        ],
        image: Human,
        live_link: "https://humanessentials.app/",
        github_link: "https://github.com/rubyforgood/human-essentials",
        tags: ["Ruby On Rails, Open Sources"],
        id: 3
    },
    {
        name: "BudgetWise",
        description: [
            "A web application for easy expense tracking. Register, securely store info, and view the dashboard of categories and transaction totals. Add new transactions and categories with user-friendly forms. ",
            "Learned how to document and make a logo for the application.",
            "Built on Rails with Devise Gem and Cancancan Gem for security and authorization. "
        ],
        image: BudgetWise,
        live_link: "https://budgetwise-nut9.onrender.com/",
        github_link: "https://github.com/heintayzar-hm/BudgetWise",
        tags: ["Ruby, Tailwindcss, Psql, Rails"],
        id: 4
    },
    {
        name: "FlimFrenzy",
        description: [
            "A movie application where you can see all the latest movies that are airing right now.",
            "It is a Single Page Application (SPA) with JavaScript.",
            "Learned how to build a Single Page Application (SPA) without a framework or libraries.            "
        ],
        image: Film,
        live_link: "https://heintayzar-hm.github.io/FilmFrenzy/dist",
        github_link: "https://github.com/heintayzar-hm/FilmFrenzy",
        tags: ["JavaScript, HTML, CSS"],
        id: 5
    },
    {
        name: "Crypto",
        description: [
            "A real-time crypto application where you can see the trending cryptocurrencies and their market prices.",
            "Used React and Redux, and learned new tools like Vite.",
            "Learned how to work efficiently and independently.",
        ],
        image: Crypto,
        live_link: "https://crypto-28lp.onrender.com/#/home/",
        github_link: "https://github.com/heintayzar-hm/crypto",
        tags: ["React, Redux, TailwindCSS"],
        id: 6
    },
    {
        name: "Blog",
        description: ["A blog application where you can create, edit, and delete posts. You can also comment on posts and like them.",
            "Used Ruby on Rails and learned how to use Devise Gem and Cancancan Gem for security and authorization.",
            "Learned how to work efficiently and independently.",
        ],
        image: App,
        live_link: "https://github.com/heintayzar-hm/blog",
        github_link: "https://github.com/heintayzar-hm/blog",
        tags: ["Ruby On Rails, Psql"],
        id: 7
    },
    {
        name: "Recipe",
        description: ["A recipe application where you can create, edit, and delete recipes",
        " You can also comment on recipes and like them.",
        ],
        image: Recipe,
        live_link: "https://recipe-app-jk5k.onrender.com/",
        github_link: "https://github.com/Mujeeb4582/Recipe-app.git",
        tags: ["Ruby On Rails, Psql"],
        id: 8
    },
    {
        name: "AwesomeBooks",
        description: ["A bookstore application where you can create, edit, and delete books."],
        image: AwesomeBooks,
        live_link: "https://heintayzar-hm.github.io/awesomebooks/",
        github_link: "https://github.com/heintayzar-hm/awesomebooks.git",
        tags: ["React", "Redux"],
        id: 9
    },
    {
        name: "BookStore CMS",
        description: ["BookStore-CMS is a React and Firebase-powered web application designed for book enthusiasts who want to manage their book collection and categories with ease.","Contaned black and white thems", "Demonstrated exceptional proficiency in working independently, consistently delivering high-quality results while using 3 different new technologies", "Acquired valuable insights and expertise in developing modern web applications, further enhancing professional development and skills in front-end development"],
        image: CMS,
        live_link: "https://bookstore-cms.vercel.app/",
        github_link: "https://github.com/heintayzar-hm/Bookstore",
        tags: ["React", "Redux", "FireStore", "Two Themes", "TailwindCSS"],
        id: 9

    }
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
            { name: "Nextjs", value: 2 },
            { name: "React", value: 2 },
            { name: "Redux", value: 2 },
            { name: "HTML5", value: 2 },
            { name: "CSS3", value: 2 },
            { name: "TypeScript", value: 2 },
            { name: "PWA", value: 2 },
            { name: "SEO", value: 2 },
        ]
    },
    {
        // Ruby, Ruby on Rails, MySQL, Nodejs, Psql, PHP, Laravel
        name: "Backend",
        skills: [
            { name: "Nodejs", value: 2 },

            { name: "Ruby on Rails", value: 2 },
            { name: "MySQL", value: 2 },
            { name: "Psql", value: 2 },
            { name: "mySql", value: 2 },
            { name: "Laravel", value: 2 },
            { name: "Firebase", value: 2 },
            { name: "Nextjs", value: 2 },
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
