  var fields_validated = {} ;
  
  var validate_name = function(name){
  	  if(/[^a-z\s]/i.exec(name)){
  	  	  throw new Error("The candidate name can only contain spaces and letters") ;
  	  }
  	  if(name.length < 8){
  	  	  throw new Error("The candidate name must be at least 8 letters long") ;
  	  }
      fields_validated.name = true ;
  };
  
  var validate_date = function(date , field , future_date){
  	  var epoch_ref = Date.parse(date) ;
      if(typeof epoch_ref !== "number" || date.length === 0){
          throw new Error("Please enter a valid date") ;
      }
      if(epoch_ref > (new Date).getTime() && !future_date){
          throw new Error("Date must be in the past");
      }
      if(epoch_ref < (new Date).getTime() && future_date){
          throw new Error("Date must be in the future");
      }			      
      return fields_validated[field] = true ;
  };
  
  var validate_gender = function(gender){
  	  fields_validated.gender = (["male" , "female"].indexOf(gender) > -1)? true : false ;
  	  return fields_validated.gender ;
  };
  
  var validate_firstaid = function(status){
  	  fields_validated.firstaid = (["no" , "yes"].indexOf(status) > -1)? true : false ;
  	  return fields_validated.firstaid ;
  };			  
  
  var validate_payroll_number = function(id){
      if(/[^0-9]/.exec(id) || id.length < 1){
          throw new Error("Payroll number must be a positive integer") ;
      } else {
          fields_validated.payroll = true ;
      }
  };
