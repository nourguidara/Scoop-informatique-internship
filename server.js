const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Predefined patterns and corresponding REFs
const travailPatterns = {
    '2/3/2/1/1/2/1/1/2': 'https://www.scoop.com.tn/15891-pc-sur-mesure-architecture-de-base-i5-13eme-rtx-3050-ventus-2x-xs-16go-256go-ssd.html',
    '2/3/2/2/2/1/1/2/2': 'https://www.scoop.com.tn/16077-pc-sur-mesure-architecture-recommande-ryzen-7-rtx-3060-ventus-2x-16go-512go-ssd.html',
    '3/3/1/3/3/1/1/1/4': 'https://www.scoop.com.tn/15899-pc-sur-mesure-architecture-ultra-intel-i7-13eme-rtx-4070ti-32go-512go-ssd-1to-sata.html',
    
    '2/4/1/2/2/1/1/2/4': 'https://www.scoop.com.tn/15904-pc-motion-design-sur-mesure-ryzen-7-rtx-4070ti-16go-512go-ssd-1to.html',
    '3/4/1/3/3/1/1/1/4': 'https://www.scoop.com.tn/15909-pc-motion-design-sur-mesure-i9-12eme-rtx-4070ti-32go-1to-ssd-1to.html',
    '3/4/1/3/3/1/1/1/4': 'https://www.scoop.com.tn/15913-pc-motion-design-sur-mesure-config-ultra-intel-i9-13eme-rtx-4090-ventus-64go-2-to-ssd-1to-hdd.html',
    '3/4/1/3/3/1/1/2/4': 'https://www.scoop.com.tn/16177-pc-motion-design-sur-mesure-config-ultra-amd-ryzen-9-rtx-4090-ventus-64go-2to-ssd-1to-hdd.html',
    
    '2/2/2/1/1/2/1/1/2': 'https://www.scoop.com.tn/15905-pc-modelisation-3d-minimum-performance-i5-13eme-rtx-3060-16go-500go-ssd.html',
    '2/2/2/2/2/1/1/2/3': 'https://www.scoop.com.tn/16080-pc-modelisation-3d-recommended-performance-ryzen7-rtx-4060ti-32go-1to-hdd-512go-ssd.html',
    '3/2/1/3/3/1/1/1/4': 'https://www.scoop.com.tn/15907-pc-modelisation-3d-ultra-performance-i7-13eme-rtx-4070ti-32go-1to-1to-ssd.html',
    
    '1/1/3/1/1/2/1/2/1': 'https://www.scoop.com.tn/15911-pc-de-bureau-amd-ryzen-5-5600g-16go-240go-ssd.html',
    '1/1/3/1/1/2/1/1/1': 'https://www.scoop.com.tn/16407-pc-de-bureau-alpha-optima-intel-i3-10eme-8go-256go-ssd.html',
    '1/1/3/1/1/2/1/1/1': 'https://www.scoop.com.tn/16165-pc-de-bureau-intel-i3-10eme-8go-120go-ssd.html'
};

