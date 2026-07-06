let photos=[
     "IMAGES/banner1.jpg">
     "IMAGES/banner2.jpg">
     "IMAGES/banner3.jpg">
    ];
    
    let i=0;
    
    setInterval(function(){
    
    i++;
    
    if(i>=photos.length){
    i=0;
    }
    
    document.getElementById("slide").src=photos[i];
    
    },3000);
    function searchPage(){

        let text=document.getElementById("search").value.toLowerCase();
        
        if(text=="pm kisan"){
        window.location.href="pages/pmkisan.html";
        }
        else if(text=="pension"){
        window.location.href="pages/pension.html";
        }
        else if(text=="ration"){
        window.location.href="pages/ration.html";
        }
        else{
        alert("योजना नहीं मिली");
        }
        
        }
        function toggleMenu(){

            let menu=document.getElementById("menuLinks");
            
            if(menu.style.display=="block"){
            menu.style.display="none";
            }
            else{
            menu.style.display="block";
            }
            
            }
            function showTime(){

                let today = new Date();
                
                document.getElementById("clock").innerHTML =
                today.toLocaleString();
                
                }
                
                setInterval(showTime,1000);
                showTime();