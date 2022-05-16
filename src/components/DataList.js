function DataList(props) {
  const { dataType, data } = props;

  return (
    <>
      <h2>{dataType}</h2>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default DataList;

// Extension
// import { useState, useEffect } from 'react'

// function PeopleListItem({ person }) {
//   // state hook to manage the planet data
//   const [planet, setPlanet] = useState(null)
//   // effect hook to get planet data
//   useEffect(() => {
//     fetch(person.homeworld)
//       .then(res => res.json())
//       .then(data => setPlanet(data))
//   }, [])

//   return (
//     <li>
//       <h2>Name</h2>
//       <p>{person.name}</p>
//       { planet && (
//         <section>
//           <h2>Planet</h2>
//           <p>{planet.name}</p>
//         </section>
//       )}
//     </li>
//   );
// }

// export default PeopleListItem;
