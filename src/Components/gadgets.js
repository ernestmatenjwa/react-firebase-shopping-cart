import React, { useContext } from 'react'
import { GadgetsContext } from '../Global/GadgetsContext'
//import { CartContext } from '../Global/CartContext'
import './login.css'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'

//import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
//import { Car } from './car'

//import { useHistory } from 'react-router-dom'
//import { db } from '../Config/Config'
import './main.css'
import { TitleProvider } from '../Components/title'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Gadgets = ({user}) => {

const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const { products } = useContext(GadgetsContext);

    const { dispatch } = useContext(CartContext);

         //const history = useHistory();
    const { totalQty } = React.useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            //history.push('/login');
        })
    }

    return (
        <>
                        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <div >

            <div className='navbox' >
           
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {user && <div className='rightside' style={{marginLeft:1000}}>
                <span><Link to="/" className='navlink' style={{color:"blue"}}>logged</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon style={{width:30}}icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button style={{width:150, height:40, backgroundColor:"red"}} className='logout-btn' onClick={handleLogout}>Logout</button></span>
                
            </div>}
           
        </div>
        </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
            <ListItem>
              <button onClick={ event => window.location.href='/gadgets'}>GADGETS</button>
            </ListItem>
             <ListItem>
              <button onClick={event => window.location.href='/furniture'}>HOME FURNITURES</button>
            </ListItem>
              <ListItem>
              <button onClick={event => window.location.href='/other'}>OTHER ITEMS</button>
            </ListItem>
             <ListItem>
              <button onClick={event => window.location.href='/'}>RANDOM ITEMS</button>
            </ListItem>
        
        </List>
        <Divider />
     
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
            
       <div className="backgground">
       {products.length !== 0 }
            <div className='products-container' >
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price' >
                            R {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' style={{backgroundColor: "blue"}} onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
       </div>
       
      </main>
    </div>
           
        </>
    )
}
export default Gadgets;
