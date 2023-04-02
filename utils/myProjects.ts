import InvoiceManagerTablet from '../public/assets/images/projects/invoice-manager/tablet.svg'
import AudioFileEcomerceTablet from '../public/assets/images/projects/audio-file-ecomerce/tablet.svg'
import ElDoradoTablet from '../public/assets/images/projects/El-dorado-app/tablet.png'
import EmployesManagerTablet from '../public/assets/images/projects/employes-manager/tablet.png'
import RockPaperScissorsTablet from '../public/assets/images/projects/rock-paper-scissors/tablet.png'
import { skillName } from './mySkills';
import { StaticImageData } from 'next/image';

interface myProjects {
    title: string,
    description: string,
    thumbnail: StaticImageData,
    repoLink?: string,
    webLink?: string,
    googlePlayStoreLink?: string,
    appleAppStoreLink?: string,
    isAppInProd?: boolean,
    skillsUsed: skillName[],
}

const myProjects: myProjects[] = [
    {
        title: "El Dorado Wallet - P2P",
        description: "This is a crossplatform app published in Google Play Store, Apple App Store, and a web version, this app lets you save and exchange crypto currencies for fiat currencies through a P2P marketplace at a low fee.",
        thumbnail: ElDoradoTablet,
        webLink: "https://app.eldorado.io/",
        googlePlayStoreLink: "https://play.google.com/store/apps/details?id=io.eldorado.app",
        appleAppStoreLink: "https://apps.apple.com/app/el-dorado-marketplace/id1591303547",
        isAppInProd: true,
        skillsUsed: [
            skillName.Flutter,
            skillName.Dart,
            skillName.Firebase,
        ],
    },
    {
        title: "Invoices Manager",
        description: "This is a fullstack web app where you can manage, you can create, edit and eliminate an invoice by using a form. It was built using React, Redux, SASS and Strapi CMS connected to a mongoDB database.",
        thumbnail: InvoiceManagerTablet,
        repoLink: "https://github.com/LennonPerez/InvoicesManager",
        webLink: "https://invoicesmanager.netlify.app/",
        skillsUsed: [
            skillName.React,
            skillName.JavaScript,
            skillName.NodeJS,
            skillName.ExpressJS,
            skillName.CSS3,
            skillName.SASS,
            skillName.Jest,
        ],
    },
    {
        title: "Audiophile e-Comerce",
        description: "This is a classic e-comerce web, where you can add items to your cart, update the quantity either in the product page or in the cart itself, it has a checkout page where you can put your data in the form. It was built using React, Redux and SASS.",
        thumbnail: AudioFileEcomerceTablet,
        repoLink: "https://github.com/LennonPerez/Audiophile-eComerce",
        webLink: "https://audiophile-ecomerce.netlify.app/",
        skillsUsed: [
            skillName.React,
            skillName.JavaScript,
            skillName.Firebase,
            skillName.CSS3,
            skillName.SASS,
        ],
    },
    {
        title: "Rock Paper Scissors",
        description: "This is a web where you can play the classic game, although, there's also an option to play a version of the game called: rock, paper, scissors, lizard, or spock, it was built using SASS and React.",
        thumbnail: RockPaperScissorsTablet,
        repoLink: "https://github.com/LennonPerez/RockPaperScissors",
        webLink: "https://r0ckpaperscissorsgame.netlify.app/",
        skillsUsed: [
            skillName.React,
            skillName.JavaScript,
            skillName.CSS3,
            skillName.SASS,
        ],
    },
    {
        title: "Employees Manager",
        description: "This is a web app where you can manage employees using CRUD operations, like create, edit and delete employees, it was built using Vue JS, Vuex, TypeScript, SASS and Firestore for the database.",
        thumbnail: EmployesManagerTablet,
        repoLink: "https://github.com/LennonPerez/vuex-classic-crud",
        webLink: "https://employeesmanager.netlify.app/#/",
        skillsUsed: [
            skillName.VueJS,
            skillName.JavaScript,
            skillName.TypeScript,
            skillName.Firebase,
            skillName.CSS3,
            skillName.SASS,
        ],
    },
]

export default myProjects;