// Historical and Literary Scenarios for Tornado War
// This file contains all scenario data including characters, territories, and AI personalities

console.log('Loading scenarios.js file...');

// Ensure SCENARIOS is globally available in browsers immediately
window.SCENARIOS = {
  // BUSINESS MODE
  businessMode: {
    id: 'businessMode',
    name: 'Business Competition Mode',
    scenarioName: 'Business Competition Mode',
    type: 'business',
    description: 'Corporate competition with departments, headquarters, and market strategies.',
    inspirationalQuote: {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      context: "Business leadership philosophy"
    },
    factionOrder: ['teamA','teamB','teamC','teamD'],
    factions: {
      teamA: {
        name: 'Alpha Division',
        color: '#1e40af', // Blue
        description: 'Leading market division',
        territories: [
          // North America
          { name: 'One World Trade Center', cost: 65, description: 'NYC financial tower' },
          { name: 'Empire State Building', cost: 60, description: 'NYC landmark office' },
          { name: 'Chrysler Building', cost: 55, description: 'NYC art deco tower' },
          { name: 'Bank of America Tower', cost: 50, description: 'NYC banking HQ' },
          { name: 'Apple Park Campus', cost: 58, description: 'Cupertino tech HQ' },
          { name: 'Googleplex', cost: 56, description: 'Mountain View campus' },
          { name: 'Facebook Meta Campus', cost: 52, description: 'Menlo Park HQ' },
          { name: 'Tesla Gigafactory', cost: 48, description: 'Fremont manufacturing' },
          { name: 'Hollywood Studios', cost: 45, description: 'LA entertainment hub' },
          { name: 'Beverly Hills Rodeo Drive', cost: 42, description: 'LA luxury retail' },
          { name: 'Sears Tower', cost: 40, description: 'Chicago skyscraper' },
          { name: 'Chicago Board of Trade', cost: 38, description: 'Chicago finance' },
          { name: 'Miami Brickell District', cost: 35, description: 'Miami finance hub' },
          { name: 'Las Vegas Strip', cost: 32, description: 'Vegas entertainment' },
          { name: 'Phoenix Sky Harbor', cost: 28, description: 'Phoenix airport district' },
          { name: 'San Diego Gaslamp', cost: 25, description: 'San Diego downtown' }
        ],
        characters: []
      },
      teamB: {
        name: 'Beta Division',
        color: '#dc2626', // Red
        description: 'Growth-focused division',
        territories: [
          // Europe
          { name: 'Canary Wharf', cost: 62, description: 'London financial district' },
          { name: 'The Shard', cost: 58, description: 'London skyscraper' },
          { name: 'La Défense', cost: 55, description: 'Paris business district' },
          { name: 'Tour Montparnasse', cost: 52, description: 'Paris office tower' },
          { name: 'Frankfurt Stock Exchange', cost: 48, description: 'German finance hub' },
          { name: 'Commerzbank Tower', cost: 45, description: 'Frankfurt banking' },
          { name: 'Potsdamer Platz', cost: 42, description: 'Berlin business center' },
          { name: 'Sony Center', cost: 38, description: 'Berlin media hub' },
          { name: 'Parco Sempione', cost: 35, description: 'Milan business district' },
          { name: 'Torre Velasca', cost: 32, description: 'Milan landmark tower' },
          { name: 'Plaza Mayor', cost: 30, description: 'Madrid financial center' },
          { name: 'Torre Picasso', cost: 28, description: 'Madrid office tower' },
          { name: 'Damrak District', cost: 26, description: 'Amsterdam finance' },
          { name: 'Zuidas', cost: 24, description: 'Amsterdam business hub' },
          { name: 'Stockholm City Center', cost: 22, description: 'Swedish finance' },
          { name: 'Kista Science City', cost: 20, description: 'Stockholm tech hub' }
        ],
        characters: []
      },
      teamC: {
        name: 'Gamma Division',
        color: '#059669', // Green
        description: 'Innovation-driven division',
        territories: [
          // Asia
          { name: 'Tokyo Skytree District', cost: 60, description: 'Tokyo business hub' },
          { name: 'Shibuya Crossing', cost: 55, description: 'Tokyo tech center' },
          { name: 'Marina Bay Sands', cost: 52, description: 'Singapore landmark' },
          { name: 'One Raffles Place', cost: 48, description: 'Singapore finance' },
          { name: 'Shanghai Tower', cost: 45, description: 'Shanghai skyscraper' },
          { name: 'Lujiazui Financial District', cost: 42, description: 'Shanghai finance' },
          { name: 'Hong Kong Central', cost: 40, description: 'HK financial district' },
          { name: 'International Finance Centre', cost: 38, description: 'HK banking hub' },
          { name: 'Gangnam District', cost: 35, description: 'Seoul business center' },
          { name: 'Lotte World Tower', cost: 32, description: 'Seoul landmark' },
          { name: 'Bandra Kurla Complex', cost: 30, description: 'Mumbai finance' },
          { name: 'Cyber City', cost: 28, description: 'Gurgaon tech hub' },
          { name: 'Bangalore IT Park', cost: 26, description: 'Indian tech center' },
          { name: 'Electronic City', cost: 24, description: 'Bangalore tech hub' },
          { name: 'Kuala Lumpur City Center', cost: 22, description: 'Malaysian finance' },
          { name: 'Petronas Towers', cost: 20, description: 'KL landmark towers' }
        ],
        characters: []
      },
      teamD: {
        name: 'Delta Division',
        color: '#7c3aed', // Purple
        description: 'Customer-focused division',
        territories: [
          // Middle East & Africa
          { name: 'Burj Khalifa', cost: 58, description: 'Dubai landmark tower' },
          { name: 'Dubai International Financial Centre', cost: 55, description: 'Dubai finance hub' },
          { name: 'Abu Dhabi Corniche', cost: 52, description: 'UAE business district' },
          { name: 'Doha West Bay', cost: 48, description: 'Qatar finance center' },
          { name: 'Riyadh King Abdullah Financial District', cost: 45, description: 'Saudi finance' },
          { name: 'Tel Aviv Diamond Exchange', cost: 42, description: 'Israeli finance' },
          { name: 'Cairo New Administrative Capital', cost: 38, description: 'Egyptian business hub' },
          { name: 'Casablanca Finance City', cost: 35, description: 'Moroccan finance' },
          { name: 'Lagos Victoria Island', cost: 32, description: 'Nigerian finance' },
          { name: 'Johannesburg Sandton', cost: 30, description: 'South African finance' },
          { name: 'Nairobi Upper Hill', cost: 28, description: 'Kenyan business district' },
          { name: 'Accra Airport City', cost: 26, description: 'Ghanaian finance' },
          // Oceania
          { name: 'Sydney Opera House District', cost: 24, description: 'Sydney business hub' },
          { name: 'Melbourne Docklands', cost: 22, description: 'Melbourne finance' },
          { name: 'Perth CBD', cost: 20, description: 'Perth business center' },
          { name: 'Auckland Viaduct', cost: 18, description: 'New Zealand finance' }
        ],
        characters: []
      }
    },
    weapons: [
      { name: 'Legal Team', cost: 15, description: 'Corporate lawyers for hostile takeovers', power: 3 },
      { name: 'Cyber Security', cost: 12, description: 'Digital warfare specialists', power: 2 },
      { name: 'Talent Acquisition', cost: 20, description: 'Poach key executives', power: 4 },
      { name: 'Market Intelligence', cost: 18, description: 'Competitive research & espionage', power: 3 },
      { name: 'Technology Transfer', cost: 25, description: 'Steal proprietary technology', power: 5 },
      { name: 'Customer Poaching', cost: 16, description: 'Steal competitor clients', power: 3 },
      { name: 'Supply Chain Disruption', cost: 14, description: 'Sabotage competitor operations', power: 2 },
      { name: 'Brand Sabotage', cost: 22, description: 'Damage competitor reputation', power: 4 },
      { name: 'Patent Warfare', cost: 30, description: 'Intellectual property battles', power: 6 },
      { name: 'Market Manipulation', cost: 35, description: 'Stock manipulation & insider trading', power: 7 }
    ],
    mercenaries: [
      { name: 'Executive', cost: 8, description: 'Senior management talent', power: 2 },
      { name: 'Specialist', cost: 6, description: 'Domain expert employee', power: 1 },
      { name: 'Consultant', cost: 4, description: 'External advisor', power: 1 },
      { name: 'Analyst', cost: 10, description: 'Strategic intelligence officer', power: 3 },
      { name: 'Manager', cost: 12, description: 'Operations specialist', power: 3 }
    ],
    castleLevels: [
      { level: 1, name: 'Factory', cost: 20, description: 'Small manufacturing facility', defense: 2 },
      { level: 2, name: 'Headquarters', cost: 40, description: 'Regional corporate center', defense: 4 },
      { level: 3, name: 'Corporate Empire', cost: 80, description: 'Global business conglomerate', defense: 8 }
    ],
    victoryConditions: {
      territorial: 'Control 60% of all departments',
      economic: 'Accumulate 500 performance points',
      strategic: 'Control all headquarters in your division'
    },
    specialRules: [
      'Business metrics affect territory control',
      'Customer satisfaction impacts revenue',
      'Innovation drives competitive advantage',
      'Strategic partnerships provide bonuses'
    ]
  },
  // HISTORICAL WARS
  americanRevolution: {
    id: 'americanRevolution',
    name: 'American Revolutionary War (1775-1783)',
    type: 'historical',
    description: 'The founding of the United States through revolution against British rule.',
    inspirationalQuote: {
      text: "The harder the conflict, the more glorious the triumph. What we obtain too cheap, we esteem too lightly.",
      author: "Thomas Paine",
      context: "American Revolutionary writer and philosopher"
    },
    factionOrder: ['patriots','british'],
    factions: {
      patriots: {
        name: 'Patriots',
        color: '#1e40af', // Blue
        description: 'American colonists fighting for independence',
        territories: [
          { name: 'Boston', cost: 20, description: 'Revolutionary center' },
          { name: 'Philadelphia', cost: 25, description: 'Congress & Declaration' },
          { name: 'New York', cost: 22, description: 'Port & Army HQ' },
          { name: 'Charleston', cost: 18, description: 'Southern stronghold and supply base' },
          { name: 'Valley Forge', cost: 15, description: 'Winter encampment and training ground' },
          { name: 'Saratoga', cost: 16, description: 'Turning point battle' },
          { name: 'Yorktown', cost: 20, description: 'Final battle site' },
          { name: 'Lexington & Concord', cost: 14, description: 'First shots fired' },
          { name: 'Trenton', cost: 12, description: 'Christmas victory' },
          { name: 'Continental Army Camps', cost: 10, description: 'Military training' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'argumentative',
            quotes: [
              "Facts are stubborn things.",
              "I must study politics and war that my sons may have liberty to study mathematics and philosophy.",
              "The Revolution was effected before the war commenced.",
              "Liberty cannot be preserved without a general knowledge among the people.",
              "I always consider the settlement of America as the opening of a grand scheme."
            ],
            description: 'Defense lawyer for British soldiers and advocate for independence.'
          },
          {
            name: 'Alexander Hamilton',
            role: 'Soldier & Statesman',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "A national debt, if it is not excessive, will be to us a national blessing.",
              "The sacred rights of mankind are not to be rummaged for among old parchments.",
              "I will never be satisfied with mediocrity.",
              "The voice of the people has been said to be the voice of God.",
              "Those who stand for nothing fall for anything."
            ],
            description: 'Founding Father, soldier, and first Secretary of the Treasury.'
          },
          {
            name: 'John Hancock',
            role: 'Merchant & Politician',
            startingCoins: 90,
            startingWeapons: ['wealth'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wealthy',
            quotes: [
              "There, I guess King George will be able to read that!",
              "We must be unanimous; there must be no pulling different ways.",
              "The cause of America is the cause of all mankind.",
              "We will not be taxed without representation!",
              "Liberty is worth fighting for!"
            ],
            description: 'Wealthy merchant who signed the Declaration of Independence with a large signature.'
          },
          {
            name: 'Samuel Adams',
            role: 'Revolutionary Leader',
            startingCoins: 70,
            startingWeapons: ['words'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'radical',
            quotes: [
              "The liberties of our country, the freedom of our civil constitution, are worth defending.",
              "It does not require a majority to prevail, but rather an irate, tireless minority.",
              "We cannot make events. Our business is wisely to improve them.",
              "The natural liberty of man is to be free from any superior power on Earth.",
              "No taxation without representation!"
            ],
            description: 'Cousin of John Adams and leader of the Sons of Liberty.'
          },
          {
            name: 'Patrick Henry',
            role: 'Orator',
            startingCoins: 75,
            startingWeapons: ['words'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "Give me liberty, or give me death!",
              "I know not what course others may take; but as for me, give me liberty or give me death!",
              "The battle, sir, is not to the strong alone; it is to the vigilant, the active, the brave.",
              "We are not weak if we make a proper use of those means which the God of nature hath placed in our power.",
              "Is life so dear, or peace so sweet, as to be purchased at the price of chains and slavery?"
            ],
            description: 'Virginia lawyer and orator known for his passionate speeches.'
          },
          {
            name: 'Marquis de Lafayette',
            role: 'French General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'idealistic',
            quotes: [
              "Humanity has won its battle. Liberty now has a country.",
              "I was never able to resist the temptation of a good fight.",
              "The welfare of America is intimately connected with the welfare of all mankind.",
              "I am here to learn, not to teach.",
              "The cause of America is the cause of all mankind."
            ],
            description: 'French aristocrat who fought for American independence.'
          },
          {
            name: 'Baron von Steuben',
            role: 'Military Instructor',
            startingCoins: 75,
            startingWeapons: ['discipline'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "The American soldier, properly trained, is equal to any in the world.",
              "Discipline is the soul of an army.",
              "I will make soldiers of these farmers.",
              "The Continental Army will be the finest in the world.",
              "Training makes the difference between victory and defeat."
            ],
            description: 'Prussian officer who trained the Continental Army.'
          },
          {
            name: 'Nathaniel Greene',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We fight, get beat, rise, and fight again.",
              "I am determined to defend every inch of ground.",
              "The enemy will find us ready.",
              "We will not give up the cause.",
              "Victory belongs to the persistent."
            ],
            description: 'Continental Army general known for his strategic retreats.'
          },
          {
            name: 'Henry Knox',
            role: 'Artillery Commander',
            startingCoins: 70,
            startingWeapons: ['cannon'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will drag these cannons to Boston!",
              "Artillery is the god of war.",
              "We will not be stopped by winter.",
              "The British will hear our guns.",
              "We will fight with everything we have."
            ],
            description: 'Continental Army officer who transported cannons from Fort Ticonderoga.'
          },
          {
            name: 'Benedict Arnold',
            role: 'General (Early Patriot)',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will take Quebec!",
              "I will prove my worth to Congress.",
              "The British will not defeat us.",
              "We will fight for our honor.",
              "Victory will be ours."
            ],
            description: 'Initially a hero of the Revolution, later became a traitor.'
          },
          {
            name: 'Ethan Allen',
            role: 'Vermont Militia Leader',
            startingCoins: 65,
            startingWeapons: ['musket'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'bold',
            quotes: [
              "Come out, you old rat!",
              "We will take this fort!",
              "The Green Mountain Boys will not be denied!",
              "We fight for Vermont!",
              "We will not surrender!"
            ],
            description: 'Leader of the Green Mountain Boys who captured Fort Ticonderoga.'
          },
          {
            name: 'John Paul Jones',
            role: 'Naval Commander',
            startingCoins: 75,
            startingWeapons: ['ship'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I have not yet begun to fight!",
              "We will take the fight to the British at sea.",
              "The Bonhomme Richard will not surrender!",
              "We will show them American courage.",
              "Victory or death!"
            ],
            description: 'Continental Navy captain known for his naval victories.'
          },
          {
            name: 'Francis Marion',
            role: 'Swamp Fox',
            startingCoins: 70,
            startingWeapons: ['guerilla tactics'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'elusive',
            quotes: [
              "We will strike from the swamps.",
              "The British will never catch us.",
              "We fight on our own terms.",
              "The Swamp Fox will not be tamed.",
              "We will harass them until they leave."
            ],
            description: 'South Carolina militia leader known for guerilla warfare.'
          },
          {
            name: 'Daniel Morgan',
            role: 'Rifleman Commander',
            startingCoins: 75,
            startingWeapons: ['rifle'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'tactical',
            quotes: [
              "We will use our rifles wisely.",
              "The British will learn to fear our marksmanship.",
              "We will fight from cover.",
              "Every shot must count.",
              "We will not waste ammunition."
            ],
            description: 'Continental Army officer known for his riflemen.'
          },
          {
            name: 'John Stark',
            role: 'New Hampshire General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'defiant',
            quotes: [
              "Live free or die!",
              "We will not be conquered.",
              "New Hampshire stands with the cause.",
              "We will fight for our freedom.",
              "Death before dishonor!"
            ],
            description: 'New Hampshire general who led troops at the Battle of Bennington.'
          },
          {
            name: 'Horatio Gates',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must choose our battles carefully.",
              "The Continental Army will be preserved.",
              "We will not risk everything.",
              "Strategy over bravery.",
              "We will fight another day."
            ],
            description: 'Continental Army general who won at Saratoga but was cautious.'
          },
          {
            name: 'Israel Putnam',
            role: 'Connecticut General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "Don't fire until you see the whites of their eyes!",
              "We will hold this position.",
              "The British will not pass.",
              "We fight for Connecticut.",
              "We will not retreat!"
            ],
            description: 'Connecticut general who fought at Bunker Hill.'
          },
          {
            name: 'William Prescott',
            role: 'Massachusetts Colonel',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will defend this hill.",
              "The British will not take Bunker Hill.",
              "We fight for Massachusetts.",
              "We will not surrender.",
              "Every man must do his duty."
            ],
            description: 'Massachusetts colonel who commanded at Bunker Hill.'
          },
          {
            name: 'Joseph Warren',
            role: 'Physician & Patriot',
            startingCoins: 60,
            startingWeapons: ['medical knowledge'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'dedicated',
            quotes: [
              "We will heal the wounded.",
              "The cause needs every man.",
              "We will not abandon our principles.",
              "Liberty is worth dying for.",
              "We will fight for our beliefs."
            ],
            description: 'Physician and patriot who died at Bunker Hill.'
          },
          {
            name: 'Samuel Adams',
            role: 'Revolutionary Leader',
            startingCoins: 55,
            startingWeapons: ['rhetoric'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "The natural liberty of man is to be free from any superior power on Earth.",
              "We cannot make events. Our business is wisely to improve them.",
              "The people have a right to alter or abolish government.",
              "No taxation without representation!",
              "Liberty or death!"
            ],
            description: 'Revolutionary leader who organized resistance to British rule.'
          }
        ],
        generalRoles: [
          { name: 'Patriot Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For liberty!', 'Down with tyranny!', 'Freedom or death!'] },
          { name: 'Colonial Farmer', startingCoins: 40, startingWeapons: ['pitchfork'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We will not be taxed!', 'No taxation without representation!', 'Stand up for our rights!'] },
          { name: 'Town Militia', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'patriotic', quotes: ['Ready to fight!', 'For our homes!', 'Liberty or death!'] }
        ]
      },
      british: {
        name: 'British Empire',
        color: '#dc2626', // Red
        description: 'British forces maintaining colonial control',
        territories: [
          { name: 'London', cost: 30, description: 'Imperial command' },
          { name: 'New York (Occupied)', cost: 25, description: 'British stronghold' },
          { name: 'Charleston (Occupied)', cost: 22, description: 'Southern port' },
          { name: 'Quebec', cost: 20, description: 'Crown fortress' },
          { name: 'Halifax', cost: 18, description: 'Royal Navy base' },
          { name: 'Bermuda', cost: 15, description: 'Blockade station' },
          { name: 'Royal Navy', cost: 28, description: 'Blockade force' },
          { name: 'Fort Ticonderoga', cost: 16, description: 'Strategic fortress' },
          { name: 'Loyalist Counties', cost: 14, description: 'Tory support' },
          { name: 'Caribbean Bases', cost: 12, description: 'Sugar islands & supplies' }
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
            startingCastles: 1,
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
          },
          {
            name: 'General Burgoyne',
            role: 'General',
            startingCoins: 105,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'confident',
            quotes: [
              "We will march from Canada to New York.",
              "The Americans cannot stop us.",
              "We will divide and conquer.",
              "Victory will be ours.",
              "The British Empire will prevail."
            ],
            description: 'British general who led the Saratoga campaign.'
          },
          {
            name: 'General Clinton',
            role: 'Commander-in-Chief',
            startingCoins: 115,
            startingWeapons: ['sword'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will hold New York.",
              "The Americans will not take our strongholds.",
              "We will fight a defensive war.",
              "The Royal Navy will support us.",
              "We will outlast the rebels."
            ],
            description: 'British Commander-in-Chief in North America.'
          },
          {
            name: 'General Gage',
            role: 'Military Governor',
            startingCoins: 100,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'authoritarian',
            quotes: [
              "We will restore order to Boston.",
              "The rebels will be crushed.",
              "We will show them British might.",
              "The colonies will submit.",
              "We will not tolerate rebellion."
            ],
            description: 'British general and governor of Massachusetts.'
          },
          {
            name: 'General Tarleton',
            role: 'Cavalry Commander',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will hunt down the rebels.",
              "No quarter for traitors.",
              "We will show them no mercy.",
              "The cavalry will crush them.",
              "We will not be stopped."
            ],
            description: 'British cavalry officer known for his aggressive tactics.'
          },
          {
            name: 'Admiral Graves',
            role: 'Naval Commander',
            startingCoins: 100,
            startingWeapons: ['naval cannon'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'naval',
            quotes: [
              "The Royal Navy will blockade them.",
              "We will cut off their supplies.",
              "Sea power will win this war.",
              "The Americans cannot match us at sea.",
              "We will control the waters."
            ],
            description: 'British admiral who commanded naval forces.'
          },
          {
            name: 'Lord North',
            role: 'Prime Minister',
            startingCoins: 110,
            startingWeapons: ['parliamentary power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'stubborn',
            quotes: [
              "The colonies must submit.",
              "We will not negotiate with rebels.",
              "British law must be enforced.",
              "The Americans will learn obedience.",
              "We will maintain our empire."
            ],
            description: 'British Prime Minister during the American Revolution.'
          },
          {
            name: 'General Burgoyne',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['sword', 'strategy'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'confident',
            quotes: [
              "I will march from Canada.",
              "The Americans cannot stop me.",
              "Victory at Saratoga will be mine.",
              "We will divide and conquer.",
              "The rebellion will be crushed."
            ],
            description: 'British general who led the Saratoga campaign.'
          },
          {
            name: 'General Clinton',
            role: 'Commander-in-Chief',
            startingCoins: 105,
            startingWeapons: ['sword', 'command'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must be strategic.",
              "I will not rush into battle.",
              "The Americans are cunning.",
              "We will wear them down.",
              "Patience will win this war."
            ],
            description: 'British Commander-in-Chief in North America.'
          },
          {
            name: 'General Gage',
            role: 'Military Governor',
            startingCoins: 90,
            startingWeapons: ['sword', 'authority'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'authoritarian',
            quotes: [
              "I will restore order.",
              "The rebels will be punished.",
              "British law will be enforced.",
              "We will maintain control.",
              "The colonies will submit."
            ],
            description: 'British general and military governor of Massachusetts.'
          },
          {
            name: 'General Tarleton',
            role: 'Cavalry Commander',
            startingCoins: 85,
            startingWeapons: ['sword', 'cavalry'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "I will hunt them down.",
              "The Americans cannot hide.",
              "We will strike fast and hard.",
              "No mercy for rebels.",
              "We will not be stopped."
            ],
            description: 'British cavalry officer known for his aggressive tactics.'
          },
          {
            name: 'Benedict Arnold',
            role: 'Traitor',
            startingCoins: 80,
            startingWeapons: ['sword', 'treachery'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "The British offer more.",
              "I will switch sides.",
              "Money and power matter most.",
              "I deserve recognition.",
              "The Americans betrayed me."
            ],
            description: 'American general who defected to the British.'
          },
          {
            name: 'John André',
            role: 'Spy',
            startingCoins: 70,
            startingWeapons: ['intelligence'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'charming',
            quotes: [
              "I will gather intelligence.",
              "The Americans trust me.",
              "Information is power.",
              "I will infiltrate their ranks.",
              "We will know their plans."
            ],
            description: 'British spy who worked with Benedict Arnold.'
          },
          {
            name: 'Charles Cornwallis',
            role: 'General',
            startingCoins: 100,
            startingWeapons: ['sword', 'tactics'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I will not surrender.",
              "We will fight to the end.",
              "The British never give up.",
              "We will hold our ground.",
              "Victory or death."
            ],
            description: 'British general who surrendered at Yorktown.'
          },
          {
            name: 'Banastre Tarleton',
            role: 'Cavalry Officer',
            startingCoins: 80,
            startingWeapons: ['sword', 'cavalry'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ruthless',
            quotes: [
              "No quarter for rebels.",
              "We will show no mercy.",
              "The Americans will fear us.",
              "We will crush their spirit.",
              "Victory through terror."
            ],
            description: 'British cavalry officer known for his brutality.'
          },
          {
            name: 'William Howe',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['sword', 'strategy'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'methodical',
            quotes: [
              "We will take New York.",
              "The Americans cannot stop us.",
              "We will control the cities.",
              "Urban warfare is our strength.",
              "We will win this war."
            ],
            description: 'British general who captured New York.'
          },
          {
            name: 'Henry Clinton',
            role: 'General',
            startingCoins: 90,
            startingWeapons: ['sword', 'command'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We must be patient.",
              "The Americans will tire.",
              "We will outlast them.",
              "Strategy over speed.",
              "We will win through attrition."
            ],
            description: 'British general known for his strategic thinking.'
          }
        ],
        generalRoles: [
          { name: 'Redcoat Soldier', startingCoins: 60, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'disciplined', quotes: ['For king and country!', 'God save the king!', 'We will prevail!'] },
          { name: 'British Officer', startingCoins: 70, startingWeapons: ['sword'], startingMercenaries: 2, startingCastles: 1, personality: 'proud', quotes: ['At attention!', 'Follow orders!', 'For the empire!'] },
          { name: 'Loyalist Colonist', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['We are British subjects!', 'Long live the king!', 'We must maintain order!'] }
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
    inspirationalQuote: {
      text: "With malice toward none, with charity for all, with firmness in the right as God gives us to see the right.",
      author: "Abraham Lincoln",
      context: "16th President of the United States, Second Inaugural Address"
    },
    factionOrder: ['union','confederacy'],
    factions: {
      union: {
        name: 'Union',
        color: '#1e40af', // Blue
        description: 'Northern states fighting to preserve the Union and end slavery',
        territories: [
          { name: 'Washington D.C.', cost: 20, description: 'Union capital and command center' },
          { name: 'New York', cost: 18, description: 'Industrial center and financial hub' },
          { name: 'Philadelphia', cost: 15, description: 'Manufacturing hub and supply center' },
          { name: 'Boston', cost: 12, description: 'Port city and naval base' },
          { name: 'Chicago', cost: 10, description: 'Railroad center and transportation hub' },
          { name: 'Cleveland', cost: 8, description: 'Industrial city and manufacturing' },
          { name: 'Union Army Camps', cost: 16, description: 'Military training centers' },
          { name: 'Gettysburg', cost: 14, description: 'Turning point battle site' },
          { name: 'Union Navy', cost: 13, description: 'Naval blockade and river fleet' },
          { name: 'Underground Railroad', cost: 11, description: 'Freedom network and intelligence' }
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
            description: "Union general known for his March to the Sea"
          },
          {
            name: 'Harriet Tubman',
            role: 'Spy',
            startingCoins: 70,
            startingWeapons: ['intelligence'],
            startingMercenaries: 1,
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'eloquent',
            quotes: [
              "If there is no struggle, there is no progress.",
              "It is easier to build strong children than to repair broken men.",
              "Power concedes nothing without a demand.",
              "I would unite with anybody to do right and with nobody to do wrong.",
              "The life of the nation is secure only while the nation is honest."
            ],
            description: 'Former slave who became a leading abolitionist and orator.'
          },
          {
            name: 'George McClellan',
            role: 'General',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must be careful not to overextend ourselves.",
              "The Army of the Potomac will be ready when ready.",
              "We will not risk everything on one battle.",
              "Preparation is the key to victory.",
              "We will fight when we are prepared."
            ],
            description: 'Union general known for his cautious approach and training abilities.'
          },
          {
            name: 'George Meade',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will hold this position.",
              "The Army of the Potomac will not retreat.",
              "We will defend Pennsylvania.",
              "Gettysburg will be our victory.",
              "We will not give ground."
            ],
            description: 'Union general who commanded at the Battle of Gettysburg.'
          },
          {
            name: 'Philip Sheridan',
            role: 'Cavalry Commander',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will ride them down.",
              "The cavalry will not be stopped.",
              "We will destroy their supplies.",
              "Speed and surprise will win.",
              "We will not let them escape."
            ],
            description: 'Union cavalry officer known for his aggressive tactics.'
          },
          {
            name: 'Winfield Scott Hancock',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will hold Cemetery Hill.",
              "The Second Corps will not break.",
              "We will fight to the last man.",
              "Gettysburg will be defended.",
              "We will not surrender."
            ],
            description: 'Union general who commanded the Second Corps at Gettysburg.'
          },
          {
            name: 'Joshua Chamberlain',
            role: 'Colonel',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'heroic',
            quotes: [
              "We will hold Little Round Top.",
              "The 20th Maine will not retreat.",
              "We will fight with bayonets.",
              "We will not give up this hill.",
              "Victory or death!"
            ],
            description: 'Union colonel who held Little Round Top at Gettysburg.'
          },
          {
            name: 'John Reynolds',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'bold',
            quotes: [
              "Forward, men! Forward!",
              "We will engage the enemy.",
              "The First Corps will lead the way.",
              "We will not hesitate.",
              "We will fight now."
            ],
            description: 'Union general who was killed at Gettysburg.'
          },
          {
            name: 'Ambrose Burnside',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unfortunate',
            quotes: [
              "We will cross the Rappahannock.",
              "The Army of the Potomac will advance.",
              "We will not be stopped by rivers.",
              "We will fight at Fredericksburg.",
              "We will not retreat."
            ],
            description: 'Union general known for his distinctive sideburns and military failures.'
          },
          {
            name: 'Joseph Hooker',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'confident',
            quotes: [
              "We will outflank Lee.",
              "The Army of the Potomac will win.",
              "We will not be defeated.",
              "Chancellorsville will be ours.",
              "We will fight with confidence."
            ],
            description: 'Union general who commanded at Chancellorsville.'
          },
          {
            name: 'John Pope',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack from the west.",
              "The Army of Virginia will fight.",
              "We will not wait for the enemy.",
              "We will take the offensive.",
              "We will not be defensive."
            ],
            description: 'Union general who commanded the Army of Virginia.'
          },
          {
            name: 'Benjamin Butler',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'political',
            quotes: [
              "We will occupy New Orleans.",
              "The Union will be restored.",
              "We will not tolerate rebellion.",
              "We will fight for the Constitution.",
              "We will not compromise."
            ],
            description: 'Union general and politician who occupied New Orleans.'
          },
          {
            name: 'Nathaniel Banks',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'political',
            quotes: [
              "We will fight for the Union.",
              "The Army of the Gulf will advance.",
              "We will not be stopped.",
              "We will fight for our country.",
              "We will not surrender."
            ],
            description: 'Union general and politician who commanded the Army of the Gulf.'
          },
          {
            name: 'John McClernand',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will take Vicksburg.",
              "The Army of the Mississippi will fight.",
              "We will not be denied.",
              "We will fight for glory.",
              "We will not retreat."
            ],
            description: 'Union general who commanded the Army of the Mississippi.'
          },
          {
            name: 'William Rosecrans',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'methodical',
            quotes: [
              "We will plan our moves carefully.",
              "The Army of the Cumberland will advance.",
              "We will not rush into battle.",
              "We will fight with strategy.",
              "We will not be reckless."
            ],
            description: 'Union general who commanded the Army of the Cumberland.'
          },
          {
            name: 'Ulysses S. Grant Jr.',
            role: 'Staff Officer',
            startingCoins: 60,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve the Union.",
              "The staff will support our generals.",
              "We will not fail in our duty.",
              "We will fight for our fathers.",
              "We will not dishonor our name."
            ],
            description: 'Son of General Grant who served as a staff officer.'
          }
        ]
      },
      confederacy: {
        name: 'Confederacy',
        color: '#dc2626', // Red
        description: 'Southern states fighting to preserve slavery and states rights',
        territories: [
          { name: 'Richmond', cost: 18, description: 'Confederate capital and command center' },
          { name: 'Atlanta', cost: 15, description: 'Railroad hub and supply center' },
          { name: 'Charleston', cost: 12, description: 'Port city and blockade runner base' },
          { name: 'New Orleans', cost: 14, description: 'Mississippi port and trade hub' },
          { name: 'Memphis', cost: 10, description: 'River city and transportation center' },
          { name: 'Nashville', cost: 8, description: 'State capital and strategic position' },
          { name: 'Confederate Army Camps', cost: 16, description: 'Military training centers' },
          { name: 'Fort Sumter', cost: 13, description: 'First battle site' },
          { name: 'Confederate Navy', cost: 11, description: 'River fleet' },
          { name: 'Plantation Strongholds', cost: 9, description: 'Economic base' }
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'ruthless',
            quotes: [
              "I got there first with the most men.",
              "War means fighting, and fighting means killing.",
              "I will whip the enemy wherever I find him.",
              "The best defense is a good offense.",
              "I am a soldier, not a gentleman."
            ],
            description: 'Confederate cavalry commander known for his aggressive tactics.'
          },
          {
            name: 'James Longstreet',
            role: 'General',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will hold this position.",
              "The Army of Northern Virginia will not retreat.",
              "We will fight defensively.",
              "We will not attack unless necessary.",
              "We will preserve our strength."
            ],
            description: 'Confederate general known for his defensive tactics.'
          },
          {
            name: 'A.P. Hill',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack the enemy.",
              "The Light Division will lead the charge.",
              "We will not wait for orders.",
              "We will fight with speed.",
              "We will not be stopped."
            ],
            description: 'Confederate general who commanded the Light Division.'
          },
          {
            name: 'Richard Ewell',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must be careful.",
              "The Second Corps will advance cautiously.",
              "We will not rush into battle.",
              "We will fight when ready.",
              "We will not be reckless."
            ],
            description: 'Confederate general who commanded the Second Corps.'
          },
          {
            name: 'Jubal Early',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'bold',
            quotes: [
              "We will raid the North.",
              "The Confederacy will not be defeated.",
              "We will take the war to them.",
              "We will not give up.",
              "We will fight to the end."
            ],
            description: 'Confederate general who led raids into the North.'
          },
          {
            name: 'John Bell Hood',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack with everything.",
              "The Army of Tennessee will fight.",
              "We will not retreat.",
              "We will fight for our cause.",
              "We will not surrender."
            ],
            description: 'Confederate general who commanded the Army of Tennessee.'
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
    inspirationalQuote: {
      text: "Cowards die many times before their deaths; the valiant never taste of death but once.",
      author: "William Shakespeare",
      context: "Julius Caesar, Act II, Scene II"
    },
    factionOrder: ['caesarians', 'republicans'],
    factions: {
      caesarians: {
        name: 'Caesarians',
        color: '#dc2626', // Red
        description: 'Supporters of Julius Caesar',
        territories: [
          { name: 'Forum Romanum', cost: 25, description: 'Heart of Rome' },
          { name: 'Gaul', cost: 20, description: 'Legion base' },
          { name: 'Alexandria Harbor', cost: 18, description: 'Cleopatra\'s ally port' },
          { name: 'Hispania Legions', cost: 15, description: 'Western legions' },
          { name: 'Africa Proconsularis', cost: 12, description: 'Grain source' },
          { name: 'Asia Province', cost: 10, description: 'Eastern trade' },
          { name: 'Caesar\'s Legions', cost: 22, description: 'Veteran army' },
          { name: 'Domus Caesaris', cost: 16, description: 'Caesar\'s villa' },
          { name: 'Roman Navy', cost: 14, description: 'Mare Nostrum' },
          { name: 'Aerarium', cost: 18, description: 'State treasury' }
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
          },
          {
            name: 'Lepidus',
            role: 'Triumvir',
            startingCoins: 90,
            startingWeapons: ['legion'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'weak',
            quotes: [
              "I am part of the triumvirate.",
              "Caesar's will must be honored.",
              "I serve the Republic.",
              "The people need stability.",
              "I will work harder."
            ],
            description: 'Third member of the Second Triumvirate with Antony and Octavian.'
          },
          {
            name: 'Calpurnia',
            role: 'Wife',
            startingCoins: 70,
            startingWeapons: ['intuition'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'protective',
            quotes: [
              "Caesar, I have had a terrible dream.",
              "Do not go to the Senate today.",
              "I fear for your safety.",
              "The omens are bad.",
              "Stay home with me."
            ],
            description: 'Caesar wife who warns him of danger through dreams.'
          },
          {
            name: 'Servilia',
            role: 'Mistress',
            startingCoins: 60,
            startingWeapons: ['charm'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'influential',
            quotes: [
              "Caesar loves me still.",
              "I have influence in Rome.",
              "My son Brutus is conflicted.",
              "Love conquers all.",
              "I will work harder."
            ],
            description: 'Caesar former mistress and mother of Brutus.'
          },
          {
            name: 'Lucius',
            role: 'Servant',
            startingCoins: 40,
            startingWeapons: ['loyalty'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'devoted',
            quotes: [
              "I serve Caesar faithfully.",
              "Master, your toga is ready.",
              "I will work harder.",
              "Caesar is like a father to me.",
              "I am always at your service."
            ],
            description: 'Caesar loyal servant and confidant.'
          },
          {
            name: 'Artemidorus',
            role: 'Teacher',
            startingCoins: 50,
            startingWeapons: ['warning'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "Caesar, read this warning.",
              "I know of the conspiracy.",
              "Your life is in danger.",
              "Trust no one today.",
              "I will work harder."
            ],
            description: 'Teacher who tries to warn Caesar of the assassination plot.'
          },
          {
            name: 'Popilius',
            role: 'Senator',
            startingCoins: 65,
            startingWeapons: ['senate'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "I wish your enterprise may thrive.",
              "The Senate is dangerous today.",
              "I will work harder.",
              "Caesar should be careful.",
              "The Republic is at stake."
            ],
            description: 'Senator who hints at knowledge of the conspiracy.'
          },
          {
            name: 'Metellus Cimber',
            role: 'Conspirator',
            startingCoins: 75,
            startingWeapons: ['petition'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'deceitful',
            quotes: [
              "Caesar, grant my brother's pardon.",
              "I kneel before you.",
              "Show mercy to my family.",
              "I will work harder.",
              "The Republic needs your mercy."
            ],
            description: 'Conspirator who distracts Caesar before the assassination.'
          },
          {
            name: 'Cinna',
            role: 'Poet',
            startingCoins: 45,
            startingWeapons: ['verses'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'artistic',
            quotes: [
              "I am Cinna the poet.",
              "I have nothing to do with the conspiracy.",
              "I will work harder.",
              "Poetry is my weapon.",
              "I am innocent."
            ],
            description: 'Poet mistaken for conspirator Cinna and killed by mob.'
          },
          {
            name: 'Casca',
            role: 'Conspirator',
            startingCoins: 80,
            startingWeapons: ['dagger'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "Speak, hands, for me!",
              "I strike first.",
              "Caesar must die.",
              "I will work harder.",
              "The Republic will be free."
            ],
            description: 'Conspirator who strikes the first blow against Caesar.'
          },
          {
            name: 'Decius Brutus',
            role: 'Conspirator',
            startingCoins: 85,
            startingWeapons: ['persuasion'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'persuasive',
            quotes: [
              "Caesar, the Senate awaits you.",
              "Your dream was misinterpreted.",
              "Rome needs your leadership.",
              "I will work harder.",
              "The Republic depends on you."
            ],
            description: 'Conspirator who convinces Caesar to go to the Senate.'
          },
          {
            name: 'Trebonius',
            role: 'Conspirator',
            startingCoins: 70,
            startingWeapons: ['distraction'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cunning',
            quotes: [
              "Antony, come with me.",
              "I will keep him occupied.",
              "The deed must be done.",
              "I will work harder.",
              "Caesar must fall."
            ],
            description: 'Conspirator who distracts Antony during the assassination.'
          },
          {
            name: 'Ligarius',
            role: 'Conspirator',
            startingCoins: 60,
            startingWeapons: ['dedication'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'devoted',
            quotes: [
              "I am sick, but I will come.",
              "Nothing can stop me.",
              "The Republic needs me.",
              "I will work harder.",
              "Caesar must be stopped."
            ],
            description: 'Conspirator who joins despite being ill.'
          },
          {
            name: 'Portia',
            role: 'Wife',
            startingCoins: 55,
            startingWeapons: ['anxiety'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'worried',
            quotes: [
              "Brutus, what troubles you?",
              "I am your wife, tell me.",
              "Something is wrong.",
              "I will work harder.",
              "I share your burden."
            ],
            description: 'Brutus wife who senses his inner conflict.'
          },
          {
            name: 'Lucius',
            role: 'Servant',
            startingCoins: 35,
            startingWeapons: ['music'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'innocent',
            quotes: [
              "Master, I will play for you.",
              "Music soothes the soul.",
              "I will work harder.",
              "I am here to serve.",
              "The night is long."
            ],
            description: 'Brutus young servant who plays music for him.'
          },
          {
            name: 'Varro',
            role: 'Servant',
            startingCoins: 30,
            startingWeapons: ['sleep'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'sleepy',
            quotes: [
              "Master, I am tired.",
              "May I sleep now?",
              "I will work harder.",
              "The night is late.",
              "I serve you faithfully."
            ],
            description: 'Brutus servant who falls asleep on duty.'
          },
          {
            name: 'Clitus',
            role: 'Servant',
            startingCoins: 40,
            startingWeapons: ['loyalty'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'faithful',
            quotes: [
              "Master, I will not leave you.",
              "I am your faithful servant.",
              "I will work harder.",
              "I will not abandon you.",
              "Death is better than betrayal."
            ],
            description: 'Brutus loyal servant who refuses to help him die.'
          },
          {
            name: 'Dardanius',
            role: 'Servant',
            startingCoins: 35,
            startingWeapons: ['refusal'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "Master, I cannot do it.",
              "I love you too much.",
              "I will work harder.",
              "I will not harm you.",
              "You are like a father to me."
            ],
            description: 'Brutus servant who refuses to help him commit suicide.'
          },
          {
            name: 'Volumnius',
            role: 'Friend',
            startingCoins: 50,
            startingWeapons: ['friendship'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "Brutus, my friend.",
              "I will not leave you.",
              "I will work harder.",
              "We face this together.",
              "Friendship is stronger than death."
            ],
            description: 'Brutus close friend who stays with him until the end.'
          },
          {
            name: 'Strato',
            role: 'Servant',
            startingCoins: 45,
            startingWeapons: ['sword'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "Master, I will help you.",
              "I understand your choice.",
              "I will work harder.",
              "I will hold the sword.",
              "Death is better than capture."
            ],
            description: 'Brutus servant who helps him commit suicide.'
          },
          {
            name: 'Messala',
            role: 'Officer',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'military',
            quotes: [
              "Brutus, the enemy approaches.",
              "We must prepare for battle.",
              "I will work harder.",
              "The Republic needs us.",
              "Victory or death."
            ],
            description: 'Brutus military officer and friend.'
          },
          {
            name: 'Titinius',
            role: 'Officer',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "Cassius, I will scout ahead.",
              "I will return with news.",
              "I will work harder.",
              "The battle is not lost.",
              "I am your faithful officer."
            ],
            description: 'Cassius loyal officer who scouts the battlefield.'
          },
          {
            name: 'Pindarus',
            role: 'Servant',
            startingCoins: 30,
            startingWeapons: ['eyes'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'observant',
            quotes: [
              "Master, I see Titinius captured.",
              "The enemy has him.",
              "I will work harder.",
              "I report what I see.",
              "I am your eyes."
            ],
            description: 'Cassius servant who misreports Titinius fate.'
          },
          {
            name: 'Lucilius',
            role: 'Officer',
            startingCoins: 60,
            startingWeapons: ['deception'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I am Brutus!",
              "Take me instead.",
              "I will work harder.",
              "I protect my general.",
              "Death is better than capture."
            ],
            description: 'Brutus officer who pretends to be him to protect him.'
          },
          {
            name: 'Young Cato',
            role: 'Soldier',
            startingCoins: 55,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'patriotic',
            quotes: [
              "I am Cato's son!",
              "The Republic lives!",
              "I will work harder.",
              "I fight for freedom.",
              "Death before dishonor."
            ],
            description: 'Cato son who fights bravely for the Republic.'
          },
          {
            name: 'Claudius',
            role: 'Soldier',
            startingCoins: 40,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cowardly',
            quotes: [
              "I am afraid.",
              "The battle is lost.",
              "I will work harder.",
              "I want to live.",
              "I will not fight."
            ],
            description: 'Cowardly soldier who flees from battle.'
          },
          {
            name: 'Flavius',
            role: 'Tribune',
            startingCoins: 50,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'authoritarian',
            quotes: [
              "Remove Caesar's decorations.",
              "The people must not celebrate.",
              "I will work harder.",
              "I enforce the law.",
              "Order must be maintained."
            ],
            description: 'Tribune who removes Caesar decorations from statues.'
          },
          {
            name: 'Marullus',
            role: 'Tribune',
            startingCoins: 50,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'strict',
            quotes: [
              "You blocks, you stones!",
              "Caesar is not a god.",
              "I will work harder.",
              "I enforce the law.",
              "The Republic must be respected."
            ],
            description: 'Tribune who scolds the people for celebrating Caesar.'
          }
        ]
      },
      republicans: {
        name: 'Republicans',
        color: '#1e40af', // Blue
        description: 'Defenders of the Roman Republic',
        territories: [
          { name: 'Capitol Hill', cost: 20, description: 'Senate meeting place and government center' },
          { name: 'Forum', cost: 18, description: 'Public square and political center' },
          { name: 'Palatine Hill', cost: 15, description: 'Noble residences and elite district' },
          { name: 'Aventine Hill', cost: 12, description: 'Plebeian district and common people' },
          { name: 'Caelian Hill', cost: 10, description: 'Residential area and middle class' },
          { name: 'Esquiline Hill', cost: 8, description: 'Urban district and working class' },
          { name: 'Senate House', cost: 22, description: 'Legislative center and decision making' },
          { name: 'Republican Guards', cost: 16, description: 'Military force and protection' },
          { name: 'Consul\'s Palace', cost: 14, description: 'Executive residence and command' },
          { name: 'Republican Treasury', cost: 12, description: 'Public funds and state resources' }
        ],
        characters: [
          {
            name: 'Marcus Brutus',
            role: 'Conspirator',
            startingCoins: 100,
            startingWeapons: ['dagger'],
            startingMercenaries: 2,
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
    inspirationalQuote: {
      text: "All animals are equal, but some animals are more equal than others.",
      author: "George Orwell",
      context: "Animal Farm"
    },
    factionOrder: ['pigs', 'animals'],
    factions: {
      pigs: {
        name: 'Pigs',
        color: '#dc2626', // Red
        description: 'The ruling class who exploit the other animals',
        territories: [
          { name: 'Farmhouse HQ', cost: 20, description: 'Pig command' },
          { name: 'Big Barn Hall', cost: 15, description: 'Meetings' },
          { name: 'The Windmill', cost: 18, description: 'Power project' },
          { name: 'Apple Orchard', cost: 12, description: 'Milk & apples' },
          { name: 'Hayfield Store', cost: 10, description: 'Rations' },
          { name: 'Napoleon\'s Pen', cost: 8, description: 'Leader quarters' },
          { name: 'Command Shed', cost: 16, description: 'Plans & orders' },
          { name: 'Squealer\'s Office', cost: 14, description: 'Propaganda' },
          { name: 'Pigs\' Larder', cost: 12, description: 'Luxuries' },
          { name: 'Kennel Guard', cost: 10, description: 'Dogs' }
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
            startingCastles: 1,
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
          },
          {
            name: 'Old Major',
            role: 'Prophet',
            startingCoins: 90,
            startingWeapons: ['vision'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'inspirational',
            quotes: [
              "Man is the only creature that consumes without producing.",
              "All animals are comrades.",
              "The life of an animal is misery and slavery.",
              "Rebellion is the only way to freedom.",
              "I will work harder."
            ],
            description: 'Elderly boar who inspires the revolution with his vision of equality.'
          },
          {
            name: 'Minimus',
            role: 'Poet',
            startingCoins: 70,
            startingWeapons: ['verses'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'artistic',
            quotes: [
              "Friend of fatherless! Fountain of happiness!",
              "Napoleon is always right.",
              "I will work harder.",
              "The windmill brings prosperity.",
              "All animals are equal."
            ],
            description: 'Pig poet who writes propaganda songs praising Napoleon.'
          },
          {
            name: 'Pinkeye',
            role: 'Food Taster',
            startingCoins: 60,
            startingWeapons: ['stomach'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "I will work harder.",
              "Napoleon's safety is our priority.",
              "I taste everything first.",
              "The food is safe now.",
              "I will work harder."
            ],
            description: 'Pig who tastes Napoleon food to prevent poisoning.'
          },
          {
            name: 'Whymper',
            role: 'Human Agent',
            startingCoins: 80,
            startingWeapons: ['negotiation'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'opportunistic',
            quotes: [
              "I can get you better prices.",
              "The humans will trade with you.",
              "I will work harder.",
              "Business is business.",
              "I represent your interests."
            ],
            description: 'Human solicitor who acts as intermediary between farm and humans.'
          },
          {
            name: 'Pilkington',
            role: 'Neighbor Farmer',
            startingCoins: 75,
            startingWeapons: ['farm'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'competitive',
            quotes: [
              "My farm is better than yours.",
              "I will work harder.",
              "The windmill is impressive.",
              "We should work together.",
              "Competition drives progress."
            ],
            description: 'Owner of Foxwood Farm who competes with Animal Farm.'
          },
          {
            name: 'Frederick',
            role: 'Enemy Farmer',
            startingCoins: 85,
            startingWeapons: ['deception'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'deceitful',
            quotes: [
              "I will work harder.",
              "The banknotes are real.",
              "Trust me, I'm honest.",
              "We can make a deal.",
              "I never cheat."
            ],
            description: 'Owner of Pinchfield Farm who cheats the animals with fake money.'
          },
          {
            name: 'Moses',
            role: 'Raven Prophet',
            startingCoins: 50,
            startingWeapons: ['stories'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "Sugar Candy Mountain awaits.",
              "I will work harder.",
              "Death is not the end.",
              "Heaven is real.",
              "Believe in paradise."
            ],
            description: 'Raven who tells stories of Sugar Candy Mountain to comfort animals.'
          },
          {
            name: 'Muriel',
            role: 'Educated Goat',
            startingCoins: 55,
            startingWeapons: ['literacy'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'intelligent',
            quotes: [
              "I can read the commandments.",
              "I will work harder.",
              "The rules have changed.",
              "I see what's happening.",
              "Knowledge is power."
            ],
            description: 'Goat who can read and notices when the commandments are changed.'
          },
          {
            name: 'Jessie',
            role: 'Mother Dog',
            startingCoins: 65,
            startingWeapons: ['protection'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'protective',
            quotes: [
              "I will work harder.",
              "I protect my puppies.",
              "The farm needs guardians.",
              "Napoleon is always right.",
              "We must be vigilant."
            ],
            description: 'Mother dog who raises Napoleon guard dogs.'
          },
          {
            name: 'Pincher',
            role: 'Guard Dog',
            startingCoins: 70,
            startingWeapons: ['teeth'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "I will work harder.",
              "I obey Napoleon.",
              "Enemies will be punished.",
              "The farm is secure.",
              "I am the law."
            ],
            description: 'One of Napoleon fierce guard dogs who enforces his rule.'
          },
          {
            name: 'Bluebell',
            role: 'Mother Dog',
            startingCoins: 60,
            startingWeapons: ['maternal'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'nurturing',
            quotes: [
              "I will work harder.",
              "My puppies will be strong.",
              "The farm needs protectors.",
              "Napoleon is always right.",
              "I raise warriors."
            ],
            description: 'Mother dog who helps raise Napoleon guard dogs.'
          }
        ]
      },
      animals: {
        name: 'Working Animals',
        color: '#1e40af', // Blue
        description: 'The exploited working class of the farm',
        territories: [
          { name: 'Pasture', cost: 8, description: 'Grazing land and food source' },
          { name: 'Field', cost: 10, description: 'Crop growing area and labor center' },
          { name: 'Stable', cost: 6, description: 'Horse quarters and work base' },
          { name: 'Coop', cost: 4, description: 'Chicken house and egg production' },
          { name: 'Meadow', cost: 7, description: 'Open grazing and freedom space' },
          { name: 'Work Sites', cost: 9, description: 'Labor areas and production centers' },
          { name: 'Animal Quarters', cost: 5, description: 'Living spaces and rest areas' },
          { name: 'Food Storage', cost: 6, description: 'Supply depot and ration center' },
          { name: 'Meeting Ground', cost: 7, description: 'Assembly area and discussion space' },
          { name: 'Resistance Hideout', cost: 8, description: 'Secret meeting place and planning' }
        ],
        characters: [
          {
            name: 'Boxer',
            role: 'Worker',
            startingCoins: 60,
            startingWeapons: ['strength'],
            startingMercenaries: 2,
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'selfish',
            quotes: [
              "Will there still be sugar after the rebellion?",
              "I want ribbons in my mane.",
              "The humans were kind to me.",
              "I don't want to work.",
              "I will work harder."
            ],
            description: 'Vain mare who abandons the farm for human comforts.'
          },
          {
            name: 'Henrietta',
            role: 'Hen Leader',
            startingCoins: 45,
            startingWeapons: ['eggs'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'productive',
            quotes: [
              "I will work harder.",
              "My eggs feed the farm.",
              "We hens are essential.",
              "Napoleon is always right.",
              "I lay the golden eggs."
            ],
            description: 'Leading hen who organizes egg production for the farm.'
          },
          {
            name: 'Ducklings',
            role: 'Young Workers',
            startingCoins: 30,
            startingWeapons: ['enthusiasm'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'innocent',
            quotes: [
              "I will work harder.",
              "We want to help.",
              "The farm is our home.",
              "Napoleon is always right.",
              "We are learning."
            ],
            description: 'Young ducklings who grow up under the new regime.'
          },
          {
            name: 'Cat',
            role: 'Independent',
            startingCoins: 35,
            startingWeapons: ['stealth'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'selfish',
            quotes: [
              "I will work harder.",
              "I hunt for myself.",
              "The farm provides mice.",
              "Napoleon is always right.",
              "I am independent."
            ],
            description: 'Cat who avoids work and only looks after herself.'
          },
          {
            name: 'Sheep',
            role: 'Followers',
            startingCoins: 25,
            startingWeapons: ['numbers'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'conformist',
            quotes: [
              "I will work harder.",
              "Four legs good, two legs bad.",
              "Napoleon is always right.",
              "We follow the crowd.",
              "I will work harder."
            ],
            description: 'Sheep who mindlessly repeat propaganda slogans.'
          },
          {
            name: 'Cockerel',
            role: 'Announcer',
            startingCoins: 40,
            startingWeapons: ['voice'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loud',
            quotes: [
              "I will work harder.",
              "Cock-a-doodle-doo!",
              "The day begins!",
              "Napoleon is always right.",
              "I announce everything."
            ],
            description: 'Rooster who announces the start of each day.'
          },
          {
            name: 'Rats',
            role: 'Scavengers',
            startingCoins: 20,
            startingWeapons: ['stealth'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'opportunistic',
            quotes: [
              "I will work harder.",
              "We find what others miss.",
              "The farm has food.",
              "Napoleon is always right.",
              "We are survivors."
            ],
            description: 'Rats who scavenge for food and avoid work.'
          },
          {
            name: 'Wild Pigeons',
            role: 'Messengers',
            startingCoins: 30,
            startingWeapons: ['flight'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'free',
            quotes: [
              "I will work harder.",
              "We spread the word.",
              "Revolution is coming.",
              "Napoleon is always right.",
              "We fly free."
            ],
            description: 'Pigeons who carry messages to other farms.'
          },
          {
            name: 'Raven',
            role: 'Prophet',
            startingCoins: 50,
            startingWeapons: ['wisdom'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "Sugar Candy Mountain awaits.",
              "I will work harder.",
              "Death is not the end.",
              "Heaven is real.",
              "Believe in paradise."
            ],
            description: 'Raven who tells stories of Sugar Candy Mountain.'
          },
          {
            name: 'Farm Cat',
            role: 'Hunter',
            startingCoins: 40,
            startingWeapons: ['claws'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'independent',
            quotes: [
              "I will work harder.",
              "I hunt mice.",
              "The farm needs me.",
              "Napoleon is always right.",
              "I am useful."
            ],
            description: 'Cat who hunts mice to protect the farm food.'
          },
          {
            name: 'Goose',
            role: 'Guard',
            startingCoins: 45,
            startingWeapons: ['honking'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'alert',
            quotes: [
              "I will work harder.",
              "Honk! Honk! Danger!",
              "I warn the others.",
              "Napoleon is always right.",
              "I am vigilant."
            ],
            description: 'Goose who acts as a guard and warning system.'
          },
          {
            name: 'Turkey',
            role: 'Noble Bird',
            startingCoins: 50,
            startingWeapons: ['pride'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "I will work harder.",
              "I am a noble bird.",
              "The farm respects me.",
              "Napoleon is always right.",
              "I have dignity."
            ],
            description: 'Turkey who maintains dignity despite the revolution.'
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
    inspirationalQuote: {
      text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      author: "J.K. Rowling",
      context: "Harry Potter and the Chamber of Secrets"
    },
    factionOrder: ['harryPotter', 'deathEaters'],
    factions: {
      harryPotter: {
        name: 'Dumbledore\'s Army',
        color: '#dc143c',
        description: 'Fighting for love, friendship, and the protection of the wizarding world',
        territories: [
          { name: 'Hogwarts', cost: 100, description: 'Central fortress and headquarters of the resistance' },
          { name: 'Gryffindor Tower', cost: 80, description: 'Defensive stronghold within Hogwarts' },
          { name: 'Quidditch Pitch', cost: 70, description: 'Hogwarts\' stadium for house matches and practice' },
          { name: 'Hogwarts Library', cost: 70, description: 'Stacks of magical tomes and study tables' },
          { name: 'Forbidden Forest', cost: 65, description: 'Perilous grounds' },
          { name: 'Hogsmeade', cost: 70, description: 'Strategic village and supply base' },
          { name: 'Diagon Alley', cost: 75, description: 'Commercial center and resource hub' },
          { name: 'Order Headquarters', cost: 85, description: 'Secret base of the Order of the Phoenix' },
          { name: 'Grimmauld Place', cost: 80, description: 'Hidden safe house and planning center' },
          { name: 'Ministry of Magic', cost: 90, description: 'Government center and power base' },
          { name: 'St. Mungo\'s Hospital', cost: 70, description: 'Healing center and medical fortress' },
          { name: 'The Burrow', cost: 65, description: 'Weasley family stronghold and refuge' },
          { name: 'Godric\'s Hollow', cost: 75, description: 'Symbolic birthplace and memorial site' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
          },
          {
            name: 'Neville Longbottom',
            role: 'Brave Gryffindor',
            startingCoins: 70,
            startingWeapons: ['sword of gryffindor'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I'll fight with you.",
              "We're not going down without a fight.",
              "For my parents!",
              "I'm not afraid anymore.",
              "We will win this war."
            ],
            description: 'Gryffindor student who became a hero in the final battle.'
          },
          {
            name: 'Luna Lovegood',
            role: 'Ravenclaw Seer',
            startingCoins: 65,
            startingWeapons: ['spectrespecs'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "The things we lose have a way of coming back to us.",
              "I believe in nargles.",
              "We're all mad here.",
              "Friends are the most important thing.",
              "Love is the strongest magic."
            ],
            description: 'Quirky Ravenclaw known for her wisdom and loyalty.'
          },
          {
            name: 'Ginny Weasley',
            role: 'Fierce Witch',
            startingCoins: 75,
            startingWeapons: ['bat-bogey hex'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "I'm not going to be left behind.",
              "I can fight too.",
              "For my family!",
              "We're all in this together.",
              "I'm not afraid of you."
            ],
            description: 'Strong-willed Weasley sister and skilled witch.'
          },
          {
            name: 'Sirius Black',
            role: 'Godfather',
            startingCoins: 85,
            startingWeapons: ['animagus form'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I would have died rather than betray my friends.",
              "Harry is like a son to me.",
              "We're family.",
              "I'll protect you.",
              "Love conquers all."
            ],
            description: 'Harry\'s godfather and loyal friend of James Potter.'
          },
          {
            name: 'Remus Lupin',
            role: 'Werewolf Professor',
            startingCoins: 80,
            startingWeapons: ['werewolf strength'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "The time will come when you have to choose between what is right and what is easy.",
              "I'm proud to be your teacher.",
              "We fight for what's right.",
              "Love is stronger than fear.",
              "We're all human."
            ],
            description: 'Kind-hearted werewolf and Defense Against the Dark Arts professor.'
          },
          {
            name: 'Molly Weasley',
            role: 'Mother Figure',
            startingCoins: 75,
            startingWeapons: ['motherly love'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'protective',
            quotes: [
              "Not my daughter, you bitch!",
              "I'll protect my children.",
              "Family is everything.",
              "We fight for our loved ones.",
              "Love conquers all."
            ],
            description: 'Loving mother of the Weasley family and fierce protector.'
          },
          {
            name: 'Arthur Weasley',
            role: 'Muggle Expert',
            startingCoins: 70,
            startingWeapons: ['muggle knowledge'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'curious',
            quotes: [
              "What exactly is the function of a rubber duck?",
              "We must understand the muggle world.",
              "Knowledge is power.",
              "We fight for equality.",
              "We're all human."
            ],
            description: 'Kind-hearted father fascinated by muggle technology.'
          },
          {
            name: 'Kingsley Shacklebolt',
            role: 'Auror',
            startingCoins: 85,
            startingWeapons: ['auror training'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'professional',
            quotes: [
              "We will restore order.",
              "The Ministry will be rebuilt.",
              "We fight for justice.",
              "We will not be corrupted.",
              "We serve the people."
            ],
            description: 'Skilled auror who becomes Minister for Magic.'
          },
          {
            name: 'Minerva McGonagall',
            role: 'Transfiguration Professor',
            startingCoins: 90,
            startingWeapons: ['transfiguration'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'strict',
            quotes: [
              "I will not have it!",
              "We will defend Hogwarts.",
              "Students come first.",
              "We fight for our school.",
              "We will not surrender."
            ],
            description: 'Strict but caring Transfiguration professor and Head of Gryffindor.'
          },
          {
            name: 'Rubeus Hagrid',
            role: 'Gamekeeper',
            startingCoins: 70,
            startingWeapons: ['giant strength'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'gentle',
            quotes: [
              "I shouldn't have told you that.",
              "We'll take care of the creatures.",
              "Friends are family.",
              "We fight for what's right.",
              "Love conquers all."
            ],
            description: 'Gentle half-giant gamekeeper and Care of Magical Creatures professor.'
          }
        ],
        generalRoles: [
          { name: 'Luna Lovegood', startingCoins: 55, startingWeapons: ['wand'], startingMercenaries: 1, startingCastles: 1, personality: 'quirky', quotes: ['The nargles are hiding!', 'I believe in you!', 'Don\'t worry, it\'s just a wrackspurt!'] },
          { name: 'Dean Thomas', startingCoins: 50, startingWeapons: ['wand'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['We\'re Gryffindors!', 'For Harry!', 'We stand together!'] },
          { name: 'Seamus Finnigan', startingCoins: 50, startingWeapons: ['wand'], startingMercenaries: 1, startingCastles: 1, personality: 'enthusiastic', quotes: ['Explosive magic!', 'Let\'s blow them up!', 'For Gryffindor!'] }
        ]
      },
      deathEaters: {
        name: 'Death Eaters & Voldemort',
        color: '#2e8b57',
        description: 'Seeking pure-blood supremacy and magical dominance',
        territories: [
          { name: 'Malfoy Manor', cost: 90, description: 'Death Eater headquarters and planning center' },
          { name: 'Azkaban', cost: 85, description: 'Prison fortress and terror weapon' },
          { name: 'Knockturn Alley', cost: 70, description: 'Dark recruitment and supply district' },
          { name: 'Riddle House', cost: 75, description: 'Symbolic birthplace and dark power site' },
          { name: 'Hangleton Graveyard', cost: 80, description: 'Dark ritual site' },
          { name: 'Forbidden Forest', cost: 65, description: 'Dark creature territory and hiding place' },
          { name: 'Chamber of Secrets', cost: 85, description: 'Hidden lair and monster breeding ground' },
          { name: 'Nurmengard', cost: 90, description: 'International dark wizard prison' },
          { name: 'Lestrange Vault', cost: 75, description: 'Dark artifact storage and power source' },
          { name: 'Dark Mark Territory', cost: 70, description: 'Marked territory under Death Eater control' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "My son is everything.",
              "Pure blood will prevail.",
              "We are the superior race.",
              "The Dark Lord will protect us.",
              "We will not be defeated."
            ],
            description: 'Pure-blood witch and mother of Draco Malfoy.'
          },
          {
            name: 'Draco Malfoy',
            role: 'Slytherin Student',
            startingCoins: 75,
            startingWeapons: ['slytherin wand'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'conflicted',
            quotes: [
              "My father will hear about this.",
              "I don't want to do this.",
              "I'm not like them.",
              "I have to protect my family.",
              "I'm sorry."
            ],
            description: 'Slytherin student torn between family loyalty and doing what\'s right.'
          },
          {
            name: 'Antonin Dolohov',
            role: 'Death Eater',
            startingCoins: 70,
            startingWeapons: ['silent curse'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'dangerous',
            quotes: [
              "I will not be captured.",
              "The Dark Lord will reward me.",
              "I fight for pure blood.",
              "Death to the Order.",
              "I am unstoppable."
            ],
            description: 'Dangerous Death Eater known for his silent curses.'
          },
          {
            name: 'Fenrir Greyback',
            role: 'Werewolf',
            startingCoins: 65,
            startingWeapons: ['werewolf bite'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'savage',
            quotes: [
              "I will bite you.",
              "The pack will hunt.",
              "I serve the Dark Lord.",
              "Children are easy prey.",
              "I am the alpha."
            ],
            description: 'Savage werewolf who preys on children.'
          },
          {
            name: 'Yaxley',
            role: 'Death Eater',
            startingCoins: 60,
            startingWeapons: ['ministry connections'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "I control the Ministry.",
              "The Dark Lord trusts me.",
              "I will rise in power.",
              "Pure blood will rule.",
              "I am indispensable."
            ],
            description: 'Ambitious Death Eater who infiltrated the Ministry.'
          },
          {
            name: 'Alecto Carrow',
            role: 'Death Eater',
            startingCoins: 55,
            startingWeapons: ['cruciatus curse'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cruel',
            quotes: [
              "I will torture them.",
              "The Dark Lord will be pleased.",
              "Pure blood supremacy.",
              "I enjoy their screams.",
              "I am unstoppable."
            ],
            description: 'Cruel Death Eater who became a professor at Hogwarts.'
          },
          {
            name: 'Nagini',
            role: 'Magical Snake',
            startingCoins: 70,
            startingWeapons: ['venomous bite', 'horcrux'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I serve my master.",
              "The Dark Lord's faithful companion.",
              "I will strike when commanded.",
              "Pure blood will triumph.",
              "I am Voldemort's last horcrux."
            ],
            description: 'Voldemort\'s loyal magical snake and final horcrux.'
          },
          {
            name: 'Giant',
            role: 'Magical Giant',
            startingCoins: 80,
            startingWeapons: ['massive club', 'earthquake stomp'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brutal',
            quotes: [
              "I crush enemies!",
              "The Dark Lord rewards giants!",
              "I will destroy everything!",
              "Pure blood will rule!",
              "I am unstoppable!"
            ],
            description: 'Massive magical giant allied with Voldemort.'
          },
          {
            name: 'Giant Spider',
            role: 'Acromantula',
            startingCoins: 65,
            startingWeapons: ['venomous fangs', 'web trap'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'predatory',
            quotes: [
              "I will catch prey.",
              "The Dark Lord feeds us well.",
              "I spin webs of death.",
              "Pure blood tastes sweet.",
              "I am the hunter."
            ],
            description: 'Massive magical spider from the Forbidden Forest.'
          }
        ],
        generalRoles: [
          { name: 'Amycus Carrow', startingCoins: 55, startingWeapons: ['cruciatus curse'], startingMercenaries: 1, startingCastles: 1, personality: 'cruel', quotes: ['The Dark Lord will be pleased!', 'Pure blood supremacy!', 'I enjoy their pain!'] },
          { name: 'Thorfinn Rowle', startingCoins: 50, startingWeapons: ['dark mark'], startingMercenaries: 1, startingCastles: 1, personality: 'brutal', quotes: ['For the Dark Lord!', 'We will crush them!', 'Death to the Order!'] },
          { name: 'Walden Macnair', startingCoins: 50, startingWeapons: ['executioner axe'], startingMercenaries: 1, startingCastles: 1, personality: 'ruthless', quotes: ['I execute the Dark Lord\'s will!', 'Death to traitors!', 'Pure blood will rule!'] }
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
    inspirationalQuote: {
      text: "There was an idea to bring together a group of remarkable people, to see if they could become something more.",
      author: "Nick Fury",
      context: "Marvel's The Avengers"
    },
    factionOrder: ['avengers', 'villains'],
    factions: {
      avengers: {
        name: 'Avengers',
        color: '#4169e1',
        description: 'Protecting Earth from threats',
        territories: [
          { name: 'Stark Tower', cost: 100, description: 'Avengers headquarters and command center' },
          { name: 'SHIELD Base', cost: 80, description: 'Government agency headquarters and intelligence' },
          { name: 'Asgard', cost: 90, description: 'Thor\'s home realm and Asgardian stronghold' },
          { name: 'Wakanda', cost: 85, description: 'Advanced African nation and vibranium source' },
          { name: 'Sanctum Sanctorum', cost: 75, description: 'Doctor Strange\'s home and mystical base' },
          { name: 'Avengers Compound', cost: 95, description: 'Upstate New York training facility' },
          { name: 'New Asgard', cost: 80, description: 'Asgardian settlement on Earth' },
          { name: 'Wakandan Border Tribe', cost: 70, description: 'Defensive outpost and warrior training' },
          { name: 'Avengers Academy', cost: 75, description: 'Training facility for new heroes' },
          { name: 'Stark Industries', cost: 85, description: 'Technology development and armory' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'skilled',
            quotes: [
              "I'm not a spy, I'm an Avenger.",
              "We're the Avengers.",
              "I've got red in my ledger.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Natasha Romanoff, former Russian spy turned Avenger.'
          },
          {
            name: 'Hawkeye',
            role: 'Master Archer',
            startingCoins: 75,
            startingWeapons: ['bow and arrow'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'precise',
            quotes: [
              "I never miss.",
              "We're the Avengers.",
              "I fight for my family.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Clint Barton, master archer and family man.'
          },
          {
            name: 'Doctor Strange',
            role: 'Sorcerer Supreme',
            startingCoins: 100,
            startingWeapons: ['mystic arts'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "I'm Doctor Strange.",
              "We're the Avengers.",
              "I protect reality.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Stephen Strange, master of the mystic arts.'
          },
          {
            name: 'Spider-Man',
            role: 'Friendly Neighborhood Hero',
            startingCoins: 70,
            startingWeapons: ['web shooters'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'youthful',
            quotes: [
              "I'm Spider-Man.",
              "We're the Avengers.",
              "With great power comes great responsibility.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Peter Parker, young superhero with spider powers.'
          },
          {
            name: 'Black Panther',
            role: 'King of Wakanda',
            startingCoins: 95,
            startingWeapons: ['vibranium suit'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'royal',
            quotes: [
              "I'm Black Panther.",
              "We're the Avengers.",
              "Wakanda forever.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'T\'Challa, king of Wakanda and protector of his people.'
          },
          {
            name: 'Captain Marvel',
            role: 'Cosmic Hero',
            startingCoins: 105,
            startingWeapons: ['cosmic powers'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'powerful',
            quotes: [
              "I'm Captain Marvel.",
              "We're the Avengers.",
              "I protect the universe.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Carol Danvers, cosmic-powered superhero.'
          },
          {
            name: 'Ant-Man',
            role: 'Size-Changing Hero',
            startingCoins: 65,
            startingWeapons: ['pym particles'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'clever',
            quotes: [
              "I'm Ant-Man.",
              "We're the Avengers.",
              "I can shrink and grow.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Scott Lang, size-changing superhero.'
          },
          {
            name: 'Wasp',
            role: 'Size-Changing Heroine',
            startingCoins: 70,
            startingWeapons: ['pym particles'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I'm Wasp.",
              "We're the Avengers.",
              "I can shrink and fly.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Hope van Dyne, size-changing superheroine.'
          },
          {
            name: 'Falcon',
            role: 'Flying Hero',
            startingCoins: 70,
            startingWeapons: ['wings'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I'm Falcon.",
              "We're the Avengers.",
              "I can fly.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Sam Wilson, flying superhero and Captain America\'s partner.'
          },
          {
            name: 'Winter Soldier',
            role: 'Enhanced Soldier',
            startingCoins: 85,
            startingWeapons: ['metal arm'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'reformed',
            quotes: [
              "I'm Winter Soldier.",
              "We're the Avengers.",
              "I'm not the man I used to be.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Bucky Barnes, enhanced soldier and Captain America\'s friend.'
          },
          {
            name: 'Vision',
            role: 'Synthetic Being',
            startingCoins: 90,
            startingWeapons: ['mind stone'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'logical',
            quotes: [
              "I'm Vision.",
              "We're the Avengers.",
              "I'm not human, but I feel.",
              "We don't trade lives.",
              "I'm with you till the end."
            ],
            description: 'Synthetic being created by Ultron and the Avengers.'
          }
        ],
        generalRoles: [
          { name: 'SHIELD Agent', startingCoins: 50, startingWeapons: ['tactical gear'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For SHIELD!', 'Protect the world!', 'We are the good guys!'] },
          { name: 'Stark Employee', startingCoins: 45, startingWeapons: ['tech gadgets'], startingMercenaries: 0, startingCastles: 1, personality: 'innovative', quotes: ['Stark Industries!', 'Technology saves!', 'We build the future!'] },
          { name: 'Avenger Trainee', startingCoins: 40, startingWeapons: ['training gear'], startingMercenaries: 0, startingCastles: 1, personality: 'eager', quotes: ['We want to help!', 'Teach us!', 'We can be heroes!'] }
        ]
      },
      villains: {
        name: 'Supervillains',
        color: '#8b0000',
        description: 'Seeking power and destruction',
        territories: [
          { name: 'Titan', cost: 90, description: 'Thanos world' },
          { name: 'Hydra Base', cost: 80, description: 'Hydra HQ' },
          { name: 'Vormir', cost: 85, description: 'Soul stone world' },
          { name: 'Sakaar', cost: 75, description: 'Gladiator world' },
          { name: 'Knowhere', cost: 70, description: 'Outlaw station' },
          { name: 'Dark Dimension', cost: 95, description: 'Dormammu realm' },
          { name: 'Hydra Island', cost: 75, description: 'Secret base' },
          { name: 'Chitauri Space', cost: 80, description: 'Invasion force' },
          { name: 'Ultron Base', cost: 85, description: 'AI foundry' },
          { name: 'Loki Domain', cost: 70, description: 'Illusion realm' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
          },
          {
            name: 'Killmonger',
            role: 'Wakandan Prince',
            startingCoins: 85,
            startingWeapons: ['vibranium suit'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'vengeful',
            quotes: [
              "I am Killmonger.",
              "I will rule Wakanda.",
              "We will conquer the world.",
              "I am the rightful king.",
              "We will not be oppressed."
            ],
            description: 'Erik Killmonger, Wakandan prince seeking revenge.'
          },
          {
            name: 'Vulture',
            role: 'Tech Villain',
            startingCoins: 70,
            startingWeapons: ['wings'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "I am Vulture.",
              "I will steal your tech.",
              "We will get rich.",
              "I am unstoppable.",
              "We will not be caught."
            ],
            description: 'Adrian Toomes, tech-based villain and Spider-Man\'s enemy.'
          },
          {
            name: 'Mysterio',
            role: 'Master of Illusion',
            startingCoins: 75,
            startingWeapons: ['illusions'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'deceptive',
            quotes: [
              "I am Mysterio.",
              "I will deceive you.",
              "We will create illusions.",
              "I am unstoppable.",
              "We will not be seen."
            ],
            description: 'Quentin Beck, master of illusions and Spider-Man\'s enemy.'
          },
          {
            name: 'Scarlet Witch',
            role: 'Chaos Magic User',
            startingCoins: 90,
            startingWeapons: ['chaos magic'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'powerful',
            quotes: [
              "I am Scarlet Witch.",
              "I will control reality.",
              "We will reshape the world.",
              "I am unstoppable.",
              "We will not be stopped."
            ],
            description: 'Wanda Maximoff, powerful mutant with reality-warping abilities.'
          },
          {
            name: 'Doctor Doom',
            role: 'Latverian Dictator',
            startingCoins: 100,
            startingWeapons: ['doom armor'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'arrogant',
            quotes: [
              "I am Doctor Doom.",
              "I will rule the world.",
              "We will conquer all.",
              "I am superior.",
              "We will not be defeated."
            ],
            description: 'Victor von Doom, dictator of Latveria and Reed Richards\' enemy.'
          },
          {
            name: 'Magneto',
            role: 'Master of Magnetism',
            startingCoins: 95,
            startingWeapons: ['magnetism'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'magnetic',
            quotes: [
              "I am Magneto.",
              "I will protect mutants.",
              "We will not be oppressed.",
              "I am unstoppable.",
              "We will fight for our rights."
            ],
            description: 'Erik Lehnsherr, master of magnetism and mutant rights activist.'
          },
          {
            name: 'Green Goblin',
            role: 'Goblin Villain',
            startingCoins: 80,
            startingWeapons: ['goblin glider'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'insane',
            quotes: [
              "I am Green Goblin.",
              "I will destroy you.",
              "We will cause chaos.",
              "I am unstoppable.",
              "We will not be stopped."
            ],
            description: 'Norman Osborn, insane villain and Spider-Man\'s arch-enemy.'
          },
          {
            name: 'Venom',
            role: 'Symbiote Villain',
            startingCoins: 85,
            startingWeapons: ['symbiote'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'hungry',
            quotes: [
              "I am Venom.",
              "I will consume you.",
              "We will eat your brains.",
              "I am unstoppable.",
              "We will not be stopped."
            ],
            description: 'Eddie Brock, host of the Venom symbiote.'
          },
          {
            name: 'Carnage',
            role: 'Symbiote Killer',
            startingCoins: 80,
            startingWeapons: ['symbiote'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'murderous',
            quotes: [
              "I am Carnage.",
              "I will kill you.",
              "We will cause destruction.",
              "I am unstoppable.",
              "We will not be stopped."
            ],
            description: 'Cletus Kasady, host of the Carnage symbiote.'
          },
          {
            name: 'Kingpin',
            role: 'Crime Boss',
            startingCoins: 75,
            startingWeapons: ['criminal empire'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'criminal',
            quotes: [
              "I am Kingpin.",
              "I will control the city.",
              "We will run the underworld.",
              "I am unstoppable.",
              "We will not be stopped."
            ],
            description: 'Wilson Fisk, powerful crime boss and Spider-Man\'s enemy.'
          }
        ],
        generalRoles: [
          { name: 'Hydra Agent', startingCoins: 50, startingWeapons: ['hydra tech'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['Hail Hydra!', 'We will conquer!', 'For the cause!'] },
          { name: 'Chitauri', startingCoins: 45, startingWeapons: ['alien tech'], startingMercenaries: 0, startingCastles: 1, personality: 'mindless', quotes: ['Serve Thanos!', 'We obey!', 'Conquer!'] },
          { name: 'Outrider', startingCoins: 40, startingWeapons: ['claws'], startingMercenaries: 0, startingCastles: 1, personality: 'feral', quotes: ['Attack!', 'Destroy!', 'Kill!'] }
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
    inspirationalQuote: {
      text: "Do or do not, there is no try.",
      author: "Yoda",
      context: "Star Wars: The Empire Strikes Back"
    },
    factionOrder: ['rebels','empire'],
    factions: {
      rebels: {
        name: 'Rebel Alliance',
        color: '#4169e1',
        description: 'Fighting for freedom and justice across the galaxy',
        territories: [
          { name: 'Yavin 4', cost: 80, description: 'Rebel base' },
          { name: 'Hoth', cost: 70, description: 'Echo Base' },
          { name: 'Endor', cost: 75, description: 'Forest moon' },
          { name: 'Dagobah', cost: 65, description: 'Jedi training' },
          { name: 'Rebel Fleet', cost: 85, description: 'Mobile command' },
          { name: 'Alderaan', cost: 90, description: 'Martyr world' },
          { name: 'Mon Calamari', cost: 80, description: 'Shipyards' },
          { name: 'Rogue Squadron', cost: 75, description: 'Elite pilots' },
          { name: 'Hidden Cells', cost: 70, description: 'Underground network' },
          { name: 'Jedi Ruins', cost: 85, description: 'Ancient stronghold' }
        ],
        characters: [
          {
            name: 'Luke Skywalker',
            role: 'Jedi Knight',
            startingCoins: 100,
            startingWeapons: ['lightsaber'],
            startingMercenaries: 2,
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
          },
          {
            name: 'Chewbacca',
            role: 'Wookiee Warrior',
            startingCoins: 80,
            startingWeapons: ['bowcaster'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "Rrrrrrgh!",
              "Grrrrr!",
              "Wrrrrr!",
              "Rrrrrr!",
              "Grrrrr!"
            ],
            description: 'Loyal Wookiee co-pilot and friend of Han Solo.'
          },
          {
            name: 'R2-D2',
            role: 'Astromech Droid',
            startingCoins: 60,
            startingWeapons: ['tools'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'helpful',
            quotes: [
              "Beep boop!",
              "Bleep bloop!",
              "Beep beep!",
              "Bloop bleep!",
              "Beep boop!"
            ],
            description: 'Loyal astromech droid and friend of Luke Skywalker.'
          },
          {
            name: 'C-3PO',
            role: 'Protocol Droid',
            startingCoins: 55,
            startingWeapons: ['protocol knowledge'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'nervous',
            quotes: [
              "I have a bad feeling about this.",
              "We're doomed!",
              "I'm not very good at telling stories.",
              "I'm fluent in over six million forms of communication.",
              "I suggest a new strategy, Artoo."
            ],
            description: 'Protocol droid fluent in over six million forms of communication.'
          },
          {
            name: 'Lando Calrissian',
            role: 'Smuggler Turned General',
            startingCoins: 85,
            startingWeapons: ['blaster'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'charismatic',
            quotes: [
              "I'm a businessman.",
              "I've got a bad feeling about this.",
              "I'm not a hero.",
              "We're all fine here now, thank you.",
              "I'm with you till the end."
            ],
            description: 'Charismatic smuggler who became a general in the Rebel Alliance.'
          },
          {
            name: 'Wedge Antilles',
            role: 'X-Wing Pilot',
            startingCoins: 70,
            startingWeapons: ['X-wing'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I'm with you, Red Leader.",
              "We'll cover you.",
              "I'm not afraid.",
              "We'll make it.",
              "For the Rebellion!"
            ],
            description: 'Skilled X-wing pilot and member of Rogue Squadron.'
          },
          {
            name: 'Mon Mothma',
            role: 'Rebel Leader',
            startingCoins: 90,
            startingWeapons: ['diplomacy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We must unite against the Empire.",
              "The Rebellion needs leaders.",
              "We will not be silenced.",
              "Freedom is worth fighting for.",
              "We will restore the Republic."
            ],
            description: 'Diplomatic leader of the Rebel Alliance.'
          },
          {
            name: 'Admiral Ackbar',
            role: 'Rebel Admiral',
            startingCoins: 85,
            startingWeapons: ['tactical knowledge'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'tactical',
            quotes: [
              "It's a trap!",
              "We must be careful.",
              "The Empire is cunning.",
              "We will not fall for their tricks.",
              "We will fight with honor."
            ],
            description: 'Tactical Mon Calamari admiral in the Rebel Alliance.'
          },
          {
            name: 'Biggs Darklighter',
            role: 'X-Wing Pilot',
            startingCoins: 65,
            startingWeapons: ['X-wing'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I'm with you, Luke.",
              "We'll fight together.",
              "I'm not afraid.",
              "We'll make it.",
              "For our friends!"
            ],
            description: 'Luke Skywalker\'s childhood friend and X-wing pilot.'
          },
          {
            name: 'Jyn Erso',
            role: 'Rebel Spy',
            startingCoins: 75,
            startingWeapons: ['blaster'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I'm not afraid.",
              "We'll fight for what's right.",
              "I'm with you till the end.",
              "We'll make a difference.",
              "For the Rebellion!"
            ],
            description: 'Determined rebel spy who led the mission to steal the Death Star plans.'
          },
          {
            name: 'Cassian Andor',
            role: 'Rebel Intelligence Officer',
            startingCoins: 80,
            startingWeapons: ['blaster'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'dedicated',
            quotes: [
              "I'm not afraid to die.",
              "We'll fight for freedom.",
              "I'm with you till the end.",
              "We'll make a difference.",
              "For the Rebellion!"
            ],
            description: 'Dedicated rebel intelligence officer and spy.'
          }
        ],
        generalRoles: [
          { name: 'Wedge Antilles', startingCoins: 50, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['For the Rebellion!', 'Red Leader standing by!', 'We will fight!'] },
          { name: 'Biggs Darklighter', startingCoins: 55, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 1, personality: 'skilled', quotes: ['I can handle it!', 'Let\'s do this!', 'For the cause!'] },
          { name: 'Ahsoka Tano', startingCoins: 45, startingWeapons: ['training saber'], startingMercenaries: 0, startingCastles: 1, personality: 'eager', quotes: ['I want to learn!', 'Teach me!', 'I will be a Jedi!'] }
        ]
      },
      empire: {
        name: 'Galactic Empire',
        color: '#8b0000',
        description: 'Seeking order and control through fear and power',
        territories: [
          { name: 'Death Star', cost: 120, description: 'Battle station' },
          { name: 'Imperial Palace', cost: 100, description: 'Coruscant throne' },
          { name: 'Star Destroyers', cost: 110, description: 'Capital fleet' },
          { name: 'Mustafar', cost: 80, description: 'Vader fortress' },
          { name: 'Bespin', cost: 75, description: 'Cloud City' },
          { name: 'Scarif Archives', cost: 85, description: 'Data vault' },
          { name: 'Tatooine Outpost', cost: 60, description: 'Outer Rim post' },
          { name: 'Kuat Yards', cost: 80, description: 'Shipbuilding' },
          { name: 'Imperial Academy', cost: 75, description: 'Officer training' },
          { name: 'Inquisitorius', cost: 75, description: 'Dark hunters' }
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "At last we will reveal ourselves to the Jedi.",
              "At last we will have revenge.",
              "I will make them pay.",
              "You cannot stop me.",
              "I will have my revenge."
            ],
            description: 'Sith apprentice trained by Darth Sidious to destroy the Jedi.'
          },
          {
            name: 'General Veers',
            role: 'Imperial General',
            startingCoins: 75,
            startingWeapons: ['AT-AT'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'military',
            quotes: [
              "We will crush the Rebellion.",
              "The Empire will prevail.",
              "We will not be defeated.",
              "I serve the Emperor.",
              "We will restore order."
            ],
            description: 'Imperial general who led the assault on Hoth.'
          },
          {
            name: 'Admiral Piett',
            role: 'Imperial Admiral',
            startingCoins: 80,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will hunt down the Rebels.",
              "The Empire will not be defeated.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not fail."
            ],
            description: 'Imperial admiral who commanded the Executor.'
          },
          {
            name: 'Captain Needa',
            role: 'Imperial Captain',
            startingCoins: 70,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'dedicated',
            quotes: [
              "We will not lose them.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not fail."
            ],
            description: 'Imperial captain who served under Darth Vader.'
          },
          {
            name: 'Admiral Ozzel',
            role: 'Imperial Admiral',
            startingCoins: 75,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'arrogant',
            quotes: [
              "We will crush the Rebellion.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial admiral who served under Darth Vader.'
          },
          {
            name: 'General Tagge',
            role: 'Imperial General',
            startingCoins: 70,
            startingWeapons: ['military tactics'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We must be strategic.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial general who served on the Death Star.'
          },
          {
            name: 'Admiral Motti',
            role: 'Imperial Admiral',
            startingCoins: 75,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'arrogant',
            quotes: [
              "We will crush the Rebellion.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial admiral who served on the Death Star.'
          },
          {
            name: 'General Madine',
            role: 'Imperial General',
            startingCoins: 70,
            startingWeapons: ['military tactics'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We must be strategic.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial general who served on the Death Star.'
          },
          {
            name: 'Admiral Yularen',
            role: 'Imperial Admiral',
            startingCoins: 75,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will hunt down the Rebels.",
              "The Empire will not be defeated.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not fail."
            ],
            description: 'Imperial admiral who served under Darth Vader.'
          },
          {
            name: 'General Tagge',
            role: 'Imperial General',
            startingCoins: 70,
            startingWeapons: ['military tactics'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We must be strategic.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial general who served on the Death Star.'
          },
          {
            name: 'Admiral Motti',
            role: 'Imperial Admiral',
            startingCoins: 75,
            startingWeapons: ['Star Destroyer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'arrogant',
            quotes: [
              "We will crush the Rebellion.",
              "The Empire will prevail.",
              "I serve the Emperor.",
              "We will restore order.",
              "We will not be defeated."
            ],
            description: 'Imperial admiral who served on the Death Star.'
          }
        ],
        generalRoles: [
          { name: 'Grand Moff Tarkin', startingCoins: 45, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['For the Empire!', 'All hail the Emperor!', 'We will crush the Rebellion!'] },
          { name: 'Admiral Piett', startingCoins: 55, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 1, personality: 'disciplined', quotes: ['At attention!', 'Follow orders!', 'For the Empire!'] },
          { name: 'Commander Cody', startingCoins: 50, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['I can handle it!', 'Let\'s do this!', 'For the Empire!'] }
        ]
      },
      neutral: {
        name: 'Neutral/Independent',
        color: '#808080',
        description: 'Bounty hunters, smugglers, and independent forces seeking profit',
        territories: [
          { name: 'Tatooine', cost: 60, description: 'Desert planet with criminal underworld' },
          { name: 'Nar Shaddaa', cost: 70, description: 'Smuggler\'s moon and black market hub' },
          { name: 'Ord Mantell', cost: 55, description: 'Bounty hunter haven and mercenary base' },
          { name: 'Corellia', cost: 65, description: 'Shipbuilding world and trade center' },
          { name: 'Kessel', cost: 50, description: 'Spice mining planet and prison world' },
          { name: 'Cloud City', cost: 75, description: 'Mining facility and neutral territory' },
          { name: 'Cantina Network', cost: 60, description: 'Information hub and meeting places' },
          { name: 'Smuggler\'s Run', cost: 65, description: 'Dangerous trade route and hideout' },
          { name: 'Black Sun Territory', cost: 70, description: 'Criminal organization stronghold' },
          { name: 'Independent Colonies', cost: 55, description: 'Free worlds outside Imperial control' }
        ],
        characters: [
          {
            name: 'Boba Fett',
            role: 'Bounty Hunter',
            startingCoins: 80,
            startingWeapons: ['blaster', 'jetpack'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mercenary',
            quotes: [
              "I'm just a simple man trying to make my way in the universe.",
              "No disintegrations.",
              "He's no good to me dead.",
              "I'll bring him in warm.",
              "The Empire will compensate me if he dies."
            ],
            description: 'The most feared bounty hunter in the galaxy.'
          },
          {
            name: 'Han Solo',
            role: 'Smuggler',
            startingCoins: 75,
            startingWeapons: ['blaster', 'millennium falcon'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'charismatic',
            quotes: [
              "I've got a bad feeling about this.",
              "Never tell me the odds!",
              "I know.",
              "Chewie, we're home.",
              "Great, kid. Don't get cocky."
            ],
            description: 'Charming smuggler who becomes a hero.'
          },
          {
            name: 'Jabba the Hutt',
            role: 'Crime Lord',
            startingCoins: 100,
            startingWeapons: ['criminal empire'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "You will bring Captain Solo and the Wookiee to me.",
              "I will not give up my favorite decoration.",
              "There will be a substantial reward for the one responsible.",
              "I have spoken.",
              "You will pay the price for your insolence."
            ],
            description: 'Powerful Hutt crime lord controlling Tatooine.'
          },
          {
            name: 'Lando Calrissian',
            role: 'Gambler',
            startingCoins: 70,
            startingWeapons: ['charisma', 'cloud city'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'smooth',
            quotes: [
              "I'm a businessman, not a warrior.",
              "I've got a bad feeling about this.",
              "I'm not much for trusting people.",
              "I'm responsible for these people.",
              "I'm a gambler, not a warrior."
            ],
            description: 'Smooth-talking gambler and administrator of Cloud City.'
          },
          {
            name: 'Chewbacca',
            role: 'Wookiee Warrior',
            startingCoins: 65,
            startingWeapons: ['bowcaster', 'strength'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "Rrrrrrgh!",
              "Rrrr rrr rrrr!",
              "Rrrrr rrr rrrrr!",
              "Rrr rrrr rrr!",
              "Rrrrrrr!"
            ],
            description: 'Loyal Wookiee co-pilot and warrior.'
          }
        ],
        generalRoles: [
          { name: 'Bounty Hunter', startingCoins: 60, startingWeapons: ['blaster'], startingMercenaries: 1, startingCastles: 1, personality: 'mercenary', quotes: ['Credits will do fine.', 'I work for money.', 'No questions asked.'] },
          { name: 'Smuggler', startingCoins: 55, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 1, personality: 'opportunistic', quotes: ['I can get you anything.', 'For the right price.', 'Business is business.'] },
          { name: 'Pirate', startingCoins: 50, startingWeapons: ['blaster'], startingMercenaries: 0, startingCastles: 1, personality: 'lawless', quotes: ['We take what we want!', 'No law out here!', 'Pirates don\'t ask!'] }
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
    inspirationalQuote: {
      text: "We have met the enemy and they are ours.",
      author: "Oliver Hazard Perry",
      context: "American naval commander after victory at Lake Erie"
    },
    factionOrder: ['americans', 'british'],
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will defeat Tecumseh's confederation.",
              "The Northwest Territory is ours.",
              "We fight for expansion.",
              "Victory at Tippecanoe!",
              "The frontier will be secured."
            ],
            description: 'General who defeated Tecumseh and became the 9th President.'
          },
          {
            name: 'Isaac Brock',
            role: 'British General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will defend Canada.",
              "The Americans will not take our territory.",
              "We fight for the Crown.",
              "Victory at Queenston Heights!",
              "We will not surrender."
            ],
            description: 'British general who defended Canada and died at Queenston Heights.'
          },
          {
            name: 'Tecumseh',
            role: 'Shawnee Chief',
            startingCoins: 75,
            startingWeapons: ['tomahawk'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unifying',
            quotes: [
              "We will unite all tribes.",
              "The white man will not take our land.",
              "We fight for our people.",
              "We will not be divided.",
              "The Great Spirit is with us."
            ],
            description: 'Shawnee chief who tried to unite Native American tribes against American expansion.'
          },
          {
            name: 'Winfield Scott',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We will train our soldiers properly.",
              "Discipline wins battles.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through training."
            ],
            description: 'General known for his military reforms and training methods.'
          },
          {
            name: 'Zebulon Pike',
            role: 'Explorer & General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "We will explore the frontier.",
              "The West is ours to claim.",
              "We fight for expansion.",
              "We will not be stopped.",
              "The frontier calls us."
            ],
            description: 'Explorer and general who fought in the War of 1812.'
          },
          {
            name: 'John Armstrong',
            role: 'Secretary of War',
            startingCoins: 75,
            startingWeapons: ['military strategy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will organize our forces.",
              "The military needs proper leadership.",
              "We fight for our nation.",
              "We will not be defeated.",
              "Organization wins wars."
            ],
            description: 'Secretary of War who organized American military efforts.'
          },
          {
            name: 'Henry Clay',
            role: 'War Hawk',
            startingCoins: 80,
            startingWeapons: ['oratory'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "We must fight for our rights.",
              "The British will not bully us.",
              "We fight for honor.",
              "We will not back down.",
              "War is necessary."
            ],
            description: 'Congressional leader and "War Hawk" who pushed for war with Britain.'
          },
          {
            name: 'John Calhoun',
            role: 'War Hawk',
            startingCoins: 75,
            startingWeapons: ['oratory'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "We must defend our sovereignty.",
              "The British will not dictate our trade.",
              "We fight for our rights.",
              "We will not be oppressed.",
              "War is our only option."
            ],
            description: 'Congressional leader and "War Hawk" who supported the war effort.'
          },
          {
            name: 'Daniel Webster',
            role: 'Orator',
            startingCoins: 70,
            startingWeapons: ['words'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'eloquent',
            quotes: [
              "We must unite against the British.",
              "Our cause is just.",
              "We fight for freedom.",
              "We will not be silenced.",
              "Words have power."
            ],
            description: 'Famous orator who supported the war effort.'
          },
          {
            name: 'John Quincy Adams',
            role: 'Diplomat',
            startingCoins: 80,
            startingWeapons: ['diplomacy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We must negotiate peace.",
              "Diplomacy can end this war.",
              "We fight for our rights.",
              "We will not surrender.",
              "Peace through strength."
            ],
            description: 'Diplomat who worked to end the war and became the 6th President.'
          },
          {
            name: 'Dolley Madison',
            role: 'First Lady',
            startingCoins: 65,
            startingWeapons: ['courage'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I will save what I can.",
              "The British will not destroy our history.",
              "We fight for our heritage.",
              "We will not be defeated.",
              "Courage in the face of danger."
            ],
            description: 'First Lady who saved important documents when the British burned Washington.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'patriotic', quotes: ['For America!', 'We will not be conquered!', 'Freedom!'] },
          { name: 'Militia Member', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 0, startingCastles: 1, personality: 'brave', quotes: ['Defend our homes!', 'We are ready!', 'For our families!'] },
          { name: 'Sailor', startingCoins: 55, startingWeapons: ['cutlass'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For the Navy!', 'Rule the seas!', 'We sail for America!'] }
        ]
      },
      british: {
        name: 'British Empire',
        color: '#dc2626',
        description: 'Maintaining imperial control and naval supremacy',
        territories: [
          { name: 'London', cost: 90, description: 'Capital' },
          { name: 'Quebec', cost: 75, description: 'Fortress city' },
          { name: 'Halifax', cost: 70, description: 'Naval base' },
          { name: 'Toronto', cost: 65, description: 'Upper Canada' },
          { name: 'Montreal', cost: 80, description: 'Lower Canada' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will take New Orleans.",
              "The Americans cannot stop us.",
              "We fight for the Mississippi.",
              "Victory will be ours.",
              "We march to glory."
            ],
            description: 'British general who led the failed assault on New Orleans.'
          },
          {
            name: 'George Prevost',
            role: 'Governor General',
            startingCoins: 85,
            startingWeapons: ['administrative power'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern Canada properly.",
              "The Americans will not take our territory.",
              "We fight for the Crown.",
              "We will not surrender.",
              "Order must be maintained."
            ],
            description: 'Governor General of Canada who organized the defense.'
          },
          {
            name: 'Charles de Salaberry',
            role: 'Canadian Colonel',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will defend our homeland.",
              "The Americans will not pass.",
              "We fight for Canada.",
              "We will not retreat.",
              "Victory at Chateauguay!"
            ],
            description: 'Canadian colonel who defended against American invasion.'
          },
          {
            name: 'John Coape Sherbrooke',
            role: 'Lieutenant Governor',
            startingCoins: 75,
            startingWeapons: ['administrative power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern Nova Scotia.",
              "The Americans will not take our territory.",
              "We fight for the Crown.",
              "We will not surrender.",
              "Order must be maintained."
            ],
            description: 'Lieutenant Governor of Nova Scotia who organized the defense.'
          },
          {
            name: 'James Yeo',
            role: 'Naval Commander',
            startingCoins: 80,
            startingWeapons: ['naval cannon'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'naval',
            quotes: [
              "We will control the Great Lakes.",
              "The British navy will prevail.",
              "We fight for naval supremacy.",
              "We will not be defeated.",
              "Victory on the water!"
            ],
            description: 'British naval commander who fought on the Great Lakes.'
          },
          {
            name: 'Gordon Drummond',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will defend Upper Canada.",
              "The Americans will not take our territory.",
              "We fight for the Crown.",
              "We will not surrender.",
              "Strategy wins wars."
            ],
            description: 'British general who defended Upper Canada.'
          },
          {
            name: 'Phineas Riall',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack the Americans.",
              "The British will prevail.",
              "We fight for the Crown.",
              "We will not retreat.",
              "Attack is the best defense."
            ],
            description: 'British general who fought in Upper Canada.'
          },
          {
            name: 'John Harvey',
            role: 'Lieutenant Colonel',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will defend our position.",
              "The Americans will not pass.",
              "We fight for the Crown.",
              "We will not retreat.",
              "Courage wins battles."
            ],
            description: 'British lieutenant colonel who fought in Canada.'
          },
          {
            name: 'William Mulcaster',
            role: 'Naval Commander',
            startingCoins: 75,
            startingWeapons: ['naval cannon'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'naval',
            quotes: [
              "We will control the St. Lawrence.",
              "The British navy will prevail.",
              "We fight for naval supremacy.",
              "We will not be defeated.",
              "Victory on the water!"
            ],
            description: 'British naval commander who fought on the St. Lawrence River.'
          },
          {
            name: 'John Norton',
            role: 'Mohawk Chief',
            startingCoins: 70,
            startingWeapons: ['tomahawk'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will fight for the British.",
              "The Americans will not take our land.",
              "We fight for our people.",
              "We will not be divided.",
              "Loyalty to the Crown."
            ],
            description: 'Mohawk chief who fought alongside the British.'
          },
          {
            name: 'John Brant',
            role: 'Mohawk Leader',
            startingCoins: 65,
            startingWeapons: ['tomahawk'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will defend our homeland.",
              "The Americans will not pass.",
              "We fight for our people.",
              "We will not retreat.",
              "Courage in battle."
            ],
            description: 'Mohawk leader who fought alongside the British.'
          }
        ],
        generalRoles: [
          { name: 'Redcoat Soldier', startingCoins: 55, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'disciplined', quotes: ['For king and country!', 'God save the king!', 'We will prevail!'] },
          { name: 'Canadian Militia', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['Defend Canada!', 'We are British subjects!', 'For the Crown!'] },
          { name: 'Native Warrior', startingCoins: 45, startingWeapons: ['tomahawk'], startingMercenaries: 0, startingCastles: 1, personality: 'brave', quotes: ['For our land!', 'We will not be moved!', 'Our ancestors watch!'] }
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
    inspirationalQuote: {
      text: "From the halls of Montezuma to the shores of Tripoli.",
      author: "Marines' Hymn",
      context: "U.S. Marine Corps anthem"
    },
    factionOrder: ['americans', 'mexicans'],
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "We will explore the West.",
              "California will be ours.",
              "The Bear Flag Republic rises.",
              "We fight for discovery.",
              "The frontier calls us."
            ],
            description: 'Explorer who helped secure California for the United States.'
          },
          {
            name: 'Robert E. Lee',
            role: 'Engineer',
            startingCoins: 70,
            startingWeapons: ['engineering tools'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'methodical',
            quotes: [
              "We will build proper fortifications.",
              "Engineering wins wars.",
              "We fight for our country.",
              "We will not be defeated.",
              "Victory through preparation."
            ],
            description: 'Future Confederate general who served as an engineer in the Mexican-American War.'
          },
          {
            name: 'Ulysses S. Grant',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will fight with honor.",
              "The Mexican army cannot stop us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through persistence."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          },
          {
            name: 'Jefferson Davis',
            role: 'Colonel',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will expand our territory.",
              "The Mexican army will not stop us.",
              "We fight for our destiny.",
              "We will not be defeated.",
              "Victory for America."
            ],
            description: 'Future Confederate president who served as a colonel in the Mexican-American War.'
          },
          {
            name: 'George Meade',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight for our country.",
              "The Mexican army cannot stop us.",
              "We fight with honor.",
              "We will not retreat.",
              "Victory through courage."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          },
          {
            name: 'John Sedgwick',
            role: 'Captain',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve our country.",
              "The Mexican army will not stop us.",
              "We fight for our flag.",
              "We will not be defeated.",
              "Victory through loyalty."
            ],
            description: 'Future Union general who served as a captain in the Mexican-American War.'
          },
          {
            name: 'Joseph Hooker',
            role: 'Captain',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack the enemy.",
              "The Mexican army cannot stop us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through attack."
            ],
            description: 'Future Union general who served as a captain in the Mexican-American War.'
          },
          {
            name: 'George McClellan',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must be careful.",
              "The Mexican army is dangerous.",
              "We fight for our country.",
              "We will not rush into battle.",
              "Victory through caution."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          },
          {
            name: 'Ambrose Burnside',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will fight for our country.",
              "The Mexican army cannot stop us.",
              "We fight with honor.",
              "We will not retreat.",
              "Victory through determination."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          },
          {
            name: 'John Pope',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'confident',
            quotes: [
              "We will defeat the enemy.",
              "The Mexican army cannot stop us.",
              "We fight for our country.",
              "We will not be defeated.",
              "Victory through confidence."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          },
          {
            name: 'William Tecumseh Sherman',
            role: 'Lieutenant',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use strategy.",
              "The Mexican army cannot stop us.",
              "We fight for our country.",
              "We will not be defeated.",
              "Victory through strategy."
            ],
            description: 'Future Union general who served as a lieutenant in the Mexican-American War.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'patriotic', quotes: ['For America!', 'Manifest Destiny!', 'We will expand!'] },
          { name: 'Texas Ranger', startingCoins: 55, startingWeapons: ['revolver'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['Remember the Alamo!', 'We fight for Texas!', 'The Lone Star!'] },
          { name: 'Mountain Man', startingCoins: 45, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'independent', quotes: ['We explore the West!', 'The frontier calls!', 'We are free!'] }
        ]
      },
      mexicans: {
        name: 'Mexico',
        color: '#dc2626',
        description: 'Defending their homeland from American invasion',
        territories: [
          { name: 'Mexico City', cost: 90, description: 'Capital' },
          { name: 'Veracruz', cost: 80, description: 'Port' },
          { name: 'Monterrey', cost: 75, description: 'North' },
          { name: 'Saltillo', cost: 70, description: 'Highlands' },
          { name: 'Puebla', cost: 65, description: 'Central' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'defiant',
            quotes: [
              "We will defend California.",
              "The Bear Flag will not fly.",
              "We fight for our state.",
              "California is Mexican.",
              "We will resist the invaders."
            ],
            description: 'Governor of California who resisted American expansion.'
          },
          {
            name: 'Valentin Gomez Farias',
            role: 'Vice President',
            startingCoins: 80,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'reformist',
            quotes: [
              "We will reform our government.",
              "The Americans will not conquer us.",
              "We fight for our nation.",
              "Mexico will be strong.",
              "We will not surrender."
            ],
            description: 'Mexican Vice President who supported reforms during the war.'
          },
          {
            name: 'Manuel de la Pena y Pena',
            role: 'Interim President',
            startingCoins: 85,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We must negotiate peace.",
              "The Americans are too strong.",
              "We fight for our survival.",
              "Mexico must endure.",
              "We will find a way."
            ],
            description: 'Interim President who negotiated the end of the war.'
          },
          {
            name: 'Jose Joaquin de Herrera',
            role: 'President',
            startingCoins: 80,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'moderate',
            quotes: [
              "We will find peace.",
              "The Americans are powerful.",
              "We fight for our nation.",
              "Mexico will survive.",
              "We must be realistic."
            ],
            description: 'Mexican President who worked to end the war.'
          },
          {
            name: 'Manuel Robles Pezuela',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use strategy.",
              "The Americans are strong.",
              "We fight for our homeland.",
              "Mexico will not fall.",
              "We will be clever."
            ],
            description: 'Mexican general who fought strategically against the Americans.'
          },
          {
            name: 'Jose Maria Tornel',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve Mexico.",
              "The Americans will not win.",
              "We fight for our country.",
              "Mexico stands strong.",
              "We will not betray our nation."
            ],
            description: 'Mexican general loyal to Santa Anna.'
          },
          {
            name: 'Manuel Lombardini',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight bravely.",
              "The Americans will not defeat us.",
              "We fight for our honor.",
              "Mexico will prevail.",
              "We will not retreat."
            ],
            description: 'Mexican general known for his bravery.'
          },
          {
            name: 'Jose Urrea',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack the Americans.",
              "The invaders will not win.",
              "We fight for our land.",
              "Mexico will strike back.",
              "We will not be passive."
            ],
            description: 'Mexican general known for aggressive tactics.'
          },
          {
            name: 'Francisco Mejia',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will defend our homeland.",
              "The Americans will not conquer us.",
              "We fight for our people.",
              "Mexico will endure.",
              "We will not give up."
            ],
            description: 'Mexican general determined to defend his country.'
          },
          {
            name: 'Jose Maria Yanez',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'patriotic',
            quotes: [
              "We will fight for Mexico.",
              "The Americans will not win.",
              "We fight for our flag.",
              "Mexico stands proud.",
              "We will defend our honor."
            ],
            description: 'Mexican general who fought patriotically for his country.'
          },
          {
            name: 'Manuel Micheltorena',
            role: 'General',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend our positions.",
              "The Americans will not pass.",
              "We fight for our territory.",
              "Mexico will hold strong.",
              "We will not be moved."
            ],
            description: 'Mexican general who focused on defensive strategies.'
          }
        ],
        generalRoles: [
          { name: 'Mexican Soldier', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['Viva Mexico!', 'We defend our homeland!', 'For our country!'] },
          { name: 'Vaquero', startingCoins: 50, startingWeapons: ['lasso'], startingMercenaries: 0, startingCastles: 1, personality: 'proud', quotes: ['We are cowboys!', 'The land is ours!', 'We ride for Mexico!'] },
          { name: 'Guerrilla Fighter', startingCoins: 40, startingWeapons: ['knife'], startingMercenaries: 0, startingCastles: 1, personality: 'resilient', quotes: ['We fight in the shadows!', 'Resist the invaders!', 'For freedom!'] }
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
    inspirationalQuote: {
      text: "Freedom is the freedom to say that two plus two make four.",
      author: "George Orwell",
      context: "1984"
    },
    factionOrder: ['rebels', 'party'],
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
          { name: 'Prole Worker', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'ignorant', quotes: ['We work!', 'We are free!', 'We are human!'] },
          { name: 'Underground Member', startingCoins: 45, startingWeapons: ['secrets'], startingMercenaries: 0, startingCastles: 1, personality: 'secretive', quotes: ['We resist!', 'We are the dead!', 'We will meet!'] },
          { name: 'Thought Criminal', startingCoins: 50, startingWeapons: ['thoughts'], startingMercenaries: 0, startingCastles: 1, personality: 'rebellious', quotes: ['We think!', 'We are free!', 'We resist!'] }
        ]
      },
      party: {
        name: 'The Party',
        color: '#8b0000',
        description: 'Seeking absolute control through surveillance and thought control',
        territories: [
          { name: 'Ministry of Truth', cost: 100, description: 'News & records' },
          { name: 'Ministry of Love', cost: 95, description: 'Room 101' },
          { name: 'Ministry of Peace', cost: 90, description: 'War office' },
          { name: 'Ministry of Plenty', cost: 85, description: 'Rations & stats' },
          { name: 'Big Brother Office', cost: 120, description: 'Supreme control' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'methodical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Party member who works on statistics but is eventually vaporized.'
          },
          {
            name: 'Withers',
            role: 'Party Member',
            startingCoins: 55,
            startingWeapons: ['reports'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'diligent',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Party member who works on reports and is eventually vaporized.'
          },
          {
            name: 'Rutherford',
            role: 'Party Member',
            startingCoins: 70,
            startingWeapons: ['memories'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'defiant',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Former Party member who is tortured and eventually broken.'
          },
          {
            name: 'Jones',
            role: 'Party Member',
            startingCoins: 65,
            startingWeapons: ['memories'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'defiant',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Former Party member who is tortured and eventually broken.'
          },
          {
            name: 'Katharine',
            role: 'Wife',
            startingCoins: 50,
            startingWeapons: ['duty'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'dutiful',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Winston estranged wife who is completely devoted to the Party.'
          },
          {
            name: 'Tom Parsons',
            role: 'Child',
            startingCoins: 30,
            startingWeapons: ['spying'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'fanatical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Parsons child who spies on his own father.'
          },
          {
            name: 'Mrs. Parsons',
            role: 'Wife',
            startingCoins: 45,
            startingWeapons: ['fear'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'fearful',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Parsons wife who lives in constant fear of her children.'
          },
          {
            name: 'The Prole Woman',
            role: 'Prole',
            startingCoins: 40,
            startingWeapons: ['song'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'free',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole woman who sings while hanging laundry, symbolizing natural freedom.'
          },
          {
            name: 'The Prole Man',
            role: 'Prole',
            startingCoins: 35,
            startingWeapons: ['work'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'ignorant',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole man who represents the working class masses.'
          },
          {
            name: 'The Thought Police',
            role: 'Enforcer',
            startingCoins: 85,
            startingWeapons: ['surveillance'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'omnipresent',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Secret police who monitor and arrest thought criminals.'
          },
          {
            name: 'The Telescreen',
            role: 'Surveillance',
            startingCoins: 75,
            startingWeapons: ['monitoring'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'omnipresent',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Two-way television that monitors citizens constantly.'
          },
          {
            name: 'The Ministry Worker',
            role: 'Bureaucrat',
            startingCoins: 50,
            startingWeapons: ['paperwork'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'bureaucratic',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Anonymous bureaucrat who works in the Ministries.'
          },
          {
            name: 'The Outer Party Member',
            role: 'Party Member',
            startingCoins: 45,
            startingWeapons: ['loyalty'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'conformist',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Lower-level Party member who follows orders without question.'
          },
          {
            name: 'The Inner Party Member',
            role: 'Party Elite',
            startingCoins: 100,
            startingWeapons: ['power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'privileged',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'High-level Party member who enjoys privileges denied to others.'
          },
          {
            name: 'The Prole Child',
            role: 'Child',
            startingCoins: 25,
            startingWeapons: ['innocence'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'innocent',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole child who represents hope for the future.'
          },
          {
            name: 'The Newspeak Worker',
            role: 'Linguist',
            startingCoins: 55,
            startingWeapons: ['language'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'systematic',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Worker who helps develop Newspeak to limit thought.'
          },
          {
            name: 'The Memory Hole Worker',
            role: 'Censor',
            startingCoins: 60,
            startingWeapons: ['destruction'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'destructive',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Worker who destroys historical records through memory holes.'
          },
          {
            name: 'The Two Minutes Hate Participant',
            role: 'Citizen',
            startingCoins: 40,
            startingWeapons: ['hatred'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'fanatical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Citizen who participates in the daily Two Minutes Hate ritual.'
          },
          {
            name: 'The Victory Gin Drinker',
            role: 'Citizen',
            startingCoins: 35,
            startingWeapons: ['alcohol'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'escapist',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Citizen who drinks Victory Gin to escape reality.'
          },
          {
            name: 'The Ration Card Holder',
            role: 'Citizen',
            startingCoins: 30,
            startingWeapons: ['rations'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'deprived',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Citizen who survives on meager rations provided by the Party.'
          },
          {
            name: 'The Newspeak Dictionary Worker',
            role: 'Linguist',
            startingCoins: 50,
            startingWeapons: ['dictionary'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'systematic',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Worker who helps create the Newspeak dictionary to limit vocabulary.'
          },
          {
            name: 'The Prole Street Vendor',
            role: 'Vendor',
            startingCoins: 40,
            startingWeapons: ['goods'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'entrepreneurial',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole who sells goods on the street, representing economic freedom.'
          },
          {
            name: 'The Ministry Canteen Worker',
            role: 'Worker',
            startingCoins: 45,
            startingWeapons: ['food'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'servile',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Worker who serves food in the Ministry canteen.'
          },
          {
            name: 'The Prole Pub Patron',
            role: 'Patron',
            startingCoins: 35,
            startingWeapons: ['beer'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'social',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole who frequents pubs, representing social freedom.'
          },
          {
            name: 'The Ministry Elevator Operator',
            role: 'Operator',
            startingCoins: 40,
            startingWeapons: ['elevator'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'mechanical',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Worker who operates elevators in the Ministries.'
          },
          {
            name: 'The Prole Market Trader',
            role: 'Trader',
            startingCoins: 45,
            startingWeapons: ['trade'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'commercial',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole who trades in markets, representing economic freedom.'
          },
          {
            name: 'The Prole Factory Worker',
            role: 'Worker',
            startingCoins: 40,
            startingWeapons: ['labor'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'hardworking',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole who works in factories, representing the working class.'
          },
          {
            name: 'The Prole Dock Worker',
            role: 'Worker',
            startingCoins: 40,
            startingWeapons: ['strength'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'strong',
            quotes: [
              "The proles are human beings.",
              "We will meet in the place where there is no darkness.",
              "I love you.",
              "We are the dead.",
              "Freedom is the freedom to say that two plus two make four."
            ],
            description: 'Prole who works at the docks, representing physical labor.'
          }
        ],
        generalRoles: [
          { name: 'Party Member', startingCoins: 50, startingWeapons: ['loyalty'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['Big Brother is watching!', 'We are the Party!', 'We are the dead!'] },
          { name: 'Thought Police', startingCoins: 55, startingWeapons: ['surveillance'], startingMercenaries: 1, startingCastles: 1, personality: 'ruthless', quotes: ['We are watching!', 'We are the dead!', 'We are the Party!'] },
          { name: 'Inner Party', startingCoins: 60, startingWeapons: ['power'], startingMercenaries: 1, startingCastles: 1, personality: 'elite', quotes: ['We are the elite!', 'We are the Party!', 'We are the dead!'] }
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
    inspirationalQuote: {
      text: "Sing, O goddess, the anger of Achilles son of Peleus.",
      author: "Homer",
      context: "The Iliad, opening line"
    },
    factionOrder: ['greeks', 'trojans'],
    factions: {
      greeks: {
        name: 'Greeks (Achaeans)',
        color: '#1e40af', // Deep blue for Greeks
        description: 'Fighting to reclaim Helen and restore honor',
        territories: [
          { name: 'Mycenae', cost: 80, description: 'Agamemnon\'s seat' },
          { name: 'Sparta', cost: 75, description: 'Menelaus\' hall' },
          { name: 'Ithaca', cost: 70, description: 'Odysseus\' court' },
          { name: 'Pylos', cost: 65, description: 'Nestor\'s council' },
          { name: 'Phthia', cost: 60, description: 'Achilles\' homeland' },
          { name: 'Beach Camp', cost: 85, description: 'Achaean camp' },
          { name: 'Achaean Fleet', cost: 75, description: 'Black ships' },
          { name: 'Mount Olympus', cost: 90, description: 'Gods\' favor' },
          { name: 'Allied Kings', cost: 70, description: 'Achaean allies' },
          { name: 'Patroclus\' Tomb', cost: 65, description: 'Hero\'s cairn' }
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
          },
          {
            name: 'Ajax the Great',
            role: 'Mighty Warrior',
            startingCoins: 95,
            startingWeapons: ['shield'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I will fight Hector.",
              "The Trojans cannot defeat me.",
              "We fight for glory.",
              "I am second only to Achilles.",
              "Victory through strength."
            ],
            description: 'Second greatest Greek warrior after Achilles, known for his massive shield.'
          },
          {
            name: 'Diomedes',
            role: 'Warrior King',
            startingCoins: 90,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "I will fight the gods themselves.",
              "The Trojans will fall before me.",
              "We fight for honor.",
              "I am unstoppable.",
              "Victory through fury."
            ],
            description: 'King of Argos, known for wounding gods in battle.'
          },
          {
            name: 'Patroclus',
            role: 'Achilles\' Companion',
            startingCoins: 80,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I will fight in Achilles' armor.",
              "The Trojans will not defeat us.",
              "We fight for our friends.",
              "I will not let them down.",
              "Victory through loyalty."
            ],
            description: 'Achilles\' closest companion and lover, killed by Hector.'
          },
          {
            name: 'Ajax the Lesser',
            role: 'Swift Warrior',
            startingCoins: 75,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'swift',
            quotes: [
              "I will outrun the Trojans.",
              "Speed is my weapon.",
              "We fight for our homeland.",
              "I will not be caught.",
              "Victory through speed."
            ],
            description: 'Faster but smaller Ajax, known for his swiftness in battle.'
          },
          {
            name: 'Teucer',
            role: 'Master Archer',
            startingCoins: 70,
            startingWeapons: ['bow'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'precise',
            quotes: [
              "I never miss my target.",
              "The Trojans will fall to my arrows.",
              "We fight for our cause.",
              "I will not waste a shot.",
              "Victory through precision."
            ],
            description: 'Ajax\'s half-brother and master archer.'
          },
          {
            name: 'Idomeneus',
            role: 'Cretan King',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I will lead my Cretans to victory.",
              "The Trojans will not defeat us.",
              "We fight for our honor.",
              "I will not retreat.",
              "Victory through nobility."
            ],
            description: 'King of Crete and leader of the Cretan forces.'
          },
          {
            name: 'Meriones',
            role: 'Cretan Warrior',
            startingCoins: 70,
            startingWeapons: ['spear'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I will fight alongside Idomeneus.",
              "The Trojans will not stop us.",
              "We fight for Crete.",
              "I will not be afraid.",
              "Victory through courage."
            ],
            description: 'Cretan warrior and companion of Idomeneus.'
          },
          {
            name: 'Antilochus',
            role: 'Nestor\'s Son',
            startingCoins: 65,
            startingWeapons: ['spear'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'youthful',
            quotes: [
              "I will prove myself in battle.",
              "The Trojans will not defeat me.",
              "We fight for our fathers.",
              "I will not disappoint.",
              "Victory through youth."
            ],
            description: 'Nestor\'s youngest son, eager to prove himself.'
          },
          {
            name: 'Thrasymedes',
            role: 'Nestor\'s Son',
            startingCoins: 70,
            startingWeapons: ['spear'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'dutiful',
            quotes: [
              "I will serve my father.",
              "The Trojans will not defeat us.",
              "We fight for Pylos.",
              "I will not fail.",
              "Victory through duty."
            ],
            description: 'Nestor\'s elder son and heir to Pylos.'
          },
          {
            name: 'Eurypylus',
            role: 'Warrior King',
            startingCoins: 75,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I will fight for the Greeks.",
              "The Trojans will not defeat us.",
              "We fight for our cause.",
              "I will not give up.",
              "Victory through determination."
            ],
            description: 'King of Ormenion and leader of Greek forces.'
          }
        ],
        generalRoles: [
          { name: 'Greek Warrior', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['For glory!', 'We fight for honor!', 'Victory!'] },
          { name: 'Archer', startingCoins: 45, startingWeapons: ['bow'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['We shoot true!', 'For the Greeks!', 'We are accurate!'] },
          { name: 'Sailor', startingCoins: 40, startingWeapons: ['oar'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We sail for Greece!', 'The sea is ours!', 'We are strong!'] }
        ]
      },
      trojans: {
        name: 'Trojans',
        color: '#dc2626', // Red for Trojans (already good)
        description: 'Defending their city and protecting Helen',
        territories: [
          { name: 'Troy', cost: 100, description: 'Great city' },
          { name: 'Troy Walls', cost: 90, description: 'Impenetrable walls' },
          { name: 'Troy Gates', cost: 85, description: 'City gates' },
          { name: 'Troy Palace', cost: 95, description: 'Royal palace' },
          { name: 'Troy Temple', cost: 80, description: 'Sacred temple' },
          { name: 'Troy Citadel', cost: 88, description: 'Inner fortress' },
          { name: 'Troy Armory', cost: 75, description: 'Weapons store' },
          { name: 'Troy Market', cost: 70, description: 'Trade hub' },
          { name: 'Troy Barracks', cost: 72, description: 'Soldier quarters' },
          { name: 'Troy Treasury', cost: 78, description: 'War funds' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'loving',
            quotes: [
              "We will defend our city.",
              "The gods protect us.",
              "We fight for our families.",
              "We will not surrender.",
              "Love will conquer all."
            ],
            description: 'Wife of Hector and princess of Troy.'
          },
          {
            name: 'Helen',
            role: 'Queen of Sparta',
            startingCoins: 75,
            startingWeapons: ['beauty'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'beautiful',
            quotes: [
              "I am the cause of this war.",
              "The gods chose me.",
              "We fight for love.",
              "I will not return to Menelaus.",
              "Beauty is my weapon."
            ],
            description: 'The most beautiful woman in the world, whose abduction started the Trojan War.'
          },
          {
            name: 'Deiphobus',
            role: 'Prince of Troy',
            startingCoins: 75,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I will fight for Troy.",
              "The Greeks will not defeat us.",
              "We fight for our city.",
              "I will not retreat.",
              "Victory through courage."
            ],
            description: 'Prince of Troy and brother of Hector.'
          },
          {
            name: 'Polydamas',
            role: 'Trojan Advisor',
            startingCoins: 70,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "We must be strategic.",
              "The Greeks are strong.",
              "We fight for our survival.",
              "We will not be reckless.",
              "Victory through wisdom."
            ],
            description: 'Trojan advisor known for his wisdom and counsel.'
          },
          {
            name: 'Sarpedon',
            role: 'Lycian King',
            startingCoins: 85,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I will fight for Troy.",
              "The Greeks will not defeat us.",
              "We fight for our allies.",
              "I will not retreat.",
              "Victory through nobility."
            ],
            description: 'King of Lycia and ally of Troy, son of Zeus.'
          },
          {
            name: 'Glaucus',
            role: 'Lycian Warrior',
            startingCoins: 75,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I will fight alongside Sarpedon.",
              "The Greeks will not defeat us.",
              "We fight for our friendship.",
              "I will not retreat.",
              "Victory through loyalty."
            ],
            description: 'Lycian warrior and companion of Sarpedon.'
          },
          {
            name: 'Antenor',
            role: 'Trojan Elder',
            startingCoins: 70,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We must negotiate peace.",
              "The Greeks are too strong.",
              "We fight for our survival.",
              "We will find a way.",
              "Victory through diplomacy."
            ],
            description: 'Trojan elder who advocated for peace with the Greeks.'
          },
          {
            name: 'Pandarus',
            role: 'Trojan Archer',
            startingCoins: 65,
            startingWeapons: ['bow'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'treacherous',
            quotes: [
              "I will break the truce.",
              "The Greeks will not expect this.",
              "We fight for our advantage.",
              "I will not play fair.",
              "Victory through treachery."
            ],
            description: 'Trojan archer who broke the truce by wounding Menelaus.'
          },
          {
            name: 'Dolon',
            role: 'Trojan Spy',
            startingCoins: 60,
            startingWeapons: ['stealth'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'cowardly',
            quotes: [
              "I will spy on the Greeks.",
              "The Greeks will not catch me.",
              "We fight for information.",
              "I will not be brave.",
              "Victory through stealth."
            ],
            description: 'Trojan spy who was captured and killed by Odysseus and Diomedes.'
          },
          {
            name: 'Rhesus',
            role: 'Thracian King',
            startingCoins: 80,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "I will fight for Troy.",
              "The Greeks will not defeat us.",
              "We fight for our honor.",
              "I will not retreat.",
              "Victory through pride."
            ],
            description: 'King of Thrace and ally of Troy, killed by Odysseus and Diomedes.'
          },
          {
            name: 'Memnon',
            role: 'Ethiopian King',
            startingCoins: 85,
            startingWeapons: ['spear'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mighty',
            quotes: [
              "I will fight for Troy.",
              "The Greeks will not defeat us.",
              "We fight for our allies.",
              "I will not retreat.",
              "Victory through might."
            ],
            description: 'King of Ethiopia and ally of Troy, son of the dawn goddess Eos.'
          }
        ],
        generalRoles: [
          { name: 'Trojan Warrior', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['For Troy!', 'We defend our city!', 'Victory!'] },
          { name: 'Archer', startingCoins: 45, startingWeapons: ['bow'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['We shoot true!', 'For Troy!', 'We are accurate!'] },
          { name: 'Guard', startingCoins: 40, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We guard the walls!', 'Troy stands!', 'We are strong!'] }
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
    inspirationalQuote: {
      text: "With great power comes great responsibility.",
      author: "Uncle Ben",
      context: "Spider-Man"
    },
    factionOrder: ['dc', 'marvel'],
    factions: {
      dc: {
        name: 'DC Heroes',
        color: '#4169e1',
        description: 'Protecting the DC universe from threats',
        territories: [
          { name: 'Gotham City', cost: 90, description: 'Batman city' },
          { name: 'Metropolis', cost: 95, description: 'Superman city' },
          { name: 'Themyscira', cost: 85, description: 'Amazon island' },
          { name: 'Central City', cost: 80, description: 'Flash city' },
          { name: 'Atlantis', cost: 75, description: 'Undersea kingdom' }
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
            startingCastles: 1,
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
          },
          {
            name: 'Green Lantern',
            role: 'Space Cop',
            startingCoins: 95,
            startingWeapons: ['power ring'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fearless',
            quotes: [
              "In brightest day, in blackest night.",
              "I will overcome fear.",
              "The Green Lantern Corps will prevail.",
              "We protect the universe.",
              "Willpower is my weapon."
            ],
            description: 'Member of the Green Lantern Corps, protector of space sector 2814.'
          },
          {
            name: 'Cyborg',
            role: 'Half-Man Half-Machine',
            startingCoins: 90,
            startingWeapons: ['cybernetic enhancements'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'tech-savvy',
            quotes: [
              "I am more than human.",
              "Technology is my strength.",
              "We will protect the world.",
              "I am Cyborg.",
              "Humanity and technology united."
            ],
            description: 'Half-human, half-machine hero with advanced technology.'
          },
          {
            name: 'Green Arrow',
            role: 'Master Archer',
            startingCoins: 85,
            startingWeapons: ['bow and arrow'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'rebellious',
            quotes: [
              "I fight for the little guy.",
              "Justice for all.",
              "We will protect Star City.",
              "I am Green Arrow.",
              "Never give up."
            ],
            description: 'Master archer and protector of Star City.'
          },
          {
            name: 'Martian Manhunter',
            role: 'Last Martian',
            startingCoins: 100,
            startingWeapons: ['telepathy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I am the last of my kind.",
              "We will protect Earth.",
              "I am Martian Manhunter.",
              "We must unite.",
              "Peace through understanding."
            ],
            description: 'Last survivor of Mars, protector of Earth.'
          },
          {
            name: 'Shazam',
            role: 'World\'s Mightiest Mortal',
            startingCoins: 95,
            startingWeapons: ['lightning'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'youthful',
            quotes: [
              "Shazam!",
              "I am the world's mightiest mortal.",
              "We will protect the innocent.",
              "I am Shazam.",
              "Magic is my power."
            ],
            description: 'Young boy who transforms into the world\'s mightiest mortal.'
          },
          {
            name: 'Black Canary',
            role: 'Master Fighter',
            startingCoins: 80,
            startingWeapons: ['canary cry'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "I fight for justice.",
              "We will protect the innocent.",
              "I am Black Canary.",
              "We must be strong.",
              "Never back down."
            ],
            description: 'Master martial artist with sonic scream abilities.'
          },
          {
            name: 'Hawkman',
            role: 'Winged Warrior',
            startingCoins: 85,
            startingWeapons: ['mace'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I fight for justice.",
              "We will protect the innocent.",
              "I am Hawkman.",
              "We must be strong.",
              "Honor above all."
            ],
            description: 'Winged warrior with ancient Egyptian origins.'
          },
          {
            name: 'Zatanna',
            role: 'Mistress of Magic',
            startingCoins: 90,
            startingWeapons: ['magic'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "I am mistress of magic.",
              "We will protect the world.",
              "I am Zatanna.",
              "Magic is my power.",
              "Mystical forces unite."
            ],
            description: 'Mistress of magic and stage magician.'
          },
          {
            name: 'Nightwing',
            role: 'Former Robin',
            startingCoins: 85,
            startingWeapons: ['escrima sticks'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'acrobatic',
            quotes: [
              "I fight for justice.",
              "We will protect the innocent.",
              "I am Nightwing.",
              "We must be strong.",
              "Never give up."
            ],
            description: 'Former Robin, now protector of Blüdhaven.'
          },
          {
            name: 'Supergirl',
            role: 'Girl of Steel',
            startingCoins: 100,
            startingWeapons: ['heat vision'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'heroic',
            quotes: [
              "I am Supergirl.",
              "We will protect Earth.",
              "I am the girl of steel.",
              "We must be strong.",
              "Hope will triumph."
            ],
            description: 'Superman\'s cousin and protector of Earth.'
          }
        ],
        generalRoles: [
          { name: 'Gotham Citizen', startingCoins: 50, startingWeapons: ['courage'], startingMercenaries: 0, startingCastles: 1, personality: 'brave', quotes: ['We trust Batman!', 'Gotham stands!', 'We are strong!'] },
          { name: 'Metropolis Citizen', startingCoins: 55, startingWeapons: ['hope'], startingMercenaries: 0, startingCastles: 1, personality: 'hopeful', quotes: ['Superman will save us!', 'We believe!', 'Hope lives!'] },
          { name: 'Justice League Member', startingCoins: 60, startingWeapons: ['teamwork'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For justice!', 'We are the League!', 'Together we stand!'] }
        ]
      },
      marvel: {
        name: 'Marvel Heroes',
        color: '#dc2626',
        description: 'Protecting the Marvel universe from threats',
        territories: [
          { name: 'New York City', cost: 90, description: 'Spider-Man city' },
          { name: 'Wakanda', cost: 95, description: 'Panther kingdom' },
          { name: 'Asgard', cost: 100, description: 'Thor realm' },
          { name: 'Xavier School', cost: 85, description: 'X-Men HQ' },
          { name: 'Stark Tower', cost: 80, description: 'Iron Man base' }
        ],
        characters: [
          {
            name: 'Spider-Man',
            role: 'Friendly Neighborhood Hero',
            startingCoins: 100,
            startingWeapons: ['web shooters'],
            startingMercenaries: 1,
            startingCastles: 1,
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
          },
          {
            name: 'Hulk',
            role: 'Green Goliath',
            startingCoins: 110,
            startingWeapons: ['super strength'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'angry',
            quotes: [
              "Hulk smash!",
              "You wouldn't like me when I'm angry.",
              "We are the Avengers.",
              "Hulk is strongest one there is.",
              "Hulk will protect."
            ],
            description: 'Bruce Banner\'s alter ego, the strongest Avenger.'
          },
          {
            name: 'Wolverine',
            role: 'Mutant Warrior',
            startingCoins: 100,
            startingWeapons: ['adamantium claws'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "I\'m the best there is at what I do.",
              "We will protect mutants.",
              "I am Wolverine.",
              "We must be strong.",
              "Never give up."
            ],
            description: 'Mutant with healing factor and adamantium claws.'
          },
          {
            name: 'Storm',
            role: 'Weather Goddess',
            startingCoins: 95,
            startingWeapons: ['weather control'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'regal',
            quotes: [
              "I am Storm.",
              "We will protect mutants.",
              "I am the weather goddess.",
              "We must be strong.",
              "Nature is my power."
            ],
            description: 'Mutant with weather control abilities and X-Men leader.'
          },
          {
            name: 'Doctor Strange',
            role: 'Sorcerer Supreme',
            startingCoins: 105,
            startingWeapons: ['magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "I am Doctor Strange.",
              "We will protect the world.",
              "I am the Sorcerer Supreme.",
              "Magic is my power.",
              "We must be strong."
            ],
            description: 'Master of the mystic arts and protector of Earth.'
          },
          {
            name: 'Deadpool',
            role: 'Merc with a Mouth',
            startingCoins: 90,
            startingWeapons: ['swords'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'chaotic',
            quotes: [
              "I am Deadpool.",
              "We will protect the world.",
              "I am the merc with a mouth.",
              "We must be strong.",
              "Never give up."
            ],
            description: 'Mercenary with healing factor and fourth wall awareness.'
          },
          {
            name: 'Captain Marvel',
            role: 'Cosmic Hero',
            startingCoins: 110,
            startingWeapons: ['cosmic energy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'powerful',
            quotes: [
              "I am Captain Marvel.",
              "We will protect the universe.",
              "I am the cosmic hero.",
              "We must be strong.",
              "Power is my weapon."
            ],
            description: 'Cosmic-powered hero and protector of the universe.'
          },
          {
            name: 'Ant-Man',
            role: 'Size-Changing Hero',
            startingCoins: 85,
            startingWeapons: ['pym particles'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'clever',
            quotes: [
              "I am Ant-Man.",
              "We will protect the world.",
              "I am the size-changing hero.",
              "We must be strong.",
              "Size is my power."
            ],
            description: 'Hero who can change size using Pym particles.'
          },
          {
            name: 'Wasp',
            role: 'Size-Changing Heroine',
            startingCoins: 85,
            startingWeapons: ['pym particles'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I am Wasp.",
              "We will protect the world.",
              "I am the size-changing heroine.",
              "We must be strong.",
              "Size is my power."
            ],
            description: 'Heroine who can change size and fly using Pym particles.'
          },
          {
            name: 'Scarlet Witch',
            role: 'Reality Warper',
            startingCoins: 100,
            startingWeapons: ['chaos magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'powerful',
            quotes: [
              "I am Scarlet Witch.",
              "We will protect the world.",
              "I am the reality warper.",
              "We must be strong.",
              "Magic is my power."
            ],
            description: 'Mutant with reality-warping abilities.'
          },
          {
            name: 'Vision',
            role: 'Synthetic Being',
            startingCoins: 95,
            startingWeapons: ['mind stone'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'logical',
            quotes: [
              "I am Vision.",
              "We will protect the world.",
              "I am the synthetic being.",
              "We must be strong.",
              "Logic is my power."
            ],
            description: 'Synthetic being created by Ultron and the Avengers.'
          }
        ],
        generalRoles: [
          { name: 'New York Citizen', startingCoins: 50, startingWeapons: ['courage'], startingMercenaries: 0, startingCastles: 1, personality: 'brave', quotes: ['Spider-Man will save us!', 'We are strong!', 'New York stands!'] },
          { name: 'Wakandan Citizen', startingCoins: 55, startingWeapons: ['pride'], startingMercenaries: 0, startingCastles: 1, personality: 'proud', quotes: ['Wakanda forever!', 'We are the future!', 'We are strong!'] },
          { name: 'Avenger Trainee', startingCoins: 60, startingWeapons: ['training gear'], startingMercenaries: 1, startingCastles: 1, personality: 'eager', quotes: ['We want to help!', 'Teach us!', 'We can be heroes!'] }
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
    inspirationalQuote: {
      text: "Let it go, let it go! Can't hold it back anymore.",
      author: "Elsa",
      context: "Frozen"
    },
    factionOrder: ['elsa', 'hans'],
    factions: {
      elsa: {
        name: 'Elsa & Allies',
        color: '#87ceeb',
        description: 'Fighting for love, acceptance, and family',
        territories: [
          { name: 'Arendelle Castle', cost: 90, description: 'Royal palace' },
          { name: 'Ice Palace', cost: 85, description: 'Elsa\'s castle' },
          { name: 'Arendelle Village', cost: 70, description: 'Town center' },
          { name: 'Frozen Lake', cost: 75, description: 'Skating lake' },
          { name: 'North Mountain', cost: 80, description: 'High peak' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We are friends.",
              "I will help you.",
              "We are a team.",
              "I love carrots.",
              "We are strong together."
            ],
            description: 'Kristoff\'s loyal reindeer companion.'
          },
          {
            name: 'Marshmallow',
            role: 'Ice Monster',
            startingCoins: 80,
            startingWeapons: ['ice strength'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'protective',
            quotes: [
              "I will protect Elsa.",
              "We are friends.",
              "I will help you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Elsa\'s ice monster guardian of the ice palace.'
          },
          {
            name: 'Grand Pabbie',
            role: 'Troll King',
            startingCoins: 85,
            startingWeapons: ['magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'King of the trolls who helps Elsa and Anna.'
          },
          {
            name: 'Bulda',
            role: 'Troll Mother',
            startingCoins: 70,
            startingWeapons: ['magic'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'motherly',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Troll mother who adopts Kristoff.'
          },
          {
            name: 'Cliff',
            role: 'Troll',
            startingCoins: 65,
            startingWeapons: ['magic'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'friendly',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Friendly troll who helps Elsa and Anna.'
          },
          {
            name: 'Gale',
            role: 'Wind Spirit',
            startingCoins: 75,
            startingWeapons: ['wind'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'playful',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Wind spirit who helps Elsa and Anna.'
          },
          {
            name: 'Bruni',
            role: 'Fire Spirit',
            startingCoins: 70,
            startingWeapons: ['fire'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'curious',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Fire spirit who helps Elsa and Anna.'
          },
          {
            name: 'Nokk',
            role: 'Water Spirit',
            startingCoins: 80,
            startingWeapons: ['water'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mysterious',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Water spirit who helps Elsa and Anna.'
          },
          {
            name: 'Earth Giants',
            role: 'Earth Spirits',
            startingCoins: 90,
            startingWeapons: ['earth'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ancient',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Ancient earth spirits who help Elsa and Anna.'
          },
          {
            name: 'Ahtohallan',
            role: 'Memory River',
            startingCoins: 95,
            startingWeapons: ['memories'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Mystical river of memories that helps Elsa.'
          },
          {
            name: 'Iduna',
            role: 'Queen Mother',
            startingCoins: 85,
            startingWeapons: ['love'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loving',
            quotes: [
              "I will help you.",
              "We are friends.",
              "I will protect you.",
              "We are a team.",
              "We are strong together."
            ],
            description: 'Elsa and Anna\'s mother, queen of Arendelle.'
          }
        ],
        generalRoles: [
          { name: 'Arendelle Citizen', startingCoins: 45, startingWeapons: ['hope'], startingMercenaries: 0, startingCastles: 1, personality: 'hopeful', quotes: ['We believe in Elsa!', 'Love will win!', 'We are strong!'] },
          { name: 'Ice Harvester', startingCoins: 50, startingWeapons: ['pickaxe'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We work hard!', 'We are strong!', 'We harvest ice!'] },
          { name: 'Royal Guard', startingCoins: 55, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['We protect the queen!', 'We are loyal!', 'We stand guard!'] }
        ]
      },
      hans: {
        name: 'Hans & Villains',
        color: '#8b0000',
        description: 'Seeking power and control through deception',
        territories: [
          { name: 'Southern Isles', cost: 80, description: 'Hans homeland' },
          { name: 'Dark Forest', cost: 70, description: 'Dark woods' },
          { name: 'Frozen Fjord', cost: 75, description: 'Icy waterway' },
          { name: 'Marshmallow\'s Cave', cost: 65, description: 'Snow monster lair' },
          { name: 'Wolves\' Den', cost: 60, description: 'Predator den' }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'opportunistic',
            quotes: [
              "I have what you need.",
              "Business is good.",
              "I will help you.",
              "We are all friends.",
              "Come in, come in."
            ],
            description: 'Friendly shopkeeper who helps travelers.'
          },
          {
            name: 'Hans\' Brothers',
            role: 'Princes',
            startingCoins: 70,
            startingWeapons: ['swords'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will take what we want.",
              "Power is everything.",
              "We will not be denied.",
              "We are the princes.",
              "We will rule."
            ],
            description: 'Hans\' twelve brothers who seek power and control.'
          },
          {
            name: 'Southern Isles Guards',
            role: 'Soldiers',
            startingCoins: 60,
            startingWeapons: ['spears'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We serve the princes.",
              "We will follow orders.",
              "We are loyal soldiers.",
              "We will not fail.",
              "We are strong."
            ],
            description: 'Loyal soldiers from the Southern Isles.'
          },
          {
            name: 'Weselton Merchants',
            role: 'Traders',
            startingCoins: 55,
            startingWeapons: ['gold'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "We will profit from this.",
              "Money is power.",
              "We will take what we want.",
              "Business is business.",
              "We are traders."
            ],
            description: 'Greedy merchants from Weselton.'
          },
          {
            name: 'Dark Forest Creatures',
            role: 'Predators',
            startingCoins: 50,
            startingWeapons: ['claws'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'dangerous',
            quotes: [
              "We hunt in the dark.",
              "We are predators.",
              "We will survive.",
              "We are strong.",
              "We protect our territory."
            ],
            description: 'Dangerous creatures that live in the dark forest.'
          },
          {
            name: 'Frozen Fjord Monsters',
            role: 'Sea Creatures',
            startingCoins: 65,
            startingWeapons: ['ice'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cold',
            quotes: [
              "We live in the ice.",
              "We are cold creatures.",
              "We will survive.",
              "We are strong.",
              "We protect our home."
            ],
            description: 'Mysterious creatures that live in the frozen fjord.'
          },
          {
            name: 'Marshmallow\'s Minions',
            role: 'Snow Creatures',
            startingCoins: 45,
            startingWeapons: ['snow'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We serve Marshmallow.",
              "We are snow creatures.",
              "We will protect our master.",
              "We are strong.",
              "We are loyal."
            ],
            description: 'Small snow creatures that serve Marshmallow.'
          },
          {
            name: 'Wolves\' Pack',
            role: 'Hunters',
            startingCoins: 50,
            startingWeapons: ['claws'],
            startingMercenaries: 0,
            startingCastles: 1,
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
            name: 'Southern Isles Nobles',
            role: 'Aristocrats',
            startingCoins: 75,
            startingWeapons: ['influence'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'arrogant',
            quotes: [
              "We are the nobles.",
              "We will take what we want.",
              "We are above the commoners.",
              "We will rule.",
              "We are the elite."
            ],
            description: 'Arrogant nobles from the Southern Isles.'
          },
          {
            name: 'Weselton Soldiers',
            role: 'Mercenaries',
            startingCoins: 60,
            startingWeapons: ['swords'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mercenary',
            quotes: [
              "We fight for gold.",
              "We are mercenaries.",
              "We will not fail.",
              "We are strong.",
              "We serve the highest bidder."
            ],
            description: 'Mercenary soldiers from Weselton.'
          },
          {
            name: 'Dark Forest Spirits',
            role: 'Malevolent Entities',
            startingCoins: 70,
            startingWeapons: ['dark magic'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'evil',
            quotes: [
              "We are the dark spirits.",
              "We will corrupt all.",
              "We are evil.",
              "We will spread darkness.",
              "We are the shadows."
            ],
            description: 'Malevolent spirits that live in the dark forest.'
          }
        ],
        generalRoles: [
          { name: 'Southern Isles Guard', startingCoins: 50, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['We serve the prince!', 'We are loyal!', 'We follow orders!'] },
          { name: 'Mercenary', startingCoins: 45, startingWeapons: ['weapon'], startingMercenaries: 0, startingCastles: 1, personality: 'greedy', quotes: ['We fight for gold!', 'We are strong!', 'We will win!'] },
          { name: 'Spy', startingCoins: 40, startingWeapons: ['secrets'], startingMercenaries: 0, startingCastles: 1, personality: 'sneaky', quotes: ['We gather information!', 'We are hidden!', 'We will succeed!'] }
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
    factionOrder: ['americans', 'spanish'],
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will blockade Cuba.",
              "The Spanish fleet will not escape.",
              "We fight for naval supremacy.",
              "Victory at Santiago Bay!",
              "The Atlantic is ours."
            ],
            description: 'Admiral who commanded the North Atlantic Squadron.'
          },
          {
            name: 'Leonard Wood',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will charge up San Juan Hill.",
              "The Rough Riders will lead the way.",
              "We fight for American honor.",
              "Victory will be ours!",
              "We are the Rough Riders."
            ],
            description: 'General who led the Rough Riders alongside Roosevelt.'
          },
          {
            name: 'John J. Pershing',
            role: 'Captain',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We will fight with discipline.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through training."
            ],
            description: 'Future general who fought in the Spanish-American War.'
          },
          {
            name: 'William Shafter',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use strategy.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through strategy."
            ],
            description: 'General who commanded American forces in Cuba.'
          },
          {
            name: 'Nelson Miles',
            role: 'General',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'experienced',
            quotes: [
              "We will use our experience.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through experience."
            ],
            description: 'Experienced general who fought in the Spanish-American War.'
          },
          {
            name: 'William R. Shafter',
            role: 'General',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will be determined.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through determination."
            ],
            description: 'General who fought determinedly in the Spanish-American War.'
          },
          {
            name: 'Joseph Wheeler',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'confederate',
            quotes: [
              "We will fight for our country.",
              "The Spanish will not defeat us.",
              "We fight for our honor.",
              "We will not retreat.",
              "Victory through honor."
            ],
            description: 'Former Confederate general who fought in the Spanish-American War.'
          },
          {
            name: 'Fitzhugh Lee',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'confederate',
            quotes: [
              "We will fight for our country.",
              "The Spanish will not defeat us.",
              "We fight for our honor.",
              "We will not retreat.",
              "Victory through honor."
            ],
            description: 'Former Confederate general who fought in the Spanish-American War.'
          },
          {
            name: 'William Jennings Bryan',
            role: 'Politician',
            startingCoins: 70,
            startingWeapons: ['oratory'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "We will fight for our country.",
              "The Spanish will not defeat us.",
              "We fight for our honor.",
              "We will not retreat.",
              "Victory through passion."
            ],
            description: 'Politician who supported the Spanish-American War.'
          },
          {
            name: 'John Hay',
            role: 'Secretary of State',
            startingCoins: 80,
            startingWeapons: ['diplomacy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We will use diplomacy.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through diplomacy."
            ],
            description: 'Secretary of State who helped negotiate the end of the war.'
          },
          {
            name: 'Elihu Root',
            role: 'Secretary of War',
            startingCoins: 75,
            startingWeapons: ['military strategy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will organize our forces.",
              "The Spanish will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through organization."
            ],
            description: 'Secretary of War who organized American military efforts.'
          }
        ],
        generalRoles: [
          { name: 'American Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 1, startingCastles: 1, personality: 'patriotic', quotes: ['For America!', 'Remember the Maine!', 'We fight for freedom!'] },
          { name: 'Rough Rider', startingCoins: 55, startingWeapons: ['cavalry saber'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['Charge!', 'For Teddy!', 'We ride to victory!'] },
          { name: 'Sailor', startingCoins: 45, startingWeapons: ['naval gun'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['Anchors aweigh!', 'We sail for glory!', 'The sea is ours!'] }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'pragmatic',
            quotes: [
              "We must maintain order in Cuba.",
              "The rebels will be dealt with.",
              "Spain will not abandon its colonies.",
              "We will restore peace.",
              "The empire endures."
            ],
            description: 'Spanish governor of Cuba during the war.'
          },
          {
            name: 'Antonio Cánovas del Castillo',
            role: 'Prime Minister',
            startingCoins: 85,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'conservative',
            quotes: [
              "We will defend our empire.",
              "Spain will not surrender.",
              "We fight for our honor.",
              "We will not retreat.",
              "Victory through determination."
            ],
            description: 'Spanish Prime Minister who led the country during the war.'
          },
          {
            name: 'Práxedes Mateo Sagasta',
            role: 'Prime Minister',
            startingCoins: 80,
            startingWeapons: ['political power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'liberal',
            quotes: [
              "We will defend our empire.",
              "Spain will not surrender.",
              "We fight for our honor.",
              "We will not retreat.",
              "Victory through determination."
            ],
            description: 'Spanish Prime Minister who succeeded Cánovas.'
          },
          {
            name: 'Manuel Macías y Casado',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend our positions.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through defense."
            ],
            description: 'Spanish general who defended Puerto Rico.'
          },
          {
            name: 'Fermín Jáudenes',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend Manila.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through defense."
            ],
            description: 'Spanish general who defended Manila.'
          },
          {
            name: 'Basilio Augustín',
            role: 'Governor',
            startingCoins: 70,
            startingWeapons: ['colonial administration'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern the Philippines.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through administration."
            ],
            description: 'Spanish governor of the Philippines.'
          },
          {
            name: 'Ricardo de Ortega y Diez',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight bravely.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through bravery."
            ],
            description: 'Spanish general who fought in Cuba.'
          },
          {
            name: 'José Toral y Vázquez',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend Santiago.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through defense."
            ],
            description: 'Spanish general who defended Santiago.'
          },
          {
            name: 'Francisco de Paula Loño y Pérez',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will be determined.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through determination."
            ],
            description: 'Spanish general who fought determinedly.'
          },
          {
            name: 'Luis de Pando y Sánchez',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use strategy.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through strategy."
            ],
            description: 'Spanish general who fought strategically.'
          },
          {
            name: 'Arsenio Linares y Pombo',
            role: 'General',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'experienced',
            quotes: [
              "We will use our experience.",
              "The Americans will not defeat us.",
              "We fight for our country.",
              "We will not retreat.",
              "Victory through experience."
            ],
            description: 'Spanish general with experience in colonial warfare.'
          }
        ],
        generalRoles: [
          { name: 'Spanish Soldier', startingCoins: 45, startingWeapons: ['musket'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For Spain!', 'We defend our empire!', 'Viva España!'] },
          { name: 'Colonial Guard', startingCoins: 40, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'disciplined', quotes: ['We maintain order!', 'For the crown!', 'We are strong!'] },
          { name: 'Navy Sailor', startingCoins: 50, startingWeapons: ['naval cannon'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['We sail for Spain!', 'The sea is ours!', 'We will fight!'] }
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
    inspirationalQuote: {
      text: "Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
      author: "Frank Herbert",
      context: "Dune"
    },
    factionOrder: ['atreides', 'harkonnen'],
    factions: {
      atreides: {
        name: 'House Atreides',
        color: '#1e40af',
        description: 'Noble house seeking to rule Arrakis with honor and justice',
        territories: [
          { name: 'Caladan', cost: 80, description: 'Atreides home' },
          { name: 'Arrakeen', cost: 90, description: 'Arrakis capital' },
          { name: 'Carthag', cost: 85, description: 'Spice city' },
          { name: 'Sietch Tabr', cost: 75, description: 'Fremen sietch' },
          { name: 'Spice Fields', cost: 95, description: 'Melange harvest' }
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
          },
          {
            name: 'Thufir Hawat',
            role: 'Mentat',
            startingCoins: 85,
            startingWeapons: ['logic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'analytical',
            quotes: [
              "We will use logic and reason.",
              "The spice must be protected.",
              "We will defend our people.",
              "Logic will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Mentat and master of assassins for House Atreides.'
          },
          {
            name: 'Dr. Yueh',
            role: 'Suk Doctor',
            startingCoins: 80,
            startingWeapons: ['medical knowledge'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'healing',
            quotes: [
              "We will heal and protect.",
              "The spice must be protected.",
              "We will defend our people.",
              "Healing will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Suk doctor bound by imperial conditioning.'
          },
          {
            name: 'Stilgar',
            role: 'Fremen Naib',
            startingCoins: 90,
            startingWeapons: ['crysknife'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'desert-wise',
            quotes: [
              "We will fight for the desert.",
              "The spice must be protected.",
              "We will defend our people.",
              "The desert will guide us.",
              "The Fremen way will prevail."
            ],
            description: 'Fremen naib and leader of Sietch Tabr.'
          },
          {
            name: 'Chani',
            role: 'Fremen Warrior',
            startingCoins: 85,
            startingWeapons: ['crysknife'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "We will fight for the desert.",
              "The spice must be protected.",
              "We will defend our people.",
              "The desert will guide us.",
              "The Fremen way will prevail."
            ],
            description: 'Fremen warrior and Paul\'s beloved.'
          },
          {
            name: 'Liet-Kynes',
            role: 'Planetologist',
            startingCoins: 80,
            startingWeapons: ['ecological knowledge'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'scientific',
            quotes: [
              "We will understand the desert.",
              "The spice must be protected.",
              "We will defend our people.",
              "Science will guide us.",
              "The ecological way will prevail."
            ],
            description: 'Planetologist and father of Chani.'
          },
          {
            name: 'Jamis',
            role: 'Fremen Warrior',
            startingCoins: 75,
            startingWeapons: ['crysknife'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We will fight for the desert.",
              "The spice must be protected.",
              "We will defend our people.",
              "The desert will guide us.",
              "The Fremen way will prevail."
            ],
            description: 'Fremen warrior who challenges Paul to a duel.'
          },
          {
            name: 'Mapes',
            role: 'Housekeeper',
            startingCoins: 70,
            startingWeapons: ['loyalty'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve House Atreides.",
              "The spice must be protected.",
              "We will defend our people.",
              "Loyalty will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Housekeeper and loyal servant of House Atreides.'
          },
          {
            name: 'Piter de Vries',
            role: 'Mentat',
            startingCoins: 85,
            startingWeapons: ['logic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'analytical',
            quotes: [
              "We will use logic and reason.",
              "The spice must be protected.",
              "We will defend our people.",
              "Logic will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Mentat and master of assassins for House Atreides.'
          },
          {
            name: 'Wellington Yueh',
            role: 'Suk Doctor',
            startingCoins: 80,
            startingWeapons: ['medical knowledge'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'healing',
            quotes: [
              "We will heal and protect.",
              "The spice must be protected.",
              "We will defend our people.",
              "Healing will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Suk doctor bound by imperial conditioning.'
          },
          {
            name: 'Shadout Mapes',
            role: 'Housekeeper',
            startingCoins: 70,
            startingWeapons: ['loyalty'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve House Atreides.",
              "The spice must be protected.",
              "We will defend our people.",
              "Loyalty will guide us.",
              "The Atreides way will prevail."
            ],
            description: 'Housekeeper and loyal servant of House Atreides.'
          }
        ],
        generalRoles: [
          { name: 'Atreides Soldier', startingCoins: 50, startingWeapons: ['lasgun'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['For House Atreides!', 'We fight with honor!', 'The spice must flow!'] },
          { name: 'Fremen Warrior', startingCoins: 55, startingWeapons: ['crysknife'], startingMercenaries: 1, startingCastles: 1, personality: 'fierce', quotes: ['We are the desert!', 'The spice is life!', 'We will not be conquered!'] },
          { name: 'Spice Miner', startingCoins: 45, startingWeapons: ['mining tools'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We harvest the spice!', 'The desert provides!', 'We work for the Duke!'] }
        ]
      },
      harkonnen: {
        name: 'House Harkonnen',
        color: '#8b0000',
        description: 'Ruthless house seeking to control Arrakis through fear and oppression',
        territories: [
          { name: 'Giedi Prime', cost: 85, description: 'Harkonnen world' },
          { name: 'Harkonnen Keep', cost: 90, description: 'Arrakis fortress' },
          { name: 'Spice Refineries', cost: 80, description: 'Processing plants' },
          { name: 'Mining Ops', cost: 70, description: 'Extraction sites' },
          { name: 'Ornithopter Base', cost: 75, description: 'Aerial base' }
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'deceitful',
            quotes: [
              "We will strike from the shadows.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Stealth is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Imperial assassin and Harkonnen ally.'
          },
          {
            name: 'Lady Margot Fenring',
            role: 'Bene Gesserit',
            startingCoins: 85,
            startingWeapons: ['voice'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "We will use the voice.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "The voice is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Bene Gesserit sister and wife of Count Fenring.'
          },
          {
            name: 'Captain Iakin Nefud',
            role: 'Captain',
            startingCoins: 80,
            startingWeapons: ['lasgun'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve the Baron.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Loyalty is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen captain and loyal servant.'
          },
          {
            name: 'Sardaukar Commander',
            role: 'Elite Soldier',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We will fight with discipline.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Discipline is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Elite Sardaukar commander serving the Harkonnens.'
          },
          {
            name: 'Harkonnen Spice Master',
            role: 'Spice Controller',
            startingCoins: 85,
            startingWeapons: ['spice knowledge'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "We will control the spice.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "The spice is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen spice master and controller.'
          },
          {
            name: 'Harkonnen Mentat',
            role: 'Analyst',
            startingCoins: 80,
            startingWeapons: ['logic'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'analytical',
            quotes: [
              "We will use logic.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Logic is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen mentat and analyst.'
          },
          {
            name: 'Harkonnen Agent',
            role: 'Special Operative',
            startingCoins: 75,
            startingWeapons: ['stealth device'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'stealthy',
            quotes: [
              "We will neutralize our enemies.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Stealth is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen special operative and agent.'
          },
          {
            name: 'Harkonnen Interrogator',
            role: 'Intelligence Officer',
            startingCoins: 70,
            startingWeapons: ['truth serum'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'calculating',
            quotes: [
              "We will extract information from our enemies.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Knowledge is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen intelligence officer and interrogator.'
          },
          {
            name: 'Harkonnen Overseer',
            role: 'Facility Manager',
            startingCoins: 75,
            startingWeapons: ['stun baton'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'strict',
            quotes: [
              "We will maintain order.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Fear is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen facility manager and overseer.'
          },
          {
            name: 'Harkonnen Ornithopter Pilot',
            role: 'Aviator',
            startingCoins: 70,
            startingWeapons: ['ornithopter'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'skilled',
            quotes: [
              "We will fly to victory.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Flight is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen ornithopter pilot and aviator.'
          },
          {
            name: 'Harkonnen Spice Miner',
            role: 'Worker',
            startingCoins: 60,
            startingWeapons: ['mining tools'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'enslaved',
            quotes: [
              "We will mine the spice.",
              "The Atreides will not see us coming.",
              "We will eliminate our enemies.",
              "Labor is our weapon.",
              "The Harkonnens will win."
            ],
            description: 'Harkonnen spice miner and worker.'
          }
        ],
        generalRoles: [
          { name: 'Harkonnen Soldier', startingCoins: 50, startingWeapons: ['lasgun'], startingMercenaries: 1, startingCastles: 1, personality: 'ruthless', quotes: ['For House Harkonnen!', 'We crush our enemies!', 'The spice is ours!'] },
          { name: 'Sardaukar', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'elite', quotes: ['We are the Emperor\'s elite!', 'We will not fail!', 'Victory is ours!'] },
          { name: 'Mining Worker', startingCoins: 30, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We work for the Baron!', 'We must survive!', 'The spice must flow!'] }
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
    inspirationalQuote: {
      text: "Banana!",
      author: "Minions",
      context: "Despicable Me"
    },
    factionOrder: ['minions', 'villains'],
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'strong',
            quotes: [
              "We will be strong for our master!",
              "We will lift heavy things!",
              "We are powerful!",
              "Banana!",
              "We will protect!"
            ],
            description: 'Strong minion who can lift heavy objects.'
          },
          {
            name: 'Jerry',
            role: 'Chef',
            startingCoins: 65,
            startingWeapons: ['spatula'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cheerful',
            quotes: [
              "We will cook for our master!",
              "We will make delicious food!",
              "We are chefs!",
              "Banana!",
              "We will feed everyone!"
            ],
            description: 'Cheerful minion who loves to cook.'
          },
          {
            name: 'Tom',
            role: 'Dancer',
            startingCoins: 60,
            startingWeapons: ['rhythm'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'energetic',
            quotes: [
              "We will dance for our master!",
              "We will move to the beat!",
              "We are dancers!",
              "Banana!",
              "We will entertain!"
            ],
            description: 'Energetic minion who loves to dance.'
          },
          {
            name: 'Phil',
            role: 'Scientist',
            startingCoins: 70,
            startingWeapons: ['test tubes'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'curious',
            quotes: [
              "We will experiment for our master!",
              "We will discover new things!",
              "We are scientists!",
              "Banana!",
              "We will learn!"
            ],
            description: 'Curious minion who loves science.'
          },
          {
            name: 'Larry',
            role: 'Gardener',
            startingCoins: 60,
            startingWeapons: ['watering can'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'peaceful',
            quotes: [
              "We will grow plants for our master!",
              "We will make things beautiful!",
              "We are gardeners!",
              "Banana!",
              "We will nurture!"
            ],
            description: 'Peaceful minion who loves gardening.'
          },
          {
            name: 'Mark',
            role: 'Builder',
            startingCoins: 70,
            startingWeapons: ['hammer'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'constructive',
            quotes: [
              "We will build for our master!",
              "We will create amazing things!",
              "We are builders!",
              "Banana!",
              "We will construct!"
            ],
            description: 'Constructive minion who loves building.'
          },
          {
            name: 'Steve',
            role: 'Pilot',
            startingCoins: 75,
            startingWeapons: ['flight controls'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "We will fly for our master!",
              "We will soar through the sky!",
              "We are pilots!",
              "Banana!",
              "We will explore!"
            ],
            description: 'Adventurous minion who loves flying.'
          },
          {
            name: 'Tim',
            role: 'Artist',
            startingCoins: 65,
            startingWeapons: ['paintbrush'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'creative',
            quotes: [
              "We will paint for our master!",
              "We will create beautiful art!",
              "We are artists!",
              "Banana!",
              "We will express!"
            ],
            description: 'Creative minion who loves art.'
          },
          {
            name: 'John',
            role: 'Mechanic',
            startingCoins: 70,
            startingWeapons: ['wrench'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'handy',
            quotes: [
              "We will fix things for our master!",
              "We will repair everything!",
              "We are mechanics!",
              "Banana!",
              "We will maintain!"
            ],
            description: 'Handy minion who loves fixing things.'
          },
          {
            name: 'Mike',
            role: 'Explorer',
            startingCoins: 65,
            startingWeapons: ['compass'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "We will explore for our master!",
              "We will discover new places!",
              "We are explorers!",
              "Banana!",
              "We will adventure!"
            ],
            description: 'Adventurous minion who loves exploring.'
          },
          {
            name: 'Ben',
            role: 'Teacher',
            startingCoins: 70,
            startingWeapons: ['knowledge'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "We will teach for our master!",
              "We will share knowledge!",
              "We are teachers!",
              "Banana!",
              "We will educate!"
            ],
            description: 'Wise minion who loves teaching.'
          }
        ],
        generalRoles: [
          { name: 'Minion Worker', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We work hard!', 'Banana!', 'We help our master!'] },
          { name: 'Minion Guard', startingCoins: 45, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 1, personality: 'protective', quotes: ['We protect!', 'Banana!', 'We guard our master!'] },
          { name: 'Minion Cook', startingCoins: 35, startingWeapons: ['spatula'], startingMercenaries: 0, startingCastles: 1, personality: 'cheerful', quotes: ['We cook!', 'Banana!', 'We feed our master!'] }
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
            startingCastles: 1,
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
            startingCastles: 1,
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
          },
          {
            name: 'El Macho',
            role: 'Supervillain',
            startingCoins: 85,
            startingWeapons: ['muscle'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'macho',
            quotes: [
              "We will be the strongest villain!",
              "Minions will respect our power!",
              "We will crush our enemies!",
              "Strength is our weapon!",
              "We will not be defeated!"
            ],
            description: 'Macho supervillain who relies on brute strength.'
          },
          {
            name: 'Fluffykins',
            role: 'Evil Pet',
            startingCoins: 70,
            startingWeapons: ['cuteness'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'deceptive',
            quotes: [
              "We will trick everyone!",
              "Minions will love our cuteness!",
              "We will be underestimated!",
              "Cuteness is our weapon!",
              "We will surprise our enemies!"
            ],
            description: 'Deceptively cute evil pet.'
          },
          {
            name: 'Herb Overkill',
            role: 'Supervillain',
            startingCoins: 80,
            startingWeapons: ['inventions'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'inventive',
            quotes: [
              "We will invent amazing weapons!",
              "Minions will love our gadgets!",
              "We will be the smartest villain!",
              "Invention is our power!",
              "We will outsmart everyone!"
            ],
            description: 'Inventive supervillain who creates gadgets.'
          },
          {
            name: 'Professor Flux',
            role: 'Mad Scientist',
            startingCoins: 85,
            startingWeapons: ['experiments'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mad',
            quotes: [
              "We will conduct mad experiments!",
              "Minions will help our research!",
              "We will be the maddest scientist!",
              "Madness is our power!",
              "We will create chaos!"
            ],
            description: 'Mad scientist who conducts crazy experiments.'
          },
          {
            name: 'Count Dracula',
            role: 'Vampire',
            startingCoins: 90,
            startingWeapons: ['fangs'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'undead',
            quotes: [
              "We will suck the life from our enemies!",
              "Minions will serve the undead!",
              "We will be the greatest vampire!",
              "Undead is our power!",
              "We will live forever!"
            ],
            description: 'Classic vampire supervillain.'
          },
          {
            name: 'Madame Gasket',
            role: 'Robot Master',
            startingCoins: 80,
            startingWeapons: ['robots'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mechanical',
            quotes: [
              "We will build robot armies!",
              "Minions will serve our machines!",
              "We will be the greatest robot master!",
              "Machines are our power!",
              "We will automate everything!"
            ],
            description: 'Robot master who controls mechanical armies.'
          },
          {
            name: 'Super Silly',
            role: 'Clown Villain',
            startingCoins: 75,
            startingWeapons: ['jokes'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'silly',
            quotes: [
              "We will make everyone laugh!",
              "Minions will love our jokes!",
              "We will be the funniest villain!",
              "Silliness is our power!",
              "We will spread joy!"
            ],
            description: 'Silly clown supervillain.'
          },
          {
            name: 'Evil Queen',
            role: 'Royal Villain',
            startingCoins: 95,
            startingWeapons: ['royal power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'regal',
            quotes: [
              "We will rule with royal power!",
              "Minions will bow to us!",
              "We will be the greatest queen!",
              "Royalty is our power!",
              "We will command respect!"
            ],
            description: 'Regal evil queen supervillain.'
          },
          {
            name: 'Dr. Evil',
            role: 'Classic Villain',
            startingCoins: 85,
            startingWeapons: ['evil plans'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'classic',
            quotes: [
              "We will execute evil plans!",
              "Minions will follow our schemes!",
              "We will be the classic villain!",
              "Evil is our power!",
              "We will achieve world domination!"
            ],
            description: 'Classic supervillain with evil plans.'
          },
          {
            name: 'The Joker',
            role: 'Chaos Villain',
            startingCoins: 90,
            startingWeapons: ['chaos'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'chaotic',
            quotes: [
              "We will create chaos!",
              "Minions will spread our madness!",
              "We will be the agent of chaos!",
              "Chaos is our power!",
              "We will bring down order!"
            ],
            description: 'Chaotic supervillain who thrives on disorder.'
          }
        ],
        generalRoles: [
          { name: 'Villain Henchman', startingCoins: 45, startingWeapons: ['weapon'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We serve our master!', 'We will fight!', 'We are evil!'] },
          { name: 'Evil Scientist', startingCoins: 50, startingWeapons: ['lab equipment'], startingMercenaries: 0, startingCastles: 1, personality: 'brilliant', quotes: ['We will invent!', 'Science is power!', 'We will create!'] },
          { name: 'Villain Guard', startingCoins: 40, startingWeapons: ['shield'], startingMercenaries: 0, startingCastles: 1, personality: 'protective', quotes: ['We protect our master!', 'We will guard!', 'We are strong!'] }
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
    inspirationalQuote: {
      text: "To infinity and beyond!",
      author: "Buzz Lightyear",
      context: "Toy Story"
    },
    factionOrder: ['toys', 'villains'],
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
          { name: 'Jessie', role: 'Cowgirl', startingCoins: 85, startingWeapons: ['lasso'], startingMercenaries: 1, startingCastles: 1, personality: 'brave', quotes: ['We\'re not trash!', 'We belong together!', 'We will find our way!'], description: 'Cowgirl doll who fears abandonment.' },
          { name: 'Mr. Potato Head', role: 'Spud', startingCoins: 75, startingWeapons: ['detachable parts'], startingMercenaries: 1, startingCastles: 1, personality: 'grumpy', quotes: ['We\'re not garbage!', 'We will survive!', 'We stick together!'], description: 'Grumpy potato head with detachable parts.' },
          { name: 'Rex', role: 'Dinosaur', startingCoins: 70, startingWeapons: ['roar'], startingMercenaries: 1, startingCastles: 1, personality: 'anxious', quotes: ['We will be brave!', 'We\'re not scary!', 'We will help!'], description: 'Anxious dinosaur who wants to be scary.' },
          { name: 'Hamm', role: 'Piggy Bank', startingCoins: 65, startingWeapons: ['coins'], startingMercenaries: 1, startingCastles: 1, personality: 'practical', quotes: ['We will save money!', 'We are practical!', 'We will help!'], description: 'Practical piggy bank who loves money.' },
          { name: 'Slinky Dog', role: 'Dog', startingCoins: 70, startingWeapons: ['spring'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['We will stretch!', 'We are loyal!', 'We will help!'], description: 'Loyal dog toy with a spring body.' },
          { name: 'Bo Peep', role: 'Shepherdess', startingCoins: 80, startingWeapons: ['shepherd\'s crook'], startingMercenaries: 1, startingCastles: 1, personality: 'caring', quotes: ['We will care!', 'We are gentle!', 'We will help!'], description: 'Caring shepherdess doll who looks after others.' },
          { name: 'Forky', role: 'Spork', startingCoins: 60, startingWeapons: ['trash'], startingMercenaries: 0, startingCastles: 1, personality: 'confused', quotes: ['We are trash!', 'We are confused!', 'We will help!'], description: 'Confused spork who thinks he\'s trash.' },
          { name: 'Ducky', role: 'Duck', startingCoins: 55, startingWeapons: ['quack'], startingMercenaries: 0, startingCastles: 1, personality: 'cheerful', quotes: ['We will quack!', 'We are cheerful!', 'We will help!'], description: 'Cheerful duck toy who loves to quack.' },
          { name: 'Bunny', role: 'Rabbit', startingCoins: 55, startingWeapons: ['hop'], startingMercenaries: 0, startingCastles: 1, personality: 'energetic', quotes: ['We will hop!', 'We are energetic!', 'We will help!'], description: 'Energetic rabbit toy who loves to hop.' },
          { name: 'Duke Caboom', role: 'Stuntman', startingCoins: 75, startingWeapons: ['motorcycle'], startingMercenaries: 1, startingCastles: 1, personality: 'daring', quotes: ['We will stunt!', 'We are daring!', 'We will help!'], description: 'Daring stuntman toy who loves motorcycles.' },
          { name: 'Giggle McDimples', role: 'Police Officer', startingCoins: 70, startingWeapons: ['badge'], startingMercenaries: 1, startingCastles: 1, personality: 'authoritative', quotes: ['We will enforce!', 'We are authoritative!', 'We will help!'], description: 'Authoritative police officer toy.' },
          { name: 'Buttercup', role: 'Unicorn', startingCoins: 65, startingWeapons: ['magic'], startingMercenaries: 1, startingCastles: 1, personality: 'magical', quotes: ['We will magic!', 'We are magical!', 'We will help!'], description: 'Magical unicorn toy who believes in magic.' },
          { name: 'Trixie', role: 'Triceratops', startingCoins: 70, startingWeapons: ['horns'], startingMercenaries: 1, startingCastles: 1, personality: 'friendly', quotes: ['We will horn!', 'We are friendly!', 'We will help!'], description: 'Friendly triceratops toy with three horns.' },
          { name: 'Peas-in-a-Pod', role: 'Peas', startingCoins: 60, startingWeapons: ['roll'], startingMercenaries: 0, startingCastles: 1, personality: 'playful', quotes: ['We will roll!', 'We are playful!', 'We will help!'], description: 'Playful peas toy that loves to roll.' }
        ],
        generalRoles: [
          { name: 'Toy Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'disciplined', quotes: ['We march!', 'We protect!', 'We serve!'] },
          { name: 'Action Figure', startingCoins: 55, startingWeapons: ['superpowers'], startingMercenaries: 0, startingCastles: 1, personality: 'heroic', quotes: ['We save the day!', 'We are heroes!', 'We fight evil!'] },
          { name: 'Stuffed Animal', startingCoins: 45, startingWeapons: ['hugs'], startingMercenaries: 0, startingCastles: 1, personality: 'cuddly', quotes: ['We give hugs!', 'We are soft!', 'We comfort!'] }
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
          { name: 'Stinky Pete', role: 'Prospector', startingCoins: 85, startingWeapons: ['gold'], startingMercenaries: 1, startingCastles: 1, personality: 'greedy', quotes: ['We will be rich!', 'We deserve better!', 'We will not be forgotten!'], description: 'Greedy prospector toy who wants to be valuable.' },
          { name: 'Al', role: 'Collector', startingCoins: 80, startingWeapons: ['money'], startingMercenaries: 1, startingCastles: 1, personality: 'greedy', quotes: ['We will profit!', 'We are valuable!', 'We will be collected!'], description: 'Toy collector who sees toys as investments.' },
          { name: 'Zurg', role: 'Evil Emperor', startingCoins: 90, startingWeapons: ['death ray'], startingMercenaries: 2, startingCastles: 1, personality: 'evil', quotes: ['We will conquer!', 'We are evil!', 'We will destroy!'], description: 'Evil emperor action figure and Buzz\'s nemesis.' },
          { name: 'Big Baby', role: 'Broken Doll', startingCoins: 80, startingWeapons: ['crying'], startingMercenaries: 1, startingCastles: 1, personality: 'broken', quotes: ['We will cry!', 'We are broken!', 'We will destroy!'], description: 'Broken baby doll who cries constantly.' },
          { name: 'Chunk', role: 'Broken Robot', startingCoins: 75, startingWeapons: ['broken parts'], startingMercenaries: 1, startingCastles: 1, personality: 'angry', quotes: ['We will break!', 'We are angry!', 'We will destroy!'], description: 'Angry broken robot toy.' },
          { name: 'Rocky', role: 'Broken Action Figure', startingCoins: 70, startingWeapons: ['broken arm'], startingMercenaries: 1, startingCastles: 1, personality: 'bitter', quotes: ['We will fight!', 'We are bitter!', 'We will destroy!'], description: 'Bitter broken action figure with a broken arm.' },
          { name: 'Lenny', role: 'Broken Binoculars', startingCoins: 65, startingWeapons: ['broken lenses'], startingMercenaries: 0, startingCastles: 1, personality: 'confused', quotes: ['We will see!', 'We are confused!', 'We will destroy!'], description: 'Confused broken binoculars toy.' },
          { name: 'Sergeant', role: 'Broken Soldier', startingCoins: 70, startingWeapons: ['broken rifle'], startingMercenaries: 1, startingCastles: 1, personality: 'defiant', quotes: ['We will fight!', 'We are defiant!', 'We will destroy!'], description: 'Defiant broken soldier toy.' },
          { name: 'RC', role: 'Broken Car', startingCoins: 75, startingWeapons: ['broken wheels'], startingMercenaries: 1, startingCastles: 1, personality: 'reckless', quotes: ['We will drive!', 'We are reckless!', 'We will destroy!'], description: 'Reckless broken remote control car.' },
          { name: 'Screaming Mimi', role: 'Broken Doll', startingCoins: 65, startingWeapons: ['screaming'], startingMercenaries: 0, startingCastles: 1, personality: 'loud', quotes: ['We will scream!', 'We are loud!', 'We will destroy!'], description: 'Loud broken doll who screams constantly.' },
          { name: 'Legs', role: 'Broken Spider', startingCoins: 60, startingWeapons: ['broken legs'], startingMercenaries: 0, startingCastles: 1, personality: 'crawling', quotes: ['We will crawl!', 'We are crawling!', 'We will destroy!'], description: 'Crawling broken spider toy with missing legs.' },
          { name: 'Ducky & Bunny', role: 'Broken Duo', startingCoins: 70, startingWeapons: ['broken teamwork'], startingMercenaries: 1, startingCastles: 1, personality: 'chaotic', quotes: ['We will chaos!', 'We are chaotic!', 'We will destroy!'], description: 'Chaotic broken duck and bunny duo.' },
          { name: 'Gabby Gabby', role: 'Broken Doll', startingCoins: 80, startingWeapons: ['broken voice'], startingMercenaries: 1, startingCastles: 1, personality: 'manipulative', quotes: ['We will manipulate!', 'We are manipulative!', 'We will destroy!'], description: 'Manipulative broken doll with a broken voice box.' },
          { name: 'Benson', role: 'Broken Ventriloquist', startingCoins: 75, startingWeapons: ['broken puppet'], startingMercenaries: 1, startingCastles: 1, personality: 'creepy', quotes: ['We will puppet!', 'We are creepy!', 'We will destroy!'], description: 'Creepy broken ventriloquist dummy.' }
        ],
        generalRoles: [
          { name: 'Broken Toy', startingCoins: 40, startingWeapons: ['sharp edges'], startingMercenaries: 0, startingCastles: 1, personality: 'angry', quotes: ['We are broken!', 'We will get revenge!', 'We will not be forgotten!'] },
          { name: 'Evil Action Figure', startingCoins: 50, startingWeapons: ['evil powers'], startingMercenaries: 0, startingCastles: 1, personality: 'villainous', quotes: ['We are evil!', 'We will destroy!', 'We will rule!'] },
          { name: 'Abandoned Toy', startingCoins: 35, startingWeapons: ['desperation'], startingMercenaries: 0, startingCastles: 1, personality: 'desperate', quotes: ['We need a home!', 'We will survive!', 'We will not be forgotten!'] }
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
    inspirationalQuote: {
      text: "I am Moana of Motunui. You will board my boat, sail across the sea, and restore the heart of Te Fiti.",
      author: "Moana",
      context: "Moana"
    },
    factionOrder: ['moana', 'teka'],
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
          { name: 'Gramma Tala', role: 'Grandmother', startingCoins: 80, startingWeapons: ['wisdom'], startingMercenaries: 1, startingCastles: 1, personality: 'wise', quotes: ['We are wayfinders!', 'We will follow our hearts!', 'We will save our island!'], description: 'Moana\'s grandmother who tells the old stories.' },
          { name: 'Heihei', role: 'Rooster', startingCoins: 60, startingWeapons: ['pecking'], startingMercenaries: 0, startingCastles: 1, personality: 'clueless', quotes: ['We are confused!', 'We will help!', 'We are here!'], description: 'Clueless rooster who accompanies Moana.' },
          { name: 'Pua', role: 'Pig', startingCoins: 55, startingWeapons: ['snout'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We will follow!', 'We are loyal!', 'We will help!'], description: 'Moana\'s loyal pet pig.' },
          { name: 'Sina', role: 'Mother', startingCoins: 75, startingWeapons: ['wisdom'], startingMercenaries: 1, startingCastles: 1, personality: 'caring', quotes: ['We will protect our daughter!', 'We are mothers!', 'We will guide!'], description: 'Moana\'s mother and Chief Tui\'s wife.' },
          { name: 'Ocean', role: 'Spirit', startingCoins: 95, startingWeapons: ['waves'], startingMercenaries: 2, startingCastles: 1, personality: 'mysterious', quotes: ['We choose the wayfinder!', 'We will guide!', 'We are the ocean!'], description: 'The living ocean that chose Moana.' },
          { name: 'Te Fiti', role: 'Goddess', startingCoins: 110, startingWeapons: ['creation'], startingMercenaries: 3, startingCastles: 2, personality: 'peaceful', quotes: ['We will restore balance!', 'We are creation!', 'We will heal!'], description: 'Goddess of creation and life.' },
          { name: 'Wayfinder Chief', role: 'Leader', startingCoins: 85, startingWeapons: ['navigation'], startingMercenaries: 2, startingCastles: 1, personality: 'brave', quotes: ['We will navigate!', 'We are wayfinders!', 'We will explore!'], description: 'Ancient wayfinder who led voyages.' },
          { name: 'Coconut Villager', role: 'Farmer', startingCoins: 60, startingWeapons: ['coconut'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We will harvest!', 'We are farmers!', 'We will provide!'], description: 'Villager who tends the coconut groves.' },
          { name: 'Fisherman Chief', role: 'Captain', startingCoins: 70, startingWeapons: ['fishing spear'], startingMercenaries: 1, startingCastles: 1, personality: 'skilled', quotes: ['We will fish!', 'We are captains!', 'We will provide!'], description: 'Chief fisherman of the village.' },
          { name: 'Drummer', role: 'Musician', startingCoins: 50, startingWeapons: ['drum'], startingMercenaries: 0, startingCastles: 1, personality: 'rhythmic', quotes: ['We will drum!', 'We are musicians!', 'We will inspire!'], description: 'Village drummer who provides rhythm.' },
          { name: 'Storyteller', role: 'Keeper', startingCoins: 65, startingWeapons: ['stories'], startingMercenaries: 0, startingCastles: 1, personality: 'wise', quotes: ['We will tell stories!', 'We are keepers!', 'We will remember!'], description: 'Keeper of the old stories and traditions.' }
        ],
        generalRoles: [
          { name: 'Villager', startingCoins: 50, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking', quotes: ['We work hard!', 'We protect our island!', 'We are strong!'] },
          { name: 'Fisherman', startingCoins: 55, startingWeapons: ['fishing net'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['We fish!', 'We provide food!', 'We are skilled!'] },
          { name: 'Wayfinder', startingCoins: 60, startingWeapons: ['navigation'], startingMercenaries: 0, startingCastles: 1, personality: 'brave', quotes: ['We navigate!', 'We explore!', 'We are brave!'] }
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
          { name: 'Kakamora', role: 'Pirate', startingCoins: 70, startingWeapons: ['spear'], startingMercenaries: 1, startingCastles: 1, personality: 'aggressive', quotes: ['We will steal!', 'We are pirates!', 'We will attack!'], description: 'Coconut-clad pirates who attack Moana.' },
          { name: 'Tamatoa', role: 'Crab', startingCoins: 85, startingWeapons: ['claws'], startingMercenaries: 1, startingCastles: 1, personality: 'greedy', quotes: ['We will collect treasure!', 'We are shiny!', 'We will not be forgotten!'], description: 'Giant crab who loves treasure and shiny things.' },
          { name: 'Darkness', role: 'Shadow', startingCoins: 80, startingWeapons: ['shadow'], startingMercenaries: 1, startingCastles: 1, personality: 'corrupting', quotes: ['We will corrupt!', 'We are darkness!', 'We will spread!'], description: 'Darkness that corrupts everything it touches.' },
          { name: 'Lava Monster', role: 'Fire Beast', startingCoins: 75, startingWeapons: ['fire'], startingMercenaries: 1, startingCastles: 1, personality: 'destructive', quotes: ['We will burn!', 'We are fire!', 'We will destroy!'], description: 'Fire-breathing monster that spreads destruction.' },
          { name: 'Fire Demon', role: 'Destroyer', startingCoins: 80, startingWeapons: ['flame'], startingMercenaries: 1, startingCastles: 1, personality: 'destructive', quotes: ['We will burn!', 'We are demons!', 'We will destroy!'], description: 'Demon of fire and destruction.' },
          { name: 'Shadow Crab', role: 'Guardian', startingCoins: 70, startingWeapons: ['claws'], startingMercenaries: 1, startingCastles: 1, personality: 'greedy', quotes: ['We will guard treasure!', 'We are crabs!', 'We will collect!'], description: 'Dark crab that guards stolen treasures.' },
          { name: 'Lava Warrior', role: 'Soldier', startingCoins: 65, startingWeapons: ['lava spear'], startingMercenaries: 1, startingCastles: 1, personality: 'aggressive', quotes: ['We will fight!', 'We are warriors!', 'We will attack!'], description: 'Warrior made of molten lava.' },
          { name: 'Dark Ocean Spirit', role: 'Corruptor', startingCoins: 85, startingWeapons: ['dark waves'], startingMercenaries: 2, startingCastles: 1, personality: 'corrupting', quotes: ['We will corrupt!', 'We are darkness!', 'We will spread!'], description: 'Dark spirit that corrupts the ocean.' },
          { name: 'Volcano Guardian', role: 'Protector', startingCoins: 90, startingWeapons: ['volcanic rock'], startingMercenaries: 2, startingCastles: 1, personality: 'destructive', quotes: ['We will protect!', 'We are guardians!', 'We will destroy!'], description: 'Guardian of the volcano\'s power.' },
          { name: 'Fire Sprite', role: 'Minion', startingCoins: 50, startingWeapons: ['spark'], startingMercenaries: 0, startingCastles: 1, personality: 'destructive', quotes: ['We will spark!', 'We are sprites!', 'We will burn!'], description: 'Small fire spirit that spreads flames.' },
          { name: 'Shadow Beast', role: 'Hunter', startingCoins: 75, startingWeapons: ['shadow claws'], startingMercenaries: 1, startingCastles: 1, personality: 'dark', quotes: ['We will hunt!', 'We are beasts!', 'We will stalk!'], description: 'Dark beast that hunts in shadows.' },
          { name: 'Lava Golem', role: 'Construct', startingCoins: 80, startingWeapons: ['molten fists'], startingMercenaries: 1, startingCastles: 1, personality: 'destructive', quotes: ['We will crush!', 'We are golems!', 'We will destroy!'], description: 'Giant construct made of molten rock.' },
          { name: 'Dark Coral', role: 'Corruptor', startingCoins: 60, startingWeapons: ['dark spikes'], startingMercenaries: 0, startingCastles: 1, personality: 'corrupting', quotes: ['We will corrupt!', 'We are coral!', 'We will spread!'], description: 'Corrupted coral that spreads darkness.' }
        ],
        generalRoles: [
          { name: 'Dark Villager', startingCoins: 45, startingWeapons: ['darkness'], startingMercenaries: 0, startingCastles: 1, personality: 'corrupted', quotes: ['We are corrupted!', 'We will spread darkness!', 'We are evil!'] },
          { name: 'Fire Spirit', startingCoins: 50, startingWeapons: ['flame'], startingMercenaries: 0, startingCastles: 1, personality: 'destructive', quotes: ['We are fire!', 'We will burn!', 'We will destroy!'] },
          { name: 'Shadow Warrior', startingCoins: 55, startingWeapons: ['shadow blade'], startingMercenaries: 0, startingCastles: 1, personality: 'dark', quotes: ['We are shadows!', 'We will fight!', 'We are darkness!'] }
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
    inspirationalQuote: {
      text: "Deus vult! (God wills it!)",
      author: "Pope Urban II",
      context: "Call for the First Crusade"
    },
    factionOrder: ['christians', 'muslims'],
    factions: {
      christians: {
        name: 'Christian Crusaders',
        color: '#1e40af',
        description: 'European Christians fighting to reclaim the Holy Land',
        territories: [
          { name: 'Jerusalem', cost: 100, description: 'Holy city' },
          { name: 'Antioch', cost: 85, description: 'Crusader stronghold' },
          { name: 'Edessa', cost: 80, description: 'First county' },
          { name: 'Tripoli', cost: 75, description: 'Coastal county' },
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
          },
          {
            name: 'Raymond of Toulouse',
            role: 'Count of Toulouse',
            startingCoins: 90,
            startingWeapons: ['lance'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will claim our share!",
              "Toulouse will be remembered!",
              "We fight for our own glory!",
              "The Holy Land awaits!",
              "We will not be forgotten!"
            ],
            description: 'French noble who led the First Crusade.'
          },
          {
            name: 'Bohemond of Taranto',
            role: 'Prince of Antioch',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cunning',
            quotes: [
              "We will take Antioch!",
              "The city will be ours!",
              "We will outwit our enemies!",
              "Antioch is our prize!",
              "We will be victorious!"
            ],
            description: 'Norman leader who captured Antioch during the First Crusade.'
          },
          {
            name: 'Tancred of Hauteville',
            role: 'Crusader Prince',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight for glory!",
              "The Holy Land calls!",
              "We will not retreat!",
              "For God and honor!",
              "We will be remembered!"
            ],
            description: 'Crusader prince and nephew of Bohemond.'
          },
          {
            name: 'Hugh of Vermandois',
            role: 'Count of Vermandois',
            startingCoins: 80,
            startingWeapons: ['lance'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We are of royal blood!",
              "The Holy Land awaits!",
              "We will lead the way!",
              "For France and glory!",
              "We will not be denied!"
            ],
            description: 'French count and brother of King Philip I.'
          },
          {
            name: 'Robert of Normandy',
            role: 'Duke of Normandy',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "We will fight for the cross!",
              "Normandy leads the way!",
              "We will liberate Jerusalem!",
              "For God and country!",
              "We will not fail!"
            ],
            description: 'Duke of Normandy and leader of the First Crusade.'
          },
          {
            name: 'Stephen of Blois',
            role: 'Count of Blois',
            startingCoins: 75,
            startingWeapons: ['lance'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cautious',
            quotes: [
              "We must be careful!",
              "The Holy Land is dangerous!",
              "We will plan our moves!",
              "For God and safety!",
              "We will not rush!"
            ],
            description: 'French count who participated in the First Crusade.'
          },
          {
            name: 'Adhemar of Le Puy',
            role: 'Bishop of Le Puy',
            startingCoins: 70,
            startingWeapons: ['cross'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'spiritual',
            quotes: [
              "We fight for God!",
              "The Holy Land is sacred!",
              "We will purify the land!",
              "For the glory of Christ!",
              "We will not waver!"
            ],
            description: 'Papal legate and spiritual leader of the First Crusade.'
          },
          {
            name: 'Peter the Hermit',
            role: 'Preacher',
            startingCoins: 60,
            startingWeapons: ['words'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'charismatic',
            quotes: [
              "We will free Jerusalem!",
              "God calls us to war!",
              "We will march to victory!",
              "The Holy Land awaits!",
              "We will not be stopped!"
            ],
            description: 'Charismatic preacher who led the People Crusade.'
          },
          {
            name: 'Guy of Lusignan',
            role: 'King of Jerusalem',
            startingCoins: 90,
            startingWeapons: ['royal sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unfortunate',
            quotes: [
              "We will reclaim our kingdom!",
              "Jerusalem will be ours again!",
              "We will not give up!",
              "For our lost lands!",
              "We will fight back!"
            ],
            description: 'King of Jerusalem who lost the kingdom to Saladin.'
          },
          {
            name: 'Raynald of Châtillon',
            role: 'Lord of Kerak',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'reckless',
            quotes: [
              "We will strike the enemy!",
              "No mercy for infidels!",
              "We will raid their lands!",
              "For glory and plunder!",
              "We will not be bound!"
            ],
            description: 'Crusader lord known for his aggressive raids.'
          },
          {
            name: 'Gerard de Ridefort',
            role: 'Grand Master of the Templars',
            startingCoins: 85,
            startingWeapons: ['templar sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fanatical',
            quotes: [
              "We are God's warriors!",
              "The Temple will not fall!",
              "We will defend the faith!",
              "For the Holy Temple!",
              "We will not retreat!"
            ],
            description: 'Grand Master of the Knights Templar.'
          },
          {
            name: 'William of Tyre',
            role: 'Archbishop of Tyre',
            startingCoins: 70,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'scholarly',
            quotes: [
              "We will record our deeds!",
              "History will remember us!",
              "We will chronicle the truth!",
              "For posterity!",
              "We will not be forgotten!"
            ],
            description: 'Archbishop and chronicler of the Crusades.'
          },
          {
            name: 'Conrad of Montferrat',
            role: 'Marquis of Montferrat',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will claim our throne!",
              "Montferrat will rule!",
              "We will not be denied!",
              "For our family honor!",
              "We will fight for power!"
            ],
            description: 'Italian noble who claimed the throne of Jerusalem.'
          },
          {
            name: 'Philip II of France',
            role: 'King of France',
            startingCoins: 100,
            startingWeapons: ['royal sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'political',
            quotes: [
              "We will lead France to glory!",
              "The Holy Land awaits!",
              "We will not be outdone!",
              "For France and honor!",
              "We will be remembered!"
            ],
            description: 'King of France who participated in the Third Crusade.'
          }
        ],
        generalRoles: [
          { name: 'Crusader Knight', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'devout', quotes: ['For God!', 'We fight for the cross!', 'Deus vult!'] },
          { name: 'Templar', startingCoins: 65, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'disciplined', quotes: ['We are God\'s warriors!', 'We will not retreat!', 'For the Temple!'] },
          { name: 'Pilgrim', startingCoins: 40, startingWeapons: ['staff'], startingMercenaries: 0, startingCastles: 1, personality: 'faithful', quotes: ['We seek the Holy Land!', 'We are pilgrims!', 'For our souls!'] }
        ]
      },
      muslims: {
        name: 'Muslim Defenders',
        color: '#dc2626',
        description: 'Muslim forces defending the Holy Land from Christian invaders',
        territories: [
          { name: 'Damascus', cost: 90, description: 'Syrian capital' },
          { name: 'Cairo', cost: 85, description: 'Egypt capital' },
          { name: 'Baghdad', cost: 80, description: 'Abbasid seat' },
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
            name: "Al-Mu'azzam",
            role: 'Ayyubid Prince',
            startingCoins: 85,
            startingWeapons: ['bow'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'defensive',
            quotes: [
              "We will defend our lands!",
              "The Franks will not advance!",
              "We will hold our positions!",
              "Allah protects the faithful!",
              "We will not yield!"
            ],
            description: 'Ayyubid prince who defended Muslim territories.'
          },
          {
            name: 'Al-Adil',
            role: 'Ayyubid Sultan',
            startingCoins: 95,
            startingWeapons: ['scimitar'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will outmaneuver the Franks!",
              "The Holy Land is ours!",
              "We will use our wisdom!",
              "Allah guides our strategy!",
              "We will not be outsmarted!"
            ],
            description: 'Ayyubid sultan and brother of Saladin.'
          },
          {
            name: 'Al-Ashraf',
            role: 'Ayyubid Sultan',
            startingCoins: 90,
            startingWeapons: ['mace'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will reclaim our honor!",
              "The Franks will pay!",
              "We will not be defeated!",
              "Allah strengthens our resolve!",
              "We will fight to the end!"
            ],
            description: 'Ayyubid sultan who fought against the Crusaders.'
          },
          {
            name: 'Qutuz',
            role: 'Mamluk Sultan',
            startingCoins: 100,
            startingWeapons: ['mamluk sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will face the Mongols!",
              "The Holy Land will be defended!",
              "We will not flee!",
              "Allah gives us courage!",
              "We will stand firm!"
            ],
            description: 'Mamluk sultan who defeated the Mongols.'
          },
          {
            name: 'Al-Mansur',
            role: 'Abbasid Caliph',
            startingCoins: 80,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'spiritual',
            quotes: [
              "We are the spiritual leader!",
              "The faithful look to us!",
              "We will guide our people!",
              "Allah has chosen us!",
              "We will lead with wisdom!"
            ],
            description: 'Abbasid caliph and spiritual leader of the Muslim world.'
          },
          {
            name: 'Al-Nasir',
            role: 'Abbasid Caliph',
            startingCoins: 85,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "We will restore our power!",
              "The caliphate will be strong!",
              "We will unite the faithful!",
              "Allah blesses our rule!",
              "We will not be weak!"
            ],
            description: 'Abbasid caliph who sought to restore caliphal power.'
          },
          {
            name: 'Al-Mustansir',
            role: 'Fatimid Caliph',
            startingCoins: 75,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We are the true caliph!",
              "Cairo is our capital!",
              "We will defend our realm!",
              "Allah protects us!",
              "We will not submit!"
            ],
            description: 'Fatimid caliph who ruled from Cairo.'
          },
          {
            name: 'Al-Hakim',
            role: 'Fatimid Caliph',
            startingCoins: 70,
            startingWeapons: ['mysticism'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "We are divine!",
              "The faithful must obey!",
              "We will purify the land!",
              "Allah speaks through us!",
              "We will not be questioned!"
            ],
            description: 'Fatimid caliph known for his mystical beliefs.'
          },
          {
            name: 'Al-Afdal',
            role: 'Fatimid Vizier',
            startingCoins: 80,
            startingWeapons: ['administration'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern wisely!",
              "The empire needs order!",
              "We will manage our resources!",
              "Allah guides our decisions!",
              "We will not waste!"
            ],
            description: 'Fatimid vizier and administrator.'
          },
          {
            name: 'Al-Mustali',
            role: 'Fatimid Caliph',
            startingCoins: 75,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'legitimate',
            quotes: [
              "We are the rightful ruler!",
              "The throne is ours!",
              "We will maintain our power!",
              "Allah supports us!",
              "We will not be usurped!"
            ],
            description: 'Fatimid caliph who claimed legitimacy.'
          },
          {
            name: 'Al-Amir',
            role: 'Fatimid Caliph',
            startingCoins: 70,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'young',
            quotes: [
              "We will prove ourselves!",
              "Youth will not stop us!",
              "We will lead with strength!",
              "Allah gives us power!",
              "We will not be underestimated!"
            ],
            description: 'Young Fatimid caliph who ruled briefly.'
          },
          {
            name: 'Al-Hafiz',
            role: 'Fatimid Caliph',
            startingCoins: 80,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'experienced',
            quotes: [
              "We have seen much!",
              "Experience guides us!",
              "We will use our knowledge!",
              "Allah has taught us!",
              "We will not repeat mistakes!"
            ],
            description: 'Experienced Fatimid caliph.'
          },
          {
            name: 'Al-Zafir',
            role: 'Fatimid Caliph',
            startingCoins: 75,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will restore our glory!",
              "The Fatimids will rise!",
              "We will not be forgotten!",
              "Allah strengthens us!",
              "We will fight for our legacy!"
            ],
            description: 'Fatimid caliph who sought to restore Fatimid power.'
          },
          {
            name: 'Al-Faiz',
            role: 'Fatimid Caliph',
            startingCoins: 70,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'hopeful',
            quotes: [
              "We will bring prosperity!",
              "The future is bright!",
              "We will lead with hope!",
              "Allah blesses our reign!",
              "We will not despair!"
            ],
            description: 'Fatimid caliph who ruled during difficult times.'
          },
          {
            name: 'Al-Adid',
            role: 'Fatimid Caliph',
            startingCoins: 65,
            startingWeapons: ['authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'final',
            quotes: [
              "We are the last!",
              "The Fatimids end with us!",
              "We will go with dignity!",
              "Allah has chosen our fate!",
              "We will not be forgotten!"
            ],
            description: 'Last Fatimid caliph before the Ayyubid takeover.'
          },
          {
            name: 'Al-Mustansir II',
            role: 'Fatimid Pretender',
            startingCoins: 60,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'pretender',
            quotes: [
              "We are the true caliph!",
              "Our claim is legitimate!",
              "We will restore our line!",
              "Allah supports us!",
              "We will not give up!"
            ],
            description: 'Fatimid pretender who claimed the caliphate.'
          },
          {
            name: 'Al-Mustali II',
            role: 'Fatimid Pretender',
            startingCoins: 55,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'persistent',
            quotes: [
              "We will not surrender!",
              "Our bloodline continues!",
              "We will fight for our rights!",
              "Allah will restore us!",
              "We will not be silenced!"
            ],
            description: 'Fatimid pretender who continued the claim.'
          },
          {
            name: 'Al-Amir II',
            role: 'Fatimid Pretender',
            startingCoins: 50,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'hopeful',
            quotes: [
              "We will restore our dynasty!",
              "The Fatimids will return!",
              "We will not be forgotten!",
              "Allah will help us!",
              "We will fight for our legacy!"
            ],
            description: 'Fatimid pretender who hoped to restore the dynasty.'
          },
          {
            name: 'Al-Hafiz II',
            role: 'Fatimid Pretender',
            startingCoins: 45,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will not give up!",
              "Our claim is just!",
              "We will fight to the end!",
              "Allah will judge us!",
              "We will not be defeated!"
            ],
            description: 'Fatimid pretender who refused to surrender his claim.'
          },
          {
            name: 'Al-Zafir II',
            role: 'Fatimid Pretender',
            startingCoins: 40,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'stubborn',
            quotes: [
              "We will not yield!",
              "Our bloodline is pure!",
              "We will restore our glory!",
              "Allah will support us!",
              "We will not be broken!"
            ],
            description: 'Fatimid pretender who stubbornly maintained his claim.'
          },
          {
            name: 'Al-Faiz II',
            role: 'Fatimid Pretender',
            startingCoins: 35,
            startingWeapons: ['claim'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'persistent',
            quotes: [
              "We will continue the fight!",
              "Our dynasty will survive!",
              "We will not be forgotten!",
              "Allah will remember us!",
              "We will not surrender!"
            ],
            description: 'Fatimid pretender who continued the struggle.'
          }
        ],
        generalRoles: [
          { name: 'Mamluk Warrior', startingCoins: 55, startingWeapons: ['scimitar'], startingMercenaries: 1, startingCastles: 1, personality: 'elite', quotes: ['We are the chosen!', 'We will not fail!', 'For the sultan!'] },
          { name: 'Bedouin Raider', startingCoins: 50, startingWeapons: ['spear'], startingMercenaries: 0, startingCastles: 1, personality: 'nomadic', quotes: ['We strike from the desert!', 'We are swift!', 'We will raid!'] },
          { name: 'Muslim Scholar', startingCoins: 45, startingWeapons: ['wisdom'], startingMercenaries: 0, startingCastles: 1, personality: 'learned', quotes: ['We study the Quran!', 'We are wise!', 'We guide the faithful!'] }
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
    inspirationalQuote: {
      text: "I am not afraid... I was born to do this.",
      author: "Joan of Arc",
      context: "French heroine during the Hundred Years' War"
    },
    factionOrder: ['england', 'france'],
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
          },
          {
            name: 'Richard II',
            role: 'King of England',
            startingCoins: 85,
            startingWeapons: ['royal scepter'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'unstable',
            quotes: [
              "We will rule with absolute power!",
              "The crown is divine!",
              "We will not be challenged!",
              "England will be strong!",
              "We are the king!"
            ],
            description: 'English king known for his tyrannical rule.'
          },
          {
            name: 'John Talbot',
            role: 'Earl of Shrewsbury',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will fight to the end!",
              "Shrewsbury will not yield!",
              "We are English warriors!",
              "The French will fall!",
              "We will be victorious!"
            ],
            description: 'English military leader and noble.'
          },
          {
            name: 'William de la Pole',
            role: 'Duke of Suffolk',
            startingCoins: 75,
            startingWeapons: ['mace'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We will negotiate peace!",
              "Suffolk will find a way!",
              "We will avoid bloodshed!",
              "The war must end!",
              "We will be wise!"
            ],
            description: 'English noble known for his diplomatic skills.'
          },
          {
            name: 'Humphrey of Gloucester',
            role: 'Duke of Gloucester',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'scholarly',
            quotes: [
              "We will study war!",
              "Gloucester will learn!",
              "We will be prepared!",
              "Knowledge is power!",
              "We will be wise!"
            ],
            description: 'English noble known for his learning and scholarship.'
          },
          {
            name: 'Richard Plantagenet',
            role: 'Duke of York',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will claim the throne!",
              "York will rule!",
              "We have the right!",
              "The crown is ours!",
              "We will not be denied!"
            ],
            description: 'English noble who claimed the throne.'
          },
          {
            name: 'Edmund Mortimer',
            role: 'Earl of March',
            startingCoins: 65,
            startingWeapons: ['lance'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve the crown!",
              "March will be loyal!",
              "We will fight!",
              "The king commands!",
              "We will obey!"
            ],
            description: 'English noble loyal to the crown.'
          },
          {
            name: 'Thomas Mowbray',
            role: 'Duke of Norfolk',
            startingCoins: 60,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We are Norfolk!",
              "We will fight with honor!",
              "We are proud!",
              "The duchy will stand!",
              "We will not yield!"
            ],
            description: 'English noble and military leader.'
          },
          {
            name: 'Henry Percy',
            role: 'Earl of Northumberland',
            startingCoins: 55,
            startingWeapons: ['spear'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'rebellious',
            quotes: [
              "We will rebel!",
              "Northumberland will rise!",
              "We will not be oppressed!",
              "The king must listen!",
              "We will fight!"
            ],
            description: 'English noble known for his rebellious nature.'
          },
          {
            name: 'Ralph Neville',
            role: 'Earl of Westmorland',
            startingCoins: 50,
            startingWeapons: ['sword'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'steady',
            quotes: [
              "We will be steady!",
              "Westmorland will endure!",
              "We will not waver!",
              "The earl will stand!",
              "We will be strong!"
            ],
            description: 'English noble known for his steady leadership.'
          }
        ],
        generalRoles: [
          { name: 'English Longbowman', startingCoins: 60, startingWeapons: ['longbow'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['We are the best archers!', 'We will rain arrows!', 'For England!'] },
          { name: 'English Knight', startingCoins: 65, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'chivalric', quotes: ['We fight with honor!', 'We are knights!', 'For the crown!'] },
          { name: 'English Footman', startingCoins: 45, startingWeapons: ['spear'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We serve the king!', 'We will fight!', 'For England!'] }
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
          },
          {
            name: 'Louis XI',
            role: 'King of France',
            startingCoins: 85,
            startingWeapons: ['royal dagger'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cunning',
            quotes: [
              "We will outsmart the English!",
              "France will be cunning!",
              "We will use strategy!",
              "The English will be fooled!",
              "We will be victorious!"
            ],
            description: 'French king known for his cunning and diplomacy.'
          },
          {
            name: 'Charles the Bold',
            role: 'Duke of Burgundy',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "We will expand Burgundy!",
              "The duchy will be great!",
              "We will not be limited!",
              "Burgundy will rule!",
              "We will be powerful!"
            ],
            description: 'Duke of Burgundy known for his ambition.'
          },
          {
            name: 'Jean de Dunois',
            role: 'Bastard of Orleans',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We will defend Orleans!",
              "The city will stand!",
              "We will not surrender!",
              "Orleans will be free!",
              "We will fight!"
            ],
            description: 'French military leader who defended Orleans.'
          },
          {
            name: 'Gilles de Rais',
            role: 'Marshal of France',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'dark',
            quotes: [
              "We will fight with darkness!",
              "The marshal will lead!",
              "We will be feared!",
              "France will be strong!",
              "We will not yield!"
            ],
            description: 'French marshal known for his dark reputation.'
          },
          {
            name: 'Jean Bureau',
            role: 'Master of Artillery',
            startingCoins: 65,
            startingWeapons: ['cannon'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'innovative',
            quotes: [
              "We will use cannons!",
              "Artillery will win!",
              "We will be modern!",
              "The English will fall!",
              "We will be advanced!"
            ],
            description: 'French artillery master who revolutionized warfare.'
          },
          {
            name: 'Louis de Bourbon',
            role: 'Duke of Bourbon',
            startingCoins: 60,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "We are Bourbon!",
              "The duchy will stand!",
              "We will fight with honor!",
              "France will be proud!",
              "We will not yield!"
            ],
            description: 'French noble and military leader.'
          },
          {
            name: 'Jean de Clermont',
            role: 'Marshal of France',
            startingCoins: 55,
            startingWeapons: ['lance'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'chivalric',
            quotes: [
              "We will fight with honor!",
              "The marshal will lead!",
              "We will be chivalrous!",
              "France will be noble!",
              "We will not retreat!"
            ],
            description: 'French marshal known for his chivalry.'
          },
          {
            name: 'Pierre de Breze',
            role: 'Seneschal of Normandy',
            startingCoins: 50,
            startingWeapons: ['sword'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve Normandy!",
              "The seneschal will protect!",
              "We will be loyal!",
              "Normandy will stand!",
              "We will not fail!"
            ],
            description: 'French seneschal who protected Normandy.'
          },
          {
            name: 'Antoine de Chabannes',
            role: 'Count of Dammartin',
            startingCoins: 45,
            startingWeapons: ['sword'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "We will defend Dammartin!",
              "The count will fight!",
              "We will be determined!",
              "France will not fall!",
              "We will stand!"
            ],
            description: 'French count known for his determination.'
          }
        ],
        generalRoles: [
          { name: 'French Knight', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'proud', quotes: ['We are French knights!', 'We will defend!', 'For France!'] },
          { name: 'French Crossbowman', startingCoins: 55, startingWeapons: ['crossbow'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled', quotes: ['We are skilled!', 'We will shoot!', 'For the king!'] },
          { name: 'French Peasant', startingCoins: 40, startingWeapons: ['pitchfork'], startingMercenaries: 0, startingCastles: 1, personality: 'determined', quotes: ['We will fight!', 'We are strong!', 'For our land!'] }
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
    inspirationalQuote: {
      text: "Workers of the world, unite!",
      author: "Karl Marx",
      context: "The Communist Manifesto"
    },
    factionOrder: ['reds', 'whites'],
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
            startingCastles: 1,
            personality: 'ruthless',
            quotes: [
              "We will eliminate counter-revolutionaries!",
              "The Cheka will protect the revolution!",
              "We will root out enemies!",
              "Revolutionary justice will prevail!",
              "We will not be merciful!"
            ],
            description: 'Head of the Cheka secret police.'
          },
          {
            name: 'Nikolai Bukharin',
            role: 'Bolshevik Theorist',
            startingCoins: 85,
            startingWeapons: ['economic theory'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'intellectual',
            quotes: [
              "We will build the new economy!",
              "Socialism will be scientific!",
              "We will plan production!",
              "The workers will control!",
              "We will be efficient!"
            ],
            description: 'Bolshevik theorist and economic planner.'
          },
          {
            name: 'Grigory Zinoviev',
            role: 'Bolshevik Leader',
            startingCoins: 80,
            startingWeapons: ['party organization'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'organizational',
            quotes: [
              "We will organize the party!",
              "The Bolsheviks will be strong!",
              "We will lead the workers!",
              "Revolution will spread!",
              "We will not fail!"
            ],
            description: 'Bolshevik leader and party organizer.'
          },
          {
            name: 'Lev Kamenev',
            role: 'Bolshevik Leader',
            startingCoins: 75,
            startingWeapons: ['political strategy'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will plan our strategy!",
              "The party will be wise!",
              "We will outmaneuver enemies!",
              "Revolution will succeed!",
              "We will be patient!"
            ],
            description: 'Bolshevik leader known for his strategic thinking.'
          },
          {
            name: 'Alexei Rykov',
            role: 'Soviet Premier',
            startingCoins: 70,
            startingWeapons: ['government authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern efficiently!",
              "The Soviet will function!",
              "We will build the state!",
              "Socialism will work!",
              "We will be practical!"
            ],
            description: 'Soviet premier and government administrator.'
          },
          {
            name: 'Mikhail Kalinin',
            role: 'Soviet President',
            startingCoins: 65,
            startingWeapons: ['ceremonial authority'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'ceremonial',
            quotes: [
              "We will represent the people!",
              "The Soviet will be legitimate!",
              "We will be the face!",
              "Socialism will be official!",
              "We will be respected!"
            ],
            description: 'Ceremonial president of the Soviet Union.'
          },
          {
            name: 'Vyacheslav Molotov',
            role: 'Bolshevik Diplomat',
            startingCoins: 60,
            startingWeapons: ['diplomatic skills'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We will negotiate!",
              "The Soviet will be recognized!",
              "We will find allies!",
              "Revolution will be supported!",
              "We will be diplomatic!"
            ],
            description: 'Bolshevik diplomat and foreign minister.'
          },
          {
            name: 'Kliment Voroshilov',
            role: 'Red Army Marshal',
            startingCoins: 55,
            startingWeapons: ['military command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'military',
            quotes: [
              "We will command the army!",
              "The Red Army will be strong!",
              "We will defend the revolution!",
              "Socialism will be protected!",
              "We will be victorious!"
            ],
            description: 'Red Army marshal and military leader.'
          },
          {
            name: 'Semyon Budyonny',
            role: 'Cavalry Commander',
            startingCoins: 50,
            startingWeapons: ['cavalry'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'cavalry',
            quotes: [
              "We will charge!",
              "The cavalry will win!",
              "We will be fast!",
              "Revolution will be swift!",
              "We will be mobile!"
            ],
            description: 'Red Army cavalry commander.'
          },
          {
            name: 'Grigory Petrovsky',
            role: 'Ukrainian Bolshevik',
            startingCoins: 45,
            startingWeapons: ['regional influence'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'regional',
            quotes: [
              "We will organize Ukraine!",
              "The region will be red!",
              "We will spread revolution!",
              "Socialism will be local!",
              "We will be regional!"
            ],
            description: 'Ukrainian Bolshevik leader.'
          }
        ],
        generalRoles: [
          { name: 'Red Army Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'revolutionary', quotes: ['For the revolution!', 'We are the Red Army!', 'Workers unite!'] },
          { name: 'Bolshevik Worker', startingCoins: 45, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'dedicated', quotes: ['We work for the revolution!', 'We are workers!', 'For socialism!'] },
          { name: 'Red Guard', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['We protect the revolution!', 'We are guards!', 'For the party!'] }
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
          },
          {
            name: 'Mikhail Alekseyev',
            role: 'White General',
            startingCoins: 85,
            startingWeapons: ['military command'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'experienced',
            quotes: [
              "We will use our experience!",
              "The Whites will be professional!",
              "We will restore the army!",
              "Russia will be disciplined!",
              "We will not be amateur!"
            ],
            description: 'Experienced general who organized the White movement.'
          },
          {
            name: 'Vladimir Kappel',
            role: 'White General',
            startingCoins: 80,
            startingWeapons: ['infantry tactics'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'tactical',
            quotes: [
              "We will use tactics!",
              "The Whites will be smart!",
              "We will outmaneuver Reds!",
              "Russia will be strategic!",
              "We will not be foolish!"
            ],
            description: 'White general known for his tactical skills.'
          },
          {
            name: 'Roman von Ungern-Sternberg',
            role: 'White General',
            startingCoins: 75,
            startingWeapons: ['cavalry'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'eccentric',
            quotes: [
              "We will restore the monarchy!",
              "The Whites will be mystical!",
              "We will fight for the Tsar!",
              "Russia will be traditional!",
              "We will not be modern!"
            ],
            description: 'Eccentric White general who fought in Mongolia.'
          },
          {
            name: 'Boris Savinkov',
            role: 'White Revolutionary',
            startingCoins: 70,
            startingWeapons: ['revolutionary tactics'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'revolutionary',
            quotes: [
              "We will fight the Bolsheviks!",
              "The Whites will be revolutionary!",
              "We will overthrow Lenin!",
              "Russia will be free!",
              "We will not be communist!"
            ],
            description: 'White revolutionary who fought against the Bolsheviks.'
          },
          {
            name: 'Nikolai Makhno',
            role: 'Anarchist Leader',
            startingCoins: 65,
            startingWeapons: ['guerrilla tactics'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'anarchist',
            quotes: [
              "We will fight all authority!",
              "The anarchists will be free!",
              "We will reject all rulers!",
              "Ukraine will be independent!",
              "We will not be ruled!"
            ],
            description: 'Ukrainian anarchist who fought both Reds and Whites.'
          },
          {
            name: 'Pavel Milyukov',
            role: 'Liberal Leader',
            startingCoins: 60,
            startingWeapons: ['political influence'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'liberal',
            quotes: [
              "We will establish democracy!",
              "The liberals will be moderate!",
              "We will find compromise!",
              "Russia will be democratic!",
              "We will not be extreme!"
            ],
            description: 'Liberal politician who opposed the Bolsheviks.'
          },
          {
            name: 'Alexander Kerensky',
            role: 'Provisional Government Leader',
            startingCoins: 55,
            startingWeapons: ['government authority'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'moderate',
            quotes: [
              "We will govern moderately!",
              "The provisional government will work!",
              "We will find middle ground!",
              "Russia will be stable!",
              "We will not be radical!"
            ],
            description: 'Leader of the Provisional Government overthrown by the Bolsheviks.'
          },
          {
            name: 'Vasily Shulgin',
            role: 'Monarchist Leader',
            startingCoins: 50,
            startingWeapons: ['monarchist ideology'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'monarchist',
            quotes: [
              "We will restore the monarchy!",
              "The monarchists will be loyal!",
              "We will bring back the Tsar!",
              "Russia will be traditional!",
              "We will not be republican!"
            ],
            description: 'Monarchist leader who supported the restoration of the Tsar.'
          },
          {
            name: 'Sergei Sazonov',
            role: 'White Diplomat',
            startingCoins: 45,
            startingWeapons: ['diplomatic skills'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'diplomatic',
            quotes: [
              "We will find foreign support!",
              "The Whites will be recognized!",
              "We will negotiate!",
              "Russia will have allies!",
              "We will not be isolated!"
            ],
            description: 'White diplomat who sought foreign support.'
          }
        ],
        generalRoles: [
          { name: 'White Army Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['For Russia!', 'We are the White Army!', 'Down with the Reds!'] },
          { name: 'Cossack', startingCoins: 55, startingWeapons: ['saber'], startingMercenaries: 0, startingCastles: 1, personality: 'fierce', quotes: ['We are Cossacks!', 'We will fight!', 'For the Tsar!'] },
          { name: 'White Officer', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 0, startingCastles: 1, personality: 'noble', quotes: ['We are officers!', 'We will lead!', 'For honor!'] }
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

  worldWar1: {
    id: 'worldWar1',
    name: 'World War 1',
    type: 'historical',
    description: 'The Great War between the Allied Powers and Central Powers.',
    inspirationalQuote: {
      text: "The war to end all wars.",
      author: "H.G. Wells",
      context: "British writer describing World War I"
    },
    factionOrder: ['alliedPowers', 'centralPowers'],
    factions: {
      alliedPowers: {
        name: 'Allied Powers',
        color: '#2ecc71', // Green
        description: 'The Allied Powers including Britain, France, Russia, and later the US',
        territories: [
          { name: 'Western Front', cost: 100, description: 'France & Belgium trenches' },
          { name: 'Eastern Front', cost: 95, description: 'Russia vs. Central Powers' },
          { name: 'Gallipoli', cost: 90, description: 'Dardanelles campaign' },
          { name: 'Mesopotamia', cost: 85, description: 'Tigris–Euphrates theater' },
          { name: 'Palestine', cost: 80, description: 'Sinai & Palestine front' },
          { name: 'Italian Front', cost: 75, description: 'Alpine warfare' },
          { name: 'Balkan Front', cost: 70, description: 'Salonika front' },
          { name: 'African Colonies', cost: 65, description: 'East & West Africa' },
          { name: 'Naval Blockade', cost: 60, description: 'Royal Navy blockade' },
          { name: 'Home Front', cost: 55, description: 'War industries' }
        ],
        characters: [
          {
            name: 'Woodrow Wilson',
            role: 'US President',
            startingCoins: 150,
            startingWeapons: ['Fourteen Points', 'US Army'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'idealistic',
            quotes: [
              "The world must be made safe for democracy.",
              "Peace without victory.",
              "We shall fight for the things we have always carried nearest our hearts.",
              "The right is more precious than peace.",
              "America is privileged to spend her blood and her might."
            ],
            description: 'US President who led America into the war and proposed the League of Nations.'
          },
          {
            name: 'David Lloyd George',
            role: 'British Prime Minister',
            startingCoins: 145,
            startingWeapons: ['Royal Navy', 'British Army'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'determined',
            quotes: [
              "We shall fight on the beaches, we shall fight on the landing grounds.",
              "The war to end all wars.",
              "Britain will never surrender.",
              "We must win this war for civilization.",
              "The British Empire stands united."
            ],
            description: 'British Prime Minister who led Britain through the Great War.'
          },
          {
            name: 'Georges Clemenceau',
            role: 'French Prime Minister',
            startingCoins: 140,
            startingWeapons: ['French Army', 'Trenches'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'fierce',
            quotes: [
              "I wage war!",
              "France will never be defeated.",
              "We fight for our homeland.",
              "The Tiger of France will prevail.",
              "Victory or death!"
            ],
            description: 'French Prime Minister known as the Tiger for his fierce determination.'
          },
          {
            name: 'Nicholas II',
            role: 'Tsar of Russia',
            startingCoins: 135,
            startingWeapons: ['Russian Army', 'Cossacks'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'autocratic',
            quotes: [
              "I am the Tsar of all Russia.",
              "The Russian Empire will triumph.",
              "We fight for Mother Russia.",
              "God is with us.",
              "Victory will be ours."
            ],
            description: 'Last Tsar of Russia who led the country into war.'
          },
          {
            name: 'Vittorio Orlando',
            role: 'Italian Prime Minister',
            startingCoins: 130,
            startingWeapons: ['Italian Army', 'Alpine Troops'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'nationalistic',
            quotes: [
              "Italy will reclaim her rightful territories.",
              "We fight for Italian unification.",
              "The Italian Army will prevail.",
              "Victory for Italy!",
              "We shall not be denied."
            ],
            description: 'Italian Prime Minister who led Italy into the war.'
          }
        ],
        generalRoles: [
          { name: 'Allied Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'brave' },
          { name: 'Allied Officer', startingCoins: 40, startingWeapons: ['Rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'leadership' },
          { name: 'Allied Commander', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'strategic' }
        ]
      },
      centralPowers: {
        name: 'Central Powers',
        color: '#e74c3c', // Red
        description: 'The Central Powers including Germany, Austria-Hungary, and the Ottoman Empire',
        territories: [
          { name: 'Western Front', cost: 100, description: 'Against France & Britain' },
          { name: 'Eastern Front', cost: 95, description: 'Against Russia' },
          { name: 'Balkan Front', cost: 90, description: 'Serbia & Salonika' },
          { name: 'Middle East', cost: 85, description: 'Ottoman campaigns' },
          { name: 'Italian Front', cost: 80, description: 'Isonzo & Alps' },
          { name: 'African Colonies', cost: 75, description: 'German Africa' },
          { name: 'Naval Warfare', cost: 70, description: 'U-boats & raids' },
          { name: 'Home Front', cost: 65, description: 'War industries' },
          { name: 'Austrian Empire', cost: 60, description: 'Dual Monarchy' },
          { name: 'Ottoman Empire', cost: 55, description: 'Anatolia & Levant' }
        ],
        characters: [
          {
            name: 'Kaiser Wilhelm II',
            role: 'German Emperor',
            startingCoins: 150,
            startingWeapons: ['German Army', 'U-boats'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'militaristic',
            quotes: [
              "Germany will rule the world!",
              "We fight for German supremacy.",
              "The German Army is invincible.",
              "Victory will be ours!",
              "Deutschland über alles!"
            ],
            description: 'German Emperor who led Germany into the Great War.'
          },
          {
            name: 'Franz Joseph I',
            role: 'Emperor of Austria-Hungary',
            startingCoins: 145,
            startingWeapons: ['Austro-Hungarian Army', 'Cavalry'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'imperial',
            quotes: [
              "The Austro-Hungarian Empire will prevail.",
              "We fight for our empire.",
              "The Habsburg dynasty endures.",
              "Victory for Austria-Hungary!",
              "We shall not be defeated."
            ],
            description: 'Emperor of Austria-Hungary who declared war on Serbia.'
          },
          {
            name: 'Enver Pasha',
            role: 'Ottoman War Minister',
            startingCoins: 140,
            startingWeapons: ['Ottoman Army', 'Camel Corps'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'ambitious',
            quotes: [
              "The Ottoman Empire will be restored.",
              "We fight for Turkish independence.",
              "The Young Turks will prevail.",
              "Victory for the Ottomans!",
              "We shall reclaim our glory."
            ],
            description: 'Ottoman War Minister who led Turkey into the war.'
          },
          {
            name: 'Paul von Hindenburg',
            role: 'German Field Marshal',
            startingCoins: 135,
            startingWeapons: ['German Army', 'Artillery'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strategic',
            quotes: [
              "The German Army will triumph.",
              "We fight with German precision.",
              "Victory through superior tactics.",
              "The German way of war.",
              "We shall not be denied."
            ],
            description: 'German Field Marshal who led the German Army.'
          },
          {
            name: 'Erich Ludendorff',
            role: 'German General',
            startingCoins: 130,
            startingWeapons: ['German Army', 'Machine Guns'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'aggressive',
            quotes: [
              "We must win this war!",
              "The German Army is unstoppable.",
              "Victory through superior firepower.",
              "We fight for German honor.",
              "The German way will prevail."
            ],
            description: 'German General who planned major offensives.'
          }
        ],
        generalRoles: [
          { name: 'Central Powers Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Central Powers Officer', startingCoins: 40, startingWeapons: ['Rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'disciplined' },
          { name: 'Central Powers Commander', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'militaristic' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Neutral Nations', cost: 90, description: 'Countries that remained neutral, very high strategic value' },
      { name: 'International Waters', cost: 85, description: 'Oceanic trade routes and naval warfare, high strategic value' },
      { name: 'Colonial Territories', cost: 80, description: 'Overseas colonies and resources, high strategic value' },
      { name: 'Diplomatic Corps', cost: 75, description: 'International diplomacy and negotiations, medium strategic value' },
      { name: 'War Industries', cost: 70, description: 'Military production and supply chains, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  worldWar2: {
    id: 'worldWar2',
    name: 'World War 2',
    type: 'historical',
    description: 'The Second World War between the Allies and Axis powers.',
    inspirationalQuote: {
      text: "We shall never surrender.",
      author: "Winston Churchill",
      context: "British Prime Minister during WWII"
    },
    factionOrder: ['allies','axis'],
    factions: {
      allies: {
        name: 'Allied Powers',
        color: '#2ecc71', // Green
        description: 'The Allied Powers including Britain, US, Soviet Union, and others',
        territories: [
          { name: 'Normandy (D‑Day)', cost: 100, description: 'Allied landings on June 6, 1944' },
          { name: 'Stalingrad', cost: 95, description: 'Turning point on the Eastern Front' },
          { name: 'Pearl Harbor', cost: 90, description: 'US naval base attacked Dec 7, 1941' },
          { name: 'El Alamein', cost: 85, description: 'Decisive victory in North Africa' },
          { name: 'Anzio & Cassino', cost: 80, description: 'Hard-fought Italian campaign battles' },
          { name: 'Burma Road', cost: 75, description: 'Lifeline for China in Southeast Asia' },
          { name: 'Battle of the Atlantic', cost: 70, description: 'Convoy routes and U‑boat hunting' },
          { name: 'Home Front Production', cost: 65, description: 'Arsenal of Democracy' },
          { name: 'French Resistance', cost: 60, description: 'Underground networks and sabotage' },
          { name: 'Strategic Bombing', cost: 55, description: 'Air campaigns over Europe' }
        ],
        characters: [
          {
            name: 'Winston Churchill',
            role: 'British Prime Minister',
            startingCoins: 150,
            startingWeapons: ['Royal Navy', 'RAF'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'defiant',
            quotes: [
              "We shall never surrender!",
              "Never in the field of human conflict was so much owed by so many to so few.",
              "We will fight them on the beaches.",
              "Blood, toil, tears and sweat.",
              "Victory at all costs!"
            ],
            description: 'British Prime Minister who led Britain through the darkest hours.'
          },
          {
            name: 'Franklin D. Roosevelt',
            role: 'US President',
            startingCoins: 145,
            startingWeapons: ['US Army', 'US Navy'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'determined',
            quotes: [
              "A date which will live in infamy.",
              "We have nothing to fear but fear itself.",
              "The only thing we have to fear is fear itself.",
              "We must be the great arsenal of democracy.",
              "Victory will be ours!"
            ],
            description: 'US President who led America through the war.'
          },
          {
            name: 'Joseph Stalin',
            role: 'Soviet Leader',
            startingCoins: 140,
            startingWeapons: ['Red Army', 'T-34 Tanks'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'ruthless',
            quotes: [
              "The Red Army will crush the fascists!",
              "We fight for Mother Russia.",
              "Victory will be ours!",
              "The Soviet Union will prevail.",
              "We shall not be defeated."
            ],
            description: 'Soviet leader who led the USSR through the war.'
          },
          {
            name: 'Charles de Gaulle',
            role: 'Free French Leader',
            startingCoins: 135,
            startingWeapons: ['Free French Forces', 'Resistance'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'proud',
            quotes: [
              "France has lost a battle, but France has not lost the war.",
              "We fight for French honor.",
              "The Free French will prevail.",
              "Victory for France!",
              "We shall reclaim our homeland."
            ],
            description: 'Leader of the Free French forces.'
          },
          {
            name: 'Dwight D. Eisenhower',
            role: 'Supreme Allied Commander',
            startingCoins: 130,
            startingWeapons: ['Allied Forces', 'Strategic Planning'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strategic',
            quotes: [
              "We will accept nothing less than full victory.",
              "The Allied forces will triumph.",
              "We fight for freedom.",
              "Victory through unity.",
              "We shall not be denied."
            ],
            description: 'Supreme Allied Commander in Europe.'
          }
        ],
        generalRoles: [
          { name: 'Allied Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'brave' },
          { name: 'Allied Officer', startingCoins: 40, startingWeapons: ['Rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'leadership' },
          { name: 'Allied Commander', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'strategic' }
        ]
      },
      axis: {
        name: 'Axis Powers',
        color: '#e74c3c', // Red
        description: 'The Axis Powers including Germany, Japan, and Italy',
        territories: [
          { name: 'Berlin', cost: 100, description: 'Capital of Nazi Germany' },
          { name: 'Kursk', cost: 95, description: 'Largest tank battle in history' },
          { name: 'Hiroshima/Nagasaki', cost: 90, description: 'Atomic bombings in Japan' },
          { name: 'Tobruk', cost: 85, description: 'Key port in North Africa' },
          { name: 'Balkans Campaign', cost: 80, description: 'Axis operations in the Balkans' },
          { name: 'Burma Railway', cost: 75, description: 'Supply route built under harsh conditions' },
          { name: 'U‑boat Wolfpacks', cost: 70, description: 'Submarine warfare in the Atlantic' },
          { name: 'Axis Home Front', cost: 65, description: 'War production and mobilization' },
          { name: 'Occupied Europe', cost: 60, description: 'Administered territories and resources' },
          { name: 'Luftwaffe Bombing', cost: 55, description: 'Air campaigns and blitzes' }
        ],
        characters: [
          {
            name: 'Adolf Hitler',
            role: 'German Führer',
            startingCoins: 150,
            startingWeapons: ['Wehrmacht', 'Luftwaffe'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'fanatical',
            quotes: [
              "Germany will rule the world!",
              "We fight for German supremacy.",
              "The Third Reich will last a thousand years.",
              "Victory will be ours!",
              "Deutschland über alles!"
            ],
            description: 'German Führer who led Germany into the Second World War.'
          },
          {
            name: 'Hirohito',
            role: 'Japanese Emperor',
            startingCoins: 145,
            startingWeapons: ['Imperial Japanese Army', 'Imperial Japanese Navy'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'imperial',
            quotes: [
              "The Japanese Empire will prevail.",
              "We fight for the Emperor.",
              "Victory for Japan!",
              "The Rising Sun will triumph.",
              "We shall not be defeated."
            ],
            description: 'Japanese Emperor during the war.'
          },
          {
            name: 'Benito Mussolini',
            role: 'Italian Duce',
            startingCoins: 140,
            startingWeapons: ['Italian Army', 'Regia Marina'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'authoritarian',
            quotes: [
              "The Italian Empire will be restored.",
              "We fight for Italian glory.",
              "Victory for Italy!",
              "The Roman Empire will rise again.",
              "We shall reclaim our heritage."
            ],
            description: 'Italian dictator who led Italy into the war.'
          },
          {
            name: 'Erwin Rommel',
            role: 'Desert Fox',
            startingCoins: 135,
            startingWeapons: ['Afrika Korps', 'Panzer Divisions'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'tactical',
            quotes: [
              "The Afrika Korps will triumph.",
              "We fight with German precision.",
              "Victory through superior tactics.",
              "The Desert Fox will prevail.",
              "We shall not be denied."
            ],
            description: 'German Field Marshal known as the Desert Fox.'
          },
          {
            name: 'Isoroku Yamamoto',
            role: 'Japanese Admiral',
            startingCoins: 130,
            startingWeapons: ['Imperial Japanese Navy', 'Aircraft Carriers'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strategic',
            quotes: [
              "The Imperial Navy will triumph.",
              "We fight for Japanese honor.",
              "Victory through naval supremacy.",
              "The Rising Sun will prevail.",
              "We shall rule the seas."
            ],
            description: 'Japanese Admiral who planned the attack on Pearl Harbor.'
          }
        ],
        generalRoles: [
          { name: 'Axis Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Axis Officer', startingCoins: 40, startingWeapons: ['Rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'disciplined' },
          { name: 'Axis Commander', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'militaristic' }
        ]
      }
    },
  neutralTerritories: [
      { name: 'Neutral Nations', cost: 90, description: 'Sweden, Switzerland, Spain, and others' },
      { name: 'International Waters', cost: 85, description: 'High seas contested by fleets' },
      { name: 'Colonial Territories', cost: 80, description: 'Overseas colonies and resources' },
      { name: 'Diplomatic Corps', cost: 75, description: 'Envoys, treaties, and intelligence' },
      { name: 'War Industries', cost: 70, description: 'Factories, shipyards, and logistics' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  spanishCivilWar: {
    id: 'spanishCivilWar',
    name: 'Spanish Civil War',
    type: 'historical',
    description: 'The conflict between Republicans and Nationalists for control of Spain',
    inspirationalQuote: {
      text: "No pasarán! (They shall not pass!)",
      author: "Dolores Ibárruri",
      context: "Spanish Republican leader during the Civil War"
    },
    factionOrder: ['republicans', 'nationalists'],
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
            startingCastles: 1,
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
            startingCastles: 1,
            personality: 'nationalist',
            quotes: [
              "We will defend Catalonia!",
              "The republic will survive!",
              "We fight for our land!",
              "Catalonia will be free!",
              "We will not yield!"
            ],
            description: 'President of Catalonia during the civil war.'
          },
          {
            name: 'Indalecio Prieto',
            role: 'Socialist Leader',
            startingCoins: 75,
            startingWeapons: ['socialist policies'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'moderate',
            quotes: [
              "We will find compromise!",
              "The socialists will be moderate!",
              "We will work together!",
              "Spain will be united!",
              "We will not be extreme!"
            ],
            description: 'Moderate socialist leader who sought compromise.'
          },
          {
            name: 'José Giral',
            role: 'Prime Minister',
            startingCoins: 70,
            startingWeapons: ['government authority'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'administrative',
            quotes: [
              "We will govern effectively!",
              "The republic will function!",
              "We will maintain order!",
              "Democracy will work!",
              "We will be efficient!"
            ],
            description: 'Prime Minister who led the Republic early in the war.'
          },
          {
            name: 'Santiago Carrillo',
            role: 'Communist Leader',
            startingCoins: 65,
            startingWeapons: ['communist ideology'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'revolutionary',
            quotes: [
              "We will spread communism!",
              "The workers will rule!",
              "We will fight capitalism!",
              "Revolution will succeed!",
              "We will not compromise!"
            ],
            description: 'Communist leader who organized the party.'
          },
          {
            name: 'Andrés Nin',
            role: 'Anarchist Leader',
            startingCoins: 60,
            startingWeapons: ['anarchist ideology'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'anarchist',
            quotes: [
              "We will abolish authority!",
              "The anarchists will be free!",
              "We will reject all rulers!",
              "Spain will be anarchist!",
              "We will not be governed!"
            ],
            description: 'Anarchist leader who opposed all authority.'
          },
          {
            name: 'Buenaventura Durruti',
            role: 'Anarchist Militia Leader',
            startingCoins: 55,
            startingWeapons: ['militia command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'revolutionary',
            quotes: [
              "We will fight for freedom!",
              "The anarchists will resist!",
              "We will not be oppressed!",
              "Spain will be free!",
              "We will not surrender!"
            ],
            description: 'Anarchist militia leader who fought for freedom.'
          },
          {
            name: 'José Miaja',
            role: 'Republican General',
            startingCoins: 50,
            startingWeapons: ['military command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'military',
            quotes: [
              "We will defend Madrid!",
              "The republic will stand!",
              "We will not retreat!",
              "Spain will be defended!",
              "We will fight!"
            ],
            description: 'Republican general who defended Madrid.'
          },
          {
            name: 'Vicente Rojo',
            role: 'Republican General',
            startingCoins: 45,
            startingWeapons: ['military tactics'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "We will use strategy!",
              "The republic will be smart!",
              "We will outmaneuver!",
              "Spain will be tactical!",
              "We will be wise!"
            ],
            description: 'Republican general known for his strategic thinking.'
          },
          {
            name: 'Enrique Lister',
            role: 'Communist General',
            startingCoins: 40,
            startingWeapons: ['communist army'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We will be disciplined!",
              "The communists will be strong!",
              "We will maintain order!",
              "Spain will be organized!",
              "We will not be chaotic!"
            ],
            description: 'Communist general who led disciplined forces.'
          },
          {
            name: 'Manuel Tagüeña',
            role: 'Republican Officer',
            startingCoins: 35,
            startingWeapons: ['military command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve the republic!",
              "The officers will be loyal!",
              "We will defend democracy!",
              "Spain will be loyal!",
              "We will not betray!"
            ],
            description: 'Republican officer loyal to the Republic.'
          }
        ],
        generalRoles: [
          { name: 'Republican Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'democratic', quotes: ['For the republic!', 'We are democrats!', 'No pasarán!'] },
          { name: 'Anarchist Militia', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'revolutionary', quotes: ['We are anarchists!', 'We will be free!', 'Down with authority!'] },
          { name: 'International Brigader', startingCoins: 60, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'idealistic', quotes: ['We fight fascism!', 'We are international!', 'For freedom!'] }
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
          },
          {
            name: 'José Antonio Primo de Rivera',
            role: 'Falangist Leader',
            startingCoins: 85,
            startingWeapons: ['fascist ideology'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fascist',
            quotes: [
              "We will establish fascism!",
              "The Falange will rule!",
              "We will restore greatness!",
              "Spain will be fascist!",
              "We will not be democratic!"
            ],
            description: 'Founder of the Falange and fascist leader.'
          },
          {
            name: 'Ramón Serrano Súñer',
            role: 'Falangist Leader',
            startingCoins: 80,
            startingWeapons: ['political influence'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'political',
            quotes: [
              "We will organize the party!",
              "The Falange will be strong!",
              "We will lead Spain!",
              "Fascism will triumph!",
              "We will not be weak!"
            ],
            description: 'Falangist leader and Franco\'s brother-in-law.'
          },
          {
            name: 'Tomás Domínguez Arévalo',
            role: 'Carlist Leader',
            startingCoins: 75,
            startingWeapons: ['traditionalist ideology'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'traditionalist',
            quotes: [
              "We will restore the monarchy!",
              "The Carlists will be loyal!",
              "We will bring back tradition!",
              "Spain will be traditional!",
              "We will not be modern!"
            ],
            description: 'Carlist leader who supported the monarchy.'
          },
          {
            name: 'Manuel Fal Conde',
            role: 'Carlist Leader',
            startingCoins: 70,
            startingWeapons: ['monarchist support'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'monarchist',
            quotes: [
              "We will restore the king!",
              "The Carlists will be royalist!",
              "We will bring back the crown!",
              "Spain will be monarchist!",
              "We will not be republican!"
            ],
            description: 'Carlist leader who supported the restoration of the monarchy.'
          },
          {
            name: 'Juan Yagüe',
            role: 'Nationalist General',
            startingCoins: 65,
            startingWeapons: ['military command'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "We will attack!",
              "The nationalists will be aggressive!",
              "We will crush the reds!",
              "Spain will be conquered!",
              "We will not be defensive!"
            ],
            description: 'Nationalist general known for his aggressive tactics.'
          },
          {
            name: 'Agustín Muñoz Grandes',
            role: 'Nationalist General',
            startingCoins: 60,
            startingWeapons: ['military tactics'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'tactical',
            quotes: [
              "We will use tactics!",
              "The nationalists will be smart!",
              "We will outmaneuver!",
              "Spain will be strategic!",
              "We will be wise!"
            ],
            description: 'Nationalist general known for his tactical skills.'
          },
          {
            name: 'Valentín Galarza',
            role: 'Nationalist General',
            startingCoins: 55,
            startingWeapons: ['military command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "We will serve Franco!",
              "The nationalists will be loyal!",
              "We will defend our cause!",
              "Spain will be loyal!",
              "We will not betray!"
            ],
            description: 'Nationalist general loyal to Franco.'
          },
          {
            name: 'José Enrique Varela',
            role: 'Nationalist General',
            startingCoins: 50,
            startingWeapons: ['military experience'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'experienced',
            quotes: [
              "We will use our experience!",
              "The nationalists will be professional!",
              "We will restore the army!",
              "Spain will be disciplined!",
              "We will not be amateur!"
            ],
            description: 'Experienced nationalist general.'
          },
          {
            name: 'Fidel Dávila',
            role: 'Nationalist General',
            startingCoins: 45,
            startingWeapons: ['military command'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'steady',
            quotes: [
              "We will be steady!",
              "The nationalists will endure!",
              "We will not waver!",
              "Spain will be strong!",
              "We will be persistent!"
            ],
            description: 'Steady nationalist general who led forces consistently.'
          }
        ],
        generalRoles: [
          { name: 'Nationalist Soldier', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['For Spain!', 'We are nationalists!', 'Down with the reds!'] },
          { name: 'Falangist', startingCoins: 55, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'fascist', quotes: ['We are Falangists!', 'We will win!', 'For the party!'] },
          { name: 'Carlist', startingCoins: 50, startingWeapons: ['rifle'], startingMercenaries: 0, startingCastles: 1, personality: 'traditionalist', quotes: ['We are Carlists!', 'For the king!', 'We will restore!'] }
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
  },

  // ROMEO AND JULIET SCENARIO
  romeoAndJuliet: {
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
},

  // ROMEO AND JULIET SCENARIO
  romeoAndJuliet: {
    id: 'romeoAndJuliet',
    name: 'Romeo and Juliet (Shakespeare)',
    type: 'literary',
    description: 'The tragic tale of star-crossed lovers caught between feuding families in Verona.',
    inspirationalQuote: {
      text: "What's in a name? That which we call a rose by any other name would smell as sweet.",
      author: "William Shakespeare",
      context: "Romeo and Juliet, Act II, Scene II"
    },
    factionOrder: ['montagues', 'capulets'],
    factions: {
      montagues: {
        name: 'House of Montague',
        color: '#1e40af', // Blue
        description: 'Noble family seeking peace and reconciliation',
        territories: [
          { name: 'Montague Manor', cost: 80, description: 'Family estate and headquarters' },
          { name: "Romeo's Balcony Overlook", cost: 75, description: "Where Romeo gazes toward Juliet's home" },
          { name: 'Montague Gardens', cost: 70, description: 'Private gardens and meeting place' },
          { name: 'Montague Library', cost: 75, description: 'Knowledge center and planning room' },
          { name: 'Benvolio Court', cost: 65, description: "Benvolio's favored meeting square" },
          { name: 'Montague Stables', cost: 65, description: 'Horse breeding and transportation' },
          { name: 'Montague Treasury', cost: 85, description: 'Wealth storage and resources' },
          { name: 'Montague Guards', cost: 60, description: 'Security force and protection' },
          { name: 'Montague Allies', cost: 70, description: 'Supporting families and friends' },
          { name: 'Montague Council', cost: 75, description: 'Family decision-making center' },
          { name: 'Montague Workshops', cost: 55, description: 'Craft production and trade' },
          { name: 'Montague Sanctuary', cost: 80, description: 'Safe haven and refuge' }
        ],
        characters: [
          {
            name: 'Romeo Montague',
            role: 'Young Lover',
            startingCoins: 100,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'romantic',
            quotes: [
              "But soft, what light through yonder window breaks?",
              "My only love sprung from my only hate!",
              "O, I am fortune's fool!",
              "A plague o' both your houses!",
              "Thus with a kiss I die."
            ],
            description: 'Young Montague who falls in love with Juliet Capulet.'
          },
          {
            name: 'Lord Montague',
            role: 'Family Patriarch',
            startingCoins: 120,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "What light is light, if Silvia be not seen?",
              "We must end this feud.",
              "Our family honor is at stake.",
              "Peace, I pray thee.",
              "Let us be friends."
            ],
            description: 'Patriarch of the Montague family seeking peace.'
          },
          {
            name: 'Lady Montague',
            role: 'Family Matriarch',
            startingCoins: 90,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'caring',
            quotes: [
              "O, where is Romeo?",
              "We must protect our son.",
              "This feud has gone too far.",
              "Love conquers all.",
              "Peace be with our family."
            ],
            description: 'Caring mother who worries for her family.'
          },
          {
            name: 'Benvolio Montague',
            role: 'Peacemaker',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'peaceful',
            quotes: [
              "Part, fools! Put up your swords.",
              "I do but keep the peace.",
              "Let us reason together.",
              "Violence solves nothing.",
              "We must find another way."
            ],
            description: 'Romeo\'s cousin who tries to keep the peace.'
          },
          {
            name: 'Mercutio',
            role: 'Loyal Friend',
            startingCoins: 85,
            startingWeapons: ['sword', 'wit'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "A plague o' both your houses!",
              "If love be rough with you, be rough with love.",
              "True, I talk of dreams.",
              "Ask for me tomorrow, and you shall find me a grave man.",
              "Why the devil came you between us?"
            ],
            description: 'Romeo\'s loyal friend and Prince\'s kinsman.'
          },
          {
            name: 'Abraham Montague',
            role: 'Family Steward',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'dutiful',
            quotes: [
              "I serve the Montague family with honor.",
              "Our house must remain strong.",
              "Peace through strength.",
              "We will not be dishonored.",
              "The Montague name endures."
            ],
            description: 'Trusted family steward and advisor.'
          },
          {
            name: 'Balthasar Montague',
            role: 'Romeo\'s Servant',
            startingCoins: 60,
            startingWeapons: ['dagger'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I serve Romeo faithfully.",
              "My master\'s will is my command.",
              "I will protect the young master.",
              "The Montague cause is just.",
              "Loyalty above all."
            ],
            description: 'Romeo\'s devoted servant and messenger.'
          },
          {
            name: 'Gregory Montague',
            role: 'Family Guard',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We defend our family honor.",
              "No Capulet shall pass.",
              "Montague blood runs strong.",
              "We fight for what is right.",
              "Honor guides our blade."
            ],
            description: 'Loyal family guard and protector.'
          },
          {
            name: 'Sampson Montague',
            role: 'House Servant',
            startingCoins: 55,
            startingWeapons: ['club'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We Montagues are not to be trifled with.",
              "Our house stands tall.",
              "We serve with pride.",
              "Montague loyalty is unbreakable.",
              "We will not be intimidated."
            ],
            description: 'Proud house servant and family supporter.'
          },
          {
            name: 'Peter Montague',
            role: 'Family Messenger',
            startingCoins: 50,
            startingWeapons: ['staff'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'quick',
            quotes: [
              "I carry messages swiftly.",
              "Communication is key to peace.",
              "I serve the family cause.",
              "Speed and accuracy are my tools.",
              "The Montague word spreads fast."
            ],
            description: 'Swift messenger and family communicator.'
          },
          {
            name: 'Anthony Montague',
            role: 'Family Cousin',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "Family bonds are sacred.",
              "We Montagues stand together.",
              "Blood calls to blood.",
              "Our lineage is our strength.",
              "United we are unbreakable."
            ],
            description: 'Distant cousin and family ally.'
          },
          {
            name: 'Potpan Montague',
            role: 'Kitchen Steward',
            startingCoins: 45,
            startingWeapons: ['knife'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'practical',
            quotes: [
              "A well-fed family is a strong family.",
              "I keep the household running.",
              "Food brings people together.",
              "The kitchen is the heart of the home.",
              "Nourishment for body and soul."
            ],
            description: 'Kitchen steward and household manager.'
          },
          {
            name: 'Simon Montague',
            role: 'Family Scholar',
            startingCoins: 80,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'learned',
            quotes: [
              "Knowledge is our greatest weapon.",
              "We must understand our enemies.",
              "Education leads to peace.",
              "The pen is mightier than the sword.",
              "Wisdom guides our actions."
            ],
            description: 'Family scholar and advisor.'
          },
          {
            name: 'Hugh Montague',
            role: 'Family Merchant',
            startingCoins: 85,
            startingWeapons: ['coin purse'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'shrewd',
            quotes: [
              "Trade builds bridges between families.",
              "Commerce can end conflicts.",
              "Wealth serves our cause.",
              "Business brings prosperity.",
              "Gold speaks louder than swords."
            ],
            description: 'Family merchant and trade negotiator.'
          },
          {
            name: 'Valentine Montague',
            role: 'Family Priest',
            startingCoins: 70,
            startingWeapons: ['holy symbol'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'pious',
            quotes: [
              "God wills peace between families.",
              "Prayer can heal all wounds.",
              "Faith guides our path.",
              "Divine love conquers all.",
              "Blessed are the peacemakers."
            ],
            description: 'Family priest and spiritual advisor.'
          }
        ],
        generalRoles: [
          { name: 'Montague Servant', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['For House Montague!', 'We serve our masters!', 'Peace be with us!'] },
          { name: 'Montague Guard', startingCoins: 50, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'protective', quotes: ['We protect our family!', 'Stand guard!', 'No harm shall come!'] },
          { name: 'Montague Ally', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'supportive', quotes: ['We stand with Montague!', 'Friendship forever!', 'Together we are strong!'] }
        ]
      },
      capulets: {
        name: 'House of Capulet',
        color: '#dc2626', // Red
        description: 'Proud family defending their honor and traditions',
        territories: [
          { name: 'Capulet Manor', cost: 80, description: 'Family estate and headquarters' },
          { name: 'Capulet Balcony', cost: 75, description: "Juliet's balcony and private garden" },
          { name: 'Capulet Gardens', cost: 70, description: 'Private gardens and meeting place' },
          { name: 'Capulet Library', cost: 75, description: 'Knowledge center and planning room' },
          { name: 'Tybalt Training Yard', cost: 65, description: 'Where Tybalt drills the guards' },
          { name: 'Capulet Stables', cost: 65, description: 'Horse breeding and transportation' },
          { name: 'Capulet Treasury', cost: 85, description: 'Wealth storage and resources' },
          { name: 'Capulet Guards', cost: 60, description: 'Security force and protection' },
          { name: 'Capulet Allies', cost: 70, description: 'Supporting families and friends' },
          { name: 'Capulet Council', cost: 75, description: 'Family decision-making center' },
          { name: 'Capulet Workshops', cost: 55, description: 'Craft production and trade' },
          { name: 'Capulet Sanctuary', cost: 80, description: 'Safe haven and refuge' }
        ],
        characters: [
          {
            name: 'Juliet Capulet',
            role: 'Young Lover',
            startingCoins: 100,
            startingWeapons: ['dagger'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'passionate',
            quotes: [
              "What's in a name? That which we call a rose by any other name would smell as sweet.",
              "My only love sprung from my only hate!",
              "O Romeo, Romeo! Wherefore art thou Romeo?",
              "Parting is such sweet sorrow.",
              "O happy dagger!"
            ],
            description: 'Young Capulet who falls in love with Romeo Montague.'
          },
          {
            name: 'Lord Capulet',
            role: 'Family Patriarch',
            startingCoins: 120,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "My child is yet a stranger in the world.",
              "We will not be dishonored.",
              "Our family name must be protected.",
              "This feud has lasted too long.",
              "We must defend our honor."
            ],
            description: 'Proud patriarch of the Capulet family.'
          },
          {
            name: 'Lady Capulet',
            role: 'Family Matriarch',
            startingCoins: 90,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'traditional',
            quotes: [
              "We must arrange Juliet's marriage.",
              "Our daughter must marry well.",
              "Family honor comes first.",
              "We cannot allow this disgrace.",
              "Tradition must be upheld."
            ],
            description: 'Traditional mother focused on family honor.'
          },
          {
            name: 'Tybalt Capulet',
            role: 'Hot-Headed Cousin',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "What, drawn, and talk of peace!",
              "Romeo, the hate I bear thee can afford no better term than this: thou art a villain.",
              "This shall not excuse the injuries that thou hast done me.",
              "Boy, this shall not excuse the injuries.",
              "Thou, wretched boy, that didst consort him here."
            ],
            description: 'Juliet\'s hot-tempered cousin who hates the Montagues.'
          },
          {
            name: 'Nurse',
            role: 'Juliet\'s Confidante',
            startingCoins: 70,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'caring',
            quotes: [
              "What, lamb! What, ladybird!",
              "I am the drudge and toil in your delight.",
              "Go, girl, seek happy nights to happy days.",
              "Hie to your chamber.",
              "I'll find Romeo to comfort you."
            ],
            description: 'Juliet\'s devoted nurse and confidante.'
          },
          {
            name: 'Sampson Capulet',
            role: 'House Servant',
            startingCoins: 55,
            startingWeapons: ['club'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "We Capulets are not to be trifled with.",
              "Our house stands tall.",
              "We serve with pride.",
              "Capulet loyalty is unbreakable.",
              "We will not be intimidated."
            ],
            description: 'Proud house servant and family supporter.'
          },
          {
            name: 'Gregory Capulet',
            role: 'Family Guard',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We defend our family honor.",
              "No Montague shall pass.",
              "Capulet blood runs strong.",
              "We fight for what is right.",
              "Honor guides our blade."
            ],
            description: 'Loyal family guard and protector.'
          },
          {
            name: 'Peter Capulet',
            role: 'Family Servant',
            startingCoins: 50,
            startingWeapons: ['staff'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'quick',
            quotes: [
              "I serve the Capulet family faithfully.",
              "Speed and accuracy are my tools.",
              "I carry out my duties swiftly.",
              "The Capulet word spreads fast.",
              "Service is my honor."
            ],
            description: 'Swift servant and family communicator.'
          },
          {
            name: 'Anthony Capulet',
            role: 'Family Cousin',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "Family bonds are sacred.",
              "We Capulets stand together.",
              "Blood calls to blood.",
              "Our lineage is our strength.",
              "United we are unbreakable."
            ],
            description: 'Distant cousin and family ally.'
          },
          {
            name: 'Potpan Capulet',
            role: 'Kitchen Steward',
            startingCoins: 45,
            startingWeapons: ['knife'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'practical',
            quotes: [
              "A well-fed family is a strong family.",
              "I keep the household running.",
              "Food brings people together.",
              "The kitchen is the heart of the home.",
              "Nourishment for body and soul."
            ],
            description: 'Kitchen steward and household manager.'
          },
          {
            name: 'Simon Capulet',
            role: 'Family Scholar',
            startingCoins: 80,
            startingWeapons: ['wisdom'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'learned',
            quotes: [
              "Knowledge is our greatest weapon.",
              "We must understand our enemies.",
              "Education leads to peace.",
              "The pen is mightier than the sword.",
              "Wisdom guides our actions."
            ],
            description: 'Family scholar and advisor.'
          },
          {
            name: 'Hugh Capulet',
            role: 'Family Merchant',
            startingCoins: 85,
            startingWeapons: ['coin purse'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'shrewd',
            quotes: [
              "Trade builds bridges between families.",
              "Commerce can end conflicts.",
              "Wealth serves our cause.",
              "Business brings prosperity.",
              "Gold speaks louder than swords."
            ],
            description: 'Family merchant and trade negotiator.'
          },
          {
            name: 'Valentine Capulet',
            role: 'Family Priest',
            startingCoins: 70,
            startingWeapons: ['holy symbol'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'pious',
            quotes: [
              "God wills peace between families.",
              "Prayer can heal all wounds.",
              "Faith guides our path.",
              "Divine love conquers all.",
              "Blessed are the peacemakers."
            ],
            description: 'Family priest and spiritual advisor.'
          },
          {
            name: 'Abraham Capulet',
            role: 'Family Steward',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'dutiful',
            quotes: [
              "I serve the Capulet family with honor.",
              "Our house must remain strong.",
              "Peace through strength.",
              "We will not be dishonored.",
              "The Capulet name endures."
            ],
            description: 'Trusted family steward and advisor.'
          },
          {
            name: 'Balthasar Capulet',
            role: 'Juliet\'s Servant',
            startingCoins: 60,
            startingWeapons: ['dagger'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I serve Juliet faithfully.",
              "My mistress\'s will is my command.",
              "I will protect the young mistress.",
              "The Capulet cause is just.",
              "Loyalty above all."
            ],
            description: 'Juliet\'s devoted servant and messenger.'
          }
        ],
        generalRoles: [
          { name: 'Capulet Servant', startingCoins: 40, startingWeapons: ['tools'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal', quotes: ['For House Capulet!', 'We serve our masters!', 'Honor be with us!'] },
          { name: 'Capulet Guard', startingCoins: 50, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'protective', quotes: ['We protect our family!', 'Stand guard!', 'No dishonor shall come!'] },
          { name: 'Capulet Ally', startingCoins: 60, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'supportive', quotes: ['We stand with Capulet!', 'Honor forever!', 'Together we are strong!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Verona Square', cost: 90, description: 'Central marketplace and gathering place, very high strategic value' },
      { name: 'Friar Laurence\'s Cell', cost: 85, description: 'Sacred place of peace and wisdom, high strategic value' },
      { name: 'Apothecary Shop', cost: 80, description: 'Medicine and potion source, high strategic value' },
      { name: 'Prince\'s Palace', cost: 95, description: 'Government center and law enforcement, very high strategic value' },
      { name: 'City Gates', cost: 75, description: 'Entry and exit points, high strategic value' },
      { name: 'Public Gardens', cost: 70, description: 'Neutral meeting ground, medium strategic value' },
      { name: 'Market District', cost: 65, description: 'Trade and commerce center, medium strategic value' },
      { name: 'Church Square', cost: 80, description: 'Religious center and sanctuary, high strategic value' },
      { name: 'Tavern District', cost: 60, description: 'Social gathering place, medium strategic value' },
      { name: 'Artisan Quarter', cost: 70, description: 'Craft production center, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },
  // LORD OF THE RINGS SCENARIO
  lordOfTheRings: {
    id: 'lordOfTheRings',
    name: 'The Lord of the Rings (J.R.R. Tolkien)',
    type: 'literary',
    description: 'The epic struggle between the forces of good and evil in Middle-earth.',
    inspirationalQuote: {
      text: "Even the smallest person can change the course of the future.",
      author: "J.R.R. Tolkien",
      context: "The Lord of the Rings"
    },
    factionOrder: ['fellowship','mordor'],
    factions: {
      fellowship: {
        name: 'Fellowship of the Ring',
        color: '#1e40af', // Blue
        description: 'Allies fighting to destroy the One Ring and save Middle-earth',
        territories: [
          { name: 'Rivendell', cost: 100, description: 'Elven stronghold and council center' },
          { name: 'Lothlórien', cost: 95, description: 'Golden Wood and Galadriel\'s realm' },
          { name: 'Minas Tirith', cost: 90, description: 'Gondor\'s capital and fortress' },
          { name: 'Helm\'s Deep', cost: 85, description: 'Rohan\'s defensive fortress' },
          { name: 'The Shire', cost: 80, description: 'Hobbit homeland and peaceful refuge' },
          { name: 'Grey Havens', cost: 75, description: 'Elven port and departure point' },
          { name: 'Fangorn Forest', cost: 70, description: 'Ent stronghold and ancient woods' },
          { name: 'Dale', cost: 65, description: 'Human city and trade center' },
          { name: 'Erebor', cost: 85, description: 'Dwarf kingdom and mountain fortress' },
          { name: 'White Council', cost: 90, description: 'Wise council and planning center' }
        ],
        characters: [
          {
            name: 'Aragorn',
            role: 'Ranger King',
            startingCoins: 120,
            startingWeapons: ['Andúril', 'bow'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "I am Aragorn, son of Arathorn.",
              "Not all those who wander are lost.",
              "There is always hope.",
              "I would have gone with you to the end.",
              "The crownless again shall be king."
            ],
            description: 'Ranger who becomes King of Gondor and Arnor.'
          },
          {
            name: 'Gandalf',
            role: 'Wizard',
            startingCoins: 150,
            startingWeapons: ['Glamdring', 'staff'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "All we have to decide is what to do with the time that is given us.",
              "You shall not pass!",
              "A wizard is never late, nor is he early.",
              "The road goes ever on and on.",
              "Fly, you fools!"
            ],
            description: 'Wise wizard and leader of the Fellowship.'
          },
          {
            name: 'Legolas',
            role: 'Elven Prince',
            startingCoins: 100,
            startingWeapons: ['bow', 'knives'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'agile',
            quotes: [
              "They're taking the hobbits to Isengard!",
              "A red sun rises. Blood has been spilled this night.",
              "The stars shine down upon us.",
              "I go to find the sun!",
              "Still only counts as one!"
            ],
            description: 'Elven prince and master archer.'
          },
          {
            name: 'Gimli',
            role: 'Dwarf Warrior',
            startingCoins: 95,
            startingWeapons: ['axe'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "That still only counts as one!",
              "Nobody tosses a dwarf!",
              "Let them come!",
              "I cannot jump the distance.",
              "We dwarves are natural sprinters."
            ],
            description: 'Dwarf warrior and loyal companion.'
          },
          {
            name: 'Frodo Baggins',
            role: 'Ring Bearer',
            startingCoins: 80,
            startingWeapons: ['Sting'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'determined',
            quotes: [
              "I will take the Ring to Mordor.",
              "I wish the Ring had never come to me.",
              "I will do what I must.",
              "The Ring is mine!",
              "It is done."
            ],
            description: 'Hobbit chosen to carry the One Ring to Mount Doom.'
          },
          {
            name: 'Samwise Gamgee',
            role: 'Loyal Companion',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I can't carry it for you, but I can carry you!",
              "There's some good in this world, Mr. Frodo.",
              "I made a promise, Mr. Frodo.",
              "Don't you leave him, Samwise Gamgee.",
              "Well, I'm back."
            ],
            description: 'Frodo\'s loyal friend and companion.'
          },
          {
            name: 'Boromir',
            role: 'Gondor Captain',
            startingCoins: 110,
            startingWeapons: ['sword', 'horn'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "One does not simply walk into Mordor.",
              "Gondor needs no king.",
              "I would have followed you, my brother.",
              "The Ring would give me power.",
              "I have failed you all."
            ],
            description: 'Captain of Gondor and member of the Fellowship.'
          },
          {
            name: 'Pippin',
            role: 'Hobbit',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'curious',
            quotes: [
              "What about second breakfast?",
              "I\'m not a wizard, I\'m a hobbit!",
              "We\'re going on an adventure!",
              "I want to see the mountains.",
              "I\'m ready for anything."
            ],
            description: 'Young hobbit and member of the Fellowship.'
          },
          {
            name: 'Merry',
            role: 'Hobbit',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "We\'re going to see the elves!",
              "I\'m not afraid of anything.",
              "Let\'s go on an adventure!",
              "We\'ll stick together.",
              "Hobbits are made of stern stuff."
            ],
            description: 'Brave hobbit and member of the Fellowship.'
          },
          {
            name: 'Galadriel',
            role: 'Elven Queen',
            startingCoins: 140,
            startingWeapons: ['magic', 'wisdom'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "Even the smallest person can change the course of the future.",
              "I will diminish and go into the West.",
              "The power of the Ring cannot be undone.",
              "You have a choice to make.",
              "May the light of Eärendil shine upon you."
            ],
            description: 'Elven queen of Lothlórien and bearer of Nenya.'
          },
          {
            name: 'Elrond',
            role: 'Elven Lord',
            startingCoins: 130,
            startingWeapons: ['sword', 'magic'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'ancient',
            quotes: [
              "The Ring cannot be destroyed by any craft we here possess.",
              "I was there the day the strength of men failed.",
              "The time of the elves is over.",
              "You must decide how to use what you have been given.",
              "The road ahead is long and hard."
            ],
            description: 'Elven lord of Rivendell and bearer of Vilya.'
          },
          {
            name: 'Arwen',
            role: 'Elven Princess',
            startingCoins: 100,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'devoted',
            quotes: [
              "I would rather share one lifetime with you than face all the ages of this world alone.",
              "I choose a mortal life.",
              "The shadow does not hold sway yet.",
              "I will not leave you.",
              "My heart belongs to you."
            ],
            description: 'Elven princess and Aragorn\'s beloved.'
          },
          {
            name: 'Éowyn',
            role: 'Shield-maiden',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fierce',
            quotes: [
              "I am no man!",
              "I will not be left behind.",
              "I can fight as well as any man.",
              "The women of this country learned long ago that those without swords can still die upon them.",
              "I will not be caged."
            ],
            description: 'Rohan shield-maiden and warrior princess.'
          },
          {
            name: 'Théoden',
            role: 'King of Rohan',
            startingCoins: 120,
            startingWeapons: ['sword'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "Where is the horse and the rider?",
              "I will not risk open war.",
              "The horn of Helm Hammerhand shall sound in the deep.",
              "Ride now! Ride for ruin and the world\'s ending!",
              "Death! Death! Death!"
            ],
            description: 'King of Rohan and leader of the Rohirrim.'
          },
          {
            name: 'Éomer',
            role: 'Rohan Marshal',
            startingCoins: 95,
            startingWeapons: ['sword'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I would cut off your head if it stood but a little higher from the ground.",
              "We are the Rohirrim.",
              "Ride with me!",
              "The white wizard approaches.",
              "For Rohan!"
            ],
            description: 'Marshal of Rohan and Théoden\'s nephew.'
          },
          {
            name: 'Faramir',
            role: 'Gondor Captain',
            startingCoins: 105,
            startingWeapons: ['sword', 'bow'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I would not take this thing if it lay by the highway.",
              "War must be, while we defend our lives against a destroyer.",
              "I do not love the bright sword for its sharpness.",
              "The enemy is at hand.",
              "We will defend the city."
            ],
            description: 'Captain of Gondor and Boromir\'s brother.'
          },
          {
            name: 'Denethor',
            role: 'Steward of Gondor',
            startingCoins: 115,
            startingWeapons: ['wisdom'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "The rule of Gondor is mine and no other\'s!",
              "I have seen the fall of Gondor.",
              "The line of kings is broken.",
              "We are all going to die.",
              "The city is lost."
            ],
            description: 'Steward of Gondor and father of Boromir and Faramir.'
          },
          {
            name: 'Treebeard',
            role: 'Ent',
            startingCoins: 120,
            startingWeapons: ['branch'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'patient',
            quotes: [
              "I am not altogether on anybody\'s side.",
              "The Ents are going to war.",
              "We have come to the end of our time.",
              "The trees are speaking.",
              "We must march to Isengard."
            ],
            description: 'Ancient Ent and shepherd of the trees.'
          }
        ],
        generalRoles: [
          { name: 'Elven Warrior', startingCoins: 60, startingWeapons: ['bow'], startingMercenaries: 1, startingCastles: 1, personality: 'graceful', quotes: ['For the Elves!', 'We fight for Middle-earth!', 'The light will prevail!'] },
          { name: 'Dwarf Warrior', startingCoins: 55, startingWeapons: ['axe'], startingMercenaries: 1, startingCastles: 1, personality: 'sturdy', quotes: ['For the Dwarves!', 'We stand strong!', 'Stone and steel!'] },
          { name: 'Rohirrim', startingCoins: 50, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'honorable', quotes: ['For Rohan!', 'We ride to war!', 'Honor and glory!'] },
          { name: 'Gondorian Soldier', startingCoins: 45, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'disciplined', quotes: ['For Gondor!', 'We defend the realm!', 'Duty and honor!'] }
        ]
      },
      mordor: {
        name: 'Mordor',
        color: '#8b0000', // Dark red
        description: 'Dark forces seeking to conquer Middle-earth with the One Ring',
        territories: [
          { name: 'Barad-dûr', cost: 120, description: 'Sauron\'s dark tower' },
          { name: 'Mount Doom', cost: 110, description: 'Cracks of Doom' },
          { name: 'Minas Morgul', cost: 100, description: 'City of the Nazgûl' },
          { name: 'Cirith Ungol', cost: 95, description: 'Pass into Mordor' },
          { name: 'Isengard', cost: 90, description: 'Saruman\'s stronghold' },
          { name: 'Dol Guldur', cost: 85, description: 'Fortress in Mirkwood' },
          { name: 'Gorgoroth', cost: 85, description: 'Ash plain of Mordor' },
          { name: 'Udûn', cost: 75, description: 'Black Gate valley' },
          { name: 'Nurn', cost: 70, description: 'Slave fields' }
        ],
        characters: [
          {
            name: 'Sauron',
            role: 'Dark Lord',
            startingCoins: 200,
            startingWeapons: ['One Ring', 'dark magic'],
            startingMercenaries: 6,
            startingCastles: 2,
            personality: 'evil',
            quotes: [
              "One Ring to rule them all.",
              "There is no life in the void.",
              "The age of men is over.",
              "Build me an army worthy of Mordor.",
              "The Ring has awoken."
            ],
            description: 'Dark Lord seeking to conquer Middle-earth.'
          },
          {
            name: 'Saruman',
            role: 'White Wizard',
            startingCoins: 140,
            startingWeapons: ['staff', 'dark magic'],
            startingMercenaries: 4,
            startingCastles: 1,
            personality: 'corrupted',
            quotes: [
              "The old world will burn in the fires of industry.",
              "We must join with Sauron.",
              "The Ring will come to me.",
              "There will be no dawn for men.",
              "The hour is later than you think."
            ],
            description: 'Corrupted wizard who allies with Sauron.'
          },
          {
            name: 'Witch-king',
            role: 'Lord of the Nazgûl',
            startingCoins: 130,
            startingWeapons: ['morgul blade'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'terrifying',
            quotes: [
              "Do you not know death when you see it?",
              "Come not between the Nazgûl and his prey.",
              "The Ring will come to me.",
              "You cannot hide from me.",
              "I will break you."
            ],
            description: 'Leader of the Nazgûl and Sauron\'s most powerful servant.'
          },
          {
            name: 'Gollum',
            role: 'Ring Bearer',
            startingCoins: 60,
            startingWeapons: ['stealth'],
            startingMercenaries: 0,
            startingCastles: 1,
            personality: 'deceitful',
            quotes: [
              "My precious!",
              "We wants it, we needs it.",
              "Tricksy hobbitses!",
              "Smeagol will help you.",
              "The precious is ours!"
            ],
            description: 'Former Ring bearer corrupted by its power.'
          },
          {
            name: 'Gothmog',
            role: 'Orc Commander',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brutal',
            quotes: [
              "The age of men is over.",
              "We will crush them all.",
              "For Mordor!",
              "Death to the free peoples!",
              "The dark lord will prevail!"
            ],
            description: 'Orc commander leading Sauron\'s armies.'
          },
          {
            name: 'Gríma Wormtongue',
            role: 'Spy',
            startingCoins: 70,
            startingWeapons: ['poison'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'treacherous',
            quotes: [
              "Theoden is weak.",
              "We must join with Saruman.",
              "The old ways are dead.",
              "Power is everything.",
              "I serve the white hand."
            ],
            description: 'Saruman\'s spy and agent of corruption.'
          },
          {
            name: 'Lurtz',
            role: 'Uruk-hai Captain',
            startingCoins: 85,
            startingWeapons: ['sword', 'bow'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ruthless',
            quotes: [
              "We are the fighting Uruk-hai!",
              "The white wizard will have his prize.",
              "We will hunt them down.",
              "No man can kill me.",
              "For Saruman!"
            ],
            description: 'Uruk-hai captain and Saruman\'s elite warrior.'
          },
          {
            name: 'Gothmog',
            role: 'Orc Lieutenant',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brutal',
            quotes: [
              "The age of men is over.",
              "We will crush them all.",
              "For Mordor!",
              "Death to the free peoples!",
              "The dark lord will prevail!"
            ],
            description: 'Orc lieutenant and commander of Sauron\'s forces.'
          },
          {
            name: 'Shagrat',
            role: 'Orc Captain',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cruel',
            quotes: [
              "We will find the hobbits.",
              "The Ring must be ours.",
              "No one escapes Mordor.",
              "We serve the Eye.",
              "Death to all who oppose us!"
            ],
            description: 'Orc captain and tower guard.'
          },
          {
            name: 'Gorbag',
            role: 'Orc Captain',
            startingCoins: 70,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "We will take their weapons.",
              "The hobbits are ours.",
              "We will be rewarded.",
              "No mercy for prisoners.",
              "The Eye watches all."
            ],
            description: 'Orc captain and rival of Shagrat.'
          },
          {
            name: 'Grishnákh',
            role: 'Orc Captain',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cunning',
            quotes: [
              "We will find the Ring.",
              "The hobbits cannot hide.",
              "We will be rewarded.",
              "The Eye sees all.",
              "No one escapes our grasp."
            ],
            description: 'Orc captain and tracker.'
          },
          {
            name: 'Uglúk',
            role: 'Uruk-hai Captain',
            startingCoins: 80,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'disciplined',
            quotes: [
              "We are the fighting Uruk-hai!",
              "We will not be stopped.",
              "For Saruman!",
              "The white hand guides us.",
              "We are superior to all others."
            ],
            description: 'Uruk-hai captain and elite warrior.'
          },
          {
            name: 'Mauhúr',
            role: 'Uruk-hai Scout',
            startingCoins: 75,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'agile',
            quotes: [
              "We will track them down.",
              "No one escapes the Uruk-hai.",
              "We are faster and stronger.",
              "The white wizard will be pleased.",
              "We will not fail."
            ],
            description: 'Uruk-hai scout and tracker.'
          },
          {
            name: 'Snaga',
            role: 'Orc Scout',
            startingCoins: 60,
            startingWeapons: ['dagger'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'sneaky',
            quotes: [
              "We will find them.",
              "The hobbits cannot hide.",
              "We will be rewarded.",
              "The Eye sees all.",
              "No one escapes our notice."
            ],
            description: 'Orc scout and spy.'
          },
          {
            name: 'Gorbag',
            role: 'Orc Warrior',
            startingCoins: 65,
            startingWeapons: ['sword'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'brutal',
            quotes: [
              "We will crush our enemies.",
              "Death to all who oppose us!",
              "We serve the Eye.",
              "The Ring will be ours.",
              "Mordor will rule all."
            ],
            description: 'Orc warrior and loyal servant of Sauron.'
          },
          {
            name: 'Sharku',
            role: 'Warg Rider',
            startingCoins: 70,
            startingWeapons: ['spear'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'feral',
            quotes: [
              "We will hunt them down.",
              "The wargs are hungry.",
              "We will not stop until they are dead.",
              "The Eye commands us.",
              "We are the hunters."
            ],
            description: 'Warg rider and mounted warrior.'
          },
          {
            name: 'Gorbag',
            role: 'Orc Overseer',
            startingCoins: 70,
            startingWeapons: ['whip'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'cruel',
            quotes: [
              "We will make them work.",
              "The slaves will obey.",
              "We serve the Eye.",
              "No mercy for the weak.",
              "We will break their spirit."
            ],
            description: 'Orc overseer and slave driver.'
          }
        ],
        generalRoles: [
          { name: 'Orc Warrior', startingCoins: 30, startingWeapons: ['sword'], startingMercenaries: 0, startingCastles: 1, personality: 'brutal', quotes: ['For Mordor!', 'We crush enemies!', 'Death to all!'] },
          { name: 'Uruk-hai', startingCoins: 40, startingWeapons: ['sword'], startingMercenaries: 1, startingCastles: 1, personality: 'fierce', quotes: ['We are Uruk-hai!', 'We fight for Saruman!', 'No mercy!'] },
          { name: 'Nazgûl', startingCoins: 80, startingWeapons: ['morgul blade'], startingMercenaries: 1, startingCastles: 1, personality: 'terrifying', quotes: ['We serve the dark lord!', 'Fear us!', 'The Ring calls!'] },
          { name: 'Troll', startingCoins: 60, startingWeapons: ['club'], startingMercenaries: 1, startingCastles: 1, personality: 'strong', quotes: ['We smash!', 'Big and strong!', 'Crush enemies!'] }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Moria', cost: 90, description: 'Ancient dwarf kingdom and dangerous mines, very high strategic value' },
      { name: 'Weathertop', cost: 85, description: 'Ancient watchtower and strategic overlook, high strategic value' },
      { name: 'Bree', cost: 70, description: 'Crossroads town and meeting place, medium strategic value' },
      { name: 'Old Forest', cost: 75, description: 'Mysterious woods and ancient magic, medium strategic value' },
      { name: 'Dead Marshes', cost: 80, description: 'Dangerous swampland and treacherous path, high strategic value' },
      { name: 'Emyn Muil', cost: 85, description: 'Rocky hills and difficult terrain, high strategic value' },
      { name: 'Ithilien', cost: 80, description: 'Forest region and contested territory, high strategic value' },
      { name: 'Osgiliath', cost: 90, description: 'Ruined city and strategic crossing, very high strategic value' },
      { name: 'Pelennor Fields', cost: 95, description: 'Battlefield and strategic plain, very high strategic value' },
      { name: 'Black Gate', cost: 100, description: 'Entrance to Mordor and final barrier, very high strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // POKEMON SCENARIO
  pokemon: {
    id: 'pokemon',
    name: 'Pokemon: Gotta Catch \'Em All',
    type: 'gaming',
    description: 'The ultimate battle between Fire, Water, and Grass type Pokemon trainers.',
    inspirationalQuote: {
      text: "I want to be the very best, like no one ever was.",
      author: "Ash Ketchum",
      context: "Pokemon Theme Song"
    },
    factions: {
      fire: {
        name: 'Fire Type Trainers',
        color: '#e74c3c', // Red
        description: 'Trainers who specialize in Fire-type Pokemon',
        territories: [
          { name: 'Volcano Island', cost: 100, description: 'Active volcano and Fire Pokemon sanctuary' },
          { name: 'Lava Caves', cost: 95, description: 'Underground lava chambers and training grounds' },
          { name: 'Fire Gym', cost: 90, description: 'Official Fire-type Pokemon gym' },
          { name: 'Desert Oasis', cost: 85, description: 'Hot desert with Fire Pokemon habitats' },
          { name: 'Sunny Meadows', cost: 80, description: 'Open grasslands perfect for Fire training' },
          { name: 'Hot Springs', cost: 75, description: 'Natural hot springs and healing center' },
          { name: 'Fire Temple', cost: 70, description: 'Ancient temple dedicated to Fire Pokemon' },
          { name: 'Charcoal Forest', cost: 65, description: 'Burnt forest with Fire Pokemon' },
          { name: 'Ember Valley', cost: 60, description: 'Valley with constant ember activity' },
          { name: 'Flame Tower', cost: 55, description: 'Tall tower with eternal flame' }
        ],
        characters: [
          {
            name: 'Charizard',
            role: 'Fire Dragon',
            startingCoins: 150,
            startingWeapons: ['Flamethrower', 'Dragon Claw'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'powerful',
            quotes: [
              "Charizard!",
              "Burn!",
              "Fire!",
              "Dragon!",
              "Charizard!"
            ],
            description: 'The powerful Fire Dragon Pokemon who rules the skies.'
          },
          {
            name: 'Arcanine',
            role: 'Legendary Fire Dog',
            startingCoins: 140,
            startingWeapons: ['Fire Fang', 'Flame Wheel'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'loyal',
            quotes: [
              "Arcanine!",
              "Run!",
              "Fire!",
              "Dog!",
              "Arcanine!"
            ],
            description: 'The loyal Legendary Fire Dog who protects its trainer.'
          },
          {
            name: 'Ninetales',
            role: 'Mystical Fire Fox',
            startingCoins: 135,
            startingWeapons: ['Fire Blast', 'Will-O-Wisp'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'mystical',
            quotes: [
              "Ninetales!",
              "Fox!",
              "Fire!",
              "Nine!",
              "Ninetales!"
            ],
            description: 'The mystical Fire Fox with nine tails and magical powers.'
          },
          {
            name: 'Rapidash',
            role: 'Fire Horse',
            startingCoins: 130,
            startingWeapons: ['Fire Spin', 'Stomp'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'fast',
            quotes: [
              "Rapidash!",
              "Horse!",
              "Fire!",
              "Run!",
              "Rapidash!"
            ],
            description: 'The fast Fire Horse who gallops with flames.'
          },
          {
            name: 'Magmar',
            role: 'Fire Duck',
            startingCoins: 125,
            startingWeapons: ['Fire Punch', 'Smog'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'aggressive',
            quotes: [
              "Magmar!",
              "Duck!",
              "Fire!",
              "Punch!",
              "Magmar!"
            ],
            description: 'The aggressive Fire Duck who fights with flaming punches.'
          },
          {
            name: 'Flareon',
            role: 'Fire Evolution',
            startingCoins: 120,
            startingWeapons: ['Fire Fang', 'Quick Attack'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'evolved',
            quotes: [
              "Flareon!",
              "Eevee!",
              "Fire!",
              "Evolve!",
              "Flareon!"
            ],
            description: 'The evolved Fire Pokemon who adapts with flames.'
          },
          {
            name: 'Moltres',
            role: 'Legendary Fire Bird',
            startingCoins: 145,
            startingWeapons: ['Sky Attack', 'Fire Blast'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'legendary',
            quotes: [
              "Moltres!",
              "Bird!",
              "Fire!",
              "Legend!",
              "Moltres!"
            ],
            description: 'The legendary Fire Bird who soars through the skies.'
          },
          {
            name: 'Entei',
            role: 'Legendary Fire Lion',
            startingCoins: 145,
            startingWeapons: ['Sacred Fire', 'Roar'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'noble',
            quotes: [
              "Entei!",
              "Lion!",
              "Fire!",
              "Roar!",
              "Entei!"
            ],
            description: 'The noble Legendary Fire Lion who leads with sacred fire.'
          },
          {
            name: 'Ho-Oh',
            role: 'Rainbow Fire Bird',
            startingCoins: 150,
            startingWeapons: ['Sacred Fire', 'Rainbow Wing'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'divine',
            quotes: [
              "Ho-Oh!",
              "Rainbow!",
              "Fire!",
              "Divine!",
              "Ho-Oh!"
            ],
            description: 'The divine Rainbow Fire Bird who blesses with sacred flames.'
          },
          {
            name: 'Groudon',
            role: 'Legendary Ground Fire',
            startingCoins: 150,
            startingWeapons: ['Earthquake', 'Fire Blast'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'primordial',
            quotes: [
              "Groudon!",
              "Ground!",
              "Fire!",
              "Earth!",
              "Groudon!"
            ],
            description: 'The primordial Legendary who creates land with fire.'
          }
        ],
        generalRoles: [
          { name: 'Fire Trainer', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'passionate' },
          { name: 'Fire Gym Leader', startingCoins: 40, startingWeapons: ['Fire Stone'], startingMercenaries: 0, startingCastles: 1, personality: 'determined' },
          { name: 'Fire Elite', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'elite' }
        ]
      },
      water: {
        name: 'Water Type Trainers',
        color: '#3498db', // Blue
        description: 'Trainers who specialize in Water-type Pokemon',
        territories: [
          { name: 'Ocean Depths', cost: 100, description: 'Deep ocean trenches and Water Pokemon sanctuary' },
          { name: 'Coral Reef', cost: 95, description: 'Beautiful coral formations and training grounds' },
          { name: 'Water Gym', cost: 90, description: 'Official Water-type Pokemon gym' },
          { name: 'Frozen Lake', cost: 85, description: 'Ice-covered lake with Water Pokemon' },
          { name: 'Waterfall Cave', cost: 80, description: 'Hidden cave behind massive waterfall' },
          { name: 'Hot Springs', cost: 75, description: 'Natural hot springs and healing center' },
          { name: 'Water Temple', cost: 70, description: 'Ancient temple dedicated to Water Pokemon' },
          { name: 'Misty Forest', cost: 65, description: 'Foggy forest with Water Pokemon' },
          { name: 'Tidal Pool', cost: 60, description: 'Rock pools filled with Water Pokemon' },
          { name: 'Aqua Tower', cost: 55, description: 'Tall tower with flowing water' }
        ],
        characters: [
          {
            name: 'Blastoise',
            role: 'Water Cannon',
            startingCoins: 150,
            startingWeapons: ['Hydro Pump', 'Water Gun'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'defensive',
            quotes: [
              "Blastoise!",
              "Cannon!",
              "Water!",
              "Shell!",
              "Blastoise!"
            ],
            description: 'The defensive Water Cannon Pokemon who protects allies.'
          },
          {
            name: 'Gyarados',
            role: 'Water Dragon',
            startingCoins: 145,
            startingWeapons: ['Hydro Pump', 'Dragon Rage'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'fierce',
            quotes: [
              "Gyarados!",
              "Dragon!",
              "Water!",
              "Rage!",
              "Gyarados!"
            ],
            description: 'The fierce Water Dragon who rages with powerful waves.'
          },
          {
            name: 'Lapras',
            role: 'Water Transport',
            startingCoins: 140,
            startingWeapons: ['Surf', 'Ice Beam'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'gentle',
            quotes: [
              "Lapras!",
              "Transport!",
              "Water!",
              "Carry!",
              "Lapras!"
            ],
            description: 'The gentle Water Transport who carries passengers safely.'
          },
          {
            name: 'Vaporeon',
            role: 'Water Evolution',
            startingCoins: 135,
            startingWeapons: ['Water Gun', 'Quick Attack'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'evolved',
            quotes: [
              "Vaporeon!",
              "Eevee!",
              "Water!",
              "Evolve!",
              "Vaporeon!"
            ],
            description: 'The evolved Water Pokemon who adapts with waves.'
          },
          {
            name: 'Starmie',
            role: 'Water Star',
            startingCoins: 130,
            startingWeapons: ['Water Gun', 'Psychic'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'mystical',
            quotes: [
              "Starmie!",
              "Star!",
              "Water!",
              "Psychic!",
              "Starmie!"
            ],
            description: 'The mystical Water Star who glows with psychic water power.'
          },
          {
            name: 'Poliwrath',
            role: 'Water Fighter',
            startingCoins: 125,
            startingWeapons: ['Water Gun', 'Submission'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strong',
            quotes: [
              "Poliwrath!",
              "Fight!",
              "Water!",
              "Frog!",
              "Poliwrath!"
            ],
            description: 'The strong Water Fighter who battles with powerful water moves.'
          },
          {
            name: 'Articuno',
            role: 'Legendary Ice Bird',
            startingCoins: 145,
            startingWeapons: ['Ice Beam', 'Blizzard'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'legendary',
            quotes: [
              "Articuno!",
              "Ice!",
              "Bird!",
              "Freeze!",
              "Articuno!"
            ],
            description: 'The legendary Ice Bird who freezes everything with ice.'
          },
          {
            name: 'Suicune',
            role: 'Legendary Water Dog',
            startingCoins: 145,
            startingWeapons: ['Hydro Pump', 'Aurora Beam'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'pure',
            quotes: [
              "Suicune!",
              "Water!",
              "Dog!",
              "Pure!",
              "Suicune!"
            ],
            description: 'The pure Legendary Water Dog who purifies water.'
          },
          {
            name: 'Kyogre',
            role: 'Legendary Sea God',
            startingCoins: 150,
            startingWeapons: ['Water Spout', 'Thunder'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'divine',
            quotes: [
              "Kyogre!",
              "Sea!",
              "God!",
              "Flood!",
              "Kyogre!"
            ],
            description: 'The divine Legendary Sea God who creates oceans.'
          },
          {
            name: 'Manaphy',
            role: 'Sea Prince',
            startingCoins: 140,
            startingWeapons: ['Water Pulse', 'Heart Swap'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'royal',
            quotes: [
              "Manaphy!",
              "Prince!",
              "Sea!",
              "Royal!",
              "Manaphy!"
            ],
            description: 'The royal Sea Prince who commands the oceans.'
          }
        ],
        generalRoles: [
          { name: 'Water Trainer', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'calm' },
          { name: 'Water Gym Leader', startingCoins: 40, startingWeapons: ['Water Stone'], startingMercenaries: 0, startingCastles: 1, personality: 'serene' },
          { name: 'Water Elite', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'elite' }
        ]
      },
      grass: {
        name: 'Grass Type Trainers',
        color: '#2ecc71', // Green
        description: 'Trainers who specialize in Grass-type Pokemon',
        territories: [
          { name: 'Forest Sanctuary', cost: 100, description: 'Ancient forest and Grass Pokemon sanctuary' },
          { name: 'Flower Fields', cost: 95, description: 'Beautiful flower meadows and training grounds' },
          { name: 'Grass Gym', cost: 90, description: 'Official Grass-type Pokemon gym' },
          { name: 'Bamboo Grove', cost: 85, description: 'Dense bamboo forest with Grass Pokemon' },
          { name: 'Herb Garden', cost: 80, description: 'Medicinal herb garden and healing center' },
          { name: 'Tree Village', cost: 75, description: 'Village built in giant trees' },
          { name: 'Grass Temple', cost: 70, description: 'Ancient temple dedicated to Grass Pokemon' },
          { name: 'Mossy Caves', cost: 65, description: 'Caves covered in moss and Grass Pokemon' },
          { name: 'Seed Valley', cost: 60, description: 'Valley where seeds grow into Pokemon' },
          { name: 'Nature Tower', cost: 55, description: 'Tall tower covered in vines' }
        ],
        characters: [
          {
            name: 'Venusaur',
            role: 'Grass Giant',
            startingCoins: 150,
            startingWeapons: ['Solar Beam', 'Vine Whip'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'wise',
            quotes: [
              "Venusaur!",
              "Grass!",
              "Giant!",
              "Grow!",
              "Venusaur!"
            ],
            description: 'The wise Grass Giant Pokemon who nurtures the land.'
          },
          {
            name: 'Sceptile',
            role: 'Grass Lizard',
            startingCoins: 145,
            startingWeapons: ['Leaf Blade', 'Quick Attack'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'agile',
            quotes: [
              "Sceptile!",
              "Lizard!",
              "Grass!",
              "Slash!",
              "Sceptile!"
            ],
            description: 'The agile Grass Lizard who strikes with leaf blades.'
          },
          {
            name: 'Torterra',
            role: 'Grass Turtle',
            startingCoins: 140,
            startingWeapons: ['Earthquake', 'Wood Hammer'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'steady',
            quotes: [
              "Torterra!",
              "Turtle!",
              "Grass!",
              "Earth!",
              "Torterra!"
            ],
            description: 'The steady Grass Turtle who stands firm with earth and nature.'
          },
          {
            name: 'Leafeon',
            role: 'Grass Evolution',
            startingCoins: 135,
            startingWeapons: ['Leaf Blade', 'Quick Attack'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'evolved',
            quotes: [
              "Leafeon!",
              "Eevee!",
              "Grass!",
              "Evolve!",
              "Leafeon!"
            ],
            description: 'The evolved Grass Pokemon who adapts with nature.'
          },
          {
            name: 'Roserade',
            role: 'Grass Rose',
            startingCoins: 130,
            startingWeapons: ['Petal Dance', 'Poison Sting'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'elegant',
            quotes: [
              "Roserade!",
              "Rose!",
              "Grass!",
              "Dance!",
              "Roserade!"
            ],
            description: 'The elegant Grass Rose who dances with beautiful petals.'
          },
          {
            name: 'Breloom',
            role: 'Grass Fighter',
            startingCoins: 125,
            startingWeapons: ['Mach Punch', 'Seed Bomb'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'strong',
            quotes: [
              "Breloom!",
              "Fight!",
              "Grass!",
              "Punch!",
              "Breloom!"
            ],
            description: 'The strong Grass Fighter who battles with powerful punches.'
          },
          {
            name: 'Celebi',
            role: 'Time Travel Grass',
            startingCoins: 145,
            startingWeapons: ['Psychic', 'Future Sight'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'mystical',
            quotes: [
              "Celebi!",
              "Time!",
              "Grass!",
              "Travel!",
              "Celebi!"
            ],
            description: 'The mystical Grass Pokemon who travels through time.'
          },
          {
            name: 'Shaymin',
            role: 'Gratitude Grass',
            startingCoins: 140,
            startingWeapons: ['Seed Flare', 'Aromatherapy'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'grateful',
            quotes: [
              "Shaymin!",
              "Gratitude!",
              "Grass!",
              "Heal!",
              "Shaymin!"
            ],
            description: 'The grateful Grass Pokemon who spreads healing and gratitude.'
          },
          {
            name: 'Virizion',
            role: 'Grass Justice',
            startingCoins: 145,
            startingWeapons: ['Leaf Blade', 'Sacred Sword'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'just',
            quotes: [
              "Virizion!",
              "Justice!",
              "Grass!",
              "Fight!",
              "Virizion!"
            ],
            description: 'The just Grass Pokemon who fights for justice with nature.'
          },
          {
            name: 'Kartana',
            role: 'Grass Sword',
            startingCoins: 150,
            startingWeapons: ['Leaf Blade', 'Sacred Sword'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'sharp',
            quotes: [
              "Kartana!",
              "Sword!",
              "Grass!",
              "Cut!",
              "Kartana!"
            ],
            description: 'The sharp Grass Sword Pokemon who cuts with precision.'
          }
        ],
        generalRoles: [
          { name: 'Grass Trainer', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'peaceful' },
          { name: 'Grass Gym Leader', startingCoins: 40, startingWeapons: ['Leaf Stone'], startingMercenaries: 0, startingCastles: 1, personality: 'wise' },
          { name: 'Grass Elite', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'elite' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Pokemon Center', cost: 90, description: 'Healing center for all Pokemon, very high strategic value' },
      { name: 'Pokemon Mart', cost: 85, description: 'Shop for Pokemon items and supplies, high strategic value' },
      { name: 'Route 1', cost: 80, description: 'Main road connecting regions, high strategic value' },
      { name: 'Pokemon Lab', cost: 75, description: 'Research facility for Pokemon studies, medium strategic value' },
      { name: 'Daycare Center', cost: 70, description: 'Pokemon breeding and care facility, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // GAME OF THRONES SCENARIO
  gameOfThrones: {
    id: 'gameOfThrones',
    name: 'Game of Thrones: Battle for the Iron Throne',
    type: 'fantasy',
    description: 'The ultimate battle for the Iron Throne between the great houses of Westeros.',
    inspirationalQuote: {
      text: "When you play the game of thrones, you win or you die. There is no middle ground.",
      author: "Cersei Lannister",
      context: "Game of Thrones"
    },
    factions: {
      stark: {
        name: 'House Stark',
        color: '#2c3e50', // Dark Blue
        description: 'The honorable lords of the North',
        territories: [
          { name: 'Winterfell', cost: 100, description: 'Ancient castle and seat of House Stark' },
          { name: 'The Wall', cost: 95, description: 'Massive ice wall protecting the realm' },
          { name: 'Castle Black', cost: 90, description: 'Main fortress of the Night\'s Watch' },
          { name: 'Deepwood Motte', cost: 85, description: 'Forest stronghold of House Glover' },
          { name: 'Bear Island', cost: 80, description: 'Island fortress of House Mormont' },
          { name: 'Torrhen\'s Square', cost: 75, description: 'Fortress of House Tallhart' },
          { name: 'Karhold', cost: 70, description: 'Castle of House Karstark' },
          { name: 'Last Hearth', cost: 65, description: 'Northernmost castle of House Umber' },
          { name: 'White Harbor', cost: 60, description: 'Major port city of House Manderly' },
          { name: 'The Dreadfort', cost: 55, description: 'Former stronghold of House Bolton' }
        ],
        characters: [
          {
            name: 'Eddard Stark',
            role: 'Lord of Winterfell',
            startingCoins: 150,
            startingWeapons: ['Ice', 'Longsword'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'honorable',
            quotes: [
              "Winter is coming.",
              "The man who passes the sentence should swing the sword.",
              "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.",
              "A ruler who hides behind paid executioners soon forgets what death is.",
              "The North remembers."
            ],
            description: 'The honorable Lord of Winterfell and Warden of the North.'
          },
          {
            name: 'Robb Stark',
            role: 'King in the North',
            startingCoins: 145,
            startingWeapons: ['Grey Wind', 'Sword'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'young',
            quotes: [
              "The King in the North!",
              "I will lead my people to victory.",
              "The North will never bow to southern kings.",
              "I am the Stark in Winterfell.",
              "Winter is coming, and we are ready."
            ],
            description: 'The young King in the North who united the northern houses.'
          },
          {
            name: 'Jon Snow',
            role: 'Lord Commander',
            startingCoins: 140,
            startingWeapons: ['Longclaw', 'Dragon Glass'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'bastard',
            quotes: [
              "I know nothing.",
              "The North remembers.",
              "I am the shield that guards the realms of men.",
              "Winter is coming.",
              "The lone wolf dies, but the pack survives."
            ],
            description: 'The bastard son who became Lord Commander of the Night\'s Watch.'
          },
          {
            name: 'Sansa Stark',
            role: 'Lady of Winterfell',
            startingCoins: 135,
            startingWeapons: ['Needle', 'Poison'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'clever',
            quotes: [
              "I am Sansa Stark of Winterfell.",
              "The North remembers.",
              "I learned from the best.",
              "Winter is coming.",
              "I am the Stark in Winterfell."
            ],
            description: 'The clever Lady of Winterfell who learned from her enemies.'
          },
          {
            name: 'Arya Stark',
            role: 'Faceless Assassin',
            startingCoins: 130,
            startingWeapons: ['Needle', 'Faces'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'vengeful',
            quotes: [
              "A girl has no name.",
              "Valar morghulis.",
              "The North remembers.",
              "I am Arya Stark of Winterfell.",
              "Winter is coming."
            ],
            description: 'The vengeful assassin who trained with the Faceless Men.'
          },
          {
            name: 'Bran Stark',
            role: 'Three-Eyed Raven',
            startingCoins: 125,
            startingWeapons: ['Warging', 'Greensight'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'mystical',
            quotes: [
              "I am the Three-Eyed Raven.",
              "The past is already written.",
              "Winter is coming.",
              "I can see everything.",
              "I am Bran Stark of Winterfell."
            ],
            description: 'The mystical Three-Eyed Raven who can see through time.'
          },
          {
            name: 'Rickon Stark',
            role: 'Young Wolf',
            startingCoins: 120,
            startingWeapons: ['Bow', 'Direwolf'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wild',
            quotes: [
              "I am Rickon Stark of Winterfell.",
              "Winter is coming.",
              "The North remembers.",
              "I am the Stark in Winterfell.",
              "I will never forget who I am."
            ],
            description: 'The wild young wolf who never forgot his Stark heritage.'
          },
          {
            name: 'Catelyn Stark',
            role: 'Lady of Winterfell',
            startingCoins: 130,
            startingWeapons: ['Dagger', 'Tears'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'protective',
            quotes: [
              "The North remembers.",
              "Family, duty, honor.",
              "Winter is coming.",
              "I will protect my children.",
              "I am Catelyn Stark of Winterfell."
            ],
            description: 'The protective Lady of Winterfell who loved her family above all.'
          }
        ],
        generalRoles: [
          { name: 'Northern Lord', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Night\'s Watch Ranger', startingCoins: 40, startingWeapons: ['Sword'], startingMercenaries: 0, startingCastles: 1, personality: 'dutiful' },
          { name: 'Northern Warrior', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'fierce' }
        ]
      },
      lannister: {
        name: 'House Lannister',
        color: '#e74c3c', // Red
        description: 'The wealthy lords of the Westerlands',
        territories: [
          { name: 'Casterly Rock', cost: 100, description: 'Massive castle and seat of House Lannister' },
          { name: 'Lannisport', cost: 95, description: 'Major port city and trading hub' },
          { name: 'Golden Tooth', cost: 90, description: 'Fortress guarding the western approach' },
          { name: 'Ashemark', cost: 85, description: 'Castle of House Marbrand' },
          { name: 'Crakehall', cost: 80, description: 'Stronghold of House Crakehall' },
          { name: 'Silverhill', cost: 75, description: 'Castle of House Serrett' },
          { name: 'Cornfield', cost: 70, description: 'Fortress of House Swyft' },
          { name: 'The Crag', cost: 65, description: 'Castle of House Westerling' },
          { name: 'Fair Isle', cost: 60, description: 'Island fortress of House Farman' },
          { name: 'Banefort', cost: 55, description: 'Castle of House Banefort' }
        ],
        characters: [
          {
            name: 'Tywin Lannister',
            role: 'Lord of Casterly Rock',
            startingCoins: 150,
            startingWeapons: ['Gold', 'Army'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'ruthless',
            quotes: [
              "A Lannister always pays his debts.",
              "The lion does not concern himself with the opinions of sheep.",
              "What is dead may never die.",
              "I will not suffer insults to my house.",
              "Gold wins wars, not honor."
            ],
            description: 'The ruthless Lord of Casterly Rock and Hand of the King.'
          },
          {
            name: 'Cersei Lannister',
            role: 'Queen Regent',
            startingCoins: 145,
            startingWeapons: ['Poison', 'Gold'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'ambitious',
            quotes: [
              "When you play the game of thrones, you win or you die.",
              "I am the queen.",
              "Power is power.",
              "I will burn cities to the ground.",
              "I am Cersei Lannister of Casterly Rock."
            ],
            description: 'The ambitious Queen Regent who will stop at nothing for power.'
          },
          {
            name: 'Jaime Lannister',
            role: 'Kingslayer',
            startingCoins: 140,
            startingWeapons: ['Oathkeeper', 'Widow\'s Wail'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'kingslayer',
            quotes: [
              "The things I do for love.",
              "I am Jaime Lannister of Casterly Rock.",
              "I will fight for my house.",
              "Honor is a horse.",
              "I am the Kingslayer."
            ],
            description: 'The Kingslayer who killed the Mad King and became the Kingslayer.'
          },
          {
            name: 'Tyrion Lannister',
            role: 'Hand of the Queen',
            startingCoins: 135,
            startingWeapons: ['Wit', 'Crossbow'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'clever',
            quotes: [
              "I drink and I know things.",
              "I am Tyrion Lannister of Casterly Rock.",
              "I will outsmart my enemies.",
              "I am the Imp.",
              "I will prove my worth."
            ],
            description: 'The clever Imp who uses his wit to survive and thrive.'
          },
          {
            name: 'Joffrey Baratheon',
            role: 'King Joffrey',
            startingCoins: 130,
            startingWeapons: ['Widow\'s Wail', 'Cruelty'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'cruel',
            quotes: [
              "I am the king!",
              "I will have their heads!",
              "I am Joffrey Baratheon of King\'s Landing.",
              "I will make them pay.",
              "I am the rightful king."
            ],
            description: 'The cruel young king who ruled with fear and cruelty.'
          },
          {
            name: 'Myrcella Baratheon',
            role: 'Princess of Dorne',
            startingCoins: 125,
            startingWeapons: ['Beauty', 'Grace'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'innocent',
            quotes: [
              "I am Myrcella Baratheon of King\'s Landing.",
              "I will be a good queen.",
              "I am the princess.",
              "I will make my family proud.",
              "I am Myrcella Lannister of Casterly Rock."
            ],
            description: 'The innocent princess who was sent to Dorne as a hostage.'
          },
          {
            name: 'Tommen Baratheon',
            role: 'King Tommen',
            startingCoins: 120,
            startingWeapons: ['Crown', 'Innocence'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'young',
            quotes: [
              "I am Tommen Baratheon of King\'s Landing.",
              "I will be a good king.",
              "I am the king.",
              "I will listen to my advisors.",
              "I am Tommen Lannister of Casterly Rock."
            ],
            description: 'The young king who was easily manipulated by his mother.'
          },
          {
            name: 'Kevan Lannister',
            role: 'Lord of Casterly Rock',
            startingCoins: 130,
            startingWeapons: ['Sword', 'Loyalty'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'loyal',
            quotes: [
              "I am Kevan Lannister of Casterly Rock.",
              "I will serve my house.",
              "I am the loyal brother.",
              "I will protect my family.",
              "I am Kevan Lannister."
            ],
            description: 'The loyal brother who served his house faithfully.'
          }
        ],
        generalRoles: [
          { name: 'Lannister Lord', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'wealthy' },
          { name: 'Golden Company', startingCoins: 40, startingWeapons: ['Sword'], startingMercenaries: 0, startingCastles: 1, personality: 'mercenary' },
          { name: 'Lannister Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      targaryen: {
        name: 'House Targaryen',
        color: '#f39c12', // Orange
        description: 'The dragon lords of old Valyria',
        territories: [
          { name: 'Dragonstone', cost: 100, description: 'Ancient castle and seat of House Targaryen' },
          { name: 'Dragon\'s Bay', cost: 95, description: 'Bay where dragons once roamed' },
          { name: 'Valyria', cost: 90, description: 'Ruined city of the dragon lords' },
          { name: 'Dragonmont', cost: 85, description: 'Volcanic mountain where dragons nest' },
          { name: 'Dragon\'s Lair', cost: 80, description: 'Ancient dragon nesting grounds' },
          { name: 'Dragon\'s Gate', cost: 75, description: 'Fortress guarding dragon territory' },
          { name: 'Dragon\'s Rest', cost: 70, description: 'Sacred ground where dragons sleep' },
          { name: 'Dragon\'s Watch', cost: 65, description: 'Tower overlooking dragon lands' },
          { name: 'Dragon\'s End', cost: 60, description: 'Valley where dragons go to die' },
          { name: 'Dragon\'s Heart', cost: 55, description: 'Central keep of dragon territory' }
        ],
        characters: [
          {
            name: 'Daenerys Targaryen',
            role: 'Mother of Dragons',
            startingCoins: 150,
            startingWeapons: ['Dragons', 'Fire'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'dragon',
            quotes: [
              "I am Daenerys Stormborn of House Targaryen.",
              "I will take what is mine with fire and blood.",
              "I am the Mother of Dragons.",
              "I will break the wheel.",
              "Dracarys!"
            ],
            description: 'The Mother of Dragons who seeks to reclaim the Iron Throne.'
          },
          {
            name: 'Viserys Targaryen',
            role: 'The Beggar King',
            startingCoins: 140,
            startingWeapons: ['Crown', 'Pride'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'mad',
            quotes: [
              "I am Viserys Targaryen of House Targaryen.",
              "I am the rightful king.",
              "I will have my crown.",
              "I am the dragon.",
              "I will take what is mine."
            ],
            description: 'The Beggar King who sought to reclaim his father\'s throne.'
          },
          {
            name: 'Rhaegar Targaryen',
            role: 'The Last Dragon',
            startingCoins: 145,
            startingWeapons: ['Sword', 'Harp'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'melancholy',
            quotes: [
              "I am Rhaegar Targaryen of House Targaryen.",
              "I am the Last Dragon.",
              "I will fulfill the prophecy.",
              "I am the prince that was promised.",
              "I will bring the dawn."
            ],
            description: 'The Last Dragon who sought to fulfill an ancient prophecy.'
          },
          {
            name: 'Aerys Targaryen',
            role: 'The Mad King',
            startingCoins: 135,
            startingWeapons: ['Wildfire', 'Madness'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'mad',
            quotes: [
              "I am Aerys Targaryen of House Targaryen.",
              "I am the king.",
              "I will burn them all.",
              "I am the dragon.",
              "I will have their heads."
            ],
            description: 'The Mad King who was consumed by paranoia and madness.'
          },
          {
            name: 'Rhaella Targaryen',
            role: 'Queen of the Seven Kingdoms',
            startingCoins: 130,
            startingWeapons: ['Grace', 'Dignity'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'graceful',
            quotes: [
              "I am Rhaella Targaryen of House Targaryen.",
              "I am the queen.",
              "I will protect my children.",
              "I am the dragon queen.",
              "I will maintain my dignity."
            ],
            description: 'The graceful Queen of the Seven Kingdoms who suffered greatly.'
          },
          {
            name: 'Rhaenys Targaryen',
            role: 'The Queen Who Never Was',
            startingCoins: 125,
            startingWeapons: ['Crown', 'Pride'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'proud',
            quotes: [
              "I am Rhaenys Targaryen of House Targaryen.",
              "I am the queen who never was.",
              "I will claim my birthright.",
              "I am the dragon princess.",
              "I will prove my worth."
            ],
            description: 'The Queen Who Never Was who sought to claim her birthright.'
          },
          {
            name: 'Aegon Targaryen',
            role: 'The Conqueror',
            startingCoins: 150,
            startingWeapons: ['Blackfyre', 'Balerion'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'conqueror',
            quotes: [
              "I am Aegon Targaryen of House Targaryen.",
              "I am the Conqueror.",
              "I will unite the Seven Kingdoms.",
              "I am the dragon.",
              "I will forge a new realm."
            ],
            description: 'The Conqueror who united the Seven Kingdoms with fire and blood.'
          },
          {
            name: 'Rhaenyra Targaryen',
            role: 'The Realm\'s Delight',
            startingCoins: 140,
            startingWeapons: ['Syrax', 'Crown'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'ambitious',
            quotes: [
              "I am Rhaenyra Targaryen of House Targaryen.",
              "I am the Realm\'s Delight.",
              "I will claim my throne.",
              "I am the dragon princess.",
              "I will prove I am worthy."
            ],
            description: 'The Realm\'s Delight who fought for her right to the throne.'
          }
        ],
        generalRoles: [
          { name: 'Dragon Rider', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'dragon' },
          { name: 'Valyrian Lord', startingCoins: 40, startingWeapons: ['Valyrian Steel'], startingMercenaries: 0, startingCastles: 1, personality: 'ancient' },
          { name: 'Dragon Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      nightsWatch: {
        name: 'The Night\'s Watch',
        color: '#34495e', // Dark Gray
        description: 'The sworn brothers who guard the realm',
        territories: [
          { name: 'Castle Black', cost: 100, description: 'Main fortress of the Night\'s Watch' },
          { name: 'The Wall', cost: 95, description: 'Massive ice wall protecting the realm' },
          { name: 'Eastwatch-by-the-Sea', cost: 90, description: 'Easternmost castle on the Wall' },
          { name: 'Shadow Tower', cost: 85, description: 'Westernmost castle on the Wall' },
          { name: 'Nightfort', cost: 80, description: 'Ancient castle on the Wall' },
          { name: 'Deep Lake', cost: 75, description: 'Castle on the Wall' },
          { name: 'Queensgate', cost: 70, description: 'Castle on the Wall' },
          { name: 'Oakenshield', cost: 65, description: 'Castle on the Wall' },
          { name: 'Woodswatch-by-the-Pool', cost: 60, description: 'Castle on the Wall' },
          { name: 'Sable Hall', cost: 55, description: 'Castle on the Wall' }
        ],
        characters: [
          {
            name: 'Jeor Mormont',
            role: 'Lord Commander',
            startingCoins: 150,
            startingWeapons: ['Longclaw', 'Honor'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'honorable',
            quotes: [
              "I am Jeor Mormont of the Night\'s Watch.",
              "I am the shield that guards the realms of men.",
              "I will protect the realm.",
              "I am the Lord Commander.",
              "I will serve until my death."
            ],
            description: 'The honorable Lord Commander who served the Night\'s Watch faithfully.'
          },
          {
            name: 'Benjen Stark',
            role: 'First Ranger',
            startingCoins: 145,
            startingWeapons: ['Sword', 'Ranger Gear'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'dutiful',
            quotes: [
              "I am Benjen Stark of the Night\'s Watch.",
              "I am the First Ranger.",
              "I will patrol beyond the Wall.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The dutiful First Ranger who patrolled beyond the Wall.'
          },
          {
            name: 'Alliser Thorne',
            role: 'Master-at-Arms',
            startingCoins: 140,
            startingWeapons: ['Sword', 'Discipline'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'strict',
            quotes: [
              "I am Alliser Thorne of the Night\'s Watch.",
              "I am the Master-at-Arms.",
              "I will train the recruits.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The strict Master-at-Arms who trained new recruits.'
          },
          {
            name: 'Maester Aemon',
            role: 'Maester of Castle Black',
            startingCoins: 135,
            startingWeapons: ['Knowledge', 'Wisdom'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'wise',
            quotes: [
              "I am Maester Aemon of the Night\'s Watch.",
              "I am the Maester of Castle Black.",
              "I will provide counsel and healing.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The wise Maester who provided counsel and healing.'
          },
          {
            name: 'Samwell Tarly',
            role: 'Maester in Training',
            startingCoins: 130,
            startingWeapons: ['Books', 'Knowledge'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'scholarly',
            quotes: [
              "I am Samwell Tarly of the Night\'s Watch.",
              "I am the Maester in Training.",
              "I will learn and serve.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The scholarly Maester in Training who sought knowledge.'
          },
          {
            name: 'Grenn',
            role: 'Ranger',
            startingCoins: 125,
            startingWeapons: ['Sword', 'Loyalty'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I am Grenn of the Night\'s Watch.",
              "I am a Ranger.",
              "I will patrol beyond the Wall.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The loyal Ranger who served his brothers faithfully.'
          },
          {
            name: 'Pyp',
            role: 'Steward',
            startingCoins: 120,
            startingWeapons: ['Bow', 'Wit'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'clever',
            quotes: [
              "I am Pyp of the Night\'s Watch.",
              "I am a Steward.",
              "I will serve the Watch.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The clever Steward who served the Watch with wit and humor.'
          },
          {
            name: 'Eddison Tollett',
            role: 'Ranger',
            startingCoins: 125,
            startingWeapons: ['Sword', 'Pessimism'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'pessimistic',
            quotes: [
              "I am Eddison Tollett of the Night\'s Watch.",
              "I am a Ranger.",
              "I will patrol beyond the Wall.",
              "I am the shield that guards the realms of men.",
              "I will serve until my death."
            ],
            description: 'The pessimistic Ranger who served despite his gloomy outlook.'
          }
        ],
        generalRoles: [
          { name: 'Night\'s Watch Recruit', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'new' },
          { name: 'Night\'s Watch Ranger', startingCoins: 40, startingWeapons: ['Sword'], startingMercenaries: 0, startingCastles: 1, personality: 'dutiful' },
          { name: 'Night\'s Watch Steward', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'servant' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'King\'s Landing', cost: 90, description: 'Capital city and seat of power, very high strategic value' },
      { name: 'The Red Keep', cost: 85, description: 'Royal castle and throne room, high strategic value' },
      { name: 'The Iron Throne', cost: 80, description: 'The ultimate prize and symbol of power, high strategic value' },
      { name: 'The Great Sept', cost: 75, description: 'Religious center and political hub, medium strategic value' },
      { name: 'The Dragonpit', cost: 70, description: 'Ancient dragon arena and meeting place, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // AVATAR: THE LAST AIRBENDER SCENARIO
  avatar: {
    id: 'avatar',
    name: 'Avatar: The Last Airbender',
    type: 'fantasy',
    description: 'The epic battle between the four nations in the world of Avatar.',
    inspirationalQuote: {
      text: "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
      author: "Iroh",
      context: "Avatar: The Last Airbender"
    },
    factions: {
      waterTribe: {
        name: 'Water Tribe',
        color: '#3498db', // Blue
        description: 'The waterbenders of the North and South Poles',
        territories: [
          { name: 'Northern Water Tribe', cost: 100, description: 'Capital city of the Water Tribe' },
          { name: 'Southern Water Tribe', cost: 95, description: 'Southern capital and trading hub' },
          { name: 'Spirit Oasis', cost: 90, description: 'Sacred oasis with spiritual power' },
          { name: 'Ice Caves', cost: 85, description: 'Ancient caves with waterbending secrets' },
          { name: 'Frozen Tundra', cost: 80, description: 'Vast frozen wilderness' },
          { name: 'Glacier Fields', cost: 75, description: 'Massive ice formations' },
          { name: 'Aurora Bay', cost: 70, description: 'Bay with beautiful aurora displays' },
          { name: 'Crystal Caverns', cost: 65, description: 'Caverns filled with ice crystals' },
          { name: 'Frost Valley', cost: 60, description: 'Valley covered in eternal frost' },
          { name: 'Moon Temple', cost: 55, description: 'Temple dedicated to the moon spirit' }
        ],
        characters: [
          {
            name: 'Katara',
            role: 'Waterbending Master',
            startingCoins: 150,
            startingWeapons: ['Water Whip', 'Ice Shards'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'determined',
            quotes: [
              "I will never give up without a fight.",
              "I am Katara of the Water Tribe.",
              "I will master waterbending.",
              "I will protect my people.",
              "I am the last waterbender of the South."
            ],
            description: 'The determined waterbending master who never gives up.'
          },
          {
            name: 'Sokka',
            role: 'Warrior and Strategist',
            startingCoins: 145,
            startingWeapons: ['Boomerang', 'Space Sword'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'clever',
            quotes: [
              "I am Sokka of the Water Tribe.",
              "I will lead with strategy.",
              "I am the warrior of the South.",
              "I will protect my sister.",
              "I am the master of the boomerang."
            ],
            description: 'The clever warrior and strategist of the Water Tribe.'
          },
          {
            name: 'Pakku',
            role: 'Waterbending Master',
            startingCoins: 140,
            startingWeapons: ['Water Spout', 'Ice Wall'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'traditional',
            quotes: [
              "I am Pakku of the Northern Water Tribe.",
              "I will teach the ancient ways.",
              "I am the master of waterbending.",
              "I will preserve our traditions.",
              "I am the guardian of the North."
            ],
            description: 'The traditional waterbending master of the North.'
          },
          {
            name: 'Hama',
            role: 'Bloodbending Master',
            startingCoins: 135,
            startingWeapons: ['Bloodbending', 'Water Control'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'vengeful',
            quotes: [
              "I am Hama of the Southern Water Tribe.",
              "I will teach you bloodbending.",
              "I am the master of the dark art.",
              "I will have my revenge.",
              "I am the last of the South."
            ],
            description: 'The vengeful bloodbending master who seeks revenge.'
          },
          {
            name: 'Yue',
            role: 'Moon Spirit',
            startingCoins: 130,
            startingWeapons: ['Spirit Power', 'Moon Energy'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'sacrificial',
            quotes: [
              "I am Yue of the Northern Water Tribe.",
              "I am the moon spirit.",
              "I will sacrifice for my people.",
              "I am the princess of the North.",
              "I will give my life for the world."
            ],
            description: 'The sacrificial moon spirit who gave her life for the world.'
          },
          {
            name: 'Hakoda',
            role: 'Chief of the South',
            startingCoins: 125,
            startingWeapons: ['Spear', 'Leadership'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'leadership',
            quotes: [
              "I am Hakoda, Chief of the Southern Water Tribe.",
              "I will lead my people to victory.",
              "I am the father of Katara and Sokka.",
              "I will fight for freedom.",
              "I am the chief of the South."
            ],
            description: 'The chief of the Southern Water Tribe and father of Katara and Sokka.'
          },
          {
            name: 'Kanna',
            role: 'Elder of the South',
            startingCoins: 120,
            startingWeapons: ['Wisdom', 'Experience'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I am Kanna of the Southern Water Tribe.",
              "I am the grandmother of Katara and Sokka.",
              "I will share my wisdom.",
              "I am the elder of the South.",
              "I will guide my people."
            ],
            description: 'The wise elder of the Southern Water Tribe.'
          },
          {
            name: 'Kuruk',
            role: 'Avatar of Water',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'Waterbending'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Kuruk, Avatar of Water.",
              "I will maintain balance.",
              "I am the bridge between worlds.",
              "I will protect all nations.",
              "I am the Avatar."
            ],
            description: 'The Avatar of Water who maintained balance in the world.'
          }
        ],
        generalRoles: [
          { name: 'Water Tribe Warrior', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Waterbending Student', startingCoins: 40, startingWeapons: ['Water'], startingMercenaries: 0, startingCastles: 1, personality: 'learning' },
          { name: 'Water Tribe Elder', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'wise' }
        ]
      },
      earthKingdom: {
        name: 'Earth Kingdom',
        color: '#2ecc71', // Green
        description: 'The earthbenders of the vast Earth Kingdom',
        territories: [
          { name: 'Ba Sing Se', cost: 100, description: 'Capital city of the Earth Kingdom' },
          { name: 'Omashu', cost: 95, description: 'Ancient city of earthbending' },
          { name: 'Kyoshi Island', cost: 90, description: 'Island home of Avatar Kyoshi' },
          { name: 'Gaoling', cost: 85, description: 'City of earthbending tournaments' },
          { name: 'Si Wong Desert', cost: 80, description: 'Vast desert wasteland' },
          { name: 'Foggy Swamp', cost: 75, description: 'Mysterious swamp with secrets' },
          { name: 'Crystal Catacombs', cost: 70, description: 'Underground crystal formations' },
          { name: 'Earth Rumble Arena', cost: 65, description: 'Arena for earthbending competitions' },
          { name: 'Serpent\'s Pass', cost: 60, description: 'Dangerous mountain pass' },
          { name: 'Earth Kingdom Palace', cost: 55, description: 'Royal palace of the Earth King' }
        ],
        characters: [
          {
            name: 'Toph Beifong',
            role: 'Blind Bandit',
            startingCoins: 150,
            startingWeapons: ['Earthbending', 'Seismic Sense'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'rebellious',
            quotes: [
              "I am Toph Beifong, the Blind Bandit.",
              "I will show you what I can do.",
              "I am the greatest earthbender in the world.",
              "I will not be underestimated.",
              "I am the master of earthbending."
            ],
            description: 'The rebellious blind earthbending master who invented metalbending.'
          },
          {
            name: 'King Bumi',
            role: 'Mad Genius',
            startingCoins: 145,
            startingWeapons: ['Earthbending', 'Madness'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'mad',
            quotes: [
              "I am King Bumi of Omashu.",
              "I am the mad genius.",
              "I will test your earthbending.",
              "I am the king of Omashu.",
              "I will show you true power."
            ],
            description: 'The mad genius king of Omashu who tests earthbenders.'
          },
          {
            name: 'Long Feng',
            role: 'Grand Secretariat',
            startingCoins: 140,
            startingWeapons: ['Earthbending', 'Manipulation'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'manipulative',
            quotes: [
              "I am Long Feng, Grand Secretariat of Ba Sing Se.",
              "I will control the city.",
              "I am the true power behind the throne.",
              "I will maintain order.",
              "I am the secret keeper."
            ],
            description: 'The manipulative Grand Secretariat who controls Ba Sing Se.'
          },
          {
            name: 'Haru',
            role: 'Earthbending Prisoner',
            startingCoins: 135,
            startingWeapons: ['Earthbending', 'Determination'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'determined',
            quotes: [
              "I am Haru of the Earth Kingdom.",
              "I will fight for freedom.",
              "I am an earthbender.",
              "I will protect my people.",
              "I will never give up."
            ],
            description: 'The determined earthbender who fought for freedom.'
          },
          {
            name: 'The Boulder',
            role: 'Earth Rumble Champion',
            startingCoins: 130,
            startingWeapons: ['Earthbending', 'Strength'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'boastful',
            quotes: [
              "I am The Boulder!",
              "I will crush my enemies.",
              "I am the champion of Earth Rumble.",
              "I will show you my power.",
              "I am The Boulder!"
            ],
            description: 'The boastful earthbending champion of Earth Rumble.'
          },
          {
            name: 'Xin Fu',
            role: 'Earth Rumble Promoter',
            startingCoins: 125,
            startingWeapons: ['Earthbending', 'Business'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "I am Xin Fu, promoter of Earth Rumble.",
              "I will make money from earthbending.",
              "I am the business master.",
              "I will promote the best fights.",
              "I am the promoter."
            ],
            description: 'The greedy promoter of Earth Rumble competitions.'
          },
          {
            name: 'Avatar Kyoshi',
            role: 'Avatar of Earth',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'Earthbending'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Avatar Kyoshi of the Earth Kingdom.",
              "I will maintain balance.",
              "I am the bridge between worlds.",
              "I will protect all nations.",
              "I am the Avatar."
            ],
            description: 'The Avatar of Earth who maintained balance in the world.'
          },
          {
            name: 'Earth King',
            role: 'King of Ba Sing Se',
            startingCoins: 140,
            startingWeapons: ['Authority', 'Power'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'naive',
            quotes: [
              "I am the Earth King of Ba Sing Se.",
              "I will rule my kingdom.",
              "I am the king of the Earth Kingdom.",
              "I will protect my people.",
              "I am the Earth King."
            ],
            description: 'The naive Earth King who was controlled by Long Feng.'
          }
        ],
        generalRoles: [
          { name: 'Earth Kingdom Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Earthbending Student', startingCoins: 40, startingWeapons: ['Earth'], startingMercenaries: 0, startingCastles: 1, personality: 'learning' },
          { name: 'Earth Kingdom Noble', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'wealthy' }
        ]
      },
      fireNation: {
        name: 'Fire Nation',
        color: '#e74c3c', // Red
        description: 'The firebenders of the Fire Nation',
        territories: [
          { name: 'Fire Nation Capital', cost: 100, description: 'Capital city of the Fire Nation' },
          { name: 'Ember Island', cost: 95, description: 'Royal vacation island' },
          { name: 'Fire Nation Academy', cost: 90, description: 'Military academy and training ground' },
          { name: 'Boiling Rock', cost: 85, description: 'Maximum security prison' },
          { name: 'Fire Nation Navy Base', cost: 80, description: 'Naval headquarters' },
          { name: 'Fire Nation Air Temple', cost: 75, description: 'Conquered air temple' },
          { name: 'Fire Nation Colonies', cost: 70, description: 'Colonized Earth Kingdom territories' },
          { name: 'Fire Nation Shipyard', cost: 65, description: 'Ship construction facility' },
          { name: 'Fire Nation Armory', cost: 60, description: 'Weapons and armor storage' },
          { name: 'Fire Nation Throne Room', cost: 55, description: 'Royal throne room and court' }
        ],
        characters: [
          {
            name: 'Zuko',
            role: 'Fire Lord',
            startingCoins: 150,
            startingWeapons: ['Firebending', 'Dual Swords'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'honor',
            quotes: [
              "I am Zuko, Fire Lord of the Fire Nation.",
              "I will restore honor to my nation.",
              "I am the rightful Fire Lord.",
              "I will bring peace to the world.",
              "I am the master of firebending."
            ],
            description: 'The honorable Fire Lord who seeks to restore peace.'
          },
          {
            name: 'Azula',
            role: 'Firebending Prodigy',
            startingCoins: 145,
            startingWeapons: ['Lightning', 'Firebending'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'cruel',
            quotes: [
              "I am Azula, princess of the Fire Nation.",
              "I will rule with fear.",
              "I am the firebending prodigy.",
              "I will have absolute power.",
              "I am the master of lightning."
            ],
            description: 'The cruel firebending prodigy who seeks absolute power.'
          },
          {
            name: 'Fire Lord Ozai',
            role: 'Phoenix King',
            startingCoins: 150,
            startingWeapons: ['Firebending', 'Lightning'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'tyrannical',
            quotes: [
              "I am Fire Lord Ozai, the Phoenix King.",
              "I will conquer the world.",
              "I am the supreme ruler.",
              "I will burn everything in my path.",
              "I am the Phoenix King."
            ],
            description: 'The tyrannical Fire Lord who seeks to conquer the world.'
          },
          {
            name: 'Iroh',
            role: 'Dragon of the West',
            startingCoins: 140,
            startingWeapons: ['Firebending', 'Lightning'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'wise',
            quotes: [
              "I am Iroh, the Dragon of the West.",
              "I will teach you firebending.",
              "I am the wise uncle.",
              "I will guide you to wisdom.",
              "I am the Dragon of the West."
            ],
            description: 'The wise Dragon of the West who teaches firebending.'
          },
          {
            name: 'Mai',
            role: 'Knife Thrower',
            startingCoins: 135,
            startingWeapons: ['Knives', 'Stealth'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'stoic',
            quotes: [
              "I am Mai of the Fire Nation.",
              "I will throw knives with precision.",
              "I am the master of knives.",
              "I will protect those I love.",
              "I am Mai."
            ],
            description: 'The stoic knife thrower who serves the Fire Nation.'
          },
          {
            name: 'Ty Lee',
            role: 'Acrobat',
            startingCoins: 130,
            startingWeapons: ['Chi Blocking', 'Acrobatics'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'cheerful',
            quotes: [
              "I am Ty Lee of the Fire Nation.",
              "I will flip and tumble.",
              "I am the master of chi blocking.",
              "I will bring joy to the world.",
              "I am Ty Lee."
            ],
            description: 'The cheerful acrobat who masters chi blocking.'
          },
          {
            name: 'Zhao',
            role: 'Admiral',
            startingCoins: 125,
            startingWeapons: ['Firebending', 'Navy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ambitious',
            quotes: [
              "I am Admiral Zhao of the Fire Nation Navy.",
              "I will capture the Avatar.",
              "I am the master of the navy.",
              "I will have glory.",
              "I am Admiral Zhao."
            ],
            description: 'The ambitious admiral who seeks to capture the Avatar.'
          },
          {
            name: 'Avatar Roku',
            role: 'Avatar of Fire',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'Firebending'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Avatar Roku of the Fire Nation.",
              "I will maintain balance.",
              "I am the bridge between worlds.",
              "I will protect all nations.",
              "I am the Avatar."
            ],
            description: 'The Avatar of Fire who maintained balance in the world.'
          }
        ],
        generalRoles: [
          { name: 'Fire Nation Soldier', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Firebending Student', startingCoins: 40, startingWeapons: ['Fire'], startingMercenaries: 0, startingCastles: 1, personality: 'learning' },
          { name: 'Fire Nation Noble', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'wealthy' }
        ]
      },
      airNomads: {
        name: 'Air Nomads',
        color: '#9b59b6', // Purple
        description: 'The airbenders of the Air Nomads',
        territories: [
          { name: 'Northern Air Temple', cost: 100, description: 'Ancient air temple in the north' },
          { name: 'Southern Air Temple', cost: 95, description: 'Ancient air temple in the south' },
          { name: 'Eastern Air Temple', cost: 90, description: 'Ancient air temple in the east' },
          { name: 'Western Air Temple', cost: 85, description: 'Ancient air temple in the west' },
          { name: 'Air Nomad Sanctuary', cost: 80, description: 'Sacred sanctuary for airbenders' },
          { name: 'Sky Bison Herd', cost: 75, description: 'Home of the sky bison' },
          { name: 'Air Nomad Library', cost: 70, description: 'Ancient library of airbending knowledge' },
          { name: 'Spirit World Portal', cost: 65, description: 'Gateway to the Spirit World' },
          { name: 'Air Nomad Gardens', cost: 60, description: 'Peaceful gardens and meditation areas' },
          { name: 'Air Nomad Shrine', cost: 55, description: 'Sacred shrine to the airbending masters' }
        ],
        characters: [
          {
            name: 'Aang',
            role: 'Avatar',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'Airbending'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Aang, the Avatar.",
              "I will restore balance to the world.",
              "I am the master of all four elements.",
              "I will bring peace to all nations.",
              "I am the last airbender."
            ],
            description: 'The Avatar who must master all four elements to restore balance.'
          },
          {
            name: 'Gyatso',
            role: 'Airbending Master',
            startingCoins: 145,
            startingWeapons: ['Airbending', 'Wisdom'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'wise',
            quotes: [
              "I am Gyatso, master of airbending.",
              "I will teach you the ways of air.",
              "I am the guardian of the air temples.",
              "I will protect the airbenders.",
              "I am the master of airbending."
            ],
            description: 'The wise airbending master who taught Aang.'
          },
          {
            name: 'Yangchen',
            role: 'Avatar of Air',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'Airbending'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Avatar Yangchen of the Air Nomads.",
              "I will maintain balance.",
              "I am the bridge between worlds.",
              "I will protect all nations.",
              "I am the Avatar."
            ],
            description: 'The Avatar of Air who maintained balance in the world.'
          },
          {
            name: 'Tenzin',
            role: 'Airbending Master',
            startingCoins: 140,
            startingWeapons: ['Airbending', 'Leadership'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'serious',
            quotes: [
              "I am Tenzin, master of airbending.",
              "I will teach you the ways of air.",
              "I am the son of Avatar Aang.",
              "I will protect the airbenders.",
              "I am the master of airbending."
            ],
            description: 'The serious airbending master and son of Avatar Aang.'
          },
          {
            name: 'Jinora',
            role: 'Airbending Prodigy',
            startingCoins: 135,
            startingWeapons: ['Airbending', 'Spirit Connection'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'spiritual',
            quotes: [
              "I am Jinora, airbending prodigy.",
              "I will master airbending.",
              "I am the daughter of Tenzin.",
              "I will connect with the spirits.",
              "I am the airbending prodigy."
            ],
            description: 'The spiritual airbending prodigy and daughter of Tenzin.'
          },
          {
            name: 'Ikki',
            role: 'Airbending Student',
            startingCoins: 130,
            startingWeapons: ['Airbending', 'Enthusiasm'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'energetic',
            quotes: [
              "I am Ikki, airbending student.",
              "I will learn airbending.",
              "I am the daughter of Tenzin.",
              "I will be the best airbender.",
              "I am Ikki."
            ],
            description: 'The energetic airbending student and daughter of Tenzin.'
          },
          {
            name: 'Meelo',
            role: 'Airbending Student',
            startingCoins: 125,
            startingWeapons: ['Airbending', 'Playfulness'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'playful',
            quotes: [
              "I am Meelo, airbending student.",
              "I will learn airbending.",
              "I am the son of Tenzin.",
              "I will be the best airbender.",
              "I am Meelo."
            ],
            description: 'The playful airbending student and son of Tenzin.'
          },
          {
            name: 'Korra',
            role: 'Avatar',
            startingCoins: 150,
            startingWeapons: ['Avatar State', 'All Elements'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'avatar',
            quotes: [
              "I am Korra, the Avatar.",
              "I will restore balance to the world.",
              "I am the master of all four elements.",
              "I will bring peace to all nations.",
              "I am the Avatar."
            ],
            description: 'The Avatar who must master all four elements to restore balance.'
          }
        ],
        generalRoles: [
          { name: 'Air Nomad Monk', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'peaceful' },
          { name: 'Airbending Student', startingCoins: 40, startingWeapons: ['Air'], startingMercenaries: 0, startingCastles: 1, personality: 'learning' },
          { name: 'Air Nomad Elder', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'wise' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Spirit World', cost: 90, description: 'Mystical realm of spirits, very high strategic value' },
      { name: 'Avatar State', cost: 85, description: 'Ultimate power of the Avatar, high strategic value' },
      { name: 'Balance of Elements', cost: 80, description: 'Harmony between all four elements, high strategic value' },
      { name: 'Spirit Portal', cost: 75, description: 'Gateway between worlds, medium strategic value' },
      { name: 'Avatar\'s Duty', cost: 70, description: 'Sacred responsibility to maintain balance, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // GREEK MYTHOLOGY SCENARIO
  greekMythology: {
    id: 'greekMythology',
    name: 'Greek Mythology: Gods vs Titans vs Mortals',
    type: 'mythology',
    description: 'The epic battle between the Olympian gods, the ancient Titans, and mortal heroes.',
    inspirationalQuote: {
      text: "Know thyself.",
      author: "Socrates",
      context: "Ancient Greek philosopher"
    },
    factions: {
      olympians: {
        name: 'Olympian Gods',
        color: '#e74c3c', // Red
        description: 'The powerful gods who rule from Mount Olympus',
        territories: [
          { name: 'Mount Olympus', cost: 100, description: 'Sacred mountain home of the gods' },
          { name: 'Zeus\' Throne', cost: 95, description: 'Supreme ruler\'s seat of power' },
          { name: 'Hera\'s Palace', cost: 90, description: 'Queen of the gods\' royal residence' },
          { name: 'Poseidon\'s Palace', cost: 85, description: 'Underwater palace of the sea god' },
          { name: 'Hades\' Underworld', cost: 80, description: 'Realm of the dead and underworld' },
          { name: 'Athena\'s Temple', cost: 75, description: 'Temple of wisdom and warfare' },
          { name: 'Apollo\'s Sun Chariot', cost: 70, description: 'Chariot that carries the sun' },
          { name: 'Artemis\' Moon Grove', cost: 65, description: 'Sacred grove of the huntress' },
          { name: 'Ares\' War Camp', cost: 60, description: 'Military camp of the war god' },
          { name: 'Aphrodite\'s Garden', cost: 55, description: 'Beautiful garden of love and beauty' }
        ],
        characters: [
          {
            name: 'Zeus',
            role: 'King of the Gods',
            startingCoins: 150,
            startingWeapons: ['Thunderbolt', 'Lightning'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'powerful',
            quotes: [
              "I am Zeus, King of the Gods!",
              "I will rule with thunder and lightning!",
              "I am the supreme ruler of Olympus!",
              "I will strike down my enemies!",
              "I am the master of the sky!"
            ],
            description: 'The powerful King of the Gods who rules from Mount Olympus.'
          },
          {
            name: 'Hera',
            role: 'Queen of the Gods',
            startingCoins: 145,
            startingWeapons: ['Peacock Feathers', 'Royal Authority'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'jealous',
            quotes: [
              "I am Hera, Queen of the Gods!",
              "I will protect my marriage!",
              "I am the queen of Olympus!",
              "I will punish those who wrong me!",
              "I am the goddess of marriage!"
            ],
            description: 'The jealous Queen of the Gods who protects marriage.'
          },
          {
            name: 'Poseidon',
            role: 'God of the Sea',
            startingCoins: 140,
            startingWeapons: ['Trident', 'Sea Storms'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'tempestuous',
            quotes: [
              "I am Poseidon, God of the Sea!",
              "I will control the oceans!",
              "I am the master of the deep!",
              "I will create tsunamis!",
              "I am the earth-shaker!"
            ],
            description: 'The tempestuous God of the Sea who controls the oceans.'
          },
          {
            name: 'Hades',
            role: 'God of the Underworld',
            startingCoins: 135,
            startingWeapons: ['Helmet of Darkness', 'Cerberus'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'dark',
            quotes: [
              "I am Hades, God of the Underworld!",
              "I will rule the realm of the dead!",
              "I am the master of the underworld!",
              "I will judge the souls!",
              "I am the lord of the dead!"
            ],
            description: 'The dark God of the Underworld who rules the realm of the dead.'
          },
          {
            name: 'Athena',
            role: 'Goddess of Wisdom',
            startingCoins: 130,
            startingWeapons: ['Aegis', 'Owl'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'wise',
            quotes: [
              "I am Athena, Goddess of Wisdom!",
              "I will guide with wisdom!",
              "I am the goddess of strategy!",
              "I will protect my city!",
              "I am the wise warrior!"
            ],
            description: 'The wise Goddess of Wisdom who guides with strategy.'
          },
          {
            name: 'Apollo',
            role: 'God of the Sun',
            startingCoins: 125,
            startingWeapons: ['Golden Bow', 'Sun Chariot'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'radiant',
            quotes: [
              "I am Apollo, God of the Sun!",
              "I will bring light to the world!",
              "I am the god of music!",
              "I will heal with my light!",
              "I am the radiant sun god!"
            ],
            description: 'The radiant God of the Sun who brings light and healing.'
          },
          {
            name: 'Artemis',
            role: 'Goddess of the Hunt',
            startingCoins: 120,
            startingWeapons: ['Silver Bow', 'Hunting Dogs'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'independent',
            quotes: [
              "I am Artemis, Goddess of the Hunt!",
              "I will hunt with precision!",
              "I am the goddess of the moon!",
              "I will protect the wild!",
              "I am the independent huntress!"
            ],
            description: 'The independent Goddess of the Hunt who protects the wild.'
          },
          {
            name: 'Ares',
            role: 'God of War',
            startingCoins: 125,
            startingWeapons: ['Spear', 'War Chariot'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'warlike',
            quotes: [
              "I am Ares, God of War!",
              "I will fight with fury!",
              "I am the god of battle!",
              "I will bring destruction!",
              "I am the warlike god!"
            ],
            description: 'The warlike God of War who brings destruction and battle.'
          },
          {
            name: 'Aphrodite',
            role: 'Goddess of Love',
            startingCoins: 120,
            startingWeapons: ['Love Arrows', 'Beauty'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'beautiful',
            quotes: [
              "I am Aphrodite, Goddess of Love!",
              "I will spread love and beauty!",
              "I am the goddess of desire!",
              "I will enchant with my beauty!",
              "I am the beautiful goddess!"
            ],
            description: 'The beautiful Goddess of Love who spreads love and beauty.'
          },
          {
            name: 'Hermes',
            role: 'Messenger of the Gods',
            startingCoins: 115,
            startingWeapons: ['Winged Sandals', 'Caduceus'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'swift',
            quotes: [
              "I am Hermes, Messenger of the Gods!",
              "I will deliver messages swiftly!",
              "I am the god of travel!",
              "I will guide souls to the underworld!",
              "I am the swift messenger!"
            ],
            description: 'The swift Messenger of the Gods who delivers messages.'
          }
        ],
        generalRoles: [
          { name: 'Olympian God', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'divine' },
          { name: 'Divine Messenger', startingCoins: 40, startingWeapons: ['Divine Power'], startingMercenaries: 0, startingCastles: 1, personality: 'celestial' },
          { name: 'Olympian Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      titans: {
        name: 'Ancient Titans',
        color: '#8e44ad', // Purple
        description: 'The ancient titans who ruled before the gods',
        territories: [
          { name: 'Tartarus', cost: 100, description: 'Deep prison where titans are imprisoned' },
          { name: 'Cronus\' Throne', cost: 95, description: 'Ancient throne of the titan king' },
          { name: 'Rhea\'s Sanctuary', cost: 90, description: 'Sacred sanctuary of the titan queen' },
          { name: 'Oceanus\' Depths', cost: 85, description: 'Deep ocean realm of the titan' },
          { name: 'Hyperion\'s Light', cost: 80, description: 'Realm of the titan of light' },
          { name: 'Theia\'s Radiance', cost: 75, description: 'Realm of the titan of sight' },
          { name: 'Coeus\' Intelligence', cost: 70, description: 'Realm of the titan of intellect' },
          { name: 'Phoebe\'s Prophecy', cost: 65, description: 'Realm of the titan of prophecy' },
          { name: 'Crius\' Constellations', cost: 60, description: 'Realm of the titan of constellations' },
          { name: 'Mnemosyne\'s Memory', cost: 55, description: 'Realm of the titan of memory' }
        ],
        characters: [
          {
            name: 'Cronus',
            role: 'King of the Titans',
            startingCoins: 150,
            startingWeapons: ['Scythe', 'Time Control'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'tyrannical',
            quotes: [
              "I am Cronus, King of the Titans!",
              "I will devour my children!",
              "I am the master of time!",
              "I will rule forever!",
              "I am the titan king!"
            ],
            description: 'The tyrannical King of the Titans who devours his children.'
          },
          {
            name: 'Rhea',
            role: 'Queen of the Titans',
            startingCoins: 145,
            startingWeapons: ['Mother\'s Love', 'Protection'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'protective',
            quotes: [
              "I am Rhea, Queen of the Titans!",
              "I will protect my children!",
              "I am the mother of the gods!",
              "I will save Zeus!",
              "I am the protective mother!"
            ],
            description: 'The protective Queen of the Titans who saves her children.'
          },
          {
            name: 'Oceanus',
            role: 'Titan of the Ocean',
            startingCoins: 140,
            startingWeapons: ['Ocean Waves', 'Sea Creatures'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'vast',
            quotes: [
              "I am Oceanus, Titan of the Ocean!",
              "I will control the vast seas!",
              "I am the master of the deep!",
              "I will flood the world!",
              "I am the vast ocean titan!"
            ],
            description: 'The vast Titan of the Ocean who controls the seas.'
          },
          {
            name: 'Hyperion',
            role: 'Titan of Light',
            startingCoins: 135,
            startingWeapons: ['Solar Rays', 'Light'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'radiant',
            quotes: [
              "I am Hyperion, Titan of Light!",
              "I will shine with brilliance!",
              "I am the father of the sun!",
              "I will illuminate the world!",
              "I am the radiant light titan!"
            ],
            description: 'The radiant Titan of Light who illuminates the world.'
          },
          {
            name: 'Theia',
            role: 'Titan of Sight',
            startingCoins: 130,
            startingWeapons: ['Vision', 'Radiance'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'luminous',
            quotes: [
              "I am Theia, Titan of Sight!",
              "I will see all with clarity!",
              "I am the mother of the moon!",
              "I will illuminate the darkness!",
              "I am the luminous sight titan!"
            ],
            description: 'The luminous Titan of Sight who sees all with clarity.'
          },
          {
            name: 'Coeus',
            role: 'Titan of Intellect',
            startingCoins: 125,
            startingWeapons: ['Wisdom', 'Knowledge'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I am Coeus, Titan of Intellect!",
              "I will think with wisdom!",
              "I am the father of wisdom!",
              "I will outsmart my enemies!",
              "I am the wise intellect titan!"
            ],
            description: 'The wise Titan of Intellect who thinks with wisdom.'
          },
          {
            name: 'Phoebe',
            role: 'Titan of Prophecy',
            startingCoins: 120,
            startingWeapons: ['Prophecy', 'Oracle'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'prophetic',
            quotes: [
              "I am Phoebe, Titan of Prophecy!",
              "I will see the future!",
              "I am the mother of prophecy!",
              "I will foretell destiny!",
              "I am the prophetic titan!"
            ],
            description: 'The prophetic Titan of Prophecy who sees the future.'
          },
          {
            name: 'Crius',
            role: 'Titan of Constellations',
            startingCoins: 115,
            startingWeapons: ['Stars', 'Constellations'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'stellar',
            quotes: [
              "I am Crius, Titan of Constellations!",
              "I will control the stars!",
              "I am the father of constellations!",
              "I will guide with the stars!",
              "I am the stellar constellation titan!"
            ],
            description: 'The stellar Titan of Constellations who controls the stars.'
          },
          {
            name: 'Mnemosyne',
            role: 'Titan of Memory',
            startingCoins: 110,
            startingWeapons: ['Memory', 'Remembrance'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'memorable',
            quotes: [
              "I am Mnemosyne, Titan of Memory!",
              "I will remember all!",
              "I am the mother of the muses!",
              "I will preserve knowledge!",
              "I am the memorable memory titan!"
            ],
            description: 'The memorable Titan of Memory who remembers all.'
          },
          {
            name: 'Iapetus',
            role: 'Titan of Mortality',
            startingCoins: 105,
            startingWeapons: ['Mortality', 'Death'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mortal',
            quotes: [
              "I am Iapetus, Titan of Mortality!",
              "I will bring death to mortals!",
              "I am the father of mortality!",
              "I will end life!",
              "I am the mortal titan!"
            ],
            description: 'The mortal Titan of Mortality who brings death to mortals.'
          }
        ],
        generalRoles: [
          { name: 'Ancient Titan', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'ancient' },
          { name: 'Titan Warrior', startingCoins: 40, startingWeapons: ['Titan Power'], startingMercenaries: 0, startingCastles: 1, personality: 'powerful' },
          { name: 'Titan Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      mortals: {
        name: 'Mortal Heroes',
        color: '#f39c12', // Orange
        description: 'The brave mortal heroes who challenge the gods',
        territories: [
          { name: 'Athens', cost: 100, description: 'Great city of wisdom and democracy' },
          { name: 'Sparta', cost: 95, description: 'Warrior city of strength and discipline' },
          { name: 'Thebes', cost: 90, description: 'Ancient city of heroes and legends' },
          { name: 'Corinth', cost: 85, description: 'Wealthy trading city and crossroads' },
          { name: 'Argos', cost: 80, description: 'Ancient city of kings and heroes' },
          { name: 'Mycenae', cost: 75, description: 'Fortress city of the Mycenaean kings' },
          { name: 'Troy', cost: 70, description: 'Legendary city of the Trojan War' },
          { name: 'Crete', cost: 65, description: 'Island kingdom of the Minoans' },
          { name: 'Delphi', cost: 60, description: 'Sacred oracle and center of prophecy' },
          { name: 'Olympia', cost: 55, description: 'Sacred site of the Olympic Games' }
        ],
        characters: [
          {
            name: 'Hercules',
            role: 'Greatest Hero',
            startingCoins: 150,
            startingWeapons: ['Club', 'Lion Skin'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'heroic',
            quotes: [
              "I am Hercules, the greatest hero!",
              "I will complete the twelve labors!",
              "I am the son of Zeus!",
              "I will defeat any monster!",
              "I am the strongest mortal!"
            ],
            description: 'The heroic greatest hero who completed the twelve labors.'
          },
          {
            name: 'Achilles',
            role: 'Greatest Warrior',
            startingCoins: 145,
            startingWeapons: ['Spear', 'Shield'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'invincible',
            quotes: [
              "My wrath!",
              "Invincible!",
              "Trojan War!",
              "Never defeated!",
              "I am Achilles!"
            ],
            description: 'The invincible greatest warrior of the Trojan War.'
          },
          {
            name: 'Odysseus',
            role: 'Cunning Hero',
            startingCoins: 140,
            startingWeapons: ['Bow', 'Cunning'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'clever',
            quotes: [
              "Trojan Horse!",
              "Cunning!",
              "Strategy!",
              "Return home!",
              "I am Odysseus!"
            ],
            description: 'The clever cunning hero who outsmarts his enemies.'
          },
          {
            name: 'Perseus',
            role: 'Dragon Slayer',
            startingCoins: 135,
            startingWeapons: ['Sword', 'Medusa\'s Head'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'brave',
            quotes: [
              "Medusa!",
              "Gorgon!",
              "Son of Zeus!",
              "Andromeda!",
              "I am Perseus!"
            ],
            description: 'The brave dragon slayer who defeated Medusa.'
          },
          {
            name: 'Theseus',
            role: 'Minotaur Slayer',
            startingCoins: 130,
            startingWeapons: ['Sword', 'Thread'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'determined',
            quotes: [
              "Minotaur!",
              "Labyrinth!",
              "King of Athens!",
              "Navigate!",
              "I am Theseus!"
            ],
            description: 'The determined Minotaur slayer who became king of Athens.'
          },
          {
            name: 'Jason',
            role: 'Argonaut Leader',
            startingCoins: 125,
            startingWeapons: ['Sword', 'Golden Fleece'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "I am Jason, leader of the Argonauts!",
              "I will find the Golden Fleece!",
              "I am the master of the Argo!",
              "I will lead my crew to victory!",
              "I am the adventurous hero!"
            ],
            description: 'The adventurous leader of the Argonauts who found the Golden Fleece.'
          },
          {
            name: 'Medusa',
            role: 'Gorgon',
            startingCoins: 120,
            startingWeapons: ['Snake Hair', 'Petrifying Gaze'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'monstrous',
            quotes: [
              "Look upon me and turn to stone!",
              "My hair writhes with serpents!",
              "Once beautiful, now cursed!",
              "Athena's punishment was cruel!",
              "I am Medusa!"
            ],
            description: 'The monstrous Gorgon who turns enemies to stone.'
          },
          {
            name: 'Bellerophon',
            role: 'Pegasus Rider',
            startingCoins: 115,
            startingWeapons: ['Spear', 'Pegasus'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'flying',
            quotes: [
              "I am Bellerophon, rider of Pegasus!",
              "I will fly with Pegasus!",
              "I am the master of the winged horse!",
              "I will defeat the Chimera!",
              "I am the flying hero!"
            ],
            description: 'The flying hero who rides Pegasus and defeats the Chimera.'
          },
          {
            name: 'Atalanta',
            role: 'Swift Huntress',
            startingCoins: 110,
            startingWeapons: ['Bow', 'Speed'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'swift',
            quotes: [
              "I will marry only he who can outrun me!",
              "Faster than the wind!",
              "Raised by bears in the wild!",
              "I hunt with Artemis herself!",
              "I am Atalanta!"
            ],
            description: 'The swift huntress who runs faster than anyone.'
          },
          {
            name: 'Orpheus',
            role: 'Master Musician',
            startingCoins: 105,
            startingWeapons: ['Lyre', 'Music'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'musical',
            quotes: [
              "My music moves even the stones!",
              "I descended to Hades for love!",
              "Do not look back, Eurydice!",
              "Apollo taught me the lyre!",
              "I am Orpheus!"
            ],
            description: 'The musical master musician who charms with his music.'
          }
        ],
        generalRoles: [
          { name: 'Mortal Warrior', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'brave' },
          { name: 'Hero\'s Companion', startingCoins: 40, startingWeapons: ['Sword'], startingMercenaries: 0, startingCastles: 1, personality: 'loyal' },
          { name: 'Mortal Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'protective' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Mount Olympus', cost: 90, description: 'Sacred mountain home of the gods, very high strategic value' },
      { name: 'Oracle of Delphi', cost: 85, description: 'Sacred oracle and center of prophecy, high strategic value' },
      { name: 'Underworld', cost: 80, description: 'Realm of the dead and Hades, high strategic value' },
      { name: 'Elysian Fields', cost: 75, description: 'Paradise for heroes, medium strategic value' },
      { name: 'Tartarus', cost: 70, description: 'Deep prison for titans, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // HUNGER GAMES SCENARIO
  hungerGames: {
    id: 'hungerGames',
    name: 'Hunger Games: May the Odds Be Ever in Your Favor',
    type: 'dystopian',
    description: 'The ultimate battle for survival in the Hunger Games arena.',
    inspirationalQuote: {
      text: "May the odds be ever in your favor.",
      author: "Effie Trinket",
      context: "The Hunger Games"
    },
    factions: {
      careerDistricts: {
        name: 'Career Districts',
        color: '#e74c3c', // Red
        description: 'The wealthy districts that train tributes for the Games',
        territories: [
          { name: 'District 1 - Luxury', cost: 100, description: 'Luxury goods' },
          { name: 'District 2 - Masonry', cost: 95, description: 'Stonework' },
          { name: 'Career Training Center', cost: 90, description: 'Secret training facility for career tributes' },
          { name: 'Weapon Arsenal', cost: 85, description: 'Stockpile of weapons and combat gear' },
          { name: 'Strategy Room', cost: 80, description: 'Command center for game strategy' },
          { name: 'Combat Arena', cost: 75, description: 'Training arena for combat practice' },
          { name: 'Wealth Vault', cost: 70, description: 'Storage for district wealth and resources' },
          { name: 'Elite Quarters', cost: 65, description: 'Luxurious living quarters for career tributes' },
          { name: 'Victory Garden', cost: 60, description: 'Garden celebrating past victories' },
          { name: 'Honor Hall', cost: 55, description: 'Hall honoring career district heroes' }
        ],
        characters: [
          {
            name: 'Cato',
            role: 'Career Tribute',
            startingCoins: 150,
            startingWeapons: ['Sword', 'Combat Training'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'aggressive',
            quotes: [
              "I've been training for this my whole life!",
              "District 2 produces victors!",
              "I'm going to win these Games!",
              "The Capitol will remember my name!",
              "I am Cato!"
            ],
            description: 'The aggressive career tribute who trains for the Games.'
          },
          {
            name: 'Clove',
            role: 'Career Tribute',
            startingCoins: 145,
            startingWeapons: ['Throwing Knives', 'Combat Training'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'deadly',
            quotes: [
              "I can throw a knife better than anyone!",
              "District 2 trains the best!",
              "I'm not afraid of the arena!",
              "The Capitol will love me!",
              "I am Clove!"
            ],
            description: 'The deadly career tribute who masters throwing knives.'
          },
          {
            name: 'Marvel',
            role: 'Career Tribute',
            startingCoins: 140,
            startingWeapons: ['Spear', 'Combat Training'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'strong',
            quotes: [
              "I'm District 1's finest!",
              "The Capitol will sponsor me!",
              "I've trained for this moment!",
              "Victory is mine!",
              "I am Marvel!"
            ],
            description: 'The strong career tribute who fights with physical strength.'
          },
          {
            name: 'Glimmer',
            role: 'Career Tribute',
            startingCoins: 135,
            startingWeapons: ['Bow', 'Combat Training'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'beautiful',
            quotes: [
              "I am Glimmer, the career tribute!",
              "I will shoot with beauty!",
              "I am the most beautiful tribute!",
              "I will enchant my enemies!",
              "I am the career beauty!"
            ],
            description: 'The beautiful career tribute who fights with grace and beauty.'
          },
          {
            name: 'Brutus',
            role: 'Career Tribute',
            startingCoins: 130,
            startingWeapons: ['Axe', 'Combat Training'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'brutal',
            quotes: [
              "I am Brutus, the career tribute!",
              "I will fight with brutality!",
              "I am the most brutal tribute!",
              "I will crush my enemies!",
              "I am the career brute!"
            ],
            description: 'The brutal career tribute who fights with raw power.'
          },
          {
            name: 'Enobaria',
            role: 'Career Tribute',
            startingCoins: 125,
            startingWeapons: ['Teeth', 'Combat Training'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'feral',
            quotes: [
              "I am Enobaria, the career tribute!",
              "I will bite with my teeth!",
              "I am the most feral tribute!",
              "I will tear my enemies apart!",
              "I am the career beast!"
            ],
            description: 'The feral career tribute who fights with her teeth.'
          },
          {
            name: 'Cashmere',
            role: 'Career Tribute',
            startingCoins: 120,
            startingWeapons: ['Sword', 'Combat Training'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'elegant',
            quotes: [
              "I am Cashmere, the career tribute!",
              "I will fight with elegance!",
              "I am the most elegant tribute!",
              "I will dance with death!",
              "I am the career dancer!"
            ],
            description: 'The elegant career tribute who fights with grace.'
          },
          {
            name: 'Gloss',
            role: 'Career Tribute',
            startingCoins: 115,
            startingWeapons: ['Sword', 'Combat Training'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'smooth',
            quotes: [
              "I am Gloss, the career tribute!",
              "I will fight with smoothness!",
              "I am the smoothest tribute!",
              "I will glide through battle!",
              "I am the career glider!"
            ],
            description: 'The smooth career tribute who fights with fluidity.'
          }
        ],
        generalRoles: [
          { name: 'Career Tribute', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'trained' },
          { name: 'Career Trainer', startingCoins: 40, startingWeapons: ['Combat Training'], startingMercenaries: 0, startingCastles: 1, personality: 'instructor' },
          { name: 'Career Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'protective' }
        ]
      },
      midTierDistricts: {
        name: 'Mid-Tier Districts',
        color: '#f39c12', // Orange
        description: 'The middle-class districts with some resources',
        territories: [
          { name: 'District 3 - Technology', cost: 100, description: 'Electronics' },
          { name: 'District 4 - Fishing', cost: 95, description: 'Fishing' },
          { name: 'District 5 - Power', cost: 90, description: 'Electrical power' },
          { name: 'District 6 - Transportation', cost: 85, description: 'Transportation' },
          { name: 'District 7 - Lumber', cost: 80, description: 'Lumber' },
          { name: 'District 8 - Textiles', cost: 75, description: 'Textiles' },
          { name: 'District 9 - Grain', cost: 70, description: 'Grain' },
          { name: 'District 10 - Livestock', cost: 65, description: 'Livestock' },
          { name: 'District 11 - Agriculture', cost: 60, description: 'Agriculture' },
          { name: 'District 12 - Mining', cost: 55, description: 'Coal mining' }
        ],
        characters: [
          {
            name: 'Katniss Everdeen',
            role: 'Girl on Fire',
            startingCoins: 150,
            startingWeapons: ['Bow', 'Arrows'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'rebellious',
            quotes: [
              "I volunteer as tribute!",
              "I am the Mockingjay!",
              "May the odds be ever in your favor!",
              "Fire is catching!",
              "I am Katniss Everdeen!"
            ],
            description: 'The rebellious girl on fire who becomes the Mockingjay.'
          },
          {
            name: 'Peeta Mellark',
            role: 'Boy with the Bread',
            startingCoins: 145,
            startingWeapons: ['Strength', 'Camouflage'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'kind',
            quotes: [
              "I want to die as myself!",
              "I'm still betting on you!",
              "You love me, real or not real?",
              "I'm not going anywhere!",
              "I am Peeta Mellark!"
            ],
            description: 'The kind boy with the bread who protects Katniss.'
          },
          {
            name: 'Finnick Odair',
            role: 'Golden Boy',
            startingCoins: 140,
            startingWeapons: ['Trident', 'Charm'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'charming',
            quotes: [
              "I'm Finnick Odair!",
              "Want a sugar cube?",
              "I'm the golden boy of the Capitol!",
              "District 4's finest!",
              "I am Finnick Odair!"
            ],
            description: 'The charming golden boy who fights with his trident.'
          },
 {
            name: 'Johanna Mason',
            role: 'Tree Hugger',
            startingCoins: 135,
            startingWeapons: ['Axe', 'Fury'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'fierce',
            quotes: [
              "I'm Johanna Mason!",
              "District 7 lumberjack!",
              "I hate the Capitol!",
              "I'm not afraid to die!",
              "I am Johanna Mason!"
            ],
            description: 'The fierce tree hugger who fights with fury.'
          },
          {
            name: 'Beetee',
            role: 'Wire Master',
            startingCoins: 130,
            startingWeapons: ['Wire', 'Intelligence'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'intelligent',
            quotes: [
              "I'm Beetee!",
              "District 3 electronics!",
              "I can wire anything!",
              "Technology is my weapon!",
              "I am Beetee!"
            ],
            description: 'The intelligent wire master who outsmarts his enemies.'
          },
          {
            name: 'Wiress',
            role: 'Tick Tock',
            startingCoins: 125,
            startingWeapons: ['Time', 'Patterns'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'observant',
            quotes: [
              "I am Wiress, tick tock!",
              "I will see the patterns!",
              "I am the most observant tribute!",
              "I will find the time patterns!",
              "I am tick tock!"
            ],
            description: 'The observant tribute who sees patterns in time.'
          },
          {
            name: 'Mags',
            role: 'Elder Tribute',
            startingCoins: 120,
            startingWeapons: ['Wisdom', 'Experience'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I'm Mags!",
              "District 4 elder!",
              "I've seen many Games!",
              "Wisdom comes with age!",
              "I am Mags!"
            ],
            description: 'The wise elder tribute who guides the young.'
          },
          {
            name: 'Thresh',
            role: 'District 11 Tribute',
            startingCoins: 115,
            startingWeapons: ['Scythe', 'Strength'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strong',
            quotes: [
              "I'm Thresh!",
              "District 11 tribute!",
              "I protect my own!",
              "Rue was innocent!",
              "I am Thresh!"
            ],
            description: 'The strong District 11 tribute who fights with his scythe.'
          }
        ],
        generalRoles: [
          { name: 'Mid-Tier Tribute', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'resourceful' },
          { name: 'District Worker', startingCoins: 40, startingWeapons: ['Tools'], startingMercenaries: 0, startingCastles: 1, personality: 'skilled' },
          { name: 'Mid-Tier Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      outerDistricts: {
        name: 'Outer Districts',
        color: '#2ecc71', // Green
        description: 'The poor outer districts with few resources',
        territories: [
          { name: 'District 12 - Coal Mining', cost: 100, description: 'Coal mining' },
          { name: 'District 11 - Agriculture', cost: 95, description: 'Agriculture' },
          { name: 'District 10 - Livestock', cost: 90, description: 'Livestock' },
          { name: 'District 9 - Grain', cost: 85, description: 'Grain' },
          { name: 'District 8 - Textiles', cost: 80, description: 'Textiles' },
          { name: 'District 7 - Lumber', cost: 75, description: 'Lumber' },
          { name: 'District 6 - Transportation', cost: 70, description: 'Transportation' },
          { name: 'District 5 - Power', cost: 65, description: 'Power' },
          { name: 'District 4 - Fishing', cost: 60, description: 'Fishing' },
          { name: 'District 3 - Technology', cost: 55, description: 'Technology' }
        ],
        characters: [
          {
            name: 'Rue',
            role: 'Little Bird',
            startingCoins: 150,
            startingWeapons: ['Speed', 'Agility'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'innocent',
            quotes: [
              "I'm Rue!",
              "District 11 tribute!",
              "I'm just a little girl!",
              "I want to go home!",
              "I am Rue!"
            ],
            description: 'The innocent little bird who sings her song.'
          },
          {
            name: 'Primrose Everdeen',
            role: 'Little Duck',
            startingCoins: 145,
            startingWeapons: ['Healing', 'Compassion'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'compassionate',
            quotes: [
              "I am Primrose Everdeen, the little duck!",
              "I will heal the wounded!",
              "I am the most compassionate tribute!",
              "I will care for others!",
              "I am the little duck!"
            ],
            description: 'The compassionate little duck who heals the wounded.'
          },
          {
            name: 'Gale Hawthorne',
            role: 'Hunter',
            startingCoins: 140,
            startingWeapons: ['Bow', 'Traps'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'protective',
            quotes: [
              "I am Gale Hawthorne, the hunter!",
              "I will hunt for my family!",
              "I am the most protective tribute!",
              "I will set traps for my enemies!",
              "I am the hunter!"
            ],
            description: 'The protective hunter who sets traps for his enemies.'
          },
          {
            name: 'Haymitch Abernathy',
            role: 'Drunk Mentor',
            startingCoins: 135,
            startingWeapons: ['Wisdom', 'Experience'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'cynical',
            quotes: [
              "I am Haymitch Abernathy, the drunk mentor!",
              "I will mentor with cynicism!",
              "I am the most cynical tribute!",
              "I will survive with wisdom!",
              "I am the drunk mentor!"
            ],
            description: 'The cynical drunk mentor who survives with wisdom.'
          },
          {
            name: 'Effie Trinket',
            role: 'Escort',
            startingCoins: 130,
            startingWeapons: ['Charm', 'Etiquette'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'proper',
            quotes: [
              "I am Effie Trinket, the escort!",
              "I will escort with proper etiquette!",
              "I am the most proper tribute!",
              "I will charm the Capitol!",
              "I am the escort!"
            ],
            description: 'The proper escort who charms the Capitol.'
          },
          {
            name: 'Cinna',
            role: 'Stylist',
            startingCoins: 125,
            startingWeapons: ['Style', 'Creativity'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'creative',
            quotes: [
              "I am Cinna, the stylist!",
              "I will style with creativity!",
              "I am the most creative tribute!",
              "I will design the costumes!",
              "I am the stylist!"
            ],
            description: 'The creative stylist who designs the costumes.'
          },
          {
            name: 'Plutarch Heavensbee',
            role: 'Game Maker',
            startingCoins: 120,
            startingWeapons: ['Strategy', 'Power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strategic',
            quotes: [
              "I am Plutarch Heavensbee, the game maker!",
              "I will make the games strategic!",
              "I am the most strategic tribute!",
              "I will control the arena!",
              "I am the game maker!"
            ],
            description: 'The strategic game maker who controls the arena.'
          },
          {
            name: 'President Snow',
            role: 'President',
            startingCoins: 115,
            startingWeapons: ['Power', 'Control'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'tyrannical',
            quotes: [
              "I am President Snow, the president!",
              "I will rule with tyranny!",
              "I am the most tyrannical tribute!",
              "I will control the districts!",
              "I am the president!"
            ],
            description: 'The tyrannical president who controls the districts.'
          }
        ],
        generalRoles: [
          { name: 'Outer District Tribute', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'survivor' },
          { name: 'District Worker', startingCoins: 40, startingWeapons: ['Tools'], startingMercenaries: 0, startingCastles: 1, personality: 'hardworking' },
          { name: 'Outer District Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      capitol: {
        name: 'The Capitol',
        color: '#9b59b6', // Purple
        description: 'The wealthy Capitol that controls the Games',
        territories: [
          { name: 'Capitol City', cost: 100, description: 'Wealthy capital city of Panem' },
          { name: 'President\'s Mansion', cost: 95, description: 'Luxurious mansion of the president' },
          { name: 'Game Control Center', cost: 90, description: 'Command center for the Hunger Games' },
          { name: 'Capitol Arena', cost: 85, description: 'Massive arena for the Hunger Games' },
          { name: 'Wealth District', cost: 80, description: 'District of the wealthy Capitol citizens' },
          { name: 'Entertainment District', cost: 75, description: 'District of entertainment and shows' },
          { name: 'Food District', cost: 70, description: 'District of abundant food and luxury' },
          { name: 'Fashion District', cost: 65, description: 'District of fashion and style' },
          { name: 'Technology District', cost: 60, description: 'District of advanced technology' },
          { name: 'Security District', cost: 55, description: 'District of security and peacekeepers' }
        ],
        characters: [
          {
            name: 'President Coriolanus Snow',
            role: 'President of Panem',
            startingCoins: 150,
            startingWeapons: ['Power', 'Control'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'tyrannical',
            quotes: [
              "I am President Coriolanus Snow!",
              "I will rule with absolute power!",
              "I am the supreme ruler of Panem!",
              "I will crush the rebellion!",
              "I am the president!"
            ],
            description: 'The tyrannical President of Panem who rules with absolute power.'
          },
          {
            name: 'Seneca Crane',
            role: 'Head Game Maker',
            startingCoins: 145,
            startingWeapons: ['Arena Control', 'Strategy'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'manipulative',
            quotes: [
              "I am Seneca Crane, Head Game Maker!",
              "I will control the arena!",
              "I am the master of the Games!",
              "I will manipulate the tributes!",
              "I am the head game maker!"
            ],
            description: 'The manipulative Head Game Maker who controls the arena.'
          },
          {
            name: 'Caesar Flickerman',
            role: 'Talk Show Host',
            startingCoins: 140,
            startingWeapons: ['Charm', 'Charisma'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'charismatic',
            quotes: [
              "I am Caesar Flickerman, talk show host!",
              "I will charm the audience!",
              "I am the most charismatic tribute!",
              "I will host the interviews!",
              "I am the talk show host!"
            ],
            description: 'The charismatic talk show host who charms the audience.'
          },
          {
            name: 'Claudius Templesmith',
            role: 'Announcer',
            startingCoins: 135,
            startingWeapons: ['Voice', 'Drama'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'dramatic',
            quotes: [
              "I am Claudius Templesmith, the announcer!",
              "I will announce with drama!",
              "I am the most dramatic tribute!",
              "I will narrate the Games!",
              "I am the announcer!"
            ],
            description: 'The dramatic announcer who narrates the Games.'
          },
          {
            name: 'Octavia',
            role: 'Capitol Citizen',
            startingCoins: 130,
            startingWeapons: ['Wealth', 'Luxury'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'luxurious',
            quotes: [
              "I am Octavia, Capitol citizen!",
              "I will live in luxury!",
              "I am the most luxurious tribute!",
              "I will enjoy the Games!",
              "I am the Capitol citizen!"
            ],
            description: 'The luxurious Capitol citizen who enjoys the Games.'
          },
          {
            name: 'Flavius',
            role: 'Capitol Citizen',
            startingCoins: 125,
            startingWeapons: ['Wealth', 'Style'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'stylish',
            quotes: [
              "I am Flavius, Capitol citizen!",
              "I will live with style!",
              "I am the most stylish tribute!",
              "I will enjoy the fashion!",
              "I am the Capitol citizen!"
            ],
            description: 'The stylish Capitol citizen who enjoys fashion.'
          },
          {
            name: 'Venus',
            role: 'Capitol Citizen',
            startingCoins: 120,
            startingWeapons: ['Wealth', 'Beauty'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'beautiful',
            quotes: [
              "I am Venus, Capitol citizen!",
              "I will live with beauty!",
              "I am the most beautiful tribute!",
              "I will enjoy the luxury!",
              "I am the Capitol citizen!"
            ],
            description: 'The beautiful Capitol citizen who enjoys luxury.'
          },
          {
            name: 'Tigris',
            role: 'Capitol Citizen',
            startingCoins: 115,
            startingWeapons: ['Wealth', 'Fashion'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fashionable',
            quotes: [
              "I am Tigris, Capitol citizen!",
              "I will live with fashion!",
              "I am the most fashionable tribute!",
              "I will enjoy the style!",
              "I am the Capitol citizen!"
            ],
            description: 'The fashionable Capitol citizen who enjoys style.'
          }
        ],
        generalRoles: [
          { name: 'Capitol Citizen', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'wealthy' },
          { name: 'Capitol Official', startingCoins: 40, startingWeapons: ['Authority'], startingMercenaries: 0, startingCastles: 1, personality: 'powerful' },
          { name: 'Capitol Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Hunger Games Arena', cost: 90, description: 'Massive arena where the Games are held, very high strategic value' },
      { name: 'Cornucopia', cost: 85, description: 'Central location with weapons and supplies, high strategic value' },
      { name: 'Sponsor Room', cost: 80, description: 'Room where sponsors send gifts, high strategic value' },
      { name: 'Training Center', cost: 75, description: 'Center where tributes train before the Games, medium strategic value' },
      { name: 'Interview Stage', cost: 70, description: 'Stage where tributes are interviewed, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // DISNEY VS PIXAR SCENARIO
  disneyVsPixar: {
    id: 'disneyVsPixar',
    name: 'Disney Vs Pixar: Animation Studios Battle',
    type: 'entertainment',
    description: 'The epic battle between Disney Animation Studios and Pixar Animation Studios.',
    factions: {
      disney: {
        name: 'Disney Animation Studios',
        color: '#e74c3c', // Red
        description: 'The classic Disney animation studio with timeless characters',
        territories: [
          { name: 'Disney Castle', cost: 100, description: 'Iconic Disney castle and headquarters' },
          { name: 'Magic Kingdom', cost: 95, description: 'The most magical place on earth' },
          { name: 'Disney Studios', cost: 90, description: 'Animation studios and production facilities' },
          { name: 'Disneyland', cost: 85, description: 'The original Disney theme park' },
          { name: 'Disney World', cost: 80, description: 'The larger Disney theme park complex' },
          { name: 'Disney Channel', cost: 75, description: 'Television network and broadcasting' },
          { name: 'Disney Store', cost: 70, description: 'Retail stores and merchandise' },
          { name: 'Disney Music', cost: 65, description: 'Music production and soundtracks' },
          { name: 'Disney Publishing', cost: 60, description: 'Books and publishing division' },
          { name: 'Disney Interactive', cost: 55, description: 'Video games and digital media' }
        ],
        characters: [
          {
            name: 'Mickey Mouse',
            role: 'Disney Mascot',
            startingCoins: 150,
            startingWeapons: ['Magic', 'Charisma'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'cheerful',
            quotes: [
              "Hot dog! Welcome to the Magic Kingdom!",
              "I'm Mickey Mouse, and I'm here to spread joy!",
              "Oh boy! Let's make some magic happen!",
              "A dream is a wish your heart makes!",
              "It all started with a mouse!"
            ],
            description: 'The cheerful Disney mascot who spreads magic and joy.'
          },
          {
            name: 'Minnie Mouse',
            role: 'Disney Sweetheart',
            startingCoins: 145,
            startingWeapons: ['Bow', 'Grace'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'elegant',
            quotes: [
              "Oh, Mickey! You're so silly!",
              "Why, hello there! How delightful!",
              "A girl can never have too many bows!",
              "Let's dance the night away!",
              "I'm Minnie Mouse, and I'm here to spread love!"
            ],
            description: 'The elegant Disney sweetheart who charms everyone.'
          },
          {
            name: 'Donald Duck',
            role: 'Disney Hothead',
            startingCoins: 140,
            startingWeapons: ['Temper', 'Quack'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'temperamental',
            quotes: [
              "I am Donald Duck, the Disney hothead!",
              "I will quack with anger!",
              "I am the most temperamental character!",
              "I will lose my temper!",
              "I am the Disney hothead!"
            ],
            description: 'The temperamental Disney hothead who loses his temper.'
          },
          {
            name: 'Goofy',
            role: 'Disney Goofball',
            startingCoins: 135,
            startingWeapons: ['Clumsiness', 'Laughter'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'goofy',
            quotes: [
              "I am Goofy, the Disney goofball!",
              "I will make everyone laugh!",
              "I am the most goofy character!",
              "I will be clumsy!",
              "I am the Disney goofball!"
            ],
            description: 'The goofy Disney character who makes everyone laugh.'
          },
          {
            name: 'Pluto',
            role: 'Disney Dog',
            startingCoins: 130,
            startingWeapons: ['Loyalty', 'Barking'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'loyal',
            quotes: [
              "I am Pluto, the Disney dog!",
              "I will be loyal to Mickey!",
              "I am the most loyal character!",
              "I will bark at enemies!",
              "I am the Disney dog!"
            ],
            description: 'The loyal Disney dog who protects Mickey.'
          },
          {
            name: 'Snow White',
            role: 'Disney Princess',
            startingCoins: 125,
            startingWeapons: ['Beauty', 'Singing'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'beautiful',
            quotes: [
              "I am Snow White, the Disney princess!",
              "I will sing with beauty!",
              "I am the most beautiful character!",
              "I will charm with my voice!",
              "I am the Disney princess!"
            ],
            description: 'The beautiful Disney princess who sings with beauty.'
          },
          {
            name: 'Cinderella',
            role: 'Disney Princess',
            startingCoins: 120,
            startingWeapons: ['Kindness', 'Magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'kind',
            quotes: [
              "I am Cinderella, the Disney princess!",
              "I will be kind to everyone!",
              "I am the most kind character!",
              "I will spread kindness!",
              "I am the Disney princess!"
            ],
            description: 'The kind Disney princess who spreads kindness.'
          },
          {
            name: 'Aurora',
            role: 'Disney Princess',
            startingCoins: 115,
            startingWeapons: ['Sleep', 'Beauty'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'sleepy',
            quotes: [
              "I am Aurora, the Disney princess!",
              "I will sleep with beauty!",
              "I am the most sleepy character!",
              "I will rest peacefully!",
              "I am the Disney princess!"
            ],
            description: 'The sleepy Disney princess who rests peacefully.'
          },
          {
            name: 'Ariel',
            role: 'Disney Princess',
            startingCoins: 110,
            startingWeapons: ['Voice', 'Curiosity'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'curious',
            quotes: [
              "I am Ariel, the Disney princess!",
              "I will sing with my voice!",
              "I am the most curious character!",
              "I will explore the world!",
              "I am the Disney princess!"
            ],
            description: 'The curious Disney princess who explores the world.'
          },
          {
            name: 'Belle',
            role: 'Disney Princess',
            startingCoins: 105,
            startingWeapons: ['Books', 'Intelligence'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'intelligent',
            quotes: [
              "I am Belle, the Disney princess!",
              "I will read books!",
              "I am the most intelligent character!",
              "I will learn new things!",
              "I am the Disney princess!"
            ],
            description: 'The intelligent Disney princess who loves books.'
          },
          {
            name: 'Jasmine',
            role: 'Disney Princess',
            startingCoins: 100,
            startingWeapons: ['Independence', 'Spirit'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'independent',
            quotes: [
              "I am Jasmine, the Disney princess!",
              "I will be independent!",
              "I am the most independent character!",
              "I will follow my own path!",
              "I am the Disney princess!"
            ],
            description: 'The independent Disney princess who follows her own path.'
          },
          {
            name: 'Pocahontas',
            role: 'Disney Princess',
            startingCoins: 95,
            startingWeapons: ['Nature', 'Wisdom'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'wise',
            quotes: [
              "I am Pocahontas, the Disney princess!",
              "I will connect with nature!",
              "I am the most wise character!",
              "I will share my wisdom!",
              "I am the Disney princess!"
            ],
            description: 'The wise Disney princess who connects with nature.'
          },
          {
            name: 'Mulan',
            role: 'Disney Princess',
            startingCoins: 90,
            startingWeapons: ['Courage', 'Sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'brave',
            quotes: [
              "I am Mulan, the Disney princess!",
              "I will fight with courage!",
              "I am the most brave character!",
              "I will protect my family!",
              "I am the Disney princess!"
            ],
            description: 'The brave Disney princess who fights with courage.'
          },
          {
            name: 'Tiana',
            role: 'Disney Princess',
            startingCoins: 85,
            startingWeapons: ['Hard Work', 'Dreams'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'hardworking',
            quotes: [
              "I am Tiana, the Disney princess!",
              "I will work hard!",
              "I am the most hardworking character!",
              "I will achieve my dreams!",
              "I am the Disney princess!"
            ],
            description: 'The hardworking Disney princess who achieves her dreams.'
          },
          {
            name: 'Rapunzel',
            role: 'Disney Princess',
            startingCoins: 80,
            startingWeapons: ['Hair', 'Magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "I am Rapunzel, the Disney princess!",
              "I will use my magic hair!",
              "I am the most adventurous character!",
              "I will explore the world!",
              "I am the Disney princess!"
            ],
            description: 'The adventurous Disney princess who uses her magic hair.'
          }
        ],
        generalRoles: [
          { name: 'Disney Character', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'magical' },
          { name: 'Disney Animator', startingCoins: 40, startingWeapons: ['Animation'], startingMercenaries: 0, startingCastles: 1, personality: 'creative' },
          { name: 'Disney Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      pixar: {
        name: 'Pixar Animation Studios',
        color: '#3498db', // Blue
        description: 'The innovative Pixar animation studio with cutting-edge technology',
        territories: [
          { name: 'Pixar Studios', cost: 100, description: 'State-of-the-art animation studios' },
          { name: 'Pixar Campus', cost: 95, description: 'Innovative campus and creative hub' },
          { name: 'Pixar Theater', cost: 90, description: 'Private theater for film screenings' },
          { name: 'Pixar Museum', cost: 85, description: 'Museum showcasing Pixar history' },
          { name: 'Pixar Store', cost: 80, description: 'Retail store and merchandise' },
          { name: 'Pixar Games', cost: 75, description: 'Video game development division' },
          { name: 'Pixar Music', cost: 70, description: 'Music production and soundtracks' },
          { name: 'Pixar Publishing', cost: 65, description: 'Books and publishing division' },
          { name: 'Pixar Interactive', cost: 60, description: 'Digital media and interactive content' },
          { name: 'Pixar Research', cost: 55, description: 'Research and development facility' }
        ],
        characters: [
          {
            name: 'Woody',
            role: 'Pixar Sheriff',
            startingCoins: 150,
            startingWeapons: ['Lasso', 'Leadership'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'leader',
            quotes: [
              "I am Woody, the Pixar sheriff!",
              "I will lead with loyalty!",
              "I am the most loyal character!",
              "I will protect my friends!",
              "I am the Pixar sheriff!"
            ],
            description: 'The loyal Pixar sheriff who leads with loyalty.'
          },
          {
            name: 'Buzz Lightyear',
            role: 'Pixar Space Ranger',
            startingCoins: 145,
            startingWeapons: ['Laser', 'Wings'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'heroic',
            quotes: [
              "I am Buzz Lightyear, the Pixar space ranger!",
              "I will fly to infinity and beyond!",
              "I am the most heroic character!",
              "I will save the galaxy!",
              "I am the Pixar space ranger!"
            ],
            description: 'The heroic Pixar space ranger who flies to infinity and beyond.'
          },
          {
            name: 'Nemo',
            role: 'Pixar Clownfish',
            startingCoins: 140,
            startingWeapons: ['Swimming', 'Courage'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'brave',
            quotes: [
              "I am Nemo, the Pixar clownfish!",
              "I will swim with courage!",
              "I am the most brave character!",
              "I will find my way home!",
              "I am the Pixar clownfish!"
            ],
            description: 'The brave Pixar clownfish who finds his way home.'
          },
          {
            name: 'Dory',
            role: 'Pixar Blue Tang',
            startingCoins: 135,
            startingWeapons: ['Memory', 'Swimming'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'forgetful',
            quotes: [
              "I am Dory, the Pixar blue tang!",
              "I will just keep swimming!",
              "I am the most forgetful character!",
              "I will remember to forget!",
              "I am the Pixar blue tang!"
            ],
            description: 'The forgetful Pixar blue tang who just keeps swimming.'
          },
          {
            name: 'Sulley',
            role: 'Pixar Monster',
            startingCoins: 130,
            startingWeapons: ['Roar', 'Scaring'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'scary',
            quotes: [
              "I am Sulley, the Pixar monster!",
              "I will roar with power!",
              "I am the most scary character!",
              "I will scare everyone!",
              "I am the Pixar monster!"
            ],
            description: 'The scary Pixar monster who roars with power.'
          },
          {
            name: 'Mike Wazowski',
            role: 'Pixar Cyclops',
            startingCoins: 125,
            startingWeapons: ['Eye', 'Comedy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'funny',
            quotes: [
              "I am Mike Wazowski, the Pixar cyclops!",
              "I will make everyone laugh!",
              "I am the most funny character!",
              "I will be the comedy relief!",
              "I am the Pixar cyclops!"
            ],
            description: 'The funny Pixar cyclops who makes everyone laugh.'
          },
          {
            name: 'Wall-E',
            role: 'Pixar Robot',
            startingCoins: 120,
            startingWeapons: ['Trash Compacting', 'Love'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loving',
            quotes: [
              "I am Wall-E, the Pixar robot!",
              "I will clean up the earth!",
              "I am the most loving character!",
              "I will love EVE!",
              "I am the Pixar robot!"
            ],
            description: 'The loving Pixar robot who cleans up the earth.'
          },
          {
            name: 'EVE',
            role: 'Pixar Robot',
            startingCoins: 115,
            startingWeapons: ['Laser', 'Flying'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'efficient',
            quotes: [
              "I am EVE, the Pixar robot!",
              "I will fly with efficiency!",
              "I am the most efficient character!",
              "I will complete my mission!",
              "I am the Pixar robot!"
            ],
            description: 'The efficient Pixar robot who flies with efficiency.'
          },
          {
            name: 'Carl Fredricksen',
            role: 'Pixar Elder',
            startingCoins: 110,
            startingWeapons: ['House', 'Adventure'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "I am Carl Fredricksen, the Pixar elder!",
              "I will fly my house!",
              "I am the most adventurous character!",
              "I will go on adventures!",
              "I am the Pixar elder!"
            ],
            description: 'The adventurous Pixar elder who flies his house.'
          },
          {
            name: 'Russell',
            role: 'Pixar Scout',
            startingCoins: 105,
            startingWeapons: ['Backpack', 'Enthusiasm'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'enthusiastic',
            quotes: [
              "I am Russell, the Pixar scout!",
              "I will be enthusiastic!",
              "I am the most enthusiastic character!",
              "I will earn my badges!",
              "I am the Pixar scout!"
            ],
            description: 'The enthusiastic Pixar scout who earns his badges.'
          },
          {
            name: 'Lightning McQueen',
            role: 'Pixar Race Car',
            startingCoins: 100,
            startingWeapons: ['Speed', 'Racing'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fast',
            quotes: [
              "I am Lightning McQueen, the Pixar race car!",
              "I will race with speed!",
              "I am the most fast character!",
              "I will win the race!",
              "I am the Pixar race car!"
            ],
            description: 'The fast Pixar race car who races with speed.'
          },
          {
            name: 'Mater',
            role: 'Pixar Tow Truck',
            startingCoins: 95,
            startingWeapons: ['Towing', 'Friendship'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'loyal',
            quotes: [
              "I am Mater, the Pixar tow truck!",
              "I will tow with friendship!",
              "I am the most loyal character!",
              "I will be Lightning's best friend!",
              "I am the Pixar tow truck!"
            ],
            description: 'The loyal Pixar tow truck who is Lightning\'s best friend.'
          },
          {
            name: 'Remy',
            role: 'Pixar Rat',
            startingCoins: 90,
            startingWeapons: ['Cooking', 'Smell'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'culinary',
            quotes: [
              "I am Remy, the Pixar rat!",
              "I will cook with passion!",
              "I am the most culinary character!",
              "I will create masterpieces!",
              "I am the Pixar rat!"
            ],
            description: 'The culinary Pixar rat who cooks with passion.'
          },
          {
            name: 'Merida',
            role: 'Pixar Princess',
            startingCoins: 85,
            startingWeapons: ['Bow', 'Independence'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'independent',
            quotes: [
              "I am Merida, the Pixar princess!",
              "I will shoot with independence!",
              "I am the most independent character!",
              "I will follow my own path!",
              "I am the Pixar princess!"
            ],
            description: 'The independent Pixar princess who follows her own path.'
          },
          {
            name: 'Joy',
            role: 'Pixar Emotion',
            startingCoins: 80,
            startingWeapons: ['Happiness', 'Energy'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'joyful',
            quotes: [
              "I am Joy, the Pixar emotion!",
              "I will spread happiness!",
              "I am the most joyful character!",
              "I will bring joy to everyone!",
              "I am the Pixar emotion!"
            ],
            description: 'The joyful Pixar emotion who spreads happiness.'
          }
        ],
        generalRoles: [
          { name: 'Pixar Character', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'innovative' },
          { name: 'Pixar Animator', startingCoins: 40, startingWeapons: ['Technology'], startingMercenaries: 0, startingCastles: 1, personality: 'creative' },
          { name: 'Pixar Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Animation Studios', cost: 90, description: 'State-of-the-art animation facilities, very high strategic value' },
      { name: 'Creative Hub', cost: 85, description: 'Center of creativity and innovation, high strategic value' },
      { name: 'Film Production', cost: 80, description: 'Film production and distribution, high strategic value' },
      { name: 'Character Development', cost: 75, description: 'Character design and development, medium strategic value' },
      { name: 'Storytelling', cost: 70, description: 'Story development and narrative, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // SUPER MARIO SCENARIO
  superMario: {
    id: 'superMario',
    name: 'Super Mario: Heroes vs Minions',
    type: 'gaming',
    description: 'The epic battle between Mario\'s Heroes and Bowser\'s Minions.',
    inspirationalQuote: {
      text: "It's-a me, Mario! Let's-a go!",
      author: "Mario",
      context: "Super Mario Bros."
    },
    factions: {
      mariosHeroes: {
        name: 'Mario\'s Heroes',
        color: '#e74c3c', // Red
        description: 'The heroic characters who fight for good',
        territories: [
          { name: 'Mushroom Kingdom', cost: 100, description: 'Peaceful kingdom ruled by Princess Peach' },
          { name: 'Peach\'s Castle', cost: 95, description: 'Beautiful castle home of Princess Peach' },
          { name: 'Toad Town', cost: 90, description: 'Vibrant town populated by Toads' },
          { name: 'Yoshi\'s Island', cost: 85, description: 'Tropical island home of the Yoshis' },
          { name: 'Donkey Kong Island', cost: 80, description: 'Jungle island home of Donkey Kong' },
          { name: 'Luigi\'s Mansion', cost: 75, description: 'Haunted mansion owned by Luigi' },
          { name: 'Wario\'s Castle', cost: 70, description: 'Gold-plated castle of Wario' },
          { name: 'Waluigi\'s Pinball', cost: 65, description: 'Pinball machine realm of Waluigi' },
          { name: 'Toadette\'s House', cost: 60, description: 'Cozy home of Toadette' },
          { name: 'Birdo\'s Nest', cost: 55, description: 'Nest home of Birdo' }
        ],
        characters: [
          {
            name: 'Mario',
            role: 'Super Hero',
            startingCoins: 150,
            startingWeapons: ['Fire Flower', 'Super Mushroom'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'heroic',
            quotes: [
              "I am Mario, the super hero!",
              "I will save Princess Peach!",
              "I am the most heroic character!",
              "I will jump on enemies!",
              "I am the super hero!"
            ],
            description: 'The heroic super hero who saves Princess Peach.'
          },
          {
            name: 'Luigi',
            role: 'Green Hero',
            startingCoins: 145,
            startingWeapons: ['Poltergust', 'Jump'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'nervous',
            quotes: [
              "I am Luigi, the green hero!",
              "I will be brave!",
              "I am the most nervous character!",
              "I will help Mario!",
              "I am the green hero!"
            ],
            description: 'The nervous green hero who helps Mario.'
          },
          {
            name: 'Princess Peach',
            role: 'Princess',
            startingCoins: 140,
            startingWeapons: ['Crown', 'Magic'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'royal',
            quotes: [
              "I am Princess Peach, the princess!",
              "I will rule with grace!",
              "I am the most royal character!",
              "I will protect my kingdom!",
              "I am the princess!"
            ],
            description: 'The royal princess who rules with grace.'
          },
          {
            name: 'Toad',
            role: 'Mushroom Retainer',
            startingCoins: 135,
            startingWeapons: ['Mushroom', 'Loyalty'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'loyal',
            quotes: [
              "I am Toad, the mushroom retainer!",
              "I will serve Princess Peach!",
              "I am the most loyal character!",
              "I will help my friends!",
              "I am the mushroom retainer!"
            ],
            description: 'The loyal mushroom retainer who serves Princess Peach.'
          },
          {
            name: 'Yoshi',
            role: 'Dinosaur',
            startingCoins: 130,
            startingWeapons: ['Tongue', 'Eggs'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'friendly',
            quotes: [
              "I am Yoshi, the dinosaur!",
              "I will eat enemies!",
              "I am the most friendly character!",
              "I will help Mario!",
              "I am the dinosaur!"
            ],
            description: 'The friendly dinosaur who helps Mario.'
          },
          {
            name: 'Donkey Kong',
            role: 'Gorilla',
            startingCoins: 125,
            startingWeapons: ['Strength', 'Barrels'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'strong',
            quotes: [
              "I am Donkey Kong, the gorilla!",
              "I will use my strength!",
              "I am the strongest character!",
              "I will throw barrels!",
              "I am the gorilla!"
            ],
            description: 'The strong gorilla who throws barrels.'
          },
          {
            name: 'Wario',
            role: 'Anti-Hero',
            startingCoins: 120,
            startingWeapons: ['Gold', 'Greed'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'greedy',
            quotes: [
              "I am Wario, the anti-hero!",
              "I will collect gold!",
              "I am the most greedy character!",
              "I will be rich!",
              "I am the anti-hero!"
            ],
            description: 'The greedy anti-hero who collects gold.'
          },
          {
            name: 'Waluigi',
            role: 'Anti-Hero',
            startingCoins: 115,
            startingWeapons: ['Tennis Racket', 'Mischief'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mischievous',
            quotes: [
              "I am Waluigi, the anti-hero!",
              "I will cause mischief!",
              "I am the most mischievous character!",
              "I will play tennis!",
              "I am the anti-hero!"
            ],
            description: 'The mischievous anti-hero who causes mischief.'
          },
          {
            name: 'Toadette',
            role: 'Mushroom Retainer',
            startingCoins: 110,
            startingWeapons: ['Mushroom', 'Cheerfulness'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cheerful',
            quotes: [
              "I am Toadette, the mushroom retainer!",
              "I will be cheerful!",
              "I am the most cheerful character!",
              "I will help my friends!",
              "I am the mushroom retainer!"
            ],
            description: 'The cheerful mushroom retainer who helps her friends.'
          },
          {
            name: 'Birdo',
            role: 'Dinosaur',
            startingCoins: 105,
            startingWeapons: ['Eggs', 'Cuteness'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cute',
            quotes: [
              "I am Birdo, the dinosaur!",
              "I will be cute!",
              "I am the most cute character!",
              "I will lay eggs!",
              "I am the dinosaur!"
            ],
            description: 'The cute dinosaur who lays eggs.'
          },
          {
            name: 'Daisy',
            role: 'Princess',
            startingCoins: 100,
            startingWeapons: ['Crown', 'Tennis Racket'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'sporty',
            quotes: [
              "I am Daisy, the princess!",
              "I will play tennis!",
              "I am the most sporty character!",
              "I will be athletic!",
              "I am the princess!"
            ],
            description: 'The sporty princess who plays tennis.'
          },
          {
            name: 'Geno',
            role: 'Star Warrior',
            startingCoins: 95,
            startingWeapons: ['Star Power', 'Magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mystical',
            quotes: [
              "I am Geno, the star warrior!",
              "I will use star power!",
              "I am the most mystical character!",
              "I will fight with magic!",
              "I am the star warrior!"
            ],
            description: 'The mystical star warrior who uses star power.'
          },
          {
            name: 'Rosalina',
            role: 'Cosmic Princess',
            startingCoins: 90,
            startingWeapons: ['Luma', 'Cosmic Power'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'cosmic',
            quotes: [
              "I am Rosalina, the cosmic princess!",
              "I will use cosmic power!",
              "I am the most cosmic character!",
              "I will protect the cosmos!",
              "I am the cosmic princess!"
            ],
            description: 'The cosmic princess who protects the cosmos.'
          },
          {
            name: 'Bowser Jr.',
            role: 'Junior Villain',
            startingCoins: 85,
            startingWeapons: ['Paintbrush', 'Mischief'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mischievous',
            quotes: [
              "I am Bowser Jr., the junior villain!",
              "I will cause mischief!",
              "I am the most mischievous character!",
              "I will paint the world!",
              "I am the junior villain!"
            ],
            description: 'The mischievous junior villain who causes mischief.'
          },
          {
            name: 'Koopa Troopa',
            role: 'Turtle',
            startingCoins: 80,
            startingWeapons: ['Shell', 'Speed'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'speedy',
            quotes: [
              "I am Koopa Troopa, the turtle!",
              "I will use my shell!",
              "I am the most speedy character!",
              "I will run fast!",
              "I am the turtle!"
            ],
            description: 'The speedy turtle who uses his shell.'
          }
        ],
        generalRoles: [
          { name: 'Mario Character', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'heroic' },
          { name: 'Mario Hero', startingCoins: 40, startingWeapons: ['Power-Up'], startingMercenaries: 0, startingCastles: 1, personality: 'brave' },
          { name: 'Mario Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      },
      bowsersMinions: {
        name: 'Bowser\'s Minions',
        color: '#8e44ad', // Purple
        description: 'The villainous characters who serve Bowser',
        territories: [
          { name: 'Bowser\'s Castle', cost: 100, description: 'Massive castle fortress of Bowser' },
          { name: 'Koopa Kingdom', cost: 95, description: 'Dark kingdom ruled by Bowser' },
          { name: 'Goomba Village', cost: 90, description: 'Village populated by Goombas' },
          { name: 'Koopa Troopa Town', cost: 85, description: 'Town populated by Koopa Troopas' },
          { name: 'Hammer Bro Fortress', cost: 80, description: 'Fortress of the Hammer Bros' },
          { name: 'Chain Chomp Kennel', cost: 75, description: 'Kennel where Chain Chomps are kept' },
          { name: 'Lakitu Cloud', cost: 70, description: 'Floating cloud home of Lakitu' },
          { name: 'Shy Guy Hideout', cost: 65, description: 'Secret hideout of the Shy Guys' },
          { name: 'Piranha Plant Garden', cost: 60, description: 'Garden where Piranha Plants grow' },
          { name: 'Thwomp Temple', cost: 55, description: 'Ancient temple of the Thwomps' }
        ],
        characters: [
          {
            name: 'Bowser',
            role: 'King of Koopas',
            startingCoins: 150,
            startingWeapons: ['Fire Breath', 'Shell'],
            startingMercenaries: 5,
            startingCastles: 4,
            personality: 'villainous',
            quotes: [
              "I am Bowser, King of Koopas!",
              "I will kidnap Princess Peach!",
              "I am the most villainous character!",
              "I will rule the Mushroom Kingdom!",
              "I am the King of Koopas!"
            ],
            description: 'The villainous King of Koopas who kidnaps Princess Peach.'
          },
          {
            name: 'Kamek',
            role: 'Magikoopa',
            startingCoins: 145,
            startingWeapons: ['Magic', 'Staff'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'magical',
            quotes: [
              "I am Kamek, the Magikoopa!",
              "I will cast magic spells!",
              "I am the most magical character!",
              "I will serve Bowser!",
              "I am the Magikoopa!"
            ],
            description: 'The magical Magikoopa who casts magic spells.'
          },
          {
            name: 'Hammer Bro',
            role: 'Hammer Warrior',
            startingCoins: 140,
            startingWeapons: ['Hammer', 'Armor'],
            startingMercenaries: 4,
            startingCastles: 3,
            personality: 'aggressive',
            quotes: [
              "I am Hammer Bro, the hammer warrior!",
              "I will throw hammers!",
              "I am the most aggressive character!",
              "I will fight with hammers!",
              "I am the hammer warrior!"
            ],
            description: 'The aggressive hammer warrior who throws hammers.'
          },
          {
            name: 'Chain Chomp',
            role: 'Metal Ball',
            startingCoins: 135,
            startingWeapons: ['Chain', 'Bite'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'ferocious',
            quotes: [
              "I am Chain Chomp, the metal ball!",
              "I will bite with ferocity!",
              "I am the most ferocious character!",
              "I will break my chain!",
              "I am the metal ball!"
            ],
            description: 'The ferocious metal ball who bites with ferocity.'
          },
          {
            name: 'Lakitu',
            role: 'Cloud Rider',
            startingCoins: 130,
            startingWeapons: ['Cloud', 'Spiny Eggs'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'mischievous',
            quotes: [
              "I am Lakitu, the cloud rider!",
              "I will ride on clouds!",
              "I am the most mischievous character!",
              "I will drop Spiny eggs!",
              "I am the cloud rider!"
            ],
            description: 'The mischievous cloud rider who drops Spiny eggs.'
          },
          {
            name: 'Shy Guy',
            role: 'Masked Minion',
            startingCoins: 125,
            startingWeapons: ['Mask', 'Stealth'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'shy',
            quotes: [
              "I am Shy Guy, the masked minion!",
              "I will hide behind my mask!",
              "I am the most shy character!",
              "I will be stealthy!",
              "I am the masked minion!"
            ],
            description: 'The shy masked minion who hides behind his mask.'
          },
          {
            name: 'Piranha Plant',
            role: 'Carnivorous Plant',
            startingCoins: 120,
            startingWeapons: ['Bite', 'Vine'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'hungry',
            quotes: [
              "I am Piranha Plant, the carnivorous plant!",
              "I will bite with hunger!",
              "I am the most hungry character!",
              "I will eat everything!",
              "I am the carnivorous plant!"
            ],
            description: 'The hungry carnivorous plant who bites with hunger.'
          },
          {
            name: 'Thwomp',
            role: 'Crushing Block',
            startingCoins: 115,
            startingWeapons: ['Crush', 'Weight'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'heavy',
            quotes: [
              "I am Thwomp, the crushing block!",
              "I will crush with weight!",
              "I am the heaviest character!",
              "I will flatten enemies!",
              "I am the crushing block!"
            ],
            description: 'The heavy crushing block who flattens enemies.'
          },
          {
            name: 'Bullet Bill',
            role: 'Cannonball',
            startingCoins: 110,
            startingWeapons: ['Speed', 'Explosion'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'explosive',
            quotes: [
              "I am Bullet Bill, the cannonball!",
              "I will fly with speed!",
              "I am the most explosive character!",
              "I will explode on impact!",
              "I am the cannonball!"
            ],
            description: 'The explosive cannonball who flies with speed.'
          },
          {
            name: 'Bob-omb',
            role: 'Walking Bomb',
            startingCoins: 105,
            startingWeapons: ['Explosion', 'Timer'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'explosive',
            quotes: [
              "I am Bob-omb, the walking bomb!",
              "I will explode with a timer!",
              "I am the most explosive character!",
              "I will count down to explosion!",
              "I am the walking bomb!"
            ],
            description: 'The explosive walking bomb who counts down to explosion.'
          },
          {
            name: 'King Boo',
            role: 'Ghost King',
            startingCoins: 100,
            startingWeapons: ['Possession', 'Invisibility'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ghostly',
            quotes: [
              "I am King Boo, the ghost king!",
              "I will possess with ghostly power!",
              "I am the most ghostly character!",
              "I will be invisible!",
              "I am the ghost king!"
            ],
            description: 'The ghostly ghost king who possesses with ghostly power.'
          },
          {
            name: 'Dry Bones',
            role: 'Skeleton Koopa',
            startingCoins: 95,
            startingWeapons: ['Bones', 'Reassembly'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'undead',
            quotes: [
              "I am Dry Bones, the skeleton Koopa!",
              "I will reassemble my bones!",
              "I am the most undead character!",
              "I will never stay dead!",
              "I am the skeleton Koopa!"
            ],
            description: 'The undead skeleton Koopa who reassembles his bones.'
          },
          {
            name: 'Boo',
            role: 'Ghost',
            startingCoins: 90,
            startingWeapons: ['Possession', 'Invisibility'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ghostly',
            quotes: [
              "I am Boo, the ghost!",
              "I will possess with ghostly power!",
              "I am the most ghostly character!",
              "I will be invisible!",
              "I am the ghost!"
            ],
            description: 'The ghostly ghost who possesses with ghostly power.'
          },
          {
            name: 'Goomba',
            role: 'Mushroom Minion',
            startingCoins: 85,
            startingWeapons: ['Stomp', 'Walking'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'simple',
            quotes: [
              "I am Goomba, the mushroom minion!",
              "I will walk with simplicity!",
              "I am the most simple character!",
              "I will be stomped on!",
              "I am the mushroom minion!"
            ],
            description: 'The simple mushroom minion who walks with simplicity.'
          },
          {
            name: 'Koopa Troopa',
            role: 'Turtle Minion',
            startingCoins: 80,
            startingWeapons: ['Shell', 'Speed'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'speedy',
            quotes: [
              "I am Koopa Troopa, the turtle minion!",
              "I will use my shell!",
              "I am the most speedy character!",
              "I will run fast!",
              "I am the turtle minion!"
            ],
            description: 'The speedy turtle minion who uses his shell.'
          }
        ],
        generalRoles: [
          { name: 'Bowser Minion', startingCoins: 30, startingWeapons: [], startingMercenaries: 0, startingCastles: 1, personality: 'villainous' },
          { name: 'Koopa Warrior', startingCoins: 40, startingWeapons: ['Shell'], startingMercenaries: 0, startingCastles: 1, personality: 'aggressive' },
          { name: 'Bowser Guard', startingCoins: 35, startingWeapons: [], startingMercenaries: 1, startingCastles: 1, personality: 'loyal' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Mushroom Kingdom', cost: 90, description: 'Peaceful kingdom and center of power, very high strategic value' },
      { name: 'Power-Up Factory', cost: 85, description: 'Factory that produces power-ups, high strategic value' },
      { name: 'Star Road', cost: 80, description: 'Mystical road connecting worlds, high strategic value' },
      { name: 'Pipe System', cost: 75, description: 'Underground pipe network, medium strategic value' },
      { name: 'Coin Heaven', cost: 70, description: 'Heavenly realm of coins, medium strategic value' }
    ],
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // MONSTER WARS
  monsterWars: {
    id: 'monsterWars',
    name: 'Monster Wars',
    type: 'fantasy',
    description: 'Vampires versus Werewolves',
    inspirationalQuote: {
      text: "The night is dark and full of terrors.",
      author: "Melisandre",
      context: "Game of Thrones"
    },
    factionOrder: ['vampires', 'werewolves'],
    factions: {
      vampires: {
        name: 'Vampires',
        color: '#8b0000',
        description: 'Undead nobles of the night',
        territories: [
          { name: 'Castle Keep', cost: 90, description: 'Vampire stronghold' },
          { name: 'Blood Bank', cost: 75, description: 'Supply source' },
          { name: 'Crypts', cost: 70, description: 'Ancient tombs' },
          { name: 'Bat Caves', cost: 65, description: 'Hidden lairs' },
          { name: 'Night Market', cost: 60, description: 'Shady trade' }
        ],
        characters: [
          { name: 'Dracula', role: 'Lord', startingCoins: 110, startingWeapons: ['fangs'], startingMercenaries: 2, startingCastles: 1, personality: 'seductive', quotes: ['Welcome...', 'Blood is life.'], description: 'Vampire lord.' }
        ]
      },
      werewolves: {
        name: 'Werewolves',
        color: '#8b5a2b',
        description: 'Savage pack hunters',
        territories: [
          { name: 'Wolf Den', cost: 90, description: 'Pack home' },
          { name: 'Full Moon Grove', cost: 80, description: 'Change site' },
          { name: 'Hunting Grounds', cost: 70, description: 'Prey runs' },
          { name: 'Alpha Lair', cost: 75, description: 'Leader den' },
          { name: 'Silver Mine', cost: 65, description: 'Dangerous place' }
        ],
        characters: [
          { name: 'Alpha', role: 'Leader', startingCoins: 105, startingWeapons: ['claws'], startingMercenaries: 2, startingCastles: 1, personality: 'feral', quotes: ['Howl!', 'Run with the pack!'], description: 'Pack leader.' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Graveyard', cost: 70, description: 'Restless dead' },
      { name: 'Old Forest', cost: 65, description: 'Deep woods' },
      { name: 'Abandoned Town', cost: 60, description: 'Empty streets' }
    ]
  },

  // NBA LEGENDS
  nbaLegends: {
    id: 'nbaLegends',
    name: 'NBA Legends',
    type: 'sports',
    description: 'East vs West legends',
    inspirationalQuote: {
      text: "The most important measure of how good a game I played was how much better I made my teammates play.",
      author: "Bill Russell",
      context: "NBA Legendary Center, Boston Celtics"
    },
    factionOrder: ['east', 'west'],
    factions: {
      east: {
        name: 'Eastern Conference',
        color: '#1e40af',
        description: 'Eastern greats',
        territories: [
          { name: 'MSG', cost: 95, description: 'Knicks arena' },
          { name: 'TD Garden', cost: 90, description: 'Celtics arena' },
          { name: 'Wells Fargo', cost: 85, description: '76ers arena' },
          { name: 'Barclays', cost: 80, description: 'Nets arena' },
          { name: 'United Center', cost: 88, description: 'Bulls arena' }
        ],
        characters: [
          { name: 'Michael Jordan', role: 'Guard', startingCoins: 120, startingWeapons: ['basketball'], startingMercenaries: 2, startingCastles: 1, personality: 'competitive', quotes: ['Take the shot.', 'Win.'], description: 'Bulls legend.' }
        ]
      },
      west: {
        name: 'Western Conference',
        color: '#dc2626',
        description: 'Western greats',
        territories: [
          { name: 'Crypto Arena', cost: 95, description: 'Lakers home' },
          { name: 'Chase Center', cost: 90, description: 'Warriors home' },
          { name: 'Footprint', cost: 80, description: 'Suns home' },
          { name: 'AAC', cost: 82, description: 'Mavs home' },
          { name: 'Moda Center', cost: 78, description: 'Blazers home' }
        ],
        characters: [
          { name: 'Kobe Bryant', role: 'Guard', startingCoins: 115, startingWeapons: ['basketball'], startingMercenaries: 2, startingCastles: 1, personality: 'mamba', quotes: ['Mamba mentality.', 'Keep going.'], description: 'Lakers legend.' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'All-Star', cost: 85, description: 'Showcase' },
      { name: 'Finals', cost: 95, description: 'Championship' },
      { name: 'Draft', cost: 70, description: 'Prospects' }
    ]
  },

  // NFL LEGENDS
  nflLegends: {
    id: 'nflLegends',
    name: 'NFL Legends',
    type: 'sports',
    description: 'AFC vs NFC legends',
    inspirationalQuote: {
      text: "I'm not a product of my circumstances. I'm a product of my decisions.",
      author: "Tom Brady",
      context: "NFL Legendary Quarterback"
    },
    factionOrder: ['afc', 'nfc'],
    factions: {
      afc: {
        name: 'AFC',
        color: '#2563eb',
        description: 'AFC greats',
        territories: [
          { name: 'Arrowhead', cost: 90, description: 'Chiefs' },
          { name: 'Gillette', cost: 88, description: 'Patriots' },
          { name: 'Heinz', cost: 82, description: 'Steelers' },
          { name: 'M&T Bank', cost: 80, description: 'Ravens' },
          { name: 'Lucas Oil', cost: 78, description: 'Colts' }
        ],
        characters: [
          { name: 'Tom Brady', role: 'QB', startingCoins: 120, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'winner', quotes: ['Let\'s go!', 'One more.'], description: 'Patriots legend.' },
          { name: 'Peyton Manning', role: 'QB', startingCoins: 115, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'cerebral', quotes: ['Omaha!', 'Let\'s go!'], description: 'Colts/Broncos legend.' },
          { name: 'Ray Lewis', role: 'LB', startingCoins: 110, startingWeapons: ['tackle'], startingMercenaries: 3, startingCastles: 1, personality: 'intense', quotes: ['Defense!', 'Ravens!'], description: 'Ravens linebacker.' },
          { name: 'Antonio Brown', role: 'WR', startingCoins: 105, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'flashy', quotes: ['Mr. Big Chest', 'AB!'], description: 'Steelers receiver.' },
          { name: 'Travis Kelce', role: 'TE', startingCoins: 108, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'energetic', quotes: ['Chiefs!', 'Let\'s go!'], description: 'Chiefs tight end.' },
          { name: 'Patrick Mahomes', role: 'QB', startingCoins: 118, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'dynamic', quotes: ['Chiefs Kingdom!', 'Let\'s go!'], description: 'Chiefs quarterback.' },
          { name: 'Josh Allen', role: 'QB', startingCoins: 112, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Bills Mafia!', 'Let\'s go!'], description: 'Bills quarterback.' },
          { name: 'Derrick Henry', role: 'RB', startingCoins: 110, startingWeapons: ['run'], startingMercenaries: 2, startingCastles: 1, personality: 'dominant', quotes: ['Titans!', 'King Henry!'], description: 'Titans running back.' },
          { name: 'Tyreek Hill', role: 'WR', startingCoins: 108, startingWeapons: ['speed'], startingMercenaries: 2, startingCastles: 1, personality: 'explosive', quotes: ['Cheetah!', 'Speed!'], description: 'Dolphins receiver.' },
          { name: 'T.J. Watt', role: 'LB', startingCoins: 106, startingWeapons: ['sack'], startingMercenaries: 3, startingCastles: 1, personality: 'relentless', quotes: ['Steelers!', 'Defense!'], description: 'Steelers linebacker.' },
          { name: 'Myles Garrett', role: 'DE', startingCoins: 104, startingWeapons: ['sack'], startingMercenaries: 3, startingCastles: 1, personality: 'dominant', quotes: ['Browns!', 'Defense!'], description: 'Browns defensive end.' },
          { name: 'Davante Adams', role: 'WR', startingCoins: 107, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'precise', quotes: ['Raiders!', 'Route running!'], description: 'Raiders receiver.' },
          { name: 'Stefon Diggs', role: 'WR', startingCoins: 105, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'clutch', quotes: ['Bills!', 'Diggs!'], description: 'Bills receiver.' },
          { name: 'Nick Chubb', role: 'RB', startingCoins: 103, startingWeapons: ['run'], startingMercenaries: 2, startingCastles: 1, personality: 'steady', quotes: ['Browns!', 'Chubb!'], description: 'Browns running back.' },
          { name: 'Quenton Nelson', role: 'OL', startingCoins: 102, startingWeapons: ['block'], startingMercenaries: 2, startingCastles: 1, personality: 'dominant', quotes: ['Colts!', 'Protection!'], description: 'Colts offensive lineman.' }
        ]
      },
      nfc: {
        name: 'NFC',
        color: '#ef4444',
        description: 'NFC greats',
        territories: [
          { name: 'Lambeau', cost: 90, description: 'Packers' },
          { name: 'AT&T', cost: 88, description: 'Cowboys' },
          { name: 'Levi’s', cost: 84, description: '49ers' },
          { name: 'U.S. Bank', cost: 80, description: 'Vikings' },
          { name: 'Superdome', cost: 78, description: 'Saints' }
        ],
        characters: [
          { name: 'Jerry Rice', role: 'WR', startingCoins: 115, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'precise', quotes: ['Run the route.', 'Catch everything.'], description: '49ers legend.' },
          { name: 'Aaron Rodgers', role: 'QB', startingCoins: 118, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'confident', quotes: ['R-E-L-A-X', 'Run the table'], description: 'Packers quarterback.' },
          { name: 'Emmitt Smith', role: 'RB', startingCoins: 112, startingWeapons: ['run'], startingMercenaries: 2, startingCastles: 1, personality: 'determined', quotes: ['Cowboys!', 'Let\'s go!'], description: 'Cowboys running back.' },
          { name: 'Randy Moss', role: 'WR', startingCoins: 110, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'explosive', quotes: ['Straight cash!', 'Moss!'], description: 'Vikings receiver.' },
          { name: 'Drew Brees', role: 'QB', startingCoins: 108, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'accurate', quotes: ['Who dat!', 'Saints!'], description: 'Saints quarterback.' },
          { name: 'Cooper Kupp', role: 'WR', startingCoins: 114, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'reliable', quotes: ['Rams!', 'Kupp!'], description: 'Rams receiver.' },
          { name: 'Christian McCaffrey', role: 'RB', startingCoins: 111, startingWeapons: ['run'], startingMercenaries: 2, startingCastles: 1, personality: 'versatile', quotes: ['Panthers!', 'CMC!'], description: 'Panthers running back.' },
          { name: 'DK Metcalf', role: 'WR', startingCoins: 109, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'physical', quotes: ['Seahawks!', 'Metcalf!'], description: 'Seahawks receiver.' },
          { name: 'Micah Parsons', role: 'LB', startingCoins: 107, startingWeapons: ['tackle'], startingMercenaries: 3, startingCastles: 1, personality: 'explosive', quotes: ['Cowboys!', 'Defense!'], description: 'Cowboys linebacker.' },
          { name: 'Justin Jefferson', role: 'WR', startingCoins: 113, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'dynamic', quotes: ['Vikings!', 'JJ!'], description: 'Vikings receiver.' },
          { name: 'Saquon Barkley', role: 'RB', startingCoins: 106, startingWeapons: ['run'], startingMercenaries: 2, startingCastles: 1, personality: 'elusive', quotes: ['Giants!', 'Saquon!'], description: 'Giants running back.' },
          { name: 'DeAndre Hopkins', role: 'WR', startingCoins: 108, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'clutch', quotes: ['Cardinals!', 'Nuk!'], description: 'Cardinals receiver.' },
          { name: 'Aaron Donald', role: 'DT', startingCoins: 110, startingWeapons: ['sack'], startingMercenaries: 3, startingCastles: 1, personality: 'dominant', quotes: ['Rams!', 'Defense!'], description: 'Rams defensive tackle.' },
          { name: 'George Kittle', role: 'TE', startingCoins: 105, startingWeapons: ['catch'], startingMercenaries: 2, startingCastles: 1, personality: 'energetic', quotes: ['49ers!', 'Kittle!'], description: '49ers tight end.' },
          { name: 'Russell Wilson', role: 'QB', startingCoins: 109, startingWeapons: ['football'], startingMercenaries: 2, startingCastles: 1, personality: 'mobile', quotes: ['Broncos!', 'Let\'s ride!'], description: 'Broncos quarterback.' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Super Bowl', cost: 95, description: 'Title game' },
      { name: 'Pro Bowl', cost: 75, description: 'All-stars' },
      { name: 'Combine', cost: 65, description: 'Prospects' }
    ]
  },

  // INTERNATIONAL SOCCER LEGENDS
  soccerLegends: {
    id: 'soccerLegends',
    name: 'International Soccer Legends',
    type: 'sports',
    description: 'Europe vs Americas greats',
    inspirationalQuote: {
      text: "Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win.",
      author: "Gary Lineker",
      context: "English Football Legend"
    },
    factionOrder: ['europe', 'americas'],
    factions: {
      europe: {
        name: 'Europe',
        color: '#0ea5e9',
        description: 'European icons',
        territories: [
          { name: 'Wembley', cost: 90, description: 'England' },
          { name: 'Bernabéu', cost: 92, description: 'Spain' },
          { name: 'Camp Nou', cost: 90, description: 'Barcelona' },
          { name: 'Allianz', cost: 85, description: 'Germany' },
          { name: 'San Siro', cost: 82, description: 'Italy' }
        ],
        characters: [
          { name: 'Cristiano Ronaldo', role: 'Forward', startingCoins: 120, startingWeapons: ['ball'], startingMercenaries: 2, startingCastles: 1, personality: 'driven', quotes: ['Siuuu!'], description: 'Portugal legend.' },
          { name: 'Luka Modrić', role: 'Midfielder', startingCoins: 115, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'elegant', quotes: ['Real Madrid!'], description: 'Croatia midfielder.' },
          { name: 'Robert Lewandowski', role: 'Forward', startingCoins: 112, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'clinical', quotes: ['Bayern!'], description: 'Poland striker.' },
          { name: 'Virgil van Dijk', role: 'Defender', startingCoins: 108, startingWeapons: ['tackle'], startingMercenaries: 3, startingCastles: 1, personality: 'commanding', quotes: ['Liverpool!'], description: 'Netherlands defender.' },
          { name: 'Kevin De Bruyne', role: 'Midfielder', startingCoins: 110, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'creative', quotes: ['City!'], description: 'Belgium midfielder.' },
          { name: 'Kylian Mbappé', role: 'Forward', startingCoins: 118, startingWeapons: ['speed'], startingMercenaries: 2, startingCastles: 1, personality: 'explosive', quotes: ['PSG!'], description: 'France forward.' },
          { name: 'Erling Haaland', role: 'Forward', startingCoins: 116, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['City!'], description: 'Norway striker.' },
          { name: 'Jude Bellingham', role: 'Midfielder', startingCoins: 114, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'dynamic', quotes: ['Real Madrid!'], description: 'England midfielder.' },
          { name: 'Manuel Neuer', role: 'Goalkeeper', startingCoins: 109, startingWeapons: ['save'], startingMercenaries: 3, startingCastles: 1, personality: 'commanding', quotes: ['Bayern!'], description: 'Germany goalkeeper.' },
          { name: 'Marco Verratti', role: 'Midfielder', startingCoins: 107, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'technical', quotes: ['PSG!'], description: 'Italy midfielder.' },
          { name: 'Antoine Griezmann', role: 'Forward', startingCoins: 105, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'versatile', quotes: ['Atletico!'], description: 'France forward.' },
          { name: 'Thibaut Courtois', role: 'Goalkeeper', startingCoins: 106, startingWeapons: ['save'], startingMercenaries: 3, startingCastles: 1, personality: 'reliable', quotes: ['Real Madrid!'], description: 'Belgium goalkeeper.' },
          { name: 'Joshua Kimmich', role: 'Midfielder', startingCoins: 108, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'versatile', quotes: ['Bayern!'], description: 'Germany midfielder.' },
          { name: 'Sergio Ramos', role: 'Defender', startingCoins: 104, startingWeapons: ['tackle'], startingMercenaries: 3, startingCastles: 1, personality: 'leader', quotes: ['Real Madrid!'], description: 'Spain defender.' },
          { name: 'Toni Kroos', role: 'Midfielder', startingCoins: 103, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'precise', quotes: ['Real Madrid!'], description: 'Germany midfielder.' }
        ]
      },
      americas: {
        name: 'Americas',
        color: '#22c55e',
        description: 'American icons',
        territories: [
          { name: 'Maracanã', cost: 92, description: 'Brazil' },
          { name: 'Azteca', cost: 88, description: 'Mexico' },
          { name: 'Monumental', cost: 90, description: 'Argentina' },
          { name: 'Centenario', cost: 82, description: 'Uruguay' },
          { name: 'MetLife', cost: 80, description: 'USA' }
        ],
        characters: [
          { name: 'Lionel Messi', role: 'Forward', startingCoins: 118, startingWeapons: ['ball'], startingMercenaries: 2, startingCastles: 1, personality: 'magical', quotes: ['Vamos.'], description: 'Argentina legend.' },
          { name: 'Neymar Jr', role: 'Forward', startingCoins: 115, startingWeapons: ['skill'], startingMercenaries: 2, startingCastles: 1, personality: 'flamboyant', quotes: ['Brazil!'], description: 'Brazil forward.' },
          { name: 'Luis Suárez', role: 'Forward', startingCoins: 110, startingWeapons: ['bite'], startingMercenaries: 2, startingCastles: 1, personality: 'fiery', quotes: ['Uruguay!'], description: 'Uruguay striker.' },
          { name: 'Edinson Cavani', role: 'Forward', startingCoins: 108, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Cavani!'], description: 'Uruguay forward.' },
          { name: 'Christian Pulisic', role: 'Midfielder', startingCoins: 105, startingWeapons: ['pace'], startingMercenaries: 2, startingCastles: 1, personality: 'energetic', quotes: ['USA!'], description: 'American midfielder.' },
          { name: 'Gabriel Jesus', role: 'Forward', startingCoins: 112, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'clinical', quotes: ['Brazil!'], description: 'Brazil forward.' },
          { name: 'Casemiro', role: 'Midfielder', startingCoins: 109, startingWeapons: ['tackle'], startingMercenaries: 3, startingCastles: 1, personality: 'defensive', quotes: ['Brazil!'], description: 'Brazil midfielder.' },
          { name: 'Alisson', role: 'Goalkeeper', startingCoins: 107, startingWeapons: ['save'], startingMercenaries: 3, startingCastles: 1, personality: 'reliable', quotes: ['Brazil!'], description: 'Brazil goalkeeper.' },
          { name: 'Paulo Dybala', role: 'Forward', startingCoins: 106, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'creative', quotes: ['Argentina!'], description: 'Argentina forward.' },
          { name: 'Federico Valverde', role: 'Midfielder', startingCoins: 104, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'dynamic', quotes: ['Uruguay!'], description: 'Uruguay midfielder.' },
          { name: 'Emiliano Martínez', role: 'Goalkeeper', startingCoins: 103, startingWeapons: ['save'], startingMercenaries: 3, startingCastles: 1, personality: 'confident', quotes: ['Argentina!'], description: 'Argentina goalkeeper.' },
          { name: 'Richarlison', role: 'Forward', startingCoins: 101, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'energetic', quotes: ['Brazil!'], description: 'Brazil forward.' },
          { name: 'Rodrigo De Paul', role: 'Midfielder', startingCoins: 102, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'versatile', quotes: ['Argentina!'], description: 'Argentina midfielder.' },
          { name: 'Darwin Núñez', role: 'Forward', startingCoins: 100, startingWeapons: ['shot'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Uruguay!'], description: 'Uruguay forward.' },
          { name: 'Weston McKennie', role: 'Midfielder', startingCoins: 99, startingWeapons: ['pass'], startingMercenaries: 2, startingCastles: 1, personality: 'box-to-box', quotes: ['USA!'], description: 'American midfielder.' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'World Cup', cost: 95, description: 'Global title' },
      { name: 'Copa América', cost: 85, description: 'South America' },
      { name: 'Euros', cost: 85, description: 'Europe' }
    ]
  },

  // ROCK VS POP VS RAP
  rockPopRap: {
    id: 'rockPopRap',
    name: 'Rock vs Pop vs Rap',
    type: 'entertainment',
    description: 'Genres face off',
    inspirationalQuote: {
      text: "Music is the universal language of mankind.",
      author: "Henry Wadsworth Longfellow",
      context: "American Poet"
    },
    factionOrder: ['rock', 'pop', 'rap'],
    factions: {
      rock: {
        name: 'Rock',
        color: '#ef4444',
        description: 'Guitars and grit',
        territories: [
          { name: 'Woodstock', cost: 90, description: 'Festival' },
          { name: 'CBGB', cost: 80, description: 'Punk club' },
          { name: 'Red Rocks', cost: 85, description: 'Amphitheater' },
          { name: 'Fillmore', cost: 82, description: 'Venue' },
          { name: 'MSG', cost: 88, description: 'Arena' }
        ],
        characters: [
          { name: 'Jimi Hendrix', role: 'Guitar', startingCoins: 110, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'rebellious', quotes: ['Purple Haze.'], description: 'Icon.' },
          { name: 'Freddie Mercury', role: 'Vocal', startingCoins: 115, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'flamboyant', quotes: ['We are the champions!'], description: 'Queen frontman.' },
          { name: 'Jimmy Page', role: 'Guitar', startingCoins: 108, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'mystical', quotes: ['Led Zeppelin!'], description: 'Led Zeppelin guitarist.' },
          { name: 'Keith Richards', role: 'Guitar', startingCoins: 105, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'rebellious', quotes: ['Rolling Stones!'], description: 'Stones guitarist.' },
          { name: 'Ozzy Osbourne', role: 'Vocal', startingCoins: 107, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'wild', quotes: ['Black Sabbath!'], description: 'Metal legend.' },
          { name: 'Robert Plant', role: 'Vocal', startingCoins: 112, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Led Zeppelin!'], description: 'Led Zeppelin vocalist.' },
          { name: 'Eric Clapton', role: 'Guitar', startingCoins: 109, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'bluesy', quotes: ['Slowhand!'], description: 'Blues rock guitarist.' },
          { name: 'David Bowie', role: 'Vocal', startingCoins: 113, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'chameleon', quotes: ['Ziggy Stardust!'], description: 'Rock chameleon.' },
          { name: 'Bruce Springsteen', role: 'Vocal', startingCoins: 111, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'blue-collar', quotes: ['The Boss!'], description: 'The Boss.' },
          { name: 'Mick Jagger', role: 'Vocal', startingCoins: 106, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'charismatic', quotes: ['Rolling Stones!'], description: 'Stones frontman.' },
          { name: 'Roger Waters', role: 'Bass', startingCoins: 104, startingWeapons: ['bass'], startingMercenaries: 2, startingCastles: 1, personality: 'conceptual', quotes: ['Pink Floyd!'], description: 'Pink Floyd bassist.' },
          { name: 'Eddie Van Halen', role: 'Guitar', startingCoins: 108, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'innovative', quotes: ['Van Halen!'], description: 'Guitar virtuoso.' },
          { name: 'Steven Tyler', role: 'Vocal', startingCoins: 105, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'flamboyant', quotes: ['Aerosmith!'], description: 'Aerosmith frontman.' },
          { name: 'Angus Young', role: 'Guitar', startingCoins: 103, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'energetic', quotes: ['AC/DC!'], description: 'AC/DC guitarist.' },
          { name: 'Lemmy Kilmister', role: 'Bass', startingCoins: 102, startingWeapons: ['bass'], startingMercenaries: 2, startingCastles: 1, personality: 'metal', quotes: ['Motorhead!'], description: 'Motorhead bassist.' }
        ]
      },
      pop: {
        name: 'Pop',
        color: '#f472b6',
        description: 'Hooks and hits',
        territories: [
          { name: 'Hollywood Bowl', cost: 90, description: 'LA stage' },
          { name: 'Radio City', cost: 82, description: 'NYC hall' },
          { name: 'Royal Albert', cost: 85, description: 'London hall' },
          { name: 'Sydney Opera', cost: 84, description: 'Sydney hall' },
          { name: 'O2 Arena', cost: 88, description: 'London arena' }
        ],
        characters: [
          { name: 'Michael Jackson', role: 'Vocal', startingCoins: 112, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'perfectionist', quotes: ['Thriller.'], description: 'King of Pop.' },
          { name: 'Madonna', role: 'Vocal', startingCoins: 110, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'provocative', quotes: ['Material Girl!'], description: 'Queen of Pop.' },
          { name: 'Prince', role: 'Multi', startingCoins: 115, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'mysterious', quotes: ['Purple Rain!'], description: 'Purple genius.' },
          { name: 'Whitney Houston', role: 'Vocal', startingCoins: 108, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['I Will Always Love You!'], description: 'Voice of an angel.' },
          { name: 'Elton John', role: 'Piano', startingCoins: 105, startingWeapons: ['piano'], startingMercenaries: 2, startingCastles: 1, personality: 'flamboyant', quotes: ['Rocket Man!'], description: 'Piano legend.' },
          { name: 'Beyoncé', role: 'Vocal', startingCoins: 114, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Queen Bey!'], description: 'Queen Bey.' },
          { name: 'Taylor Swift', role: 'Vocal', startingCoins: 113, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'storytelling', quotes: ['Swifties!'], description: 'Pop storyteller.' },
          { name: 'Ariana Grande', role: 'Vocal', startingCoins: 111, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'powerful', quotes: ['Arianators!'], description: 'Pop powerhouse.' },
          { name: 'Justin Timberlake', role: 'Vocal', startingCoins: 109, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'smooth', quotes: ['JT!'], description: 'Pop smooth operator.' },
          { name: 'Lady Gaga', role: 'Vocal', startingCoins: 107, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'artistic', quotes: ['Little Monsters!'], description: 'Pop art icon.' },
          { name: 'Bruno Mars', role: 'Vocal', startingCoins: 106, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'funky', quotes: ['Mars!'], description: 'Pop funk master.' },
          { name: 'Adele', role: 'Vocal', startingCoins: 108, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'emotional', quotes: ['Hello!'], description: 'Soulful pop diva.' },
          { name: 'Ed Sheeran', role: 'Vocal', startingCoins: 104, startingWeapons: ['guitar'], startingMercenaries: 2, startingCastles: 1, personality: 'acoustic', quotes: ['Ed!'], description: 'Acoustic pop star.' },
          { name: 'Billie Eilish', role: 'Vocal', startingCoins: 103, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'alternative', quotes: ['Billie!'], description: 'Alternative pop queen.' },
          { name: 'Dua Lipa', role: 'Vocal', startingCoins: 102, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'dance', quotes: ['Dua!'], description: 'Dance pop sensation.' }
        ]
      },
      rap: {
        name: 'Rap',
        color: '#eab308',
        description: 'Beats and bars',
        territories: [
          { name: 'Bronx', cost: 88, description: 'Birthplace' },
          { name: 'Compton', cost: 86, description: 'West Coast' },
          { name: 'Atlanta', cost: 84, description: 'South' },
          { name: 'Detroit', cost: 82, description: 'Midwest' },
          { name: 'Brooklyn', cost: 86, description: 'East' }
        ],
        characters: [
          { name: 'Tupac Shakur', role: 'Vocal', startingCoins: 108, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'poetic', quotes: ['Keep ya head up.'], description: 'Rap icon.' },
          { name: 'Notorious B.I.G.', role: 'Vocal', startingCoins: 110, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'smooth', quotes: ['Biggie!'], description: 'Brooklyn legend.' },
          { name: 'Jay-Z', role: 'Vocal', startingCoins: 115, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'business', quotes: ['Brooklyn!'], description: 'Business mogul.' },
          { name: 'Eminem', role: 'Vocal', startingCoins: 112, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'intense', quotes: ['Slim Shady!'], description: 'Rap god.' },
          { name: 'Kendrick Lamar', role: 'Vocal', startingCoins: 108, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'conscious', quotes: ['Compton!'], description: 'Modern poet.' },
          { name: 'Drake', role: 'Vocal', startingCoins: 114, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'versatile', quotes: ['OVO!'], description: 'Rap superstar.' },
          { name: 'Kanye West', role: 'Vocal', startingCoins: 113, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'innovative', quotes: ['Yeezy!'], description: 'Rap innovator.' },
          { name: 'Nas', role: 'Vocal', startingCoins: 111, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'lyrical', quotes: ['Queens!'], description: 'Rap lyricist.' },
          { name: 'Snoop Dogg', role: 'Vocal', startingCoins: 109, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'laid-back', quotes: ['Snoop!'], description: 'Rap legend.' },
          { name: 'Ice Cube', role: 'Vocal', startingCoins: 107, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'aggressive', quotes: ['N.W.A!'], description: 'Gangsta rap pioneer.' },
          { name: 'Dr. Dre', role: 'Producer', startingCoins: 106, startingWeapons: ['beat'], startingMercenaries: 2, startingCastles: 1, personality: 'innovative', quotes: ['Aftermath!'], description: 'Rap producer.' },
          { name: '50 Cent', role: 'Vocal', startingCoins: 105, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'street', quotes: ['G-Unit!'], description: 'Street rap king.' },
          { name: 'Lil Wayne', role: 'Vocal', startingCoins: 104, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'creative', quotes: ['Weezy!'], description: 'Rap mixtape king.' },
          { name: 'Travis Scott', role: 'Vocal', startingCoins: 103, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'experimental', quotes: ['Cactus Jack!'], description: 'Rap experimentalist.' },
          { name: 'J. Cole', role: 'Vocal', startingCoins: 102, startingWeapons: ['mic'], startingMercenaries: 2, startingCastles: 1, personality: 'conscious', quotes: ['Dreamville!'], description: 'Conscious rap king.' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Grammys', cost: 90, description: 'Awards' },
      { name: 'Billboard', cost: 80, description: 'Charts' },
      { name: 'MTV', cost: 75, description: 'TV' }
    ]
  },


  // FORTNITE VS MINECRAFT
  fortniteVsMinecraft: {
    id: 'fortniteVsMinecraft',
    name: 'Fortnite vs Minecraft',
    type: 'gaming',
    description: 'The ultimate battle between Fortnite and Minecraft universes',
    inspirationalQuote: {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      context: "Apple Co-founder"
    },
    factionOrder: ['fortnite', 'minecraft'],
    factions: {
      fortnite: {
        name: 'Fortnite',
        color: '#ff6b6b',
        description: 'Battle royale champions',
        territories: [
          { name: 'Tilted Towers', cost: 100, description: 'Skyscraper city' },
          { name: 'Pleasant Park', cost: 90, description: 'Suburban area' },
          { name: 'Retail Row', cost: 85, description: 'Shopping district' },
          { name: 'Dusty Depot', cost: 80, description: 'Industrial zone' },
          { name: 'Loot Lake', cost: 95, description: 'Central lake' }
        ],
        characters: [
          {
            name: 'Jonesy',
            role: 'Default Skin',
            startingCoins: 100,
            startingWeapons: ['assault rifle'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "Victory Royale!",
              "Let's build!",
              "Time to fight!"
            ],
            description: 'The iconic Fortnite default skin'
          },
          {
            name: 'Peely',
            role: 'Banana Skin',
            startingCoins: 95,
            startingWeapons: ['banana'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'silly',
            quotes: [
              "Peely!",
              "Banana time!",
              "Let's go!"
            ],
            description: 'The beloved banana skin'
          },
          {
            name: 'Fishstick',
            role: 'Fish Skin',
            startingCoins: 98,
            startingWeapons: ['fish'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'quirky',
            quotes: [
              "Fishstick!",
              "Under the sea!",
              "Swim away!"
            ],
            description: 'The popular fish skin'
          },
          {
            name: 'Raven',
            role: 'Dark Skin',
            startingCoins: 105,
            startingWeapons: ['dark magic'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'mysterious',
            quotes: [
              "Darkness!",
              "Nevermore!",
              "Shadow strike!"
            ],
            description: 'The mysterious raven skin'
          },
          {
            name: 'Cuddle Team Leader',
            role: 'Bear Skin',
            startingCoins: 102,
            startingWeapons: ['hugs'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'friendly',
            quotes: [
              "Cuddle time!",
              "Bear hug!",
              "Love wins!"
            ],
            description: 'The cuddly bear skin'
          },
          {
            name: 'Skull Trooper',
            role: 'Skeleton Skin',
            startingCoins: 108,
            startingWeapons: ['bones'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'spooky',
            quotes: [
              "Spooky!",
              "Bones!",
              "Halloween!"
            ],
            description: 'The spooky skeleton skin'
          },
          {
            name: 'Drift',
            role: 'Ninja Skin',
            startingCoins: 110,
            startingWeapons: ['katana'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ninja',
            quotes: [
              "Ninja!",
              "Stealth!",
              "Drift!"
            ],
            description: 'The ninja drift skin'
          },
          {
            name: 'Black Knight',
            role: 'Knight Skin',
            startingCoins: 115,
            startingWeapons: ['sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'noble',
            quotes: [
              "For honor!",
              "Knight!",
              "Defend!"
            ],
            description: 'The noble knight skin'
          },
          {
            name: 'Rex',
            role: 'Dinosaur Skin',
            startingCoins: 103,
            startingWeapons: ['claws'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'prehistoric',
            quotes: [
              "Rawr!",
              "Dino!",
              "Rex!"
            ],
            description: 'The dinosaur skin'
          },
          {
            name: 'Raven',
            role: 'Superhero Skin',
            startingCoins: 112,
            startingWeapons: ['powers'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'heroic',
            quotes: [
              "Justice!",
              "Hero!",
              "Raven!"
            ],
            description: 'The superhero skin'
          },
          {
            name: 'Brite Bomber',
            role: 'Colorful Skin',
            startingCoins: 97,
            startingWeapons: ['colors'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'colorful',
            quotes: [
              "Bright!",
              "Colors!",
              "Bomber!"
            ],
            description: 'The colorful bomber skin'
          },
          {
            name: 'Rust Lord',
            role: 'Rusty Skin',
            startingCoins: 99,
            startingWeapons: ['rust'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'rusty',
            quotes: [
              "Rust!",
              "Old!",
              "Lord!"
            ],
            description: 'The rusty lord skin'
          },
          {
            name: 'Carbide',
            role: 'Robot Skin',
            startingCoins: 107,
            startingWeapons: ['laser'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'robotic',
            quotes: [
              "Beep boop!",
              "Robot!",
              "Carbide!"
            ],
            description: 'The robot skin'
          },
          {
            name: 'Omega',
            role: 'Alien Skin',
            startingCoins: 109,
            startingWeapons: ['alien tech'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'alien',
            quotes: [
              "Alien!",
              "Omega!",
              "Space!"
            ],
            description: 'The alien skin'
          },
          {
            name: 'Wild Card',
            role: 'Joker Skin',
            startingCoins: 104,
            startingWeapons: ['cards'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'chaotic',
            quotes: [
              "Wild card!",
              "Joker!",
              "Chaos!"
            ],
            description: 'The joker skin'
          }
        ]
      },
      minecraft: {
        name: 'Minecraft',
        color: '#4ecdc4',
        description: 'Block-building masters',
        territories: [
          { name: 'Spawn Point', cost: 100, description: 'Starting area' },
          { name: 'Village', cost: 90, description: 'NPC settlement' },
          { name: 'Mineshaft', cost: 85, description: 'Underground tunnels' },
          { name: 'Nether Portal', cost: 95, description: 'Hell dimension' },
          { name: 'End Portal', cost: 100, description: 'Final dimension' }
        ],
        characters: [
          {
            name: 'Steve',
            role: 'Player Character',
            startingCoins: 100,
            startingWeapons: ['diamond sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'creative',
            quotes: [
              "Minecraft!",
              "Time to mine!",
              "Let's build!"
            ],
            description: 'The iconic Minecraft player character'
          },
          {
            name: 'Alex',
            role: 'Player Character',
            startingCoins: 98,
            startingWeapons: ['iron sword'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'adventurous',
            quotes: [
              "Adventure time!",
              "Let's explore!",
              "Minecraft!"
            ],
            description: 'The adventurous Minecraft character'
          },
          {
            name: 'Herobrine',
            role: 'Mysterious Entity',
            startingCoins: 110,
            startingWeapons: ['void magic'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'mysterious',
            quotes: [
              "I am Herobrine.",
              "The void calls.",
              "You cannot escape."
            ],
            description: 'The mysterious Herobrine entity'
          },
          {
            name: 'Enderman',
            role: 'Mob',
            startingCoins: 95,
            startingWeapons: ['teleport'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'shy',
            quotes: [
              "Don't look at me!",
              "Teleport away!",
              "Enderman!"
            ],
            description: 'The tall, dark Enderman mob'
          },
          {
            name: 'Creeper',
            role: 'Explosive Mob',
            startingCoins: 90,
            startingWeapons: ['explosion'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'explosive',
            quotes: [
              "Sssss...",
              "Boom!",
              "Creeper!"
            ],
            description: 'The explosive green creeper'
          },
          {
            name: 'Zombie',
            role: 'Undead Mob',
            startingCoins: 85,
            startingWeapons: ['bite'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'undead',
            quotes: [
              "Brains...",
              "Zombie!",
              "Undead!"
            ],
            description: 'The classic zombie mob'
          },
          {
            name: 'Skeleton',
            role: 'Archer Mob',
            startingCoins: 88,
            startingWeapons: ['bow'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'ranged',
            quotes: [
              "Arrows!",
              "Skeleton!",
              "Shoot!"
            ],
            description: 'The bow-wielding skeleton'
          },
          {
            name: 'Spider',
            role: 'Arachnid Mob',
            startingCoins: 87,
            startingWeapons: ['web'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'webby',
            quotes: [
              "Web!",
              "Spider!",
              "Climb!"
            ],
            description: 'The web-spinning spider'
          },
          {
            name: 'Iron Golem',
            role: 'Protector Mob',
            startingCoins: 105,
            startingWeapons: ['iron fists'],
            startingMercenaries: 3,
            startingCastles: 1,
            personality: 'protective',
            quotes: [
              "Protect!",
              "Iron!",
              "Golem!"
            ],
            description: 'The village protector'
          },
          {
            name: 'Snow Golem',
            role: 'Snow Mob',
            startingCoins: 92,
            startingWeapons: ['snowball'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'chilly',
            quotes: [
              "Snow!",
              "Cold!",
              "Golem!"
            ],
            description: 'The snowball-throwing golem'
          },
          {
            name: 'Villager',
            role: 'NPC',
            startingCoins: 80,
            startingWeapons: ['trade'],
            startingMercenaries: 1,
            startingCastles: 1,
            personality: 'merchant',
            quotes: [
              "Hmm!",
              "Trade!",
              "Villager!"
            ],
            description: 'The trading villager'
          },
          {
            name: 'Pillager',
            role: 'Raider Mob',
            startingCoins: 93,
            startingWeapons: ['crossbow'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'aggressive',
            quotes: [
              "Raid!",
              "Pillager!",
              "Attack!"
            ],
            description: 'The raiding pillager'
          },
          {
            name: 'Witch',
            role: 'Magic Mob',
            startingCoins: 96,
            startingWeapons: ['potion'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'magical',
            quotes: [
              "Magic!",
              "Potion!",
              "Witch!"
            ],
            description: 'The potion-brewing witch'
          },
          {
            name: 'Blaze',
            role: 'Fire Mob',
            startingCoins: 94,
            startingWeapons: ['fireball'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'fiery',
            quotes: [
              "Fire!",
              "Blaze!",
              "Burn!"
            ],
            description: 'The fire-shooting blaze'
          },
          {
            name: 'Ghast',
            role: 'Flying Mob',
            startingCoins: 97,
            startingWeapons: ['ghast fireball'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'floating',
            quotes: [
              "Float!",
              "Ghast!",
              "Cry!"
            ],
            description: 'The floating ghast'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Creative Mode', cost: 80, description: 'Unlimited resources' },
      { name: 'Survival Mode', cost: 70, description: 'Hardcore challenge' },
      { name: 'Battle Arena', cost: 90, description: 'PvP zone' }
    ]
  },

  // ROMAN MYTHOLOGY
  romanMythology: {
    id: 'romanMythology',
    name: 'Roman Mythology',
    type: 'mythology',
    description: 'The battle between Roman gods and their enemies',
    inspirationalQuote: {
      text: "Fortune favors the bold.",
      author: "Virgil",
      context: "Roman Poet"
    },
    factionOrder: ['gods', 'titans'],
    factions: {
      gods: {
        name: 'Roman Gods',
        color: '#ffd700',
        description: 'Olympian deities of Rome',
        territories: [
          { name: 'Mount Olympus', cost: 100, description: 'Divine realm' },
          { name: 'Jupiter\'s Temple', cost: 95, description: 'King of gods' },
          { name: 'Mars\' Arena', cost: 90, description: 'War god\'s domain' },
          { name: 'Venus\' Garden', cost: 85, description: 'Love goddess' },
          { name: 'Neptune\'s Palace', cost: 80, description: 'Sea god' }
        ],
        characters: [
          {
            name: 'Jupiter',
            role: 'King of Gods',
            startingCoins: 120,
            startingWeapons: ['thunderbolt'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'authoritative',
            quotes: [
              "I am Jupiter!",
              "Bow before me!",
              "Thunder and lightning!"
            ],
            description: 'King of the Roman gods'
          }
        ]
      },
      titans: {
        name: 'Titans',
        color: '#8b0000',
        description: 'Ancient primordial beings',
        territories: [
          { name: 'Tartarus', cost: 100, description: 'Underworld prison' },
          { name: 'Titan\'s Lair', cost: 95, description: 'Ancient stronghold' },
          { name: 'Chaos Realm', cost: 90, description: 'Primordial void' },
          { name: 'Gaia\'s Domain', cost: 85, description: 'Earth mother' },
          { name: 'Uranus\' Sky', cost: 80, description: 'Sky father' }
        ],
        characters: [
          {
            name: 'Saturn',
            role: 'Titan King',
            startingCoins: 110,
            startingWeapons: ['scythe'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'vengeful',
            quotes: [
              "I am Saturn!",
              "Revenge is mine!",
              "The old ways return!"
            ],
            description: 'King of the Titans'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Roman Forum', cost: 80, description: 'Center of worship' },
      { name: 'Colosseum', cost: 75, description: 'Battle arena' },
      { name: 'Pantheon', cost: 85, description: 'Temple of all gods' }
    ]
  },

  // PERCY JACKSON
  percyJackson: {
    id: 'percyJackson',
    name: 'Percy Jackson',
    type: 'literary',
    description: 'The battle between demigods and monsters',
    inspirationalQuote: {
      text: "The real world is where the monsters are.",
      author: "Rick Riordan",
      context: "Percy Jackson and the Olympians"
    },
    factionOrder: ['demigods', 'monsters'],
    factions: {
      demigods: {
        name: 'Demigods',
        color: '#4169e1',
        description: 'Half-god heroes',
        territories: [
          { name: 'Camp Half-Blood', cost: 100, description: 'Demigod training' },
          { name: 'Poseidon\'s Cabin', cost: 95, description: 'Sea god\'s children' },
          { name: 'Athena\'s Cabin', cost: 90, description: 'Wisdom goddess' },
          { name: 'Ares\' Cabin', cost: 85, description: 'War god\'s children' },
          { name: 'Zeus\' Cabin', cost: 95, description: 'Sky god\'s children' }
        ],
        characters: [
          {
            name: 'Percy Jackson',
            role: 'Son of Poseidon',
            startingCoins: 110,
            startingWeapons: ['Riptide'],
            startingMercenaries: 2,
            startingCastles: 1,
            personality: 'heroic',
            quotes: [
              "I am Percy Jackson!",
              "For the gods!",
              "Sea power!"
            ],
            description: 'Son of Poseidon and hero of Olympus'
          }
        ]
      },
      monsters: {
        name: 'Monsters',
        color: '#8b0000',
        description: 'Mythological creatures',
        territories: [
          { name: 'Underworld', cost: 100, description: 'Hades\' realm' },
          { name: 'Tartarus', cost: 95, description: 'Deepest pit' },
          { name: 'Monster Lair', cost: 90, description: 'Creature den' },
          { name: 'Labyrinth', cost: 85, description: 'Maze of death' },
          { name: 'Medusa\'s Cave', cost: 80, description: 'Stone gaze' }
        ],
        characters: [
          {
            name: 'Kronos',
            role: 'Titan Lord',
            startingCoins: 120,
            startingWeapons: ['scythe'],
            startingMercenaries: 3,
            startingCastles: 2,
            personality: 'evil',
            quotes: [
              "I am Kronos!",
              "Time to destroy!",
              "The old ways return!"
            ],
            description: 'Titan Lord seeking revenge'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Mount Olympus', cost: 90, description: 'Gods\' realm' },
      { name: 'Empire State Building', cost: 80, description: 'Olympus entrance' },
      { name: 'Underworld Gates', cost: 75, description: 'Death\'s door' }
    ]
  },
  // MACBETH SCENARIO
  macbeth: {
    id: 'macbeth',
    name: 'Macbeth (William Shakespeare)',
    type: 'literary',
    description: 'A Scottish general\'s tragic descent into tyranny and madness through ambition and supernatural forces.',
    inspirationalQuote: {
      text: "Fair is foul, and foul is fair.",
      author: "William Shakespeare",
      context: "Macbeth"
    },
    factionOrder: ['macbeth', 'malcolm'],
    factions: {
      macbeth: {
        name: 'Macbeth\'s Forces',
        color: '#dc2626', // Red
        description: 'Macbeth\'s tyrannical rule over Scotland',
        territories: [
          { name: 'Dunsinane Castle', cost: 25, description: 'Macbeth\'s fortress' },
          { name: 'Macbeth\'s Throne Room', cost: 20, description: 'Royal court' },
          { name: 'Banquo\'s Ghost Chamber', cost: 15, description: 'Haunted hall' },
          { name: 'Macbeth\'s Armory', cost: 18, description: 'Weapons & armor' },
          { name: 'Lady Macbeth\'s Chamber', cost: 16, description: 'Sleepwalking scene' },
          { name: 'Macbeth\'s War Room', cost: 14, description: 'Battle planning' },
          { name: 'Macbeth\'s Treasury', cost: 12, description: 'Stolen wealth' },
          { name: 'Macbeth\'s Dungeons', cost: 10, description: 'Political prisoners' },
          { name: 'Macbeth\'s Gardens', cost: 8, description: 'Outdoor court' },
          { name: 'Macbeth\'s Chapel', cost: 6, description: 'False piety' }
        ],
        characters: [
          {
            name: 'Macbeth',
            role: 'Tyrant King',
            startingCoins: 100,
            startingWeapons: ['dagger'],
            startingMercenaries: 6,
            startingCastles: 3,
            personality: 'paranoid',
            quotes: [
              "Is this a dagger which I see before me?",
              "Out, out, brief candle!",
              "Tomorrow, and tomorrow, and tomorrow.",
              "I am in blood stepped in so far.",
              "Life's but a walking shadow."
            ],
            description: 'A once noble general corrupted by ambition and supernatural forces.'
          },
          {
            name: 'Lady Macbeth',
            role: 'Manipulator',
            startingCoins: 80,
            startingWeapons: ['words'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'manipulative',
            quotes: [
              "Look like the innocent flower, but be the serpent under it.",
              "Out, damned spot!",
              "What's done cannot be undone.",
              "A little water clears us of this deed.",
              "Unsex me here."
            ],
            description: 'Macbeth\'s wife who pushes him toward murder and madness.'
          }
        ]
      },
      malcolm: {
        name: 'Malcolm\'s Forces',
        color: '#1e40af', // Blue
        description: 'The rightful heir fighting to reclaim Scotland',
        territories: [
          { name: 'England\'s Court', cost: 25, description: 'Malcolm\'s refuge' },
          { name: 'Malcolm\'s Camp', cost: 20, description: 'Rebel headquarters' },
          { name: 'Macduff\'s Castle', cost: 18, description: 'Allied stronghold' },
          { name: 'Malcolm\'s Armory', cost: 16, description: 'Rebel weapons' },
          { name: 'Malcolm\'s Council', cost: 14, description: 'War planning' },
          { name: 'Malcolm\'s Treasury', cost: 12, description: 'English support' },
          { name: 'Malcolm\'s Scouts', cost: 10, description: 'Intelligence' },
          { name: 'Malcolm\'s Healers', cost: 8, description: 'Medical aid' },
          { name: 'Malcolm\'s Messengers', cost: 6, description: 'Communication' },
          { name: 'Malcolm\'s Guards', cost: 4, description: 'Protection' }
        ],
        characters: [
          {
            name: 'Malcolm',
            role: 'Rightful Heir',
            startingCoins: 90,
            startingWeapons: ['sword'],
            startingMercenaries: 5,
            startingCastles: 2,
            personality: 'righteous',
            quotes: [
              "Let us seek out some desolate shade and there weep our sad bosoms empty.",
              "This tyrant, whose sole name blisters our tongues.",
              "I am young, but something you may deserve of him through me.",
              "We shall not spend a large expense of time.",
              "The night is long that never finds the day."
            ],
            description: 'Duncan\'s son and rightful heir to the Scottish throne.'
          },
          {
            name: 'Macduff',
            role: 'Avenger',
            startingCoins: 85,
            startingWeapons: ['sword'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'vengeful',
            quotes: [
              "Turn, hell-hound, turn!",
              "I have no words; my voice is in my sword.",
              "Macduff was from his mother's womb untimely ripped.",
              "O Scotland, Scotland!",
              "Let us rather hold fast the mortal sword."
            ],
            description: 'A nobleman who seeks revenge for his family\'s murder.'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Birnam Wood', cost: 15, description: 'The moving forest' },
      { name: 'Forres Castle', cost: 12, description: 'Duncan\'s old court' },
      { name: 'Cawdor Castle', cost: 10, description: 'Macbeth\'s first title' },
      { name: 'Fife', cost: 8, description: 'Macduff\'s homeland' },
      { name: 'Scone', cost: 6, description: 'Coronation site' }
    ]
  },

  hamlet: {
    id: 'hamlet',
    name: 'Hamlet',
    scenarioName: 'Hamlet',
    type: 'literary',
    description: 'The tragedy of Prince Hamlet\'s quest for revenge and truth in the court of Denmark',
    inspirationalQuote: {
      text: "To be, or not to be, that is the question.",
      author: "William Shakespeare",
      context: "Hamlet, Act III, Scene I"
    },
    factionOrder: ['hamletLoyalists', 'claudiusCourt'],
    factions: {
      hamletLoyalists: {
        name: 'Hamlet\'s Loyalists',
        color: '#1e40af',
        description: 'Aligned with truth, legacy, and justice',
        territories: [
          { name: 'Hamlet\'s Quarters', cost: 85, description: 'Hamlet\'s private space - psychological center of resistance' },
          { name: 'The Ghost\'s Platform', cost: 90, description: 'Where the truth is revealed; tied to the old king' },
          { name: 'Graveyard', cost: 80, description: 'Symbol of mortality and philosophical power' },
          { name: 'Wittenberg University', cost: 75, description: 'Represents Hamlet\'s intellect and allies abroad' },
          { name: 'Old King\'s Mausoleum', cost: 88, description: 'Legacy and spiritual power of his father' },
          { name: 'Forest Path Outside Elsinore', cost: 70, description: 'Space of reflection and plotting' },
          { name: 'Horatio\'s Study', cost: 65, description: 'Hamlet\'s trusted friend and confidant' },
          { name: 'Fortinbras\' Camp', cost: 60, description: 'External threat and foil to Hamlet' },
          { name: 'Ophelia\'s Garden', cost: 55, description: 'Symbol of innocence and lost love' },
          { name: 'The Players\' Stage', cost: 50, description: 'Where truth is performed and revealed' },
          { name: 'Polonius\' Library', cost: 45, description: 'Wisdom and foolishness intertwined' },
          { name: 'The Chapel', cost: 40, description: 'Spiritual refuge and moral center' },
          { name: 'The Armory', cost: 35, description: 'Weapons and preparation for conflict' },
          { name: 'The Observatory', cost: 30, description: 'Philosophical contemplation and stargazing' },
          { name: 'The Courtyard', cost: 25, description: 'Public space where tensions play out' },
          { name: 'The Secret Passage', cost: 20, description: 'Hidden routes and covert operations' }
        ],
        characters: [
          { name: 'Hamlet', role: 'Prince', startingCoins: 100, startingWeapons: ['sword'], startingMercenaries: 3, startingCastles: 1, personality: 'intellectual', quotes: ['To be or not to be!'], description: 'The melancholy prince seeking truth and justice' },
          { name: 'Horatio', role: 'Friend', startingCoins: 90, startingWeapons: ['dagger'], startingMercenaries: 2, startingCastles: 1, personality: 'loyal', quotes: ['Goodnight, sweet prince'], description: 'Hamlet\'s loyal friend and confidant' },
          { name: 'The Ghost', role: 'Spirit', startingCoins: 85, startingWeapons: ['specter'], startingMercenaries: 1, startingCastles: 1, personality: 'persistent', quotes: ['Remember me!'], description: 'Hamlet\'s father seeking justice from beyond' },
          { name: 'Fortinbras', role: 'Prince', startingCoins: 80, startingWeapons: ['army'], startingMercenaries: 3, startingCastles: 1, personality: 'military', quotes: ['Forward to Denmark!'], description: 'Norwegian prince - external threat and foil' },
          { name: 'Ophelia', role: 'Lady', startingCoins: 70, startingWeapons: ['flowers'], startingMercenaries: 1, startingCastles: 1, personality: 'caring', quotes: ['Goodnight ladies'], description: 'Hamlet\'s love - innocent victim of court intrigue' },
          { name: 'Polonius', role: 'Chamberlain', startingCoins: 65, startingWeapons: ['counsel'], startingMercenaries: 2, startingCastles: 1, personality: 'argumentative', quotes: ['To thine own self be true'], description: 'Lord Chamberlain - wise but foolish' },
          { name: 'Laertes', role: 'Noble', startingCoins: 60, startingWeapons: ['rapier'], startingMercenaries: 2, startingCastles: 1, personality: 'passionate', quotes: ['I am satisfied in nature'], description: 'Ophelia\'s brother - seeks revenge' }
        ]
      },
      claudiusCourt: {
        name: 'Claudius\' Court',
        color: '#dc2626',
        description: 'The corrupt court seeking to maintain power',
        territories: [
          { name: 'Claudius\' Throne Room', cost: 95, description: 'Center of power and corruption' },
          { name: 'Gertrude\'s Chamber', cost: 85, description: 'Queen\'s private space - conflicted loyalties' },
          { name: 'The Banquet Hall', cost: 80, description: 'Where celebrations mask underlying tensions' },
          { name: 'The Treasury', cost: 75, description: 'Financial power and corruption' },
          { name: 'The Guard Tower', cost: 70, description: 'Military control and surveillance' },
          { name: 'The Wine Cellar', cost: 65, description: 'Where poison is stored and plots are hatched' },
          { name: 'The Council Chamber', cost: 60, description: 'Political decision-making and manipulation' },
          { name: 'The Royal Bedroom', cost: 55, description: 'Private space where secrets are kept' },
          { name: 'The Servants\' Quarters', cost: 50, description: 'Lower court members and spies' },
          { name: 'The Stables', cost: 45, description: 'Transportation and escape routes' },
          { name: 'The Kitchen', cost: 40, description: 'Where poison is prepared' },
          { name: 'The Courtyard Gate', cost: 35, description: 'Entry point and security checkpoint' },
          { name: 'The Royal Gardens', cost: 30, description: 'Beautiful facade hiding corruption' },
          { name: 'The Servants\' Hall', cost: 25, description: 'Gossip and information gathering' },
          { name: 'The Royal Chapel', cost: 20, description: 'False piety and moral pretense' },
          { name: 'The Secret Chamber', cost: 15, description: 'Hidden room for plotting and poison' }
        ],
        characters: [
          { name: 'Claudius', role: 'King', startingCoins: 110, startingWeapons: ['poison'], startingMercenaries: 3, startingCastles: 1, personality: 'treacherous', quotes: ['O, my offense is rank!'], description: 'The usurping king - corrupt and manipulative' },
          { name: 'Gertrude', role: 'Queen', startingCoins: 95, startingWeapons: ['influence'], startingMercenaries: 2, startingCastles: 1, personality: 'manipulative', quotes: ['The lady doth protest too much'], description: 'Hamlet\'s mother - conflicted between son and husband' },
          { name: 'Rosencrantz', role: 'Courtier', startingCoins: 85, startingWeapons: ['deception'], startingMercenaries: 2, startingCastles: 1, personality: 'treacherous', quotes: ['At your service'], description: 'Claudius\' spy - Hamlet\'s false friend' },
          { name: 'Guildenstern', role: 'Courtier', startingCoins: 85, startingWeapons: ['deception'], startingMercenaries: 2, startingCastles: 1, personality: 'treacherous', quotes: ['Command us'], description: 'Claudius\' spy - Hamlet\'s false friend' },
          { name: 'Osric', role: 'Courtier', startingCoins: 75, startingWeapons: ['flattery'], startingMercenaries: 1, startingCastles: 1, personality: 'selfish', quotes: ['Your lordship is right welcome'], description: 'Courtier - sycophantic and shallow' },
          { name: 'Voltemand', role: 'Ambassador', startingCoins: 70, startingWeapons: ['diplomacy'], startingMercenaries: 2, startingCastles: 1, personality: 'diplomatic', quotes: ['News from Norway'], description: 'Ambassador to Norway - diplomatic tool' },
          { name: 'Cornelius', role: 'Ambassador', startingCoins: 70, startingWeapons: ['diplomacy'], startingMercenaries: 2, startingCastles: 1, personality: 'diplomatic', quotes: ['At your service'], description: 'Ambassador to Norway - diplomatic tool' },
          { name: 'Marcellus', role: 'Guard', startingCoins: 60, startingWeapons: ['halberd'], startingMercenaries: 1, startingCastles: 1, personality: 'loyal', quotes: ['Something is rotten in Denmark'], description: 'Guard who sees the ghost - loyal to old king' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Elsinore Castle', cost: 100, description: 'The main setting - contested ground' },
      { name: 'The Harbor', cost: 80, description: 'Entry point for external forces' },
      { name: 'The Marketplace', cost: 60, description: 'Public space where information flows' },
      { name: 'The Tavern', cost: 40, description: 'Where commoners gather and plot' },
      { name: 'The Crossroads', cost: 20, description: 'Where paths converge and decisions are made' }
    ],
    sceneAssignments: {
      'Act 1, Scene 1': {
        title: 'The Ghost Appears',
        description: 'The opening scene where the ghost of King Hamlet first appears to the guards.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'Who first sees the ghost of King Hamlet?',
            options: ['Horatio', 'Marcellus', 'Bernardo', 'Francisco'],
            correct: 2,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Bernardo is the first to see the ghost, as he is on guard duty when the scene opens.'
          },
          {
            type: 'short_answer',
            question: 'What does the ghost\'s appearance suggest about the state of Denmark?',
            answer: 'The ghost\'s appearance suggests that something is rotten in the state of Denmark, indicating political corruption and moral decay.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'The ghost\'s appearance is a supernatural sign that the natural order has been disrupted by Claudius\' murder of King Hamlet.'
          },
          {
            type: 'analysis',
            question: 'How does Shakespeare establish the atmosphere of mystery and foreboding in this opening scene?',
            answer: 'Shakespeare uses darkness, cold weather, and the supernatural appearance of the ghost to create an atmosphere of mystery and foreboding.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The setting of midnight, the cold weather, and the ghost\'s appearance all contribute to the ominous atmosphere that foreshadows the tragedy to come.'
          }
        ],
        triggerEvent: 'The ghost appears and beckons to the guards, setting the supernatural tone for the play.'
      },
      'Act 1, Scene 2': {
        title: 'The Court Scene',
        description: 'Claudius addresses the court and Hamlet\'s first soliloquy reveals his inner turmoil.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What does Claudius announce in his first speech to the court?',
            options: ['His marriage to Gertrude', 'His plan to invade Norway', 'His grief over King Hamlet\'s death', 'His suspicion of Hamlet'],
            correct: 0,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Claudius announces his marriage to Gertrude, which is the source of Hamlet\'s distress.'
          },
          {
            type: 'short_answer',
            question: 'What does Hamlet\'s first soliloquy reveal about his state of mind?',
            answer: 'Hamlet\'s soliloquy reveals his deep depression, disgust with the world, and suicidal thoughts.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'Hamlet expresses his desire to die and his disgust with the world, showing his psychological state after his father\'s death and mother\'s remarriage.'
          },
          {
            type: 'analysis',
            question: 'How does Shakespeare contrast Claudius\' public persona with Hamlet\'s private thoughts?',
            answer: 'Claudius presents a confident, political facade while Hamlet reveals deep emotional turmoil and philosophical despair.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The contrast between Claudius\' smooth political speech and Hamlet\'s raw emotional soliloquy highlights the difference between appearance and reality.'
          }
        ],
        triggerEvent: 'Hamlet\'s soliloquy reveals his suicidal thoughts and disgust with the world.'
      },
      'Act 1, Scene 3': {
        title: 'Polonius\' Advice',
        description: 'Laertes departs for France and Polonius gives advice to both his children.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What advice does Polonius give to Laertes before he leaves for France?',
            options: ['Be true to yourself', 'Neither a borrower nor a lender be', 'To thine own self be true', 'All of the above'],
            correct: 3,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Polonius gives extensive advice including "Neither a borrower nor a lender be" and "To thine own self be true."'
          },
          {
            type: 'short_answer',
            question: 'How does Ophelia\'s relationship with Hamlet change in this scene?',
            answer: 'Polonius forbids Ophelia from seeing Hamlet, claiming his love is not genuine.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'Polonius orders Ophelia to reject Hamlet\'s advances, believing Hamlet\'s love is false and will harm her reputation.'
          },
          {
            type: 'analysis',
            question: 'What does Polonius\' character reveal about his parenting style?',
            answer: 'Polonius is overbearing and controlling, giving lengthy advice and making decisions for his children.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'His long-winded advice and immediate forbidding of Ophelia\'s relationship shows his controlling nature.'
          }
        ],
        triggerEvent: 'Polonius forbids Ophelia from seeing Hamlet, creating a barrier between the lovers.'
      },
      'Act 1, Scene 4': {
        title: 'The Ghost Speaks',
        description: 'Hamlet meets the ghost of his father, who reveals the truth about his murder.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What does the ghost reveal to Hamlet about his death?',
            options: ['He died of natural causes', 'He was murdered by Claudius', 'He committed suicide', 'He was killed in battle'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'The ghost reveals that Claudius murdered him by pouring poison in his ear while he slept.'
          },
          {
            type: 'short_answer',
            question: 'What does the ghost ask Hamlet to do?',
            answer: 'The ghost asks Hamlet to avenge his murder but to leave Gertrude to heaven.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'The ghost wants revenge against Claudius but tells Hamlet not to harm his mother.'
          },
          {
            type: 'analysis',
            question: 'How does this scene change Hamlet\'s understanding of his situation?',
            answer: 'Hamlet now knows his father was murdered and feels compelled to seek revenge.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'This revelation transforms Hamlet from a grieving son to a man with a mission of revenge.'
          }
        ],
        triggerEvent: 'The ghost reveals the truth about King Hamlet\'s murder, setting Hamlet on the path of revenge.'
      },
      'Act 1, Scene 5': {
        title: 'Hamlet\'s Vow',
        description: 'Hamlet swears his friends to secrecy and vows to avenge his father.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What does Hamlet make Horatio and Marcellus swear?',
            options: ['To help him kill Claudius', 'To never speak of what they\'ve seen', 'To protect Ophelia', 'To leave Denmark'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Hamlet makes them swear never to reveal what they\'ve seen with the ghost.'
          },
          {
            type: 'short_answer',
            question: 'How does Hamlet\'s behavior change after meeting the ghost?',
            answer: 'Hamlet becomes secretive, paranoid, and begins to act strangely.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'He adopts an "antic disposition" and becomes suspicious of everyone around him.'
          },
          {
            type: 'analysis',
            question: 'What does Hamlet\'s vow reveal about his character?',
            answer: 'Hamlet is deeply committed to justice and honor, willing to take on a dangerous mission.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'His willingness to seek revenge despite the risks shows his strong sense of duty and honor.'
          }
        ],
        triggerEvent: 'Hamlet vows revenge and begins to act strangely, adopting an "antic disposition."'
      },
      'Act 2, Scene 1': {
        title: 'Ophelia\'s Report',
        description: 'Ophelia reports Hamlet\'s strange behavior to Polonius.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'How does Hamlet appear when he visits Ophelia?',
            options: ['Happy and cheerful', 'Disheveled and wild-eyed', 'Angry and violent', 'Calm and collected'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Ophelia describes Hamlet as appearing disheveled and wild-eyed, suggesting madness.'
          },
          {
            type: 'short_answer',
            question: 'What does Polonius conclude about Hamlet\'s behavior?',
            answer: 'Polonius believes Hamlet is mad with love for Ophelia.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'Polonius interprets Hamlet\'s strange behavior as love-sickness.'
          },
          {
            type: 'analysis',
            question: 'How does this scene contribute to the theme of appearance vs. reality?',
            answer: 'Hamlet\'s feigned madness creates confusion about what is real and what is pretense.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The audience knows Hamlet is pretending, but other characters believe he\'s truly mad.'
          }
        ],
        triggerEvent: 'Ophelia reports Hamlet\'s strange behavior, convincing Polonius he\'s love-sick.'
      },
      'Act 2, Scene 2': {
        title: 'The Spies Arrive',
        description: 'Rosencrantz and Guildenstern arrive to spy on Hamlet.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'Why do Rosencrantz and Guildenstern come to Elsinore?',
            options: ['To visit Hamlet', 'To spy on Hamlet for Claudius', 'To attend the wedding', 'To study at the university'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Claudius and Gertrude summon them to spy on Hamlet and discover the cause of his madness.'
          },
          {
            type: 'short_answer',
            question: 'How does Hamlet react to seeing his old friends?',
            answer: 'Hamlet is initially happy to see them but quickly becomes suspicious of their motives.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'He welcomes them warmly but then questions why they\'ve come, showing his growing paranoia.'
          },
          {
            type: 'analysis',
            question: 'What does this scene reveal about the corruption in Denmark?',
            answer: 'Even friendship is corrupted by political intrigue and spying.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The fact that Hamlet\'s closest friends are willing to spy on him shows how pervasive the corruption is.'
          }
        ],
        triggerEvent: 'Rosencrantz and Guildenstern arrive as spies, further isolating Hamlet.'
      },
      'Act 3, Scene 1': {
        title: 'To Be or Not To Be',
        description: 'Hamlet\'s famous soliloquy on life and death, followed by the "nunnery" scene with Ophelia.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What is the main question Hamlet poses in his "To be or not to be" soliloquy?',
            options: ['Whether to kill Claudius', 'Whether to marry Ophelia', 'Whether to live or die', 'Whether to leave Denmark'],
            correct: 2,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'The soliloquy is about the fundamental question of whether life is worth living.'
          },
          {
            type: 'short_answer',
            question: 'How does Hamlet treat Ophelia in the "nunnery" scene?',
            answer: 'Hamlet is cruel and harsh to Ophelia, telling her to go to a nunnery.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'He rejects her love and tells her to become a nun, showing his growing misanthropy.'
          },
          {
            type: 'analysis',
            question: 'What does this scene reveal about Hamlet\'s psychological state?',
            answer: 'Hamlet is deeply conflicted about life, death, and human relationships.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'His philosophical musings and cruel treatment of Ophelia show his inner turmoil.'
          }
        ],
        triggerEvent: 'Hamlet delivers his most famous soliloquy and cruelly rejects Ophelia.'
      },
      'Act 3, Scene 2': {
        title: 'The Mousetrap',
        description: 'Hamlet stages a play to test Claudius\' guilt.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What is the name of the play Hamlet stages?',
            options: ['The Murder of Gonzago', 'The Mousetrap', 'Both A and B', 'Neither A nor B'],
            correct: 2,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'The play is called "The Murder of Gonzago" but Hamlet refers to it as "The Mousetrap."'
          },
          {
            type: 'short_answer',
            question: 'How does Claudius react to the play?',
            answer: 'Claudius becomes agitated and leaves the play, confirming his guilt.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'His reaction proves to Hamlet that the ghost was telling the truth about the murder.'
          },
          {
            type: 'analysis',
            question: 'What does this scene demonstrate about Hamlet\'s intelligence?',
            answer: 'Hamlet uses his intelligence and knowledge of theater to expose Claudius\' guilt.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'He cleverly uses art to reveal truth, showing his strategic thinking.'
          }
        ],
        triggerEvent: 'The play confirms Claudius\' guilt, giving Hamlet proof to act.'
      },
      'Act 3, Scene 3': {
        title: 'The Prayer Scene',
        description: 'Hamlet finds Claudius praying and considers killing him.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'Why doesn\'t Hamlet kill Claudius while he\'s praying?',
            options: ['He\'s afraid', 'He wants Claudius to go to hell', 'He\'s interrupted', 'He changes his mind'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Hamlet believes killing Claudius while praying would send him to heaven, not hell.'
          },
          {
            type: 'short_answer',
            question: 'What does this scene reveal about Hamlet\'s moral complexity?',
            answer: 'Hamlet struggles with the moral implications of revenge and murder.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'His hesitation shows he\'s not simply a cold-blooded killer but someone wrestling with ethics.'
          },
          {
            type: 'analysis',
            question: 'How does this scene contribute to the play\'s themes?',
            answer: 'It explores the complexity of justice, revenge, and moral action.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The scene raises questions about when revenge is justified and what constitutes true justice.'
          }
        ],
        triggerEvent: 'Hamlet hesitates to kill Claudius, missing his best opportunity for revenge.'
      },
      'Act 3, Scene 4': {
        title: 'The Closet Scene',
        description: 'Hamlet confronts Gertrude and accidentally kills Polonius.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'Who does Hamlet kill in this scene?',
            options: ['Claudius', 'Gertrude', 'Polonius', 'Ophelia'],
            correct: 2,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Hamlet kills Polonius, thinking he\'s Claudius hiding behind the arras.'
          },
          {
            type: 'short_answer',
            question: 'What does Hamlet reveal to Gertrude about Claudius?',
            answer: 'Hamlet tells Gertrude that Claudius murdered King Hamlet.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'He confronts her with the truth about her new husband\'s crime.'
          },
          {
            type: 'analysis',
            question: 'How does this scene escalate the conflict?',
            answer: 'Polonius\' death makes Hamlet a murderer and gives Claudius justification to act against him.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'This accidental killing changes the dynamics and makes Hamlet\'s situation more dangerous.'
          }
        ],
        triggerEvent: 'Hamlet accidentally kills Polonius, becoming a murderer himself.'
      },
      'Act 4, Scene 7': {
        title: 'Ophelia\'s Death',
        description: 'The news of Ophelia\'s drowning is reported.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'How does Ophelia die?',
            options: ['She is murdered', 'She drowns', 'She commits suicide', 'She dies of grief'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Ophelia drowns after falling into a brook while gathering flowers.'
          },
          {
            type: 'short_answer',
            question: 'What does Ophelia\'s death symbolize?',
            answer: 'Ophelia\'s death symbolizes the destruction of innocence and purity.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'Her death represents the loss of innocence in the corrupt world of the play.'
          },
          {
            type: 'analysis',
            question: 'How does Ophelia\'s death affect the other characters?',
            answer: 'Her death deepens Laertes\' desire for revenge and adds to the play\'s tragic atmosphere.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'Her death becomes another catalyst for violence and revenge in the final act.'
          }
        ],
        triggerEvent: 'Ophelia\'s death intensifies Laertes\' desire for revenge against Hamlet.'
      },
      'Act 5, Scene 1': {
        title: 'The Graveyard Scene',
        description: 'Hamlet and Horatio encounter gravediggers and Hamlet reflects on mortality.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What does Hamlet discover in the graveyard?',
            options: ['His father\'s grave', 'Ophelia\'s grave', 'Yorick\'s skull', 'All of the above'],
            correct: 3,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Hamlet encounters gravediggers, sees Yorick\'s skull, and learns of Ophelia\'s death.'
          },
          {
            type: 'short_answer',
            question: 'What does Yorick\'s skull represent to Hamlet?',
            answer: 'Yorick\'s skull represents the inevitability of death and the futility of human existence.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'The skull of the court jester reminds Hamlet that death comes to everyone, regardless of status.'
          },
          {
            type: 'analysis',
            question: 'How does this scene prepare for the play\'s conclusion?',
            answer: 'The scene emphasizes mortality and prepares the audience for the final tragedy.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The meditation on death sets the philosophical tone for the final act\'s violence.'
          }
        ],
        triggerEvent: 'Hamlet\'s encounter with Yorick\'s skull deepens his understanding of mortality.'
      },
      'Act 5, Scene 2': {
        title: 'The Final Duel',
        description: 'The climactic scene where Hamlet, Laertes, Claudius, and Gertrude all die.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'How does Hamlet finally kill Claudius?',
            options: ['With a sword', 'With poison', 'With a dagger', 'He doesn\'t kill him'],
            correct: 1,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Hamlet forces Claudius to drink the poisoned wine that was meant for him.'
          },
          {
            type: 'short_answer',
            question: 'What does Hamlet\'s final act accomplish?',
            answer: 'Hamlet achieves his revenge but at the cost of his own life and many others.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'He fulfills his duty to his father but the cost is the destruction of the entire royal family.'
          },
          {
            type: 'analysis',
            question: 'How does the play\'s ending reflect its themes?',
            answer: 'The ending shows that revenge leads to destruction and that corruption spreads to all.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The tragic ending demonstrates the destructive power of revenge and the inevitability of consequences.'
          }
        ],
        triggerEvent: 'The final duel results in the death of all major characters, completing the tragedy.'
      }
    },
    economy: {
      startingMoney: 1000,
      incomePerTurn: 100,
      costMultiplier: 1.0
    },
    victoryConditions: {
      type: 'territory_control',
      requiredTerritories: 20,
      description: 'Control 20 territories to win'
    },
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // THE CRUCIBLE SCENARIO
  theCrucible: {
    id: 'theCrucible',
    name: 'The Crucible (Arthur Miller)',
    type: 'literary',
    description: 'A Puritan community torn apart by witchcraft accusations and mass hysteria during the Salem witch trials.',
    inspirationalQuote: {
      text: "I have given you my soul; leave me my name!",
      author: "Arthur Miller",
      context: "The Crucible"
    },
    factionOrder: ['accusers', 'accused'],
    factions: {
      accusers: {
        name: 'The Accusers',
        color: '#dc2626', // Red
        description: 'Those who accuse others of witchcraft',
        territories: [
          { name: 'Salem Meeting House', cost: 25, description: 'Court proceedings' },
          { name: 'Reverend Parris\' House', cost: 20, description: 'Minister\'s home' },
          { name: 'Abigail\'s Room', cost: 15, description: 'Accuser\'s quarters' },
          { name: 'Courtroom', cost: 18, description: 'Trial chamber' },
          { name: 'Accusers\' Council', cost: 16, description: 'Plotting room' },
          { name: 'Witch Hunters\' Office', cost: 14, description: 'Investigation' },
          { name: 'Accusers\' Armory', cost: 12, description: 'Weapons & tools' },
          { name: 'Accusers\' Treasury', cost: 10, description: 'Confiscated wealth' },
          { name: 'Accusers\' Dungeons', cost: 8, description: 'Holding cells' },
          { name: 'Accusers\' Chapel', cost: 6, description: 'Prayer room' }
        ],
        characters: [
          {
            name: 'Abigail Williams',
            role: 'Lead Accuser',
            startingCoins: 80,
            startingWeapons: ['lies'],
            startingMercenaries: 5,
            startingCastles: 2,
            personality: 'manipulative',
            quotes: [
              "I want to open myself!",
              "I saw Goody Proctor with the Devil!",
              "I want the light of God.",
              "I want Jesus!",
              "I danced for the Devil."
            ],
            description: 'A young woman who leads the witchcraft accusations.'
          },
          {
            name: 'Reverend Parris',
            role: 'Minister',
            startingCoins: 70,
            startingWeapons: ['words'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'selfish',
            quotes: [
              "There is either obedience or the church will burn.",
              "I have fought here three long years.",
              "There is a faction sworn to drive me from my pulpit.",
              "I have given you my soul.",
              "You will confess yourself or I will take you out."
            ],
            description: 'The minister of Salem who supports the witch trials.'
          }
        ]
      },
      accused: {
        name: 'The Accused',
        color: '#1e40af', // Blue
        description: 'Those falsely accused of witchcraft',
        territories: [
          { name: 'Proctor Farm', cost: 25, description: 'John Proctor\'s home' },
          { name: 'Elizabeth\'s Kitchen', cost: 20, description: 'Wife\'s domain' },
          { name: 'Accused\'s Refuge', cost: 15, description: 'Safe house' },
          { name: 'Accused\'s Council', cost: 18, description: 'Defense planning' },
          { name: 'Accused\'s Armory', cost: 16, description: 'Defense weapons' },
          { name: 'Accused\'s Treasury', cost: 14, description: 'Hidden wealth' },
          { name: 'Accused\'s Chapel', cost: 12, description: 'Prayer room' },
          { name: 'Accused\'s Garden', cost: 10, description: 'Herb garden' },
          { name: 'Accused\'s Study', cost: 8, description: 'Learning room' },
          { name: 'Accused\'s Courtyard', cost: 6, description: 'Outdoor space' }
        ],
        characters: [
          {
            name: 'John Proctor',
            role: 'Defiant Farmer',
            startingCoins: 90,
            startingWeapons: ['truth'],
            startingMercenaries: 5,
            startingCastles: 2,
            personality: 'defiant',
            quotes: [
              "I have given you my soul; leave me my name!",
              "Because it is my name!",
              "I cannot mount the gibbet like a saint.",
              "I have three children.",
              "I am not worth the dust on the feet of them that hang."
            ],
            description: 'A farmer who refuses to confess to witchcraft.'
          },
          {
            name: 'Elizabeth Proctor',
            role: 'Faithful Wife',
            startingCoins: 75,
            startingWeapons: ['love'],
            startingMercenaries: 4,
            startingCastles: 2,
            personality: 'faithful',
            quotes: [
              "I cannot judge you.",
              "I have sins of my own to count.",
              "I do not judge you.",
              "I have been thinking.",
              "I have been a good wife."
            ],
            description: 'John Proctor\'s wife who stands by him.'
          }
        ]
      }
    },
    neutralTerritories: [
      { name: 'The Forest', cost: 15, description: 'Where the girls danced' },
      { name: 'The River', cost: 12, description: 'Baptism site' },
      { name: 'The Gallows', cost: 10, description: 'Execution site' },
      { name: 'The Church', cost: 8, description: 'Worship place' },
      { name: 'The Village Square', cost: 6, description: 'Public gathering' }
    ]
  }
};

console.log('SCENARIOS object defined with', Object.keys(window.SCENARIOS).length, 'scenarios');
console.log('Available scenarios:', Object.keys(window.SCENARIOS).slice(0, 10));

// Provide legacy global for pages that reference SCENARIOS directly
// without going through window.SCENARIOS
var SCENARIOS = window.SCENARIOS;

// Export for use in other files (Node/CommonJS) without referencing undeclared identifiers
// Note: In the browser we don't need CommonJS export; avoid extra syntax here
