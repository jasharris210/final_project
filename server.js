const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/music", cors(), (req, res) => {
  const music = [
    {
      id: 1,
      title: "Spice Girls",
      date: "Mar 03 2020",
      img: "/images/spice.jpeg",
      quote: "“Teach never preach, listen up, and and take heed…”",
      art:
        "Spice Girls, British pop group whose infectious dance songs dominated the global charts in the late 1990s. They cultivated a playful sex appeal under the banner of “Girl Power” to create a feminist alternative to the boy bands of the day. The band’s members were Ginger Spice (byname of Geraldine Estelle Halliwell; b. August 6, 1972, Watford, England), Sporty Spice (byname of Melanie Jayne Chisholm; b. January 12, 1974, Liverpool, England), Posh Spice (byname of Victoria Adams [later Victoria Beckham]; b. April 7, 1975, Hertfordshire, England), Scary Spice (byname of Melanie Janine Brown; b. May 29, 1975, Yorkshire, England), and Baby Spice (byname of Emma Lee Bunton; b. January 21, 1976, London, England).",
    },
    {
      id: 2,
      title: "Rina Sawayama",
      img: "/images/rina.jpeg",
      date: "Sep 17 2018",
      quote: "“Looking for forgiveness, I ran into your madness...”",
      art:
        "Just a few years ago, sniffing one of the world’s most famous stars at an exclusive New York City soirée was most definitely not a part of Rina Sawayama’s life. After she graduated with a degree in politics, psychology, and sociology from the University of Cambridge—a school she hated “with every cell of my body”—she worked a number of part-time jobs: scooping ice cream, doing nails, selling iPhones, all while also toiling away on her music. In 2017, she released RINA, an EP of sugary pop songs about technology’s stranglehold on society, which gained her a cult following. Her upcoming debut album, SAWAYAMA, due out next month, is a hard pivot. The record is stuffed with frenetic tracks that splinter into thrashing rock and slithering electro beats, threading Max Martin-style, capital-P Pop with guitar anthems built for arenas. It’s her first project for Dirty Hit Records, home to the 1975, and Rina says she wanted to chase that band’s freewheeling style, whiplashing from genre to genre, sometimes within the span of a single song.",
    },
    {
      id: 3,
      title: "The Cure",
      img: "/images/cure.jpeg",
      date: "Jul 28 2014",
      quote:
        "“It's easier for me to get closer to heaven than ever feel whole again”",
      art:
        "They almost blew it before they began. In April 1977, a group of recent school leavers from the Crawley area saw an advert in Melody Maker - Hansa Records, Germany's largest independent label, were seeking new bands. 'Wanna Be A Recording Star?' it said. Easy Cure did. In one form or another they'd already been Obelisk, a way out of religious education at Notre Dame Middle School, and Malice, a punkier thing at St. Wilfrid's Middle School. But Easy Cure were writing their own songs so guitarist Robert Smith gathered novice drummer Laurence Tolhurst, Michael Dempsey, a remarkably eloquent young bass player, Porl Thompson, a local superstar guitarist, and singer Peter O'Toole, a Bowie worshipper, into his parents dinning room. There they made a rough tape for Hansa. Within a month they'd auditioned in London and signed for one thousand pounds which they immediately spent on equipment, enabling them to play their ram- shackle pop at local venues like The Rocket in Crawley, where the band began to pick up a vociferous following despite O'Toole quitting to join a kibbutz. Smith took over on vocals. During October and November they made two trips to London's SAV studios to record their first demos, but Hansa hated them and pressurised the band to tackle some cover versions. Smith refused and Easy Cure were dropped in March the next year with nothing released. It seems Hansa couldn't stand the song the band wanted as their first single, a spiky precis of Camus' existentialist novel, 'The Outsider'. The song was called 'Killing An Arab'. So the band were back in the ranks of the unemployed - broke, down-hearted but not defeated. Thompson left, at odds with Smith's more minimal style, and they continued as a trio, Dempsey working as a porter in a mental hospital while Tolhurst took a job in a chemical lab. Smith did nothing but dream of not working and, on a whim he changed the name of the band to The Cure because it sounded less hippy. In a matter of months, they managed to scrounge 50 quid off a friend to record four original tracks - 'Boys Don't Cry', 'Fire In Cairo', 'It's Not You' and '10.15'- in Chestnut Studios in Sussex and they sent a tape to all the major record companies. By July they'd been rejected by everyone except Chris Parry, an A&R man at Polydor who'd signed and produced The Jam and who'd been instrumental in signing Siouxsie And The Banshees. He was looking for bands to form his own Fiction label and heard something naggingly awkwardly commercial in The Cure's early efforts. He met the band, liked their attitude, despite their dogged lack of dress sense, and signed them, putting them into Morgan Studios in September and sending them out on what he called toughening up gigs where they began to accrue a wider following despite being heaved off a Gen X tour after Tolhurst caught Billy Idol in flagrante with a young lady in the bogs. By December they were in the papers - NME called them, 'an abrasive light metal trio' and 'a triumph of impulse and spontaneity' while the Parry produced 'Killing An Arab'/'10.15' was released on Small Wonder, an independent label chosen when it was evident that Polydor, through whom Fiction were licensed were too inflexible to market any Cure product before Christmas. The band were in effect, sublet for 15,000 copies which, if they sold, would make enough to finance a further 15,000 on Fiction.",
    },
    {
      id: 4,
      title: "David Bowie",
      img: "/images/david.jpeg",
      date: "Aug 10 2019",
      quote:
        "“I don't know where I'm going from here, but I promise it won't be boring”",
      art:
        "David Robert Jones was born in Brixton on January 8, 1947. At age 13, inspired by the jazz of the London West End, he picked up the saxophone and called up Ronnie Ross for lessons. Early bands he played with – The Kon-Rads, The King Bees, the Mannish Boys and the Lower Third –provided him with an introduction into the showy worlds of pop and mod, and by 1966 he was David Bowie, with long hair and aspirations of stardom rustling about his head. Kenneth Pitt signed on as his manager, and his career began with a handful of mostly forgotten singles and a head full of ideas. It was not until 1969 that the splash onto the charts would begin, with the legendary Space Oddity (which peaked at  #5 in the UK). Amidst his musical wanderings in the late '60s, the young Bowie experimented with mixed media, cinema, mime, Tibetan Buddhism, acting and love. A first rock album, originally titled David Bowie then subsequently re-titled Man of Words, Man of Music and again as Space Oddity, paid homage to the kaleidoscopic influences of the London artistic scene, while hinting at a songwriting talent that was about to yield some of rock n roll's finest and most distinctive work--even if it would take the rest of the world a few years to catch up.",
    },
  ];

  res.json(music);
});

