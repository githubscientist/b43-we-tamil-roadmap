// function App() {
//   const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

//   function createList(person, index, array){
//     return <li>{person}</li>;
//   }

//   // <li>'Creola Katherine Johnson: mathematician'</li>
//   let listItems = people.map(createList);


//   return (
//     <ul>
//       {people.map((person) => <li>{person}</li>)}
//     </ul>
//   );
// }

// export default App;

// import React from 'react';

// export const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];


// // filter only the chemists -> chemists
// let chemists = people.filter(person => {
//   return person.profession === 'chemist';
// });

// let listItems = chemists.map((person) => {
//   return <li key={person.id}>
//     <p>
//       <img 
//         src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
//         alt={person.name}
//       />
//       <b>{person.name}:</b>
//       {' ' + person.profession + " "}
//       known for {person.accomplishment}
//     </p>
//   </li>
// });

// function App() {
//   return (
//     <ul style={{ listStyleType: 'none' }}>{listItems}</ul>
//   )
// }

// export default App;

// conditional rendering

// import React from 'react';

// function Item({isPacked, name}) {
  // if (props.isPacked) {
  //   return <li>{ props.name } ✔</li>
  // } else {
  //   return <li>{ props.name }</li>
  // }
  // if (isPacked) {
  //   return null;
  // }
  // return <li>{name }</li>

  // return (
  //   <li>
  //     {isPacked ? name + '✔' : name }
  //   </li>
  // );

  // return (
  //   <li>
  //     {
  //       isPacked ? (
  //         <del>
  //           {name + '✔' }
  //         </del>
  //       ) : (
  //           name
  //       )
  //     }
  //   </li>
  // )

  // return (
  //   <li>
  //     {name} {isPacked && '✔'}
  //   </li>
  // );

//   let itemContent = name;

//   if (isPacked) {
//     itemContent = name + ' ✔';
//   }

//   return (
//     <li>
//       {itemContent}
//     </li>
//   )
// }

// function App() {
//   const data = [
//     {
//       isPacked: true,
//       name: "Space suit"
//     },
//     {
//       isPacked: true,
//       name: "Helmet with a golden leaf"
//     },
//     {
//       isPacked: false,
//       name: "Photo of Tam"
//     }
//   ];

//   return (
//     <section>
//       <h1>Sally Ride's Packing list</h1>
//       <ul>
//         <Item 
//           isPacked={data[0].isPacked}
//           name= {data[0].name}
//         />
//         <Item 
//           isPacked={data[1].isPacked}
//           name= {data[1].name}
//         />
//         <Item 
//           isPacked={data[2].isPacked}
//           name= {data[2].name}
//         />
//       </ul>
//     </section>
//   )
// }

// export default App;
// // ✔

// import React from 'react';

// function Button({message, children}) {
//   return (
//     <button onClick={() => console.log(message)}>
//       {children}
//     </button>
//   );
// }

// function App() {
//   // function handleClick() {
//   //   console.log('button clicked');
//   // }

//   // return (
//   //   // <button onClick={() => console.log('clicked')}>
//   //   //   Click Me!
//   //   // </button>

//   //   <button onClick={handleClick}>
//   //     Click Me!
//   //   </button>
//   // )
//   return (
//     <div>
//       <Button message='Playing'>Play Movie</Button>
//       <Button message='Uploading'>Upload Image</Button>
//       <Button message='Streaming'>
//         Stream Data
//       </Button>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// function ParentComponent(props) {
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <ParentComponent>
//       <p>Hello, World!</p>
//     </ParentComponent>
//   )
// }

// export default App;

// passing event handlers as props

// import React from 'react'

// function Button({onSmash, children}) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   )
// }

// function App() {
//   function handleClick() {
//     console.log('smashed');
//   }

//   return (
//     <Button onSmash={handleClick}>
//       Playing Movie
//     </Button>
//   )
// }

// export default App;

// import React from 'react'

// function App() {
//   return (
//     <div onClick={
//       (event) => {
//         alert('div clicked');
//       }
//     }>
//       <button onClick={
//         (event) => {
//           event.stopPropagation();
//           alert('button clicked');
//         }
//       }>
//         Play Movie
//       </button>
//     </div>
//   )
// }

// export default App;

import React from 'react'

function App() {
  console.log('loaded');
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      alert('form submitted');
    }}>
      <input placeholder='type something here...' />
      <button>
        Send
      </button>
    </form>
  )
}

export default App;