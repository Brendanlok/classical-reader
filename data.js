/* ══════════════════════════════════════════════════════
   BOOKS — 15 chapters each
══════════════════════════════════════════════════════ */
const BOOKS = {

/* ── 水浒传 ── */
shuihu: {
  id:'shuihu', title:'水浒传', subtitle:'Water Margin', subtitle_zh:'水浒传',
  author:'施耐庵 Shi Nai\'an', dynasty:'元末明初 / Late Yuan – Early Ming',
  color:'#8B1A1A', accent:'#D4A017',
  description:'One of the four great classical novels, chronicling the stories of 108 outlaws who gather at Mount Liang to form a righteous rebel army against corrupt government officials.',
  description_zh:'中国四大名著之一，讲述一百零八位好汉在梁山泊聚义，反抗腐败官府的传奇故事，塑造了替天行道的英雄群像。',
  chapters:[
    {id:1,title:'第一回：张天师祈禳瘟疫，洪太尉误走妖魔',english:'Chapter 1: Zhang Tianshi Prays Against the Plague; Hong Taiwei Releases the Demon Stars',content:`话说大宋仁宗天子在位，嘉祐三年，天下瘟疫盛行，民间病死者甚多。太尉洪信奉旨赍擎御书丹诏，前往江西信州龙虎山，宣请嗣汉天师张真人来朝祈禳。

In the reign of Emperor Renzong of the Song dynasty, plague spread across the land. Grand Marshal Hong Xin was dispatched with an imperial edict to Longhu Mountain to summon the Celestial Master Zhang to court.

洪太尉不听警告，执意开启伏魔之殿。只见一道黑气从穴中滚将起来，掣一道金光，似闪电般向东南方飞去。原来封压在此的，正是一百零八个魔君！

Hong Taiwei ignored all warnings and forced open the Hall of Demon Suppression. A black vapor and a golden flash of light burst out and flew toward the southeast — the 108 demon stars had been released into the world.

自此，天罡三十六星，地煞七十二星，尽皆出世，日后相聚梁山，替天行道，成就了一段可歌可泣的英雄传奇。

From this moment, the 36 Heavenly Spirits and 72 Earthly Fiends were set loose upon the world. One day they would gather at Liangshan, acting on Heaven's behalf — and their legend would move all who heard it.`},

    {id:2,title:'第二回：王教头私走延安府，九纹龙大闹史家村',english:'Chapter 2: Instructor Wang Flees to Yan\'an; Nine-Tattooed Dragon Raises Havoc',content:`史进，身上刺有九条青龙，人称九纹龙，自幼习武，因打伤官军，被迫离家出走，行走江湖。

Shi Jin, nicknamed "Nine-Tattooed Dragon" for the nine green dragons tattooed across his body, had trained in martial arts from childhood. After wounding government soldiers, he was forced to flee his home and take to the roads.

史进与少华山头领朱武、陈达、杨春结为兄弟，后因官府追拿，不得不远走他乡，去寻访师父王进。

Shi Jin allied with the bandit chiefs Zhu Wu, Chen Da, and Yang Chun of Shaohua Mountain. When the authorities came for him, he had no choice but to travel far away to seek his teacher Wang Jin.

史进的遭遇，正是那个时代无数好汉的缩影——本是良善之人，却被黑暗的世道逼上了梁山之路。

Shi Jin's experience was a microcosm of countless heroes of that era — fundamentally good men who were forced onto the outlaw path by a corrupt world.`},

    {id:3,title:'第三回：史大郎夜走华阴县，鲁提辖拳打镇关西',english:'Chapter 3: Shi Da Flees by Night; Major Lu Beats the "Town Tiger"',content:`鲁达在酒楼与史进、李忠饮酒，闻隔壁有啼哭声。问明原委，得知屠户郑屠仗势欺压卖唱父女，强要金翠莲为妾，又索回门钱，弄得父女走投无路。

Lu Da was drinking with Shi Jin and Li Zhong when he heard sobbing next door. Learning that the butcher Zheng was bullying a singing father and daughter — forcing the girl to be his concubine and demanding money back — Lu Da's rage ignited.

鲁达慷慨解囊，替父女还了欠钱，安排他们连夜出城。次日，鲁达来到郑屠肉铺，借口买肉，故意刁难，把郑屠激得勃然大怒。

Lu Da generously paid off their debt, arranged their escape, then went the next day to Zheng's butcher stall. Picking a quarrel over the meat order, he goaded Zheng into fury.

鲁达三拳打死镇关西，从此走上逃亡之路，后在五台山出家为僧，法号智深——花和尚鲁智深由此登上历史舞台。

Three punches killed the "Town Tiger." Lu Da fled, became a monk at Wutai Mountain under the name Zhishen — and so the Flowery Monk Lu Zhishen stepped onto the stage of history.`},

    {id:4,title:'第四回：赵员外重修文殊院，鲁智深大闹五台山',english:'Chapter 4: Steward Zhao Renovates the Temple; Lu Zhishen Causes Havoc at Wutai Mountain',content:`鲁智深在五台山文殊院出家，耐不住清规戒律，屡次下山喝酒闹事，把山门金刚打得粉碎，搅得寺院不得安宁。

Lu Zhishen became a monk at Wutai Mountain but could not endure the monastic rules. He repeatedly went down the mountain to drink, smashing the golden guardian statues and causing havoc in the monastery.

方丈智真长老见他根性顽劣却赤诚真实，赠他偈语四句："遇林而起，遇山而富，遇水而兴，遇江而止。"

The abbot Zhizhen, recognizing Lu's wild but genuine nature, gave him a four-line verse: "Rise when you meet the forest; prosper at the mountain; flourish at the water; stop at the river."

鲁智深当时不解其意，只知拿了推荐信，往东京大相国寺而去。多年后回首，方知那四句话，句句应验，句句是他一生命运的注脚。

Lu Zhishen did not understand. He took the letter of introduction and headed to Daxiangguo Monastery in the capital. Only years later would he see that every line had come true — each a chapter of his destined life.`},

    {id:5,title:'第五回：小霸王醉入销金帐，花和尚大闹桃花村',english:'Chapter 5: Little Hegemon Enters the Tent Drunk; Flowery Monk Causes Havoc at Peach Blossom Village',content:`桃花山上，周通自称小霸王，欲强娶刘太公之女为妻。鲁智深路过，当夜替身坐于洞房中，待周通酒醉而来，趁机痛打了他一顿。

On Peach Blossom Mountain, Zhou Tong — the "Little Hegemon" — intended to forcibly marry Elder Liu's daughter. Lu Zhishen, passing through, sat in the bridal chamber in her place and gave the drunken Zhou Tong a thorough beating.

李忠与周通本是绿林豪杰，经鲁智深一番义正言辞的教训，放了刘太公一家。鲁智深临行前说："大丈夫处世，当扶危济困，岂能以强凌弱！"

Li Zhong and Zhou Tong, hearing Lu Zhishen's righteous lecture, released Elder Liu's family. As he departed, Lu Zhishen said: "A true man should help the weak, not oppress them with strength!"

鲁智深的这番话，道出了梁山好汉的精神内核，也成为整部《水浒传》的道德基石。

These words encapsulated the spirit of the Liangshan heroes and formed the moral bedrock of the entire novel.`},

    {id:6,title:'第六回：花和尚倒拔垂杨柳，豹子头误入白虎堂',english:'Chapter 6: The Flowery Monk Uproots a Willow; The Panther Head Enters the Tiger Hall',content:`鲁智深在大相国寺菜园看守，泼皮们来捣乱，被他一把摁倒两个，其余皆跪地求饶。众人方知这和尚本事了得。

At Daxiangguo Monastery's vegetable garden, some local ruffians came to make trouble. Lu Zhishen seized two of them bare-handed; the rest fell to their knees. Only then did they realize what kind of monk this was.

一日众人围观一棵大垂杨柳，鲁智深当众脱去上衣，双手抱住树干，腰身一挺，竟将那合抱粗的柳树连根拔起！众人目瞪口呆，无不拜服。

One day, with a crowd watching, Lu Zhishen stripped to the waist, wrapped his arms around a great weeping willow, and with one heave of his hips, uprooted the whole tree — roots and all. The crowd was dumbstruck.

此时林冲正在此处与妻子游玩，见状与鲁智深结识，引为知己。两人一见如故，却不知一场大祸正悄然降临——高太尉之子高衙内，正觑觎林冲之妻……

At this moment Lin Chong was strolling there with his wife and became acquainted with Lu Zhishen. The two became fast friends — not knowing that disaster was coming. Gao Qiu's wicked son had already set his eyes on Lin Chong's wife.`},

    {id:7,title:'第七回：林教头刺配沧州道，鲁智深大闹野猪林',english:'Chapter 7: Instructor Lin Is Exiled; the Flowery Monk Saves Him at Wild Boar Forest',content:`高衙内觑觎林冲之妻，高俅设计陷害林冲，以"误入白虎节堂"之罪将其刺配沧州。押解途中，董超、薛霸受人指使，要在野猪林将林冲杀死。

Gao Qiu's adoptive son lusted after Lin Chong's wife. Gao Qiu framed Lin Chong for "trespassing in the Tiger Hall" and had him branded and exiled to Cangzhou. The two guards escorting him were secretly ordered to kill him at Wild Boar Forest.

两个公人将林冲绑在树上，举起棍来，正要打下去，猛听得一声雷鸣般的大喝，鲁智深从树后跳出，铁禅杖一格，那棍子飞去九霄云外。

The guards tied Lin Chong to a tree and raised their clubs to strike — when a voice like thunder roared out and Lu Zhishen leaped from behind the trees. His iron staff knocked their weapons into the sky.

鲁智深护送林冲一程，临别时含泪道："兄弟，此去沧州，多保重！"林冲望着这豪迈的花和尚背影，心中百感交集。义气，有时比骨肉更真。

Lu Zhishen escorted Lin Chong part of the way. At parting he said, tears in his eyes: "Brother, take care of yourself in Cangzhou!" Lin Chong watched the Flowery Monk's broad back recede. True brotherhood is sometimes deeper than blood.`},

    {id:8,title:'第八回：柴进门招天下客，林冲棒打洪教头',english:'Chapter 8: Chai Jin Welcomes All Heroes; Lin Chong Defeats Instructor Hong',content:`林冲发配沧州，途经柴进庄上。柴进乃是周世宗后裔，向来仗义疏财，广招天下豪杰。林冲在此得以暂歇，受到款待。

Exiled to Cangzhou, Lin Chong stopped at the estate of Chai Jin — a descendant of the Zhou dynasty who was famous for generosity and for sheltering heroes from across the land.

庄上有个教头洪教头，自视甚高，认为林冲不过是个发配犯人，故意刁难挑衅，要与林冲比武。柴进为了助兴，当场押注。

A martial arts instructor named Hong lived there and, contemptuous of the exiled prisoner, challenged Lin Chong to a bout. Chai Jin put up a wager to make it interesting.

林冲谦逊退让，洪教头步步紧逼。林冲忽然发力，棒扫洪教头腿弯，将其打翻在地。柴进哈哈大笑："果然是八十万禁军教头，名不虚传！"

Lin Chong endured calmly, then suddenly exploded into action — sweeping Hong's legs and sending him crashing to the ground. Chai Jin laughed heartily: "Truly worthy of the name — Instructor of the Imperial Guard!"

这一棒，打出了林冲的真实身份，也打出了压抑在他心中的那口气。英雄，从不因处境落魄而丧失本色。

That single blow revealed Lin Chong's true caliber — and released some of the rage compressed inside him. A true hero never loses his edge, no matter how low his circumstances.`},

    {id:9,title:'第九回：林教头风雪山神庙，陆虞候火烧草料场',english:'Chapter 9: Lin Chong at the Mountain God Temple in Snow; The Informer Burns the Hay Store',content:`林冲在沧州草料场看守。一夜大雪压塌了住所，林冲只好去附近山神庙避风。

Lin Chong was assigned to guard the hay and fodder depot at Cangzhou. One night, heavy snow collapsed his shelter, and he took refuge in a nearby Mountain God Temple.

朦胧中，林冲听到门外有人谈话，才知陆谦等人奉高俅之命，放火烧了草料场，要置他于死地。

Half asleep, Lin Chong heard voices outside. He realized that his old "friend" Lu Qian and the others, on Gao Qiu's orders, had set fire to the hay depot to kill him.

林冲推开庙门，手提花枪，将三人一一杀死，大雪之中，仰天长啸："高俅！我林冲与你不共戴天！"就此奔上梁山。

Lin Chong burst from the temple, lance in hand, and killed all three men. In the falling snow, he roared to the sky: "Gao Qiu — we cannot live under the same sky!" He headed for Liangshan.

这一场雪夜逃奔，是林冲故事中最悲壮的一页。好人被逼成了杀人犯，清白被迫换成了亡命——这就是那个腐朽时代的残酷逻辑。

This desperate flight through the snow was the most tragic chapter of Lin Chong's story. A good man forced into killing; innocence traded for survival — this was the brutal logic of a rotten age.`},

    {id:10,title:'第十回：吴用智取生辰纲，晁盖聚义东溪村',english:'Chapter 10: Wu Yong\'s Plot to Seize the Birthday Convoy; Chao Gai Gathers Heroes',content:`大名府留守梁中书，每年为岳父蔡京生日送去金珠宝贝，称为"生辰纲"。智多星吴用与晁盖定计，在黄泥冈以蒙汗药酒将押送官军迷倒，劫了生辰纲。

Every year, the prefect Liang Zhongshu sent a birthday convoy of gold and jewels to his father-in-law Cai Jing. Strategist Wu Yong and Chao Gai devised a scheme: at Yellow Earth Ridge, they drugged the guards' wine with knockout powder and seized the convoy.

七星聚义——晁盖、吴用、公孙胜、刘唐、阮小二、阮小五、阮小七七人，从此踏上了聚义梁山的道路。

The Seven Stars united: Chao Gai, Wu Yong, Gongsun Sheng, Liu Tang, and the three Ruan brothers — from this moment they were bound for Liangshan.

吴用此计，用的是"声东击西"之法，以卖枣商人为掩护，暗中调包。这场精心策划的劫案，充分展示了吴用的过人智谋，也成为《水浒传》中最精彩的情节之一。

Wu Yong's scheme used the stratagem of misdirection, disguising the robbers as date merchants. This meticulously planned heist showcased Wu Yong's brilliance and became one of the novel's most celebrated episodes.`},

    {id:11,title:'第十一回：宋江杀阎婆惜，梁山好汉添新丁',english:'Chapter 11: Song Jiang Kills Yan Poxi; New Heroes Join Liangshan',content:`宋江，郓城县押司，为人仗义，外号"及时雨"。他私放了晁盖等人，事后又因阎婆惜以此要挟，怒从心头起，一时失手将她杀死。

Song Jiang, a county clerk in Yuncheng nicknamed "Timely Rain" for his generosity, had secretly released Chao Gai's group. Later, his mistress Yan Poxi threatened to expose him; in a moment of rage he killed her.

宋江由此刺配江州，途中广结英雄，将自己"仗义疏财"的名声传遍天下。押解途中各处，皆有好汉以礼相待。

Song Jiang was branded and exiled to Jiangzhou. Along the way he befriended heroes everywhere, his reputation for generosity spreading across the land. Everywhere he was treated with respect.

宋江在浔阳楼酒后题写反诗，被黄文炳察觉，险些丧命。幸得梁山好汉及时劫法场，救下宋江，并打破了江州城，从此宋江正式上了梁山。

Drunk at Xunyang Tower, Song Jiang wrote seditious verses that were reported to the authorities. He nearly lost his head — but the Liangshan heroes stormed the execution ground in time and fought their way out, and Song Jiang finally ascended Mount Liang.`},

    {id:12,title:'第十二回：武松景阳冈打虎，威震阳谷县',english:'Chapter 12: Wu Song Kills the Tiger at Jingyang Ridge; His Fame Shakes Yanggu County',content:`武松回乡探兄，途经景阳冈，店家苦劝莫过冈，告知山上有只吃人猛虎，武松不信，连饮十八碗烈酒，执意上山。

Returning home to see his brother, Wu Song passed Jingyang Ridge. The innkeeper begged him not to cross — a man-eating tiger prowled the mountain. Wu Song laughed it off, drank eighteen bowls of strong wine, and headed up alone.

夜色朦胧中，那猛虎猛地从石后跳出。武松大吃一惊，随即镇定，侧身闪过，抓住老虎的顶花皮，用尽平生气力，往地下死命地按。

In the dim light the tiger suddenly leaped from behind a rock. Wu Song recoiled — then steadied himself. He dodged sideways, seized the tiger by the scruff, and with every ounce of his strength drove it into the ground.

武松抡起哨棒，将那猛虎活活打死。消息传开，阳谷县万人空巷，武松被知县奉为英雄，县民无不称颂。从此，"武松打虎"成为中国文化中力量与英雄主义的永恒象征。

Wu Song beat the tiger to death with his club. The news spread and Yanggu County turned out en masse. The magistrate honored him as a hero. From this day, "Wu Song Killing the Tiger" became an eternal symbol of strength and heroism in Chinese culture.`},

    {id:13,title:'第十三回：武松醉打蒋门神，夺回快活林',english:'Chapter 13: Wu Song Beats Jiang Menshen Drunk; Reclaiming Happy Forest',content:`武松因兄长武大郎被潘金莲与西门庆毒杀，手刃仇人为兄报仇，被刺配孟州。在孟州，结识了施恩，得知蒋门神仗势夺了施恩的快活林酒店。

After his brother Wu Dalang was poisoned by his wife Pan Jinlian and her lover Ximen Qing, Wu Song killed them both in revenge and was exiled to Mengzhou. There he befriended Shi En, whose tavern "Happy Forest" had been seized by the bully Jiang Menshen.

武松自请为施恩报仇。沿途每过一家酒店便喝上三碗，待到蒋门神处，已是醉态十足。然而武松是越喝越精神——"无三不过望"，此乃武松打虎之后江湖人送的称号。

Wu Song volunteered for revenge. He drank three bowls at every tavern along the way, arriving at Jiang Menshen's place thoroughly drunk — yet Wu Song was one who sharpened with drink.

武松一个"玉环步，鸳鸯脚"，将蒋门神踢翻在地，踏在脚下。蒋门神这庞然大物，竟被打得求饶连连。施恩夺回了快活林，武松义薄云天的名号，再度响彻江湖。

Wu Song deployed his "Jade Ring Steps and Mandarin Duck Kick," sent Jiang Menshen crashing down, and stood on him. The giant begged for mercy. Shi En reclaimed his tavern, and Wu Song's fame as a man of honor rang across the land again.`},

    {id:14,title:'第十四回：三打祝家庄，吴用用计破连环',english:'Chapter 14: Three Attacks on Zhu Manor; Wu Yong\'s Scheme to Break the Linked Defense',content:`祝家庄三打难破，全因庄内有盘陀路（迷路阵），梁山军屡次迷路。吴用定计，安排人内应，从祝家庄内取得了布阵图。

The Liangshan army attacked Zhu's Manor three times without success — the manor's labyrinthine paths confused every assault. Wu Yong devised a plan: plant an informer inside to obtain the map of the maze.

第三次进攻，得了地图，梁山好汉打开局面，石秀里应外合，孙立诈降为内应。宋江大军长驱直入，祝家庄终被攻破。

On the third assault, with the map in hand, Liangshan opened a path. Shi Xiu attacked from within while Sun Li pretended to defect as a spy. Song Jiang's forces poured in and Zhu's Manor finally fell.

三打祝家庄，充分体现了宋江用兵之稳、吴用谋略之深。这场战役也使梁山的声威大振，天下豪杰纷纷来投。

The three battles showed Song Jiang's patient generalship and Wu Yong's deep strategy. The campaign greatly expanded Liangshan's reputation, drawing heroes from across the land.`},

    {id:15,title:'第十五回：梁山泊英雄大聚义，忠义堂排座次',english:'Chapter 15: The Grand Assembly of Heroes at Liangshan; The Seating Order at the Hall of Loyalty and Righteousness',content:`梁山一百零八将聚齐，宋江召集众头领，于聚义厅前立起"替天行道"的杏黄旗，依天文石碣上镌刻的名次，排定座位：宋江为首，卢俊义为二，吴用为三……

All 108 heroes gathered at Liangshan. Song Jiang assembled the chieftains before the Hall of Loyalty and Righteousness and raised the golden banner reading "Act on Heaven's Behalf." Following the names inscribed on the stone tablet, the seating order was set: Song Jiang first, Lu Junyi second, Wu Yong third…

天罡三十六员、地煞七十二员，各按星位就座。大宴三日，欢声雷动，四方皆闻。

The 36 Heavenly Spirits and 72 Earthly Fiends each took their star-allotted seat. The feast lasted three days; cheers shook the mountain and echoed across the land.

此乃《水浒传》的高光时刻，英雄们短暂地共享着属于他们的荣耀与自由。然而招安的阴影已开始笼罩，属于这些好汉的黄金时代，正在悄然落幕。

This was the glorious peak of Water Margin — the heroes briefly sharing their hard-won glory and freedom. Yet the shadow of imperial pacification was already falling. The golden age of these outlaws was quietly drawing to its close.`},
  ],
},

/* ── 西游记 ── */
xiyou: {
  id:'xiyou', title:'西游记', subtitle:'Journey to the West', subtitle_zh:'西游记',
  author:'吴承恩 Wu Cheng\'en', dynasty:'明 / Ming Dynasty',
  color:'#1A4A8B', accent:'#F5A623',
  description:'The epic tale of the monk Tang Sanzang and his three disciples as they travel from China to India to retrieve sacred Buddhist scriptures, battling demons along the way.',
  description_zh:'讲述唐僧师徒四人西天取经、历经九九八十一难的奇幻旅程，是中国文学中最伟大的神魔小说，孙悟空是中国文化中的标志性英雄形象。',
  chapters:[
    {id:1,title:'第一回：灵根育孕源流出，心性修持大道生',english:'Chapter 1: The Divine Stone Produces a Monkey; The Way of the Heart Is Cultivated',content:`诗曰：混沌未分天地乱，茫茫渺渺无人见。自从盘古破鸿蒙，开辟从兹清浊辨。

A verse: Before chaos was divided, heaven and earth were confused; vast and boundless, with no man to see. Since Pangu broke through the primordial murk, clarity and turbidity were distinguished.

东胜神洲，花果山顶，有一块仙石，自开辟以来，每受天真地秀，日精月华，感之既久，遂有灵通之意，一日迸裂，产一石卵，因见风化成一个石猴。

On Flower-Fruit Mountain in the eastern continent, a magic stone had absorbed the essence of heaven and earth and the spirit of the sun and moon since the beginning of creation. One day it cracked open and produced a stone egg that transformed in the wind into a stone monkey.

那猴子眼睛里射出两道金光，直冲斗府。石猴生来便与众不同——他无父无母，天生地长，却具备了超凡的灵性，日后将搅动三界，让天宫都为之震颤。

The monkey's eyes shot two golden beams of light straight to the Jade Emperor's court. Born with no father or mother, sprung from nature itself, he already possessed extraordinary spiritual awareness — and would one day shake all three realms, making even Heaven tremble.`},

    {id:2,title:'第二回：悟彻菩提真妙理，断魔归本合元神',english:'Chapter 2: Comprehending Bodhi\'s Wondrous Truth; Severing Demons, Returning to the Origin',content:`孙悟空历经艰辛，漂洋过海，拜灵台方寸山斜月三星洞菩提祖师为师。祖师为他取名"孙悟空"，传授了七十二般变化与筋斗云。

After a long sea voyage, the Monkey King found the cave of Patriarch Bodhi and became his student. The Patriarch named him "Sun Wukong" (Awakened to Emptiness) and taught him the 72 transformations and the cloud somersault.

祖师曰："你这猢狲，学哪一门？显字门——弄宝贝、踢弄丸，皆是虚幻；静字门——坐禅，枯坐千年也无益。我传你'长生之道'，你意下如何？"

The Patriarch said: "Monkey, which path will you study? 'Show' — juggling treasures, all illusions. 'Still' — sitting in meditation, useless for a thousand years. I will teach you the Way of Immortality — what do you say?"

悟空大喜拜谢。祖师又传他筋斗云：一个筋斗，足足翻越十万八千里——正与取经之路相合。后因悟空炫耀本事，祖师逐他出山，此后不得再提自己的师门。

Wukong was overjoyed. The Patriarch also taught him the cloud somersault: one flip covers 108,000 li — exactly the distance of the pilgrimage to come. But when Wukong showed off his powers, the Patriarch expelled him, forbidding him ever to name his master.`},

    {id:3,title:'第三回：四海千山皆拱伏，九幽十类尽除名',english:'Chapter 3: All Under Heaven Submits; Names Struck from the Rolls of the Underworld',content:`孙悟空大闹东海龙宫，威逼龙王献出了定海神针——如意金箍棒，重达一万三千五百斤，可随心变化大小。又去地府，将猴类从生死册上勾去，猴族自此不在阎王管辖之内。

Sun Wukong stormed the Dragon Palace of the East Sea and bullied the Dragon King into surrendering the pillar that steadied the sea — the As-You-Will Gold-Banded Staff, weighing 13,500 jin, able to grow or shrink at will. Then he descended to Hell and struck all monkeys' names from the Register of Life and Death.

消息传到天庭，玉皇大帝大惊，太白金星建议招安，封悟空为"弼马温"，主管天马，以安其心。

News reached Heaven. The Jade Emperor, alarmed, heeded the advice of the Grand White Planet Venus and recruited Wukong with the title "Keeper of Heavenly Horses," hoping to placate him.

悟空赴任后，得知弼马温不过是个不入品的小官，怒而下界，高竖"齐天大圣"旗号，宣告与天庭的对抗。一场旷世大闹，就此拉开帷幕。

When Wukong learned that "Keeper of Heavenly Horses" was not even a ranked position, he furiously descended to earth, raised the banner of "Great Sage Equal to Heaven," and declared war on the celestial court. The great havoc was about to begin.`},

    {id:4,title:'第四回：官封弼马心何足，名注齐天意未宁',english:'Chapter 4: Titled Keeper of Horses but the Heart Is Not Content; Named Equal to Heaven, the Will Is Not at Peace',content:`玉帝无奈，再度招安，封孙悟空为"齐天大圣"，建大圣府，却无实职。悟空又被委任看守蟠桃园——偏偏这正是他的心头好。

With no alternative, the Jade Emperor offered another compromise: the title "Great Sage Equal to Heaven," a mansion, and no duties. Wukong was also assigned to watch over the Garden of Immortal Peaches — which happened to be exactly what he loved most.

悟空在蟠桃园中大吃特吃，后又在王母娘娘蟠桃宴上偷吃酒食，又误入太上老君炼丹炉，将炉中丹药悉数吃下，练就了铜皮铁骨、火眼金睛。

In the garden Wukong ate his fill of peaches, crashed the Peach Banquet, and accidentally stumbled into Lord Laozi's furnace — where he ate all the divine pills and forged his body into bronze skin and iron bones, and his eyes into the "fiery golden eyes" that can see through all illusions.

玉帝大怒，发十万天兵捉拿悟空，却奈何不得。众神束手无策，只好请来如来佛祖出面。这场大闹天宫，成为中国文学史上最震撼人心的反抗权威的故事。

The Jade Emperor sent 100,000 heavenly soldiers, but none could subdue Wukong. At their wits' end, the gods summoned the Buddha Tathagata. This "Havoc in Heaven" became the most electrifying story of rebellion against authority in all of Chinese literature.`},

    {id:5,title:'第五回：乱蟠桃大圣偷丹，反天宫诸神捉怪',english:'Chapter 5: The Great Sage Steals Pills; the Gods Capture the Monster',content:`如来佛祖亲临，与孙悟空打赌：悟空若能跳出如来的手掌，便让他坐天庭宝座。悟空一个筋斗翻出十万八千里，提笔在一根擎天大柱上写下"齐天大圣到此一游"。

The Buddha came in person and offered a bet: if Wukong could leap out of his palm, the throne of Heaven would be his. Wukong somersaulted 108,000 li and wrote "The Great Sage Equal to Heaven Was Here" on what he thought was one of the pillars holding up the sky.

悟空回到掌心，如来展开手掌，那五根手指早已化作了五行山！悟空写字的"大柱"，不过是如来的中指。

When Wukong returned to the palm, the Buddha opened his hand — and the five fingers had already become Five Elements Mountain! The "pillar" where Wukong had written was simply the Buddha's middle finger.

悟空被压在山下，如来告诉他："五百年后，自有人来救你。" 一段五百年的等待就此开始，而一段取经的传奇，也在命运的深处悄然孕育。

Wukong was sealed under the mountain. The Buddha told him: "In five hundred years, someone will come to rescue you." Five hundred years of waiting began — and deep within fate, the legend of the scripture quest was quietly taking shape.`},

    {id:6,title:'第六回：观音奉旨寻取经人，猪八戒高老庄招亲',english:'Chapter 6: Guanyin Seeks the Scripture Pilgrim; Zhu Bajie Courts a Wife at Gao Village',content:`观音菩萨奉如来法旨，往东土寻访取经之人。途中收伏了蛟龙（后化为白龙马）、猪八戒和沙悟净，并告知孙悟空五行山下的消息：取经人到来，他自可得救。

Guanyin Bodhisattva, on the Buddha's command, traveled east to find a scripture pilgrim. Along the way she subdued a dragon (later transformed into the White Dragon Horse), Zhu Bajie, and Sha Wujing, and told Wukong under Five Elements Mountain that the pilgrim was coming.

猪八戒本是天蓬元帅，因醉酒调戏嫦娥，被贬下凡，错投猪胎。他在高老庄入赘，靠着勤劳赢得了高家的认可，却因妖怪面目吓跑了村民。

Zhu Bajie had been Marshal Tian Peng in Heaven, banished for drunkenly harassing the Moon Goddess and reincarnated mistakenly in a pig body. He had settled at Gao Village as a live-in son-in-law, working hard — but his monster face terrified the villagers.

观音指点唐僧收了八戒为徒。八戒虽贪吃好色、经常偷懒，却也有憨厚可爱的一面，成为取经团队中最具喜剧色彩的角色，令无数读者喜爱。

Guanyin directed Tang Monk to take Bajie as a disciple. Though greedy, lazy, and lecherous, Bajie had an endearing simplicity that made him the most comically lovable character of the pilgrimage — beloved by readers for centuries.`},

    {id:7,title:'第七回：流沙河界悟净收伏，白龙马驮僧西行路',english:'Chapter 7: Sha Wujing Is Subdued at the River of Sands; The White Dragon Horse Carries the Monk West',content:`唐僧师徒行至流沙河，河中妖怪沙悟净阻路。悟空与沙僧大战，难以取胜。观音菩萨出面，以项下骷髅九个变成法船，方才渡过。

The pilgrims reached the River of Flowing Sands, where the monster Sha Wujing blocked their path. Wukong and Sha Wujing fought fiercely. Guanyin appeared and used the nine skulls around Sha's neck to form a raft, enabling the crossing.

沙悟净本是卷帘大将，因失手打碎了玻璃盏，被贬下凡，在流沙河受苦。他皈依佛门，成为取经团队中最沉默、最踏实的成员，忠诚可靠，无怨无悔。

Sha Wujing had been the Curtain-Raising General, banished for accidentally breaking a crystal glass. He joined the pilgrimage as its most silent and steadfast member — loyal, dependable, and uncomplaining.

师徒四人加一匹白龙马，取经的队伍正式集结完毕。这支奇特的队伍——一个圣僧、一个猴王、一头猪、一个沙僧、一匹龙马——踏上了通往西方极乐世界的漫漫长路。

With the four pilgrims and the White Dragon Horse, the team was complete. This strange band — a holy monk, a Monkey King, a pig, a sand monk, and a dragon horse — set out on the long road to the Western Paradise.`},

    {id:8,title:'第八回：孙行者大闹五庄观，镇元子赶捉取经僧',english:'Chapter 8: Sun Wukong Causes Havoc at Five Villages Temple; Zhen Yuanzi Pursues the Pilgrims',content:`师徒路过万寿山五庄观，观主镇元大仙不在，两个徒弟款待了唐僧师徒。观中有棵人参果树，吃一颗可延寿四万七千年。猪八戒偷了三颗，师徒分食。

The pilgrims passed through Five Villages Temple on Longevity Mountain. The master, the Great Immortal Zhen Yuan, was away; two disciples hosted them. The temple had a ginseng tree whose fruit could extend life by 47,000 years. Zhu Bajie secretly picked three fruits and the pilgrims ate them.

事情败露，悟空慌中推倒了那棵宝树。镇元大仙回来大怒，将唐僧师徒一并拿住。悟空先后请来观音、东华帝君、寿星，皆无法救活宝树。最终还是观音以玉净瓶中的甘露，将人参果树救活。

When discovered, Wukong in panic toppled the precious tree. Zhen Yuan returned in fury and captured all the pilgrims. Wukong sought help from Guanyin, the Emperor of the East, and the God of Longevity — none could revive the tree. Finally Guanyin used the dew from her jade vase to restore it.

镇元大仙大喜，与孙悟空结为兄弟，放他们西行。这一段，尽显孙悟空知错就改、勇于担当的豪爽性格。

Zhen Yuan, delighted, swore brotherhood with Sun Wukong and released the pilgrims. This episode showcased Wukong's willingness to take responsibility and his bold, direct character.`},

    {id:9,title:'第九回：尸魔三戏唐三藏，圣僧恨逐美猴王',english:'Chapter 9: The Bone Demon Tricks Tang Monk Three Times; The Holy Monk Expels the Monkey King',content:`白骨夫人是一具白骨成精，变化为少女、老妇、老翁三次接近唐僧，每次都被悟空的火眼金睛识破，一棒打死——然而妖精有分身之法，真身逃脱，留下假尸迷惑唐僧。

The White Bone Demon, a skeleton spirit, transformed three times — as a young woman, an old mother, and an old father — to approach Tang Monk. Each time Wukong's fiery golden eyes saw through the disguise and his staff struck her down. But the demon used a body-substitution technique, escaping each time and leaving a false corpse to fool Tang Monk.

猪八戒趁机进谗，唐僧大怒，以为悟空滥杀无辜，当众念起紧箍咒，又写了贬书，将悟空赶回花果山。

Zhu Bajie seized the moment to slander Wukong. Tang Monk, convinced Wukong had killed innocents, recited the headband spell to punish him, then wrote a letter of dismissal and sent him back to Flower-Fruit Mountain.

悟空含泪接了贬书，拜了三拜，含冤离去。此情此景，令无数读者唏嘘：一个忠心护主的英雄，被昏聩的主公所误。然而悟空对师父的情义，始终未曾改变。

Wukong accepted the dismissal letter in tears, bowed three times, and departed with his grievance unspoken. This moment has moved countless readers: a loyal hero wronged by an uncomprehending master. Yet Wukong's devotion never wavered.`},

    {id:10,title:'第十回：女儿国留难，唐僧心志坚定',english:'Chapter 10: Detained in the Women\'s Kingdom; Tang Monk\'s Resolve Holds Firm',content:`师徒行至西梁女儿国，此国全是女子，无男性居民，饮子母河之水便可受孕。国王见唐僧仪表堂堂，欲招其为夫，许以半壁江山。

The pilgrims arrived in the Women's Kingdom of Xiliang, a land of only women where drinking from the Mother-and-Child River caused pregnancy. The queen, captivated by Tang Monk's noble appearance, offered him half the kingdom and herself as queen-consort.

唐僧虽面对美色金银，心志始终如铁。他与悟空商议，以假意应允为缓兵之计，换取通关文牒，以便继续西行。

Though confronted with beauty and riches, Tang Monk's resolve remained iron-hard. He and Wukong devised a scheme: appear to agree as a delaying tactic, obtain the travel documents, and then continue west.

女王深情痴痴望着唐僧远去的背影，潸然泪下。这一段，是《西游记》中少有的情感细腻之笔，令人动容——有时，最深的遗憾，不是得不到，而是本可以拥有，却必须放手。

The queen watched Tang Monk's retreating figure through tears. This episode is one of the novel's most emotionally nuanced passages — sometimes the deepest regret is not failing to obtain something, but having to let go of something you could have kept.`},

    {id:11,title:'第十一回：真假美猴王，六耳猕猴乱真',english:'Chapter 11: The True and False Monkey King; the Six-Eared Macaque Creates Chaos',content:`有一妖猴，名六耳猕猴，法力与悟空不相上下，偷袭打倒唐僧，抢了通关文牒，欲自己去取经，成就正果。他变化成悟空模样，连唐僧、猪八戒、沙悟净都无法分辨。

A demon monkey — the Six-Eared Macaque — with powers equal to Wukong's, ambushed Tang Monk, stole the travel papers, and intended to go fetch the scriptures himself and claim the glory. He transformed perfectly into Wukong's likeness; even Tang Monk, Zhu Bajie, and Sha Wujing could not tell them apart.

两个悟空从花果山打到南海，从南海打到灵山，从灵山打到地府，阎王的照妖镜也看不出真假，地藏王菩萨的谛听听了也不敢说出答案。

The two Wukongs fought from Flower-Fruit Mountain to the South Sea, to Spirit Mountain, to the Underworld. The King of Hell's demon-detecting mirror could not tell them apart; the Bodhisattva Ksitigarbha's all-hearing lion heard the truth but dared not speak it.

最终如来道破真相——那六耳猕猴，其实是悟空心中邪念的外化，心魔现形。真悟空一棒将其打死，归来后更加坚定地走上取经之路。此后心志如金，再无二念。

Finally the Buddha revealed the truth: the Six-Eared Macaque was the externalization of Wukong's own inner demons. The real Wukong killed it with his staff. Returning to the pilgrimage, his resolve became unshakeable as gold — never again divided.`},

    {id:12,title:'第十二回：火焰山阻路，借芭蕉扇灭火',english:'Chapter 12: The Flaming Mountain Blocks the Way; Borrowing the Banana Fan to Quench the Fire',content:`师徒西行，前路被火焰山所阻，山上烈火终年不熄，八百里火海，连鸟都飞不过。欲灭此火，须向铁扇公主借芭蕉扇。铁扇公主正是红孩儿之母，与悟空有旧仇，拒不借扇。

The pilgrims were blocked by the Flaming Mountain — 800 li of eternal fire that no bird could cross. To quench it they needed the Banana Palm Fan from Princess Iron Fan, mother of Red Boy — who bore a grudge against Wukong and refused.

悟空三借芭蕉扇：第一次被假扇所骗，反而火势更大；第二次变成小虫钻进铁扇公主肚中，逼她交出真扇；第三次请来牛魔王……最终借助天兵之助，用真扇扑灭了火焰山。

Wukong tried three times: first tricked by a fake fan that made the fire worse; second he shrank to a bug and crawled inside the Princess's stomach to force the real fan; the third attempt involved the Bull Demon King. Finally, with heavenly soldiers' help, the true fan extinguished the Flaming Mountain.

此番经历，说明有时成功不在于蛮力，而在于坚持与创意。孙悟空屡败屡战、不屈不挠的精神，正是这部小说最动人的品格。

This episode shows that success sometimes comes not from brute force but from persistence and creativity. Wukong's refusal to give up despite repeated failure is the most inspiring quality of this great novel.`},

    {id:13,title:'第十三回：盘丝洞七蛛精，悟空降妖救师',english:'Chapter 13: Seven Spider Demons at the Silk Cave; Wukong Defeats the Demons',content:`师徒行至盘丝岭盘丝洞，七个蜘蛛精幻化成美女，将唐僧诓入洞中，以丝网将他捆缚。悟空寻来，与七蛛精大战。

At Gossamer Cave, seven spider demons transformed into beautiful women and lured Tang Monk inside, binding him with silk threads. Wukong came to the rescue and fought the seven demons.

蜘蛛精们拔出肚脐处的丝线，化成万道金光，将悟空团团缠住。悟空幸而得到多目怪的师父毗蓝婆菩萨相助，用绣花针将蜘蛛丝一一挑断，方才解围。

The spider demons pulled silk from their navels, weaving it into blinding golden threads that bound Wukong completely. He was only saved with the help of the Bodhisattva Pilan, who used an embroidery needle to break every thread.

这一回告诉我们，世间有些束缚，蛮力无法挣脱，唯有借助更高的智慧与外力方能解脱。人生何尝不是如此？

This episode tells us: some bonds cannot be broken by force alone — only with greater wisdom or unexpected help from outside. Is life not much the same?`},

    {id:14,title:'第十四回：灵山大雷音寺，取得真经大功成',english:'Chapter 14: The Great Thunder Monastery on Spirit Mountain; the Scriptures Are Obtained',content:`历经九九八十一难，唐僧师徒终于抵达西天灵山大雷音寺。如来佛祖升座，向他们传授了五千零四十八卷真经。

After 81 trials, the pilgrims at last arrived at the Great Thunder Monastery on Spirit Mountain. The Buddha Tathagata ascended his throne and bestowed upon them 5,048 volumes of Buddhist scriptures.

然而阿难、迦叶两位尊者，索取人事（贿赂）不成，暗地里将那经书换成了无字白卷。唐僧发现，再上灵山，如来却笑而不语："无字真经，才是真经，因为真理无需文字承载。"

However, the disciples Ananda and Kashyapa — denied their "gift" — secretly replaced the scriptures with blank volumes. Tang Monk discovered the fraud and returned to Spirit Mountain. The Buddha smiled: "The wordless scriptures are the true scriptures — for Truth needs no words."

最终，有字真经被取回，师徒四人各得正果——唐僧成旃檀功德佛，悟空成斗战胜佛，八戒成净坛使者，沙僧成金身罗汉，白龙马成八部天龙。

In the end the written scriptures were also obtained. Each pilgrim achieved enlightenment: Tang Monk became Sandalwood Merit Buddha, Wukong became Victorious Fighting Buddha, Bajie became the Pure Altar Envoy, Sha Wujing became the Golden Body Arhat, and the White Dragon Horse became a Heavenly Dragon.`},

    {id:15,title:'第十五回：功德圆满成正果，大道归真万古传',english:'Chapter 15: Full Merit Achieved, All Attain Nirvana; The Great Way Endures for All Ages',content:`取经功德圆满，唐僧师徒被如来封赐，各自飞升。孙悟空紧箍儿自动消去——那个曾经桀骜不驯的石猴，在历经九九八十一难后，真正觉悟，成为斗战胜佛。

With the merit of the scripture quest complete, the pilgrims received their titles and ascended. Sun Wukong's golden headband vanished of itself — the once-defiant stone monkey, after 81 trials, had truly awakened, becoming the Victorious Fighting Buddha.

悟空对唐僧说："师父，这金箍儿已然没了，我要走了。" 唐僧含泪答道："悟空，你我历经多少风雨，才走到今天。所谓西天取经，其实是你我各自的修行。"

Wukong said to Tang Monk: "Master, the headband is gone. I must go." Tang Monk replied through tears: "Wukong, how much have we weathered together to reach this day? The pilgrimage to the west was, in truth, each of our own cultivation."

《西游记》的终极意义，不在于取到了多少经书，而在于师徒四人各自经历的心路历程——降服心魔，超越自我，方是真正的"西天"。人生的旅途，何处不是取经路？

The ultimate meaning of Journey to the West is not the number of scriptures obtained, but the inner journey each pilgrim made — subduing the demons of the heart, transcending the self. That is the true "Western Paradise." On life's road, is not every path a pilgrimage?`},
  ],
},

/* ── 三国演义 ── */
sanguoyanyi: {
  id:'sanguoyanyi', title:'三国演义', subtitle:'Romance of the Three Kingdoms', subtitle_zh:'三国演义',
  author:'罗贯中 Luo Guanzhong', dynasty:'元末明初 / Late Yuan – Early Ming',
  color:'#2D5A1B', accent:'#C0392B',
  description:'A historical novel set in the turbulent years near the end of the Han dynasty, following the fates of warlords Liu Bei, Cao Cao, and Sun Quan as they struggle to unify China.',
  description_zh:'以东汉末年至三国归晋为背景，描绘了刘备、曹操、孙权等英雄人物逐鹿天下的史诗故事，被誉为"七分史实，三分演义"。',
  chapters:[
    {id:1,title:'第一回：宴桃园豪杰三结义，斩黄巾英雄首立功',english:'Chapter 1: Three Heroes Swear Brotherhood in the Peach Garden; First Merit Against the Yellow Turbans',content:`话说天下大势，分久必合，合久必分。

It is a universally acknowledged truth: the empire, long divided, must unite; long united, must divide.

刘备见榜文叹息，张飞大声道："大丈夫不与国家出力，何故长叹！"两人在酒馆又结识了关羽，三人在张飞桃园结义，焚香立誓："不求同年同月同日生，但愿同年同月同日死。生死相从，违者天诛地灭！"

Liu Bei sighed over the posted notice. Zhang Fei demanded: "Why does a real man sigh instead of serving his country!" In a tavern they met Guan Yu. The three swore brotherhood in Zhang Fei's peach garden: "We do not ask to be born on the same day, but we wish to die on the same day. If any breaks this oath, may Heaven and Earth destroy him!"

三人投军讨伐黄巾，初战告捷，立下了战功。刘关张三兄弟情比金坚的义气，从此成为中国文化中兄弟情谊的最高象征。

The three went to fight the Yellow Turbans and won their first victory. The ironclad brotherhood of Liu, Guan, and Zhang became the highest symbol of fraternal loyalty in Chinese culture.`},

    {id:2,title:'第二回：张翼德怒鞭督邮，何国舅谋诛宦竖',english:'Chapter 2: Zhang Yide Flogs the Inspector; He the Imperial In-Law Plots Against the Eunuchs',content:`刘备因讨伐黄巾有功，被任命为安喜县尉。督邮前来巡查，刁难刘备，索取贿赂。

Liu Bei was appointed magistrate of Anxi County for his service against the Yellow Turbans. An inspector came to investigate, bullied Liu Bei, and demanded bribes.

张飞闻之大怒，闯入驿馆，将督邮扯到马桩上，抽出马鞭打了二百下，直到刘备来拉住才停手。

Zhang Fei, furious, dragged the inspector to a horse post and lashed him two hundred times with a horsewhip — only stopping when Liu Bei intervened.

刘备摘下印绶挂于督邮颈上，三兄弟弃官而去，继续走上匡汉之路。这一幕，既显张飞的直率豪勇，也见刘备不愿受辱的傲骨，更预示了三人日后决不向腐败妥协的精神。

Liu Bei hung his seal and cord around the inspector's neck; the three brothers abandoned office and continued on their path to restore the Han dynasty. This scene showed Zhang Fei's bold directness, Liu Bei's unbending pride, and foreshadowed all three men's lifelong refusal to compromise with corruption.`},

    {id:3,title:'第三回：议温明董卓叱丁原，馈金珠李肃说吕布',english:'Chapter 3: Dong Zhuo Dominates Court; Li Su Persuades Lü Bu with Gold and Red Hare',content:`董卓入京，废少帝，立献帝，专权朝政，暴虐无道。为收服天下第一武将吕布，董卓命李肃持赤兔马并黄金珠宝前往游说。

Dong Zhuo seized power in the capital, deposed Emperor Shao, enthroned Emperor Xian, and ruled tyrannically. To win over Lü Bu — the realm's greatest warrior — Dong Zhuo sent Li Su with Red Hare and gold.

吕布见了赤兔马，心动不已，允诺效忠。次日，他手刃养父丁原，将首级献于董卓，拜为义父。"人中吕布，马中赤兔"——天下无双的组合，却为一己私利所役，令人扼腕。

Lü Bu saw Red Hare and capitulated. The next day he murdered his adoptive father Ding Yuan and presented the head to Dong Zhuo, swearing him as new adoptive father. "Among men, Lü Bu; among horses, Red Hare" — the finest combination under heaven, yet enslaved to selfish gain — a cause for lasting regret.

王允之女貂蝉，后来以美人计离间董卓与吕布，终结了董卓之祸。貂蝉之名，由此与中国历史上的四大美女并列。

Wang Yun's daughter Diaochan later used the "beauty stratagem" to drive a wedge between Dong Zhuo and Lü Bu, ending Dong Zhuo's tyranny. Diaochan's name thus joined the list of China's Four Great Beauties.`},

    {id:4,title:'第四回：废汉帝陈留践位，谋董贼孟德献刀',english:'Chapter 4: The Han Emperor Is Deposed; Cao Cao Presents a Knife to Assassinate Dong Zhuo',content:`曹操借王允宝刀，以"献刀"为名进入相府，伺机刺杀董卓。眼看时机已到，正要拔刀，不料董卓在镜中察觉，急问："孟德何为？"

Cao Cao borrowed Wang Yun's precious saber and entered the chancellor's mansion under the guise of "presenting" it, waiting for a moment to strike. Just as the moment came, Dong Zhuo caught the movement in a mirror: "Mengde, what are you doing?"

曹操急中生智，单膝跪地道："某有宝刀一口，献上恩相。"侥幸脱身后，连夜出逃。途中误杀吕伯奢一家，留下"宁教我负天下人，休教天下人负我"的千古名句。

Cao Cao dropped to one knee: "I have a precious saber to present to you, Honored Chancellor." He escaped and fled by night. Killing Lü Boshe's family by mistake along the way, he spoke the immortal words: "I would rather wrong all men in the world than let the world wrong me."

这句话，是解读曹操性格最重要的密钥，也是《三国演义》中最深刻的人性揭示。曹操：枭雄，还是奸雄？千古争论，至今未休。

This utterance is the most important key to understanding Cao Cao's character — and the novel's most penetrating revelation of human nature. Hero or villain? The debate has never ended.`},

    {id:5,title:'第五回：发矫诏诸镇应曹公，破关兵三英战吕布',english:'Chapter 5: The False Edict Rallies the Lords; Three Heroes Battle Lü Bu at the Pass',content:`曹操发矫诏，十八路诸侯会盟讨董卓，推袁绍为盟主。华雄守汜水关，连斩诸侯数员大将，袁绍叹道："可惜吾上将颜良、文丑未在，若在，何惧华雄！"

Cao Cao's false edict drew eighteen lords to an alliance against Dong Zhuo, with Yuan Shao as leader. Hua Xiong defended the pass, killing several allied generals in succession. Yuan Shao sighed: "If only my generals Yan Liang and Wen Chou were here — who would fear Hua Xiong!"

关羽请战，众人哂笑。曹操温了一杯酒与关羽，关羽提刀上马，不多时马到回来，提着华雄人头掷于帐前，那杯酒尚温。

Guan Yu asked to fight; the lords laughed at his lowly rank. Cao Cao warmed a cup of wine for him. Guan Yu mounted and rode out — and within moments returned, tossing Hua Xiong's head before the tent. The wine was still warm.

虎牢关前三英战吕布——张飞、关羽、刘备轮番上阵，方才逼退吕布。此战确立了关张"万人敌"的威名，也展现了桃园三兄弟同心协力、生死相依的义气。

Before Hulao Pass, the Three Heroes battled Lü Bu — Zhang Fei, Guan Yu, and Liu Bei fighting in turn until Lü Bu was forced to withdraw. This battle established the terrifying reputation of Guan and Zhang and showed the sworn brothers' united, life-or-death brotherhood.`},

    {id:6,title:'第六回：曹操挟天子以令诸侯，迁都许昌号令天下',english:'Chapter 6: Cao Cao Controls the Emperor; Moving the Capital to Xuchang',content:`董卓身死，天下大乱，各路诸侯割据一方。曹操迎汉献帝于许昌，从此"挟天子以令诸侯"，以皇帝的名义号令天下，占据了政治制高点。

After Dong Zhuo's death, the realm shattered into warlord domains. Cao Cao welcomed Emperor Xian to Xuchang and from that moment "held the emperor to command the lords" — using the imperial name to issue orders, seizing the supreme political high ground.

曹操在许昌大力推行屯田制，安置流民，发展农业，使得中原从战乱的废墟中逐渐恢复生机，奠定了曹魏日后强大的物质基础。

In Xuchang, Cao Cao implemented the military farming system, resettling refugees and reviving agriculture, gradually restoring the Central Plains from the ruins of war — laying the material foundation for Wei's future power.

刘备此时仍四处漂泊，无立锥之地，暂依曹操。曹操深知刘备是英雄，设"煮酒论英雄"，试探刘备心志，刘备以筷子惊于雷声做掩护，瞒过了曹操。

Liu Bei at this time still wandered without a foothold, temporarily sheltering with Cao Cao. Knowing Liu Bei was a hero, Cao Cao hosted the famous "Plum Wine Discussion of Heroes," probing Liu Bei's ambitions. Liu Bei used a clap of thunder as cover, feigning to drop his chopsticks in fright — successfully deceiving Cao Cao.`},

    {id:7,title:'第七回：官渡之战，曹操以少胜多',english:'Chapter 7: The Battle of Guandu — Cao Cao Defeats a Far Larger Force',content:`建安五年，袁绍以十万大军南下，兵锋直指曹操。曹操兵力不过三四万，形势危急。

In 200 AD, Yuan Shao marched south with 100,000 troops against Cao Cao, who had no more than 30,000–40,000 soldiers.

谋士许攸叛逃曹营，献计奇袭乌巢粮仓。曹操亲率轻骑，连夜奔袭，一把火烧了袁绍的粮草，袁军人心惶惶，土崩瓦解。

The strategist Xu You defected to Cao Cao and proposed a night raid on Yuan Shao's grain depot at Wuchao. Cao Cao personally led a light cavalry force, rode through the night, and burned the depot. Yuan Shao's army collapsed in panic.

官渡之战，曹操以少胜多，奠定了统一北方的基础，成为中国历史上以弱胜强的经典案例。而袁绍的失败，在于他"貌宽而内忌，好谋而无断"——外表宽厚，内心多疑，谋划不断却难以决断。

Guandu stands as a classic example of victory against overwhelming odds. Yuan Shao's defeat came from his nature: "broad of face yet jealous within, forever planning yet incapable of decision" — magnanimous in appearance, suspicious at heart, always deliberating but never decisive.`},

    {id:8,title:'第八回：三顾茅庐，刘玄德诚心请孔明',english:'Chapter 8: Three Visits to the Thatched Cottage; Liu Bei Earnestly Recruits Zhuge Liang',content:`徐庶临行前向刘备推荐了诸葛亮，称其为"卧龙"，有经天纬地之才。刘备带关羽、张飞两度前往隆中，均未见到，第三次终于见到了正在午睡的诸葛亮，刘备恭立阶下，等候半晌。

Before leaving, Xu Shu recommended Zhuge Liang — the "Sleeping Dragon" — to Liu Bei, praising his extraordinary talent. Liu Bei visited Longzhong twice with Guan Yu and Zhang Fei, finding Zhuge Liang absent both times. On the third visit, they found him napping; Liu Bei stood respectfully outside for a long while.

诸葛亮醒来，刘备三拜九叩，以天下苍生为由，恳请出山相助。诸葛亮感其诚意，献上"隆中对"：取荆州、益州为基，联吴抗曹，待天下有变，两路出兵，可图中原。

Zhuge Liang awoke; Liu Bei bowed repeatedly and pleaded for help in the name of the suffering people. Moved by Liu Bei's sincerity, Zhuge Liang presented the Longzhong Plan: secure Jing and Yi provinces as bases, ally with Sun Quan to resist Cao Cao, then when opportunity arose, strike from two directions toward the Central Plains.

从此，孔明出山，刘备如鱼得水："孤之有孔明，犹鱼之有水也。" 一位绝世谋士，与一位仁德之主，就此相遇，书写了中国历史上君臣际遇的千古佳话。

From this day Zhuge Liang entered service, and Liu Bei felt as though water had been restored to a fish: "Having Kongming is like a fish finding water." A peerless strategist and a benevolent lord — their meeting wrote one of history's greatest stories of ruler and minister.`},

    {id:9,title:'第九回：赤壁之战，火烧曹营百万兵',english:'Chapter 9: Battle of Red Cliffs — Fire Defeats Cao Cao\'s Million-Strong Army',content:`曹操大军南下，号称八十万，实则约二十余万。孙刘联军不过五万。诸葛亮与周瑜协力筹谋，黄盖诈降，庞统献连环计，使曹军战船首尾相连。

Cao Cao's army marched south, claiming 800,000 men (in reality about 200,000). The Sun-Liu alliance had only about 50,000. Zhuge Liang and Zhou Yu coordinated: Huang Gai would feign surrender; Pang Tong's "chained ships" plan convinced Cao Cao to chain his fleet together.

诸葛亮祭风，东南风起。黄盖率船队逼近曹营，顺风放火，烈焰腾空，曹军连环战船一发不可收拾，烧成一片火海，曹操大败，狼狈北逃。

Zhuge Liang performed the wind ritual; the southeast wind rose. Huang Gai's fireships bore down on Cao Cao's fleet. The chained ships caught instantly; the whole fleet became an inferno. Cao Cao fled in rout.

曹操败走华容道，关羽奉命守候。曹操声泪俱下，提起昔日恩情，关羽动了恻隐之心，放了曹操。此举令关羽险遭军法处置，却也成就了"义释曹操"的千古传说。

Fleeing via Huarong Road, Cao Cao encountered Guan Yu, who had been posted there. Cao Cao wept and invoked their past friendship; Guan Yu's compassion moved him to let Cao Cao pass. This act nearly brought military punishment upon Guan Yu — but it also created the legend of "righteously releasing Cao Cao."`},

    {id:10,title:'第十回：三气周瑜，孔明智激英雄泪',english:'Chapter 10: Zhuge Liang Angers Zhou Yu Three Times; the Hero Weeps',content:`赤壁之后，刘备借荆州，一借不还。周瑜屡次出谋要夺回，皆被诸葛亮识破，反受其辱。第一气：赔了夫人又折兵，孙权之妹嫁给刘备，却被带走，周瑜中计。

After Red Cliffs, Liu Bei "borrowed" Jing Province and kept it. Zhou Yu's every plot to recover it was foreseen by Zhuge Liang and turned against him. First rage: Zhou Yu's plan to marry Sun Quan's sister to Liu Bei backfired; she went with Liu Bei.

第二气：周瑜假攻西川，实袭荆州，却中了诸葛亮的埋伏，赔了兵马。第三气：周瑜引兵前来，被诸葛亮的信使带来一信，信中只有几句话，道破周瑜的心事，周瑜气急攻心，大叫一声，旧创迸裂，倒于船上。

Second rage: Zhou Yu's ruse — pretending to attack Sichuan while really targeting Jing Province — fell into an ambush. Third rage: Zhuge Liang's messenger delivered a letter that exposed all Zhou Yu's innermost feelings; Zhou Yu choked with fury, his old wound burst open, and he collapsed on his warship.

周瑜临终仰天长叹："既生瑜，何生亮！"连呼数声而逝，时年三十六岁。这句话成为中国文学中嫉妒与命运感的永恒喟叹。

Dying, Zhou Yu looked to heaven and cried: "Since Yu was born, why was Liang also born?" He cried out several times and died — aged only thirty-six. These words became the eternal lament of rivalry and fate in Chinese literature.`},

    {id:11,title:'第十一回：关羽失荆州，败走麦城',english:'Chapter 11: Guan Yu Loses Jing Province; Defeated at Maicheng',content:`关羽守荆州期间，因拒绝孙权的联姻提议，傲慢轻视东吴，导致孙刘联盟破裂。东吴大将吕蒙白衣渡江，趁关羽北伐之机，悄然夺取荆州。

While guarding Jing Province, Guan Yu arrogantly refused Sun Quan's marriage alliance and contemptuous treatment of Eastern Wu destroyed the alliance. Wu's general Lü Meng crossed the river in disguise and quietly seized Jing Province while Guan Yu was campaigning north.

关羽腹背受敌，败走麦城。派廖化突围去上庸求援，刘封、孟达按兵不动，坐看关羽陷入绝境。关羽突围失败，在临沮被吴兵擒获。

Caught front and back, Guan Yu fled to Maicheng. He sent Liao Hua to break through for reinforcements — but Liu Feng and Meng Da refused to move, watching Guan Yu fall into hopeless isolation. Guan Yu's breakout failed; he was captured near Linju.

孙权劝降，关羽凛然道："吾乃汉寿亭侯，岂降汝东吴！"慷慨赴死，时年五十八岁。后世立庙祭祀，尊为"关圣帝君"，成为中国最广泛崇拜的神灵之一。

Sun Quan urged surrender. Guan Yu replied with cold dignity: "I am the Marquis of Han Shou — I will never submit to Wu!" He died with composure, aged fifty-eight. Temples were built in his honor; he was deified as "Lord Guan the Holy Emperor" — one of China's most widely worshipped gods.`},

    {id:12,title:'第十二回：刘备白帝城托孤，诸葛亮受命辅少主',english:'Chapter 12: Liu Bei Entrusts His Heir at White Emperor City; Zhuge Liang Accepts the Charge',content:`关羽身死，刘备悲痛欲绝，不顾诸葛亮劝阻，执意伐吴。夷陵之战，陆逊火烧连营七百里，刘备大败，退至白帝城，托病不起。

After Guan Yu's death, Liu Bei — ignoring Zhuge Liang's counsel — rashly invaded Wu. At Yiling, Lu Xun set fire to Liu Bei's camp chain over 700 li; Liu Bei was utterly routed and retreated to White Emperor City, where he fell gravely ill.

刘备临终，将太子刘禅托付给诸葛亮："君才十倍曹丕，必能安国。若嗣子可辅，辅之；如其不才，君可自取。"诸葛亮涕泣俯首："臣敢不竭股肱之力，效忠贞之节，继之以死！"

On his deathbed, Liu Bei entrusted his son Liu Shan to Zhuge Liang: "Your talent surpasses Cao Pi tenfold — you can surely secure the state. If my heir is worthy, support him; if unworthy, you may take the throne yourself." Zhuge Liang wept and knelt: "I will exhaust every sinew of my body, give my utmost loyalty, and follow you in death!"

这场白帝城托孤，成为中国历史上最感人的君臣交托场景，也成为诸葛亮此后"鞠躬尽瘁，死而后已"的精神来源。

This scene at White Emperor City became the most moving moment of trust between ruler and minister in Chinese history, and the spiritual source of Zhuge Liang's lifelong motto: "Give everything, until death."`},

    {id:13,title:'第十三回：出师表，诸葛亮六出祁山',english:'Chapter 13: The Memorial Before Battle; Zhuge Liang\'s Six Northern Campaigns',content:`诸葛亮辅佐幼主刘禅，七擒孟获平定南方后，上《出师表》，言辞恳切，字字泣血："受命以来，夙夜忧叹，恐托付不效，以伤先帝之明……"

After pacifying the south with the Seven Captures of Meng Huo, Zhuge Liang submitted his Memorial Before Battle. The words were heartfelt, every character soaked in loyalty: "Since receiving my charge, I have worried day and night, fearing to fail my trust and damage the late emperor's wise judgment…"

此后，诸葛亮六出祁山，北伐曹魏，每次皆因粮草不继或队友失误功亏一篑。空城计（第五次北伐）中，他临危不乱，以一人一琴，退了司马懿十五万大军。

Then came six northern campaigns against Cao Wei, each frustrated by supply failures or the mistakes of subordinates. During the fifth campaign, the famous Empty City Stratagem: alone with a lute, Zhuge Liang caused Sima Yi's 150,000 troops to withdraw.

第六次出祁山，诸葛亮积劳成疾，在五丈原病逝，时年五十四岁。临终仍在安排后事，"鞠躬尽瘁，死而后已"，用生命践行了对先主的承诺。

On the sixth campaign, Zhuge Liang died of exhaustion at Wuzhang Plains, aged fifty-four. Even in his final moments he was arranging affairs — "giving everything until death" — fulfilling with his very life the promise made to his lord.`},

    {id:14,title:'第十四回：司马懿阴取兵权，魏蜀吴三分归晋',english:'Chapter 14: Sima Yi Takes Power; Wei, Shu, and Wu Are Unified by Jin',content:`诸葛亮死后，蜀汉国力日衰。姜维继承其志，九伐中原，却无力回天。魏国内部，司马懿家族逐渐把持大权，诛杀曹魏皇族，为代魏建晋奠定基础。

After Zhuge Liang's death, Shu Han steadily weakened. Jiang Wei inherited his ambition, launching nine northern campaigns — but could not reverse the tide. Inside Wei, the Sima family gradually seized power, eliminating the Cao imperial clan and laying the groundwork to replace Wei with Jin.

蜀汉灭亡时，后主刘禅"此间乐，不思蜀"，令后人唏嘘。吴国最后一个灭亡，至此三国归晋，天下重归一统。

When Shu Han fell, the last ruler Liu Shan famously said "It is pleasant here — I do not miss Shu," to the sorrow of all who heard it. Wu was the last to fall; then all three kingdoms were absorbed by Jin, and the realm was once again unified.

《三国演义》的结尾，回应了开头那句话："天下大势，分久必合，合久必分。" 历史的车轮，周而复始；英雄的功业，归于尘土；唯有那些义气、智慧与悲壮，流传千古。

The novel's ending echoes its opening line: "The empire, long divided, must unite; long united, must divide." History turns in cycles; the deeds of heroes return to dust — but the loyalty, wisdom, and tragic grandeur endure forever.`},

    {id:15,title:'第十五回：煮酒论英雄，千古风流人物',english:'Chapter 15: Discussing Heroes Over Warm Wine; Timeless Heroes of History',content:`建安四年，刘备寄居曹操篱下，暗中培植势力。曹操邀其共饮，指天下英雄只有刘备与己两人，其余诸侯，皆碌碌之辈。

In 199 AD, Liu Bei was sheltering under Cao Cao's protection while secretly building his strength. Cao Cao invited him to share wine and declared: "The only true heroes under heaven are you and I; all other lords are mediocre."

刘备闻言大惊，恰在此时天雷响动，刘备借机将手中筷子掉落，以惊雷遮掩失态，曹操哈哈大笑，以为刘备胆小，从此不再防范。

Liu Bei was startled — at that moment thunder rolled, and Liu Bei used it as cover to drop his chopsticks, hiding his alarm. Cao Cao laughed, thinking Liu Bei was simply timid, and stopped being wary of him.

这一场对话，是《三国演义》中最精彩的心理博弈，两位旷世英雄，隔着一壶温酒，进行着惊心动魄的较量。曹操的豪迈自信，刘备的城府深沉，在这一刻展露无遗，令读者叹为观止。

This exchange was the novel's finest psychological duel — two great heroes, separated by a pot of warm wine, engaged in a breathtaking contest of wits. Cao Cao's bold self-assurance and Liu Bei's deep composure were both fully revealed in this moment, astonishing every reader.`},
  ],
},

/* ── 红楼梦 ── */
hongloumeng: {
  id:'hongloumeng', title:'红楼梦', subtitle:'Dream of the Red Chamber', subtitle_zh:'红楼梦',
  author:'曹雪芹 Cao Xueqin', dynasty:'清 / Qing Dynasty',
  color:'#6B1F5A', accent:'#E8A0B4',
  description:'Considered the pinnacle of Chinese classical fiction, this semi-autobiographical novel follows the rise and fall of the noble Jia family, centered on the tragic love story of Jia Baoyu and Lin Daiyu.',
  description_zh:'中国古典小说的巅峰之作，以贾府的盛衰为线索，描绘了贾宝玉与林黛玉的旷世情缘，被誉为中国封建社会的百科全书。',
  chapters:[
    {id:1,title:'第一回：甄士隐梦幻识通灵，贾雨村风尘怀闺秀',english:'Chapter 1: Zhen Shiyin Learns of the Spiritual Stone in a Dream; Jia Yucun Pines for a Beauty',content:`列位看官，此书从何而来？原来女娲氏炼石补天之时，于大荒山青埂峰下，单单剩了一块未用，自经锻炼之后，灵性已通。那石见众石俱得补天，独自无材，遂自怨自叹，日夜悲号。

Honored readers, from where does this book come? When Nüwa forged stones to repair the sky, one stone was left over at the foot of Qinggeng Peak. After its tempering it had become spiritually aware. Seeing all the other stones used to repair the sky while it alone was rejected, it lamented and wept day and night.

一僧一道携其入世，化为一块美玉，大如雀卵，灿若明霞——这便是贾宝玉出生时口中所衔的"通灵宝玉"，也是整部小说的精神核心。

A monk and a Taoist carried it into the mortal world, transformed into a piece of jade the size of a sparrow egg, brilliant as rosy clouds — this became the "Precious Jade of Spiritual Understanding" that Jia Baoyu was born holding in his mouth, and the spiritual core of the entire novel.

作者自云："满纸荒唐言，一把辛酸泪，都云作者痴，谁解其中味？" 这四句话，道尽了曹雪芹的人生况味，也是解读《红楼梦》的第一把钥匙。

The author writes: "A page of wild words, a handful of bitter tears; all say the author is mad — who understands what it means?" These four lines contain all of Cao Xueqin's life experience, and provide the first key to understanding Dream of the Red Chamber.`},

    {id:2,title:'第二回：贾夫人仙逝扬州城，冷子兴演说荣国府',english:'Chapter 2: Lady Jia Passes Away; Leng Zixing Describes the Rong Mansion',content:`冷子兴对贾雨村演说荣国府的盛况与衰象："如今生齿日繁，事务日盛，主仆上下，安富尊荣者尽多，运筹谋划者无一；外面的架子虽未甚倒，内囊却也尽上来了。"

Leng Zixing described to Jia Yucun both the splendor and the signs of decay in Rongguo Mansion: "Now the family grows ever larger, affairs ever more complex. All enjoy wealth and comfort; none plan for the future. The outward facade is still grand — but the inner substance is nearly exhausted."

宝玉生来便与众不同，虽生得"面如中秋之月，色若春晓之花"，却又口吐奇言："女儿是水做的骨肉，男人是泥做的骨肉；我见了女儿便觉清爽，见了男子便觉浊臭逼人。"

Baoyu was extraordinary from birth — his face "like the mid-autumn moon, his complexion like spring morning blossoms" — but he spoke peculiarly: "Girls are made of water; men are made of mud. When I see girls I feel refreshed; when I see men I feel assailed by muddy stench."

这段话，既是宝玉性格的核心展示，也预示了他此生的命运走向：在大观园的女儿世界里，他将是那个最温柔、最用心的守护者，也是最终无力留住任何人的旁观者。

These words showed the core of Baoyu's character and foreshadowed his fate: in Grand View Garden's world of girls, he would be the most gentle and devoted guardian — and ultimately the helpless witness who could not hold any of them back.`},

    {id:3,title:'第三回：贾雨村夤缘复旧职，林黛玉抛父进京都',english:'Chapter 3: Jia Yucun Regains His Post; Lin Daiyu Enters the Capital',content:`黛玉母亲贾敏病故，林如海遣女入京，投奔外祖母贾母。黛玉初进荣国府，步步留心，时时在意，不肯轻易多说一句话，多行一步路，唯恐被人耻笑了她去。

Daiyu's mother Jia Min died; her father Lin Ruhai sent his daughter to the capital to live with Grandmother Jia. Entering Rongguo Mansion, Daiyu watched every step carefully, never saying an unnecessary word or taking an unnecessary step, fearing to be mocked.

贾宝玉见了黛玉，大喜过望："这个妹妹我曾见过！"众人笑他胡说，宝玉却道："虽然未见，却觉面善，今日只当是旧相识，重逢罢了。"

Jia Baoyu saw Daiyu and cried joyfully: "I have seen this younger sister before!" Everyone laughed at his nonsense. Baoyu said: "Though we haven't met, her face seems familiar. Let's just say we are old friends, reunited today."

宝玉又见黛玉无玉，登时摔了那通灵宝玉，道："什么稀罕物，也没有，也没有！"黛玉见此，心中暗暗想道："他摔玉，原是因为我没有——我果然是多余来的。"两人情缘，自此而始。

Baoyu also saw that Daiyu had no jade and immediately threw his own down: "What rare thing is this anyway — she doesn't have one, she doesn't have one!" Daiyu thought privately: "He threw it because of me — I truly am superfluous here." Their fateful connection began in this moment.`},

    {id:4,title:'第四回：薄命女偏逢薄命郎，葫芦僧乱判葫芦案',english:'Chapter 4: A Girl of Ill Fate Meets an Ill-Fated Youth; A Muddled Monk Judges a Muddled Case',content:`贾雨村在金陵审案，涉及四大家族，见了护官符，方知其中厉害。薛蟠打死冯渊，拐走英莲（即香菱），贾雨村为讨好贾家，胡乱判案，将英莲判给了薛蟠。

Jia Yucun, judging a case in Jinling involving the four great families, saw the Register of Official Protections and understood the power at stake. Xue Pan had beaten Feng Yuan to death and abducted Yinglian (later Xiangling). To please the Jia family, Jia Yucun threw the case and awarded Yinglian to Xue Pan.

护官符上写着四大家族的隐语，道尽了金陵权贵的骄横：贾不假，白玉为堂金作马；阿房宫，三百里，住不下金陵一个史；东海缺少白玉床，龙王来请金陵王；丰年好大雪，珍珠如土金如铁。

The Register encoded the four families in verses: "Jia family: halls of white jade, horses of gold; Shi family: fills the Epang Palace; Wang family: the Dragon King comes calling; Xue family: in good years great snow — pearls like earth, gold like iron."

英莲自幼被拐，身世凄苦，后成为薛蟠之妾，改名香菱，一生坎坷。她执意跟随黛玉学诗，在大观园中写出了令人惊叹的好诗，成为《红楼梦》中最令人心疼的薄命女子之一。

Yinglian, abducted as a child, became Xue Pan's concubine as Xiangling, her life one of hardship. She persisted in studying poetry with Daiyu, writing astonishingly good verse in Grand View Garden — one of the most heartbreaking "ill-fated girls" in the novel.`},

    {id:5,title:'第五回：游幻境指迷十二钗，饮仙醪曲演红楼梦',english:'Chapter 5: A Visit to the Illusory Land Reveals the Twelve Beauties\' Fates',content:`宝玉在太虚幻境见到金陵十二钗正册、副册、又副册，每人皆有画像与判词，预示了她们各自的命运。

In the Land of Illusion, Baoyu saw the registers of the Twelve Beauties. Each had a painted image and a verse predicting her fate.

黛玉判词："可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。" 宝钗与黛玉共判一页——玉带挂于林中（林黛玉），金簪埋于雪中（薛宝钗）——二人皆是薄命，只是方式不同。

Daiyu's verse: "Pity the virtue of the stopped loom; lament the talent of floating catkins. The jade belt hangs in the forest; the golden hairpin is buried in snow." Daiyu and Baochai share one page: the jade belt in the forest (Lin Daiyu), the golden hairpin in the snow (Xue Baochai) — both ill-fated, only differently so.

《红楼梦曲·枉凝眉》："一个是阆苑仙葩，一个是美玉无瑕，若说没奇缘，今生偏又遇着他；若说有奇缘，如何心事终虚化？" 这首曲子，唱尽了宝黛之间的千古遗憾。

"Vain Longing": "One is a fairy flower from the immortal garden, the other a flawless piece of beautiful jade. If there were no predestined bond, why do they meet in this life? If there were, why does all the heartfelt feeling come to nothing?" This song captures the eternal sorrow of Baoyu and Daiyu.`},

    {id:6,title:'第六回：刘姥姥初进荣国府，大观园风光无限',english:'Chapter 6: Granny Liu\'s First Visit to Rongguo Mansion; The Garden in Its Glory',content:`乡下老太太刘姥姥带着外孙板儿进京打秋风，进了荣国府，受王熙凤接待，得了二十两银子回去。刘姥姥来自乡野，进了这钟鸣鼎食之家，百般惊奇，什么都觉得新鲜。

The village grandmother Granny Liu brought her grandson Banr to the capital to seek assistance from the Jia family. Received by Wang Xifeng, she received twenty taels of silver. Coming from the countryside, everything in this great household of music and feasting astonished her.

刘姥姥的眼睛，是作者刻意安排的"旁观者视角"——透过一个局外人的震惊与新奇，读者才能真正感受到贾府繁华的极致，以及这繁华背后的荒诞与奢靡。

Granny Liu's eyes were the author's deliberately arranged "outsider perspective" — through an ordinary person's shock and wonder, readers truly sense the extreme splendor of the Jia family's world, and the absurdity and excess behind it.

此后刘姥姥又进大观园，陪众人嬉游，言语质朴可笑，令众人大乐。她是全书中少有的局外人，却也是最终见证了贾府兴衰的清醒者，并在贾府落败后救了巧姐一命。

Granny Liu later visited Grand View Garden, joining the family's amusements with her simple, comical speech making everyone laugh. She was one of the few true outsiders in the novel — and ultimately one of its most clear-eyed witnesses to the Jia family's rise and fall, later saving Xifeng's daughter Qiaojie.`},

    {id:7,title:'第七回：元妃省亲大观园，兄弟姐妹入住园',english:'Chapter 7: Imperial Consort Yuanchun\'s Home Visit; Siblings Move into the Garden',content:`贾元春进宫多年，被封为贤德贵妃，得以省亲归家。贾府为迎接这一荣耀，不惜巨资建造了大观园，穷奢极侈，极尽繁华。

Jia Yuanchun, who had entered the palace years before, was elevated to Imperial Noble Consort and permitted a home visit. The Jia family, sparing no expense, built Grand View Garden to receive her — an extravagance of staggering magnificence.

元春省亲当夜，灯火辉煌，笙歌四起，贾府达到了繁华的极致。元春见到久别的家人，泪如雨下："当日既送我到那不得见人的去处……"言下之意，宫廷荣华，不过是一座镀金的牢笼。

The night of the visit was ablaze with lanterns, alive with music — the Jia family at its most magnificent. Yuanchun wept seeing her family after long separation: "The day you sent me to that place where one is never seen again…" The implication was clear: imperial splendor was merely a gilded cage.

省亲之后，大观园闲置可惜，宝玉与众姐妹搬入居住，大观园由此成为她们共同的青春乐土，也成为《红楼梦》最重要的舞台。诗社、玩笑、争吵、眼泪——人生最美好的年华，在此一一展开，也在此一一凋零。

After the visit, Grand View Garden stood empty and was given over to Baoyu and his sisters. The Garden became their shared youth paradise — and the most important stage of Dream of the Red Chamber. Poetry clubs, games, quarrels, tears — life's most beautiful years unfolded here, and faded away here.`},

    {id:8,title:'第八回：海棠诗社众芳竞秀，黛玉葬花泣残红',english:'Chapter 8: The Crabapple Poetry Club; Daiyu Buries Fallen Petals',content:`秋爽斋探春发起成立海棠诗社，众姐妹取别号：宝钗为蘅芜君，黛玉为潇湘妃子，宝玉为怡红公子……众人联诗吟咏，展示各自才华，一时欢声笑语，其乐融融。

Tanchun, in her Autumn Freshness Studio, founded the Crabapple Poetry Club. The girls took literary names: Baochai became Lady Hengtang, Daiyu became Consort Xiaoxiang, Baoyu became the Young Master of Happy Red… They composed poems together, each displaying their unique gifts, laughing and rejoicing.

黛玉葬花，是《红楼梦》中最著名的场景之一。暮春时节，花瓣飘落，黛玉持帚扫花，将残红收入锦囊，掘土为穴，葬花于土。她边葬边哭，吟出了《葬花吟》："花谢花飞飞满天，红消香断有谁怜？"

Daiyu Buries Flowers is one of the novel's most celebrated scenes. In late spring, petals drifted down; Daiyu swept them up, put them in a silk bag, dug a grave in the earth, and buried them. As she buried, she wept and recited the "Burial of Flowers" poem: "Petals fall and fly across the sky — when beauty fades and fragrance ends, who shows pity?"

"试看春残花渐落，便是红颜老死时。一朝春尽红颜老，花落人亡两不知。" 这是黛玉对自身命运的预言，也是对所有美好事物终将消逝的哀悼。

"Watch how with spring's end the flowers fall — this is when beauty also dies. When one morning spring ends and beauty fades, neither flowers nor their keeper will know it has happened." This was Daiyu's prophecy of her own fate, and a lament for all beautiful things that must pass.`},

    {id:9,title:'第九回：宝玉挨打，父子情深仇怨交织',english:'Chapter 9: Baoyu Is Beaten; Father and Son — Love and Bitterness Intertwined',content:`忠顺王府来人向贾政索要戏子琪官，贾环又趁机进谗言，说宝玉强奸母婢，贾政大怒，将宝玉打得死去活来。

The household of Prince Zhongshun came demanding the actor Qiguan. Then Baoyu's half-brother Jia Huan seized the moment to slander him — claiming Baoyu had assaulted a maidservant. Jia Zheng, enraged, beat Baoyu nearly to death.

贾母赶来，怒责贾政："你要打杀他，我和你这老畜生先拼了这条老命！"王夫人抱着宝玉哭泣，叫了一声"珠儿"（早逝长子的名字），哭倒在地。

Grandmother Jia rushed in and furiously berated Jia Zheng: "If you want to beat him to death, first fight me — this old life of mine!" Lady Wang held Baoyu and wept, calling out the name of her dead first son Zhu — and collapsed.

黛玉来探视宝玉，见他遍体是伤，两人相对无语，黛玉的眼泪无声滴落。宝玉低声道："我挨了打，不觉得怎样，只是怕你们心里难受。" 这一声，说尽了他对黛玉的深情。

Daiyu came to check on Baoyu. Seeing him covered in wounds, the two sat in wordless silence; Daiyu's tears fell silently. Baoyu said softly: "The beating doesn't matter — I only feared it would hurt your heart." In one sentence, he said everything about his feelings for Daiyu.`},

    {id:10,title:'第十回：晴雯撕扇，大观园青春最后的骄傲',english:'Chapter 10: Qingwen Tears the Fans; The Last Pride of Youth in the Garden',content:`晴雯是宝玉身边第一美婢，眉目如画，性情刚烈，不甘屈辱。宝玉某日心情不好，发脾气摔了扇子，晴雯顶了几句嘴，宝玉反倒气消了，笑问：你喜欢撕，那就撕一把来听听响。

Qingwen was the most beautiful of Baoyu's maids — delicate-featured and fierce-spirited, unwilling to accept humiliation. One day Baoyu was in a bad mood and threw a fan. Qingwen talked back; his anger dissolved and he smiled: "If you like tearing things, tear one and let me hear the sound."

晴雯当即将那把扇子哗哗撕碎，宝玉欣然道："这才好！" 这一幕，成为《红楼梦》中青春自由最明媚的瞬间——任性、骄傲、毫不在乎规矩，只在乎此时此刻的快意。

Qingwen immediately tore the fan to pieces with relish; Baoyu said with delight: "That's the way!" This scene became one of the novel's brightest moments of youthful freedom — willful, proud, heedless of rules, caring only for the joy of the present moment.

然而不久，王夫人以"妖精似的"为由撵走了晴雯。晴雯在冰冷的小屋里含冤离世，宝玉悲痛写下《芙蓉女儿诔》，祭奠这个最像他的灵魂。后人皆知，那诔文中的"芙蓉女儿"，其实也是祭奠黛玉。

Not long after, Lady Wang had Qingwen expelled, calling her a "little vixen." Qingwen died unjustly in a cold room; Baoyu wrote the "Eulogy for the Hibiscus Girl" in grief. Later readers understood: the "Hibiscus Girl" of the eulogy was also a lament for Daiyu.`},

    {id:11,title:'第十一回：抄检大观园，繁华落幕前奏',english:'Chapter 11: The Search of Grand View Garden; Prelude to the End of Splendor',content:`王夫人因疑惑大观园内有不规矩之事，命王熙凤带人抄检各处。这一夜，探春、惜春、迎春房中皆被翻箱倒柜，众人含辱忍气。

Lady Wang, suspicious of impropriety in Grand View Garden, ordered Wang Xifeng to lead a search of all the rooms. That night, Tanchun's, Xichun's, and Yingchun's quarters were all turned upside down; everyone endured the humiliation in silence.

探春气盛，当众掌了一个搜查婆子的嘴："我们家从来没有这样的规矩！" 她的愤怒，代表了整个大观园对这种粗暴搜查的抗议，也是贾家内部离心离德的开始。

Tanchun, hot-tempered, slapped a searching matron in front of everyone: "Our family has never had such rules!" Her fury voiced the whole garden's protest against this brutish intrusion — and marked the beginning of the Jia family's internal dissolution.

此次抄检，将大观园的美梦彻底打碎。之后，晴雯被赶走，迎春被逼嫁，大观园的人一个个散去，如同那无人打扫的落花，被风吹得漫天飘散。盛极必衰，这是红楼的悲剧，也是人世的真理。

This search shattered the dream of Grand View Garden. Afterward: Qingwen expelled, Yingchun forced into a bad marriage, the residents of the garden scattered one by one — like unswept fallen petals blown across the sky. Extreme prosperity must lead to decline: this is the tragedy of Red Chamber, and the truth of the human world.`},

    {id:12,title:'第十二回：黛玉焚稿，香消玉殒泪尽而逝',english:'Chapter 12: Daiyu Burns Her Manuscripts; Beauty Fades and Tears Are Spent',content:`贾家定下金玉良缘，让宝玉迎娶宝钗，却瞒着宝玉，假称新娘是黛玉。黛玉在迷茫中得知了真相，病体支离，将所有诗稿一一付之一炬，烧掉了那些写满深情的文字。

The Jia family arranged the Gold-Jade marriage, having Baoyu wed Baochai — while deceiving Baoyu by claiming his bride was Daiyu. In her devastation, Daiyu learned the truth. Her body already failing, she burned all her manuscripts one by one, consigning to ash every word written with deep feeling.

黛玉临终，气若游丝，断断续续道了一句话："宝玉……你好……" 此后便昏迷过去，再未醒来。这两个字，到底是"你好狠"，还是"你好好活着"，成了《红楼梦》中最大的悬案。

Daiyu near death, her breath barely there, managed to whisper: "Baoyu… you… well…" Then she fell unconscious and never woke again. Whether those last words meant "You are so cruel" or "You, live well" — this remains the greatest mystery in Dream of the Red Chamber.

黛玉之死与宝玉成婚，同时发生在同一夜。一边是洞房花烛，一边是玉殒香消；一边是锣鼓喧天，一边是最后的独自凋零。曹雪芹以这双线并行，写尽了命运的残忍。

Daiyu's death and Baoyu's wedding happened on the same night — one side bridal candles and wedding music; the other, beauty extinguished and fragrance gone; one side drums and celebration, the other a solitary, unwitnessed dying. Cao Xueqin's parallel structure captured the full cruelty of fate.`},

    {id:13,title:'第十三回：宝玉悬崖撒手，遁入空门了残生',english:'Chapter 13: Baoyu Lets Go at the Cliff\'s Edge; He Enters the Monastery',content:`宝玉迎娶宝钗之后，得知黛玉已死，五内俱焚，此后神志时常不清，对宝钗虽然温柔，却始终心在云端。后来贾家彻底败落，宝玉在一次会试中考中举人，却在放榜之后，如同人间蒸发，不知所踪。

After marrying Baochai and learning of Daiyu's death, Baoyu's grief consumed him; his mind often wandered. He was gentle to Baochai but his heart was always elsewhere. When the Jia family finally collapsed, Baoyu passed the imperial examinations — and then, after the results were posted, vanished without a trace.

宝钗遥望去路，只见茫茫雪地，三个人影——宝玉与一僧一道——渐行渐远，消失在白茫茫的天地之间。那块通灵宝玉，已归还了青埂峰。

Baochai gazed at the empty road: only a vast field of snow, and three receding figures — Baoyu with the monk and the Taoist — growing smaller and smaller, disappearing into the boundless white. The Precious Jade had been returned to Qinggeng Peak.

宝玉的出家，是对这个腐朽世界的最后拒绝，也是那块仙石结束人间历劫、重归本源的归途。《红楼梦》就此合上了最后一页，留下的，是读者心中永远的怅惘与追思。

Baoyu's entering the monastery was his final rejection of this rotten world — and the magic stone's return to its origin after its mortal ordeal was complete. Dream of the Red Chamber closed its last page, leaving behind an everlasting sense of loss and longing in every reader's heart.`},

    {id:14,title:'第十四回：家道中落树倒猢狲散，四大家族的落幕',english:'Chapter 14: The Family Falls; The Four Great Families Come to an End',content:`贾家获罪，家产被抄，"树倒猢狲散"，众人各奔东西。王熙凤病死狱中，贾迎春被丈夫孙绍祖虐待致死，贾惜春看破红尘，出家为尼。

The Jia family was convicted; their property was confiscated. "When the tree falls, the monkeys scatter" — everyone went their separate ways. Wang Xifeng died ill in prison; Jia Yingchun was abused to death by her husband; Jia Xichun, seeing through the vanity of the world, became a Buddhist nun.

贾探春远嫁海外，虽心中不舍，却以大局为重，含泪而去，"才自清明志自高，生于末世运偏消"——她的才智与志向，生错了时代。

Jia Tanchun was married off to a distant land overseas. Though reluctant, she placed the larger interests first and departed in tears. "Her talent was bright, her ambitions high — born in an age of decline, her fate was diminished" — her gifts and aspirations were born into the wrong era.

史湘云嫁人后丈夫早逝，孤苦度日；妙玉被劫；香菱因病而亡。那些曾经在大观园中诗酒风流的女儿们，一个个如雨打风吹去，曹雪芹以她们的命运，写出了整个时代的哀歌。

Shi Xiangyun's husband died young, leaving her in poverty; Miaoyu was abducted; Xiangling died of illness. The girls who had once composed poetry and laughed together in Grand View Garden — one by one they were swept away like petals in rain and wind. Through their fates, Cao Xueqin wrote the elegy of an entire age.`},

    {id:15,title:'第十五回：白茫茫大地真干净，石头记的终极之问',english:'Chapter 15: A Vast White Expanse — Truly Clean; The Ultimate Question of the Story of the Stone',content:`《红楼梦》的最后，一片白茫茫大地真干净。贾府的繁华，宝黛的深情，大观园的如梦年华——一切都在这白茫茫中消散。

At the end of Dream of the Red Chamber: a vast white expanse, truly clean. The Jia family's splendor, the deep love of Baoyu and Daiyu, the dreamlike years of Grand View Garden — all dissolved into that endless white.

空空道人回到大荒山，找到那块记载了一切的顽石，将石上文字抄录下来，带回尘世流传。所谓"假作真时真亦假，无为有处有还无"——真与假、有与无，在这部书里，界限模糊，令人深思。

The Void-Void Taoist returned to the great mountains, found the stone on which all had been inscribed, copied down the text, and brought it back to the world to be passed on. "When the false seems true, the true becomes false; when nothing is taken as something, something becomes nothing" — in this book, the line between real and false, presence and absence, blurs endlessly.

《红楼梦》的终极之问，不是贾宝玉爱不爱林黛玉，不是贾府为何衰败，而是：人生的意义，是否只在于那转瞬即逝的美好？曹雪芹没有给出答案，因为那个答案，每个读者都要用自己的一生去寻找。

The ultimate question of Dream of the Red Chamber is not whether Baoyu loved Daiyu, or why the Jia family fell — but this: does the meaning of life lie only in beauty that passes in an instant? Cao Xueqin gave no answer, because that answer is one that every reader must spend their own lifetime seeking.`},
  ],
},

}; /* end BOOKS */

