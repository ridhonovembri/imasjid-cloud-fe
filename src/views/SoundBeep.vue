<template>
    <div>
        test beep
        <input type="button" value="sound" @click="playMusic()" />

        
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        playMusic(){
            var music = new Audio('/assets/sounds/SoundsBeep.mp3');
            music.play();
            console.log('play beep')
        }
    }
}
</script>
<style>
    
</style>