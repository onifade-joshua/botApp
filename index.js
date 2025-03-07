require("./index.css");
var $kLWFh$vue = require("vue");
var $kLWFh$axios = require("axios");
require("bootstrap/dist/css/bootstrap.min.css");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("4y64q", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $34ff0bd6d834172c$export$2e2bcd8739ae039);

var $8B5OM = parcelRequire("8B5OM");

var $9sU6y = parcelRequire("9sU6y");

var $hpC2C = parcelRequire("hpC2C");
var $34ff0bd6d834172c$export$2e2bcd8739ae039 = {
    components: {
        Adverts: $8B5OM.default,
        ChatBot: $9sU6y.default,
        AboutUs: $hpC2C.default
    },
    data () {
        return {
            currentView: "Adverts",
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu () {
            this.isMenuOpen = !this.isMenuOpen;
        },
        changeView (view) {
            this.currentView = view;
            this.isMenuOpen = false;
        }
    }
};

});
parcelRegister("8B5OM", function(module, exports) {

$parcel$export(module.exports, "default", () => $64264ac6a9fa1a9d$export$2e2bcd8739ae039);
let $64264ac6a9fa1a9d$var$script;




let $64264ac6a9fa1a9d$var$initialize = ()=>{
    $64264ac6a9fa1a9d$var$script = (parcelRequire("dxhOH"));
    if ($64264ac6a9fa1a9d$var$script.__esModule) $64264ac6a9fa1a9d$var$script = $64264ac6a9fa1a9d$var$script.default;
    $64264ac6a9fa1a9d$var$script.render = (parcelRequire("3TpDV")).render;
    $64264ac6a9fa1a9d$var$script.__cssModules = {};
    (parcelRequire("52QWp")).default($64264ac6a9fa1a9d$var$script);
    $64264ac6a9fa1a9d$var$script.__scopeId = 'data-v-60cbbb';
    $64264ac6a9fa1a9d$var$script.__file = "Adverts.vue";
};
$64264ac6a9fa1a9d$var$initialize();
var $64264ac6a9fa1a9d$export$2e2bcd8739ae039 = $64264ac6a9fa1a9d$var$script;

});
parcelRegister("dxhOH", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9dac2d7886ec7dfb$export$2e2bcd8739ae039);

var $2ILrh = parcelRequire("2ILrh");

var $if9e4 = parcelRequire("if9e4");

var $ahOHE = parcelRequire("ahOHE");
var $9dac2d7886ec7dfb$export$2e2bcd8739ae039 = {
    data () {
        return {
            adverts: [
                {
                    title: "Exclusive Discount - 50% Off!",
                    description: "Hurry up! Get 50% off on all items for a limited time.",
                    image: (0, (/*@__PURE__*/$parcel$interopDefault($2ILrh)))
                },
                {
                    title: "New Smartphone Launch!",
                    description: "Introducing the latest smartphone with advanced features.",
                    image: (0, (/*@__PURE__*/$parcel$interopDefault($if9e4)))
                },
                {
                    title: "Winter Collection Out Now!",
                    description: "Check out our trendy winter fashion at great prices.",
                    image: (0, (/*@__PURE__*/$parcel$interopDefault($ahOHE)))
                }
            ],
            newAdvert: {
                title: "",
                description: "",
                image: ""
            }
        };
    },
    methods: {
        addAdvert () {
            if (this.newAdvert.title && this.newAdvert.description && this.newAdvert.image) {
                this.adverts.unshift({
                    ...this.newAdvert
                });
                this.newAdvert = {
                    title: "",
                    description: "",
                    image: ""
                };
            }
        }
    }
};

});
parcelRegister("2ILrh", function(module, exports) {
module.exports = new URL("discount.78d3a436.jpg", "file:" + __filename).toString();

});

parcelRegister("if9e4", function(module, exports) {
module.exports = new URL("smartphone.5e4c296b.jpg", "file:" + __filename).toString();

});

parcelRegister("ahOHE", function(module, exports) {
module.exports = new URL("winterColl.eabe7337.jpg", "file:" + __filename).toString();

});


