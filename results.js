/* =====================================================================
   MIDTERMS 2026 ANALYSIS LAB – RESULTS FILE
   This is the only file that changes after election night.
   status: "pending" (no results yet) | "partial" (some races open) | "final"
   Use null for anything that is not known / not called yet.
   ===================================================================== */
window.RESULTS = {
  status: "partial",
  asOf: "5 Nov 2026, 1:08 a.m. ET (7:08 a.m. German time)",
  sources: [
    {t:"NBC News: Senate results (5 Nov, 1:08 a.m. ET)", url:"https://www.nbcnews.com/politics/2026-elections/senate-results"},
    {t:"NBC News: House results and Decision Desk projection (5 Nov, 1:08 a.m. ET)", url:"https://www.nbcnews.com/politics/2026-elections/house-results"},
    {t:"NBC News: Governor results (5 Nov, 1:08 a.m. ET)", url:"https://www.nbcnews.com/politics/2026-elections/governor-results"},
    {t:"NBC News: Democrats clinch a majority of governorships", url:"https://nbcnews.com/politics/2026-election/democrats-flip-governorships-extending-party-inroads-red-states-rcna607010"},
    {t:"PBS NewsHour: AP Voter Poll – how key groups voted in 2026", url:"https://www.pbs.org/newshour/politics/ap-voter-poll-how-key-demographic-groups-voted-in-the-2026-midterms"},
    {t:"CIRCLE (Tufts): youth vote choice in 2026", url:"https://circle.tufts.edu/youth-vote-choice-demographics-2026-midterms"},
    {t:"Michael McDonald: preliminary 2026 turnout rate", url:"https://michaelmcdonald.substack.com/p/preliminary-2026-turnout-rate"},
    {t:"Texas Tribune: Texas GOP's gerrymander backfires", url:"https://www.texastribune.org/2026/11/03/texas-congress-us-house-redistricting-elections-2026/"},
    {t:"Forbes: Vance blames Republican losses on Iran war", url:"https://www.forbes.com/sites/conormurray/2026/11/04/vance-blames-republican-midterm-losses-on-iran-war-everyone-knows-why-we-lost/"},
    {t:"The Hill: Trump says Iran war partially to blame", url:"https://thehill.com/homenews/campaign/6197073-donald-trump-gop-losses-2026-midterms-iran-war/"},
    {t:"270toWin: uncalled House races (4 Nov)", url:"https://www.270towin.com/news/2026/11/04/the-morning-after-uncalled-house-races_1847.html"}
  ],

  // Before the election (for comparison) – Forecast Lab, 31 Oct 2026
  before: { senate: {D:47, R:53}, house: {D:214, R:219, vacant:2} },

  // Totals after the election (D incl. the independents who caucus with Democrats)
  senate: { D:54, R:44, I:0, open:2 },          // open: Alaska, Mississippi
  house:  { D:242, R:151, open:42,              // seats called so far (NBC, 5 Nov, 1:08 a.m. ET)
            proj: {D:259, R:176, src:"NBC News Decision Desk estimate"} },
  turnout: 49.4,                                // preliminary, % of eligible voters (McDonald)

  // The 11 battleground Senate races from the Forecast Lab
  races: { AK:null, GA:"D", IA:"D", KS:"D", ME:"D", MI:"D", NE:"R", NH:"D", NC:"D", OH:"D", TX:"D" },

  governors: [
    {st:"Texas", winner:"D", name:"Gina Hinojosa (beat Gov. Greg Abbott)", flip:true},
    {st:"Georgia", winner:"D", name:"Keisha Lance Bottoms", flip:true},
    {st:"Ohio", winner:"D", name:"Amy Acton (beat Vivek Ramaswamy)", flip:true},
    {st:"Iowa", winner:"D", name:"Rob Sand", flip:true},
    {st:"Nevada", winner:"D", name:"Aaron Ford (beat Gov. Joe Lombardo)", flip:true},
    {st:"Arizona", winner:"D", name:"Katie Hobbs (re-elected)", flip:false},
    {st:"Michigan", winner:"D", name:"Jocelyn Benson", flip:false},
    {st:"Wisconsin", winner:"D", name:"David Crowley", flip:false},
    {st:"Pennsylvania", winner:"D", name:"Josh Shapiro (re-elected)", flip:false},
    {st:"Kansas", winner:null, name:"too close to call: Holscher (D) 50.3 %, Masterson (R) 49.7 %", flip:false}
  ],

  ticker: [
    {t:"Thu 07:00", text:"<b>Morning update:</b> House count Democrats 242, Republicans 151, 42 seats still uncalled. NBC News now projects about 259–176 – a Democratic gain of more than 40 seats."},
    {t:"Thu 07:00", text:"Still open in the Senate: <b>Mississippi</b> (Colom, D, 49.0 % – Hyde-Smith, R, 48.9 %, 96 % counted) and <b>Alaska</b> (Peltola, D, 48.2 % – Sullivan, R, 47.9 %, 76 % counted). Senate stands at 54–44."},
    {t:"Thu 07:00", text:"Kansas governor race still too close to call: Holscher (D) 50.3 %, Masterson (R) 49.7 %."},
    {t:"Wed 12:30", text:"House count at midday Wednesday: Democrats 236, Republicans 146, 53 seats uncalled. The projected Democratic total (about 258–259) would be the most Democratic House seats since 1993."},
    {t:"Wed", text:"Vice President JD Vance on X: <i>“The reason we lost is the war.”</i> Trump told the WSJ high fuel costs were the biggest factor and the war <i>“a piece of it”</i> – and told the NYT he would <i>“do that again”</i>."},
    {t:"Wed", text:"Texas “dummymander”: the 2025 map was drawn to win five more seats for Republicans – they flipped only one target and lost two seats of their own (Texas Tribune, counting continues)."},
    {t:"Wed", text:"AP calls Michigan for Abdul El-Sayed (52.5 %) over Mike Rogers – the first Muslim American elected to the US Senate."},
    {t:"Wed", text:"Preliminary turnout: about 49.4 % of eligible voters – the second-highest midterm turnout since 1914 (Michael McDonald)."},
    {t:"Wed 01:24", text:"AP calls the House for the Democrats."},
    {t:"Tue night", text:"Democrats win the Senate: net gain of seven seats (Iowa, Kansas, Maine, North Carolina, Ohio, South Carolina, Texas). Alaska and Mississippi are too close to call."},
    {t:"Tue night", text:"James Talarico beats Ken Paxton in Texas, 55 to 43 per cent – the first statewide win for a Democrat in Texas since 1994."},
    {t:"Tue night", text:"Republicans hold Nebraska: Sen. Pete Ricketts beats independent Dan Osborn 50.4 to 43.7 per cent. Florida's Senate seat also stays Republican."},
    {t:"Tue night", text:"Democrats flip five governorships, including Texas and Georgia, and now hold a majority of governorships for the first time in 16 years."}
  ],

  // AP Voter Poll 2026. margin = Democratic lead in points (approximate: “about 7 in 10” etc.)
  exit: {
    source: "AP Voter Poll 2026, approx.",
    groups: { latino:27, young:40, suburban:null, women:null, men:null, noncollege:null },
    issues: [ {issue:"Economy", pct:40}, {issue:"State of democracy", pct:30}, {issue:"Immigration", pct:10}, {issue:"Health care", pct:10} ]
  },

  notes: {
    s1: `<p><b>AP Voter Poll:</b> about 6 in 10 voters disapproved of Trump. About <b>4 in 10</b> said their vote was meant to express <b>opposition</b> to him, just under <b>2 in 10 support</b> – and about 4 in 10 said he was <b>not a factor</b>.</p>
<p><b>Seats:</b> NBC News projects about 176 Republican House seats, compared with 219 before the election – a loss of roughly <b>40</b>, close to Gallup's average of 37 for unpopular presidents (see the diamond in the chart). In the Senate, Republicans lost seven seats net.</p>
<p><b>Trump's own explanation</b> (NYT interview): Republicans lost because he was not on the ballot. Compare this with his strategy “pretend I'm on the ballot”.</p>`,
    s2: `<p><b>Top issue:</b> about <b>4 in 10</b> voters named the economy as the most important issue facing the country (AP Voter Poll); roughly half called the <b>cost of living</b> “crucial” to their vote – about 6 in 10 among voters with incomes under $50,000.</p>
<p><b>Explanations from the losing side:</b> Trump told the Wall Street Journal that <b>high fuel costs</b> were the biggest factor; Vice President Vance blamed <b>the Iran war</b> (“The reason we lost is the war”). Other Republicans pointed to tariffs.</p>
<p>Note that about 3 in 10 voters named the <b>state of democracy</b> as their top issue – the economy was important, but it was not the only story.</p>`,
    s3: `<p><b>Young voters:</b> about <b>7 in 10</b> voters under 30 backed the Democratic House candidate – in 2024 they were roughly split (AP Voter Poll). CIRCLE: <b>58 %</b> of young men voted Democratic; in 2024, 56 % of them had backed Trump.</p>
<p><b>Latino voters:</b> about <b>6 in 10</b> voted Democratic, about a third Republican (2024: roughly 4 in 10 for Trump). About 7 in 10 Latino voters said Trump's policies had made the economy worse. In Texas, the Texas Tribune concludes, Latinos “did not vote … the way they did” in 2024.</p>
<p><b>Realignment or protest?</b> Vance argued that many Trump 2024 voters did turn out – but voted Democratic. Use this as evidence in the sorter.</p>`,
    s4: `<p><b>The Texas map backfired:</b> drawn to win up to five more seats for Republicans, it delivered only one target, while Republicans lost two seats they already held (Texas Tribune; still counting). A political scientist called it “a dummymander instead of a gerrymander”.</p>
<p><b>Turnout:</b> about <b>49.4 %</b> of eligible voters (preliminary) – the second-highest midterm turnout since 1914, close to 2018.</p>
<p><b>Counting takes time:</b> 42 House seats were still uncalled early on Thursday; Alaska's House race may need a ranked-choice count on 18 November, and Mississippi's Senate race was separated by just 0.1 points (49.0 to 48.9 %).</p>`,
    s5: `<p><b>Where Republicans held:</b> Nebraska (Ricketts beat the independent Osborn by almost 7 points), Florida's Senate seat, and – still too close to call – Alaska and Mississippi. Several close House seats were also still open.</p>
<p><b>The border</b> did not decide the vote: only about <b>1 in 10</b> voters named immigration as the top issue (AP Voter Poll).</p>
<p><b>The Republican debate has begun:</b> Vance blames the Iran war, Trump fuel prices and his own absence from the ballot; other Republicans cite tariffs, the White House ballroom project and weak candidates. Which explanation is the most convincing – and which is the most convenient?</p>`,
    s6: `<p><b>Careful:</b> there are no reliable data yet on how much online campaigning changed the result. What we do know: the group that uses social media most – voters under 30 – swung furthest towards the Democrats (about 7 in 10, AP Voter Poll), but they made up only about <b>1 in 10</b> voters.</p>
<p>Trump's direct-to-followers strategy (“pretend I'm on the ballot” vlogs) did not prevent heavy losses; afterwards he said Republicans lost because he was not on the ballot. Discuss: does that show the limits of a personal online brand?</p>`,
    s7: `<p><b>Money vs. result:</b> Elon Musk's largest donation ($158 million) went to the main Republican Senate super PAC – Republicans still lost seven Senate seats net. A super PAC he funded with $10 million backed <b>Ken Paxton</b> in Texas, who lost by about <b>12 points</b>.</p>
<p>In his victory speech, Talarico presented his win as a victory of the people over big money (see the bonus video).</p>
<p><b>But:</b> research suggests money matters most in low-profile races and primaries. In a national wave, it may simply not be enough. Results for the AI and crypto super PACs' candidates are not yet analysed.</p>`
  }
};
