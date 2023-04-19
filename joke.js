const jokes_list=["To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
"How do celebrities stay cool? They have many fans.","What's Forrest Gump's Facebook password? 1forest1.",
"What did the fisherman say to the magician? Pick a cod, any cod.",
"How do you organize a space party? You planet.","Did you know that milk is the fastest liquid on earth? It's pasteurized before you can even see it.",
"What does a baby computer call his father? Data.","What do you call an illegally parked frog? Toad.",
"Why can't a leopard hide? Because he's always spotted.","Did you hear about the circus fire? It was in tents.",
"Why are spiders so smart? They can find everything on the web.","What's the best way to watch a fly fishing tournament? Live stream.",
"Every time I take my dog to the park, the ducks try to bite him. That's what I get for buying a pure bread dog.",
"Where are average things manufactured? The Satisfactory.","Why did the gym close down? It just didn't work out.","Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
"Why do dads take an extra pair of socks when they golfing? In case they get a hole in one!"];

const display=()=>{
    var joke_content=document.getElementById("joke-content");
    joke_content.innerHTML=jokes_list[Math.floor(Math.random()*jokes_list.length)];
}