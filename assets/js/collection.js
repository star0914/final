  /*<![CDATA[*/
  (function() {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
          } else {
              loadScript();
          }
      } else {
          loadScript();
      }

      var is_cart = false;

      function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          is_cart = false;
          script.onload = ShopifyBuyInit;
      }


      function ShopifyBuyInit(is_cart) {
          var client = ShopifyBuy.buildClient({
              domain: 'tcb-management.myshopify.com',
              storefrontAccessToken: 'a1d1b537fe1ab7c3c1a4f093df1122ac',
          });
          ShopifyBuy.UI.onReady(client).then(function(ui) {
              ui.createComponent('collection', {
                  id: '203506417829',
                  node: document.getElementById('collection-component-1593554057594'),
                  moneyFormat: '%24%7B%7Bamount%7D%7D',
                  options: {
                      "product": {
                          "styles": {
                              "product": {
                                  "@media (min-width: 601px)": {
                                      "max-width": "calc(33.33333% - 30px)",
                                      "margin-left": "30px",
                                      "margin-bottom": "50px",
                                      "width": "calc(33.33333% - 30px)"
                                  },
                                  "img": {
                                      "height": "calc(100% - 15px)",
                                      "position": "absolute",
                                      "left": "0",
                                      "right": "0",
                                      "top": "0"
                                  },
                                  "imgWrapper": {
                                      "padding-top": "calc(75% + 15px)",
                                      "position": "relative",
                                      "height": "0"
                                  }
                              },
                              "title": {
                                  "color": "#ffffff"
                              },
                              "button": {
                                  "font-weight": "bold",
                                  ":hover": {
                                      "background-color": "#834ea3"
                                  },
                                  "background-color": "#9157b5",
                                  ":focus": {
                                      "background-color": "#834ea3"
                                  }
                              },
                              "price": {
                                  "font-weight": "bold",
                                  "color": "#ffffff"
                              },
                              "compareAt": {
                                  "font-weight": "bold",
                                  "color": "#ffffff"
                              },
                              "unitPrice": {
                                  "font-weight": "bold",
                                  "color": "#ffffff"
                              }
                          },
                          "contents": {
                              "button": false,
                              "buttonWithQuantity": true
                          },
                          "text": {
                              "button": "Add to cart"
                          }
                      },
                      "productSet": {
                          "styles": {
                              "products": {
                                  "@media (min-width: 601px)": {
                                      "margin-left": "-30px"
                                  }
                              }
                          }
                      },
                      "modalProduct": {
                          "contents": {
                              "img": false,
                              "imgWithCarousel": true,
                              "button": false,
                              "buttonWithQuantity": true
                          },
                          "styles": {
                              "product": {
                                  "@media (min-width: 601px)": {
                                      "max-width": "100%",
                                      "margin-left": "0px",
                                      "margin-bottom": "0px"
                                  }
                              },
                              "button": {
                                  "font-weight": "bold",
                                  ":hover": {
                                      "background-color": "#834ea3"
                                  },
                                  "background-color": "#9157b5",
                                  ":focus": {
                                      "background-color": "#834ea3"
                                  }
                              }
                          },
                          "text": {
                              "button": "Add to cart"
                          }
                      },
                      "option": {
                          "styles": {
                              "label": {
                                  "font-weight": "bold"
                              },
                              "select": {
                                  "font-weight": "bold"
                              }
                          }
                      },
                      "cart": {
                          "styles": {
                              "button": {
                                  "font-weight": "bold",
                                  ":hover": {
                                      "background-color": "#834ea3"
                                  },
                                  "background-color": "#9157b5",
                                  ":focus": {
                                      "background-color": "#834ea3"
                                  }
                              },
                              "cart": {
                                  "background-color": "#fdfdfd"
                              },
                              "footer": {
                                  "background-color": "#fdfdfd"
                              }
                          },
                          "text": {
                              "total": "Subtotal",
                              "button": "Checkout"
                          },
                          "contents": {
                              "note": true
                          }
                      },
                      "toggle": {
                          "styles": {
                              "toggle": {
                                  "font-weight": "bold",
                                  "background-color": "#9157b5",
                                  ":hover": {
                                      "background-color": "#834ea3"
                                  },
                                  ":focus": {
                                      "background-color": "#834ea3"
                                  }
                              }
                          }
                      }
                  },
              });
          });
      }
  })();
  /*]]>*/