const gamingPatterns = {
    //valorant
    '1/1/3/1/1/2/1/2': ['https://www.scoop.com.tn/15918-pc-gamer-alpha-valorant-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-240g-ssd.html',
                        'https://www.scoop.com.tn/16159-pc-gamer-cs-2-recommended-i3-12eme-rtx-3050-ventus-2x-xs-16go-512g-ssd.html',
                        'https://www.scoop.com.tn/15945-pc-gamer-fortnite-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-256go-ssd.html'],
    '2/1/3/1/2/3/1/2': ['https://www.scoop.com.tn/15937-pc-gamer-alpha-valorant-recommended-i3-13eme-rtx-3060-ventus-8go-480g-ssd.html'],
    '2/1/3/1/2/3/3/2': ['https://www.scoop.com.tn/15937-pc-gamer-alpha-valorant-recommended-i3-13eme-rtx-3060-ventus-8go-480g-ssd.html'],
    '3/1/2/1/3/3/1/2': ['https://www.scoop.com.tn/15941-pc-gamer-alpha-valorant-ultra-i5-13eme-rtx-3060-16go-500g-ssd.html'],
    '3/1/2/1/3/3/3/2': ['https://www.scoop.com.tn/15941-pc-gamer-alpha-valorant-ultra-i5-13eme-rtx-3060-16go-500g-ssd.html'],

    //CSGO
    '1/1/3/2/1/1/1/1': ['https://www.scoop.com.tn/15957-pc-gamer-cs-2-minimum-ryzen-5-8go-gtx-1650-240g-ssd.html'],
    //'1/1/3/1/2/3/1/2': ['CS GO-RECOMD'],
    '1/1/3/1/1/2/2/2': ['https://www.scoop.com.tn/16159-pc-gamer-cs-2-recommended-i3-12eme-rtx-3050-ventus-2x-xs-16go-512g-ssd.html'],
    '2/1/2/2/2/3/1/2': ['https://www.scoop.com.tn/15961-pc-gamer-cs-2-ultra-ryzen-5-rtx-3060-ventus-2x-16go-500g-ssd.html'],
    '2/1/2/2/2/3/3/2': ['https://www.scoop.com.tn/15961-pc-gamer-cs-2-ultra-ryzen-5-rtx-3060-ventus-2x-16go-500g-ssd.html'],
   
    //FC24
    //'1/4/3/1/1/3/1/2': ['Fifa23-mini'],
    '1/4/3/1/1/2/2/2': ['https://www.scoop.com.tn/15951-pc-gamer-fifa-fc-24-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-240go-ssd.html'],
    '1/4/2/1/2/3/1/2': ['https://www.scoop.com.tn/15951-pc-gamer-fifa-fc-24-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-240go-ssd.html'],
    '1/4/2/1/2/3/3/2': ['https://www.scoop.com.tn/15951-pc-gamer-fifa-fc-24-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-240go-ssd.html'],
    '3/4/2/1/3/3/1/3': ['https://www.scoop.com.tn/16076-pc-gamer-fifa-fc-24-ultra-i7-13eme-rtx-3060-ventus-2x-16go-500go-ssd.html'],
    '3/4/2/1/3/3/3/3': ['https://www.scoop.com.tn/16076-pc-gamer-fifa-fc-24-ultra-i7-13eme-rtx-3060-ventus-2x-16go-500go-ssd.html'],

    //FORTNITE[
    //'1/1/3/1/1/2/1/2': ['FORTNITE-MINI'],
    '1/1/3/1/1/2/2/2': ['https://www.scoop.com.tn/15945-pc-gamer-fortnite-minimum-i5-10eme-rtx-3050-ventus-2x-xs-8go-256go-ssd.html'],
    '3/1/2/1/3/3/1/2': ['https://www.scoop.com.tn/15946-pc-gamer-fortnite-recommended-i5-13eme-rtx-4060-ventus-2x-16go-480go-ssd.html'],
    '3/1/2/1/3/3/2/2': ['https://www.scoop.com.tn/15946-pc-gamer-fortnite-recommended-i5-13eme-rtx-4060-ventus-2x-16go-480go-ssd.html'],
    '2/1/1/1/3/3/1/3': ['https://www.scoop.com.tn/16160-pc-gamer-fortnite-ultra-i5-13eme-rtx-4060ti-ventus-2x-16go-500go-ssd.html'],
    '2/1/1/1/3/3/2/3': ['https://www.scoop.com.tn/16160-pc-gamer-fortnite-ultra-i5-13eme-rtx-4060ti-ventus-2x-16go-500go-ssd.html'],

    //GTAV[
    '1/2/3/1/1/1/1/1': ['https://www.scoop.com.tn/15967-pc-gamer-gta-5-rp-minimum-intel-i5-10eme-gtx-1650-ventus-xs-oc-8go.html'],
    '1/2/2/2/2/2/1/2': ['https://www.scoop.com.tn/15977-pc-gamer-gta-5-rp-recommended-ryzen-5-5600g-rtx-3050-ventus-16go-512g-ssd.html'],
    '1/2/2/2/2/2/2/2': ['https://www.scoop.com.tn/15977-pc-gamer-gta-5-rp-recommended-ryzen-5-5600g-rtx-3050-ventus-16go-512g-ssd.html'],
    '3/2/1/1/3/3/1/3': ['https://www.scoop.com.tn/15979-pc-gamer-gta-5-rp-ultra-i7-13eme-rtx-3060-ventus-16go-512g-ssd.html'],
    '3/2/1/1/3/3/3/3': ['https://www.scoop.com.tn/15979-pc-gamer-gta-5-rp-ultra-i7-13eme-rtx-3060-ventus-16go-512g-ssd.html'],

    //LOL
    '1/5/3/1/1/1/1/1': ['https://www.scoop.com.tn/15927-pc-gamer-league-of-legends-minimum-i3-10eme-gtx-1650-ventus-xs-oc-8go-256go-ssd.html'],
    '1/5/3/1/1/1/1/2': ['https://www.scoop.com.tn/15874-pc-gamer-league-of-legends-recomended-i5-10eme-gtx-1650-ventus-xs-oc-8go.html'],
    '1/5/3/1/1/1/2/2': ['https://www.scoop.com.tn/15874-pc-gamer-league-of-legends-recomended-i5-10eme-gtx-1650-ventus-xs-oc-8go.html'],
    '2/5/2/1/2/3/1/2': ['https://www.scoop.com.tn/15924-pc-gamer-league-of-legends-ultra-i5-13eme-rtx-3050-ventus-2x-xs-16go-256go-ssd.html'],
    '2/5/2/1/2/3/3/2': ['https://www.scoop.com.tn/15924-pc-gamer-league-of-legends-ultra-i5-13eme-rtx-3050-ventus-2x-xs-16go-256go-ssd.html'],


    //MINECRAFT
    '1/3/3/2/1/1/1/1': ['https://www.scoop.com.tn/15926-pc-gamer-minecraft-recomended-ryzen-5-5600g-16go-120go-ssd.html'],
    '1/3/3/1/1/2/1/2': ['https://www.scoop.com.tn/15928-pc-gamer-minecraft-ultra-i5-12eme-16go-gtx1650-ventus-256go-ssd.html'],
    '1/3/3/1/1/2/2/2': ['https://www.scoop.com.tn/15928-pc-gamer-minecraft-ultra-i5-12eme-16go-gtx1650-ventus-256go-ssd.html']


};

