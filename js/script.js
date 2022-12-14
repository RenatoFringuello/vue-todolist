const {createApp} = Vue;

createApp({
    data(){
        return{
            thingToAdd : '', 
            toDoList : [
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:false},
                {text:'dnkejrvndjlsnevr', done:false},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:false},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:false},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:true},
                {text:'dnkejrvndjlsnevr', done:true},
            ]
        }
    },
    methods : {
        addItemInList(){
            if(this.thingToAdd !== '' && this.thingToAdd.length >= 2){
                this.toDoList.push({text: this.thingToAdd, done:false});
                this.thingToAdd = '';
            }
        },
        removeItemInList(index){
            this.toDoList.splice(index, 1);
        },
        toggleStrikeOff(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    }
}).mount('#app');