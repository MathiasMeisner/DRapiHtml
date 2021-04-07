const baseuri = "https://math6799-drapi.azurewebsites.net/api/record/"

Vue.createApp({

    data() {

        return {
            record: [],
            message: "",
            // id: 0,
            // title: "",
            // artist: "",
            // duration: 0,
            // year: 0,
            
        }
    },

    methods: {
        async helperGetAndShow(url){
            try{
                const response = await axios.get(url)
                this.record = await response.data
            } catch (ex){
                alert(ex.message)
            }
        },

        getAllRecords(){
            this.helperGetAndShow(baseuri)
        }
    }


}).mount("#app")