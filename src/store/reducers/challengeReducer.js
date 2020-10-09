import image1 from '../../assets/sample/2.jpg';
import image2 from '../../assets/sample/3.jpg';
import image3 from '../../assets/sample/4.png';

const initState = {
  challenges: [
    {
      id: 1,
      title: "Random Quote Generator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image1,
      tags: ['HTML','CSS','JS']
    },
    {
      id: 2,
      title: "Movie App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image2,
      tags: ['HTML','CSS','JS','API']
    },
    {
      id: 3,
      title: "Meme Generator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image3,
      tags: ['HTML','CSS','JS','API']
    },
    {
      id: 4,
      title: "Random Quote Generator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image1,
      tags: ['HTML','CSS','JS']
    },
    {
      id: 5,
      title: "Movie App",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image2,
      tags: ['HTML','CSS','JS','API']
    },
    {
      id: 6,
      title: "Meme Generator",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora.",
      image: image3,
      tags: ['HTML','CSS','JS','API']
    }
  ]
}

const challengeReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case 'CREATE_PROJECT':
  //     console.log('create project', action.project);
  // }
  return state;
};

export default challengeReducer;