parcelRegister("3TpDV", function(module, exports) {

$parcel$export(module.exports, "render", () => $2d5a6654481fc54c$export$b3890eb0ae9dca99);

const $2d5a6654481fc54c$var$_hoisted_1 = {
    class: "container my-5"
};
const $2d5a6654481fc54c$var$_hoisted_2 = {
    class: "row"
};
const $2d5a6654481fc54c$var$_hoisted_3 = {
    class: "card"
};
const $2d5a6654481fc54c$var$_hoisted_4 = [
    "src"
];
const $2d5a6654481fc54c$var$_hoisted_5 = {
    class: "card-body"
};
const $2d5a6654481fc54c$var$_hoisted_6 = {
    class: "card-title"
};
const $2d5a6654481fc54c$var$_hoisted_7 = {
    class: "card-text"
};
const $2d5a6654481fc54c$var$_hoisted_8 = {
    class: "row mt-5"
};
const $2d5a6654481fc54c$var$_hoisted_9 = {
    class: "col-md-6 mx-auto"
};
const $2d5a6654481fc54c$var$_hoisted_10 = {
    class: "card p-3 mb-4 advert-form"
};
const $2d5a6654481fc54c$var$_hoisted_11 = {
    class: "mb-3"
};
const $2d5a6654481fc54c$var$_hoisted_12 = {
    class: "mb-3"
};
const $2d5a6654481fc54c$var$_hoisted_13 = {
    class: "mb-3"
};
function $2d5a6654481fc54c$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", $2d5a6654481fc54c$var$_hoisted_1, [
        _cache[9] || (_cache[9] = (0, $kLWFh$vue.createElementVNode)("h2", {
            class: "text-center text-primary"
        }, "Latest Adverts", -1)),
        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_2, [
            ((0, $kLWFh$vue.openBlock)(true), (0, $kLWFh$vue.createElementBlock)((0, $kLWFh$vue.Fragment), null, (0, $kLWFh$vue.renderList)($data.adverts, (ad, index)=>{
                return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", {
                    class: "col-md-4",
                    key: index
                }, [
                    (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_3, [
                        (0, $kLWFh$vue.createElementVNode)("img", {
                            src: ad.image,
                            class: "card-img-top",
                            alt: "Advert"
                        }, null, 8, $2d5a6654481fc54c$var$_hoisted_4),
                        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_5, [
                            (0, $kLWFh$vue.createElementVNode)("h5", $2d5a6654481fc54c$var$_hoisted_6, (0, $kLWFh$vue.toDisplayString)(ad.title), 1),
                            (0, $kLWFh$vue.createElementVNode)("p", $2d5a6654481fc54c$var$_hoisted_7, (0, $kLWFh$vue.toDisplayString)(ad.description), 1)
                        ])
                    ])
                ]);
            }), 128))
        ]),
        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_8, [
            (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_9, [
                (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_10, [
                    _cache[8] || (_cache[8] = (0, $kLWFh$vue.createElementVNode)("h4", {
                        class: "text-center"
                    }, "Add New Advert", -1)),
                    (0, $kLWFh$vue.createElementVNode)("form", {
                        onSubmit: _cache[3] || (_cache[3] = (0, $kLWFh$vue.withModifiers)((...args)=>$options.addAdvert && $options.addAdvert(...args), [
                            "prevent"
                        ]))
                    }, [
                        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_11, [
                            _cache[4] || (_cache[4] = (0, $kLWFh$vue.createElementVNode)("label", {
                                class: "form-label"
                            }, "Title:", -1)),
                            (0, $kLWFh$vue.withDirectives)((0, $kLWFh$vue.createElementVNode)("input", {
                                type: "text",
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$data.newAdvert.title = $event),
                                class: "form-control",
                                required: ""
                            }, null, 512), [
                                [
                                    (0, $kLWFh$vue.vModelText),
                                    $data.newAdvert.title
                                ]
                            ])
                        ]),
                        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_12, [
                            _cache[5] || (_cache[5] = (0, $kLWFh$vue.createElementVNode)("label", {
                                class: "form-label"
                            }, "Description:", -1)),
                            (0, $kLWFh$vue.withDirectives)((0, $kLWFh$vue.createElementVNode)("textarea", {
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$data.newAdvert.description = $event),
                                class: "form-control",
                                required: ""
                            }, null, 512), [
                                [
                                    (0, $kLWFh$vue.vModelText),
                                    $data.newAdvert.description
                                ]
                            ])
                        ]),
                        (0, $kLWFh$vue.createElementVNode)("div", $2d5a6654481fc54c$var$_hoisted_13, [
                            _cache[6] || (_cache[6] = (0, $kLWFh$vue.createElementVNode)("label", {
                                class: "form-label"
                            }, "Image URL:", -1)),
                            (0, $kLWFh$vue.withDirectives)((0, $kLWFh$vue.createElementVNode)("input", {
                                type: "text",
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event)=>$data.newAdvert.image = $event),
                                class: "form-control",
                                required: ""
                            }, null, 512), [
                                [
                                    (0, $kLWFh$vue.vModelText),
                                    $data.newAdvert.image
                                ]
                            ])
                        ]),
                        _cache[7] || (_cache[7] = (0, $kLWFh$vue.createElementVNode)("button", {
                            type: "submit",
                            class: "btn btn-primary w-100"
                        }, "Add Advert", -1))
                    ], 32)
                ])
            ])
        ])
    ]);
}

});

