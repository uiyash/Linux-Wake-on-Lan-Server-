# Linux-Wake-on-Lan-Server-using-Node.js
wake devices on local net via a raspberry pi, etc.
it's technically an api! which works on http requests, we can you it for home-automation, smart home, etc. and it easily works with Google home, Alexa, etc.

All you need is express.js and Node developement environment and 'wakeonlan' installed if not use 
'sudo apt-get install wakeonlan '

Initialization Steps
1. download the file 'app.js' 
2. place it in a folder
3. open terminal in the folder
4. 'npm install express --save'
5. Run the above command the start the sever using
6. 'node app.js'
7. The server is live to wake devices on your network!


Operation Modes! 
~Basically in two ways
1. Add devices in the harcode
  var devices = [{
	  name:'TV',
	  mac:'00:00:00:00:00:00'
	  },{
	  name:'PC',
	  mac:'00:00:00:00:00:00'
	  }]
    
   Then later http://ip:port/wake/2/:secret/:device make a get request by visiting the link,
    where secret is the secret code you set! and device is the name of the device you wanna wake!
   
2. Send mac adress of the device
  http://ip:port/wake/2/:secret/:device
  where secret is the secret code you set! and device is the mac address you need to wake
   
