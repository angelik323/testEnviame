
values =  {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    2: {
        carrier: "CCH",
        service: "express",
    },
    3: {
        carrier: "CCH",
        service: "priority",
    },
    15: {
        carrier: "CHP",
        service: "nextday",
    },
    16: {
        carrier: "CHP",
        service: "sameday",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
};

let json = { 
    data: {
        BUIN: [
            {
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            },
            {
                limit: 2,
                over_carrier_service_id: 15,
                under_carrier_service_id: 15
            }
        ],
        LAJA: [
            {
                limit: 2,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },{
                limit: 5,
                over_carrier_service_id: 2,
                under_carrier_service_id: 2
            },{
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            }
        ],

        LEBU: [
            {
                limit: 2,
                over_carrier_service_id: 1,
                under_carrier_service_id: 1
            },{
                limit: 6,
                over_carrier_service_id: 3,
                under_carrier_service_id: 3
            },{
                limit: 5,
                over_carrier_service_id: 2,
                under_carrier_service_id: 2
            },{
                limit: 4,
                over_carrier_service_id: 16,
                under_carrier_service_id: 16
            }
        ],

        LOTA: [
            {
                limit: 2,
                over_carrier_service_id: 15,
                under_carrier_service_id: 15
            },{
                limit: 4,
                over_carrier_service_id: 16,
                under_carrier_service_id: 16
            },{
                limit: 1,
                over_carrier_service_id: 17,
                under_carrier_service_id: 17
            }
        ] 
    }
    }

let resp = {};

const seleccionarMayor = (data) => {
    let limit = 0;
    let over = 0;
    let under;
    for (elemento in data) {
        if (data[elemento].limit > limit) {
            limit = data[elemento].limit;
            over = data[elemento].over_carrier_service_id;
            under = data[elemento].under_carrier_service_id;
        }
    }

    return JSON.stringify({
           'limit': limit, 
           'over': {
                'carrier': values[over].carrier,
                'service': values[over].service,
                }, 
           'under':{
                'carrier': values[under].carrier,
                'service': values[under].service,
                },
        }); 
}

    
myJson = {};
let str = '';
for(elemento in json.data) {
   const indice = JSON.stringify(elemento);
   const e = seleccionarMayor(json.data[elemento]);
   str += `${indice}:${e},`;
}
str = '{' + str + '}';
console.log(str);
console.log(JSON.parse(str));