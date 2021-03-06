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
        constructor() {
          super(...arguments);

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

        spinCompletedV1() {
          this._reels.forEach(it => {
            this._listPromise.push(new Promise((resolve, reject) => {
              it.startSpin(() => {
                resolve(true);
              });
            }));
          });

          Promise.all(this._listPromise).then(() => {
            this.onTableStop();
          });
        }

        spinTimeOutV1() {
          this.status.string = 'Table Spinning';

          this._reels.forEach(it => {
            this._listPromise.push(new Promise((resolve, reject) => {
              it.startSpin(() => {
                resolve(true);
              });
              setTimeout(reject => {
                this.onTableTimout();
              }, 10000);
            }));
          });
        }

        orderSpinV1() {
          this.status.string = 'Table Order Spinning';

          var promise0 = function promise0(reels) {
            return new Promise((resolve, reject) => {
              reels[0].startSpin(() => {
                resolve(true);
              });
            });
          };

          var promise1 = function promise1(reels) {
            return new Promise((resolve, reject) => {
              reels[1].startSpin(() => {
                resolve(true);
              });
            });
          };

          var promise2 = function promise2(reels) {
            return new Promise((resolve, reject) => {
              reels[2].startSpin(() => {
                resolve(true);
              });
            });
          };

          var promise3 = function promise3(reels) {
            return new Promise((resolve, reject) => {
              reels[3].startSpin(() => {
                resolve(true);
              });
            });
          };

          var promise4 = function promise4(reels) {
            return new Promise((resolve, reject) => {
              reels[4].startSpin(() => {
                resolve(true);
              });
            });
          };

          Promise.resolve(promise0(this._reels)).then(() => promise1(this._reels)).then(() => promise2(this._reels)).then(() => promise3(this._reels)).then(() => promise4(this._reels)).then(() => {
            this.onTableStop();
          });
        }

        spinCompletedV2() {
          this.status.string = 'Table Spinning';

          this._reels.forEach(it => {
            this._listPromise.push(it.startSpin());
          });

          Promise.all(this._listPromise).then(() => {
            this.onTableStop();
          });
        }

        spinTimeOutV2() {
          this.status.string = 'Table Spinning';

          this._reels.forEach(it => {
            this._listPromise.push(it.startSpin().catch(() => {
              this.onTableTimout();
            }));
          });
        }

        orderSpinv2() {
          this.status.string = 'Table Order Spinning';
          Promise.resolve(this._reels[0].startSpin()).then(() => this._reels[1].startSpin()).then(() => this._reels[2].startSpin()).then(() => this._reels[3].startSpin()).then(() => this._reels[4].startSpin()).then(() => {
            this.onTableStop();
          });
        }
        /*
        Quest 1: Implement function spin table 5 reel c??ng l??c, s??? d???ng promise, tr??? v??? call back khi t???t c??? reel c??ng d???ng l???i
        c?? th??? update l???i function spin, kh??ng ???????c update Reel.ts*/
        // onTableStop() {
        //     this.status.string = 'Table Stopped';
        //     this._listPromise = [];
        // }

        /*
        Quest 2: T??? quest 1, ki???m tra n???u c?? m???t trong nh???ng reel ch???y qu?? 10s ch??a d???ng trigger function onTableTimeout
        */


        onTableTimout() {
          this.status.string = 'Table Timeout';
          this._listPromise = [];
        }
        /*
        Quest 3: Implement function ????? table spin t???ng reel theo th??? t??? 1->5 l???n l?????t reel n??y d???ng ?????n reel ti???p theo,
        sau khi t???t c??? c??c reel ???? d???ng th?? trigger function onTableStop
        */


        onTableStop() {
          log('onTableStop');
          this._listPromise = [];
        }
        /*
        Quest 4: Update Reel.ts ????? m???i function startSpin l?? 1 promise, sau ???? l??m l???i c??c quest 1,2,3
        */


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Table.js.map