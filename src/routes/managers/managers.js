/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
  // {
<<<<<<< HEAD
  //   "roster": 1,  // ID of the roster that the manager manages
  //   "name": "Copping", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Iowa",
  //   "bio": "Never stop rebuilding... or losing",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "tbb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Swift", // Can be anything (usually your rival's name)
  //     link: 8, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 3, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 2,  // ID of the roster that the manager manages
  //   "name": "Wallace", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Cincinnati",
  //   "bio": "Never stop rebuilding... or losing",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "Tampa Bay Buccaneers", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Dan", // Can be anything (usually your rival's name)
  //     link: 3, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 8, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 3,  // ID of the roster that the manager manages
  //   "name": "Dan", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Ross lol",
  //   "bio": "Always the Bridesmaid, never the Bride.",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "njy", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Wallace", // Can be anything (usually your rival's name)
  //     link: 2, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 7, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 4,  // ID of the roster that the manager manages
  //   "name": "Scott", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Iowa",
  //   "bio": "I just started trying this year.",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "Tampa Bay Buccaneers", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Josh", // Can be anything (usually your rival's name)
  //     link: 5, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 10, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 5,  // ID of the roster that the manager manages
  //   "name": "Josh", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Milford",
  //   "bio": "Homer Sipmson backing into the bushes.gif",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": 2016, // when did the manager start playing fantasy football
  //   "favoriteTeam": "Jacksonville Jaguars", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Scott", // Can be anything (usually your rival's name)
  //     link: 4, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 10, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 6,  // ID of the roster that the manager manages
  //   "name": "Cris", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "West Side",
  //   "bio": "“Legend tells of a legendary warrior whose kung fu skills were the stuff of legend.”",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "LA Rams", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Josh", // Can be anything (usually your rival's name)
  //     link: 5, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 5, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 7,  // ID of the roster that the manager manages
  //   "name": "Dave", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Hilton Head Island",
  //   "bio": "I have more money than you.",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": ???, // when did the manager start playing fantasy football
  //   "favoriteTeam": "", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Scott", // Can be anything (usually your rival's name)
  //     link: 4, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 9, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 8,  // ID of the roster that the manager manages
  //   "name": "Swift", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Iowa",
  //   "bio": "I once starred on an episode of "Kissin' Cousins".",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": Never, // when did the manager start playing fantasy football
  //   "favoriteTeam": "lac", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Josh", // Can be anything (usually your rival's name)
  //     link: 4, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "Can't lose if you're not trying!",
  //   "tradingScale": 2, // 1 - 10
  //   "prefferedContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 9,  // ID of the roster that the manager manages
  //   "name": "Dirk", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "The Holler",
  //   "bio": "I'll gladly pay you Tuesday for a running back today.",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": Never, // when did the manager start playing fantasy football
  //   "favoriteTeam": "cin", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Copping", // Can be anything (usually your rival's name)
  //     link: 1, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "If I raise my prices high enough someone might pay, eventually!",
  //   "tradingScale": 2, // 1 - 10
  //   "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 10,  // ID of the roster that the manager manages
  //   "name": "Clay", // (optional) used if a manager took over a team, null or omit otherwise
  //   "location": "Do I Exist?",
  //   "bio": "Error 404",
  //   "photo": "/managers/name.jpg", // done
  //   "fantasyStart": 2018, // when did the manager start playing fantasy football
  //   "favoriteTeam": "ten", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Rebuild", // 'Win Now' or 'Rebuild'
  //   "rival": {
  //     name: "Josh", // Can be anything (usually your rival's name)
  //     link: 5, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
  //   },
  //   "favoritePlayer": 167, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
  //   "philosophy": "If the others forget you're here they won't know when you strike!",
  //   "tradingScale": 1, // 1 - 10
  //   "prefferedContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  // },
]
=======
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Copping",
    "location": "Iowa", // (optional)
    "bio": "Always be Rebuilding",
    "photo": "Copping.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Dirk", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 167, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Can't lose if you were never trying.",
    "tradingScale": 2, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Wallace",
    "location": "Cincinnati", // (optional)
    "bio": "Two time champ, on that Three-peat Tour.",
    "photo": "Wallace.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Dan", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "My players are aged like fine Wine.",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Dan",
    "location": "Ross, OH...lol", // (optional)
    "bio": "Dan has been the Maid of Honor three times in this league, but has never had the honor of being the Bride.",
    "photo": "Dan.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Wallace", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If there's blood in the water, I feast.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Scott",
    "location": "North Carolina", // (optional)
    "bio": "This is my first time caring.",
    "photo": "Scott.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Cris", // Can be anything (usually your rival's name)
      link: 5, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "My players are aged like fine Wine.",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Josh",
    "location": "Milford, OH", // (optional)
    "bio": "2017 Champ, on a Dark Horse mission to retake my crown.",
    "photo": "Josh.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Cris", // Can be anything (usually your rival's name)
      link: 5, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Opportunities multiply as they are seized.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Cris",
    "location": "West Side 'Nati, OH", // (optional)
    "bio": "Never won a playoff game. Will start tanking after a few injuries.",
    "photo": "Cris.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Josh", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If you ain't first you might as well shoot for last.",
    "tradingScale": 4, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Dave",
    "location": "Terrace Park, OH", // (optional)
    "bio": "Finally almost done rebuilding this shit team I bought into four years ago. 2022 draft is 100% mine.",
    "photo": "Dave.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Copping", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Everybody is for sale if the price is right.",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
      {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Shane",
    "location": "Cornfield, IA", // (optional)
    "bio": "Copping's 2nd team.",
    "photo": "Shane.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Josh", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "All fantasy leagues are redraft leagues if you believe hard enough.",
    "tradingScale": 2, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Dirk",
    "location": "the Holler, KY", // (optional)
    "bio": "Always thinks his team can win the super bowl, almost always misses the playoffs.",
    "photo": "Dirk.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Josh", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "I'm here to donate my league dues.",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Clay",
    "location": "Boston, MA", // (optional)
    "bio": "Most of us forgot he was even in the league.",
    "photo": "Clay.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": ????, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Josh", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If you're quiet enough everyone will forget you're a threat.",
    "tradingScale": 1, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
]
>>>>>>> 6a21f06e7b4a033e93b39f6732378f8b8ee81a93
