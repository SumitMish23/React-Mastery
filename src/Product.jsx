
function Gallery([...props]){
console.log(props)
    return (
        <>
       
        <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
           src='https://picsum.photos/200/300'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          // src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
      </>
    )

}
export default function Product() {
    const data=[{name:'Maria Skłodowska-Curie',profession:'PHYSICIST AND CHEMIST',discovery:'POLONIUM (ELEMENT)'},
    {name:'Katsuko Saruhashi',profession:'GEOCHEMIST',discovery:'A METHOD FOR MEASURING CARBON DIOXIDE IN SEAWATER'}
]
    return (
      <div>
        <h1>Notable Scientists</h1>
       <Gallery props={data}/>
      </div>
    );
  }
  