const fs = require('fs');
const cheerio = require("cheerio");
const axios = require("axios");
url = "";

fs.readFile('src/Scraper/esg_data.txt', 'utf-8', (err, data) => {
    if (err)
    {
        console.error("An error occured while reading the file: ", err);
        return;
    }

    console.log(data);
    url = data;
    console.log("this is the received url:");
    console.log(url);
    getEsg();
});

async function getEsg()
{
    try
    {
        const response = await axios.get(url);
        const $=cheerio.load(response.data);
        const esg = $("div.col-6.risk-rating-score span").text().trim();
        
        console.log("The scraped esg value is: ", esg);
    }
    catch(error)
    {
        console.error("There was a problem scraping that data: ", error);
    } 
}