parcelRegister("52QWp", function(module, exports) {

$parcel$export(module.exports, "default", () => $3ac634a047f41b1c$export$2e2bcd8739ae039);
let $3ac634a047f41b1c$var$NOOP = ()=>{};
var $3ac634a047f41b1c$export$2e2bcd8739ae039 = (script)=>{};

});


parcelRegister("9sU6y", function(module, exports) {

$parcel$export(module.exports, "default", () => $6e423fd42cc6024e$export$2e2bcd8739ae039);
let $6e423fd42cc6024e$var$script;




let $6e423fd42cc6024e$var$initialize = ()=>{
    $6e423fd42cc6024e$var$script = (parcelRequire("cOI5Y"));
    if ($6e423fd42cc6024e$var$script.__esModule) $6e423fd42cc6024e$var$script = $6e423fd42cc6024e$var$script.default;
    $6e423fd42cc6024e$var$script.render = (parcelRequire("1Yj5w")).render;
    $6e423fd42cc6024e$var$script.__cssModules = {};
    (parcelRequire("l9pI3")).default($6e423fd42cc6024e$var$script);
    $6e423fd42cc6024e$var$script.__scopeId = 'data-v-15c301';
    $6e423fd42cc6024e$var$script.__file = "ChatBot.vue";
};
$6e423fd42cc6024e$var$initialize();
var $6e423fd42cc6024e$export$2e2bcd8739ae039 = $6e423fd42cc6024e$var$script;

});
parcelRegister("cOI5Y", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $954c5bf7a001446f$export$2e2bcd8739ae039);

var $954c5bf7a001446f$import_meta = Object.assign(Object.create(null), {
    url: "file:///src/components/ChatBot.vue"
});
var $954c5bf7a001446f$export$2e2bcd8739ae039 = {
    data () {
        return {
            userInput: "",
            messages: []
        };
    },
    methods: {
        async sendMessage () {
            if (this.userInput.trim() === "") return;
            this.messages.push({
                sender: "user",
                text: this.userInput
            });
            try {
                console.log("API Key:", $954c5bf7a001446f$import_meta.env.PARCEL_OPENAI_API_KEY);
                const response = await (0, ($parcel$interopDefault($kLWFh$axios))).post("https://api.openai.com/v1/chat/completions", {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content: this.userInput
                        }
                    ]
                }, {
                    headers: {
                        Authorization: `Bearer ${$954c5bf7a001446f$import_meta.env.PARCEL_OPENAI_API_KEY}`,
                        "Content-Type": "application/json"
                    }
                });
                const botReply = response.data.choices[0].message.content;
                this.messages.push({
                    sender: "bot",
                    text: botReply
                });
            } catch (error) {
                console.error("OpenAI API Error:", error.response ? error.response.data : error.message);
                this.messages.push({
                    sender: "bot",
                    text: "Sorry, I couldn't fetch a response."
                });
            }
            this.userInput = "";
        }
    }
};

});

