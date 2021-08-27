export default function LoadingAnimation(){


    return (

                                svg#loading {
                                display: block;
                                margin: auto;
                                width: 20rem;
                                height: auto;
                            }
                                svg#loading #gradient > stop[offset="0%"] {
                                animation: gradient1 15s ease 0s infinite;
                            }
                                svg#loading #gradient > stop[offset="100%"] {
                                animation: gradient2 15s ease 0s infinite;
                            }
                                svg#loading .rect {
                                animation: slide 15s ease infinite;
                            }
                                svg#loading #rect1 {
                                animation - delay: 0s;
                            }
                                svg#loading #rect2 {
                                animation - delay: -2.14285714s;
                            }
                                svg#loading #rect3 {
                                animation - delay: -4.28571429s;
                            }
                                svg#loading #rect4 {
                                animation - delay: -6.42857143s;
                            }
                                svg#loading #rect5 {
                                animation - delay: -8.57142857s;
                            }
                                svg#loading #rect6 {
                                animation - delay: -10.71428571s;
                            }
                                svg#loading #rect7 {
                                animation - delay: -12.85714286s;
                            }

                            </style>
                            <script
                                src="./iframeConsoleRunner-7f4d47902dc785f30dedcac9c996b9f31d4dfcc33567cc48f0431bc918c2bf05.js.download"></script>
                            <script
                                src="./iframeRefreshCSS-e03f509ba0a671350b4b363ff105b2eb009850f34a2b4deaadaa63ed5d970b37.js.download"></script>
                            <script
                                src="./iframeRuntimeErrors-29f059e28a3c6d3878960591ef98b1e303c1fe1935197dae7797c017a3ca1e82.js.download"></script>
                        </head>
                        <body>
                        <svg id="loading" viewBox="0 0 100 80">
                            <defs>
                                <lineargradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#4383b8"></stop>
                                    <stop offset="100%" stop-color="#4aa06c"></stop>
                                </lineargradient>
                                <clippath id="rects">
                                    <rect className="rect" id="rect1" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect2" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect3" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect4" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect5" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect6" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                    <rect className="rect" id="rect7" x="0" y="0" width="30" height="30" rx="2"
                                          ry="2"></rect>
                                </clippath>
                            </defs>

                            <rect id="container" transform="translate(50) scale(0.707, 0.707) rotate(45)" x="0" y="0"
                                  width="100" height="100" fill="url(#gradient)" clip-path="url(#rects)">
                            </rect>
                        </svg>
    )
}