// Function to match answers to the predefined patterns
const matchPattern = (patterns, answers) => {
    console.log("collect answers",answers)
    const answerString = answers.join('/');
    return patterns[answerString] || [];
};


// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    // Log the entire req.body object for debugging
    console.log('Form data received:', req.body);

    const formId = req.body.formId;
    const patterns = formId === 'Gaming' ? gamingPatterns : travailPatterns;

    const answers = formId === 'Gaming' ? [
        req.body.questionn1,
        req.body.questionn2,
        req.body.questionn3,
        req.body.questionn4,
        req.body.questionn5,
        req.body.questionn6,
        req.body.questionn7,
        req.body.questionn8
        
        
    ] : [
        req.body.question1,
        req.body.question2,
        req.body.question3,
        req.body.question4,
        req.body.question5,
        req.body.question6,
        req.body.question7,
        req.body.question8,
        req.body.question9
    ];
   
    console.log('Collected answers:', answers);
    const answerString = answers.join('/');
    console.log('Answer string:', answerString);

   

    const refs = matchPattern(patterns, answers);



    console.log('Pattern matches:', refs);
    console.log('Pattern type:', typeof(refs));
    console.log('length:', refs.length);


   if (typeof refs === 'string') {
        
        res.redirect(refs);

    }else if(refs.length===3){

        let responseHtml = `
        <html>
            <head>
                <title>Recommendations</title>
                <style>
                    body{
                        
                        font-family: "Aclonica", sans-serif;
                       
                        height: auto;
                        width: auto;
                     
                        align-items: center;
                        margin-top: 110px;
        
                
                    }
                    .product-container {
                        display: flex;
                        flex-wrap: wrap;
                    
                        margin:104px;
                        justify-content: space-around;

                    }
                    .product-item {
                        margin: 10px;
                    }
                    .product-item img {
                        max-width: 300px;
                        max-height: 300px;
                        display: block;
                    }
                    h1{
                        color: black;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>Nos produits recommendés pour vous:</h1>
                <div class="product-container">
    `;
  
    const imageUrls = [
        'images/pc-valorant-mini.png',
        'images/pc-cs-Go-recom.png',
        'images/pc-fortnite-mini.png'
    ];
   
     //Assuming `refs` is an array of URLs
    refs.forEach((url, index) => {
        const imageUrl = imageUrls[index % imageUrls.length];  //Loop through images
        responseHtml += `
            <div class="product-item">
                <a href="${url}" style="text-decoration: none;" target="_self">
                    <img src="${imageUrl}" alt="Product Image"/>
                </a>
                <p><a href="${url}" target="_self">Consultez le Produit</a></p>
            </div>
        `;
    });

    responseHtml += `
                </div>
            </body>
        </html>
    `;

    res.send(responseHtml);
        
    } else {
        res.send(`
            <html>
                <head>
                    <title>Results</title>
                </head>
                <body>
                    <h1>No Match Found</h1>
                    <p>We could not find a product that matches your answers. Please try again.</p>
                </body>
            </html>
        `);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
