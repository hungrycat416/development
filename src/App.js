import { useEffect, useState } from "react";
import MickeyItem from './components/MickeyItem';
// import mickeyData from './assets/mickey-data.json'
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";




function App() {
  const mickeyData =
    [
      {
        "name": "Holiday Sweater",
        "brandname": "Disney",
        "description": "Mickey Mouse and Friends Holiday Sweater for Adults",
        "price": 20.99,
        "type": "sweater",
        "image": "images/sweater1.png"
      },
      {
        "name": "Denim Pants",
        "brandname": "PacSun",
        "description": "Mickey Mouse and Pluto Relaxed Fit Denim Pants for Men",
        "price": 60.99,
        "type": "pants",
        "image": "images/pants1.png"
      },
      {
        "name": "T-shirt",
        "brandname": "Kohl's",
        "description": "Disney Mickey Mouse Classic Pose T-Shirt",
        "price": 2.99,
        "type": "shirt",
        "image": "images/shirt1.jpeg"
      },
      {
        "name": "Vintage Sweatshirt",
        "brandname": "Etsy",
        "description": "FIFTH SUN Mickey & Friend Vintage Sweatshirt",
        "price": 55.99,
        "type": "sweater",
        "image": "images/sweater2.png"
      },
      {
        "name": "Denim pants",
        "brandname": "Macy's",
        "description": " Mickey and Minnie Mouse Drawstring Denim Pants for Women by Our Universe",
        "price": 3.99,
        "type": "pants",
        "image": "images/pants2.png"
      },
      {
        "name": "Graphic T-Shirt",
        "brandname": "Disney",
        "description": "Disney Men's Mickey Mouse Vintage Scene Me Graphic T-Shirt",
        "price": 33.99,
        "type": "shirt",
        "image": "images/shirt2.jpg"
      },
      {
        "name": "knit sweater",
        "brandname": "Macy's",
        "description": "Mickey Mouse Pullover Knit Sweater for Adults",
        "price": 50.99,
        "type": "sweater",
        "image": "images/sweater3.png"
      },
      {
        "name": "sweatpants",
        "brandname": "Disney",
        "description": "Mickey Mouse Genuine Mousewear Sweatpants for Adults – Black",
        "price": 65.99,
        "type": "pants",
        "image": "images/pants3.png"
      },
      {
        "name": "T-shirt",
        "brandname": "Etsy",
        "description": "Disney Mickey Mouse and Friends T-Shirt",
        "price": 30.99,
        "type": "shirt",
        "image": "images/shirt3.jpeg"
      },
      {
        "name": "pullover sweatshirt",
        "brandname": "Macy's",
        "description": "Mickey Mouse Holiday Pullover Sweatshirt for Kids",
        "price": 70.99,
        "type": "sweater",
        "image": "images/sweater4.png"
      },
      {
        "name": "sweatpants",
        "brandname": "Disney",
        "description": "Mickey Mouse Genuine Mousewear Sweatpants for Adults – Blue",
        "price": 45.99,
        "type": "pants",
        "image": "images/pants4.png"
      },
      {
        "name": "Minnie portrait T-shirt",
        "brandname": "Etsy",
        "description": "Disney Mickey And Friends Minnie Mouse Classic Portrait T-Shirt",
        "price": 35.99,
        "type": "shirt",
        "image": "images/shirt4.jpeg"
      },
      {
        "name": "jerysey sweater",
        "brandname": "Kohl's",
        "description": "A Mickey Mouse Holiday Spirit Jersey Sweater for Kids",
        "price": 23.99,
        "type": "sweater",
        "image": "images/sweater5.png"
      },
      {
        "name": "twill jogger pants",
        "brandname": "PacSun",
        "description": "Disnet Mickey Mouse Embroidered twill jogger",
        "price": 40.99,
        "type": "pants",
        "image": "images/pants5.jpeg"
      },
      {
        "name": "Minnie and Daisy",
        "brandname": "Kohl's",
        "description": "Disney Minnie Mouse and Daisy Duck Best Friends T-Shirt",
        "price": 25.99,
        "type": "shirt",
        "image": "images/shirt5.jpeg"
      }
    ]
  var filtered_mickey_data = mickeyData
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");
  const [brands, setBrands] = useState("All");
  const [price, setPrices] = useState("All");

  const updatePrice = () => {
    let sum = 0;

    cart.forEach(i => sum += i.price);

    setTotal(sum);


  }
  useEffect(() => {
    updatePrice();
  })

  const selectFilterClothes = eventKey => {
    setType(eventKey);
  }
  const selectFilterBrands = eventKey => {
    setBrands(eventKey);
  }
  const selectSortType = eventKey => {
    setPrices(eventKey);
  }
  // filtering by type
  const matchesFilterType = item => {
    if (type === "All") {
      return true
    }
    else if (type === item.type) {
      return true
    }
    else {
      return false
    }
  }
  //filtering by brands
  const matchesFilterBrand = item => {
    if (brands === "All") {
      return true
    }
    else if (brands === item.brandname) {
      return true
    }
    else {
      return false
    }
  }
  //sorting by price (from low to high and high to low)

  if (price === "lowtohigh") { // Price: Low to High selected (sort from $ to $$$)
    filtered_mickey_data = filtered_mickey_data.sort((a, b) => {
      return a.price - b.price;
    })
  } else if (price === "hightolow") { // Price: High to Low selected (sort from $$$ to $)
    filtered_mickey_data = filtered_mickey_data.sort((a, b) => {
      return b.price - a.price;
    })
  }

  filtered_mickey_data = filtered_mickey_data.filter(matchesFilterType);
  filtered_mickey_data = filtered_mickey_data.filter(matchesFilterBrand);


  return (
    <div className="App">
      <h1>Mickey's Store</h1> {/* TODO: personalize your bakery (if you want) */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* filtering by type */}
            <Nav className="me-auto" onSelect={selectFilterClothes}>
              <NavDropdown title="Filter By Type" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="sweater">sweaters</NavDropdown.Item>
                <NavDropdown.Item eventKey="pants">pants</NavDropdown.Item>
                <NavDropdown.Item eventKey="shirt">shirts</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto" onSelect={selectFilterBrands}>
              <NavDropdown title="Filter By Brands" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="Disney">Disney</NavDropdown.Item>
                <NavDropdown.Item eventKey="PacSun">PacSun</NavDropdown.Item>
                <NavDropdown.Item eventKey="Macy's">Macy's</NavDropdown.Item>
                <NavDropdown.Item eventKey="Kohl's">Kohl's</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto" onSelect={selectSortType}>
              <NavDropdown title="Sort By" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="lowtohigh">Price: Low to High</NavDropdown.Item>
                <NavDropdown.Item eventKey="hightolow">Price: High to Low</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="flex-container">
        <div class="wrapper">
          {filtered_mickey_data.map((item, index) => (
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <MickeyItem item={item} key={index} cart={cart} updateCart={setCart} total={total} setTotal={setTotal} setClothes={setType} />
          ))}
        </div>
        <div class="cart">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {cart.map((e, i) => <p key={i}>{e.name}</p>)}
          <h4>Total: ${total}</h4>
        </div>
      </div>

    </div >

  );
}

export default App;
