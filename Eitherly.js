/* =============================================
   DATA — 100+ Questions
============================================= */
const QUESTIONS = [
  // ENTERTAINMENT
  { id: 1, cat: 'entertainment', emoji: '⚽', q: 'FOOTBALL GOAT', a: 'CRISTIANO RONALDO', b: 'LIONEL MESSI', emojiA: '🇵🇹', emojiB: '🇦🇷', pctA: 52, pctB: 48 },
  { id: 2, cat: 'entertainment', emoji: '🎵', q: 'AFROBEATS KING', a: 'DAVIDO', b: 'WIZKID', emojiA: '🦋', emojiB: '🌟', pctA: 47, pctB: 53 },
  { id: 3, cat: 'entertainment', emoji: '🎬', q: 'MARVEL OR DC', a: 'MARVEL', b: 'DC', emojiA: '⚡', emojiB: '🦇', pctA: 71, pctB: 29 },
  { id: 4, cat: 'entertainment', emoji: '🎤', q: 'RAP LEGEND', a: 'KENDRICK LAMAR', b: 'DRAKE', emojiA: '👑', emojiB: '🦉', pctA: 58, pctB: 42 },
  { id: 5, cat: 'entertainment', emoji: '🎮', q: 'GAMING CONSOLE', a: 'PLAYSTATION', b: 'XBOX', emojiA: '🎮', emojiB: '🟢', pctA: 65, pctB: 35 },
  { id: 6, cat: 'entertainment', emoji: '📺', q: 'STREAMING CHOICE', a: 'NETFLIX', b: 'PRIME VIDEO', emojiA: '🔴', emojiB: '🔵', pctA: 78, pctB: 22 },
  { id: 7, cat: 'entertainment', emoji: '🎵', q: 'MUSIC ERA', a: '90S HITS', b: '2020S HITS', emojiA: '📼', emojiB: '📱', pctA: 61, pctB: 39 },
  { id: 8, cat: 'entertainment', emoji: '🏀', q: 'BASKETBALL GOAT', a: 'MICHAEL JORDAN', b: 'LEBRON JAMES', emojiA: '🐐', emojiB: '👑', pctA: 55, pctB: 45 },
  { id: 9, cat: 'entertainment', emoji: '🎬', q: 'MOVIE TYPE', a: 'ACTION FILMS', b: 'ROMANTIC FILMS', emojiA: '💥', emojiB: '💕', pctA: 54, pctB: 46 },
  { id: 10, cat: 'entertainment', emoji: '🎤', q: 'BURNA OR ASAKE', a: 'BURNA BOY', b: 'ASAKE', emojiA: '🦁', emojiB: '🔥', pctA: 51, pctB: 49 },
  { id: 11, cat: 'entertainment', emoji: '📱', q: 'SOCIAL MEDIA', a: 'INSTAGRAM', b: 'TIKTOK', emojiA: '📸', emojiB: '🎵', pctA: 46, pctB: 54 },
  { id: 12, cat: 'entertainment', emoji: '🎵', q: 'MUSIC FORMAT', a: 'ALBUM DROP', b: 'SINGLES ONLY', emojiA: '💿', emojiB: '🎧', pctA: 63, pctB: 37 },
  { id: 13, cat: 'entertainment', emoji: '🏋️', q: 'BOXING LEGEND', a: 'MUHAMMAD ALI', b: 'MIKE TYSON', emojiA: '👊', emojiB: '🦁', pctA: 57, pctB: 43 },
  { id: 14, cat: 'entertainment', emoji: '🎬', q: 'NOLLYWOOD OR HOLLYWOOD', a: 'NOLLYWOOD', b: 'HOLLYWOOD', emojiA: '🇳🇬', emojiB: '🎬', pctA: 44, pctB: 56 },
  { id: 15, cat: 'entertainment', emoji: '🎵', q: 'MUSIC MOOD', a: 'AFROBEATS', b: 'HIP-HOP', emojiA: '🌍', emojiB: '🎤', pctA: 49, pctB: 51 },
  { id: 16, cat: 'entertainment', emoji: '🏆', q: 'SPORTS EVENT', a: 'WORLD CUP', b: 'OLYMPICS', emojiA: '⚽', emojiB: '🏅', pctA: 68, pctB: 32 },
  { id: 17, cat: 'entertainment', emoji: '📺', q: 'WATCH STYLE', a: 'BINGE WATCH ALL', b: 'ONE EPISODE A WEEK', emojiA: '📺', emojiB: '⏰', pctA: 82, pctB: 18 },
  { id: 18, cat: 'entertainment', emoji: '🎮', q: 'GAME MODE', a: 'FIFA', b: 'CALL OF DUTY', emojiA: '⚽', emojiB: '🔫', pctA: 58, pctB: 42 },

  // LIFESTYLE
  { id: 19, cat: 'lifestyle', emoji: '💎', q: 'FLEX OR SAVE', a: 'SPEND NOW', b: 'SAVE FOR LATER', emojiA: '💸', emojiB: '🏦', pctA: 31, pctB: 69 },
  { id: 20, cat: 'lifestyle', emoji: '🚗', q: 'RIDE OR DIE', a: 'OWN A CAR', b: 'UBER EVERYWHERE', emojiA: '🚗', emojiB: '📱', pctA: 72, pctB: 28 },
  { id: 21, cat: 'lifestyle', emoji: '🌍', q: 'DREAM LIFE', a: 'BIG CITY', b: 'QUIET COUNTRYSIDE', emojiA: '🏙️', emojiB: '🌿', pctA: 64, pctB: 36 },
  { id: 22, cat: 'lifestyle', emoji: '☕', q: 'MORNING FUEL', a: 'COFFEE', b: 'TEA', emojiA: '☕', emojiB: '🍵', pctA: 67, pctB: 33 },
  { id: 23, cat: 'lifestyle', emoji: '🍔', q: 'FOOD CHOICE', a: 'JUNK FOOD', b: 'HEALTHY MEALS', emojiA: '🍔', emojiB: '🥗', pctA: 42, pctB: 58 },
  { id: 24, cat: 'lifestyle', emoji: '🏠', q: 'LIVING STYLE', a: 'RENT IN THE CITY', b: 'OWN HOME IN SUBURBS', emojiA: '🏙️', emojiB: '🏡', pctA: 38, pctB: 62 },
  { id: 25, cat: 'lifestyle', emoji: '✈️', q: 'TRAVEL STYLE', a: 'LUXURY RESORT', b: 'BACKPACK ADVENTURE', emojiA: '🏨', emojiB: '🎒', pctA: 61, pctB: 39 },
  { id: 26, cat: 'lifestyle', emoji: '💼', q: 'WORK LIFE', a: 'OWN BUSINESS', b: '9-5 WITH STABILITY', emojiA: '💼', emojiB: '🕘', pctA: 73, pctB: 27 },
  { id: 27, cat: 'lifestyle', emoji: '👗', q: 'FASHION VIBE', a: 'DESIGNER BRANDS', b: 'THRIFT & VINTAGE', emojiA: '👑', emojiB: '♻️', pctA: 54, pctB: 46 },
  { id: 28, cat: 'lifestyle', emoji: '🍕', q: 'FOOD DELIVERY', a: 'HOMEMADE MEAL', b: 'ORDER IN', emojiA: '👩‍🍳', emojiB: '📱', pctA: 45, pctB: 55 },
  { id: 29, cat: 'lifestyle', emoji: '💪', q: 'FITNESS CHOICE', a: 'GYM LIFE', b: 'OUTDOOR RUNS', emojiA: '🏋️', emojiB: '🏃', pctA: 56, pctB: 44 },
  { id: 30, cat: 'lifestyle', emoji: '🌙', q: 'SLEEP SCHEDULE', a: 'EARLY BIRD', b: 'NIGHT OWL', emojiA: '🌅', emojiB: '🌙', pctA: 37, pctB: 63 },
  { id: 31, cat: 'lifestyle', emoji: '📱', q: 'PHONE CHOICE', a: 'IPHONE', b: 'ANDROID', emojiA: '🍎', emojiB: '🤖', pctA: 62, pctB: 38 },
  { id: 32, cat: 'lifestyle', emoji: '🎂', q: 'BIRTHDAY VIBE', a: 'BIG PARTY', b: 'SMALL & INTIMATE', emojiA: '🥂', emojiB: '🕯️', pctA: 58, pctB: 42 },
  { id: 33, cat: 'lifestyle', emoji: '💊', q: 'HUSTLE MODE', a: 'GRIND 24/7', b: 'WORK SMART, REST MORE', emojiA: '⚡', emojiB: '🧘', pctA: 39, pctB: 61 },
  { id: 34, cat: 'lifestyle', emoji: '🏊', q: 'WEEKEND PLANS', a: 'OUTDOOR ADVENTURE', b: 'STAY IN & CHILL', emojiA: '🏕️', emojiB: '🛋️', pctA: 47, pctB: 53 },
  { id: 35, cat: 'lifestyle', emoji: '🎓', q: 'EDUCATION PATH', a: 'UNIVERSITY DEGREE', b: 'SELF-TAUGHT / ONLINE', emojiA: '🎓', emojiB: '💻', pctA: 54, pctB: 46 },

  // DEEP / PHILOSOPHICAL
  { id: 36, cat: 'deep', emoji: '🧠', q: 'WHAT MATTERS MORE', a: 'LOVE', b: 'MONEY', emojiA: '❤️', emojiB: '💰', pctA: 48, pctB: 52 },
  { id: 37, cat: 'deep', emoji: '🤔', q: 'GREATER VALUE', a: 'FREEDOM', b: 'SECURITY', emojiA: '🦅', emojiB: '🛡️', pctA: 67, pctB: 33 },
  { id: 38, cat: 'deep', emoji: '💭', q: 'LIFE PHILOSOPHY', a: 'LIVE FOR TODAY', b: 'PLAN FOR TOMORROW', emojiA: '🔥', emojiB: '📅', pctA: 44, pctB: 56 },
  { id: 39, cat: 'deep', emoji: '👁️', q: 'KNOWLEDGE OR HAPPINESS', a: 'KNOW EVERYTHING', b: 'BE BLISSFULLY HAPPY', emojiA: '🧠', emojiB: '😊', pctA: 41, pctB: 59 },
  { id: 40, cat: 'deep', emoji: '⚖️', q: 'JUSTICE OR MERCY', a: 'JUSTICE ALWAYS', b: 'MERCY ALWAYS', emojiA: '⚖️', emojiB: '🕊️', pctA: 53, pctB: 47 },
  { id: 41, cat: 'deep', emoji: '🌍', q: 'CHANGE THE WORLD', a: 'POLITICAL POWER', b: 'BUSINESS EMPIRE', emojiA: '🏛️', emojiB: '💼', pctA: 36, pctB: 64 },
  { id: 42, cat: 'deep', emoji: '❓', q: 'BETTER TO HAVE', a: 'MANY FRIENDS', b: 'FEW TRUE ONES', emojiA: '👥', emojiB: '🤝', pctA: 19, pctB: 81 },
  { id: 43, cat: 'deep', emoji: '⏰', q: 'TIME OR MONEY', a: 'MORE TIME', b: 'MORE MONEY', emojiA: '⏰', emojiB: '💵', pctA: 62, pctB: 38 },
  { id: 44, cat: 'deep', emoji: '🔮', q: 'FUTURE SIGHT', a: 'SEE YOUR FUTURE', b: 'CHANGE ONE PAST DECISION', emojiA: '🔮', emojiB: '⏪', pctA: 38, pctB: 62 },
  { id: 45, cat: 'deep', emoji: '🌟', q: 'LEGACY OR PLEASURE', a: 'REMEMBERED FOREVER', b: 'ENJOYED FULLY NOW', emojiA: '🌟', emojiB: '🎉', pctA: 55, pctB: 45 },
  { id: 46, cat: 'deep', emoji: '💔', q: 'LOVE OR PAIN', a: 'LOVE DEEPLY, RISK PAIN', b: 'PROTECT YOURSELF, LOVE LESS', emojiA: '❤️‍🔥', emojiB: '🛡️', pctA: 71, pctB: 29 },
  { id: 47, cat: 'deep', emoji: '🎯', q: 'PATH TO SUCCESS', a: 'TALENT', b: 'HARD WORK', emojiA: '⭐', emojiB: '💪', pctA: 18, pctB: 82 },
  { id: 48, cat: 'deep', emoji: '🌊', q: 'TRUTH OR COMFORT', a: 'PAINFUL TRUTH', b: 'COMFORTING LIE', emojiA: '🔍', emojiB: '🌸', pctA: 74, pctB: 26 },
  { id: 49, cat: 'deep', emoji: '🏔️', q: 'LIFE PATH', a: 'SAFE & PREDICTABLE', b: 'RISKY & EXCITING', emojiA: '🛤️', emojiB: '🎢', pctA: 28, pctB: 72 },
  { id: 50, cat: 'deep', emoji: '🌺', q: 'PRIORITY', a: 'FAMILY FIRST', b: 'CAREER FIRST', emojiA: '👨‍👩‍👧', emojiB: '🚀', pctA: 67, pctB: 33 },
  { id: 51, cat: 'deep', emoji: '🤲', q: 'SUCCESS MEANS', a: 'PERSONAL ACHIEVEMENT', b: 'HELPING OTHERS THRIVE', emojiA: '🏆', emojiB: '🌍', pctA: 31, pctB: 69 },
  { id: 52, cat: 'deep', emoji: '💡', q: 'BETTER SUPER POWER', a: 'READ MINDS', b: 'INVISIBLE AT WILL', emojiA: '🧠', emojiB: '👻', pctA: 44, pctB: 56 },

  // FUN / RANDOM
  { id: 53, cat: 'fun', emoji: '😂', q: 'ETERNAL CHOICE', a: 'PIZZA', b: 'BURGER', emojiA: '🍕', emojiB: '🍔', pctA: 56, pctB: 44 },
  { id: 54, cat: 'fun', emoji: '🤣', q: 'MORNING ROUTINE', a: 'SHOWER AT NIGHT', b: 'SHOWER IN MORNING', emojiA: '🌙', emojiB: '🌅', pctA: 37, pctB: 63 },
  { id: 55, cat: 'fun', emoji: '😜', q: 'SNACK DEBATE', a: 'SWEET SNACKS', b: 'SALTY SNACKS', emojiA: '🍫', emojiB: '🍿', pctA: 49, pctB: 51 },
  { id: 56, cat: 'fun', emoji: '🎉', q: 'ETERNAL DEBATE', a: 'CATS', b: 'DOGS', emojiA: '🐱', emojiB: '🐶', pctA: 39, pctB: 61 },
  { id: 57, cat: 'fun', emoji: '🍦', q: 'DESSERT WARS', a: 'ICE CREAM', b: 'CAKE', emojiA: '🍦', emojiB: '🎂', pctA: 58, pctB: 42 },
  { id: 58, cat: 'fun', emoji: '🌡️', q: 'WEATHER MOOD', a: 'SUNNY & HOT', b: 'COOL & CLOUDY', emojiA: '☀️', emojiB: '🌧️', pctA: 72, pctB: 28 },
  { id: 59, cat: 'fun', emoji: '🎭', q: 'PARTY ROLE', a: 'THE ENTERTAINER', b: 'THE WALLFLOWER', emojiA: '🎤', emojiB: '🌿', pctA: 53, pctB: 47 },
  { id: 60, cat: 'fun', emoji: '🧃', q: 'DRINK CHOICE', a: 'FRESH JUICE', b: 'FIZZY DRINK', emojiA: '🥤', emojiB: '🫧', pctA: 41, pctB: 59 },
  { id: 61, cat: 'fun', emoji: '📚', q: 'WEEKEND READ', a: 'BOOK', b: 'COMIC / MANGA', emojiA: '📗', emojiB: '📘', pctA: 52, pctB: 48 },
  { id: 62, cat: 'fun', emoji: '🎤', q: 'KARAOKE CHOICE', a: 'SING NO MATTER WHAT', b: 'NEVER EVER SING', emojiA: '🎤', emojiB: '🙈', pctA: 61, pctB: 39 },
  { id: 63, cat: 'fun', emoji: '🍫', q: 'CHOCOLATE WARS', a: 'MILK CHOCOLATE', b: 'DARK CHOCOLATE', emojiA: '🍫', emojiB: '⬛', pctA: 64, pctB: 36 },
  { id: 64, cat: 'fun', emoji: '🚿', q: 'WATER PREFERENCE', a: 'HOT SHOWER', b: 'COLD SHOWER', emojiA: '♨️', emojiB: '🧊', pctA: 71, pctB: 29 },
  { id: 65, cat: 'fun', emoji: '🎯', q: 'GAME NIGHT', a: 'BOARD GAMES', b: 'VIDEO GAMES', emojiA: '♟️', emojiB: '🎮', pctA: 45, pctB: 55 },
  { id: 66, cat: 'fun', emoji: '🌮', q: 'STREET FOOD', a: 'SHAWARMA', b: 'SUYA', emojiA: '🌯', emojiB: '🍢', pctA: 52, pctB: 48 },
  { id: 67, cat: 'fun', emoji: '😴', q: 'SLEEP POSITION', a: 'SIDE SLEEPER', b: 'BACK SLEEPER', emojiA: '😴', emojiB: '🛌', pctA: 68, pctB: 32 },
  { id: 68, cat: 'fun', emoji: '🚀', q: 'SUPER POWER', a: 'FLY', b: 'TELEPORT', emojiA: '🦸', emojiB: '⚡', pctA: 43, pctB: 57 },
  { id: 69, cat: 'fun', emoji: '🎁', q: 'GIFT STYLE', a: 'GIVE GIFT EARLY', b: 'WAIT FOR THE DATE', emojiA: '🎁', emojiB: '📅', pctA: 47, pctB: 53 },
  { id: 70, cat: 'fun', emoji: '🧹', q: 'CHORE DEBATE', a: 'CLEAN DISHES NOW', b: 'LEAVE IT FOR LATER', emojiA: '🫧', emojiB: '🛋️', pctA: 39, pctB: 61 },

  // PARTY / HOT TAKES
  { id: 71, cat: 'party', emoji: '🔥', q: 'CONTROVERSIAL TAKE', a: 'PINEAPPLE ON PIZZA', b: 'NEVER PINEAPPLE', emojiA: '🍍', emojiB: '🚫', pctA: 28, pctB: 72 },
  { id: 72, cat: 'party', emoji: '💬', q: 'RELATIONSHIP HOT TAKE', a: 'LONG-DISTANCE CAN WORK', b: 'LONG-DISTANCE NEVER WORKS', emojiA: '✈️', emojiB: '💔', pctA: 55, pctB: 45 },
  { id: 73, cat: 'party', emoji: '🤯', q: 'DATING STANDARD', a: 'SPLIT THE BILL ALWAYS', b: 'ONE PERSON SHOULD PAY', emojiA: '💳', emojiB: '💰', pctA: 49, pctB: 51 },
  { id: 74, cat: 'party', emoji: '😤', q: 'FRIENDSHIP ZONE', a: 'MEN & WOMEN CAN BE FRIENDS', b: 'ATTRACTION ALWAYS EXISTS', emojiA: '🤝', emojiB: '❤️', pctA: 62, pctB: 38 },
  { id: 75, cat: 'party', emoji: '👀', q: 'SOCIAL MEDIA HOT TAKE', a: 'POST EVERYTHING', b: 'KEEP LIFE PRIVATE', emojiA: '📸', emojiB: '🔒', pctA: 31, pctB: 69 },
  { id: 76, cat: 'party', emoji: '💥', q: 'SUCCESS SECRET', a: 'WHO YOU KNOW', b: 'WHAT YOU KNOW', emojiA: '👥', emojiB: '🧠', pctA: 58, pctB: 42 },
  { id: 77, cat: 'party', emoji: '🎭', q: 'FAKE IT OR MAKE IT', a: 'FAKE CONFIDENCE', b: 'BE AUTHENTICALLY SHY', emojiA: '🎭', emojiB: '🌸', pctA: 53, pctB: 47 },
  { id: 78, cat: 'party', emoji: '💔', q: 'BREAKUP METHOD', a: 'CALL & EXPLAIN', b: 'TEXT IS FINE', emojiA: '📞', emojiB: '💬', pctA: 79, pctB: 21 },
  { id: 79, cat: 'party', emoji: '🔊', q: 'PARTY DEBATE', a: 'DRUNK WORDS = SOBER THOUGHTS', b: 'DRUNK WORDS MEAN NOTHING', emojiA: '🍺', emojiB: '🤐', pctA: 61, pctB: 39 },
  { id: 80, cat: 'party', emoji: '👶', q: 'PARENT STYLE', a: 'STRICT PARENTING', b: 'LENIENT PARENTING', emojiA: '📏', emojiB: '🤗', pctA: 44, pctB: 56 },
  { id: 81, cat: 'party', emoji: '🏠', q: 'LIVING TOGETHER', a: 'LIVE TOGETHER BEFORE MARRIAGE', b: 'WAIT UNTIL MARRIAGE', emojiA: '🏠', emojiB: '💍', pctA: 67, pctB: 33 },
  { id: 82, cat: 'party', emoji: '🧠', q: 'HUSTLE CULTURE', a: 'REST IS PRODUCTIVE', b: 'ALWAYS BE GRINDING', emojiA: '😴', emojiB: '⚡', pctA: 64, pctB: 36 },
  { id: 83, cat: 'party', emoji: '🎤', q: 'TALENT DEBATE', a: 'LOOKS OPEN DOORS', b: 'TALENT OPENS DOORS', emojiA: '💅', emojiB: '🎯', pctA: 41, pctB: 59 },
  { id: 84, cat: 'party', emoji: '💌', q: 'LOVE LANGUAGE', a: 'ACTS OF SERVICE', b: 'WORDS OF AFFIRMATION', emojiA: '🛠️', emojiB: '💬', pctA: 52, pctB: 48 },
  { id: 85, cat: 'party', emoji: '🌍', q: 'RELOCATE OR STAY', a: 'JAPA (MOVE ABROAD)', b: 'BUILD AT HOME', emojiA: '✈️', emojiB: '🇳🇬', pctA: 58, pctB: 42 },
  { id: 86, cat: 'party', emoji: '🎯', q: 'MARRIAGE AGE', a: 'MARRY BEFORE 30', b: 'AGE IS JUST A NUMBER', emojiA: '⏰', emojiB: '🔥', pctA: 37, pctB: 63 },
  { id: 87, cat: 'party', emoji: '💸', q: 'MONEY PHILOSOPHY', a: 'HUSTLE UNTIL RICH', b: 'ENJOY WHAT YOU HAVE', emojiA: '💪', emojiB: '🌺', pctA: 54, pctB: 46 },

  // MORE MIXED
  { id: 88, cat: 'fun', emoji: '🌍', q: 'JOLLOF WARS', a: 'NIGERIAN JOLLOF', b: 'GHANAIAN JOLLOF', emojiA: '🇳🇬', emojiB: '🇬🇭', pctA: 61, pctB: 39 },
  { id: 89, cat: 'entertainment', emoji: '🎵', q: 'MUSIC STREAMING', a: 'SPOTIFY', b: 'APPLE MUSIC', emojiA: '🟢', emojiB: '🍎', pctA: 55, pctB: 45 },
  { id: 90, cat: 'lifestyle', emoji: '🧳', q: 'TRAVEL TIMING', a: 'PLAN EVERY DETAIL', b: 'GO WITH THE FLOW', emojiA: '📋', emojiB: '🎲', pctA: 47, pctB: 53 },
  { id: 91, cat: 'deep', emoji: '🌌', q: 'BIG QUESTION', a: 'WE ARE ALONE IN UNIVERSE', b: 'ALIENS DEFINITELY EXIST', emojiA: '🌍', emojiB: '👽', pctA: 27, pctB: 73 },
  { id: 92, cat: 'fun', emoji: '🧊', q: 'DRINK STYLE', a: 'DRINKS WITH ICE', b: 'NO ICE, EVER', emojiA: '🧊', emojiB: '🌡️', pctA: 71, pctB: 29 },
  { id: 93, cat: 'party', emoji: '💎', q: 'AMBITION CHECK', a: 'BILLIONAIRE OR NOTHING', b: 'COMFORTABLE IS ENOUGH', emojiA: '💰', emojiB: '🌿', pctA: 49, pctB: 51 },
  { id: 94, cat: 'entertainment', emoji: '🎬', q: 'CINEMA MOVE', a: 'TALK THROUGH THE MOVIE', b: 'COMPLETE SILENCE', emojiA: '💬', emojiB: '🤫', pctA: 22, pctB: 78 },
  { id: 95, cat: 'lifestyle', emoji: '💻', q: 'WORK STYLE', a: 'REMOTE WORK', b: 'OFFICE WORK', emojiA: '🏠', emojiB: '🏢', pctA: 76, pctB: 24 },
  { id: 96, cat: 'deep', emoji: '🤔', q: 'AFTER LIFE', a: 'HEAVEN EXISTS', b: 'NOTHING AFTER DEATH', emojiA: '☁️', emojiB: '⬛', pctA: 68, pctB: 32 },
  { id: 97, cat: 'fun', emoji: '🛁', q: 'CLEAN DEBATE', a: 'BATH', b: 'SHOWER', emojiA: '🛁', emojiB: '🚿', pctA: 36, pctB: 64 },
  { id: 98, cat: 'party', emoji: '💬', q: 'CONFLICT STYLE', a: 'ADDRESS IT DIRECTLY', b: 'WAIT & SEE', emojiA: '🗣️', emojiB: '🕊️', pctA: 63, pctB: 37 },
  { id: 99, cat: 'lifestyle', emoji: '📰', q: 'MORNING HABIT', a: 'CHECK PHONE FIRST', b: 'AVOID PHONE FOR AN HOUR', emojiA: '📱', emojiB: '🌅', pctA: 71, pctB: 29 },
  { id: 100, cat: 'entertainment', emoji: '🏆', q: 'AFCON OR UEFA CHAMPIONS LEAGUE', a: 'AFCON', b: 'UEFA CL', emojiA: '🌍', emojiB: '🏆', pctA: 43, pctB: 57 },
  { id: 101, cat: 'fun', emoji: '🤝', q: 'PAY METHOD', a: 'CASH', b: 'CARD / TRANSFER', emojiA: '💵', emojiB: '💳', pctA: 28, pctB: 72 },
  { id: 102, cat: 'deep', emoji: '🌱', q: 'NATURE VS NURTURE', a: 'WE ARE BORN WHO WE ARE', b: 'OUR ENVIRONMENT SHAPES US', emojiA: '🧬', emojiB: '🌍', pctA: 38, pctB: 62 },
  { id: 103, cat: 'party', emoji: '🤳', q: 'SOCIAL FLEX', a: 'FLASH YOUR WINS', b: 'STAY LOW, LET IT SHOW', emojiA: '📸', emojiB: '🤫', pctA: 34, pctB: 66 },
  { id: 104, cat: 'fun', emoji: '🎂', q: 'PARTY FOOD', a: 'SMALL CHOPS', b: 'RICE AND STEW', emojiA: '🍢', emojiB: '🍛', pctA: 48, pctB: 52 },
  { id: 105, cat: 'lifestyle', emoji: '🧘', q: 'STRESS RELIEF', a: 'MUSIC & DANCE', b: 'SLEEP IT OFF', emojiA: '🎵', emojiB: '😴', pctA: 54, pctB: 46 },
];

