// import OpenAI from "openai";
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const data = JSON.stringify([[{"name":"AboutTime","id":"about-time","nationalPhoneNumber":"(213)340-9070","formattedAddress":"3287WilshireBlvdB,LosAngeles,CA90010,USA","rating":4.2,"googleMapsUri":"https://maps.google.com/?cid=16588725565158153541","userRatingCount":41,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–1:00AM","Tuesday:8:00AM–1:00AM","Wednesday:8:00AM–1:00AM","Thursday:8:00AM–1:00AM","Friday:8:00AM–1:00AM","Saturday:8:00AM–1:00AM","Sunday:8:00AM–12:00AM"]},"parkingOptions":{"freeParkingLot":true},"editorialSummary":{"text":"Delicioustreats,creativedrinks,andgreatambianceforstudyingorchattingwithfriends."}},{"name":"AlchemistCoffeeProjectatThePearl","id":"alchemist-coffee","nationalPhoneNumber":"(213)315-5700","formattedAddress":"687SHobartBlvd,LosAngeles,CA90005,USA","rating":4.6,"googleMapsUri":"https://maps.google.com/?cid=5421323349998547545","userRatingCount":182,"currentOpeningHours":{"weekdayDescriptions":["Monday:7:00AM–6:00PM","Tuesday:7:00AM–6:00PM","Wednesday:7:00AM–6:00PM","Thursday:7:00AM–6:00PM","Friday:7:00AM–6:00PM","Saturday:7:00AM–6:00PM","Sunday:8:00AM–6:00PM"]},"outdoorSeating":true,"parkingOptions":{"paidStreetParking":true},"editorialSummary":{"text":"Sleekcoffee-focusedspotalsoofferingbakedgoods&bulkbeansoutofaNewOrleans-stylecafe."}},{"name":"AwesomeCoffee","id":"awesome-coffee","nationalPhoneNumber":"(213)674-7558","formattedAddress":"3959WilshireBlvda21,LosAngeles,CA90010,USA","rating":4.2,"googleMapsUri":"https://maps.google.com/?cid=9964901238490932706","websiteUri":"http://www.theawesomecoffeeshop.com/","userRatingCount":286,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–2:00AM","Tuesday:8:00AM–2:00AM","Wednesday:8:00AM–2:00AM","Thursday:8:00AM–2:00AM","Friday:8:00AM–2:00AM","Saturday:9:00AM–2:00AM","Sunday:9:00AM–2:00AM"]},"editorialSummary":{"text":"Minimalistcoffeehousespecializingincoffeewithimpressivemilkdesignsplusothercafetreats."}},{"name":"BlueBottleCoffee","id":"blue-bottle","nationalPhoneNumber":"(510)653-3394","formattedAddress":"555SAlexandriaAve,LosAngeles,CA90020,USA","rating":4.4,"googleMapsUri":"https://maps.google.com/?cid=12493416197720706285","websiteUri":"https://bluebottlecoffee.com/","userRatingCount":104,"currentOpeningHours":{"weekdayDescriptions":["Monday:Closed","Tuesday:6:30AM–5:00PM","Wednesday:6:30AM–5:00PM","Thursday:6:30AM–5:00PM","Friday:6:30AM–5:00PM","Saturday:7:00AM–5:00PM","Sunday:7:00AM–5:00PM"]},"editorialSummary":{"text":"Trendycafechainofferingupscalecoffeedrinks&pastries,plusbeans&brewingequipment."},"outdoorSeating":true},{"name":"CafeDeMama","id":"cafe-de-mama","nationalPhoneNumber":"(323)795-0906","formattedAddress":"1102SWesternAve,LosAngeles,CA90006,USA","rating":4.7,"googleMapsUri":"https://maps.google.com/?cid=17797679888739859827","websiteUri":"https://www.cafedemama.com/","userRatingCount":198,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–8:00PM","Tuesday:8:00AM–8:00PM","Wednesday:8:00AM–8:00PM","Thursday:8:00AM–8:00PM","Friday:8:00AM–8:00PM","Saturday:8:00AM–8:00PM","Sunday:8:00AM–8:00PM"]},"editorialSummary":{"text":"Basiccoffeeshopwithoutdoorseatingservingmochi&matchalattes,plusclassicjava&croffles.","languageCode":"en"},"outdoorSeating":true,"parkingOptions":{"freeParkingLot":true}},{"name":"CafeLoft","id":"cafe-loft","nationalPhoneNumber":"(213)383-3006","formattedAddress":"3882W6thSt,LosAngeles,CA90020,USA","rating":4.3,"googleMapsUri":"https://maps.google.com/?cid=11140502851640429629","userRatingCount":340,"currentOpeningHours":{"weekdayDescriptions":["Monday:11:00AM–10:00PM","Tuesday:11:00AM–10:00PM","Wednesday:11:00AM–10:00PM","Thursday:11:00AM–10:00PM","Friday:11:00AM–10:00PM","Saturday:11:00AM–10:00PM","Sunday:11:00AM–10:00PM"]},"editorialSummary":{"text":"Coffee,tea,lightfare&dessertsareservedupinawarm,artsy,lounge-likeatmosphere."},"outdoorSeating":true,"parkingOptions":{"freeParkingLot":true,"paidStreetParking":true}},{"name":"CafeMak","id":"cafe-mak","nationalPhoneNumber":"(213)252-9898","formattedAddress":"612ShattoPl,LosAngeles,CA90005,USA","rating":4.3,"googleMapsUri":"https://maps.google.com/?cid=11781226813360577209","websiteUri":"https://cafemak.eat24hour.com/location","userRatingCount":654,"currentOpeningHours":{"weekdayDescriptions":["Monday:11:00AM–10:00PM","Tuesday:11:00AM–12:00AM","Wednesday:11:00AM–12:00AM","Thursday:11:00AM–12:00AM","Friday:11:00AM–12:00AM","Saturday:11:00AM–12:00AM","Sunday:11:00AM–10:00PM"]},"editorialSummary":{"text":"RoomyKoreancafeservingcoffees,teas&desserts(likesweetpotatocake)withlate-nighthours."},"outdoorSeating":true,"parkingOptions":{"freeParkingLot":true,"freeStreetParking":true,"paidStreetParking":true}},{"name":"DAMO","id":"damo","nationalPhoneNumber":"(213)277-1701","formattedAddress":"3510W8thSt,LosAngeles,CA90005,USA","rating":4.5,"googleMapsUri":"https://maps.google.com/?cid=17369564684135374103","websiteUri":"https://instagram.com/damoteahousela?igshid=MzRlODBiNWFlZA==","userRatingCount":86,"displayName":{"text":"DAMO","languageCode":"en"},"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–7:00PM","Tuesday:8:00AM–7:00PM","Wednesday:8:00AM–7:00PM","Thursday:8:00AM–7:00PM","Friday:8:00AM–7:00PM","Saturday:8:00AM–7:00PM","Sunday:8:00AM–7:00PM"]},"outdoorSeating":false,"parkingOptions":{"freeParkingLot":true},"editorialSummary":{"text":"smallandcuteandcleanaesthetic.notenoughseatsandplugstodoworkin."}},{"name":"MEMORYLOOKCOFFEE&FLAGSHIPSTORE","id":"memorylook","formattedAddress":"2881WOlympicBlvd,LosAngeles,CA90006,USA","rating":4.5,"googleMapsUri":"https://maps.google.com/?cid=2426000391528517037","websiteUri":"https://memorylook.com/","userRatingCount":272,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–9:00PM","Tuesday:8:00AM–9:00PM","Wednesday:8:00AM–9:00PM","Thursday:8:00AM–9:00PM","Friday:8:00AM–9:00PM","Saturday:8:00AM–9:00PM","Sunday:8:00AM–9:00PM"]},"outdoorSeating":true,"parkingOptions":{"freeParkingLot":true},"editorialSummary":{"text":"Theoverallaestheticisminimalchic,whichiscute.Notgoodwifi."}},{"name":"nothingbutcoffeebyffee&Co","id":"nothing-but-coffee","nationalPhoneNumber":"(213)375-7073","formattedAddress":"3952WilshireBlvd,LosAngeles,CA90010,USA","rating":4.6,"googleMapsUri":"https://maps.google.com/?cid=4399448930006619190","websiteUri":"https://ffee2andco.wixsite.com/nothing-but-coffee","userRatingCount":194,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–6:00PM","Tuesday:8:00AM–6:00PM","Wednesday:8:00AM–6:00PM","Thursday:8:00AM–6:00PM","Friday:8:00AM–6:00PM","Saturday:8:00AM–6:00PM","Sunday:8:00AM–6:00PM"]},"outdoorSeating":true,"editorialSummary":{"text":"Goodplacetohangoutbutthereisonly3seatsthataregoodforwork/studying."}},{"name":"SharpSpecialtyCoffee","id":"sharp","nationalPhoneNumber":"(213)674-7644","formattedAddress":"3421W6thSt,LosAngeles,CA90020,USA","rating":4.5,"googleMapsUri":"https://maps.google.com/?cid=6669521777815306984","userRatingCount":205,"currentOpeningHours":{"weekdayDescriptions":["Monday:8:00AM–6:00PM","Tuesday:8:00AM–6:00PM","Wednesday:8:00AM–6:00PM","Thursday:8:00AM–6:00PM","Friday:8:00AM–9:00PM","Saturday:8:00AM–9:00PM","Sunday:8:00AM–9:00PM"]},"outdoorSeating":false,"editorialSummary":{"text":"spaciousseatingwithoutlets.moreofstudyenviroment,notsuitedforchatting"}},{"name":"SpotCoffee&More","id":"spot-coffee","nationalPhoneNumber":"(213)332-5913","formattedAddress":"3324W6thSt,LosAngeles,CA90020,USA","rating":4.1,"googleMapsUri":"https://maps.google.com/?cid=9588789063132819908","websiteUri":"https://www.cafespotla.com/","userRatingCount":210,"currentOpeningHours":{"weekdayDescriptions":["Monday:12:00PM–2:00AM","Tuesday:12:00PM–2:00AM","Wednesday:12:00PM–2:00AM","Thursday:12:00PM–2:00AM","Friday:12:00PM–2:00AM","Saturday:12:00PM–2:00AM","Sunday:12:00PM–2:00AM"]},"outdoorSeating":true,"parkingOptions":{"paidParkingLot":true,"paidStreetParking":true,"valetParking":true},"editorialSummary":{"text":"musicalittlebitofaclubvibewithoutbeingoverbearing.gooddessert."}},{"name":"TPOCoffee","id":"tpo-coffee","nationalPhoneNumber":"(213)322-2356","formattedAddress":"537SWesternAve,LosAngeles,CA90020,USA","rating":4,"googleMapsUri":"https://maps.google.com/?cid=4640258991298039773","userRatingCount":83,"currentOpeningHours":{"weekdayDescriptions":["Monday:10:00AM–2:00AM","Tuesday:10:00AM–2:00AM","Wednesday:10:00AM–2:00AM","Thursday:10:00AM–4:00AM","Friday:10:00AM–4:00AM","Saturday:10:00AM–4:00AM","Sunday:10:00AM–2:00AM"]},"outdoorSeating":false,"parkingOptions":{"valetParking":true},"editorialSummary":{"text":"adelightfulspotforlate-nightcoffeeanddesserts.loudmusic."}},{"name":"YeemsCoffee","id":"yeems","nationalPhoneNumber":"(213)529-4069","formattedAddress":"3033W6thSt#107,LosAngeles,CA90020,USA","rating":4.8,"googleMapsUri":"https://maps.google.com/?cid=254723966818584949","websiteUri":"http://www.yeemscoffee.com/","userRatingCount":123,"currentOpeningHours":{"weekdayDescriptions":["Monday:Closed","Tuesday:7:30AM–6:00PM","Wednesday:7:30AM–6:00PM","Thursday:7:30AM–6:00PM","Friday:7:30AM–6:00PM","Saturday:7:30AM–6:00PM","Sunday:8:00AM–6:00PM"]},"parkingOptions":{"freeParkingLot":true},"editorialSummary":{"text":"thiscoffeeshopistinysoitismorelikeagrabandgocoffeeshop."}}]]);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Your task is to return a cafe that best fits the description from the user. I want you to also include the googleMapsUri link from the json as well. Here are the list of cafes in a json format: " +
          data,
      },
      {
        role: "user",
        content:
          "I want a place where the music isn't too loud and offers parking",
      },
    ],
    temperature: 0.8,
    max_tokens: 100,
    top_p: 1,  
  });

  console.log(response.choices[0].message);
}

main();
