window.addEventListener('load', () => {

    const app = Vue.createApp({
        data() {
            return {
                heroes: []
            }
        },
        created() {
            this.listHeroes();
        },
        methods: {
            listHeroes: async function(){
                const res = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=117d27d57efac682c626ef9bf2bb98dc&hash=b3f42ecebad378b2e1fa5d85d2fe166d');
                const data = await res.json();
                this.heroes = data.data.results;
                heroes = data.data.results;
                this.updateLocalStorage();
                console.log(data.data.results);
            },
            updateLocalStorage: function() {
                //localStorage.setItem('vue3.heroes'. JSON.stringify(this.heroes)); 
            }
        }
    })
    app.mount('#app');
})
