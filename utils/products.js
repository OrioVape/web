const products = [
    {   
        id: 1,
        name: "Tropical",
        price: 5.99,
        image: "./image/tropical 601.png",
        category: "E-Liquides",
        description: "Une saveur exotique et rafraîchissante à chaque inhalation."
    },
    {   
        id: 2,
        name: "Ananas Candy",
        price: 5.99,
        image: "./image/ananas candy 601.png",
        category: "E-Liquides",
        description: "Un goût sucré et fruité de bonbon à l'ananas."
    },
    {   
        id: 3,
        name: "Raisin Framboise",
        price: 5.99,
        image: "./image/raisin framboise 601.png",
        category: "E-Liquides",
        description: "Un mélange sucré de raisin et de framboise, parfait pour les amateurs de fruits."
    },
    {   
        id: 4,
        name: "Raspberry Watermelon",
        price: 5.99,
        image: "./image/raspberry watermelon 601.png",
        category: "E-Liquides",
        description: "Une combinaison rafraîchissante de framboise et de pastèque."
    },
    {   
        id: 5,
        name: "Réglisse",
        price: 5.99,
        image: "./image/reglisse1.png",
        category: "E-Liquides",
        description: "Pour les amateurs de réglisse, une saveur douce et savoureuse."
    },
    {   
        id: 6,
        name: "Spear Mint",
        price: 5.99,
        image: "./image/spear mint 601.png",
        category: "E-Liquides",
        description: "Un goût mentholé intense et rafraîchissant."
    },
    {   
        id: 7,
        name: "Fruit Rouge Lemen",
        price: 5.99,
        image: "./image/fruit rouge lemen 601.png",
        category: "E-Liquides",
        description: "Un mélange parfait de fruits rouges et de citron."
    },
    {   
        id: 8,
        name: "Lemon Lime",
        price: 5.99,
        image: "./image/lemon lime1.png",
        category: "E-Liquides",
        description: "Un mélange acidulé de citron et de lime."
    },
    {   
        id: 9,
        name: "Cassis Framboise Bleu",
        price: 5.99,
        image: "./image/cassis framboise bleu 601.png",
        category: "E-Liquides",
        description: "Un mélange de cassis et de framboise bleue, une saveur intense."
    },
    {   
        id: 10,
        name: "Fresh Grenadine",
        price: 5.99,
        image: "./image/fresh grenadine1.png",
        category: "E-Liquides",
        description: "Une saveur sucrée et fruitée de grenadine fraîche."
    },
    {   
        id: 11,
        name: "Casseille Cerise",
        price: 5.99,
        image: "./image/casseille cerise1.png",
        category: "E-Liquides",
        description: "Un goût sucré et acidulé de cassis et de cerise."
    },
    {   
        id: 12,
        name: "Ananas Ice",
        price: 5.99,
        image: "./image/ananas ice 601.png",
        category: "E-Liquides",
        description: "La douceur de l'ananas avec un souffle de fraîcheur."
    },
    {   
        id: 13,
        name: "Fruit Rouge Mint",
        price: 5.99,
        image: "./image/fruit rouge mint 601.png",
        category: "E-Liquides",
        description: "Un mélange fruité de fruits rouges et de menthe fraîche."
    },
    {   
        id: 14,
        name: "Mint Gum",
        price: 5.99,
        image: "./image/mint gum 601.png",
        category: "E-Liquides",
        description: "Un goût mentholé sucré qui rappelle un chewing-gum frais."
    },
    {   
        id: 15,
        name: "Caramel",
        price: 5.99,
        image: "./image/caramel1.png",
        category: "E-Liquides",
        description: "La douceur du caramel, parfaite pour les amateurs de saveurs sucrées."
    },
    {   
        id: 16,
        name: "Ananas Candy 2",
        price: 5.99,
        image: "./image/ananas candy1.png",
        category: "E-Liquides",
        description: "Un goût d'ananas sucré, idéal pour les papilles."
    },
    {   
        id: 17,
        name: "Spear Mint 2",
        price: 5.99,
        image: "./image/spear mint1.png",
        category: "E-Liquides",
        description: "Une saveur mentholée parfaite pour une sensation de fraîcheur."
    },
    {   
        id: 18,
        name: "Cooki Vanille Cafe",
        price: 5.99,
        image: "./image/cooki vanille cafe1.png",
        category: "E-Liquides",
        description: "Un délicieux mélange de vanille, café et biscuit."
    },
    {   
        id: 19,
        name: "Mint Gum 2",
        price: 5.99,
        image: "./image/mint gum1.png",
        category: "E-Liquides",
        description: "La sensation de fraîcheur d'un chewing-gum à la menthe."
    },
    {   
        id: 20,
        name: "Cassis Pasteque",
        price: 5.99,
        image: "./image/cassis pasteque1.png",
        category: "E-Liquides",
        description: "Un mélange sucré de cassis et de pastèque."
    },
    {   
        id: 21,
        name: "Ananas Ice 2",
        price: 5.99,
        image: "./image/ananas ice1.png",
        category: "E-Liquides",
        description: "Un goût frais et tropical d'ananas glacé."
    },
    {   
        id: 22,
        name: "Raisin Framboise 2",
        price: 5.99,
        image: "./image/raisin framboise1.png",
        category: "E-Liquides",
        description: "Un mélange de raisin et de framboise, rafraîchissant et sucré."
    },
    {   
        id: 23,
        name: "Exotic",
        price: 5.99,
        image: "./image/exotic1.png",
        category: "E-Liquides",
        description: "Une saveur exotique parfaite pour les amateurs de fruits."
    },
    {   
        id: 24,
        name: "Cassis Framboise Bleu 2",
        price: 5.99,
        image: "./image/cassis framboise bleu1.png",
        category: "E-Liquides",
        description: "Un mélange intense de cassis et de framboise bleue."
    },
    {   
        id: 25,
        name: "Heisenberg",
        price: 5.99,
        image: "./image/heisenberg1.png",
        category: "E-Liquides",
        description: "Une saveur rafraîchissante et mystique, inspirée de Heisenberg."
    },
    {   
        id: 26,
        name: "Mangue Ice",
        price: 5.99,
        image: "./image/mangue ice 601.png",
        category: "E-Liquides",
        description: "Une saveur sucrée et glacée de mangue."
    },
    {   
        id: 27,
        name: "Tropical 2",
        price: 5.99,
        image: "./image/tropical1.png",
        category: "E-Liquides",
        description: "Un goût exotique et tropical pour un plaisir intense."
    },
    {   
        id: 28,
        name: "Fresh Grenadine 2",
        price: 5.99,
        image: "./image/fresh grenadine 601.png",
        category: "E-Liquides",
        description: "Une saveur de grenadine fraîche, sucrée et fruitée."
    },
    {   
        id: 29,
        name: "Raspberry Watermelon 2",
        price: 5.99,
        image: "./image/raspberry watermelon1.png",
        category: "E-Liquides",
        description: "Un mélange rafraîchissant de framboise et de pastèque."
    },
    {   
        id: 30,
        name: "Heisenberg 2",
        price: 5.99,
        image: "./image/heisenberg 601.png",
        category: "E-Liquides",
        description: "Une saveur mystique et fraîche, inspirée de la célèbre série."
    },
    {   
        id: 31,
        name: "Fruit Rouge Lemen 2",
        price: 5.99,
        image: "./image/fruit rouge lemen1.png",
        category: "E-Liquides",
        description: "Un mélange parfait de fruits rouges et de citron."
    },
    {   
        id: 32,
        name: "Fruit Rouge Mint 2",
        price: 5.99,
        image: "./image/fruit rouge mint1.png",
        category: "E-Liquides",
        description: "Un goût fruité de fruits rouges avec un rafraîchissement mentholé."
    },
    {   
        id: 33,
        name: "Mangue Ice 3",
        price: 5.99,
        image: "./image/mangue ice1.png",
        category: "E-Liquides",
        description: "La mangue glacée, un goût exotique et rafraîchissant."
    },
    {   
        id: 34,
        name: "Fruit Rouge 601",
        price: 5.99,
        image: "./image/fruit rouge 601.png",
        category: "E-Liquides",
        description: "Une saveur fruitée de fruits rouges, parfaite pour une vape sucrée."
    },
    {   
        id: 35,
        name: "Fruit Rouge 2",
        price: 5.99,
        image: "./image/fruit rouge1.png",
        category: "E-Liquides",
        description: "Un goût sucré et fruité de fruits rouges."
    }
];
