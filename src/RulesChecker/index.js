module.exports = {

        checkRules: function(rules, params){

            for(const rule in rules){
                if(rules[rule].editable === true){
    
                    if(rules[rule].constraints && params[rule]){
                        rules[rule].constraints(params[rule]);
                    }
                }
            }
        },

        /* 
        **base is an Object to use for comparison
        **rules is the rule for an Entity which list all fields that are editable
        **toCompare is the Object we want to compare with the base 
        */
        checkAndUpdate: async function(base,rules, toCompare){

            // debugger

            let isDifferent = false;
            //check for element in rules in order to find editable fields
            for(const rule in rules){

                if(rules[rule].editable === true){
                    
                    //if editable rule founded
                    if(rule in base && rule in toCompare){
 
                        if(rules[rule].comparisonRules){
                            const result = await rules[rule].comparisonRules(base[rule], toCompare[rule]);
                                                  
                            if(result){

                                isDifferent = true;
                                base[rule] = result;
                            }


                        }else if (base[rule] !== toCompare[rule]){
                            isDifferent = true;
                            base[rule] = toCompare[rule]
                        }


                        /*
                            **verifiy that both indexes exist in toCompare and base Object
                            **if both indexes exist and are different, replace the base value by toCompare value
                        */
                       

                        
                    }
                }
            }
            
            if(isDifferent){
                return base;
            }

            throw new Error ("Values are the same")
        }
};