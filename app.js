<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Particle Animation</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: #1a1a1a;
    }
    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>

  <div id="particles-js"></div>

  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#FFFFFF"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#FFFFFF"
            }
          },
          "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 6,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#FFFFFF",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 350,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 40,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 150
            },
            "push": {
              "particles_nb": 6
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  </script>
</body>
</html>
