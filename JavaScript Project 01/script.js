fetch("https://api.github.com/users")
.then((res)=> res.json())
.then((data)=> {
        console.log(data[20]);

// ----------------------------------- Github User 1-------------------------------------
        document
             .getElementById("profileimage1")
             .setAttribute("src",data[20].avatar_url)
        
        document.getElementById("user").innerText = data[20].login;

        document.getElementById("visit").setAttribute("href",data[20].html_url);

        document.getElementById("follower1").setAttribute("href",data[20].html_url);
        
        document.getElementById("following1").setAttribute("href",data[20].html_url);  
        
// ----------------------------------- Github User 2-------------------------------------
        document
            .getElementById("profileimage2")
            .setAttribute("src",data[16].avatar_url)

        document.getElementById("user2").innerText = data[16].login;

        document.getElementById("visit2").setAttribute("href",data[16].html_url);

        document.getElementById("follower2").setAttribute("href",data[16].html_url);

        document.getElementById("following2").setAttribute("href",data[16].html_url);         


// ----------------------------------- Github User 3-------------------------------------

        document
           .getElementById("profileimage3")
           .setAttribute("src",data[18].avatar_url)

        document.getElementById("user3").innerText = data[18].login;

        document.getElementById("visit3").setAttribute("href",data[18].html_url);

        document.getElementById("follower3").setAttribute("href",data[18].html_url);

        document.getElementById("following3").setAttribute("href",data[18].html_url); 
        
        // ---Github User 4-------------------------------------

        document
           .getElementById("profileimage4")
           .setAttribute("src",data[22].avatar_url)

        document.getElementById("user4").innerText = data[22].login;

        document.getElementById("visit4").setAttribute("href",data[22].html_url);

        document.getElementById("follower4").setAttribute("href",data[22].html_url);

        document.getElementById("following4").setAttribute("href",data[22].html_url);


        // ---Github User 5-------------------------------------

        document
           .getElementById("profileimage5")
           .setAttribute("src",data[23].avatar_url)

        document.getElementById("user5").innerText = data[23].login;

        document.getElementById("visit5").setAttribute("href",data[23].html_url);

        document.getElementById("follower5").setAttribute("href",data[23].html_url);

        document.getElementById("following5").setAttribute("href",data[23].html_url);

        // ---Github User 6-------------------------------------

        document
           .getElementById("profileimage6")
           .setAttribute("src",data[24].avatar_url)

        document.getElementById("user6").innerText = data[24].login;

        document.getElementById("visit6").setAttribute("href",data[24].html_url);

        document.getElementById("follower6").setAttribute("href",data[24].html_url);

        document.getElementById("following6").setAttribute("href",data[24].html_url);

        // ---Github User 7-------------------------------------

        document
           .getElementById("profileimage7")
           .setAttribute("src",data[25].avatar_url)

        document.getElementById("user7").innerText = data[25].login;

        document.getElementById("visit7").setAttribute("href",data[25].html_url);

        document.getElementById("follower7").setAttribute("href",data[25].html_url);

        document.getElementById("following7").setAttribute("href",data[25].html_url);

        // ---Github User 8-------------------------------------

        document
           .getElementById("profileimage8")
           .setAttribute("src",data[26].avatar_url)

        document.getElementById("user8").innerText = data[26].login;

        document.getElementById("visit8").setAttribute("href",data[26].html_url);

        document.getElementById("follower8").setAttribute("href",data[26].html_url);

        document.getElementById("following8").setAttribute("href",data[26].html_url);

        // ---Github User 9-------------------------------------

        document
           .getElementById("profileimage9")
           .setAttribute("src",data[27].avatar_url)

        document.getElementById("user9").innerText = data[27].login;

        document.getElementById("visit9").setAttribute("href",data[27].html_url);

        document.getElementById("follower9").setAttribute("href",data[27].html_url);

        document.getElementById("following9").setAttribute("href",data[27].html_url);

        // ---Github User 10-------------------------------------

        document
           .getElementById("profileimage10")
           .setAttribute("src",data[28].avatar_url)

        document.getElementById("user10").innerText = data[28].login;

        document.getElementById("visit10").setAttribute("href",data[28].html_url);

        document.getElementById("follower10").setAttribute("href",data[28].html_url);

        document.getElementById("following10").setAttribute("href",data[28].html_url);

        // ---Github User 11-------------------------------------

        document
           .getElementById("profileimage11")
           .setAttribute("src",data[29].avatar_url)

        document.getElementById("user11").innerText = data[29].login;

        document.getElementById("visit11").setAttribute("href",data[29].html_url);

        document.getElementById("follower11").setAttribute("href",data[29].html_url);

        document.getElementById("following11").setAttribute("href",data[29].html_url);

        // ---Github User 12-------------------------------------

        document
           .getElementById("profileimage12")
           .setAttribute("src",data[0].avatar_url)

        document.getElementById("user12").innerText = data[0].login;

        document.getElementById("visit12").setAttribute("href",data[0].html_url);

        document.getElementById("follower12").setAttribute("href",data[0].html_url);

        document.getElementById("following12").setAttribute("href",data[0].html_url);



});





