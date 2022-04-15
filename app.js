const drums = new Howl({
        "src": [
          "./sounds/drums.webm"
        ],
        "sprite": {
          "BD-24b": [
            0,
            2266.689342403628
          ],
          "CCYM.3": [
            4000,
            6000
          ],
          "HTGreen_0002": [
            11000,
            5904.08163265306
          ],
          "LTSuperSoft_0002": [
            18000,
            5965.034013605443
          ],
          "RCStick.3": [
            25000,
            5000
          ],
          "RCSuperSoft_0002": [
            31000,
            10798.61678004535
          ]
        }
      });

      const drumSet = document.querySelector('.drums');
      console.log(drumSet)

      function playDrums(event) {
        if (event.target.classList.contains('pad')) {
          event.preventDefault();
          let soundToPlay = event.target.dataset.sound;
          drums.play(soundToPlay);

        }
      };

      function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
      // // this may not be necessary
      // setViewportHeight();
      // window.addEventListener('resize', () => {
      //   setTimeout(setViewportHeight, 100);
      // });

      drumSet.addEventListener('click', playDrums);
      drumSet.addEventListener('touchstart', playDrums);