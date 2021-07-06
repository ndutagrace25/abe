import React, { Component } from "react";
import { Navbar, Header, Content, Footer } from "../common";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/smsActions";
import { Link } from "react-router-dom";
import { data } from "./data";

class Layout extends Component {
  state = {
    text: "",
    data: [],
  };

  componentDidMount() {
    this.setState({
      data,
    });
  }

  search = (nameKey, myArray) => {
    return myArray.filter((data) =>
      data.name.toLowerCase().includes(nameKey.toLowerCase())
    );
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== "") {
      const resultObject = this.search(e.target.value, data);
      console.log(resultObject);
      this.setState({
        data: resultObject,
      });
    } else {
      this.setState({ data });
    }
  };

  render() {
    const { data, text } = this.state;

    const displayProduct =
      data instanceof Array
        ? data.map((product) => (
            <div
              key={product.id}
              className="shadow m-2 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-2 product d-flex align-items-center justify-content-center flex-column"
            >
              <img src={product.image} height="100" width="105" />
              <div className="mt-2 border-top col-md-12 d-flex justify-content-center align-items-center pt-1 flex-column">
                <span>{product.name}</span>
                <Link
                  className="btn btn-sm btn-success mt-2 product-bottom"
                  to={{
                    pathname: `/product/${product.name}`,
                    state: {
                      name: product.name,
                      image: product.image,
                      description: product.description,
                    },
                  }}
                >
                  Product Details
                </Link>
              </div>
            </div>
          ))
        : null;
    return (
      <React.Fragment>
        <Navbar onChange={this.onChange} name="text" value={text} />
        <Header />
        <Content title="Our Products" content={displayProduct} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(null, { sendMessage })(Layout);
