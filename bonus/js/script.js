const {createApp} = Vue;

createApp({
    data(){
        return{
            thingToAdd : '',
            toDoList : []
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