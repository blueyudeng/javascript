//当其他线程发送一个数据的时候，会触发一个onmessage事件
//this指向当前的分线程
this.onmessage=function(e){
    //event事件上有一个data属性就是其他线程发送的信息
    console.log(e.data);

    var count=0;

    for(var i = 0;i< e.data ;i++){
        count+=Math.sqrt(i);
    }
    //把计算结果发送给主线程
    postMessage(count)

    // 在分线程中关闭自身
    close()
}