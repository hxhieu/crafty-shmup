var Menu = function (root, close, indexChange) {
  var focusIndex = 0
  var buttons = []

  var addButton = function (btn, callback) {
    buttons.push({ ele: btn, action: callback })
  }

  var build = function () {
    root.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 27: {
          close()
        }
        case 38: {
          focusIndex--;
          if (focusIndex < 0) focusIndex = 0
          if (typeof (indexChange) === 'function')
            indexChange(focusIndex)
          break
        }
        case 40: {
          focusIndex++;
          if (focusIndex > buttons.length - 1) focusIndex = buttons.length - 1
          if (typeof (indexChange) === 'function')
            indexChange(focusIndex)
          break
        }
      }

      // Focus
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].ele.classList.remove('focused')
        if (i === focusIndex) {
          buttons[i].ele.classList.add('focused')
        }
      }

      // Enter press
      if (e.keyCode === 13) {
        buttons[focusIndex].action()
      }
    })
    root.focus()
  }

  return {
    addButton: addButton,
    build: build
  }
}
