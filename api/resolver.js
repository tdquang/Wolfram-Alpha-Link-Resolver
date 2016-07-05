var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var parseString = require('xml2js').parseString;


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();
  // Giphy image urls are in the format:
  // http://giphy.com/gifs/<seo-text>-<alphanumeric id>
  var matches = url.match(/\?i=([a-zA-Z0-9\+]+)$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }
  var input = matches[1];
  var requestURL = "http://api.wolframalpha.com/v2/query?appid=" + key + "&input=" + input + "&format=image";
  var response;
  try {
    response = sync.await(request({
      url: requestURL,
      timeout: 15 * 1000
    }, sync.defer()));
  } catch (e) {
    res.status(500).send('Error');
    return;
  }
  var parseResult;
  parseString(response.body, function (err, result) {
    parseResult = result;
  });

  var style = "border: 1px solid #99b0e1;border-radius: 8px;font-family: Arial,Helvetica,sans-serif;font-size: 8px; ";
  var podStyle = "border-bottom: 1px solid #e0e0e0;padding-bottom: 10px;padding-left: 4px;margin: 0 auto;color: #77a5b6;line-height: 20px;"
  var imageStyle = "margin-left: 10px;";
  var html = "<section width='600' style='" + style + "'>";
  var pods = parseResult['queryresult']['pod'];
  var footerStyle = "background: #f8f8f8;min-height: 24px;text-align: right;text-transform: uppercase;color: #888;padding-right: 5px;";
  var wolframLogoStyle = "line-height: 24px;text-decoration: none;";

  for (let pod of pods){
    //console.log(pod);
    html += "<section style='" + podStyle + "'>"
    html += pod.$.title;
    var subpods = pod.subpod;
    for (let subpod of subpods){
      html += "<section>";
      var images = subpod.img;
      for (let image of images){
        html += "<img src='" + image.$.src + "' title='" + image.$.title +
        "' width='" + image.$.width + "' height='" + image.$.height + "' style='" + imageStyle + "'/>";
        html += "</section>";
      }
    }
    html += "</section>";
  }
  html += "<footer style='" + footerStyle + "'>" + "<a href='" + url + "' style='" + wolframLogoStyle + "'>Powered by the Wolfram Language</a>" + "</footer>";
  html += "</section>";
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};
