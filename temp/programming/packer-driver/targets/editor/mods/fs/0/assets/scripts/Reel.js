System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Reel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3590c3RFu9BX51AG7r2RgO/", "Reel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Reel", Reel = (_dec = ccclass('Reel'), _dec(_class = (_class2 = (_temp = class Reel extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_symbolHeight", 125);

          _defineProperty(this, "_rollTarget", 0);

          _defineProperty(this, "_rollCount", 0);

          _defineProperty(this, "_rollY", 0);

          _defineProperty(this, "_spinning", false);

          _defineProperty(this, "_direction", 1);

          _defineProperty(this, "_reelStopCB", null);

          _initializerDefineProperty(this, "reelSpeed", _descriptor, this);
        }

        startSpin(callback) {
          // this._rollTarget = Math.round(Math.random() * 20 + 50);
          // this._spinning = true;
          // this._rollCount = 0;
          // this._rollY = 0;
          // this.reelSpeed = Math.random()*500 + 700;
          // this._direction = (Math.random() > 0.5) ? 1 : -1;
          // this._reelStopCB = ()=>{
          //     this.node.setPosition(new Vec3(this.node.position.x, 0, 0));
          //     callback && callback();
          // }
          return new Promise((resolve, reject) => {
            this._rollTarget = Math.round(Math.random() * 20 + 50);
            this._spinning = true;
            this._rollCount = 0;
            this._rollY = 0;
            this.reelSpeed = Math.random() * 500 + 700;
            this._direction = Math.random() > 0.5 ? 1 : -1;

            this._reelStopCB = () => {
              this.node.setPosition(new Vec3(this.node.position.x, 0, 0)); // callback && callback();

              resolve(true);
            };

            setTimeout(reject, 10000);
          });
        }

        update(dt) {
          if (this._spinning) {
            let deltaY = this.reelSpeed * dt * this._direction;
            this._rollY += Math.abs(deltaY);
            this.node.setPosition(new Vec3(this.node.position.x, this.node.position.y - deltaY, 0));

            if (this._rollY >= this._symbolHeight) {
              this.node.setPosition(new Vec3(this.node.position.x, this.node.position.y + this._symbolHeight * this._direction, 0));
              this.swapSymbol();
              this._rollY -= this._symbolHeight;
              this._rollCount += 1;

              if (this._rollCount >= this._rollTarget) {
                this._spinning = false;
                this._reelStopCB && this._reelStopCB();
              }
            }
          }
        }

        swapSymbol() {
          let lastSymbolIndex = this._direction == 1 ? this.node.children.length - 1 : 0;
          let lastSymbol = this.node.children[lastSymbolIndex];

          if (this._direction == 1) {
            lastSymbol.setSiblingIndex(0);
          } else {
            lastSymbol.setSiblingIndex(this.node.children.length);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Reel.js.map