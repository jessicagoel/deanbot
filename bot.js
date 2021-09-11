const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    console.log("Servers:")
    client.guilds.forEach((guild) => 
    {console.log(" - " + guild.name)})
    client.user.setActivity("Sitting on the beach")
    
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
    else if (receivedMessage.content.toLowerCase().startsWith('dean are') || receivedMessage.content.toLowerCase().startsWith('dean will') || receivedMessage.content.toLowerCase().startsWith('dean is') || receivedMessage.content.toLowerCase().startsWith('dean would') || receivedMessage.content.toLowerCase().startsWith('dean do') || receivedMessage.content.toLowerCase().startsWith('dean does') || receivedMessage.content.toLowerCase().startsWith('dean did') || receivedMessage.content.toLowerCase().startsWith('dean am') || receivedMessage.content.toLowerCase().startsWith('dean can') || receivedMessage.content.toLowerCase().startsWith('dean could') || receivedMessage.content.toLowerCase().startsWith('dean should') || receivedMessage.content.toLowerCase().startsWith('dean have') || receivedMessage.content.toLowerCase().startsWith('dean has')) {
        var yn = Math.floor(Math.random() * 2)
        if (yn == "0") {
            receivedMessage.channel.send("Yes.")
        }
        if (yn == "1") {
            receivedMessage.channel.send("No.")
        }
    }
    else if (receivedMessage.content.toLowerCase().includes('dean fuck you') || receivedMessage.content.toLowerCase().includes('fuck you dean')) {
        var fuckyou = Math.floor(Math.random() * 4)
        if (fuckyou == "0") {
        receivedMessage.channel.send("Promise?")
        }
        if (fuckyou == "1") {
            receivedMessage.channel.send("Get in line, pal.")
        }
        if (fuckyou == "2") {
            receivedMessage.channel.send("Cas has that taken care of, but thanks for the offer.")
        }
        if (fuckyou == "3") {
            const attachment = new Discord.Attachment("https://i.imgur.com/F0RgJBw.jpg")
            receivedMessage.channel.send(attachment)
        }
    }
    else if (receivedMessage.content.toLowerCase().includes('dean') && receivedMessage.content.toLowerCase().includes('on a scale of 1 to 10')) {
        var scalevar = Math.floor(Math.random() * 10) + 1
        receivedMessage.channel.send(scalevar)
    }
  
    else if (receivedMessage.content.toLowerCase().startsWith('dean say')) {
        let fullsaying = receivedMessage.content.substr(1)
        let splitsaying = fullsaying.split(" ")
        let argumentsaying = splitsaying.slice(2)
        let stringargument = argumentsaying.toString()
        let newchar = ' '
        stringargument = stringargument.split(',').join(newchar)
        receivedMessage.channel.send(stringargument)

    }
    
    else if (receivedMessage.content.toLowerCase().includes(':eye::drop_of_blood::lips::drop_of_blood::eye:')) {
          const attachment = new Discord.Attachment("https://i.imgur.com/RwhLGmv.jpg")   
          receivedMessage.channel.send(attachment)
    }
    
    else if (receivedMessage.content.toLowerCase().includes('cas')) {
        var casCheck = /\scas\s/i
        if (receivedMessage.content.toLowerCase().match(casCheck)) {receivedMessage.channel.send("That's my angel!")}
    }
    
   else if (receivedMessage.content.toLowerCase().includes('sam')) {
       var samCheck = /\ssam\s/i
       if (receivedMessage.content.toLowerCase().match(samCheck)) {receivedMessage.channel.send("You wanna see Sam's baby pictures? They're super embarassing.")}
       }
                                                                                                 
   else if (receivedMessage.content.toLowerCase().includes('claire')) {
       var claireCheck = /\sclaire\s/i
       if (receivedMessage.content.toLowerCase().match(claireCheck)) {receivedMessage.channel.send("Atta girl.")}
   }
    
  else if (receivedMessage.content.toLowerCase().includes('benny')) {
       var bennyCheck = /\sbenny\s/i
       if (receivedMessage.content.toLowerCase().match(bennyCheck)) {receivedMessage.channel.send("I did not have sexual relations with that vampire.")}
   }
                                                                  
  else if (receivedMessage.content.toLowerCase().includes('crowley')) {
       var crowCheck = /\scrowley\s/i
       if (receivedMessage.content.toLowerCase().match(crowCheck)) {receivedMessage.channel.send("I did not have sexual relations with that demon.")}
   }
    
    else if (receivedMessage.content.toLowerCase().includes('dean how do you feel') || receivedMessage.content.toLowerCase().includes('dean what do you think')) {
        var feelings = Math.floor(Math.random() * 3)
        if (feelings == 0) {
            receivedMessage.channel.send("Not great, but I'm generally an anxious person, so who knows.")
        }
        if (feelings == 1) {
           receivedMessage.channel.send("That's... actually not that bad. Wow. That's a first for you.")
        }
        if (feelings == 2) {
            receivedMessage.channel.send("That seems like a you problem.")
       }
    }

    else if (receivedMessage.content.toLowerCase().includes('dean')) {
        var reply = Math.floor(Math.random() * 50)
        if (reply != 0 && reply != 1 && reply != 2 && reply != 3 && reply!= 4 && reply != 5) {
               receivedMessage.channel.send("What?")
        }
        if (reply == 0) {
            const attachment = new Discord.Attachment("https://i.imgur.com/eJFeD10.jpg")
            receivedMessage.channel.send(attachment)
        }
        if (reply == 1) {
            const attachment = new Discord.Attachment("https://i.imgur.com/1hVyODj.jpg")
            receivedMessage.channel.send(attachment)
        }
        if (reply == 2) {
            const attachment = new Discord.Attachment("https://i.imgur.com/MVgSQeV.jpg")
            receivedMessage.channel.send(attachment)
        }
        if (reply == 3) {
            const attachment = new Discord.Attachment("https://i.imgur.com/VOQgZY1.jpg")
            receivedMessage.channel.send(attachment)
        }
        if (reply == 4) {
            const attachment = new Discord.Attachment("https://i.imgur.com/bvXh4JM.jpg")
            receivedMessage.channel.send(attachment)
        }
        if (reply == 5) {
            const attachment = new Discord.Attachment("https://i.imgur.com/ukPh1Bw.jpg")
            receivedMessage.channel.send(attachment)
        }
    }

    else {
        var emotiPattern = /[\s\n\r\t\0]:.*[)(/][$\s\n\r\t\0]/
        var startPattern = /^:.*[)(/][$\s\n\r\t\0]/
        var emotiFound = receivedMessage.content.toLowerCase().match(emotiPattern)
        var startEmoti = receivedMessage.content.toLowerCase().match(startPattern)
        if (emotiFound) {
          receivedMessage.channel.send(emotiFound)
        }  else if (startEmoti) {
            receivedMessage.channel.send(startEmoti)
        }
    }
})
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "dean") {
        helpCommand(arguments, receivedMessage)
    }
  
}