/* =============================================
   APP STATE
============================================= */
const CAT_META = {
  all:           { emoji: '🔥', name: 'All' },
  entertainment: { emoji: '🎬', name: 'Entertainment' },
  lifestyle:     { emoji: '💎', name: 'Lifestyle' },
  deep:          { emoji: '🧠', name: 'Deep Thoughts' },
  fun:           { emoji: '😂', name: 'Fun & Random' },
  party:         { emoji: '🎉', name: 'Party Mode' },
};

const AVATARS = ['😎','🦁','🐯','🦊','🐼','🦄','🐸','🤩','👾','🥷','💀','🤖'];

let state = {
  currentScreen: 'home',
  selectedCategory: 'all',
  currentQuestion: null,
  gameQueue: [],
  questionIndex: 0,
  streak: 0,
  bestStreak: 0,
  sessionChoices: { a: 0, b: 0 },
  sessionFavs: 0,
  hasChosen: false,
  currentChoice: null,
  // Party state
  partyPlayers: [],
  partyCategory: 'all',
  partyTurnIndex: 0,
  partyQueue: [],
  partyQuestionIndex: 0,
  partyScores: {},
  partyHasChosen: false,
};

// Persisted data structure
let storage = {
  answered: [],        // question IDs answered
  favorites: [],       // { id, question, chosenLabel, chosenSide }
  bestStreak: 0,
  totalAnswered: 0,
};