parcelRegister("1Yj5w", function(module, exports) {

$parcel$export(module.exports, "render", () => $16fa338a0206ae38$export$b3890eb0ae9dca99);

const $16fa338a0206ae38$var$_hoisted_1 = {
    class: "container my-5"
};
const $16fa338a0206ae38$var$_hoisted_2 = {
    class: "chat-box border p-3"
};
const $16fa338a0206ae38$var$_hoisted_3 = {
    key: 0,
    class: "text-primary"
};
const $16fa338a0206ae38$var$_hoisted_4 = {
    key: 1,
    class: "text-danger"
};
const $16fa338a0206ae38$var$_hoisted_5 = {
    class: "input-container"
};
function $16fa338a0206ae38$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", $16fa338a0206ae38$var$_hoisted_1, [
        _cache[3] || (_cache[3] = (0, $kLWFh$vue.createElementVNode)("h2", {
            class: "text-center text-info"
        }, "AI Chatbot", -1)),
        (0, $kLWFh$vue.createElementVNode)("div", $16fa338a0206ae38$var$_hoisted_2, [
            ((0, $kLWFh$vue.openBlock)(true), (0, $kLWFh$vue.createElementBlock)((0, $kLWFh$vue.Fragment), null, (0, $kLWFh$vue.renderList)($data.messages, (msg, index)=>{
                return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", {
                    key: index,
                    class: "mb-2"
                }, [
                    msg.sender === 'user' ? ((0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("strong", $16fa338a0206ae38$var$_hoisted_3, "You: ")) : ((0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("strong", $16fa338a0206ae38$var$_hoisted_4, "Bot: ")),
                    (0, $kLWFh$vue.createElementVNode)("span", null, (0, $kLWFh$vue.toDisplayString)(msg.text), 1)
                ]);
            }), 128))
        ]),
        (0, $kLWFh$vue.createElementVNode)("div", $16fa338a0206ae38$var$_hoisted_5, [
            (0, $kLWFh$vue.withDirectives)((0, $kLWFh$vue.createElementVNode)("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$data.userInput = $event),
                class: "form-control",
                placeholder: "Ask me anything...",
                onKeyup: _cache[1] || (_cache[1] = (0, $kLWFh$vue.withKeys)((...args)=>$options.sendMessage && $options.sendMessage(...args), [
                    "enter"
                ]))
            }, null, 544), [
                [
                    (0, $kLWFh$vue.vModelText),
                    $data.userInput
                ]
            ]),
            (0, $kLWFh$vue.createElementVNode)("button", {
                class: "btn btn-success",
                onClick: _cache[2] || (_cache[2] = (...args)=>$options.sendMessage && $options.sendMessage(...args))
            }, "Send")
        ])
    ]);
}

});

parcelRegister("l9pI3", function(module, exports) {

$parcel$export(module.exports, "default", () => $f65e619d7348f380$export$2e2bcd8739ae039);
let $f65e619d7348f380$var$NOOP = ()=>{};
var $f65e619d7348f380$export$2e2bcd8739ae039 = (script)=>{};

});


parcelRegister("hpC2C", function(module, exports) {

$parcel$export(module.exports, "default", () => $cad247afa7a47c1c$export$2e2bcd8739ae039);
let $cad247afa7a47c1c$var$script;


let $cad247afa7a47c1c$var$initialize = ()=>{
    $cad247afa7a47c1c$var$script = {};
    $cad247afa7a47c1c$var$script.render = (parcelRequire("8mOZX")).render;
    (parcelRequire("jStTY")).default($cad247afa7a47c1c$var$script);
    $cad247afa7a47c1c$var$script.__scopeId = 'data-v-6f8382';
    $cad247afa7a47c1c$var$script.__file = "AboutUs.vue";
};
$cad247afa7a47c1c$var$initialize();
var $cad247afa7a47c1c$export$2e2bcd8739ae039 = $cad247afa7a47c1c$var$script;

});
parcelRegister("8mOZX", function(module, exports) {

$parcel$export(module.exports, "render", () => $6177effd85cccad3$export$b3890eb0ae9dca99);

const $6177effd85cccad3$var$_hoisted_1 = {
    class: "container my-5"
};
function $6177effd85cccad3$export$b3890eb0ae9dca99(_ctx, _cache) {
    return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", $6177effd85cccad3$var$_hoisted_1, _cache[0] || (_cache[0] = [
        (0, $kLWFh$vue.createElementVNode)("h2", {
            class: "text-center text-warning"
        }, "About Us", -1),
        (0, $kLWFh$vue.createElementVNode)("p", {
            class: "text-muted text-center"
        }, "We are a tech company dedicated to innovation and AI solutions.", -1)
    ]));
}

});

parcelRegister("jStTY", function(module, exports) {

$parcel$export(module.exports, "default", () => $e78a415455055434$export$2e2bcd8739ae039);
let $e78a415455055434$var$NOOP = ()=>{};
var $e78a415455055434$export$2e2bcd8739ae039 = (script)=>{};

});



