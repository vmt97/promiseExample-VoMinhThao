
import { _decorator, Component, Node, log, Label } from 'cc';
import { Reel } from './Reel';
const { ccclass, property } = _decorator;

 
@ccclass('Table')
export class Table extends Component {

    _reels = [];
    _listPromise = [];

    @property({type: Label})
    status = null;

    onLoad() {
        this._reels = this.getComponentsInChildren(Reel);
    }

    spin() {
        this.status.string = 'Table Spinning';
        this._reels.forEach(
            it => {
                this._listPromise.push(it.startSpin())  
            }
        );

        Promise.all(this._listPromise).then( 
            ()=>{
                this.onTableStop();
            }
        ).catch(
            ()=>{
                this.onTableTimout();
            }
        )
    }

    orderSpin(){
        this.status.string = 'Table Order Spinning';
        Promise.resolve(this._reels[0].startSpin())
                    .then(()=>this._reels[1].startSpin())
                    .then(()=>this._reels[2].startSpin())
                    .then(()=>this._reels[3].startSpin())
                    .then(()=>this._reels[4].startSpin())
                    .then(()=>{
                        this.onTableStop();
                    })
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
}
