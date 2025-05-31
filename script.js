import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { writeFile } from "fs";
import { differenceInDays } from "date-fns";

const events = [];
// use puppeteer stealth for extra protection when scraping

async function info() {
	let prevEvent = {}
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();

	// Set a real User-Agent to look more legit
	await page.setUserAgent(
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
	);

	// await page.waitForTimeout()

	//  const browserAgent = await browser.userAgent()
	//  console.log(browserAgent)
	// await page.goto("https://www.manutd.com/en/matches/first-team/2024-25/all", {
	// waitUntil: "networkidle2",
	// });

	// await page.goto("file:///Users/clivepato/Documents/eventsinfo/test.html", {
	// 	waitUntil: "networkidle2",
	// });

	// await page.waitForTimeout(5000)
	let content;
	let $;
	let res;
	// let content = await page.content();
	// let $ = cheerio.load(content);
	// let res = []
	// $ = cheerio.load($(".matches-component").html());

	// let res = [...$("div:not([class])")];

	// res.forEach((res, i) => {
	// 	if (
	// 		$(res).find(".fixture-title").length &&
	// 		$(res).find(".team-venue").text() === "Old Trafford"
	// 	) {
	// 		const todaysDate = new Date();
	// 		const date = $(res)
	// 			.find(".fixture-title>span span.screenreader")
	// 			.prev()
	// 			.text();
	// 		const title =
	// 			$(res)
	// 				.find(".first-team .team__name")
	// 				.text()
	// 				.replace(/[^\w0-9]{2,}/, " ") +
	// 			" " +
	// 			$(res).find(".second-team .team__name").text().trim();
	// 		const time = $(res).find(".match").text();
	// 		const venue = $(res).find(".team-venue").text();
	// 		let year;
	// 		if (/Jan/i.test(date) && todaysDate.getMonth() == 11) {
	// 			year = todaysDate.getFullYear() + 1;
	// 		} else {
	// 			year = todaysDate.getFullYear();
	// 		}

	// 		events.push({ date, title, time, year, venue });
	// 	}
	// });
	// checking the man utd ticket section for events
	// await page.goto("file:///Users/clivepato/Documents/eventsinfo/test2.html", {
	// 	waitUntil: "networkidle2",
	// });
	// content = await page.content();

	// $ = cheerio.load(content);
	// res = [...$(".dataItem")];
	// res.forEach((item) => {
	// 	const venue = $(item).find("#eventhallname").text();
	// 	if (/Old Trafford/.test(venue)) {

	// 		const todaysDate = new Date();
	// 		const date =
	// 			$(item).find("#day3").text() + " " + $(item).find("#cal").text();
	// 		const title = $(item)
	// 			.find(".small_text_d.name")
	// 			.text()
	// 			.replace("Manchester United", "Man Utd")
	// 			.replace(" v ", " versus ")
	// 			.trim();
	// 		const time = $(item).find("#kickoff").text();
	// 		const venue = $(item).find("#eventhallname").text().trim();

	// 		let year;
	// 		if (/Jan/i.test(date) && todaysDate.getMonth() == 11) {
	// 			year = todaysDate.getFullYear() + 1;
	// 		} else {
	// 			year = todaysDate.getFullYear();
	// 		}
	
	// 		const filtered = [];
	// 		for (let i = 0; i < events.length; i++) {
	// 			const query = / for /.test(events[i].title)
	// 				? events[i].title.split(" for ")
	// 				: events[i].title.split(" versus ");
			

	// 			if(prevEvent.title===undefined){
	// 				prevEvent={date,title,time,venue,year}
	// 			}
	// 			if (

	// 			 events[i].date==date == false &&
	// 				events[i].time==time == false
	// 			) 


	// 			{
	// 				filtered.push({title,date,venue,time,year});
	// 									prevEvent={date,title,time,venue,year}

	// 			}
				
				
	// 		}
	// 		if(filtered.length==events.length){
	// 			events.push({title,date,venue,time,year})
	// 		}
		
	// 	}
	// });

	// await page.goto("file:///Users/clivepato/Documents/eventsinfo/cricket.html", {
	// 	waitUntil: "networkidle2",
	// });
	// content = await page.content();

	// $ = cheerio.load(content);
	// res = [...$(".fixture_group>li")];

	// res.forEach((item, i) => {
	// 	// console.log($(item).html())
	// 	if (
	// 		$(item).find("li>a>div.columns:nth-child(3) .heading").text().trim() ==
	// 		"Emirates Old Trafford"
	// 	) {
	// 		const date = $(item)
	// 			.find("span.sub_heading:first")
	// 			.text()
	// 			.trim()
	// 			.replace(/[^\w0-9]{2,}/, " - ");
	// 		const time = $(item).find("div.sub_heading:first").text();
	// 		const venue = $(item)
	// 			.find("li>a>div.columns:nth-child(3)>span.heading")
	// 			.text()
	// 			.trim();
	// 		// const event = $(item).find(".columns span.team-name:first").text()
	// 		// + ' '+ $(item).find(".collapse span.team-name:nth-child(2)").text()
	// 		const event =
	// 			$(item).find(".columns span.team-name:first").text().trim() +
	// 			" versus " +
	// 			$(item)
	// 				.find(".columns:nth-child(2)>span.team-name:nth-child(2)")
	// 				.text().trim();
	// 		events.push({event,date,venue,time})
	// 	}
	// });

	await page.goto("file:///Users/clivepato/Documents/eventsinfo/crickettickets.html", {
		waitUntil: "networkidle2",
	});
	content = await page.content();

	$ = cheerio.load(content);
	// $ = cheerio.load($(".stx-Section-Intnl").html())
	// console.log($.html())
	// res = $("div.stx-Section-Intnl",);
	res = [...$('div.stx-Section-Intnl').find(".stx-ProductCard")]
	const links = []
	console.log(res.length)
	res.forEach((item, i) => {
	// extract info
	// $ = cheerio.load(item);
	// next is to go through each link to extract the data.
	const url = $(item).extract({links:{selector:'a',value:'href'}})
	links.push(url.links.value)
	});
	

	// console.log(events);
	await browser.close();
}

info();
