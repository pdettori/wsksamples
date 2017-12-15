function main(params) {
    var date = new Date();
    console.log("invoked at: " + date.toISOString());
    console.log("Got counter: " + params.counter );
    out = { timestamp: date.toISOString(), counter: params.counter };
   
    // since this is using the message hub package, it requires the json content
    // with a key `value` and JSON content stringified. 
    return {value: JSON.stringify(out), topic: params.topic};
  }

//var params = {};
//params.counter = "100";  
//var o = main(params) ;
//console.log(o);
