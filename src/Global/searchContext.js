import React, { createContext, useContext, useState } from 'react'
import { db } from '../Config/Config'
import { TitleProvider } from '../Components/title'
import { TitleContext } from '../Components/title'


export const SearchContext = createContext();

export const SearchContextProvider = props => {

   var searchTitle = useContext(TitleContext)
  
    const [products, setProducts] = useState([]);


    React.useEffect(() => {
        console.log(searchTitle)
        const prevProducts = products;
        db.collection('Products').where("title","==", "Fan").onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().title,
                        ProductPrice: change.doc.data().price,
                        ProductImg: change.doc.data().url
                    })
                }
                setProducts(prevProducts)
            })
        })

    })
        return (
            <TitleProvider>
                 <SearchContext.Provider value={{ products }}>
                {props.children}
            </SearchContext.Provider>
            </TitleProvider>
            
        )
    }

