const emotion = "happy";

function EmotionMeter() {
    if ( emotion === "happy"){
        return <i class="fas fa-smile-beam"></i>
    } else if ( emotion === "sad") {
        return <i class="fas fa-sad-cry"></i>
    }
};

export default EmotionMeter;