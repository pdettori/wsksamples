function main(params) {
  var date = new Date();
  console.log("invoked at: " + date.toLocaleString());
  console.log("Got counter: " + params.counter );
  return { message: "invoked at: " + date.toLocaleString() + " counter="+params.counter };
}
