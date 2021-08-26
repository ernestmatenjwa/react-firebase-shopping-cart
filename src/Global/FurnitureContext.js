import React, { createContext } from 'react'
import { db } from '../Config/Config'

export const FurnitureContext = createContext();

export class FurnitureContextProvider extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {

        const prevProducts = this.state.products;
        db.collection('Products').where("description","==", "Furniture").onSnapshot(snapshot => {
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
                this.setState({
                    products: prevProducts
                })
            })
        })

    }
    render() {
        return (
            <FurnitureContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </FurnitureContext.Provider>
        )
    }
}

