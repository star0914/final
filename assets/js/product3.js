(function () {
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
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'tcb-management.myshopify.com',
            storefrontAccessToken: 'a1d1b537fe1ab7c3c1a4f093df1122ac',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5354421452965',
                node: document.getElementById('product-component-1593803415904'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            "title": {
                                "font-size": "26px",
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
                                "font-size": "18px",
                                "color": "#ffffff"
                            },
                            "compareAt": {
                                "font-weight": "bold",
                                "font-size": "15.299999999999999px",
                                "color": "#ffffff"
                            },
                            "unitPrice": {
                                "font-weight": "bold",
                                "font-size": "15.299999999999999px",
                                "color": "#ffffff"
                            }
                        },
                        "layout": "horizontal",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true,
                            "description": true
                        },
                        "width": "100%",
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
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
        setTimeout(() => {
            showMdl(2);
            $(".FooterL").css({"display": "block"});
            $(".loading-icon").css({"display": "none"});
        }, 2000);
    }

})();
