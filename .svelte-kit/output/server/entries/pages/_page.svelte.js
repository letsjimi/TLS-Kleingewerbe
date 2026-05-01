import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as each, v as validate_component, k as add_attribute, e as escape, m as missing_component } from "../../chunks/ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.460.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes$1),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Arrow_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m5 12 7-7 7 7" }], ["path", { "d": "M12 19V5" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowUp = Arrow_up;
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "6" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "award" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Award$1 = Award;
const Badge_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "badge-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const BadgeCheck = Badge_check;
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronDown = Chevron_down;
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "facebook" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Facebook$1 = Facebook;
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart$1 = Heart;
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "instagram" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Instagram$1 = Instagram;
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail$1 = Mail;
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MapPin = Map_pin;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu$1 = Menu;
const Message_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "message-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MessageCircle = Message_circle;
const Music = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M9 18V5l12-2v13" }],
    ["circle", { "cx": "6", "cy": "18", "r": "3" }],
    ["circle", { "cx": "18", "cy": "16", "r": "3" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "music" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Music$1 = Music;
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "phone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Phone$1 = Phone;
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ],
    [
      "path",
      {
        "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "quote" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Quote$1 = Quote;
const Send = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { "d": "m21.854 2.147-10.94 10.939" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "send" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Send$1 = Send;
const Speaker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    ["path", { "d": "M12 6h.01" }],
    ["circle", { "cx": "12", "cy": "14", "r": "4" }],
    ["path", { "d": "M12 14h.01" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "speaker" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Speaker$1 = Speaker;
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star$1 = Star;
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "users" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Users$1 = Users;
const Zoom_in = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "16.65",
        "y1": "21",
        "y2": "16.65"
      }
    ],
    [
      "line",
      {
        "x1": "11",
        "x2": "11",
        "y1": "8",
        "y2": "14"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "14",
        "y1": "11",
        "y2": "11"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "zoom-in" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ZoomIn = Zoom_in;
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeSection = "hero";
  const navLinks = [
    { href: "#hero", label: "Start" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#galerie", label: "Galerie" },
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" }
  ];
  return `<nav class="fixed top-0 left-0 right-0 z-50 bg-tls-bg/80 backdrop-blur-md border-b border-white/5"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"> <a href="#hero" class="font-headline font-bold text-lg text-tls-text hover:text-tls-accent transition-colors" data-svelte-h="svelte-12ibocg">TLS</a>  <div class="hidden md:flex items-center gap-8">${each(navLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${"text-sm font-medium transition-colors " + escape(
      activeSection === link.href.slice(1) ? "text-tls-accent" : "text-tls-muted hover:text-tls-text",
      true
    )}">${escape(link.label)} </a>`;
  })} <a href="#kontakt" class="inline-flex items-center gap-2 px-4 py-2 bg-tls-accent text-tls-bg font-semibold text-sm rounded-lg hover:bg-tls-accent-hover transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tls-accent/25">${validate_component(Phone$1, "Phone").$$render($$result, { size: 16 }, {}, {})}
          Anfragen</a></div>  <button class="md:hidden p-2 text-tls-text hover:text-tls-accent transition-colors" aria-label="Menü öffnen">${`${validate_component(Menu$1, "Menu").$$render($$result, { size: 24 }, {}, {})}`}</button></div></div>  ${``}</nav>  <div class="h-16"></div>`;
});
const site = {
  name: "Timon Live Sound",
  claim: "Professionelle Tontechnik für dein Event",
  phone: "+49 000 00000000",
  email: "kontakt@timonlivesound.de",
  whatsapp: "+4900000000000"
};
const services = [
  {
    id: 1,
    icon: "Speaker",
    title: "Live Sound",
    description: "Mischpult-Abmischung für Konzerte, Club-Events und Live-Auftritte. Von der kleinen Bühne bis zum großen Saal."
  },
  {
    id: 2,
    icon: "Music",
    title: "Hochzeit & Firmenfeier",
    description: "Professionelle Beschallung für Hochzeiten, Gala-Abende und Firmenevents. Unauffällig, aber klanglich perfekt."
  },
  {
    id: 3,
    icon: "Heart",
    title: "Worship & Kirche",
    description: "Technische Begleitung für Gottesdienste, Worship-Abende und Gemeindefeste. Glaubwürdiger Sound für den Glauben."
  }
];
const gallery = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", category: "hochzeit", alt: "Hochzeit-Event Setup" },
  { id: 2, src: "https://picsum.photos/600/800?random=2", category: "firma", alt: "Firmenfeier Beleuchtung" },
  { id: 3, src: "https://picsum.photos/800/600?random=3", category: "worship", alt: "Worship-Abend Bühne" },
  { id: 4, src: "https://picsum.photos/600/600?random=4", category: "live", alt: "Live-Konzert Mischpult" },
  { id: 5, src: "https://picsum.photos/600/400?random=5", category: "hochzeit", alt: "Hochzeit Tanzfläche" },
  { id: 6, src: "https://picsum.photos/600/800?random=6", category: "firma", alt: "Firmen-Event Saal" },
  { id: 7, src: "https://picsum.photos/800/600?random=7", category: "worship", alt: "Gottesdienst Technik" },
  { id: 8, src: "https://picsum.photos/600/600?random=8", category: "live", alt: "Club-Event DJ" },
  { id: 9, src: "https://picsum.photos/600/400?random=9", category: "hochzeit", alt: "Brautpaar mit Band" },
  { id: 10, src: "https://picsum.photos/800/600?random=10", category: "live", alt: "Open-Air Bühne" },
  { id: 11, src: "https://picsum.photos/600/600?random=11", category: "worship", alt: "Jugendgottesdienst" },
  { id: 12, src: "https://picsum.photos/600/400?random=12", category: "firma", alt: "Weihnachtsfeier Setup" }
];
const about = {
  name: "Timon",
  bio: "Seit über 5 Jahren mische ich Live-Events vom intimen Club bis zur großen Hochzeit. Mit professionellem Equipment und Leidenschaft für perfekten Sound mache ich dein Event unvergesslich. Zuverlässig, unkompliziert, klanglich auf höchstem Niveau.",
  equipment: ["Yamaha M7CL", "Shure SM58 / Beta 58A", "Sennheiser e935", "dbx 266xs Compressor", "QSC K12.2"],
  badges: ["5 Jahre Erfahrung", "50+ Events", "Kleinunternehmer §19 UStG"]
};
const testimonials = [
  {
    id: 1,
    text: "Der Sound war perfekt — alle Gäste haben es gelobt! Timon hat die gesamte Technik unauffällig und professionell im Hintergrund gemanagt.",
    author: "Lisa & Marco",
    event: "Hochzeit, Juli 2024"
  },
  {
    id: 2,
    text: "Timon hat unsere Firmenfeier technisch perfekt begleitet. Von der Anlage bis zur Abmischung — alles lief reibungslos. Sehr zu empfehlen!",
    author: "Müller GmbH",
    event: "Firmenfeier, Dezember 2024"
  },
  {
    id: 3,
    text: "Professionell, zuverlässig und immer einen Schritt voraus. Der Klang in unserer Gemeinde hat sich spürbar verbessert.",
    author: "Pastor S.",
    event: "Worship-Abend, März 2025"
  }
];
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-10b38te-wave{0%,100%{transform:scaleY(0.3)}50%{transform:scaleY(1)}}.animate-wave.svelte-10b38te{animation:svelte-10b38te-wave 1.5s ease-in-out infinite}@keyframes svelte-10b38te-scroll-down{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:0.5}}.animate-scroll-down.svelte-10b38te{animation:svelte-10b38te-scroll-down 2s ease-in-out infinite}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="hero" class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-tls-bg via-[#0f0f1a] to-[#1a0a2e]"></div>  <div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"><div class="flex items-end gap-1 h-48">${each(Array(40), (_, i) => {
    return `<div class="w-1.5 bg-tls-accent rounded-full animate-wave svelte-10b38te" style="${"animation-delay: " + escape(i * 0.1, true) + "s; height: " + escape(Math.random() * 80 + 20, true) + "%;"}"></div>`;
  })}</div></div>  <div class="relative z-10 text-center px-4 max-w-4xl mx-auto"><p class="text-tls-accent font-medium tracking-widest text-sm uppercase mb-4" data-svelte-h="svelte-7wyvxg">Tontechnik &amp; Live Sound</p> <h1 class="font-headline font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-tls-text mb-6 leading-tight" data-svelte-h="svelte-jnk6vb">TIMON
      <br> <span class="text-tls-accent">LIVE</span> SOUND</h1> <p class="text-tls-muted text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light">${escape(site.claim)}</p> <a href="#kontakt" class="inline-flex items-center gap-3 px-8 py-4 bg-tls-accent text-tls-bg font-bold text-lg rounded-xl hover:bg-tls-accent-hover transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tls-accent/30">Jetzt anfragen
      ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "animate-bounce", size: 20 }, {}, {})}</a></div>  <div class="absolute bottom-8 left-1/2 -translate-x-1/2" data-svelte-h="svelte-u4vm1u"><div class="w-6 h-10 border-2 border-tls-muted/30 rounded-full flex justify-center pt-2"><div class="w-1.5 h-3 bg-tls-accent rounded-full animate-scroll-down svelte-10b38te"></div></div></div> </section>`;
});
const ScrollReveal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  return `<div class="${"transition-all duration-700 ease-out " + escape(
    "opacity-0 translate-y-8",
    true
  )}"${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconMap = { Speaker: Speaker$1, Music: Music$1, Heart: Heart$1 };
  return `<section id="leistungen" class="py-24 px-4">${validate_component(ScrollReveal, "ScrollReveal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="max-w-6xl mx-auto"><div class="text-center mb-16" data-svelte-h="svelte-1oyo2tc"><div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div> <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">Leistungen</h2> <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">Professionelle Tontechnik für jeden Anlass — maßgeschneidert und zuverlässig</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">${each(services, (service) => {
        return `<div class="group relative p-8 rounded-2xl bg-tls-card border border-white/5 hover:border-tls-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-tls-accent/10"><div class="mb-6"><div class="w-14 h-14 rounded-xl bg-tls-accent/10 flex items-center justify-center group-hover:bg-tls-accent/20 transition-colors">${validate_component(iconMap[service.icon] || missing_component, "svelte:component").$$render($$result, { class: "text-tls-accent", size: 28 }, {}, {})} </div></div> <h3 class="font-headline font-semibold text-xl text-tls-text mb-3">${escape(service.title)}</h3> <p class="text-tls-muted leading-relaxed">${escape(service.description)}</p> </div>`;
      })}</div></div>`;
    }
  })}</section>`;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredGallery;
  const categories = [
    { id: "alle", label: "Alle" },
    { id: "hochzeit", label: "Hochzeit" },
    { id: "firma", label: "Firmen" },
    { id: "worship", label: "Worship" },
    { id: "live", label: "Live" }
  ];
  let activeCategory = "alle";
  filteredGallery = gallery;
  return `<section id="galerie" class="py-24 px-4 bg-tls-card/50">${validate_component(ScrollReveal, "ScrollReveal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="max-w-7xl mx-auto"><div class="text-center mb-12" data-svelte-h="svelte-dvtfjd"><div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div> <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">Galerie</h2> <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">Einblicke in vergangene Events — von Hochzeiten bis Worship-Abenden</p></div> <div class="flex flex-wrap justify-center gap-2 mb-12">${each(categories, (cat) => {
        return `<button class="${"px-5 py-2 rounded-full text-sm font-medium transition-all " + escape(
          activeCategory === cat.id ? "bg-tls-accent text-tls-bg" : "bg-white/5 text-tls-muted hover:text-tls-text hover:bg-white/10",
          true
        )}">${escape(cat.label)} </button>`;
      })}</div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${each(filteredGallery, (image) => {
        return `<button class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-tls-bg text-left border-none p-0"${add_attribute("aria-label", image.alt, 0)}><img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-tls-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><div class="p-3 rounded-full bg-tls-accent/20">${validate_component(ZoomIn, "ZoomIn").$$render($$result, { class: "text-tls-accent", size: 24 }, {}, {})} </div></div> </button>`;
      })}</div></div>`;
    }
  })}</section> ${``}`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const badgeIcons = [Star$1, Users$1, Award$1];
  return `<section id="ueber-mich" class="py-24 px-4">${validate_component(ScrollReveal, "ScrollReveal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="max-w-6xl mx-auto"><div class="text-center mb-16" data-svelte-h="svelte-22g99e"><div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div> <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">Über mich</h2></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="relative"><div class="aspect-[3/4] max-w-md mx-auto rounded-2xl bg-gradient-to-br from-tls-card to-tls-bg border border-white/5 overflow-hidden"><div class="absolute inset-0 flex items-center justify-center"><div class="text-center"><div class="w-24 h-24 rounded-full bg-tls-accent/10 flex items-center justify-center mx-auto mb-4">${validate_component(BadgeCheck, "BadgeCheck").$$render($$result, { class: "text-tls-accent", size: 48 }, {}, {})}</div> <p class="text-tls-muted text-sm" data-svelte-h="svelte-6nkj50">Foto-Platzhalter</p> <p class="text-tls-muted text-xs mt-1" data-svelte-h="svelte-1fnjvxt">Eigenes Bild hier einfügen</p></div></div></div>  <div class="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-tls-accent/20 rounded-br-2xl"></div></div>  <div class="space-y-8"><div><h3 class="font-headline font-semibold text-2xl text-tls-text mb-4" data-svelte-h="svelte-630jzf">Hinter den Reglern</h3> <p class="text-tls-muted leading-relaxed text-lg">${escape(about.bio)}</p></div> <div><h4 class="font-headline font-medium text-lg text-tls-text mb-4" data-svelte-h="svelte-9dstc6">Equipment</h4> <ul class="space-y-2">${each(about.equipment, (item) => {
        return `<li class="flex items-center gap-3 text-tls-muted"><div class="w-1.5 h-1.5 rounded-full bg-tls-accent"></div> ${escape(item)} </li>`;
      })}</ul></div>  <div class="flex flex-wrap gap-3">${each(about.badges, (badge, i) => {
        return `<div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">${validate_component(badgeIcons[i % badgeIcons.length] || missing_component, "svelte:component").$$render($$result, { class: "text-tls-accent", size: 16 }, {}, {})} <span class="text-sm text-tls-text font-medium">${escape(badge)}</span> </div>`;
      })}</div></div></div></div>`;
    }
  })}</section>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="referenzen" class="py-24 px-4 bg-tls-card/50">${validate_component(ScrollReveal, "ScrollReveal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="max-w-6xl mx-auto"><div class="text-center mb-16" data-svelte-h="svelte-144aj3r"><div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div> <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">Das sagen Kunden</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">${each(testimonials, (t) => {
        return `<div class="relative p-8 rounded-2xl bg-tls-bg border border-white/5"> <div class="mb-6">${validate_component(Quote$1, "Quote").$$render($$result, { class: "text-tls-accent/30", size: 32 }, {}, {})}</div>  <div class="flex gap-1 mb-4">${each(Array(5), (_) => {
          return `${validate_component(Star$1, "Star").$$render(
            $$result,
            {
              class: "text-tls-accent fill-tls-accent",
              size: 16
            },
            {},
            {}
          )}`;
        })}</div>  <p class="text-tls-muted leading-relaxed mb-6">&quot;${escape(t.text)}&quot;</p>  <div class="border-t border-white/5 pt-4"><p class="font-medium text-tls-text">${escape(t.author)}</p> <p class="text-sm text-tls-muted">${escape(t.event)}</p></div> </div>`;
      })}</div></div>`;
    }
  })}</section>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="kontakt" class="py-24 px-4">${validate_component(ScrollReveal, "ScrollReveal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="max-w-6xl mx-auto"><div class="text-center mb-16" data-svelte-h="svelte-xbx2am"><div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div> <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">Kontakt</h2> <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">Lass uns über dein Event sprechen — ich freue mich auf deine Anfrage!</p></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div class="p-8 rounded-2xl bg-tls-card border border-white/5"><h3 class="font-headline font-semibold text-xl text-tls-text mb-6" data-svelte-h="svelte-14vxgae">Nachricht senden</h3> <form class="space-y-5"><div data-svelte-h="svelte-p08k26"><label class="block text-sm font-medium text-tls-muted mb-2" for="name">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors" placeholder="Dein Name"></div> <div data-svelte-h="svelte-1lr02uv"><label class="block text-sm font-medium text-tls-muted mb-2" for="email">E-Mail</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors" placeholder="deine@email.de"></div> <div data-svelte-h="svelte-6uoj1x"><label class="block text-sm font-medium text-tls-muted mb-2" for="message">Nachricht</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors resize-none" placeholder="Erzähl mir von deinem Event..."></textarea></div> <div class="pt-2"><button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-tls-accent text-tls-bg font-semibold rounded-xl hover:bg-tls-accent-hover transition-all hover:-translate-y-0.5">${validate_component(Send$1, "Send").$$render($$result, { size: 18 }, {}, {})}
                Absenden</button></div> <p class="text-xs text-tls-muted/60 text-center mt-4" data-svelte-h="svelte-1czb8bm">Das Formular ist aktuell dekorativ — bitte nutze direkt WhatsApp oder Telefon.</p></form></div>  <div class="space-y-6"><div class="p-8 rounded-2xl bg-tls-card border border-white/5"><h3 class="font-headline font-semibold text-xl text-tls-text mb-6" data-svelte-h="svelte-ggjfhd">Direkt kontaktieren</h3> <div class="space-y-4"> <a href="${"https://wa.me/" + escape(site.whatsapp.replace(/\+/g, ""), true)}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"><div class="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">${validate_component(MessageCircle, "MessageCircle").$$render($$result, { class: "text-[#25D366]", size: 24 }, {}, {})}</div> <div data-svelte-h="svelte-oydyop"><p class="font-medium text-tls-text">WhatsApp</p> <p class="text-sm text-tls-muted">Schnelle Antwort garantiert</p></div></a>  <a href="${"tel:" + escape(site.phone, true)}" class="flex items-center gap-4 p-4 rounded-xl bg-tls-accent/10 border border-tls-accent/20 hover:bg-tls-accent/20 transition-colors group"><div class="w-12 h-12 rounded-full bg-tls-accent/20 flex items-center justify-center group-hover:bg-tls-accent/30 transition-colors">${validate_component(Phone$1, "Phone").$$render($$result, { class: "text-tls-accent", size: 24 }, {}, {})}</div> <div><p class="font-medium text-tls-text" data-svelte-h="svelte-n9cr9c">Telefon</p> <p class="text-sm text-tls-muted">${escape(site.phone)}</p></div></a>  <a href="${"mailto:" + escape(site.email, true)}" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"><div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">${validate_component(Mail$1, "Mail").$$render($$result, { class: "text-tls-text", size: 24 }, {}, {})}</div> <div><p class="font-medium text-tls-text" data-svelte-h="svelte-n47fzs">E-Mail</p> <p class="text-sm text-tls-muted">${escape(site.email)}</p></div></a></div></div>  <div class="p-6 rounded-2xl bg-tls-card border border-white/5"><div class="flex items-start gap-4">${validate_component(MapPin, "MapPin").$$render(
        $$result,
        {
          class: "text-tls-accent shrink-0",
          size: 24
        },
        {},
        {}
      )} <div data-svelte-h="svelte-dz298r"><h4 class="font-medium text-tls-text mb-1">Einsatzgebiet</h4> <p class="text-sm text-tls-muted">Primär im Raum Nordrhein-Westfalen. Auch deutschlandweit auf Anfrage.</p></div></div></div></div></div></div>`;
    }
  })}</section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-12 px-4 border-t border-white/5 bg-tls-card/30"><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="text-center md:text-left"><p class="font-headline font-bold text-lg text-tls-text">${escape(site.name)}</p> <p class="text-sm text-tls-muted mt-1" data-svelte-h="svelte-19d4gya">Professionelle Tontechnik für dein Event</p></div>  <div class="flex items-center gap-6" data-svelte-h="svelte-1bib77p"><span class="text-sm text-tls-muted hover:text-tls-text transition-colors cursor-pointer">Impressum</span> <span class="text-sm text-tls-muted hover:text-tls-text transition-colors cursor-pointer">Datenschutz</span></div>  <div class="flex items-center gap-4"><span class="p-2 rounded-lg bg-white/5 text-tls-muted hover:text-tls-accent hover:bg-white/10 transition-all cursor-pointer">${validate_component(Instagram$1, "Instagram").$$render($$result, { size: 18 }, {}, {})}</span> <span class="p-2 rounded-lg bg-white/5 text-tls-muted hover:text-tls-accent hover:bg-white/10 transition-all cursor-pointer">${validate_component(Facebook$1, "Facebook").$$render($$result, { size: 18 }, {}, {})}</span> <a href="#hero" class="p-2 rounded-lg bg-tls-accent/10 text-tls-accent hover:bg-tls-accent/20 transition-all">${validate_component(ArrowUp, "ArrowUp").$$render($$result, { size: 18 }, {}, {})}</a></div></div> <div class="mt-8 pt-8 border-t border-white/5 text-center"><p class="text-sm text-tls-muted/60">© 2025 ${escape(site.name)} — Alle Rechte vorbehalten. Kleinunternehmer gem. § 19 UStG</p></div></div></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ntge5l_START -->${$$result.title = `<title>Timon Live Sound — Professionelle Tontechnik</title>`, ""}<meta name="description" content="Professionelle Tontechnik für Hochzeiten, Firmenfeiern, Worship-Events und Live-Konzerte. Timon Live Sound — dein Partner für perfekten Sound."><!-- HEAD_svelte-ntge5l_END -->`, ""} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
