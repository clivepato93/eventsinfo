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
$ = cheerio.load($(".matches-component").html())

const res = [...$('div:not([class])')];

res.forEach((res,i)=>{
	if($(res).find('.fixture-title').length && $(res).find(".team-venue").text()==='Old Trafford'){
		const todaysDate = new Date('2025-12-31');
		const date = $(res).find('.fixture-title>span span.screenreader').prev().text();
		const title = $(res).find('.first-team .team__name').text().replace(/[^\w0-9]{2,}/,' ')+' '+$(res).find('.second-team .team__name').text().trim();
		const time = $(res).find('.match').text();

		let year;
		if(/Jan/i.test(date) && todaysDate.getMonth()==11){
			year=todaysDate.getFullYear()+1
		}
		else{
			year=todaysDate.getFullYear()
		}

		console.log({
			date,title,time,year
		})
// const event = {
// date:$(res).find('.fixture-title>span span.screenreader').prev().text(),
// title:$(res).find('.first-team .team__name').text().replace(/[^\w0-9]{2,}/,' ')+' '+$(res).find('.second-team .team__name').text().trim(),
// time:$(res).find('.match').text(),
// year:new Date().getFullYear(),
// }
// events.push(event)

		console.log(`index is ${i+1}`,
		// .replace(/[\n\t]/g,'')
		// event,
		// new Date(event.date)
	)
	}
	// console.log(events)
})

	await browser.close();
}

info();
// console.log(events)
