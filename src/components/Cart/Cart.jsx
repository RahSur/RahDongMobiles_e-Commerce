import React from 'react'

import { Container, Button, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ( {cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } ) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in the Cart! Go start your shopping. 
            <Link to="/" className={classes.link}> Lets Add to cart</Link>!
         </Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map( (item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <CartItem item={item}  onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">SubTotal : { cart.subtotal.formatted_with_symbol } </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={Link} to="/checkout" >CheckOut</Button>
                </div>
        </div>
        </>
    )

    if(!cart.line_items) return "Loading... :)";

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart