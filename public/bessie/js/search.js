$(function(){

    //��������Ŧ��ӵ���¼�
    $("#searcBtn").click(function(){
        //��ȡ�������ֵ
        var searchContent= $("#searchContent").val();
        //console.log(searchContent);

        //�û������˹ؼ���
        if(searchContent){
            //���û�����Ĺؼ��ִ浽������
            keyArr.push(searchContent);
            //���ؼ�������洢�ڱ���
            localStorage.setItem("keyArr",JSON.stringify(keyArr));
            location.href ="searchResult.html?keyword="+searchContent;
        }else{
            //�û�û������ؼ���
            mui.toast('������Ҫ��������Ʒ�ؼ���');
        }
    })
    //�洢�ؼ��ֵ�����
    keyArr=[];
    if(localStorage.getItem("keyArr")){
        keyArr = JSON.parse(localStorage.getItem("keyArr"));
        var html = template("historyTpl",{res:keyArr});
        console.log(html);
        $("#historyBox").html(html);
    }
})