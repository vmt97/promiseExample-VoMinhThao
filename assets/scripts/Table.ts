
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
    
    spinCompletedV1(){
        this._reels.forEach(
            it => {
                this._listPromise.push(
                    new Promise((resolve,reject) =>{
                        it.startSpin(()=>{
                            resolve(true);
                        })
                    })
                )
            }
        );
        Promise.all(this._listPromise).then( 
            ()=>{
                this.onTableStop();
            }
        )
    }

    spinTimeOutV1(){
        this.status.string = 'Table Spinning';
        this._reels.forEach(
            it => {
                this._listPromise.push(
                    new Promise((resolve,reject) =>{
                        it.startSpin(()=>{
                            resolve(true);
                        })
                        setTimeout(reject =>{
                            this.onTableTimout();
                        },10000);
                    })
                )
            }
        );
    }

    orderSpinV1(){
        this.status.string = 'Table Order Spinning';
        let promise0 = function(reels){
            return new Promise((resolve,reject) =>{
                reels[0].startSpin(()=>{
                    resolve(true)
                })
            })
        }
        let promise1 = function(reels){
            return new Promise((resolve,reject) =>{
                reels[1].startSpin(()=>{
                    resolve(true)
                })
            })
        }
        let promise2 = function(reels){
            return new Promise((resolve,reject) =>{
                reels[2].startSpin(()=>{
                    resolve(true)
                })
            })
        }
        let promise3 = function(reels){
            return new Promise((resolve,reject) =>{
                reels[3].startSpin(()=>{
                    resolve(true)
                })
            })
        }
        let promise4 = function(reels){
            return new Promise((resolve,reject) =>{
                reels[4].startSpin(()=>{
                    resolve(true)
                })
            })
        }

        Promise.resolve(promise0(this._reels))
                    .then(()=>promise1(this._reels))
                    .then(()=>promise2(this._reels))
                    .then(()=>promise3(this._reels))
                    .then(()=>promise4(this._reels))
                    .then(()=>{
                        this.onTableStop();
                    })
    }

   
    spinCompletedV2(){
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
        )
    }

    spinTimeOutV2(){
        this.status.string = 'Table Spinning';
        this._reels.forEach(
            it => {
                this._listPromise.push(it.startSpin().catch(()=>{
                    this.onTableTimout()
                }))  
            }
        );
    }

    

    orderSpinv2(){
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
}
