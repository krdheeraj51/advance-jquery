

// $('.search_detail').click(()=>{
//     //alert('hello .....');
//     if($('.dropbtn').attr('id')==='search_id'){
//         $('.dropbtn') .html('Search By Title');
//         $('.dropbtn') .attr('id','search_title');
//         $('.search_detail') .html('Search By Id');
//         $('.search_detail') .attr('id','search_id');
//     }else{
//         $('.dropbtn') .html('Search By Id');
//         $('.dropbtn') .attr('id','search_id');
//         $('.search_detail') .html('Search By Title');
//         $('.search_detail') .attr('id','search_title');
//     }
   

// });



$('.search-active-btn').click(()=>{
    if($('.search-active-btn').attr('id')==='search-by-title'){ 
        $('.search-active-btn').attr('id','search-by-id');
        $('.search-active-btn').html('Search By Id'); 
        $('#search_title_console').css("display","block");
        $('#search_id_console').css("display","none");
    }else{
        $('.search-active-btn').attr('id','search-by-title');
        $('.search-active-btn').html('Search By Title'); 
        $('#search_id_console').css("display","block");
        $('#search_title_console').css("display","none");

    }
});

$('#search_id_submit').click(()=>{
    loadDetailsFromId();

});
let loadDetailsFromId=()=>{
   let searchId= $('#search_by_id').val();
   //alert(searchId);
   //alert('http://www.omdbapi.com/?i='+searchId+'&apikey=8d17237');
   $.ajax({
    type:'Get', //Get Method
    dataType:'json',
    url:'http://www.omdbapi.com/?i='+searchId+'&apikey=8d17237',
    //Execute success code
    success:(data)=>{
       let dataDetails=data;
       alert('Show on console ....');
       console.log(dataDetails);
    },
    //On error execute code

    error:(data)=>{
        console.log('something going wrong .....');
    }
   });


};



