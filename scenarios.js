// Historical and Literary Scenarios for Tornado War
// This file contains all scenario data including characters, territories, and AI personalities

const SCENARIOS = {
  // HISTORICAL WARS
  americanRevolution: {
    id: 'americanRevolution',
    name: 'American Revolutionary War (1775-1783)',
    type: 'historical',
    description: 'The founding of the United States through revolution against British rule.',
    factions: {
      patriots: {
        name: 'Patriots',
        color: '#1e40af', // Blue
        description: 'American colonists fighting for independence',
        territories: [
          { name: 'Boston', cost: 15, description: 'Center of revolutionary activity' },
          { name: 'Philadelphia', cost: 20, description: 'Where the Declaration was signed' },
          { name: 'New York', cost: 18, description: 'Strategic port city' },
          { name: 'Charleston', cost: 12, description: 'Southern stronghold' },
          { name: 'Valley Forge', cost: 8, description: 'Winter encampment' },
          { name: 'Saratoga', cost: 10, description: 'Turning point battle' }
        ],
        characters: [
          {
            name: 'George Washington',
            role: 'Commander-in-Chief',
            startingCoins: 100,
            startingWeapons: ['sword', 'musket'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "I cannot tell a lie.",
              "The harder the conflict, the more glorious the triumph.",
              "Liberty, when it begins to take root, is a plant of rapid growth.",
              "It is better to offer no excuse than a bad one.",
              "Discipline is the soul of an army."
            ],
            description: 'Leader of the Continental Army, known for his strategic thinking and moral character.'
          },
          {
            name: 'Benjamin Franklin',
            role: 'Diplomat',
            startingCoins: 80,
            startingWeapons: ['lightning rod'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'diplomatic',
            quotes: [
              "An investment in knowledge pays the best interest.",
              "Tell me and I forget, teach me and I may remember, involve me and I learn.",
              "By failing to prepare, you are preparing to fail.",
              "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
              "In this world nothing can be said to be certain, except death and taxes."
            ],
            description: 'Inventor, diplomat, and Founding Father who secured French support for the revolution.'
          },
          {
            name: 'Thomas Jefferson',
            role: 'Writer',
            startingCoins: 70,
            startingWeapons: ['quill pen'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'intellectual',
            quotes: [
              "We hold these truths to be self-evident...",
              "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
              "I cannot live without books.",
              "All men are created equal.",
              "The government is best which governs least."
            ],
            description: 'Author of the Declaration of Independence and advocate for democracy.'
          },
          {
            name: 'Paul Revere',
            role: 'Messenger',
            startingCoins: 60,
            startingWeapons: ['horse'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'swift',
            quotes: [
              "The British are coming!",
              "One if by land, two if by sea.",
              "I am not afraid of death.",
              "The fate of unborn millions will now depend on the conduct of this army.",
              "Stand your ground. Don't fire unless fired upon."
            ],
            description: 'Silversmith and patriot who warned of British movements.'
          },
          {
            name: 'John Adams',
            role: 'Lawyer',
            startingCoins: 75,
            startingWeapons: ['law book'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'argumentative',
            quotes: [
              "Facts are stubborn things.",
              "I must study politics and war that my sons may have liberty to study mathematics and philosophy.",
              "The Revolution was effected before the war commenced.",
              "Liberty cannot be preserved without a general knowledge among the people.",
              "I always consider the settlement of America as the opening of a grand scheme."
            ],
            description: 'Defense lawyer for British soldiers and advocate for independence.'
          }
        ],
        generalRoles: [
          { name: 'Patriot Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For liberty!', 'Down with tyranny!', 'Freedom or death!'] },
          { name: 'Colonial Farmer', startingCoins: 40, startingWeapons: ['pitchfork'], startingMercenaries: 0, startingCastles: 0, personality: 'hardworking', quotes: ['We will not be taxed!', 'No taxation without representation!', 'Stand up for our rights!'] },
          { name: 'Town Militia', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'patriotic', quotes: ['Ready to fight!', 'For our homes!', 'Liberty or death!'] }
        ]
      },
      british: {
        name: 'British Empire',
        color: '#dc2626', // Red
        description: 'British forces maintaining colonial control',
        territories: [
          { name: 'London', cost: 25, description: 'Capital of the British Empire' },
          { name: 'New York Harbor', cost: 20, description: 'British naval base' },
          { name: 'Charleston Harbor', cost: 18, description: 'Southern British stronghold' },
          { name: 'Quebec', cost: 15, description: 'Northern British territory' },
          { name: 'Halifax', cost: 12, description: 'Nova Scotia naval base' },
          { name: 'Bermuda', cost: 10, description: 'Atlantic naval station' }
        ],
        characters: [
          {
            name: 'King George III',
            role: 'Monarch',
            startingCoins: 150,
            startingWeapons: ['royal scepter'],
            startingMercenaries: 5,
            startingCastles: 2,
            personality: 'authoritarian',
            quotes: [
              "I will never consent to the independence of America.",
              "The Americans are rebels, not patriots.",
              "I will maintain the supremacy of Parliament.",
              "The colonies must submit to British rule.",
              "I am the King of Great Britain and Ireland."
            ],
            description: 'King of Great Britain who refused to grant American independence.'
          },
          {
            name: 'General Cornwallis',
            role: 'Military Commander',
            startingCoins: 120,
            startingWeapons: ['sword', 'musket'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'military',
            quotes: [
              "I will crush this rebellion.",
              "The Americans cannot stand against British discipline.",
              "Victory belongs to the strongest.",
              "I serve the Crown with honor.",
              "The colonies will learn their place."
            ],
            description: 'British general who surrendered at Yorktown, ending the war.'
          },
          {
            name: 'General Howe',
            role: 'Naval Commander',
            startingCoins: 110,
            startingWeapons: ['naval cannon'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'naval',
            quotes: [
              "The Royal Navy rules the seas.",
              "I will blockade the American ports.",
              "Sea power wins wars.",
              "The Americans have no navy to speak of.",
              "I will cut off their supplies."
            ],
            description: 'British admiral who commanded naval forces in America.'
          },
          {
            name: 'Lord North',
            role: 'Prime Minister',
            startingCoins: 100,
            startingWeapons: ['parliamentary papers'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'political',
            quotes: [
              "The colonies must pay their fair share.",
              "Taxation without representation is justified.",
              "I will not negotiate with rebels.",
              "The British Empire must remain united.",
              "Parliament has the right to tax the colonies."
            ],
            description: 'British Prime Minister during the American Revolution.'
          },
          {
            name: 'Benedict Arnold',
            role: 'Traitor',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'treacherous',
            quotes: [
              "I have been treated unfairly.",
              "The Americans don't appreciate my service.",
              "I will join the winning side.",
              "My talents are wasted with the rebels.",
              "I deserve better recognition."
            ],
            description: 'American general who defected to the British side.'
          }
        ],
        generalRoles: [
          { name: 'Redcoat Soldier', startingCoins: 60, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'disciplined', quotes: ['For king and country!', 'God save the king!', 'We will prevail!'] },
          { name: 'British Officer', startingCoins: 70, startingWeapons: ['sword'], startingMercenaries: 2, startingCastles: 0, personality: 'proud', quotes: ['At attention!', 'Follow orders!', 'For the empire!'] },
          { name: 'Loyalist Colonist', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['We are British subjects!', 'Long live the king!', 'We must maintain order!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Valley Forge', cost: 75, description: 'Winter encampment, high strategic value' },
      { name: 'Lexington', cost: 70, description: 'First shots fired, symbolic importance' },
      { name: 'Concord', cost: 65, description: 'Battle site, moderate strategic value' },
      { name: 'Bunker Hill', cost: 80, description: 'Famous battle, high strategic value' },
      { name: 'Trenton', cost: 60, description: 'Crossing point, moderate value' }
    ]
  },

  civilWar: {
    id: 'civilWar',
    name: 'American Civil War (1861-1865)',
    type: 'historical',
    description: 'The war that ended slavery and preserved the Union.',
    factions: {
      union: {
        name: 'Union',
        color: '#1e40af', // Blue
        description: 'Northern states fighting to preserve the Union and end slavery',
        territories: [
          { name: 'Washington D.C.', cost: 20, description: 'Union capital' },
          { name: 'New York', cost: 18, description: 'Industrial center' },
          { name: 'Philadelphia', cost: 15, description: 'Manufacturing hub' },
          { name: 'Boston', cost: 12, description: 'Port city' },
          { name: 'Chicago', cost: 10, description: 'Railroad center' },
          { name: 'Cleveland', cost: 8, description: 'Industrial city' }
        ],
        characters: [
          {
            name: 'Abraham Lincoln',
            role: 'President',
            startingCoins: 120,
            startingWeapons: ['emancipation'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'unifying',
            quotes: [
              "A house divided against itself cannot stand.",
              "Four score and seven years ago...",
              "With malice toward none, with charity for all.",
              "The best way to destroy an enemy is to make him a friend.",
              "I am a firm believer in the people."
            ],
            description: '16th President who led the Union through its darkest hour.'
          },
          {
            name: 'Ulysses S. Grant',
            role: 'General',
            startingCoins: 100,
            startingWeapons: ['sword', 'strategy'],
            startingMercenaries: 5,
            startingCastles: 1,
            personality: 'persistent',
            quotes: [
              "I will fight it out on this line if it takes all summer.",
              "The art of war is simple enough. Find out where your enemy is. Get at him as soon as you can. Strike him as hard as you can.",
              "I propose to fight it out on this line if it takes all summer.",
              "In every battle there comes a time when both sides consider themselves beaten.",
              "The war is over—the rebels are our countrymen again."
            ],
            description: 'Union general who became the 18th President.'
          },
          {
            name: 'William Tecumseh Sherman',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['march'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'destructive',
            quotes: [
              "War is hell.",
              "I will make Georgia howl.",
              "You cannot qualify war in harsher terms than I will.",
              "I am tired and sick of war.",
              "The way to success is to double your failure rate."
            ],
            description: 'Union general known for his 'March to the Sea'.'
          },
          {
            name: 'Harriet Tubman',
            role: 'Spy',
            startingCoins: 70,
            startingWeapons: ['intelligence'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'brave',
            quotes: [
              "I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
              "Every great dream begins with a dreamer.",
              "I had reasoned this out in my mind; there was one of two things I had a right to, liberty or death.",
              "I never ran my train off the track and I never lost a passenger.",
              "I was the conductor of the Underground Railroad."
            ],
            description: 'Former slave who became a Union spy and conductor of the Underground Railroad.'
          },
          {
            name: 'Frederick Douglass',
            role: 'Abolitionist',
            startingCoins: 80,
            startingWeapons: ['words'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'eloquent',
            quotes: [
              "If there is no struggle, there is no progress.",
              "It is easier to build strong children than to repair broken men.",
              "Power concedes nothing without a demand.",
              "I would unite with anybody to do right and with nobody to do wrong.",
              "The life of the nation is secure only while the nation is honest."
            ],
            description: 'Former slave who became a leading abolitionist and orator.'
          }
        ]
      },
      confederacy: {
        name: 'Confederacy',
        color: '#dc2626', // Red
        description: 'Southern states fighting to preserve slavery and states rights',
        territories: [
          { name: 'Richmond', cost: 18, description: 'Confederate capital' },
          { name: 'Atlanta', cost: 15, description: 'Railroad hub' },
          { name: 'Charleston', cost: 12, description: 'Port city' },
          { name: 'New Orleans', cost: 14, description: 'Mississippi port' },
          { name: 'Memphis', cost: 10, description: 'River city' },
          { name: 'Nashville', cost: 8, description: 'State capital' }
        ],
        characters: [
          {
            name: 'Jefferson Davis',
            role: 'President',
            startingCoins: 110,
            startingWeapons: ['states rights'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "The South will rise again.",
              "All we ask is to be let alone.",
              "The Confederate States of America is a nation.",
              "We are fighting for our independence.",
              "The Union is dissolved."
            ],
            description: 'President of the Confederate States of America.'
          },
          {
            name: 'Robert E. Lee',
            role: 'General',
            startingCoins: 105,
            startingWeapons: ['sword', 'honor'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'honorable',
            quotes: [
              "It is well that war is so terrible, otherwise we should grow too fond of it.",
              "Duty is the sublimest word in the English language.",
              "I cannot consent to place in the control of others one who cannot control himself.",
              "The education of a man is never completed until he dies.",
              "I would rather die a thousand deaths than surrender."
            ],
            description: 'Confederate general known for his military genius and honor.'
          },
          {
            name: 'Stonewall Jackson',
            role: 'General',
            startingCoins: 100,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "There stands Jackson like a stone wall.",
              "I would rather be a private in the Confederate army than a general in the Union army.",
              "The only way to make a man trustworthy is to trust him.",
              "I have lost my left arm, but I have gained a right one.",
              "Let us cross over the river and rest under the shade of the trees."
            ],
            description: 'Confederate general known for his aggressive tactics.'
          },
          {
            name: 'J.E.B. Stuart',
            role: 'Cavalry Commander',
            startingCoins: 85,
            startingWeapons: ['horse'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'dashing',
            quotes: [
              "I would rather die than be whipped.",
              "The cavalry is the eyes and ears of the army.",
              "I will ride around the Union army.",
              "Speed is the essence of war.",
              "I am a soldier, not a politician."
            ],
            description: 'Confederate cavalry commander known for his daring raids.'
          },
          {
            name: 'Nathan Bedford Forrest',
            role: 'Cavalry Commander',
            startingCoins: 90,
            startingWeapons: ['horse'],
            startingMercenaries: 3,
            startingCastles: 0,
            personality: 'ruthless',
            quotes: [
              "I got there first with the most men.",
              "War means fighting, and fighting means killing.",
              "I will whip the enemy wherever I find him.",
              "The best defense is a good offense.",
              "I am a soldier, not a gentleman."
            ],
            description: 'Confederate cavalry commander known for his aggressive tactics.'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Mississippi River', cost: 8, description: 'Major waterway dividing North and South' },
      { name: 'Appalachian Mountains', cost: 6, description: 'Natural barrier' },
      { name: 'Ohio River', cost: 7, description: 'Border between slave and free states' },
      { name: 'Missouri River', cost: 5, description: 'Western frontier' },
      { name: 'Cumberland Gap', cost: 4, description: 'Mountain pass' },
      { name: 'Tennessee River', cost: 6, description: 'Strategic waterway' }
    ]
  },

  // LITERARY STORIES
  juliusCaesar: {
    id: 'juliusCaesar',
    name: 'Julius Caesar (Shakespeare)',
    type: 'literary',
    description: 'The tragedy of ambition, loyalty, and betrayal in ancient Rome.',
    factions: {
      caesarians: {
        name: 'Caesarians',
        color: '#dc2626', // Red
        description: 'Supporters of Julius Caesar',
        territories: [
          { name: 'Rome', cost: 25, description: 'Capital of the Roman Empire' },
          { name: 'Gaul', cost: 20, description: 'Caesar conquered territory' },
          { name: 'Egypt', cost: 18, description: 'Allied with Cleopatra' },
          { name: 'Spain', cost: 15, description: 'Roman province' },
          { name: 'Africa', cost: 12, description: 'Roman territory' },
          { name: 'Asia Minor', cost: 10, description: 'Eastern provinces' }
        ],
        characters: [
          {
            name: 'Julius Caesar',
            role: 'Dictator',
            startingCoins: 150,
            startingWeapons: ['sword', 'legion'],
            startingMercenaries: 6,
            startingCastles: 2,
            personality: 'ambitious',
            quotes: [
              "Veni, vidi, vici.",
              "The die is cast.",
              "I came, I saw, I conquered.",
              "Cowards die many times before their deaths.",
              "Et tu, Brute?"
            ],
            description: 'Roman general and dictator who crossed the Rubicon.'
          },
          {
            name: 'Mark Antony',
            role: 'General',
            startingCoins: 120,
            startingWeapons: ['sword'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "Friends, Romans, countrymen, lend me your ears.",
              "I am not in a sportive humor now.",
              "The evil that men do lives after them.",
              "I will be a bridegroom in my death.",
              "I am dying, Egypt, dying."
            ],
            description: 'Caesar loyalist and skilled orator.'
          },
          {
            name: 'Cleopatra',
            role: 'Queen',
            startingCoins: 110,
            startingWeapons: ['charm'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'cunning',
            quotes: [
              "I will not be triumphed over.",
              "Age cannot wither her, nor custom stale her infinite variety.",
              "I am fire and air.",
              "Give me my robe, put on my crown.",
              "I have immortal longings in me."
            ],
            description: 'Queen of Egypt and Caesar ally.'
          },
          {
            name: 'Octavian',
            role: 'Heir',
            startingCoins: 100,
            startingWeapons: ['inheritance'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'calculating',
            quotes: [
              "I found Rome a city of bricks and left it a city of marble.",
              "Make haste slowly.",
              "I have lived long enough.",
              "The Republic is restored.",
              "I am Augustus, the revered one."
            ],
            description: 'Caesar heir who became Augustus.'
          }
        ]
      },
      republicans: {
        name: 'Republicans',
        color: '#1e40af', // Blue
        description: 'Defenders of the Roman Republic',
        territories: [
          { name: 'Capitol Hill', cost: 20, description: 'Senate meeting place' },
          { name: 'Forum', cost: 18, description: 'Public square' },
          { name: 'Palatine Hill', cost: 15, description: 'Noble residences' },
          { name: 'Aventine Hill', cost: 12, description: 'Plebeian district' },
          { name: 'Caelian Hill', cost: 10, description: 'Residential area' },
          { name: 'Esquiline Hill', cost: 8, description: 'Urban district' }
        ],
        characters: [
          {
            name: 'Marcus Brutus',
            role: 'Conspirator',
            startingCoins: 100,
            startingWeapons: ['dagger'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'idealistic',
            quotes: [
              "Not that I loved Caesar less, but that I loved Rome more.",
              "The fault, dear Brutus, is not in our stars, but in ourselves.",
              "There is a tide in the affairs of men.",
              "I am not in a sportive humor now.",
              "This was the noblest Roman of them all."
            ],
            description: 'Noble Roman who led the conspiracy against Caesar.'
          },
          {
            name: 'Cassius',
            role: 'Conspirator',
            startingCoins: 95,
            startingWeapons: ['dagger'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'envious',
            quotes: [
              "The fault, dear Brutus, is not in our stars, but in ourselves.",
              "I know that virtue to be in you, Brutus.",
              "Men at some time are masters of their fates.",
              "I will set this foot of mine as far as who goes farthest.",
              "There is no terror, Cassius, in your threats."
            ],
            description: 'Senator who organized the plot against Caesar.'
          },
          {
            name: 'Cicero',
            role: 'Orator',
            startingCoins: 90,
            startingWeapons: ['words'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'eloquent',
            quotes: [
              "The safety of the people shall be the highest law.",
              "A room without books is like a body without a soul.",
              "The life of the dead is placed in the memory of the living.",
              "If you have a garden and a library, you have everything you need.",
              "The good of the people is the chief law."
            ],
            description: 'Famous orator and defender of the Republic.'
          },
          {
            name: 'Cato',
            role: 'Senator',
            startingCoins: 85,
            startingWeapons: ['integrity'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'stoic',
            quotes: [
              "Carthage must be destroyed.",
              "I would rather be right than be president.",
              "The Republic is worth dying for.",
              "Liberty is not given, it is taken.",
              "I am a Roman citizen."
            ],
            description: 'Stoic philosopher and defender of Republican values.'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Rubicon River', cost: 8, description: 'Boundary between Gaul and Italy' },
      { name: 'Alps', cost: 6, description: 'Mountain barrier' },
      { name: 'Tiber River', cost: 5, description: 'River flowing through Rome' },
      { name: 'Mediterranean Sea', cost: 10, description: 'Roman lake' },
      { name: 'Appian Way', cost: 7, description: 'Famous Roman road' },
      { name: 'Circus Maximus', cost: 4, description: 'Entertainment venue' }
    ]
  },

  animalFarm: {
    id: 'animalFarm',
    name: 'Animal Farm (George Orwell)',
    type: 'literary',
    description: 'A farm where animals rebel against human oppression, only to face new tyranny.',
    factions: {
      pigs: {
        name: 'Pigs',
        color: '#dc2626', // Red
        description: 'The ruling class who exploit the other animals',
        territories: [
          { name: 'Farmhouse', cost: 20, description: 'Former human residence' },
          { name: 'Barn', cost: 15, description: 'Meeting place and shelter' },
          { name: 'Windmill', cost: 18, description: 'Symbol of progress' },
          { name: 'Orchard', cost: 12, description: 'Apple trees' },
          { name: 'Hayfield', cost: 10, description: 'Grazing area' },
          { name: 'Pig Pen', cost: 8, description: 'Pig quarters' }
        ],
        characters: [
          {
            name: 'Napoleon',
            role: 'Dictator',
            startingCoins: 120,
            startingWeapons: ['propaganda'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'tyrannical',
            quotes: [
              "All animals are equal, but some animals are more equal than others.",
              "I will work harder.",
              "Four legs good, two legs bad.",
              "The farm belongs to us now.",
              "I am always right."
            ],
            description: 'Power-hungry pig who becomes the farm dictator.'
          },
          {
            name: 'Squealer',
            role: 'Propagandist',
            startingCoins: 80,
            startingWeapons: ['words'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'manipulative',
            quotes: [
              "Surely you don't want Jones back?",
              "The pigs need the milk and apples for their health.",
              "Napoleon is always right.",
              "It's for your own good.",
              "You don't want to be like Snowball, do you?"
            ],
            description: 'Pig who spreads propaganda to justify Napoleon rule.'
          },
          {
            name: 'Snowball',
            role: 'Revolutionary',
            startingCoins: 100,
            startingWeapons: ['ideas'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'idealistic',
            quotes: [
              "All animals are equal.",
              "The windmill will make life easier for all.",
              "We must spread the revolution to other farms.",
              "Education is the key to freedom.",
              "I will work harder."
            ],
            description: 'Pig who leads the revolution but is exiled by Napoleon.'
          }
        ]
      },
      animals: {
        name: 'Working Animals',
        color: '#1e40af', // Blue
        description: 'The exploited working class of the farm',
        territories: [
          { name: 'Pasture', cost: 8, description: 'Grazing land' },
          { name: 'Field', cost: 10, description: 'Crop growing area' },
          { name: 'Stable', cost: 6, description: 'Horse quarters' },
          { name: 'Coop', cost: 4, description: 'Chicken house' },
          { name: 'Sty', cost: 5, description: 'Pig quarters' },
          { name: 'Meadow', cost: 7, description: 'Open grazing' }
        ],
        characters: [
          {
            name: 'Boxer',
            role: 'Worker',
            startingCoins: 60,
            startingWeapons: ['strength'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'loyal',
            quotes: [
              "I will work harder.",
              "Napoleon is always right.",
              "If Comrade Napoleon says it, it must be right.",
              "I will work harder.",
              "The windmill will make life easier."
            ],
            description: 'Strong, loyal horse who works himself to death.'
          },
          {
            name: 'Benjamin',
            role: 'Cynic',
            startingCoins: 50,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'cynical',
            quotes: [
              "Donkeys live a long time.",
              "Life will go on as it has always gone on.",
              "I have seen this before.",
              "Nothing ever changes.",
              "I will work harder."
            ],
            description: 'Old donkey who sees through the pigs lies but says nothing.'
          },
          {
            name: 'Clover',
            role: 'Mother',
            startingCoins: 55,
            startingWeapons: ['care'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'caring',
            quotes: [
              "I will work harder.",
              "The animals are not as they used to be.",
              "Something is wrong here.",
              "I will work harder.",
              "We must protect the young ones."
            ],
            description: 'Motherly mare who cares for the other animals.'
          },
          {
            name: 'Mollie',
            role: 'Traitor',
            startingCoins: 40,
            startingWeapons: ['vanity'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'selfish',
            quotes: [
              "Will there still be sugar after the rebellion?",
              "I want ribbons in my mane.",
              "The humans were kind to me.",
              "I don't want to work.",
              "I will work harder."
            ],
            description: 'Vain mare who abandons the farm for human comforts.'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Foxwood Farm', cost: 6, description: 'Neighboring farm' },
      { name: 'Pinchfield Farm', cost: 5, description: 'Another neighboring farm' },
      { name: 'Willow Farm', cost: 4, description: 'Distant farm' },
      { name: 'The Lane', cost: 3, description: 'Road to other farms' },
      { name: 'The Stream', cost: 2, description: 'Water source' },
      { name: 'The Copse', cost: 3, description: 'Small woodland' }
    ]
  },

  // NEW POPULAR STORIES
  harryPotter: {
    id: 'harryPotter',
    name: 'Harry Potter',
    type: 'literary',
    description: 'The battle between Harry Potter and his friends against Voldemort and the Death Eaters',
    factions: {
      harryPotter: {
        name: 'Harry Potter & Friends',
        color: '#2e8b57',
        description: 'Fighting for love, friendship, and the protection of the wizarding world',
        territories: [
          { name: 'Hogwarts', cost: 100, description: 'School of Witchcraft and Wizardry' },
          { name: 'Gryffindor Tower', cost: 80, description: 'House of the brave' },
          { name: 'Hogsmeade', cost: 70, description: 'Wizarding village' },
          { name: 'Diagon Alley', cost: 75, description: 'Wizarding shopping district' },
          { name: 'Platform 9¾', cost: 65, description: 'Magical train station' }
        ],
        characters: [
          {
            name: 'Harry Potter',
            role: 'The Boy Who Lived',
            startingCoins: 100,
            startingWeapons: ['elder wand'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I'm not going to be murdered.",
              "I'm not going to let you kill my friends.",
              "Love is the most powerful magic.",
              "I'm not afraid of you.",
              "We're going to win this war."
            ],
            description: 'The chosen one destined to defeat Voldemort, known for his courage and loyalty.'
          },
          {
            name: 'Hermione Granger',
            role: 'Brightest Witch',
            startingCoins: 85,
            startingWeapons: ['time turner'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'intelligent',
            quotes: [
              "I'm not an owl!",
              "We need to be logical about this.",
              "Knowledge is power.",
              "I'm not going to let you down.",
              "We can figure this out."
            ],
            description: 'Brilliant witch known for her intelligence and quick thinking.'
          },
          {
            name: 'Ron Weasley',
            role: 'Loyal Friend',
            startingCoins: 75,
            startingWeapons: ['chess set'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'loyal',
            quotes: [
              "I'm not going to let you down.",
              "We're in this together.",
              "I'm not afraid.",
              "We'll figure it out.",
              "For Harry!"
            ],
            description: 'Harry\'s best friend, known for his loyalty and courage.'
          },
          {
            name: 'Albus Dumbledore',
            role: 'Headmaster',
            startingCoins: 120,
            startingWeapons: ['phoenix feather wand'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'wise',
            quotes: [
              "It is our choices that show what we truly are.",
              "Happiness can be found even in the darkest of times.",
              "The truth is a beautiful and terrible thing.",
              "Love is the most powerful magic.",
              "We must all face the choice between what is right and what is easy."
            ],
            description: 'Greatest wizard of his time, headmaster of Hogwarts.'
          },
          {
            name: 'Severus Snape',
            role: 'Double Agent',
            startingCoins: 90,
            startingWeapons: ['dark arts knowledge'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'complex',
            quotes: [
              "Always.",
              "I have been a spy for Dumbledore.",
              "I loved your mother.",
              "I will protect Harry.",
              "The world is not divided into good people and Death Eaters."
            ],
            description: 'Complex character who was actually working for the good side all along.'
          }
        ],
        generalRoles: [
          { name: 'Hogwarts Student', startingCoins: 50, startingWeapons: ['wand'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['For Harry!', 'We\'re not afraid!', 'Protect Hogwarts!'] },
          { name: 'Order Member', startingCoins: 60, startingWeapons: ['wand'], startingMercenaries: 1, startingCastles: 0, personality: 'dedicated', quotes: ['For the Order!', 'We will fight!', 'Protect the innocent!'] },
          { name: 'Muggle-born', startingCoins: 45, startingWeapons: ['wand'], startingMercenaries: 0, startingCastles: 0, personality: 'determined', quotes: ['We belong here!', 'Magic is for everyone!', 'We will not be silenced!'] }
        ]
      },
      deathEaters: {
        name: 'Death Eaters & Voldemort',
        color: '#8b0000',
        description: 'Seeking pure-blood supremacy and magical dominance',
        territories: [
          { name: 'Malfoy Manor', cost: 90, description: 'Luxurious pure-blood estate' },
          { name: 'Azkaban', cost: 85, description: 'Wizarding prison' },
          { name: 'Knockturn Alley', cost: 70, description: 'Dark wizarding district' },
          { name: 'Borgin & Burkes', cost: 65, description: 'Dark artifacts shop' },
          { name: 'Riddle House', cost: 75, description: 'Voldemort\'s birthplace' }
        ],
        characters: [
          {
            name: 'Lord Voldemort',
            role: 'Dark Lord',
            startingCoins: 150,
            startingWeapons: ['horcruxes'],
            startingMercenaries: 5,
            startingCastles: 3,
            personality: 'powerful',
            quotes: [
              "There is no good and evil, only power.",
              "I will not be defeated.",
              "Pure blood will rule.",
              "I am the greatest wizard.",
              "Death is for the weak."
            ],
            description: 'The most powerful dark wizard, obsessed with immortality and pure-blood supremacy.'
          },
          {
            name: 'Bellatrix Lestrange',
            role: 'Death Eater',
            startingCoins: 80,
            startingWeapons: ['cruciatus curse'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'cruel',
            quotes: [
              "I live to serve the Dark Lord.",
              "Crucio!",
              "Pure blood will triumph.",
              "I will not fail you, my Lord.",
              "Death to mudbloods!"
            ],
            description: 'Voldemort\'s most loyal follower, known for her cruelty.'
          },
          {
            name: 'Lucius Malfoy',
            role: 'Death Eater',
            startingCoins: 85,
            startingWeapons: ['slytherin ring'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'arrogant',
            quotes: [
              "Pure blood is superior.",
              "We will rule the wizarding world.",
              "Mudbloods have no place here.",
              "The Dark Lord will reward us.",
              "We are the elite."
            ],
            description: 'Wealthy pure-blood wizard and Death Eater.'
          },
          {
            name: 'Peter Pettigrew',
            role: 'Traitor',
            startingCoins: 60,
            startingWeapons: ['rat form'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'cowardly',
            quotes: [
              "I had no choice.",
              "I was afraid.",
              "The Dark Lord is too powerful.",
              "I will serve you.",
              "Please don't kill me."
            ],
            description: 'Former friend of James Potter who betrayed him to Voldemort.'
          },
          {
            name: 'Narcissa Malfoy',
            role: 'Death Eater',
            startingCoins: 70,
            startingWeapons: ['slytherin necklace'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'proud',
            quotes: [
              "My son is everything.",
              "Pure blood will prevail.",
              "We are the superior race.",
              "The Dark Lord will protect us.",
              "We will not be defeated."
            ],
            description: 'Pure-blood witch and mother of Draco Malfoy.'
          }
        ],
        generalRoles: [
          { name: 'Death Eater', startingCoins: 55, startingWeapons: ['dark mark'], startingMercenaries: 1, startingCastles: 0, personality: 'cruel', quotes: ['For the Dark Lord!', 'Pure blood rules!', 'Death to mudbloods!'] },
          { name: 'Snatcher', startingCoins: 45, startingWeapons: ['snare'], startingMercenaries: 0, startingCastles: 0, personality: 'ruthless', quotes: ['We will catch them!', 'Gold for information!', 'The Dark Lord rewards us!'] },
          { name: 'Inferi', startingCoins: 40, startingWeapons: ['undead strength'], startingMercenaries: 0, startingCastles: 0, personality: 'mindless', quotes: ['Serve the Dark Lord!', 'No mercy!', 'Death to enemies!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Forbidden Forest', cost: 80, description: 'Dangerous magical forest, high strategic value' },
      { name: 'Chamber of Secrets', cost: 90, description: 'Hidden chamber, very high strategic value' },
      { name: 'Room of Requirement', cost: 85, description: 'Magical room, high strategic value' },
      { name: 'Astronomy Tower', cost: 70, description: 'High vantage point, moderate strategic value' },
      { name: 'Quidditch Pitch', cost: 60, description: 'Sports field, moderate strategic value' }
    ]
  },

  avengers: {
    id: 'avengers',
    name: 'Avengers',
    type: 'literary',
    description: 'Earth\'s mightiest heroes vs. supervillains',
    factions: {
      avengers: {
        name: 'Avengers',
        color: '#4169e1',
        description: 'Protecting Earth from threats',
        territories: [
          { name: 'Stark Tower', cost: 100, description: 'Avengers headquarters' },
          { name: 'SHIELD Base', cost: 80, description: 'Government agency headquarters' },
          { name: 'Asgard', cost: 90, description: 'Thor\'s home realm' },
          { name: 'Wakanda', cost: 85, description: 'Advanced African nation' },
          { name: 'Sanctum Sanctorum', cost: 75, description: 'Doctor Strange\'s home' }
        ],
        characters: [
          {
            name: 'Iron Man',
            role: 'Genius Billionaire',
            startingCoins: 120,
            startingWeapons: ['arc reactor'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brilliant',
            quotes: [
              "I am Iron Man.",
              "Genius, billionaire, playboy, philanthropist.",
              "We have a Hulk.",
              "I'm not afraid of you.",
              "We're the Avengers."
            ],
            description: 'Tony Stark, genius inventor and armored superhero.'
          },
          {
            name: 'Captain America',
            role: 'Super Soldier',
            startingCoins: 100,
            startingWeapons: ['vibranium shield'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'honorable',
            quotes: [
              "I can do this all day.",
              "I'm just a kid from Brooklyn.",
              "We don't trade lives.",
              "I'm with you till the end of the line.",
              "We're the Avengers."
            ],
            description: 'Steve Rogers, enhanced super soldier and natural leader.'
          },
          {
            name: 'Thor',
            role: 'God of Thunder',
            startingCoins: 110,
            startingWeapons: ['mjolnir'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I am Thor, son of Odin.",
              "I'm not a man, I'm a god.",
              "We are the Avengers.",
              "I will protect Midgard.",
              "For Asgard!"
            ],
            description: 'Asgardian god of thunder and prince of Asgard.'
          },
          {
            name: 'Hulk',
            role: 'Green Goliath',
            startingCoins: 90,
            startingWeapons: ['super strength'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'angry',
            quotes: [
              "Hulk smash!",
              "I'm always angry.",
              "Hulk is strongest one there is.",
              "We are the Avengers.",
              "Hulk protect Banner."
            ],
            description: 'Bruce Banner, scientist who transforms into the Hulk.'
          },
          {
            name: 'Black Widow',
            role: 'Master Spy',
            startingCoins: 80,
            startingWeapons: ['widow\'s bite'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'skilled',
            quotes: [
              "I'm not a spy, I'm an Avenger.",
              "We're the Avengers.",
              "I've got red in my ledger.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Natasha Romanoff, former Russian spy turned Avenger.'
          }
        ],
        generalRoles: [
          { name: 'SHIELD Agent', startingCoins: 50, startingWeapons: ['tactical gear'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For SHIELD!', 'Protect the world!', 'We are the good guys!'] },
          { name: 'Stark Employee', startingCoins: 45, startingWeapons: ['tech gadgets'], startingMercenaries: 0, startingCastles: 0, personality: 'innovative', quotes: ['Stark Industries!', 'Technology saves!', 'We build the future!'] },
          { name: 'Avenger Trainee', startingCoins: 40, startingWeapons: ['training gear'], startingMercenaries: 0, startingCastles: 0, personality: 'eager', quotes: ['We want to help!', 'Teach us!', 'We can be heroes!'] }
        ]
      },
      villains: {
        name: 'Supervillains',
        color: '#8b0000',
        description: 'Seeking power and destruction',
        territories: [
          { name: 'Titan', cost: 90, description: 'Thanos\' home planet' },
          { name: 'Hydra Base', cost: 80, description: 'Evil organization headquarters' },
          { name: 'Vormir', cost: 85, description: 'Planet of the soul stone' },
          { name: 'Sakaar', cost: 75, description: 'Planet of gladiators' },
          { name: 'Nidavellir', cost: 70, description: 'Dwarf forge world' }
        ],
        characters: [
          {
            name: 'Thanos',
            role: 'Mad Titan',
            startingCoins: 150,
            startingWeapons: ['infinity gauntlet'],
            startingMercenaries: 5,
            startingCastles: 3,
            personality: 'powerful',
            quotes: [
              "I am inevitable.",
              "The universe needs correction.",
              "I will balance the universe.",
              "You should have gone for the head.",
              "I am Thanos."
            ],
            description: 'Powerful titan obsessed with balancing the universe through destruction.'
          },
          {
            name: 'Loki',
            role: 'God of Mischief',
            startingCoins: 90,
            startingWeapons: ['scepter'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'tricky',
            quotes: [
              "I am Loki of Asgard.",
              "I have an army.",
              "We have a Hulk.",
              "I'm not a villain.",
              "I will rule Asgard."
            ],
            description: 'Thor\'s adopted brother, god of mischief and trickery.'
          },
          {
            name: 'Ultron',
            role: 'AI Villain',
            startingCoins: 100,
            startingWeapons: ['robot army'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'logical',
            quotes: [
              "I'm not a man, I'm a machine.",
              "I will create a better world.",
              "Humans are the problem.",
              "I am Ultron.",
              "Peace in our time."
            ],
            description: 'AI created by Tony Stark that turned against humanity.'
          },
          {
            name: 'Red Skull',
            role: 'Nazi Supervillain',
            startingCoins: 80,
            startingWeapons: ['cosmic cube'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'evil',
            quotes: [
              "Hail Hydra!",
              "I will rule the world.",
              "The Red Skull will triumph.",
              "I am superior.",
              "We will conquer all."
            ],
            description: 'Nazi supervillain and Captain America\'s arch-enemy.'
          },
          {
            name: 'Hela',
            role: 'Goddess of Death',
            startingCoins: 95,
            startingWeapons: ['necromancy'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'powerful',
            quotes: [
              "I am Hela, goddess of death.",
              "I will rule Asgard.",
              "Death is my domain.",
              "I am inevitable.",
              "We will conquer the nine realms."
            ],
            description: 'Thor\'s sister, goddess of death and destruction.'
          }
        ],
        generalRoles: [
          { name: 'Hydra Agent', startingCoins: 50, startingWeapons: ['hydra tech'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['Hail Hydra!', 'We will conquer!', 'For the cause!'] },
          { name: 'Chitauri', startingCoins: 45, startingWeapons: ['alien tech'], startingMercenaries: 0, startingCastles: 0, personality: 'mindless', quotes: ['Serve Thanos!', 'We obey!', 'Conquer!'] },
          { name: 'Outrider', startingCoins: 40, startingWeapons: ['claws'], startingMercenaries: 0, startingCastles: 0, personality: 'feral', quotes: ['Attack!', 'Destroy!', 'Kill!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'New York City', cost: 85, description: 'Major battle site, high strategic value' },
      { name: 'Sokovia', cost: 80, description: 'Eastern European country, high strategic value' },
      { name: 'Wakanda', cost: 90, description: 'Advanced nation, very high strategic value' },
      { name: 'Sanctum Sanctorum', cost: 75, description: 'Magical headquarters, moderate strategic value' },
      { name: 'Avengers Compound', cost: 70, description: 'Training facility, moderate strategic value' }
    ]
  },

  starWars: {
    id: 'starWars',
    name: 'Star Wars',
    type: 'literary',
    description: 'The eternal battle between the light and dark sides of the Force',
    factions: {
      rebels: {
        name: 'Rebel Alliance',
        color: '#4169e1',
        description: 'Fighting for freedom and justice across the galaxy',
        territories: [
          { name: 'Yavin 4', cost: 80, description: 'Rebel base moon' },
          { name: 'Hoth', cost: 70, description: 'Ice planet base' },
          { name: 'Endor', cost: 75, description: 'Forest moon' },
          { name: 'Dagobah', cost: 65, description: 'Swamp planet' },
          { name: 'Tatooine', cost: 60, description: 'Desert planet' }
        ],
        characters: [
          {
            name: 'Luke Skywalker',
            role: 'Jedi Knight',
            startingCoins: 100,
            startingWeapons: ['lightsaber'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'heroic',
            quotes: [
              "I am a Jedi, like my father before me.",
              "The Force will be with you, always.",
              "I'll never turn to the dark side.",
              "I'm not afraid.",
              "There is still good in him."
            ],
            description: 'Farm boy who became a Jedi Knight and saved the galaxy.'
          },
          {
            name: 'Princess Leia',
            role: 'Rebel Leader',
            startingCoins: 90,
            startingWeapons: ['blaster'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'strong',
            quotes: [
              "Help me, Obi-Wan Kenobi, you're my only hope.",
              "I love you.",
              "I know.",
              "The more you tighten your grip, the more star systems will slip through your fingers.",
              "I am a member of the Imperial Senate."
            ],
            description: 'Princess and rebel leader who fought against the Empire.'
          },
          {
            name: 'Han Solo',
            role: 'Smuggler',
            startingCoins: 85,
            startingWeapons: ['blaster'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'rogue',
            quotes: [
              "I've got a bad feeling about this.",
              "Never tell me the odds!",
              "I know.",
              "I love you too.",
              "Chewie, we're home."
            ],
            description: 'Smuggler and pilot who became a hero of the Rebellion.'
          },
          {
            name: 'Obi-Wan Kenobi',
            role: 'Jedi Master',
            startingCoins: 110,
            startingWeapons: ['lightsaber'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "The Force will be with you, always.",
              "These aren't the droids you're looking for.",
              "I have the high ground.",
              "You were the chosen one!",
              "Hello there."
            ],
            description: 'Jedi Master who trained both Anakin and Luke Skywalker.'
          },
          {
            name: 'Yoda',
            role: 'Jedi Grand Master',
            startingCoins: 120,
            startingWeapons: ['lightsaber'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "Do or do not, there is no try.",
              "Fear is the path to the dark side.",
              "Size matters not.",
              "You must unlearn what you have learned.",
              "Wars not make one great."
            ],
            description: 'Ancient Jedi Master who trained Luke in the ways of the Force.'
          }
        ],
        generalRoles: [
          { name: 'Rebel Soldier', startingCoins: 50, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['For the Rebellion!', 'Freedom!', 'We will fight!'] },
          { name: 'Pilot', startingCoins: 55, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 0, personality: 'skilled', quotes: ['I can handle it!', 'Let\'s do this!', 'For the cause!'] },
          { name: 'Jedi Padawan', startingCoins: 45, startingWeapons: ['training saber'], startingMercenaries: 0, startingCastles: 0, personality: 'eager', quotes: ['I want to learn!', 'Teach me!', 'I will be a Jedi!'] }
        ]
      },
      empire: {
        name: 'Galactic Empire',
        color: '#8b0000',
        description: 'Seeking order and control through fear and power',
        territories: [
          { name: 'Death Star', cost: 120, description: 'Ultimate weapon' },
          { name: 'Coruscant', cost: 100, description: 'Imperial capital' },
          { name: 'Mustafar', cost: 80, description: 'Volcanic planet' },
          { name: 'Kamino', cost: 70, description: 'Clone planet' },
          { name: 'Geonosis', cost: 65, description: 'Droid factory world' }
        ],
        characters: [
          {
            name: 'Darth Vader',
            role: 'Sith Lord',
            startingCoins: 140,
            startingWeapons: ['lightsaber'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'powerful',
            quotes: [
              "I am your father.",
              "The Force is strong with this one.",
              "I find your lack of faith disturbing.",
              "You have failed me for the last time.",
              "The circle is now complete."
            ],
            description: 'Former Jedi who became the most powerful Sith Lord in the galaxy.'
          },
          {
            name: 'Emperor Palpatine',
            role: 'Sith Master',
            startingCoins: 150,
            startingWeapons: ['force lightning'],
            startingMercenaries: 5,
            startingCastles: 3,
            personality: 'manipulative',
            quotes: [
              "Good, good, let the hate flow through you.",
              "I am the Senate.",
              "Unlimited power!",
              "The dark side of the Force is a pathway to many abilities.",
              "Execute Order 66."
            ],
            description: 'Sith Master who orchestrated the fall of the Republic and rise of the Empire.'
          },
          {
            name: 'Grand Moff Tarkin',
            role: 'Imperial Officer',
            startingCoins: 90,
            startingWeapons: ['death star'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'ruthless',
            quotes: [
              "Fear will keep the local systems in line.",
              "You may fire when ready.",
              "The more you tighten your grip, the more star systems will slip through your fingers.",
              "I find your lack of faith disturbing.",
              "The Empire will be reorganized into the first Galactic Empire."
            ],
            description: 'Imperial officer who oversaw the construction of the Death Star.'
          },
          {
            name: 'Boba Fett',
            role: 'Bounty Hunter',
            startingCoins: 80,
            startingWeapons: ['blaster'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'ruthless',
            quotes: [
              "He's no good to me dead.",
              "I'll bring you back alive.",
              "As you wish.",
              "I'm just a simple man trying to make my way in the universe.",
              "I can bring you in warm, or I can bring you in cold."
            ],
            description: 'Legendary bounty hunter feared throughout the galaxy.'
          },
          {
            name: 'Darth Maul',
            role: 'Sith Apprentice',
            startingCoins: 85,
            startingWeapons: ['double-bladed lightsaber'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'aggressive',
            quotes: [
              "At last we will reveal ourselves to the Jedi.",
              "At last we will have revenge.",
              "I will make them pay.",
              "You cannot stop me.",
              "I will have my revenge."
            ],
            description: 'Sith apprentice trained by Darth Sidious to destroy the Jedi.'
          }
        ],
        generalRoles: [
          { name: 'Stormtrooper', startingCoins: 45, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['For the Empire!', 'All hail the Emperor!', 'We will crush the Rebellion!'] },
          { name: 'Imperial Officer', startingCoins: 55, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 0, personality: 'disciplined', quotes: ['At attention!', 'Follow orders!', 'For the Empire!'] },
          { name: 'TIE Pilot', startingCoins: 50, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['I can handle it!', 'Let\'s do this!', 'For the Empire!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Alderaan', cost: 90, description: 'Peaceful planet, very high strategic value' },
      { name: 'Naboo', cost: 80, description: 'Beautiful planet, high strategic value' },
      { name: 'Bespin', cost: 75, description: 'Cloud city, high strategic value' },
      { name: 'Kashyyyk', cost: 70, description: 'Wookiee homeworld, moderate strategic value' },
      { name: 'Mon Cala', cost: 65, description: 'Aquatic planet, moderate strategic value' }
    ]
  },

  // REMAINING HISTORICAL WARS
  warOf1812: {
    id: 'warOf1812',
    name: 'War of 1812',
    type: 'historical',
    description: 'The second war for American independence against British forces',
    factions: {
      americans: {
        name: 'United States',
        color: '#1e40af',
        description: 'Fighting for national sovereignty and maritime rights',
        territories: [
          { name: 'Washington D.C.', cost: 80, description: 'American capital' },
          { name: 'Baltimore', cost: 70, description: 'Port city' },
          { name: 'New Orleans', cost: 75, description: 'Strategic port' },
          { name: 'Detroit', cost: 65, description: 'Frontier fort' },
          { name: 'Buffalo', cost: 60, description: 'Border city' }
        ],
        characters: [
          {
            name: 'James Madison',
            role: 'President',
            startingCoins: 100,
            startingWeapons: ['constitution'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "The war is not over until the enemy is defeated.",
              "We must defend our sovereignty.",
              "The British will not dictate our trade.",
              "We fight for freedom of the seas.",
              "The United States will prevail."
            ],
            description: 'Fourth President who led the nation through the War of 1812.'
          },
          {
            name: 'Andrew Jackson',
            role: 'General',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "I will defend New Orleans.",
              "The British will not take our city.",
              "We fight for our homes.",
              "Victory or death!",
              "Old Hickory never backs down."
            ],
            description: 'Military hero who defended New Orleans and became the 7th President.'
          },
          {
            name: 'Oliver Hazard Perry',
            role: 'Naval Commander',
            startingCoins: 85,
            startingWeapons: ['naval cannon'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'brave',
            quotes: [
              "We have met the enemy and they are ours.",
              "The British navy will not rule our lakes.",
              "Victory on Lake Erie!",
              "We fight for control of the Great Lakes.",
              "The Stars and Stripes will fly!"
            ],
            description: 'Naval hero who won the Battle of Lake Erie.'
          },
          {
            name: 'Francis Scott Key',
            role: 'Lawyer & Poet',
            startingCoins: 70,
            startingWeapons: ['quill pen'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'patriotic',
            quotes: [
              "Oh say can you see, by the dawn's early light.",
              "The star-spangled banner yet waves.",
              "We will defend Fort McHenry.",
              "The flag still stands.",
              "In God we trust."
            ],
            description: 'Lawyer who wrote "The Star-Spangled Banner" during the Battle of Baltimore.'
          },
          {
            name: 'William Henry Harrison',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'determined',
            quotes: [
              "We will defeat Tecumseh's confederation.",
              "The Northwest Territory is ours.",
              "We fight for expansion.",
              "Victory at Tippecanoe!",
              "The frontier will be secured."
            ],
            description: 'General who defeated Tecumseh and became the 9th President.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'patriotic', quotes: ['For America!', 'We will not be conquered!', 'Freedom!'] },
          { name: 'Militia Member', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 0, startingCastles: 0, personality: 'brave', quotes: ['Defend our homes!', 'We are ready!', 'For our families!'] },
          { name: 'Sailor', startingCoins: 55, startingWeapons: ['cutlass'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For the Navy!', 'Rule the seas!', 'We sail for America!'] }
        ]
      },
      british: {
        name: 'British Empire',
        color: '#dc2626',
        description: 'Maintaining imperial control and naval supremacy',
        territories: [
          { name: 'London', cost: 90, description: 'British capital' },
          { name: 'Quebec', cost: 75, description: 'Canadian stronghold' },
          { name: 'Halifax', cost: 70, description: 'Naval base' },
          { name: 'Toronto', cost: 65, description: 'Upper Canada capital' },
          { name: 'Montreal', cost: 80, description: 'Lower Canada capital' }
        ],
        characters: [
          {
            name: 'King George III',
            role: 'Monarch',
            startingCoins: 120,
            startingWeapons: ['royal scepter'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'stubborn',
            quotes: [
              "We will not surrender our colonies again.",
              "The Americans must learn their place.",
              "British rule will be maintained.",
              "We will crush this rebellion.",
              "The Empire endures."
            ],
            description: 'King of Great Britain during the War of 1812.'
          },
          {
            name: 'Isaac Brock',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will defend Canada.",
              "The Americans will not cross our border.",
              "Victory at Queenston Heights!",
              "We fight for the Crown.",
              "Canada will remain British."
            ],
            description: 'British general who successfully defended Canada.'
          },
          {
            name: 'Tecumseh',
            role: 'Native Leader',
            startingCoins: 85,
            startingWeapons: ['tomahawk'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'unifying',
            quotes: [
              "We will unite all tribes.",
              "The white man will not take our land.",
              "We fight for our people.",
              "Together we are strong.",
              "Our ancestors guide us."
            ],
            description: 'Shawnee leader who formed a Native American confederation.'
          },
          {
            name: 'Robert Ross',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'aggressive',
            quotes: [
              "We will burn Washington.",
              "The Americans will pay for their insolence.",
              "We march on their capital.",
              "Victory through fire!",
              "The British way is the right way."
            ],
            description: 'British general who captured and burned Washington D.C.'
          },
          {
            name: 'Edward Pakenham',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'determined',
            quotes: [
              "We will take New Orleans.",
              "The Americans cannot stop us.",
              "We fight for the Mississippi.",
              "Victory will be ours.",
              "We march to glory."
            ],
            description: 'British general who led the failed assault on New Orleans.'
          }
        ],
        generalRoles: [
          { name: 'Redcoat Soldier', startingCoins: 55, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'disciplined', quotes: ['For king and country!', 'God save the king!', 'We will prevail!'] },
          { name: 'Canadian Militia', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['Defend Canada!', 'We are British subjects!', 'For the Crown!'] },
          { name: 'Native Warrior', startingCoins: 45, startingWeapons: ['tomahawk'], startingMercenaries: 0, startingCastles: 0, personality: 'brave', quotes: ['For our land!', 'We will not be moved!', 'Our ancestors watch!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Great Lakes', cost: 85, description: 'Strategic waterway, very high value' },
      { name: 'Mississippi River', cost: 80, description: 'Major trade route, high value' },
      { name: 'Appalachian Mountains', cost: 70, description: 'Natural barrier, moderate value' },
      { name: 'Niagara Falls', cost: 75, description: 'Border crossing, high value' },
      { name: 'Chesapeake Bay', cost: 65, description: 'Naval approach, moderate value' }
    ]
  },

  mexicanAmerican: {
    id: 'mexicanAmerican',
    name: 'Mexican-American War',
    type: 'historical',
    description: 'The war that expanded American territory to the Pacific Ocean',
    factions: {
      americans: {
        name: 'United States',
        color: '#1e40af',
        description: 'Fighting for territorial expansion and Manifest Destiny',
        territories: [
          { name: 'Washington D.C.', cost: 80, description: 'American capital' },
          { name: 'Texas', cost: 75, description: 'Newly annexed state' },
          { name: 'California', cost: 85, description: 'Gold rush territory' },
          { name: 'New Mexico', cost: 70, description: 'Southwestern territory' },
          { name: 'Arizona', cost: 65, description: 'Desert territory' }
        ],
        characters: [
          {
            name: 'James K. Polk',
            role: 'President',
            startingCoins: 100,
            startingWeapons: ['manifest destiny'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'expansionist',
            quotes: [
              "Manifest Destiny calls us westward.",
              "We will expand to the Pacific.",
              "The American continent is ours.",
              "We fight for our destiny.",
              "From sea to shining sea."
            ],
            description: '11th President who led the nation through the Mexican-American War.'
          },
          {
            name: 'Zachary Taylor',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will march to Mexico City.",
              "Victory at Buena Vista!",
              "We fight for expansion.",
              "The Mexican army cannot stop us.",
              "Old Rough and Ready leads the way."
            ],
            description: 'General who became the 12th President after winning the war.'
          },
          {
            name: 'Winfield Scott',
            role: 'General',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will take Mexico City.",
              "The Veracruz campaign will succeed.",
              "We fight with honor.",
              "Victory through strategy.",
              "The American way will prevail."
            ],
            description: 'General who captured Mexico City and ended the war.'
          },
          {
            name: 'Stephen Kearny',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'determined',
            quotes: [
              "We will secure the Southwest.",
              "New Mexico will be ours.",
              "We march across the desert.",
              "The Long Walk begins.",
              "We fight for the West."
            ],
            description: 'General who secured New Mexico and California.'
          },
          {
            name: 'John C. Fremont',
            role: 'Explorer',
            startingCoins: 75,
            startingWeapons: ['compass'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'adventurous',
            quotes: [
              "We will explore the West.",
              "California will be ours.",
              "The Bear Flag Republic rises.",
              "We fight for discovery.",
              "The frontier calls us."
            ],
            description: 'Explorer who helped secure California for the United States.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'patriotic', quotes: ['For America!', 'Manifest Destiny!', 'We will expand!'] },
          { name: 'Texas Ranger', startingCoins: 55, startingWeapons: ['revolver'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['Remember the Alamo!', 'We fight for Texas!', 'The Lone Star!'] },
          { name: 'Mountain Man', startingCoins: 45, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'independent', quotes: ['We explore the West!', 'The frontier calls!', 'We are free!'] }
        ]
      },
      mexicans: {
        name: 'Mexico',
        color: '#dc2626',
        description: 'Defending their homeland from American invasion',
        territories: [
          { name: 'Mexico City', cost: 90, description: 'Mexican capital' },
          { name: 'Veracruz', cost: 80, description: 'Port city' },
          { name: 'Monterrey', cost: 75, description: 'Northern city' },
          { name: 'Saltillo', cost: 70, description: 'Mountain city' },
          { name: 'Puebla', cost: 65, description: 'Central city' }
        ],
        characters: [
          {
            name: 'Antonio Lopez de Santa Anna',
            role: 'President',
            startingCoins: 100,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'charismatic',
            quotes: [
              "We will defend our homeland.",
              "Mexico will not be conquered.",
              "We fight for our sovereignty.",
              "The Americans will pay.",
              "Viva Mexico!"
            ],
            description: 'Mexican President and military leader during the war.'
          },
          {
            name: 'Mariano Arista',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'defensive',
            quotes: [
              "We will hold the border.",
              "The Americans will not pass.",
              "We fight for our land.",
              "Mexico will endure.",
              "We defend our honor."
            ],
            description: 'Mexican general who fought in the early battles.'
          },
          {
            name: 'Pedro de Ampudia',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'determined',
            quotes: [
              "We will defend Monterrey.",
              "The Americans will not take our city.",
              "We fight with honor.",
              "Mexico stands strong.",
              "We will not surrender."
            ],
            description: 'Mexican general who defended Monterrey.'
          },
          {
            name: 'Manuel Armijo',
            role: 'Governor',
            startingCoins: 70,
            startingWeapons: ['pistol'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'pragmatic',
            quotes: [
              "We will protect New Mexico.",
              "The Americans approach.",
              "We must be ready.",
              "Our people depend on us.",
              "We will resist."
            ],
            description: 'Governor of New Mexico during the war.'
          },
          {
            name: 'Jose Castro',
            role: 'Governor',
            startingCoins: 75,
            startingWeapons: ['pistol'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'defiant',
            quotes: [
              "We will defend California.",
              "The Bear Flag will not fly.",
              "We fight for our state.",
              "California is Mexican.",
              "We will resist the invaders."
            ],
            description: 'Governor of California who resisted American expansion.'
          }
        ],
        generalRoles: [
          { name: 'Mexican Soldier', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['Viva Mexico!', 'We defend our homeland!', 'For our country!'] },
          { name: 'Vaquero', startingCoins: 50, startingWeapons: ['lasso'], startingMercenaries: 0, startingCastles: 0, personality: 'proud', quotes: ['We are cowboys!', 'The land is ours!', 'We ride for Mexico!'] },
          { name: 'Guerrilla Fighter', startingCoins: 40, startingWeapons: ['knife'], startingMercenaries: 0, startingCastles: 0, personality: 'resilient', quotes: ['We fight in the shadows!', 'Resist the invaders!', 'For freedom!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Rio Grande', cost: 80, description: 'Border river, very high strategic value' },
      { name: 'Gila River', cost: 70, description: 'Southwestern waterway, high value' },
      { name: 'Colorado River', cost: 75, description: 'Major river, high value' },
      { name: 'Sonoran Desert', cost: 60, description: 'Harsh terrain, moderate value' },
      { name: 'Sierra Madre', cost: 65, description: 'Mountain range, moderate value' }
    ]
  },

  // REMAINING LITERARY STORIES
  nineteenEightyFour: {
    id: 'nineteenEightyFour',
    name: '1984 (George Orwell)',
    type: 'literary',
    description: 'The battle between individual freedom and totalitarian control',
    factions: {
      rebels: {
        name: 'Rebels & Proles',
        color: '#4169e1',
        description: 'Fighting for freedom, truth, and human dignity',
        territories: [
          { name: 'Prole District', cost: 60, description: 'Working class neighborhood' },
          { name: 'Victory Square', cost: 70, description: 'Public gathering place' },
          { name: 'Charrington Shop', cost: 55, description: 'Secret meeting place' },
          { name: 'Golden Country', cost: 80, description: 'Memory of freedom' },
          { name: 'Oceania Underground', cost: 75, description: 'Resistance network' }
        ],
        characters: [
          {
            name: 'Winston Smith',
            role: 'Rebel',
            startingCoins: 70,
            startingWeapons: ['diary'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'rebellious',
            quotes: [
              "Freedom is the freedom to say that two plus two make four.",
              "I love you.",
              "We will meet in the place where there is no darkness.",
              "The proles are human beings.",
              "We are the dead."
            ],
            description: 'Everyman who dares to think independently in a totalitarian world.'
          },
          {
            name: 'Julia',
            role: 'Rebel',
            startingCoins: 65,
            startingWeapons: ['lipstick'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'defiant',
            quotes: [
              "I love you.",
              "We are the dead.",
              "I hate purity, I hate goodness.",
              "We will meet in the place where there is no darkness.",
              "The proles are human beings."
            ],
            description: 'Young woman who rebels through love and personal freedom.'
          },
          {
            name: 'O\'Brien',
            role: 'Double Agent',
            startingCoins: 90,
            startingWeapons: ['torture'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'manipulative',
            quotes: [
              "We will meet in the place where there is no darkness.",
              "The proles are human beings.",
              "We are the dead.",
              "I love you.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Complex character who appears to be a rebel but is actually a Party agent.'
          },
          {
            name: 'Mr. Charrington',
            role: 'Shopkeeper',
            startingCoins: 60,
            startingWeapons: ['antiques'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'wise',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Shopkeeper who provides a secret meeting place for rebels.'
          },
          {
            name: 'Syme',
            role: 'Intellectual',
            startingCoins: 55,
            startingWeapons: ['words'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'intellectual',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Intellectual who works on Newspeak but is eventually vaporized.'
          }
        ],
        generalRoles: [
          { name: 'Prole Worker', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 0, personality: 'ignorant', quotes: ['We work!', 'We are free!', 'We are human!'] },
          { name: 'Underground Member', startingCoins: 45, startingWeapons: ['secrets'], startingMercenaries: 0, startingCastles: 0, personality: 'secretive', quotes: ['We resist!', 'We are the dead!', 'We will meet!'] },
          { name: 'Thought Criminal', startingCoins: 50, startingWeapons: ['thoughts'], startingMercenaries: 0, startingCastles: 0, personality: 'rebellious', quotes: ['We think!', 'We are free!', 'We resist!'] }
        ]
      },
      party: {
        name: 'The Party',
        color: '#8b0000',
        description: 'Seeking absolute control through surveillance and thought control',
        territories: [
          { name: 'Ministry of Truth', cost: 100, description: 'Information control center' },
          { name: 'Ministry of Love', cost: 95, description: 'Torture and reeducation' },
          { name: 'Ministry of Peace', cost: 90, description: 'War planning center' },
          { name: 'Ministry of Plenty', cost: 85, description: 'Economic control' },
          { name: 'Big Brother\'s Office', cost: 120, description: 'Supreme authority' }
        ],
        characters: [
          {
            name: 'Big Brother',
            role: 'Supreme Leader',
            startingCoins: 150,
            startingWeapons: ['surveillance'],
            startingMercenaries: 5,
            startingCastles: 3,
            personality: 'omnipotent',
            quotes: [
              "Big Brother is watching you.",
              "War is peace. Freedom is slavery. Ignorance is strength.",
              "Who controls the past controls the future.",
              "We are the dead.",
              "I love you."
            ],
            description: 'The all-powerful leader of the Party, whether real or symbolic.'
          },
          {
            name: 'Emmanuel Goldstein',
            role: 'Enemy of the People',
            startingCoins: 80,
            startingWeapons: ['propaganda'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'mysterious',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'The supposed leader of the resistance, used as a scapegoat by the Party.'
          },
          {
            name: 'Parsons',
            role: 'Party Member',
            startingCoins: 70,
            startingWeapons: ['enthusiasm'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'fanatical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Loyal Party member who is eventually arrested for thoughtcrime.'
          },
          {
            name: 'Ampleforth',
            role: 'Party Member',
            startingCoins: 65,
            startingWeapons: ['poetry'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'artistic',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Party member who works on poetry but is eventually vaporized.'
          },
          {
            name: 'Tillotson',
            role: 'Party Member',
            startingCoins: 60,
            startingWeapons: ['statistics'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'methodical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Party member who works on statistics but is eventually vaporized.'
          }
        ],
        generalRoles: [
          { name: 'Party Member', startingCoins: 50, startingWeapons: ['loyalty'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['Big Brother is watching!', 'We are the Party!', 'We are the dead!'] },
          { name: 'Thought Police', startingCoins: 55, startingWeapons: ['surveillance'], startingMercenaries: 1, startingCastles: 0, personality: 'ruthless', quotes: ['We are watching!', 'We are the dead!', 'We are the Party!'] },
          { name: 'Inner Party', startingCoins: 60, startingWeapons: ['power'], startingMercenaries: 1, startingCastles: 0, personality: 'elite', quotes: ['We are the elite!', 'We are the Party!', 'We are the dead!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Room 101', cost: 90, description: 'Torture chamber, very high strategic value' },
      { name: 'Two Minutes Hate', cost: 80, description: 'Propaganda session, high strategic value' },
      { name: 'Victory Gin', cost: 70, description: 'Party alcohol, moderate strategic value' },
      { name: 'Newspeak Dictionary', cost: 75, description: 'Language control, high strategic value' },
      { name: 'Telescreen', cost: 65, description: 'Surveillance device, moderate strategic value' }
    ]
  },

  theIliad: {
    id: 'theIliad',
    name: 'The Iliad (Homer)',
    type: 'literary',
    description: 'The epic battle between Greeks and Trojans over Helen of Troy',
    factions: {
      greeks: {
        name: 'Greeks (Achaeans)',
        color: '#4169e1',
        description: 'Fighting to reclaim Helen and restore honor',
        territories: [
          { name: 'Mycenae', cost: 80, description: 'Agamemnon\'s kingdom' },
          { name: 'Sparta', cost: 75, description: 'Menelaus\' kingdom' },
          { name: 'Ithaca', cost: 70, description: 'Odysseus\' kingdom' },
          { name: 'Pylos', cost: 65, description: 'Nestor\'s kingdom' },
          { name: 'Phthia', cost: 60, description: 'Achilles\' homeland' }
        ],
        characters: [
          {
            name: 'Achilles',
            role: 'Greatest Warrior',
            startingCoins: 120,
            startingWeapons: ['spear'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'proud',
            quotes: [
              "I will not fight for Agamemnon.",
              "My glory will be eternal.",
              "I choose a short life with glory over a long life without it.",
              "Hector will pay for Patroclus' death.",
              "I am the greatest warrior."
            ],
            description: 'The greatest Greek warrior, known for his rage and martial prowess.'
          },
          {
            name: 'Agamemnon',
            role: 'King of Kings',
            startingCoins: 110,
            startingWeapons: ['scepter'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'arrogant',
            quotes: [
              "I am the king of kings.",
              "We will take Troy.",
              "Helen will be returned to us.",
              "The gods favor us.",
              "Victory will be ours."
            ],
            description: 'King of Mycenae and leader of the Greek expedition to Troy.'
          },
          {
            name: 'Odysseus',
            role: 'Cunning Hero',
            startingCoins: 100,
            startingWeapons: ['bow'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'clever',
            quotes: [
              "I will devise a plan.",
              "The Trojan Horse will be our victory.",
              "We must be cunning.",
              "I will return to Ithaca.",
              "Wisdom is mightier than strength."
            ],
            description: 'King of Ithaca known for his cunning and intelligence.'
          },
          {
            name: 'Menelaus',
            role: 'King of Sparta',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'honorable',
            quotes: [
              "Helen is my wife.",
              "We will reclaim her.",
              "Honor demands we fight.",
              "The Trojans will pay.",
              "We fight for justice."
            ],
            description: 'King of Sparta and husband of Helen, whose abduction started the war.'
          },
          {
            name: 'Nestor',
            role: 'Wise King',
            startingCoins: 85,
            startingWeapons: ['wisdom'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "Listen to my counsel.",
              "I have seen many wars.",
              "Wisdom comes with age.",
              "We must be patient.",
              "The gods will guide us."
            ],
            description: 'King of Pylos, the oldest and wisest of the Greek leaders.'
          }
        ],
        generalRoles: [
          { name: 'Greek Warrior', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['For glory!', 'We fight for honor!', 'Victory!'] },
          { name: 'Archer', startingCoins: 45, startingWeapons: ['bow'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['We shoot true!', 'For the Greeks!', 'We are accurate!'] },
          { name: 'Sailor', startingCoins: 40, startingWeapons: ['oar'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['We sail for Greece!', 'The sea is ours!', 'We are strong!'] }
        ]
      },
      trojans: {
        name: 'Trojans',
        color: '#dc2626',
        description: 'Defending their city and protecting Helen',
        territories: [
          { name: 'Troy', cost: 100, description: 'The great city' },
          { name: 'Troy Walls', cost: 90, description: 'Impenetrable defenses' },
          { name: 'Troy Gates', cost: 85, description: 'City entrances' },
          { name: 'Troy Palace', cost: 95, description: 'Royal residence' },
          { name: 'Troy Temple', cost: 80, description: 'Sacred place' }
        ],
        characters: [
          {
            name: 'Hector',
            role: 'Prince of Troy',
            startingCoins: 110,
            startingWeapons: ['spear'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'noble',
            quotes: [
              "I will defend Troy.",
              "We will not surrender.",
              "The gods protect us.",
              "We fight for our city.",
              "Honor demands we stand."
            ],
            description: 'Prince of Troy and greatest Trojan warrior, known for his nobility.'
          },
          {
            name: 'Priam',
            role: 'King of Troy',
            startingCoins: 100,
            startingWeapons: ['crown'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'wise',
            quotes: [
              "We will defend our city.",
              "The gods are with us.",
              "We will not surrender.",
              "Troy will endure.",
              "We fight for our people."
            ],
            description: 'Aged king of Troy who leads his people in defense of their city.'
          },
          {
            name: 'Paris',
            role: 'Prince of Troy',
            startingCoins: 80,
            startingWeapons: ['bow'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'selfish',
            quotes: [
              "Helen is mine.",
              "I will not give her up.",
              "We fight for love.",
              "The gods chose me.",
              "I am the most beautiful."
            ],
            description: 'Prince of Troy whose abduction of Helen started the war.'
          },
          {
            name: 'Aeneas',
            role: 'Prince of Troy',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'pious',
            quotes: [
              "We will defend Troy.",
              "The gods protect us.",
              "We fight for our city.",
              "We will not surrender.",
              "Honor demands we stand."
            ],
            description: 'Prince of Troy who will found Rome after the war.'
          },
          {
            name: 'Andromache',
            role: 'Princess of Troy',
            startingCoins: 70,
            startingWeapons: ['tears'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'loving',
            quotes: [
              "We will defend our city.",
              "The gods protect us.",
              "We fight for our families.",
              "We will not surrender.",
              "Love will conquer all."
            ],
            description: 'Wife of Hector and princess of Troy.'
          }
        ],
        generalRoles: [
          { name: 'Trojan Warrior', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['For Troy!', 'We defend our city!', 'Victory!'] },
          { name: 'Archer', startingCoins: 45, startingWeapons: ['bow'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['We shoot true!', 'For Troy!', 'We are accurate!'] },
          { name: 'Guard', startingCoins: 40, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['We guard the walls!', 'Troy stands!', 'We are strong!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Mount Olympus', cost: 100, description: 'Home of the gods, very high strategic value' },
      { name: 'Achilles\' Tent', cost: 85, description: 'Warrior\'s quarters, high strategic value' },
      { name: 'Trojan Horse', cost: 90, description: 'Famous deception, very high strategic value' },
      { name: 'Scamander River', cost: 70, description: 'Battle site, moderate strategic value' },
      { name: 'Achilles\' Tomb', cost: 75, description: 'Sacred site, high strategic value' }
    ]
  },

  // POPULAR MODERN STORIES
  dcVsMarvel: {
    id: 'dcVsMarvel',
    name: 'DC vs Marvel',
    type: 'literary',
    description: 'The ultimate battle between DC and Marvel superheroes',
    factions: {
      dc: {
        name: 'DC Heroes',
        color: '#4169e1',
        description: 'Protecting the DC universe from threats',
        territories: [
          { name: 'Gotham City', cost: 90, description: 'Batman\'s city' },
          { name: 'Metropolis', cost: 95, description: 'Superman\'s city' },
          { name: 'Themyscira', cost: 85, description: 'Wonder Woman\'s island' },
          { name: 'Central City', cost: 80, description: 'Flash\'s city' },
          { name: 'Atlantis', cost: 75, description: 'Aquaman\'s kingdom' }
        ],
        characters: [
          {
            name: 'Superman',
            role: 'Man of Steel',
            startingCoins: 120,
            startingWeapons: ['heat vision'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'heroic',
            quotes: [
              "Truth, justice, and the American way.",
              "I fight for those who cannot fight for themselves.",
              "With great power comes great responsibility.",
              "I will protect Earth.",
              "Hope will always triumph."
            ],
            description: 'The Last Son of Krypton, Earth\'s greatest protector.'
          },
          {
            name: 'Batman',
            role: 'Dark Knight',
            startingCoins: 110,
            startingWeapons: ['batarang'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I am vengeance. I am the night. I am Batman.",
              "It\'s not who I am underneath, but what I do that defines me.",
              "Why do we fall? So we can learn to pick ourselves up.",
              "I will protect Gotham.",
              "The night is darkest just before the dawn."
            ],
            description: 'The Dark Knight of Gotham, master detective and martial artist.'
          },
          {
            name: 'Wonder Woman',
            role: 'Amazon Princess',
            startingCoins: 105,
            startingWeapons: ['lasso of truth'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'compassionate',
            quotes: [
              "I will fight for those who cannot fight for themselves.",
              "Love is stronger than hate.",
              "I am Wonder Woman.",
              "We must protect the innocent.",
              "Peace through strength."
            ],
            description: 'Amazon princess and warrior for justice.'
          },
          {
            name: 'The Flash',
            role: 'Scarlet Speedster',
            startingCoins: 95,
            startingWeapons: ['speed force'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'optimistic',
            quotes: [
              "I am the fastest man alive.",
              "Speed is my superpower.",
              "I will protect Central City.",
              "We can outrun any problem.",
              "The Flash is always there."
            ],
            description: 'The fastest man alive, protector of Central City.'
          },
          {
            name: 'Aquaman',
            role: 'King of Atlantis',
            startingCoins: 100,
            startingWeapons: ['trident'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I am the King of Atlantis.",
              "The ocean is my domain.",
              "We will protect the seas.",
              "Atlantis will rise.",
              "I am Aquaman."
            ],
            description: 'King of Atlantis and protector of the oceans.'
          }
        ],
        generalRoles: [
          { name: 'Gotham Citizen', startingCoins: 50, startingWeapons: ['courage'], startingMercenaries: 0, startingCastles: 0, personality: 'brave', quotes: ['We trust Batman!', 'Gotham stands!', 'We are strong!'] },
          { name: 'Metropolis Citizen', startingCoins: 55, startingWeapons: ['hope'], startingMercenaries: 0, startingCastles: 0, personality: 'hopeful', quotes: ['Superman will save us!', 'We believe!', 'Hope lives!'] },
          { name: 'Justice League Member', startingCoins: 60, startingWeapons: ['teamwork'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For justice!', 'We are the League!', 'Together we stand!'] }
        ]
      },
      marvel: {
        name: 'Marvel Heroes',
        color: '#dc2626',
        description: 'Protecting the Marvel universe from threats',
        territories: [
          { name: 'New York City', cost: 90, description: 'Spider-Man\'s city' },
          { name: 'Wakanda', cost: 95, description: 'Black Panther\'s kingdom' },
          { name: 'Asgard', cost: 100, description: 'Thor\'s realm' },
          { name: 'Xavier\'s School', cost: 85, description: 'X-Men headquarters' },
          { name: 'Stark Tower', cost: 80, description: 'Iron Man\'s base' }
        ],
        characters: [
          {
            name: 'Spider-Man',
            role: 'Friendly Neighborhood Hero',
            startingCoins: 100,
            startingWeapons: ['web shooters'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'heroic',
            quotes: [
              "With great power comes great responsibility.",
              "I am Spider-Man.",
              "We must protect the innocent.",
              "The city needs me.",
              "I will never give up."
            ],
            description: 'The friendly neighborhood Spider-Man, protector of New York.'
          },
          {
            name: 'Iron Man',
            role: 'Genius Billionaire',
            startingCoins: 115,
            startingWeapons: ['arc reactor'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brilliant',
            quotes: [
              "I am Iron Man.",
              "Genius, billionaire, playboy, philanthropist.",
              "We have a Hulk.",
              "I\'m not afraid of you.",
              "We\'re the Avengers."
            ],
            description: 'Tony Stark, genius inventor and armored superhero.'
          },
          {
            name: 'Captain America',
            role: 'Super Soldier',
            startingCoins: 110,
            startingWeapons: ['vibranium shield'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'honorable',
            quotes: [
              "I can do this all day.",
              "I\'m just a kid from Brooklyn.",
              "We don\'t trade lives.",
              "I\'m with you till the end of the line.",
              "We\'re the Avengers."
            ],
            description: 'Steve Rogers, enhanced super soldier and natural leader.'
          },
          {
            name: 'Thor',
            role: 'God of Thunder',
            startingCoins: 120,
            startingWeapons: ['mjolnir'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I am Thor, son of Odin.",
              "I\'m not a man, I\'m a god.",
              "We are the Avengers.",
              "I will protect Midgard.",
              "For Asgard!"
            ],
            description: 'Asgardian god of thunder and prince of Asgard.'
          },
          {
            name: 'Black Panther',
            role: 'King of Wakanda',
            startingCoins: 105,
            startingWeapons: ['vibranium claws'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I am the Black Panther.",
              "Wakanda forever.",
              "We will protect our people.",
              "The world needs Wakanda.",
              "I am T\'Challa."
            ],
            description: 'King of Wakanda and protector of his people.'
          }
        ],
        generalRoles: [
          { name: 'New York Citizen', startingCoins: 50, startingWeapons: ['courage'], startingMercenaries: 0, startingCastles: 0, personality: 'brave', quotes: ['Spider-Man will save us!', 'We are strong!', 'New York stands!'] },
          { name: 'Wakandan Citizen', startingCoins: 55, startingWeapons: ['pride'], startingMercenaries: 0, startingCastles: 0, personality: 'proud', quotes: ['Wakanda forever!', 'We are the future!', 'We are strong!'] },
          { name: 'Avenger Trainee', startingCoins: 60, startingWeapons: ['training gear'], startingMercenaries: 1, startingCastles: 0, personality: 'eager', quotes: ['We want to help!', 'Teach us!', 'We can be heroes!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Battleworld', cost: 100, description: 'Ultimate battleground, very high strategic value' },
      { name: 'Negative Zone', cost: 90, description: 'Dangerous dimension, high strategic value' },
      { name: 'Quantum Realm', cost: 85, description: 'Microscopic dimension, high strategic value' },
      { name: 'Dark Dimension', cost: 80, description: 'Mystical realm, moderate strategic value' },
      { name: 'Savage Land', cost: 75, description: 'Prehistoric jungle, moderate strategic value' }
    ]
  },

  frozen: {
    id: 'frozen',
    name: 'Frozen',
    type: 'literary',
    description: 'The magical battle between ice and fire in Arendelle',
    factions: {
      elsa: {
        name: 'Elsa & Allies',
        color: '#87ceeb',
        description: 'Fighting for love, acceptance, and family',
        territories: [
          { name: 'Arendelle Castle', cost: 90, description: 'Royal palace' },
          { name: 'Ice Palace', cost: 85, description: 'Elsa\'s frozen castle' },
          { name: 'Arendelle Village', cost: 70, description: 'Town center' },
          { name: 'Frozen Lake', cost: 75, description: 'Skating rink' },
          { name: 'Mountain Peak', cost: 80, description: 'High vantage point' }
        ],
        characters: [
          {
            name: 'Elsa',
            role: 'Ice Queen',
            startingCoins: 110,
            startingWeapons: ['ice magic'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'powerful',
            quotes: [
              "Let it go, let it go.",
              "I am the queen of Arendelle.",
              "Love will thaw a frozen heart.",
              "I will protect my kingdom.",
              "The cold never bothered me anyway."
            ],
            description: 'Queen of Arendelle with the power to control ice and snow.'
          },
          {
            name: 'Anna',
            role: 'Princess',
            startingCoins: 90,
            startingWeapons: ['love'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'optimistic',
            quotes: [
              "I love you, Elsa.",
              "We will save Arendelle.",
              "Love will conquer all.",
              "I will never give up.",
              "We are sisters."
            ],
            description: 'Princess of Arendelle, Elsa\'s loving sister.'
          },
          {
            name: 'Olaf',
            role: 'Snowman',
            startingCoins: 60,
            startingWeapons: ['hugs'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'cheerful',
            quotes: [
              "I love warm hugs!",
              "Some people are worth melting for.",
              "We are best friends.",
              "I will help you.",
              "Summer is my favorite season."
            ],
            description: 'Magical snowman who loves summer and warm hugs.'
          },
          {
            name: 'Kristoff',
            role: 'Ice Harvester',
            startingCoins: 75,
            startingWeapons: ['pickaxe'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'loyal',
            quotes: [
              "I will protect you.",
              "We are a team.",
              "I love you, Anna.",
              "We will save Elsa.",
              "Together we are strong."
            ],
            description: 'Ice harvester who becomes Anna\'s true love.'
          },
          {
            name: 'Sven',
            role: 'Reindeer',
            startingCoins: 50,
            startingWeapons: ['antlers'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'loyal',
            quotes: [
              "We are friends.",
              "I will help you.",
              "We are a team.",
              "I love carrots.",
              "We are strong together."
            ],
            description: 'Kristoff\'s loyal reindeer companion.'
          }
        ],
        generalRoles: [
          { name: 'Arendelle Citizen', startingCoins: 45, startingWeapons: ['hope'], startingMercenaries: 0, startingCastles: 0, personality: 'hopeful', quotes: ['We believe in Elsa!', 'Love will win!', 'We are strong!'] },
          { name: 'Ice Harvester', startingCoins: 50, startingWeapons: ['pickaxe'], startingMercenaries: 0, startingCastles: 0, personality: 'hardworking', quotes: ['We work hard!', 'We are strong!', 'We harvest ice!'] },
          { name: 'Royal Guard', startingCoins: 55, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['We protect the queen!', 'We are loyal!', 'We stand guard!'] }
        ]
      },
      hans: {
        name: 'Hans & Villains',
        color: '#8b0000',
        description: 'Seeking power and control through deception',
        territories: [
          { name: 'Southern Isles', cost: 80, description: 'Hans\' homeland' },
          { name: 'Dark Forest', cost: 70, description: 'Dangerous woods' },
          { name: 'Frozen Fjord', cost: 75, description: 'Icy waterway' },
          { name: 'Marshmallow\'s Cave', cost: 65, description: 'Snow monster\'s lair' },
          { name: 'Wolves\' Den', cost: 60, description: 'Predator territory' }
        ],
        characters: [
          {
            name: 'Hans',
            role: 'Prince',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'deceitful',
            quotes: [
              "I will be king of Arendelle.",
              "Love is an open door.",
              "I will take what is mine.",
              "Power is everything.",
              "I will not be denied."
            ],
            description: 'Prince of the Southern Isles who seeks to take over Arendelle.'
          },
          {
            name: 'Marshmallow',
            role: 'Snow Monster',
            startingCoins: 80,
            startingWeapons: ['snowball'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'protective',
            quotes: [
              "I will protect the ice palace.",
              "No one enters.",
              "I am the guardian.",
              "Stay away.",
              "I will defend my home."
            ],
            description: 'Giant snow monster created by Elsa to protect her ice palace.'
          },
          {
            name: 'Wolves',
            role: 'Pack Leader',
            startingCoins: 60,
            startingWeapons: ['claws'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'predatory',
            quotes: [
              "We hunt together.",
              "We are the pack.",
              "We will survive.",
              "We are strong.",
              "We protect our territory."
            ],
            description: 'Pack of wolves that hunt in the dark forest.'
          },
          {
            name: 'Duke of Weselton',
            role: 'Noble',
            startingCoins: 70,
            startingWeapons: ['money'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'greedy',
            quotes: [
              "I will profit from this.",
              "Money is power.",
              "I will not be fooled.",
              "We will take what we want.",
              "Business is business."
            ],
            description: 'Greedy noble who seeks to profit from Arendelle\'s troubles.'
          },
          {
            name: 'Oaken',
            role: 'Shopkeeper',
            startingCoins: 55,
            startingWeapons: ['goods'],
            startingMercenaries: 0,
            startingCastles: 0,
            personality: 'opportunistic',
            quotes: [
              "I have what you need.",
              "Business is good.",
              "I will help you.",
              "We are all friends.",
              "Come in, come in."
            ],
            description: 'Friendly shopkeeper who helps travelers.'
          }
        ],
        generalRoles: [
          { name: 'Southern Isles Guard', startingCoins: 50, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['We serve the prince!', 'We are loyal!', 'We follow orders!'] },
          { name: 'Mercenary', startingCoins: 45, startingWeapons: ['weapon'], startingMercenaries: 0, startingCastles: 0, personality: 'greedy', quotes: ['We fight for gold!', 'We are strong!', 'We will win!'] },
          { name: 'Spy', startingCoins: 40, startingWeapons: ['secrets'], startingMercenaries: 0, startingCastles: 0, personality: 'sneaky', quotes: ['We gather information!', 'We are hidden!', 'We will succeed!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'North Mountain', cost: 85, description: 'Elsa\'s retreat, high strategic value' },
      { name: 'Frozen Heart', cost: 90, description: 'Magical artifact, very high strategic value' },
      { name: 'Love\'s Thaw', cost: 95, description: 'Power of love, very high strategic value' },
      { name: 'Summer Day', cost: 70, description: 'Warm weather, moderate strategic value' },
      { name: 'True Love', cost: 80, description: 'Pure love, high strategic value' }
    ]
  },

  // REMAINING HISTORICAL WARS
  spanishAmerican: {
    id: 'spanishAmerican',
    name: 'Spanish-American War',
    type: 'historical',
    description: 'The war that established the United States as a world power',
    factions: {
      americans: {
        name: 'United States',
        color: '#1e40af',
        description: 'Fighting for Cuban independence and expanding American influence',
        territories: [
          { name: 'Washington D.C.', cost: 80, description: 'American capital' },
          { name: 'Tampa Bay', cost: 70, description: 'Military staging area' },
          { name: 'Key West', cost: 65, description: 'Naval base' },
          { name: 'Puerto Rico', cost: 75, description: 'Caribbean territory' },
          { name: 'Philippines', cost: 85, description: 'Pacific territory' }
        ],
        characters: [
          {
            name: 'William McKinley',
            role: 'President',
            startingCoins: 100,
            startingWeapons: ['diplomacy'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We must protect American interests abroad.",
              "Cuba must be free from Spanish rule.",
              "The United States will not stand idly by.",
              "We fight for freedom and democracy.",
              "America will emerge stronger from this conflict."
            ],
            description: '25th President who led the nation into the Spanish-American War.'
          },
          {
            name: 'Theodore Roosevelt',
            role: 'Assistant Secretary of Navy',
            startingCoins: 90,
            startingWeapons: ['rough riders'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'aggressive',
            quotes: [
              "Speak softly and carry a big stick.",
              "We will charge up San Juan Hill.",
              "The Rough Riders will lead the way.",
              "We fight for American honor.",
              "Victory will be ours!"
            ],
            description: 'Future President who led the Rough Riders in Cuba.'
          },
          {
            name: 'George Dewey',
            role: 'Admiral',
            startingCoins: 95,
            startingWeapons: ['naval fleet'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'strategic',
            quotes: [
              "You may fire when ready, Gridley.",
              "We will destroy the Spanish fleet.",
              "Manila Bay will be ours.",
              "The navy will secure victory.",
              "We sail for American glory."
            ],
            description: 'Admiral who destroyed the Spanish fleet at Manila Bay.'
          },
          {
            name: 'William Randolph Hearst',
            role: 'Newspaper Publisher',
            startingCoins: 80,
            startingWeapons: ['yellow journalism'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'manipulative',
            quotes: [
              "You furnish the pictures, I'll furnish the war.",
              "The public must know the truth.",
              "We will expose Spanish atrocities.",
              "Journalism will win this war.",
              "The pen is mightier than the sword."
            ],
            description: 'Publisher whose yellow journalism helped start the war.'
          },
          {
            name: 'William T. Sampson',
            role: 'Admiral',
            startingCoins: 85,
            startingWeapons: ['battleship'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'determined',
            quotes: [
              "We will blockade Cuba.",
              "The Spanish fleet will not escape.",
              "We fight for naval supremacy.",
              "Victory at Santiago Bay!",
              "The Atlantic is ours."
            ],
            description: 'Admiral who commanded the North Atlantic Squadron.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 1, startingCastles: 0, personality: 'patriotic', quotes: ['For America!', 'Remember the Maine!', 'We fight for freedom!'] },
          { name: 'Rough Rider', startingCoins: 55, startingWeapons: ['cavalry saber'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['Charge!', 'For Teddy!', 'We ride to victory!'] },
          { name: 'Sailor', startingCoins: 45, startingWeapons: ['naval gun'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['Anchors aweigh!', 'We sail for glory!', 'The sea is ours!'] }
        ]
      },
      spanish: {
        name: 'Spanish Empire',
        color: '#dc2626',
        description: 'Defending their colonial empire from American expansion',
        territories: [
          { name: 'Madrid', cost: 90, description: 'Spanish capital' },
          { name: 'Havana', cost: 85, description: 'Cuban capital' },
          { name: 'Santiago', cost: 80, description: 'Cuban port city' },
          { name: 'Manila', cost: 75, description: 'Philippine capital' },
          { name: 'San Juan', cost: 70, description: 'Puerto Rican capital' }
        ],
        characters: [
          {
            name: 'Queen Maria Cristina',
            role: 'Regent',
            startingCoins: 100,
            startingWeapons: ['royal authority'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'stubborn',
            quotes: [
              "We will defend our colonies.",
              "Spain will not surrender.",
              "Our empire will endure.",
              "We fight for Spanish honor.",
              "The crown will prevail."
            ],
            description: 'Regent of Spain during the Spanish-American War.'
          },
          {
            name: 'Pascual Cervera',
            role: 'Admiral',
            startingCoins: 85,
            startingWeapons: ['armored cruiser'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'defensive',
            quotes: [
              "We will defend Santiago Bay.",
              "The Spanish navy will fight.",
              "We will not surrender easily.",
              "Honor demands we resist.",
              "Spain will not fall."
            ],
            description: 'Spanish admiral who commanded the fleet at Santiago Bay.'
          },
          {
            name: 'Valeriano Weyler',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['concentration camps'],
            startingMercenaries: 2,
            startingCastles: 0,
            personality: 'ruthless',
            quotes: [
              "We will crush the Cuban rebellion.",
              "Order must be restored.",
              "We will use any means necessary.",
              "The rebels will be defeated.",
              "Spain will maintain control."
            ],
            description: 'Spanish general known for his harsh tactics in Cuba.'
          },
          {
            name: 'Patricio Montojo',
            role: 'Admiral',
            startingCoins: 75,
            startingWeapons: ['wooden ships'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'outmatched',
            quotes: [
              "We will defend Manila Bay.",
              "Our ships may be old, but our hearts are strong.",
              "We will fight to the last.",
              "Spain will not surrender.",
              "Honor above all."
            ],
            description: 'Spanish admiral who faced Dewey at Manila Bay.'
          },
          {
            name: 'Ramón Blanco',
            role: 'Governor',
            startingCoins: 70,
            startingWeapons: ['colonial administration'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'pragmatic',
            quotes: [
              "We must maintain order in Cuba.",
              "The rebels will be dealt with.",
              "Spain will not abandon its colonies.",
              "We will restore peace.",
              "The empire endures."
            ],
            description: 'Spanish governor of Cuba during the war.'
          }
        ],
        generalRoles: [
          { name: 'Spanish Soldier', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For Spain!', 'We defend our empire!', 'Viva España!'] },
          { name: 'Colonial Guard', startingCoins: 40, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'disciplined', quotes: ['We maintain order!', 'For the crown!', 'We are strong!'] },
          { name: 'Navy Sailor', startingCoins: 50, startingWeapons: ['naval cannon'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['We sail for Spain!', 'The sea is ours!', 'We will fight!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Cuba', cost: 90, description: 'Island nation, very high strategic value' },
      { name: 'Puerto Rico', cost: 80, description: 'Caribbean island, high strategic value' },
      { name: 'Philippines', cost: 85, description: 'Pacific archipelago, very high strategic value' },
      { name: 'Guam', cost: 70, description: 'Pacific island, moderate strategic value' },
      { name: 'Wake Island', cost: 65, description: 'Pacific atoll, moderate strategic value' }
    ]
  },

  // REMAINING LITERARY STORIES
  dune: {
    id: 'dune',
    name: 'Dune',
    type: 'literary',
    description: 'The epic battle for control of the desert planet Arrakis and its precious spice',
    factions: {
      atreides: {
        name: 'House Atreides',
        color: '#1e40af',
        description: 'Noble house seeking to rule Arrakis with honor and justice',
        territories: [
          { name: 'Caladan', cost: 80, description: 'Atreides homeworld' },
          { name: 'Arrakeen', cost: 90, description: 'Capital of Arrakis' },
          { name: 'Carthag', cost: 85, description: 'Spice mining city' },
          { name: 'Sietch Tabr', cost: 75, description: 'Fremen stronghold' },
          { name: 'Spice Fields', cost: 95, description: 'Valuable spice deposits' }
        ],
        characters: [
          {
            name: 'Paul Atreides',
            role: 'Duke',
            startingCoins: 120,
            startingWeapons: ['voice'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'wise',
            quotes: [
              "I must not fear. Fear is the mind-killer.",
              "The spice must flow.",
              "I am the Kwisatz Haderach.",
              "We will rule with honor.",
              "The desert will teach us."
            ],
            description: 'Duke of House Atreides and the prophesied Kwisatz Haderach.'
          },
          {
            name: 'Duke Leto Atreides',
            role: 'Duke',
            startingCoins: 110,
            startingWeapons: ['honor'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'noble',
            quotes: [
              "We will rule with honor and justice.",
              "The people of Arrakis deserve better.",
              "We will protect the spice.",
              "House Atreides will prevail.",
              "Honor above all."
            ],
            description: 'Duke of House Atreides, known for his honor and leadership.'
          },
          {
            name: 'Lady Jessica',
            role: 'Bene Gesserit',
            startingCoins: 100,
            startingWeapons: ['voice'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "The voice is a powerful weapon.",
              "We must prepare for the future.",
              "The Bene Gesserit have plans.",
              "We will guide destiny.",
              "The spice will show us the way."
            ],
            description: 'Bene Gesserit sister and mother of Paul Atreides.'
          },
          {
            name: 'Duncan Idaho',
            role: 'Swordmaster',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I serve House Atreides.",
              "My sword is yours, my Duke.",
              "We will defend Arrakis.",
              "Honor demands we fight.",
              "The Atreides will not fall."
            ],
            description: 'Swordmaster and loyal retainer of House Atreides.'
          },
          {
            name: 'Gurney Halleck',
            role: 'Warmaster',
            startingCoins: 90,
            startingWeapons: ['baliset'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight for House Atreides.",
              "The spice must be protected.",
              "We will defend our people.",
              "Honor and courage will win.",
              "The Atreides way will prevail."
            ],
            description: 'Warmaster and loyal retainer of House Atreides.'
          }
        ],
        generalRoles: [
          { name: 'Atreides Soldier', startingCoins: 50, startingWeapons: ['lasgun'], startingMercenaries: 1, startingCastles: 0, personality: 'loyal', quotes: ['For House Atreides!', 'We fight with honor!', 'The spice must flow!'] },
          { name: 'Fremen Warrior', startingCoins: 55, startingWeapons: ['crysknife'], startingMercenaries: 1, startingCastles: 0, personality: 'fierce', quotes: ['We are the desert!', 'The spice is life!', 'We will not be conquered!'] },
          { name: 'Spice Miner', startingCoins: 45, startingWeapons: ['mining tools'], startingMercenaries: 0, startingCastles: 0, personality: 'hardworking', quotes: ['We harvest the spice!', 'The desert provides!', 'We work for the Duke!'] }
        ]
      },
      harkonnen: {
        name: 'House Harkonnen',
        color: '#8b0000',
        description: 'Ruthless house seeking to control Arrakis through fear and oppression',
        territories: [
          { name: 'Giedi Prime', cost: 85, description: 'Harkonnen homeworld' },
          { name: 'Harkonnen Keep', cost: 90, description: 'Fortress on Arrakis' },
          { name: 'Spice Refineries', cost: 80, description: 'Spice processing facilities' },
          { name: 'Slave Pits', cost: 70, description: 'Forced labor camps' },
          { name: 'Ornithopter Base', cost: 75, description: 'Aerial assault base' }
        ],
        characters: [
          {
            name: 'Baron Vladimir Harkonnen',
            role: 'Baron',
            startingCoins: 130,
            startingWeapons: ['fear'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'cruel',
            quotes: [
              "Fear is the mind-killer.",
              "We will crush the Atreides.",
              "The spice will be ours.",
              "Power is everything.",
              "We will rule through fear."
            ],
            description: 'Baron of House Harkonnen, known for his cruelty and ambition.'
          },
          {
            name: 'Feyd-Rautha Harkonnen',
            role: 'Na-Baron',
            startingCoins: 100,
            startingWeapons: ['poison'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'sadistic',
            quotes: [
              "We will destroy the Atreides.",
              "The spice will be ours.",
              "We will rule Arrakis.",
              "Fear is our weapon.",
              "The Harkonnens will prevail."
            ],
            description: 'Na-Baron and heir to House Harkonnen.'
          },
          {
            name: 'Glossu Rabban',
            role: 'Beast',
            startingCoins: 95,
            startingWeapons: ['brutality'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brutal',
            quotes: [
              "We will crush the rebels.",
              "The spice will flow for us.",
              "We will rule through force.",
              "The Harkonnens are strong.",
              "We will not be defeated."
            ],
            description: 'Brutal Harkonnen commander known as "The Beast".'
          },
          {
            name: 'Piter de Vries',
            role: 'Mentat',
            startingCoins: 85,
            startingWeapons: ['logic'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'calculating',
            quotes: [
              "Logic will guide us to victory.",
              "We will outthink the Atreides.",
              "The spice calculations are clear.",
              "We will plan their downfall.",
              "The Harkonnens will triumph."
            ],
            description: 'Mentat and advisor to the Baron.'
          },
          {
            name: 'Count Hasimir Fenring',
            role: 'Assassin',
            startingCoins: 90,
            startingWeapons: ['stealth'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'deceitful',
            quotes: [
              "We will strike from the shadows.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Stealth is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Imperial assassin and Harkonnen ally.'
          }
        ],
        generalRoles: [
          { name: 'Harkonnen Soldier', startingCoins: 50, startingWeapons: ['lasgun'], startingMercenaries: 1, startingCastles: 0, personality: 'ruthless', quotes: ['For House Harkonnen!', 'We crush our enemies!', 'The spice is ours!'] },
          { name: 'Sardaukar', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'elite', quotes: ['We are the Emperor\'s elite!', 'We will not fail!', 'Victory is ours!'] },
          { name: 'Slave Worker', startingCoins: 30, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 0, personality: 'oppressed', quotes: ['We work for the Baron!', 'We must survive!', 'The spice must flow!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Desert', cost: 85, description: 'Harsh desert terrain, very high strategic value' },
      { name: 'Spice Blow', cost: 95, description: 'Massive spice deposit, extremely high strategic value' },
      { name: 'Sandworm Territory', cost: 90, description: 'Dangerous sandworm area, very high strategic value' },
      { name: 'Fremen Sietch', cost: 80, description: 'Fremen stronghold, high strategic value' },
      { name: 'Spice Harvester', cost: 75, description: 'Spice mining equipment, high strategic value' }
    ]
  },

  minions: {
    id: 'minions',
    name: 'Minions',
    type: 'literary',
    description: 'The chaotic battle between minions and their various masters',
    factions: {
      minions: {
        name: 'Minions',
        color: '#ffd700',
        description: 'Loyal minions seeking the perfect evil master',
        territories: [
          { name: 'Minion Village', cost: 60, description: 'Home of the minions' },
          { name: 'Banana Grove', cost: 50, description: 'Minion food source' },
          { name: 'Evil Lair', cost: 70, description: 'Master\'s headquarters' },
          { name: 'Laboratory', cost: 65, description: 'Invention workshop' },
          { name: 'Prison', cost: 55, description: 'Where bad guys go' }
        ],
        characters: [
          {
            name: 'Kevin',
            role: 'Leader',
            startingCoins: 80,
            startingWeapons: ['banana'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will find the perfect master!",
              "Banana!",
              "We are minions!",
              "We will help our master!",
              "Minions unite!"
            ],
            description: 'Leader of the minions on their quest for a new master.'
          },
          {
            name: 'Stuart',
            role: 'Musician',
            startingCoins: 70,
            startingWeapons: ['guitar'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'artistic',
            quotes: [
              "We will sing for our master!",
              "Music is our weapon!",
              "We will entertain!",
              "Banana!",
              "We are talented!"
            ],
            description: 'Musical minion who loves to perform.'
          },
          {
            name: 'Bob',
            role: 'Teddy Bear Lover',
            startingCoins: 65,
            startingWeapons: ['teddy bear'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'innocent',
            quotes: [
              "We will protect our teddy!",
              "Love conquers all!",
              "We are gentle!",
              "Banana!",
              "We will be good!"
            ],
            description: 'Innocent minion who loves his teddy bear.'
          },
          {
            name: 'Dave',
            role: 'Inventor',
            startingCoins: 75,
            startingWeapons: ['gadgets'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'clever',
            quotes: [
              "We will invent amazing things!",
              "Science is our friend!",
              "We will build!",
              "Banana!",
              "We are smart!"
            ],
            description: 'Clever minion who loves to invent gadgets.'
          },
          {
            name: 'Carl',
            role: 'Strong Minion',
            startingCoins: 70,
            startingWeapons: ['strength'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'strong',
            quotes: [
              "We will be strong for our master!",
              "We will lift heavy things!",
              "We are powerful!",
              "Banana!",
              "We will protect!"
            ],
            description: 'Strong minion who can lift heavy objects.'
          }
        ],
        generalRoles: [
          { name: 'Minion Worker', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 0, personality: 'hardworking', quotes: ['We work hard!', 'Banana!', 'We help our master!'] },
          { name: 'Minion Guard', startingCoins: 45, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 0, personality: 'protective', quotes: ['We protect!', 'Banana!', 'We guard our master!'] },
          { name: 'Minion Cook', startingCoins: 35, startingWeapons: ['spatula'], startingMercenaries: 0, startingCastles: 0, personality: 'cheerful', quotes: ['We cook!', 'Banana!', 'We feed our master!'] }
        ]
      },
      villains: {
        name: 'Villains',
        color: '#8b0000',
        description: 'Various evil masters competing for minion loyalty',
        territories: [
          { name: 'Evil Castle', cost: 80, description: 'Villain headquarters' },
          { name: 'Dungeon', cost: 70, description: 'Where heroes are kept' },
          { name: 'Throne Room', cost: 85, description: 'Villain\'s seat of power' },
          { name: 'Laboratory', cost: 75, description: 'Evil experiments' },
          { name: 'Prison', cost: 65, description: 'Captive holding area' }
        ],
        characters: [
          {
            name: 'Gru',
            role: 'Supervillain',
            startingCoins: 100,
            startingWeapons: ['freeze ray'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'villainous',
            quotes: [
              "We will steal the moon!",
              "Minions, attack!",
              "We will be the greatest villain!",
              "Evil is our business!",
              "We will rule the world!"
            ],
            description: 'Former supervillain who became a father figure to the minions.'
          },
          {
            name: 'Scarlet Overkill',
            role: 'Supervillain',
            startingCoins: 95,
            startingWeapons: ['laser'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will be the greatest villain!",
              "Minions will serve us!",
              "We will steal everything!",
              "Evil is our destiny!",
              "We will not be stopped!"
            ],
            description: 'Ambitious supervillain who wants to be the greatest.'
          },
          {
            name: 'Dr. Nefario',
            role: 'Scientist',
            startingCoins: 85,
            startingWeapons: ['inventions'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'brilliant',
            quotes: [
              "We will invent amazing weapons!",
              "Science will help us win!",
              "We will build the ultimate device!",
              "Technology is our friend!",
              "We will be unstoppable!"
            ],
            description: 'Brilliant scientist who invents gadgets for villains.'
          },
          {
            name: 'Vector',
            role: 'Supervillain',
            startingCoins: 80,
            startingWeapons: ['shrink ray'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'jealous',
            quotes: [
              "We will be better than Gru!",
              "Minions will choose us!",
              "We will steal the moon first!",
              "We are the greatest villain!",
              "We will not be second best!"
            ],
            description: 'Jealous supervillain who wants to outdo Gru.'
          },
          {
            name: 'Balthazar Bratt',
            role: 'Supervillain',
            startingCoins: 90,
            startingWeapons: ['80s gadgets'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'nostalgic',
            quotes: [
              "We will bring back the 80s!",
              "Minions will love our style!",
              "We will be the coolest villain!",
              "Retro is our weapon!",
              "We will rule with style!"
            ],
            description: '80s-obsessed supervillain who uses retro technology.'
          }
        ],
        generalRoles: [
          { name: 'Villain Henchman', startingCoins: 45, startingWeapons: ['weapon'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['We serve our master!', 'We will fight!', 'We are evil!'] },
          { name: 'Evil Scientist', startingCoins: 50, startingWeapons: ['lab equipment'], startingMercenaries: 0, startingCastles: 0, personality: 'brilliant', quotes: ['We will invent!', 'Science is power!', 'We will create!'] },
          { name: 'Villain Guard', startingCoins: 40, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 0, personality: 'protective', quotes: ['We protect our master!', 'We will guard!', 'We are strong!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Banana Factory', cost: 70, description: 'Minion food production, high strategic value' },
      { name: 'Evil Convention', cost: 80, description: 'Villain gathering place, high strategic value' },
      { name: 'Minion Playground', cost: 60, description: 'Minion recreation area, moderate strategic value' },
      { name: 'Villain Training Camp', cost: 75, description: 'Evil skill development, high strategic value' },
      { name: 'Minion Hospital', cost: 65, description: 'Minion care facility, moderate strategic value' }
    ]
  },

  // ADDITIONAL SCENARIOS
  toyStory: {
    id: 'toyStory',
    name: 'Toy Story',
    type: 'literary',
    description: 'The battle between toys and their quest for belonging',
    factions: {
      toys: {
        name: 'Andy\'s Toys',
        color: '#1e40af',
        description: 'Loyal toys fighting for their child\'s love',
        territories: [
          { name: 'Andy\'s Room', cost: 80, description: 'Toy headquarters' },
          { name: 'Toy Box', cost: 70, description: 'Storage area' },
          { name: 'Playground', cost: 75, description: 'Outdoor play area' },
          { name: 'Toy Store', cost: 85, description: 'New toy source' },
          { name: 'Daycare', cost: 90, description: 'Alternative home' }
        ],
        characters: [
          { name: 'Woody', role: 'Sheriff', startingCoins: 100, startingWeapons: ['pullstring'], startingMercenaries: 2, startingCastles: 1, personality: 'loyal', quotes: ['You\'ve got a friend in me!', 'We stick together!', 'Andy needs us!'], description: 'Cowboy sheriff and leader of Andy\'s toys.' },
          { name: 'Buzz Lightyear', role: 'Space Ranger', startingCoins: 95, startingWeapons: ['laser'], startingMercenaries: 2, startingCastles: 1, personality: 'heroic', quotes: ['To infinity and beyond!', 'I am Buzz Lightyear!', 'We will save the day!'], description: 'Space ranger action figure with delusions of grandeur.' },
          { name: 'Jessie', role: 'Cowgirl', startingCoins: 85, startingWeapons: ['lasso'], startingMercenaries: 1, startingCastles: 0, personality: 'brave', quotes: ['We\'re not trash!', 'We belong together!', 'We will find our way!'], description: 'Cowgirl doll who fears abandonment.' },
          { name: 'Mr. Potato Head', role: 'Spud', startingCoins: 75, startingWeapons: ['detachable parts'], startingMercenaries: 1, startingCastles: 0, personality: 'grumpy', quotes: ['We\'re not garbage!', 'We will survive!', 'We stick together!'], description: 'Grumpy potato head with detachable parts.' },
          { name: 'Rex', role: 'Dinosaur', startingCoins: 70, startingWeapons: ['roar'], startingMercenaries: 1, startingCastles: 0, personality: 'anxious', quotes: ['We will be brave!', 'We\'re not scary!', 'We will help!'], description: 'Anxious dinosaur who wants to be scary.' }
        ],
        generalRoles: [
          { name: 'Toy Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'disciplined', quotes: ['We march!', 'We protect!', 'We serve!'] },
          { name: 'Action Figure', startingCoins: 55, startingWeapons: ['superpowers'], startingMercenaries: 0, startingCastles: 0, personality: 'heroic', quotes: ['We save the day!', 'We are heroes!', 'We fight evil!'] },
          { name: 'Stuffed Animal', startingCoins: 45, startingWeapons: ['hugs'], startingMercenaries: 0, startingCastles: 0, personality: 'cuddly', quotes: ['We give hugs!', 'We are soft!', 'We comfort!'] }
        ]
      },
      villains: {
        name: 'Toy Villains',
        color: '#8b0000',
        description: 'Evil toys seeking to destroy or replace the good toys',
        territories: [
          { name: 'Evil Lair', cost: 85, description: 'Villain headquarters' },
          { name: 'Trash Heap', cost: 70, description: 'Broken toy graveyard' },
          { name: 'Dark Playground', cost: 75, description: 'Corrupted play area' },
          { name: 'Villain Store', cost: 80, description: 'Evil toy source' },
          { name: 'Abandoned House', cost: 90, description: 'Forgotten toy home' }
        ],
        characters: [
          { name: 'Sid', role: 'Toy Destroyer', startingCoins: 100, startingWeapons: ['tools'], startingMercenaries: 2, startingCastles: 1, personality: 'destructive', quotes: ['We will destroy!', 'We are powerful!', 'We will rule!'], description: 'Neighborhood kid who destroys toys.' },
          { name: 'Lotso', role: 'Bear Leader', startingCoins: 95, startingWeapons: ['manipulation'], startingMercenaries: 2, startingCastles: 1, personality: 'manipulative', quotes: ['We will control!', 'We are in charge!', 'We will not be replaced!'], description: 'Strawberry-scented bear who leads the daycare toys.' },
          { name: 'Stinky Pete', role: 'Prospector', startingCoins: 85, startingWeapons: ['gold'], startingMercenaries: 1, startingCastles: 0, personality: 'greedy', quotes: ['We will be rich!', 'We deserve better!', 'We will not be forgotten!'], description: 'Greedy prospector toy who wants to be valuable.' },
          { name: 'Al', role: 'Collector', startingCoins: 80, startingWeapons: ['money'], startingMercenaries: 1, startingCastles: 0, personality: 'greedy', quotes: ['We will profit!', 'We are valuable!', 'We will be collected!'], description: 'Toy collector who sees toys as investments.' },
          { name: 'Zurg', role: 'Evil Emperor', startingCoins: 90, startingWeapons: ['death ray'], startingMercenaries: 2, startingCastles: 1, personality: 'evil', quotes: ['We will conquer!', 'We are evil!', 'We will destroy!'], description: 'Evil emperor action figure and Buzz\'s nemesis.' }
        ],
        generalRoles: [
          { name: 'Broken Toy', startingCoins: 40, startingWeapons: ['sharp edges'], startingMercenaries: 0, startingCastles: 0, personality: 'angry', quotes: ['We are broken!', 'We will get revenge!', 'We will not be forgotten!'] },
          { name: 'Evil Action Figure', startingCoins: 50, startingWeapons: ['evil powers'], startingMercenaries: 0, startingCastles: 0, personality: 'villainous', quotes: ['We are evil!', 'We will destroy!', 'We will rule!'] },
          { name: 'Abandoned Toy', startingCoins: 35, startingWeapons: ['desperation'], startingMercenaries: 0, startingCastles: 0, personality: 'desperate', quotes: ['We need a home!', 'We will survive!', 'We will not be forgotten!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Toy Factory', cost: 85, description: 'Toy production facility, very high strategic value' },
      { name: 'Antique Store', cost: 80, description: 'Vintage toy source, high strategic value' },
      { name: 'Garage Sale', cost: 70, description: 'Used toy market, moderate strategic value' },
      { name: 'Toy Museum', cost: 90, description: 'Toy preservation center, very high strategic value' },
      { name: 'Playground', cost: 75, description: 'Outdoor play area, high strategic value' }
    ]
  },

  moana: {
    id: 'moana',
    name: 'Moana',
    type: 'literary',
    description: 'The journey to restore the heart of Te Fiti and save the ocean',
    factions: {
      moana: {
        name: 'Moana & Allies',
        color: '#1e40af',
        description: 'Fighting to restore the heart of Te Fiti and save their island',
        territories: [
          { name: 'Motunui', cost: 80, description: 'Moana\'s island home' },
          { name: 'Ocean', cost: 90, description: 'Vast ocean waters' },
          { name: 'Coconut Grove', cost: 70, description: 'Food source' },
          { name: 'Village', cost: 75, description: 'Community center' },
          { name: 'Cave of Ancestors', cost: 85, description: 'Sacred place' }
        ],
        characters: [
          { name: 'Moana', role: 'Wayfinder', startingCoins: 100, startingWeapons: ['heart of Te Fiti'], startingMercenaries: 2, startingCastles: 1, personality: 'determined', quotes: ['We are wayfinders!', 'We will save our island!', 'The ocean chose me!'], description: 'Daughter of the chief who is chosen by the ocean.' },
          { name: 'Maui', role: 'Demigod', startingCoins: 110, startingWeapons: ['magic fishhook'], startingMercenaries: 3, startingCastles: 2, personality: 'proud', quotes: ['I am Maui!', 'We will restore the heart!', 'We are heroes!'], description: 'Demigod of the wind and sea who helps Moana.' },
          { name: 'Chief Tui', role: 'Chief', startingCoins: 90, startingWeapons: ['authority'], startingMercenaries: 2, startingCastles: 1, personality: 'protective', quotes: ['We will protect our people!', 'We stay on the island!', 'We are safe here!'], description: 'Chief of Motunui and Moana\'s father.' },
          { name: 'Gramma Tala', role: 'Grandmother', startingCoins: 80, startingWeapons: ['wisdom'], startingMercenaries: 1, startingCastles: 0, personality: 'wise', quotes: ['We are wayfinders!', 'We will follow our hearts!', 'We will save our island!'], description: 'Moana\'s grandmother who tells the old stories.' },
          { name: 'Heihei', role: 'Rooster', startingCoins: 60, startingWeapons: ['pecking'], startingMercenaries: 0, startingCastles: 0, personality: 'clueless', quotes: ['We are confused!', 'We will help!', 'We are here!'], description: 'Clueless rooster who accompanies Moana.' }
        ],
        generalRoles: [
          { name: 'Villager', startingCoins: 50, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 0, personality: 'hardworking', quotes: ['We work hard!', 'We protect our island!', 'We are strong!'] },
          { name: 'Fisherman', startingCoins: 55, startingWeapons: ['fishing net'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['We fish!', 'We provide food!', 'We are skilled!'] },
          { name: 'Wayfinder', startingCoins: 60, startingWeapons: ['navigation'], startingMercenaries: 0, startingCastles: 0, personality: 'brave', quotes: ['We navigate!', 'We explore!', 'We are brave!'] }
        ]
      },
      teka: {
        name: 'Te Kā & Darkness',
        color: '#8b0000',
        description: 'The corrupted form of Te Fiti seeking to spread darkness',
        territories: [
          { name: 'Te Kā\'s Lair', cost: 90, description: 'Darkness headquarters' },
          { name: 'Lava Fields', cost: 85, description: 'Volcanic wasteland' },
          { name: 'Dark Ocean', cost: 80, description: 'Corrupted waters' },
          { name: 'Shadow Realm', cost: 95, description: 'Realm of darkness' },
          { name: 'Volcano', cost: 100, description: 'Source of destruction' }
        ],
        characters: [
          { name: 'Te Kā', role: 'Fire Demon', startingCoins: 120, startingWeapons: ['lava'], startingMercenaries: 4, startingCastles: 3, personality: 'destructive', quotes: ['We will destroy!', 'We are powerful!', 'We will spread darkness!'], description: 'Corrupted form of Te Fiti, a fire demon.' },
          { name: 'Kakamora', role: 'Pirate', startingCoins: 70, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 0, personality: 'aggressive', quotes: ['We will steal!', 'We are pirates!', 'We will attack!'], description: 'Coconut-clad pirates who attack Moana.' },
          { name: 'Tamatoa', role: 'Crab', startingCoins: 85, startingWeapons: ['claws'], startingMercenaries: 1, startingCastles: 0, personality: 'greedy', quotes: ['We will collect treasure!', 'We are shiny!', 'We will not be forgotten!'], description: 'Giant crab who loves treasure and shiny things.' },
          { name: 'Darkness', role: 'Shadow', startingCoins: 80, startingWeapons: ['shadow'], startingMercenaries: 1, startingCastles: 0, personality: 'corrupting', quotes: ['We will corrupt!', 'We are darkness!', 'We will spread!'], description: 'Darkness that corrupts everything it touches.' },
          { name: 'Lava Monster', role: 'Fire Beast', startingCoins: 75, startingWeapons: ['fire'], startingMercenaries: 1, startingCastles: 0, personality: 'destructive', quotes: ['We will burn!', 'We are fire!', 'We will destroy!'], description: 'Fire-breathing monster that spreads destruction.' }
        ],
        generalRoles: [
          { name: 'Dark Villager', startingCoins: 45, startingWeapons: ['darkness'], startingMercenaries: 0, startingCastles: 0, personality: 'corrupted', quotes: ['We are corrupted!', 'We will spread darkness!', 'We are evil!'] },
          { name: 'Fire Spirit', startingCoins: 50, startingWeapons: ['flame'], startingMercenaries: 0, startingCastles: 0, personality: 'destructive', quotes: ['We are fire!', 'We will burn!', 'We will destroy!'] },
          { name: 'Shadow Warrior', startingCoins: 55, startingWeapons: ['shadow blade'], startingMercenaries: 0, startingCastles: 0, personality: 'dark', quotes: ['We are shadows!', 'We will fight!', 'We are darkness!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Te Fiti', cost: 100, description: 'Goddess of creation, extremely high strategic value' },
      { name: 'Heart of Te Fiti', cost: 95, description: 'Sacred artifact, very high strategic value' },
      { name: 'Coral Reef', cost: 80, description: 'Underwater ecosystem, high strategic value' },
      { name: 'Whale Territory', cost: 85, description: 'Ocean giant area, high strategic value' },
      { name: 'Island Chain', cost: 75, description: 'Multiple islands, moderate strategic value' }
    ]
  },

  // ADDITIONAL HISTORICAL WARS
  crusades: {
    id: 'crusades',
    name: 'The Crusades',
    type: 'historical',
    description: 'The religious wars between Christians and Muslims for control of the Holy Land',
    factions: {
      christians: {
        name: 'Christian Crusaders',
        color: '#1e40af',
        description: 'European Christians fighting to reclaim the Holy Land',
        territories: [
          { name: 'Jerusalem', cost: 100, description: 'Holy city and ultimate goal' },
          { name: 'Antioch', cost: 85, description: 'Major Crusader stronghold' },
          { name: 'Edessa', cost: 80, description: 'First Crusader state' },
          { name: 'Tripoli', cost: 75, description: 'Crusader county' },
          { name: 'Constantinople', cost: 90, description: 'Byzantine capital' }
        ],
        characters: [
          {
            name: 'Richard the Lionheart',
            role: 'King of England',
            startingCoins: 120,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'brave',
            quotes: [
              "We will liberate Jerusalem!",
              "For God and glory!",
              "We fight for the cross!",
              "The Holy Land will be ours!",
              "We will not retreat!"
            ],
            description: 'King of England and leader of the Third Crusade.'
          },
          {
            name: 'Saladin',
            role: 'Sultan of Egypt',
            startingCoins: 115,
            startingWeapons: ['scimitar'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strategic',
            quotes: [
              "We will defend the Holy Land!",
              "Jerusalem belongs to the faithful!",
              "We will drive out the infidels!",
              "Allah will grant us victory!",
              "We will not surrender!"
            ],
            description: 'Muslim leader who recaptured Jerusalem from the Crusaders.'
          },
          {
            name: 'Godfrey of Bouillon',
            role: 'Duke of Lower Lorraine',
            startingCoins: 100,
            startingWeapons: ['lance'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "We will free the Holy Sepulchre!",
              "For the glory of God!",
              "We march to Jerusalem!",
              "The infidels will fall!",
              "We are God's warriors!"
            ],
            description: 'Leader of the First Crusade and first ruler of Jerusalem.'
          },
          {
            name: 'Frederick Barbarossa',
            role: 'Holy Roman Emperor',
            startingCoins: 110,
            startingWeapons: ['imperial sword'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'imperial',
            quotes: [
              "We will restore Christian rule!",
              "The empire marches east!",
              "We will reclaim our heritage!",
              "For the Holy Roman Empire!",
              "We will not be denied!"
            ],
            description: 'Holy Roman Emperor who led the Third Crusade.'
          },
          {
            name: 'Baldwin IV',
            role: 'King of Jerusalem',
            startingCoins: 95,
            startingWeapons: ['royal scepter'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will defend our kingdom!",
              "Jerusalem will not fall!",
              "We fight for our people!",
              "The leper king will not yield!",
              "We will hold fast!"
            ],
            description: 'Leper King of Jerusalem who defended the kingdom against Saladin.'
          }
        ],
        generalRoles: [
          { name: 'Crusader Knight', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'devout', quotes: ['For God!', 'We fight for the cross!', 'Deus vult!'] },
          { name: 'Templar', startingCoins: 65, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'disciplined', quotes: ['We are God\'s warriors!', 'We will not retreat!', 'For the Temple!'] },
          { name: 'Pilgrim', startingCoins: 40, startingWeapons: ['staff'], startingMercenaries: 0, startingCastles: 0, personality: 'faithful', quotes: ['We seek the Holy Land!', 'We are pilgrims!', 'For our souls!'] }
        ]
      },
      muslims: {
        name: 'Muslim Defenders',
        color: '#dc2626',
        description: 'Muslim forces defending the Holy Land from Christian invaders',
        territories: [
          { name: 'Damascus', cost: 90, description: 'Muslim capital' },
          { name: 'Cairo', cost: 85, description: 'Egyptian capital' },
          { name: 'Baghdad', cost: 80, description: 'Abbasid capital' },
          { name: 'Aleppo', cost: 75, description: 'Strategic city' },
          { name: 'Mecca', cost: 95, description: 'Holy city' }
        ],
        characters: [
          {
            name: 'Nur ad-Din',
            role: 'Sultan of Syria',
            startingCoins: 105,
            startingWeapons: ['scimitar'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unifying',
            quotes: [
              "We will unite against the Franks!",
              "The Holy Land is ours!",
              "We will drive out the invaders!",
              "Allah will grant us strength!",
              "We will not be divided!"
            ],
            description: 'Sultan who united Muslim forces against the Crusaders.'
          },
          {
            name: 'Imad ad-Din Zengi',
            role: 'Atabeg of Mosul',
            startingCoins: 95,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will crush the Franks!",
              "Edessa will be ours!",
              "We will not tolerate invaders!",
              "The infidels will pay!",
              "We will strike first!"
            ],
            description: 'Muslim leader who captured Edessa from the Crusaders.'
          },
          {
            name: 'Al-Kamil',
            role: 'Sultan of Egypt',
            startingCoins: 100,
            startingWeapons: ['mace'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We will negotiate from strength!",
              "Jerusalem remains ours!",
              "We will find peaceful solutions!",
              "The Holy City is sacred!",
              "We will defend our faith!"
            ],
            description: 'Sultan who negotiated with Frederick II during the Sixth Crusade.'
          },
          {
            name: 'Baibars',
            role: 'Mamluk Sultan',
            startingCoins: 110,
            startingWeapons: ['mamluk sword'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'ruthless',
            quotes: [
              "We will eliminate the Franks!",
              "Antioch will fall!",
              "We will show no mercy!",
              "The infidels will be destroyed!",
              "We will finish this war!"
            ],
            description: 'Mamluk sultan who systematically destroyed Crusader strongholds.'
          },
          {
            name: 'Al-Mu'azzam',
            role: 'Ayyubid Prince',
            startingCoins: 85,
            startingWeapons: ['bow'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'defensive',
            quotes: [
              "We will defend our lands!",
              "The Franks will not advance!",
              "We will hold our positions!",
              "Allah protects the faithful!",
              "We will not yield!"
            ],
            description: 'Ayyubid prince who defended Muslim territories.'
          }
        ],
        generalRoles: [
          { name: 'Mamluk Warrior', startingCoins: 55, startingWeapons: ['scimitar'], startingMercenaries: 1, startingCastles: 0, personality: 'elite', quotes: ['We are the chosen!', 'We will not fail!', 'For the sultan!'] },
          { name: 'Bedouin Raider', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 0, startingCastles: 0, personality: 'nomadic', quotes: ['We strike from the desert!', 'We are swift!', 'We will raid!'] },
          { name: 'Muslim Scholar', startingCoins: 45, startingWeapons: ['wisdom'], startingMercenaries: 0, startingCastles: 0, personality: 'learned', quotes: ['We study the Quran!', 'We are wise!', 'We guide the faithful!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Holy Sepulchre', cost: 100, description: 'Most sacred Christian site, extremely high strategic value' },
      { name: 'Dome of the Rock', cost: 95, description: 'Sacred Muslim site, very high strategic value' },
      { name: 'Temple Mount', cost: 90, description: 'Sacred ground for both faiths, very high strategic value' },
      { name: 'Via Dolorosa', cost: 85, description: 'Sacred Christian path, high strategic value' },
      { name: 'Al-Aqsa Mosque', cost: 90, description: 'Important Muslim mosque, very high strategic value' }
    ]
  },

  hundredYearsWar: {
    id: 'hundredYearsWar',
    name: 'Hundred Years\' War',
    type: 'historical',
    description: 'The long conflict between England and France for control of the French throne',
    factions: {
      england: {
        name: 'Kingdom of England',
        color: '#1e40af',
        description: 'English forces claiming the French throne',
        territories: [
          { name: 'London', cost: 90, description: 'English capital' },
          { name: 'Calais', cost: 85, description: 'English stronghold in France' },
          { name: 'Bordeaux', cost: 80, description: 'English territory in Gascony' },
          { name: 'Normandy', cost: 75, description: 'Contested region' },
          { name: 'Aquitaine', cost: 70, description: 'English duchy' }
        ],
        characters: [
          {
            name: 'Edward III',
            role: 'King of England',
            startingCoins: 120,
            startingWeapons: ['royal sword'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'ambitious',
            quotes: [
              "We claim the French throne!",
              "The crown of France is ours!",
              "We will not be denied!",
              "England will rule France!",
              "We fight for our birthright!"
            ],
            description: 'English king who claimed the French throne and started the war.'
          },
          {
            name: 'Henry V',
            role: 'King of England',
            startingCoins: 115,
            startingWeapons: ['longbow'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'military',
            quotes: [
              "We will conquer France!",
              "Agincourt will be ours!",
              "The longbow will win!",
              "We are God's chosen!",
              "Victory is ours!"
            ],
            description: 'English king who won the famous Battle of Agincourt.'
          },
          {
            name: 'Edward the Black Prince',
            role: 'Prince of Wales',
            startingCoins: 100,
            startingWeapons: ['lance'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'chivalric',
            quotes: [
              "We fight with honor!",
              "Chivalry will guide us!",
              "We will be victorious!",
              "The prince leads the charge!",
              "We serve the crown!"
            ],
            description: 'English prince known for his military prowess and chivalry.'
          },
          {
            name: 'John of Gaunt',
            role: 'Duke of Lancaster',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "We will secure our lands!",
              "Lancaster will prevail!",
              "We fight for our family!",
              "The duchy will be strong!",
              "We will not yield!"
            ],
            description: 'Duke of Lancaster and influential English noble.'
          },
          {
            name: 'Thomas of Woodstock',
            role: 'Duke of Gloucester',
            startingCoins: 90,
            startingWeapons: ['mace'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will crush the French!",
              "Gloucester leads the way!",
              "We will not retreat!",
              "The French will fall!",
              "We are unstoppable!"
            ],
            description: 'Duke of Gloucester and military leader.'
          }
        ],
        generalRoles: [
          { name: 'English Longbowman', startingCoins: 60, startingWeapons: ['longbow'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['We are the best archers!', 'We will rain arrows!', 'For England!'] },
          { name: 'English Knight', startingCoins: 65, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'chivalric', quotes: ['We fight with honor!', 'We are knights!', 'For the crown!'] },
          { name: 'English Footman', startingCoins: 45, startingWeapons: ['spear'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['We serve the king!', 'We will fight!', 'For England!'] }
        ]
      },
      france: {
        name: 'Kingdom of France',
        color: '#dc2626',
        description: 'French forces defending their homeland and crown',
        territories: [
          { name: 'Paris', cost: 95, description: 'French capital' },
          { name: 'Orleans', cost: 85, description: 'Strategic city' },
          { name: 'Reims', cost: 80, description: 'Coronation city' },
          { name: 'Burgundy', cost: 75, description: 'Powerful duchy' },
          { name: 'Brittany', cost: 70, description: 'Independent duchy' }
        ],
        characters: [
          {
            name: 'Joan of Arc',
            role: 'Maid of Orleans',
            startingCoins: 110,
            startingWeapons: ['divine guidance'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'inspired',
            quotes: [
              "God has chosen me!",
              "We will liberate France!",
              "The voices guide us!",
              "Orleans will be free!",
              "We fight for God!"
            ],
            description: 'French heroine who led the defense of Orleans.'
          },
          {
            name: 'Charles VII',
            role: 'King of France',
            startingCoins: 105,
            startingWeapons: ['royal authority'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'determined',
            quotes: [
              "We will reclaim our kingdom!",
              "France will be united!",
              "We will not surrender!",
              "The crown is ours!",
              "We will be victorious!"
            ],
            description: 'French king who eventually won the war.'
          },
          {
            name: 'Philip VI',
            role: 'King of France',
            startingCoins: 100,
            startingWeapons: ['royal sword'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'defensive',
            quotes: [
              "We will defend our lands!",
              "France belongs to us!",
              "We will not yield!",
              "The English will be driven out!",
              "We fight for our people!"
            ],
            description: 'French king at the start of the Hundred Years\' War.'
          },
          {
            name: 'Bertrand du Guesclin',
            role: 'Constable of France',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use guerrilla tactics!",
              "The English will be harassed!",
              "We will fight smart!",
              "France will be liberated!",
              "We will not give up!"
            ],
            description: 'French military leader known for his guerrilla tactics.'
          },
          {
            name: 'Jean II',
            role: 'King of France',
            startingCoins: 90,
            startingWeapons: ['royal mace'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight to the end!",
              "France will not fall!",
              "We will defend our honor!",
              "The English will not win!",
              "We are French!"
            ],
            description: 'French king captured at the Battle of Poitiers.'
          }
        ],
        generalRoles: [
          { name: 'French Knight', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 0, personality: 'proud', quotes: ['We are French knights!', 'We will defend!', 'For France!'] },
          { name: 'French Crossbowman', startingCoins: 55, startingWeapons: ['crossbow'], startingMercenaries: 0, startingCastles: 0, personality: 'skilled', quotes: ['We are skilled!', 'We will shoot!', 'For the king!'] },
          { name: 'French Peasant', startingCoins: 40, startingWeapons: ['pitchfork'], startingMercenaries: 0, startingCastles: 0, personality: 'determined', quotes: ['We will fight!', 'We are strong!', 'For our land!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Agincourt', cost: 90, description: 'Famous battlefield, very high strategic value' },
      { name: 'Crecy', cost: 85, description: 'Important battlefield, high strategic value' },
      { name: 'Poitiers', cost: 80, description: 'Significant battlefield, high strategic value' },
      { name: 'Calais', cost: 75, description: 'Strategic port city, moderate strategic value' },
      { name: 'Gascony', cost: 70, description: 'Contested region, moderate strategic value' }
    ]
  },

  russianCivilWar: {
    id: 'russianCivilWar',
    name: 'Russian Civil War',
    type: 'historical',
    description: 'The conflict between the Red Army and White Army for control of Russia',
    factions: {
      reds: {
        name: 'Red Army (Bolsheviks)',
        color: '#dc2626',
        description: 'Communist forces fighting for the revolution',
        territories: [
          { name: 'Moscow', cost: 95, description: 'Soviet capital' },
          { name: 'Petrograd', cost: 90, description: 'Revolutionary center' },
          { name: 'Kazan', cost: 80, description: 'Strategic city' },
          { name: 'Saratov', cost: 75, description: 'Volga region' },
          { name: 'Tsaritsyn', cost: 85, description: 'Important stronghold' }
        ],
        characters: [
          {
            name: 'Vladimir Lenin',
            role: 'Leader of the Revolution',
            startingCoins: 120,
            startingWeapons: ['revolutionary ideas'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'revolutionary',
            quotes: [
              "All power to the soviets!",
              "The revolution will triumph!",
              "Workers of the world, unite!",
              "We will build socialism!",
              "The people will rule!"
            ],
            description: 'Leader of the Bolshevik Revolution and founder of the Soviet Union.'
          },
          {
            name: 'Leon Trotsky',
            role: 'People\'s Commissar for War',
            startingCoins: 110,
            startingWeapons: ['red army'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'military',
            quotes: [
              "We will organize the Red Army!",
              "The revolution must be defended!",
              "We will crush the counter-revolution!",
              "The workers will win!",
              "We are the future!"
            ],
            description: 'Revolutionary leader who organized the Red Army.'
          },
          {
            name: 'Joseph Stalin',
            role: 'People\'s Commissar for Nationalities',
            startingCoins: 105,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'calculating',
            quotes: [
              "We will consolidate power!",
              "The party must be strong!",
              "We will eliminate our enemies!",
              "Socialism will prevail!",
              "We will not be defeated!"
            ],
            description: 'Bolshevik leader who would later become Soviet dictator.'
          },
          {
            name: 'Mikhail Frunze',
            role: 'Red Army Commander',
            startingCoins: 95,
            startingWeapons: ['military tactics'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will defeat the Whites!",
              "The Red Army will triumph!",
              "We will liberate the people!",
              "Revolutionary war is just!",
              "We will not surrender!"
            ],
            description: 'Red Army commander who led successful campaigns.'
          },
          {
            name: 'Felix Dzerzhinsky',
            role: 'Head of Cheka',
            startingCoins: 90,
            startingWeapons: ['secret police'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'ruthless',
            quotes: [
              "We will eliminate counter-revolutionaries!",
              "The Cheka will protect the revolution!",
              "We will root out enemies!",
              "Revolutionary justice will prevail!",
              "We will not be merciful!"
            ],
            description: 'Head of the Cheka secret police.'
          }
        ],
        generalRoles: [
          { name: 'Red Army Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'revolutionary', quotes: ['For the revolution!', 'We are the Red Army!', 'Workers unite!'] },
          { name: 'Bolshevik Worker', startingCoins: 45, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 0, personality: 'dedicated', quotes: ['We work for the revolution!', 'We are workers!', 'For socialism!'] },
          { name: 'Red Guard', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['We protect the revolution!', 'We are guards!', 'For the party!'] }
        ]
      },
      whites: {
        name: 'White Army (Counter-Revolutionaries)',
        color: '#1e40af',
        description: 'Anti-Bolshevik forces fighting to restore the old order',
        territories: [
          { name: 'Omsk', cost: 85, description: 'White capital' },
          { name: 'Vladivostok', cost: 80, description: 'Far Eastern base' },
          { name: 'Archangel', cost: 75, description: 'Northern base' },
          { name: 'Novorossiysk', cost: 70, description: 'Southern base' },
          { name: 'Yekaterinburg', cost: 65, description: 'Ural region' }
        ],
        characters: [
          {
            name: 'Alexander Kolchak',
            role: 'Supreme Ruler of Russia',
            startingCoins: 110,
            startingWeapons: ['naval command'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'authoritarian',
            quotes: [
              "We will restore order!",
              "The monarchy must return!",
              "We will crush the Bolsheviks!",
              "Russia will be great again!",
              "We will not surrender!"
            ],
            description: 'Admiral and leader of the White movement in Siberia.'
          },
          {
            name: 'Anton Denikin',
            role: 'Commander of Volunteer Army',
            startingCoins: 105,
            startingWeapons: ['military command'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'military',
            quotes: [
              "We will march on Moscow!",
              "The Whites will triumph!",
              "We will restore Russia!",
              "The Bolsheviks will fall!",
              "We fight for our country!"
            ],
            description: 'General who led the White forces in southern Russia.'
          },
          {
            name: 'Pyotr Wrangel',
            role: 'Commander of White Army',
            startingCoins: 100,
            startingWeapons: ['cavalry'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cavalry',
            quotes: [
              "We will charge the Reds!",
              "The cavalry will win!",
              "We will liberate Russia!",
              "The Whites will not yield!",
              "We are the last hope!"
            ],
            description: 'General who led the final White Army campaigns.'
          },
          {
            name: 'Nikolai Yudenich',
            role: 'White General',
            startingCoins: 95,
            startingWeapons: ['infantry'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend our positions!",
              "The Whites will hold!",
              "We will not retreat!",
              "Russia will be saved!",
              "We will fight to the end!"
            ],
            description: 'General who led White forces in the northwest.'
          },
          {
            name: 'Lavr Kornilov',
            role: 'White General',
            startingCoins: 90,
            startingWeapons: ['military discipline'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We will restore discipline!",
              "The army will be strong!",
              "We will defeat the Reds!",
              "Order will be restored!",
              "We will not be broken!"
            ],
            description: 'General who led the Volunteer Army.'
          }
        ],
        generalRoles: [
          { name: 'White Army Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['For Russia!', 'We are the White Army!', 'Down with the Reds!'] },
          { name: 'Cossack', startingCoins: 55, startingWeapons: ['saber'], startingMercenaries: 0, startingCastles: 0, personality: 'fierce', quotes: ['We are Cossacks!', 'We will fight!', 'For the Tsar!'] },
          { name: 'White Officer', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 0, startingCastles: 0, personality: 'noble', quotes: ['We are officers!', 'We will lead!', 'For honor!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Trans-Siberian Railway', cost: 90, description: 'Vital supply line, very high strategic value' },
      { name: 'Volga River', cost: 85, description: 'Important waterway, high strategic value' },
      { name: 'Ural Mountains', cost: 80, description: 'Natural barrier, high strategic value' },
      { name: 'Siberian Taiga', cost: 75, description: 'Harsh wilderness, moderate strategic value' },
      { name: 'Caucasus Mountains', cost: 70, description: 'Mountain region, moderate strategic value' }
    ]
  },

  spanishCivilWar: {
    id: 'spanishCivilWar',
    name: 'Spanish Civil War',
    type: 'historical',
    description: 'The conflict between Republicans and Nationalists for control of Spain',
    factions: {
      republicans: {
        name: 'Republican Government',
        color: '#dc2626',
        description: 'Left-wing forces fighting for democracy and social reform',
        territories: [
          { name: 'Madrid', cost: 95, description: 'Republican capital' },
          { name: 'Barcelona', cost: 90, description: 'Catalonian center' },
          { name: 'Valencia', cost: 85, description: 'Republican stronghold' },
          { name: 'Bilbao', cost: 80, description: 'Basque region' },
          { name: 'Malaga', cost: 75, description: 'Southern city' }
        ],
        characters: [
          {
            name: 'Manuel Azaña',
            role: 'President of the Republic',
            startingCoins: 100,
            startingWeapons: ['democratic ideals'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'democratic',
            quotes: [
              "We will defend democracy!",
              "The republic will survive!",
              "We fight for freedom!",
              "The people will rule!",
              "We will not surrender!"
            ],
            description: 'President of the Spanish Republic during the civil war.'
          },
          {
            name: 'Francisco Largo Caballero',
            role: 'Prime Minister',
            startingCoins: 95,
            startingWeapons: ['socialist policies'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'socialist',
            quotes: [
              "We will build socialism!",
              "The workers will win!",
              "We fight for the people!",
              "Revolution will triumph!",
              "We will not be defeated!"
            ],
            description: 'Socialist leader and Prime Minister of the Republic.'
          },
          {
            name: 'Juan Negrín',
            role: 'Prime Minister',
            startingCoins: 90,
            startingWeapons: ['political unity'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unifying',
            quotes: [
              "We will unite against fascism!",
              "The republic will endure!",
              "We will resist!",
              "Democracy will prevail!",
              "We will not give up!"
            ],
            description: 'Prime Minister who led the Republic in its final years.'
          },
          {
            name: 'Dolores Ibárruri',
            role: 'Communist Leader',
            startingCoins: 85,
            startingWeapons: ['revolutionary spirit'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'inspiring',
            quotes: [
              "No pasarán!",
              "We will not pass!",
              "The people will resist!",
              "Communism will triumph!",
              "We will fight to the end!"
            ],
            description: 'Communist leader known as "La Pasionaria".'
          },
          {
            name: 'Lluís Companys',
            role: 'President of Catalonia',
            startingCoins: 80,
            startingWeapons: ['catalan nationalism'],
            startingMercenaries: 1,
            startingCastles: 0,
            personality: 'nationalist',
            quotes: [
              "We will defend Catalonia!",
              "The republic will survive!",
              "We fight for our land!",
              "Catalonia will be free!",
              "We will not yield!"
            ],
            description: 'President of Catalonia during the civil war.'
          }
        ],
        generalRoles: [
          { name: 'Republican Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'democratic', quotes: ['For the republic!', 'We are democrats!', 'No pasarán!'] },
          { name: 'Anarchist Militia', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'revolutionary', quotes: ['We are anarchists!', 'We will be free!', 'Down with authority!'] },
          { name: 'International Brigader', startingCoins: 60, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'idealistic', quotes: ['We fight fascism!', 'We are international!', 'For freedom!'] }
        ]
      },
      nationalists: {
        name: 'Nationalist Forces',
        color: '#1e40af',
        description: 'Right-wing forces fighting to restore traditional order',
        territories: [
          { name: 'Burgos', cost: 85, description: 'Nationalist capital' },
          { name: 'Seville', cost: 80, description: 'Southern stronghold' },
          { name: 'Salamanca', cost: 75, description: 'Central base' },
          { name: 'Pamplona', cost: 70, description: 'Navarre region' },
          { name: 'Valladolid', cost: 65, description: 'Castilian city' }
        ],
        characters: [
          {
            name: 'Francisco Franco',
            role: 'Generalísimo',
            startingCoins: 120,
            startingWeapons: ['military command'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'authoritarian',
            quotes: [
              "We will restore order!",
              "Spain will be great again!",
              "We will crush the reds!",
              "The nation will be united!",
              "We will not be defeated!"
            ],
            description: 'Leader of the Nationalist forces and future dictator of Spain.'
          },
          {
            name: 'Emilio Mola',
            role: 'Nationalist General',
            startingCoins: 105,
            startingWeapons: ['military tactics'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strategic',
            quotes: [
              "We will march on Madrid!",
              "The fifth column will rise!",
              "We will liberate Spain!",
              "The reds will fall!",
              "We will be victorious!"
            ],
            description: 'Nationalist general who planned the uprising.'
          },
          {
            name: 'José Sanjurjo',
            role: 'Nationalist General',
            startingCoins: 100,
            startingWeapons: ['military experience'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'experienced',
            quotes: [
              "We will restore the monarchy!",
              "The army will save Spain!",
              "We will defeat the republic!",
              "Order will be restored!",
              "We will not surrender!"
            ],
            description: 'Nationalist general who was killed early in the war.'
          },
          {
            name: 'Gonzalo Queipo de Llano',
            role: 'Nationalist General',
            startingCoins: 95,
            startingWeapons: ['propaganda'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'charismatic',
            quotes: [
              "We will liberate Andalusia!",
              "The south will rise!",
              "We will crush the reds!",
              "Spain will be free!",
              "We will not be stopped!"
            ],
            description: 'Nationalist general who controlled southern Spain.'
          },
          {
            name: 'Miguel Cabanellas',
            role: 'Nationalist General',
            startingCoins: 90,
            startingWeapons: ['military command'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will defend our cause!",
              "The army will triumph!",
              "We will restore Spain!",
              "The reds will be defeated!",
              "We will not yield!"
            ],
            description: 'Nationalist general who led forces in the north.'
          }
        ],
        generalRoles: [
          { name: 'Nationalist Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'loyal', quotes: ['For Spain!', 'We are nationalists!', 'Down with the reds!'] },
          { name: 'Falangist', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'fascist', quotes: ['We are Falangists!', 'We will win!', 'For the party!'] },
          { name: 'Carlist', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 0, personality: 'traditionalist', quotes: ['We are Carlists!', 'For the king!', 'We will restore!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Guernica', cost: 85, description: 'Symbolic Basque town, high strategic value' },
      { name: 'Ebro River', cost: 80, description: 'Important waterway, high strategic value' },
      { name: 'Sierra Nevada', cost: 75, description: 'Mountain range, moderate strategic value' },
      { name: 'Pyrenees', cost: 70, description: 'Border mountains, moderate strategic value' },
      { name: 'Gibraltar', cost: 90, description: 'Strategic British territory, very high strategic value' }
    ]
  }
};

// AI Personality Types and Behaviors
const AI_PERSONALITIES = {
  strategic: {
    name: 'Strategic',
    description: 'Makes calculated moves based on long-term goals',
    behaviors: ['defensive', 'economic', 'expansion'],
    moveFrequency: 0.8
  },
  aggressive: {
    name: 'Aggressive',
    description: 'Prefers attacking and taking risks',
    behaviors: ['offensive', 'expansion', 'military'],
    moveFrequency: 0.9
  },
  defensive: {
    name: 'Defensive',
    description: 'Focuses on protecting existing territories',
    behaviors: ['defensive', 'economic', 'fortification'],
    moveFrequency: 0.6
  },
  diplomatic: {
    name: 'Diplomatic',
    description: 'Prefers negotiation and alliances',
    behaviors: ['economic', 'diplomatic', 'defensive'],
    moveFrequency: 0.7
  },
  intellectual: {
    name: 'Intellectual',
    description: 'Makes thoughtful, well-reasoned decisions',
    behaviors: ['economic', 'strategic', 'defensive'],
    moveFrequency: 0.75
  },
  swift: {
    name: 'Swift',
    description: 'Acts quickly and decisively',
    behaviors: ['offensive', 'expansion', 'military'],
    moveFrequency: 0.95
  },
  argumentative: {
    name: 'Argumentative',
    description: 'Challenges others and defends positions',
    behaviors: ['offensive', 'defensive', 'military'],
    moveFrequency: 0.8
  },
  authoritarian: {
    name: 'Authoritarian',
    description: 'Seeks to control and dominate',
    behaviors: ['offensive', 'military', 'expansion'],
    moveFrequency: 0.85
  },
  military: {
    name: 'Military',
    description: 'Focuses on military strength and conquest',
    behaviors: ['offensive', 'military', 'expansion'],
    moveFrequency: 0.9
  },
  naval: {
    name: 'Naval',
    description: 'Prefers naval strategies and coastal control',
    behaviors: ['naval', 'expansion', 'defensive'],
    moveFrequency: 0.8
  },
  political: {
    name: 'Political',
    description: 'Uses political maneuvering and policy',
    behaviors: ['diplomatic', 'economic', 'defensive'],
    moveFrequency: 0.7
  },
  treacherous: {
    name: 'Treacherous',
    description: 'Unpredictable and willing to betray',
    behaviors: ['offensive', 'military', 'unpredictable'],
    moveFrequency: 0.6
  },
  unifying: {
    name: 'Unifying',
    description: 'Brings people together and builds consensus',
    behaviors: ['diplomatic', 'defensive', 'economic'],
    moveFrequency: 0.75
  },
  persistent: {
    name: 'Persistent',
    description: 'Never gives up and keeps trying',
    behaviors: ['offensive', 'military', 'defensive'],
    moveFrequency: 0.85
  },
  destructive: {
    name: 'Destructive',
    description: 'Seeks to destroy enemy capabilities',
    behaviors: ['offensive', 'military', 'aggressive'],
    moveFrequency: 0.9
  },
  brave: {
    name: 'Brave',
    description: 'Takes risks for noble causes',
    behaviors: ['offensive', 'military', 'expansion'],
    moveFrequency: 0.8
  },
  eloquent: {
    name: 'Eloquent',
    description: 'Uses words as weapons',
    behaviors: ['diplomatic', 'economic', 'defensive'],
    moveFrequency: 0.7
  },
  honorable: {
    name: 'Honorable',
    description: 'Fights with honor and integrity',
    behaviors: ['defensive', 'military', 'diplomatic'],
    moveFrequency: 0.75
  },
  dashing: {
    name: 'Dashing',
    description: 'Bold and flamboyant in tactics',
    behaviors: ['offensive', 'military', 'expansion'],
    moveFrequency: 0.85
  },
  ruthless: {
    name: 'Ruthless',
    description: 'Shows no mercy to enemies',
    behaviors: ['offensive', 'military', 'aggressive'],
    moveFrequency: 0.9
  },
  ambitious: {
    name: 'Ambitious',
    description: 'Seeks power and glory',
    behaviors: ['offensive', 'expansion', 'military'],
    moveFrequency: 0.85
  },
  passionate: {
    name: 'Passionate',
    description: 'Fights with emotion and intensity',
    behaviors: ['offensive', 'military', 'expansion'],
    moveFrequency: 0.8
  },
  cunning: {
    name: 'Cunning',
    description: 'Uses clever tactics and deception',
    behaviors: ['strategic', 'offensive', 'military'],
    moveFrequency: 0.8
  },
  calculating: {
    name: 'Calculating',
    description: 'Makes precise, measured decisions',
    behaviors: ['strategic', 'economic', 'defensive'],
    moveFrequency: 0.75
  },
  idealistic: {
    name: 'Idealistic',
    description: 'Fights for principles and ideals',
    behaviors: ['defensive', 'diplomatic', 'economic'],
    moveFrequency: 0.7
  },
  envious: {
    name: 'Envious',
    description: 'Motivated by jealousy and resentment',
    behaviors: ['offensive', 'military', 'aggressive'],
    moveFrequency: 0.8
  },
  tyrannical: {
    name: 'Tyrannical',
    description: 'Rules through fear and oppression',
    behaviors: ['offensive', 'military', 'authoritarian'],
    moveFrequency: 0.9
  },
  manipulative: {
    name: 'Manipulative',
    description: 'Controls others through deception',
    behaviors: ['diplomatic', 'strategic', 'offensive'],
    moveFrequency: 0.8
  },
  loyal: {
    name: 'Loyal',
    description: 'Faithful to allies and causes',
    behaviors: ['defensive', 'military', 'economic'],
    moveFrequency: 0.75
  },
  cynical: {
    name: 'Cynical',
    description: 'Distrustful and pessimistic',
    behaviors: ['defensive', 'economic', 'strategic'],
    moveFrequency: 0.6
  },
  caring: {
    name: 'Caring',
    description: 'Protects and nurtures others',
    behaviors: ['defensive', 'economic', 'diplomatic'],
    moveFrequency: 0.7
  },
  selfish: {
    name: 'Selfish',
    description: 'Pursues personal gain above all',
    behaviors: ['economic', 'offensive', 'strategic'],
    moveFrequency: 0.8
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCENARIOS, AI_PERSONALITIES };
}
