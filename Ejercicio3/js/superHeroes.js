window.addEventListener('load', () => {

    const app = Vue.createApp({
        data() {
            return {
                heroes: [],
                url: '',
                size: 'standard_large.jpg',
                filtro: '',
            }
        },
        created() {
            this.listHeroes();
        },
        methods: {
            listHeroes: async function(){
                const res = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=117d27d57efac682c626ef9bf2bb98dc&hash=b3f42ecebad378b2e1fa5d85d2fe166d&limit=100');
                const data = await res.json();
                this.heroes = data.data.results;
                heroes = data.data.results;
                this.updateLocalStorage();
                console.log(data.data.results);

                heroes.forEach((item) => {
                    this.heroes.push(item);
                    this.url = `${item.thumbnail.path}/${this.size}`

                    console.log(this.url);                    
                });
            },
            updateLocalStorage: function() {
                //localStorage.setItem('vue3.heroes'. JSON.stringify(this.heroes)); 
            },
            buscar(event) {
                alert("hola mundote");
            },
            
        },
        watch: {
            filtro: function (value) {
                console.log(value);
            }
        },

    })
    app.mount('#app');
})
