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
    createjs.Ticker.framerate = 60;
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
    createjs.Ticker.framerate = 60;
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


////////hover

$(window).on('load', function(){
  $('.hov_deco').sparkleh({
    count: 60,
    color: ["#ffffff","#61a7ee","#4ed8f1","#f26198","#f8f977","#54f393","#dc63ff"]
  });
});

$.fn.sparkleh = function(options) {
  return this.each(function(k,v) {
    var $this = $(v);
    var settings = $.extend({
      width: $this.outerWidth(),
      height: $this.outerHeight(),
      color: '#FFFFFF',
      count: 30,
      overlap: 0,
      speed: 1
    }, options );
    var sparkle = new Sparkle( $this, settings );
    $this.on({
      'mouseover focus' : function(e) {
        sparkle.over();
      },
      'mouseout blur' : function(e) {
        sparkle.out();
      }
    });
  });
}

function Sparkle($parent, options) {
  this.options = options;
  this.init( $parent );
}

Sparkle.prototype = {
  'init' : function( $parent ) {
    var _this = this;
    this.$canvas = 
      $('<canvas>')
        .addClass('sparkle-canvas')
        .css({
          position: 'absolute',
          top: '-'+_this.options.overlap+'px',
          left: '-'+_this.options.overlap+'px',
          'pointer-events': 'none'
        })
        .appendTo($parent);
    this.canvas = this.$canvas[0];
    this.context = this.canvas.getContext('2d');
    this.sprite = new Image();
    this.sprites = [0,12,24,36];
    // this.sprites = [0,6,13,20];
    this.sprite.src = this.datauri;
    this.canvas.width = this.options.width + ( this.options.overlap * 2);
    this.canvas.height = this.options.height + ( this.options.overlap * 2);
    this.particles = this.createSparkles( this.canvas.width , this.canvas.height );
    this.anim = null;
    this.fade = false;
  },
  
  'createSparkles' : function(w, h) {
    var holder = [];
    for( var i = 0; i < this.options.count; i++ ) {
      var color = this.options.color;
      if( this.options.color == 'rainbow' ) {
        color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      } else if( $.type(this.options.color) === 'array' ) {
        color = this.options.color[ Math.floor(Math.random()*this.options.color.length) ];
      }
      holder[i] = {
        position: {
          x: Math.floor(Math.random()*w),
          y: Math.floor(Math.random()*h)
        },
        style: this.sprites[ Math.floor(Math.random()*4) ],
        delta: {
          x: Math.floor(Math.random() * 1000) - 500,
          y: Math.floor(Math.random() * 1000) - 500
        },
        size: parseFloat((Math.random()*2).toFixed(2)),
        color: color
      };
            
    }
    return holder;
  },
  
  'draw' : function( time, fade ) {
    var ctx = this.context;
    ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    for( var i = 0; i < this.options.count; i++ ) {
      var derpicle = this.particles[i];
      var modulus = Math.floor(Math.random()*14);
      if( Math.floor(time) % modulus === 0 ) {
        derpicle.style = this.sprites[ Math.floor(Math.random()*4) ];
      }
      ctx.save();
      ctx.globalAlpha = derpicle.opacity;
      ctx.drawImage(this.sprite, derpicle.style, 0, 14, 14, derpicle.position.x, derpicle.position.y, 14, 14);
      if( this.options.color ) {  
        ctx.globalCompositeOperation = 'source-atop';
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = derpicle.color;
        ctx.fillRect(derpicle.position.x, derpicle.position.y, 14, 14);
      }
      ctx.restore();
    }
  },
  
  'update' : function() {
     var _this = this;
     this.anim = window.requestAnimationFrame( function(time) {
       for( var i = 0; i < _this.options.count; i++ ) {
         var u = _this.particles[i];
         var randX = ( Math.random() > Math.random()*2 );
         var randY = ( Math.random() > Math.random()*3 );
         if( randX ) {
           u.position.x += ((u.delta.x * _this.options.speed) / 1500); 
         }        
         if( !randY ) {
           u.position.y -= ((u.delta.y * _this.options.speed) / 800);
         }
         if( u.position.x > _this.canvas.width ) {
           u.position.x = -14;
         } else if ( u.position.x < -14 ) {
           u.position.x = _this.canvas.width; 
         }
         if( u.position.y > _this.canvas.height ) {
           u.position.y = -14;
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         } else if ( u.position.y < -14 ) {
           u.position.y = _this.canvas.height; 
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         }
         if( _this.fade ) {
           u.opacity -= 0.02;
         } else {
           u.opacity -= 0.005;
         }
         if( u.opacity <= 0 ) {
           u.opacity = ( _this.fade ) ? 0 : 1;
         }
       }
       
       _this.draw( time );
       if( _this.fade ) {
         _this.fadeCount -= 1;
         if( _this.fadeCount < 0 ) {
           window.cancelAnimationFrame( _this.anim );
         } else {
           _this.update(); 
         }
       } else {
         _this.update();
       }
       
     });

  },
  
  'cancel' : function() {
    this.fadeCount = 100;
  },
  
  'over' : function() {
    window.cancelAnimationFrame( this.anim );
    for( var i = 0; i < this.options.count; i++ ) {
      this.particles[i].opacity = Math.random();
    }
    this.fade = false;
    this.update();
  },
  
  'out' : function() {
    this.fade = true;
    this.cancel();
  },
  "datauri" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAOCAYAAABpcp9aAAACeklEQVRIidWWvWtUQRTFf293kzUvH+RLETSLEVdBbEyqFQubbJVOizTBys7KTrAULARrW1PrP2BALCStCFEwVn4UomYDIa6azeZYzHm8x+7LxoARPDDMfWfOm7l3Pu5MhCGJf4AIKLgGELDruhMFoAiUgHFzDWAHaPs/SofobB4KQB8w4e91oGWH8rT9QBk4ae4H8MvlrwVQcNlNOu2BIhADpzIObdEdQGTfYmAEmDX/Ddi0vg0oL4DIA5GI9nGqDJwD3tqhvRABRwizf8XcF8KWaHmcZIuVgCFgEjgG1K1/7X/kspMXQB8wZfsjsL1PAGPAnDvOCyCZkDJwFKgCV932krBqbY8j0pkfB04A590/wDPgDekZaBZyBhzxD3O2eyEGLgC3XMd7OJ/M/GlgAbjosmBuAhggTF4/MGhuGrjpfmPb024btD5AUlHSmKS6pDWXurmiJDKlKGlU0iVJKwpY8fdoRh9J6pdUlbQoaVlSWyna5hYlnZU0bO28pIeSGupGw23zks5kV6BAOCz3CctctT3rNjq0M8ADoGau5u+ZHP3h4xBXoCRpSFJF0pykpcxsLpmrSBqRNOB6SlJN0g37kWDNXM2a4SgTQGJOAtdsPyakrr0QA5eBR8B14AXQ7NBkD/FxQsa667Y7hOz1me5DPAlUCIf4nvW3CYf4g/1q5mWhTWA5Y/dCE1glbJ3VHOexU8nt+ZWwvZ647Z25JmkaFfCd9CZuZfx5Rch2DWty02gLeG8774bsxIYH2NhHJ+An4fZ9bm7dnDKaJEVuOaBt4KnbPxEmdcu88rbQQXHQm/hPnxIlwrYrExIKhBVLnhI7kD6q/tvH3G/GN8ufnzB/CAAAAABJRU5ErkJggg=="
};