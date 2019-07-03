import { User } from '@/model/user';
import { Item } from '@/model/item';

const defUsers: User[] = [
    {
        "id": 0,
        "firstName": "Shubham",
        "lastName": "Kumar",
        "email": "s@gmail.com",
        "password": "password"
    },
    {
        "id": 1,
        "firstName": "Vivek",
        "lastName": "Agarwal",
        "email": "v@gmail.com",
        "password": "password"
    }
]

const allItems: Item[] = [
    {
        "id": 0,
        "name": "One Plus Phone",
        "description": "Awesome Phone",
        "price": 22_450,
        "image": 'images/1_phone.jpg'
    },
    {
        "id": 1,
        "name": "Boss Headphone",
        "description": "This is a nice description",
        "price": 2_450,
        "image": 'images/2_headphone.jpg'
    },
    {
        "id": 2,
        "name": "WildHok Wallet",
        "description": "This is a nice description",
        "price": 450,
        "image": 'images/3_wallet.jpg'
    },
    {
        "id": 3,
        "name": "boat earphone",
        "description": "This is a nice description",
        "price": 1_250,
        "image": 'images/4_earphone.jpg'
    },
    {
        "id": 4,
        "name": "Full bass earphone",
        "description": "This is a nice description",
        "price": 3_450,
        "image": 'images/5_bass.jpg'
    },
    {
        "id": 5,
        "name": "Refined oil",
        "description": "This is a nice description",
        "price": 550,
        "image": 'images/6_presto.jpg'
    },
    {
        "id": 6,
        "name": "Trek bagpack",
        "description": "This is a nice description",
        "price": 22_450,
        "image": 'images/7_bagpack.jpg'
    },
    {
        "id": 7,
        "name": "Lenovo Phone",
        "description": "This is a nice description",
        "price": 13_450,
        "image": 'images/8_phone.jpg'
    },
    {
        "id": 8,
        "name": "HP speakers",
        "description": "This is a nice description",
        "price": 250,
        "image": 'images/9_hp.jpg'
    },
    {
        "id": 9,
        "name": "Great Mixer",
        "description": "This is a nice description",
        "price": 2450,
        "image": 'images/10_grinder.jpg'
    },
    {
        "id": 10,
        "name": "Strong hammer",
        "description": "This is a nice description",
        "price": 950,
        "image": 'images/11_hammer.jpg'
    },
    {
        "id": 11,
        "name": "High Quality Shampoo",
        "description": "This is a nice description",
        "price": 350,
        "image": 'images/12_shampoo.jpg'
    },
    {
        "id": 12,
        "name": "Red coloured t-shirt",
        "description": "This is a nice description",
        "price": 1450,
        "image": 'images/13_tshirt.jpg'
    },
    {
        "id": 13,
        "name": "Child Item",
        "description": "This is a nice description",
        "price": 2450,
        "image": 'images/14_first_library.jpg'
    },
    {
        "id": 14,
        "name": "Men wallet",
        "description": "This is a nice description",
        "price": 2020,
        "image": 'images/15_men_wallet.jpg'
    },
    {
        "id": 15,
        "name": "Awesome watch",
        "description": "This is a nice description",
        "price": 4050,
        "image": 'images/16_watch.jpg'
    },
    {
        "id": 16,
        "name": "Surf excel",
        "description": "This is a nice description",
        "price": 250,
        "image": 'images/17_surfexcel.jpg'
    },
    {
        "id": 17,
        "name": "Gym equipments",
        "description": "This is a nice description",
        "price": 5555,
        "image": 'images/18_gyme.jpg'
    },
    {
        "id": 18,
        "name": "Pampers",
        "description": "This is a nice description",
        "price": 450,
        "image": 'images/19_pampers.jpg'
    },
    {
        "id": 19,
        "name": "Healthy almonds",
        "description": "This is a nice description",
        "price": 22_450,
        "image": 'images/20_almonds.jpg'
    },
]

export { defUsers, allItems }