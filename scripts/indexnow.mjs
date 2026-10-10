const HOST = "www.suciconstructions.com";
const KEY = process.env.INDEXNOW_KEY || "2024d6b90fcc6eea6ece5581cce8eddb";
if (!KEY) throw new Error("INDEXNOW_KEY missing");

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log("IndexNow", res.status, `${urlList.length} URLs`);