app.get("/api/lewks", cors(), (req, res) => {
  const lewks = [
    {
      id: 1,
      title: "Twiggy",
      date: "Feb 14 2016",
      img: "/images/twiggy.jpeg",
      quote: "“There's no need to dress like everyone else. ...”",
      art:
        "In 1949 Lesley Hornby, later rechristened 'Twiggy,' was born in Neasden, an unfashionable suburb in North London, where she grew up. Only sixteen when she began modeling in 1966, she introduced the cult of the 'celebrity model' and left an indelible legacy in other, more significant ways. Models in the 1950s, in both America and Britain, were styled and made up to look mature, sophisticated, and 'ladylike,' to complement the fashionable clothes of the time. In England many were young women from respectable families who had followed a modeling course at Lucie Clayton's Modeling and Grooming School in Mayfair. In America, such top models as Suzy Parker were also well-groomed girls from middle-class backgrounds. New photographic techniques allowed mass-circulation newspapers and magazines to print high-fashion images, and the models' names soon became familiar to the public.",
    },
    {
      id: 2,
      title: "Naomi Campbell",
      img: "/images/naomi.jpeg",
      date: "Mar 19 2015",
      quote: "“I have no regrets. I've got my health.”",
      art:
        "Naomi is still one of the best known and most successful black models of all time, her career has paved the way for women of colour in the fashion industry as she faced and defeated peoples prejudices. When she was 18 Naomi became the first black model on the cover of French Vogue and later become the first black model on the cover of Time Magazine. Naomi received support across the industry as she faced discrimination, Yves Saint Laurent and Azzedine Alaia were her two greatest supporters. In 1989 Naomi also appeared on the cover of US Vogue for the September issue, which is the publications most important edition, the first black model to ever do so. Naomi has appeared on more than 500 magazine covers and been shot by some of the most respected photographers in the industry including Steven Meisel, Peter Lindbergh, Herb Ritts and Bruce Weber. Naomi has also featured in countless campaigns for designers including Burberry, Yves Saint Laurent, Valentino, Louis Vuitton, Fendi, Chloé and Dolce & Gabbana. Following an appearance on the cover of Vogue alongside Christy Turlington, Linda Evangelista, Cindy Crawford and Tatjana Patiz, Naomi appeared with the same group in a music video for George Michael. The video for the song ‘Freedom’ has become symbolic of its time and it still one of the most famous music videos of all time. By the early 90s this group of models, with the later addition of Kate Moss, had formed a prestigious and in demand group of supermodels dubbed ‘Big Six’.",
    },
    {
      id: 3,
      title: "Cher",
      img: "/images/cher.jpeg",
      date: "May 19 2020",
      quote:
        "“If grass can grow through cement, love can find you at every time in your life.”",
      art:
        "Known for her powerful voice, stunning looks, and razor-sharp tongue, Cher has ruled the music world as the undisputed Goddess of Pop. From her humble beginnings in the 1960s as one half of the popular folk rock duo Sonny and Cher to her constantly evolving career as a solo artist, she paved the way for Madonna, Beyoncé, Lady Gaga, and countless other pop divas. An icon of feminine empowerment, Cher continues to carve out a unique niche in the notoriously male-dominated music business on her own terms through talent, hard work, and sheer force of will. Music, however, is just one facet of Cher's immense talent. By the mid-'70s, she had already conquered television as a capable comedienne opposite her ex-husband and musical partner Sonny Bono on their hit The Sonny and Cher Comedy Hour and later as the host of her own self-titled variety show. In the 1980s, Cher turned her attention to acting, first on Broadway and then in film, quickly establishing herself as one of the best dramatic actresses of her generation. Receiving critical accolades and award nominations for her work in the films Silkwood and Mask, Cher would win the Academy Award for best actress for the 1987 romantic comedy Moonstruck, cementing her reputation as an unparalleled cinematic talent.",
    },
    {
      id: 4,
      title: "Alexander Wang",
      img: "/images/alex.jpeg",
      date: "Aug 10 2019",
      quote:
        "“Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing.”",
      art:
        "Alexander Wang is part of American pop culture, and that, in a way, has always been the goal. The fashion designer's name gets dropped in songs by rappers like Kanye West, his clothes are worn by the country's top models, and he has millions of online followers. The son of Chinese immigrants who settled in San Francisco by way of Taiwan, Wang started his fashion label in New York City at just 20 years old. In the 15 years since, he's built a global empire of high fashion and collaborations with accessible consumer brands like Uniqlo and H&M. Representatives of his label declined to share financials, but noted that annual revenue exceeds $150 million, a number reported by Business of Fashion for 2016. Wang has achieved recognition, but now it's a matter of establishing staying power, the way iconic American designers Ralph Lauren and Calvin Klein have. To do this, he's taking risks like skipping Fashion Week, when most of the world's biggest designers showcase their upcoming lines, and hosting fashion shows where no one else will, as he did this past May, at New York's Rockefeller Center, where he invited the public to come watch. Wang is usually rocking a sleek, all-black outfit, and while at first glance that can make him look as icy as a runway models, he's also a total goofball. He's embracing the spotlight more as a way to connect with his fans, and he's sharing more of his personality. Earlier this year, he launched a YouTube channel that features him doing his best 'Real World' audition and getting a courtroom sketch artist to draw him as he reclines in a bathtub. ",
    },
  ];

  res.json(lewks);
});

