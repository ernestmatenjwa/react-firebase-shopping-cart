import React from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { Searches } from './searches'

import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
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


export const Main = ({ user }) => {

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
  
/*
    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })*/
    /*const [documents, setDocuments] = React.useState([]);
    const [title, setTitle] = React.useState([]);

    React.useEffect(() => {
     console.log(title)
        db.collection("Products").where("title","==", "Fan")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() }) 
        );
        setDocuments(arr);
      }); 
  });
*/
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
       
            <TitleProvider />
            {/*<Searches />*/}
            <Products />
       
      </main>
    </div>
         {/*
        <div class="topnav">
           <div class="search-container">
             <form>
                <input type="text" placeholder="Search.." onChange={(e) => setTitle(e.target.value)} name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
             </form>
          </div>
        </div>
        
          documents.map((documents) => (
        <div className="tasks" key={documents.id}>
          <div >
          &nbsp;&nbsp;&nbsp;&nbsp;{documents.value.title}
          </div>
        </div>
           ))*/
           }
          
          
            </>

    
    )
}
//export const title = title
export default Main
