import React, { createContext } from 'react'
import './main.css'
import { SearchContextProvider } from '../Global/searchContext'

export const TitleContext = createContext()

export const TitleProvider = props => {

const [title, setTitle] = React.useState([]);

    return (
<>
        <div class="topnav">
           <div class="search-container">
             <form>
                <input type="text" placeholder="Search.." onChange={(e) => setTitle(e.target.value)} value={title} name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
             </form>
          </div>
        </div>
        <TitleContext.Provider  value={{title}}>
           {props.children}
        </TitleContext.Provider>
   </>
           
    )
}

//export default Title
