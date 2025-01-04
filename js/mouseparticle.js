function init() {
  canvas.width = 0;
  canvas.height = 0;
  var b = document.body;
  var d = document.documentElement;
  var fullw = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
  var fullh = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);
  canvas.width = fullw;
  canvas.height = fullh;
}
init();
window.onresize = function() {
  init();
}

/////particle_pc
var winW = $(window).width();
if(winW > 768){
  var particleSystem = null;
  var stage = null;

  //  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
  window.addEventListener("load", function () {
    // Stageオブジェクトを作成します。表示リストのルートになります。
    stage = new createjs.Stage("canvas");

    // パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);

    // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
    particleSystem.importFromJson(
      {
          "width": 1024,
          "height": 1024,
          "emitFrequency": 14,
          "startX": 369,
          "startXVariance": 13,
          "startY": 788,
          "startYVariance": 40,
          "initialDirection": "102",
          "initialDirectionVariance": "360",
          "initialSpeed": "1.4",
          "initialSpeedVariance": "0.7",
          "friction": 0.0185,
          "accelerationSpeed": 0.0525,
          "accelerationDirection": 270,
          "startScale": 0.18,
          "startScaleVariance": 0.5,
          "finishScale": "0",
          "finishScaleVariance": 0.16,
          "lifeSpan": "343",
          "lifeSpanVariance": 187,
          "startAlpha": "1",
          "startAlphaVariance": "0.58",
          "finishAlpha": "0",
          "finishAlphaVariance": 0.4,
          "shapeIdList": [
              "kirakira2",
              "kirakira",
              "blur_circle"
          ],
          "startColor": {
              "hue": 0,
              "hueVariance": 60,
              "saturation": "59",
              "saturationVariance": "0",
              "luminance": 84,
              "luminanceVariance": 18
          },
          "blendMode": true,
          "alphaCurveType": "0",
          "VERSION": "1.0.0"
      }
    );

    // フレームレートの設定
    createjs.Ticker.framerate = 100;
    // requestAnimationFrameに従った呼び出し
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.addEventListener("tick", handleTick);
  });

  function handleTick() {
    //  マウス位置に従って、パーティクル発生位置を変更する
    particleSystem.startX = stage.mouseX;
    particleSystem.startY = stage.mouseY;
    // 時間経過によって色相の基準値を変化させる
    particleSystem.startColor.hue += 2;
    if (particleSystem.startColor.hue >= 360) {
      particleSystem.startColor.hue = 0;
    }

    // パーティクルの発生・更新
    particleSystem.update();

    // 描画を更新する
    stage.update();
  }
}
else {
  var particleSystem = null;
  var stage = null;

  //  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
  window.addEventListener("load", function () {
    // Stageオブジェクトを作成します。表示リストのルートになります。
    stage = new createjs.Stage("canvas");

    // パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);

    // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
    particleSystem.importFromJson(
      // パラメーターJSONのコピー＆ペースト ここから--
{
    "bgColor": "#00000",
    "width": 1024,
    "height": 616,
    "emitFrequency": 8,
    "startX": 300,
    "startXVariance": "2300",
    "startY": 1500,
    "startYVariance": "100",
    "initialDirection": "270",
    "initialDirectionVariance": "0",
    "initialSpeed": "0",
    "initialSpeedVariance": "0",
    "friction": "0.071",
    "accelerationSpeed": "0.1045",
    "accelerationDirection": "270",
    "startScale": 0.6,
    "startScaleVariance": "1",
    "finishScale": "0",
    "finishScaleVariance": 0,
    "lifeSpan": 1000,
    "lifeSpanVariance": 100,
    "startAlpha": "0.8",
    "startAlphaVariance": 0.2,
    "finishAlpha": 0.6,
    "finishAlphaVariance": "0",
    "shapeIdList": [
        "kirakira",
        "kirakira2",
        "blur_circle"
    ],
    "startColor": {
        "hue": 262,
        "hueVariance": 360,
        "saturation": "78",
        "saturationVariance": "0",
        "luminance": 90,
        "luminanceVariance": 10
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
}
      // パラメーターJSONのコピー＆ペースト ここまで---
    );

    // フレームレートの設定
    createjs.Ticker.framerate = 50;
    // requestAnimationFrameに従った呼び出し
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.addEventListener("tick", handleTick);
  });

  function handleTick() {
    // 時間経過によって色相の基準値を変化させる
    particleSystem.startColor.hue += 2;
    if (particleSystem.startColor.hue >= 360) {
      particleSystem.startColor.hue = 0;
    }

    // パーティクルの発生・更新
    particleSystem.update();

    // 描画を更新する
    stage.update();
  }
}