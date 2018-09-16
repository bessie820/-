$(function(){

    //给搜索按纽添加点击事件
    $("#searcBtn").click(function(){
        //获取搜索框的值
        var searchContent= $("#searchContent").val();
        //console.log(searchContent);

        //用户输入了关键字
        if(searchContent){
            //将用户输入的关键字存到数组中
            keyArr.push(searchContent);
            //将关键字数组存储在本地
            localStorage.setItem("keyArr",JSON.stringify(keyArr));
            location.href ="searchResult.html?keyword="+searchContent;
        }else{
            //用户没有输入关键字
            mui.toast('请输入要搜索的商品关键字');
        }
    })
    //存储关键字的数组
    keyArr=[];
    if(localStorage.getItem("keyArr")){
        keyArr = JSON.parse(localStorage.getItem("keyArr"));
        var html = template("historyTpl",{res:keyArr});
        console.log(html);
        $("#historyBox").html(html);
    }
})