const FLASHCARDS = {
  shuihu: [
    {front:'宋江',pinyin:'Sòng Jiāng',back:'Leader of the 108 outlaws at Liangshan Marsh; known as "Timely Rain" for his generosity.',back_zh:'梁山108位好汉之首，绰号"及时雨"，以仗义疏财著称。',category:'Characters',category_zh:'人物'},
    {front:'武松',pinyin:'Wǔ Sōng',back:'Tiger-slaying hero who killed a tiger on Jingyang Ridge with his bare fists; later avenges his brother.',back_zh:'景阳冈赤手空拳打死老虎的英雄，后为兄弟复仇。',category:'Characters',category_zh:'人物'},
    {front:'林冲',pinyin:'Lín Chōng',back:'Imperial arms instructor framed by Gao Qiu; forced to join Liangshan after being driven to desperation.',back_zh:'东京八十万禁军教头，被高俅陷害，逼上梁山。',category:'Characters',category_zh:'人物'},
    {front:'李逵',pinyin:'Lǐ Kuí',back:'Fierce warrior known as "Black Whirlwind"; wields twin axes and is fanatically loyal to Song Jiang.',back_zh:'绰号"黑旋风"，使双斧，对宋江极为忠义。',category:'Characters',category_zh:'人物'},
    {front:'鲁智深',pinyin:'Lǔ Zhìshēn',back:'Buddhist monk and fierce fighter who uprooted a willow tree to demonstrate his strength.',back_zh:'花和尚，倒拔垂杨柳以显神力，为人仗义好打不平。',category:'Characters',category_zh:'人物'},
    {front:'梁山泊',pinyin:'Liáng Shān Pō',back:'Liangshan Marsh — the mountain stronghold where the 108 outlaws gather and establish their rebel base.',back_zh:'108位好汉聚义之所，四面环水，易守难攻。',category:'Places',category_zh:'地名'},
    {front:'高俅',pinyin:'Gāo Qiú',back:'Corrupt imperial official who rose from a commoner by playing football; primary antagonist driving heroes to outlawry.',back_zh:'奸臣，靠蹴鞠起家，陷害忠良，逼迫英雄上梁山。',category:'Characters',category_zh:'人物'},
    {front:'替天行道',pinyin:'Tì tiān xíng dào',back:'"Act on behalf of Heaven" — the banner and creed of the Liangshan outlaws, justifying their rebellion as righteous.',back_zh:'梁山好汉的旗帜与信条，意为代天行使正义。',category:'Themes',category_zh:'主题'},
    {front:'景阳冈',pinyin:'Jǐngyáng Gāng',back:'Jingyang Ridge — the mountain pass where Wu Song famously killed a man-eating tiger after drinking eighteen bowls of wine.',back_zh:'武松醉酒后赤手空拳打死吊睛白额虎之处。',category:'Places',category_zh:'地名'},
    {front:'招安',pinyin:'Zhāo ān',back:'Imperial amnesty — Song Jiang\'s goal of surrendering to the emperor, which divides the outlaws and leads to their downfall.',back_zh:'宋江一心接受朝廷招安，引发内部矛盾并最终导致悲剧结局。',category:'Themes',category_zh:'主题'},
    {front:'吴用',pinyin:'Wú Yòng',back:'Military strategist of Liangshan nicknamed "Resourceful Star"; mastermind behind most of the outlaws\' schemes.',back_zh:'梁山军师，绰号"智多星"，足智多谋，策划多次战役。',category:'Characters',category_zh:'人物'},
    {front:'晁盖',pinyin:'Cháo Gài',back:'First leader of Liangshan; led the robbery of the birthday gifts before Song Jiang took over as chief.',back_zh:'梁山早期首领，领导劫取生辰纲，后被宋江取代。',category:'Characters',category_zh:'人物'},
    {front:'生辰纲',pinyin:'Shēngchén Gāng',back:'Birthday tribute convoy carrying gold and jewels for a corrupt official; stolen by Song Jiang\'s future allies.',back_zh:'押运给蔡太师的生日礼物，被晁盖等人劫取，成为故事导火索。',category:'Events',category_zh:'事件'},
    {front:'逼上梁山',pinyin:'Bī shàng Liáng Shān',back:'Idiom meaning "forced into rebellion" — driven to the mountain stronghold against one\'s will; originates from this novel.',back_zh:'成语，意指被逼无奈走上反抗之路，源自《水浒传》。',category:'Idioms',category_zh:'成语'},
    {front:'花和尚',pinyin:'Huā Héshang',back:'"Flowery Monk" — nickname for Lu Zhishen, referring to his full-body tattoos and unmonklike behavior.',back_zh:'鲁智深的绰号，因其满身花绣纹身且行为粗犷而得名。',category:'Characters',category_zh:'人物'},
    {front:'时迁',pinyin:'Shí Qiān',back:'Master thief of Liangshan nicknamed "Flea on a Drum"; crucial in many intelligence-gathering missions.',back_zh:'梁山好汉，绰号"鼓上蚤"，飞檐走壁，擅长刺探军情。',category:'Characters',category_zh:'人物'},
    {front:'忠义',pinyin:'Zhōngyì',back:'Loyalty and righteousness — the core values of the Liangshan brotherhood that both unite and ultimately doom them.',back_zh:'忠诚与义气，梁山好汉的核心价值观，也是其最终悲剧的根源。',category:'Themes',category_zh:'主题'},
    {front:'阮氏三雄',pinyin:'Ruǎn shì sān xióng',back:'The Three Ruan Brothers — fishermen-turned-outlaws who are fierce fighters on water.',back_zh:'阮小二、阮小五、阮小七兄弟，渔民出身，水上作战勇猛。',category:'Characters',category_zh:'人物'},
    {front:'潘金莲',pinyin:'Pān Jīnlián',back:'Wu Song\'s sister-in-law who poisons her husband with her lover Ximen Qing; Wu Song avenges his brother.',back_zh:'武大郎之妻，与西门庆私通后毒死丈夫，被武松手刃复仇。',category:'Characters',category_zh:'人物'},
    {front:'西门庆',pinyin:'Xīmén Qìng',back:'Wealthy merchant and villain who seduces Pan Jinlian and helps her murder Wu Dalang; killed by Wu Song.',back_zh:'富商恶霸，勾引潘金莲谋害武大郎，最终被武松所杀。',category:'Characters',category_zh:'人物'},
    {front:'梁山一百单八将',pinyin:'Liáng Shān yī bǎi dān bā jiàng',back:'The 108 Heroes of Liangshan — divided into 36 Heavenly Spirits and 72 Earthly Fiends.',back_zh:'梁山好汉共108位，分天罡36员和地煞72员。',category:'Events',category_zh:'事件'},
    {front:'扈三娘',pinyin:'Hù Sānniang',back:'"Ten Feet of Blue" — one of the few female warriors among the 108 heroes; fierce in battle on horseback.',back_zh:'绰号"一丈青"，108将中少数女将之一，马上功夫极强。',category:'Characters',category_zh:'人物'},
    {front:'及时雨',pinyin:'Jíshí yǔ',back:'"Timely Rain" — Song Jiang\'s nickname, earned for his generosity to those in need.',back_zh:'宋江的绰号，因其慷慨解囊、雪中送炭而得此美名。',category:'Characters',category_zh:'人物'},
    {front:'水泊梁山',pinyin:'Shuǐ pō Liáng Shān',back:'The marsh-surrounded mountain fortress; its natural water defenses made it nearly impregnable.',back_zh:'四面皆水的山寨，水泊天堑令官军难以攻克。',category:'Places',category_zh:'地名'},
    {front:'方腊之战',pinyin:'Fāng Là zhī zhàn',back:'The campaign against rebel Fang La — the final major battle where many of the 108 heroes die.',back_zh:'梁山好汉奉旨征讨方腊，伤亡惨重，众多好汉在此战中牺牲。',category:'Events',category_zh:'事件'},
    {front:'英雄末路',pinyin:'Yīngxióng mò lù',back:'"Hero\'s dead end" — valiant men betrayed and destroyed by the corrupt system they tried to join.',back_zh:'《水浒传》的悲剧主题：英雄们最终被腐朽的体制出卖与消灭。',category:'Themes',category_zh:'主题'},
    {front:'燕青',pinyin:'Yān Qīng',back:'"Wandering Wild" — skilled in sumo and music; one of few heroes who foresees doom and quietly disappears.',back_zh:'绰号"浪子"，多才多艺，少数预见招安之祸并悄然离去的好汉。',category:'Characters',category_zh:'人物'},
    {front:'卢俊义',pinyin:'Lú Jùnyì',back:'Wealthy nobleman and supreme martial artist tricked into joining Liangshan; becomes second-in-command.',back_zh:'河北大财主，武艺超群，被吴用设计逼上梁山，位居第二把交椅。',category:'Characters',category_zh:'人物'},
    {front:'朱贵',pinyin:'Zhū Guì',back:'Innkeeper spy at the foot of Liangshan who recruits heroes by luring them to the marsh stronghold.',back_zh:'梁山山脚酒店老板，负责打探消息、招募好汉上山。',category:'Characters',category_zh:'人物'},
    {front:'鸳鸯楼',pinyin:'Yuānyāng Lóu',back:'Mandarin Duck Tower — where Wu Song avenges himself on his enemies in a famous bloodbath.',back_zh:'武松在此手刃张都监等仇人，大开杀戒。',category:'Places',category_zh:'地名'},
  ],

  xiyou: [
    {front:'孙悟空',pinyin:'Sūn Wùkōng',back:'The Monkey King — born from a magic stone, mastered 72 transformations, rebelled against Heaven, then journeyed west.',back_zh:'花果山石猴，学得长生不老与七十二变，大闹天宫后随唐僧西天取经。',category:'Characters',category_zh:'人物'},
    {front:'唐僧',pinyin:'Táng Sēng',back:'Tang Sanzang (Xuanzang) — the Buddhist monk sent by Guanyin to retrieve scriptures from the Western Paradise.',back_zh:'唐朝高僧，奉观音之命往西天取经，又名三藏法师。',category:'Characters',category_zh:'人物'},
    {front:'猪八戒',pinyin:'Zhū Bājiè',back:'Zhu Bajie — the Pig Immortal banished from Heaven for flirting with the Moon Goddess; lazy but good-hearted.',back_zh:'天蓬元帅转世，因调戏嫦娥被贬下凡，好吃懒做却心地不坏。',category:'Characters',category_zh:'人物'},
    {front:'沙悟净',pinyin:'Shā Wùjìng',back:'Sandy — the Curtain-Lifting General banished to the River of Flowing Sands; quiet, loyal third disciple.',back_zh:'卷帘大将，因失手打碎琉璃盏被贬流沙河，忠厚老实。',category:'Characters',category_zh:'人物'},
    {front:'如来佛祖',pinyin:'Rúlái Fózǔ',back:'The Buddha — trapped the Monkey King under Five Elements Mountain for 500 years; presides over the Western Paradise.',back_zh:'将孙悟空压于五行山下五百年，主管西方极乐世界。',category:'Characters',category_zh:'人物'},
    {front:'七十二变',pinyin:'Qīshíèr biàn',back:'"72 Transformations" — Sun Wukong\'s shape-shifting ability allowing him to become any person, animal, or object.',back_zh:'孙悟空掌握的变化之术，可化身为任何人、兽或物体。',category:'Magic',category_zh:'法术'},
    {front:'筋斗云',pinyin:'Jīndǒu yún',back:'"Somersault Cloud" — Sun Wukong\'s flying technique; one somersault covers 108,000 li.',back_zh:'孙悟空的腾云法术，一个跟斗可行十万八千里。',category:'Magic',category_zh:'法术'},
    {front:'如意金箍棒',pinyin:'Rúyì jīn gūbàng',back:'The magic staff taken from the Dragon King; weighs 13,500 jin and can extend or shrink at will.',back_zh:'孙悟空从东海龙王处得来的法宝，重一万三千五百斤，可大可小。',category:'Magic',category_zh:'法术'},
    {front:'紧箍咒',pinyin:'Jǐn gū zhòu',back:'"Band-Tightening Spell" — the incantation Guanyin gave Tang Sanzang to control Sun Wukong via a golden headband.',back_zh:'观音授予唐僧用以控制孙悟空的咒语，念咒则金箍收紧令悟空头痛难忍。',category:'Magic',category_zh:'法术'},
    {front:'观音菩萨',pinyin:'Guānyīn Púsà',back:'Goddess of Mercy — orchestrated the entire journey and guided the pilgrims through crises.',back_zh:'慈悲女神，策划取经之旅，招募三位徒弟，多次化解危机。',category:'Characters',category_zh:'人物'},
    {front:'大闹天宫',pinyin:'Dà nào tiān gōng',back:'"Havoc in Heaven" — Sun Wukong\'s rebellion against the Jade Emperor before being subdued by the Buddha.',back_zh:'孙悟空大闹天宫，偷仙桃、盗金丹，最终被如来佛镇压于五行山。',category:'Events',category_zh:'事件'},
    {front:'五行山',pinyin:'Wǔ Xíng Shān',back:'Five Elements Mountain — the prison where the Buddha trapped Sun Wukong for 500 years.',back_zh:'如来佛用五指化成的大山，将孙悟空压于此处五百年。',category:'Places',category_zh:'地名'},
    {front:'西天取经',pinyin:'Xītiān qǔ jīng',back:'"Journey to fetch scriptures from the West" — the central quest spanning 14 years and 81 tribulations.',back_zh:'唐僧师徒历时十四年、历经八十一难，前往西天雷音寺取回佛经。',category:'Events',category_zh:'事件'},
    {front:'八十一难',pinyin:'Bāshíyī nàn',back:'"81 Tribulations" — the predestined number of trials the pilgrims must overcome before achieving enlightenment.',back_zh:'取经团队注定要经历的八十一场磨难，每一难都是修行的考验。',category:'Themes',category_zh:'主题'},
    {front:'牛魔王',pinyin:'Niú Mówáng',back:'"Bull Demon King" — Sun Wukong\'s former sworn brother; husband of Princess Iron Fan.',back_zh:'孙悟空昔日结拜兄弟，后成对头，为铁扇公主之夫。',category:'Characters',category_zh:'人物'},
    {front:'铁扇公主',pinyin:'Tiě Shān Gōngzhǔ',back:'"Princess Iron Fan" — possesses the Banana Leaf Fan that can extinguish Flaming Mountain.',back_zh:'持芭蕉扇的女妖，可以扇灭火焰山，多次与孙悟空斗法。',category:'Characters',category_zh:'人物'},
    {front:'火焰山',pinyin:'Huǒyàn Shān',back:'Flaming Mountain — an impassable wall of fire blocking the pilgrims\' path westward.',back_zh:'横亘在取经路上的熊熊火山，唯有铁扇公主的芭蕉扇方能将其扑灭。',category:'Places',category_zh:'地名'},
    {front:'蟠桃园',pinyin:'Pántáo Yuán',back:'The Peach Orchard of Immortality — Sun Wukong ate all the immortal peaches, triggering his war with Heaven.',back_zh:'天宫蟠桃园，孙悟空奉命看管却偷吃仙桃，由此引发与天庭的冲突。',category:'Places',category_zh:'地名'},
    {front:'三打白骨精',pinyin:'Sān dǎ Báigǔ Jīng',back:'"Three Blows to the White Bone Demon" — Sun Wukong slays a demon three times despite Tang Sanzang expelling him.',back_zh:'孙悟空三次识破并击杀白骨精，却因唐僧误解被逐出师门。',category:'Events',category_zh:'事件'},
    {front:'取经的意义',pinyin:'Qǔ jīng de yìyì',back:'The deeper meaning of the journey: inner cultivation — each demon represents a temptation of the mind.',back_zh:'取经的深层含义：心性的修炼，每个妖魔都象征着心中需要克服的执念与欲望。',category:'Themes',category_zh:'主题'},
    {front:'雷音寺',pinyin:'Léiyīn Sì',back:'Thunder Monastery — the destination in the Western Paradise where the scriptures are stored.',back_zh:'西天极乐世界中存放佛经之处，是取经之旅的终点。',category:'Places',category_zh:'地名'},
    {front:'齐天大圣',pinyin:'Qí tiān dà shèng',back:'"Great Sage Equal to Heaven" — Sun Wukong\'s self-proclaimed title during his rebellion against the Jade Emperor.',back_zh:'孙悟空自封的称号，大闹天宫时自号"齐天大圣"。',category:'Characters',category_zh:'人物'},
    {front:'真假美猴王',pinyin:'Zhēn jiǎ měi hóu wáng',back:'"True and False Monkey King" — the Six-Eared Macaque impersonates Sun Wukong; only the Buddha can tell them apart.',back_zh:'六耳猕猴变成孙悟空的模样，最终由如来佛祖道出真相。',category:'Events',category_zh:'事件'},
    {front:'悟',pinyin:'Wù',back:'"Awakening / Enlightenment" — the character in all three disciples\' names, signifying the journey\'s spiritual goal.',back_zh:'孙悟空、猪悟能、沙悟净三人法名中均含"悟"字，象征修行觉悟之旨。',category:'Themes',category_zh:'主题'},
    {front:'花果山',pinyin:'Huā Guǒ Shān',back:'Flower-Fruit Mountain — Sun Wukong\'s birthplace and kingdom; home of the Water Curtain Cave.',back_zh:'孙悟空的出生地与王国，内有水帘洞，统领众多猴子猴孙。',category:'Places',category_zh:'地名'},
    {front:'红孩儿',pinyin:'Hóng Háizi',back:'"Red Boy" — the Bull Demon King\'s son; a fire-breathing demon subdued by Guanyin.',back_zh:'牛魔王之子，能喷三昧真火，曾擒拿唐僧，后被观音菩萨收服。',category:'Characters',category_zh:'人物'},
    {front:'玉皇大帝',pinyin:'Yù Huáng Dàdì',back:'The Jade Emperor — supreme ruler of Heaven; humiliated by Sun Wukong\'s rebellion.',back_zh:'天庭最高统治者，被孙悟空大闹天宫所辱，请如来佛祖出手降妖。',category:'Characters',category_zh:'人物'},
    {front:'天蓬元帅',pinyin:'Tiānpéng Yuánshuài',back:'Marshal Tianpeng — Zhu Bajie\'s former title as commander of the Heavenly River navy.',back_zh:'猪八戒在天庭时的职位，统领天河水军，因调戏嫦娥被贬为猪形。',category:'Characters',category_zh:'人物'},
    {front:'三藏真经',pinyin:'Sān Zàng zhēn jīng',back:'"Three Baskets of True Scriptures" — the 5,048 scrolls of Buddhist texts retrieved from the Western Paradise.',back_zh:'从西天取回的五千零四十八卷佛经，又称大乘真经。',category:'Events',category_zh:'事件'},
    {front:'斗战胜佛',pinyin:'Dòu zhàn shèng fó',back:'"Victorious Fighting Buddha" — Sun Wukong\'s title granted by the Buddha upon successful completion of the journey.',back_zh:'孙悟空取经功成后被如来佛封为"斗战胜佛"，是其修行圆满的证明。',category:'Characters',category_zh:'人物'},
  ],

  sanguoyanyi: [
    {front:'刘备',pinyin:'Liú Bèi',back:'Founder of Shu Han; claimed descent from the Han imperial family; known for benevolence and weeping diplomacy.',back_zh:'蜀汉开国君主，自称汉室宗亲，以仁义著称，善用人心。',category:'Characters',category_zh:'人物'},
    {front:'曹操',pinyin:'Cáo Cāo',back:'Warlord who unified northern China; his son founded the Wei kingdom; brilliant but ruthless.',back_zh:'统一北方的枭雄，其子曹丕建立曹魏，足智多谋却也奸诈多疑。',category:'Characters',category_zh:'人物'},
    {front:'诸葛亮',pinyin:'Zhūgě Liàng',back:'"Crouching Dragon" — Liu Bei\'s supreme strategist; inventor of the wooden ox and eight-formation array.',back_zh:'"卧龙"，刘备的首席谋士，发明木牛流马与八阵图，鞠躬尽瘁，死而后已。',category:'Characters',category_zh:'人物'},
    {front:'关羽',pinyin:'Guān Yǔ',back:'Liu Bei\'s sworn brother; god of war and loyalty; later deified as Guan Di.',back_zh:'刘备义兄，忠义化身，斩颜良、水淹七军，后世尊为"关帝"，成为武神。',category:'Characters',category_zh:'人物'},
    {front:'张飞',pinyin:'Zhāng Fēi',back:'Third sworn brother; fierce warrior known for his thunderous voice; killed by his own officers while sleeping.',back_zh:'刘备三弟，勇猛无双，声如雷震，后因醉酒鞭打士卒而被部下所杀。',category:'Characters',category_zh:'人物'},
    {front:'赤壁之战',pinyin:'Chìbì zhī zhàn',back:'Battle of Red Cliffs (208 AD) — Sun Quan and Liu Bei\'s fire attack decimated Cao Cao\'s navy.',back_zh:'公元208年，孙刘联军火烧赤壁，大败曹操80万水师，奠定三分天下格局。',category:'Events',category_zh:'事件'},
    {front:'三顾茅庐',pinyin:'Sān gù máolú',back:'"Three visits to the thatched cottage" — Liu Bei\'s persistent personal courtship of Zhuge Liang.',back_zh:'刘备三次亲赴隆中请诸葛亮出山，成为礼贤下士的千古典范。',category:'Idioms',category_zh:'成语'},
    {front:'隆中对',pinyin:'Lóngzhōng duì',back:'The Longzhong Plan — Zhuge Liang\'s strategic blueprint: take Yi and Jing provinces, ally with Sun Quan.',back_zh:'诸葛亮为刘备规划的战略蓝图：占荆益二州，联孙抗曹，以图中原。',category:'Events',category_zh:'事件'},
    {front:'空城计',pinyin:'Kōngchéng jì',back:'"Empty Fort Stratagem" — Zhuge Liang played the lute calmly atop an open gate, bluffing Sima Yi into retreat.',back_zh:'诸葛亮兵力空虚时，从容弹琴于城楼，使司马懿生疑退兵的著名计谋。',category:'Events',category_zh:'事件'},
    {front:'周瑜',pinyin:'Zhōu Yú',back:'Sun Quan\'s brilliant naval commander; mastermind of the Red Cliffs fire attack.',back_zh:'东吴大都督，赤壁之战的策划者，英俊潇洒，与诸葛亮多番斗智。',category:'Characters',category_zh:'人物'},
    {front:'草船借箭',pinyin:'Cǎo chuán jiè jiàn',back:'"Borrowing arrows with straw boats" — used fog and straw-packed boats to collect 100,000 arrows from Cao Cao.',back_zh:'诸葛亮趁雾在草船上插满稻草，诱曹军射箭，一举借得十万支箭。',category:'Events',category_zh:'事件'},
    {front:'桃园结义',pinyin:'Táoyuán jiéyì',back:'"Oath of the Peach Garden" — Liu Bei, Guan Yu, and Zhang Fei\'s vow of brotherhood.',back_zh:'刘关张三人在桃园结拜为兄弟，誓共生死，是蜀汉集团的精神基石。',category:'Events',category_zh:'事件'},
    {front:'魏蜀吴',pinyin:'Wèi Shǔ Wú',back:'Wei, Shu, and Wu — the Three Kingdoms that divided China after the Han dynasty collapsed.',back_zh:'汉末三分天下的三个政权：曹魏、蜀汉、东吴，三国鼎立。',category:'Places',category_zh:'地名'},
    {front:'出师表',pinyin:'Chūshī biǎo',back:'"Memorial on the Eve of the Northern Campaign" — Zhuge Liang\'s famous letter filled with loyalty and sorrow.',back_zh:'诸葛亮北伐前写给后主刘禅的奏表，字字忠心，千古传诵。',category:'Events',category_zh:'事件'},
    {front:'赵云',pinyin:'Zhào Yún',back:'"Zhao Zilong" — rescued the infant Liu Chan at Changban; symbol of courage and loyalty.',back_zh:'赵子龙，长坂坡单骑救主，七进七出曹军中救出幼主阿斗。',category:'Characters',category_zh:'人物'},
    {front:'吕布',pinyin:'Lǚ Bù',back:'The mightiest warrior in the era, known for his red hare horse and halberd; treacherous, served three lords.',back_zh:'三国第一武将，骑赤兔马、使方天画戟，但生性反复无常，三易其主。',category:'Characters',category_zh:'人物'},
    {front:'貂蝉',pinyin:'Diāochán',back:'One of the Four Beauties of ancient China; used in the "Chain Stratagem" to divide Dong Zhuo and Lü Bu.',back_zh:'中国古代四大美女之一，王允义女，以连环计周旋于董卓与吕布之间。',category:'Characters',category_zh:'人物'},
    {front:'连环计',pinyin:'Liánhuán jì',back:'"Interlocking Stratagems" — Wang Yun\'s plan to use Diaochan to set Dong Zhuo and Lü Bu against each other.',back_zh:'王允借貂蝉之美，先许董卓后赠吕布，使二人反目。',category:'Events',category_zh:'事件'},
    {front:'司马懿',pinyin:'Sīmǎ Yì',back:'Cao Wei\'s cunning strategist who outlasted Zhuge Liang through patience; his descendants founded the Jin dynasty.',back_zh:'曹魏谋士，以忍耐熬死诸葛亮，其孙司马炎最终建立晋朝统一三国。',category:'Characters',category_zh:'人物'},
    {front:'五虎上将',pinyin:'Wǔ hǔ shàngjiàng',back:'"Five Tiger Generals" of Shu Han: Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, Huang Zhong.',back_zh:'蜀汉五位顶尖武将：关羽、张飞、赵云、马超、黄忠，合称五虎上将。',category:'Characters',category_zh:'人物'},
    {front:'分久必合合久必分',pinyin:'Fēn jiǔ bì hé hé jiǔ bì fēn',back:'"What is long divided must unite; what is long united must divide" — the novel\'s famous opening line.',back_zh:'《三国演义》开篇名句，道出历史分合循环的哲理。',category:'Themes',category_zh:'主题'},
    {front:'华容道',pinyin:'Huárong dào',back:'Huarong Road — where Guan Yu let Cao Cao escape after Red Cliffs out of old loyalty.',back_zh:'赤壁败后曹操落荒逃路，关羽念旧情义释放曹操，违反了诸葛亮的军令。',category:'Events',category_zh:'事件'},
    {front:'孙权',pinyin:'Sūn Quán',back:'Ruler of Eastern Wu; formed alliance with Liu Bei against Cao Cao at Red Cliffs.',back_zh:'东吴之主，继承父兄基业，联刘抗曹，赤壁大捷奠定三分天下之势。',category:'Characters',category_zh:'人物'},
    {front:'七擒孟获',pinyin:'Qī qín Mèng Huò',back:'"Seven Captures of Meng Huo" — Zhuge Liang captured and released the southern chief seven times to win genuine submission.',back_zh:'诸葛亮七擒七纵南蛮首领孟获，以心服口服取代武力征服。',category:'Events',category_zh:'事件'},
    {front:'马谡失街亭',pinyin:'Mǎ Sù shī Jiē Tíng',back:'Ma Su\'s loss of Jieting — disobeyed orders and lost a crucial pass; Zhuge Liang wept and executed him.',back_zh:'马谡刚愎自用失守街亭，诸葛亮挥泪斩马谡，自贬三级。',category:'Events',category_zh:'事件'},
    {front:'义绝',pinyin:'Yì jué',back:'"Supreme in Righteousness" — Guan Yu\'s title; he personifies loyalty and honor in the novel.',back_zh:'关羽的称号"义绝"，是全书道德理想的人格象征。',category:'Themes',category_zh:'主题'},
    {front:'木牛流马',pinyin:'Mùniú liúmǎ',back:'"Wooden Oxen and Gliding Horses" — mechanical transport devices invented by Zhuge Liang for mountain supply runs.',back_zh:'诸葛亮发明的运输工具，用于北伐期间在山地运送粮草。',category:'Events',category_zh:'事件'},
    {front:'虎牢关',pinyin:'Hǔláo Guān',back:'Tiger Cage Pass — where Liu Bei, Guan Yu, and Zhang Fei fought Lü Bu three-on-one.',back_zh:'虎牢关前，刘关张三英战吕布，是《三国演义》最脍炙人口的战斗场面之一。',category:'Events',category_zh:'事件'},
    {front:'曹操煮酒论英雄',pinyin:'Cáo Cāo zhǔ jiǔ lùn yīngxióng',back:'"Discussing Heroes over Warm Wine" — Cao Cao probes Liu Bei\'s ambitions; Liu Bei deflects cleverly.',back_zh:'曹操与刘备煮酒论天下英雄，刘备故作懦弱以掩真实抱负。',category:'Events',category_zh:'事件'},
    {front:'徐庶',pinyin:'Xú Shù',back:'Liu Bei\'s first great advisor who recommended Zhuge Liang; left for Cao Cao but never offered him a single stratagem.',back_zh:'刘备早期谋士，推荐诸葛亮，后因母被扣押而离去，至死不为曹操献一计。',category:'Characters',category_zh:'人物'},
  ],

  hongloumeng: [
    {front:'贾宝玉',pinyin:'Jiǎ Bǎoyù',back:'The male protagonist; born with a jade in his mouth; rejects Confucian career in favor of poetry and his female companions.',back_zh:'男主角，口衔通灵宝玉而生，厌恶仕途经济，痴情于大观园中的女儿们。',category:'Characters',category_zh:'人物'},
    {front:'林黛玉',pinyin:'Lín Dàiyù',back:'The female protagonist; Baoyu\'s soul mate; a reincarnated fairy flower; brilliant poet who dies of heartbreak.',back_zh:'女主角，绛珠仙草转世，才情横溢，与宝玉情深意笃，最终含泪而逝。',category:'Characters',category_zh:'人物'},
    {front:'薛宝钗',pinyin:'Xuē Bǎochāi',back:'Baoyu\'s eventual wife; beautiful, virtuous, pragmatic; her golden locket matches Baoyu\'s jade.',back_zh:'宝玉最终迎娶之人，容貌出众、温柔大方，金锁与宝玉相配，称"金玉良缘"。',category:'Characters',category_zh:'人物'},
    {front:'大观园',pinyin:'Dàguānyuán',back:'Grand View Garden — the magnificent garden where the Twelve Beauties of Jinling live and compose poetry.',back_zh:'为迎接元妃省亲而建的豪华园林，金陵十二钗在此居住、吟诗。',category:'Places',category_zh:'地名'},
    {front:'金陵十二钗',pinyin:'Jīnlíng shí èr chāi',back:'"Twelve Beauties of Jinling" — the twelve principal women whose fates are all prophesied in celestial registers.',back_zh:'书中十二位主要女性人物，命运均已载入金陵十二钗正册，各有判词预示结局。',category:'Characters',category_zh:'人物'},
    {front:'通灵宝玉',pinyin:'Tōnglíng bǎoyù',back:'The "Magic Jade" — Baoyu\'s birthstone; actually the discarded stone from Nüwa\'s sky-mending experiencing mortal life.',back_zh:'贾宝玉随身携带的神奇宝石，实为女娲补天时遗弃的顽石，历经红尘以完修行。',category:'Magic',category_zh:'法术'},
    {front:'贾母',pinyin:'Jiǎ Mǔ',back:'"Grandmother Jia" — the matriarch who dotes on Baoyu; her death accelerates the family\'s final collapse.',back_zh:'贾府老祖宗，溺爱宝玉，是维系大家族的精神支柱，其去世加速了家族的败落。',category:'Characters',category_zh:'人物'},
    {front:'王熙凤',pinyin:'Wáng Xīfèng',back:'"Phoenix Wang" — the brilliant, ruthless manager of the Jia household; her corruption helps doom the family.',back_zh:'"凤辣子"，贾府当家人，精明强干却心狠手辣，中饱私囊，加速家族衰败。',category:'Characters',category_zh:'人物'},
    {front:'木石前盟',pinyin:'Mùshí qián méng',back:'"Wood-Stone Predestined Bond" — Baoyu and Daiyu\'s spiritual connection from a previous life.',back_zh:'宝玉（神石）与黛玉（绛珠仙草）前世的宿缘，黛玉以泪水偿还灌溉之恩。',category:'Themes',category_zh:'主题'},
    {front:'金玉良缘',pinyin:'Jīnyù liángyuán',back:'"Gold-Jade Destined Match" — the match between Baoyu (jade) and Baochai (golden locket).',back_zh:'宝玉（玉）与宝钗（金锁）的命定婚配，代表了封建家长的意志。',category:'Themes',category_zh:'主题'},
    {front:'红楼梦曲',pinyin:'Hónglóumèng qǔ',back:'The "Dream of Red Mansions" arias — twelve songs in Baoyu\'s dream that prophesy each beauty\'s tragic fate.',back_zh:'宝玉梦游太虚幻境时所听到的十二首曲子，分别预示金陵十二钗各自的命运。',category:'Themes',category_zh:'主题'},
    {front:'太虚幻境',pinyin:'Tàixū Huànjìng',back:'"Illusory Realm of Great Void" — the celestial realm Baoyu visits in a dream where he sees the fates of all women.',back_zh:'宝玉梦入的仙界，在此看到金陵十二钗的命运册页，体现全书虚幻主题。',category:'Places',category_zh:'地名'},
    {front:'葬花吟',pinyin:'Zàng huā yín',back:'"Burial of Flowers" — Daiyu\'s famous poem mourning fallen petals as a metaphor for her own doomed beauty.',back_zh:'林黛玉最著名的诗作，以埋葬落花自喻，哀叹红颜薄命、美好易逝。',category:'Events',category_zh:'事件'},
    {front:'刘姥姥',pinyin:'Liú Lǎolao',back:'Granny Liu — a country woman whose outsider perspective ironically reveals the family\'s absurd extravagance.',back_zh:'乡下老妇，两进荣国府，以局外人视角折射出贾府奢靡荒诞。',category:'Characters',category_zh:'人物'},
    {front:'诗社',pinyin:'Shī shè',back:'"Poetry Club" — the Crab Flower Poetry Club founded in the Garden; their verses are Chinese literature\'s finest.',back_zh:'大观园中众姐妹创立的海棠诗社，所作诗词被视为古典文学精品。',category:'Events',category_zh:'事件'},
    {front:'探春',pinyin:'Tàn Chūn',back:'Jia Tanchun — talented administrator who briefly reforms the Garden\'s finances before being married off far away.',back_zh:'贾探春，才干出众，曾短暂主持改革大观园经济，后远嫁他乡，生离胜死别。',category:'Characters',category_zh:'人物'},
    {front:'晴雯',pinyin:'Qíngwén',back:'Qingwen — Baoyu\'s favorite maid; spirited and proud; falsely accused and dismissed, dies in poverty.',back_zh:'宝玉最钟爱的丫鬟，心高气傲、才貌出众，遭污蔑驱逐，含冤病逝。',category:'Characters',category_zh:'人物'},
    {front:'袭人',pinyin:'Xí Rén',back:'Xiren — Baoyu\'s chief maid; gentle and loyal; after Baoyu enters the monastery she marries an actor.',back_zh:'宝玉的大丫鬟，温柔体贴、忠心侍主，宝玉出家后改嫁伶人蒋玉菡。',category:'Characters',category_zh:'人物'},
    {front:'秦可卿',pinyin:'Qín Kěqīng',back:'Qin Keqing — Jia Rong\'s wife; her mysterious death and lavish mourning signal the Jia family\'s beginning decline.',back_zh:'贾蓉之妻，死因成谜，其葬礼极尽奢华，是贾府由盛转衰的重要转折点。',category:'Characters',category_zh:'人物'},
    {front:'色空',pinyin:'Sè kōng',back:'"Form is emptiness" — the Buddhist theme of the novel; all the glory is ultimately void.',back_zh:'《红楼梦》的佛家主题，一切繁华富贵终归于空，"白茫茫大地真干净"。',category:'Themes',category_zh:'主题'},
    {front:'史湘云',pinyin:'Shǐ Xiāngyún',back:'Shi Xiangyun — free-spirited beauty who loves drinking and poetry; her husband dies young, leaving her in poverty.',back_zh:'豪爽洒脱、才情过人，爱饮酒、好作诗，婚后夫君早逝，孤苦度日。',category:'Characters',category_zh:'人物'},
    {front:'元春省亲',pinyin:'Yuánchūn xǐng qīn',back:'"Imperial Concubine Yuan\'s Visit Home" — the peak of the Jia family\'s glory; proximity to power that ultimately dooms them.',back_zh:'贾府最鼎盛的时刻，贵妃元春归省，盛况空前；然而至高荣耀背后埋藏着隐患。',category:'Events',category_zh:'事件'},
    {front:'惜春',pinyin:'Xī Chūn',back:'Jia Xichun — the youngest Jia sister, a painter; after witnessing her family\'s ruin, she becomes a nun.',back_zh:'贾家最小的姑娘，擅长绘画，亲历家族覆灭后看破红尘，遁入空门为尼。',category:'Characters',category_zh:'人物'},
    {front:'宝玉出家',pinyin:'Bǎoyù chūjiā',back:'Baoyu\'s renunciation — after Daiyu\'s death, Baoyu passes the imperial exam then disappears into monkhood.',back_zh:'黛玉逝世后，宝玉考中举人，随后抛却一切，随一僧一道飘然出家。',category:'Events',category_zh:'事件'},
    {front:'香菱',pinyin:'Xiānglíng',back:'Xiangling — kidnapped as a child and sold as a concubine; a devoted student of poetry who dies of illness.',back_zh:'幼时被拐卖，后成薛蟠小妾，痴迷学诗，最终因被正妻虐待而病逝。',category:'Characters',category_zh:'人物'},
    {front:'假作真时真亦假',pinyin:'Jiǎ zuò zhēn shí zhēn yì jiǎ',back:'"When the false seems real, the real becomes false" — the novel\'s philosophical motto about illusion and reality.',back_zh:'太虚幻境石牌坊上的对联，道出《红楼梦》虚实相生的核心哲学。',category:'Themes',category_zh:'主题'},
    {front:'曹雪芹',pinyin:'Cáo Xuěqín',back:'Cao Xueqin — the author; wrote the first 80 chapters based partly on his own family\'s decline from splendor to poverty.',back_zh:'《红楼梦》作者，前80回以其家族由繁华到败落的亲身经历为蓝本。',category:'Characters',category_zh:'人物'},
    {front:'警幻仙姑',pinyin:'Jǐnghuan Xiāngū',back:'"Fairy Disenchantment" — the goddess who guides Baoyu through the Illusory Realm and shows him the registers.',back_zh:'太虚幻境中的仙子，引领宝玉游历仙境，展示命运册页并令其聆听红楼梦曲。',category:'Characters',category_zh:'人物'},
    {front:'妙玉',pinyin:'Miào Yù',back:'Miaoyu — a Buddhist nun living in the Garden; pure, proud, secretly loves Baoyu; later abducted by bandits.',back_zh:'栊翠庵尼姑，孤高自洁，暗慕宝玉，最终被盗贼劫走，下落不明。',category:'Characters',category_zh:'人物'},
    {front:'贾府四大家族',pinyin:'Jiǎ fǔ sì dà jiāzú',back:'The Four Great Families — Jia, Shi, Wang, and Xue — whose interconnected decline mirrors an era\'s end.',back_zh:'贾史王薛四大家族，彼此姻亲勾连，其衰落共同象征着封建贵族阶级的没落。',category:'Characters',category_zh:'人物'},
  ],
};