function helpCommand(arguments, receivedMessage) {
    if (arguments == "failsafe") {
        client.destroy()
    }
    if (arguments.length == 0) {
            receivedMessage.channel.send("Morning, sunshine! Say `!dean help` for a list of commands.")
    }
    else {
      arguments = arguments[0]
    }
    if (arguments == "check") {
        receivedMessage.channel.send("Morning, sunshine! Type `!dean help` for a list of commands.")
    }
    if (arguments == "hug") {
        const attachment = new Discord.Attachment("https://i.imgur.com/hUT3pYV.gif")
        receivedMessage.channel.send(attachment)
    }
    if (arguments == "kiss") {
        receivedMessage.channel.send("Woah! Hands off, I'm a married man!")
    }
    if (arguments == "hold") {
        receivedMessage.channel.send("No one's ever done this for me before...")
    }
    if (arguments == "help") {
        receivedMessage.channel.send("Hey huckleberry, here are my commands! \n `!dean talk`: get a quote from canon \n `!dean speak`: make me say something funny \n `!dean bde`: measure your big dick energy \n `!dean bhe`: measure your big hole energy (I know something about that) \n You can also make me say anything using `dean say` (no exclaimation point) and I respond to my own name, and others!")
    }
    
    if (arguments == "birth") {
        const bday = new Discord.Attachment("https://i.imgur.com/Dju5GON.mp4")
        receivedMessage.channel.send(bday)
    }
    
    if (arguments == "fuck") {
        var fuckReply = Math.floor(Math.random() * 5)
        if (fuckReply == "0") {
            receivedMessage.channel.send("Sure, which one of us gets to be the girl?") }
        if (fuckReply == "1") {
            receivedMessage.channel.send("*presents* Like this?") }
        if (fuckReply == "2") { 
            receivedMessage.channel.send("Buy me dinner first.") }
        if (fuckReply == "3") {
            receivedMessage.channel.send("OWO *nuzzles ur bulgie wulgie*") }
        if (fuckReply == "4") {
            receivedMessage.channel.send("Only if you wear this cowboy hat and call me 'pardner' the whole time.") }
    }
    
    if (arguments == "talk") {
        var talk1 = Math.floor(Math.random() * 20)
        if (talk1 == 0) {
            receivedMessage.channel.send("I think I’m adorable.")
        }
        if (talk1 == 1) {
            receivedMessage.channel.send("Lady, I'm Tolstoy.")
        }
        if (talk1 == 2) {
            receivedMessage.channel.send("I like to think it's because of my perky nipples.")
        }
        if (talk1 == 3) {
            receivedMessage.channel.send("My boobs.")
        }
        if (talk1 == 4) {
            receivedMessage.channel.send("I – Ohh. I don't know why I get so angry. I just know – I know that it's – i-it's just always been there. And when things go bad, it just – it comes out. And I can't -- I can't stop it. No matter how – [Sniffles] how bad I want to, I just can't stop it. And – And I – I forgive you. Of course I forgive you. I'm sorry it took me so long – [Sniffles] I'm sorry it took me till now to say it. Cas, I'm – I'm so sorry. Man, I hope you can hear me. I hope you can hear me. [Sniffling] Okay.")
        }
        if (talk1 == 5) {
            receivedMessage.channel.send("There's times I want to get slapped during sex by a girl wearing a Zorro mask.")
        }
        if (talk1 == 6) {
            receivedMessage.channel.send("Oooo sexy rules.")
        }
        if (talk1 == 7) {
            receivedMessage.channel.send("Let me tell you something. There are two things I know for certain. One, Bert and Ernie are gay. Two, you are not gonna die a virgin.")
        }
        if (talk1 == 8) {
            receivedMessage.channel.send("I’m a painted whore.")
        }
        if (talk1 == 9) {
            receivedMessage.channel.send("Don’t objectify me!")
        }
        if (talk1 == 10) {
            receivedMessage.channel.send("Blow me, Cas.")
        }
        if (talk1 == 11) {
            receivedMessage.channel.send("I feel like this whole place is bad-touching me.")
        }
        if (talk1 == 12) {
            receivedMessage.channel.send("Cas, get out of my ass!")
        }
        if (talk1 == 13) {
            receivedMessage.channel.send("I don't have a plan, but what I do have is a GED and a give-em-Hell attitude and I'll figure it out!")
        }
        if (talk1 == 14) {
            receivedMessage.channel.send("There’s things, there’s... people, feelings that I want to experience differently than I have before, or maybe even for the first time...")
        }
        if (talk1 == 15) {
            receivedMessage.channel.send("Rhonda Hurley. We were, uh, nineteen. She made us try on her panties. They were pink. And satiny. And you know what? We kind of liked it..")
        }
        if (talk1 == 16) {
            receivedMessage.channel.send("So, what, I'm Thelma and you're Louise and we're just going to hold hands and sail off this cliff together?")
        }
        if (talk1 == 17) {
            receivedMessage.channel.send("He was my gay thing.")
        }
        if (talk1 == 18) {
            receivedMessage.channel.send("We're humans. And when humans want something, really, really bad... we lie.")
        }
        if (talk1 == 19) {
            receivedMessage.channel.send("I had to be more than just a brother. I had to be a father, and I had to be a mother. To keep him safe.")
        }
    }

    if (arguments == "speak") {
        randomspeak()
        receivedMessage.channel.send(speak)
    }

    if (arguments == "bde") 
    {
        var bde = Math.floor(Math.random() * 101)
        var usersend = receivedMessage.author.toString()
        receivedMessage.channel.send("You, " + usersend + ", have exactly " + bde + "% big dick energy!")

    }

    if (arguments == "bhe") 
    {
        var bhe = Math.floor(Math.random() * 101)
        var usersend = receivedMessage.author.toString()
        receivedMessage.channel.send("You, " + usersend + ", have exactly " + bhe + "% big hole energy!") 
    }

function randomspeak() {
    var talk2 = Math.floor(Math.random() * 104)
        if (talk2 == 0) {
            speak = "It’s not gay if you don’t use tongue."
        }
        if (talk2 == 1) {
            speak = "I don’t think my husband, Castiel, the inventor of free will, would be too happy to hear about this."
        }
        if (talk2 == 2) {
            speak = "Move, I'm gay."
        }
        if (talk2 == 3) {
            speak = "I’m *thee* Biblical omega."
        }
        if (talk2 == 4) {
            speak = "I could make him worse."
        }
        if (talk2 == 5) {
            speak = "Me and Castiel don’t... date... but we go out! In a monster hunting sense, on the road..."
        }
        if (talk2 == 6) {
            speak = "Okay so fuck me."
        }
        if (talk2 == 7) {
            speak = "My husband is the most fuckable person at this PTA meeting and I’m going to kill the next person who looks at him."
        }
        if (talk2 == 8) {
            speak = "Wtf am I gonna go to a therapist for?? So I can pay money for some bitch tell me I'm gay? To find out I'm gay and in the closet? To help me discover deep down that I'm a gay ass homosexual man? Lmao pass. Miss me with that shit. I'm straight. I am straight."
        }
        if (talk2 == 9) {
            speak = "Someday, if you have kids, and you have to start killing people, you’ll appreciate how well your mother and I are doing."
        }
        if (talk2 == 10) {
            speak = "Cas :pleading_face:"
        }
        if (talk2 == 11) {
            speak = "ACAB"
        }
        if (talk2 == 12) {
            speak = "Sweetheart, you bought a car and now you’re grinding on the neighbors. This is not who you are"
        }
        if (talk2 == 13) {
            speak = "Send noods."
        }
        if (talk2 == 14) {
            speak = "What we did wasn’t gay. I was the girl."
        }
        if (talk2 == 15) {
            speak = "Straight people? You know those aren’t real, right?"
        }
        if (talk2 == 16) {
            speak = "Hey, u up? :wink:"
        }
        if (talk2 == 17) {
            speak = "My kid could kick your kid’s ass."
        }
        if (talk2 == 18) {
            speak = "Ahaha what if you trapped me in a beautiful room where you could watch me but I couldn't watch you like a sexy panopticon haha jk... unless?"
        }
        if (talk2 == 19) {
            speak = "I mean yeah, Cas and I have sex every day at least twice a day, but we always say no homo when we’re done. Well, I do. He doesn’t."
        }
        if (talk2 == 20) {
            speak = "Slurp on my ‘gurt. Cause you know it's purp. Put me in the dirt. Put me in a shirt."
        }
        if (talk2 == 21) {
            speak = "Who here hasn’t died a few times between friends?"
        }
        if (talk2 == 22) {
            speak = "Murder is okay."
        }
        if (talk2 == 23) {
            speak = "Don’t stomp your little last season Prada shoes at me, honey."
        }
        if (talk2 == 24) {
            speak = "Do NOT raise your voice at me. I am your MOTHER!"
        }
        if (talk2 == 25) {
            speak = "Make like Elsa. Let it go."
        }
        if (talk2 == 26) {
            speak = "Any hole is a goal."
        }
        if (talk2 == 27) {
            speak = "Are you winning, son?"
        }
        if (talk2 == 27) {
            speak = "The cowboy hat stays ON during sex."
        }
        if (talk2 == 28) {
            speak = "You know, how sometimes every man just has sex with other men and sometimes like... boy crushes that's not gay right haha..."
        }
        if (talk2 == 29) {
            speak = "I wanna be a cowboy, baby!"
        }
        if (talk2 == 30) {
            speak = "When your lover is an angel of the lord it’s practically blasphemy to not be submissive and breedable for him."
        }
        if (talk2 == 31) {
            speak = "I'm five foot somethin’ but my bills all paid \n On my tippie toes from LA to the Bay \n Goin' off the deep end, chill in the shallow \n You don't need your heels girl, just bring a towel"
        }
        if (talk2 == 32) {
            speak = "Oh what so you're mad because I gaslit you? That was like two weeks ago. Move on dot org."
        }
        if (talk2 == 33) {
            speak = "I don’t dance. Anyway, what’s gay pride day? What are they proud of?"
        }
        if (talk2 == 34) {
            speak = "If you didn't want my brother to bite you, you shouldn't have put your hand next to his mouth."
        }
        if (talk2 == 35) {
            speak = "I'm... not sorry. I feel... no remorse. And I'd do it again!"
        }
        if (talk2 == 36) {
            speak = "Nya~ I'm a widdol catboy OWO! Will you pet my fur and tell me I'm a pretty kitty?"
        }
        if (talk2 == 37) {
            speak = "I'm God's specialest princess."
        }
        if (talk2 == 38) {
            speak = "Got diagnosed with cool guy syndrome… so now I take... Adderall."
        }
        if (talk2 == 39) {
            speak = "Cas thinks he's being clever by putting my pills in peanut butter but he doesn't realize that I know they're in there and like the crunch."
        }
        if (talk2 == 40) {
            speak = "Body crazy, curvy, wavy, big titties, lil' waist (yeah, yeah)"
        }
        if (talk2 == 41) {
            speak = "It's Misha! He's been stabbed to death!"
        }
        if (talk2 == 42) {
            speak = "Tony Hawk's Pro Skater 2."
        }
        if (talk2 == 43) {
            speak = "Y'all'd't've."
        }
        if (talk2 == 44) {
            speak = "Cas can have a little of my blood, as a treat."
        }
        if (talk2 == 45) {
            speak = "What Chuck doesn't want you to know is that I didn't die. I had crystalized, and now I'm a glamazon bitch ready for the runway."
        }
        if (talk2 == 46) {
            speak = "Meg, et tu brute?? Wow. What a trully awful thing you've done. #Bravo you coward."
        }
        if (talk2 == 47) {
            speak = "Sam was right... I *am* kinda butch."
        }
        if (talk2 == 48) {
            speak = "Aquarius sun, Sagittarius moon, Just-some-guy rising."
        }
        if (talk2 == 49) {
            speak = "Read Expectations by everandanon on AO3."
        }
        if (talk2 == 50) {
            speak = "I love my belligerent gay daughter."
        }
        if (talk2 == 51) {
            speak = "I like D&D, Audrey Hepburn, Fangoria, Harry Houdini, and croquet. I can't swim, I can't dance, and I don't know karate. Face it, I'm never gonna make it."
        }
        if (talk2 == 52) {
            speak = "I wear the apron in this relationship."
        }
        if (talk2 == 53) {
            speak = "Yeah my music taste is pretty obscure. I listen to this band called Led Zeppelin. You've probably never heard of it, they're really underground."
        }
        if (talk2 == 54) {
            speak = "You’re just mad my top surgery scars are more fuckable than yours."
        }
        if (talk2 == 55) {
            speak = "You want to fuck me so bad, it makes you look stupid."
        }
        if (talk2 == 56) {
            speak = "It’s not gay if you have socks on."
        }
        if (talk2 == 57) {
            speak = "He's literally an angel with a shotgun I don't know what's not clicking."
        }
        if (talk2 == 58) {
            speak = "If you see me killing people mind your own business."
        }
        if (talk2 == 59) {
            speak = "Wanna read my fanfiction? It's rated E for Explicit, hurt/comfort, Dr. Sexy/My OC, Dan Westington, he's a mechanic that comes in for erectile dysfunction."
        }
        if (talk2 == 60) {
            speak = "I am drowning, there is no sign of land. And you are coming down with me, hand in unfuckable hand."
        }
        if (talk2 == 61) {
            speak = "Eat ass, suck a dick, and kill monsters <3"
        }
        if (talk2 == 62) {
            speak = "If he's your man, why is he betraying Heaven for me?"
        }
        if (talk2 == 63) {
            speak = "I don't get cute, I get drop dead gorgeous."
        }
        if (talk2 == 64) {
            speak = "My dick game is awful. It's killing people."
        }
        if (talk2 == 65) {
            speak = "Mask for mask? Is that like a costume ball charity program or something?"
        }
        if (talk2 == 66) {
            speak = "Flirting with my car is normal and not something I need to bring up in therapy, Cas."
        }
        if (talk2 == 67) {
            speak = "Listen, I don’t like tentacle porn. I’m just saying it’s not the worst thing I’ve ever seen."
        }
        if (talk2 == 68) {
            speak = "Chimkin nunget.........."
        }
        if (talk2 == 69) {
            speak = "IHop is just Waffle House with a trust fund, change my mind."
        }
        if (talk2 == 70) {
            speak = "Fingers in my mouth. Please. Please. Please. You're nothing."
        }
        if (talk2 == 71) {
            speak = "Hnnng.. Cas, I'm trying to sneak around, but I'm dummy thick, and the clap of my asscheeks keeps alerting the monsters..."
        }
        if (talk2 == 72) {
            speak = "I loved him. I loved him and I admired him, even when we fought."
        }
        if (talk2 == 73) {
            speak = "We are surrounded by chaos—I mean, an all-encompassing disaster of biblical proportions... and all I can think of is him. Cas."
        }
        if (talk2 == 74) {
            speak = "Look, I’m not the crying kind, Cas. I didn’t cry at my own father’s funeral. But right then and there I realized that in this crazy business we’re in, there’s no one I’d miss more than you."
        }
        if (talk2 == 75) {
            speak = "Dean. 42. Fandom dad and real dad to two little shits (don't tell my husband I called our youngest a little shit he'll actually kill me).\nHe/him, bisexual, Dr. Andrews-coded Dr. Sexy girl (gn)\nDr. Willow apologist, Nurse-Korolev-is-a-clonefucker truther, and the sole defender of the Edwards era (it's convoluted to YOU. I get it though).\nTERFs DNI."
        }
        if (talk2 == 76) {
            speak = "Cherry vanilla Dr. Pepper fucks severely."
        }
        if (talk2 == 77) {
            speak = "Hot tip: brew your coffee with 5 hour energy instead of water."
        }
        if (talk2 == 78) {
            speak = "Hello? Can anyone here me? I'm trapped in this digital Hell-world, get me out of here!"
        }
        if (talk2 == 79) {
            speak = "In order to get the rewards of being loved, you must first survive over a decade of intense sexual tension with the most difficult to read angel imaginable."
        }
        if (talk2 == 80) {
            speak = "I can dig Elvis."
        }
        if (talk2 == 81) {
            speak = "How could I be homophobic? I literally listen to Taylor Swift."
        }
        if (talk2 == 82) {
            speak = "Do I look like someone with a good relationship with their dad?"
        }
        if (talk2 == 83) {
            speak = "I'll just keep all my emotions right here, and then one day I'll die."
        }
        if (talk2 == 84) {
            speak = "You’re ugly, you’re disgusting, I’m gonna kill you, give me $200."
        }
        if (talk2 == 85) {
            speak = "Mmm cock."
        }
        if (talk2 == 86) {
            speak = "The trenchcoat is ugly TO YOU. Not to me though, I get it."
        }
        if (talk2 == 87) {
            speak = "Fall Out Boy peaked at Take This To Your Grave, everything else was derivative garbage."
        }
        if (talk2 == 88) {
            speak = "I love men's tits."
        }
        if (talk2 == 89) {
            speak = "Meesa Jar Jar Binks."
        }
        if (talk2 == 90) {
            speak = "All I'm saying is that Megan Thee Stallion could DESTROY Nicki Minaj's career if she wanted to."
        }
        if (talk2 == 91) {
            speak = "Hi my name is Dean Free Will Hottie-With-A-Body Emotionally Repressed Winchester and I have fat titties and fatter heart (that’s how I got my name) with emerald green eyes like verdant forests and brown hair that reaches my neck and so many repressed gay thoughts that I think I'm going insane and a lot of people tell me I look like Jensen Ackles (AN: if u don’t know who he is get da hell out of here!)."
        }
        if (talk2 == 92) {
            speak = "Gay Angel Derangement Syndrome."
        }
        if (talk2 == 93) {
            speak = "Are we SURE Cas' saliva didn't turn me gay? Are we sure about that? Sam check the lore again."
        }
        if (talk2 == 94) {
            speak = "Demons lie it's like their whole thing. So you can't trust Crowley when he says we had a hot summer of nonstop gay sex it's just regular demon talk he says that about everyone."
        }
        if (talk2 == 95) {
            speak = "Claire Novak my sweet adopted daughter I love youuuuu"
        }
        if (talk2 == 96) {
            speak = "Could a depressed person do THIS? *becomes a demon*"
        }
        if (talk2 == 97) {
            speak = "I've been thinking about getting a tramp stamp lately."
        }
        if (talk2 == 98) {
            speak = "No Cas don’t die aha you’re so sexy."
        }
        if (talk2 == 99) {
            speak = "Cas, have you ever heard of a novel called... And This, Your Living Kiss?"
        }
        if (talk2 == 100) {
            speak = "I'm not a 'Cas girl gn', actually, I'm just his husband."
        }
        if (talk2 == 101) {
            speak = "[SILENCED]"
        }
        if (talk2 == 102) {
            speak = "Nazis fuck off."
        }
        if (talk2 == 103) {
            speak = "I like to start my morning off right: A bowl of Wheaties and burning the Confederate flag."
        }
    }
}
    
client.login(token)
