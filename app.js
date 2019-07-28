const app = require('express')();
const port = process.env.PORT || 8080;
const secret = '7PTHJIQWen0q84EGXQJdxGuz1BCU41qq';
const secret2 = 'password'
const { exec } = require('child_process');

var devices = [{
	name:'TV',
	mac:'30:a9:de:df:56:ca'
	},{
	name:'PC',
	mac:'60:45:cb:a1:dd:25'
	}]

function wake(mac){
	exec('wakeonlan '+mac, (err, stdout, stderr) => {
		if (err) {
		// node couldn't execute the command
		return {status:0,message:stderr}
		}
		// the *entire* stdout and stderr (buffered)
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
		return {status:1,message:stdout}});}

app.get('/', function (req, res) {
    res.send('Hello, This is an Encrypted API service');
});

app.get('/wake/1/:secret/:device', function (req, res) {
    
    let sec = req.params.secret,
		dev = req.params.device,
		mac = ' ';
    
	if(sec === secret){
		
		for(let i = 0; i<devices.length;i++){
			if(devices[i].name === dev){
					mac = devices[i].mac;
			}
		}
		if(mac != ' '){
			wake(mac);
			res.send('Kudos! Device: '+mac+'\nWoken');
		}else{
			res.send('Error! Device: '+dev+' cannnot be found');
			}
	}else{
		console.log('Secret Error');
		res.send('Secret Error');	
	}

});

app.get('/wake/2/:secret/:mac', function (req, res) {
    
    let sec = req.params.secret,
		mac = req.params.mac;

	if(sec === secret2){
		wake(mac);
		res.send('Kudos! Device: '+mac+'\nWoken')
	}else{
		console.log('Secret Error');
		res.send('Secret Error');	
	}
});


app.listen(port, function () {
   console.log('Device is ready to wake other devices!')
})
