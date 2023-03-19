interface myProjects {
    title: string,
    description: string,
    repoLink?: string,
    webLink?: string,
    googlePlayStoreLink?: string,
    appleAppStoreLink?: string,
    isAppInProd?: boolean,
}

const myProjects: myProjects[] = [
    {
        title: "El Dorado Wallet - P2P",
        description: "This is a multiplatform app for IOS, Android and web, where you can save and exchange crypto currencies through a P2P marketplace at a low fee",
        webLink: "https://app.eldorado.io/",
        googlePlayStoreLink: "https://play.google.com/store/apps/details?id=io.eldorado.app",
        appleAppStoreLink: "https://apps.apple.com/app/el-dorado-marketplace/id1591303547",
        isAppInProd: true,
    },
    {
        title: "Invoices Manager",
        description: "This is a web app where you can manage, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.",
        repoLink: "https://github.com/LennonPerez/InvoicesManager",
        webLink: "https://invoicesmanager.netlify.app/",
    },
    {
        title: "Audiophile e-Comerce",
        description: "This is a classic e-comerce web, where you can add items to your cart, update the quanity either in the product page or in the cart itself, it has a heckout page where you can put your data in the form. It was built using SASS, React and Redux.",
        repoLink: "https://github.com/LennonPerez/Audiophile-eComerce",
        webLink: "https://audiophile-ecomerce.netlify.app/",
    },
    {
        title: "Employees Manager",
        description: "This is a web where you can manage employees, you can create, edit and delete employees, it was designed by myself and it was built using Vue JS, Vuex, TypeScript, SASS and Firebase.",
        repoLink: "https://github.com/LennonPerez/vuex-classic-crud",
        webLink: "https://employeesmanager.netlify.app/#/",
    },
    {
        title: "Rock Paper Scissors",
        description: "This is a web where you can play the classic game, although, there's also an option to play a version of the game called: rock, paper, scissors, lizard, or spock, it was built using SASS and React.",
        repoLink: "https://github.com/LennonPerez/RockPaperScissors",
        webLink: "https://r0ckpaperscissorsgame.netlify.app/",
    },
]

export default myProjects;