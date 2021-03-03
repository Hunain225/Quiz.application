


function check(){
    var score = 0;
    var q1 = document.getElementById("q1-a1");
    var q2 = document.getElementById("q1-a2");
    var q3 = document.getElementById("q1-a3");
    var rightq4 = document.getElementById("q1-a4");
    if(rightq4.checked == true){
        score++
        // console.log(score)
    }

    var rightgroove1 = document.getElementById("q2-a1");
    var groove2 = document.getElementById("q2-a2");
    var groove3 = document.getElementById("q2-a3");
    var groove4 = document.getElementById("q2-a4");
    if(rightgroove1.checked == true){
        score++
        // console.log(score)
    }

    var rightans1 = document.getElementById("q3-a1");
    var ans3 = document.getElementById("q3-a2");
    var ans3 = document.getElementById("q3-a3");
    var ans4 = document.getElementById("q3-a4");
    if(rightans1.checked == true){
        score++
        // console.log(score)
    }

    var java1 = document.getElementById("q4-a1");
    var rightjava2 = document.getElementById("q4-a2");
    var java3 = document.getElementById("q4-a3");
    var java4 = document.getElementById("q4-a4");
    if(rightjava2.checked == true){
        score++
    }

    var rightlast1 = document.getElementById("q5-a1");
    var last2 = document.getElementById("q5-a2");
    var last3 = document.getElementById("q5-a3");
    var last4 = document.getElementById("q5-a4");
    if(rightlast1.checked == true){
        score++
    }

    var big1 = document.getElementById("q6-a1");
    var rightbig2 = document.getElementById("q6-a2");
    var big3 = document.getElementById("q6-a3");
    var big4 = document.getElementById("q6-a4");
    if(rightbig2.checked == true){
        score++
    }


    var fam1 = document.getElementById("q7-a1");
    var rightfam2 = document.getElementById("q7-a2");
    var fam3 = document.getElementById("q7-a3");
    var fam4 = document.getElementById("q7-a4");
    if(rightfam2.checked == true){
        score++
    }

    var hos1 = document.getElementById("q8-a1");
    var hos2 = document.getElementById("q8-a2");
    var hos3 = document.getElementById("q8-a3");
    var righthos4 = document.getElementById("q8-a4");
    if(righthos4.checked == true){
        score++
    }

    var bow1 = document.getElementById("q9-a1");
    var bow2 = document.getElementById("q9-a2");
    var rightbow3 = document.getElementById("q9-a3");
    var bow4 = document.getElementById("q9-a4");
    if(rightbow3.checked == true){
        score++
    }

    var leg1 = document.getElementById("q10-a1");
    var rightleg2 = document.getElementById("q10-a2");
    var leg3 = document.getElementById("q10-a3");
    var leg4 = document.getElementById("q10-a4");
    if(rightleg2.checked == true){
        score++
    }
  alert("your score is " + score)



  var wasif = firebase.database().ref("java")
var key = wasif.push().key
  var take = {
      key: key,
  }
console.log(take)
wasif.child(key).set(take)
}


