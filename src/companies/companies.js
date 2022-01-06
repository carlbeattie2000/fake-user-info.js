const globalFunctions = require("../global");
// add some more stuff like, vat, registered, company director, ect

function name() {
  const companies = [
    "3Com Corp",
    "3M Company",
    "A.G. Edwards Inc.",
    "Abbott Laboratories",
    "Abercrombie & Fitch Co.",
    "ABM Industries Incorporated",
    "Ace Hardware Corporation",
    "ACT Manufacturing Inc.",
    "Acterna Corp.",
    "Adams Resources & Energy",
    "ADC Telecommunications",
    "Adelphia Communications Corporation",
    "Administaff",
    "Adobe Systems Incorporated",
    "Adolph Coors Company",
    "Advance Auto Parts",
    "Advanced Micro Devices",
    "AdvancePCS",
    "Advantica Restaurant Group",
    "The AES Corporation",
    "Aetna Inc.",
    "Affiliated Computer Services",
    "AFLAC Incorporated",
    "AGCO Corporation",
    "Agilent Technologies",
    "Agway Inc.",
    "Apartment Investment and Management Company",
    "Air Products and Chemicals",
    "Airborne",
    "Airgas",
    "AK Steel Holding Corporation",
    "Alaska Air Group",
    "Alberto-Culver Company",
    "Albertson's",
    "Alcoa Inc.",
    "Alleghany Corporation",
    "Allegheny Energy",
    "Allegheny Technologies Incorporated",
    "Allergan",
    "ALLETE",
    "Alliant Energy Corporation",
    "Allied Waste Industries",
    "Allmerica Financial Corporation",
    "The Allstate Corporation",
    "ALLTEL Corporation",
    "The Alpine Group",
    "Amazon.com",
    "AMC Entertainment Inc.",
    "American Power Conversion Corporation",
    "Amerada Hess Corporation",
    "AMERCO",
    "Ameren Corporation",
    "America West Holdings Corporation",
    "American Axle & Manufacturing Holdings",
    "American Eagle Outfitters",
    "American Electric Power Company",
    "American Express Company",
    "American Financial Group",
    "American Greetings Corporation",
    "American International Group",
    "American Standard Companies Inc.",
    "American Water Works Company",
    "AmerisourceBergen Corporation",
    "Ames Department Stores",
    "Amgen Inc.",
    "Amkor Technology",
    "AMR Corporation",
    "AmSouth Bancorp.",
    "Amtran",
    "Anadarko Petroleum Corporation",
    "Analog Devices",
    "Anheuser-Busch Companies",
    "Anixter International Inc.",
    "AnnTaylor Inc.",
    "Anthem",
    "AOL Time Warner Inc.",
    "Aon Corporation",
    "Apache Corporation",
    "Apple Computer",
    "Applera Corporation",
    "Applied Industrial Technologies",
    "Applied Materials",
    "Aquila",
    "ARAMARK Corporation",
    "Arch Coal",
    "Archer Daniels Midland Company",
    "Arkansas Best Corporation",
    "Armstrong Holdings",
    "Arrow Electronics",
    "ArvinMeritor",
    "Ashland Inc.",
    "Astoria Financial Corporation",
    "AT&T Corp.",
    "Atmel Corporation",
    "Atmos Energy Corporation",
    "Audiovox Corporation",
    "Autoliv",
    "Automatic Data Processing",
    "AutoNation",
    "AutoZone",
    "Avaya Inc.",
    "Avery Dennison Corporation",
    "Avista Corporation",
    "Avnet",
    "Avon Products",
    "Baker Hughes Incorporated",
    "Ball Corporation",
    "Bank of America Corporation",
    "The Bank of New York Company",
    "Bank One Corporation",
    "Banknorth Group",
    "Banta Corporation",
    "Barnes & Noble",
    "Bausch & Lomb Incorporated",
    "Baxter International Inc.",
    "BB&T Corporation",
    "The Bear Stearns Companies Inc.",
    "Beazer Homes USA",
    "Beckman Coulter",
    "Becton",
    "Dickinson and Company",
    "Bed Bath & Beyond Inc.",
    "Belk",
    "Bell Microproducts Inc.",
    "BellSouth Corporation",
    "Belo Corp.",
    "Bemis Company",
    "Benchmark Electronics",
    "Berkshire Hathaway Inc.",
    "Best Buy Co.",
    "Bethlehem Steel Corporation",
    "Beverly Enterprises",
    "Big Lots",
    "BJ Services Company",
    "BJ's Wholesale Club",
    "The Black & Decker Corporation",
    "Black Hills Corporation",
    "BMC Software",
    "The Boeing Company",
    "Boise Cascade Corporation",
    "Borders Group",
    "BorgWarner Inc.",
    "Boston Scientific Corporation",
    "Bowater Incorporated",
    "Briggs & Stratton Corporation",
    "Brightpoint",
    "Brinker International",
    "Bristol-Myers Squibb Company",
    "Broadwing",
    "Brown Shoe Company",
    "Brown-Forman Corporation",
    "Brunswick Corporation",
    "Budget Group",
    "Burlington Coat Factory Warehouse Corporation",
    "Burlington Industries",
    "Burlington Northern Santa Fe Corporation",
    "Burlington Resources Inc.",
    "C. H. Robinson Worldwide Inc.",
    "Cablevision Systems Corp",
    "Cabot Corp",
    "Cadence Design Systems",
    "Calpine Corp.",
    "Campbell Soup Co.",
    "Capital One Financial Corp.",
    "Cardinal Health Inc.",
    "Caremark Rx Inc.",
    "Carlisle Cos. Inc.",
    "Carpenter Technology Corp.",
    "Casey's General Stores Inc.",
    "Caterpillar Inc.",
    "CBRL Group Inc.",
    "CDI Corp.",
    "CDW Computer Centers Inc.",
    "CellStar Corp.",
    "Cendant Corp",
    "Cenex Harvest States Cooperatives",
    "Centex Corp.",
    "CenturyTel Inc.",
    "Ceridian Corp.",
    "CH2M Hill Cos. Ltd.",
    "Champion Enterprises Inc.",
    "Charles Schwab Corp.",
    "Charming Shoppes Inc.",
    "Charter Communications Inc.",
    "Charter One Financial Inc.",
    "ChevronTexaco Corp.",
    "Chiquita Brands International Inc.",
    "Chubb Corp",
    "Ciena Corp.",
    "Cigna Corp",
    "Cincinnati Financial Corp.",
    "Cinergy Corp.",
    "Cintas Corp.",
    "Circuit City Stores Inc.",
    "Cisco Systems Inc.",
    "Citigroup",
    "Citizens Communications Co.",
    "CKE Restaurants Inc.",
    "Clear Channel Communications Inc.",
    "The Clorox Co.",
    "CMGI Inc.",
    "CMS Energy Corp.",
    "CNF Inc.",
    "Coca-Cola Co.",
    "Coca-Cola Enterprises Inc.",
    "Colgate-Palmolive Co.",
    "Collins & Aikman Corp.",
    "Comcast Corp.",
    "Comdisco Inc.",
    "Comerica Inc.",
    "Comfort Systems USA Inc.",
    "Commercial Metals Co.",
    "Community Health Systems Inc.",
    "Compass Bancshares Inc",
    "Computer Associates International Inc.",
    "Computer Sciences Corp.",
    "Compuware Corp.",
    "Comverse Technology Inc.",
    "ConAgra Foods Inc.",
    "Concord EFS Inc.",
    "Conectiv",
    "Conoco Inc",
    "Conseco Inc.",
    "Consolidated Freightways Corp.",
    "Consolidated Edison Inc.",
    "Constellation Brands Inc.",
    "Constellation Emergy Group Inc.",
    "Continental Airlines Inc.",
    "Convergys Corp.",
    "Cooper Cameron Corp.",
    "Cooper Industries Ltd.",
    "Cooper Tire & Rubber Co.",
    "Corn Products International Inc.",
    "Corning Inc.",
    "Costco Wholesale Corp.",
    "Countrywide Credit Industries Inc.",
    "Coventry Health Care Inc.",
    "Cox Communications Inc.",
    "Crane Co.",
    "Crompton Corp.",
    "Crown Cork & Seal Co. Inc.",
    "CSK Auto Corp.",
    "CSX Corp.",
    "Cummins Inc.",
    "CVS Corp.",
    "Cytec Industries Inc.",
    "D&K Healthcare Resources",
    "D.R. Horton Inc.",
    "Dana Corporation",
    "Danaher Corporation",
    "Darden Restaurants Inc.",
    "DaVita Inc.",
    "Dean Foods Company",
    "Deere & Company",
    "Del Monte Foods Co",
    "Dell Computer Corporation",
    "Delphi Corp.",
    "Delta Air Lines Inc.",
    "Deluxe Corporation",
    "Devon Energy Corporation",
    "Di Giorgio Corporation",
    "Dial Corporation",
    "Diebold Incorporated",
    "Dillard's Inc.",
    "DIMON Incorporated",
    "Dole Food Company",
    "Dollar General Corporation",
    "Dollar Tree Stores",
    "Dominion Resources",
    "Domino's Pizza LLC",
    "Dover Corporation",
    "Dow Chemical Company",
    "Dow Jones & Company",
    "DPL Inc.",
    "DQE Inc.",
    "Dreyer's Grand Ice Cream",
    "DST Systems",
    "DTE Energy Co.",
    "E.I. Du Pont de Nemours and Company",
    "Duke Energy Corp",
    "Dun & Bradstreet Inc.",
    "DURA Automotive Systems Inc.",
    "DynCorp",
    "Dynegy Inc.",
    "E*Trade Group",
    "E.W. Scripps Company",
    "Earthlink",
    "Eastman Chemical Company",
    "Eastman Kodak Company",
    "Eaton Corporation",
    "Echostar Communications Corporation",
    "Ecolab Inc.",
    "Edison International",
    "EGL Inc.",
    "El Paso Corporation",
    "Electronic Arts Inc.",
    "Electronic Data Systems Corp.",
    "Eli Lilly and Company",
    "EMC Corporation",
    "Emcor Group Inc.",
    "Emerson Electric Co.",
    "Encompass Services Corporation",
    "Energizer Holdings Inc.",
    "Energy East Corporation",
    "Engelhard Corporation",
    "Enron Corp.",
    "Entergy Corporation",
    "Enterprise Products Partners L.P.",
    "EOG Resources",
    "Equifax Inc.",
    "Equitable Resources Inc.",
    "Equity Office Properties Trust",
    "Equity Residential Properties Trust",
    "Estee Lauder Companies Inc.",
    "Exelon Corporation",
    "Exide Technologies",
    "Expeditors International of Washington Inc.",
    "Express Scripts Inc.",
    "ExxonMobil Corporation",
    "Fairchild Semiconductor International Inc.",
    "Family Dollar Stores Inc.",
    "Farmland Industries Inc.",
    "Federal Mogul Corp.",
    "Federated Department Stores Inc.",
    "Federal Express Corp.",
    "Felcor Lodging Trust Inc.",
    "Ferro Corp.",
    "Fidelity National Financial Inc.",
    "Fifth Third Bancorp",
    "First American Financial Corp.",
    "First Data Corp.",
    "First National of Nebraska Inc.",
    "First Tennessee National Corp.",
    "FirstEnergy Corp.",
    "Fiserv Inc.",
    "Fisher Scientific International Inc.",
    "FleetBoston Financial Co.",
    "Fleetwood Enterprises Inc.",
    "Fleming Companies Inc.",
    "Flowers Foods Inc.",
    "Flowserv Corp",
    "Fluor Corp",
    "FMC Corp",
    "Foamex International Inc",
    "Foot Locker Inc",
    "Footstar Inc.",
    "Ford Motor Co",
    "Forest Laboratories Inc.",
    "Fortune Brands Inc.",
    "Foster Wheeler Ltd.",
    "FPL Group Inc.",
    "Franklin Resources Inc.",
    "Freeport McMoran Copper & Gold Inc.",
    "Frontier Oil Corp",
    "Furniture Brands International Inc.",
    "Gannett Co.",
    "Gap Inc.",
    "Gateway Inc.",
    "GATX Corporation",
    "Gemstar-TV Guide International Inc.",
    "GenCorp Inc.",
    "General Cable Corporation",
    "General Dynamics Corporation",
    "General Electric Company",
    "General Mills Inc",
    "General Motors Corporation",
    "Genesis Health Ventures Inc.",
    "Gentek Inc.",
    "Gentiva Health Services Inc.",
    "Genuine Parts Company",
    "Genuity Inc.",
    "Genzyme Corporation",
    "Georgia Gulf Corporation",
    "Georgia-Pacific Corporation",
    "Gillette Company",
    "Gold Kist Inc.",
    "Golden State Bancorp Inc.",
    "Golden West Financial Corporation",
    "Goldman Sachs Group Inc.",
    "Goodrich Corporation",
    "The Goodyear Tire & Rubber Company",
    "Granite Construction Incorporated",
    "Graybar Electric Company Inc.",
    "Great Lakes Chemical Corporation",
    "Great Plains Energy Inc.",
    "GreenPoint Financial Corp.",
    "Greif Bros. Corporation",
    "Grey Global Group Inc.",
    "Group 1 Automotive Inc.",
    "Guidant Corporation",
    "H&R Block Inc.",
    "H.B. Fuller Company",
    "H.J. Heinz Company",
    "Halliburton Co.",
    "Harley-Davidson Inc.",
    "Harman International Industries Inc.",
    "Harrah's Entertainment Inc.",
    "Harris Corp.",
    "Harsco Corp.",
    "Hartford Financial Services Group Inc.",
    "Hasbro Inc.",
    "Hawaiian Electric Industries Inc.",
    "HCA Inc.",
    "Health Management Associates Inc.",
    "Health Net Inc.",
    "Healthsouth Corp",
    "Henry Schein Inc.",
    "Hercules Inc.",
    "Herman Miller Inc.",
    "Hershey Foods Corp.",
    "Hewlett-Packard Company",
    "Hibernia Corp.",
    "Hillenbrand Industries Inc.",
    "Hilton Hotels Corp.",
    "Hollywood Entertainment Corp.",
    "Home Depot Inc.",
    "Hon Industries Inc.",
    "Honeywell International Inc.",
    "Hormel Foods Corp.",
    "Host Marriott Corp."
  ];

  return companies[globalFunctions.randomMinMax(0, companies.length - 1)];
}

