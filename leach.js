import WebTorrent from 'webtorrent'
  const client = new WebTorrent()
  const magnetURI = './1.png.torrent'
  client.add(magnetURI,{path:"./Torrent"}, function (torrent) {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash)
    console.log(torrent.downloadSpeed);
    torrent.downloaded
    // torrent.files.forEach(function (file) {
    //   // Display the file by appending it to the DOM. Supports video, audio, images, and
    //   // more. Specify a container element (CSS selector or reference to DOM node).
    //   file.downloaded
    // })
  })
