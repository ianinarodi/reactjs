import Item from "./Item";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <Item
        imgurl="https://cdn.pixabay.com/photo/2015/11/28/11/26/uk-1067140_960_720.jpg"
        title="Libro1"
        price={2500}/>
      
      <Item
        imgurl="https://media.istockphoto.com/vectors/learn-english-online-poster-flat-vector-template-vector-id1342273927?s=612x612"
        title="Curso1"
        price={30000}/>
    </div>
  );
}

export default ItemListContainer;