/* =============================================
   PERSISTENCE
============================================= */
function saveStorage() {
  try { localStorage.setItem('this_or_that_v1', JSON.stringify(storage)); } catch(e) {}
}
function loadStorage() {
  try {
    const raw = localStorage.getItem('this_or_that_v1');
    if (raw) storage = { ...storage, ...JSON.parse(raw) };
  } catch(e) {}
}

/* =============================================
   NAVIGATION
============================================= */
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.nav === screen);
  });
  state.currentScreen = screen;

  if (screen === 'home') updateHomeStats();
  if (screen === 'favorites') renderFavorites();
  if (screen === 'party') renderPartySetup();
}

/* =============================================
   HOME
============================================= */
function updateHomeStats() {
  document.getElementById('stat-answered').textContent = storage.totalAnswered;
  document.getElementById('stat-streak').textContent = storage.bestStreak;
  document.getElementById('stat-favs').textContent = storage.favorites.length;

  // Update category counts
  const counts = {};
  QUESTIONS.forEach(q => {
    counts[q.cat] = (counts[q.cat] || 0) + 1;
  });
  Object.entries(counts).forEach(([cat, count]) => {
    const el = document.getElementById('count-' + cat);
    if (el) el.textContent = count + ' picks';
  });
  document.getElementById('count-all').textContent = QUESTIONS.length + ' picks';
}