function catchPhrase() {
  const catchPhrases = [
    "A bird in the hand is worth two in the bush",
    "A bunch of fives",
    "A chain is only as strong as its weakest link",
    "A change is as good as a rest",
    "A countenance more in sorrow than in anger",
    "A Daniel come to judgement",
    "A diamond in the rough",
    "A diamond is forever",
    "A different kettle of fish",
    "A dish fit for the gods",
    "A dog is a man's best friend",
    "A drop in the bucket",
    "A drop in the ocean",
    "A fate worse than death",
    "A feather in one's cap",
    "A fish rots from the head down",
    "A fish out of water",
    "A fly in the ointment",
    "A fool and his money are soon parted",
    "A fool's paradise",
    "A foot in the door",
    "A foregone conclusion",
    "A friend in need is a friend indeed",
    "A golden key can open any door",
    "A good man is hard to find",
    "A hard man is good to find",
    "A hiding to nothing - On",
    "A horse, a horse, my kingdom for a horse",
    "A house divided against itself cannot stand",
    "A journey of a thousand miles begins with a single step",
    "A knight in shining armour",
    "À la carte",
    "À la mode",
    "A legend in one's own lifetime",
    "A leopard cannot change its spots",
    "A little bird told me",
    "A little knowledge is a dangerous thing",
    "A little of what you fancy does you good",
    "A load of cobblers",
    "A load of codswallop",
    "A man after my own heart",
    "A man who is his own lawyer has a fool for a client",
    "A millstone around one's neck",
    "A ministering angel shall my sister be",
    "A miss is as good as a mile",
    "A nation of shopkeepers",
    "A nest of vipers",
    "A no-brainer",
    "A nod is as good as a wink",
    "A norange",
    "A penny for your thoughts",
    "A picture is worth a thousand words",
    "A piece of the action",
    "A pig in a poke",
    "A place for everything and everything in its place",
    "A plague on both your houses",
    "A priori",
    "A red rag to a bull",
    "A riddle wrapped up in an enigma",
    "A rising tide lifts all boats",
    "A rolling stone gathers no moss",
    "A rose by any other name would smell as sweet",
    "A rose is a rose is a rose",
    "A safe pair of hands",
    "A sea change",
    "A skeleton in the closet",
    "A sledgehammer to crack a nut",
    "A shot in the arm",
    "A sight for sore eyes",
    "A sorry sight",
    "A stitch in time saves nine",
    "A stone's throw",
    "A thing of beauty is a joy forever",
    "A tinker's damn",
    "A turn up for the books",
    "A watched pot never boils",
    "A wolf in sheep's clothing",
    "A woman needs a man like a fish needs a bicycle",
    "A woman's place is in the home",
    "A word in edgeways",
    "A word in your shell-like",
    "A young man's fancy",
    "A1 at Lloyds",
    "Abandon all hope ye who enter here",
    "Abide with me",
    "About face",
    "About turn",
    "Above board",
    "Above my pay grade",
    "Abracadabra",
    "Absence makes the heart grow fonder",
    "Absent-minded professor",
    "Absent without leave",
    "Absolute power corrupts absolutely",
    "Accident of birth",
    "Accidentally on purpose",
    "Accidents will happen",
    "According to Hoyle",
    "Ace in the hole",
    "Achilles' heel",
    "Acid test",
    "Acronyms",
    "Across the board",
    "Across the pond",
    "Act of God",
    "Act the giddy goat",
    "Action man",
    "Actions speak louder than words",
    "Adam's ale",
    "Adversity makes strange bedfellows",
    "After the fact",
    "Aga saga",
    "Against the clock",
    "Against the grain",
    "Age before beauty",
    "Age cannot wither her, nor custom stale her infinite variety",
    "Agree to disagree",
    "Aid and abet",
    "Aide-mémoire",
    "Air kiss",
    "Air quotes",
    "Al fresco",
    "Alas, poor Yorick! I knew him, Horatio",
    "Alike as two peas in a pod",
    "Alive and kicking",
    "All agog",
    "All and sundry",
    "All at sea",
    "All fingers and thumbs",
    "All Greek to me",
    "All in all",
    "All intents and purposes",
    "All mouth and no trousers",
    "All of a sudden",
    "All present and correct",
    "All publicity is good publicity",
    "All singing, all dancing",
    "All systems go",
    "All that glitters is not gold / All that glisters is not gold",
    "All the tea in China - Not for",
    "All things come to those who wait",
    "All things must pass",
    "All you can eat",
    "All's fair in love and war",
    "All work and no play makes Jack a dull boy",
    "Alter ego",
    "Amber nectar",
    "An accident waiting to happen",
    "An Aladdin's cave",
    "An albatross around one's neck",
    "An apple a day keeps the doctor away",
    "An arm and a leg",
    "An axe to grind",
    "An Englishman's home is his castle",
    "An eye for an eye, a tooth for a tooth",
    "An ill wind",
    "An offer he can't refuse",
    "An Oxford scholar",
    "Anchors aweigh",
    "Angry young man",
    "Ankle biter",
    "Annus horribilis",
    "Another day, another dollar",
    "Another think coming",
    "Apple of my eye - The",
    "Apple pie order",
    "April fool",
    "Arm candy - see ear candy",
    "Arms akimbo",
    "Ars longa, vita brevis",
    "Arty-farty",
    "Asap - As soon as possible",
    "As X as Y",
    "As alike as two peas in a pod",
    "As bald as a coot",
    "As black as Newgate's knocker",
    "As bold as brass",
    "As brown as a berry",
    "As busy as a bee",
    "As busy as a one-armed paperhanger",
    "As cold as any stone",
    "As cool as a cucumber",
    "As cute as a bug's ear",
    "As daft as a brush",
    "As dead as a dodo",
    "As dead as a doornail",
    "As different as chalk and cheese",
    "As easy as pie",
    "As easy as taking candy from a baby",
    "As fast as greased lightning",
    "As fine as frog's hair",
    "As fit as a butcher's dog",
    "As fit as a fiddle",
    "As good as gold",
    "As good luck would have it",
    "As happy as...",
    "As happy as a clam",
    "As happy as a sandboy",
    "As happy as Larry",
    "As high as a kite",
    "As keen as mustard",
    "As mad as a hatter",
    "As mad as a March hare",
    "As merry as the day is long",
    "As nice as ninepence",
    "As old as Methuselah",
    "As old as the hills",
    "As pleased as Punch",
    "As pure as the driven snow",
    "As queer as a nine bob note",
    "As safe as houses",
    "As sick as a parrot",
    "As snug as a bug in a rug",
    "As straight as a die",
    "As the crow flies",
    "As thick as thieves",
    "As thick as two short planks",
    "As white as snow",
    "Ashes to ashes dust to dust",
    "Ask a silly question and you'll get a silly answer",
    "(Ask not) for whom the bell tolls",
    "(H)asta la vista, baby",
    "At loggerheads",
    "At one fell swoop",
    "At one's beck and call",
    "At one's wit's end",
    "At sixes and sevens",
    "Attack is the best form of defence",
    "Augur well",
    "Auld lang syne",
    "Away with the fairies",
    "Baby blues",
    "Baby boomer",
    "Baby father",
    "Back of beyond - The",
    "Back-seat driver",
    "Back the field",
    "Back to basics",
    "Back to square one",
    "Back to the drawing board",
    "Backroom boy",
    "Backward in coming forward",
    "Bacon - Bring home the",
    "Bad books",
    "Bad egg",
    "Bad hair day",
    "Bad money drives out good",
    "Badger to death",
    "Bag and baggage",
    "Baker's dozen",
    "Balance of power - The",
    "Balance of trade - The",
    "Bald as a coot",
    "Bale out/bail out",
    "Ball and chain",
    "Balling the jack",
    "Ballpark figure",
    "Bandy words",
    "Bane of your life",
    "Bang on about",
    "Baptism of fire",
    "Barge-pole - Wouldn't touch with a",
    "Barking mad",
    "Barking up the wrong tree",
    "Barrel of laughs",
    "Basket case",
    "Bated breath",
    "Bats in the belfry",
    "Batten down the hatches",
    "Battle royal",
    "Be afraid, be very afraid",
    "Be enthralled",
    "Be still, my beating heart",
    "Beam ends - On your",
    "Bean counter",
    "Beast with two backs",
    "Beat a hasty retreat",
    "Beat around the bush",
    "Beat swords into ploughshares",
    "Beat the living daylights out of someone",
    "Beauty is in the eye of the beholder",
    "Beauty is only skin deep",
    "Beck and call",
    "Bed of roses",
    "Bee in your bonnet",
    "Beef and reef",
    "Beelzebub has a devil for a sideboard",
    "Been there, done that",
    "Beer and skittles",
    "Beer goggles",
    "Bee-line - make a bee-line for",
    "Bee's knees - The",
    "Beetle-browed",
    "Before the fact",
    "Before you can say Jack Robinson",
    "Beg the question",
    "Beggar belief",
    "Beggars can't be choosers",
    "Behind every great man there's a great woman",
    "Behind the eight ball",
    "Bell, book and candle",
    "Bell the cat",
    "Belle of the ball",
    "Below the belt",
    "Below the salt",
    "Bells and whistles",
    "Belt and braces",
    "Belt up",
    "Best bib and tucker",
    "Best laid schemes of mice and men - The",
    "Bet your bottom dollar",
    "Better half",
    "Better late than never",
    "Better to have loved and lost than never to have loved at all",
    "Between a rock and a hard place",
    "Between the Devil and the deep blue sea",
    "Between two stools",
    "Between you, me and the bed-post",
    "Beware of Greeks bearing gifts",
    "Beware the Ides of March",
    "Beyond a shadow of a doubt",
    "Beyond belief",
    "Beyond our ken",
    "Beyond the pale",
    "Biblical phrases",
    "Big Apple - The",
    "Big cheese - The",
    "Big Easy - The",
    "Big fish in a small pond - A",
    "Big fleas have little fleas upon their back to bite 'em",
    "Big wig",
    "(A) bigger bang for your buck",
    "Bill Stickers is innocent",
    "Billy-o - Like",
    "Billy no mates",
    "Binge drinking",
    "Bird in the hand is worth two in the bush - A",
    "Birds and the bees - The",
    "Birds of a feather flock together",
    "Bite the bullet",
    "Bite the dust",
    "Bitter end - The",
    "Black as Newgate's knocker",
    "Black-on-black",
    "Black sheep of the family",
    "Blast from the past - A",
    "Blaze a trail",
    "Bless you! (after a sneeze)",
    "Blind leading the blind - The",
    "Blind-man's buff",
    "Bling-bling",
    "Blonde bombshell",
    "Blood and thunder",
    "Blood is thicker than water",
    "Blood toil tears and sweat",
    "Blood, sweat and tears",
    "Bloody-minded",
    "Blot on the landscape",
    "Blow a raspberry - see raspberry tart",
    "Blow the gaff",
    "Blow your mind",
    "Blow your own trumpet",
    "Blown to smithereens",
    "Blue blood",
    "Blue moon (Once in a)",
    "Blue-plate special",
    "Bob's your uncle",
    "Bode well",
    "Bodice ripper",
    "Body - phrases related to the human body",
    "Body surfing",
    "Bog standard",
    "Bold as brass",
    "Bolt from the blue",
    "Bone dry",
    "Bone idle",
    "Bone up on",
    "Booby prize",
    "Booby trap",
    "Boogie-woogie",
    "(Too big for your) boots",
    "Booze cruise",
    "Born again",
    "Born with a silver spoon in one's mouth",
    "Born within the sound of Bow Bells",
    "Boss eyed",
    "Bottle out",
    "Bottom drawer",
    "Bottom-up",
    "Bought the farm",
    "Bowled a maiden over",
    "Box and Cox",
    "Box-seat - in the",
    "Boxing Day",
    "Boys will be boys",
    "Brand spanking new",
    "Brass monkey weather",
    "Brass tacks - get down to",
    "Bread always falls buttered side down",
    "Bread of life - The",
    "Break a leg",
    "Break the ice",
    "Bricks and clicks",
    "Bring home the bacon",
    "Broad in the beam",
    "Broke - if it ain't, don't fix it",
    "Brook no truck with",
    "Bronx cheer",
    "Brown as a berry",
    "Browned off",
    "Brownie points",
    "Brummagem screwdriver",
    "Brush - As daft as a",
    "Bubble and squeak",
    "Buck stops here - The",
    "Bucket list",
    "Buckle down",
    "Build a better mousetrap and the world will beat a path to your door",
    "Bugger Bognor!",
    "Buggins' turn",
    "Bullet - Bit the, Bite the",
    "Bums on seats",
    "Bun in the oven",
    "Bunch of fives - A",
    "Bunny boiler",
    "Burn the candle at both ends",
    "Burning the midnight oil",
    "Bury the hatchet",
    "Bury your head in the sand",
    "Busy as a bee",
    "Butt end of the stick - The",
    "Butter no parsnips - Fine words",
    "Butter side down",
    "Butter wouldn't melt in his mouth",
    "Butterfingers",
    "By and large",
    "By dint of",
    "By gum",
    "By hook or by crook",
    "By the board",
    "By the book",
    "By the short hairs",
    "By the skin of your teeth",
    "By your leave",
    "Bygones be bygones - Let",
    "Caesar Salad",
    "Call a spade a spade",
    "Call of the wild - The",
    "Camera cannot lie - The",
    "Canting Crew - phrases published in",
    "Can't be overestimated/can't be underestimated",
    "Can't hold a candle to",
    "Canteen culture",
    "Canterbury pace",
    "Captain Francis Grose - phrases first recorded by.",
    "Carbon-copy",
    "Carbon footprint",
    "Card-sharp",
    "Carey Street - On",
    "Carpe diem",
    "Carry coals to Newcastle",
    "Cart before the horse - Put the",
    "Carte blanche",
    "Cash on the nail",
    "(Ne'er) cast a clout till May be out",
    "Cast the first stone",
    "Cat burglar",
    "Cat got your tongue?",
    "Cat may look at a king - A",
    "Cat out of the bag - Let the",
    "Catbird seat - In the",
    "Catch a crab",
    "Catch 22",
    "Cat's Cradle",
    "Cat's pajamas - The",
    "Caught in a cleft stick",
    "Caught by the short hairs",
    "Caught red-handed",
    "Chain is only as strong as its weakest link - A",
    "Chaise lounge",
    "Chalk and cheese",
    "Champ at the bit",
    "Chance would be a fine thing",
    "Channel surfing",
    "Charity begins at home",
    "Charley horse",
    "Charm offensive",
    "Charmed life",
    "Cheap at half the price",
    "Cheek by jowl",
    "Cherchez la femme",
    "Chew the cud",
    "Chick flick",
    "Chickens come home to roost",
    "Children should be seen and not heard",
    "Chinese whispers",
    "Chinless wonder",
    "Chip off the old block",
    "Chip on your shoulder",
    "Chit-chat",
    "Chock-a-block",
    "Chop and change",
    "Chop-chop",
    "Chow down",
    "Christmas box - A",
    "Christmas card verses",
    "Clean breast - make a",
    "Cleanliness is next to godliness",
    "Clear blue water",
    "Cleft stick - In a",
    "Cliff-hanger",
    "Climb on the bandwagon",
    "Cloak and dagger",
    "Clod-hopper",
    "Clog up",
    "Close, but no cigar",
    "Close quarters",
    "Close your eyes and think of England",
    "Cloud cuckoo land",
    "Cloud nine",
    "Club sandwich",
    "Clue - don't have a",
    "Clutch at straws",
    "Coals to Newcastle - Carry",
    "Coat of many colours",
    "Cobblers - A load of",
    "Cockney rhyming slang",
    "Codswallop - a load of",
    "Cogito ergo sum",
    "Coin a phrase",
    "Cold as any stone",
    "Cold comfort"
  ];

  return catchPhrases[globalFunctions.randomMinMax(0, catchPhrases.length - 1)];
}

function annualEarnings(max = 1500000) {
  return globalFunctions.randomMinMax(10000, max);
}

function annualProfit(earnings = 7880400) {
  return globalFunctions.randomMinMax(10000, earnings);
}

function annualLoss(earnings = 7880400, profit = 2843300) {
  return earnings - profit;
}

const nameArray = (amount) => [...Array(amount)].map(() => name());
const catchPhraseArray = (amount) => [...Array(amount)].map(() => catchPhrase());

module.exports = {
  name,
  catchPhrase,
  annualEarnings,
  annualProfit,
  annualLoss,
  nameArray,
  catchPhraseArray,
};
