/*
 *@author Andrew Basore
 * Config file for application
 *        
 */


// Container for config object
const config = {};

// Attach hardcoded projects to configt
config.projects = [

    {
        imgURL: 'https://kek.gg/i/3cTs5c.jpg',
        name: 'Portfolio',
        description: 'This portfolio! Check out the code below :-)',
        href: 'https://codepen.io/AndrewBasore/full/jLjXzw/',
        backgroundImage: 'https://kek.gg/i/3cTs5c.jpg',
        code: 'https://github.com/AndrewBasore/Portfolio'
    },
    {
        imgURL: 'https://kek.gg/i/4ztwrX.jpg',
        name: 'E-Commerce',
        description: 'Mock E-Commerce Page that sells fictional boats',
        href: 'http://shipping-ships.herokuapp.com/products',
        backgroundImage: 'https://kek.gg/i/4ztwrX.jpg',
        code: 'https://github.com/AndrewBasore/ShippingShips'
    }, {
        imgURL: 'https://kek.gg/i/5tkK6d.png',
        name: 'Dashboard',
        description: 'A sentiment analysis dashboard that analyses multiple media',
        href: 'https://sentimentum.herokuapp.com/home',
        backgroundImage: 'https://kek.gg/i/5tkK6d.png',
        code: 'https://github.com/AndrewBasore/sentiNote'
    }, {
        imgURL: 'https://kek.gg/i/3tq9cr.png',
        name: 'Tribute',
        description: 'Tribute Page for Reghar Earthfury, Gladiator of the Nexus',
        href: 'https://codepen.io/basor1aj/full/bpWpWQ',
        backgroundImage: 'https://kek.gg/i/3tq9cr.png',
        code: 'https://codepen.io/basor1aj/pen/bpWpWQ'
    }, {
        imgURL: 'https://kek.gg/i/wjVb9.png',
        name: 'Wikipedia',
        description: 'Small viewer for wikipedia searches',
        href: 'https://codepen.io/AndrewBasore/full/mBjYNg/',
        backgroundImage: 'https://kek.gg/i/wjVb9.png',
        code: 'https://codepen.io/AndrewBasore/pen/mBjYNg'
    }, {
        imgURL: 'https://kek.gg/i/8cgvN.png',
        name: 'Quotes',
        description: 'Random Quote Generator',
        href: 'https://codepen.io/AndrewBasore/full/jLjXzw/',
        backgroundImage: 'https://kek.gg/i/8cgvN.png',
        code: 'https://codepen.io/AndrewBasore/pen/jLjXzw/'
    },
]



// Export the module
module.exports = config;