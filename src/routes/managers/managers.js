export const managers = [
  // {
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