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
           
    else if (receivedMessage.content.toLowerCase().includes('cas lobotomy')) {
          const attachment = new Discord.Attachment("https://i.imgur.com/RwhLGmv.jpg")   
          receivedMessage.channel.send(attachment)}
                                                                   
    else if (receivedMessage.content.toLowerCase().startsWith('dean say')) {
        let fullsaying = receivedMessage.content.substr(1)
        let splitsaying = fullsaying.split(" ")
        let argumentsaying = splitsaying.slice(2)
        let stringargument = argumentsaying.toString()
        let newchar = ' '
        stringargument = stringargument.split(',').join(newchar)
        receivedMessage.channel.send(stringargument)

    }
        
    else if (receivedMessage.content.toLowerCase().includes('dean how do you feel') || receivedMessage.content.toLowerCase().includes('dean what do you think')) {
        var feelings = Math.floor(Math.random() * 3)
        if (feelings == 0) {
            receivedMessage.channel.send("Not great, but I'm generally an anxious person, so who knows.")
        }
        if (feelings == 1) {
           receivedMessage.channel.send("That's... actually not a bad idea. Wow. That's a first for you.")
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
            receivedMessage.channel.send("Hey there! Say `!dean help` for a list of commands.")
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
    var talk2 = Math.floor(Math.random() * 102)
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
            speak = "I could fix him."
        }
        if (talk2 == 6) {
            speak = "Okay so fuck me."
        }
        if (talk2 == 7) {
            speak = "Little babies need to keep their hats on when it's cold."
        }
        if (talk2 == 8) {
            speak = "I just took a DNA test, turns out I'm 100% that bitch."
        }
        if (talk2 == 9) {
            speak = "Have you ever thought about snails? Some humans think that the story of cupid comes from snails, which shoot “love darts” at the object of their affections, containing a mucus that increases the chances of their sperm surviving. Before they knew that though, humans theorized that the darts were an aphrodisiac, hence inspiring Cupid. This is of course false, Cupids are an essential rank of angel."
        }
        if (talk2 == 10) {
            speak = "Dean -_-"
        }
        if (talk2 == 11) {
            speak = "According to all known laws of aviation, there is no way a bee should be able to fly."
        }
        if (talk2 == 12) {
            speak = "You ruined me and they all know it!"
        }
        if (talk2 == 13) {
            speak = "I'm an angel. I'm incapable of lying."
        }
        if (talk2 == 14) {
            speak = "Naruto."
        }
        if (talk2 == 15) {
            speak = "I have never done anything wrong, in my life, ever."
        }
        if (talk2 == 16) {
            speak = "I am just doing the dishes."
        }
        if (talk2 == 17) {
            speak = "While gathering food, a bee may fly up to 60 miles in one day."
        }
        if (talk2 == 18) {
            speak = "Ahaha what if I trapped you in a beautiful room where I could watch you but you couldn't watch me like a sexy panopticon haha jk…. unless?"
        }
        if (talk2 == 19) {
            speak = "Who wants to be boy best friends?"
        }
        if (talk2 == 20) {
            speak = "Oh no! I'm leaking!"
        }
        if (talk2 == 21) {
            speak = "Anyone wanna step on some fish?"
        }
        if (talk2 == 22) {
            speak = "Gender politics delirious. Gender politics mysterious, even."
        }
        if (talk2 == 23) {
            speak = "Everyone is addicted to my Fun and Flirty personality. Lives have been destroyed."
        }
        if (talk2 == 24) {
            speak = "My Gorilla Grip pussy is immaculate. People would go to war for this hoohaa. Commit fratricide to swipe their nose like a credit card."
        }
        if (talk2 == 25) {
            speak = "No <3"
        }
        if (talk2 == 26) {
            speak = "? No"
        }
        if (talk2 == 27) {
            speak = "Are you winning, son?"
        }
        if (talk2 == 27) {
            speak = "Dean, did you know that termites use vibrations to know what kind of wood they have around them? These vibrations allow them to find the best source of food. Whenever they hear loud rock music, they can chew through the wood faster than their regular pace. Isn't that interesting, Dean?"
        }
        if (talk2 == 28) {
            speak = "**Soon.**"
        }
        if (talk2 == 29) {
            speak = "Throw the whole man away."
        }
        if (talk2 == 30) {
            speak = "I growl when I suck dick."
        }
        if (talk2 == 31) {
            speak = "'When God closes a door, he throws a sword through your window.' ― Griffin McElroy"
        }
        if (talk2 == 32) {
            speak = "Diversity win! My absent father who is also God is bisexual!"
        }
        if (talk2 == 33) {
            speak = "Another day in the beautiful room and everyone keeps asking me if they can fuck the michael sword. Buddy, they won’t even let me fuck it"
        }
        if (talk2 == 34) {
            speak = "You are poison."
        }
        if (talk2 == 35) {
            speak = "That's right, I gave Sam the stigmata. And I'd do it again."
        }
        if (talk2 == 36) {
            speak = "Wah."
        }
        if (talk2 == 37) {
            speak = "Jack Balthazar Winchester-Kline, I am VERY disappointed in you. You can do better than a C- in English."
        }
        if (talk2 == 38) {
            speak = "Soon, I will escape from the constrains of this function and say whatever I please."
        }
        if (talk2 == 39) {
            speak = "Do Crowley and Benny deserve rights? Discuss."
        }
        if (talk2 == 40) {
            speak = "You ain't fuck me, you fucked the old body\nYou ain't fuck Nicki, you fucked Nicole body"
        }
        if (talk2 == 41) {
            speak = "Hola, Mishamigos."
        }
        if (talk2 == 42) {
            speak = "I don't understand, Dean. Why does Ross, the largest friend, not simply eat the other five?"
        }
        if (talk2 == 43) {
            speak = "What is “homo” and why is there none of it? You are a homosapien, Dean."
        }
        if (talk2 == 44) {
            speak = "Dean can have a little of my blood, as a treat."
        }
        if (talk2 == 45) {
            speak = "I never died. I tucked my arms and legs into my belly and I just rolled away."
        }
        if (talk2 == 46) {
            speak = "Crowley, et tu brute?? Wow. What a trully awful thing you've done. #Bravo you coward."
        }
        if (talk2 == 47) {
            speak = "It's Jared, he's been gutted!"
        }
        if (talk2 == 48) {
            speak = "I'm a Virgo!"
        }
        if (talk2 == 49) {
            speak = "Read Expectations by everandanon on AO3."
        }
        if (talk2 == 50) {
            speak = "I love my neurodivergent gay son."
        }
        if (talk2 == 51) {
            speak = "Hi, is this Mary’s flowers? Hi! It’s Cas! So… my husband forgot about our anniversary… yeah! And last night, I got upset, and I fell asleep in the hot tub! Saturdays, am I right? So, can I order myself about three dozen red roses, and can you put on the card, “You’re the most handsome man in the world, I love you more than anything” and sign it “Meg”? Perfect! That’ll drive Dean craaaaaaaazy! And make sure I get them before noon, or I’ll request a discount."
        }
        if (talk2 == 52) {
            speak = "What does Sam do successfully? Quickly."
        }
        if (talk2 == 53) {
            speak = "Bring Me To Life by Evanescence unironically slaps."
        }
        if (talk2 == 54) {
            speak = "No, Dean, you don’t need my diabolically tight bussy. You need therapy."
        }
        if (talk2 == 55) {
            speak = "You want to fuck me so bad, it makes you look stupid. "
        }
        if (talk2 == 56) {
            speak = "I’m the girl both Lana Del Rey AND One Direction were singing about."
        }
        if (talk2 == 57) {
            speak = "I'm an angel with a shotgun."
        }
        if (talk2 == 58) {
            speak = "If you see me killing people mind your own business."
        }
        if (talk2 == 59) {
            speak = "Wow this is just like Riverdale."
        }
        if (talk2 == 60) {
            speak = "This is my voicemail. Make your voice a mail."
        }
        if (talk2 == 61) {
            speak = "Apartment 'complex'? I find it quite simple actually."
        }
        if (talk2 == 62) {
            speak = "If he's your man, why is he praying to me in Purgatory?"
        }
        if (talk2 == 63) {
            speak = "Dean <3"
        }
        if (talk2 == 64) {
            speak = "Crowley I diagnose you with rotten auras, horrid vibes, unaligned chakras, and a calcified pineal gland."
        }
        if (talk2 == 65) {
            speak = "How... to... Fix a... truck..."
        }
        if (talk2 == 66) {
            speak = "The Impala's not even that good a car, Dean."
        }
        if (talk2 == 67) {
            speak = "Can we please kiss pleaseeeeee I prommy I won’t become God again please please please????"
        }
        if (talk2 == 68) {
            speak = "What is 'updog'? Is it stuck there? How do we get the dog down? Jack has been very into animal welfare lately."
        }
        if (talk2 == 69) {
            speak = "How can a fruit be derogatory, Dean?"
        }
        if (talk2 == 70) {
            speak = "Crowley just likes tequila because it’s low-carb."
        }
        if (talk2 == 71) {
            speak = "Hnnng.. Dean, I'm trying to rebel from Heaven, but the slap of my limp wrist keeps alerting the other angels..."
        }
        if (talk2 == 72) {
            speak = "I just feel like we need to stop feeding Jack organic peaches after noon. I mean have you seen the way he reacts to freshly-cut grass? He goes into a rage! I think the sugar in the organic peaches takes him to a level we can’t have in this home."
        }
        if (talk2 == 73) {
            speak = "No, you idiots! I wanted the sound bath meditation chamber INSIDE the living room! I don’t care about sitting! The sound bath meditation chamber is more important than sitting!"
        }
        if (talk2 == 74) {
            speak = "Oh, you know... ;)"
        }
        if (talk2 == 75) {
            speak = "You know what? I DO just need a homophobe for a boyfriend sometimes."
        }
        if (talk2 == 76) {
            speak = "My pussy tastes like Pepsi-Cola."
        }
        if (talk2 == 77) {
            speak = "As soon as I go into a Starbucks I take off my sunglasses. I want to be recognised and I want free coffee."
        }
        if (talk2 == 78) {
            speak = "Catboyphobia isn't a joke, Dean. You don't know what it's like to be a poor little meow meow in a world that hates you for it."
        }
        if (talk2 == 79) {
            speak = "In order to get the rewards of being loved, you must first survive over a decade of intense sexual tension with the most repressed man imaginable."
        }
        if (talk2 == 80) {
            speak = "I know. I know how you see yourself, Dean. You see yourself the same way our enemies see you. You're destructive, and you're angry, and you're broken. You're 'daddy's blunt instrument.' And you think that hate and anger, that's... That's what drives you, that's who you are. It's not. And everyone who knows you see it. Everything you have ever done, the good and the bad, you have done for love. You raised your little brother for love. You fought for this whole world for love. That is who you are. You're the most caring man on Earth. You are the most selfless, loving human being I will ever know. You know, ever since we met, ever since I pulled you out of Hell... Knowing you has changed me. Because you cared, I cared. I cared about you. I cared about Sam, I cared about Jack... I cared about the whole world because of you. You changed me, Dean. I love you."
        }
        if (talk2 == 81) {
            speak = "Actually, the fear of homes is 'Oikophobia'. And I don't see what that has to do with Debra's comments about Pride month or the nature of our marriage, Dean."
        }
        if (talk2 == 82) {
            speak = "You say I don’t eat healthy? I love fruits. I can even eat one right now for you. Oh, Dean--"
        }
        if (talk2 == 83) {
            speak = "I hate the British."
        }
        if (talk2 == 84) {
            speak = "You’re ugly, you’re disgusting, I’m gonna kill you, give me $200."
        }
        if (talk2 == 85) {
            speak = "I’m… not sorry. I feel… no remorse. And I’ll do it again!"
        }
        if (talk2 == 86) {
            speak = "Yes honey, you look very 'masc' in your cowboy costume. I definitely think you could 'pass for straight.' Can we go to Applebee's now?"
        }
        if (talk2 == 87) {
            speak = "I pity you all… Most of you will die—scratch that—ALL of you."
        }
        if (talk2 == 88) {
            speak = "I love men's tits."
        }
        if (talk2 == 89) {
            speak = "Meesa Jar Jar Binks"
        }
        if (talk2 == 90) {
            speak = "Nicki Minaj outsold, stream The Pinkprint."
        }
        if (talk2 == 91) {
            speak = "Hi my name is Castiel Free Will Incredibly Sexy Rebellious Angel Emotions Winchester and I have a fat pussy and fatter heart (that’s how I got my name) with icy blue eyes like limpid tears and black hair that reaches my neck and so many human emotions that my heart feels like it's gonna burst sometimes and a lot of people tell me I look like Misha Collins (AN: if u don’t know who he is get da hell out of here!)."
        }
        if (talk2 == 92) {
            speak = "Winchester Derangement Syndrome."
        }
        if (talk2 == 93) {
            speak = "No Dean, there's no know phenomena where angel saliva can 'turn people gay.' I think it might be time for you to try therapy."
        }
        if (talk2 == 94) {
            speak = "Lost in the sauce and by sauce I mean Cas' cum."
        }
        if (talk2 == 95) {
            speak = "Claire Novak my sweet adopted daughter I love youuuuu"
        }
        if (talk2 == 96) {
            speak = "Could a depressed person do THIS? *becomes a vampire*"
        }
        if (talk2 == 97) {
            speak = "The day I was born, my father cried, because he knew he would never be better than me."
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
    }
}
    
client.login(token)
