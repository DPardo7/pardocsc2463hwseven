let initTone = true;
let pitch = 600

let osc = new Tone.AMOscillator(pitch, 'sine', 'sine').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.4,
  sustain: 1.0,
  release: 0.4
}).connect(pan);
osc.connect(ampEnv);

let noise = new Tone.Noise('pink').start();
let noiseEnv = new Tone.AmplitudeEnvelope({
  attack: 0.03,
  decay: 0.3,
  sustain: 1.0,
  release: 0.8
}).connect(gain);

let acFilter = new Tone.Filter(1000, "lowpass").connect(acEnv);
noise.connect(acFilter)

function setup() {
  createCanvas(2000, 300)
}

function draw() {
  background(900);

  if((frameCount % 60) === 0)
  {
    pitch;
  }

  text('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', 0, 210);
  text('After a long day in the heat...', 610, 225);
  text('press down here for a short burst of the AC in your car!', 540, 245);

}

function mousePressed() {
  console.log('pressed');

  ampEnv.triggerAttackRelease('8n');
  osc.frequency.setValueAtTime(pitch + 200, '+1');
  ampEnv.triggerAttackRelease('4n');
  drum.triggerAttackRelease(ac);

  if (mouseY > 200) {
    Env.triggerAttackRelease(0.5);
  }

}
