const products = [
    {
    id: 1,
    title: "Inglés para negocios",
    price: 3500 ,
    stock: 10,
    Category: "Books",
    body: "Take your business to the next level by improving your accuracy and fluency as regards English language focused on business and convey professionalism in current business situations",
    thumbnail: "/images/book"
    }, 
    
    {
    id: 2,
    title: "Inglés general",
    price: 2500,
    stock: 8,
    category: "Books",
    body:  "Start familiarizing with the English language in the best possible way by addressing the most common mistakes beginners usually have and by overcoming various challenges in your written and spoken performance",
    thumbnail: "/images/book"
    
    }, 
    
    {
      id: 3,
     title:  "Inglés para viajes",
     price: 4500,
     stock: 15,
     category: "Books",
     body: "Feel confident during your trips around the globe whenever you encounter situations where you have to communicate with native English speakers in different countries by learning all the most frequent and common interactional language tools ",
     thumbnail:"/images/book"
     }, 
    
      {
      id: 4,
     title:  "Inglés para exámenes internacionales",
    price: 5000,
    stock: 5,
    category: "Books",
     body:  "If you are eager to pass international exams to live or study abroad, this book is perfect to fulfil those needs and prepare you to overcome exam situations that require specific strategies",
     thumbnail: "/images/book"
    },
   
    {
     id: 5,
     title:  "Inglés general para nivel BEGINNER"  ,
     price: 37500,
     stock: 4,
     category: "Courses" ,
     body: "Este es un curso para descagarte de forma online y aprender inglés con videos y actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno." ,
     thumbnail: "/images/course"
   },
      
       {
         id: 6,
        title: "Inglés general para nivel INTERMEDIATE" ,
       price: 45000,
       stock: 6,
       category: "Courses",
        body:  "Este es un curso para descagarte de forma online y aprender inglés con videos y    actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno. ",
        thumbnail: "/images/course"
       },
    
       {
        id: 7,
        title: "Inglés general para nivel ADVANCED" ,
       price: 58500,
       stock: 3,
       category: "Courses",
        body:  "Este es un curso para descagarte de forma online y aprender inglés con videos y actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno.",
        thumbnail: "/images/course"
       },
    ];

    export default function ItemList(categoryParam) {
      return new Promise ( (res) =>{
          if (categoryParam === undefined){
              setTimeout(() => {
                  res(products);
              }, 2000);
          } else {
              setTimeout(() => {
                  let filtrados = products.filter((item) => item.category === categoryParam)
                  res(filtrados);
              }, 2000);
          } 
      });
  }
  
  export function SingleItem(idParam) {
      return new Promise ((resolve, rejected) => {
          let product = products.find((p) => p.id === Number(idParam))
          if (product === undefined) rejected("Producto no existe")
          setTimeout(() => {
              resolve(product)
          }, 2000);
      })
  }