function selectCategory(el) {
  document.querySelectorAll('#screen-home .category-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.selectedCategory = el.dataset.cat;
}

/* =============================================
   GAME ENGINE
============================================= */
function startGame() {
  // Build question queue filtered by category + shuffle
  let pool = state.selectedCategory === 'all'
    ? [...QUESTIONS]
    : QUESTIONS.filter(q => q.cat === state.selectedCategory);

  if (pool.length === 0) { showToast('No questions in this category!'); return; }

  // Shuffle using Fisher-Yates
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  state.gameQueue = pool;
  state.questionIndex = 0;
  state.streak = 0;
  state.sessionChoices = { a: 0, b: 0 };
  state.sessionFavs = 0;
  state.bestStreak = storage.bestStreak;

  navigate('game');
  loadQuestion();
}

function loadQuestion() {
  if (state.questionIndex >= state.gameQueue.length) {
    showResults(); return;
  }

  const q = state.gameQueue[state.questionIndex];
  state.currentQuestion = q;
  state.hasChosen = false;
  state.currentChoice = null;

  // Update UI
  const catMeta = CAT_META[q.cat] || CAT_META.all;
  document.getElementById('question-category').style.opacity = '1';
  document.getElementById('cat-emoji-display').textContent = q.emoji || catMeta.emoji;
  document.getElementById('cat-name-display').textContent = catMeta.name;
  document.getElementById('game-question').textContent = q.q;
  document.getElementById('category-label-top').textContent = catMeta.name;

  // Choices
  document.getElementById('choice-a-emoji').textContent = q.emojiA || '⭐';
  document.getElementById('choice-a-text').textContent = q.a;
  document.getElementById('choice-b-emoji').textContent = q.emojiB || '💫';
  document.getElementById('choice-b-text').textContent = q.b;

  // Reset card states
  const cardA = document.getElementById('choice-a-card');
  const cardB = document.getElementById('choice-b-card');
  cardA.className = 'choice-card choice-a';
  cardB.className = 'choice-card choice-b';
  cardA.style.pointerEvents = 'auto';
  cardB.style.pointerEvents = 'auto';

  document.getElementById('pct-a-wrap').classList.remove('visible');
  document.getElementById('pct-b-wrap').classList.remove('visible');
  document.getElementById('post-choice-actions').classList.remove('visible');

  // Reset pct fills
  document.getElementById('pct-a-fill').style.width = '0%';
  document.getElementById('pct-b-fill').style.width = '0%';

  // Progress
  const total = state.gameQueue.length;
  const pct = Math.round((state.questionIndex / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `Question ${state.questionIndex + 1} of ${total}`;

  // Favorite button
  const isFav = storage.favorites.some(f => f.id === q.id);
  const favBtn = document.getElementById('fav-btn');
  favBtn.textContent = isFav ? '⭐' : '☆';
  favBtn.classList.toggle('active', isFav);

  // Streak
  document.getElementById('streak-count').textContent = state.streak;

  // Animate in
  const container = document.getElementById('choices-container');
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';
  requestAnimationFrame(() => {
    container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  });
}

function makeChoice(side) {
  if (state.hasChosen) return;
  state.hasChosen = true;
  state.currentChoice = side;

  const q = state.currentQuestion;
  const pctA = q.pctA + Math.floor(Math.random() * 5 - 2);
  const pctB = 100 - pctA;

  const cardA = document.getElementById('choice-a-card');
  const cardB = document.getElementById('choice-b-card');

  cardA.style.pointerEvents = 'none';
  cardB.style.pointerEvents = 'none';

  if (side === 'a') {
    cardA.classList.add('chosen-winner');
    cardB.classList.add('chosen-loser');
    state.sessionChoices.a++;
  } else {
    cardB.classList.add('chosen-winner');
    cardA.classList.add('chosen-loser');
    state.sessionChoices.b++;
  }

  // Show percentages
  setTimeout(() => {
    document.getElementById('pct-a-val').textContent = pctA + '%';
    document.getElementById('pct-b-val').textContent = pctB + '%';
    document.getElementById('pct-a-wrap').classList.add('visible');
    document.getElementById('pct-b-wrap').classList.add('visible');
    document.getElementById('pct-a-fill').style.width = pctA + '%';
    document.getElementById('pct-b-fill').style.width = pctB + '%';
    document.getElementById('post-choice-actions').classList.add('visible');
  }, 200);

  // Track streak
  state.streak++;
  if (state.streak > state.bestStreak) {
    state.bestStreak = state.streak;
    storage.bestStreak = state.streak;
  }
  document.getElementById('streak-count').textContent = state.streak;

  // Save to answered
  if (!storage.answered.includes(q.id)) {
    storage.answered.push(q.id);
    storage.totalAnswered++;
  }
  saveStorage();
}

function nextQuestion() {
  state.questionIndex++;
  // Reset container animation for next Q
  const container = document.getElementById('choices-container');
  container.style.transition = 'none';
  container.style.opacity = '0';
  container.style.transform = 'translateY(-10px)';
  setTimeout(() => loadQuestion(), 50);
}

function showResults() {
  const dominantSide = state.sessionChoices.a >= state.sessionChoices.b ? 'A-SIDE 🔴' : 'B-SIDE 🔵';
  document.getElementById('res-total').textContent = state.questionIndex;
  document.getElementById('res-streak').textContent = state.bestStreak;
  document.getElementById('res-side').textContent = dominantSide;
  document.getElementById('res-favs').textContent = state.sessionFavs;
  navigate('results');
  launchConfetti();
}

/* =============================================
   FAVORITES
============================================= */
function toggleFavorite() {
  const q = state.currentQuestion;
  if (!q || !state.hasChosen) return;

  const favBtn = document.getElementById('fav-btn');
  const existing = storage.favorites.findIndex(f => f.id === q.id);

  if (existing > -1) {
    storage.favorites.splice(existing, 1);
    favBtn.textContent = '☆';
    favBtn.classList.remove('active');
    showToast('Removed from saved ✓');
  } else {
    const chosenLabel = state.currentChoice === 'a' ? q.a : q.b;
    storage.favorites.push({
      id: q.id,
      question: q.q,
      chosenLabel,
      chosenSide: state.currentChoice,
      catEmoji: q.emoji,
    });
    favBtn.textContent = '⭐';
    favBtn.classList.add('active');
    state.sessionFavs++;
    showToast('Saved! ⭐');
  }
  saveStorage();
}

function renderFavorites() {
  const container = document.getElementById('fav-content');
  if (storage.favorites.length === 0) {
    container.innerHTML = `
      <div class="fav-empty">
        <span>⭐</span>
        <strong>No saved picks yet</strong>
        <p>When you find a question you love, tap ⭐ during gameplay to save it here.</p>
      </div>`;
    document.getElementById('clear-favs-btn').style.display = 'none';
    return;
  }

  document.getElementById('clear-favs-btn').style.display = 'flex';
  container.innerHTML = `<div class="fav-list">${storage.favorites.map((f, i) => `
    <div class="fav-item">
      <div class="fav-item-top">
        <div style="flex:1">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">${f.catEmoji || '🔥'} QUESTION ${f.id}</div>
          <div class="fav-q">${f.question}</div>
        </div>
        <button class="fav-remove-btn" onclick="removeFavorite(${i})">✕</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:12px;color:var(--text-muted);">MY PICK →</span>
        <div class="fav-choice">${f.chosenLabel}</div>
      </div>
    </div>`).join('')}</div>`;
}

function removeFavorite(index) {
  storage.favorites.splice(index, 1);
  saveStorage();
  renderFavorites();
  showToast('Removed ✓');
}

function clearFavorites() {
  if (storage.favorites.length === 0) return;
  storage.favorites = [];
  saveStorage();
  renderFavorites();
  showToast('Cleared all saved picks');
}

/* =============================================
   SHARE
============================================= */
let shareText = '';

function openShareModal() {
  const q = state.currentQuestion;
  if (q && state.currentChoice) {
    const chosen = state.currentChoice === 'a' ? q.a : q.b;
    shareText = `🔥 THIS OR THAT — I chose "${chosen}" in "${q.q}"\n\nWhat would YOU pick? Play now → thisorthat.app`;
  } else {
    shareText = `🔥 THIS OR THAT — I've answered ${storage.totalAnswered}+ questions and my best streak is ${storage.bestStreak}!\n\nCome pick your side → thisorthat.app`;
  }
  document.getElementById('share-preview').textContent = shareText;
  document.getElementById('share-modal').classList.add('open');
}

function closeShareModal(e) {
  if (!e || e.target === document.getElementById('share-modal') || e === undefined) {
    document.getElementById('share-modal').classList.remove('open');
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(shareText).then(() => {
    closeShareModal();
    showToast('Copied to clipboard! 📋');
  }).catch(() => {
    closeShareModal();
    showToast('Copy failed — try manually');
  });
}

function shareNative() {
  if (navigator.share) {
    navigator.share({ text: shareText }).catch(() => {});
  } else {
    copyToClipboard();
  }
  closeShareModal();
}

/* =============================================
   PARTY MODE
============================================= */
function renderPartySetup() {
  renderPlayerList();
}

function addPlayer() {
  const input = document.getElementById('player-input');
  const name = input.value.trim();
  if (!name) { showToast('Enter a player name!'); return; }
  if (state.partyPlayers.length >= 8) { showToast('Max 8 players'); return; }
  if (state.partyPlayers.includes(name)) { showToast('Name already added!'); return; }
  state.partyPlayers.push(name);
  input.value = '';
  renderPlayerList();
}

document.getElementById('player-input').addEventListener('keypress', e => {
  if (e.key === 'Enter') addPlayer();
});

function renderPlayerList() {
  const list = document.getElementById('player-list');
  if (state.partyPlayers.length === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:13px;padding:12px;">Add at least 2 players to start</div>`;
    return;
  }
  list.innerHTML = state.partyPlayers.map((p, i) => `
    <div class="player-item">
      <div class="player-avatar">${AVATARS[i % AVATARS.length]}</div>
      <span>${p}</span>
      <button class="player-remove" onclick="removePlayer(${i})">✕</button>
    </div>`).join('');
}

function removePlayer(i) {
  state.partyPlayers.splice(i, 1);
  renderPlayerList();
}

function selectPartyCategory(el) {
  document.querySelectorAll('#party-category-section .category-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.partyCategory = el.dataset.cat;
}

function startPartyGame() {
  if (state.partyPlayers.length < 2) { showToast('Add at least 2 players! 👥'); return; }

  // Build question pool
  let pool = state.partyCategory === 'all'
    ? [...QUESTIONS]
    : QUESTIONS.filter(q => q.cat === state.partyCategory);
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  state.partyQueue = pool;
  state.partyQuestionIndex = 0;
  state.partyTurnIndex = 0;
  state.partyHasChosen = false;
  state.partyScores = {};
  state.partyPlayers.forEach(p => state.partyScores[p] = 0);

  document.getElementById('party-setup').style.display = 'none';
  const gameEl = document.getElementById('party-game');
  gameEl.style.display = 'flex';
  gameEl.classList.remove('hidden');

  loadPartyQuestion();
  renderScoreboard();
}

function loadPartyQuestion() {
  if (state.partyQuestionIndex >= state.partyQueue.length) {
    endPartyGame(); return;
  }
  const q = state.partyQueue[state.partyQuestionIndex];
  const player = state.partyPlayers[state.partyTurnIndex % state.partyPlayers.length];
  const avatarIndex = (state.partyTurnIndex % state.partyPlayers.length) % AVATARS.length;

  state.partyHasChosen = false;

  document.getElementById('party-avatar').textContent = AVATARS[avatarIndex];
  document.getElementById('party-player-name').textContent = player;
  document.getElementById('party-round').textContent = Math.floor(state.partyQuestionIndex / state.partyPlayers.length) + 1;
  document.getElementById('party-question').textContent = q.q;
  document.getElementById('party-emoji-a').textContent = q.emojiA || '⭐';
  document.getElementById('party-label-a').textContent = q.a;
  document.getElementById('party-emoji-b').textContent = q.emojiB || '💫';
  document.getElementById('party-label-b').textContent = q.b;

  // Reset
  document.getElementById('party-choice-a').className = 'choice-card choice-a';
  document.getElementById('party-choice-b').className = 'choice-card choice-b';
  document.getElementById('party-choice-a').style.pointerEvents = 'auto';
  document.getElementById('party-choice-b').style.pointerEvents = 'auto';
  document.getElementById('party-pct-a').classList.remove('visible');
  document.getElementById('party-pct-b').classList.remove('visible');
  document.getElementById('party-fill-a').style.width = '0%';
  document.getElementById('party-fill-b').style.width = '0%';
  document.getElementById('explain-prompt').classList.remove('visible');
  document.getElementById('party-post-actions').style.display = 'none';
  document.getElementById('party-post-actions').classList.add('hidden');
}

function makePartyChoice(side) {
  if (state.partyHasChosen) return;
  state.partyHasChosen = true;

  const q = state.partyQueue[state.partyQuestionIndex];
  const player = state.partyPlayers[state.partyTurnIndex % state.partyPlayers.length];
  const chosenLabel = side === 'a' ? q.a : q.b;
  const pctA = q.pctA + Math.floor(Math.random() * 4 - 2);
  const pctB = 100 - pctA;

  const cardA = document.getElementById('party-choice-a');
  const cardB = document.getElementById('party-choice-b');
  cardA.style.pointerEvents = 'none';
  cardB.style.pointerEvents = 'none';

  if (side === 'a') { cardA.classList.add('chosen-winner'); cardB.classList.add('chosen-loser'); }
  else { cardB.classList.add('chosen-winner'); cardA.classList.add('chosen-loser'); }

  setTimeout(() => {
    document.getElementById('party-pct-a-val').textContent = pctA + '%';
    document.getElementById('party-pct-b-val').textContent = pctB + '%';
    document.getElementById('party-pct-a').classList.add('visible');
    document.getElementById('party-pct-b').classList.add('visible');
    document.getElementById('party-fill-a').style.width = pctA + '%';
    document.getElementById('party-fill-b').style.width = pctB + '%';

    // Explain prompt (random 60% chance)
    if (Math.random() > 0.4) {
      const prompts = [
        `"${player}", explain to the group why you chose "${chosenLabel}". No skipping! 😤`,
        `Everyone disagrees with "${player}"! Defend your choice: "${chosenLabel}" 🔥`,
        `Hot take! "${player}" chose "${chosenLabel}" — explain in 10 seconds or less!`,
        `"${player}", make the group understand why "${chosenLabel}" is obviously correct.`,
        `This is controversial! "${player}" went with "${chosenLabel}". WHY?! 😱`,
      ];
      const prompt = prompts[Math.floor(Math.random() * prompts.length)];
      document.getElementById('explain-text').textContent = prompt;
      document.getElementById('explain-prompt').classList.add('visible');
    }

    document.getElementById('party-post-actions').style.display = 'block';
    document.getElementById('party-post-actions').classList.remove('hidden');
  }, 200);

  // Score points
  state.partyScores[player] = (state.partyScores[player] || 0) + 1;
  renderScoreboard();

  // Track globally
  if (!storage.answered.includes(q.id)) {
    storage.answered.push(q.id);
    storage.totalAnswered++;
    saveStorage();
  }
}

function nextPartyTurn() {
  state.partyTurnIndex++;
  state.partyQuestionIndex++;
  loadPartyQuestion();
  renderScoreboard();
}

function renderScoreboard() {
  const sorted = Object.entries(state.partyScores).sort((a, b) => b[1] - a[1]);
  const medals = ['🥇','🥈','🥉'];
  document.getElementById('scoreboard-rows').innerHTML = sorted.map(([name, score], i) => `
    <div class="score-row">
      <div class="score-rank ${i === 0 ? 'gold' : ''}">${medals[i] || (i + 1)}</div>
      <div class="score-name">${name}</div>
      <div class="score-val">${score} pts</div>
    </div>`).join('');
}

function endPartyGame() {
  const winner = Object.entries(state.partyScores).sort((a, b) => b[1] - a[1])[0];
  showToast(winner ? `🏆 ${winner[0]} WINS with ${winner[1]} pts!` : 'Game over!');
  launchConfetti();
  setTimeout(() => {
    document.getElementById('party-setup').style.display = 'flex';
    document.getElementById('party-game').style.display = 'none';
    state.partyPlayers = [];
    state.partyScores = {};
    renderPlayerList();
  }, 2000);
}

function closeExplainModal() {
  document.getElementById('party-explain-modal').classList.remove('open');
}

/* =============================================
   CONFETTI
============================================= */
function launchConfetti() {
  const colors = ['#ff3c5f', '#3c8aff', '#ffcc00', '#00e587', '#c87aff', '#ff8c00'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}vw;
      width: ${Math.random() * 8 + 6}px;
      height: ${Math.random() * 8 + 6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 2 + 2}s;
      animation-delay: ${Math.random() * 0.5}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

/* =============================================
   TOAST
============================================= */
function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* =============================================
   INIT
============================================= */
function init() {
  loadStorage();
  navigate('home');
}

init();