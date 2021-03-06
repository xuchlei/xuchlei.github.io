// 长久（一年以上）待过的地方
var areas = ["烟台市", "济南市", "杭州市", "上海市"];
//去除 南京市 泰州市 嘉兴市 北京市

// 足迹点（百度坐标系）
var points = [
	// 在东京(遗憾啊,没好好逛过，基本按照时间顺序）
	{"flag":"0", "lng":140.392831, "lat":35.772015, "title":"", "content":""}, // 成田机场 第一次到日本的地方，日本的环境是真的好
	{"flag":"0", "lng":139.77115411219123, "lat":35.72756533558696, "title":"", "content":""}, // 日暮里 中转站，スカイライナー很快
	{"flag":"0", "lng":139.70050238383146, "lat":35.68978747120823, "title":"", "content":""}, // 新宿 大车站，真的很大。可惜新宿只在车站里转悠
	{"flag":"0", "lng":139.450899, "lat":35.623931, "title":"多摩市", "content":"第一次在日本住的地方，3个多月。赶上樱花盛开。紫阳花也很漂亮。被大神拉去锻炼，跑过10公里。因为当时的原因，留下满满的遗憾……",
	"img":"img/map/duomo.jpg"},
	{"flag":"0", "lng":139.4462998906179, "lat":35.63700672609453, "title":"", "content":""}, // 市政厅，在留卡入驻
	{"flag":"0", "lng":139.769631, "lat":35.692301, "title":"", "content":""}, // 神田（"工作"的地方）
	{"flag":"0", "lng":139.7741140288466, "lat":35.69139610955185, "title":"", "content":""}, // 面试
	{"flag":"0", "lng":139.446201, "lat":35.650488, "title":"", "content":""}, // 三菱UFJ銀行聖蹟桜ヶ丘支店（第一次办银行卡的地方，结果失败）
	{"flag":"0", "lng":139.4713895635116, "lat":35.61606282694555, "title":"", "content":""}, // 業務スーパー黒川店 和朋友大采购的地方，比如水饺
	{"flag":"0", "lng":139.434016, "lat":35.630271, "title":"乞田川", "content":"偶然路过，樱花很漂亮", "img":"img/map/kottagawa.jpg"},
	{"flag":"0", "lng":139.421731, "lat":35.621865, "title":"", "content":""}, // 多摩邮局（代购邮寄）和朋友逛过附近商场，办过银行卡
	{"flag":"0", "lng":139.460718, "lat":35.637997, "title":"樱丘公园", "content":"落樱缤纷，很多花草，紫阳花（动漫中的夏天）。去过几次，走遍了。夕日丘可以眺望城市，日景夜景都看过。在那里读过轻小说，被蚊子咬了几个包。",
	"img":"img/map/yingqiupark.jpg"},
	{"flag":"0", "lng":139.77485513089232,"lat":35.68687791461905,"title":"","content":""}, // TOHOシネマズ日本橋 和以前的同事看柯南剧场版，并在附近搓了一顿
		// 秋叶原主要逛了一天，谷歌（地图）账号有记录，国内看不了，图片拍的不多，主要如下。
	{"flag":"0", "lng":139.77141012926157, "lat":35.699629333565994, "title":"秋叶原:步行者天国", "content":"宅的天堂，宅的三大圣地之一。曾是最想去的地方，没有之一。只可惜去了两次（走之前&quot;下班&quot;溜了一圈）"},
	{"flag":"0", "lng":139.77196707867776, "lat":35.69795491110653, "title":"秋葉原ラジオ会館", "content":"", "img":"img/map/rajio.jpg"},
	{"flag":"0", "lng":139.76829300914196, "lat":35.701417299125865, "title":"明神男坡", "content":"", "img":"img/map/nansaka.jpg"},
	{"flag":"0", "lng":139.76761478848192, "lat":35.70206579303068, "title":"神田神社", "content":"", "img":"img/map/kandajinjya.jpg"},
	{"flag":"0", "lng":139.77101936636473, "lat":35.7012817375806, "title":"牛丼専門サンボ", "content":"命运石之门有出现，顺便吃了午饭", "img":"img/map/gyuudonn.jpg"},
	{"flag":"0", "lng":139.77135173940343, "lat":35.70186794799673, "title":"秋葉原ガチャポン会館", "content":"第一次扭蛋，还中了个徽章", "img":"img/map/gatyapon.jpg"},
	{"flag":"0", "lng":139.77335945221822, "lat":35.69787796742763, "title":"", "content":""}, // ブックオフ秋葉原駅前店 买了第一本轻小说
	{"flag":"0", "lng":139.443138, "lat":35.61391, "title":"", "content":""}, // bookoff多摩永山店
	{"flag":"0", "lng":139.77233987546438, "lat":35.700611254086, "title":"UDX大厦", "content":"东京动漫中心", "img":"img/map/udx.jpg"},
	{"flag":"0", "lng":139.773935, "lat":35.715432, "title":"上野公园", "content":"和朋友一起去，第一次(请)喝星巴克"},
	{"flag":"0", "lng":139.774518, "lat":35.710061, "title":"阿美横商店街", "content":""},
	{"flag":"0", "lng":139.469234, "lat":35.626468, "title":"", "content":""}, // 卢屋书店稻城若叶台店（骨王在这买的）
	{"flag":"0", "lng":139.450212, "lat":35.653337, "title":"多摩川", "content":"", "img":"img/map/duomochuan.jpg"},
	{"flag":"0", "lng":139.53331425384192, "lat":35.63374320118872, "title":"", "content":""}, // 京王稻田堤→稻田堤
	{"flag":"0", "lng":139.61032149368478, "lat":35.5997212024177, "title":"", "content":""}, // 武藏沟口→沟口
	{"flag":"0", "lng":139.627906, "lat":35.6119, "title":"", "content":""}, // 二子玉川（附近面试） 第一次在日本做出租车
	{"flag":"0", "lng":139.76155122628955, "lat":35.703395738457864, "title":"", "content":""}, // 御茶水附近 富士ビル（面试）
	{"flag":"0", "lng":139.7638239392298, "lat":35.67559779026176, "title":"", "content":""}, // 有乐町，路痴加日语渣换乘太难了
	{"flag":"0", "lng":139.796006, "lat":35.655449, "title":"", "content":""}, // 丰州（附近面试）
	{"flag":"0", "lng":139.73295816190696, "lat":35.70973007488197, "title":"", "content":""}, // 江户川桥（附近面试）
	{"flag":"0", "lng":139.74763198241246, "lat":35.645652583629996, "title":"", "content":""}, // 田町（附近面试）
	{"flag":"0", "lng":139.76894, "lat":35.681535, "title":"", "content":""}, // 大丸百货（代购侦查去过一次）
	// 在名古屋
	{"flag":"0", "lng":136.814647, "lat":34.859167, "title":"", "content":""},
	{"flag":"0", "lng":136.920355, "lat":35.172214, "title":"新荣町", "content":"在名古屋待了半年，整体还行，就是过得比较艰苦（自己带的日元，没敢太嗨）", "img":"img/map/sinsakae.jpg"},
	{"flag":"0", "lng":136.911372, "lat":35.173703, "title":"", "content":""}, // 中部电力（工作）
	{"flag":"0", "lng":136.899662, "lat":35.187537, "title":"名古屋城", "content":"附近转过，第一次去因为台风不能进（其实没钱，后来也没进去）"},
	{"flag":"0", "lng":136.90839368924554, "lat":35.169756711813605, "title":"", "content":""}, // 荣 附近经常去，bookoff蹭书看（买过几本），地下街，以及代购
	{"flag":"0", "lng":136.908295, "lat":35.172342, "title":"名古屋电视塔", "content":"", "img":"img/map/nagoyatvt.jpg"},
	{"flag":"0", "lng":136.899694, "lat":35.159888, "title":"大须观音寺", "content":"大须，宅的三大圣地之一", "img":"img/map/daxu.jpg"},
	{"flag":"0", "lng":136.90043470242713, "lat":35.15897504717824, "title":"大须商店街", "content":"", "img":"img/map/daxusyotengai.jpg"},
	{"flag":"0", "lng":136.908951, "lat":35.125575, "title":"热田神宫", "content":"步行18.45公里耗时3:31:08，下雨，打伞的手好累。后来去买御守，也是步行去的（坐不起电车）", "img":"img/map/atudajingun.jpg"},
	{"flag":"0", "lng":136.891739, "lat":35.174548, "title":"四间道", "content":"自己去过，发现有庆典，后来和朋友一起转过"},
	{"flag":"0", "lng":136.8833534231549, "lat":35.17004071153502, "title":"", "content":""}, // ビックカメラ名古屋　ＪＲゲートタワー店 附近去过几次，陪朋友买过耳机
	{"flag":"0", "lng":136.936789, "lat":35.192492, "title":"", "content":""}, // QBハウス（理发）,
	{"flag":"0", "lng":136.932437, "lat":35.184333, "title":"德川园", "content":"没进去，只是围着饶了一圈"},
	{"flag":"0", "lng":136.926409, "lat":35.171324, "title":"", "content":""}, // バロー車道店（经常去的超市）
	{"flag":"0", "lng":136.922228, "lat":35.177992, "title":"", "content":""}, // マックスバリュ　代官店（活动范围扩大 超市）
	{"flag":"0", "lng":136.920489, "lat":35.163722, "title":"", "content":""}, // バロー 新栄店（活动范围扩大 超市）
	{"flag":"0", "lng":136.918935, "lat":35.155504, "title":"", "content":""}, // 鹤舞公园
	{"flag":"0", "lng":137.1558723657169, "lat":35.087070282131116, "title":"", "content":""}, // 豊田 本来打算从这里去香岚溪的额，发现bus都错过了，然后去的猿投做的bus
	{"flag":"0", "lng":137.1785500883163, "lat":35.1219604328598, "title":"", "content":""}, // 猿投 第一次体验日本的bus
	{"flag":"0", "lng":137.313256, "lat":35.130291, "title":"香岚溪", "content":"赏枫叶的地方，可惜去的有点晚，枫叶的状态不是很好。", "img":"img/map/kourannkei.jpg"},
	// 京都，遍地古建筑，记录不全。后来知道本能寺，五条大桥之类的，都擦肩而过……
	{"flag":"0", "lng":135.7598831455734, "lat":34.98524102168604, "title":"", "content":""}, // 京都 大晦日和朋友出行第一站，JR站了一路，不过速度挺快的
	{"flag":"0", "lng":135.785049, "lat":34.994853, "title":"清水寺", "content":"出行第一个去的景点，人挺多的，依旧没进去，朋友想买的铃铛断货了", "img":"img/map/kiyomizu.jpg"},
	{"flag":"0", "lng":135.780773, "lat":34.996202, "title":"二年坡三年坡", "content":"", "img":"img/map/ninensannen.jpg"},
	{"flag":"0", "lng":135.78195900348112, "lat":35.000085774832044, "title":"高台寺", "content":"路过，能看到灵山观音", "img":"img/map/gts.jpg"},
	{"flag":"0", "lng":135.77855, "lat":35.003665, "title":"八坂神社", "content":"", "img":"img/map/bbss.jpg"},
	{"flag":"0", "lng":135.775177, "lat":35.005121, "title":"花间小路", "content":"", "img":"img/map/hjxl.jpg"},
	{"flag":"0", "lng":135.7738338301434, "lat":35.00069931920298, "title":"建仁寺", "content":""},
	{"flag":"0", "lng":135.77010586227698, "lat":35.00006359844255, "title":"鸭川", "content":"", "img":"img/map/yc.jpg"},
	{"flag":"0", "lng":135.751462, "lat":35.012845, "title":"二条城", "content":"去的时候没开门", "img":"img/map/etc.jpg"},
	{"flag":"0", "lng":135.729224, "lat":35.039441, "title":"金阁寺", "content":"到的时候都傍晚了，出来都晚上，一路步行（穷），最后走不动了，做的公交回去的", "img":"img/map/kinnkakuji.jpg"},
	{"flag":"0", "lng":135.74401, "lat":35.001469, "title":"壬生寺", "content":"除夜，敲了新年的钟声，晚上大家饮酒作欢"},
	{"flag":"0", "lng":135.77542, "lat":34.967278, "title":"伏见稻荷大社", "content":"初拜，抽了签，去了向往已久的千本鸟居（居然还有(魔法少女)小圆(pv)做宣传）", "img":"img/map/senhon.jpg"},
	{"flag":"0", "lng":135.747945, "lat":34.994811, "title":"", "content":""}, // （住宿一晚）
	// 神户
	{"flag":"0", "lng":135.186724, "lat":34.682646, "title":"神户港塔", "content":"计划失误，错过六甲山的夜景，其他地方也没怎么逛。牛肉只吃了牛丼，神户牛最后没吃。", "img":"img/map/sht.jpg"},
	{"flag":"0", "lng":135.188112, "lat":34.688225, "title":"南京街", "content":"", "img":"img/map/njj.jpg"},
	{"flag":"0", "lng":135.254281, "lat":34.711266, "title":"", "content":""}, // （住宿一晚）
	// 大阪
	{"flag":"0", "lng":135.500412, "lat":34.675128, "title":"心斋桥", "content":""},
	{"flag":"0", "lng":135.500745, "lat":34.669143, "title":"道顿崛", "content":"著名的格力高广告牌，吃了一份章鱼小丸子", "img":"img/map/doutonnbori.jpg"},
	{"flag":"0", "lng":135.506301, "lat":34.652519, "title":"通天阁", "content":"上塔上溜了一圈，夜景还行", "img":"img/map/ttg.jpg"},
	{"flag":"0", "lng":135.505519, "lat":34.66175, "title":"大阪日本桥", "content":"宅的三大圣地之一（后来才知道的），因为是元旦，开着的店铺不多，陪朋友买了海贼王的手办", "img":"img/map/osakanihonhasi.jpg"},
	{"flag":"0", "lng":135.525915, "lat":34.687154, "title":"大阪城", "content":"没有登阁，外面有个老爷爷穿着铠甲和游客免费拍照（旗子上汉语翻译不对）", "img":"img/map/dbc.jpg"},
	{"flag":"0", "lng":135.500152, "lat":34.651705, "title":"", "content":""}, // （住宿一晚）
	// 国内
	// 南京 杭州工作时，五一去的，两天一晚
	{"flag":"1", "lng":118.80466582315545, "lat":31.974957361842037, "title":"", "content":""}, // 错过了一趟高铁，到晚上才到
	{"flag":"1", "lng":118.7952540966663, "lat":32.02698892825407, "title":"南京夫子庙", "content":""},
	{"flag":"1", "lng":118.7504162551024, "lat":32.040838958517504, "title":"侵华日军南京大屠杀遇难同胞纪念馆", "content":""},
	{"flag":"1", "lng":118.86144681613565, "lat":32.05972339827544, "title":"中山陵", "content":"五一去的，真的是看人"},
	// 泰州 公司旅游过一次（两天一晚） TODO：坚果手机坏了，数据全丢
	{"flag":"1", "lng":119.87424428285318, "lat":32.921835754605574, "title":"", "content":""}, // 当时在上海出差，从上海过去的，在肯德基吃了午饭
	{"flag":"1", "lng":119.73779535894015, "lat":33.036719814165615, "title":"李中水上森林景区", "content":"天公不作美，去的时候下雨，估计第一次看见孔雀"},
	{"flag":"1", "lng":120.03189353120868, "lat":32.56567946513914, "title":"泰州田园牧歌景区", "content":"在这里住宿一晚，油菜花很漂亮，可以骑马（我没骑）"},
	{"flag":"1", "lng":119.92448147951542, "lat":32.4921144032546, "title":"凤城河乔园", "content":""},
	{"flag":"1", "lng":119.93684562180891, "lat":32.49149111096095, "title":"凤城河梅园", "content":""},
	{"flag":"1", "lng":119.84999353747527, "lat":32.94035228346093, "title":"兴化老街", "content":""},
	// 嘉兴 上海出差时，五一去的，两天一晚 TODO：坚果手机坏了，数据全丢
	{"flag":"1", "lng":120.893892901119, "lat":30.945716682190437, "title":"西塘古镇", "content":"五一逛了两天，太大了，真累。门票可以第二天继续用（另外景区入口很多，晚上可以随便进）", "img":"img/map/xtgz.jpg"},
	// 北京
	{"flag":"1", "lng":116.38514905887304, "lat":39.87119755935899, "title":"", "content":""}, // 北京到达
	{"flag":"1", "lng":116.40396855930707, "lat":39.91394167597157, "title":"天安门广场", "content":"天安门附近必逛，带着瓶老干妈过安检被要求开箱，人挺多的。当时北京的雾霾还是很严重的", "img":"img/map/bjtam.jpg"},
	{"flag":"1", "lng":116.41857051537177, "lat":39.91594778164794, "title":"", "content":""}, // 王府井 北京第一顿饭，吃的日式料理，因为国内的太贵
	{"flag":"1", "lng":116.64467401223321, "lat":40.04072158492817, "title":"", "content":""}, // （住宿一晚）
	{"flag":"1", "lng":116.44312569648702, "lat":39.94288957311585, "title":"", "content":""}, // 附近溜达过，吃过晚饭，具体地点忘了
	{"flag":"1", "lng":116.60931670736048, "lat":40.08374541109134, "title":"", "content":""}, // 第一次做飞机，还是国际航线，目标东京
	{"flag":"1", "lng":116.28352909921283,"lat":39.92408747195381,"title":"","content":""},
	{"flag":"1", "lng":116.28668951765802,"lat":39.946877962055765,"title":"","content":""},
	{"flag":"1", "lng":116.28724646707421,"lat":39.87535973805157,"title":"","content":""},
	{"flag":"1", "lng":116.48802875279678,"lat":39.91810351773734,"title":"","content":""},
	{"flag":"1", "lng":116.48801321211147,"lat":39.99194598269084,"title":"","content":""},
	// 广州
	{"flag":"1", "lng":113.30913776314385, "lat":23.39143278940526, "title":"", "content":""}, // 国内航线第一次到达，遥墙出发。回济南就比较悲催了，晚上的飞机，因为济南大雾(霾)，飞机延误一个半小时多，虽然飞了但是最后备降浦东，在上海住了一晚。
	{"flag":"1", "lng":113.2446361936489, "lat":23.107647570907403, "title":"", "content":""}, // 出差工作的地方
	{"flag":"1", "lng":113.27836698163883, "lat":23.12167484931582, "title":"黄埔军校同学会旧址", "content":""}, // 广州第一顿饭（不对外开放）
	{"flag":"1", "lng":113.23933107080038, "lat":23.099438793195404, "title":"", "content":""}, // （住宿的地方）
	{"flag":"1", "lng":113.34842726786181, "lat":23.14753461236835, "title":"", "content":""},
	{"flag":"1", "lng":113.23925808347771,"lat":23.10855414400932,"title":"","content":""},
	// 武汉
	{"flag":"1", "lng":114.43076064504646, "lat":30.61278620395281, "title":"", "content":""},
	{"flag":"1", "lng":114.61565967664019, "lat":30.4685575453525, "title":"", "content":""},
	{"flag":"1", "lng":114.44859434501387, "lat":30.45830077799561, "title":"", "content":""},
	{"flag":"1", "lng":114.22040677936927, "lat":30.773619550126842, "title":"", "content":""},
	{"flag":"1", "lng":114.2981190992069,"lat":30.553641458451313,"title":"武汉长江大桥","content":"年代久远的大桥，没有想象中的惊艳","img":"img/map/whcjdq.jpg"},
	{"flag":"1", "lng":114.31799410861515,"lat":30.547926748259737,"title":"首义公园","content":""},
	{"flag":"1", "lng":114.37070420560053,"lat":30.569735779851005,"title":"湖北省博物馆","content":"路过，因为现场预约名额已满，没有进去","img":"img/map/hbsbwg.jpg"},
	// 深圳
	{"flag":"1", "lng":113.81837130372398, "lat":22.637309356687478, "title":"", "content":""}, // 第一次在机场吃饭，一碗面50多，好贵。发现做飞机多了，什么事都能碰上，比如廊桥坏了……
	{"flag":"1", "lng":114.03948915778263, "lat":22.75215205681878, "title":"", "content":""},
	{"flag":"1", "lng":114.3095197939928, "lat":22.7889164381731, "title":"", "content":""},
	{"flag":"1", "lng":114.14090214558567, "lat":22.654976647740316, "title":"", "content":""},
	{"flag":"1", "lng":114.13565154988159, "lat":22.682576935581523, "title":"", "content":""},
	{"flag":"1", "lng":113.99834160018256,"lat":22.593828970701463,"title":"","content":""},
	{"flag":"1", "lng":114.00010227898153,"lat":22.598416881525345,"title":"","content":""},
	{"flag":"1", "lng":113.93000008904066,"lat":22.55660103627277,"title":"","content":""},
	{"flag":"1", "lng":113.93525068474474,"lat":22.575298829127266,"title":"","content":""},
	// 临沂
	{"flag":"1", "lng":118.36301037086804,"lat":35.109582923417925,"title":"","content":""},
	{"flag":"1", "lng":118.36960900873741,"lat":35.027447163435276,"title":"","content":""},
	// 哈尔滨
	{"flag":"1", "lng":126.25385679901385,"lat":45.63556624656899,"title":"","content":""},
	{"flag":"1", "lng":126.50672980007423,"lat":45.80611514791199,"title":"","content":""},
	{"flag":"1", "lng":126.59400489870679,"lat":45.76310576133965,"title":"","content":""},
	{"flag":"1", "lng":126.53193252471651,"lat":45.81332438924681,"title":"","content":""},
	{"flag":"1", "lng":126.60300142838926,"lat":45.7720082917044,"title":"","content":""},
	{"flag":"1", "lng":126.63358832453301,"lat":45.776713158375536,"title":"索菲亚广场","content":"", "img":"img/map/sfygc.jpg"},
	{"flag":"1", "lng":126.623581607623,"lat":45.78703121105477,"title":"","content":""},
	{"flag":"1", "lng":126.62667280939493,"lat":45.77417820925599,"title":"中央大街","content":"", "img":"img/map/zydj.jpg"},
	{"flag":"1", "lng":126.62941161038279,"lat":45.783341858948944,"title":"","content":""},
	{"flag":"1", "lng":126.59644707474779,"lat":45.70816400848598,"title":"","content":""},
	{"flag":"1", "lng":126.61530596587855,"lat":45.766020631745235,"title":"","content":""},
	// 合肥
	{"flag":"1", "lng":117.29695946707743,"lat":31.804617699650294,"title":"","content":""},
	{"flag":"1", "lng":117.28788074244083,"lat":31.924987478377368,"title":"","content":""},
	{"flag":"1", "lng":117.28216302786983,"lat":31.933158333168233,"title":"","content":""},
	{"flag":"1", "lng":117.30244227475758,"lat":31.99857149329507,"title":"","content":""},
	// 滨州
	{"flag":"1", "lng":117.71985448251809,"lat":36.94385118962924,"title":"","content":""}
	]