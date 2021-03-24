import { React, useState } from "react";
import "./styles.css";

export default function App() {
  const [cuisine, setCuisine] = useState("");

  const indiancuisine = {
    Popular: [
      {
        dishName: "Chicken Dum Biryani",
        description:
          "Made with basmati rice and meat and cooked with the dum pukht method. Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines",
        rating: "4.5/5"
      },
      {
        dishName: "Chole Bhature",
        description:
          "It is the unofficial dish of New Delhi. It is a concoction of spicy curried chickpeas (chole) and puffy fried white-flour bread (bhature), most often eaten together for breakfast and lunch.",
        rating: "4.5/5"
      },
      {
        dishName: "Idli-Sambhar",
        description:
          "It is a traditional breakfast in South Indian households. Idli is a savory cake. They are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. Sambar is a lentil-based vegetable stew or chowder based on a broth. They are frequently served with chutnies",
        rating: "4/5"
      },
      {
        dishName: "Pav Bhaji",
        description:
          "It is a fast food dish from Maharashtra. It consists of a vegetable curry (bhaji) served with a soft bread roll (pav).",
        rating: "4/5"
      },
      {
        dishName: "Dhokla",
        description:
          "It is a vegetarian food item that originates from Gujarat. It is made with gram flour and subsequently steamed. Dhokla can be eaten for breakfast, as the main course, as a side dish, or as a snack. It is often served with tamarind chutney or green coriander or mint chutney.",
        rating: "4/5"
      }
    ],
    "North Indian": [
      {
        dishName: "Butter Chicken",
        description:
          "Marinated overnight, the chicken is roasted and cooked in tomato puree, cream and masalas. A perfect dinner party recipe, this North-Indian style chicken recipe is made throughout the country with equal zest.",
        rating: "5/5"
      },
      {
        dishName: "Aloo Samosa",
        description:
          "A samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas etc.Samosa is an all time favorite tea time snack!",
        rating: "5/5"
      },
      {
        dishName: "Malai Kheer",
        description:
          "It is a perfect dessert after a filling meal.  Rice kheer made with condensed milk, khoya, cream and nuts. A bowl of kheer is the ultimate winner when it comes to Indian desserts. Be it a a festival, a celebration or just our taste buds craving a bowl of dessert delicacy.",
        rating: "5/5"
      },
      {
        dishName: "Dal-Baati-Churma",
        description:
          "It is a traditional Rajasthani treat. It is served with a spicy dal, the sweet churma along with deep fried crunchy baatis.",
        rating: "4/5"
      },
      {
        dishName: "Chaat",
        description:
          "Chaat refers to a delicious savoury snack. It is typically served at a road side food stall or food carts. Most chaats originated in parts of Uttar Pradesh. The chaat specialties vary from city to city. Some popular chaat items are Pani Puri, Aloo tikki, Dahi Vada and Sev Puri.",
        rating: "4/5"
      },
      {
        dishName: "Thekua",
        description:
          "It’s a popular dish in the regions of Bihar and Jharkhand. It is a revered prasad (offering to god) in the Chhath puja. It has been used as a sweet snack for centuries in these places. They are made of wheat flour, sugar or jaggery, and ghee.",
        rating: "4/5"
      }
    ],
    "South Indian": [
      {
        dishName: "Masala Dosa",
        description:
          "A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds.",
        rating: "5/5"
      },
      {
        dishName: "Appam",
        description:
          "Appam is a popular Indian bowl-shaped pancake made from a batter of rice flour and coconut milk. Typically consumed for breakfast or dinner, appam is most popular in Tamil Nadu, Sri Lanka, and Kerala, where it is culturally linked to the Syrian Christians called the Nasranis, who bake appam on a stone. ",
        rating: "4.5/5"
      },
      {
        dishName: "Upma",
        description:
          "Upma is a wholesome Indian dish made with dry semolina or rice flour, cooked into a thick porridge. Traditionally served hot for breakfast, its taste is slightly bland, so various nuts, beans, and spices such as turmeric and chiles are commonly added to the dish in order to improve its flavors. ",
        rating: "4.5/5"
      },
      {
        dishName: "Pulihora",
        description:
          "Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka. It consists of rice, turmeric, tamarind, curry leaves, coriander, ginger, and green chiles.",
        rating: "4/5"
      },
      {
        dishName: "Chicken Chettinad",
        description:
          "Full of flavour and bold masalas, this dish will floor your family and guests. A gorgeous melange of onions, tomatoes, cinnamon sticks, cloves, cumin, curry leaves and a rich coconut-y paste.",
        rating: "3.5/5"
      },
      {
        dishName: "Payasam",
        description:
          "A perfect south indian delicacy for the sweet tooth.Heard about happy endings? That's what this payasam is all about.A delicious rice and milk pudding with cashews and raisins.",
        rating: "3.5/5"
      }
    ]
  };

  const cuisineList = Object.keys(indiancuisine);

  const setSelectedCuisine = (cuisineSelected) => {
    setCuisine(cuisineSelected);
  };
  return (
    <div>
      <div className="header">
        <span>
          For The Love Of{" "}
          <strong>
            <u> Food </u>
          </strong>
        </span>
      </div>
      <div className="intro">
        <img
          src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg"
          className="image"
          alt=""
        />
        <div className="content">
          <p>
            Welcome to Indian Cuisine exploration journey.The cuisines in India
            are as diverse as its multi-ethnic culture. The exotic and the
            delicious dishes of India are marked by the subtle uses of spices
            and herbs. Every region has their own claim to fame dishes and
            different styles of cooking. The method of cooking, the flavor and
            their specialties change with the landscapes. This app will
            recommend the most popular Indian Dishes and although there are
            numerous cuisines based on region , we will be covering some of the
            famous cuisines in India.
          </p>
          <h2>Let's start our journey !</h2>
        </div>
      </div>
      <div className="maincontent">
        <div class="cuisineList">
          {cuisineList.map((cuisine) => (
            <button
              className="cuisineNames"
              key={cuisine}
              onClick={() => {
                setSelectedCuisine(cuisine);
              }}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
