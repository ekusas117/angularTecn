import { createStore } from "redux";

const initialState = {
  players: [
    {
      name: "Luis Miguel Echeverry",
      id: 1,
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQF97a4E3jt30w/profile-displayphoto-shrink_200_200/0/1607454477933?e=1613001600&v=beta&t=LJMeLHTAiKXI1efZoJC4Wltx3OXBSHvtFlaWnHX1UTY",
    }, {
        name: "Luisa  Echeverry",
        id: 2,
        photo:
          "https://media-exp1.licdn.com/dms/image/C5603AQF97a4E3jt30w/profile-displayphoto-shrink_200_200/0/1607454477933?e=1613001600&v=beta&t=LJMeLHTAiKXI1efZoJC4Wltx3OXBSHvtFlaWnHX1UTY",
      },
  ],
  starting: [],
  substitute: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
