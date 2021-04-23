const prompt = require('prompt-sync')();
const cliProgress = require('cli-progress');
const chalk = require('chalk');
var fs = require('fs');
var setTitle = require('console-title');

setTitle('Facebook Hacking By . . .');
console.clear()

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

	const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

	bar1.start(100, 0);


	setTimeout(() => {

		bar1.update(3);

	}, 5000);


	setTimeout(() => {

		bar1.update(17);

	}, 10000);



	setTimeout(() => {

		bar1.update(35);

	}, 20000);



	setTimeout(() => {

		bar1.update(59);

	}, 50000);



	setTimeout(() => {

		bar1.update(73);

	}, 90000);



	setTimeout(() => {

		bar1.update(85);

	}, 300000);



	setTimeout(() => {

		bar1.update(91);

	}, 600000);


	setTimeout(() => {

		bar1.update(93);

	}, 900000);


	setTimeout(() => {

		bar1.update(95);

	}, 1200000);

	setTimeout(() => {

		bar1.update(99);

	}, 1210000);

	setTimeout(() => {

		bar1.update(100);
		
	}, 1212000);

	setTimeout(() => {


		var output = `
		⣠⡶⠚⠛⠲⢄⡀
		⣼⠁    ⠀⠀⠳⢤⣄
		⢿⠀⢧⡀⠀⠀⠀⠀⠀⢈⡇
		⠈⠳⣼⡙⠒⠶⠶⠖⠚⠉⠳⣄
		⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄
		⠀⠀⠀⠘⣆       ⠀⠀⠀⠈⠓⢦⣀
		⠀⠀⠀⠀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤
		⠀⠀⠀⠀⠀⠀⠙⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧
		⠀⠀⠀⠀⠀⠀⠀⡴⠋⠓⠦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠈⣇
		⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄ 
		⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
		⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃
		⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏
		⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⢦⣀⣀⣀⣀⣠⡴⠚⠁
		⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉
		`


		fs.appendFile('save.txt', output, function (err) {
			if (err) throw err;
			console.log('Save Password To save.txt');
		});

	}, 1215000);

}