const MCQS = {
  shuihu: [
    {question:'What is Song Jiang\'s famous nickname?',question_zh:'宋江的绰号是什么？',options:['Black Whirlwind','Timely Rain','Resourceful Star','Flea on a Drum'],options_zh:['黑旋风','及时雨','智多星','鼓上蚤'],correct:1,explanation:'Song Jiang was known as "Timely Rain" (及时雨) for his generosity to those in need.',explanation_zh:'宋江因慷慨解囊、雪中送炭而得"及时雨"之绰号。'},
    {question:'What does the banner "替天行道" (Act on Behalf of Heaven) represent?',question_zh:'"替天行道"这面旗帜代表什么？',options:['The outlaws\' creed justifying their rebellion as righteous','A military formation used in battle','The name of Liangshan\'s main hall','Cao Cao\'s motto'],options_zh:['好汉替天行道、劫富济贫的信条','作战时使用的阵法','梁山主厅的名称','曹操的座右铭'],correct:0,explanation:'"Act on Behalf of Heaven" was the moral justification the Liangshan outlaws used for their rebellion against corrupt officials.',explanation_zh:'"替天行道"是梁山好汉对抗腐败官府的道义旗帜。'},
    {question:'On which mountain ridge did Wu Song famously kill a tiger with his bare hands?',question_zh:'武松赤手空拳打死老虎是在哪里？',options:['Liangshan','Jingyang Ridge','Five Elements Mountain','Flower-Fruit Mountain'],options_zh:['梁山','景阳冈','五行山','花果山'],correct:1,explanation:'Wu Song killed the tiger on Jingyang Ridge (景阳冈) after drinking eighteen bowls of wine at an inn.',explanation_zh:'武松在景阳冈喝了十八碗酒后，赤手空拳打死了一只老虎。'},
    {question:'Who is the military strategist of Liangshan nicknamed "Resourceful Star"?',question_zh:'梁山军师"智多星"是谁？',options:['Song Jiang','Wu Yong','Lin Chong','Lu Zhishen'],options_zh:['宋江','吴用','林冲','鲁智深'],correct:1,explanation:'Wu Yong (吴用) was the military strategist nicknamed "Resourceful Star" (智多星), masterminding most of the outlaws\' schemes.',explanation_zh:'吴用绰号"智多星"，是梁山的军师，策划了大多数行动。'},
    {question:'Who was the first leader of Liangshan before Song Jiang took over?',question_zh:'宋江成为首领之前，梁山的领头人是谁？',options:['Wu Yong','Chao Gai','Lu Junyi','Li Kui'],options_zh:['吴用','晁盖','卢俊义','李逵'],correct:1,explanation:'Chao Gai (晁盖) was the first leader of Liangshan and led the famous robbery of the birthday tribute convoy.',explanation_zh:'晁盖是梁山的早期首领，领导了劫取生辰纲的行动。'},
    {question:'What is the meaning of the idiom "逼上梁山" that originated from this novel?',question_zh:'"逼上梁山"这个成语是什么意思？',options:['To climb a mountain','Forced into rebellion against one\'s will','To seek adventure voluntarily','To hide from enemies'],options_zh:['爬山','被逼无奈走上反抗之路','主动去寻求冒险','躲避仇敌'],correct:1,explanation:'"逼上梁山" means to be forced into a desperate situation and compelled to rebel, originating from heroes like Lin Chong being driven to Liangshan.',explanation_zh:'"逼上梁山"意指被迫走上不得不反抗的道路，源自林冲等英雄被逼上山的故事。'},
    {question:'What was Lin Chong\'s official position before being framed and driven to Liangshan?',question_zh:'林冲被陷害前在朝廷担任什么职务？',options:['Tax collector','Imperial arms instructor','Court judge','Border general'],options_zh:['税务官','八十万禁军教头','朝廷法官','边关将领'],correct:1,explanation:'Lin Chong was an imperial arms instructor (八十万禁军教头) in the capital before Gao Qiu framed him.',explanation_zh:'林冲被高俅陷害前是东京八十万禁军教头。'},
    {question:'Who killed the villain Ximen Qing to avenge his murdered brother?',question_zh:'谁手刃西门庆为兄弟复仇？',options:['Song Jiang','Lin Chong','Wu Song','Li Kui'],options_zh:['宋江','林冲','武松','李逵'],correct:2,explanation:'Wu Song killed Ximen Qing after discovering he had helped Pan Jinlian murder Wu Song\'s brother Wu Dalang.',explanation_zh:'武松得知西门庆与潘金莲合谋毒死兄长武大郎后，手刃仇人为兄报仇。'},
    {question:'How many heroes are there in total on Liangshan, and how are they divided?',question_zh:'梁山好汉共有多少位？如何分组？',options:['36, all heavenly spirits','72, all earthly fiends','108, 36 heavenly spirits and 72 earthly fiends','100, in four battalions'],options_zh:['36位，全为天罡','72位，全为地煞','108位，36天罡和72地煞','100位，分四营'],correct:2,explanation:'There are 108 heroes total — 36 Heavenly Spirits (天罡) and 72 Earthly Fiends (地煞).',explanation_zh:'梁山好汉共108位，分为36天罡和72地煞。'},
    {question:'What was the "生辰纲" (birthday tribute) that was stolen in the novel?',question_zh:'书中被劫取的"生辰纲"是什么？',options:['A convoy of weapons for the emperor','Gold and jewels being sent as birthday gifts to a corrupt official','A tax shipment heading to the capital','Imperial examination results'],options_zh:['给皇帝的武器运输队','送给奸臣生日的金银财宝','前往京城的税款','科举考试结果'],correct:1,explanation:'The birthday tribute was a convoy of gold and jewels being sent to the corrupt official Cai Jing as birthday gifts.',explanation_zh:'生辰纲是押运给奸臣蔡太师的生日礼物，内含金银财宝。'},
    {question:'What distinguishes Lu Zhishen\'s nickname "Flowery Monk" (花和尚)?',question_zh:'"花和尚"鲁智深绰号的由来是什么？',options:['His love of flowers','His full-body tattoos and unmonklike wild behavior','His colorful robes','His flower garden at the monastery'],options_zh:['他喜欢花','他满身花纹刺青且行为粗犷','他穿着色彩鲜艳的僧袍','他在寺庙里种花'],correct:1,explanation:'Lu Zhishen got the nickname "Flowery Monk" because of his full-body tattoos and his rough, unmonklike behavior despite being a monk.',explanation_zh:'鲁智深满身花纹刺青，行为粗犷豪放，与出家人形象大相径庭，故得"花和尚"之名。'},
    {question:'What was Song Jiang\'s ultimate goal that divided the Liangshan brotherhood?',question_zh:'宋江的最终目标是什么？这个目标为什么使梁山好汉产生分歧？',options:['Conquering the entire empire','Receiving imperial amnesty and serving the emperor','Building a permanent independent kingdom','Defeating all rival outlaw groups'],options_zh:['征服整个帝国','接受朝廷招安为朝廷效力','建立永久独立王国','击败所有竞争的山寨'],correct:1,explanation:'Song Jiang\'s goal of receiving imperial amnesty (招安) divided the heroes — some wanted independence while Song Jiang wanted legitimacy.',explanation_zh:'宋江一心招安，希望接受朝廷招抚，但许多好汉反对，认为这是出卖兄弟的行为，由此引发内部矛盾。'},
    {question:'In which major battle did many of the 108 heroes die, completing their tragic arc?',question_zh:'哪场大战中众多梁山好汉牺牲，完成了悲剧命运？',options:['The battle against Gao Qiu','The campaign against Fang La','The defense of Liangshan','The siege of the capital'],options_zh:['讨伐高俅之战','征讨方腊之战','保卫梁山之战','攻打京城之战'],correct:1,explanation:'The campaign against the rebel Fang La (方腊) was catastrophic — many of the 108 heroes died there, fulfilling the novel\'s tragic theme.',explanation_zh:'征讨方腊之战伤亡惨重，众多好汉在此战中牺牲，完成了全书的悲剧主题。'},
    {question:'Who is described as the supreme martial artist among the 108 heroes who was tricked into joining Liangshan?',question_zh:'被计诱上梁山的武艺最高强的好汉是谁？',options:['Song Jiang','Wu Yong','Lu Junyi','Yan Qing'],options_zh:['宋江','吴用','卢俊义','燕青'],correct:2,explanation:'Lu Junyi (卢俊义) was a wealthy nobleman and supreme martial artist tricked by Wu Yong into joining Liangshan; he became second-in-command.',explanation_zh:'卢俊义是河北大财主、武艺超群，被吴用设计逼上梁山，位居梁山第二把交椅。'},
    {question:'Which of the 108 heroes wisely foresees the doom of the amnesty plan and quietly disappears?',question_zh:'哪位好汉预见到招安的悲剧结局而悄然离去？',options:['Li Kui','Song Jiang','Yan Qing','Wu Song'],options_zh:['李逵','宋江','燕青','武松'],correct:2,explanation:'Yan Qing (燕青), nicknamed "Wandering Wild," was one of the few heroes who saw the futility of the amnesty path and disappeared quietly.',explanation_zh:'燕青绰号"浪子"，是少数预见招安之祸并悄然离去的好汉，避免了悲剧结局。'},
    {question:'What characteristic defines Li Kui\'s personality in the novel?',question_zh:'李逵的性格特征是什么？',options:['Calm and strategic','Fiercely loyal and impulsive, wielding twin axes','Skilled in water combat','Excellent at disguise and intelligence'],options_zh:['沉着有谋略','疯狂忠诚且冲动莽撞，使双斧','擅长水战','精于伪装和情报'],correct:1,explanation:'Li Kui, nicknamed "Black Whirlwind," was known for his ferocious loyalty to Song Jiang and his impulsive, violent temperament, fighting with twin axes.',explanation_zh:'李逵绰号"黑旋风"，以对宋江的狂热忠义和鲁莽冲动著称，惯使双斧。'},
    {question:'What is the name of the natural feature that protected Liangshan from imperial attacks?',question_zh:'保护梁山免受官军进攻的天然地形是什么？',options:['A mountain range','Liangshan Marsh — water surrounding the stronghold','A deep forest','A desert wasteland'],options_zh:['山脉','梁山泊——四面环绕的水泊','茂密森林','荒漠'],correct:1,explanation:'Liangshan was surrounded by the marsh (水泊), making it nearly impregnable since armies could not easily approach the mountain fortress.',explanation_zh:'梁山四面皆水，水泊天堑令官军难以攻克，是天然的防御屏障。'},
    {question:'What role did the "Three Ruan Brothers" play in the story?',question_zh:'"阮氏三雄"在故事中扮演什么角色？',options:['Imperial generals who pursued the outlaws','Fishermen-turned-outlaws who helped steal the birthday tribute','Corrupt officials who oppressed villagers','Merchants who funded the Liangshan stronghold'],options_zh:['追捕好汉的朝廷将领','参与劫取生辰纲的渔民出身好汉','欺压百姓的贪官','资助梁山的商人'],correct:1,explanation:'The Three Ruan Brothers were fishermen who joined the outlaws and participated in the robbery of the birthday tribute convoy.',explanation_zh:'阮氏三雄是渔民出身，加入好汉行列并参与劫取生辰纲的行动。'},
    {question:'What was the fate of the Liangshan heroes after accepting imperial amnesty?',question_zh:'梁山好汉接受招安后的命运如何？',options:['They became powerful imperial generals and lived well','They were betrayed, poisoned, or died in battles serving a corrupt court','They retired to become farmers','They founded their own dynasty'],options_zh:['成为朝廷大将并过上好日子','被出卖，或被毒杀，或在为腐败朝廷征战中阵亡','退休成为农民','建立了自己的王朝'],correct:1,explanation:'After accepting amnesty, the heroes were used by the court to fight Fang La, suffering catastrophic losses. Song Jiang himself was ultimately poisoned.',explanation_zh:'招安后好汉被朝廷驱使征讨方腊，伤亡惨重；宋江最终遭奸臣毒杀，印证了英雄末路的悲剧。'},
    {question:'Which corrupt official is considered the primary villain who drove many heroes to Liangshan?',question_zh:'哪位奸臣被认为是逼迫众多英雄上梁山的主要反派？',options:['Cai Jing','Gao Qiu','Tong Guan','Zhang Duan'],options_zh:['蔡京','高俅','童贯','张端'],correct:1,explanation:'Gao Qiu (高俅), who rose to power by playing football, is the primary antagonist — his persecution of heroes like Lin Chong typifies the corrupt system.',explanation_zh:'高俅靠蹴鞠起家，陷害林冲等忠良，是逼迫英雄上梁山的主要反派，象征腐败朝廷。'},
  ],

  xiyou: [
    {question:'How was Sun Wukong born?',question_zh:'孙悟空是怎么诞生的？',options:['Born from a human mother','Emerged from a magical stone on Flower-Fruit Mountain','Created by the Jade Emperor','Formed from a lightning bolt'],options_zh:['由人类母亲所生','从花果山上的一块仙石中诞生','由玉皇大帝创造','由雷电凝聚而成'],correct:1,explanation:'Sun Wukong was born from a magical stone on Flower-Fruit Mountain that absorbed cosmic energies over countless years.',explanation_zh:'孙悟空从花果山上一块吸收了天地灵气的仙石中诞生。'},
    {question:'What is the distance covered by one of Sun Wukong\'s somersaults on the Somersault Cloud?',question_zh:'孙悟空踩着筋斗云一个跟斗能飞多远？',options:['1,000 li','10,000 li','108,000 li','One million li'],options_zh:['一千里','一万里','十万八千里','一百万里'],correct:2,explanation:'One somersault on the Somersault Cloud covers 108,000 li (approximately 54,000 km).',explanation_zh:'孙悟空踩筋斗云一个跟斗可行十万八千里。'},
    {question:'Why did Sun Wukong rebel against the Jade Emperor?',question_zh:'孙悟空为什么大闹天宫？',options:['He wanted to rescue Tang Sanzang','He was angry about being given a minor official title and denied true respect','He wanted to steal the Buddhist scriptures','He was ordered to do so by the Buddha'],options_zh:['他想营救唐僧','他对被封小官、不受尊重感到愤怒','他想偷取佛经','如来佛命令他这样做'],correct:1,explanation:'Sun Wukong was incensed at being given the lowly title of "Keeper of the Imperial Horses" and not being treated as an equal, leading to his rebellion.',explanation_zh:'孙悟空被封为"弼马温"小官，愤于不受尊重，由此大闹天宫。'},
    {question:'How long was Sun Wukong imprisoned under Five Elements Mountain?',question_zh:'孙悟空被压在五行山下多少年？',options:['100 years','300 years','500 years','1000 years'],options_zh:['一百年','三百年','五百年','一千年'],correct:2,explanation:'The Buddha imprisoned Sun Wukong under Five Elements Mountain for 500 years until Tang Sanzang freed him.',explanation_zh:'如来佛将孙悟空压于五行山下五百年，直到唐僧揭去符咒将其释放。'},
    {question:'What is the purpose of the "Band-Tightening Spell" (紧箍咒)?',question_zh:'"紧箍咒"的用途是什么？',options:['To give Sun Wukong extra strength','To allow Tang Sanzang to control Sun Wukong by causing him headache pain','To open magical gates','To summon other deities for help'],options_zh:['给孙悟空增加力量','让唐僧通过让悟空头痛来控制他','打开神奇大门','召唤其他神灵帮助'],correct:1,explanation:'Guanyin gave Tang Sanzang the Band-Tightening Spell, which tightens a golden headband on Sun Wukong\'s head causing intense pain when recited.',explanation_zh:'观音授予唐僧紧箍咒，念动咒语则孙悟空头上的金箍收紧，令其头痛难忍，以此控制他。'},
    {question:'What is the significance of having the character "悟" in all three disciples\' names?',question_zh:'三位徒弟法名中均含"悟"字有何深意？',options:['It was the Tang Sanzang\'s family name','It signifies their shared goal of spiritual awakening and enlightenment','It identifies them as monks','It means they were all born in the same year'],options_zh:['这是唐僧的姓氏','象征他们共同追求精神觉悟与启蒙','表明他们都是和尚','意味着他们都生于同一年'],correct:1,explanation:'孙悟空, 猪悟能, and 沙悟净 all have "悟" (awakening/enlightenment) in their names, reflecting the journey\'s deeper spiritual purpose.',explanation_zh:'悟空、悟能、悟净三人法名均含"悟"字，象征取经之旅修行觉悟的精神内涵。'},
    {question:'Who organized the entire Journey to the West?',question_zh:'谁策划组织了整个西天取经之旅？',options:['The Jade Emperor','The Buddha himself','Guanyin Bodhisattva','Tang Sanzang\'s master'],options_zh:['玉皇大帝','如来佛祖本人','观音菩萨','唐僧的师父'],correct:2,explanation:'Guanyin (观音菩萨), the Goddess of Mercy, organized the journey, selecting Tang Sanzang and recruiting all three disciples.',explanation_zh:'观音菩萨策划了整个取经之旅，选定唐僧并招募了孙悟空、猪八戒、沙悟净三位徒弟。'},
    {question:'How does Sun Wukong eventually prove his identity when impersonated by the Six-Eared Macaque?',question_zh:'六耳猕猴冒充孙悟空时，如何最终辨明真假？',options:['Sun Wukong\'s magic staff recognizes only its true master','Only the Buddha could tell the two apart','Tang Sanzang used the Band-Tightening Spell','The Dragon King identified the real one'],options_zh:['金箍棒只认真正的主人','只有如来佛祖能分辨两者','唐僧用紧箍咒辨别','龙王指认出真正的孙悟空'],correct:1,explanation:'The Six-Eared Macaque could deceive everyone, including the gods; only the Buddha could see through the deception and reveal the true identity.',explanation_zh:'六耳猕猴骗过了所有人，包括众神，唯有如来佛祖能道破真相，辨出真假美猴王。'},
    {question:'What is Flaming Mountain (火焰山), and what is needed to pass it?',question_zh:'"火焰山"是什么？如何才能通过？',options:['A volcano that can only be cooled by water','An endless fire blocking the pilgrims, extinguishable only by Princess Iron Fan\'s Banana Leaf Fan','A demon\'s lair filled with flames','A test created by the Buddha'],options_zh:['只能用水扑灭的火山','阻断取经路的熊熊火山，只有铁扇公主的芭蕉扇才能将其扑灭','充满火焰的妖怪巢穴','如来佛祖设置的考验'],correct:1,explanation:'Flaming Mountain is an enormous fire barrier blocking the pilgrims\' path, and only Princess Iron Fan\'s magical Banana Leaf Fan can extinguish it.',explanation_zh:'火焰山是横亘在取经路上的巨大火山，唯有铁扇公主的芭蕉扇方能将其扑灭。'},
    {question:'What is the "Three Blows to the White Bone Demon" episode about?',question_zh:'"三打白骨精"这段情节讲的是什么？',options:['Sun Wukong fighting three different demons','A demon transforming three times to trick Tang Sanzang, while Sun Wukong sees through the disguise each time','Sun Wukong teaching his disciples three combat techniques','Three mountains blocking the pilgrims\' path'],options_zh:['孙悟空与三个不同妖怪的战斗','一个妖魔三次变形欺骗唐僧，而孙悟空每次都识破了伪装','孙悟空教三位徒弟三种战斗技巧','阻断取经路的三座山'],correct:1,explanation:'The White Bone Demon transformed three times into innocent people; Sun Wukong killed it each time but Tang Sanzang, deceived, expelled him.',explanation_zh:'白骨精三次幻化成无辜百姓欺骗唐僧，孙悟空三次识破并击杀，却因唐僧误解而被逐出师门。'},
    {question:'What title was Sun Wukong granted upon completing the journey?',question_zh:'孙悟空功德圆满后被封什么称号？',options:['Great Sage Equal to Heaven','King of the Monkeys','Victorious Fighting Buddha','Marshal of the Heavenly River'],options_zh:['齐天大圣','猴王','斗战胜佛','天河水军元帅'],correct:2,explanation:'Upon successfully completing the journey, Sun Wukong was granted the title "Victorious Fighting Buddha" (斗战胜佛) by the Buddha.',explanation_zh:'取经功成后，如来佛封孙悟空为"斗战胜佛"，是其修行圆满的证明。'},
    {question:'Why was Zhu Bajie (Pig Immortal) banished from Heaven?',question_zh:'猪八戒为什么被逐出天庭？',options:['He stole the immortal peaches','He flirted with the Moon Goddess Chang\'e','He defeated the Jade Emperor in combat','He refused to follow orders'],options_zh:['他偷了仙桃','他调戏嫦娥','他在战斗中击败玉皇大帝','他拒绝服从命令'],correct:1,explanation:'Zhu Bajie, as Marshal Tianpeng, was banished from Heaven for flirting with the Moon Goddess Chang\'e and was reincarnated as a pig-creature.',explanation_zh:'猪八戒原为天蓬元帅，因调戏嫦娥而被贬下凡，转世为猪形，即猪八戒。'},
    {question:'How many scrolls of Buddhist scripture did the pilgrims retrieve?',question_zh:'取经团队取回了多少卷佛经？',options:['500 scrolls','1,000 scrolls','3,000 scrolls','5,048 scrolls'],options_zh:['500卷','1000卷','3000卷','5048卷'],correct:3,explanation:'The pilgrims retrieved 5,048 scrolls of Buddhist scriptures (三藏真经) from the Western Paradise.',explanation_zh:'取经团队从西天取回了五千零四十八卷大乘真经。'},
    {question:'What deeper meaning do the demons the pilgrims fight represent?',question_zh:'取经途中与师徒交战的妖魔象征着什么深层含义？',options:['Real historical enemies of Buddhism','Temptations and obstacles of the mind that must be overcome for spiritual growth','Manifestations of the Jade Emperor\'s anger','Creatures created by Guanyin to test the pilgrims'],options_zh:['佛教真实的历史敌人','心中需要克服的执念与诱惑，是精神成长的障碍','玉皇大帝愤怒的化身','观音菩萨为考验取经人而创造的生物'],correct:1,explanation:'On a deeper level, each demon represents a mental temptation or obstacle — greed, lust, pride — that the pilgrims must overcome for enlightenment.',explanation_zh:'在深层含义上，每个妖魔都象征着贪、嗔、痴等心中执念，取经的真正意义是克服这些内心障碍以求觉悟。'},
    {question:'Who is "Red Boy" (红孩儿) and how is he ultimately dealt with?',question_zh:'"红孩儿"是谁？他最终的结局如何？',options:['The Jade Emperor\'s son, who joins the pilgrims','Bull Demon King\'s son who breathes fire; subdued by Guanyin and becomes a child deity','A reformed demon who helps the pilgrims','Sun Wukong\'s disciple'],options_zh:['玉皇大帝之子，后加入取经队伍','牛魔王之子，会喷火；被观音菩萨收服，成为善财童子','一个改过自新的妖魔，帮助取经团队','孙悟空的弟子'],correct:1,explanation:'Red Boy is the Bull Demon King\'s son who breathes the Three-Flavored True Fire. After defeating Sun Wukong, he is subdued by Guanyin and becomes the child deity Sudhana.',explanation_zh:'红孩儿是牛魔王之子，能喷三昧真火，曾擒拿唐僧，后被观音菩萨收服，成为善财童子。'},
    {question:'What is the total number of tribulations (难) the pilgrims must overcome?',question_zh:'取经师徒须经历多少难？',options:['36 tribulations','54 tribulations','81 tribulations','108 tribulations'],options_zh:['三十六难','五十四难','八十一难','一百零八难'],correct:2,explanation:'The pilgrims were predestined to overcome exactly 81 tribulations (八十一难) on their journey before reaching enlightenment.',explanation_zh:'取经团队注定要经历八十一难，这是修行圆满所必须经历的磨砺。'},
    {question:'What is the Peach Orchard (蟠桃园) and what did Sun Wukong do there?',question_zh:'"蟠桃园"是什么？孙悟空在那里做了什么？',options:['A garden where Sun Wukong trained; he pruned the trees','The heavenly orchard of immortal peaches; Sun Wukong ate all the peaches, triggering his war with Heaven','A mortal garden Sun Wukong visited during the journey','A trap set by the Jade Emperor'],options_zh:['孙悟空练功的花园，他修剪了树木','天宫里的仙桃园；孙悟空偷吃了仙桃，由此引发与天庭的冲突','取经途中孙悟空经过的人间花园','玉皇大帝设置的陷阱'],correct:1,explanation:'The Peach Orchard of Immortality was in Heaven. Sun Wukong was made its guardian but ate all the immortal peaches, one of the provocations leading to his rebellion.',explanation_zh:'蟠桃园是天宫中的仙桃园，孙悟空奉命看管却偷吃仙桃，这是引发其大闹天宫的原因之一。'},
    {question:'What title did Sun Wukong give himself during his rebellion against the Jade Emperor?',question_zh:'孙悟空大闹天宫时自封什么称号？',options:['Monkey King of Flower-Fruit Mountain','Great Sage Equal to Heaven','Lord of the Eastern Sea','Heavenly Marshal of Monkeys'],options_zh:['花果山猴王','齐天大圣','东海霸主','天庭猴帅'],correct:1,explanation:'Sun Wukong proclaimed himself "Great Sage Equal to Heaven" (齐天大圣), demanding equal status with the celestial beings.',explanation_zh:'孙悟空自封"齐天大圣"，要求与天庭神灵平起平坐。'},
    {question:'Sandy (沙悟净) was banished from Heaven for what offense?',question_zh:'沙悟净因何被逐出天庭？',options:['He stole sacred texts','He accidentally broke a crystal goblet at a heavenly banquet','He fell in love with a mortal','He challenged the Jade Emperor to a fight'],options_zh:['他偷了神圣典籍','他在天庭宴会上不慎打碎了琉璃盏','他爱上了凡人','他挑战玉皇大帝决斗'],correct:1,explanation:'Sandy, as the Curtain-Lifting General, was banished to the River of Flowing Sands for accidentally breaking a crystal goblet (玻璃盏) at a heavenly banquet.',explanation_zh:'沙悟净原为卷帘大将，因在天宫宴会上失手打碎了玻璃盏而被贬入流沙河。'},
    {question:'Where does the Journey to the West ultimately end?',question_zh:'西天取经之旅的终点在哪里？',options:['Back at the Tang Emperor\'s court in Chang\'an','At the Thunder Monastery (雷音寺) in the Western Paradise','On top of Five Elements Mountain','At Flower-Fruit Mountain'],options_zh:['回到唐太宗的长安朝廷','西天极乐世界的雷音寺','五行山顶','花果山'],correct:1,explanation:'The journey ends at Thunder Monastery (雷音寺) in the Western Paradise, where the Buddha resides and the scriptures are stored.',explanation_zh:'取经之旅的终点是西天极乐世界的雷音寺，如来佛祖居于此处，佛经也藏于此地。'},
  ],

  sanguoyanyi: [
    {question:'What are the Three Kingdoms and who founded each?',question_zh:'三国是哪三国？各由谁建立？',options:['Wei (Cao Cao), Shu (Liu Bei), Wu (Sun Quan)','Qin (Cao Cao), Han (Liu Bei), Chu (Sun Quan)','Wei (Liu Bei), Shu (Cao Cao), Wu (Sun Quan)','Wei (Cao Cao), Han (Liu Bei), Wu (Sun Quan)'],options_zh:['魏（曹操）、蜀（刘备）、吴（孙权）','秦（曹操）、汉（刘备）、楚（孙权）','魏（刘备）、蜀（曹操）、吴（孙权）','魏（曹操）、汉（刘备）、吴（孙权）'],correct:0,explanation:'The Three Kingdoms were Wei (founded by Cao Cao\'s son Cao Pi), Shu Han (founded by Liu Bei), and Eastern Wu (Sun Quan).',explanation_zh:'三国为曹魏（曹丕称帝，曹操奠基）、蜀汉（刘备建立）、东吴（孙权建立）。'},
    {question:'What is the "Three Visits to the Thatched Cottage" (三顾茅庐)?',question_zh:'"三顾茅庐"指的是什么？',options:['Zhang Fei building a hut for Liu Bei','Liu Bei visiting Zhuge Liang\'s home three times to persuade him to become his advisor','Guan Yu\'s three battles against Cao Cao','Cao Cao visiting Sun Quan three times for peace talks'],options_zh:['张飞为刘备建造茅屋','刘备三次亲赴诸葛亮住所，请其出山辅佐','关羽与曹操三次交战','曹操三次拜访孙权谈和'],correct:1,explanation:'Liu Bei personally visited Zhuge Liang\'s thatched cottage three times to recruit him, showing ultimate respect for talent.',explanation_zh:'刘备三次亲赴隆中诸葛亮的茅庐，诚心请其出山辅佐，体现了礼贤下士、求才若渴的精神。'},
    {question:'What battle decisively prevented Cao Cao from conquering southern China?',question_zh:'哪场战役阻止了曹操征服南方？',options:['Battle of Guandu','Battle of Red Cliffs','Battle of Changban','Battle of Jieting'],options_zh:['官渡之战','赤壁之战','长坂坡之战','街亭之战'],correct:1,explanation:'The Battle of Red Cliffs (赤壁之战, 208 AD), where the allied forces of Liu Bei and Sun Quan used fire to destroy Cao Cao\'s navy.',explanation_zh:'赤壁之战（公元208年），孙刘联军以火攻大败曹操水师，阻止了曹操统一天下。'},
    {question:'What was the content of Zhuge Liang\'s "Longzhong Plan" (隆中对)?',question_zh:'"隆中对"的主要内容是什么？',options:['Immediately attack Cao Cao with all forces','Seize Yi and Jing provinces, form an alliance with Sun Quan, then restore the Han dynasty','Surrender to Cao Cao and serve under him','Build a naval force to conquer the south'],options_zh:['集中兵力立即攻打曹操','占据荆益二州，联孙抗曹，以图恢复汉室','向曹操投降为其效力','建立水军征服南方'],correct:1,explanation:'The Longzhong Plan outlined a two-phase strategy: secure Jing and Yi provinces as a base, then ally with Sun Quan to attack Cao Cao from multiple directions.',explanation_zh:'隆中对提出两步走战略：先取荆州和益州作为根据地，再联孙抗曹，形成两路夹击之势。'},
    {question:'Why is Guan Yu\'s release of Cao Cao at Huarong Road significant?',question_zh:'关羽在华容道放走曹操有何重大意义？',options:['It was ordered by Liu Bei to maintain peace','It showed Guan Yu\'s loyalty to old bonds — Cao Cao had once treated him well — overriding military orders','It was a strategic decision to keep Cao Cao as a buffer state','It was a mistake caused by fog and confusion'],options_zh:['刘备命令他维持和平','体现了关羽念旧重情的义气——曹操曾善待于他——义气压过了军令','这是为保留曹操作缓冲国的战略决定','大雾中的误判'],correct:1,explanation:'Guan Yu let Cao Cao escape because Cao Cao had once treated him generously; his personal loyalty outweighed Zhuge Liang\'s military orders.',explanation_zh:'关羽因感念曹操昔日相待之恩，在华容道放走了曹操，体现了他义气凌驾于军令之上的性格。'},
    {question:'What was the "Empty Fort Stratagem" (空城计)?',question_zh:'"空城计"是怎么一回事？',options:['Cao Cao defended an empty city with skeleton troops','Zhuge Liang calmly played the lute on open gates while Sima Yi\'s large army retreated in suspicion','Sun Quan tricked Wei into attacking an abandoned city','Liu Bei evacuated a city before battle'],options_zh:['曹操用少量士兵防守空城','诸葛亮在城门大开时从容弹琴，司马懿大军因生疑而退兵','孙权诱骗曹魏攻打废弃的城池','刘备在交战前撤离城市'],correct:1,explanation:'With no troops to defend the city, Zhuge Liang sat calmly playing the lute on open walls. Sima Yi, suspecting a trap, retreated without attacking.',explanation_zh:'诸葛亮在兵力空虚时，从容弹琴于大开的城楼之上，司马懿疑有埋伏而退兵，此即空城计。'},
    {question:'What heroic feat did Zhao Yun (Zhao Zilong) perform at the Battle of Changban?',question_zh:'赵云（赵子龙）在长坂坡之战中立下了什么赫赫战功？',options:['He defeated Cao Cao in single combat','He rescued the infant Liu Chan by fighting through Cao Cao\'s entire army alone','He burned Cao Cao\'s supply depot','He captured a key general and forced surrender'],options_zh:['他在单挑中击败曹操','他单骑闯入曹操大军，救出幼主阿斗','他烧毁了曹操的粮草仓库','他俘虏了关键将领迫使对方投降'],correct:1,explanation:'Zhao Yun famously charged into Cao Cao\'s army alone to rescue the infant Liu Chan (阿斗), fighting his way in and out through thousands of enemies.',explanation_zh:'赵云在长坂坡单骑杀入曹军，七进七出，救出幼主阿斗，成为千古传颂的忠勇典范。'},
    {question:'How did the strategist Zhuge Liang "borrow" 100,000 arrows in a single night?',question_zh:'诸葛亮是如何在一夜之间"借"到十万支箭的？',options:['He sent spies to steal them from Cao Cao\'s armory','He used boats filled with straw dummies in the fog to draw Cao Cao\'s archers','He ordered craftsmen to make them overnight','He traded silk and gold for the arrows'],options_zh:['他派间谍从曹操军械库偷取','他在大雾中派装满稻草人的船只引诱曹操士兵射箭','他命令工匠连夜制造','他用丝绸和黄金换取箭矢'],correct:1,explanation:'Zhuge Liang sent straw-packed boats into the fog toward Cao Cao\'s fleet; the soldiers shot thousands of arrows at the boats, which the boats collected and returned.',explanation_zh:'诸葛亮趁大雾派船只靠近曹军，船上装满稻草，曹军万箭齐发，一夜之间借得十万支箭。'},
    {question:'What event is the "Oath of the Peach Garden" (桃园结义)?',question_zh:'"桃园结义"讲述的是什么故事？',options:['A battle fought in a peach garden','Liu Bei, Guan Yu, and Zhang Fei\'s sworn brotherhood vow; the founding bond of Shu Han','A peace treaty signed under peach trees','Sun Quan\'s alliance with Liu Bei'],options_zh:['在桃园中发生的一场战斗','刘关张三人结拜为兄弟，是蜀汉集团的精神基石','在桃树下签订的和平条约','孙权与刘备的联盟'],correct:1,explanation:'Liu Bei, Guan Yu, and Zhang Fei swore brotherhood in a peach garden, vowing to live and die together — the founding bond of their cause.',explanation_zh:'刘备、关羽、张飞在桃园结拜为兄弟，誓同生死，这一义结金兰成为蜀汉集团的精神基石。'},
    {question:'Who is considered the fiercest warrior of the Three Kingdoms era?',question_zh:'谁被视为三国时代武力最强的武将？',options:['Guan Yu','Zhao Yun','Lü Bu','Zhang Fei'],options_zh:['关羽','赵云','吕布','张飞'],correct:2,explanation:'Lü Bu (吕布) is universally considered the most powerful individual warrior in the Three Kingdoms era, riding the Red Hare horse and wielding a halberd.',explanation_zh:'吕布骑赤兔马、使方天画戟，被公认为三国时代武力第一的武将。'},
    {question:'What is Diaochan\'s role in the "Interlocking Stratagems" (连环计)?',question_zh:'貂蝉在"连环计"中扮演什么角色？',options:['She was a spy who infiltrated Cao Cao\'s camp','Wang Yun used her beauty to set Dong Zhuo and Lü Bu against each other, leading to Dong Zhuo\'s death','She was Liu Bei\'s wife who helped negotiate peace','She led an army against Dong Zhuo'],options_zh:['她是打入曹操阵营的间谍','王允利用她的美貌离间董卓与吕布，最终借吕布之手除掉董卓','她是刘备之妻，帮助谈判和平','她领兵对抗董卓'],correct:1,explanation:'Wang Yun offered Diaochan first to Lü Bu then to Dong Zhuo, making them jealous rivals. Lü Bu ultimately killed Dong Zhuo.',explanation_zh:'王允先将貂蝉许给吕布，再送给董卓，使两人反目成仇，最终吕布手刃董卓，完成连环计。'},
    {question:'What does the famous opening line of the novel teach about history?',question_zh:'小说著名开篇语揭示了什么历史哲理？',options:['Strong nations always win','Virtue always triumphs','What is long divided must unite; what is long united must divide','The common people always suffer the most'],options_zh:['强国永远获胜','美德终将获胜','分久必合，合久必分','普通百姓总是受苦最多'],correct:2,explanation:'"分久必合，合久必分" — the cyclical nature of unity and division is the overarching philosophy of the novel.',explanation_zh:'"分久必合，合久必分"是《三国演义》的开篇名句，揭示历史循环往复、王朝兴衰交替的规律。'},
    {question:'Why is Sima Yi considered a key figure despite usually losing battles against Zhuge Liang?',question_zh:'司马懿通常在与诸葛亮的对决中处于下风，但为何仍被视为关键人物？',options:['He eventually discovered Zhuge Liang\'s main weakness in battle','He survived longer than Zhuge Liang, and his descendants ultimately unified China as the Jin dynasty','He had a larger army','He was the most moral person in the story'],options_zh:['他最终发现了诸葛亮的主要弱点','他熬死了诸葛亮，其孙司马炎建立晋朝统一中国','他拥有更大的军队','他是故事中最有道德的人'],correct:1,explanation:'Sima Yi\'s strategy was patience — he outlasted Zhuge Liang. His descendants founded the Jin dynasty, ultimately ending the Three Kingdoms period.',explanation_zh:'司马懿以忍耐为策略，熬死了诸葛亮；其孙司马炎建立晋朝，最终统一三国，结束了乱世。'},
    {question:'What is the significance of the "Memorial on the Eve of the Northern Campaign" (出师表)?',question_zh:'"出师表"有何重要意义？',options:['It was Cao Cao\'s declaration of war','Zhuge Liang\'s emotional letter to the young emperor before his Northern Expedition, representing ultimate loyalty','It was a peace treaty between the Three Kingdoms','Liu Bei\'s last will and testament'],options_zh:['这是曹操的宣战书','诸葛亮北伐前写给后主的动情奏表，是忠义精神的最高体现','三国之间的和平条约','刘备的遗嘱'],correct:1,explanation:'出师表 is Zhuge Liang\'s memorial to young emperor Liu Shan before his Northern Expedition — filled with loyal counsel and sorrow, it is one of Chinese literature\'s most famous pieces.',explanation_zh:'出师表是诸葛亮北伐前写给后主刘禅的奏表，字字忠心，充满对汉室复兴的赤诚，是中国古典文学中最著名的文章之一。'},
    {question:'How did Zhuge Liang ultimately deal with the southern tribal chief Meng Huo?',question_zh:'诸葛亮最终如何处置南蛮首领孟获？',options:['He executed him as an example to others','He captured and released him seven times until Meng Huo genuinely submitted','He negotiated a peace treaty giving him independence','He incorporated him into the Shu Han army immediately'],options_zh:['将其处决以儆效尤','七擒七纵，直至孟获真心归顺','谈判和平，给予其独立','立即将其编入蜀汉军队'],correct:1,explanation:'Zhuge Liang captured Meng Huo seven times and released him each time, winning his genuine heartfelt submission rather than just military surrender.',explanation_zh:'诸葛亮七擒七纵孟获，最终令其真心归顺，以心服口服取代武力征服，安定了蜀汉西南后方。'},
    {question:'What happened to Ma Su and why did it deeply distress Zhuge Liang?',question_zh:'马谡的结局如何？为什么令诸葛亮深感痛惜？',options:['Ma Su won a great victory but then betrayed Zhuge Liang','Ma Su disobeyed orders, lost Jieting Pass; Zhuge Liang wept and had him executed despite caring for him','Ma Su died heroically defending Jieting','Ma Su was captured by the enemy and eventually ransomed'],options_zh:['马谡取得了大胜，但随后背叛了诸葛亮','马谡违抗军令，失守街亭；诸葛亮虽爱其才，却含泪将其斩首','马谡英勇阵亡于街亭','马谡被敌方俘虏，最终被赎回'],correct:1,explanation:'Ma Su was Zhuge Liang\'s trusted general who ignored orders at Jieting, causing a catastrophic defeat. Zhuge Liang executed him by military law but wept bitterly.',explanation_zh:'马谡是诸葛亮器重的将领，却在街亭违反军令导致惨败，诸葛亮依军法将其斩首，含泪挥泪斩马谡，此后自贬三级。'},
    {question:'Who were the "Five Tiger Generals" (五虎上将) of Shu Han?',question_zh:'蜀汉"五虎上将"是哪五位？',options:['Liu Bei, Guan Yu, Zhang Fei, Zhao Yun, Zhuge Liang','Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, Huang Zhong','Guan Yu, Zhang Fei, Lu Bu, Zhao Yun, Xu Chu','Zhao Yun, Wei Yan, Ma Su, Jiang Wei, Huang Zhong'],options_zh:['刘备、关羽、张飞、赵云、诸葛亮','关羽、张飞、赵云、马超、黄忠','关羽、张飞、吕布、赵云、许褚','赵云、魏延、马谡、姜维、黄忠'],correct:1,explanation:'The Five Tiger Generals of Shu Han were Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, and Huang Zhong — Liu Bei\'s five greatest warriors.',explanation_zh:'蜀汉五虎上将为关羽、张飞、赵云、马超、黄忠，是刘备麾下最强大的五位武将。'},
    {question:'How did the scholar-hero Xu Shu demonstrate his loyalty to Liu Bei even after leaving?',question_zh:'谋士徐庶离开刘备后如何表现对他的忠义？',options:['He sent secret intelligence to Liu Bei from Cao Cao\'s camp','He never offered Cao Cao a single stratagem throughout his service','He returned to Liu Bei after his mother was freed','He wrote books praising Liu Bei\'s virtue'],options_zh:['他从曹操阵营秘密传递情报给刘备','他在曹操麾下从不献一计','母亲获释后他回到了刘备身边','他著书称颂刘备的仁义'],correct:1,explanation:'Xu Shu was forced to leave Liu Bei when Cao Cao held his mother hostage, but he kept his loyalty by never offering Cao Cao a single piece of advice.',explanation_zh:'徐庶因母被曹操扣押而被迫离开刘备，但他至死不为曹操献一计，以此保持对刘备的忠义。'},
    {question:'What was Cao Cao\'s intention when he discussed heroes with Liu Bei over warm wine?',question_zh:'曹操与刘备煮酒论英雄时，曹操的真实意图是什么？',options:['He genuinely wanted to make Liu Bei his equal partner','He was testing Liu Bei\'s ambitions to see if he was a threat','He was teaching Liu Bei about military strategy','He wanted to celebrate their recent victory together'],options_zh:['他真心想与刘备平起平坐','他在试探刘备的野心，判断他是否构成威胁','他在向刘备传授军事策略','他想庆祝二人的近期胜利'],correct:1,explanation:'Cao Cao was probing Liu Bei\'s ambitions, saying only he and Liu Bei were true heroes. Liu Bei cleverly deflected to hide his true ambitions.',explanation_zh:'曹操试图通过"天下英雄，唯使君与操耳"来试探刘备是否有争天下的野心，刘备则故作懦弱以遮掩真实抱负。'},
    {question:'Why is Guan Yu known as "Yijue" (义绝 — Supreme in Righteousness)?',question_zh:'关羽为何被称为"义绝"？',options:['He was the most powerful warrior','He embodied absolute loyalty and righteousness, placing brotherhood above personal gain or safety','He was the most intelligent strategist','He lived the longest among the heroes'],options_zh:['他是最强大的武将','他是忠义的化身，将兄弟情义置于个人得失与安危之上','他是最聪明的谋士','他是众英雄中最长寿的'],correct:1,explanation:'Guan Yu is called "Supreme in Righteousness" because he represents the ideal of loyalty and moral integrity — from his single-handed defense of Liu Bei\'s wives to releasing Cao Cao.',explanation_zh:'关羽被称为"义绝"，因为他是忠义精神的人格化身，从千里单骑护送刘备两位夫人到义释曹操，无不体现了这一精神。'},
  ],

  hongloumeng: [
    {question:'What is the "Wood-Stone Predestined Bond" (木石前盟) in Dream of the Red Chamber?',question_zh:'"木石前盟"是指什么？',options:['Baoyu\'s wooden boat and jade stone treasures','The spiritual connection between Baoyu (the divine stone) and Daiyu (the fairy grass) from their previous existence','A marriage contract carved on stone and wood','The architectural materials used in Grand View Garden'],options_zh:['宝玉的木船和玉石宝物','宝玉（神石）与黛玉（绛珠仙草）的前世缘分','刻在石头和木头上的婚约','大观园建造所用的材料'],correct:1,explanation:'In a previous life, the divine stone (Baoyu) watered the fairy grass (Daiyu). She was reborn to repay him with tears — leading to their tragic love.',explanation_zh:'前世神瑛侍者（宝玉）以甘露灌溉绛珠仙草（黛玉），仙草转世为人，以毕生泪水还泪——这便是木石前盟，也是宝黛悲剧爱情的根源。'},
    {question:'Why does Jia Baoyu reject the Confucian path of official examination and career?',question_zh:'贾宝玉为什么厌恶科举仕途？',options:['He was too stupid to pass the exams','He rejected the hypocrisy of the system and valued genuine emotion, beauty, and female companionship over worldly ambition','He wanted to become a Buddhist monk immediately','His father forbade him from taking the exams'],options_zh:['他太愚钝，无法通过考试','他厌恶这套体制的虚伪，更珍视真情实感、诗情画意与女儿们的陪伴，而非功名利禄','他立刻想出家为僧','他父亲禁止他参加科举'],correct:1,explanation:'Baoyu saw official careers as a path of hypocrisy that crushed genuine feeling. He preferred the world of the girls in Grand View Garden.',explanation_zh:'宝玉认为仕途是虚伪功利之道，摧残真情实感；他更珍视大观园中女儿们的诗酒风流与纯真世界。'},
    {question:'What is the symbolic significance of Lin Daiyu\'s "Burial of Flowers" poem (葬花吟)?',question_zh:'林黛玉"葬花吟"的象征意义是什么？',options:['It is a gardening manual she wrote for Grand View Garden','She mourns fallen flower petals as a metaphor for her own fragile beauty and inevitable doom','It is a children\'s song popular in the Jia household','It celebrates the arrival of spring'],options_zh:['这是她为大观园写的园艺指南','她以埋葬落花自喻，象征自身的红颜薄命与无可逃避的悲剧命运','这是贾府流行的童谣','这首诗在庆祝春天的到来'],correct:1,explanation:'"Burial of Flowers" uses fallen petals as a metaphor for Daiyu\'s own fate — beautiful but fragile, destined to perish young and unappreciated.',explanation_zh:'"葬花吟"以落花自比，象征黛玉自身的命运——美丽而脆弱，注定红颜薄命，落得孤苦无依的结局。'},
    {question:'Who manages the Jia household with brilliant but corrupt efficiency?',question_zh:'谁以精明但腐败的方式管理贾府？',options:['Grandmother Jia','Wang Xifeng (Phoenix Wang)','Xue Baochai','Lady Wang'],options_zh:['贾母','王熙凤（凤辣子）','薛宝钗','王夫人'],correct:1,explanation:'Wang Xifeng (王熙凤), nicknamed "Phoenix Wang," managed the Jia household — brilliant, ruthless, and corrupt, her mismanagement accelerated the family\'s downfall.',explanation_zh:'王熙凤绰号"凤辣子"，精明强干地掌管贾府，却中饱私囊、心狠手辣，其行为加速了家族的衰败。'},
    {question:'What is "Grand View Garden" (大观园), and why is it central to the novel?',question_zh:'"大观园"是什么？为何在小说中占据核心地位？',options:['Cao Xueqin\'s real garden where he wrote the novel','The magnificent garden built for Imperial Concubine Yuan\'s visit, where the Twelve Beauties live','The garden belonging to a rival family','A legendary garden from Chinese mythology'],options_zh:['曹雪芹写小说时居住的真实花园','为贵妃元春省亲而建的豪华园林，金陵十二钗居于此处','一个竞争家族所属的花园','中国神话中的传说园林'],correct:1,explanation:'Grand View Garden was built for Concubine Yuan\'s homecoming visit; the girls lived there, composing poetry. It represents a world of beauty before the family\'s fall.',explanation_zh:'大观园为迎接元妃省亲而建，众姐妹在此居住、作诗，是全书最美的世界，象征着家族衰败前转瞬即逝的繁华。'},
    {question:'What does the "Gold-Jade Destined Match" (金玉良缘) represent in opposition to the Wood-Stone Bond?',question_zh:'"金玉良缘"与"木石前盟"的对立象征着什么？',options:['A metaphor for the gold and jade decorations in the Jia mansion','The match between Baoyu (jade) and Baochai (golden locket) — representing the parents\' pragmatic choice over Baoyu\'s spiritual connection with Daiyu','A folk saying about wealth bringing happiness','An ancient Chinese theory about compatible metals'],options_zh:['贾府金玉装饰的隐喻','宝玉（玉）与宝钗（金锁）的婚配——象征家长的世俗安排凌驾于宝玉与黛玉的精神契合','关于财富带来幸福的民间谚语','中国古代关于金属相配的理论'],correct:1,explanation:'The Gold-Jade match represents the family\'s pragmatic, worldly values — Baochai is a better match socially — opposed to the spiritual, fated Wood-Stone bond.',explanation_zh:'"金玉良缘"象征家长的世俗考量，宝钗更符合封建礼教的标准；与宝黛之间基于前世情缘的"木石前盟"形成对立。'},
    {question:'What are the "Twelve Beauties of Jinling" (金陵十二钗) and how are their fates revealed?',question_zh:'"金陵十二钗"是什么？她们的命运如何被揭示？',options:['Twelve real historical women of the Ming dynasty','The twelve principal women of the novel, whose tragic fates are prophesied in celestial registers Baoyu sees in a dream','A group of twelve imperial concubines','The twelve chapters of the novel dedicated to female characters'],options_zh:['明朝十二位真实的历史女性','小说中十二位主要女性人物，其悲剧命运通过宝玉在梦中看到的天界册页得到预言','十二位皇家嫔妃','小说中专门描写女性角色的十二个章节'],correct:1,explanation:'Baoyu visits the Illusory Realm in a dream and sees celestial registers naming each woman\'s fate, accompanied by cryptic poems and Dream of Red Mansions arias.',explanation_zh:'宝玉在梦游太虚幻境时看到金陵十二钗的命运册页，每人均有判词和红楼梦曲预示其结局。'},
    {question:'Why does Baoyu ultimately renounce the world and become a monk?',question_zh:'宝玉最终为何看破红尘、出家为僧？',options:['He failed the imperial examinations','After Daiyu\'s death, Baochai\'s forced marriage to him, and witnessing the family\'s ruin, he passes the exam then disappears into monkhood','He was exiled for political reasons','He went mad from grief'],options_zh:['他科举落第','黛玉逝世、被迫娶宝钗、亲历家族覆灭后，他考中举人，随后飘然出家','他因政治原因遭到流放','他因悲伤而精神失常'],correct:1,explanation:'After losing everything he loved — Daiyu\'s death, forced marriage, family ruin — Baoyu passed the exam (fulfilling his duty) then followed a monk and Taoist into renunciation.',explanation_zh:'宝玉经历了黛玉之死、被迫成婚与家族败落等一系列打击后，考中举人以完成世俗职责，随即随一僧一道飘然出家，彻底看破红尘。'},
    {question:'What is Qin Keqing\'s significance to the novel\'s plot?',question_zh:'秦可卿在小说情节中的意义是什么？',options:['She represents the ideal of feminine virtue','Her mysterious death and lavish mourning ceremony are the first major sign of the Jia family\'s beginning decline','She is the most beautiful woman in the novel','She is Baoyu\'s first love'],options_zh:['她代表着女性美德的典范','她死因成谜，葬礼极尽奢华，是贾府由盛转衰的第一个重要预兆','她是小说中最美的女性','她是宝玉的初恋'],correct:1,explanation:'Qin Keqing\'s death and the scandalously extravagant funeral mark the turning point — the Jia family\'s first major act of overreach that signals their coming fall.',explanation_zh:'秦可卿之死与极尽奢靡的葬礼，是贾府由盛转衰的重要转折点，是家族走向败落的第一个重大预兆。'},
    {question:'How does Granny Liu (刘姥姥) serve as a literary device in the novel?',question_zh:'刘姥姥在小说中作为文学手法有何作用？',options:['She is the moral authority who judges the Jia family','As an outsider countrywoman, her astonishment at the family\'s extravagance ironically exposes the absurdity and coming doom of their lifestyle','She is a comic character with no deeper purpose','She represents the poor who will eventually overthrow the aristocracy'],options_zh:['她是评判贾府的道德权威','作为乡下局外人，她对贾府奢侈的惊叹，以反讽手法揭示了这种生活方式的荒诞与必将覆灭的命运','她只是一个没有深意的喜剧角色','她代表着终将推翻贵族阶级的穷人'],correct:1,explanation:'Granny Liu\'s wide-eyed wonder at the Jia family\'s wealth provides ironic contrast — through her innocent eyes the reader sees how wasteful and ultimately doomed this world is.',explanation_zh:'刘姥姥对贾府富贵的惊叹，以局外人视角形成强烈的反讽对比——透过她朴实的眼睛，读者看到了这个世界的奢靡荒诞与注定覆灭。'},
    {question:'What is the fate of the maid Qingwen (晴雯)?',question_zh:'丫鬟晴雯的命运是什么？',options:['She married Baoyu after all the mistresses left','She was falsely accused, expelled from the mansion, and died in poverty — representing the destruction of beauty and innocence','She escaped and lived happily as a free woman','She became Wang Xifeng\'s trusted assistant'],options_zh:['众位小姐离开后她嫁给了宝玉','她遭人诬陷、被逐出大观园，贫病交加而死——象征美好与纯真的毁灭','她逃脱后作为自由女性幸福生活','她成为王熙凤的心腹助手'],correct:1,explanation:'Qingwen — spirited, beautiful, and loyal — was falsely accused of impropriety with Baoyu by Lady Wang and expelled. She died shortly after in poverty.',explanation_zh:'晴雯心高气傲、才貌双全，却遭王夫人诬陷与宝玉有染，被逐出大观园后贫病交加而亡，其命运象征着美好事物被封建礼教无情摧毁。'},
    {question:'What is the "Illusory Realm of Great Void" (太虚幻境)?',question_zh:'"太虚幻境"是什么？',options:['A real place in China where Cao Xueqin lived','A celestial dreamland Baoyu visits where he sees the fates of all women in the novel recorded in celestial registers','A garden created for the imperial concubine\'s visit','A Buddhist monastery where Baoyu eventually retreats'],options_zh:['曹雪芹居住的中国真实地点','宝玉在梦中游历的仙界，在此看到记载书中所有女性命运的天界册页','为贵妃省亲而建的园林','宝玉最终遁入的佛寺'],correct:1,explanation:'The Illusory Realm of Great Void is a celestial realm Baoyu visits in a dream, where he reads the registers of all women\'s fates and hears the Dream of Red Mansions arias.',explanation_zh:'太虚幻境是宝玉梦游的仙界，在此读到金陵十二钗的命运册页，聆听红楼梦曲，是全书命运与虚幻主题的集中体现。'},
    {question:'Who wrote the first 80 chapters and who completed the last 40?',question_zh:'前80回由谁所著？后40回由谁续写？',options:['Both written by Cao Xueqin','First 80 by Cao Xueqin; last 40 attributed to Gao E','First 80 by Gao E; last 40 by Cao Xueqin','Written collectively by a group of scholars'],options_zh:['全部由曹雪芹所著','前80回由曹雪芹所著，后40回归于高鹗','前80回由高鹗所著，后40回由曹雪芹所著','由一群学者集体创作'],correct:1,explanation:'Cao Xueqin wrote the first 80 chapters; the last 40 are attributed to Gao E, whose continuation is debated for whether it reflects Cao\'s original intentions.',explanation_zh:'曹雪芹著前80回，高鹗续写后40回；后40回是否符合曹雪芹的原著意图，至今仍是红学界的争议焦点。'},
    {question:'What does the phrase "假作真时真亦假" mean thematically?',question_zh:'"假作真时真亦假"在主题上有何含义？',options:['It is a warning about counterfeit goods','It expresses the novel\'s philosophical theme that reality and illusion are interchangeable — truth becomes false when falsehood is believed','It is a proverb about lying','It refers to the difference between Baoyu\'s jade and a fake copy'],options_zh:['这是关于假冒商品的警告','它表达了小说的哲学主题：真与假可以互换——当谎言被当作真实，真实反而变成了虚假','这是关于说谎的谚语','它指的是宝玉玉石与赝品之间的区别'],correct:1,explanation:'This phrase from the Illusory Realm is the novel\'s central philosophical motto: reality and illusion are interchangeable, reflecting the Buddhist theme of impermanence.',explanation_zh:'这句出自太虚幻境的对联是全书的核心哲学命题：真与假、有与无相互转化，体现了《红楼梦》关于虚幻与无常的佛家思想。'},
    {question:'What does Jia Xichun (惜春) ultimately do after witnessing her family\'s destruction?',question_zh:'贾惜春在目睹家族覆灭后最终做了什么？',options:['She married a wealthy merchant and lived comfortably','She shaved her head and became a Buddhist nun, renouncing the world','She died alongside her family','She fled abroad'],options_zh:['她嫁给了富商，生活安逸','她剃度出家，遁入佛门，看破红尘','她与家人一同离世','她逃往异乡'],correct:1,explanation:'Xichun, the painter and youngest Jia sister, witnessed the family\'s fall and renounced the world to become a Buddhist nun.',explanation_zh:'惜春是贾家最小的姑娘，擅长绘画，亲历家族覆灭后看破红尘，剃度出家为尼。'},
    {question:'How does Xiangling (香菱) symbolize the tragic fate of women in the novel?',question_zh:'香菱（英莲）如何象征小说中女性的悲剧命运？',options:['She represents the ideal of happy marriage','Kidnapped as a child, sold as a concubine, devoted to poetry, then killed by jealousy — her entire life is victimization','She represents female empowerment through education','She is the only character who escapes her fate'],options_zh:['她代表着幸福婚姻的理想','幼年被拐、被卖为小妾、痴迷于诗词、最终被嫉妒所害——她的一生是持续的受害者悲剧','她代表通过教育实现女性解放','她是唯一逃脱命运的人物'],correct:1,explanation:'Xiangling (born Yinglian) was kidnapped as a child, sold as Xue Pan\'s concubine, her only joy poetry; she died from illness caused by the jealous primary wife\'s abuse.',explanation_zh:'香菱原名英莲，幼年被拐卖，成为薛蟠小妾，以学诗为唯一慰藉，最终因正妻夏金桂的虐待而抑郁成疾，含冤离世。'},
    {question:'What is the significance of the Crab Flower Poetry Club (诗社) in Grand View Garden?',question_zh:'大观园中"海棠诗社"的意义是什么？',options:['It was a cover for the girls to plan escape from the mansion','It represents a fleeting moment of female creativity and joy before the family\'s fall destroys their world','It was mandated by the Jia family elders','It was a money-making venture through selling poems'],options_zh:['这是女孩们策划逃离府邸的掩护','它象征着在家族衰败摧毁她们的世界之前，女性才情与欢愉的短暂闪光','这是贾府长辈强制要求的','这是一个通过卖诗赚钱的商业活动'],correct:1,explanation:'The Poetry Club represents the pinnacle of the girls\' world — creativity, freedom, and joy before everything is swept away by the family\'s doom.',explanation_zh:'诗社代表了大观园女儿世界的最高时光——诗情画意、自由欢愉；而这一切在家族覆灭到来之前，只是转瞬即逝的美好。'},
    {question:'What does Wang Xifeng\'s fate reveal about the novel\'s moral worldview?',question_zh:'王熙凤的命运揭示了小说怎样的道德世界观？',options:['That cunning and ambition are rewarded with power','That her corruption and cruelty ultimately destroy her — a warning that wickedness brings downfall','That women are powerless regardless of their abilities','That the Jia family\'s fall was caused solely by her mistakes'],options_zh:['奸猾与野心终将获得权力的回报','她的腐败与残忍最终将她自己摧毁——是对恶有恶报的警示','无论才能如何，女性都是无力的','贾府的衰败完全是由她的错误造成的'],correct:1,explanation:'Wang Xifeng\'s brilliance could not save her — her corruption ultimately contributed to the family\'s ruin and her own demise, embodying the novel\'s theme of karmic consequence.',explanation_zh:'王熙凤才智过人却难逃劫数，她的贪腐与狠毒加速了家族覆灭，也导致了自身的悲剧结局，体现了因果循环的主题。'},
    {question:'What is the ultimate message of Dream of the Red Chamber regarding human existence?',question_zh:'《红楼梦》对人类存在的终极领悟是什么？',options:['With enough effort, happiness can be permanent','All worldly beauty, love, and splendor are transient and ultimately empty — the only truth is impermanence','Rich families always fall due to poor management','Love between two people can conquer all obstacles'],options_zh:['只要努力，幸福可以是永恒的','一切世俗的美好、爱情与繁华都是短暂的，终归于空——无常才是唯一的真理','富贵人家的衰败都是因为经营不善','两个人之间的爱情可以战胜一切障碍'],correct:1,explanation:'The novel\'s final image — "a vast white expanse, truly clean" — encapsulates its Buddhist theme: all worldly glory, love, and beauty dissolve into nothing.',explanation_zh:'小说结尾"白茫茫大地真干净"一句，是全书佛家主题的终极呈现：一切繁华、深情与美好，终归幻灭，归于虚空。'},
  ],
};
