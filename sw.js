if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let a={};const f=e=>d(e,b),s={module:{uri:b},exports:a,require:f};i[b]=Promise.all(r.map((e=>s[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-d37740a6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"admin.css",revision:"556d3672483bb8767f507967ffd1b77a"},{url:"admin0.html",revision:"827685037a8e34edfc4c5c05f5730b17"},{url:"admin1.html",revision:"8e533a8e0de7543186963fb1f2d49502"},{url:"admin2.html",revision:"a247175abd3085b4921178d9bcf2d49c"},{url:"admin3.html",revision:"5699131ad2ad151f0fb0f4bfdc134469"},{url:"anik.ttf",revision:"aef71d632dc238bdd99373edb3304bb9"},{url:"bazar.html",revision:"31e8f6bb56eef80e621092f78e4a9f12"},{url:"blooddonartemplte.html",revision:"bbc52263a8b2e70d7d0b19b1ba374878"},{url:"blooddonation.html",revision:"ce0f9068d14d9546564e761b7ad810b5"},{url:"business.html",revision:"d4300a01f18b15632bca2e2184615e48"},{url:"change_color.html",revision:"62db35c22bc5898c3231ea0b8d8315e7"},{url:"changepassword.html",revision:"34793c52b1ffdea40d75b52c117212d1"},{url:"donation.html",revision:"d28ad3d9ae4da6ed2cd939700a4c0395"},{url:"editprofiles.html",revision:"9003e9f478497497a79d8112ba65a3c7"},{url:"education.html",revision:"f41b06ef52b55492cab08d7a32925a3f"},{url:"emergency.html",revision:"b6f382da88ab9da0d232fec85caff483"},{url:"eventsAttend.html",revision:"985266b031ff23e09f859b889c831fba"},{url:"font1.ttf",revision:"c492d0add10a0d0d42d5c003f6e832ea"},{url:"font2.ttf",revision:"97b80fc5b116123c6c3a864fe3f3649b"},{url:"font3.ttf",revision:"79ae84208f6880be4313ae0ab8abeefe"},{url:"inbox.html",revision:"5ba65abe83fb843918413b516bcfd03a"},{url:"index.css",revision:"5ba738eb50d1f468ae2f961b0c3c6c8c"},{url:"index.html",revision:"2178c6d5f58926d901cb1d18dc4b4b11"},{url:"index.js",revision:"6ff86959b1434c760175a5e435619c9c"},{url:"job.html",revision:"9d6552074eb202181ef8bd6e97079042"},{url:"login.html",revision:"0756e90b0e6b86e4a4d32ef13cf34179"},{url:"medical.html",revision:"92fed7d981e279efdb015828fbe0c3af"},{url:"navbar.css",revision:"e03122cdaa1ba8a3f537c8eec3aea4d0"},{url:"navbar.html",revision:"c2fe150ecd451d19bb6994a94250b610"},{url:"navbar.js",revision:"f994559528e4bcdc92a3274d5f3ed2a9"},{url:"post.html",revision:"cd6d4cc5b1a8b6181fe90ac3290b054f"},{url:"profiles.html",revision:"7a81f38c37c48af1f4b899c0cc6fedc8"},{url:"search.html",revision:"a885f639ccc9fdbd4e94573f5050f3c3"},{url:"SendMessegetoInbox.html",revision:"5441d2b8e5e6d234704b1b5eb094c930"},{url:"story.html",revision:"0b2173c2b29670791b5b12aac9e5be93"},{url:"student.html",revision:"72c57dff9e4b7938d8dabbddb32b01f2"},{url:"style_dataentry.css",revision:"4da56666d404ce3f1574564e0ce06755"},{url:"style_service.css",revision:"199a9ba36a3e68b35e1949cdeb660d75"},{url:"test.css",revision:"1dc290fd567ce8f70d5ef00f14a928c6"},{url:"test.html",revision:"72b9562a8712c54f47d1e5593f41b54b"},{url:"test2.html",revision:"76cd0b2b8d9db7fc65860c9ee794d27c"},{url:"tictactoegame.html",revision:"1c0a7df5188a7cd929f6d26a57d839c5"},{url:"transport.html",revision:"c0e42f9714fdf47385874bee41a4d20d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map