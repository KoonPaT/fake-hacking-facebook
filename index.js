const prompt = require('prompt-sync')();
const chalk = require('chalk');
var setTitle = require('console-title');
var fs = require('fs');
setTitle('Facebook Hacking By . . .');
console.clear()


//By P H A T


console.log(chalk.red(`
	╔═╗╔═╗╔═╗╔═╗╔╗ ╔═╗╔═╗╦╔═
	╠╣ ╠═╣║  ║╣ ╠╩╗║ ║║ ║╠╩╗
	╚  ╩ ╩╚═╝╚═╝╚═╝╚═╝╚═╝╩ ╩
	╦ ╦╔═╗╔═╗╦╔═╦╔╗╔╔═╗     
	╠═╣╠═╣║  ╠╩╗║║║║║ ╦     	
	╩ ╩╩ ╩╚═╝╩ ╩╩╝╚╝╚═╝ 	By . . . 
	`));



let idfb = prompt(chalk.white('Enter Id Facebook: '));

if (idfb.length !== 15) {

	console.log(chalk.red("Id Facebook Not Correct"))

}else{

	main()

}

function main() {

	setTimeout(() => {

		console.log(chalk.yellow('Please Wait For Hacking!'));

	}, 5000);


	setTimeout(() => {

		console.log(chalk.yellow('Please Wait For Hacking!'));

	}, 10000);



	setTimeout(() => {

		console.log(chalk.yellow('Status : 19 %'))

	}, 20000);



	setTimeout(() => {

		console.log(chalk.yellow('Status : 19 %'))

	}, 50000);



	setTimeout(() => {

		console.log(chalk.yellow('Status : 51 %'))

	}, 90000);



	setTimeout(() => {

		console.log(chalk.yellow('Status : 84 %'))

	}, 300000);



	setTimeout(() => {

		console.log(chalk.yellow('Status : 99 %'))

	}, 600000);


	setTimeout(() => {

		console.log(chalk.yellow('Status : 99 %'))

	}, 900000);


	setTimeout(() => {

		console.log(chalk.yellow('Status : Password is ณncorrect Trying again'))

	}, 1200000);

	setTimeout(() => {

		console.log(chalk.yellow('Status : 100 %'))

	}, 1210000);



	setTimeout(() => {


		var output = `
		⣠⡶⠚⠛⠲⢄⡀
		⣼⠁    ⠀⠀⠳⢤⣄
		⢿⠀⢧⡀⠀⠀⠀⠀⠀⢈⡇
		⠈⠳⣼⡙⠒⠶⠶⠖⠚⠉⠳⣄
		⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀  ⠀⠈⠳⣄
		⠀⠀⠀⠘⣆        ⠀⠀⠀⠈⠓⢦⣀
		⠀⠀⠀⠀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠈⠙⠲⢤
		⠀⠀⠀⠀⠀⠀⠙⢦⣄⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠈⢧
		⠀⠀⠀⠀⠀⠀⠀⡴⠋⠓⠦⣤⡀⠀⠀⠀ ⠀⠀⠀⠀⠈⣇
		⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀ ⠀⠀⠀⢸⡄ 
		⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀ ⠀⠀⢸⡇
		⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⡄⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⢸⠃
		⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⣳⡀⠀⠀⠀⠀⠀⠀ ⠀⠀⣰⠏
		⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⢦⣀⣀⣀⣀⣠⡴⠚⠁
		⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉
		`

		fs.appendFile('save.txt', output, function (err) {
			if (err) throw err;
			console.log('Save Password To save.txt');
		});

	}, 1215000);

}
