import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { writeFile } from "fs";

// axios.get('https://tickets.lancashirecricket.co.uk/content/', {
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
//     'Accept-Language': 'en-US,en;q=0.9',
//     'Referer': 'https://google.com',
//   }
// }).then(res => console.log(res.data))
//   .catch(err => console.log(err.response.status, err.response.statusText));

async function info() {
	// const browser = await puppeteer.launch({ headless: 'new' });
	// const page = await browser.newPage();

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
	// await page.waitForTimeout(5000)

	// await page.goto('https://tickets.lancashirecricket.co.uk/content', { waitUntil: 'networkidle2' });

	// const content = await page.content();
	//   console.log(content); // Or use cheerio/jQuery-like scraping here
	// itemsList

	// The convention in Cheerio is to prefix the variable name with a $ to indicate that it contains a Cheerio object. This is not required, but it is a good practice to follow.
	//   const $ = cheerio.load(content)

	let $ = cheerio.load(
		'<div class="matches-component"><div class="Matches__fixture"><div class="Matches__time-title"><h2>May 2025</h2></div><div><div class="fixture-title" id="2512250"><span><span>Wed 21 May</span><span class="screenreader">planned match</span></span><span>|</span><span>UEFA Europa League</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/180/767112/Tottenham_Hotspur_Crest_Comp_180x1801550155045146.png" alt="" title=""></span><span class="team__name ">Spurs<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">20:00</span></p></li></ul><p class="team-venue">San Mamés</p><div class="fixture-channels"></div></div></div></div></div><div><div class="fixture-title" id="2444844"><span><span>Sun 25 May</span><span class="screenreader">planned match</span></span><span>|</span><span>English Premier League</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/192/770091/Aston_Villa_Crest_Comp_180x1801718701439029.png" alt="" title=""></span><span class="team__name ">Aston Villa</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">16:00</span></p></li></ul><p class="team-venue">Old Trafford</p><div class="fixture-channels"><div class="fixture-link"><a href="https://tickets.manutd.com/en-GB/categories/home-tickets" aria-describedby="2444844"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div><div><div class="fixture-title" id="2553064"><span><span>Wed 28 May</span><span class="screenreader">planned match</span></span><span>|</span><span>Hybrid Friendlies</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/21/228/1434802/ASEAN_All_Stars_comp_180x1801744622696323.png" alt="" title=""></span><span class="team__name ">ASEAN All-Stars<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">13:45</span></p></li></ul><p class="team-venue">Bukit Jalil National Stadium</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.manutd.com/en/Tour2025AlertsMalaysia?source=MUEditorial&amp;channel=MUWebsite&amp;medium=Post1" aria-describedby="2553064"><span>Tour 2025</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div><div><div class="fixture-title" id="2553065"><span><span>Fri 30 May</span><span class="screenreader">planned match</span></span><span>|</span><span>Hybrid Friendlies</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/21/228/1434801/Hong_Kong_comp_180x1801744622768119.png" alt="" title=""></span><span class="team__name ">Hong Kong, China<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">13:00</span></p></li></ul><p class="team-venue">Hong Kong Stadium</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.manutd.com/en/Tour2025AlertsHongKong?source=MUEditorial&amp;channel=MUWebsite&amp;medium=Post1" aria-describedby="2553065"><span>Tour 2025</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div></div><div class="Matches__fixture"><div class="Matches__time-title"><h2>July 2025</h2></div><div><div class="fixture-title" id="2515592"><span><span>Sat 19 Jul</span><span class="screenreader">planned match</span></span><span>|</span><span>Friendly</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/179/766947/Leeds_Crest_comp_180x1801682090492820.png" alt="" title=""></span><span class="team__name ">Leeds</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">14:00</span></p></li></ul><p class="team-venue">Strawberry Arena</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.ticketmaster.se/event/manchester-united-leeds-united-biljetter/956494681" aria-describedby="2515592"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div><div><div class="fixture-title" id="2514153"><span><span>Sun 27 Jul</span><span class="screenreader">planned match</span></span><span>|</span><span>Premier League Summer Series</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/180/767129/West_Ham_United_Crest_Comp_180x1801550155546987.png" alt="" title=""></span><span class="team__name ">West Ham</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">00:00</span></p></li></ul><p class="team-venue">MetLife Stadium</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.ticketmaster.com/2025-premier-league-summer-series-east-rutherford-new-jersey-07-26-2025/event/0000625BDC606792" aria-describedby="2514153"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div><div><div class="fixture-title" id="2514151"><span><span>Thu 31 Jul</span><span class="screenreader">planned match</span></span><span>|</span><span>Premier League Summer Series</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/179/766793/Bournemouth_Crest_Comp_180x1801550138851194.png" alt="" title=""></span><span class="team__name ">Bournemouth</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">02:30</span></p></li></ul><p class="team-venue">Soldier Field</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.ticketmaster.com/2025-premier-league-summer-series-chicago-illinois-07-30-2025/event/04006265BE8B1360" aria-describedby="2514151"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div></div><div class="Matches__fixture"><div class="Matches__time-title"><h2>August 2025</h2></div><div><div class="fixture-title" id="2514156"><span><span>Sun 03 Aug</span><span class="screenreader">planned match</span></span><span>|</span><span>Premier League Summer Series</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/179/766854/Everton_Crest_Comp_180x1801550158812653.png" alt="" title=""></span><span class="team__name ">Everton</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">22:00</span></p></li></ul><p class="team-venue">Mercedes-Benz Stadium</p><div class="fixture-channels"><div class="fixture-link"><a href="https://www.ticketmaster.com/2025-premier-league-summer-series-atlanta-georgia-08-03-2025/event/0E00625BBFF253F2" aria-describedby="2514156"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div><div><div class="fixture-title" id="2554153"><span><span>Sat 09 Aug</span><span class="screenreader">planned match</span></span><span>|</span><span>Friendly</span></div><div><div class="Matches__fixture"><div class="fixture-details  " tabindex="0" aria-expanded="false"><div class="accord-btn"><span><i class="icon-down"></i></span></div><ul><li class="first-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" alt="" title=""></span><span class="team__name manu-normal">Man Utd<span class="screenreader"> versus</span></span></li><li class="second-team"><span><img src="//assets.manutd.com/AssetPicker/images/0/0/11/179/766905/Fiorentina_Crest_Comp_180x1801659968190003.png" alt="" title=""></span><span class="team__name ">Fiorentina</span></li><li class="fixture-score"><p><span class="screenreader">time </span><span class="match">12:45</span></p></li></ul><p class="team-venue">Old Trafford</p><div class="fixture-channels"><div class="fixture-link"><a href="https://tickets.manutd.com/en-GB/events/manchester%20united%20v%20acf%20fiorentina/2025-8-9_12.45/old%20trafford?hallmap" aria-describedby="2554153"><span>TICKET INFO</span><i class="tag-red-arrow"></i></a></div></div></div></div></div></div></div><div class="btn-wrapper"></div><p class="matches-note"><i class="icon-information"></i>Note: All fixtures are subject to change</p><div class="matches__nav bottom-filter"><nav aria-label="Season"><ul class="matches__mainList"><li class="active"><a class="link" href="https://www.manutd.com/en/matches/first-team/2024-25/all" aria-current="true">2024-25</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2023-24/all" aria-current="false">2023-24</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2022-23/all" aria-current="false">2022-23</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2021-22/all" aria-current="false">2021-22</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2020-21/all" aria-current="false">2020-21</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2019-20/all" aria-current="false">2019-20</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2018-19/all" aria-current="false">2018-19</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2017-18/all" aria-current="false">2017-18</a></li><li><a class="link" href="https://www.manutd.com/en/matches/first-team/2016-17/all" aria-current="false">2016-17</a></li></ul></nav></div></div>'
	);
	const query = $(".Matches__fixture").first().html();
	//  const query = $(".Matches__fixture").html();

	$ = cheerio.load(query);
	// console.log($.html())
	const search = [...$("div :not([class])")];

	search.forEach((match) => {
		// if ($(match).find(".team-venue").text() == "Old Trafford") {
				// console.log(m.html(),'\n')
		// 	console.log($(match).parents().html());
		// }
		console.log($(match).html())
	});
	// console.log(next.html())
	// console.log($.html())
	// const test = [...$("div  .team-venue:contains('Old Trafford')")]
	// console.log(test)
	// test.forEach(match=>{
	// 	console.log($(match).html())}
	// )
	// const res  = cheerio.load(query)
	// console.log(res.html())
	// const query = $(".matches-component .Matches__fixture .fixture-title");
	// const currentMonth = cheerio.load(query)
	// console.log(currentMonth)
	// console.log(query)
	// const matches = ;
	// console.log(matches)

	// 	query.forEach(match=>{
	// 		const m = cheerio.load(match)
	//  console.log(m.html(),'\n')
	// console.log($('.team-venue').text())
	// if($(".team-venue:contains('Old Trafford')").length){
	// 	console.log(m.html(),'\n')

	// }
	// console.log($(match).html())
	// })

	// console.log($query, $query.length)

	// await browser.close();
}

info();
