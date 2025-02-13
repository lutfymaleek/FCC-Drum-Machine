import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error)

        document.getElementById("display")!.innerText = clip.description
    }

    return (
        <button
        id={`drum-${audioClip.keyTrigger}`}
        className="drum-pad"
        onClick={() => playSound(audioClip)}
        >
            <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
            {audioClip.keyTrigger}
        </button>
    );
};

export default Drum;