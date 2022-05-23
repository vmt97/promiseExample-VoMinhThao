System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, log, Label, Reel, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Table;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReel(extras) {
    _reporterNs.report("Reel", "./Reel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Reel = _unresolved_2.Reel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbf30ByE4JDVLIYf+ZpWc8O", "Table", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Table", Table = (_dec = ccclass('Table'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = class Table extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_reels", []);

          _defineProperty(this, "_listPromise", []);

          _initializerDefineProperty(this, "status", _descriptor, this);
        }

        onLoad() {
          this._reels = this.getComponentsInChildren(_crd && Reel === void 0 ? (_reportPossibleCrUseOfReel({
            error: Error()
          }), Reel) : Reel);
        }

        spin() {
          this.status.string = 'Table Spinning';

          this._reels.forEach(it => {
            this._listPromise.push(it.startSpin());
          });

          Promise.all(this._listPromise).then(() => {
            this.onTableStop();
          }).catch(() => {
            this.onTableTimout();
          });
        }

        orderSpin() {
          this.status.string = 'Table Order Spinning';
          Promise.resolve(this._reels[0].startSpin()).then(() => this._reels[1].startSpin()).then(() => this._reels[2].startSpin()).then(() => this._reels[3].startSpin()).then(() => this._reels[4].startSpin()).then(() => {
            this.onTableStop();
          });
        }
        /*
        Quest 1: Implement function spin table 5 reel cùng lúc, sử dụng promise, trả về call back khi tất cả reel cùng dừng lại
        có thể update lại function spin, không được update Reel.ts*/
        // onTableStop() {
        //     this.status.string = 'Table Stopped';
        //     this._listPromise = [];
        // }

        /*
        Quest 2: Từ quest 1, kiểm tra nếu có một trong những reel chạy quá 10s chưa dừng trigger function onTableTimeout
        */


        onTableTimout() {
          this.status.string = 'Table Timeout';
        }
        /*
        Quest 3: Implement function để table spin từng reel theo thứ tự 1->5 lần lượt reel này dừng đến reel tiếp theo,
        sau khi tất cả các reel đã dừng thì trigger function onTableStop
        */


        onTableStop() {
          log('onTableStop');
        }
        /*
        Quest 4: Update Reel.ts để mỗi function startSpin là 1 promise, sau đó làm lại các quest 1,2,3
        */


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Table.js.map