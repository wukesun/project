$.ajax({
    type:'get',
    url:'./footer.html',
    success(data){
        var html = '';
        html+=data;
        $('.footer-box').html(html);
    }
})