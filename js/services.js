angular.module('inspinia')
.service('Clients', serviceClients);


function serviceClients() {
    var items = [
        {
            id: 100,
            photo: '/img/a1.jpg',
            name: 'Carles',
            lastName: 'Fernández',
            comments: 'Baja de cuenta',
            date: '10/03/2016',
            time: '12:00 - 14:00',
            contact: '+376 660 822 143'
        },
        {
            id: 101,
            photo: '/img/a2.jpg',
            name: 'Marta',
            lastName: 'Forcadell',
            comments: 'Contratación de fondo',
            date: '11/03/2016',
            time: '09:00 - 11:00',
            contact: '+376 600 123 000'
        },
        {
            id: 102,
            photo: '/img/a3.jpg',
            name: 'Jordi',
            lastName: 'García',
            comments: 'Firma de documentación',
            date: '18/03/2016',
            time: '15:00 - 16:30',
            contact: 'jgarcia74@hotmail.com'
        },
        {
            id: 103,
            photo: '/img/a4.jpg',
            name: 'María',
            lastName: 'López',
            comments: 'Declaración de la renta',
            date: '19/03/2016',
            time: '10:00 - 11:30',
            contact: 'mlopez_s@hotmail.com'
        },
        {
            id: 104,
            photo: '/img/a5.jpg',
            name: 'Marta',
            lastName: 'Forcadell',
            comments: 'Contratación de fondo',
            date: '11/03/2016',
            time: '09:00 - 11:00',
            contact: '+376 600 123 000'
        },
        {
            id: 105,
            photo: '/img/a6.jpg',
            name: 'Carles',
            lastName: 'Fernández',
            comments: 'Baja de cuenta',
            date: '10/03/2016',
            time: '12:00 - 14:00',
            contact: '+376 660 822 143'
        },
        {
            id: 106,
            photo: '/img/a7.jpg',
            name: 'Marta',
            lastName: 'Forcadell',
            comments: 'Contratación de fondo',
            date: '11/03/2016',
            time: '09:00 - 11:00',
            contact: '+376 600 123 000'
        },
        {
            id: 107,
            photo: '/img/a3.jpg',
            name: 'Jordi',
            lastName: 'García',
            comments: 'Firma de documentación',
            date: '18/03/2016',
            time: '15:00 - 16:30',
            contact: 'jgarcia74@hotmail.com'
        },
        {
            id: 108,
            photo: '/img/a4.jpg',
            name: 'María',
            lastName: 'López',
            comments: 'Declaración de la renta',
            date: '19/03/2016',
            time: '10:00 - 11:30',
            contact: 'mlopez_s@hotmail.com'
        },
        {
            id: 109,
            photo: '/img/a5.jpg',
            name: 'Marta',
            lastName: 'Forcadell',
            comments: 'Contratación de fondo',
            date: '11/03/2016',
            time: '09:00 - 11:00',
            contact: '+376 600 123 000'
        },
    ];


    function getClients() {
        return items;
    }


    return {
        getAll: getClients
    };
}