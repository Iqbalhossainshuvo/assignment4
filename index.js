


// RadianToDegree Convert
    function radianToDegree(radian){
    if(typeof radian !=="number"){
        return "Enter valid number"
        }
        else{
        const degreeToRadian=radian * 57.2958;
        const toFixedDegreeToRadian=degreeToRadian.toFixed(2);
        const stringToParseFloat=parseFloat(toFixedDegreeToRadian);
        return stringToParseFloat;
        }
    }

  

    // Javascript File Name
    function isJavaScriptFile(string){
        if(typeof string !=="string"){
        return "please enter Valid File";
        }
        else{
        const endWithFileName=string.endsWith(".js");
        return endWithFileName;
        }
        }

       

// Oil Price
        function oilPrice(diesel,petrol,octan){
        if(typeof diesel !=="number" && typeof petrol !=="number" && typeof octan !=="number"){
        return "please enter valid Price Number"
        }
        else{
        let dieselCalculator=diesel * 114;
        let petrolCalculator=petrol * 130;
        let octanCalculator=octan * 135;
        let totalPrice=dieselCalculator + petrolCalculator + octanCalculator;
        return totalPrice;
        }
        }

     

        // Public bus
        function publicBusFare(busFare){
            let peopleFare=busFare % 50;
            let microBusPeopleFare=peopleFare % 11;
            let totalRestPeopleTicketPrice=microBusPeopleFare * 250;
            return totalRestPeopleTicketPrice;
            }

            
// Friend Calculate
            const object1={name:"iqbal ",friend:"hossain"}
            const object2={name:"hossain",friend:"iqbal"}

            function isBestFriend(object1,object2){
            if(object1.name === object2.friend && object2.name === object1.friend){
             return true;
             }
            else{
             return false;
             }
             }     