app.get("/api/moovies", cors(), (req, res) => {
  const moovies = [
    {
      id: 1,
      title: "Kill Bill",
      date: "Oct 10 2018",
      img: "/images/kill.jpeg",
      quote: "“Revenge Is A Dish Best Served Cold.”",
      art:
        "Originally released in 2003, Kill Bill quickly became notorious as one of the most gruesome movies ever to have made it to general release. Volume 1 follows Thurman’s character, referred to only as The Bride, after she is brutally beaten and shot in the head on her wedding day. The film picks up when she wakes from a coma and embarks on a mission to exert revenge on whoever tried to kill her. The violence is martial-arts in form and grindhouse in scale, with swords severing limbs into volcanoes of blood. Although at the time of its release, the contemporary classic ruffled more than one or two critic’s feathers on account of its gratuitous spattering of gore, its real moment of controversy came just a few months ago when it became a touchstone of the #MeToo movement. Like many of Tarantino’s movies, Kill Bill was produced by Harvey Weinstein — a man who needs know introduction when it comes to violence against women — who Thurman revealed sexually assaulted her shortly after the release of another Tarantino movie, Pulp Fiction.",
    },
    {
      id: 2,
      title: "Call me by Your Name",
      img: "/images/call.png",
      date: "Nov 28 2017",
      quote: "“Cinema is a mirror of reality and it is a filter.”",
      art:
        "It is not easy to put Call Me by Your Name into words. Luca Guadagnino’s new film, which adapts André Aciman’s 2007 novel about a precocious 17-year-old who falls in lust and love with his father’s 24-year-old graduate student, is remarkable for how it turns literature into pure cinema, all emotion and image and heady sensation. You could call Call Me by Your Name an erotic film, then — and it absolutely, undeniably is. But I mean it in a way that’s broader than our modern narrow usage of the term: not just sex but also love, which is bigger and more frightening. Eros is a name for a kind of love that’s equal parts passion and torment, a kind of irrational heart fire that opens a gate into something longer-lasting. But it’s love that also feels, in the moment, like hurtling headlong off a cliff.",
    },
    {
      id: 3,
      title: "Clockwork Orange",
      img: "/images/Clock.jpeg",
      date: "Jan 30 2018",
      quote: "“We can destroy what we have written, but we cannot unwrite it.”",
      art:
        "When, as a medical student, I emerged from the cinema having watched Stanley Kubrick’s controversial film of A Clockwork Orange, I was astonished and horrified to see a group of young men outside dressed up as droogs, the story’s adolescent thugs who delighted in what they called “ultra-violence.” The film had been controversial in Britain; its detractors, who wanted it banned, charged that it glamorized and thereby promoted violence. The young men dressed as droogs seemed to confirm the charge, though of course it is one thing to imitate a form of dress and quite another to imitate behavior. Still, even a merely sartorial identification with psychopathic violence shocked me, for it implied an imaginative sympathy with such violence; and seeing those young men outside the theater was my first intimation that art, literature, and ideas might have profound—and not necessarily favorable—social consequences. A year later, a group of young men raped a 17-year-old girl in Britain as they sang “Singing in the Rain,” a real-life replay of one of the film’s most notorious scenes. The author of the book, Anthony Burgess, a polymath who once wrote five novels in a year, came to dislike this particular work intensely, not because of any practical harm to society that the film version of it might have caused but because he did not want to go down in literary history as the author of a book made famous, or notorious, by a movie. Irrespective of the value of his other work, however, A Clockwork Orange remains a novel of immense power. Linguistically inventive, socially prophetic, and philosophically profound, it comes very close to being a work of genius.",
    },
    {
      id: 4,
      title: "Clueless",
      img: "/images/clueless.jpeg",
      date: "Jul 8 2020",
      quote: "“Ugh, as if!”",
      art:
        "Jane Austen is widely considered an author of romantic comedies. But she was also a satirist who highlighted societal and economic inequities in a tone so wickedly wry that it could render most would-be boasters mute. In her novel Emma, she did both of these things: Spun a swoony story with multiple love triangles while also calling out her protagonist for her sheltered and blinkered view of the world. For those who have always admired Clueless for its surface pleasures without considering what lies beneath them, this particular moment may seem like a strange time to revisit it. After all, we are currently living through what Hank Stuever at the Washington Post characterized as the summer of Karen, a season that has produced video after video of entitled white women losing their shit over such calamities as having to wear a mask at Trader Joe’s or put their damn dog on a leash. There are some who probably think of Clueless as a Karen movie, the story of a privileged Beverly Hills teenager who would probably have grown up to be the sort of privileged suburban woman in 2020 demanding that salons reopen so she can finally get her roots done. I will admit that if you approached a white woman of a certain age mid-tantrum over some perceived injustice and said, “Hey, have you seen the movie Clueless?” there is a strong chance she would pause, mid-meltdown, and go, “Oh my God, I love that movie!” ",
    },
  ];

  res.json(moovies);
});

