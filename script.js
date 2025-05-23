import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { writeFile } from "fs";


const events = []
// use puppeteer stealth for extra protection when scraping

async function info() {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();

	// Set a real User-Agent to look more legit
	// await page.setUserAgent(
	// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
	// );

	// await page.waitForTimeout()

	//  const browserAgent = await browser.userAgent()
	//  console.log(browserAgent)
	// await page.goto("https://www.manutd.com/en/matches/first-team/2024-25/all", {
	// waitUntil: "networkidle2",
	// });

	await page.goto("file:///Users/clivepato/Documents/eventsinfo/test.html", {
	waitUntil: "networkidle2",
	});


				// await page.waitForTimeout(5000)
			const content = await page.content()	
	let $ = cheerio.load(content);
$ = cheerio.load($(".Matches__fixture").html())
const res = [...$('div:not([class])')];

res.forEach((res,i)=>{
	if($(res).find('.fixture-title').length && $(res).find(".team-venue").text()==='Old Trafford'){
const event = {
date:$(res).find('.fixture-title>span span.screenreader').prev().text()
}
// const x = $(res).find('.fixture-title>span span.screenreader').prev()
// console.log($(x).html())
// x.forEach(res=>console.log($(res).html()))
		console.log(event,`index is ${i+1}`,$(res).html())
	}
})

	// const content = await page.content();
	//   console.log(content); // Or use cheerio/jQuery-like scraping here
	// itemsList

	// The convention in Cheerio is to prefix the variable name with a $ to indicate that it contains a Cheerio object. This is not required, but it is a good practice to follow.
	//   const $ = cheerio.load(content)


	await browser.close();
}

info();
