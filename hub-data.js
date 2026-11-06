/* Shared hub data: the desktop page and the phone app both read this file. Edit links here once. */
(function(){
const A = id => "https://claude.ai/artifact/" + id;
const esc = s => String(s).replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const I = {
  chart:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="m8 15 3-4 3 2 5-6"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c2.5 0 5 1.5 5 4"/>',
  score:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h3M8 16h6M8 8h8"/>',
  hire:'<circle cx="10" cy="8" r="3.5"/><path d="M3 20c0-3.5 3-6 7-6"/><path d="M17 14v6M14 17h6"/>',
  ledger:'<path d="M5 4h11l3 3v13H5z"/><path d="M9 10h6M9 14h6M9 18h3"/>',
  pay:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7 12h.01M17 12h.01"/>',
  refund:'<path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v4h4"/><path d="M12 8v8M10 10h3a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3h3"/>',
  backup:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  growth:'<path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/>',
  ads:'<path d="M4 10v4l11 5V5z"/><path d="M15 9a3 3 0 0 1 0 6"/><path d="M7 15v4"/>',
  swap:'<path d="M4 8h13l-3-3"/><path d="M20 16H7l3 3"/>',
  tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  route:'<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
  doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h4"/>',
  ladder:'<path d="M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10"/>',
  wallet:'<path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z"/><path d="M4 7V6a2 2 0 0 1 2-2h10"/><circle cx="16" cy="13.5" r="1.2"/>',
  fit:'<path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"/>',
  plane:'<path d="M2 16 22 8l-4 10-5-3-3 4v-5z"/>',
  page:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  books:'<path d="M5 4h4v16H5zM10 4h4v16h-4z"/><path d="m15 5 3.5-1 3 15-3.5 1z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'
};
const ART = {
  wbr:`<svg viewBox="0 0 300 160" preserveAspectRatio="none"><defs><linearGradient id="gw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--c)" stop-opacity=".55"/><stop offset="1" stop-color="var(--c)" stop-opacity="0"/></linearGradient></defs>${[38,52,46,64,58,80,74,96,90,118,112,134].map((h,i)=>`<rect x="${i*25+4}" y="${160-h}" width="15" height="${h}" rx="4" fill="url(#gw)"/>`).join("")}<path d="M10 118 L35 104 L60 110 L85 92 L110 98 L135 78 L160 84 L185 62 L210 68 L235 44 L260 50 L285 28" fill="none" stroke="var(--c)" stroke-width="2.5" stroke-linecap="round"/><circle cx="285" cy="28" r="5" fill="var(--c)"/><circle cx="285" cy="28" r="11" fill="var(--c)" opacity=".2"/></svg>`,
  ledger:`<svg viewBox="0 0 300 160" preserveAspectRatio="none"><defs><linearGradient id="gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--c)" stop-opacity=".45"/><stop offset="1" stop-color="var(--c)" stop-opacity="0"/></linearGradient></defs>${[30,60,90,120].map(y=>`<line x1="0" x2="300" y1="${y}" y2="${y}" stroke="var(--c)" stroke-opacity=".12"/>`).join("")}<path d="M0 130 C40 120 60 96 100 100 S160 70 200 64 S260 36 300 30 L300 160 L0 160Z" fill="url(#gl)"/><path d="M0 130 C40 120 60 96 100 100 S160 70 200 64 S260 36 300 30" fill="none" stroke="var(--c)" stroke-width="2.5"/><path d="M0 146 C50 142 90 138 130 132 S220 124 300 112" fill="none" stroke="var(--c)" stroke-opacity=".45" stroke-width="1.6" stroke-dasharray="4 5"/></svg>`,
  growth:`<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMax meet">${[70,52,34,16].map((r,i)=>`<circle cx="150" cy="120" r="${r}" fill="var(--c)" fill-opacity="${.08+i*.07}"/>`).join("")}<path d="M40 150 L80 112 L106 128 L150 70" fill="none" stroke="var(--c)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M132 70 H150 V88" fill="none" stroke="var(--c)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  wallet:`<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMax meet"><rect x="70" y="40" width="120" height="76" rx="12" fill="var(--c)" fill-opacity=".14" stroke="var(--c)" stroke-opacity=".5" transform="rotate(-10 130 78)"/><rect x="56" y="66" width="130" height="84" rx="14" fill="var(--c)" fill-opacity=".22" stroke="var(--c)" stroke-width="1.5"/><rect x="148" y="94" width="38" height="26" rx="8" fill="var(--c)" fill-opacity=".35"/><circle cx="162" cy="107" r="4" fill="var(--c)"/></svg>`,
  coins:`<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMax meet">${[0,1,2,3].map(i=>`<ellipse cx="140" cy="${138-i*16}" rx="44" ry="12" fill="var(--c)" fill-opacity="${.12+i*.06}" stroke="var(--c)" stroke-opacity=".5"/>`).join("")}<path d="M60 60 a30 30 0 1 1 6 18" fill="none" stroke="var(--c)" stroke-width="3" stroke-linecap="round"/><path d="M58 50 v14 h14" fill="none" stroke="var(--c)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  talk:`<svg viewBox="0 0 200 160" preserveAspectRatio="xMaxYMax meet"><rect x="40" y="40" width="110" height="64" rx="16" fill="var(--c)" fill-opacity=".14" stroke="var(--c)" stroke-opacity=".5"/><path d="M60 104 l-8 18 24-18" fill="var(--c)" fill-opacity=".14"/><rect x="90" y="84" width="104" height="60" rx="16" fill="var(--c)" fill-opacity=".26" stroke="var(--c)" stroke-width="1.5"/>${[0,1,2].map(i=>`<circle cx="${122+i*20}" cy="114" r="4" fill="var(--c)"/>`).join("")}</svg>`
};
const BENTO = [
  {t:"Glosswerks WBR", id:"1d9tyM3mGY2KJwkuDh1MCc", c:"--c-ops", k:"Weekly business review", d:"KPIs you screen-share in Monday's WBR. The week lands early Sunday.", tags:["Monday","Pinned"], art:"wbr", i:"chart", big:true},
  {t:"Glosswerks Ledger", id:"5h4Ua2yT3TubFwbXRFGkko", c:"--c-money", k:"The books", d:"Revenue, spend, budgets and goals. First stop for any money question.", tags:["Pinned"], art:"ledger", i:"ledger", big:true},
  {t:"Growth Desk", id:"FhRCAWYMMYDtMQnCWeyfGX", c:"--c-growth", k:"Revenue map", d:"Google and Meta change log. Feeds the WBR marketing notes.", tags:["Weekly"], art:"growth", i:"growth"},
  {t:"Digital Wallet", id:"JgZK7GyCfNenxB8xxWre8g", c:"--c-me", k:"Personal", d:"Your own cash, budgets and spending.", tags:["Private"], art:"wallet", i:"wallet"},
  {t:"Partner Reimbursements", id:"W6zE1cuE6AA4Si8Zt7E6PY", c:"--c-money", k:"Owed back", d:"Out-of-pocket spend the business owes you and Ted.", tags:["Pinned"], art:"coins", i:"refund"},
  {t:"Ted and Eric 1:1", id:"2SqebKaXgx8ijioMEcmRoT", c:"--c-ops", k:"Tuesday", d:"Ted's agenda, notes and actions with Eric, plus the private side.", tags:["Tuesday"], art:"talk", i:"people"}
];
const PANELS = [
  {key:"ops", name:"Run the week", nav:"Glosswerks", sub:"Glosswerks", c:"--c-ops", items:[
    {t:"Ted & Me Scorecard", id:"WzBkkTuxhr9DSYQvZD34c5", i:"score", d:"What you and Ted each own, and how the week went", tag:"Friday"},
    {t:"Glosswerks Payroll", id:"HL3G926SeZZ57oUYrTmjPw", i:"pay", d:"Prep for your Sunday morning run in Gusto", tag:"Sunday"},
    {t:"Detail Tech Candidate Board", id:"96SthtusiWS24KdRrVDFTh", i:"hire", d:"Where each technician candidate stands", tag:"Hiring"},
    {t:"Glosswerks Books Backup", id:"CbyxTCLgxHm7tr62Jg7cSD", i:"backup", d:"Backup copy of the data behind the Ledger", tag:"As needed"}
  ]},
  {key:"growth", name:"Growth", nav:"Growth", sub:"Ads, CRM, offers", c:"--c-growth", items:[
    {t:"Google Ads Rebuild Plan", id:"SYcKDffvb7fU3KoXPwyBmY", i:"ads", d:"Rebuilding the account now that you run Ads", tag:"Active"},
    {t:"GHL Cutover Plan", id:"PhEaJ3yTuXmcvtXMtNXfei", i:"swap", d:"Finishing the move into your own GoHighLevel", tag:"Active"},
    {t:"AfterGlow Rate Sheet", id:"LkDrCJ1NYCJjVMagP5ZAYB", i:"tag", d:"Every-other-month and quarterly pricing", tag:"Quoting"}
  ]},
  {key:"td", name:"Transdev", nav:"Transdev", sub:"Waymo ops", c:"--c-td", items:[
    {t:"Distro Tool and Supervisor View", id:"2eFVa4Lh78MtoftZvmzBea", i:"route", d:"CSL 4 distribution and the supervisor view", tag:"Daily"},
    {t:"CSL 4 Distro Tool SOP", id:"DBFrfsa7WBtajpHnzCHFuN", i:"doc", d:"How the team runs the distro tool", tag:"SOP"},
    {t:"Ladder Program Spec", id:"LQu92n8zvNMCQTLgJeRW78", i:"ladder", d:"AUS career development program", tag:"Active"}
  ]},
  {key:"me", name:"Personal", nav:"Personal", sub:"Just you", c:"--c-me", items:[
    {t:"Spotter", id:"GYBnoUrt25Vhxh5ERBsgP9", i:"fit", d:"Your training and nutrition coaching app", tag:"Daily"},
    {t:"Flights to Fremont", id:"D2VG8iAk3PHzU7FQfeyUjo", i:"plane", d:"Uncle Virgil's Celebration of Life, Dec 3 and 4", tag:"Dec 3"}
  ]}
];
const REF = [
  {h:"Ads and GHL", items:[["Search Ads Takeover Guide","AX59XZJeGZgSzNb92SNE3b"],["Ads Snapshot, Before Gidds","7or1YvGiBRcLBJCtHMGePp"],["GHL Cutover Runbook","GWg3RSyvGYJfSmex7YkZgQ"],["GHL Page Code","7947ifXfW4RPHa3sxVFZrg"],["GHL Page Code Set","GptXbo8cMizxQPdyBNHgkQ"],["Referral and Winter Messages","GUUX1HdGwGBScip2bA7kbn"]]},
  {h:"Website pages", items:[["Mobile Detailing (home)","8jKREMHcDhZATCwyZRvDc3"],["Car Detailing","MyBVTg5VbvZzLXWgCUhUKT"],["Ceramic Coating","345uh6MrdUz6WwVMdHwc6C"],["AfterGlow","9m2SrGUVv8uiCKJ53mn2jz"],["AfterGlow Elite","MEXRVPK4282M2YDVqCxV3w"],["San Marcos","APiStaygc58Y9zT2QvqmEE"],["Buda","MyYYZEaJp2WqVH66he89kY"],["About Glosswerks","1W6GBbuvfCufPuJf28xr77"],["Terms","XCXxjSGAKS1qNS9ih7dxj4"],["Privacy Policy","36VRYjA49yBTtDzE7nKciF"],["Website FAQ Review","WKXL8PrKArFb6GWDArmaQi"]]},
  {h:"Team and training", items:[["New Pay Plan rollout","XoVFsN7kEcdNRaokwiZAwx"],["How Paint Sealant Wears","9rer1mKGDjs9FVjBpuB3Y6"],["Spray Bottle Labels","AxDZSHuuDP3vKFTXW1Vo5f"],["Monday Playbook","AyKzS1gWo2rKCs4N1zZfhw"]]},
  {h:"Transdev", items:[["Supervisor View SOP","EBGL4UADyHibGCFdNwMxuV"],["CSL 4 for New Ops Managers","6PepM3rpnYTu6VRscWgEDV"],["CSL 4 Band Cliff","H1yGhPa9jAPLBMo9rJawF9"],["Shift Bid Walkthrough","RZUDnxWjySKfFpS9n8Tzsf"]]}
];
/* weekly rhythm, 0 = Sunday: [label, artifact id, why, icon, color] */
const WEEK = [
  {d:"Sun", links:[["Payroll","HL3G926SeZZ57oUYrTmjPw","Run payroll in Gusto","pay","--c-money"],["Glosswerks WBR","1d9tyM3mGY2KJwkuDh1MCc","Week lands around 6 AM","chart","--c-ops"]]},
  {d:"Mon", links:[["Glosswerks WBR","1d9tyM3mGY2KJwkuDh1MCc","Run the WBR meeting","chart","--c-ops"],["Growth Desk","FhRCAWYMMYDtMQnCWeyfGX","Marketing notes for the WBR","growth","--c-growth"]]},
  {d:"Tue", links:[["Ted and Eric 1:1","2SqebKaXgx8ijioMEcmRoT","Ted's weekly 1:1 with Eric","people","--c-ops"]]},
  {d:"Wed", links:[]},{d:"Thu", links:[]},
  {d:"Fri", links:[["Ted & Me Scorecard","WzBkkTuxhr9DSYQvZD34c5","Close out the week","score","--c-ops"]]},
  {d:"Sat", links:[]}
];
const FULL = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
window.HUB = {A,esc,I,ART,BENTO,PANELS,REF,WEEK,FULL};
})();