parcelRegister("asRSA", function(module, exports) {

$parcel$export(module.exports, "render", () => $01f753dff44a36fb$export$b3890eb0ae9dca99);

const $01f753dff44a36fb$var$_hoisted_1 = {
    class: "navbar navbar-expand-lg navbar-dark bg-dark"
};
const $01f753dff44a36fb$var$_hoisted_2 = {
    class: "container"
};
const $01f753dff44a36fb$var$_hoisted_3 = {
    class: "navbar-nav ml-auto"
};
const $01f753dff44a36fb$var$_hoisted_4 = {
    class: "nav-item"
};
const $01f753dff44a36fb$var$_hoisted_5 = {
    class: "nav-item"
};
const $01f753dff44a36fb$var$_hoisted_6 = {
    class: "nav-item"
};
const $01f753dff44a36fb$var$_hoisted_7 = {
    class: "container mt-3"
};
function $01f753dff44a36fb$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createElementBlock)("div", null, [
        (0, $kLWFh$vue.createElementVNode)("nav", $01f753dff44a36fb$var$_hoisted_1, [
            (0, $kLWFh$vue.createElementVNode)("div", $01f753dff44a36fb$var$_hoisted_2, [
                _cache[5] || (_cache[5] = (0, $kLWFh$vue.createElementVNode)("a", {
                    class: "navbar-brand",
                    href: "#"
                }, "ChatBot", -1)),
                (0, $kLWFh$vue.createElementVNode)("button", {
                    class: "navbar-toggler",
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = (...args)=>$options.toggleMenu && $options.toggleMenu(...args))
                }, _cache[4] || (_cache[4] = [
                    (0, $kLWFh$vue.createElementVNode)("span", {
                        class: "navbar-toggler-icon"
                    }, null, -1)
                ])),
                (0, $kLWFh$vue.createElementVNode)("div", {
                    class: (0, $kLWFh$vue.normalizeClass)([
                        "collapse navbar-collapse",
                        {
                            'show': $data.isMenuOpen
                        }
                    ])
                }, [
                    (0, $kLWFh$vue.createElementVNode)("ul", $01f753dff44a36fb$var$_hoisted_3, [
                        (0, $kLWFh$vue.createElementVNode)("li", $01f753dff44a36fb$var$_hoisted_4, [
                            (0, $kLWFh$vue.createElementVNode)("a", {
                                class: "nav-link",
                                href: "#",
                                onClick: _cache[1] || (_cache[1] = (0, $kLWFh$vue.withModifiers)(($event)=>$options.changeView('Adverts'), [
                                    "prevent"
                                ]))
                            }, "Adverts")
                        ]),
                        (0, $kLWFh$vue.createElementVNode)("li", $01f753dff44a36fb$var$_hoisted_5, [
                            (0, $kLWFh$vue.createElementVNode)("a", {
                                class: "nav-link",
                                href: "#",
                                onClick: _cache[2] || (_cache[2] = (0, $kLWFh$vue.withModifiers)(($event)=>$options.changeView('ChatBot'), [
                                    "prevent"
                                ]))
                            }, "ChatBot")
                        ]),
                        (0, $kLWFh$vue.createElementVNode)("li", $01f753dff44a36fb$var$_hoisted_6, [
                            (0, $kLWFh$vue.createElementVNode)("a", {
                                class: "nav-link",
                                href: "#",
                                onClick: _cache[3] || (_cache[3] = (0, $kLWFh$vue.withModifiers)(($event)=>$options.changeView('AboutUs'), [
                                    "prevent"
                                ]))
                            }, "About Us")
                        ])
                    ])
                ], 2)
            ])
        ]),
        (0, $kLWFh$vue.createElementVNode)("div", $01f753dff44a36fb$var$_hoisted_7, [
            ((0, $kLWFh$vue.openBlock)(), (0, $kLWFh$vue.createBlock)((0, $kLWFh$vue.resolveDynamicComponent)($data.currentView)))
        ])
    ]);
}

});

parcelRegister("dF7ib", function(module, exports) {

$parcel$export(module.exports, "default", () => $9f24c2c671b17396$export$2e2bcd8739ae039);
let $9f24c2c671b17396$var$NOOP = ()=>{};
var $9f24c2c671b17396$export$2e2bcd8739ae039 = (script)=>{};

});


let $622b3ba819d084fb$var$script;




let $622b3ba819d084fb$var$initialize = ()=>{
    $622b3ba819d084fb$var$script = (parcelRequire("4y64q"));
    if ($622b3ba819d084fb$var$script.__esModule) $622b3ba819d084fb$var$script = $622b3ba819d084fb$var$script.default;
    $622b3ba819d084fb$var$script.render = (parcelRequire("asRSA")).render;
    $622b3ba819d084fb$var$script.__cssModules = {};
    (parcelRequire("dF7ib")).default($622b3ba819d084fb$var$script);
    $622b3ba819d084fb$var$script.__scopeId = 'data-v-c5a7e0';
    $622b3ba819d084fb$var$script.__file = "App.vue";
};
$622b3ba819d084fb$var$initialize();
var $622b3ba819d084fb$export$2e2bcd8739ae039 = $622b3ba819d084fb$var$script;



(0, $kLWFh$vue.createApp)((0, $622b3ba819d084fb$export$2e2bcd8739ae039)).mount('#app');


//# sourceMappingURL=index.js.map
