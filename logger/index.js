const youtubelogger=require("./youtubelogger")
let logger=null;

if (process.env.NODE_ENV !== 'production') {
    logger=youtubelogger();
  }

  module.exports=logger;