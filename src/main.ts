import * as Tone from "tone";

function squencer() {
	const kick = new Tone.Player(
		"../assets/sounds/drums/kick-electro01.wav"
	).toDestination();
	const snare = new Tone.Player(
		"../assets/sounds/drums/snare-electro.wav"
	).toDestination();
	let index = 0;
	const kickInputsNum = document.querySelectorAll(".kick input").length;
	const snareInputsNum = document.querySelectorAll(".snare input").length;
	Tone.Transport.scheduleRepeat(repeat, "8n");
	Tone.Transport.start();
	function repeat() {
        let step = index % kickInputsNum;
        let snareStep = index % snareInputsNum;
		let kickInput = document.querySelector(
			`.kick input:nth-child(${step+1})`
		);
		let snareInput = document.querySelector(
			`.snare input:nth-child(${snareStep +1})`
		);
		if (kickInput?.checked) {
			kick.start();
		}
		if (snareInput?.checked) {
			snare.start();
		}
		index++;
        // console.log(kickInput,step+1,index)
		// console.log("reapeated");
	}
	console.log("Squencer Ran");
}
squencer();
