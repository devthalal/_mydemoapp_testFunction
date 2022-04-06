/**
  @param {} req
  @param {} res
 */
  const _mydemoapp_testFunction = async (req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      "Content-Type": "application/json",
    };
  
    res.writeHead(200, headers);
    res.write("Hello World, I am _mydemoapp_testFunction");
    res.end();
  };
  
  export default { _mydemoapp_testFunction };
  