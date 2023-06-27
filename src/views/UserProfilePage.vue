<template>
  <div><br>

    <v-row v-if="role != 'restaurant'">
      <v-col cols="10" offset="2">
        <Profile :user="user" style="width: 80%;"/>
      </v-col>
    </v-row>



    <v-row v-if="role === 'restaurant'">
      <v-col lg="4" offset="1">
        <Profile :user="user" />
      </v-col>
      <v-col lg="6">
        <RestaurantProfile :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

  
<script lang="ts">
import Profile from '../components/Profiles/Profile.vue'
import RestaurantProfile from '../components/Profiles/RestaurantProfile.vue'
  
  export default {
    components: {
      Profile,
      RestaurantProfile,
    },
    data() {
    return {
      role: 'restaurant', // Définissez le rôle sur 'client' pour les tests
      user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        addresses: [
          {
            name: 'Maison',
            address: '123 Rue de la Maison'
          },
          {
            name: 'Travail',
            address: '456 Rue du Travail'
          },
          // Ajoutez autant d'adresses que nécessaire
        ],
        birthdate: '1990-01-01',
        password: 'password123',
        restaurants: [
          {
            image: "https://images.midilibre.fr/api/v1/images/view/5b462d753e45466a4e3f50e1/large/image.jpg",
            name: "Kebab Du Seigneur",
            city: "Strasbourg",
            zipcode: 67000,
            adress: "test",
            rating: 4.6,
            schedule:{
              monday: "12:00-14:00, 17:00-22:00",
              tuesday: "12:00-14:00, 17:00-22:00",
              wednesday: "12:00-14:00, 17:00-22:00",
              thursday: "12:00-14:00, 17:00-22:00",
              friday: "12:00-14:00, 17:00-22:00",
              saturday: "12:00-14:00, 17:00-22:00",
              sunday: "12:00-14:00, 17:00-22:00",
            },
            products:[
              {
                idproduct: 1,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG",
                name: "Kebab Du chef",
                details: "Salade, Tomate, Oignon",
                price: 4.99,
                quantity: 0,
              },
              {
                idproduct: 2,
                image: "https://img.20mn.fr/-O8yW1U7RTe0-oPaWWNvtCk/1200x768_le-meilleur-kebab-de-france",
                name: "Kebab Du chef +",
                details: "Salade, Tomate, Oignon, pneu, huile, ciment, sable, gravier, verre",
                price: 5.99,
                quantity: 0,
              },
              {
                idproduct: 3,
                image: "https://img.cuisineaz.com/660x660/2021/07/11/i179649-tortilla-kebab.jpeg",
                name: "Youfka zebi",
                details: "Salade, Tomate, Oignon",
                price: 4.99,
                quantity: 0,
              },
              {
                idproduct: 4,
                image: "https://leschatsgourmets.com/wp-content/uploads/2022/07/les-chats-gourmets-brochette-kebab-boeuf.jpg",
                name: "brochetes d'animal",
                details: "biande d'animal avec ses herbes",
                price: 5.99,
                quantity: 0,
              },
              {
                idproduct: 5,
                image: "https://www.thuisbezorgd.nl/foodwiki//app/uploads/sites/24/2020/11/doner_kebab_2-1080x960.jpg",
                name: "Kebab Du chef ++++",
                details: "Salade, Tomate, Oignon",
                price: 12.99,
                quantity: 0,
              },
              {
                idproduct: 6,
                image: "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg",
                name: "Kebab rech sa mère",
                details: "c'est même pas un kebab mon couz: Salade, Tomate, Oignon, Salade, Tomate, Oignon",
                price: 25,
                quantity: 0,
              },
            ],
            menus:[
              {
                idmenu: 1,
                name: "Menu du seigneur",
                image: "https://www.lexpress.fr/resizer/vU4Z0EwWl0sXsTx-j11-TIes9c4=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/QZ5ODMVN6ZD4XN6OU2YMUBYW74.jpg",
                products: [
                  {
                    name: "Plat",
                    products: [
                      {
                        idproduct: 1,
                        pricemod: 1.5,
                      },
                      {
                        idproduct: 2,
                        pricemod: 2,
                      },
                      {
                        idproduct: 3,
                        pricemod: 1,
                      },
                    ]
                  },
                  {
                    name: "Deuxième plat",
                    products: [
                      {
                        idproduct: 1,
                        pricemod: 1.5,
                      },
                      {
                        idproduct: 2,
                        pricemod: 2,
                      },
                      {
                        idproduct: 3,
                        pricemod: 0,
                      },
                    ]
                  }
                ],
                details: "La base fréro",
                price: 10,
              },
            ],
          },
          {
            image: "https://mapio.net/images-p/35547871.jpg",
            name: "McDounald",
            city: "Ouganda",
            zipcode: 12345,
            adress: "test",
            rating: 12,
            schedule:{
              monday: "12:00-14:00, 17:00-22:00",
              tuesday: "12:00-14:00, 17:00-22:00",
              wednesday: "12:00-14:00, 17:00-22:00",
              thursday: "12:00-14:00, 17:00-22:00",
              friday: "12:00-14:00, 17:00-22:00",
              saturday: "12:00-14:00, 17:00-22:00",
              sunday: "12:00-14:00, 17:00-22:00",
            },
            products:[
              {
                idproduct: 1,
                image: "https://previews.123rf.com/images/ruslan_kokarev/ruslan_kokarev1210/ruslan_kokarev121000139/15913145-escalopes-de-poulet-l%C3%A9g%C3%A8rement-br%C3%BBl%C3%A9-sur-la-plaque.jpg",
                name: "9 Nuggets di poulet",
                details: "Ti con ou quoi ti sais pas ce que c'est di nuggets di pouli ???",
                price: 6.5,
                quantity: 0,
              },
              {
                idproduct: 2,
                image: "https://media.istockphoto.com/id/156024466/fr/photo/burnt-nuggets-de-poulet-sur-fond-en-bois.jpg?s=612x612&w=0&k=20&c=RW02Osf1tOF2HtO0l59Iq6VgEELR7pKhXzRKaUmdroA=",
                name: "Nuggets fond di friteuse",
                details: "Elles ont un peut cahud",
                price: 7,
                quantity: 0,
              },
            ],
            menus:[],
          },
          {
            image: "https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/ZLCWHTEO5RH57CBOFSBSPN24MA.jpg",
            name: "Kebab Whalla",
            city: "Ostwald",
            zipcode: 12345,
            adress: "test",
            rating: 3.2,
            schedule:{
              monday: "12:00-14:00, 17:00-22:00",
              tuesday: "12:00-14:00, 17:00-22:00",
              wednesday: "12:00-14:00, 17:00-22:00",
              thursday: "12:00-14:00, 17:00-22:00",
              friday: "12:00-14:00, 17:00-22:00",
              saturday: "12:00-14:00, 17:00-22:00",
              sunday: "12:00-14:00, 17:00-22:00",
            },
            products:[],
            menus:[],
          },
          {
            image: "https://pbs.twimg.com/media/CA9i4giWYAAS7rF.png",
            name: "Kebab Du Coin",
            city: "Strasbourg",
            zipcode: 12345,
            adress: "test",
            rating: 5,
            schedule:{
              monday: "12:00-14:00, 17:00-22:00",
              tuesday: "12:00-14:00, 17:00-22:00",
              wednesday: "12:00-14:00, 17:00-22:00",
              thursday: "12:00-14:00, 17:00-22:00",
              friday: "12:00-14:00, 17:00-22:00",
              saturday: "12:00-14:00, 17:00-22:00",
              sunday: "12:00-14:00, 17:00-22:00",
            },
            products:[],
            menus:[],
          },
        ]
      }
    }
  }




}
</script>

