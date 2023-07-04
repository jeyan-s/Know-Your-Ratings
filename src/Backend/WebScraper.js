const axios = require('axios');
const cheerio = require('cheerio'); // light weight html parsing tool
const path = require('path');
// const { default: puppeteer } = require('puppeteer');
const puppeteer = require('puppeteer'); // powerful web scraping tool
const express = require('express');
const cors = require('cors')

// CORS (Cross-Origin Resource Sharing) CORS is a security mechanism enforced by web browsers to restrict cross-origin requests.

const app = express()
app.use(cors());
app.use(express.json()); // to parse request body as JSON


app.get('/leetcode/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for Leetcode")
    try 
    {
      const result = await ScrapLeetCode(username);
      response.json(result);
    } 
    catch (error) 
    {
      response.status(500).json({ error: 'An error occurred' });
    }
  });

app.get('/codechef/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for Codechef")
    try 
    {
        const result = await ScrapCodeChef(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/codeforces/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for Codeforces")
    try 
    {
      const result = await ScrapCodeforces(username);
      response.json(result);
    } 
    catch (error) 
    {
      response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/prepbytes/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for PrepBytes")
    try 
    {
        const result = await ScrapPrepBytes(username);
        console.log(result)
        response.json(result);
    } 
    catch (error) 
    {
        console.error(error)
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/atcoder/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for Atcoder")
    try 
    {
        const result = await ScrapAtCoder(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/spoj/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for SPOJ")
    try 
    {
        const result = await ScrapSPOJ(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/hackerearth/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for HackerEarth")
    try 
    {
        const result = await ScrapHackerEarth(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/codeabbey/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for CodeAbbey")
    try 
    {
        const result = await ScrapCodeAbbey(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/interviewbit/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for InterviewBit")
    try 
    {
        const result = await ScrapInterviewBit(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/geeksforgeeks/:username', async (request, response) => {
    const username = request.params.username;
    console.log("Request given for GeeksForGeeks")
    try 
    {
        const result = await ScrapGeeksForGeeks(username);
        response.json(result);
    } 
    catch (error) 
    {
        response.status(500).json({ error: 'An error occurred' });
    }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function ScrapLeetCode(username)
{
    const url = "https://leetcode.com/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html)
    const rating = $('.text-label-1.text-2xl').first().text().replace(",", "");
    const ranking = $('.text-label-1.dark\\:text-dark-label-1.font-medium.leading-\\[22px\\]').first().text().split("/")[0].replace(",","");
    const problemSolved =  $('.text-\\[24px\\].font-medium.text-label-1.dark\\:text-dark-label-1').text().replace(",", "");
    return {'Rating' : rating, 'Ranking' : ranking, "Solved" : problemSolved};
}

async function ScrapCodeChef(username)
{
    const url = "https://codechef.com/users/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const rating = $('.rating-number').first().text();
    //const highestRating = $('.rating-header small').first().text().match(/\d+/)[0];
    const ranking = $('.inline-list strong').first().text();
    const problemSolved = $('.rating-data-section.problems-solved h5').first().text().match(/\d+/)[0];
    // const rating = $('.rating-number').each(function ()
    // {
    //     console.log($(this).text());
    // })
    // const rating = $('.rating-number').eq(4); // selects 5th element
    return {'Rating' : rating, 'Ranking' : ranking, "Solved" : problemSolved};
}

async function ScrapCodeforces(username)
{
    const url = "https://codeforces.com/profile/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    // const heading = $('[style="font-weight:bold;"]span.user-gray').each(function () 
    // {
    //     console.log($(this).text());
    // });
    const rating = $('[style="font-weight:bold;"]span.user-gray').first().text();
    //const highestRating = $('[style="font-weight:bold;"]span.user-green').eq(1).text();
    const userRank = $('.user-rank').first().text().trim()
    const problemSolved = $('._UserActivityFrame_counterValue').first().text().split(" ")[0]
    return {'Rating' : rating, 'User Rank' : userRank, "Solved" : problemSolved};
}

async function ScrapPrepBytes(username)
{
    const url = "https://mycode.prepbytes.com/profile/" + username;
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    await page.goto(url);
    const html = await page.content();
    await browser.close();
    const $ = cheerio.load(html)
    const rating = $('.UserProfileHeader-right-top-rating--text').first().text().split(" : ")[1];
    const ranking = $('.UserRanking__main-middle-container-no').first().text();
    //const score = $('.UserProfileHeader-right-top-score--text').text().split(" : ")[1]
    const problemSolved = $('.UserProblemsSolved__full-container--text').text().split(" ")[2].split("A")[0];
    return {'Rating' : rating, 'Ranking' : ranking, "Solved" : problemSolved};
}

async function ScrapAtCoder(username)
{
    const url = "https://atcoder.jp/users/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const rating = $('table.dl-table')
                                    .find('tr')
                                    .filter((index, element) => $(element).find('th').text() === 'Rating')
                                    .find('td span')
                                    .first()
                                    .text();//note this
    //const highestRating = $('span.user-gray').eq(2).text();
    const currentClass = $('span.bold').eq(1).text();
    const ranking = $('table.dl-table.mt-2').first().text().match(/\d+/)[0];
    return {'Rating' : rating, 'Class' : currentClass, "Ranking" : ranking};
}

async function ScrapSPOJ(username)
{
    const url = "https://www.spoj.com/users/" + username
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const ranking = $('.col-md-3').eq(0).find('p').eq(2).text().split(": #")[1].split(" ")[0];  // World Rank: #110411 (0 points)
    const points = $('.col-md-3').eq(0).find('p').eq(2).text().split(": #")[1].split(" ")[1].substring(1);
    const problemSolved = $('.dl-horizontal.profile-info-data.profile-info-data-stats dd').first().text();
    return {'Ranking' : ranking, 'Points' : points, "Solved" : problemSolved};
}

async function ScrapHackerEarth(username)
{
    const url = "https://www.hackerearth.com/@" + username;
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    await page.goto(url);
    const html = await page.content();
    await browser.close();
    const $ = cheerio.load(html)
    const points = $('.metric').eq(0).text().match(/\d+/)[0];
    const rating = $('.metric').eq(1).text().match(/\d+/)[0];
    const problemSolved = $('.metric').eq(2).text().match(/\d+/)[0]; 
    return {'Points' : points, 'Rating' : rating, "Solved" : problemSolved};
}

async function ScrapCodeAbbey(username)
{
    const url = "https://www.codeabbey.com/index/user_profile/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const position = $('.advheader p').text().match(/\d+/)[0];
    const rank = $('.rank.rank0').text();
    const problemSolved = $('.full-width p').first().text().match(/\d+/)[0];
    //const tops = $('.advheader p').text().split(" ")[15].split(")")[0]
    return {'Position' : position, 'Ranking' : rank, "Solved" : problemSolved};
}

async function ScrapInterviewBit(username)
{
    const url = "https://www.interviewbit.com/profile/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const rank = $('.txt').first().text();
    const score = $('.txt').eq(1).text();
    const streak = $('.txt').eq(2).text();
    return {'Rank' : rank, 'Score' : score, 'Streak' : streak}
}

async function GeeksForGeeks(username)
{
    const url = "https://auth.geeksforgeeks.org/user/" + username;
    let html = await axios.get(url);
    html = html.data;
    const $ = cheerio.load(html);
    const score = $('.score_card_value').eq(0).text();
    const streak = $('.score_card_value').eq(1).text();
    const problemSolved = $('.streakCnt.tooltipped').text().split(" ")[0];
    return {'Score' : score, 'Solved': problemSolved, 'Streak' : streak}
}

//export {ScrapLeetCode, ScrapCodeChef, ScrapCodeforces, ScrapAtCoder, ScrapSPOJ, ScrapCodeAbbey}

// (async () => {

//     // const rslt1 = await LeetCode('sasireka20cs120');
//     // console.log(rslt1); // [rating, ranking, problemSolved]

//     // const rslt2 = await CodeChef('smartie_jack');
//     // console.log(rslt2); // [rating, ranking, problemSolved]

//     // const rslt3 = await Codeforces('jeyan_s');
//     // console.log(rslt3); // [rating, userRank, problemSolved]

//     // const rslt4 = await PrepBytes('jeyannino001');
//     // console.log(rslt4); // [rating, ranking, problemSolved]

//     // const rslt5 = await AtCoder('Jack_01');
//     // console.log(rslt5); // [rating, class, globalRanking]

//     const rslt6 = await SPOJ('sasireka_13');
//     console.log(rslt6); // return [ranking, points, problemSolved]

//     // const rslt7 = await HackerEarth('sasireka.s2020cse');
//     // console.log(rslt7); // [ratings, points, problemSolved]

//     // const rslt8 = await CodeAbbey('jeyannino001')
//     // console.log(rslt8); // [position, rank, problemSolved]

// const rslt9 = await InterviewBit('Jeyan_Nino')
//     console.log(rslt9)

// })();
