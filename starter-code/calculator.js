
    // get the user inputs
    // var value1 = prompt('enter first value');
    // var value2 = prompt('enter the second value');
    // var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
    // var exit = prompt('press "e" to exit or "c" to continue');
    //
    //
    // if (choice == "a") {
    //   console.log(Number(value1) + Number(value2));
    // }else if(choice == "s") {
    //   console.log(Number(value1) - Number(value2));
    // }else if (choice == "m") {
    //   console.log(Number(value1) * Number(value2));
    // }else if (choice == "d") {
    //   console.log(Number(value1) / Number(value2));
    // }

    do {
      var exit = prompt('press "e" to exit or "c" to continue');
      var value1 = prompt('enter first value');
      var value2 = prompt('enter the second value');
      var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";



      if (choice == "a") {
        alert(Number(value1) + Number(value2));
      }else if(choice == "s") {
        alert(Number(value1) - Number(value2));
      }else if (choice == "m") {
        alert(Number(value1) * Number(value2));
      }else if (choice == "d") {
        alert(Number(value1) / Number(value2));
      }

    } while (exit == "c")
