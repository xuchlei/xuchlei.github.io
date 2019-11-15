---
title: whoami
date: 2019-11-07 15:31:33
---
## 一个不是程序员的码农。

#### 我的足迹
<script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=AA4uqECjDYfZUk9vSVMNR5bPdFEtw6GU"></script>

<div id="container" style="min-height:500px;width:100%"></div>

<script type="text/javascript">
var map = new BMap.Map("container");
var point = new BMap.Point(123.678995,33.632182);
map.centerAndZoom(point, 5);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//map.setMapStyleV2({     
//  styleId: '0a0506e05a8992c50e643362b19ff5b1'
//});
var datas = ["烟台市", "济南市", "杭州市", "南京市", "上海市", "嘉兴市", "泰州市", "北京市"];
function getBoundary(){       
var bdary = new BMap.Boundary();
for(var i = 0; i < datas.length; i++) {
	bdary.get(datas[i], function(rs){       //获取行政区域
		//map.clearOverlays();        //清除地图覆盖物       
		var count = rs.boundaries.length; //行政区域的点有多少个
		var pointArray = [];
		for (var i = 0; i < count; i++) {
			var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
			map.addOverlay(ply);  //添加覆盖物
			pointArray = pointArray.concat(ply.getPath());
		}    
		//map.setViewport(pointArray);    //调整视野
	});
  }
}
setTimeout(function(){
	getBoundary();
}, 2000);

// 在东京(遗憾啊,没好好逛过，部分地点忘了（不重要））
// 成田机场，多摩市诹访（住所），秋叶原，上野公园（朋友请的星巴克，第一次喝），阿美横商店街（和朋友买羊肉）
var points = ["140.392831,35.772015", "139.450899,35.623931", "139.772048,35.705027", "139.773935,35.715432", "139.774518,35.710061"];
points.push("139.446201, 35.650488"); // 三菱UFJ銀行聖蹟桜ヶ丘支店（第一次办银行卡的地方，结果失败）
points.push("139.773696, 35.682532"); // 日本桥（看电影）
points.push("139.76894, 35.681535"); // 大丸百货（代购侦查）
points.push("139.450212, 35.653337"); // 多摩川
points.push("139.443138, 35.61391"); // bookoff多摩永山店
points.push("139.469234, 35.626468"); // 卢屋书店（骨王在这买的）
points.push("139.434016, 35.630271"); // 乞田川（樱花很漂亮）
points.push("139.460718, 35.637997"); // 樱丘公园（樱花很漂亮）
points.push("139.421731, 35.621865"); // 多摩邮局（代购邮寄）和朋友逛过附近商场
points.push("139.627906, 35.6119"); // 二子玉川（面试）
points.push("139.796006, 35.655449"); // 丰州（面试）
points.push("139.769631, 35.692301"); // 神田（"工作"的地方）
// 在名古屋
points.push("136.814647,34.859167"); // 中部国际机场
points.push("136.920355,35.172214"); // 新荣町（住所）
points.push("136.911372, 35.173703"); // 中部电力（工作）
points.push("136.899662,35.187537"); // 名古屋城
points.push("136.908951,35.125575"); // 热田神宫
points.push("136.891739, 35.174548"); // 四间道
points.push("136.908295, 35.172342"); // 名古屋电视塔
points.push("136.936789, 35.192492"); // QBハウス（理发）
points.push("136.926409, 35.171324"); // バロー車道店（经常去的超市）
points.push("136.922228, 35.177992"); // マックスバリュ　代官店（活动范围扩大 超市）
points.push("136.920489, 35.163722"); // バロー 新栄店（活动范围扩大 超市）
points.push("136.918935, 35.155504"); // 鹤舞公园
points.push("136.899694,35.159888"); // 大须
points.push("137.313256,35.130291"); // 香岚溪
// 京都
points.push("135.785049,34.994853"); // 清水寺
points.push("135.780773,34.996202"); // 二年坡三年坡
points.push("135.77855,35.003665"); // 八坂神社
points.push("135.775177,35.005121"); // 花间小路
points.push("135.771503,35.003495"); // 绿川
points.push("135.751462,35.012845"); // 二条城
points.push("135.729224,35.039441"); // 金阁寺
points.push("135.74401,35.001469"); // 壬生寺（除夜）
points.push("135.77542,34.967278"); // 伏见稻荷大社
points.push("135.747945, 34.994811"); // （住宿一晚）
// 神户
points.push("135.186724,34.682646"); // 神户港塔
points.push("135.188112, 34.688225"); // 南京街
points.push("135.254281, 34.711266"); // （住宿一晚）
// 大阪
points.push("135.500412,34.675128"); // 心斋桥
points.push("135.500745,34.669143"); // 道顿崛
points.push("135.506301,34.652519"); // 通天阁
points.push("135.525915,34.687154"); // 大阪城
points.push("135.500152, 34.651705"); // （住宿一晚）

function addMarker(point){
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
}
for (var i = 0; i < points.length; i ++) {
	var point = new BMap.Point(points[i].split(",")[0], points[i].split(",")[1]);
	addMarker(point);
}
</script>

#### 我的邮箱
xuchl@xuchunlei.top