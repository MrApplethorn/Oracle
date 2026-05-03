const drawTitles = [
  {
    title: "Party Gathers",
    keys: ["name", "situation"],
    description: "This card represents the situation the characters are in before the adventure starts."
  },
  {
    title: "Adventure Begins",
    keys: ["name", "person"],
    description: "This card represents how the adventure starts. The situation that starts the action or an individual who gives the adventurers a quest"
  },
  {
    title: "Journey",
    keys: ["name", "place"],
    description: "This card describes the transition from the introduction to the adventure location, something the characters encounter along the way."
  },
  {
    title: "Entrance",
    keys: ["name", "place"],
    description: "This card describes the entrance to the adventure location."
  },
  {
    title: "First Challenge",
    keys: ["name", "creature"],
    description: "These cards describe the primary challenge the characters must face in the adventure."
  },
  {
    title: "Second Challenge",
    keys: ["name", "creature"],
    description: "These cards describe the secondary challenge the characters must face in the adventure."
  },
  {
    title: "Third Challenge",
    keys: ["name", "creature"],
    description: "These cards describe the tertiary challenge the characters must face in the adventure."
  },
  {
    title: "Guardian",
    keys: ["name", "creature"],
    description: "This card describes the final obstacle the characters must overcome to achieve their goal and claim the Treasure."
  },
  {
    title: "Treasure",
    keys: ["name", "treasure"],
    description: "This card describes a treasure that is the ultimate goal or reward of the adventure."
  }
];
const cards = [
      {
        name: "Aberration",
        person: "Someone with a distorted view of reality, perhaps a cultist or a warlock of the Great Old One; perhaps simply an eccentric person with a nonconformist style." ,
        creature: "A creature corrupted by the influence of the Far Realm, or an Aberration.",
        place: "A place where the laws of physics or magic are suspended or distorted.",
        treasure: "An art object that reflects a warped view of reality, or a magic item made by Aberrations.",
        situation: "An incursion of energy or creatures from the Far Realm or the deep Underdark.",
        image: "images/aberration.webp"
      },
      {
        name: "Aberration Reversed",
        person: "A person (perhaps a druid) dedicated to preserving nature against corrupting influences." ,
        creature: "A creature that has resisted the corruption of its nature, or a trap that deals psychic damage.",
        place: "A place where nature has overgrown the remnants of a corrupting influence.",
        treasure: "An art object depicting the triumph of nature over corruption, or a magic item useful against Aberrations (such as a Ring of Mind Shielding).",
        situation: "People or creatures fighting against the influence of Aberrations.",
        image: "images/aberration reversed.webp"
      },
      {
        name: "Balance",
        person: "A fair-minded person who can see multiple perspectives and judge impartially." ,
        creature: "A trap, a Beast, a Construct, or an otherwise impartial foe.",
        place: "A place where different forces exist in balance—such as a civilization in balance with nature, a land in balance with water, or chaos in balance with order.",
        treasure: "A treasure with value to two competing factions, or with two equal magical powers.",
        situation: "A situation where maintaining balance is important: keeping rivals satisfied, preserving the balance of power among different authorities, or rejecting false dichotomies and forced choices.",
        image: "images/balance.webp"
      },
      {
        name: "Balance Reversed",
        person: "A judgmental or biased person willfully ignoring one perspective in favor of another." ,
        creature: "A Celestial, a Fiend, or some other creature strongly associated with a particular alignment or ideology.",
        place: "A place where the balance of elemental or natural forces has been upset, with negative consequences.",
        treasure: "A treasure valuable only to certain people, or that can be used only in a very specific way.",
        situation: "Something being over- or undervalued.",
        image: "images/balance reversed.webp"
      },
      {
        name: "Beast",
        person: "A person who avoids the comforts of civilization or indulges predatory attitudes." ,
        creature: "A Beast, or a similar creature (such as a Fey or a Monstrosity) that is animal-like; alternatively, a pit or other confined space with a trapped animal within.",
        place: "A place where animals roam freely.",
        treasure: "A treasure that incorporates fur, feathers, bones, or claws from a Beast, or a magic item that allows transformation into a Beast (such as a Cloak of the Bat or Staff of the Python).",
        situation: "A situation involving hunting animals or animals preying on people.",
        image: "images/beast.webp"
      },
      {
        name: "Beast Reversed",
        person: "A person who fiercely represses urges they deem 'bestial' in themselves or others." ,
        creature: "A domesticated animal or a familiar.",
        place: "A place where animals are contained, such as a farm or a zoo.",
        treasure: "An ornate saddle, a goad, or another item related to the use of domestic animals, or a magic item that allows control of Beasts (such as a Potion of Animal Friendship).",
        situation: "Domestic animals rebelling against people's control.",
        image: "images/beast reversed.webp"
      },
      {
        name: "Book",
        person: "A writer, poet, or compulsive note-taker." ,
        creature: "A creature that keeps an exhaustive diary in some form, or that seeks a scribe to record its deeds.",
        place: "A scriptorium or printing press.",
        treasure: "A valuable or magical pen, an ink vial, or a set of pigments (such as Nolzur's Marvelous Pigments).",
        situation: "A situation that requires gleaning information from written clues.",
        image: "images/book.webp"
      },
      {
        name: "Book Reversed",
        person: "A well-educated person who reads often." ,
        creature: "A trap involving written runes (such as a Glyph of Warding or Symbol spell).",
        place: "A library or another storehouse of written knowledge.",
        treasure: "A valuable or magical written work, such as a book or scroll.",
        situation: "Secrets that should never have been discovered but were written down.",
        image: "images/book reversed.webp"
      },
      {
        name: "Bridge",
        person: "A mediator who enjoys helping others overcome misunderstandings or grievances." ,
        creature: "Someone who coordinates the efforts of different kinds of creatures, such as a mind flayer mastermind using grimlocks and trolls as agents.",
        place: "A bridge across a river or chasm.",
        treasure: "An art object depicting a bridge, or a magic item intended to help overcome obstacles (such as Boots of Striding and Springing).",
        situation: "An urgent need for bridges between long-opposed factions.",
        image: "images/bridge.webp"
      },
      {
        name: "Bridge Reversed",
        person: "A person who is part of a longstanding feud between two families or groups." ,
        creature: "A creature that lairs near, on, or under a bridge and either collects tolls from those using the bridge or tries to eat them.",
        place: "A river or chasm with no bridge, or where the bridge is unsafe or has collapsed.",
        treasure: "An art object depicting walls, barriers. or a labyrinth; alternatively, a magic item that creates magical walls (such as a Cube of Force).",
        situation: "Open conflict between two families or groups.",
        image: "images/bridge reversed.webp"
      },
      {
        name: "Campfire",
        person: "A person on vacation, enjoying time away from work and pursuing activities they enjoy." ,
        creature: "A creature that alternates brief periods of activity with long periods of rest (as many reptiles and Dragons do); alternatively, a trap that requires a long time to reset between activations.",
        place: "A place recently used as a campsite.",
        treasure: "An art object depicting a peaceful scene, or a magic item that facilitates safe rest (such as a Rod of Security).",
        situation: "A period of rest in the middle of a journey or an adventure.",
        image: "images/campfire.webp"
      },
      {
        name: "Campfire Reversed",
        person: "An exhausted person." ,
        creature: "A creature immune to exhaustion (such as an angel, a golem, an Ooze, or an Undead), or a trap or hazard with a constant, ongoing effect.",
        place: "Somewhere not conducive to rest, such as a busy marketplace active at all hours.",
        treasure: "An art object that suggests frenetic activity, or a magic item that helps its user remain alert (such as a Sentinel Shield),",
        situation: "A situation that demands unrelenting activity.",
        image: "images/campfire reversed.webp"
      },
      {
        name: "Cavern",
        person: "A person who asks probing questions but shares little." ,
        creature: "A creature (such as a piercer or a roper) that mimics the features of natural caverns.",
        place: "A cavern or a cavernous building such as a large temple.",
        treasure: "A geode, jewelry made from gems and precious metals, or a magic item that grants darkvision (such as Goggles of Night).",
        situation: "A situation that requires delving into hidden motivations and secrets.",
        image: "images/cavern.webp"
      },
      {
        name: "Cavern Reversed",
        person: "A person who lives for the moment, avoiding introspection." ,
        creature: "A creature that swallows prey whole, or a trap that causes a ceiling or roof to collapse.",
        place: "A small niche or cave.",
        treasure: "An art object that lacks a sense of depth or perspective.",
        situation: "Everyone's motivations exposed for all to see.",
        image: "images/cavern reversed.webp"
      },
      {
        name: "Celestial",
        person: "A devout person who looks for miracles and the presence of the divine in all parts of life." ,
        creature: "A Celestial or other creature that has connections to the gods, or a trap that deals radiant damage.",
        place: "A location on the upper planes, or a place suffused with their influence.",
        treasure: "An art object depicting angels or other Celestials, treasure from the Upper Planes, or magic items made by Celestials.",
        situation: "Communication between the Upper Planes and the Material Plane—perhaps in dreams or visions, or with Celestials as intermediaries.",
        image: "images/celestial.webp"
      },
      {
        name: "Celestial Reversed",
        person: "Someone who carries a grudge over a real or perceived injury caused by a god or Celestial." ,
        creature: "A fallen Celestial or similar creature that has lost its connection to the divine,",
        place: "A place intended to ward off Celestials and influence from the Upper Planes.",
        treasure: "A treasure depicting a Celestial's fall, or a magic item useful against Celestials.",
        situation: "A situation involving Celestials' unwelcome interference in mortal affairs.",
        image: "images/celestial reversed.webp"
      },
      {
        name: "Comet",
        person: "A serious person with a gloomy outlook, perhaps carrying bad news." ,
        creature: "A creature regarded as an ill omen, or signs that a dire creature approaches; alternatively, a trap marked by clear signs, perhaps surrounded by the corpses of its victims.",
        place: "A place with a connection to astronomical events: perhaps an observatory or a meteorite's crater.",
        treasure: "A treasure that carries a curse, or one whose power is destined to be used for destructive ends.",
        situation: "A crisis about to spiral out of control.",
        image: "images/comet.webp"
      },
      {
        name: "Comet Reversed",
        person: "A person who is grieving or delights in the suffering of others." ,
        creature: "The destruction left in the wake ofa rampaging creature, or smaller creatures fleeing from a larger one.",
        place: "A ruin where a terrible event occurred in the past and that might now be haunted.",
        treasure: "A treasure formed or shaped by disaster, bloodstained or haunted by former owners: alternatively, something good arising from a bad situation.",
        situation: "The calm after a devastating storm: a situation where people are reeling from awful news or events.",
        image: "images/comet reversed.webp"
      },
      {
        name: "Construct",
        person: "An artisan who delights in handcrafted goods.",
        creature: "A construct, particularly designed to be animated (like a golem) as opposed to an ordinary object (like a broom or rug) that has been animated.",
        place: "A workshop or art studio.",
        treasure: "An exquisitely crafted art object (especially one with practical use) or magical tools.",
        situation: "An artisan attempting to bring a construct to life.",
        image: "images/construct.webp"
      },
      {
        name: "Construct Reversed",
        person: "A person who scorns the idea of working with their hands.",
        creature: "A creature able to destroy buildings and objects, such as one with the Siege Monster trait.",
        place: "A garbage heap or another place where objects are discarded.",
        treasure: "An object fashioned with minimum alteration of its raw materials, or a magic item useful against Constructs (such as a Mace of Smiting).",
        situation: "A rueful artisan attempting to destroy a Construct that has broken free of all restraint.",
        image: "images/construct reversed.webp"
      },
      {
        name: "Corpse",
        person: "An evil person whose morality has rotted away.",
        creature: "A zombie or similar corporeal Undead whose flesh is decaying, or a trapped corpse.",
        place: "Somewhere things are left to rot, such as a graveyard or charnel house.",
        treasure: "An art object depicting dead bodies, a corpse just starting to decay, or a magic item that causes decay (such as a Staff of Withering).",
        situation: "An organization or institution overwhelmed by corruption.",
        image: "images/corpse.webp"
      },
      {
        name: "Corpse Reversed",
        person: "A good person who remains uncorrupted despite being surrounded by wickedness.",
        creature: "An Ooze or fungus creature that facilitates the decomposition of corpses.",
        place: "A place where fungus grows abundantly on a diet of rotting flesh.",
        treasure: "A treasure that remains uncorrupted in the midst of rot.",
        situation: "An attempt to corrupt a respected and noble organization.",
        image: "images/corpse reversed.webp"
      },
      {
        name: "Crossroads",
        person: "A person agonizing about a difficult decision or who regrets a recent decision.",
        creature: "A creature that induces confusion or erratic behavior (such as an umber hulk).",
        place: "A crossroads, or a settlement where trade routes cross.",
        treasure: "An art object that depicts a crossroads or cross patterns, or a magic item with multiple properties or uses (such as a staff).",
        situation: "A choice between options that are equally appealing—or equally disastrous.",
        image: "images/crossroads.webp"
      },
      {
        name: "Crossroads Reversed",
        person: "A person who refuses to make decisions, relying instead on inaction or random determination.",
        creature: "A creature that prevents others from acting (such as a ghoul).",
        place: "A place that constrains movement, such as a narrow ravine or passage.",
        treasure: "An art object featuring overlapping circular patterns, or a magic item that does only one thing a limited number of times (such as a wand).",
        situation: "A situation stemming from someone's refusal to act or choose.",
        image: "images/crossroads reversed.webp"
      },
      {
        name: "Donjon",
        person: "A prisoner, or a person who feels trapped.",
        creature: "A creature that grapples or swallows prey whole.",
        place: "A place of imprisonment, such as a literal dungeon or a menagerie.",
        treasure: "A treasure locked in a vault, or magic with the power to bind or imprison.",
        situation: "An impasse, a situation that threatens someone's freedom, or a situation where someone's indecision is keeping everyone in suspense.",
        image: "images/donjon.webp"
        },
        {
        name: "Donjon Reversed",
        person: "A recently freed or escaped prisoner, or a free thinker who rejects social norms.",
        creature: "A creature that has escaped from captivity or gone feral.",
        place: "A prison broken open, or a place associated with liberation (such as a monument commemorating emancipation).",
        treasure: "A treasure that once held a being captive, such as an Efreeti Bottle that has lost its magic or an empty Iron Flask.",
        situation: "A situation that requires creative solutions, or an effort to free people or creatures from captivity.",
        image: "images/donjon reversed.webp"
        },
        
        {
        name: "Door",
        person: "Someone trying to make amends for past misdeeds and adopt a better way of life.",
        creature: "A creature that changes form, or a trapped door.",
        place: "A door, an open doorway, or a passage from one place to another.",
        treasure: "An art object that looks very different from various perspectives, or a magic item that creates portals or allows teleportation (such as an Amulet of the Planes).",
        situation: "An opportunity to deal with a situation differently than you have in the past.",
        image: "images/door.webp"
        },
        {
        name: "Door Reversed",
        person: "A person who keeps repeating the same mistakes and misdeeds.",
        creature: "A creature that causes its prey or enemies to change, such as a lycanthrope or slaad.",
        place: "A locked door or barricaded passage.",
        treasure: "A jeweled chest or lockbox, or a magic item that resists change (such as an Immovable Rod).",
        situation: "A situation that keeps recurring.",
        image: "images/door reversed.webp"
        },
        
        {
        name: "Dragon",
        person: "A dragonborn, a person who uses draconic magic, a person who is fascinated by dragons, or a person who hoards wealth or other goods.",
        creature: "A Dragon or similar creature.",
        place: "The lair of a Dragon or some other impressive creature, or a site of great magical power.",
        treasure: "Large quantities of treasure, though not necessarily of great monetary value (for example, many copper coins or a large collection of cheap statuettes).",
        situation: "Someone hoarding resources that are widely needed or desired.",
        image: "images/dragon.webp"
        },
        {
        name: "Dragon Reversed",
        person: "Someone with a grudge against a particular Dragon or against Dragons in general.",
        creature: "A dracolich or another Undead dragon, a Construct that resembles a Dragon, or another Dragon-like creature.",
        place: "A place where a Dragon was slain, leaving a magical or physical scar on the land.",
        treasure: "An art object depicting the death of a Dragon, or a magic item useful against Dragons (such as a Dragon Slayer).",
        situation: "A group that plans to drive a Dragon from its lair, steal from its hoard, or kill it.",
        image: "images/dragon reversed.webp"
        },
        
        {
        name: "Elemental",
        person: "A person who uses magic tied to the elements or who is cartoonishly two-dimensional.",
        creature: "An Elemental creature, or a creature that uses air, earth, fire, or water magic.",
        place: "A place influenced by the Elemental Planes or associated with an element (such as a cave, a mountain, a volcano, or a river).",
        treasure: "An art object that incorporates material from an Elemental Plane or imagery of the elements, or a magic item that conjures or controls Elementals (such as a Ring of Elemental Command).",
        situation: "Forces from the Elemental Planes spilling into the world.",
        image: "images/elemental.webp"
        },
        {
        name: "Elemental Reversed",
        person: "A person driven by an internal conflict between two opposed tendencies or influences.",
        creature: "A creature (such as a mephit) that combines the substance of two Elemental Planes, or creatures from opposing Elemental Planes.",
        place: "A place where forces of the Elemental Planes are in opposition to each other.",
        treasure: "An art object that incorporates material from multiple Elemental Planes or imagery of elements in opposition; a magic item useful against Elementals.",
        situation: "Opposed forces from two or more Elemental Planes entering the world.",
        image: "images/elemental reversed.webp"
        },
        
        {
        name: "Euryale",
        person: "A person who observes without becoming involved or attached.",
        creature: "A medusa or another creature with the power to petrify or a gaze attack.",
        place: "Somewhere with commanding views, such as a watchtower or a high promontory.",
        treasure: "A landscape painting or tapestry, or a magic item that enhances vision (such as Goggles of Night).",
        situation: "A situation that rewards or requires careful observation, such as a surveillance operation.",
        image: "images/euryale.webp"
      },
      {
        name: "Euryale Reversed",
        person: "A nosy person who inserts themself into situations where they don't belong.",
        creature: "A creature made of or associated with stone.",
        place: "A place with narrow windows (perhaps arrow slits) or with a limited view, perhaps underground.",
        treasure: "A valuable sculpture or statue, a gemstone, or a magic item made from stone, such as a Figurine of Wondrous Power.",
        situation: "A situation arising from people's unwillingness to observe things as they are, or their tendency to project their own feelings and opinions onto others.",
        image: "images/euryale reversed.webp"
      },  
      {
        name: "Expert",
        person: "A person (perhaps a bard, a rogue, a ranger, or an artificer) with exactly the right skills for the task at hand.",
        creature: "A creature with abilities similar to those of a bard, ranger, or rogue, such as expertise in one or more skills.",
        place: "A place (such as a guild hall) where skilled folk gather to share their expertise.",
        treasure: "A treasure with practical use, such as a musical instrument or a tool.",
        situation: "A situation that requires and rewards the expert application of practical skills.",
        image: "images/expert.webp"
      },
      {
        name: "Expert Reversed",
        person: "A person who believes themself an expert but isn't actually helpful.",
        creature: "A creature that relies on brute strength instead of skill or stealth.",
        place: "A place where children learn the basics of useful skills.",
        treasure: "A wildly impractical treasure with no actual use, unwieldy to wear or display.",
        situation: "A situation stemming from someone's expertise being overlooked or ignored.",
        image: "images/expert reversed.webp"
      },
      {
        name: "Fates",
        person: "A person perhaps nearing the end of their life, troubled by past mistakes or reflecting on prior decisions.",
        creature: "A supernatural creature connected to fate, such as a Celestial, modron, or hag.",
        place: "Somewhere meant for literal or metaphorical reflection, such as a room full of mirrors, a still mountain lake, a monastery, a hermitage, or a library.",
        treasure: "An ornate or magical mirror, tapestry, or other woven treasure; alternatively, magic that can alter fate.",
        situation: "A situation ordained by fate, perhaps involving a supernatural punishment or reward.",
        image: "images/fates.webp"
      },
      {
        name: "Fates Reversed",
        person: "A person driven by the desire to escape whatever fate has in store.",
        creature: "A creature strongly associated with chaos, such as a demon or a slaad.",
        place: "A place that discourages reflection, such as a dark place or a noisy, busy one.",
        treasure: "An art object depicting the effort to escape fate, or a magic item powered by chaos.",
        situation: "An unjust situation where evil is rewarded and good is punished.",
        image: "images/fates reversed.webp"
      },
      {
        name: "Fey",
        person: "A person with Fey ancestry or some other connection to the Fey (such as a warlock of the Archfey), or a person with a whimsical sense of humor.",
        creature: "A Fey creature, or some other creature with connections to the Feywild.",
        place: "A place in the Feywild, somewhere that allows passage to the Feywild, or a location where Fey magic is active.",
        treasure: "An art object depicting Fey or the Feywild, or a magic item made by Fey.",
        situation: "An absurd situation that shouldn't be taken too seriously.",
        image: "images/fey.webp"
      },
      {
        name: "Fey Reversed",
        person: "A gloomy person with no sense of humor, or a person who uses shadow-based magic.",
        creature: "A creature from the Shadowfell, or one transformed by shadow energy (such as a shadow dragon).",
        place: "A place in the Shadowfell, somewhere that allows passage to the Shadowfell, or a location where shadow magic is active.",
        treasure: "An art object depicting the Shadowfell, or a magic item that uses shadow magic.",
        situation: "A gloomy situation that offers little hope of success or escape.",
        image: "images/fey reversed.webp"
      },
      {
        name: "Fiend",
        person: "A tiefling, warlock of the Fiend, member of a Fiend-worshiping cult, or person who seeks to manipulate others into harmful contracts.",
        creature: "A Fiend of any sort.",
        place: "A place on the Lower Planes, or a location suffused with their influence.",
        treasure: "An art object depicting Fiends, treasure from the Lower Planes, or magic items made by Fiends.",
        situation: "Interaction between the Lower Planes and the Material Plane perhaps an infernal bargain or demonic destruction.",
        image: "images/fiend.webp"
      },
      {
        name: "Fiend Reversed",
        person: "A person who carries a grudge over a real or perceived injury caused by a Fiend, or a person trapped in a bargain with a Fiend.",
        creature: "A redeemed Fiend or similar creature that has lost its connection to the Lower Planes.",
        place: "A place intended to ward off Fiends and influence from the Lower Planes.",
        treasure: "A treasure depicting a Fiend's redemption, or a magic item useful against Fiends.",
        situation: "A situation involving Fiends' unwelcome interference in mortal affairs.",
        image: "images/fiend reversed.webp"
        },
        
        {
        name: "Flames",
        person: "A person carrying a bitter, possibly violent, grudge that poisons their outlook.",
        creature: "A Fiend, a vengeful Undead (such as a ghost or revenant), or a creature dedicated to pursuing designated prey (such as an invisible stalker).",
        place: "A place of bloodshed, or a place with a connection to the Lower Planes.",
        treasure: "A treasure that has been the subject of intense discord or rivalry, or a magic item originating on the Lower Planes.",
        situation: "A deep-seated enmity that clouds the judgment of those involved, or someone's thirst for revenge.",
        image: "images/flames.webp"
        },
        {
        name: "Flames Reversed",
        person: "A person who is being hunted or persecuted unjustly.",
        creature: "A creature fleeing from a larger or more dangerous foe.",
        place: "A place of sanctuary for refugees and fugitives.",
        treasure: "A treasure symbolizing or commemorating the end of a feud or war, or a magic item that can charm or calm creatures (such as a Rod of Rulership).",
        situation: "Unjust persecution or prejudicial hatred.",
        image: "images/flames reversed.webp"
        },
        
        {
        name: "Fool",
        person: "An innocent or naive person blissfully ignorant of the world's sinister side, possibly a child.",
        creature: "A naive Celestial or a flighty Fey, or a trap with a simple or obvious means of avoiding it.",
        place: "A place connected with children, such as a nursery, an orphanage, or a school.",
        treasure: "A portrait of a child, jewelry meant for a child, or a magic item connected to the Upper Planes.",
        situation: "A situation requiring trust, honesty, and a leap of faith.",
        image: "images/fool.webp"
        },
        {
        name: "Fool Reversed",
        person: "A con artist who preys on the innocent and gullible while presenting a trustworthy facade.",
        creature: "A creature that changes shape to appear harmless so it can get close to its prey, or a trap that is difficult to avoid.",
        place: "A place tied to the loss of innocence, such as a harsh orphanage or exploitative workhouse.",
        treasure: "A treasure stolen from a child or naive person, or magic intended to deceive (such as a Hat of Disguise).",
        situation: "A guileless person being manipulated by schemers.",
        image: "images/fool reversed.webp"
        },
        
        {
        name: "Gem",
        person: "Someone who inherited wealth or whose wealth is the result of good fortune.",
        creature: "A creature connected with wealth, such as a Dragon or a Xorn, or a treasure that doubles as a trap.",
        place: "A mine or a treasure vault.",
        treasure: "A valuable treasure or a magical gem.",
        situation: "A situation driven by greed, such as siblings vying for an inheritance or someone hunting for a lost treasure.",
        image: "images/gem.webp"
        },
        {
        name: "Gem Reversed",
        person: "A person who has lost wealth or power through a stroke of bad luck.",
        creature: "A trap or creature that uses the appearance of treasure as bait, such as a mimic.",
        place: "A place associated with poverty, such as a tenement or slum.",
        treasure: "An item that appears valuable but isn't, or a magic item with a curse.",
        situation: "A situation stemming from the loss of wealth, such as a person trying to recover money given to a con artist or stolen by a thief.",
        image: "images/gem reversed.webp"
      },
      {
        name: "Giant",
        person: "A family member, a dear friend, or another personally important individual; alternatively, a very tall person.",
        creature: "A Giant, a giant animal, or another big creature.",
        place: "A place constructed by Giants, or a place of great personal significance.",
        treasure: "A treasure made by Giants, or one of great sentimental value.",
        situation: "Someone attaching outsize importance to one element of the situation, to the neglect of other factors.",
        image: "images/giant.webp"
      },
      {
        name: "Giant Reversed",
        person: "A person who seems insignificant.",
        creature: "A Tiny creature that's a greater threat than its size suggests.",
        place: "Somewhere destroyed by Giants.",
        treasure: "A treasure depicting or commemorating the slaying of a Giant, or a magic item useful against Giants (such as a Giant Slayer).",
        situation: "Someone unable or unwilling to recognize the importance of a critical factor.",
        image: "images/giant reversed.webp"
      },
      {
        name: "Humanoid",
        person: "An empathetic person who's deeply concerned about the suffering of others.",
        creature: "A shapeshifter that takes on Humanoid appearance to blend in, perhaps to learn from them or to influence them toward good.",
        place: "A place where diverse people live together in harmony.",
        treasure: "A treasure representing the collaboration of different artisans (such as a finely cut gem set in exquisite jewelry), or a magic item that facilitates peace and understanding.",
        situation: "A situation that calls for empathy and compassion if it's to be resolved without violence.",
        image: "images/humanoid.webp"
      },
      {
        name: "Humanoid Reversed",
        person: "Someone who feels no empathy for others.",
        creature: "A shapeshifter that takes on Humanoid appearance to prey on Humanoids.",
        place: "A place where people live apart from others, by choice or by force (such as a monastery or a cultural enclave).",
        treasure: "An art object depicting or celebrating war; alternatively, a magic item made to be used in war, or that is especially useful against Humanoids.",
        situation: "A violent situation arising from a lack of empathy.",
        image: "images/humanoid reversed.webp"
        },
        
        {
        name: "Jester",
        person: "An optimistic person who laughs at their own misfortune.",
        creature: "A monster some consider silly, such as a flumph, an owlbear, or a gelatinous cube.",
        place: "A place dedicated to amusement, such as a fairground or a feasting hall.",
        treasure: "A humorous art object or magic item, such as a Wand of Wonder.",
        situation: "A hilarious situation stemming from miscommunication and misplaced assumptions.",
        image: "images/jester.webp"
        },
        {
        name: "Jester Reversed",
        person: "A person who laughs at the misfortunes of others.",
        creature: "A creature with an unsettling laugh, such as a gnoll or hyena, or a creature with a cruel sense of humor.",
        place: "A place associated with cruelty and pain, such as a torture chamber.",
        treasure: "An art object depicting pain or humiliation, or a magic item meant to inflict pain (such as a Sword of Wounding).",
        situation: "One misfortune piling on another in a way that would be humorous—if it weren't disastrous.",
        image: "images/jester reversed.webp"
        },
        
        {
        name: "Key",
        person: "A person with the skills or tools needed to solve the current problem.",
        creature: "A creature that preys on the party's weaknesses, or a trap that can be disarmed only with a key.",
        place: "A place through which only certain people are allowed to pass, or where a key is required.",
        treasure: "A magic item needed to overcome an obstacle or defeat an enemy, or the means to unlock a treasure (such as a Chime of Opening).",
        situation: "A situation that be resolved successfully only by taking a specific action.",
        image: "images/key.webp"
        },
        {
        name: "Key Reversed",
        person: "A person ill equipped for the challenges they face.",
        creature: "A creature with vulnerabilities, or a trap that's bizarrely complex.",
        place: "An open and easily accessed place.",
        treasure: "A treasure in a locked container, or magic that slows creatures.",
        situation: "A situation that can be successfully resolved in many ways.",
        image: "images/key reversed.webp"
        },
        
        {
        name: "Knight",
        person: "A trustworthy person who honors their commitments.",
        creature: "A creature bound by oaths or who serves someone else.",
        place: "A place of sanctuary, where strong traditions protect those who take shelter inside.",
        treasure: "A treasure celebrating or commemorating an oath (such as a wedding ring), or magic weapons or armor associated with knights or paladins.",
        situation: "A situation that requires loyalty in one's companions and faithfulness to them.",
        image: "images/knight.webp"
        },
        {
        name: "Knight Reversed",
        person: "A person who can't be trusted, or a traitor posing as a loyal friend.",
        creature: "A knight who has failed to live up to their code of honor (such as a death knight).",
        place: "A place where a great betrayal took place, or a location with treacherous terrain or traps.",
        treasure: "A treasure that carries a hidden curse, or a magic item that fails when it's needed most.",
        situation: "A situation involving the betrayal of trust, or rampant suspicion.",
        image: "images/knight reversed.webp"
        },
        
        {
        name: "Lance",
        person: "A surgeon, or someone (such as a guard or soldier) who uses violence in pursuit of worthy societal goals.",
        creature: "A creature trained to fight alongside guards or soldiers.",
        place: "A place where surgery is performed.",
        treasure: "A treasure made at great cost, or a magic weapon.",
        situation: "A situation in which additional pain is required to bring healing.",
        image: "images/lance.webp"
        },
        {
        name: "Lance Reversed",
        person: "A person committed to pacifism or avoiding harm.",
        creature: "A creature uninterested in fighting, or a trap that restrains but doesn't cause damage.",
        place: "A place where violence is forbidden.",
        treasure: "A treasure celebrating the end of hostilities or the ideal of peace, or a magic item intended to prevent or end conflict.",
        situation: "A situation complicated by people avoiding any hint of conflict.",
        image: "images/lance reversed.webp"
        },
        {
        name: "Mage",
        person: "A person (perhaps a sorcerer, warlock, or wizard) who uses arcane magic or other specialized learning.",
        creature: "A creature with abilities similar to those of a sorcerer, warlock, or wizard.",
        place: "A place dedicated to the study of arcane magic or that is suffused with such magic.",
        treasure: "A magic item such as a wand or staff, or a wizard's spellbook.",
        situation: "A situation that requires and rewards the correct use of arcane magic.",
        image: "images/mage.webp"
        },
        {
        name: "Mage Reversed",
        person: "A person who wrongly believes their good luck is the result of innate magical ability or a magical good luck charm.",
        creature: "A creature that resists or negates magic.",
        place: "A place where magic has caused destruction, doesn't work, or works unpredictably.",
        treasure: "An art object created by the use of magic, or a magic item with unpredictable effects (such as a Wand of Wonder).",
        situation: "A situation caused by magic misused or out of control.",
        image: "images/mage reversed.webp"
        },
        {
          name: "Map",
          person: "A person who acts as a guide, showing the way forward.",
          creature: "A creature that tracks by scent.",
          place: "A path or road.",
          treasure: "A valuable map (perhaps a jeweled globe or rare atlas), or a magic item that provides direction.",
          situation: "A situation best navigated with a guide.",
          image: "images/map.webp"
        },
        {
          name: "Maze",
          person: "A person who feels lost in their own life, unsure how to affect change, or a person with a wandering mind who takes their time getting to the point.",
          creature: "A minotaur or another creature that hunts in a maze or is imprisoned in a maze.",
          place: "A maze, or a region (such as a forest or desert) where becoming lost is very easy.",
          treasure: "An art object depicting confusion or disorientation, or a magic item that can cause these states.",
          situation: "A confusing situation where it's difficult to perceive all the factors at play.",
          image: "images/maze.webp"
        },
        {
          name: "Mine",
          person: "A miner or an archaeologist.",
          creature: "A creature that burrows underground, especially one that delves into the earth in search of prey (such as a giant weasel).",
          place: "A mine, an archaeological dig, or a similar excavated site.",
          treasure: "A treasure from the earth, such as metal ore or gems, or any treasure that has been buried and unearthed.",
          situation: "Something unearthed that should have remained buried.",
          image: "images/mine.webp"
        },
        {
          name: "Monstrosity",
          person: "A familiar person whose behavior suddenly turns threatening.",
          creature: "A Monstrosity, especially one that superficially resembles an ordinary animal or person (such as a displacer beast or doppelganger).",
          place: "A familiar place that has become dangerous.",
          treasure: "An art object depicting a Monstrosity or that incorporates claws, fur, or feathers from such a creature.",
          situation: "A situation involving something or someone becoming more monstrous (literally or figuratively).",
          image: "images/monstrosity.webp"
        },
        {
          name: "Moon",
          person: "Someone whose fine qualities are masked by one annoying trait.",
          creature: "A lycanthrope, or a creature that appears to be an inanimate object until it strikes (such as a gargoyle).",
          place: "A secret chamber or a place concealed by terrain; alternatively, a place larger or more elaborate on the inside than it seems from outside.",
          treasure: "A treasure whose value isn't immediately apparent, or a magic item that appears to be a worthless object.",
          situation: "A problem that requires investigation and is more complicated than it appears.",
          image: "images/moon.webp"
        },
        {
          name: "Ooze",
          person: "A quiet, unassuming person who has hidden power or secret knowledge.",
          creature: "An Ooze or another creature that seems unimportant, or a trap that is surprisingly simple and straightforward.",
          place: "A humble place of surprising comfort or importance.",
          treasure: "A treasure that is valuable but not beautiful, such as a poorly crafted piece of jewelry incorporating precious stones.",
          situation: "Something important that has been overlooked because it seems ordinary.",
          image: "images/ooze.webp"
        },
        {
          name: "Path",
          person: "A goal-oriented person who knows exactly what they want and has a clear plan to get it.",
          creature: "A creature single-mindedly pursuing prey or some other goal, or a trapped room navigable by only a single path.",
          place: "A road or trail.",
          treasure: "An art object depicting a road or path, or a magic item that allows divination (such as a Crystal Ball or a Spell Scroll of Find the Path).",
          situation: "A situation that demands unwavering focus on the goal.",
          image: "images/path.webp"
        },
        {
          name: "Pit",
          person: "A person who has lost significant wealth, social status, or favor.",
          creature: "A pit trap, or a scavenger lurking at the bottom of a pit.",
          place: "A pit or cliff that creates the risk of a fall.",
          treasure: "An art object depicting someone's calamitous fall, or a magic item that allows falling safely (such as a Ring of Feather Falling).",
          situation: "A situation involving someone's fall from grace.",
          image: "images/pit.webp"
        },
        {
          name: "Plant",
          person: "A person who lives in the wilderness among trees and other growing things.",
          creature: "A Plant creature, or a creature that facilitates the growth of wild plants.",
          place: "A verdant place where vegetation grows wild, untouched by people's hands.",
          treasure: "An art object crafted from wood or incorporating leaves; alternatively, a magic item that allows uncontrolled vegetation growth (such as a Bag of Beans).",
          situation: "Something growing out of control with surprising, even supernatural, speed.",
          image: "images/plant.webp"
        },
        {
          name: "Priest",
          person: "A person (perhaps a cleric, druid, or paladin) who uses divine magic or is very pious.",
          creature: "A creature with abilities similar to those of a cleric, druid, or paladin.",
          place: "A temple, shrine, or similar place consecrated to a deity or natural force.",
          treasure: "A magic item such as a Staff of Healing or a Holy Avenger; alternatively, valuable temple accouterments.",
          situation: "A problem that requires and rewards piety or the use of divine magic.",
          image: "images/priest.webp"
        },
        {
          name: "Prisoner",
          person: "A person held captive or bound by expectations.",
          creature: "A creature locked away to prevent it from harming people.",
          place: "A place where things are put to keep them out of reach and memory.",
          treasure: "A treasure securely locked away, or a magic item that contains a creature (such as an Elemental Gem or an Iron Flask).",
          situation: "A situation arising from efforts to keep a person, an object, or information out of reach.",
          image: "images/prisoner.webp"
        },
        {
          name: "Puzzle",
          person: "A person with a keen mind for puzzles, or one who delights in clever banter and wordplay.",
          creature: "A brilliant creature that relies on careful plans and tactics rather than brute strength, or a trap that can be bypassed by solving a puzzle or riddle.",
          place: "A place with hidden doors and other secrets.",
          treasure: "A treasure whose function or value isn't immediately apparent.",
          situation: "A complex situation with many interconnected factors.",
          image: "images/puzzle.webp"
        },
        {
          name: "Ring",
          person: "Someone scrupulously faithful to a promise.",
          creature: "A creature that has promised to serve someone.",
          place: "A place where oaths are sworn, such as a temple or courthouse.",
          treasure: "A ring, either jewelry or a magic item.",
          situation: "A situation complicated by a person's promise to do something.",
          image: "images/ring.webp"
        },
        {
          name: "Rogue",
          person: "A deceptive person hiding a sinister secret; pursuit of their own aims trumps any friendship or loyalty.",
          creature: "A dangerous creature that strikes by surprise or from darkness.",
          place: "A front for a criminal operation, or a monster's lair.",
          treasure: "A treasure that hides a deadly secret, such as a ring with a spring-loaded poison needle, a Dagger of Venom, or a cursed magic item.",
          situation: "A situation rooted in or destined for betrayal.",
          image: "images/rogue.webp"
        },
        {
          name: "Ruin",
          person: "A person who has renounced material attachments, such as a religious ascetic.",
          creature: "A creature that destroys equipment, such as a rust monster or a black pudding.",
          place: "A ruin, or a retreat for ascetics.",
          treasure: "A treasure that is broken or in disrepair.",
          situation: "A situation involving the decay of objects or relationships over a long period of time.",
          image: "images/ruin.webp"
        },
        {
          name: "Sage",
          person: "A person who offers helpful advice in difficult circumstances.",
          creature: "A helpful creature that leads the way to safety or a goal.",
          place: "A place dedicated to knowledge and wisdom, such as a library or university.",
          treasure: "A valuable or magical book or scroll, or a sentient magic item that is known to provide helpful advice.",
          situation: "An opportunity to provide valuable ad- vice on a familiar subject.",
          image: "images/sage.webp"
        },
        {
          name: "Shield",
          person: "A protective parent or sibling, or a professional protector such as a sentry or guard.",
          creature: "A creature that protects others, such as a watchdog or shield guardian, or a warding trap designed to repel invaders.",
          place: "A defensive structure, such as a fortress or a castle wall.",
          treasure: "A valuable or magical shield.",
          situation: "Someone who must protect those who can't protect themselves.",
          image: "images/shield.webp"
        },
        {
          name: "Ship",
          person: "A person who routinely travels long distances, such as a sailor, pilgrim, or nomad.",
          creature: "A creature that hunts a large territory or migrates great distances.",
          place: "A port city, harbor, caravansary, or similar hub for travelers.",
          treasure: "An art object depicting ships or travel, or a magic item that facilitates travel (such as a Folding Boat).",
          situation: "A situation that requires travel, or one that unfolds while traveling,",
          image: "images/ship.webp"
        },
        {
          name: "Skull",
          person: "A person facing imminent death, or one who wields necromantic power.",
          creature: "An Undead creature, or a trap that deals necrotic damage.",
          place: "A place of solitude and isolation, or a place where someone died recently.",
          treasure: "A treasure associated with death (perhaps funerary implements), or a magic item with necromantic power.",
          situation: "A person's life in peril.",
          image: "images/skull.webp"
        },
        {
          name: "Staff",
          person: "A person who offers physical, financial, or emotional support.",
          creature: "A creature used as a mount or a tracker, or another sort of ally.",
          place: "A place where support is offered or found, such as a library or a tavern.",
          treasure: "A magic staff, a jeweled cane or mobility aid, or a similar treasure.",
          situation: "A group or organization that offers much-needed support.",
          image: "images/staff.webp"
        },
        {
          name: "Stairway",
          person: "A person who makes every task more difficult than it needs to be, adding complications and getting in the way.",
          creature: "A creature that grows in power as battle continues (such as a black pudding or a hydra).",
          place: "A place reached by descending stairs, such as a basement or a lower level of a dungeon.",
          treasure: "An intricate treasure that was difficult to create, or a magic item that helps accomplish difficult tasks (such as an Ioun Stone of Mastery).",
          situation: "A situation more complicated or challenging than it appears.",
          image: "images/stairway.webp"
        },
        {
          name: "Star",
          person: "A person focused on improving a particular area of skill or behavior.",
          creature: "A creature that has trained to improve itself (perhaps having several skill or saving throw proficiencies), or a trap that requires teamwork to avoid or escape.",
          place: "A place dedicated to study or training, such as a university or gymnasium.",
          treasure: "An art object that reflects the skill of its creator, or a magic item that grants proficiency.",
          situation: "A situation that requires or rewards training and practice.",
          image: "images/star.webp"
        },
        {
          name: "Statue",
          person: "Someone who takes great pride in a prominent ancestor.",
          creature: "An ancient creature that played an important part in a historical event.",
          place: "A park or plaza built around a statue.",
          treasure: "A statuette or sculpture, either valuable or magical (such as a Figurine of Wondrous Power).",
          situation: "A situation with remarkable similarities to a significant historical event.",
          image: "images/statue.webp"
        },
        {
          name: "Sun",
          person: "A person with an unflappable and optimistic outlook, confident in the power of good triumphing over evil and obstacles.",
          creature: "An angel or a similar creature that embodies hope and good.",
          place: "A place that embodies hope in the face of despair, such as a temple next to a graveyard or a town rebuilding after a natural disaster.",
          treasure: "A valuable religious object devoted to good, or a holy or protective magic item.",
          situation: "A difficult situation where hope nevertheless continues to shine like a beacon.",
          image: "images/sun.webp"
        },
        {
          name: "Talons",
          person: "A person who preys on other folk to acquire wealth or power.",
          creature: "A predator, especially one that preys on people or slowly drains their life (such as a vampire).",
          place: "A place where the rich benefit from the labor of the poor.",
          treasure: "A treasure that is a collector's prized possession or the object of a heist.",
          situation: "A situation driven by someone's avarice.",
          image: "images/talons.webp"
        },
        {
          name: "Tavern",
          person: "A genial person who delights in telling stories in good company.",
          creature: "A social creature that travels in packs.",
          place: "A tavern, restaurant, or similar place where people gather and eat socially.",
          treasure: "A jeweled goblet or other treasure related to eating and drinking.",
          situation: "A tavern brawl.",
          image: "images/tavern.webp"
        },
        {
          name: "Temple",
          person: "A devout person who performs frequent rituals to invoke divine favor.",
          creature: "A temple guardian—perhaps a Celestial, Construct, or guardian naga.",
          place: "A temple, shrine, or other place of worship.",
          treasure: "A valuable ritual object, such as a candelabra or sacrificial knife, or a magic item linked to worship or divine magic (such as a Candle of Invocation).",
          situation: "A situation best resolved by an appeal to divine power or spiritual authorities.",
          image: "images/temple.webp"
        },
        {
          name: "Throne",
          person: "A person who enjoys exercising authority over others and expects to be obeyed.",
          creature: "A creature that leads others of its kind; alternatively, one with magical powers of influence or command.",
          place: "A place of authority, such as a palace or a mayor's office.",
          treasure: "A ruler's regalia, or a magic item (such as a Rod of Rulership) that imparts magical authority.",
          situation: "A contest over who rightfully holds authority.",
          image: "images/throne.webp"
        },
        {
          name: "Tomb",
          person: "A person with a secret or a gap in their memory.",
          creature: "A mummy, wight, or similar Undead that lairs in its own tomb.",
          place: "A tomb, especially one that is forgotten.",
          treasure: "Valuable or magical funerary treasure.",
          situation: "A situation no one wants to talk about or even acknowledge.",
          image: "images/tomb.webp"
        },
        {
          name: "Tower",
          person: "A person who prefers solitude to the company of others.",
          creature: "A reclusive creature.",
          place: "A remote tower or similar place of isolation.",
          treasure: "An art object depicting an isolated place or a lonely person; alternatively, Daern's Instant Fortress or a similar magic item.",
          situation: "A situation that requires assistance or information from a reclusive person.",
          image: "images/tower.webp"
        },
        {
          name: "Tree",
          person: "A strong-willed person determined to persevere despite hostile conditions.",
          creature: "A creature that thrives in a hostile environment.",
          place: "Somewhere vegetation makes an unexpected appearance: a park in a busy urban center or a tree growing on barren rock.",
          treasure: "A treasure featuring diamonds, pearls, or precious wood, or a magic item that increases endurance (such as an Amulet of Health).",
          situation: "A small outpost or lone individual holding back a much larger force.",
          image: "images/tree.webp"
        },
        {
          name: "Undead",
          person: "A person nursing a grudge beyond reason.",
          creature: "An Undead creature sustained by a thirst for revenge or an unfinished task, such as a ghost or revenant.",
          place: "A place haunted (literally or emotionally) by a terrible event that happened there.",
          treasure: "A treasure depicting the dead or an Undead, something made from bones, or a magic item made by or for an Undead.",
          situation: "Someone who refuses to leave the past in the past.",
          image: "images/undead.webp"
        },
        {
          name: "Void",
          person: "A person trapped in despair.",
          creature: "A Fiend or an Undead that threatens annihilation of body and soul, or a trap with no easy exit or escape.",
          place: "A place deep underground, underwater, or in space, where little light and air are available.",
          treasure: "An art object that reflects its creator's despair or sadness, or a Sphere of Annihilation.",
          situation: "A situation that seems to have no good or even survivable—outcome.",
          image: "images/void.webp"
        },
        {
          name: "Warrior",
          person: "A person (perhaps a barbarian, fighter, or monk) who has trained in combat or served in the military.",
          creature: "A creature with abilities like those of a barbarian, fighter, or monk.",
          place: "A training yard or fort where warriors learn combat skills.",
          treasure: "A valuable or magical weapon or suit of armor.",
          situation: "A situation that requires and rewards the skilled application of physical force.",
          image: "images/warrior.webp"
        },
        {
          name: "Well",
          person: "A familiar person who is a reliable source of information and aid.",
          creature: "A familiar kind of creature, whose abilities are well understood.",
          place: "A well, a familiar shop, or a place where fresh water can be found.",
          treasure: "A reliable treasure (such as gold coins), or a magic item that produces food or water (such as a Decanter of Endless Water or an Alchemy Jug).",
          situation: "A familiar situation with a predictable outcome.",
          image: "images/well.webp"
        },
        {
          name: "Map Reversed",
          person: "Someone who tries to lead you on the wrong path.",
          creature: "A creature (such as a will-o'-wisp) that leads travelers astray.",
          place: "A demiplane or similar place that can't be found on maps, or a location hidden behind a secret door.",
          treasure: "A treasure from another plane of existence, or a magic item that creates or accesses an extradimensional space (like a Portable Hole).",
          situation: "No guide or direction is available.",
          image: "images/map reversed.webp"
        },
        {
          name: "Maze Reversed",
          person: "A person running from expectations placed on them by family and society, trying to find a new path in life.",
          creature: "A creature whose behavior is unpredictable.",
          place: "A simple labyrinth designed for meditation or to provide private nooks, or a location in which one is unlikely to get lost (such as a cave with only one exit).",
          treasure: "An art object incorporating a labyrinth design.",
          situation: "A search for something or someone that has gone missing.",
          image: "images/maze reversed.webp"
        },
        {
          name: "Mine Reversed",
          person: "Someone who places things in the earth, such as a gardener or an undertaker.",
          creature: "A creature that lives underground but hunts above ground (such as an ankheg or a bulette).",
          place: "A place that has sunk into the earth, perhaps swallowed in a sinkhole or covered in a mudslide.",
          treasure: "A treasure buried in the earth.",
          situation: "The retrieval of something buried.",
          image: "images/mine reversed.webp"
        },
        {
          name: "Monstrosity Reversed",
          person: "A person who seems dangerous or bizarre but is friendly and helpful.",
          creature: "A Monstrosity that is a potential ally, such as a hippogriff.",
          place: "A place that offers refuge in unfamiliar or dangerous terrain.",
          treasure: "A dead Monstrosity preserved by taxidermy, or a magic item useful against Monstrosities.",
          situation: "Something that appears monstrous but is actually benign.",
          image: "images/monstrosity reversed.webp"
        },
        {
          name: "Moon Reversed",
          person: "A person who seems competent but bungles everything they attempt.",
          creature: "A creature that uses its fearsome appearance to frighten away others because it is too weak to fight.",
          place: "A place with an impressive exterior but a dingy, poorly maintained interior.",
          treasure: "A treasure that seems more valuable than it is, perhaps an ordinary item that falsely appears magical.",
          situation: "A situation that seems—and is—too good to be true.",
          image: "images/moon reversed.webp"
        },
        {
          name: "Ooze Reversed",
          person: "A quiet, unassuming person completely out of their depth.",
          creature: "An Ooze that has developed curiosity, unexpected intelligence, and a way to communicate, or a dangerous trap that is difficult to detect.",
          place: "A humble place with little to offer.",
          treasure: "An art object depicting an ooze or the destruction of a particularly notable Ooze; alternatively, a magic item useful against Oozes (such as a Ring of Acid Resistance).",
          situation: "A situation complicated by the sheer number of minor factors tangled within it.",
          image: "images/ooze reversed.webp"
        },
        {
          name: "Path Reversed",
          person: "An aimless person who doesn't know what they want and has no idea how to decide.",
          creature: "A creature that reacts to provocation without a clear plan or purpose; it might be acting on instinct or be confused.",
          place: "A trackless wilderness, or an underground complex that is very difficult to traverse.",
          treasure: "An abstract art object, or a magic item that foils divination (such as an Amulet of Proof against Detection and Location).",
          situation: "A series of distractions that deflect attention from an important goal.",
          image: "images/path reversed.webp"
        },
        {
          name: "Pit Reversed",
          person: "A person in a precarious position who soon will have a calamitous fall.",
          creature: "A creature (such as a piercer) that attacks by falling on prey.",
          place: "An abandoned mansion or palace that is in disrepair due to the owner's downfall.",
          treasure: "An art object depicting flight or incorporating feathers, or a magic item that grants flight (such as Winged Boots or a Cloak of the Bat).",
          situation: "A conspiracy to cause the downfall of a wealthy or prominent person.",
          image: "images/pit reversed.webp"
        },
        {
          name: "Plant Reversed",
          person: "A quiet person who enjoys gardening or farming, finding greenery more relatable than people.",
          creature: "A domesticated plant given artificial animation, such as an awakened tree or shrub.",
          place: "A place full of carefully pruned and neatly controlled vegetation, such as a topiary garden.",
          treasure: "A treasure that incorporates living greenery, such as an ornate terrarium or a potted topiary, or a magic item that allows control of vegetation (such as a Staff of the Woodlands).",
          situation: "A conflict between a region suffering a famine and a region with abundant crops.",
          image: "images/plant reversed.webp"
        },
        {
          name: "Priest Reversed",
          person: "A person devoted to a false god, or a cause that isn't worthy of devotion.",
          creature: "A demon or another creature opposed to the gods.",
          place: "A place that was consecrated but that has been abandoned or converted to secular use.",
          treasure: "An idol depicting an invented god or a demon lord.",
          situation: "A situation caused by impiety or misguided zealotry.",
          image: "images/priest reversed.webp"
        },
        {
          name: "Prisoner Reversed",
          person: "An individual who defies societal norms and expectations.",
          creature: "A creature that grapples, swallows, or otherwise binds or imprisons its prey.",
          place: "A place where something or someone is kept on public display.",
          treasure: "A prominently displayed treasure, such as a ruler's regalia.",
          situation: "The theft or liberation of a person, or an object on public display.",
          image: "images/prisoner reversed.webp"
        },
        {
          name: "Puzzle Reversed",
          person: "A person who is very literal and direct.",
          creature: "A creature that delights in straightforward melee combat, relying on strength to overpower its foes.",
          place: "A place with a simple, symmetrical floor plan.",
          treasure: "Coins or other treasure whose value is obvious and almost universally understood.",
          situation: "A situation that's exactly what it appears to be.",
          image: "images/puzzle reversed.webp"
        },
        {
          name: "Ring Reversed",
          person: "A person who resents being bound to an oath sworn in haste or duress.",
          creature: "A creature unwillingly bound to serve someone (such as an invisible stalker).",
          place: "A place where a legendary figure was coerced into swearing an oath that led to their downfall.",
          treasure: "A bracelet or magic bracers.",
          situation: "A situation arising from someone trying to abjure an oath.",
          image: "images/ring reversed.webp"
        },
        {
          name: "Rogue Reversed",
          person: "A good-hearted person entangled in a criminal or evil organization who is desperate for a way out.",
          creature: "A creature unwillingly bound to the service of villains.",
          place: "An oasis of compassion surrounded by violence.",
          treasure: "A treasure caked in grime or hidden in a filthy place.",
          situation: "Good characters who are part of an evil organization or who plot to subvert it.",
          image: "images/rogue reversed.webp"
        },
        {
          name: "Ruin Reversed",
          person: "A person excessively attached to material goods (not necessarily excessive wealth).",
          creature: "A Construct, especially an animated object.",
          place: "A place meant to store goods, such as a warehouse or an armory.",
          treasure: "Valuable trade goods, well-made equipment, or a deed to property.",
          situation: "A situation involving the production or transportation of goods for sale.",
          image: "images/ruin reversed.webp"
        },
        {
          name: "Sage Reversed",
          person: "Someone who helpfully offers bad advice.",
          creature: "sA creature that tries to lead the way into danger or a trap.",
          place: "A place whose structural flaws threaten its integrity.",
          treasure: "A device valuable for its components that doesn't function as intended, or a sentient magic item that provides bad but well-intentioned advice.",
          situation: "An opportunity to provide advice on a completely unfamiliar subject.",
          image: "images/sage reversed.webp"
        },
        {
          name: "Shield Reversed",
          person: "A guarded person who carefully shields themself from physical or emotional harm.",
          creature: "A heavily armored creature.",
          place: "sA hermitage or retreat meant to isolate one person from others.",
          treasure: "A suit of armor that is valuable or magical.",
          situation: "A situation arising from someone selfishly protecting themself without heed to others.",
          image: "images/shield reversed.webp"
        },
        {
          name: "Ship Reversed",
          person: "A person who dreams of travel but has never wandered far from home.",
          creature: "A creature that rarely leaves its lair—and is more powerful there.",
          place: "An isolated place that rarely sees travelers.",
          treasure: "A treasure still in the hands of the person who made it, or a magic item (such as Dimensional Shackles) that prevents magical movement.",
          situation: "A situation arising from someone's inability or unwillingness to travel.",
          image: "images/ship reversed.webp"
        },
        {
          name: "Skull Reversed",
          person: "Someone haunted by the inevitability of death and seeking to escape it, or a person who has returned from death.",
          creature: "An immortal creature or one that doesn't age, such as an angel, a Fiend, or a naga.",
          place: "A graveyard or another place where the dead are gathered.",
          treasure: "An art object that celebrates or depicts deliverance from death, or a magic item that wards off death (such as a Periapt of Wound Closure or a Scarab of Protection).",
          situation: "Many lives at stake.",
          image: "images/skull reversed.webp"
        },
        {
          name: "Staff Reversed",
          person: "A person in desperate need of assistance.",
          creature: "A creature that's helpless or ineffective unless it can possess or be carried by another creature.",
          place: "A place in immediate crisis, such as a location suddenly imperiled by fire or flood.",
          treasure: "A treasure that needs repair before regaining its full value or magical potency.",
          situation: "A group of people who need help from others.",
          image: "images/staff reversed.webp"
        },
        {
          name: "Stairway Reversed",
          person: "A helpful, friendly person who makes everything easier (or at least more pleasant).",
          creature: "A creature that is difficult to fight at first, but that becomes easier to defeat as the battle proceeds.",
          place: "A place reached by ascending stairs, such as an attic or upper level of a dungeon.",
          treasure: "A treasure that is simple and elegant.",
          situation: "A situation much simpler than it appears,",
          image: "images/stairway reversed.webp"
        },
        {
          name: "Star Reversed",
          person: "A person with natural ability but little patience for training or study.",
          creature: "A creature that relies on its natural abilities instead of training (perhaps with no skill or saving throw proficiencies).",
          place: "A place of untouched natural beauty.",
          treasure: "Unrefined ore or uncut gems, or a magic item that improves an ability score.",
          situation: "A situation resulting from someone's refusal to practice or train.",
          image: "images/star reversed.webp"
        },
        {
          name: "Statue Reversed",
          person: "A person who lives in the shadow of a famous or important ancestor.",
          creature: "A creature that clings to a memory of fallen glory (such as a storm giant or a mind flayer), a creature in the guise of a statue (such as a mimic), or a statue that functions as a trap.",
          place: "An immense ruin left behind by an ancient civilization.",
          treasure: "An art object made in imitation of a more famous and valuable piece.",
          situation: "An attempt to re-create a historical situation or rebuild a fallen empire.",
          image: "images/statue reversed.webp"
        },
        {
          name: "Sun Reversed",
          person: "A naively positive person who spouts empty platitudes about everything turning out for the best.",
          creature: "A creature (perhaps a flumph or a pixie) that offers aid but is too weak to provide meaningful help.",
          place: "A desecrated temple or similar place where dirt or corruption has eliminated all evidence of goodness and holiness.",
          treasure: "A religious object or holy magic item that has been desecrated.",
          situation: "Idealistic optimism that prevents people from responding to real danger.",
          image: "images/sun reversed.webp"
        },
        {
          name: "Talons Reversed",
          person: "A person trapped by predatory debt or victimized by a monster that slowly drains the person's life.",
          creature: "A creature hunted for parts of its body that are considered valuable, or for the treasure it hoards.",
          place: "A tenement or workhouse where oppressed victims of the rich live in squalor.",
          treasure: "A treasure that was stolen from its rightful owner.",
          situation: "A situation driven by a desperate individual victimized by the greedy.",
          image: "images/talons reversed.webp"
        },
        {
          name: "Tavern Reversed",
          person: "A person who ruins the happiness of pleasant company.",
          creature: "A parasite, vampire, or similar creature that siphons strength, happiness, or vitality from others, or a trap designed to separate those caught in it.",
          place: "A place once used for social gatherings but now abandoned.",
          treasure: "A jeweled goblet or similar treasure stained with blood or holding the remnants of poison.",
          situation: "An attempt to kill many people at once as they gather for a meal.",
          image: "images/tavern reversed.webp"
        },
        {
          name: "Temple Reversed",
          person: "A superstitious person who performs frequent rituals to ward off supernatural evil.",
          creature: "A creature that bestows curses (such as a fomorian, rakshasa, or mummy).",
          place: "An area where crime, vice, or other impious behaviors are widespread.",
          treasure: "A treasure with superstitious meaning perhaps an amulet meant to ward off evil (such as a Scarab of Protection).",
          situation: "A situation stemming from a superstitious fear of curses or bad luck.",
          image: "images/temple reversed.webp"
        },
        {
          name: "Throne Reversed",
          person: "A person who resents authority imposed on them.",
          creature: "A creature that unwillingly serves another.",
          place: "A place at the edge of a ruler's authority or son the border between rival nations.",
          treasure: "Treasure. An art object created as an act of resistance to tyranny, or a magic item that protects against restraint (such as a Ring of Free Action).",
          situation: "A group of people rebelling against a ruler or an authority figure.",
          image: "images/throne reversed.webp"
        },
        {
          name: "Tomb Reversed",
          person: "A person trying to atone for a dreadful secret in their past.",
          creature: "An incorporeal Undead (such as a wraith or specter) that's not linked to the place of its death, burial place, or body.",
          place: "A memorial structure that doesn't contain a body.",
          treasure: "An art object depicting a dead individual as they were in life.",
          situation: "A situation stemming from a buried secret that recently came to light.",
          image: "images/tomb reversed.webp"
        },
        {
          name: "Tower Reversed",
          person: "A desperately lonely person who craves close companionship.",
          creature: "A creature cut off from others of its kind that is trying to find them, or a trap that targets a single creature.",
          place: "A place that discourages interaction with others, such as a library or monastery, where rules of silence are strictly enforced.",
          treasure: "An art object expressing the artist's profound loneliness.",
          situation: "A situation arising from someone's loneliness or boredom.",
          image: "images/tower reversed.webp"
        },
        {
          name: "Tree Reversed",
          person: "Someone barely hanging on in hostile conditions.",
          creature: "A creature driven from its preferred environment and struggling to survive in a new region.",
          place: "A place cleared of natural growth.",
          treasure: "An art object or a magic item made from the wood of a tree struck by lightning.",
          situation: "An overwhelming threat against a small outpost or lone individual.",
          image: "images/tree reversed.webp"
        },
        {
          name: "Undead Reversed",
          person: "A person too quick to forgive and forget, who never holds anyone accountable for their misdeeds.",
          creature: "An Undead creature that craves an end to its miserable, interminable existence.",
          place: "A place whose denizens have forgotten significant events that happened there.",
          treasure: "An art object depicting the destruction of an Undead, or a magic item particularly useful against Undead (such as a Mace of Disruption).",
          situation: "A serial criminal who has been pardoned for past misdeeds and now continues their wicked ways.",
          image: "images/undead reversed.webp"
        },
        {
          name: "Void Reversed",
          person: "A person who has lost everything and has no place left to go but up.",
          creature: "A skeleton, zombie, or similar Undead remnant of a living creature; alternatively, a trap that's broken and nonfunctional.",
          place: "A place of utter carnage, where a terrible battle or massacre took place.",
          treasure: "A treasure promised but not actually present, such as an empty treasure chest or a looted vault.",
          situation: "The aftermath of a destructive event, where the few survivors must figure out how to go on living.",
          image: "images/void reversed.webp"
        },
        {
          name: "Warrior Reversed",
          person: "A bully who uses physical strength to intimidate others.",
          creature: "A creature that relies on brute strength, or a trap that can be escaped through the application of brute strength.",
          place: "A harsh environment where only the physically powerful survive.",
          treasure: "An unsubtle work of art.",
          situation: "A situation involving bullying or extortion.",
          image: "images/warrior reversed.webp"
        },
        {
          name: "Well Reversed",
          person: "A familiar person who refuses to provide expected aid.",
          creature: "A familiar kind of creature whose behavior or abilities are surprising.",
          place: "A well that has gone dry, or a familiar place that no longer offers the comforts it used to.",
          treasure: "A treasure with unexpected properties—a hidden compartment or magical quirk that's not immediately evident.",
          situation: "A familiar situation that ends up defying expectations.",
          image: "images/well reversed.webp"
        }
    ];