app.get("/api/popCulture", cors(), (req, res) => {
  const popCulture = [
    {
      id: 1,
      title: "Free Britney",
      date: "Apr 20 2021",
      img: "/images/britney.jpeg",
      art:
        "For nearly half of Britney Spears's decades-long career as a world-renowned pop star, the 'Womanizer' singer hasn't held full control of her life. Britney has been under a conservatorship helmed by her father, Jamie Spears, since the singer's infamous breakdown 12 years ago, which resulted in hospitalization and rehab. Though the stigma surrounding Spears's mental health battles has followed the singer since 2007, her career never faltered. Marking an official comeback with her 2008 album, Circus, Britney continued to release albums, tour, star in a years-long Las Vegas residency, and launch business ventures including her lucrative perfume and namesake lingerie lines. Despite multiple comebacks, however, Britney's longtime fans have vocalized their dissatisfaction in seeing the pop star continue to be under a conservatorship at 38 years old. Wholeheartedly convinced that the singer herself also wants to be free from the legal binding, fans launched the #FreeBritney movement, utilizing social media to bring awareness to the discrepancies surrounding the conservatorship.",
    },
    {
      id: 2,
      title: "Lil Nas X's Montero",
      img: "/images/nas.jpg",
      date: " Mar 30 2021",
      art:
        "Montero” is just the latest instance of a music star courting controversy through a provocative publicity move and riding the outrage—amplified by the power and velocity of social media—to the top of the charts. Last year, Cardi B and Megan Thee Stallion’s song “WAP” similarly used the shock value of its sexually-explicit content to become a cultural sensation. Lil Nas X’s latest success also shows how much more accepting the pop-culture world—and hip-hop in particular—has become for Black LGBTQ music stars over the past decade. A big shift occurred when boundary-breaking singer Frank Ocean revealed, shortly before the release of his 2012 breakout album “Channel Orange,” that his first love had been a man. The news made headlines because few Black artists had then openly addressed bisexuality or homosexuality. Lil Nas X is “completely authentic, fearlessly speaks truth to power and [is] masterful at creating cultural moments,” says Larry Miller, who heads the music-business program at New York University’s Steinhardt School. “He’s the perfect pop artist for right now.”",
    },
    {
      id: 3,
      title: "Kanye West vs Taylor Swift",
      img: "/images/kanye.jpeg",
      date: "Aug 26 2009",
      art:
        "Leave it to Kanye West to produce one of the most infamous moments in VMAs history before the 2009 show was even an hour old. It happened after Taylor Swift’s victory in the Best Female Video category for “You Belong With Me,” which beat out Beyoncé’s “Single Ladies (Put a Ring On It).” Just moments after Swift accepted the Moonman and began her acceptance speech, West stormed the stage, taking the microphone from Swift to announce Beyoncé deserved the award. “Thank you so much!” Swift began. “I always dreamed about what it would be like to maybe win one of these some day, but I never actually thought it would have happened. I sing country music so thank you so much for giving me a chance to win a VMA award. Before she could continue, West broke in. “Yo Taylor, I’m really happy for you, I’ll let you finish, but Beyoncé has one of the best videos of all time. One of the best videos of all time!” Kanye shouted to a mortified Swift and the speechless audience. And as quickly as he ran onstage — MTV cut away to show Pink applauding Taylor, and when they flashed back to Swift, West already had the mic in his hand — he was off, leaving a shocked Swift in his wake.",
    },
    {
      id: 4,
      title: "Paris Hilton",
      img: "/images/paris.jpg",
      date: "Jun 1 2019",
      art:
        "The friendship between Lohan and Hilton began like two colliding supernovas. At first, Lohan seemed to be a replacement for Hilton's former best friend Nicole Richie, with whom her relationship had noticeably cooled. But after a while, Hilton and Lohan became inseparable, popping up at party spots all over Hollywood. Lohan, with her perma-tan and bleached hair, and Hilton were two blondes tearing up the town. But barely had their friendship begun when it turned sour. It happened on a night out in May 2006 when Brandon Davis, son of an oil tycoon and another very 2006 person, went on a rant about Lohan. Hilton was with him and on the phone the whole time, but her smirk was enough to send the paparazzi flashbulbs flashing. At the time, Lohan was rumoured to be dating Stavros Niarchos, the Greek shipping magnate who was Hilton's ex-boyfriend. (Again, if you read any tabloid magazines back in 2006, these names will be all too familiar.) Davis railed against Lohan in a video, calling her 'firecrotch' and that she 'sh*ts freckles. ",
    },
  ];

  res.json(popCulture);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
